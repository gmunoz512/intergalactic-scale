(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Gd={exports:{}},xl={};var sx;function ub(){if(sx)return xl;sx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return xl.Fragment=t,xl.jsx=i,xl.jsxs=i,xl}var ox;function cb(){return ox||(ox=1,Gd.exports=ub()),Gd.exports}var It=cb(),Vd={exports:{}},he={};var lx;function fb(){if(lx)return he;lx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.for("react.view_transition"),x=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function L(z,ht,wt){this.props=z,this.context=ht,this.refs=M,this.updater=wt||A}L.prototype.isReactComponent={},L.prototype.setState=function(z,ht){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ht,"setState")},L.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function I(){}I.prototype=L.prototype;function C(z,ht,wt){this.props=z,this.context=ht,this.refs=M,this.updater=wt||A}var U=C.prototype=new I;U.constructor=C,b(U,L.prototype),U.isPureReactComponent=!0;var D=Array.isArray;function N(){}var E={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function F(z,ht,wt){var K=wt.ref;return{$$typeof:o,type:z,key:ht,ref:K!==void 0?K:null,props:wt}}function G(z,ht){return F(z.type,ht,z.props)}function H(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function j(z){var ht={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(wt){return ht[wt]})}var Z=/\/+/g;function Q(z,ht){return typeof z=="object"&&z!==null&&z.key!=null?j(""+z.key):ht.toString(36)}function W(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(N,N):(z.status="pending",z.then(function(ht){z.status==="pending"&&(z.status="fulfilled",z.value=ht)},function(ht){z.status==="pending"&&(z.status="rejected",z.reason=ht)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function Y(z,ht,wt,K,ft){var Et=typeof z;(Et==="undefined"||Et==="boolean")&&(z=null);var Nt=!1;if(z===null)Nt=!0;else switch(Et){case"bigint":case"string":case"number":Nt=!0;break;case"object":switch(z.$$typeof){case o:case t:Nt=!0;break;case v:return Nt=z._init,Y(Nt(z._payload),ht,wt,K,ft)}}if(Nt)return ft=ft(z),Nt=K===""?"."+Q(z,0):K,D(ft)?(wt="",Nt!=null&&(wt=Nt.replace(Z,"$&/")+"/"),Y(ft,ht,wt,"",function(_e){return _e})):ft!=null&&(H(ft)&&(ft=G(ft,wt+(ft.key==null||z&&z.key===ft.key?"":(""+ft.key).replace(Z,"$&/")+"/")+Nt)),ht.push(ft)),1;Nt=0;var tt=K===""?".":K+":";if(D(z))for(var Ut=0;Ut<z.length;Ut++)K=z[Ut],Et=tt+Q(K,Ut),Nt+=Y(K,ht,wt,Et,ft);else if(Ut=y(z),typeof Ut=="function")for(z=Ut.call(z),Ut=0;!(K=z.next()).done;)K=K.value,Et=tt+Q(K,Ut++),Nt+=Y(K,ht,wt,Et,ft);else if(Et==="object"){if(typeof z.then=="function")return Y(W(z),ht,wt,K,ft);throw ht=String(z),Error("Objects are not valid as a React child (found: "+(ht==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ht)+"). If you meant to render a collection of children, use an array instead.")}return Nt}function lt(z,ht,wt){if(z==null)return z;var K=[],ft=0;return Y(z,K,"","",function(Et){return ht.call(wt,Et,ft++)}),K}function at(z){if(z._status===-1){var ht=z._result,wt=ht();wt.then(function(K){(z._status===0||z._status===-1)&&(z._status=1,z._result=K,wt.status===void 0&&(wt.status="fulfilled",wt.value=K))},function(K){(z._status===0||z._status===-1)&&(z._status=2,z._result=K,wt.status===void 0&&(wt.status="rejected",wt.reason=K))}),z._status===-1&&(z._status=0,z._result=wt)}if(z._status===1)return z._result.default;throw z._result}var mt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ht=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(ht))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function bt(z){var ht=E.T,wt={};wt.types=ht!==null?ht.types:null,E.T=wt;try{var K=z(),ft=E.S;ft!==null&&ft(wt,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(N,mt)}catch(Et){mt(Et)}finally{ht!==null&&wt.types!==null&&(ht.types=wt.types),E.T=ht}}function Kt(z){var ht=E.T;if(ht!==null){var wt=ht.types;wt===null?ht.types=[z]:wt.indexOf(z)===-1&&wt.push(z)}else bt(Kt.bind(null,z))}var _t={map:lt,forEach:function(z,ht,wt){lt(z,function(){ht.apply(this,arguments)},wt)},count:function(z){var ht=0;return lt(z,function(){ht++}),ht},toArray:function(z){return lt(z,function(ht){return ht})||[]},only:function(z){if(!H(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return he.Activity=_,he.Children=_t,he.Component=L,he.Fragment=i,he.Profiler=l,he.PureComponent=C,he.StrictMode=r,he.Suspense=p,he.ViewTransition=g,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,he.__COMPILER_RUNTIME={__proto__:null,c:function(z){return E.H.useMemoCache(z)}},he.addTransitionType=Kt,he.cache=function(z){return function(){return z.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(z,ht,wt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var K=b({},z.props),ft=z.key;if(ht!=null)for(Et in ht.key!==void 0&&(ft=""+ht.key),ht)!O.call(ht,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&ht.ref===void 0||(K[Et]=ht[Et]);var Et=arguments.length-2;if(Et===1)K.children=wt;else if(1<Et){for(var Nt=Array(Et),tt=0;tt<Et;tt++)Nt[tt]=arguments[tt+2];K.children=Nt}return F(z.type,ft,K)},he.createContext=function(z){return z={$$typeof:h,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:u,_context:z},z},he.createElement=function(z,ht,wt){var K,ft={},Et=null;if(ht!=null)for(K in ht.key!==void 0&&(Et=""+ht.key),ht)O.call(ht,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(ft[K]=ht[K]);var Nt=arguments.length-2;if(Nt===1)ft.children=wt;else if(1<Nt){for(var tt=Array(Nt),Ut=0;Ut<Nt;Ut++)tt[Ut]=arguments[Ut+2];ft.children=tt}if(z&&z.defaultProps)for(K in Nt=z.defaultProps,Nt)ft[K]===void 0&&(ft[K]=Nt[K]);return F(z,Et,ft)},he.createRef=function(){return{current:null}},he.forwardRef=function(z){return{$$typeof:d,render:z}},he.isValidElement=H,he.lazy=function(z){return{$$typeof:v,_payload:{_status:-1,_result:z},_init:at}},he.memo=function(z,ht){return{$$typeof:m,type:z,compare:ht===void 0?null:ht}},he.startTransition=bt,he.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},he.use=function(z){return E.H.use(z)},he.useActionState=function(z,ht,wt){return E.H.useActionState(z,ht,wt)},he.useCallback=function(z,ht){return E.H.useCallback(z,ht)},he.useContext=function(z){return E.H.useContext(z)},he.useDebugValue=function(){},he.useDeferredValue=function(z,ht){return E.H.useDeferredValue(z,ht)},he.useEffect=function(z,ht){return E.H.useEffect(z,ht)},he.useEffectEvent=function(z){return E.H.useEffectEvent(z)},he.useId=function(){return E.H.useId()},he.useImperativeHandle=function(z,ht,wt){return E.H.useImperativeHandle(z,ht,wt)},he.useInsertionEffect=function(z,ht){return E.H.useInsertionEffect(z,ht)},he.useLayoutEffect=function(z,ht){return E.H.useLayoutEffect(z,ht)},he.useMemo=function(z,ht){return E.H.useMemo(z,ht)},he.useOptimistic=function(z,ht){return E.H.useOptimistic(z,ht)},he.useReducer=function(z,ht,wt){return E.H.useReducer(z,ht,wt)},he.useRef=function(z){return E.H.useRef(z)},he.useState=function(z){return E.H.useState(z)},he.useSyncExternalStore=function(z,ht,wt){return E.H.useSyncExternalStore(z,ht,wt)},he.useTransition=function(){return E.H.useTransition()},he.version="19.3.0",he}var ux;function Lm(){return ux||(ux=1,Vd.exports=fb()),Vd.exports}var He=Lm(),kd={exports:{}},Sl={},Xd={exports:{}},qd={};var cx;function hb(){return cx||(cx=1,(function(o){function t(W,Y){var lt=W.length;W.push(Y);t:for(;0<lt;){var at=lt-1>>>1,mt=W[at];if(0<l(mt,Y))W[at]=Y,W[lt]=mt,lt=at;else break t}}function i(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var Y=W[0],lt=W.pop();if(lt!==Y){W[0]=lt;t:for(var at=0,mt=W.length,bt=mt>>>1;at<bt;){var Kt=2*(at+1)-1,_t=W[Kt],z=Kt+1,ht=W[z];if(0>l(_t,lt))z<mt&&0>l(ht,_t)?(W[at]=ht,W[z]=lt,at=z):(W[at]=_t,W[Kt]=lt,at=Kt);else if(z<mt&&0>l(ht,lt))W[at]=ht,W[z]=lt,at=z;else break t}}return Y}function l(W,Y){var lt=W.sortIndex-Y.sortIndex;return lt!==0?lt:W.id-Y.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],v=1,_=null,g=3,x=!1,y=!1,A=!1,b=!1,M=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function C(W){for(var Y=i(m);Y!==null;){if(Y.callback===null)r(m);else if(Y.startTime<=W)r(m),Y.sortIndex=Y.expirationTime,t(p,Y);else break;Y=i(m)}}function U(W){if(A=!1,C(W),!y)if(i(p)!==null)y=!0,D||(D=!0,H());else{var Y=i(m);Y!==null&&Q(U,Y.startTime-W)}}var D=!1,N=-1,E=5,O=-1;function F(){return b?!0:!(o.unstable_now()-O<E)}function G(){if(b=!1,D){var W=o.unstable_now();O=W;var Y=!0;try{t:{y=!1,A&&(A=!1,L(N),N=-1),x=!0;var lt=g;try{e:{for(C(W),_=i(p);_!==null&&!(_.expirationTime>W&&F());){var at=_.callback;if(typeof at=="function"){_.callback=null,g=_.priorityLevel;var mt=at(_.expirationTime<=W);if(W=o.unstable_now(),typeof mt=="function"){_.callback=mt,C(W),Y=!0;break e}_===i(p)&&r(p),C(W)}else r(p);_=i(p)}if(_!==null)Y=!0;else{var bt=i(m);bt!==null&&Q(U,bt.startTime-W),Y=!1}}break t}finally{_=null,g=lt,x=!1}Y=void 0}}finally{Y?H():D=!1}}}var H;if(typeof I=="function")H=function(){I(G)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Z=j.port2;j.port1.onmessage=G,H=function(){Z.postMessage(null)}}else H=function(){M(G,0)};function Q(W,Y){N=M(function(){W(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(W){W.callback=null},o.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<W?Math.floor(1e3/W):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(W){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var lt=g;g=Y;try{return W()}finally{g=lt}},o.unstable_requestPaint=function(){b=!0},o.unstable_runWithPriority=function(W,Y){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var lt=g;g=W;try{return Y()}finally{g=lt}},o.unstable_scheduleCallback=function(W,Y,lt){var at=o.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?at+lt:at):lt=at,W){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=lt+mt,W={id:v++,callback:Y,priorityLevel:W,startTime:lt,expirationTime:mt,sortIndex:-1},lt>at?(W.sortIndex=lt,t(m,W),i(p)===null&&W===i(m)&&(A?(L(N),N=-1):A=!0,Q(U,lt-at))):(W.sortIndex=mt,t(p,W),y||x||(y=!0,D||(D=!0,H()))),W},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(W){var Y=g;return function(){var lt=g;g=Y;try{return W.apply(this,arguments)}finally{g=lt}}}})(qd)),qd}var fx;function db(){return fx||(fx=1,Xd.exports=hb()),Xd.exports}var Wd={exports:{}},zn={};var hx;function pb(){if(hx)return zn;hx=1;var o=Lm();function t(v){var _="https://react.dev/errors/"+v;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)_+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+v+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,_,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:x===h?h:""+x,children:v,containerInfo:_,implementation:g}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,_){if(v==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,zn.browser=function(v){return{$$typeof:u,_reason:v}},zn.createPortal=function(v,_){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return d(v,_,null,g)},zn.flushSync=function(v){var _=p.T,g=r.p;try{if(p.T=null,r.p=2,v)return v()}finally{p.T=_,r.p=g,r.d.f()}},zn.preconnect=function(v,_){typeof v=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,r.d.C(v,_))},zn.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},zn.preinit=function(v,_){if(typeof v=="string"&&_&&typeof _.as=="string"){var g=_.as,x=m(g,_.crossOrigin),y=typeof _.integrity=="string"?_.integrity:void 0,A=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;g==="style"?r.d.S(v,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:A}):g==="script"&&r.d.X(v,{crossOrigin:x,integrity:y,fetchPriority:A,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},zn.preinitModule=function(v,_){if(typeof v=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var g=m(_.as,_.crossOrigin);r.d.M(v,{crossOrigin:g,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&r.d.M(v)},zn.preload=function(v,_){if(typeof v=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var g=_.as,x=m(g,_.crossOrigin);r.d.L(v,g,{crossOrigin:x,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},zn.preloadModule=function(v,_){if(typeof v=="string")if(_){var g=m(_.as,_.crossOrigin);r.d.m(v,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:g,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else r.d.m(v)},zn.requestFormReset=function(v){r.d.r(v)},zn.unstable_batchedUpdates=function(v,_){return v(_)},zn.useFormState=function(v,_,g){return p.H.useFormState(v,_,g)},zn.useFormStatus=function(){return p.H.useHostTransitionStatus()},zn.version="19.3.0",zn}var dx;function mb(){if(dx)return Wd.exports;dx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Wd.exports=pb(),Wd.exports}var px;function gb(){if(px)return Sl;px=1;var o=db(),t=Lm(),i=mb();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),e;if(f===s)return p(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,R=c.child;R;){if(R===a){S=!0,a=c,s=f;break}if(R===s){S=!0,s=c,a=f;break}R=R.sibling}if(!S){for(R=f.child;R;){if(R===a){S=!0,a=f,s=c;break}if(R===s){S=!0,s=f,a=c;break}R=R.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}function _(e,n,a,s,c,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,s,c,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&_(e.child,n,a,s,c,f))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function x(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function y(e){var n=[null,null],a=g(e);return a===null||A(n,e,a.child,{foundSelf:!1}),n}function A(e,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(e,n,a.child,s))return!0;a=a.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(r(559))}}var M=null,L=null;function I(e,n,a){return e===a?!0:e===n?(M=e,!0):!1}function C(e,n,a){return e===a?(L=e,!1):e===n?(L!==null&&(M=e),!0):!1}function U(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function D(e,n,a){for(var s=0,c=e;c;c=a(c))s++;c=0;for(var f=n;f;f=a(f))c++;for(;0<s-c;)e=a(e),s--;for(;0<c-s;)n=a(n),c--;for(;s--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var N=Object.assign,E=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),at=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),bt=Symbol.for("react.activity"),Kt=Symbol.for("react.legacy_hidden"),_t=Symbol.for("react.memo_cache_sentinel"),z=Symbol.for("react.view_transition"),ht=Symbol.for("react.recoverable"),wt=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=wt&&e[wt]||e["@@iterator"],typeof e=="function"?e:null)}var ft=Symbol.for("react.client.reference");function Et(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ft?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case j:return"Profiler";case H:return"StrictMode";case Y:return"Suspense";case lt:return"SuspenseList";case bt:return"Activity";case z:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case F:return"Portal";case Q:return e.displayName||"Context";case Z:return(e._context.displayName||"Context")+".Consumer";case W:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case at:return n=e.displayName||null,n!==null?n:Et(e.type)||"Memo";case mt:n=e._payload,e=e._init;try{return Et(e(n))}catch{}}return null}var Nt=Array.isArray,tt=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ut=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_e={pending:!1,data:null,method:null,action:null},oe=[],Tt=-1;function Dt(e){return{current:e}}function Rt(e){0>Tt||(e.current=oe[Tt],oe[Tt]=null,Tt--)}function $t(e,n){Tt++,oe[Tt]=e.current,e.current=n}var de=Dt(null),Me=Dt(null),ce=Dt(null),we=Dt(null);function q(e,n){switch($t(ce,n),$t(Me,e),$t(de,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?m_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=m_(n),e=g_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Rt(de),$t(de,e)}function Xe(){Rt(de),Rt(Me),Rt(ce)}function xe(e){var n=e.memoizedState;n!==null&&($s._currentValue=n.memoizedState,$t(we,e)),n=de.current;var a=g_(n,e.type);n!==a&&($t(Me,e),$t(de,a))}function P(e){Me.current===e&&(Rt(de),Rt(Me)),we.current===e&&(Rt(we),$s._currentValue=_e)}var T,et;function rt(e){if(T===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);T=n&&n[1]||"",et=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+T+e+et}var gt=!1;function At(e,n){if(!e||gt)return"";gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(Gt){var $=Gt}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(Gt){$=Gt}yt=!1;try{var ct=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),yt=!0,new e}finally{yt&&(ct!==void 0?Object.defineProperty(e.prototype,"props",ct):delete e.prototype.props)}}}else{try{throw Error()}catch(Gt){$=Gt}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(Gt){if(Gt&&$&&typeof Gt.stack=="string")return[Gt.stack,$.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],R=f[1];if(S&&R){var B=S.split(`
`),it=R.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<it.length&&!it[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===it.length)for(s=B.length-1,c=it.length-1;1<=s&&0<=c&&B[s]!==it[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==it[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==it[c]){var dt=`
`+B[s].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=s&&0<=c);break}}}finally{gt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?rt(a):""}function Lt(e,n){switch(e.tag){case 26:case 27:case 5:return rt(e.type);case 16:return rt("Lazy");case 13:return e.child!==n&&n!==null?rt("Suspense Fallback"):rt("Suspense");case 19:return rt("SuspenseList");case 0:case 15:return At(e.type,!1);case 11:return At(e.type.render,!1);case 1:return At(e.type,!0);case 31:return rt("Activity");case 30:return rt("ViewTransition");default:return""}}function vt(e){try{var n="",a=null;do n+=Lt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var xt=Object.prototype.hasOwnProperty,Ot=o.unstable_scheduleCallback,ne=o.unstable_cancelCallback,Bt=o.unstable_shouldYield,zt=o.unstable_requestPaint,Yt=o.unstable_now,se=o.unstable_getCurrentPriorityLevel,pe=o.unstable_ImmediatePriority,J=o.unstable_UserBlockingPriority,Pt=o.unstable_NormalPriority,Mt=o.unstable_LowPriority,Ft=o.unstable_IdlePriority,Wt=o.log,Ct=o.unstable_setDisableYieldValue,ie=null,qt=null;function ze(e){if(typeof Wt=="function"&&Ct(e),qt&&typeof qt.setStrictMode=="function")try{qt.setStrictMode(ie,e)}catch{}}var ge=Math.clz32?Math.clz32:gf,li=Math.log,yi=Math.LN2;function gf(e){return e>>>=0,e===0?32:31-(li(e)/yi|0)|0}var ms=256,Or=262144,Wa=4194304;function Sa(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pr(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var R=s&134217727;return R!==0?(s=R&~f,s!==0?c=Sa(s):(S&=R,S!==0?c=Sa(S):a||(a=R&~e,a!==0&&(c=Sa(a))))):(R=s&~f,R!==0?c=Sa(R):S!==0?c=Sa(S):a||(a=s&~e,a!==0&&(c=Sa(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ya(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ji(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var s=31-ge(a),c=1<<s;n|=e[s],a&=~c}return n}function To(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ao(){var e=Wa;return Wa<<=1,(Wa&62914560)===0&&(Wa=4194304),e}function gs(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ji(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Kl(e,n,a,s,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,B=e.expirationTimes,it=e.hiddenUpdates;for(a=S&~a;0<a;){var dt=31-ge(a),yt=1<<dt;R[dt]=0,B[dt]=-1;var $=it[dt];if($!==null)for(it[dt]=null,dt=0;dt<$.length;dt++){var ct=$[dt];ct!==null&&(ct.lane&=-536870913)}a&=~yt}s!==0&&zr(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function zr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-ge(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function wo(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-ge(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Ro(e,n){var a=n&-n;return a=(a&42)!==0?1:Co(a),(a&(e.suspendedLanes|n))!==0?0:a}function Co(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Do(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zl(){var e=Ut.p;return e!==0?e:(e=window.event,e===void 0?32:$_(e.type))}function Ql(e,n){var a=Ut.p;try{return Ut.p=e,n()}finally{Ut.p=a}}var Mi=Math.random().toString(36).slice(2),w="__reactFiber$"+Mi,V="__reactProps$"+Mi,pt="__reactContainer$"+Mi,ot="__reactEvents$"+Mi,ut="__reactListeners$"+Mi,Vt="__reactHandles$"+Mi,Zt="__reactResources$"+Mi,Ht="__reactMarker$"+Mi,jt="__reactLoad$"+Mi;function te(e){delete e[w],delete e[V],delete e[ut],delete e[Vt]}function fe(e){var n;if(n=e[w])return n;for(var a=e.parentNode;a;){if(n=a[pt]||a[w]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=L_(e);e!==null;){if(a=e[w])return a;e=L_(e)}return n}e=a,a=e.parentNode}return null}function ve(e){if(e=e[w]||e[pt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Qt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Re(e){var n=e[Zt];return n||(n=e[Zt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ee(e){e[Ht]=!0}function Je(e){e[jt]=void 0}var qe=new Set,yn={};function kt(e,n){cn(e,n),cn(e+"Capture",n)}function cn(e,n){for(yn[e]=n,e=0;e<n.length;e++)qe.add(n[e])}var Ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qn={},ui={};function $i(e){return xt.call(ui,e)?!0:xt.call(qn,e)?!1:Ie.test(e)?ui[e]=!0:(qn[e]=!0,!1)}var Te=!1;function Ve(){var e=Te;return Te=!1,e}function en(e,n,a){if($i(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function ci(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Ue(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,s)}}function fn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ya(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jl(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function vf(e){if(!e._valueTracker){var n=ya(e)?"checked":"value";e._valueTracker=Jl(e,n,""+e[n])}}function i0(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=ya(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}var Dy=/[\n"\\]/g;function bi(e){return e.replace(Dy,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function _f(e,n,a,s,c,f,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fn(n)):e.value!==""+fn(n)&&(e.value=""+fn(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?S==="number"&&e.value==n?xf(e,fn(e.value)):xf(e,fn(n)):a!=null?xf(e,fn(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+fn(R):e.removeAttribute("name")}function a0(e,n,a,s,c,f,S,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){vf(e);return}a=a!=null?""+fn(a):"",n=n!=null?""+fn(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=R?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),vf(e)}function xf(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function vs(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+fn(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function r0(e,n,a){if(n!=null&&(n=""+fn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+fn(a):""}function s0(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Nt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=fn(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),vf(e)}function _s(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ny=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function o0(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Ny.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function l0(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="",Te=!0);for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&(o0(e,c,s),Te=!0)}else for(var f in n)n.hasOwnProperty(f)&&o0(e,f,n[f])}function Sf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ly=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jl(e){return Ly.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ta(){}var yf=null;function Mf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xs=null,Ss=null;function u0(e){var n=ve(e);if(n&&(e=n.stateNode)){var a=e[V]||null;t:switch(e=n.stateNode,n.type){case"input":if(_f(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[V]||null;if(!c)throw Error(r(90));_f(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&i0(s)}break t;case"textarea":r0(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&vs(e,!!a.multiple,n,!1)}}}var bf=!1;function c0(e,n,a){if(bf)return e(n,a);bf=!0;try{var s=e(n);return s}finally{if(bf=!1,(xs!==null||Ss!==null)&&(ju(),xs&&(n=xs,e=Ss,Ss=xs=null,u0(n),e)))for(n=0;n<e.length;n++)u0(e[n])}}function No(e,n){var a=e.stateNode;if(a===null)return null;var s=a[V]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ef=!1;if(Ma)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){Ef=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{Ef=!1}var Ka=null,Tf=null,$l=null;function f0(){if($l)return $l;var e,n=Tf,a=n.length,s,c="value"in Ka?Ka.value:Ka.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return $l=c.slice(e,1<s?1-s:void 0)}function tu(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function eu(){return!0}function h0(){return!1}function Wn(e){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?eu:h0,this.isPropagationStopped=h0,this}return N(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=eu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=eu)},persist:function(){},isPersistent:eu}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nu=Wn(Za),Lo=N({},Za,{view:0,detail:0}),Oy=Wn(Lo),Af,wf,Oo,iu=N({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oo&&(Oo&&e.type==="mousemove"?(Af=e.screenX-Oo.screenX,wf=e.screenY-Oo.screenY):wf=Af=0,Oo=e),Af)},movementY:function(e){return"movementY"in e?e.movementY:wf}}),d0=Wn(iu),Py=N({},iu,{dataTransfer:0}),zy=Wn(Py),Iy=N({},Lo,{relatedTarget:0}),Rf=Wn(Iy),By=N({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),Fy=Wn(By),Hy=N({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gy=Wn(Hy),Vy=N({},Za,{data:0}),p0=Wn(Vy),ky={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=qy[e])?!!n[e]:!1}function Cf(){return Wy}var Yy=N({},Lo,{key:function(e){if(e.key){var n=ky[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=tu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cf,charCode:function(e){return e.type==="keypress"?tu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ky=Wn(Yy),Zy=N({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),m0=Wn(Zy),Qy=N({},Za,{submitter:0}),Jy=Wn(Qy),jy=N({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cf}),$y=Wn(jy),tM=N({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),eM=Wn(tM),nM=N({},iu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),iM=Wn(nM),aM=N({},Za,{newState:0,oldState:0,source:0}),rM=Wn(aM),sM=[9,13,27,32],Df=Ma&&"CompositionEvent"in window,Po=null;Ma&&"documentMode"in document&&(Po=document.documentMode);var oM=Ma&&"TextEvent"in window&&!Po,g0=Ma&&(!Df||Po&&8<Po&&11>=Po),v0=" ",_0=!1;function x0(e,n){switch(e){case"keyup":return sM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ys=!1;function lM(e,n){switch(e){case"compositionend":return S0(n);case"keypress":return n.which!==32?null:(_0=!0,v0);case"textInput":return e=n.data,e===v0&&_0?null:e;default:return null}}function uM(e,n){if(ys)return e==="compositionend"||!Df&&x0(e,n)?(e=f0(),$l=Tf=Ka=null,ys=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return g0&&n.locale!=="ko"?null:n.data;default:return null}}var cM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function y0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!cM[e.type]:n==="textarea"}function M0(e,n,a,s){xs?Ss?Ss.push(s):Ss=[s]:xs=s,n=ac(n,"onChange"),0<n.length&&(a=new nu("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var zo=null,Io=null;function fM(e){u_(e,0)}function au(e){var n=Qt(e);if(i0(n))return e}function b0(e,n){if(e==="change")return n}var E0=!1;if(Ma){var Nf;if(Ma){var Uf="oninput"in document;if(!Uf){var T0=document.createElement("div");T0.setAttribute("oninput","return;"),Uf=typeof T0.oninput=="function"}Nf=Uf}else Nf=!1;E0=Nf&&(!document.documentMode||9<document.documentMode)}function A0(){zo&&(zo.detachEvent("onpropertychange",w0),Io=zo=null)}function w0(e){if(e.propertyName==="value"&&au(Io)){var n=[];M0(n,Io,e,Mf(e)),c0(fM,n)}}function hM(e,n,a){e==="focusin"?(A0(),zo=n,Io=a,zo.attachEvent("onpropertychange",w0)):e==="focusout"&&A0()}function dM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return au(Io)}function pM(e,n){if(e==="click")return au(n)}function mM(e,n){if(e==="input"||e==="change")return au(n)}function gM(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var fi=typeof Object.is=="function"?Object.is:gM;function Bo(e,n){if(fi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!xt.call(n,c)||!fi(e[c],n[c]))return!1}return!0}function Lf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function R0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function C0(e,n){var a=R0(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=R0(a)}}function D0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?D0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function N0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Lf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Lf(e.document)}return n}function Of(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var vM=Ma&&"documentMode"in document&&11>=document.documentMode,Ms=null,Pf=null,Fo=null,zf=!1;function U0(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zf||Ms==null||Ms!==Lf(s)||(s=Ms,"selectionStart"in s&&Of(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Fo&&Bo(Fo,s)||(Fo=s,s=ac(Pf,"onSelect"),0<s.length&&(n=new nu("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Ms)))}function Ir(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var bs={animationend:Ir("Animation","AnimationEnd"),animationiteration:Ir("Animation","AnimationIteration"),animationstart:Ir("Animation","AnimationStart"),transitionrun:Ir("Transition","TransitionRun"),transitionstart:Ir("Transition","TransitionStart"),transitioncancel:Ir("Transition","TransitionCancel"),transitionend:Ir("Transition","TransitionEnd")},If={},L0={};Ma&&(L0=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Br(e){if(If[e])return If[e];if(!bs[e])return e;var n=bs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in L0)return If[e]=n[a];return e}var O0=Br("animationend"),P0=Br("animationiteration"),z0=Br("animationstart"),_M=Br("transitionrun"),xM=Br("transitionstart"),SM=Br("transitioncancel"),I0=Br("transitionend"),B0=new Map,Bf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bf.push("scrollEnd");function zi(e,n){B0.set(e,n),kt(n,[e])}var yM=0;function ba(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Hi.identifierPrefix;var a=yM++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function F0(e){if(e==null||typeof e=="string")return e;var n=null,a=ks;if(a!==null)for(var s=0;s<a.length;s++){var c=e[a[s]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function Ea(e,n){return e=F0(e),n=F0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var ru=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ei=[],Es=0,Ff=0;function su(){for(var e=Es,n=Ff=Es=0;n<e;){var a=Ei[n];Ei[n++]=null;var s=Ei[n];Ei[n++]=null;var c=Ei[n];Ei[n++]=null;var f=Ei[n];if(Ei[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&H0(a,c,f)}}function ou(e,n,a,s){Ei[Es++]=e,Ei[Es++]=n,Ei[Es++]=a,Ei[Es++]=s,Ff|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Hf(e,n,a,s){return ou(e,n,a,s),lu(e)}function Fr(e,n){return ou(e,null,null,n),lu(e)}function H0(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-ge(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function lu(e){if(50<ol)throw ol=0,Ju=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ts={};function MM(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,s){return new MM(e,n,a,s)}function Gf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ta(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function G0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function uu(e,n,a,s,c,f){var S=0;if(s=e,typeof s=="function")Gf(s)&&(S=1);else if(typeof s=="string")S=Q1(e,a,de.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(s){case bt:return e=jn(31,a,n,c),e.elementType=bt,e.lanes=f,e;case G:return Hr(a.children,c,f,n);case H:S=8,c|=24;break;case j:return e=jn(12,a,n,c|2),e.elementType=j,e.lanes=f,e;case Y:return e=jn(13,a,n,c),e.elementType=Y,e.lanes=f,e;case lt:return e=jn(19,a,n,c),e.elementType=lt,e.lanes=f,e;case Kt:case z:return e=c|32,e=jn(30,a,n,e),e.elementType=z,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case Q:S=10;break t;case Z:S=9;break t;case W:S=11;break t;case at:S=14;break t;case mt:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=jn(S,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function Hr(e,n,a,s){return e=jn(7,e,s,n),e.lanes=a,e}function Vf(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function V0(e){var n=jn(18,null,null,0);return n.stateNode=e,n}function kf(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var k0=new WeakMap;function Ti(e,n){if(typeof e=="object"&&e!==null){var a=k0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:vt(n)},k0.set(e,n),n)}return{value:e,source:n,stack:vt(n)}}var As=[],ws=0,cu=null,Ho=0,Ai=[],wi=0,Qa=null,ea=1,na="";function Aa(e,n){As[ws++]=Ho,As[ws++]=cu,cu=e,Ho=n}function X0(e,n,a){Ai[wi++]=ea,Ai[wi++]=na,Ai[wi++]=Qa,Qa=e;var s=ea;e=na;var c=32-ge(s)-1;s&=~(1<<c),a+=1;var f=32-ge(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,ea=1<<32-ge(n)+c|a<<c|s,na=f+e}else ea=1<<f|a<<c|s,na=e}function fu(e){e.return!==null&&(Aa(e,1),X0(e,1,0))}function Xf(e){for(;e===cu;)cu=As[--ws],As[ws]=null,Ho=As[--ws],As[ws]=null;for(;e===Qa;)Qa=Ai[--wi],Ai[wi]=null,na=Ai[--wi],Ai[wi]=null,ea=Ai[--wi],Ai[wi]=null}function q0(e,n){Ai[wi++]=ea,Ai[wi++]=na,Ai[wi++]=Qa,ea=n.id,na=n.overflow,Qa=e}var An=null,nn=null,Ae=!1,Ja=null,Ri=!1,qf=Error(r(519));function ja(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Go(Ti(n,e)),qf}function W0(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[w]=e,n[V]=s,a){case"dialog":De("cancel",n),De("close",n);break;case"iframe":case"object":case"embed":De("load",n);break;case"video":case"audio":for(a=0;a<ul.length;a++)De(ul[a],n);break;case"source":De("error",n);break;case"img":case"image":case"link":De("error",n),De("load",n);break;case"details":De("toggle",n);break;case"input":De("invalid",n),a0(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":De("invalid",n);break;case"textarea":De("invalid",n),s0(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||d_(n.textContent,a)?(s.popover!=null&&(De("beforetoggle",n),De("toggle",n)),s.onScroll!=null&&De("scroll",n),s.onScrollEnd!=null&&De("scrollend",n),s.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||ja(e,!0)}function hu(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:An=An.return}}function Rs(e){if(e!==An)return!1;if(!Ae)return hu(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||yd(e.type,e.memoizedProps)),a=!a),a&&nn&&ja(e),hu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));nn=U_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));nn=U_(e)}else n===27?(n=nn,pr(e.type)?(e=Dd,Dd=null,nn=e):nn=n):nn=An?Di(e.stateNode.nextSibling):null;return!0}function Gr(){nn=An=null,Ae=!1}function Wf(){var e=Ja;return e!==null&&(ei===null?ei=e:ei.push.apply(ei,e),Ja=null),e}function Go(e){Ja===null?Ja=[e]:Ja.push(e)}var Yf=Dt(null),Vr=null,wa=null;function $a(e,n,a){$t(Yf,n._currentValue),n._currentValue=a}function Ra(e){e._currentValue=Yf.current,Rt(Yf)}function du(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Kf(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=c;for(var B=0;B<n.length;B++)if(R.context===n[B]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),du(f.return,a,e),s||(S=null);break t}f=R.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),du(S,a,e),S=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,S=c.alternate,S!==null&&(S.lanes|=a),du(c.return,a,e),S=c.child,S=S!==null?S.sibling:null):S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function kr(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var R=c.type;fi(c.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(c===we.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push($s):e=[$s])}c=c.return}return e!==null&&Kf(n,e,a,s),n.flags|=262144,e!==null}function pu(e){for(e=e.firstContext;e!==null;){if(!fi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xr(e){Vr=e,wa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return Y0(Vr,e)}function mu(e,n){return Vr===null&&Xr(e),Y0(e,n)}function Y0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},wa===null){if(e===null)throw Error(r(308));wa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else wa=wa.next=n;return a}var bM=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},EM=o.unstable_scheduleCallback,TM=o.unstable_NormalPriority,mn={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zf(){return{controller:new bM,data:new Map,refCount:0}}function Vo(e){e.refCount--,e.refCount===0&&EM(TM,function(){e.controller.abort()})}function K0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var s=n[e];a.indexOf(s)===-1&&a.push(s)}}}var ko=null;function AM(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Xo=null,Qf=0,qr=0,Cs=null;function wM(e,n){if(Xo===null){var a=Xo=[];Qf=0,qr=hd(),Cs={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Qf++,n.then(Z0,Z0),n}function Z0(){if(--Qf===0&&(ko=null,Xo!==null)){Cs!==null&&(Cs.status="fulfilled");var e=Xo;Xo=null,qr=0,Cs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function RM(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Q0=tt.S;tt.S=function(e,n){if(Vv=Yt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&wM(e,n),ko!==null)for(var a=Ys;a!==null;)K0(a,ko),a=a.next;if(a=e.types,a!==null){for(var s=Ys;s!==null;)K0(s,a),s=s.next;if(qr!==0){s=ko,s===null&&(s=ko=[]);for(var c=0;c<a.length;c++){var f=a[c];s.indexOf(f)===-1&&s.push(f)}}}Q0!==null&&Q0(e,n)};var Wr=Dt(null);function Jf(){var e=Wr.current;return e!==null?e:$e.pooledCache}function gu(e,n){n===null?$t(Wr,Wr.current):$t(Wr,n.pool)}function J0(){var e=Jf();return e===null?null:{parent:mn._currentValue,pool:e}}var Ds=Error(r(460)),jf=Error(r(474)),vu=Error(r(542)),_u={then:function(){}};function j0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ta,ta),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,eg(e),e===void 0&&!("reason"in n)?Error(r(600)):e;default:if(typeof n.status=="string")n.then(ta,ta);else{if(e=$e,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,eg(e),e}throw Kr=n,Ds}}function Yr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Kr=a,Ds):a}}var Kr=null;function tg(){if(Kr===null)throw Error(r(459));var e=Kr;return Kr=null,e}function eg(e){if(e===Ds||e===vu)throw Error(r(483))}var Ns=null,qo=0;function xu(e){var n=qo;return qo+=1,Ns===null&&(Ns=[]),$0(Ns,e,n)}function tr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Su(e,n){throw n.$$typeof===E?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ng(e){function n(nt,X){if(e){var st=nt.deletions;st===null?(nt.deletions=[X],nt.flags|=16):st.push(X)}}function a(nt,X){if(!e)return null;for(;X!==null;)n(nt,X),X=X.sibling;return null}function s(nt){for(var X=new Map;nt!==null;)nt.key===null?X.set(nt.index,nt):X.set(nt.key,nt),nt=nt.sibling;return X}function c(nt,X){return nt=Ta(nt,X),nt.index=0,nt.sibling=null,nt}function f(nt,X,st){return nt.index=st,e?(st=nt.alternate,st!==null?(st=st.index,st<X?(nt.flags|=2,X):st):(nt.flags|=134217730,X)):(nt.flags|=1048576,X)}function S(nt){return e&&nt.alternate===null&&(nt.flags|=134217730),nt}function R(nt,X,st,St){return X===null||X.tag!==6?(X=Vf(st,nt.mode,St),X.return=nt,X):(X=c(X,st),X.return=nt,X)}function B(nt,X,st,St){var Jt=st.type;return Jt===G?(nt=dt(nt,X,st.props.children,St,st.key),tr(nt,st),nt):X!==null&&(X.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===mt&&Yr(Jt)===X.type)?(X=c(X,st.props),tr(X,st),X.return=nt,X):(X=uu(st.type,st.key,st.props,null,nt.mode,St),tr(X,st),X.return=nt,X)}function it(nt,X,st,St){return X===null||X.tag!==4||X.stateNode.containerInfo!==st.containerInfo||X.stateNode.implementation!==st.implementation?(X=kf(st,nt.mode,St),X.return=nt,X):(X=c(X,st.children||[]),X.return=nt,X)}function dt(nt,X,st,St,Jt){return X===null||X.tag!==7?(X=Hr(st,nt.mode,St,Jt),X.return=nt,X):(X=c(X,st),X.return=nt,X)}function yt(nt,X,st){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Vf(""+X,nt.mode,st),X.return=nt,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case O:return st=uu(X.type,X.key,X.props,null,nt.mode,st),tr(st,X),st.return=nt,st;case F:return X=kf(X,nt.mode,st),X.return=nt,X;case mt:return X=Yr(X),yt(nt,X,st)}if(Nt(X)||K(X))return X=Hr(X,nt.mode,st,null),X.return=nt,X;if(typeof X.then=="function")return yt(nt,xu(X),st);if(X.$$typeof===Q)return yt(nt,mu(nt,X),st);Su(nt,X)}return null}function $(nt,X,st,St){var Jt=X!==null?X.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return Jt!==null?null:R(nt,X,""+st,St);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case O:return st.key===Jt?B(nt,X,st,St):null;case F:return st.key===Jt?it(nt,X,st,St):null;case mt:return st=Yr(st),$(nt,X,st,St)}if(Nt(st)||K(st))return Jt!==null?null:dt(nt,X,st,St,null);if(typeof st.then=="function")return $(nt,X,xu(st),St);if(st.$$typeof===Q)return $(nt,X,mu(nt,st),St);Su(nt,st)}return null}function ct(nt,X,st,St,Jt){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return nt=nt.get(st)||null,R(X,nt,""+St,Jt);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case O:return nt=nt.get(St.key===null?st:St.key)||null,B(X,nt,St,Jt);case F:return nt=nt.get(St.key===null?st:St.key)||null,it(X,nt,St,Jt);case mt:return St=Yr(St),ct(nt,X,st,St,Jt)}if(Nt(St)||K(St))return nt=nt.get(st)||null,dt(X,nt,St,Jt,null);if(typeof St.then=="function")return ct(nt,X,st,xu(St),Jt);if(St.$$typeof===Q)return ct(nt,X,st,mu(X,St),Jt);Su(X,St)}return null}function Gt(nt,X,st,St){for(var Jt=null,Oe=null,ae=X,le=X=0,_n=null;ae!==null&&le<st.length;le++){ae.index>le?(_n=ae,ae=null):_n=ae.sibling;var Fe=$(nt,ae,st[le],St);if(Fe===null){ae===null&&(ae=_n);break}e&&ae&&Fe.alternate===null&&n(nt,ae),X=f(Fe,X,le),Oe===null?Jt=Fe:Oe.sibling=Fe,Oe=Fe,ae=_n}if(le===st.length)return a(nt,ae),Ae&&Aa(nt,le),Jt;if(ae===null){for(;le<st.length;le++)ae=yt(nt,st[le],St),ae!==null&&(X=f(ae,X,le),Oe===null?Jt=ae:Oe.sibling=ae,Oe=ae);return Ae&&Aa(nt,le),Jt}for(ae=s(ae);le<st.length;le++)_n=ct(ae,nt,le,st[le],St),_n!==null&&(e&&(Fe=_n.alternate,Fe!==null&&ae.delete(Fe.key===null?le:Fe.key)),X=f(_n,X,le),Oe===null?Jt=_n:Oe.sibling=_n,Oe=_n);return e&&ae.forEach(function(xr){return n(nt,xr)}),Ae&&Aa(nt,le),Jt}function ee(nt,X,st,St){if(st==null)throw Error(r(151));for(var Jt=null,Oe=null,ae=X,le=X=0,_n=null,Fe=st.next();ae!==null&&!Fe.done;le++,Fe=st.next()){ae.index>le?(_n=ae,ae=null):_n=ae.sibling;var xr=$(nt,ae,Fe.value,St);if(xr===null){ae===null&&(ae=_n);break}e&&ae&&xr.alternate===null&&n(nt,ae),X=f(xr,X,le),Oe===null?Jt=xr:Oe.sibling=xr,Oe=xr,ae=_n}if(Fe.done)return a(nt,ae),Ae&&Aa(nt,le),Jt;if(ae===null){for(;!Fe.done;le++,Fe=st.next())Fe=yt(nt,Fe.value,St),Fe!==null&&(X=f(Fe,X,le),Oe===null?Jt=Fe:Oe.sibling=Fe,Oe=Fe);return Ae&&Aa(nt,le),Jt}for(ae=s(ae);!Fe.done;le++,Fe=st.next())Fe=ct(ae,nt,le,Fe.value,St),Fe!==null&&(e&&(_n=Fe.alternate,_n!==null&&ae.delete(_n.key===null?le:_n.key)),X=f(Fe,X,le),Oe===null?Jt=Fe:Oe.sibling=Fe,Oe=Fe);return e&&ae.forEach(function(lb){return n(nt,lb)}),Ae&&Aa(nt,le),Jt}function ye(nt,X,st,St){if(typeof st=="object"&&st!==null&&st.type===G&&st.key===null&&st.props.ref===void 0&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case O:t:{for(var Jt=st.key;X!==null;){if(X.key===Jt){if(Jt=st.type,Jt===G){if(X.tag===7){a(nt,X.sibling),St=c(X,st.props.children),tr(St,st),St.return=nt,nt=St;break t}}else if(X.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===mt&&Yr(Jt)===X.type){a(nt,X.sibling),St=c(X,st.props),tr(St,st),St.return=nt,nt=St;break t}a(nt,X);break}else n(nt,X);X=X.sibling}st.type===G?(St=Hr(st.props.children,nt.mode,St,st.key),tr(St,st),St.return=nt,nt=St):(St=uu(st.type,st.key,st.props,null,nt.mode,St),tr(St,st),St.return=nt,nt=St)}return S(nt);case F:t:{for(Jt=st.key;X!==null;){if(X.key===Jt)if(X.tag===4&&X.stateNode.containerInfo===st.containerInfo&&X.stateNode.implementation===st.implementation){a(nt,X.sibling),St=c(X,st.children||[]),St.return=nt,nt=St;break t}else{a(nt,X);break}else n(nt,X);X=X.sibling}St=kf(st,nt.mode,St),St.return=nt,nt=St}return S(nt);case mt:return st=Yr(st),ye(nt,X,st,St)}if(Nt(st))return Gt(nt,X,st,St);if(K(st)){if(Jt=K(st),typeof Jt!="function")throw Error(r(150));return st=Jt.call(st),ee(nt,X,st,St)}if(typeof st.then=="function")return ye(nt,X,xu(st),St);if(st.$$typeof===Q)return ye(nt,X,mu(nt,st),St);Su(nt,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,X!==null&&X.tag===6?(a(nt,X.sibling),St=c(X,st),St.return=nt,nt=St):(a(nt,X),St=Vf(st,nt.mode,St),St.return=nt,nt=St),S(nt)):a(nt,X)}return function(nt,X,st,St){try{qo=0;var Jt=ye(nt,X,st,St);return Ns=null,Jt}catch(ae){if(ae===Ds||ae===vu)throw ae;var Oe=jn(29,ae,null,nt.mode);return Oe.lanes=St,Oe.return=nt,Oe}}}var Zr=ng(!0),ig=ng(!1),er=!1;function $f(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function th(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function nr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ir(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(ke&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=lu(e),H0(e,null,a),n}return ou(e,s,n,a),lu(e)}function Wo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,wo(e,a)}}function eh(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var nh=!1;function Yo(){if(nh){var e=Cs;if(e!==null)throw e}}function Ko(e,n,a,s){nh=!1;var c=e.updateQueue;er=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var B=R,it=B.next;B.next=null,S===null?f=it:S.next=it,S=B;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,R=dt.lastBaseUpdate,R!==S&&(R===null?dt.firstBaseUpdate=it:R.next=it,dt.lastBaseUpdate=B))}if(f!==null){var yt=c.baseState;S=0,dt=it=B=null,R=f;do{var $=R.lane&-536870913,ct=$!==R.lane;if(ct?(Le&$)===$:(s&$)===$){$!==0&&$===qr&&(nh=!0),dt!==null&&(dt=dt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Gt=e,ee=R;$=n;var ye=a;switch(ee.tag){case 1:if(Gt=ee.payload,typeof Gt=="function"){yt=Gt.call(ye,yt,$);break t}yt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=ee.payload,$=typeof Gt=="function"?Gt.call(ye,yt,$):Gt,$==null)break t;yt=N({},yt,$);break t;case 2:er=!0}}$=R.callback,$!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=c.callbacks,ct===null?c.callbacks=[$]:ct.push($))}else ct={lane:$,tag:R.tag,payload:R.payload,callback:R.callback,next:null},dt===null?(it=dt=ct,B=yt):dt=dt.next=ct,S|=$;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;ct=R,R=ct.next,ct.next=null,c.lastBaseUpdate=ct,c.shared.pending=null}}while(!0);dt===null&&(B=yt),c.baseState=B,c.firstBaseUpdate=it,c.lastBaseUpdate=dt,f===null&&(c.shared.lanes=0),cr|=S,e.lanes=S,e.memoizedState=yt}}function ag(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function rg(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ag(a[e],n)}var ar=Dt(null),yu=Dt(0);function sg(e,n){e=La,$t(yu,e),$t(ar,n),La=e|n.baseLanes}function ih(){$t(yu,La),$t(ar,ar.current)}function ah(){La=yu.current,Rt(ar),Rt(yu)}var Un=Dt(null),Bn=null;function rr(e){var n=e.alternate;$t(Ln,Ln.current&1),$t(Un,e),Bn===null&&(n===null||ar.current!==null||n.memoizedState!==null)&&(Bn=e)}function rh(e){$t(Ln,Ln.current),$t(Un,e),Bn===null&&(Bn=e)}function og(e){e.tag===22?($t(Ln,Ln.current),$t(Un,e),Bn===null&&(Bn=e)):sr()}function sr(){$t(Ln,Ln.current),$t(Un,Un.current)}function hi(e){Rt(Un),Bn===e&&(Bn=null),Rt(Ln)}var Ln=Dt(0);function Zo(e,n){$t(Un,Un.current),$t(Ln,n)}function sh(e){Rt(Ln),Rt(Un),Bn===e&&(Bn=null)}function Mu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Rd(a)||Cd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ca=0,Se=null,je=null,gn=null,bu=!1,Us=!1,Qr=!1,Eu=0,Qo=0,Ls=null,CM=0;function hn(){throw Error(r(321))}function oh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!fi(e[a],n[a]))return!1;return!0}function lh(e,n,a,s,c,f){return Ca=f,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,tt.H=e===null||e.memoizedState===null?Xg:qg,Qr=!1,f=a(s,c),Qr=!1,Us&&(f=ug(n,a,s,c)),lg(e),f}function lg(e){tt.H=Nu;var n=je!==null&&je.next!==null;if(Ca=0,gn=je=Se=null,bu=!1,Qo=0,Ls=null,n)throw Error(r(300));e===null||vn||(e=e.dependencies,e!==null&&pu(e)&&(vn=!0))}function ug(e,n,a,s){Se=e;var c=0;do{if(Us&&(Ls=null),Qo=0,Us=!1,25<=c)throw Error(r(301));if(c+=1,gn=je=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}tt.H=IM,f=n(a,s)}while(Us);return f}function DM(){var e=tt.H,n=e.useState()[0];return n=typeof n.then=="function"?Jo(n):n,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(Se.flags|=1024),n}function uh(){var e=Eu!==0;return Eu=0,e}function ch(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function fh(e){if(bu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}bu=!1}Ca=0,gn=je=Se=null,Us=!1,Qo=Eu=0,Ls=null}function Yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Se.memoizedState=gn=e:gn=gn.next=e,gn}function pn(){if(je===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var n=gn===null?Se.memoizedState:gn.next;if(n!==null)gn=n,je=e;else{if(e===null)throw Se.alternate===null?Error(r(467)):Error(r(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},gn===null?Se.memoizedState=gn=e:gn=gn.next=e}return gn}function Tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jo(e){var n=Qo;return Qo+=1,Ls===null&&(Ls=[]),e=$0(Ls,e,n),n=Se,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,tt.H=n===null||n.memoizedState===null?Xg:qg),e}function Au(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jo(e);if(e.$$typeof===ht)return;if(e.$$typeof===Q)return Nn(e)}throw Error(r(438,String(e)))}function hh(e){var n=null,a=Se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=Se.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tu(),Se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=_t;return n.index++,a}function Da(e,n){return typeof n=="function"?n(e):n}function wu(e){var n=pn();return dh(n,je,e)}function dh(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var R=S=null,B=null,it=n,dt=!1;do{var yt=it.lane&-536870913;if(yt!==it.lane?(Le&yt)===yt:(Ca&yt)===yt){var $=it.revertLane;if($===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),yt===qr&&(dt=!0);else if((Ca&$)===$){it=it.next,$===qr&&(dt=!0);continue}else yt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},B===null?(R=B=yt,S=f):B=B.next=yt,Se.lanes|=$,cr|=$;yt=it.action,Qr&&a(f,yt),f=it.hasEagerState?it.eagerState:a(f,yt)}else $={lane:yt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},B===null?(R=B=$,S=f):B=B.next=$,Se.lanes|=yt,cr|=yt;it=it.next}while(it!==null&&it!==n);if(B===null?S=f:B.next=R,!fi(f,e.memoizedState)&&(vn=!0,dt&&(a=Cs,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function ph(e){var n=pn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);fi(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function cg(e,n,a){var s=Se,c=pn(),f=Ae;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!fi((je||c).memoizedState,a);if(S&&(c.memoizedState=a,vn=!0),c=c.queue,vh(dg.bind(null,s,c,e),[e]),e=c.getSnapshot!==n||S||gn!==null&&(gn.memoizedState.tag&1)!==0,Os(e?9:8,{destroy:void 0},hg.bind(null,s,c,a,n),null),e){if(s.flags|=2048,$e===null)throw Error(r(349));f||(Ca&127)!==0||fg(s,n,a)}return a}function fg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Se.updateQueue,n===null?(n=Tu(),Se.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function hg(e,n,a,s){n.value=a,n.getSnapshot=s,pg(n)&&mg(e)}function dg(e,n,a){return a(function(){pg(n)&&mg(e)})}function pg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!fi(e,a)}catch{return!0}}function mg(e){var n=Fr(e,2);n!==null&&ni(n,e,2)}function mh(e){var n=Yn();if(typeof e=="function"){var a=e;if(e=a(),Qr){ze(!0);try{a()}finally{ze(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:e},n}function gg(e,n,a,s){return e.baseState=a,dh(e,je,typeof s=="function"?s:Da)}function NM(e,n,a,s,c){if(Du(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};tt.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,vg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function vg(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=tt.T,S={};S.types=f!==null?f.types:null,tt.T=S;try{var R=a(c,s),B=tt.S;B!==null&&B(S,R),_g(e,n,R)}catch(it){gh(e,n,it)}finally{f!==null&&S.types!==null&&(f.types=S.types),tt.T=f}}else try{f=a(c,s),_g(e,n,f)}catch(it){gh(e,n,it)}}function _g(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){xg(e,n,s)},function(s){return gh(e,n,s)}):xg(e,n,a)}function xg(e,n,a){n.status="fulfilled",n.value=a,Sg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,vg(e,a)))}function gh(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Sg(n),n=n.next;while(n!==s)}e.action=null}function Sg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function yg(e,n){return n}function Mg(e,n){if(Ae){var a=$e.formState;if(a!==null){t:{var s=Se;if(Ae){if(nn){e:{for(var c=nn,f=Ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=Di(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){nn=Di(c.nextSibling),s=c.data==="F!";break t}}ja(s)}s=!1}s&&(n=a[0])}}return a=Yn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yg,lastRenderedState:n},a.queue=s,a=Gg.bind(null,Se,s),s.dispatch=a,s=mh(!1),f=Mh.bind(null,Se,!1,s.queue),s=Yn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=NM.bind(null,Se,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function bg(e){var n=pn();return Eg(n,je,e)}function Eg(e,n,a){if(n=dh(e,n,yg)[0],e=wu(Da)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Jo(n)}catch(S){throw S===Ds?vu:S}else s=n;n=pn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(Se.flags|=2048,Os(9,{destroy:void 0},UM.bind(null,c,a),null)),[s,f,e]}function UM(e,n){e.action=n}function Tg(e){var n=pn(),a=je;if(a!==null)return Eg(n,a,e);pn(),n=n.memoizedState,a=pn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Os(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=Se.updateQueue,n===null&&(n=Tu(),Se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Ag(){return pn().memoizedState}function Ru(e,n,a,s){var c=Yn();Se.flags|=e,c.memoizedState=Os(1|n,{destroy:void 0},a,s===void 0?null:s)}function Cu(e,n,a,s){var c=pn();s=s===void 0?null:s;var f=c.memoizedState.inst;je!==null&&s!==null&&oh(s,je.memoizedState.deps)?c.memoizedState=Os(n,f,a,s):(Se.flags|=e,c.memoizedState=Os(1|n,f,a,s))}function wg(e,n){Ru(8390656,8,e,n)}function vh(e,n){Cu(2048,8,e,n)}function LM(e){Se.flags|=4;var n=Se.updateQueue;if(n===null)n=Tu(),Se.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Rg(e){var n=pn().memoizedState;return LM({ref:n,nextImpl:e}),function(){if((ke&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Cg(e,n){return Cu(4,2,e,n)}function Dg(e,n){return Cu(4,4,e,n)}function Ng(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ug(e,n,a){a=a!=null?a.concat([e]):null,Cu(4,4,Ng.bind(null,n,e),a)}function _h(){}function Lg(e,n){var a=pn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&oh(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Og(e,n){var a=pn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&oh(n,s[1]))return s[0];if(s=e(),Qr){ze(!0);try{e()}finally{ze(!1)}}return a.memoizedState=[s,n],s}function xh(e,n,a){return a===void 0||(Ca&1073741824)!==0&&(Le&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Xv(),Se.lanes|=e,cr|=e,a)}function Pg(e,n,a,s){return fi(a,n)?a:ar.current!==null?(e=xh(e,a,s),fi(e,n)||(vn=!0),e):(Ca&106)===0||(Ca&1073741824)!==0&&(Le&261930)===0?(vn=!0,e.memoizedState=a):(e=Xv(),Se.lanes|=e,cr|=e,n)}function zg(e,n,a,s,c){var f=Ut.p;Ut.p=f!==0&&8>f?f:8;var S=tt.T,R={};R.types=S!==null?S.types:null,tt.T=R,Mh(e,!1,n,a);try{var B=c(),it=tt.S;if(it!==null&&it(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var dt=RM(B,s);jo(e,n,dt,gi(e))}else jo(e,n,s,gi(e))}catch(yt){jo(e,n,{then:function(){},status:"rejected",reason:yt},gi())}finally{Ut.p=f,S!==null&&R.types!==null&&(S.types=R.types),tt.T=S}}function OM(){}function Sh(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=Ig(e).queue;zg(e,c,n,_e,a===null?OM:function(){return Bg(e),a(s)})}function Ig(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:_e,baseState:_e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:_e},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Bg(e){var n=Ig(e);n.next===null&&(n=e.alternate.memoizedState),jo(e,n.next.queue,{},gi())}function yh(){return Nn($s)}function Fg(){return pn().memoizedState}function Hg(){return pn().memoizedState}function PM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=gi();e=nr(a);var s=ir(n,e,a);s!==null&&(ni(s,n,a),Wo(s,n,a)),n={cache:Zf()},e.payload=n;return}n=n.return}}function zM(e,n,a){var s=gi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Du(e)?Vg(n,a):(a=Hf(e,n,a,s),a!==null&&(ni(a,e,s),kg(a,n,s)))}function Gg(e,n,a){var s=gi();jo(e,n,a,s)}function jo(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Du(e))Vg(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,R=f(S,a);if(c.hasEagerState=!0,c.eagerState=R,fi(R,S))return ou(e,n,c,0),$e===null&&su(),!1}catch{}if(a=Hf(e,n,c,s),a!==null)return ni(a,e,s),kg(a,n,s),!0}return!1}function Mh(e,n,a,s){if(s={lane:2,revertLane:hd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Du(e)){if(n)throw Error(r(479))}else n=Hf(e,a,s,2),n!==null&&ni(n,e,2)}function Du(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function Vg(e,n){Us=bu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function kg(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,wo(e,a)}}var Nu={readContext:Nn,use:Au,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useLayoutEffect:hn,useInsertionEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useSyncExternalStore:hn,useId:hn,useHostTransitionStatus:hn,useFormState:hn,useActionState:hn,useOptimistic:hn,useMemoCache:hn,useCacheRefresh:hn,useEffectEvent:hn},Xg={readContext:Nn,use:Au,useCallback:function(e,n){return Yn().memoizedState=[e,n===void 0?null:n],e},useContext:Nn,useEffect:wg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ru(4194308,4,Ng.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ru(4194308,4,e,n)},useInsertionEffect:function(e,n){Ru(4,2,e,n)},useMemo:function(e,n){var a=Yn();n=n===void 0?null:n;var s=e();if(Qr){ze(!0);try{e()}finally{ze(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Yn();if(a!==void 0){var c=a(n);if(Qr){ze(!0);try{a(n)}finally{ze(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=zM.bind(null,Se,e),[s.memoizedState,e]},useRef:function(e){var n=Yn();return e={current:e},n.memoizedState=e},useState:function(e){e=mh(e);var n=e.queue,a=Gg.bind(null,Se,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:_h,useDeferredValue:function(e,n){var a=Yn();return xh(a,e,n)},useTransition:function(){var e=mh(!1);return e=zg.bind(null,Se,e.queue,!0,!1),Yn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=Se,c=Yn();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),$e===null)throw Error(r(349));(Le&127)!==0||fg(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,wg(dg.bind(null,s,f,e),[e]),s.flags|=2048,Os(9,{destroy:void 0},hg.bind(null,s,f,a,n),null),a},useId:function(){var e=Yn(),n=$e.identifierPrefix;if(Ae){var a=na,s=ea;a=(s&~(1<<32-ge(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Eu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=CM++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:yh,useFormState:Mg,useActionState:Mg,useOptimistic:function(e){var n=Yn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Mh.bind(null,Se,!0,a),a.dispatch=n,[e,n]},useMemoCache:hh,useCacheRefresh:function(){return Yn().memoizedState=PM.bind(null,Se)},useEffectEvent:function(e){var n=Yn(),a={impl:e};return n.memoizedState=a,function(){if((ke&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},qg={readContext:Nn,use:Au,useCallback:Lg,useContext:Nn,useEffect:vh,useImperativeHandle:Ug,useInsertionEffect:Cg,useLayoutEffect:Dg,useMemo:Og,useReducer:wu,useRef:Ag,useState:function(){return wu(Da)},useDebugValue:_h,useDeferredValue:function(e,n){var a=pn();return Pg(a,je.memoizedState,e,n)},useTransition:function(){var e=wu(Da)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:Jo(e),n]},useSyncExternalStore:cg,useId:Fg,useHostTransitionStatus:yh,useFormState:bg,useActionState:bg,useOptimistic:function(e,n){var a=pn();return gg(a,je,e,n)},useMemoCache:hh,useCacheRefresh:Hg,useEffectEvent:Rg},IM={readContext:Nn,use:Au,useCallback:Lg,useContext:Nn,useEffect:vh,useImperativeHandle:Ug,useInsertionEffect:Cg,useLayoutEffect:Dg,useMemo:Og,useReducer:ph,useRef:Ag,useState:function(){return ph(Da)},useDebugValue:_h,useDeferredValue:function(e,n){var a=pn();return je===null?xh(a,e,n):Pg(a,je.memoizedState,e,n)},useTransition:function(){var e=ph(Da)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:Jo(e),n]},useSyncExternalStore:cg,useId:Fg,useHostTransitionStatus:yh,useFormState:Tg,useActionState:Tg,useOptimistic:function(e,n){var a=pn();return je!==null?gg(a,je,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:hh,useCacheRefresh:Hg,useEffectEvent:Rg};function bh(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:N({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Eh={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=gi(),c=nr(s);c.payload=n,a!=null&&(c.callback=a),n=ir(e,c,s),n!==null&&(ni(n,e,s),Wo(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=gi(),c=nr(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ir(e,c,s),n!==null&&(ni(n,e,s),Wo(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=gi(),s=nr(a);s.tag=2,n!=null&&(s.callback=n),n=ir(e,s,a),n!==null&&(ni(n,e,a),Wo(n,e,a))}};function Wg(e,n,a,s,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Bo(a,s)||!Bo(c,f):!0}function Yg(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Eh.enqueueReplaceState(n,n.state,null)}function Jr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=N({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Kg(e){ru(e)}function Zg(e){console.error(e)}function Qg(e){ru(e)}function Uu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Jg(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Th(e,n,a){return a=nr(a),a.tag=3,a.payload={element:null},a.callback=function(){Uu(e,n)},a}function jg(e){return e=nr(e),e.tag=3,e}function $g(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Jg(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Jg(n,a,s),typeof c!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})})}function BM(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&kr(n,a,c,!0),a=Un.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Bn===null?$u():a.alternate===null&&dn===0&&(dn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===_u?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),ud(e,s,c)),!1;case 22:return a.flags|=65536,s===_u?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),ud(e,s,c)),!1}throw Error(r(435,a.tag))}return ud(e,s,c),$u(),!1}if(Ae)return n=Un.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==qf&&(e=Error(r(422),{cause:s}),Go(Ti(e,a)))):(s!==qf&&(n=Error(r(423),{cause:s}),Go(Ti(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=Ti(s,a),c=Th(e.stateNode,s,c),eh(e,c),dn!==4&&(dn=2)),!1;var f=Error(r(520),{cause:s});if(f=Ti(f,a),sl===null?sl=[f]:sl.push(f),dn!==4&&(dn=2),n===null)return!0;s=Ti(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Th(a.stateNode,s,e),eh(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(fr===null||!fr.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=jg(c),$g(c,e,a,s),eh(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Ah=Error(r(461)),vn=!1;function Mn(e,n,a,s){n.child=e===null?ig(n,null,a,s):Zr(n,e.child,a,s)}function tv(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var R in s)R!=="ref"&&(S[R]=s[R])}else S=s;return Xr(n),s=lh(e,n,a,S,f,c),R=uh(),e!==null&&!vn?(ch(e,n,c),Na(e,n,c)):(Ae&&R&&fu(n),n.flags|=1,Mn(e,n,s,c),n.child)}function ev(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!Gf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,nv(e,n,f,s,c)):(e=uu(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Oh(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Bo,a(S,s)&&e.ref===n.ref)return Na(e,n,c)}return n.flags|=1,e=Ta(f,s),e.ref=n.ref,e.return=n,n.child=e}function nv(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Bo(f,s)&&e.ref===n.ref)if(vn=!1,n.pendingProps=s=f,Oh(e,c))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,Na(e,n,c)}return wh(e,n,a,s,c)}function iv(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return av(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gu(n,f!==null?f.cachePool:null),f!==null?sg(n,f):ih(),og(n);else return s=n.lanes=536870912,av(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(gu(n,f.cachePool),sg(n,f),sr(),n.memoizedState=null):(e!==null&&gu(n,null),ih(),sr());return Mn(e,n,c,a),n.child}function $o(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function av(e,n,a,s,c){var f=Jf();return f=f===null?null:{parent:mn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&gu(n,null),ih(),og(n),e!==null&&kr(e,n,s,!0),n.childLanes=c,null}function Lu(e,n){return n=Ou({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function rv(e,n,a){return Zr(n,e.child,null,a),e=Lu(n,n.pendingProps),e.flags|=2,hi(n),n.memoizedState=null,e}function FM(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(s.mode==="hidden")return e=Lu(n,s),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},$o(null,e);if(rh(n),(e=nn)?(e=N_(e,Ri),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:ea,overflow:na}:null,retryLane:536870912,hydrationErrors:null},a=V0(e),a.return=n,n.child=a,An=n,nn=null)):e=null,e===null)throw ja(n);return n.lanes=536870912,null}return Lu(n,s)}var f=e.memoizedState;if(f!==null){var S=f.dehydrated;if(rh(n),c)if(n.flags&256)n.flags&=-257,n=rv(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(vn||kr(e,n,a,!1),c=(a&e.childLanes)!==0,vn||c){if(ar.current===null){if(s=$e,s!==null&&(S=Ro(s,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,Fr(e,S),ni(s,e,S),Ah;$u()}n=rv(e,n,a)}else e=f.treeContext,nn=Di(S.nextSibling),An=n,Ae=!0,Ja=null,Ri=!1,e!==null&&q0(n,e),n=Lu(n,s),n.flags|=134221824;return n}return e=Ta(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ps(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function wh(e,n,a,s,c){return Xr(n),a=lh(e,n,a,s,void 0,c),s=uh(),e!==null&&!vn?(ch(e,n,c),Na(e,n,c)):(Ae&&s&&fu(n),n.flags|=1,Mn(e,n,a,c),n.child)}function sv(e,n,a,s,c,f){return Xr(n),n.updateQueue=null,a=ug(n,s,a,c),lg(e),s=uh(),e!==null&&!vn?(ch(e,n,f),Na(e,n,f)):(Ae&&s&&fu(n),n.flags|=1,Mn(e,n,a,f),n.child)}function ov(e,n,a,s,c){if(Xr(n),n.stateNode===null){var f=Ts,S=a.contextType;typeof S=="object"&&S!==null&&(f=Nn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Eh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},$f(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Nn(S):Ts,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(bh(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Eh.enqueueReplaceState(f,f.state,null),Ko(n,s,f,c),Yo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,B=Jr(a,R);f.props=B;var it=f.context,dt=a.contextType;S=Ts,typeof dt=="object"&&dt!==null&&(S=Nn(dt));var yt=a.getDerivedStateFromProps;dt=typeof yt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||it!==S)&&Yg(n,f,s,S),er=!1;var $=n.memoizedState;f.state=$,Ko(n,s,f,c),Yo(),it=n.memoizedState,R||$!==it||er?(typeof yt=="function"&&(bh(n,a,yt,s),it=n.memoizedState),(B=er||Wg(n,a,B,s,$,it,S))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=S,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,th(e,n),S=n.memoizedProps,dt=Jr(a,S),f.props=dt,yt=n.pendingProps,$=f.context,it=a.contextType,B=Ts,typeof it=="object"&&it!==null&&(B=Nn(it)),R=a.getDerivedStateFromProps,(it=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==yt||$!==B)&&Yg(n,f,s,B),er=!1,$=n.memoizedState,f.state=$,Ko(n,s,f,c),Yo();var ct=n.memoizedState;S!==yt||$!==ct||er||e!==null&&e.dependencies!==null&&pu(e.dependencies)?(typeof R=="function"&&(bh(n,a,R,s),ct=n.memoizedState),(dt=er||Wg(n,a,dt,s,$,ct,B)||e!==null&&e.dependencies!==null&&pu(e.dependencies))?(it||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ct,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ct,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ct),f.props=s,f.state=ct,f.context=B,s=dt):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ps(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Zr(n,e.child,null,c),n.child=Zr(n,null,a,c)):Mn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Na(e,n,c),e}function lv(e,n,a,s){return Gr(),n.flags|=256,Mn(e,n,a,s),n.child}var Rh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ch(e){return{baseLanes:e,cachePool:J0()}}function Dh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=mi),e}function uv(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(Ln.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(c?rr(n):sr(),(e=nn)?(e=N_(e,Ri),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:ea,overflow:na}:null,retryLane:536870912,hydrationErrors:null},a=V0(e),a.return=n,n.child=a,An=n,nn=null)):e=null,e===null)throw ja(n);return Cd(e)?n.lanes=32:n.lanes=536870912,null}return f=s.children,s=s.fallback,c?(sr(),c=n.mode,f=Ou({mode:"hidden",children:f},c),s=Hr(s,c,a,null),f.return=n,s.return=n,f.sibling=s,n.child=f,s=n.child,s.memoizedState=Ch(a),s.childLanes=Dh(e,S,a),n.memoizedState=Rh,$o(null,s)):(rr(n),Nh(n,f))}var R=e.memoizedState;if(R!==null){var B=R.dehydrated;if(B!==null)return HM(e,n,f,S,s,B,R,a)}return c?(sr(),c=s.fallback,f=n.mode,R=e.child,B=R.sibling,s=Ta(R,{mode:"hidden",children:s.children}),s.subtreeFlags=R.subtreeFlags&1206910976,B!==null?c=Ta(B,c):(c=Hr(c,f,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,$o(null,s),s=n.child,c=e.child.memoizedState,c===null?c=Ch(a):(f=c.cachePool,f!==null?(R=mn._currentValue,f=f.parent!==R?{parent:R,pool:R}:f):f=J0(),c={baseLanes:c.baseLanes|a,cachePool:f}),s.memoizedState=c,s.childLanes=Dh(e,S,a),n.memoizedState=Rh,$o(e.child,s)):(rr(n),a=e.child,e=a.sibling,a=Ta(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Nh(e,n){return n=Ou({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ou(e,n){return e=jn(22,e,null,n),e.lanes=0,e}function Pu(e,n,a){return Zr(n,e.child,null,a),e=Nh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function HM(e,n,a,s,c,f,S,R){if(a)return n.flags&256?(rr(n),n.flags&=-257,Pu(e,n,R)):n.memoizedState!==null?(sr(),n.child=e.child,n.flags|=128,null):(sr(),f=c.fallback,S=n.mode,c=Ou({mode:"visible",children:c.children},S),f=Hr(f,S,R,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Zr(n,e.child,null,R),c=n.child,c.memoizedState=Ch(R),c.childLanes=Dh(e,s,R),n.memoizedState=Rh,$o(null,c));if(rr(n),Cd(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var B=s.dgst;return s=B,s!==""&&(c=Error(r(419)),c.stack="",c.digest=s,Go({value:c,source:null,stack:null})),Pu(e,n,R)}if(vn||kr(e,n,R,!1),s=(R&e.childLanes)!==0,vn||s){if(ar.current!==null)return Pu(e,n,R);if(s=$e,s!==null&&(c=Ro(s,R),c!==0&&c!==S.retryLane))throw S.retryLane=c,Fr(e,c),ni(s,e,c),Ah;return Rd(f)||$u(),Pu(e,n,R)}return Rd(f)?(n.flags|=192,n.child=e.child,null):(e=S.treeContext,nn=Di(f.nextSibling),An=n,Ae=!0,Ja=null,Ri=!1,e!==null&&q0(n,e),n=Nh(n,c.children),n.flags|=134221824,n)}function cv(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),du(e.return,n,a)}function fv(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&Mu(a)===null&&(n=e),e=e.sibling}return n}function zu(e,n,a,s,c,f){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=s,S.tail=a,S.tailMode=c,S.treeForkCount=f)}function Uh(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Lh(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var S=Ln.current;if(n.flags&128)return Zo(n,S),null;var R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,Zo(n,S),c==="backwards"&&e!==null?(Uh(e),Mn(e,n,s,a),Uh(e)):Mn(e,n,s,a),s=Ae?Ho:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cv(e,a,n);else if(e.tag===19)cv(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=fv(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,Uh(n)),zu(n,!0,c,null,f,s);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Mu(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}zu(n,!0,a,null,f,s);break;case"together":zu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=fv(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),zu(n,!1,c,a,f,s)}return n.child}function hv(e,n,a){var s=n.pendingProps;return $a(n,n.type,s.value),Mn(e,n,s.children,a),n.child}function Na(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),cr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(kr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ta(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ta(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Oh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&pu(e)))}function GM(e,n,a){switch(n.tag){case 3:q(n,n.stateNode.containerInfo),$a(n,mn,e.memoizedState.cache),Gr();break;case 27:case 5:xe(n);break;case 4:q(n,n.stateNode.containerInfo);break;case 10:$a(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,rh(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return rr(n),n.flags|=128,null;s=kr(e,n,a,!1);var c=n.child.childLanes;return s||(a&c)!==0?uv(e,n,a):(rr(n),e=Na(e,n,a),e!==null?e.sibling:null)}rr(n);break;case 19:if(n.flags&128)return Lh(e,n,a);if(c=(e.flags&128)!==0,s=(a&n.childLanes)!==0,s||(kr(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Lh(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Zo(n,Ln.current),s)break;return null;case 22:return n.lanes=0,iv(e,n,a,n.pendingProps);case 24:$a(n,mn,e.memoizedState.cache)}return Na(e,n,a)}function dv(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!Oh(e,a)&&(n.flags&128)===0)return vn=!1,GM(e,n,a);vn=(e.flags&131072)!==0}else vn=!1,Ae&&(n.flags&1048576)!==0&&X0(n,Ho,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(e=Yr(n.elementType),n.type=e,typeof e=="function")Gf(e)?(s=Jr(e,s),n.tag=1,n=ov(null,n,e,s,a)):(n.tag=0,n=wh(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===W){n.tag=11,n=tv(null,n,e,s,a);break t}else if(c===at){n.tag=14,n=ev(null,n,e,s,a);break t}else if(c===Q){n.tag=10,n.type=e,n=hv(null,n,a);break t}}throw n=Et(e)||e,Error(r(306,n,""))}}return n;case 0:return wh(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Jr(s,n.pendingProps),ov(e,n,s,c,a);case 3:t:{if(q(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,th(e,n),Ko(n,s,null,a);var S=n.memoizedState;if(s=S.cache,$a(n,mn,s),s!==f.cache&&Kf(n,[mn],a,!0),Yo(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=lv(e,n,s,a);break t}else if(s!==c){c=Ti(Error(r(424)),n),Go(c),n=lv(e,n,s,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,nn=Di(e.firstChild),An=n,Ae=!0,Ja=null,Ri=!0,a=ig(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Gr(),s===c){n=Na(e,n,a);break t}Mn(e,n,s,a)}n=n.child}return n;case 26:return Ps(e,n),e===null?(a=B_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(n.stateNode=v_(n.type,n.pendingProps,ce.current,n)):n.memoizedState=B_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return xe(n),e===null&&Ae&&(s=n.stateNode=O_(n.type,n.pendingProps,ce.current),An=n,Ri=!0,c=nn,pr(n.type)?(Dd=c,nn=Di(s.firstChild)):nn=c),Mn(e,n,n.pendingProps.children,a),Ps(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((c=s=nn)&&(s=P1(s,n.type,n.pendingProps,Ri),s!==null?(n.stateNode=s,An=n,nn=Di(s.firstChild),Ri=!1,c=!0):c=!1),c||ja(n)),xe(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,s=f.children,yd(c,f)?s=null:S!==null&&yd(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=lh(e,n,DM,null,null,a),$s._currentValue=c),Ps(e,n),Mn(e,n,s,a),n.child;case 6:return e===null&&Ae&&((e=a=nn)&&(a=z1(a,n.pendingProps,Ri),a!==null?(n.stateNode=a,An=n,nn=null,e=!0):e=!1),e||ja(n)),null;case 13:return uv(e,n,a);case 4:return q(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Zr(n,null,s,a):Mn(e,n,s,a),n.child;case 11:return tv(e,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Ps(e,n),Mn(e,n,s,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return hv(e,n,a);case 9:return c=n.type._context,s=n.pendingProps.children,Xr(n),c=Nn(c),s=s(c),n.flags|=1,Mn(e,n,s,a),n.child;case 14:return ev(e,n,n.type,n.pendingProps,a);case 15:return nv(e,n,n.type,n.pendingProps,a);case 19:return Lh(e,n,a);case 31:return FM(e,n,a);case 22:return iv(e,n,a,n.pendingProps);case 24:return Xr(n),s=Nn(mn),e===null?(c=Jf(),c===null&&(c=$e,f=Zf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},$f(n),$a(n,mn,c)):((e.lanes&a)!==0&&(th(e,n),Ko(n,null,null,a),Yo()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),$a(n,mn,s)):(s=f.cache,$a(n,mn,s),s!==c.cache&&Kf(n,[mn],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=e===null?18882560:18874368:Ae&&fu(n),e!==null&&e.memoizedProps.name!==s.name?n.flags|=4194816:Ps(e,n),Mn(e,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ua(e){e.flags|=4}function Ph(e,n,a,s,c){var f;if((f=(e.mode&32)!==0)&&(f=a===null?V_(n,s):V_(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Kv())e.flags|=8192;else throw Kr=_u,jf}else e.flags&=-16777217}function pv(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!k_(n))if(Kv())e.flags|=8192;else throw Kr=_u,jf}function Iu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ao():536870912,e.lanes|=n,Hs|=n)}function tl(e,n){if(!Ae)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function an(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&1206910976,s|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function VM(e,n,a){var s=n.pendingProps;switch(Xf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ra(mn),Xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Rs(n)?Ua(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wf())),an(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Ua(n),f!==null?(an(n),pv(n,f)):(an(n),Ph(n,c,null,s,a))):f?f!==e.memoizedState?(Ua(n),an(n),pv(n,f)):(an(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Ua(n),an(n),Ph(n,c,e,s,a)),null;case 27:if(P(n),a=ce.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ua(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return an(n),n.subtreeFlags&=-33554433,null}e=de.current,Rs(n)?W0(n):(e=O_(c,s,a),n.stateNode=e,Ua(n))}return an(n),n.subtreeFlags&=-33554433,null;case 5:if(P(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ua(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return an(n),n.subtreeFlags&=-33554433,null}if(f=de.current,Rs(n))W0(n);else{var S=fl(ce.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?S.createElement("select",{is:s.is}):S.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?S.createElement(c,{is:s.is}):S.createElement(c)}}f[w]=n,f[V]=s;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;t:switch(Pn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ua(n)}}return an(n),n.subtreeFlags&=-33554433,Ph(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Ua(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=ce.current,Rs(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=An,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[w]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||d_(e.nodeValue,a)),e||ja(n,!0)}else e=fl(e).createTextNode(s),e[w]=n,n.stateNode=e}return an(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Rs(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[w]=n}else Gr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),e=!1}else a=Wf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(hi(n),n):(hi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return an(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Rs(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[w]=n}else Gr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),c=!1}else c=Wf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(hi(n),n):(hi(n),null)}return hi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Iu(n,n.updateQueue),an(n),null);case 4:return Xe(),e===null&&gd(n.stateNode.containerInfo),n.flags|=67108864,an(n),null;case 10:return Ra(n.type),an(n),null;case 19:if(sh(n),s=n.memoizedState,s===null)return an(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)tl(s,!1);else{if(dn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Mu(e),f!==null){for(n.flags|=128,tl(s,!1),e=f.updateQueue,n.updateQueue=e,Iu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)G0(a,e),a=a.sibling;return Zo(n,Ln.current&1|2),Ae&&Aa(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&Yt()>Zu&&(n.flags|=128,c=!0,tl(s,!1),n.lanes=4194304)}else{if(!c)if(e=Mu(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Iu(n,e),tl(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!f.alternate&&!Ae)return an(n),null}else 2*Yt()-s.renderingStartTime>Zu&&a!==536870912&&(n.flags|=128,c=!0,tl(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}if(s.tail!==null){e=s.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Yt(),e.sibling=null,f=Ln.current,f=c?f&1|2:f&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||Ae?Zo(n,f):(a=f,$t(Un,n),$t(Ln,a),Bn===null&&(Bn=n)),Ae&&Aa(n,s.treeForkCount),e}return an(n),null;case 22:case 23:return hi(n),ah(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),a=n.updateQueue,a!==null&&Iu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&Rt(Wr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ra(mn),an(n),null;case 25:return null;case 30:return n.flags|=33554432,an(n),null}throw Error(r(156,n.tag))}function kM(e,n){switch(Xf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ra(mn),Xe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return P(n),null;case 31:if(n.memoizedState!==null){if(hi(n),n.alternate===null)throw Error(r(340));Gr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(hi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Gr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return sh(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return Xe(),null;case 10:return Ra(n.type),null;case 22:case 23:return hi(n),ah(),e!==null&&Rt(Wr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ra(mn),null;case 25:return null;default:return null}}function mv(e,n){switch(Xf(n),n.tag){case 3:Ra(mn),Xe();break;case 26:case 27:case 5:P(n);break;case 4:Xe();break;case 31:n.memoizedState!==null&&hi(n);break;case 13:hi(n);break;case 19:sh(n);break;case 10:Ra(n.type);break;case 22:case 23:hi(n),ah(),e!==null&&Rt(Wr);break;case 24:Ra(mn)}}function el(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(R){Ke(n,n.return,R)}}function or(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var S=s.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,c=n;var B=a,it=R;try{it()}catch(dt){Ke(c,B,dt)}}}s=s.next}while(s!==f)}}catch(dt){Ke(n,n.return,dt)}}function gv(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{rg(n,a)}catch(s){Ke(e,e.return,s)}}}function vv(e,n,a){a.props=Jr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ke(e,n,s)}}function ia(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:var c=e.stateNode,f=ba(e.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=E_(f)),s=c.ref;break;case 7:if(e.stateNode===null){var S=new vi(e);_(e.child,!1,L1,S,void 0,void 0),e.stateNode=S}s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(R){Ke(e,n,R)}}function On(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ke(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ke(e,n,c)}else a.current=null}function Bu(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)D_(e.stateNode,n[a])}function _v(e){for(var n=e.return;n!==null&&(Ih(n)&&D_(e.stateNode,n.stateNode),!zh(n));)n=n.return}function nl(e){for(var n=e.return;n!==null&&(Ih(n)&&O1(e.stateNode,n.stateNode),!zh(n));)n=n.return}function zh(e){return e.tag===5||e.tag===3||e.tag===27}function Ih(e){return e&&e.tag===7&&e.stateNode!==null}function Bh(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ke(e,e.return,c)}}function Fh(e,n,a){try{var s=e.stateNode;m1(s,e.type,a,n),s[V]=n}catch(c){Ke(e,e.return,c)}}function xv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pr(e.type)||e.tag===4}function Hh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||xv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gh(e,n,a,s){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ta)),Bu(e,s),Te=!0;else if(c!==4&&(c===27&&(Bu(e,s),s=null,pr(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(Gh(e,n,a,s),e=e.sibling;e!==null;)Gh(e,n,a,s),e=e.sibling}function Fu(e,n,a,s){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Bu(e,s),Te=!0;else if(c!==4&&(c===27&&(Bu(e,s),s=null,pr(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Fu(e,n,a,s),e=e.sibling;e!==null;)Fu(e,n,a,s),e=e.sibling}function Sv(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Pn(n,s,a),n[w]=e,n[V]=a}catch(f){Ke(e,e.return,f)}}var Hu=!1,di=null;function yv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Hu=!0)}var aa=null;function Mv(){var e=aa;return aa=null,e}var $n=0;function zs(e,n,a,s,c){return $n=0,bv(e.child,n,a,s,c)}function bv(e,n,a,s,c){for(var f=!1;e!==null;){if(e.tag===5){var S=e.stateNode;if(s!==null){var R=Ed(S);s.push(R),R.view&&(f=!0)}else f||Ed(S).view&&(f=!0);Hu=!0,M_(S,$n===0?n:n+"_"+$n,a),$n++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||bv(e.child,n,a,s,c)&&(f=!0));e=e.sibling}return f}function ra(e,n){for(;e!==null;)e.tag===5?b_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||ra(e.child,n)),e=e.sibling}function Gu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Gu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=Ea(n.default,n.share),n!=="none"&&(zs(e,a,n,null,!1)||ra(e.child,!1))}e=e.sibling}}function Vh(e,n){if(e.tag===30){var a=e.stateNode,s=e.memoizedProps,c=ba(s,a),f=Ea(s.default,a.paired?s.share:s.enter);f!=="none"?zs(e,c,f,null,!1)?(Gu(e),a.paired||n||Xs(e,s.onEnter)):ra(e.child,!1):Gu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Vh(e,n),e=e.sibling;else Gu(e)}function kh(e){if(di!==null&&di.size!==0){var n=di;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var c=n.get(s);if(c!==void 0){var f=Ea(a.default,a.share);if(f!=="none"&&(zs(e,s,f,null,!1)?(f=e.stateNode,c.paired=f,f.paired=c,Xs(e,a.onShare)):ra(e.child,!1)),n.delete(s),n.size===0)break}}}kh(e)}e=e.sibling}}}function Xh(e){if(e.tag===30){var n=e.memoizedProps,a=ba(n,e.stateNode),s=di!==null?di.get(a):void 0,c=Ea(n.default,s!==void 0?n.share:n.exit);c!=="none"&&(zs(e,a,c,null,!1)?s!==void 0?(c=e.stateNode,s.paired=c,c.paired=s,di.delete(a),Xs(e,n.onShare)):Xs(e,n.onExit):ra(e.child,!1)),di!==null&&kh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Xh(e),e=e.sibling;else di!==null&&kh(e)}function Ev(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=ba(n,e.stateNode);n=Ea(n.default,n.update),e.flags&=-5,n!=="none"&&zs(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Ev(e);e=e.sibling}}function qh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,ra(e.child,!1))}qh(e)}e=e.sibling}}function Vu(e){if(e.tag===30)e.stateNode.paired=null,ra(e.child,!1),qh(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Vu(e),e=e.sibling;else qh(e)}function Tv(e){for(e=e.child;e!==null;)e.tag===30?ra(e.child,!1):(e.subtreeFlags&33554432)!==0&&Tv(e),e=e.sibling}function Wh(e,n,a,s,c,f,S){for(var R=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(f!==null&&$n<f.length){var it=f[$n],dt=Ed(B);(it.view||dt.view)&&(R=!0);var yt;if(yt=(e.flags&4)===0)if(dt.clip)yt=!0;else{yt=it.rect;var $=dt.rect;yt=yt.y!==$.y||yt.x!==$.x||yt.height!==$.height||yt.width!==$.width}yt&&(e.flags|=4),dt.abs?dt=!it.abs:(it=it.rect,dt=dt.rect,dt=it.height!==dt.height||it.width!==dt.width),dt&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&M_(B,$n===0?a:a+"_"+$n,c),R&&(e.flags&4)!==0||(aa===null&&(aa=[]),aa.push(B,$n===0?s:s+"_"+$n,n.memoizedProps)),$n++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&S?e.flags|=n.flags&32:Wh(e,n.child,a,s,c,f,S)&&(R=!0));n=n.sibling}return R}function Av(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,s=e.stateNode,c=ba(a,s),f=Ea(a.default,a.update),S;S=e.memoizedState,e.memoizedState=null,s=e;var R=e.child;$n=0,c=Wh(s,R,c,c,f,S,!1),(e.flags&4)!==0&&c&&Xs(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Av(e);e=e.sibling}}var wn=!1,We=!1,sa=!1,Yh=!1,wv=typeof WeakSet=="function"?WeakSet:Set,Rn=null,oa=!1,il=!1,ku=!1,Kh=!1;function XM(e,n,a){if(e=e.containerInfo,xd=to,e=N0(e),Of(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,S=c.focusNode;c=c.focusOffset;try{s.nodeType,S.nodeType}catch{s=null;break t}var R=0,B=-1,it=-1,dt=0,yt=0,$=e,ct=null;e:for(;;){for(var Gt;$!==s||f!==0&&$.nodeType!==3||(B=R+f),$!==S||c!==0&&$.nodeType!==3||(it=R+c),$.nodeType===3&&(R+=$.nodeValue.length),(Gt=$.firstChild)!==null;)ct=$,$=Gt;for(;;){if($===e)break e;if(ct===s&&++dt===f&&(B=R),ct===S&&++yt===c&&(it=R),(Gt=$.nextSibling)!==null)break;$=ct,ct=$.parentNode}$=Gt}s=B===-1||it===-1?null:{start:B,end:it}}else s=null}s=s||{start:0,end:0}}else s=null;for(Sd={focusedElem:e,selectionRange:s},to=!1,a=(a&335544064)===a,Rn=n,n=a?9270:1024;Rn!==null;){if(e=Rn,a&&(s=e.deletions,s!==null))for(f=0;f<s.length;f++)a&&Xh(s[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&yv(e),Xu(a);else{if(e.tag===22){if(s=e.alternate,e.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&Xh(s),Xu(a);continue}else if(s!==null&&s.memoizedState!==null){a&&yv(e),Xu(a);continue}}s=e.child,(e.subtreeFlags&n)!==0&&s!==null?(s.return=e,Rn=s):(a&&Ev(e),Xu(a))}}di=null}function Xu(e){for(;Rn!==null;){var n=Rn,a=e,s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&s!==null){a=void 0,c=s.memoizedProps,s=s.memoizedState;var f=n.stateNode;try{var S=Jr(n.type,c);a=f.getSnapshotBeforeUpdate(S,s),f.__reactInternalSnapshotBeforeUpdate=a}catch(R){Ke(n,n.return,R)}}break;case 3:if((c&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)wd(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":wd(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=ba(s.memoizedProps,s.stateNode),c=n.memoizedProps,c=Ea(c.default,c.update),c!=="none"&&zs(s,a,c,s.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Rn=s;break}Rn=n.return}}function Rv(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:la(e,a),s&4&&el(5,a);break;case 1:if(la(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ke(a,a.return,S)}else{var c=Jr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ke(a,a.return,S)}}s&64&&gv(a),s&512&&ia(a,a.return);break;case 3:if(la(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{rg(e,n)}catch(S){Ke(a,a.return,S)}}break;case 27:n===null&&s&4&&Sv(a);case 26:case 5:la(e,a),n===null&&s&4&&Bh(a),s&512&&ia(a,a.return);break;case 12:la(e,a);break;case 31:la(e,a),s&4&&Uv(e,a);break;case 13:la(e,a),s&4&&Lv(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=n1.bind(null,a),I1(e,a))));break;case 22:if(s=a.memoizedState!==null||wn,!s){var f=n!==null&&n.memoizedState!==null||We;n=wn,c=We,wn=s,(We=f)&&!c?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Fi(e,a,s)):la(e,a),wn=n,We=c}break;case 30:la(e,a),s&512&&ia(a,a.return);break;case 7:s&512&&ia(a,a.return);default:la(e,a)}}function Zh(e,n){for(e=e.child;e!==null;)Cv(e,n),e=e.sibling}function Cv(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var c=e.stateNode,f=e.memoizedProps.style,S=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(B){Ke(e,e.return,B)}Qh(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Te=!0}catch(B){Ke(e,e.return,B)}break;case 18:try{var R=e.stateNode;n?y_(R,!0):y_(e.stateNode,!1)}catch(B){Ke(e,e.return,B)}break;case 22:case 23:e.memoizedState===null&&Zh(e,n);break;default:Zh(e,n)}}function Qh(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,s=n;switch(a.tag){case 4:Cv(a,s);break t;case 22:a.memoizedState===null&&Qh(a,s);break t;default:Qh(a,s)}}e=e.sibling}}function Dv(e){var n=e.alternate;n!==null&&(e.alternate=null,Dv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&te(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ln=null,ti=!1;function Ii(e,n,a){for(a=a.child;a!==null;)Nv(e,n,a),a=a.sibling}function Nv(e,n,a){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(ie,a)}catch{}switch(a.tag){case 26:We||On(a,n),Ii(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!We&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:We||On(a,n),nl(a);var s=ln,c=ti;pr(a.type)&&(ln=a.stateNode,ti=!1),Ii(e,n,a),P_(a.stateNode,a.type,a.memoizedProps),ln=s,ti=c;break;case 5:We||On(a,n),nl(a);case 6:if(a.tag===6&&nl(a),s=ln,c=ti,ln=null,Ii(e,n,a),ln=s,ti=c,ln!==null)if(ti)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(a.stateNode),Te=!0}catch(f){Ke(a,n,f)}else try{ln.removeChild(a.stateNode),Te=!0}catch(f){Ke(a,n,f)}break;case 18:ln!==null&&(ti?(e=ln,S_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),eo(e)):S_(ln,a.stateNode));break;case 4:s=ln,c=ti,ln=a.stateNode.containerInfo,ti=!0,Ii(e,n,a),ln=s,ti=c;break;case 0:case 11:case 14:case 15:or(2,a,n),We||or(4,a,n),Ii(e,n,a);break;case 1:We||(On(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&vv(a,n,s)),Ii(e,n,a);break;case 21:Ii(e,n,a);break;case 22:We=(s=We)||a.memoizedState!==null,Ii(e,n,a),We=s;break;case 30:On(a,n),Ii(e,n,a);break;case 7:We||On(a,n),Ii(e,n,a);break;default:Ii(e,n,a)}}function Uv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{eo(e)}catch(a){Ke(n,n.return,a)}}}function Lv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{eo(e)}catch(a){Ke(n,n.return,a)}}function qM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new wv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new wv),n;default:throw Error(r(435,e.tag))}}function qu(e,n){var a=qM(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=i1.bind(null,e,s);s.then(c,c)}})}function Kn(e,n,a){var s=n.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c],S=e,R=n,B=R;t:for(;B!==null;){switch(B.tag){case 27:if(pr(B.type)){ln=B.stateNode,ti=!1;break t}break;case 5:ln=B.stateNode,ti=!1;break t;case 3:case 4:ln=B.stateNode.containerInfo,ti=!0;break t}B=B.return}if(ln===null)throw Error(r(160));Nv(S,R,f),ln=null,ti=!1,S=f.alternate,S!==null&&(S.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ov(n,e,a),n=n.sibling}var Bi=null;function Ov(e,n,a){var s=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(s=e.updateQueue,s=s!==null?s.events:null,s!==null))for(var f=0;f<s.length;f++){var S=s[f];S.ref.impl=S.nextImpl}Kn(n,e,a),Zn(e),c&4&&(or(3,e,e.return),el(3,e),or(5,e,e.return));break;case 1:Kn(n,e,a),Zn(e),c&512&&(We||s===null||On(s,s.return)),c&64&&wn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Bi,Kn(n,e,a),Zn(e),c&512&&(We||s===null||On(s,s.return)),c&4)if(c=s!==null?s.memoizedState:null,a=e.memoizedState,s===null)if(a===null)if(e.stateNode===null)if(wn)e.stateNode=v_(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":s=c.getElementsByTagName("title")[0],(!s||s[Ht]||s[w]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(n),c.head.insertBefore(s,c.querySelector("head > title"))),Pn(s,n,a),s[w]=e,Ee(s),n=s;break t;case"link":if(f=G_("link","href",c).get(n+(a.href||""))){for(S=0;S<f.length;S++)if(s=f[S],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(S,1);break e}}s=c.createElement(n),Pn(s,n,a),c.head.appendChild(s);break;case"meta":if(f=G_("meta","content",c).get(n+(a.content||""))){for(S=0;S<f.length;S++)if(s=f[S],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(S,1);break e}}s=c.createElement(n),Pn(s,n,a),c.head.appendChild(s);break;default:throw Error(r(468,n))}s[w]=e,Ee(s),n=s}e.stateNode=n}else wn||Od(f,e.type,e.stateNode);else e.stateNode=H_(f,a,e.memoizedProps);else c!==a?(c===null?(n=s.stateNode,n===null||We||n.parentNode.removeChild(n)):c.count--,a===null?wn||Od(f,e.type,e.stateNode):H_(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Fh(e,e.memoizedProps,s.memoizedProps);break;case 27:Kn(n,e,a),Zn(e),c&512&&(We||s===null||On(s,s.return)),s!==null&&c&4&&Fh(e,e.memoizedProps,s.memoizedProps);break;case 5:if(f=sa,sa=!1,Kn(n,e,a),sa=f,Zn(e),c&512&&(We||s===null||On(s,s.return)),e.flags&32){n=e.stateNode;try{_s(n,""),Te=!0}catch(dt){Ke(e,e.return,dt)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,Fh(e,n,s!==null?s.memoizedProps:n)),c&1024&&(Yh=!0);break;case 6:if(Kn(n,e,a),Zn(e),c&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,Te=!0}catch(dt){Ke(e,e.return,dt)}}break;case 3:if(Te=!1,sc=null,f=Bi,Bi=hl(n.containerInfo),Kn(n,e,a),Bi=f,Zn(e),c&4&&s!==null&&s.memoizedState.isDehydrated)try{eo(n.containerInfo)}catch(dt){Ke(e,e.return,dt)}Yh&&(Yh=!1,Pv(e)),Te=!1;break;case 4:c=sa,sa=wn,s=Ve(),f=Bi,Bi=hl(e.stateNode.containerInfo),Kn(n,e,a),Zn(e),Bi=f,Te&&il&&(ku=!0),Te=s,sa=c;break;case 12:Kn(n,e,a),Zn(e);break;case 31:Kn(n,e,a),Zn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,qu(e,n)));break;case 13:Kn(n,e,a),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ku=Yt()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,qu(e,n)));break;case 22:f=e.memoizedState!==null,S=s!==null&&s.memoizedState!==null;var R=wn,B=We,it=sa;wn=R||f,sa=it||f,We=B||S,Kn(n,e,a),We=B,sa=it,wn=R,Zn(e),c&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||s===null||S||wn||We||(n=S||We,a=wn,s=We,wn=f||wn,We=n,lr(e,2),wn=a,We=s),!f&&sa||Zh(e,f)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,qu(e,a))));break;case 19:Kn(n,e,a),Zn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,qu(e,n)));break;case 30:c&512&&(We||s===null||On(s,s.return)),c=Ve(),f=il,S=(a&335544064)===a,R=e.memoizedProps,il=S&&Ea(R.default,R.update)!=="none",Kn(n,e,a),Zn(e),S&&s!==null&&Te&&(e.flags|=4),il=f,Te=c;break;case 21:break;case 7:c&512&&(We||s===null||On(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=e);default:Kn(n,e,a),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(xv(s)){a=s;break}s=s.return}s=null;for(var c=e.return;c!==null;){if(Ih(c)){var f=c.stateNode;s===null?s=[f]:s.push(f)}if(zh(c))break;c=c.return}var S=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var R=a.stateNode,B=Hh(e);Fu(e,B,R,S);break;case 5:var it=a.stateNode;a.flags&32&&(_s(it,""),a.flags&=-33);var dt=Hh(e);Fu(e,dt,it,S);break;case 3:case 4:var yt=a.stateNode.containerInfo,$=Hh(e);Gh(e,$,yt,S);break;default:throw Error(r(161))}}catch(ct){Ke(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Pv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Pv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,to=!0,n.reset(),to=!1),e=e.sibling}}function Is(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)zv(n,e),n=n.sibling;else Av(n)}function zv(e,n){var a=e.alternate;if(a===null)Vh(e,!1);else switch(e.tag){case 3:if(Kh=oa=!1,Mv(),Is(n,e),!oa&&!ku){if(e=aa,e!==null)for(var s=0;s<e.length;s+=3){a=e[s];var c=e[s+1];b_(a,e[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Kh=!0}aa=null;break;case 5:Is(n,e);break;case 4:s=oa,oa=!1,Is(n,e),oa&&(ku=!0),oa=s;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Vh(e,!1):Is(n,e));break;case 30:s=oa,c=Mv(),oa=!1,Is(n,e),oa&&(e.flags|=4);var f=e.memoizedProps,S=e.stateNode;n=ba(f,S),S=ba(a.memoizedProps,S);var R=Ea(f.default,f.update);R==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,$n=0,n=Wh(e,a,n,S,R,f,!0),$n!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Xs(e,e.memoizedProps.onUpdate),aa=c):c!==null&&(c.push.apply(c,aa),aa=c),oa=(e.flags&32)!==0?!0:s;break;default:Is(n,e)}}function la(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Rv(e,n.alternate,n),n=n.sibling}function lr(e,n){for(e=e.child;e!==null;){var a=e,s=n;switch(a.tag){case 0:case 11:case 14:case 15:or(4,a,a.return),lr(a,s);break;case 1:On(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&vv(a,a.return,c),lr(a,s);break;case 27:(s&2)!==0&&P_(a.stateNode,a.type,a.memoizedProps);case 5:On(a,a.return),a.tag!==5&&a.tag!==27||nl(a),lr(a,s);break;case 6:nl(a);break;case 26:On(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||We||c.parentNode.removeChild(c),lr(a,s);break;case 22:a.memoizedState===null&&lr(a,s);break;case 30:On(a,a.return),lr(a,s);break;case 7:On(a,a.return);default:lr(a,s)}e=e.sibling}}function Fi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,S=f.flags,R=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Fi(c,f,a),el(4,f);break;case 1:if(Fi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(dt){Ke(s,s.return,dt)}if(s=f,c=s.updateQueue,c!==null){var B=s.stateNode;try{var it=c.shared.hiddenCallbacks;if(it!==null)for(c.shared.hiddenCallbacks=null,c=0;c<it.length;c++)ag(it[c],B)}catch(dt){Ke(s,s.return,dt)}}R&&S&64&&gv(f),ia(f,f.return);break;case 27:(a&2)!==0&&Sv(f);case 5:f.tag!==5&&f.tag!==27||_v(f),Fi(c,f,a),R&&s===null&&S&4&&Bh(f),ia(f,f.return);break;case 6:_v(f);break;case 26:B=f.stateNode,f.memoizedState!==null||B===null||wn||Od(hl(B.ownerDocument),f.type,B),Fi(c,f,a),R&&s===null&&S&4&&Bh(f),ia(f,f.return);break;case 12:Fi(c,f,a);break;case 31:Fi(c,f,a),R&&S&4&&Uv(c,f);break;case 13:Fi(c,f,a),R&&S&4&&Lv(c,f);break;case 22:f.memoizedState===null&&Fi(c,f,a),ia(f,f.return);break;case 30:Fi(c,f,a),ia(f,f.return);break;case 7:ia(f,f.return);default:Fi(c,f,a)}n=n.sibling}}function Jh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Vo(a))}function jh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Vo(e))}function Ci(e,n,a,s){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)Iv(e,n,a,s),n=n.sibling;else c&&Tv(n)}function Iv(e,n,a,s){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Vu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,s),f&2048&&el(9,n);break;case 1:Ci(e,n,a,s);break;case 3:Ci(e,n,a,s),c&&Kh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Vo(f)));break;case 12:if(f&2048){Ci(e,n,a,s),f=n.stateNode;try{var S=n.memoizedProps,R=S.id,B=S.onPostCommit;typeof B=="function"&&B(R,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(it){Ke(n,n.return,it)}}else Ci(e,n,a,s);break;case 31:Ci(e,n,a,s);break;case 13:Ci(e,n,a,s);break;case 23:break;case 22:S=n.stateNode,R=n.alternate,n.memoizedState!==null?(c&&R!==null&&R.memoizedState===null&&Vu(R),S._visibility&2?Ci(e,n,a,s):al(e,n)):(c&&R!==null&&R.memoizedState!==null&&Vu(n),S._visibility&2?Ci(e,n,a,s):(S._visibility|=2,Bs(e,n,a,s,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Jh(R,n);break;case 24:Ci(e,n,a,s),f&2048&&jh(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(ra(f.child,!0),ra(n.child,!0))),Ci(e,n,a,s);break;default:Ci(e,n,a,s)}}function Bs(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,S=n,R=a,B=s,it=S.flags;switch(S.tag){case 0:case 11:case 15:Bs(f,S,R,B,c),el(8,S);break;case 23:break;case 22:var dt=S.stateNode;S.memoizedState!==null?dt._visibility&2?Bs(f,S,R,B,c):al(f,S):(dt._visibility|=2,Bs(f,S,R,B,c)),c&&it&2048&&Jh(S.alternate,S);break;case 24:Bs(f,S,R,B,c),c&&it&2048&&jh(S.alternate,S);break;default:Bs(f,S,R,B,c)}n=n.sibling}}function al(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:al(a,s),c&2048&&Jh(s.alternate,s);break;case 24:al(a,s),c&2048&&jh(s.alternate,s);break;default:al(a,s)}n=n.sibling}}var jr=8192;function $r(e,n,a){if(e.subtreeFlags&jr)for(e=e.child;e!==null;)Bv(e,n,a),e=e.sibling}function Bv(e,n,a){switch(e.tag){case 26:$r(e,n,a),e.flags&jr&&(e.memoizedState!==null?J1(a,Bi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&q_(a,e)));break;case 5:$r(e,n,a),e.flags&jr&&(e=e.stateNode,(n&335544128)===n&&q_(a,e));break;case 3:case 4:var s=Bi;Bi=hl(e.stateNode.containerInfo),$r(e,n,a),Bi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=jr,jr=16777216,$r(e,n,a),jr=s):$r(e,n,a));break;case 30:if((e.flags&jr)!==0&&(s=e.memoizedProps.name,s!=null&&s!=="auto")){var c=e.stateNode;c.paired=null,di===null&&(di=new Map),di.set(s,c)}$r(e,n,a);break;default:$r(e,n,a)}}function Fv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function rl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,Gv(s,e)}Fv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hv(e),e=e.sibling}function Hv(e){switch(e.tag){case 0:case 11:case 15:rl(e),e.flags&2048&&or(9,e,e.return);break;case 3:rl(e);break;case 12:rl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Wu(e)):rl(e);break;default:rl(e)}}function Wu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,Gv(s,e)}Fv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:or(8,n,n.return),Wu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wu(n));break;default:Wu(n)}e=e.sibling}}function Gv(e,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:or(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Vo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Rn=s;else t:for(a=e;Rn!==null;){s=Rn;var c=s.sibling,f=s.return;if(Dv(s),s===a){Rn=null;break t}if(c!==null){c.return=f,Rn=c;break t}Rn=f}}}var WM={getCacheForType:function(e){var n=Nn(mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Nn(mn).controller.signal}},YM=typeof WeakMap=="function"?WeakMap:Map,ke=0,$e=null,Ce=null,Le=0,Ye=0,pi=null,ur=!1,Fs=!1,$h=!1,La=0,dn=0,cr=0,ts=0,Yu=0,mi=0,Hs=0,sl=null,ei=null,td=!1,Ku=0,Vv=0,Zu=1/0,Qu=null,fr=null,un=0,Hi=null,es=null,ua=0,ed=0,nd=null,kv=null,Gs=null,Vs=null,ks=null,ol=0,Ju=null;function gi(){return(ke&2)!==0&&Le!==0?Le&-Le:tt.T!==null?hd():Zl()}function Xv(){if(mi===0)if((Le&536870912)===0||Ae){var e=Or;Or<<=1,(Or&3932160)===0&&(Or=262144),mi=e}else mi=536870912;return e=Un.current,e!==null&&(e.flags|=32),mi}function Xs(e,n){if(n!=null){var a=e.stateNode,s=a.ref;s===null&&(s=a.ref=E_(ba(e.memoizedProps,a))),Vs===null&&(Vs=[]),Vs.push(n.bind(null,s))}}function ni(e,n,a){(e===$e&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(qs(e,0),hr(e,Le,mi,!1)),ji(e,a),((ke&2)===0||e!==$e)&&(e===$e&&((ke&2)===0&&(ts|=a),dn===4&&hr(e,Le,mi,!1)),ca(e))}function qv(e,n,a){if((ke&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ya(e,n),c=s?QM(e,n):ad(e,n,!0),f=s;do{if(c===0){Fs&&!s&&hr(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!KM(a)){c=ad(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var R=e;c=sl;var B=R.current.memoizedState.isDehydrated;if(B&&(qs(R,S).flags|=256),S=ad(R,S,!1),S!==2&&S!==6){if($h&&!B){R.errorRecoveryDisabledLanes|=f,ts|=f,c=4;break t}f=ei,ei=c,f!==null&&(ei===null?ei=f:ei.push.apply(ei,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){qs(e,0),hr(e,n,0,!0);break}t:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:hr(s,n,mi,!ur);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Ku+300-Yt(),10<c)){if(hr(s,n,mi,!ur),Pr(s,0,!0)!==0)break t;ua=n,s.timeoutHandle=bd(Wv.bind(null,s,a,ei,Qu,td,n,mi,ts,Hs,ur,f,"Throttled",-0,0),c);break t}Wv(s,a,ei,Qu,td,n,mi,ts,Hs,ur,f,null,-0,0)}}break}while(!0);ca(e)}function Wv(e,n,a,s,c,f,S,R,B,it,dt,yt,$,ct){e.timeoutHandle=-1;var Gt=n.subtreeFlags,ee=(f&335544064)===f;if(yt=null,(ee||Gt&8192||(Gt&16785408)===16785408)&&(yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},di=null,Bv(n,f,yt),ee&&(Gt=yt,ee=e.containerInfo,ee=(ee.nodeType===9?ee:ee.ownerDocument).__reactViewTransition,ee!=null&&(Gt.count++,Gt.waitingForViewTransition=!0,Gt=ml.bind(Gt),ee.finished.then(Gt,Gt))),Gt=(f&62914560)===f?Ku-Yt():(f&4194048)===f?Vv-Yt():0,Gt=j1(yt,Gt),Gt!==null)){ua=f,e.cancelPendingCommit=Gt(t_.bind(null,e,n,f,a,s,c,S,R,B,it,dt,yt,null,$,ct)),hr(e,f,S,!it);return}t_(e,n,f,a,s,c,S,R,B,it,dt,yt)}function KM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!fi(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function hr(e,n,a,s){n=Ji(e,n),n&=~Yu,n&=~ts,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-ge(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&zr(e,a,n)}function ju(){return(ke&6)===0?(ll(0),!1):!0}function id(){if(Ce!==null){if(Ye===0)var e=Ce.return;else e=Ce,wa=Vr=null,fh(e),Ns=null,qo=0,e=Ce;for(;e!==null;)mv(e.alternate,e),e=e.return;Ce=null}}function qs(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,_1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ua=0,id(),$e=e,Ce=a=Ta(e.current,null),Le=n,Ye=0,pi=null,ur=!1,Fs=Ya(e,n),$h=!1,Hs=mi=Yu=ts=cr=dn=0,ei=sl=null,td=!1,La=Ji(e,n),su(),a}function Yv(e,n){Se=null,tt.H=Nu,n===Ds||n===vu?(n=tg(),Ye=3):n===jf?(n=tg(),Ye=4):Ye=n===Ah?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,pi=n,Ce===null&&(dn=1,Uu(e,Ti(n,e.current)))}function Kv(){var e=Un.current;return e===null?!0:(Le&4194048)===Le?Bn===null:(Le&62914560)===Le||(Le&536870912)!==0?e===Bn:!1}function Zv(){var e=tt.H;return tt.H=Nu,e===null?Nu:e}function Qv(){var e=tt.A;return tt.A=WM,e}function $u(){dn=4,ur||(Le&4194048)!==Le&&Un.current!==null||(Fs=!0),(cr&134217727)===0&&(ts&134217727)===0||$e===null||hr($e,Le,mi,!1)}function ad(e,n,a){var s=ke;ke|=2;var c=Zv(),f=Qv();($e!==e||Le!==n)&&(Qu=null,qs(e,n)),n=!1;var S=dn;t:do try{if(Ye!==0&&Ce!==null){var R=Ce,B=pi;switch(Ye){case 8:id(),S=6;break t;case 3:case 2:case 9:case 6:Un.current===null&&(n=!0);var it=Ye;if(Ye=0,pi=null,Ws(e,R,B,it),a&&Fs){S=0;break t}break;default:it=Ye,Ye=0,pi=null,Ws(e,R,B,it)}}ZM(),S=dn;break}catch(dt){Yv(e,dt)}while(!0);return n&&e.shellSuspendCounter++,wa=Vr=null,ke=s,tt.H=c,tt.A=f,Ce===null&&($e=null,Le=0,su()),S}function ZM(){for(;Ce!==null;)Jv(Ce)}function QM(e,n){var a=ke;ke|=2;var s=Zv(),c=Qv();$e!==e||Le!==n?(Qu=null,Zu=Yt()+500,qs(e,n)):Fs=Ya(e,n);t:do try{if(Ye!==0&&Ce!==null){n=Ce;var f=pi;e:switch(Ye){case 1:Ye=0,pi=null,Ws(e,n,f,1);break;case 2:case 9:if(j0(f)){Ye=0,pi=null,jv(n);break}n=function(){Ye!==2&&Ye!==9||$e!==e||(Ye=7),ca(e)},f.then(n,n);break t;case 3:Ye=7;break t;case 4:Ye=5;break t;case 7:j0(f)?(Ye=0,pi=null,jv(n)):(Ye=0,pi=null,Ws(e,n,f,7));break;case 5:var S=null;switch(Ce.tag){case 26:S=Ce.memoizedState;case 5:case 27:var R=Ce;if(S?k_(S):R.stateNode.complete){Ye=0,pi=null;var B=R.sibling;if(B!==null)Ce=B;else{var it=R.return;it!==null?(Ce=it,tc(it)):Ce=null}break e}}Ye=0,pi=null,Ws(e,n,f,5);break;case 6:Ye=0,pi=null,Ws(e,n,f,6);break;case 8:id(),dn=6;break t;default:throw Error(r(462))}}JM();break}catch(dt){Yv(e,dt)}while(!0);return wa=Vr=null,tt.H=s,tt.A=c,ke=a,Ce!==null?0:($e=null,Le=0,su(),dn)}function JM(){for(;Ce!==null&&!Bt();)Jv(Ce)}function Jv(e){var n=dv(e.alternate,e,La);e.memoizedProps=e.pendingProps,n===null?tc(e):Ce=n}function jv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=sv(a,n,n.pendingProps,n.type,void 0,Le);break;case 11:n=sv(a,n,n.pendingProps,n.type.render,n.ref,Le);break;case 5:fh(n);var s=n;s===An&&(Ae?(hu(s),s.tag===5&&s.stateNode!=null&&(nn=s.stateNode)):(hu(s),Ae=!0));default:mv(a,n),n=Ce=G0(n,La),n=dv(a,n,La)}e.memoizedProps=e.pendingProps,n===null?tc(e):Ce=n}function Ws(e,n,a,s){wa=Vr=null,fh(n),Ns=null,qo=0;var c=n.return;try{if(BM(e,c,n,a,Le)){dn=1,Uu(e,Ti(a,e.current)),Ce=null;return}}catch(f){if(c!==null)throw Ce=c,f;dn=1,Uu(e,Ti(a,e.current)),Ce=null;return}n.flags&32768?(Ae||s===1?e=!0:Fs||(Le&536870912)!==0?e=!1:(ur=e=!0,(s===2||s===9||s===3||s===6)&&(s=Un.current,s!==null&&s.tag===13&&(s.flags|=16384))),$v(n,e)):tc(n)}function tc(e){var n=e;do{if((n.flags&32768)!==0){$v(n,ur);return}e=n.return;var a=VM(n.alternate,n,La);if(a!==null){Ce=a;return}if(n=n.sibling,n!==null){Ce=n;return}Ce=n=e}while(n!==null);dn===0&&(dn=5)}function $v(e,n){do{var a=kM(e.alternate,e);if(a!==null){a.flags&=32767,Ce=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=a}while(e!==null);dn=6,Ce=null}function t_(e,n,a,s,c,f,S,R,B,it,dt,yt){e.cancelPendingCommit=null;do ec();while(un!==0);if((ke&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));e===$e&&(Ce=$e=null,Le=0),es=n,Hi=e,ua=a,nd=c,kv=s,jM(e,n,a,S,R,B,yt)}}function jM(e,n,a,s,c,f,S){var R=n.lanes|n.childLanes;if(ed=R,R|=Ff,Kl(e,a,R,s,c,f),Vs=null,(a&335544064)===a?(ks=AM(e),s=10262):(ks=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(e.callbackNode=null,e.callbackPriority=0,a1(Pt,function(){return ld(),null})):(e.callbackNode=null,e.callbackPriority=0),Hu=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=tt.T,tt.T=null,c=Ut.p,Ut.p=2,f=ke,ke|=4;try{XM(e,n,a)}finally{ke=f,Ut.p=c,tt.T=s}}un=1,Hu?Gs=E1(S,e.containerInfo,ks,rd,sd,t1,od,ld,$M):(rd(),sd(),od())}function $M(e){if(un!==0){var n=Hi.onRecoverableError;n(e,{componentStack:null})}}function t1(){un===3&&(un=0,zv(es,Hi),un=4)}function rd(){if(un===1){un=0;var e=Hi,n=es,a=ua,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=tt.T,tt.T=null;var c=Ut.p;Ut.p=2;var f=ke;ke|=4;try{il=ku=!1,Ov(n,e,a),a=Sd;var S=N0(e.containerInfo),R=a.focusedElem,B=a.selectionRange;if(S!==R&&R&&R.ownerDocument&&D0(R.ownerDocument.documentElement,R)){if(B!==null&&Of(R)){var it=B.start,dt=B.end;if(dt===void 0&&(dt=it),"selectionStart"in R)R.selectionStart=it,R.selectionEnd=Math.min(dt,R.value.length);else{var yt=R.ownerDocument||document,$=yt&&yt.defaultView||window;if($.getSelection){var ct=$.getSelection(),Gt=R.textContent.length,ee=Math.min(B.start,Gt),ye=B.end===void 0?ee:Math.min(B.end,Gt);!ct.extend&&ee>ye&&(S=ye,ye=ee,ee=S);var nt=C0(R,ee),X=C0(R,ye);if(nt&&X&&(ct.rangeCount!==1||ct.anchorNode!==nt.node||ct.anchorOffset!==nt.offset||ct.focusNode!==X.node||ct.focusOffset!==X.offset)){var st=yt.createRange();st.setStart(nt.node,nt.offset),ct.removeAllRanges(),ee>ye?(ct.addRange(st),ct.extend(X.node,X.offset)):(st.setEnd(X.node,X.offset),ct.addRange(st))}}}}for(yt=[],ct=R;ct=ct.parentNode;)ct.nodeType===1&&yt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<yt.length;R++){var St=yt[R];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}to=!!xd,Sd=xd=null}finally{ke=f,Ut.p=c,tt.T=s}}e.current=n,un=2}}function sd(){if(un===2){un=0;var e=Hi,n=es,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=tt.T,tt.T=null;var s=Ut.p;Ut.p=2;var c=ke;ke|=4;try{Rv(e,n.alternate,n)}finally{ke=c,Ut.p=s,tt.T=a}}un=3}}function od(){if(un===4||un===3){un=0;var e=Gs;Gs=null,zt();var n=Hi,a=es,s=ua,c=kv,f=(s&335544064)===s?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?un=5:(un=0,es=Hi=null,e_(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(fr=null),Do(s),a=a.stateNode,qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(ie,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=tt.T,f=Ut.p,Ut.p=2,tt.T=null;try{for(var S=n.onRecoverableError,R=0;R<c.length;R++){var B=c[R];S(B.value,{componentStack:B.stack})}}finally{tt.T=a,Ut.p=f}}if(c=Vs,S=ks,ks=null,c!==null&&(Vs=null,S===null&&(S=[]),e!==null))for(B=0;B<c.length;B++)a=(0,c[B])(S),a!==void 0&&e.finished.finally(a);(ua&3)!==0&&ec(),ca(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===Ju?ol++:(ol=0,Ju=n):(ol=0,Ju=null),ll(0)}}function e_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Vo(n)))}function ec(){return Gs!==null&&(Gs.skipTransition(),Gs=null),rd(),sd(),od(),ld()}function ld(){if(un!==5)return!1;var e=Hi,n=ed;ed=0;var a=Do(ua),s=tt.T,c=Ut.p;try{Ut.p=32>a?32:a,tt.T=null,a=nd,nd=null;var f=Hi,S=ua;if(un=0,es=Hi=null,ua=0,(ke&6)!==0)throw Error(r(331));var R=ke;if(ke|=4,Hv(f.current),Iv(f,f.current,S,a),ke=R,ll(0,!1),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(ie,f)}catch{}return!0}finally{Ut.p=c,tt.T=s,e_(e,n)}}function n_(e,n,a){n=Ti(a,n),n=Th(e.stateNode,n,2),e=ir(e,n,2),e!==null&&(ji(e,2),ca(e))}function Ke(e,n,a){if(e.tag===3)n_(e,e,a);else for(;n!==null;){if(n.tag===3){n_(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(fr===null||!fr.has(s))){e=Ti(a,e),a=jg(2),s=ir(n,a,2),s!==null&&($g(a,s,n,e),ji(s,2),ca(s));break}}n=n.return}}function ud(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new YM;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||($h=!0,c.add(a),e=e1.bind(null,e,n,a),n.then(e,e))}function e1(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,$e===e&&(Le&a)===a&&((dn===4||dn===3&&(Le&62914560)===Le&&300>Yt()-Ku)&&(ke&2)===0?qs(e,0):Yu|=a,Hs===Le&&(Hs=0)),ca(e)}function i_(e,n){n===0&&(n=Ao()),e=Fr(e,n),e!==null&&(ji(e,n),ca(e))}function n1(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),i_(e,a)}function i1(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),i_(e,a)}function a1(e,n){return Ot(e,n)}var Ys=null,Ks=null,cd=!1,nc=!1,fd=!1,dr=0;function ca(e){e!==Ks&&e.next===null&&(Ks===null?Ys=Ks=e:Ks=Ks.next=e),nc=!0,cd||(cd=!0,s1())}function ll(e,n){if(!fd&&nc){fd=!0;do for(var a=!1,s=Ys;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,R=s.pingedLanes;f=(1<<31-ge(42|e)+1)-1,f&=c&~(S&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,o_(s,f))}else f=Le,f=Pr(s,s===$e?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ya(s,f)||(a=!0,o_(s,f));s=s.next}while(a);fd=!1}}function r1(){a_()}function a_(){nc=cd=!1;var e=0;dr!==0&&v1()&&(e=dr);for(var n=Yt(),a=null,s=Ys;s!==null;){var c=s.next,f=r_(s,n);f===0?(s.next=null,a===null?Ys=c:a.next=c,c===null&&(Ks=a)):(a=s,(e!==0||(f&3)!==0)&&(nc=!0)),s=c}un!==0&&un!==5||ll(e),dr!==0&&(dr=0)}function r_(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-ge(f),R=1<<S,B=c[S];B===-1?((R&a)===0||(R&s)!==0)&&(c[S]=To(R,n)):B<=n&&(e.expiredLanes|=R),f&=~R}if(n=$e,a=Le,a=Pr(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&ne(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ya(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&ne(s),Do(a)){case 2:case 8:a=J;break;case 32:a=Pt;break;case 268435456:a=Ft;break;default:a=Pt}return s=s_.bind(null,e),a=Ot(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&ne(s),e.callbackPriority=2,e.callbackNode=null,2}function s_(e,n){if(un!==0&&un!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ec()&&e.callbackNode!==a)return null;var s=Le;return s=Pr(e,e===$e?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(qv(e,s,n),r_(e,Yt()),e.callbackNode!=null&&e.callbackNode===a?s_.bind(null,e):null)}function o_(e,n){if(ec())return null;qv(e,n,!0)}function s1(){x1(function(){(ke&6)!==0?Ot(pe,r1):a_()})}function hd(){if(dr===0){var e=qr;e===0&&(e=ms,ms<<=1,(ms&261888)===0&&(ms=256)),dr=e}return dr}function l_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:jl(e)}function o1(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=l_((c[V]||null).action),S=s.submitter;S&&(n=(n=S[V]||null)?l_(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var R=new nu("action","action",null,s,c);e.push({event:R,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(dr!==0){var B=new FormData(c,S);Sh(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(R.preventDefault(),B=new FormData(c,S),Sh(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var dd=0;dd<Bf.length;dd++){var pd=Bf[dd],l1=pd.toLowerCase(),u1=pd[0].toUpperCase()+pd.slice(1);zi(l1,"on"+u1)}zi(O0,"onAnimationEnd"),zi(P0,"onAnimationIteration"),zi(z0,"onAnimationStart"),zi("dblclick","onDoubleClick"),zi("focusin","onFocus"),zi("focusout","onBlur"),zi(_M,"onTransitionRun"),zi(xM,"onTransitionStart"),zi(SM,"onTransitionCancel"),zi(I0,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kt("onBeforeInput",["compositionend","keypress","textInput","paste"]),kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function u_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var R=s[S],B=R.instance,it=R.currentTarget;if(R=R.listener,B!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=it;try{f(c)}catch(dt){ru(dt)}c.currentTarget=null,f=B}else for(S=0;S<s.length;S++){if(R=s[S],B=R.instance,it=R.currentTarget,R=R.listener,B!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=it;try{f(c)}catch(dt){ru(dt)}c.currentTarget=null,f=B}}}}function De(e,n){var a=n[ot];a===void 0&&(a=n[ot]=new Set);var s=e+"__bubble";a.has(s)||(c_(n,e,2,!1),a.add(s))}function md(e,n,a){var s=0;n&&(s|=4),c_(a,e,s,n)}var ic="_reactListening"+Math.random().toString(36).slice(2);function gd(e){if(!e[ic]){e[ic]=!0,qe.forEach(function(a){a!=="selectionchange"&&(c1.has(a)||md(a,!1,e),md(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ic]||(n[ic]=!0,md("selectionchange",!1,n))}}function c_(e,n,a,s){switch($_(n)){case 2:var c=nb;break;case 8:c=ib;break;default:c=zd}a=c.bind(null,n,a,e),c=void 0,!Ef||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function vd(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var R=s.stateNode.containerInfo;if(R===c)break;if(S===4)for(S=s.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;R!==null;){if(S=fe(R),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){s=f=S;continue t}R=R.parentNode}}s=s.return}c0(function(){var it=f,dt=Mf(a),yt=[];t:{var $=B0.get(e);if($!==void 0){var ct=nu,Gt=e;switch(e){case"keypress":if(tu(a)===0)break t;case"keydown":case"keyup":ct=Ky;break;case"focusin":Gt="focus",ct=Rf;break;case"focusout":Gt="blur",ct=Rf;break;case"beforeblur":case"afterblur":ct=Rf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=d0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=zy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=$y;break;case O0:case P0:case z0:ct=Fy;break;case I0:ct=eM;break;case"scroll":case"scrollend":ct=Oy;break;case"wheel":ct=iM;break;case"copy":case"cut":case"paste":ct=Gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=m0;break;case"submit":ct=Jy;break;case"toggle":case"beforetoggle":ct=rM}var ee=(n&4)!==0,ye=!ee&&(e==="scroll"||e==="scrollend"),nt=ee?$!==null?$+"Capture":null:$;ee=[];for(var X=it,st;X!==null;){var St=X;if(st=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||st===null||nt===null||(St=No(X,nt),St!=null&&ee.push(cl(X,St,st))),ye)break;X=X.return}0<ee.length&&($=new ct($,Gt,null,a,dt),yt.push({event:$,listeners:ee}))}}if((n&7)===0){t:{if(ct=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",ct&&a!==yf&&(Gt=a.relatedTarget||a.fromElement)&&(fe(Gt)||Gt[pt]))break t;($||ct)&&(Gt=dt.window===dt?dt:(ct=dt.ownerDocument)?ct.defaultView||ct.parentWindow:window,$?(ct=a.relatedTarget||a.toElement,$=it,ct=ct?fe(ct):null,ct!==null&&(ye=u(ct),ee=ct.tag,ct!==ye||ee!==5&&ee!==27&&ee!==6)&&(ct=null)):($=null,ct=it),$!==ct&&(ee=d0,St="onMouseLeave",nt="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ee=m0,St="onPointerLeave",nt="onPointerEnter",X="pointer"),ye=$==null?Gt:Qt($),st=ct==null?Gt:Qt(ct),Gt=new ee(St,X+"leave",$,a,dt),Gt.target=ye,Gt.relatedTarget=st,St=null,fe(dt)===it&&(ee=new ee(nt,X+"enter",ct,a,dt),ee.target=st,ee.relatedTarget=ye,St=ee),ye=St,ee=$&&ct?D($,ct,f1):null,$!==null&&f_(yt,Gt,$,ee,!1),ct!==null&&ye!==null&&f_(yt,ye,ct,ee,!0)))}t:{if($=it?Qt(it):window,ct=$.nodeName&&$.nodeName.toLowerCase(),ct==="select"||ct==="input"&&$.type==="file")var Jt=b0;else if(y0($))if(E0)Jt=mM;else{Jt=dM;var Oe=hM}else ct=$.nodeName,!ct||ct.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?it&&Sf(it.elementType)&&(Jt=b0):Jt=pM;if(Jt&&(Jt=Jt(e,it))){M0(yt,Jt,a,dt);break t}Oe&&Oe(e,$,it)}switch(Oe=it?Qt(it):window,e){case"focusin":(y0(Oe)||Oe.contentEditable==="true")&&(Ms=Oe,Pf=it,Fo=null);break;case"focusout":Fo=Pf=Ms=null;break;case"mousedown":zf=!0;break;case"contextmenu":case"mouseup":case"dragend":zf=!1,U0(yt,a,dt);break;case"selectionchange":if(vM)break;case"keydown":case"keyup":U0(yt,a,dt)}var ae;if(Df)t:{switch(e){case"compositionstart":var le="onCompositionStart";break t;case"compositionend":le="onCompositionEnd";break t;case"compositionupdate":le="onCompositionUpdate";break t}le=void 0}else ys?x0(e,a)&&(le="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(le="onCompositionStart");le&&(g0&&a.locale!=="ko"&&(ys||le!=="onCompositionStart"?le==="onCompositionEnd"&&ys&&(ae=f0()):(Ka=dt,Tf="value"in Ka?Ka.value:Ka.textContent,ys=!0)),Oe=ac(it,le),0<Oe.length&&(le=new p0(le,e,null,a,dt),yt.push({event:le,listeners:Oe}),ae?le.data=ae:(ae=S0(a),ae!==null&&(le.data=ae)))),(ae=oM?lM(e,a):uM(e,a))&&(le=ac(it,"onBeforeInput"),0<le.length&&(Oe=new p0("onBeforeInput","beforeinput",null,a,dt),yt.push({event:Oe,listeners:le}),Oe.data=ae)),o1(yt,e,it,a,dt)}u_(yt,n)})}function cl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ac(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=No(e,a),c!=null&&s.unshift(cl(e,c,f)),c=No(e,n),c!=null&&s.push(cl(e,c,f))),e.tag===3)return s;e=e.return}return[]}function f1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function f_(e,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var R=a,B=R.alternate,it=R.stateNode;if(R=R.tag,B!==null&&B===s)break;R!==5&&R!==26&&R!==27||it===null||(B=it,c?(it=No(a,f),it!=null&&S.unshift(cl(a,it,B))):c||(it=No(a,f),it!=null&&S.push(cl(a,it,B)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var h1=/\r\n?/g,d1=/\u0000|\uFFFD/g;function h_(e){return(typeof e=="string"?e:""+e).replace(h1,`
`).replace(d1,"")}function d_(e,n){return n=h_(n),h_(e)===n}function Ze(e,n,a,s,c,f){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||_s(e,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&_s(e,""+s);else return;break;case"className":ci(e,"class",s);break;case"tabIndex":ci(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ci(e,a,s);break;case"style":l0(e,s,f);return;case"data":if(n!=="object"){ci(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=jl(s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ze(e,n,"name",c.name,c,null),Ze(e,n,"formEncType",c.formEncType,c,null),Ze(e,n,"formMethod",c.formMethod,c,null),Ze(e,n,"formTarget",c.formTarget,c,null)):(Ze(e,n,"encType",c.encType,c,null),Ze(e,n,"method",c.method,c,null),Ze(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=jl(s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=ta);return;case"onScroll":s!=null&&De("scroll",e);return;case"onScrollEnd":s!=null&&De("scrollend",e);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));f?.__html!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=jl(s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":De("beforetoggle",e),De("toggle",e),en(e,"popover",s);break;case"xlinkActuate":Ue(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ue(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ue(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ue(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ue(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ue(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ue(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ue(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ue(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":en(e,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Uy.get(a)||a,en(e,a,s);else return}Te=!0}function _d(e,n,a,s,c,f){switch(a){case"style":l0(e,s,f);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));f?.__html!==a&&(e.innerHTML=a)}}break;case"children":if(typeof s=="string")_s(e,s);else if(typeof s=="number"||typeof s=="bigint")_s(e,""+s);else return;break;case"onScroll":s!=null&&De("scroll",e);return;case"onScrollEnd":s!=null&&De("scrollend",e);return;case"onClick":s!=null&&(e.onclick=ta);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!yn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=e[V]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,c),typeof s=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,s,c);break t}Te=!0,a in e?e[a]=s:s===!0?e.setAttribute(a,""):en(e,a,s)}return}Te=!0}function Pn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",e),De("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ze(e,n,f,S,a,null)}}c&&Ze(e,n,"srcSet",a.srcSet,a,null),s&&Ze(e,n,"src",a.src,a,null);return;case"input":De("invalid",e);var R=f=S=c=null,B=null,it=null;for(s in a)if(a.hasOwnProperty(s)){var dt=a[s];if(dt!=null)switch(s){case"name":c=dt;break;case"type":S=dt;break;case"checked":B=dt;break;case"defaultChecked":it=dt;break;case"value":f=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Ze(e,n,s,dt,a,null)}}a0(e,f,R,B,it,S,c,!1);return;case"select":De("invalid",e),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":S=R;break;case"multiple":s=R;default:Ze(e,n,c,R,a,null)}n=f,a=S,e.multiple=!!s,n!=null?vs(e,!!s,n,!1):a!=null&&vs(e,!!s,a,!0);return;case"textarea":De("invalid",e),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":s=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Ze(e,n,S,R,a,null)}s0(e,s,c,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":Ze(e,n,B,s,a,null));return;case"dialog":De("beforetoggle",e),De("toggle",e),De("cancel",e),De("close",e);break;case"iframe":case"object":De("load",e);break;case"video":case"audio":for(s=0;s<ul.length;s++)De(ul[s],e);break;case"image":De("error",e),De("load",e);break;case"details":De("toggle",e);break;case"embed":case"source":case"link":De("error",e),De("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(s=a[it],s!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ze(e,n,it,s,a,null)}return;default:if(Sf(n)){for(dt in a)a.hasOwnProperty(dt)&&(s=a[dt],s!==void 0&&_d(e,n,dt,s,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(s=a[R],s!=null&&Ze(e,n,R,s,a,null))}var p1={};function m1(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,R=null,B=null,it=null,dt=null;for(ct in a){var yt=a[ct];if(a.hasOwnProperty(ct)&&yt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":B=yt;default:s.hasOwnProperty(ct)||Ze(e,n,ct,null,s,yt)}}for(var $ in s){var ct=s[$];if(yt=a[$],s.hasOwnProperty($)&&(ct!=null||yt!=null))switch($){case"type":ct!==yt&&(Te=!0),f=ct;break;case"name":ct!==yt&&(Te=!0),c=ct;break;case"checked":ct!==yt&&(Te=!0),it=ct;break;case"defaultChecked":ct!==yt&&(Te=!0),dt=ct;break;case"value":ct!==yt&&(Te=!0),S=ct;break;case"defaultValue":ct!==yt&&(Te=!0),R=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:ct!==yt&&Ze(e,n,$,ct,s,yt)}}_f(e,S,R,B,it,dt,f,c);return;case"select":ct=S=R=$=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ct=B;default:s.hasOwnProperty(f)||Ze(e,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":f!==B&&(Te=!0),$=f;break;case"defaultValue":f!==B&&(Te=!0),R=f;break;case"multiple":f!==B&&(Te=!0),S=f;default:f!==B&&Ze(e,n,c,f,s,B)}n=R,a=S,s=ct,$!=null?vs(e,!!a,$,!1):!!s!=!!a&&(n!=null?vs(e,!!a,n,!0):vs(e,!!a,a?[]:"",!1));return;case"textarea":ct=$=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!s.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ze(e,n,R,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":c!==f&&(Te=!0),$=c;break;case"defaultValue":c!==f&&(Te=!0),ct=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ze(e,n,S,c,s,f)}r0(e,$,ct);return;case"option":for(var Gt in a)$=a[Gt],a.hasOwnProperty(Gt)&&$!=null&&!s.hasOwnProperty(Gt)&&(Gt==="selected"?e.selected=!1:Ze(e,n,Gt,null,s,$));for(B in s)$=s[B],ct=a[B],s.hasOwnProperty(B)&&$!==ct&&($!=null||ct!=null)&&(B==="selected"?($!==ct&&(Te=!0),e.selected=$&&typeof $!="function"&&typeof $!="symbol"):Ze(e,n,B,$,s,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)$=a[ee],a.hasOwnProperty(ee)&&$!=null&&!s.hasOwnProperty(ee)&&Ze(e,n,ee,null,s,$);for(it in s)if($=s[it],ct=a[it],s.hasOwnProperty(it)&&$!==ct&&($!=null||ct!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:Ze(e,n,it,$,s,ct)}return;default:if(Sf(n)){for(var ye in a)$=a[ye],a.hasOwnProperty(ye)&&$!==void 0&&!s.hasOwnProperty(ye)&&_d(e,n,ye,void 0,s,$);for(dt in s)$=s[dt],ct=a[dt],!s.hasOwnProperty(dt)||$===ct||$===void 0&&ct===void 0||_d(e,n,dt,$,s,ct);return}}for(var nt in a)$=a[nt],a.hasOwnProperty(nt)&&$!=null&&!s.hasOwnProperty(nt)&&Ze(e,n,nt,null,s,$);for(yt in s)$=s[yt],ct=a[yt],!s.hasOwnProperty(yt)||$===ct||$==null&&ct==null||Ze(e,n,yt,$,s,ct)}function p_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function g1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,S=c.initiatorType,R=c.duration;if(f&&R&&p_(S)){for(S=0,R=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],it=B.startTime;if(it>R)break;var dt=B.transferSize,yt=B.initiatorType;dt&&p_(yt)&&(B=B.responseEnd,S+=dt*(B<R?1:(R-it)/(B-it)))}if(--s,n+=8*(f+S)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xd=null,Sd=null;function fl(e){return e.nodeType===9?e:e.ownerDocument}function m_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function g_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function v_(e,n,a,s){return a=fl(a).createElement(e),a[w]=s,a[V]=n,Pn(a,e,n),Ee(a),a}function yd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Md=null;function v1(){var e=window.event;return e&&e.type==="popstate"?e===Md?!1:(Md=e,!0):(Md=null,!1)}var bd=typeof setTimeout=="function"?setTimeout:void 0,_1=typeof clearTimeout=="function"?clearTimeout:void 0,__=typeof Promise=="function"?Promise:void 0,x_=typeof requestAnimationFrame=="function"?requestAnimationFrame:bd,x1=typeof queueMicrotask=="function"?queueMicrotask:typeof __<"u"?function(e){return __.resolve(null).then(e).catch(S1)}:bd;function S1(e){setTimeout(function(){throw e})}function pr(e){return e==="head"}function S_(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),eo(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Nd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Nd(a);for(var f=a.firstChild;f;){var S=f.nextSibling,R=f.nodeName;f[Ht]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&Nd(e.ownerDocument.body);a=c}while(a);eo(n)}function y_(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function M_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var s=1;else for(var c=s=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&s++}s===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function b_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function y1(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Ed(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return y1(n,a,e)}function M1(e){return e.documentElement.clientHeight}function b1(e){this.addEventListener("load",e),this.addEventListener("error",e)}function E1(e,n,a,s,c,f,S,R,B){var it=n.nodeType===9?n:n.ownerDocument;try{var dt=it.startViewTransition({update:function(){var $=it.defaultView,ct=$.navigation&&$.navigation.transition,Gt=it.fonts.status;s();var ee=[];if(Gt==="loaded"&&(M1(it),it.fonts.status==="loading"&&ee.push(it.fonts.ready)),Gt=ee.length,e!==null)for(var ye=e.suspenseyImages,nt=0,X=0;X<ye.length;X++){var st=ye[X];if(!st.complete){var St=st.getBoundingClientRect();if(0<St.bottom&&0<St.right&&St.top<$.innerHeight&&St.left<$.innerWidth){if(nt+=X_(st),nt>oc){ee.length=Gt;break}st=new Promise(b1.bind(st)),ee.push(st)}}}if(0<ee.length)return $=Promise.race([Promise.all(ee),new Promise(function(Jt){return setTimeout(Jt,500)})]).then(c,c),(ct?Promise.allSettled([ct.finished,$]):$).then(f,f);if(c(),ct)return ct.finished.then(f,f);f()},types:a});it.__reactViewTransition=dt;var yt=[];return dt.ready.then(function(){for(var $=it.documentElement.getAnimations({subtree:!0}),ct=0;ct<$.length;ct++){var Gt=$[ct],ee=Gt.effect,ye=ee.pseudoElement;if(ye!=null&&ye.startsWith("::view-transition")){yt.push(Gt),Gt=ee.getKeyframes();for(var nt=ye=void 0,X=!0,st=0;st<Gt.length;st++){var St=Gt[st],Jt=St.width;if(ye===void 0)ye=Jt;else if(ye!==Jt){X=!1;break}if(Jt=St.height,nt===void 0)nt=Jt;else if(nt!==Jt){X=!1;break}delete St.width,delete St.height,St.transform==="none"&&delete St.transform}X&&ye!==void 0&&nt!==void 0&&(ee.setKeyframes(Gt),X=getComputedStyle(ee.target,ee.pseudoElement),X.width!==ye||X.height!==nt)&&(X=Gt[0],X.width=ye,X.height=nt,X=Gt[Gt.length-1],X.width=ye,X.height=nt,ee.setKeyframes(Gt))}}S()},function($){it.__reactViewTransition===dt&&(it.__reactViewTransition=null);try{typeof $=="object"&&$!==null&&$.name==="InvalidStateError"&&($.message==="View transition was skipped because document visibility state is hidden."||$.message==="Skipping view transition because document visibility state has become hidden."||$.message==="Skipping view transition because viewport size changed."||$.message==="Transition was aborted because of invalid state")&&($=null),$!==null&&B($)}finally{s(),c(),S()}}),dt.finished.finally(function(){for(var $=0;$<yt.length;$++)yt[$].cancel();it.__reactViewTransition===dt&&(it.__reactViewTransition=null),R()}),dt}catch{return s(),c(),S(),null}}function ns(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}ns.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:N({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},ns.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),s=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===e&&f.pseudoElement===n&&s.push(a[c])}return s},ns.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function E_(e){return{name:e,group:new ns("group",e),imagePair:new ns("image-pair",e),old:new ns("old",e),new:new ns("new",e)}}function vi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}vi.prototype.addEventListener=function(e,n,a){var s=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(A_(f,e,n,a)===-1){var S=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(B){S.removeEventListener(e,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),s!==null&&(c=S.removeEventListener.bind(S,e,n,a),s.addEventListener("abort",c,{once:!0}),c=s.removeEventListener.bind(s,"abort",c)),s=Zs(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:c}),_(this._fragmentFiber.child,!1,T1,e,R,s)}this._eventListeners=f}};function T1(e,n,a,s){return b(e).addEventListener(n,a,s),!1}vi.prototype.removeEventListener=function(e,n,a){var s=this._eventListeners;if(s!==null&&(n=A_(s,e,n,a),n!==-1)){var c=s[n];a=c.attachedListener;var f=c.cleanup;c=Zs(c.optionsOrUseCapture),_(this._fragmentFiber.child,!1,A1,e,a,c),s.splice(n,1),f!==null&&f()}};function A1(e,n,a,s){return b(e).removeEventListener(n,a,s),!1}function Zs(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function T_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function A_(e,n,a,s){if(e.length===0)return-1;s=T_(s);for(var c=0;c<e.length;c++){var f=e[c];if(f.type===n&&f.listener===a&&T_(f.optionsOrUseCapture)===s)return c}return-1}vi.prototype.dispatchEvent=function(e){var n=g(this._fragmentFiber);if(n===null)return!0;n=b(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];s.addEventListener(f.type,f.attachedListener,Zs(f.optionsOrUseCapture))}if(n.appendChild(s),e=s.dispatchEvent(e),a)for(c=0;c<a.length;c++)f=a[c],s.removeEventListener(f.type,f.attachedListener,Zs(f.optionsOrUseCapture));return n.removeChild(s),e}return n.dispatchEvent(e)},vi.prototype.focus=function(e){_(this._fragmentFiber.child,!0,w_,e,void 0,void 0)};function w_(e,n){return e.tag===6?!1:(e=b(e),B1(e,n))}vi.prototype.focusLast=function(e){var n=[];_(this._fragmentFiber.child,!0,Td,n,void 0,void 0);for(var a=n.length-1;0<=a&&!w_(n[a],e);a--);};function Td(e,n){return n.push(e),!1}vi.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=fl(e).activeElement,e!==null&&_(this._fragmentFiber.child,!1,w1,e,void 0,void 0))};function w1(e,n){return e.tag===6?!1:(e=b(e),e===n||e.contains(n)?(n.blur(),!0):!1)}vi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),_(this._fragmentFiber.child,!1,R1,e,void 0,void 0)};function R1(e,n){return e.tag===6||(e=b(e),n.observe(e)),!1}vi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),_(this._fragmentFiber.child,!1,C1,e,void 0,void 0);for(var a=n=0;a<Gi.length;a++){var s=Gi[a];s.fragmentInstance===this&&s.observer===e?e.unobserve(s.instance):Gi[n++]=s}Gi.length=n}};function C1(e,n){return e.tag===6||(e=b(e),n.unobserve(e)),!1}var Gi=[],Ad=!1;function D1(e,n,a){Gi.push({fragmentInstance:e,observer:n,instance:a}),Ad||(Ad=!0,F1(function(){Ad=!1;var s=Gi;Gi=[];for(var c=0;c<s.length;c++){var f=s[c];f.observer.unobserve(f.instance)}}))}vi.prototype.getClientRects=function(){var e=[];return _(this._fragmentFiber.child,!1,N1,e,void 0,void 0),e};function N1(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=b(e),n.push.apply(n,e.getClientRects());return!1}vi.prototype.getRootNode=function(e){var n=g(this._fragmentFiber);return n===null?this:b(n).getRootNode(e)},vi.prototype.compareDocumentPosition=function(e){var n=g(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,Td,a,void 0,void 0);var s=b(n);if(a.length===0){if(a=s,x(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=s=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=y(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=b(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=b(a[0]),c=b(a[a.length-1]);var f=x(this._fragmentFiber)?n.parentElement:s;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var S=n.compareDocumentPosition(e),R=c.compareDocumentPosition(e),B=S&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=s&&f&&S&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===e||f&&c===e||B||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===e||!f&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:S,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||U1(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function U1(e,n,a,s,c){var f=fe(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=g(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=D(a,f,U),n===null?n=!1:(_(n,!0,I,f,a),f=M,M=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===s)&&(n=D(s,f,U),n===null?n=!1:(_(n,!0,C,f,s),f=M,L=M=null,n=f!==null)),n):!1}function R_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}vi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(r(566));var n=[];_(this._fragmentFiber.child,!1,Td,n,void 0,void 0);var a=e!==!1;if(n.length===0){var s=y(this._fragmentFiber);if(s=a?s[1]||s[0]||g(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){e=b(s),R_(e,a);return}if(s=b(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(e);return}s.scrollIntoView(e)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var c=n[s];c.tag===6?(c=b(c),R_(c,a)):b(c).scrollIntoView(e),s+=a?-1:1}};function L1(e,n){return e=b(e),C_(e,n),!1}function C_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function D_(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];e.addEventListener(c.type,c.attachedListener,Zs(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var S=0,R=0;R<Gi.length;R++){var B=Gi[R];(B.fragmentInstance!==n||B.observer!==f||B.instance!==e)&&(Gi[S++]=B)}Gi.length=S,f.observe(e)}),C_(e,n))}function O1(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];e.removeEventListener(c.type,c.attachedListener,Zs(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?D1(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function wd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wd(a),te(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function P1(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ht])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Di(e.nextSibling),e===null)break}return null}function z1(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Di(e.nextSibling),e===null))return null;return e}function N_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Di(e.nextSibling),e===null))return null;return e}function Rd(e){return e.data==="$?"||e.data==="$~"}function Cd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function I1(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Di(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Dd=null;function U_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Di(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function L_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function B1(e,n){function a(){s=!0}if(e.ownerDocument.activeElement===e)return!0;var s=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return s}function F1(e){x_(function(){x_(function(n){return e(n)})})}function O_(e,n,a){switch(n=fl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function P_(e,n,a){for(var s in a){var c=a[s];a.hasOwnProperty(s)&&c!=null&&Ze(e,n,s,null,p1,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ta&&(e.onclick=null),te(e)}function Nd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);te(e)}var Ni=new Map,z_=new Set;function hl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Oa=Ut.d;Ut.d={f:H1,r:G1,D:V1,C:k1,L:X1,m:q1,X:Y1,S:W1,M:K1};function H1(){var e=Oa.f(),n=ju();return e||n}function G1(e){var n=ve(e);n!==null&&n.tag===5&&n.type==="form"?Bg(n):Oa.r(e)}var Qs=typeof document>"u"?null:document;function I_(e,n,a){var s=Qs;if(s&&typeof n=="string"&&n){var c=bi(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),z_.has(c)||(z_.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Pn(n,"link",e),Ee(n),s.head.appendChild(n)))}}function V1(e){Oa.D(e),I_("dns-prefetch",e,null)}function k1(e,n){Oa.C(e,n),I_("preconnect",e,n)}function X1(e,n,a){Oa.L(e,n,a);var s=Qs;if(s&&e&&n){var c='link[rel="preload"][as="'+bi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+bi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+bi(a.imageSizes)+'"]')):c+='[href="'+bi(e)+'"]';var f=c;switch(n){case"style":f=Js(e);break;case"script":f=js(e)}if(!(Ni.has(f)||(e=N({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ni.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(dl(f))||n==="script"&&s.querySelector(pl(f))))){var S=s.createElement("link");Pn(S,"link",e),n==="style"&&(S[jt]=!0,S.onload=S.onerror=function(){Je(S)}),Ee(S),s.head.appendChild(S)}}}function q1(e,n){Oa.m(e,n);var a=Qs;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+bi(s)+'"][href="'+bi(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=js(e)}if(!Ni.has(f)&&(e=N({rel:"modulepreload",href:e},n),Ni.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(pl(f)))return}s=a.createElement("link"),Pn(s,"link",e),Ee(s),a.head.appendChild(s)}}}function W1(e,n,a){Oa.S(e,n,a);var s=Qs;if(s&&e){var c=Re(s).hoistableStyles,f=Js(e);n=n||"default";var S=c.get(f);if(!S){var R={loading:0,preload:null};if(S=s.querySelector(dl(f)))R.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ni.get(f))&&Ud(e,a);var B=S=s.createElement("link");Ee(B),Pn(B,"link",e),B._p=new Promise(function(it,dt){B.onload=it,B.onerror=dt}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,rc(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:R},c.set(f,S)}}}function Y1(e,n){Oa.X(e,n);var a=Qs;if(a&&e){var s=Re(a).hoistableScripts,c=js(e),f=s.get(c);f||(f=a.querySelector(pl(c)),f||(e=N({src:e,async:!0},n),(n=Ni.get(c))&&Ld(e,n),f=a.createElement("script"),Ee(f),Pn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function K1(e,n){Oa.M(e,n);var a=Qs;if(a&&e){var s=Re(a).hoistableScripts,c=js(e),f=s.get(c);f||(f=a.querySelector(pl(c)),f||(e=N({src:e,async:!0,type:"module"},n),(n=Ni.get(c))&&Ld(e,n),f=a.createElement("script"),Ee(f),Pn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function B_(e,n,a,s){var c=(c=ce.current)?hl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Js(a.href),n=Re(c).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Js(a.href);var f=Re(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(dl(e)))?f._p||(S.instance=f,S.state.loading=5):(f=Ni.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ni.set(e,f)),Z1(c,e,f,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=js(a),n=Re(c).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Js(e){return'href="'+bi(e)+'"'}function dl(e){return'link[rel="stylesheet"]['+e+"]"}function F_(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function Z1(e,n,a,s){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[jt]!==!0){s.loading=1;return}}else n=e.createElement("link"),n[jt]=!0,n.onload=n.onerror=Je.bind(null,n),Pn(n,"link",a),Ee(n),e.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function js(e){return'[src="'+bi(e)+'"]'}function pl(e){return"script[async]"+e}function H_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+bi(a.href)+'"]');if(s)return n.instance=s,Ee(s),s;var c=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Ee(s),Pn(s,"style",c),rc(s,a.precedence,e),n.instance=s;case"stylesheet":c=Js(a.href);var f=e.querySelector(dl(c));if(f)return n.state.loading|=4,n.instance=f,Ee(f),f;s=F_(a),(c=Ni.get(c))&&Ud(s,c),f=(e.ownerDocument||e).createElement("link"),Ee(f);var S=f;return S._p=new Promise(function(R,B){S.onload=R,S.onerror=B}),Pn(f,"link",s),n.state.loading|=4,rc(f,a.precedence,e),n.instance=f;case"script":return f=js(a.src),(c=e.querySelector(pl(f)))?(n.instance=c,Ee(c),c):(s=a,(c=Ni.get(f))&&(s=N({},a),Ld(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),Ee(c),Pn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,rc(s,a.precedence,e));return n.instance}function rc(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var R=s[S];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Ud(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ld(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var sc=null;function G_(e,n,a){if(sc===null){var s=new Map,c=sc=new Map;c.set(a,s)}else c=sc,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ht]||f[w]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var R=s.get(S);R?R.push(f):s.set(S,[f])}}return s}function Od(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Q1(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function V_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function k_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function X_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function q_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=X_(n),e.suspenseyImages.push(n)),e=$1.bind(e),n.decode().then(e,e))}function J1(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Js(s.href),f=n.querySelector(dl(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ml.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Ee(f);return}f=n.ownerDocument||n,s=F_(s),(c=Ni.get(c))&&Ud(s,c),f=f.createElement("link"),Ee(f);var S=f;S._p=new Promise(function(R,B){S.onload=R,S.onerror=B}),Pn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ml.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var oc=0;function j1(e,n){return e.stylesheets&&e.count===0&&uc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&uc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&oc===0&&(oc=62500*g1());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&uc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>oc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function W_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)uc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function ml(){this.count--,W_(this)}function $1(){this.imgCount--,W_(this)}var lc=null;function uc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lc=new Map,n.forEach(tb,e),lc=null,ml.call(e))}function tb(e,n){if(!(n.state.loading&4)){var a=lc.get(e);if(a)var s=a.get(null);else{a=new Map,lc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=ml.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var $s={$$typeof:Q,Provider:null,Consumer:null,_currentValue:_e,_currentValue2:_e,_threadCount:0};function eb(e,n,a,s,c,f,S,R,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gs(0),this.hiddenUpdates=gs(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function Y_(e,n,a,s,c,f,S,R,B,it,dt,yt){return e=new eb(e,n,a,S,B,it,dt,yt,R),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=Zf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},$f(f),e}function K_(e){return e?(e=Ts,e):Ts}function Z_(e,n,a,s,c,f){c=K_(c),s.context===null?s.context=c:s.pendingContext=c,s=nr(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ir(e,s,n),a!==null&&(ni(a,e,n),Wo(a,e,n))}function Q_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Pd(e,n){Q_(e,n),(e=e.alternate)&&Q_(e,n)}function J_(e){if(e.tag===13||e.tag===31){var n=Fr(e,67108864);n!==null&&ni(n,e,67108864),Pd(e,67108864)}}function j_(e){if(e.tag===13||e.tag===31){var n=gi();n=Co(n);var a=Fr(e,n);a!==null&&ni(a,e,n),Pd(e,n)}}var to=!0;function nb(e,n,a,s){var c=tt.T;tt.T=null;var f=Ut.p;try{Ut.p=2,zd(e,n,a,s)}finally{Ut.p=f,tt.T=c}}function ib(e,n,a,s){var c=tt.T;tt.T=null;var f=Ut.p;try{Ut.p=8,zd(e,n,a,s)}finally{Ut.p=f,tt.T=c}}function zd(e,n,a,s){if(to){var c=Id(s);if(c===null)vd(e,n,s,cc,a),tx(e,s);else if(rb(c,e,n,a,s))s.stopPropagation();else if(tx(e,s),n&4&&-1<ab.indexOf(e)){for(;c!==null;){var f=ve(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Sa(f.pendingLanes);if(S!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var B=1<<31-ge(S);R.entanglements[1]|=B,S&=~B}ca(f),(ke&6)===0&&(Zu=Yt()+500,ll(0))}}break;case 31:case 13:R=Fr(f,2),R!==null&&ni(R,f,2),ju(),Pd(f,2)}if(f=Id(s),f===null&&vd(e,n,s,cc,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else vd(e,n,s,null,a)}}function Id(e){return e=Mf(e),Bd(e)}var cc=null;function Bd(e){if(cc=null,e=fe(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return cc=e,null}function $_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(se()){case pe:return 2;case J:return 8;case Pt:case Mt:return 32;case Ft:return 268435456;default:return 32}default:return 32}}var Fd=!1,mr=null,gr=null,vr=null,gl=new Map,vl=new Map,_r=[],ab="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tx(e,n){switch(e){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":gl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(n.pointerId)}}function _l(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ve(n),n!==null&&J_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function rb(e,n,a,s,c){switch(n){case"focusin":return mr=_l(mr,e,n,a,s,c),!0;case"dragenter":return gr=_l(gr,e,n,a,s,c),!0;case"mouseover":return vr=_l(vr,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return gl.set(f,_l(gl.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,vl.set(f,_l(vl.get(f)||null,e,n,a,s,c)),!0}return!1}function ex(e){var n=fe(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Ql(e.priority,function(){j_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ql(e.priority,function(){j_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Id(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);yf=s,a.target.dispatchEvent(s),yf=null}else return n=ve(a),n!==null&&J_(n),e.blockedOn=a,!1;n.shift()}return!0}function nx(e,n,a){fc(e)&&a.delete(n)}function sb(){Fd=!1,mr!==null&&fc(mr)&&(mr=null),gr!==null&&fc(gr)&&(gr=null),vr!==null&&fc(vr)&&(vr=null),gl.forEach(nx),vl.forEach(nx)}function hc(e,n){e.blockedOn===n&&(e.blockedOn=null,Fd||(Fd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,sb)))}var dc=null;function ix(e){dc!==e&&(dc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){dc===e&&(dc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Bd(s||a)===null)continue;break}var f=ve(a);f!==null&&(e.splice(n,3),n-=3,Sh(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function eo(e){function n(B){return hc(B,e)}mr!==null&&hc(mr,e),gr!==null&&hc(gr,e),vr!==null&&hc(vr,e),gl.forEach(n),vl.forEach(n);for(var a=0;a<_r.length;a++){var s=_r[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<_r.length&&(a=_r[0],a.blockedOn===null);)ex(a),a.blockedOn===null&&_r.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[V]||null;if(typeof f=="function")S||ix(a);else if(S){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[V]||null)R=S.formAction;else if(Bd(c)!==null)continue}else R=S.action;typeof R=="function"?a[s+1]=R:(a.splice(s,3),s-=3),ix(a)}}}function ax(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return c=S})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Hd(e){this._internalRoot=e}pc.prototype.render=Hd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=gi();Z_(a,s,e,n,null,null)},pc.prototype.unmount=Hd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Z_(e.current,2,null,e,null,null),ju(),n[pt]=null}};function pc(e){this._internalRoot=e}pc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Zl();e={blockedOn:null,target:e,priority:n};for(var a=0;a<_r.length&&n!==0&&n<_r[a].priority;a++);_r.splice(a,0,e),a===0&&ex(e)}};var rx=t.version;if(rx!=="19.3.0")throw Error(r(527,rx,"19.3.0"));Ut.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var ob={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:tt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{ie=mc.inject(ob),qt=mc}catch{}}return Sl.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=Kg,f=Zg,S=Qg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Y_(e,1,!1,null,null,a,s,null,c,f,S,ax),e[pt]=n.current,gd(e),new Hd(n)},Sl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=Kg,S=Zg,R=Qg,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Y_(e,1,!0,n,a??null,s,c,B,f,S,R,ax),n.context=K_(null),a=n.current,s=gi(),s=Co(s),c=nr(s),c.callback=null,ir(a,c,s),a=s,n.current.lanes=a,ji(n,a),ca(n),e[pt]=n.current,gd(e),new pc(n)},Sl.version="19.3.0",Sl}var mx;function vb(){if(mx)return kd.exports;mx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),kd.exports=gb(),kd.exports}var _b=vb();const IS=1495978707e-1,BS=94607304725808e-1,ii=695700,gx=IS,ai=BS,xb=6371,Yd=o=>2.9532*o,Dr=[{id:"ceres",accent:"#bdb8b0",name:"ceres",kind:"rocky",radiusKm:469.7,sphere:!0,color:"#8a8782",color2:"#5f5c58",fact:"the biggest thing in the asteroid belt, with bright salt deposits in occator crater.",source:"ceres"},{id:"makemake",accent:"#e0a07e",name:"makemake",kind:"rocky",radiusKm:715,sphere:!0,color:"#b07a5e",color2:"#7a4d3a",fact:"a reddish dwarf planet past neptune, found around easter 2005.",source:"makemake",note:"surface map is an illustration; no spacecraft has visited."},{id:"pluto",accent:"#e4c6a8",name:"pluto",kind:"rocky",radiusKm:1188.3,sphere:!0,color:"#c9b39b",color2:"#7a4a3a",fact:"the heart-shaped plain is a glacier of nitrogen ice, bigger than texas.",source:"pluto"},{id:"europa",accent:"#e6d6bc",name:"europa",kind:"rocky",radiusKm:1560.8,sphere:!0,color:"#d8cbb4",color2:"#8a6a50",fact:"under the cracked ice, an ocean with maybe twice the water of earth’s.",source:"europa"},{id:"moon",accent:"#cfcdc8",name:"the moon",kind:"rocky",radiusKm:1737.4,sphere:!0,color:"#9c9a96",color2:"#6f6d6a",fact:"the only other world people have walked on. twelve of us, so far.",source:"nasa-fs"},{id:"mercury",accent:"#c9bca8",name:"mercury",kind:"rocky",radiusKm:2439.7,sphere:!0,color:"#8f8577",color2:"#5e574e",fact:"a year there is 88 days. a single day is 176.",source:"nasa-fs"},{id:"titan",accent:"#eeb264",name:"titan",kind:"rocky",radiusKm:2574.7,sphere:!0,color:"#d9a04e",color2:"#a8742e",fact:"a moon bigger than mercury, with rain, rivers and seas of liquid methane.",source:"titan"},{id:"mars",accent:"#e8845a",name:"mars",kind:"rocky",radiusKm:3389.5,sphere:!0,color:"#b5623a",color2:"#7a3a22",fact:"home to olympus mons, a volcano about 2.5× taller than everest.",source:"nasa-fs"},{id:"venus",accent:"#ecd29c",name:"venus",kind:"rocky",radiusKm:6051.8,sphere:!0,color:"#d9bf8c",color2:"#b09366",fact:"hot enough to melt lead, under clouds of sulfuric acid.",source:"nasa-fs"},{id:"earth",accent:"#7fb8e6",name:"earth",kind:"earth",radiusKm:6371,sphere:!0,color:"#2f5f8f",color2:"#4f7a3f",fact:"everyone i know, and everyone i ever will, is on here.",source:"nasa-fs"},{id:"kepler22b",accent:"#82c8dc",name:"kepler-22b",kind:"ice",radiusKm:2.1*xb,sphere:!0,color:"#5f93ad",color2:"#2f5f7a",fact:"the first planet kepler found in its star’s habitable zone, 640 light-years away.",source:"k22b",note:"radius uncertain (~2.1–2.4 r⊕); what it’s made of is unknown, so this is an illustration."},{id:"neptune",accent:"#7c9df4",name:"neptune",kind:"ice",radiusKm:24622,sphere:!0,color:"#3f63c7",color2:"#2d4799",fact:"winds up to 2,000 km/h. the fastest we know of in the solar system.",source:"nasa-fs"},{id:"uranus",accent:"#a2e2e8",name:"uranus",kind:"ice",radiusKm:25362,sphere:!0,color:"#8fcfd6",color2:"#6fb2bb",fact:"it rolls around the sun on its side, tipped about 98°.",source:"nasa-fs"},{id:"saturn",accent:"#ead49e",name:"saturn",kind:"ringed",radiusKm:58232,sphere:!0,color:"#d8c08a",color2:"#b39866",fact:"its rings are ~280,000 km wide but mostly just tens of meters thick.",source:"nasa-fs"},{id:"jupiter",accent:"#e4c49e",name:"jupiter",kind:"gas",radiusKm:69911,sphere:!0,color:"#c9a27a",color2:"#8c6446",fact:"the great red spot is a storm wider than earth, running for centuries.",source:"nasa-fs"},{id:"sun",accent:"#ffc95c",name:"the sun",kind:"star",radiusKm:ii,sphere:!0,color:"#fff1d6",tempK:5772,fact:"about 99.8% of all the mass in our solar system.",source:"iau"},{id:"sirius",accent:"#bcd6ff",name:"sirius a",kind:"star",radiusKm:1.711*ii,sphere:!0,color:"#cfe0ff",tempK:9940,fact:"the brightest star in the night sky, 8.6 light-years away.",source:"sirius"},{id:"elnath",accent:"#c0d8ff",name:"elnath",kind:"star",radiusKm:4.2*ii,sphere:!0,color:"#d6e2ff",tempK:13824,fact:"the tip of taurus’ northern horn, a blue-white giant.",source:"elnath"},{id:"pollux",accent:"#ffbc74",name:"pollux",kind:"star",radiusKm:9.06*ii,sphere:!0,color:"#ffc58a",tempK:4586,fact:"an orange giant with a planet of its own, thestias.",source:"pollux"},{id:"sgra",accent:"#c6ddff",dim:"horizon radius",name:"sagittarius a*",kind:"blackhole",radiusKm:Yd(415e4),sphere:!0,color:"#cfe0ff",fact:"the black hole at the heart of the milky way. 4 million suns, quietly starving.",source:"sgra",note:"size is the event horizon; the shadow the eht imaged is ~2.6× wider."},{id:"arcturus",accent:"#ffb06a",name:"arcturus",kind:"star",radiusKm:25.4*ii,sphere:!0,color:"#ffb574",tempK:4286,fact:"its light opened the 1933 chicago world’s fair.",source:"arcturus"},{id:"aldebaran",accent:"#ffa060",name:"aldebaran",kind:"star",radiusKm:45.1*ii,sphere:!0,color:"#ffa865",tempK:3900,fact:"the red eye of taurus. pioneer 10 is drifting its way.",source:"aldebaran"},{id:"aludra",accent:"#b8d0ff",name:"aludra",kind:"star",radiusKm:54*ii,sphere:!0,color:"#c8d8ff",tempK:15800,fact:"a blue supergiant in canis major, probably done being a red one.",source:"aludra",note:"estimates range ~54–80 r☉."},{id:"rigel",accent:"#b2ceff",name:"rigel",kind:"star",radiusKm:78.9*ii,sphere:!0,color:"#bcd2ff",tempK:12100,fact:"a blue supergiant, ~120,000 times brighter than the sun.",source:"rigel"},{id:"pistol",accent:"#acc6ff",name:"pistol star",kind:"star",radiusKm:306*ii,sphere:!0,color:"#c4d4ff",tempK:11800,fact:"a blue hypergiant hidden by dust near the galactic center, ~1.6 million suns bright.",source:"pistol",note:"radius uncertain (~300–340 r☉)."},{id:"antares",accent:"#ff8458",name:"antares",kind:"star",radiusKm:680*ii,sphere:!0,color:"#ff9150",tempK:3660,fact:"put it where the sun is and it swallows mars’ orbit.",source:"antares",note:"radius estimates range ~680–880 r☉."},{id:"betelgeuse",accent:"#ff8a56",name:"betelgeuse",kind:"star",radiusKm:764*ii,sphere:!0,color:"#ff8a48",tempK:3600,fact:"it will go supernova someday. someday could be 100,000 years.",source:"betel",note:"radius ~640–1,020 r☉ depending on the study."},{id:"uyscuti",accent:"#ff804e",name:"uy scuti",kind:"star",radiusKm:909*ii,sphere:!0,color:"#ff7f40",tempK:3365,fact:"one of the biggest stars we know, though nobody agrees how big.",source:"uyscuti",note:"uncertain: ~909 r☉ (gaia distance) vs 1,708 r☉ (older distance)."},{id:"vycma",accent:"#ff7c4a",name:"vy canis majoris",kind:"star",radiusKm:1420*ii,sphere:!0,color:"#ff7a3c",tempK:3490,fact:"a dying hypergiant shedding a sun’s worth of gas every few thousand years.",source:"vycma",note:"radius ~1,300–1,540 r☉."},{id:"st218",accent:"#ff7446",name:"stephenson 2-18",kind:"star",radiusKm:2150*ii,sphere:!0,color:"#ff6f38",tempK:3200,fact:"maybe the biggest star known. at the sun’s place, it would reach past saturn.",source:"st218",note:"very uncertain: depends on a model distance and temperature."},{id:"heliosphere",accent:"#aec1e2",name:"the heliosphere",kind:"heliosphere",radiusKm:120*gx,sphere:!1,color:"#9fb4d9",fact:"the sun’s wind bubble. voyager 1 left it in 2012 and kept going.",source:"helio",note:"really comet-shaped, not round."},{id:"s5",accent:"#ffe0aa",dim:"horizon radius",name:"s5 0014+81",kind:"blackhole",radiusKm:Yd(4e10),sphere:!0,color:"#ffe3b0",fact:"a blazar: its jet points almost straight at us, outshining whole galaxies.",source:"s5",note:"size is the event horizon; the mass (~40 billion m☉) is uncertain."},{id:"ton618",accent:"#ffa044",dim:"horizon radius",name:"ton 618",kind:"blackhole",radiusKm:Yd(66e9),sphere:!0,color:"#ffb060",fact:"one of the heaviest black holes known, powering a quasar 10.4 billion light-years away.",source:"ton618",note:"event horizon for ~66 billion m☉; estimates range ~40–66 billion."},{id:"helix",accent:"#74c4e2",name:"helix nebula",kind:"nebula",radiusKm:1.25*ai,sphere:!1,color:"#5fa6c9",color2:"#d9764a",fact:"a sun-like star’s last breath. our sun will make one of these too.",source:"helix",note:"the faint outer ring reaches ~5.7 ly."},{id:"oort",accent:"#cdd7e8",name:"the oort cloud",kind:"oort",radiusKm:1e5*gx,sphere:!1,color:"#c9d4e6",fact:"a shell of trillions of icy bodies. nobody has seen it directly.",source:"oort",note:"outer edge estimates range 10,000–100,000 au."},{id:"pillars",accent:"#e6ac64",dim:"tall",name:"pillars of creation",kind:"nebula",radiusKm:2*ai,sphere:!1,color:"#d9a05a",color2:"#3f63c7",fact:"towers of gas and dust in the eagle nebula, with new stars forming in their tips.",source:"pillars",note:"size is the tallest pillar; the whole eagle nebula is ~70 × 55 ly."},{id:"horsehead",accent:"#e8947a",dim:"tall",name:"horsehead nebula",kind:"nebula",radiusKm:2.5*ai,sphere:!1,color:"#b0604a",color2:"#6f8fb0",fact:"a dark dust cloud in orion that happens to look like a knight chess piece.",source:"horsehead",note:"height; ~2.5 ly wide."},{id:"orion",accent:"#ec9ec4",name:"orion nebula",kind:"nebula",radiusKm:12*ai,sphere:!1,color:"#d98ab0",color2:"#6fb3c9",fact:"a star nursery you can see with your eyes, under orion’s belt.",source:"orion"},{id:"omega",accent:"#ffe2b8",name:"omega centauri",kind:"cluster",radiusKm:75*ai,sphere:!1,color:"#ffe2b8",fact:"about 10 million stars packed into one ball of light.",source:"omega"},{id:"segue2",accent:"#f0dcc0",name:"segue 2",kind:"dwarf",radiusKm:110*ai,sphere:!1,color:"#ffe2b8",fact:"a galaxy of barely a thousand stars, one of the faintest ever found.",source:"segue2",note:"half-light size."},{id:"tarantula",accent:"#eab48e",name:"tarantula nebula",kind:"nebula",radiusKm:325*ai,sphere:!1,color:"#d9a080",color2:"#5f7fb0",fact:"the busiest star factory near us. at orion’s distance it would cast shadows.",source:"tarantula",note:"size estimates range 650–1,860 ly."},{id:"m64",accent:"#eaca9c",name:"black eye galaxy",kind:"galaxy",radiusKm:27e3*ai,sphere:!1,color:"#e9d2b0",fact:"a dark band of dust over its bright core. its outer gas spins backwards.",source:"m64"},{id:"milkyway",accent:"#f2deb6",name:"the milky way",kind:"galaxy",radiusKm:5e4*ai,sphere:!1,color:"#e9dcc4",color2:"#9fb4d9",tilt:.62,fact:"home. 100–400 billion stars, and we’re in the suburbs.",source:"mw"},{id:"andromeda",accent:"#bcaaf4",name:"andromeda",kind:"galaxy",radiusKm:76e3*ai,sphere:!1,color:"#f0dcc0",color2:"#b8c4de",tilt:.34,fact:"headed our way. we merge in roughly 4–5 billion years.",source:"m31",note:"disc size; its faint halo is far bigger."},{id:"ic1101",accent:"#f2ce8a",name:"ic 1101",kind:"elliptical",radiusKm:85e4*ai,sphere:!1,color:"#e8c88a",fact:"one of the biggest galaxies known, a golden haze of ~100 trillion old stars.",source:"ic1101",note:"~1.7 million ly by the newest deep imaging; older figures (4 million ly+) include a diffuse halo."},{id:"virgo",accent:"#e2d0ae",name:"virgo supercluster",kind:"supercluster",radiusKm:55e6*ai,sphere:!1,color:"#d4a574",fact:"a hundred-ish galaxy groups and clusters, us somewhere on the edge.",source:"virgo"},{id:"laniakea",accent:"#e8c99c",name:"laniakea",kind:"laniakea",radiusKm:26e7*ai,sphere:!1,color:"#d4a574",fact:"hawaiian for “immeasurable heaven.” 100,000 galaxies flowing one way.",source:"lania"},{id:"universe",accent:"#eeede8",name:"the observable universe",kind:"universe",radiusKm:465e8*ai,sphere:!1,color:"#d4a574",fact:"everything light has had time to reach us from. that’s the edge, for now.",source:"ou",note:"comoving size; the universe itself may be infinite."}],Sb=Dr.find(o=>o.id==="earth");function yb(o){if(o<1e8)return{value:Xc(o),unit:"km"};const t=o/IS;return t<2e4?{value:Xc(t),unit:"au"}:{value:Xc(o/BS),unit:"light-years"}}const Mb=[[1e18,"quintillion"],[1e15,"quadrillion"],[1e12,"trillion"],[1e9,"billion"],[1e6,"million"]];function kc(o){return o>=100?Math.round(o).toLocaleString("en-US"):o>=10?(Math.round(o*10)/10).toString():(Math.round(o*100)/100).toString()}function Xc(o){if(o>=1e21){const t=Math.floor(Math.log10(o));return`${kc(o/10**t)} × 10^${t}`}for(const[t,i]of Mb)if(o>=t)return`${kc(o/t)} ${i}`;return kc(o)}function vx(o){return o<1?`${kc(o)}×`:`${Xc(o)}×`}const Om="186",bb=0,_x=1,Eb=2,qc=1,Tb=2,Dl=3,cs=0,oi=1,Li=2,Zi=0,Ll=1,xx=2,Sx=3,yx=4,FS=5,ls=100,Ab=101,wb=102,Rb=103,Cb=104,Db=200,Fp=201,Nb=202,Ub=203,HS=204,ef=205,Lb=206,Ob=207,Pb=208,zb=209,Ib=210,Bb=211,Fb=212,Hb=213,Gb=214,Hp=0,Gp=1,Vp=2,Il=3,kp=4,Xp=5,qp=6,Wp=7,GS=0,Vb=1,kb=2,ga=0,VS=1,kS=2,XS=3,Pm=4,qS=5,WS=6,YS=7,KS=300,fs=301,yo=302,Kd=303,Zd=304,hf=306,Yp=1e3,Ga=1001,Kp=1002,In=1003,Xb=1004,gc=1005,Vn=1006,Qd=1007,Nr=1008,Si=1009,ZS=1010,QS=1011,Bl=1012,zm=1013,va=1014,pa=1015,_a=1016,Im=1017,Bm=1018,Fl=1020,JS=35902,jS=35899,$S=1021,ty=1022,Ki=1023,ka=1026,us=1027,ey=1028,Fm=1029,hs=1030,Hm=1031,Gm=1033,Wc=33776,Yc=33777,Kc=33778,Zc=33779,Zp=35840,Qp=35841,Jp=35842,jp=35843,$p=36196,tm=37492,em=37496,nm=37488,im=37489,nf=37490,am=37491,rm=37808,sm=37809,om=37810,lm=37811,um=37812,cm=37813,fm=37814,hm=37815,dm=37816,pm=37817,mm=37818,gm=37819,vm=37820,_m=37821,xm=36492,Sm=36494,ym=36495,Mm=36283,bm=36284,af=36285,Em=36286,qb=3200,Tm=0,Wb=1,Cr="",Jn="srgb",rf="srgb-linear",sf="linear",Qe="srgb",Jd=7680,Yb=519,Kb=512,Zb=513,Qb=514,Vm=515,Jb=516,jb=517,km=518,$b=519,tE=35044,Mx="300 es",ma=2e3,Hl=2001;function eE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Gl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function nE(){const o=Gl("canvas");return o.style.display="block",o}const bx={};function Ex(...o){const t="THREE."+o.shift();console.log(t,...o)}function ny(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ue(...o){o=ny(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Ge(...o){o=ny(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function xo(...o){const t=o.join(" ");t in bx||(bx[t]=!0,ue(...o))}function iE(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const aE={[Hp]:Gp,[Vp]:qp,[kp]:Wp,[Il]:Xp,[Gp]:Hp,[qp]:Vp,[Wp]:kp,[Xp]:Il};class ds{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jd=Math.PI/180,Am=180/Math.PI;function Xl(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[t&255]+Fn[t>>8&255]+"-"+Fn[t>>16&15|64]+Fn[t>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function Ne(o,t,i){return Math.max(t,Math.min(i,o))}function rE(o,t){return(o%t+t)%t}function $d(o,t,i){return(1-i)*o+i*t}function yl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ri(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const jm=class jm{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ne(this.x,t.x,i.x),this.y=Ne(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ne(this.x,t,i),this.y=Ne(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ne(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ne(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jm.prototype.isVector2=!0;let re=jm;class xa{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let p=r[l+0],m=r[l+1],v=r[l+2],_=r[l+3],g=u[h+0],x=u[h+1],y=u[h+2],A=u[h+3];if(_!==A||p!==g||m!==x||v!==y){let b=p*g+m*x+v*y+_*A;b<0&&(g=-g,x=-x,y=-y,A=-A,b=-b);let M=1-d;if(b<.9995){const L=Math.acos(b),I=Math.sin(L);M=Math.sin(M*L)/I,d=Math.sin(d*L)/I,p=p*M+g*d,m=m*M+x*d,v=v*M+y*d,_=_*M+A*d}else{p=p*M+g*d,m=m*M+x*d,v=v*M+y*d,_=_*M+A*d;const L=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=L,m*=L,v*=L,_*=L}}t[i]=p,t[i+1]=m,t[i+2]=v,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],p=r[l+1],m=r[l+2],v=r[l+3],_=u[h],g=u[h+1],x=u[h+2],y=u[h+3];return t[i]=d*y+v*_+p*x-m*g,t[i+1]=p*y+v*g+m*_-d*x,t[i+2]=m*y+v*x+d*g-p*_,t[i+3]=v*y-d*_-p*g-m*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(l/2),_=d(u/2),g=p(r/2),x=p(l/2),y=p(u/2);switch(h){case"XYZ":this._x=g*v*_+m*x*y,this._y=m*x*_-g*v*y,this._z=m*v*y+g*x*_,this._w=m*v*_-g*x*y;break;case"YXZ":this._x=g*v*_+m*x*y,this._y=m*x*_-g*v*y,this._z=m*v*y-g*x*_,this._w=m*v*_+g*x*y;break;case"ZXY":this._x=g*v*_-m*x*y,this._y=m*x*_+g*v*y,this._z=m*v*y+g*x*_,this._w=m*v*_-g*x*y;break;case"ZYX":this._x=g*v*_-m*x*y,this._y=m*x*_+g*v*y,this._z=m*v*y-g*x*_,this._w=m*v*_+g*x*y;break;case"YZX":this._x=g*v*_+m*x*y,this._y=m*x*_+g*v*y,this._z=m*v*y-g*x*_,this._w=m*v*_-g*x*y;break;case"XZY":this._x=g*v*_-m*x*y,this._y=m*x*_-g*v*y,this._z=m*v*y+g*x*_,this._w=m*v*_+g*x*y;break;default:ue("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],v=i[6],_=i[10],g=r+d+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(v-p)*x,this._y=(u-m)*x,this._z=(h-l)*x}else if(r>d&&r>_){const x=2*Math.sqrt(1+r-d-_);this._w=(v-p)/x,this._x=.25*x,this._y=(l+h)/x,this._z=(u+m)/x}else if(d>_){const x=2*Math.sqrt(1+d-r-_);this._w=(u-m)/x,this._x=(l+h)/x,this._y=.25*x,this._z=(p+v)/x}else{const x=2*Math.sqrt(1+_-r-d);this._w=(h-l)/x,this._x=(u+m)/x,this._y=(p+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,p=i._y,m=i._z,v=i._w;return this._x=r*v+h*d+l*m-u*p,this._y=l*v+h*p+u*d-r*m,this._z=u*v+h*m+r*p-l*d,this._w=h*v-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){let r=t._x,l=t._y,u=t._z,h=t._w,d=this.dot(t);d<0&&(r=-r,l=-l,u=-u,h=-h,d=-d);let p=1-i;if(d<.9995){const m=Math.acos(d),v=Math.sin(m);p=Math.sin(p*m)/v,i=Math.sin(i*m)/v,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+h*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+h*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $m=class $m{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Tx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Tx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*r),v=2*(d*i-u*l),_=2*(u*r-h*i);return this.x=i+p*m+h*_-d*v,this.y=r+p*v+d*m-u*_,this.z=l+p*_+u*v-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ne(this.x,t.x,i.x),this.y=Ne(this.y,t.y,i.y),this.z=Ne(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ne(this.x,t,i),this.y=Ne(this.y,t,i),this.z=Ne(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ne(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-r*p,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return tp.copy(this).projectOnVector(t),this.sub(tp)}reflect(t){return this.sub(tp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ne(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$m.prototype.isVector3=!0;let k=$m;const tp=new k,Tx=new xa,t0=class t0{constructor(t,i,r,l,u,h,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,p,m)}set(t,i,r,l,u,h,d,p,m){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=p,v[6]=r,v[7]=h,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],v=r[4],_=r[7],g=r[2],x=r[5],y=r[8],A=l[0],b=l[3],M=l[6],L=l[1],I=l[4],C=l[7],U=l[2],D=l[5],N=l[8];return u[0]=h*A+d*L+p*U,u[3]=h*b+d*I+p*D,u[6]=h*M+d*C+p*N,u[1]=m*A+v*L+_*U,u[4]=m*b+v*I+_*D,u[7]=m*M+v*C+_*N,u[2]=g*A+x*L+y*U,u[5]=g*b+x*I+y*D,u[8]=g*M+x*C+y*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],v=t[8];return i*h*v-i*d*m-r*u*v+r*d*p+l*u*m-l*h*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],v=t[8],_=v*h-d*m,g=d*p-v*u,x=m*u-h*p,y=i*_+r*g+l*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/y;return t[0]=_*A,t[1]=(l*m-v*r)*A,t[2]=(d*r-l*h)*A,t[3]=g*A,t[4]=(v*i-l*p)*A,t[5]=(l*u-d*i)*A,t[6]=x*A,t[7]=(r*p-m*i)*A,t[8]=(h*i-r*u)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return xo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ep.makeScale(t,i)),this}rotate(t){return xo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ep.makeRotation(-t)),this}translate(t,i){return xo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ep.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}};t0.prototype.isMatrix3=!0;let me=t0;const ep=new me,Ax=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wx=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sE(){const o={enabled:!0,workingColorSpace:rf,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Qe&&(l.r=Va(l.r),l.g=Va(l.g),l.b=Va(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Qe&&(l.r=So(l.r),l.g=So(l.g),l.b=So(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Cr?sf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return xo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return xo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[rf]:{primaries:t,whitePoint:r,transfer:sf,toXYZ:Ax,fromXYZ:wx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:t,whitePoint:r,transfer:Qe,toXYZ:Ax,fromXYZ:wx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),o}const Be=sE();function Va(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function So(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let no;class oE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{no===void 0&&(no=Gl("canvas")),no.width=t.width,no.height=t.height;const l=no.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=no}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Gl("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Va(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Va(i[r]/255)*255):i[r]=Va(i[r]);return{data:i,width:t.width,height:t.height}}else return ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lE=0;class Xm{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=Xl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(np(l[h].image)):u.push(np(l[h]))}else u=np(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function np(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?oE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ue("Texture: Unable to serialize Texture."),{})}let uE=0;const ip=new k;class kn extends ds{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,r=Ga,l=Ga,u=Vn,h=Nr,d=Ki,p=Si,m=kn.DEFAULT_ANISOTROPY,v=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=Xl(),this.name="",this.source=new Xm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ip).x}get height(){return this.source.getSize(ip).y}get depth(){return this.source.getSize(ip).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ue(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ue(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==KS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yp:t.x=t.x-Math.floor(t.x);break;case Ga:t.x=t.x<0?0:1;break;case Kp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yp:t.y=t.y-Math.floor(t.y);break;case Ga:t.y=t.y<0?0:1;break;case Kp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=KS;kn.DEFAULT_ANISOTROPY=1;const e0=class e0{constructor(t=0,i=0,r=0,l=1){this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const p=t.elements,m=p[0],v=p[4],_=p[8],g=p[1],x=p[5],y=p[9],A=p[2],b=p[6],M=p[10];if(Math.abs(v-g)<.01&&Math.abs(_-A)<.01&&Math.abs(y-b)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+A)<.1&&Math.abs(y+b)<.1&&Math.abs(m+x+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(m+1)/2,C=(x+1)/2,U=(M+1)/2,D=(v+g)/4,N=(_+A)/4,E=(y+b)/4;return I>C&&I>U?I<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(I),l=D/r,u=N/r):C>U?C<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),r=D/l,u=E/l):U<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(U),r=N/u,l=E/u),this.set(r,l,u,i),this}let L=Math.sqrt((b-y)*(b-y)+(_-A)*(_-A)+(g-v)*(g-v));return Math.abs(L)<.001&&(L=1),this.x=(b-y)/L,this.y=(_-A)/L,this.z=(g-v)/L,this.w=Math.acos((m+x+M-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ne(this.x,t.x,i.x),this.y=Ne(this.y,t.y,i.y),this.z=Ne(this.z,t.z,i.z),this.w=Ne(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ne(this.x,t,i),this.y=Ne(this.y,t,i),this.z=Ne(this.z,t,i),this.w=Ne(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ne(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};e0.prototype.isVector4=!0;let tn=e0;class cE extends ds{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:r.depth},u=new kn(l),h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Xm(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends cE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class iy extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fE extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ff=class ff{constructor(t,i,r,l,u,h,d,p,m,v,_,g,x,y,A,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,p,m,v,_,g,x,y,A,b)}set(t,i,r,l,u,h,d,p,m,v,_,g,x,y,A,b){const M=this.elements;return M[0]=t,M[4]=i,M[8]=r,M[12]=l,M[1]=u,M[5]=h,M[9]=d,M[13]=p,M[2]=m,M[6]=v,M[10]=_,M[14]=g,M[3]=x,M[7]=y,M[11]=A,M[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ff().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,r=t.elements,l=1/io.setFromMatrixColumn(t,0).length(),u=1/io.setFromMatrixColumn(t,1).length(),h=1/io.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),v=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const g=h*v,x=h*_,y=d*v,A=d*_;i[0]=p*v,i[4]=-p*_,i[8]=m,i[1]=x+y*m,i[5]=g-A*m,i[9]=-d*p,i[2]=A-g*m,i[6]=y+x*m,i[10]=h*p}else if(t.order==="YXZ"){const g=p*v,x=p*_,y=m*v,A=m*_;i[0]=g+A*d,i[4]=y*d-x,i[8]=h*m,i[1]=h*_,i[5]=h*v,i[9]=-d,i[2]=x*d-y,i[6]=A+g*d,i[10]=h*p}else if(t.order==="ZXY"){const g=p*v,x=p*_,y=m*v,A=m*_;i[0]=g-A*d,i[4]=-h*_,i[8]=y+x*d,i[1]=x+y*d,i[5]=h*v,i[9]=A-g*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const g=h*v,x=h*_,y=d*v,A=d*_;i[0]=p*v,i[4]=y*m-x,i[8]=g*m+A,i[1]=p*_,i[5]=A*m+g,i[9]=x*m-y,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const g=h*p,x=h*m,y=d*p,A=d*m;i[0]=p*v,i[4]=A-g*_,i[8]=y*_+x,i[1]=_,i[5]=h*v,i[9]=-d*v,i[2]=-m*v,i[6]=x*_+y,i[10]=g-A*_}else if(t.order==="XZY"){const g=h*p,x=h*m,y=d*p,A=d*m;i[0]=p*v,i[4]=-_,i[8]=m*v,i[1]=g*_+A,i[5]=h*v,i[9]=x*_-y,i[2]=y*_-x,i[6]=d*v,i[10]=A*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hE,t,dE)}lookAt(t,i,r){const l=this.elements;return _i.subVectors(t,i),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Sr.crossVectors(r,_i),Sr.lengthSq()===0&&(Math.abs(r.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Sr.crossVectors(r,_i)),Sr.normalize(),vc.crossVectors(_i,Sr),l[0]=Sr.x,l[4]=vc.x,l[8]=_i.x,l[1]=Sr.y,l[5]=vc.y,l[9]=_i.y,l[2]=Sr.z,l[6]=vc.z,l[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],v=r[1],_=r[5],g=r[9],x=r[13],y=r[2],A=r[6],b=r[10],M=r[14],L=r[3],I=r[7],C=r[11],U=r[15],D=l[0],N=l[4],E=l[8],O=l[12],F=l[1],G=l[5],H=l[9],j=l[13],Z=l[2],Q=l[6],W=l[10],Y=l[14],lt=l[3],at=l[7],mt=l[11],bt=l[15];return u[0]=h*D+d*F+p*Z+m*lt,u[4]=h*N+d*G+p*Q+m*at,u[8]=h*E+d*H+p*W+m*mt,u[12]=h*O+d*j+p*Y+m*bt,u[1]=v*D+_*F+g*Z+x*lt,u[5]=v*N+_*G+g*Q+x*at,u[9]=v*E+_*H+g*W+x*mt,u[13]=v*O+_*j+g*Y+x*bt,u[2]=y*D+A*F+b*Z+M*lt,u[6]=y*N+A*G+b*Q+M*at,u[10]=y*E+A*H+b*W+M*mt,u[14]=y*O+A*j+b*Y+M*bt,u[3]=L*D+I*F+C*Z+U*lt,u[7]=L*N+I*G+C*Q+U*at,u[11]=L*E+I*H+C*W+U*mt,u[15]=L*O+I*j+C*Y+U*bt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],p=t[9],m=t[13],v=t[2],_=t[6],g=t[10],x=t[14],y=t[3],A=t[7],b=t[11],M=t[15],L=p*x-m*g,I=d*x-m*_,C=d*g-p*_,U=h*x-m*v,D=h*g-p*v,N=h*_-d*v;return i*(A*L-b*I+M*C)-r*(y*L-b*U+M*D)+l*(y*I-A*U+M*N)-u*(y*C-A*D+b*N)}determinantAffine(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[1],h=t[5],d=t[9],p=t[2],m=t[6],v=t[10];return i*(h*v-d*m)-r*(u*v-d*p)+l*(u*m-h*p)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],v=t[8],_=t[9],g=t[10],x=t[11],y=t[12],A=t[13],b=t[14],M=t[15],L=i*d-r*h,I=i*p-l*h,C=i*m-u*h,U=r*p-l*d,D=r*m-u*d,N=l*m-u*p,E=v*A-_*y,O=v*b-g*y,F=v*M-x*y,G=_*b-g*A,H=_*M-x*A,j=g*M-x*b,Z=L*j-I*H+C*G+U*F-D*O+N*E;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/Z;return t[0]=(d*j-p*H+m*G)*Q,t[1]=(l*H-r*j-u*G)*Q,t[2]=(A*N-b*D+M*U)*Q,t[3]=(g*D-_*N-x*U)*Q,t[4]=(p*F-h*j-m*O)*Q,t[5]=(i*j-l*F+u*O)*Q,t[6]=(b*C-y*N-M*I)*Q,t[7]=(v*N-g*C+x*I)*Q,t[8]=(h*H-d*F+m*E)*Q,t[9]=(r*F-i*H-u*E)*Q,t[10]=(y*D-A*C+M*L)*Q,t[11]=(_*C-v*D-x*L)*Q,t[12]=(d*O-h*G-p*E)*Q,t[13]=(i*G-r*O+l*E)*Q,t[14]=(A*I-y*U-b*L)*Q,t[15]=(v*U-_*I+g*L)*Q,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,p=t.z,m=u*h,v=u*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,v*d+r,v*p-l*h,0,m*p-l*d,v*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,v=h+h,_=d+d,g=u*m,x=u*v,y=u*_,A=h*v,b=h*_,M=d*_,L=p*m,I=p*v,C=p*_,U=r.x,D=r.y,N=r.z;return l[0]=(1-(A+M))*U,l[1]=(x+C)*U,l[2]=(y-I)*U,l[3]=0,l[4]=(x-C)*D,l[5]=(1-(g+M))*D,l[6]=(b+L)*D,l[7]=0,l[8]=(y+I)*N,l[9]=(b-L)*N,l[10]=(1-(g+A))*N,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),i.identity(),this;let h=io.set(l[0],l[1],l[2]).length();const d=io.set(l[4],l[5],l[6]).length(),p=io.set(l[8],l[9],l[10]).length();u<0&&(h=-h),Vi.copy(this);const m=1/h,v=1/d,_=1/p;return Vi.elements[0]*=m,Vi.elements[1]*=m,Vi.elements[2]*=m,Vi.elements[4]*=v,Vi.elements[5]*=v,Vi.elements[6]*=v,Vi.elements[8]*=_,Vi.elements[9]*=_,Vi.elements[10]*=_,i.setFromRotationMatrix(Vi),r.x=h,r.y=d,r.z=p,this}makePerspective(t,i,r,l,u,h,d=ma,p=!1){const m=this.elements,v=2*u/(i-t),_=2*u/(r-l),g=(i+t)/(i-t),x=(r+l)/(r-l);let y,A;if(p)y=u/(h-u),A=h*u/(h-u);else if(d===ma)y=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===Hl)y=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=_,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=ma,p=!1){const m=this.elements,v=2/(i-t),_=2/(r-l),g=-(i+t)/(i-t),x=-(r+l)/(r-l);let y,A;if(p)y=1/(h-u),A=h/(h-u);else if(d===ma)y=-2/(h-u),A=-(h+u)/(h-u);else if(d===Hl)y=-1/(h-u),A=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=_,m[9]=0,m[13]=x,m[2]=0,m[6]=0,m[10]=y,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}};ff.prototype.isMatrix4=!0;let rn=ff;const io=new k,Vi=new rn,hE=new k(0,0,0),dE=new k(1,1,1),Sr=new k,vc=new k,_i=new k,Rx=new rn,Cx=new xa;class Lr{constructor(t=0,i=0,r=0,l=Lr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],v=l[9],_=l[2],g=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ne(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Ne(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,x),this._y=0);break;default:ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Rx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Cx.setFromEuler(this),this.setFromQuaternion(Cx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lr.DEFAULT_ORDER="XYZ";class ay{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pE=0;const Dx=new k,ao=new xa,Pa=new rn,_c=new k,Ml=new k,mE=new k,gE=new xa,Nx=new k(1,0,0),Ux=new k(0,1,0),Lx=new k(0,0,1),Ox={type:"added"},vE={type:"removed"},ro={type:"childadded",child:null},ap={type:"childremoved",child:null};class Dn extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Xl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const t=new k,i=new Lr,r=new xa,l=new k(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new me}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ay,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ao.setFromAxisAngle(t,i),this.quaternion.multiply(ao),this}rotateOnWorldAxis(t,i){return ao.setFromAxisAngle(t,i),this.quaternion.premultiply(ao),this}rotateX(t){return this.rotateOnAxis(Nx,t)}rotateY(t){return this.rotateOnAxis(Ux,t)}rotateZ(t){return this.rotateOnAxis(Lx,t)}translateOnAxis(t,i){return Dx.copy(t).applyQuaternion(this.quaternion),this.position.add(Dx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Nx,t)}translateY(t){return this.translateOnAxis(Ux,t)}translateZ(t){return this.translateOnAxis(Lx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?_c.copy(t):_c.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pa.lookAt(Ml,_c,this.up):Pa.lookAt(_c,Ml,this.up),this.quaternion.setFromRotationMatrix(Pa),l&&(Pa.extractRotation(l.matrixWorld),ao.setFromRotationMatrix(Pa),this.quaternion.premultiply(ao.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ox),ro.child=t,this.dispatchEvent(ro),ro.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(vE),ap.child=t,this.dispatchEvent(ap),ap.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ox),ro.child=t,this.dispatchEvent(ro),ro.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,t,mE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,gE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,l=t.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const u=this.children;for(let h=0,d=u.length;h<d;h++)u[h].updateWorldMatrix(!1,!0,r)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];u(t.shapes,_)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),v=h(t.images),_=h(t.shapes),g=h(t.skeletons),x=h(t.animations),y=h(t.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),x.length>0&&(r.animations=x),y.length>0&&(r.nodes=y)}return r.object=l,r;function h(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Dn.DEFAULT_UP=new k(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bn extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _E={type:"move"};class rp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const A of t.hand.values()){const b=i.getJointPose(A,r),M=this._getHandJoint(m,A);b!==null&&(M.matrix.fromArray(b.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=b.radius),M.visible=b!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],g=v.position.distanceTo(_.position),x=.02,y=.005;m.inputState.pinching&&g>x+y?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&g<=x-y&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(_E)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new bn;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const ry={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},xc={h:0,s:0,l:0};function sp(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Pe{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Be.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Be.workingColorSpace){return this.r=t,this.g=i,this.b=r,Be.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Be.workingColorSpace){if(t=rE(t,1),i=Ne(i,0,1),r=Ne(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=sp(h,u,t+1/3),this.g=sp(h,u,t),this.b=sp(h,u,t-1/3)}return Be.colorSpaceToWorking(this,l),this}setStyle(t,i=Jn){function r(u){u!==void 0&&parseFloat(u)<1&&ue("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ue("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Jn){const r=ry[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Va(t.r),this.g=Va(t.g),this.b=Va(t.b),this}copyLinearToSRGB(t){return this.r=So(t.r),this.g=So(t.g),this.b=So(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Jn){return Be.workingToColorSpace(Hn.copy(this),t),Math.round(Ne(Hn.r*255,0,255))*65536+Math.round(Ne(Hn.g*255,0,255))*256+Math.round(Ne(Hn.b*255,0,255))}getHexString(t=Jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Be.workingColorSpace){Be.workingToColorSpace(Hn.copy(this),i);const r=Hn.r,l=Hn.g,u=Hn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const v=(d+h)/2;if(d===h)p=0,m=0;else{const _=h-d;switch(m=v<=.5?_/(h+d):_/(2-h-d),h){case r:p=(l-u)/_+(l<u?6:0);break;case l:p=(u-r)/_+2;break;case u:p=(r-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=v,t}getRGB(t,i=Be.workingColorSpace){return Be.workingToColorSpace(Hn.copy(this),i),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=Jn){Be.workingToColorSpace(Hn.copy(this),t);const i=Hn.r,r=Hn.g,l=Hn.b;return t!==Jn?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(yr),this.setHSL(yr.h+t,yr.s+i,yr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(yr),t.getHSL(xc);const r=$d(yr.h,xc.h,i),l=$d(yr.s,xc.s,i),u=$d(yr.l,xc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Pe;Pe.NAMES=ry;let Px=class extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lr,this.environmentIntensity=1,this.environmentRotation=new Lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}};const ki=new k,za=new k,op=new k,Ia=new k,so=new k,oo=new k,zx=new k,lp=new k,up=new k,cp=new k,fp=new tn,hp=new tn,dp=new tn;class Yi{constructor(t=new k,i=new k,r=new k){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),ki.subVectors(t,i),l.cross(ki);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){ki.subVectors(l,i),za.subVectors(r,i),op.subVectors(t,i);const h=ki.dot(ki),d=ki.dot(za),p=ki.dot(op),m=za.dot(za),v=za.dot(op),_=h*m-d*d;if(_===0)return u.set(0,0,0),null;const g=1/_,x=(m*p-d*v)*g,y=(h*v-d*p)*g;return u.set(1-x-y,y,x)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Ia)===null?!1:Ia.x>=0&&Ia.y>=0&&Ia.x+Ia.y<=1}static getInterpolation(t,i,r,l,u,h,d,p){return this.getBarycoord(t,i,r,l,Ia)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ia.x),p.addScaledVector(h,Ia.y),p.addScaledVector(d,Ia.z),p)}static getInterpolatedAttribute(t,i,r,l,u,h){return fp.setScalar(0),hp.setScalar(0),dp.setScalar(0),fp.fromBufferAttribute(t,i),hp.fromBufferAttribute(t,r),dp.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(fp,u.x),h.addScaledVector(hp,u.y),h.addScaledVector(dp,u.z),h}static isFrontFacing(t,i,r,l){return ki.subVectors(r,i),za.subVectors(t,i),ki.cross(za).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ki.subVectors(this.c,this.b),za.subVectors(this.a,this.b),ki.cross(za).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Yi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;so.subVectors(l,r),oo.subVectors(u,r),lp.subVectors(t,r);const p=so.dot(lp),m=oo.dot(lp);if(p<=0&&m<=0)return i.copy(r);up.subVectors(t,l);const v=so.dot(up),_=oo.dot(up);if(v>=0&&_<=v)return i.copy(l);const g=p*_-v*m;if(g<=0&&p>=0&&v<=0)return h=p/(p-v),i.copy(r).addScaledVector(so,h);cp.subVectors(t,u);const x=so.dot(cp),y=oo.dot(cp);if(y>=0&&x<=y)return i.copy(u);const A=x*m-p*y;if(A<=0&&m>=0&&y<=0)return d=m/(m-y),i.copy(r).addScaledVector(oo,d);const b=v*y-x*_;if(b<=0&&_-v>=0&&x-y>=0)return zx.subVectors(u,l),d=(_-v)/(_-v+(x-y)),i.copy(l).addScaledVector(zx,d);const M=1/(b+A+g);return h=A*M,d=g*M,i.copy(r).addScaledVector(so,h).addScaledVector(oo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ql{constructor(t=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Xi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Xi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Xi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Xi):Xi.fromBufferAttribute(u,h),Xi.applyMatrix4(t.matrixWorld),this.expandByPoint(Xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Sc.copy(r.boundingBox)),Sc.applyMatrix4(t.matrixWorld),this.union(Sc)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xi),Xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bl),yc.subVectors(this.max,bl),lo.subVectors(t.a,bl),uo.subVectors(t.b,bl),co.subVectors(t.c,bl),Mr.subVectors(uo,lo),br.subVectors(co,uo),is.subVectors(lo,co);let i=[0,-Mr.z,Mr.y,0,-br.z,br.y,0,-is.z,is.y,Mr.z,0,-Mr.x,br.z,0,-br.x,is.z,0,-is.x,-Mr.y,Mr.x,0,-br.y,br.x,0,-is.y,is.x,0];return!pp(i,lo,uo,co,yc)||(i=[1,0,0,0,1,0,0,0,1],!pp(i,lo,uo,co,yc))?!1:(Mc.crossVectors(Mr,br),i=[Mc.x,Mc.y,Mc.z],pp(i,lo,uo,co,yc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ba),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ba=[new k,new k,new k,new k,new k,new k,new k,new k],Xi=new k,Sc=new ql,lo=new k,uo=new k,co=new k,Mr=new k,br=new k,is=new k,bl=new k,yc=new k,Mc=new k,as=new k;function pp(o,t,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){as.fromArray(o,u);const d=l.x*Math.abs(as.x)+l.y*Math.abs(as.y)+l.z*Math.abs(as.z),p=t.dot(as),m=i.dot(as),v=r.dot(as);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const xn=new k,bc=new re;let xE=0;class si extends ds{constructor(t,i,r=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=tE,this.updateRanges=[],this.gpuType=pa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)bc.fromBufferAttribute(this,i),bc.applyMatrix3(t),this.setXY(i,bc.x,bc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=yl(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=ri(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=yl(i,this.array)),i}setX(t,i){return this.normalized&&(i=ri(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=yl(i,this.array)),i}setY(t,i){return this.normalized&&(i=ri(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=yl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ri(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=yl(i,this.array)),i}setW(t,i){return this.normalized&&(i=ri(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=ri(i,this.array),r=ri(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=ri(i,this.array),r=ri(r,this.array),l=ri(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=ri(i,this.array),r=ri(r,this.array),l=ri(l,this.array),u=ri(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class sy extends si{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class oy extends si{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Sn extends si{constructor(t,i,r){super(new Float32Array(t),i,r)}}const SE=new ql,El=new k,mp=new k;class Wl{constructor(t=new k,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):SE.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;El.subVectors(t,this.center);const i=El.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(El,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(El.copy(t.center).add(mp)),this.expandByPoint(El.copy(t.center).sub(mp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let yE=0;const Ui=new rn,gp=new Dn,fo=new k,xi=new ql,Tl=new ql,Cn=new k;class Xn extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Xl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eE(t)?oy:sy)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new me().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ui.makeRotationFromQuaternion(t),this.applyMatrix4(Ui),this}rotateX(t){return Ui.makeRotationX(t),this.applyMatrix4(Ui),this}rotateY(t){return Ui.makeRotationY(t),this.applyMatrix4(Ui),this}rotateZ(t){return Ui.makeRotationZ(t),this.applyMatrix4(Ui),this}translate(t,i,r){return Ui.makeTranslation(t,i,r),this.applyMatrix4(Ui),this}scale(t,i,r){return Ui.makeScale(t,i,r),this.applyMatrix4(Ui),this}lookAt(t){return gp.lookAt(t),gp.updateMatrix(),this.applyMatrix4(gp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Sn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ql);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];xi.setFromBufferAttribute(u),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const r=this.boundingSphere.center;if(xi.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Tl.setFromBufferAttribute(d),this.morphTargetsRelative?(Cn.addVectors(xi.min,Tl.min),xi.expandByPoint(Cn),Cn.addVectors(xi.max,Tl.max),xi.expandByPoint(Cn)):(xi.expandByPoint(Tl.min),xi.expandByPoint(Tl.max))}xi.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)Cn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(Cn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)Cn.fromBufferAttribute(d,m),p&&(fo.fromBufferAttribute(t,m),Cn.add(fo)),l=Math.max(l,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==r.count)&&(h=new si(new Float32Array(4*r.count),4),this.setAttribute("tangent",h));const d=[],p=[];for(let E=0;E<r.count;E++)d[E]=new k,p[E]=new k;const m=new k,v=new k,_=new k,g=new re,x=new re,y=new re,A=new k,b=new k;function M(E,O,F){m.fromBufferAttribute(r,E),v.fromBufferAttribute(r,O),_.fromBufferAttribute(r,F),g.fromBufferAttribute(u,E),x.fromBufferAttribute(u,O),y.fromBufferAttribute(u,F),v.sub(m),_.sub(m),x.sub(g),y.sub(g);const G=1/(x.x*y.y-y.x*x.y);isFinite(G)&&(A.copy(v).multiplyScalar(y.y).addScaledVector(_,-x.y).multiplyScalar(G),b.copy(_).multiplyScalar(x.x).addScaledVector(v,-y.x).multiplyScalar(G),d[E].add(A),d[O].add(A),d[F].add(A),p[E].add(b),p[O].add(b),p[F].add(b))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let E=0,O=L.length;E<O;++E){const F=L[E],G=F.start,H=F.count;for(let j=G,Z=G+H;j<Z;j+=3)M(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const I=new k,C=new k,U=new k,D=new k;function N(E){U.fromBufferAttribute(l,E),D.copy(U);const O=d[E];I.copy(O),I.sub(U.multiplyScalar(U.dot(O))).normalize(),C.crossVectors(D,O);const G=C.dot(p[E])<0?-1:1;h.setXYZW(E,I.x,I.y,I.z,G)}for(let E=0,O=L.length;E<O;++E){const F=L[E],G=F.start,H=F.count;for(let j=G,Z=G+H;j<Z;j+=3)N(t.getX(j+0)),N(t.getX(j+1)),N(t.getX(j+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new si(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,x=r.count;g<x;g++)r.setXYZ(g,0,0,0);const l=new k,u=new k,h=new k,d=new k,p=new k,m=new k,v=new k,_=new k;if(t)for(let g=0,x=t.count;g<x;g+=3){const y=t.getX(g+0),A=t.getX(g+1),b=t.getX(g+2);l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,b),v.subVectors(h,u),_.subVectors(l,u),v.cross(_),d.fromBufferAttribute(r,y),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,b),d.add(v),p.add(v),m.add(v),r.setXYZ(y,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(b,m.x,m.y,m.z)}else for(let g=0,x=i.count;g<x;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),v.subVectors(h,u),_.subVectors(l,u),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Cn.fromBufferAttribute(t,i),Cn.normalize(),t.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(d,p){const m=d.array,v=d.itemSize,_=d.normalized,g=new m.constructor(p.length*v);let x=0,y=0;for(let A=0,b=p.length;A<b;A++){d.isInterleavedBufferAttribute?x=p[A]*d.data.stride+d.offset:x=p[A]*v;for(let M=0;M<v;M++)g[y++]=m[x++]}return new si(g,v,_)}if(this.index===null)return ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Xn,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,_=m.length;v<_;v++){const g=m[v],x=t(g,r);p.push(x)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,g=m.length;_<g;_++){const x=m[_];v.push(x.toJSON(t.data))}v.length>0&&(l[p]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const u=t.morphAttributes;for(const m in u){const v=[],_=u[m];for(let g=0,x=_.length;g<x;g++)v.push(_[g].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,v=h.length;m<v;m++){const _=h[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vp=new k,ME=new k,bE=new me;class Rr{constructor(t=new k(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=vp.subVectors(r,i).cross(ME.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,r=!0){const l=t.delta(vp),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/u;return r===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||bE.getNormalMatrix(t),l=this.coplanarPoint(vp).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let EE=0;class ps extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Xl(),this.name="",this.type="Material",this.blending=Ll,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=HS,this.blendDst=ef,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jd,this.stencilZFail=Jd,this.stencilZPass=Jd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ue(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ue(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(r=>new Rr().fromJSON(r))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new re().fromArray(r)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Fa=new k,_p=new k,Ec=new k,Tc=new k;class qm{constructor(t=new k,i=new k(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Fa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Fa.copy(this.origin).addScaledVector(this.direction,i),Fa.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){_p.copy(t).add(i).multiplyScalar(.5),Ec.copy(i).sub(t).normalize(),Tc.copy(this.origin).sub(_p);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Ec),d=Tc.dot(this.direction),p=-Tc.dot(Ec),m=Tc.lengthSq(),v=Math.abs(1-h*h);let _,g,x,y;if(v>0)if(_=h*p-d,g=h*d-p,y=u*v,_>=0)if(g>=-y)if(g<=y){const A=1/v;_*=A,g*=A,x=_*(_+h*g+2*d)+g*(h*_+g+2*p)+m}else g=u,_=Math.max(0,-(h*g+d)),x=-_*_+g*(g+2*p)+m;else g=-u,_=Math.max(0,-(h*g+d)),x=-_*_+g*(g+2*p)+m;else g<=-y?(_=Math.max(0,-(-h*u+d)),g=_>0?-u:Math.min(Math.max(-u,-p),u),x=-_*_+g*(g+2*p)+m):g<=y?(_=0,g=Math.min(Math.max(-u,-p),u),x=g*(g+2*p)+m):(_=Math.max(0,-(h*u+d)),g=_>0?u:Math.min(Math.max(-u,-p),u),x=-_*_+g*(g+2*p)+m);else g=h>0?-u:u,_=Math.max(0,-(h*g+d)),x=-_*_+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(_p).addScaledVector(Ec,g),x}intersectSphere(t,i){if(t.radius<0)return null;Fa.subVectors(t.center,this.origin);const r=Fa.dot(this.direction),l=Fa.dot(Fa)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return m>=0?(r=(t.min.x-g.x)*m,l=(t.max.x-g.x)*m):(r=(t.max.x-g.x)*m,l=(t.min.x-g.x)*m),v>=0?(u=(t.min.y-g.y)*v,h=(t.max.y-g.y)*v):(u=(t.max.y-g.y)*v,h=(t.min.y-g.y)*v),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-g.z)*_,p=(t.max.z-g.z)*_):(d=(t.max.z-g.z)*_,p=(t.min.z-g.z)*_),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Fa)!==null}intersectTriangle(t,i,r,l,u){const h=this.origin,d=this.direction,p=d.x,m=d.y,v=d.z,_=t.x-h.x,g=t.y-h.y,x=t.z-h.z,y=i.x-h.x,A=i.y-h.y,b=i.z-h.z,M=r.x-h.x,L=r.y-h.y,I=r.z-h.z,C=Math.abs(p),U=Math.abs(m),D=Math.abs(v);let N,E,O,F,G,H,j,Z,Q,W,Y,lt;if(C>=U&&C>=D?(O=p,H=_,Q=y,lt=M,p>=0?(N=m,E=v,F=g,G=x,j=A,Z=b,W=L,Y=I):(N=v,E=m,F=x,G=g,j=b,Z=A,W=I,Y=L)):U>=D?(O=m,H=g,Q=A,lt=L,m>=0?(N=v,E=p,F=x,G=_,j=b,Z=y,W=I,Y=M):(N=p,E=v,F=_,G=x,j=y,Z=b,W=M,Y=I)):(O=v,H=x,Q=b,lt=I,v>=0?(N=p,E=m,F=_,G=g,j=y,Z=A,W=M,Y=L):(N=m,E=p,F=g,G=_,j=A,Z=y,W=L,Y=M)),O===0)return null;const at=N/O,mt=E/O,bt=1/O,Kt=F-at*H,_t=G-mt*H,z=j-at*Q,ht=Z-mt*Q,wt=W-at*lt,K=Y-mt*lt,ft=wt*ht-K*z,Et=Kt*K-_t*wt,Nt=z*_t-ht*Kt;if(l){if(ft<0||Et<0||Nt<0)return null}else if((ft<0||Et<0||Nt<0)&&(ft>0||Et>0||Nt>0))return null;const tt=ft+Et+Nt;if(tt===0)return null;const Ut=bt*(ft*H+Et*Q+Nt*lt);return(tt>0?Ut<0:Ut>0)?null:this.at(Ut/tt,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ly extends ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.combine=GS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ix=new rn,rs=new qm,Ac=new Wl,Bx=new k,wc=new k,Rc=new k,Cc=new k,xp=new k,Dc=new k,Fx=new k,Nc=new k;class sn extends Dn{constructor(t=new Xn,i=new ly){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Dc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],_=u[p];v!==0&&(xp.fromBufferAttribute(_,t),h?Dc.addScaledVector(xp,v):Dc.addScaledVector(xp.sub(i),v))}i.add(Dc)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ac.copy(r.boundingSphere),Ac.applyMatrix4(u),rs.copy(t.ray).recast(t.near),!(Ac.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Ac,Bx)===null||rs.origin.distanceToSquared(Bx)>(t.far-t.near)**2))&&(Ix.copy(u).invert(),rs.copy(t.ray).applyMatrix4(Ix),!(r.boundingBox!==null&&rs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,rs)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,_=u.attributes.normal,g=u.groups,x=u.drawRange;if(d!==null)if(Array.isArray(h))for(let y=0,A=g.length;y<A;y++){const b=g[y],M=h[b.materialIndex],L=Math.max(b.start,x.start),I=Math.min(d.count,Math.min(b.start+b.count,x.start+x.count));for(let C=L,U=I;C<U;C+=3){const D=d.getX(C),N=d.getX(C+1),E=d.getX(C+2);l=Uc(this,M,t,r,m,v,_,D,N,E),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const y=Math.max(0,x.start),A=Math.min(d.count,x.start+x.count);for(let b=y,M=A;b<M;b+=3){const L=d.getX(b),I=d.getX(b+1),C=d.getX(b+2);l=Uc(this,h,t,r,m,v,_,L,I,C),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let y=0,A=g.length;y<A;y++){const b=g[y],M=h[b.materialIndex],L=Math.max(b.start,x.start),I=Math.min(p.count,Math.min(b.start+b.count,x.start+x.count));for(let C=L,U=I;C<U;C+=3){const D=C,N=C+1,E=C+2;l=Uc(this,M,t,r,m,v,_,D,N,E),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const y=Math.max(0,x.start),A=Math.min(p.count,x.start+x.count);for(let b=y,M=A;b<M;b+=3){const L=b,I=b+1,C=b+2;l=Uc(this,h,t,r,m,v,_,L,I,C),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function TE(o,t,i,r,l,u,h,d){let p;if(t.side===oi?p=r.intersectTriangle(h,u,l,!0,d):p=r.intersectTriangle(l,u,h,t.side===cs,d),p===null)return null;Nc.copy(d),Nc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Nc);return m<i.near||m>i.far?null:{distance:m,point:Nc.clone(),object:o}}function Uc(o,t,i,r,l,u,h,d,p,m){o.getVertexPosition(d,wc),o.getVertexPosition(p,Rc),o.getVertexPosition(m,Cc);const v=TE(o,t,i,r,wc,Rc,Cc,Fx);if(v){const _=new k;Yi.getBarycoord(Fx,wc,Rc,Cc,_),l&&(v.uv=Yi.getInterpolatedAttribute(l,d,p,m,_,new re)),u&&(v.uv1=Yi.getInterpolatedAttribute(u,d,p,m,_,new re)),h&&(v.normal=Yi.getInterpolatedAttribute(h,d,p,m,_,new k),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:p,c:m,normal:new k,materialIndex:0};Yi.getNormal(wc,Rc,Cc,g.normal),v.face=g,v.barycoord=_}return v}class AE extends kn{constructor(t=null,i=1,r=1,l,u,h,d,p,m=In,v=In,_,g){super(null,h,d,p,m,v,l,u,_,g),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ss=new Wl,wE=new re(.5,.5),Lc=new k;class Wm{constructor(t=new Rr,i=new Rr,r=new Rr,l=new Rr,u=new Rr,h=new Rr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ma,r=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],p=u[2],m=u[3],v=u[4],_=u[5],g=u[6],x=u[7],y=u[8],A=u[9],b=u[10],M=u[11],L=u[12],I=u[13],C=u[14],U=u[15];if(l[0].setComponents(m-h,x-v,M-y,U-L).normalize(),l[1].setComponents(m+h,x+v,M+y,U+L).normalize(),l[2].setComponents(m+d,x+_,M+A,U+I).normalize(),l[3].setComponents(m-d,x-_,M-A,U-I).normalize(),r)l[4].setComponents(p,g,b,C).normalize(),l[5].setComponents(m-p,x-g,M-b,U-C).normalize();else if(l[4].setComponents(m-p,x-g,M-b,U-C).normalize(),i===ma)l[5].setComponents(m+p,x+g,M+b,U+C).normalize();else if(i===Hl)l[5].setComponents(p,g,b,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ss.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){ss.center.set(0,0,0);const i=wE.distanceTo(t.center);return ss.radius=.7071067811865476+i,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Lc.x=l.normal.x>0?t.max.x:t.min.x,Lc.y=l.normal.y>0?t.max.y:t.min.y,Lc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uy extends ps{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const of=new k,lf=new k,Hx=new rn,Al=new qm,Oc=new Wl,Sp=new k,Gx=new k;class RE extends Dn{constructor(t=new Xn,i=new uy){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)of.fromBufferAttribute(i,l-1),lf.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=of.distanceTo(lf);t.setAttribute("lineDistance",new Sn(r,1))}else ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Oc.copy(r.boundingSphere),Oc.applyMatrix4(l),Oc.radius+=u,t.ray.intersectsSphere(Oc)===!1)return;Hx.copy(l).invert(),Al.copy(t.ray).applyMatrix4(Hx);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const x=Math.max(0,h.start),y=Math.min(v.count,h.start+h.count);for(let A=x,b=y-1;A<b;A+=m){const M=v.getX(A),L=v.getX(A+1),I=Pc(this,t,Al,p,M,L,A);I&&i.push(I)}if(this.isLineLoop){const A=v.getX(y-1),b=v.getX(x),M=Pc(this,t,Al,p,A,b,y-1);M&&i.push(M)}}else{const x=Math.max(0,h.start),y=Math.min(g.count,h.start+h.count);for(let A=x,b=y-1;A<b;A+=m){const M=Pc(this,t,Al,p,A,A+1,A);M&&i.push(M)}if(this.isLineLoop){const A=Pc(this,t,Al,p,y-1,x,y-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Pc(o,t,i,r,l,u,h){const d=o.geometry.attributes.position;if(of.fromBufferAttribute(d,l),lf.fromBufferAttribute(d,u),i.distanceSqToSegment(of,lf,Sp,Gx)>r)return;Sp.applyMatrix4(o.matrixWorld);const m=t.ray.origin.distanceTo(Sp);if(!(m<t.near||m>t.far))return{distance:m,point:Gx.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const Vx=new k,kx=new k;class CE extends RE{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)Vx.fromBufferAttribute(i,l),kx.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Vx.distanceTo(kx);t.setAttribute("lineDistance",new Sn(r,1))}else ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class DE extends ps{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xx=new rn,wm=new qm,zc=new Wl,Ic=new k;class NE extends Dn{constructor(t=new Xn,i=new DE){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zc.copy(r.boundingSphere),zc.applyMatrix4(l),zc.radius+=u,t.ray.intersectsSphere(zc)===!1)return;Xx.copy(l).invert(),wm.copy(t.ray).applyMatrix4(Xx);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,_=r.attributes.position;if(m!==null){const g=Math.max(0,h.start),x=Math.min(m.count,h.start+h.count);for(let y=g,A=x;y<A;y++){const b=m.getX(y);Ic.fromBufferAttribute(_,b),qx(Ic,b,p,l,t,i,this)}}else{const g=Math.max(0,h.start),x=Math.min(_.count,h.start+h.count);for(let y=g,A=x;y<A;y++)Ic.fromBufferAttribute(_,y),qx(Ic,y,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function qx(o,t,i,r,l,u,h){const d=wm.distanceSqToPoint(o);if(d<i){const p=new k;wm.closestPointToPoint(o,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class cy extends kn{constructor(t=[],i=fs,r,l,u,h,d,p,m,v){super(t,i,r,l,u,h,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vl extends kn{constructor(t,i,r=va,l,u,h,d=In,p=In,m,v=ka,_=1){if(v!==ka&&v!==us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:_};super(g,l,u,h,d,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class UE extends Vl{constructor(t,i=va,r=fs,l,u,h=In,d=In,p,m=ka){const v={width:t,height:t,depth:1},_=[v,v,v,v,v,v];super(t,t,i,r,l,u,h,d,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class fy extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yl extends Xn{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],v=[],_=[];let g=0,x=0;y("z","y","x",-1,-1,r,i,t,h,u,0),y("z","y","x",1,-1,r,i,-t,h,u,1),y("x","z","y",1,1,t,r,i,l,h,2),y("x","z","y",1,-1,t,r,-i,l,h,3),y("x","y","z",1,-1,t,i,r,l,u,4),y("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new Sn(m,3)),this.setAttribute("normal",new Sn(v,3)),this.setAttribute("uv",new Sn(_,2));function y(A,b,M,L,I,C,U,D,N,E,O){const F=C/N,G=U/E,H=C/2,j=U/2,Z=D/2,Q=N+1,W=E+1;let Y=0,lt=0;const at=new k;for(let mt=0;mt<W;mt++){const bt=mt*G-j;for(let Kt=0;Kt<Q;Kt++){const _t=Kt*F-H;at[A]=_t*L,at[b]=bt*I,at[M]=Z,m.push(at.x,at.y,at.z),at[A]=0,at[b]=0,at[M]=D>0?1:-1,v.push(at.x,at.y,at.z),_.push(Kt/N),_.push(1-mt/E),Y+=1}}for(let mt=0;mt<E;mt++)for(let bt=0;bt<N;bt++){const Kt=g+bt+Q*mt,_t=g+bt+Q*(mt+1),z=g+(bt+1)+Q*(mt+1),ht=g+(bt+1)+Q*mt;p.push(Kt,_t,ht),p.push(_t,z,ht),lt+=6}d.addGroup(x,lt,O),x+=lt,g+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class qa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ue("Curve: .getPoint() not implemented.")}getPointAt(t,i){const r=this.getUtoTmapping(t);return this.getPoint(r,i)}getPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return i}getSpacedPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPointAt(r/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),u=0;i.push(0);for(let h=1;h<=t;h++)r=this.getPoint(h/t),u+=r.distanceTo(l),i.push(u),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const r=this.getLengths();let l=0;const u=r.length;let h;i?h=i:h=t*r[u-1];let d=0,p=u-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=r[l]-h,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,r[l]===h)return l/(u-1);const v=r[l],g=r[l+1]-v,x=(h-v)/g;return(l+x)/(u-1)}getTangent(t,i){let l=t-1e-4,u=t+1e-4;l<0&&(l=0),u>1&&(u=1);const h=this.getPoint(l),d=this.getPoint(u),p=i||(h.isVector2?new re:new k);return p.copy(d).sub(h).normalize(),p}getTangentAt(t,i){const r=this.getUtoTmapping(t);return this.getTangent(r,i)}computeFrenetFrames(t,i=!1){const r=new k,l=[],u=[],h=[],d=new k,p=new rn;for(let x=0;x<=t;x++){const y=x/t;l[x]=this.getTangentAt(y,new k)}u[0]=new k,h[0]=new k;let m=Number.MAX_VALUE;const v=Math.abs(l[0].x),_=Math.abs(l[0].y),g=Math.abs(l[0].z);v<=m&&(m=v,r.set(1,0,0)),_<=m&&(m=_,r.set(0,1,0)),g<=m&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),u[0].crossVectors(l[0],d),h[0].crossVectors(l[0],u[0]);for(let x=1;x<=t;x++){if(u[x]=u[x-1].clone(),h[x]=h[x-1].clone(),d.crossVectors(l[x-1],l[x]),d.length()>Number.EPSILON){d.normalize();const y=Math.acos(Ne(l[x-1].dot(l[x]),-1,1));u[x].applyMatrix4(p.makeRotationAxis(d,y))}h[x].crossVectors(l[x],u[x])}if(i===!0){let x=Math.acos(Ne(u[0].dot(u[t]),-1,1));x/=t,l[0].dot(d.crossVectors(u[0],u[t]))>0&&(x=-x);for(let y=1;y<=t;y++)u[y].applyMatrix4(p.makeRotationAxis(l[y],x*y)),h[y].crossVectors(l[y],u[y])}return{tangents:l,normals:u,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hy extends qa{constructor(t=0,i=0,r=1,l=1,u=0,h=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=h,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new re){const r=i,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const h=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(h?u=0:u=l),this.aClockwise===!0&&!h&&(u===l?u=-l:u=u-l);const d=this.aStartAngle+t*u;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),_=Math.sin(this.aRotation),g=p-this.aX,x=m-this.aY;p=g*v-x*_+this.aX,m=g*_+x*v+this.aY}return r.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class LE extends hy{constructor(t,i,r,l,u,h){super(t,i,r,r,l,u,h),this.isArcCurve=!0,this.type="ArcCurve"}}function Ym(){let o=0,t=0,i=0,r=0;function l(u,h,d,p){o=u,t=d,i=-3*u+3*h-2*d-p,r=2*u-2*h+d+p}return{initCatmullRom:function(u,h,d,p,m){l(h,d,m*(d-u),m*(p-h))},initNonuniformCatmullRom:function(u,h,d,p,m,v,_){let g=(h-u)/m-(d-u)/(m+v)+(d-h)/v,x=(d-h)/v-(p-h)/(v+_)+(p-d)/_;g*=v,x*=v,l(h,d,g,x)},calc:function(u){const h=u*u,d=h*u;return o+t*u+i*h+r*d}}}const Wx=new k,Yx=new k,yp=new Ym,Mp=new Ym,bp=new Ym;class dy extends qa{constructor(t=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=r,this.tension=l}getPoint(t,i=new k){const r=i,l=this.points,u=l.length,h=(u-(this.closed?0:1))*t;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/u)+1)*u:p===0&&d===u-1&&(d=u-2,p=1);let m,v;this.closed||d>0?m=l[(d-1)%u]:(Yx.subVectors(l[0],l[1]).add(l[0]),m=Yx);const _=l[d%u],g=l[(d+1)%u];if(this.closed||d+2<u?v=l[(d+2)%u]:(Wx.subVectors(l[u-1],l[u-2]).add(l[u-1]),v=Wx),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let y=Math.pow(m.distanceToSquared(_),x),A=Math.pow(_.distanceToSquared(g),x),b=Math.pow(g.distanceToSquared(v),x);A<1e-4&&(A=1),y<1e-4&&(y=A),b<1e-4&&(b=A),yp.initNonuniformCatmullRom(m.x,_.x,g.x,v.x,y,A,b),Mp.initNonuniformCatmullRom(m.y,_.y,g.y,v.y,y,A,b),bp.initNonuniformCatmullRom(m.z,_.z,g.z,v.z,y,A,b)}else this.curveType==="catmullrom"&&(yp.initCatmullRom(m.x,_.x,g.x,v.x,this.tension),Mp.initCatmullRom(m.y,_.y,g.y,v.y,this.tension),bp.initCatmullRom(m.z,_.z,g.z,v.z,this.tension));return r.set(yp.calc(p),Mp.calc(p),bp.calc(p)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new k().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Kx(o,t,i,r,l){const u=(r-t)*.5,h=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*r+u+h)*p+(-3*i+3*r-2*u-h)*d+u*o+i}function OE(o,t){const i=1-o;return i*i*t}function PE(o,t){return 2*(1-o)*o*t}function zE(o,t){return o*o*t}function Ol(o,t,i,r){return OE(o,t)+PE(o,i)+zE(o,r)}function IE(o,t){const i=1-o;return i*i*i*t}function BE(o,t){const i=1-o;return 3*i*i*o*t}function FE(o,t){return 3*(1-o)*o*o*t}function HE(o,t){return o*o*o*t}function Pl(o,t,i,r,l){return IE(o,t)+BE(o,i)+FE(o,r)+HE(o,l)}class GE extends qa{constructor(t=new re,i=new re,r=new re,l=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new re){const r=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return r.set(Pl(t,l.x,u.x,h.x,d.x),Pl(t,l.y,u.y,h.y,d.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class VE extends qa{constructor(t=new k,i=new k,r=new k,l=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new k){const r=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return r.set(Pl(t,l.x,u.x,h.x,d.x),Pl(t,l.y,u.y,h.y,d.y),Pl(t,l.z,u.z,h.z,d.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kE extends qa{constructor(t=new re,i=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new re){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new re){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class XE extends qa{constructor(t=new k,i=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new k){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new k){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qE extends qa{constructor(t=new re,i=new re,r=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new re){const r=i,l=this.v0,u=this.v1,h=this.v2;return r.set(Ol(t,l.x,u.x,h.x),Ol(t,l.y,u.y,h.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class py extends qa{constructor(t=new k,i=new k,r=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new k){const r=i,l=this.v0,u=this.v1,h=this.v2;return r.set(Ol(t,l.x,u.x,h.x),Ol(t,l.y,u.y,h.y),Ol(t,l.z,u.z,h.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class WE extends qa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new re){const r=i,l=this.points,u=(l.length-1)*t,h=Math.floor(u),d=u-h,p=l[h===0?h:h-1],m=l[h],v=l[h>l.length-2?l.length-1:h+1],_=l[h>l.length-3?l.length-1:h+2];return r.set(Kx(d,p.x,m.x,v.x,_.x),Kx(d,p.y,m.y,v.y,_.y)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new re().fromArray(l))}return this}}var YE=Object.freeze({__proto__:null,ArcCurve:LE,CatmullRomCurve3:dy,CubicBezierCurve:GE,CubicBezierCurve3:VE,EllipseCurve:hy,LineCurve:kE,LineCurve3:XE,QuadraticBezierCurve:qE,QuadraticBezierCurve3:py,SplineCurve:WE});class bo extends Xn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,v=p+1,_=t/d,g=i/p,x=[],y=[],A=[],b=[];for(let M=0;M<v;M++){const L=M*g-h;for(let I=0;I<m;I++){const C=I*_-u;y.push(C,-L,0),A.push(0,0,1),b.push(I/d),b.push(1-M/p)}}for(let M=0;M<p;M++)for(let L=0;L<d;L++){const I=L+m*M,C=L+m*(M+1),U=L+1+m*(M+1),D=L+1+m*M;x.push(I,C,D),x.push(C,U,D)}this.setIndex(x),this.setAttribute("position",new Sn(y,3)),this.setAttribute("normal",new Sn(A,3)),this.setAttribute("uv",new Sn(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Km extends Xn{constructor(t=.5,i=1,r=32,l=1,u=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:u,thetaLength:h},r=Math.max(3,r),l=Math.max(1,l);const d=[],p=[],m=[],v=[];let _=t;const g=(i-t)/l,x=new k,y=new re;for(let A=0;A<=l;A++){for(let b=0;b<=r;b++){const M=u+b/r*h;x.x=_*Math.cos(M),x.y=_*Math.sin(M),p.push(x.x,x.y,x.z),m.push(0,0,1),y.x=(x.x/i+1)/2,y.y=(x.y/i+1)/2,v.push(y.x,y.y)}_+=g}for(let A=0;A<l;A++){const b=A*(r+1);for(let M=0;M<r;M++){const L=M+b,I=L,C=L+r+1,U=L+r+2,D=L+1;d.push(I,C,D),d.push(C,U,D)}}this.setIndex(d),this.setAttribute("position",new Sn(p,3)),this.setAttribute("normal",new Sn(m,3)),this.setAttribute("uv",new Sn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Km(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Zm extends Xn{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let m=0;const v=[],_=new k,g=new k,x=[],y=[],A=[],b=[];for(let M=0;M<=r;M++){const L=[],I=M/r,C=h+I*d,U=t*Math.cos(C),D=Math.sqrt(t*t-U*U);let N=0;M===0&&h===0?N=.5/i:M===r&&p===Math.PI&&(N=-.5/i);for(let E=0;E<=i;E++){const O=E/i,F=l+O*u;_.x=-D*Math.cos(F),_.y=U,_.z=D*Math.sin(F),y.push(_.x,_.y,_.z),g.copy(_).normalize(),A.push(g.x,g.y,g.z),b.push(O+N,1-I),L.push(m++)}v.push(L)}for(let M=0;M<r;M++)for(let L=0;L<i;L++){const I=v[M][L+1],C=v[M][L],U=v[M+1][L],D=v[M+1][L+1];(M!==0||h>0)&&x.push(I,C,D),(M!==r-1||p<Math.PI)&&x.push(C,U,D)}this.setIndex(x),this.setAttribute("position",new Sn(y,3)),this.setAttribute("normal",new Sn(A,3)),this.setAttribute("uv",new Sn(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zm(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qm extends Xn{constructor(t=new py(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),i=64,r=1,l=8,u=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:l,closed:u};const h=t.computeFrenetFrames(i,u);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new k,p=new k,m=new re;let v=new k;const _=[],g=[],x=[],y=[];A(),this.setIndex(y),this.setAttribute("position",new Sn(_,3)),this.setAttribute("normal",new Sn(g,3)),this.setAttribute("uv",new Sn(x,2));function A(){for(let I=0;I<i;I++)b(I);b(u===!1?i:0),L(),M()}function b(I){v=t.getPointAt(I/i,v);const C=h.normals[I],U=h.binormals[I];for(let D=0;D<=l;D++){const N=D/l*Math.PI*2,E=Math.sin(N),O=-Math.cos(N);p.x=O*C.x+E*U.x,p.y=O*C.y+E*U.y,p.z=O*C.z+E*U.z,p.normalize(),g.push(p.x,p.y,p.z),d.x=v.x+r*p.x,d.y=v.y+r*p.y,d.z=v.z+r*p.z,_.push(d.x,d.y,d.z)}}function M(){for(let I=1;I<=i;I++)for(let C=1;C<=l;C++){const U=(l+1)*(I-1)+(C-1),D=(l+1)*I+(C-1),N=(l+1)*I+C,E=(l+1)*(I-1)+C;y.push(U,D,E),y.push(D,N,E)}}function L(){for(let I=0;I<=i;I++)for(let C=0;C<=l;C++)m.x=I/i,m.y=C/l,x.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Qm(new YE[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Mo(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];if(Zx(l))l.isRenderTargetTexture?(ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone();else if(Array.isArray(l))if(Zx(l[0])){const u=[];for(let h=0,d=l.length;h<d;h++)u[h]=l[h].clone();t[i][r]=u}else t[i][r]=l.slice();else t[i][r]=l}}return t}function Qn(o){const t={};for(let i=0;i<o.length;i++){const r=Mo(o[i]);for(const l in r)t[l]=r[l]}return t}function Zx(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function KE(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function my(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Be.workingColorSpace}const ZE={clone:Mo,merge:Qn};var QE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QE,this.fragmentShader=JE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mo(t.uniforms),this.uniformsGroups=KE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const r in t.uniforms){const l=t.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Pe().setHex(l.value);break;case"v2":this.uniforms[r].value=new re().fromArray(l.value);break;case"v3":this.uniforms[r].value=new k().fromArray(l.value);break;case"v4":this.uniforms[r].value=new tn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new me().fromArray(l.value);break;case"m4":this.uniforms[r].value=new rn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)this.extensions[r]=t.extensions[r];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class jE extends on{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ep extends ps{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tm,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $E extends ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tT extends ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Tp={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(Qx(o)||(this.files[o]=t))},get:function(o){if(this.enabled!==!1&&!Qx(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function Qx(o){try{const t=o.slice(o.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class eT{constructor(t,i,r){const l=this;let u=!1,h=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(v){d++,u===!1&&l.onStart!==void 0&&l.onStart(v,h,d),u=!0},this.itemEnd=function(v){h++,l.onProgress!==void 0&&l.onProgress(v,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,_){return m.push(v,_),this},this.removeHandler=function(v){const _=m.indexOf(v);return _!==-1&&m.splice(_,2),this},this.getHandler=function(v){for(let _=0,g=m.length;_<g;_+=2){const x=m[_],y=m[_+1];if(x.global&&(x.lastIndex=0),x.test(v))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const nT=new eT;class Jm{constructor(t){this.manager=t!==void 0?t:nT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,u){r.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Jm.DEFAULT_MATERIAL_NAME="__DEFAULT";const ho=new WeakMap;class iT extends Jm{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,h=Tp.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)u.manager.itemStart(t),setTimeout(function(){i&&i(h),u.manager.itemEnd(t)},0);else{let _=ho.get(h);_===void 0&&(_=[],ho.set(h,_)),_.push({onLoad:i,onError:l})}return h}const d=Gl("img");function p(){v(),i&&i(this);const _=ho.get(this)||[];for(let g=0;g<_.length;g++){const x=_[g];x.onLoad&&x.onLoad(this)}ho.delete(this),u.manager.itemEnd(t)}function m(_){v(),l&&l(_),Tp.remove(`image:${t}`);const g=ho.get(this)||[];for(let x=0;x<g.length;x++){const y=g[x];y.onError&&y.onError(_)}ho.delete(this),u.manager.itemError(t),u.manager.itemEnd(t)}function v(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Tp.add(`image:${t}`,d),u.manager.itemStart(t),d.src=t,d}}class aT extends Jm{constructor(t){super(t)}load(t,i,r,l){const u=new kn,h=new iT(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}class gy extends Dn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Ap=new rn,Jx=new k,jx=new k;class rT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wm,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera;Jx.setFromMatrixPosition(t.matrixWorld),i.position.copy(Jx),jx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(jx),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,r,l){Ap.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),r.setFromProjectionMatrix(Ap,t.coordinateSystem,t.reversedDepth);const u=this._frameExtents,h=l?l.z/u.x:1,d=l?l.w/u.y:1,p=l?l.x/u.x:0,m=l?l.y/u.y:0;t.coordinateSystem===Hl||t.reversedDepth?i.set(.5*h,0,0,.5*h+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):i.set(.5*h,0,0,.5*h+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),i.multiply(Ap)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Bc=new k,Fc=new xa,fa=new k;class vy extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=ma,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Bc,Fc,fa),fa.x===1&&fa.y===1&&fa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,Fc,fa.set(1,1,1)).invert()}updateWorldMatrix(t,i,r=!1){super.updateWorldMatrix(t,i,r),this.matrixWorld.decompose(Bc,Fc,fa),fa.x===1&&fa.y===1&&fa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,Fc,fa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Er=new k,$x=new re,tS=new re;class Wi extends vy{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Am*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(jd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Am*2*Math.atan(Math.tan(jd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Er.x,Er.y).multiplyScalar(-t/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Er.x,Er.y).multiplyScalar(-t/Er.z)}getViewSize(t,i){return this.getViewBounds(t,$x,tS),i.subVectors(tS,$x)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(jd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class kl extends vy{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class sT extends rT{constructor(){super(new kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oT extends gy{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new sT}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class lT extends gy{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const po=-90,mo=1;class uT extends Dn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Wi(po,mo,t,i);l.layers=this.layers,this.add(l);const u=new Wi(po,mo,t,i);u.layers=this.layers,this.add(u);const h=new Wi(po,mo,t,i);h.layers=this.layers,this.add(h);const d=new Wi(po,mo,t,i);d.layers=this.layers,this.add(d);const p=new Wi(po,mo,t,i);p.layers=this.layers,this.add(p);const m=new Wi(po,mo,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(t===ma)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Hl)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,v]=this.children,_=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let b=!1;t.isWebGLRenderer===!0?b=t.state.buffers.depth.getReversed():b=t.reversedDepthBuffer,t.setRenderTarget(r,0,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,u),t.setRenderTarget(r,1,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(r,2,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(r,3,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,4,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),t.setRenderTarget(_,g,x),t.xr.enabled=y,r.texture.needsPMREMUpdate=!0}}class cT extends Wi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const n0=class n0{constructor(t,i,r,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,l){const u=this.elements;return u[0]=t,u[2]=i,u[1]=r,u[3]=l,this}};n0.prototype.isMatrix2=!0;let eS=n0;function nS(o,t,i,r){const l=fT(r);switch(i){case $S:return o*t;case ey:return o*t/l.components*l.byteLength;case Fm:return o*t/l.components*l.byteLength;case hs:return o*t*2/l.components*l.byteLength;case Hm:return o*t*2/l.components*l.byteLength;case ty:return o*t*3/l.components*l.byteLength;case Ki:return o*t*4/l.components*l.byteLength;case Gm:return o*t*4/l.components*l.byteLength;case Wc:case Yc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Kc:case Zc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Qp:case jp:return Math.max(o,16)*Math.max(t,8)/4;case Zp:case Jp:return Math.max(o,8)*Math.max(t,8)/2;case $p:case tm:case nm:case im:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case em:case nf:case am:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case rm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case sm:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case om:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case lm:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case um:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case cm:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case fm:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case hm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case dm:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case pm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case mm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case gm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case vm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case _m:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case xm:case Sm:case ym:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Mm:case bm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case af:case Em:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function fT(o){switch(o){case Si:case ZS:return{byteLength:1,components:1};case Bl:case QS:case _a:return{byteLength:2,components:1};case Im:case Bm:return{byteLength:2,components:4};case va:case zm:case pa:return{byteLength:4,components:1};case JS:case jS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Om}}));typeof window<"u"&&(window.__THREE__?ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Om);function _y(){let o=null,t=!1,i=null,r=null;function l(u,h){r=o.requestAnimationFrame(l),i(u,h)}return{start:function(){t!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function hT(o){const t=new WeakMap;function i(d,p){const m=d.array,v=d.usage,_=m.byteLength,g=o.createBuffer();o.bindBuffer(p,g),o.bufferData(p,m,v),d.onUploadCallback();let x;if(m instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)x=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=o.SHORT;else if(m instanceof Uint32Array)x=o.UNSIGNED_INT;else if(m instanceof Int32Array)x=o.INT;else if(m instanceof Int8Array)x=o.BYTE;else if(m instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const v=p.array,_=p.updateRanges;if(o.bindBuffer(m,d),_.length===0)o.bufferSubData(m,0,v);else{_.sort((x,y)=>x.start-y.start);let g=0;for(let x=1;x<_.length;x++){const y=_[g],A=_[x];A.start<=y.start+y.count+1?y.count=Math.max(y.count,A.start+A.count-y.start):(++g,_[g]=A)}_.length=g+1;for(let x=0,y=_.length;x<y;x++){const A=_[x];o.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:h}}var dT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pT=`#ifdef USE_ALPHAHASH
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
#endif`,mT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_T=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xT=`#ifdef USE_AOMAP
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
#endif`,ST=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yT=`#ifdef USE_BATCHING
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
#endif`,MT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ET=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AT=`#ifdef USE_IRIDESCENCE
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
#endif`,wT=`#ifdef USE_BUMPMAP
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
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,LT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,OT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,PT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,zT=`#define PI 3.141592653589793
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
} // validated`,IT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BT=`vec3 transformedNormal = objectNormal;
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
#endif`,FT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kT="gl_FragColor = linearToOutputTexel( gl_FragColor );",XT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qT=`#ifdef USE_ENVMAP
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
#endif`,WT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,YT=`#ifdef USE_ENVMAP
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
#endif`,KT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZT=`#ifdef USE_ENVMAP
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
#endif`,QT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$T=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tA=`#ifdef USE_GRADIENTMAP
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
}`,eA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aA=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rA=`#ifdef USE_ENVMAP
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
#endif`,sA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cA=`PhysicalMaterial material;
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
#endif`,fA=`uniform sampler2D dfgLUT;
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
}`,hA=`
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
#endif`,dA=`#if defined( RE_IndirectDiffuse )
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
#endif`,pA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mA=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,gA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_A=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bA=`#if defined( USE_POINTS_UV )
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
#endif`,EA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CA=`#ifdef USE_MORPHTARGETS
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
#endif`,DA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zA=`#ifdef USE_NORMALMAP
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
#endif`,IA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jA=`float getShadowMask() {
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
}`,$A=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t2=`#ifdef USE_SKINNING
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
#endif`,e2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n2=`#ifdef USE_SKINNING
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
#endif`,i2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o2=`#ifdef USE_TRANSMISSION
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
#endif`,l2=`#ifdef USE_TRANSMISSION
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
#endif`,u2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p2=`uniform sampler2D t2D;
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
}`,m2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,v2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x2=`#include <common>
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
}`,S2=`#if DEPTH_PACKING == 3200
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
}`,y2=`#define DISTANCE
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
}`,M2=`#define DISTANCE
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
}`,b2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T2=`uniform float scale;
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
}`,A2=`uniform vec3 diffuse;
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
}`,w2=`#include <common>
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
}`,R2=`uniform vec3 diffuse;
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
}`,C2=`#define LAMBERT
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
}`,D2=`#define LAMBERT
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
}`,N2=`#define MATCAP
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
}`,U2=`#define MATCAP
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
}`,L2=`#define NORMAL
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
}`,O2=`#define NORMAL
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
}`,P2=`#define PHONG
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
}`,z2=`#define PHONG
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
}`,I2=`#define STANDARD
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
}`,B2=`#define STANDARD
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
}`,F2=`#define TOON
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
}`,H2=`#define TOON
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
}`,G2=`uniform float size;
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
}`,V2=`uniform vec3 diffuse;
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
}`,k2=`#include <common>
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
}`,X2=`uniform vec3 color;
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
}`,q2=`uniform float rotation;
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
}`,W2=`uniform vec3 diffuse;
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
}`,be={alphahash_fragment:dT,alphahash_pars_fragment:pT,alphamap_fragment:mT,alphamap_pars_fragment:gT,alphatest_fragment:vT,alphatest_pars_fragment:_T,aomap_fragment:xT,aomap_pars_fragment:ST,batching_pars_vertex:yT,batching_vertex:MT,begin_vertex:bT,beginnormal_vertex:ET,bsdfs:TT,iridescence_fragment:AT,bumpmap_pars_fragment:wT,clipping_planes_fragment:RT,clipping_planes_pars_fragment:CT,clipping_planes_pars_vertex:DT,clipping_planes_vertex:NT,color_fragment:UT,color_pars_fragment:LT,color_pars_vertex:OT,color_vertex:PT,common:zT,cube_uv_reflection_fragment:IT,defaultnormal_vertex:BT,displacementmap_pars_vertex:FT,displacementmap_vertex:HT,emissivemap_fragment:GT,emissivemap_pars_fragment:VT,colorspace_fragment:kT,colorspace_pars_fragment:XT,envmap_fragment:qT,envmap_common_pars_fragment:WT,envmap_pars_fragment:YT,envmap_pars_vertex:KT,envmap_physical_pars_fragment:rA,envmap_vertex:ZT,fog_vertex:QT,fog_pars_vertex:JT,fog_fragment:jT,fog_pars_fragment:$T,gradientmap_pars_fragment:tA,lightmap_pars_fragment:eA,lights_lambert_fragment:nA,lights_lambert_pars_fragment:iA,lights_pars_begin:aA,lights_toon_fragment:sA,lights_toon_pars_fragment:oA,lights_phong_fragment:lA,lights_phong_pars_fragment:uA,lights_physical_fragment:cA,lights_physical_pars_fragment:fA,lights_fragment_begin:hA,lights_fragment_maps:dA,lights_fragment_end:pA,lightprobes_pars_fragment:mA,logdepthbuf_fragment:gA,logdepthbuf_pars_fragment:vA,logdepthbuf_pars_vertex:_A,logdepthbuf_vertex:xA,map_fragment:SA,map_pars_fragment:yA,map_particle_fragment:MA,map_particle_pars_fragment:bA,metalnessmap_fragment:EA,metalnessmap_pars_fragment:TA,morphinstance_vertex:AA,morphcolor_vertex:wA,morphnormal_vertex:RA,morphtarget_pars_vertex:CA,morphtarget_vertex:DA,normal_fragment_begin:NA,normal_fragment_maps:UA,normal_pars_fragment:LA,normal_pars_vertex:OA,normal_vertex:PA,normalmap_pars_fragment:zA,clearcoat_normal_fragment_begin:IA,clearcoat_normal_fragment_maps:BA,clearcoat_pars_fragment:FA,iridescence_pars_fragment:HA,opaque_fragment:GA,packing:VA,premultiplied_alpha_fragment:kA,project_vertex:XA,dithering_fragment:qA,dithering_pars_fragment:WA,roughnessmap_fragment:YA,roughnessmap_pars_fragment:KA,shadowmap_pars_fragment:ZA,shadowmap_pars_vertex:QA,shadowmap_vertex:JA,shadowmask_pars_fragment:jA,skinbase_vertex:$A,skinning_pars_vertex:t2,skinning_vertex:e2,skinnormal_vertex:n2,specularmap_fragment:i2,specularmap_pars_fragment:a2,tonemapping_fragment:r2,tonemapping_pars_fragment:s2,transmission_fragment:o2,transmission_pars_fragment:l2,uv_pars_fragment:u2,uv_pars_vertex:c2,uv_vertex:f2,worldpos_vertex:h2,background_vert:d2,background_frag:p2,backgroundCube_vert:m2,backgroundCube_frag:g2,cube_vert:v2,cube_frag:_2,depth_vert:x2,depth_frag:S2,distance_vert:y2,distance_frag:M2,equirect_vert:b2,equirect_frag:E2,linedashed_vert:T2,linedashed_frag:A2,meshbasic_vert:w2,meshbasic_frag:R2,meshlambert_vert:C2,meshlambert_frag:D2,meshmatcap_vert:N2,meshmatcap_frag:U2,meshnormal_vert:L2,meshnormal_frag:O2,meshphong_vert:P2,meshphong_frag:z2,meshphysical_vert:I2,meshphysical_frag:B2,meshtoon_vert:F2,meshtoon_frag:H2,points_vert:G2,points_frag:V2,shadow_vert:k2,shadow_frag:X2,sprite_vert:q2,sprite_frag:W2},Xt={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},da={basic:{uniforms:Qn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:Qn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:Qn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:Qn([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:Qn([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new Pe(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:Qn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:Qn([Xt.points,Xt.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:Qn([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:Qn([Xt.common,Xt.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:Qn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:Qn([Xt.sprite,Xt.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distance:{uniforms:Qn([Xt.common,Xt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distance_vert,fragmentShader:be.distance_frag},shadow:{uniforms:Qn([Xt.lights,Xt.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};da.physical={uniforms:Qn([da.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Hc={r:0,b:0,g:0},Y2=new rn,xy=new me;xy.set(-1,0,0,0,1,0,0,0,1);function K2(o,t,i,r,l,u){const h=new Pe(0);let d=l===!0?0:1,p,m,v=null,_=0,g=null;function x(L){let I=L.isScene===!0?L.background:null;if(I&&I.isTexture){const C=L.backgroundBlurriness>0;I=t.get(I,C)}return I}function y(L){let I=!1;const C=x(L);C===null?b(h,d):C&&C.isColor&&(b(C,1),I=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,u):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function A(L,I){const C=x(I);C&&(C.isCubeTexture||C.mapping===hf)?(m===void 0&&(m=new sn(new Yl(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Mo(da.backgroundCube.uniforms),vertexShader:da.backgroundCube.vertexShader,fragmentShader:da.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Y2.makeRotationFromEuler(I.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(xy),m.material.toneMapped=Be.getTransfer(C.colorSpace)!==Qe,(v!==C||_!==C.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,v=C,_=C.version,g=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new sn(new bo(2,2),new on({name:"BackgroundMaterial",uniforms:Mo(da.background.uniforms),vertexShader:da.background.vertexShader,fragmentShader:da.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=Be.getTransfer(C.colorSpace)!==Qe,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||_!==C.version||g!==o.toneMapping)&&(p.material.needsUpdate=!0,v=C,_=C.version,g=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function b(L,I){L.getRGB(Hc,my(o)),i.buffers.color.setClear(Hc.r,Hc.g,Hc.b,I,u)}function M(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,I=1){h.set(L),d=I,b(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,b(h,d)},render:y,addToRenderList:A,dispose:M}}function Z2(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=g(null);let u=l,h=!1;function d(G,H,j,Z,Q){let W=!1;const Y=_(G,Z,j,H);u!==Y&&(u=Y,m(u.object)),W=x(G,Z,j,Q),W&&y(G,Z,j,Q),Q!==null&&t.update(Q,o.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,C(G,H,j,Z),Q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function p(){return o.createVertexArray()}function m(G){return o.bindVertexArray(G)}function v(G){return o.deleteVertexArray(G)}function _(G,H,j,Z){const Q=Z.wireframe===!0;let W=r[H.id];W===void 0&&(W={},r[H.id]=W);const Y=G.isInstancedMesh===!0?G.id:0;let lt=W[Y];lt===void 0&&(lt={},W[Y]=lt);let at=lt[j.id];at===void 0&&(at={},lt[j.id]=at);let mt=at[Q];return mt===void 0&&(mt=g(p()),at[Q]=mt),mt}function g(G){const H=[],j=[],Z=[];for(let Q=0;Q<i;Q++)H[Q]=0,j[Q]=0,Z[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:Z,object:G,attributes:{},index:null}}function x(G,H,j,Z){const Q=u.attributes,W=H.attributes;let Y=0;const lt=j.getAttributes();for(const at in lt)if(lt[at].location>=0){const bt=Q[at];let Kt=W[at];if(Kt===void 0&&(at==="instanceMatrix"&&G.instanceMatrix&&(Kt=G.instanceMatrix),at==="instanceColor"&&G.instanceColor&&(Kt=G.instanceColor)),bt===void 0||bt.attribute!==Kt||Kt&&bt.data!==Kt.data)return!0;Y++}return u.attributesNum!==Y||u.index!==Z}function y(G,H,j,Z){const Q={},W=H.attributes;let Y=0;const lt=j.getAttributes();for(const at in lt)if(lt[at].location>=0){let bt=W[at];bt===void 0&&(at==="instanceMatrix"&&G.instanceMatrix&&(bt=G.instanceMatrix),at==="instanceColor"&&G.instanceColor&&(bt=G.instanceColor));const Kt={};Kt.attribute=bt,bt&&bt.data&&(Kt.data=bt.data),Q[at]=Kt,Y++}u.attributes=Q,u.attributesNum=Y,u.index=Z}function A(){const G=u.newAttributes;for(let H=0,j=G.length;H<j;H++)G[H]=0}function b(G){M(G,0)}function M(G,H){const j=u.newAttributes,Z=u.enabledAttributes,Q=u.attributeDivisors;j[G]=1,Z[G]===0&&(o.enableVertexAttribArray(G),Z[G]=1),Q[G]!==H&&(o.vertexAttribDivisor(G,H),Q[G]=H)}function L(){const G=u.newAttributes,H=u.enabledAttributes;for(let j=0,Z=H.length;j<Z;j++)H[j]!==G[j]&&(o.disableVertexAttribArray(j),H[j]=0)}function I(G,H,j,Z,Q,W,Y){Y===!0?o.vertexAttribIPointer(G,H,j,Q,W):o.vertexAttribPointer(G,H,j,Z,Q,W)}function C(G,H,j,Z){A();const Q=Z.attributes,W=j.getAttributes(),Y=H.defaultAttributeValues;for(const lt in W){const at=W[lt];if(at.location>=0){let mt=Q[lt];if(mt===void 0&&(lt==="instanceMatrix"&&G.instanceMatrix&&(mt=G.instanceMatrix),lt==="instanceColor"&&G.instanceColor&&(mt=G.instanceColor)),mt!==void 0){const bt=mt.normalized,Kt=mt.itemSize,_t=t.get(mt);if(_t===void 0)continue;const z=_t.buffer,ht=_t.type,wt=_t.bytesPerElement,K=ht===o.INT||ht===o.UNSIGNED_INT||mt.gpuType===zm;if(mt.isInterleavedBufferAttribute){const ft=mt.data,Et=ft.stride,Nt=mt.offset;if(ft.isInstancedInterleavedBuffer){for(let tt=0;tt<at.locationSize;tt++)M(at.location+tt,ft.meshPerAttribute);G.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let tt=0;tt<at.locationSize;tt++)b(at.location+tt);o.bindBuffer(o.ARRAY_BUFFER,z);for(let tt=0;tt<at.locationSize;tt++)I(at.location+tt,Kt/at.locationSize,ht,bt,Et*wt,(Nt+Kt/at.locationSize*tt)*wt,K)}else{if(mt.isInstancedBufferAttribute){for(let ft=0;ft<at.locationSize;ft++)M(at.location+ft,mt.meshPerAttribute);G.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let ft=0;ft<at.locationSize;ft++)b(at.location+ft);o.bindBuffer(o.ARRAY_BUFFER,z);for(let ft=0;ft<at.locationSize;ft++)I(at.location+ft,Kt/at.locationSize,ht,bt,Kt*wt,Kt/at.locationSize*ft*wt,K)}}else if(Y!==void 0){const bt=Y[lt];if(bt!==void 0)switch(bt.length){case 2:o.vertexAttrib2fv(at.location,bt);break;case 3:o.vertexAttrib3fv(at.location,bt);break;case 4:o.vertexAttrib4fv(at.location,bt);break;default:o.vertexAttrib1fv(at.location,bt)}}}}L()}function U(){O();for(const G in r){const H=r[G];for(const j in H){const Z=H[j];for(const Q in Z){const W=Z[Q];for(const Y in W)v(W[Y].object),delete W[Y];delete Z[Q]}}delete r[G]}}function D(G){if(r[G.id]===void 0)return;const H=r[G.id];for(const j in H){const Z=H[j];for(const Q in Z){const W=Z[Q];for(const Y in W)v(W[Y].object),delete W[Y];delete Z[Q]}}delete r[G.id]}function N(G){for(const H in r){const j=r[H];for(const Z in j){const Q=j[Z];if(Q[G.id]===void 0)continue;const W=Q[G.id];for(const Y in W)v(W[Y].object),delete W[Y];delete Q[G.id]}}}function E(G){for(const H in r){const j=r[H],Z=G.isInstancedMesh===!0?G.id:0,Q=j[Z];if(Q!==void 0){for(const W in Q){const Y=Q[W];for(const lt in Y)v(Y[lt].object),delete Y[lt];delete Q[W]}delete j[Z],Object.keys(j).length===0&&delete r[H]}}}function O(){F(),h=!0,u!==l&&(u=l,m(u.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:F,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:N,initAttributes:A,enableAttribute:b,disableUnusedAttributes:L}}function Q2(o,t,i){let r;function l(p){r=p}function u(p,m){o.drawArrays(r,p,m),i.update(m,r,1)}function h(p,m,v){v!==0&&(o.drawArraysInstanced(r,p,m,v),i.update(m,r,v))}function d(p,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,v);let g=0;for(let x=0;x<v;x++)g+=m[x];i.update(g,r,1)}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function J2(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(N){return!(N!==Ki&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const E=N===_a&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Si&&N!==pa&&!E&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(ue("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=o.getParameter(o.MAX_SAMPLES),D=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:y,maxTextureSize:A,maxCubemapSize:b,maxAttributes:M,maxVertexUniforms:L,maxVaryings:I,maxFragmentUniforms:C,maxSamples:U,samples:D}}function j2(o){const t=this;let i=null,r=0,l=!1,u=!1;const h=new Rr,d=new me,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||r!==0||l;return l=g,r=_.length,x},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,g){i=v(_,g,0)},this.setState=function(_,g,x){const y=_.clippingPlanes,A=_.clipIntersection,b=_.clipShadows,M=o.get(_);if(!l||y===null||y.length===0||u&&!b)u?v(null):m();else{const L=u?0:r,I=L*4;let C=M.clippingState||null;p.value=C,C=v(y,g,I,x);for(let U=0;U!==I;++U)C[U]=i[U];M.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(_,g,x,y){const A=_!==null?_.length:0;let b=null;if(A!==0){if(b=p.value,y!==!0||b===null){const M=x+A*4,L=g.matrixWorldInverse;d.getNormalMatrix(L),(b===null||b.length<M)&&(b=new Float32Array(M));for(let I=0,C=x;I!==A;++I,C+=4)h.copy(_[I]).applyMatrix4(L,d),h.normal.toArray(b,C),b[C+3]=h.constant}p.value=b,p.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,b}}const _o=4,$2=6,t3=20,e3=256,wl=new kl,iS=new Pe;let wp=null,Rp=0,Cp=0,Dp=!1;const n3=new k,os=new k;class aS{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=n3}=u;wp=this._renderer.getRenderTarget(),Rp=this._renderer.getActiveCubeFace(),Cp=this._renderer.getActiveMipmapLevel(),Dp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wp,Rp,Cp),this._renderer.xr.enabled=Dp,t.scissorTest=!1,go(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===fs||t.mapping===yo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wp=this._renderer.getRenderTarget(),Rp=this._renderer.getActiveCubeFace(),Cp=this._renderer.getActiveMipmapLevel(),Dp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:_a,format:Ki,colorSpace:rf,depthBuffer:!1},l=rS(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rS(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=i3(u)),this._blurMaterial=r3(u,t,i),this._ggxMaterial=a3(u,t,i)}return l}_compileMaterial(t){const i=new sn(new Xn,t);this._renderer.compile(i,wl)}_sceneToCubeUV(t,i,r,l,u){const p=new Wi(90,1,i,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor(iS),_.toneMapping=ga,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new sn(new Yl,new ly({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,b=A.material;let M=!1;const L=t.background;L?L.isColor&&(b.color.copy(L),t.background=null,M=!0):(b.color.copy(iS),M=!0);for(let I=0;I<6;I++){const C=I%3;C===0?(p.up.set(0,m[I],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[I],u.y,u.z)):C===1?(p.up.set(0,0,m[I]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[I],u.z)):(p.up.set(0,m[I],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[I]));const U=this._cubeSize;go(l,C*U,I>2?U:0,U,U),_.setRenderTarget(l),M&&_.render(A,p),_.render(t,p)}_.toneMapping=x,_.autoClear=g,t.background=L}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===fs||t.mapping===yo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=oS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sS());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;go(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,wl)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const p=h.uniforms,m=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(m*m-v*v),g=m*1.25,x=_*g,{_lodMax:y}=this,A=this._sizeLods[r],b=3*A*(r>y-_o?r-y+_o:0),M=4*(this._cubeSize-A);p.envMap.value=t.texture,p.roughness.value=x,p.mipInt.value=y-i,go(u,b,M,3*A,2*A),l.setRenderTarget(u),l.render(d,wl),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=y-r,go(t,b,M,3*A,2*A),l.setRenderTarget(t),l.render(d,wl)}_blur(t,i,r,l){const u=this._pingPongRenderTarget,h=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(t,u,i,r,h),this._blurPass(u,t,r,r,h)}_blurPass(t,i,r,l,u){const h=this._renderer,d=this._blurMaterial,p=this._lodMeshes[l];p.material=d;const m=d.uniforms;m.envMap.value=t.texture,m.sigma.value=u,m.mipInt.value=this._lodMax-r;const v=this._sizeLods[l],_=3*v*(l>this._lodMax-_o?l-this._lodMax+_o:0),g=4*(this._cubeSize-v);go(i,_,g,3*v,2*v),h.setRenderTarget(i),h.render(p,wl)}}function i3(o){const t=[],i=[];let r=o;const l=o-_o+1+$2;for(let u=0;u<l;u++){const h=Math.pow(2,r);t.push(h);const d=1/(h-2),p=-d,m=1+d,v=[p,p,m,p,m,m,p,p,m,m,p,m],_=6,g=6,x=3,y=new Float32Array(x*g*_),A=new Float32Array(x*g*_);for(let M=0;M<_;M++){const L=M%3*2/3-1,I=M>2?0:-1,C=[L,I,0,L+2/3,I,0,L+2/3,I+1,0,L,I,0,L+2/3,I+1,0,L,I+1,0];y.set(C,x*g*M);for(let U=0;U<g;U++){const D=v[U*2]*2-1,N=v[U*2+1]*2-1;M===0?os.set(1,N,D):M===1?os.set(-D,1,-N):M===2?os.set(-D,N,1):M===3?os.set(-1,N,-D):M===4?os.set(-D,-1,N):os.set(D,N,-1),os.toArray(A,(M*g+U)*x)}}const b=new Xn;b.setAttribute("position",new si(y,x)),b.setAttribute("outputDirection",new si(A,x)),i.push(new sn(b,null)),r>_o&&r--}return{lodMeshes:i,sizeLods:t}}function rS(o,t,i){const r=new Oi(o,t,i);return r.texture.mapping=hf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function go(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function a3(o,t,i){return new on({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:e3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:df(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function r3(o,t,i){return new on({name:"SphericalGaussianBlur",defines:{SAMPLES:t3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:df(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function sS(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function oS(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function df(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Sy extends Oi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new cy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Yl(5,5,5),u=new on({name:"CubemapFromEquirect",uniforms:Mo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:oi,blending:Zi});u.uniforms.tEquirect.value=i;const h=new sn(l,u),d=i.minFilter;return i.minFilter===Nr&&(i.minFilter=Vn),new uT(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}function s3(o){let t=new WeakMap,i=new WeakMap,r=null;function l(g,x=!1){return g==null?null:x?h(g):u(g)}function u(g){if(g&&g.isTexture){const x=g.mapping;if(x===Kd||x===Zd)if(t.has(g)){const y=t.get(g).texture;return d(y,g.mapping)}else{const y=g.image;if(y&&y.height>0){const A=new Sy(y.height);return A.fromEquirectangularTexture(o,g),t.set(g,A),g.addEventListener("dispose",m),d(A.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const x=g.mapping,y=x===Kd||x===Zd,A=x===fs||x===yo;if(y||A){let b=i.get(g);const M=b!==void 0?b.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==M)return r===null&&(r=new aS(o)),b=y?r.fromEquirectangular(g,b):r.fromCubemap(g,b),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),b.texture;if(b!==void 0)return b.texture;{const L=g.image;return y&&L&&L.height>0||A&&L&&p(L)?(r===null&&(r=new aS(o)),b=y?r.fromEquirectangular(g):r.fromCubemap(g),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),g.addEventListener("dispose",v),b.texture):null}}}return g}function d(g,x){return x===Kd?g.mapping=fs:x===Zd&&(g.mapping=yo),g}function p(g){let x=0;const y=6;for(let A=0;A<y;A++)g[A]!==void 0&&x++;return x===y}function m(g){const x=g.target;x.removeEventListener("dispose",m);const y=t.get(x);y!==void 0&&(t.delete(x),y.dispose())}function v(g){const x=g.target;x.removeEventListener("dispose",v);const y=i.get(x);y!==void 0&&(i.delete(x),y.dispose())}function _(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function o3(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&xo("WebGLRenderer: "+r+" extension not supported."),l}}}function l3(o,t,i,r){const l={},u=new WeakMap;function h(_){const g=_.target;g.index!==null&&t.remove(g.index);for(const y in g.attributes)t.remove(g.attributes[y]);g.removeEventListener("dispose",h),delete l[g.id];const x=u.get(g);x&&(t.remove(x),u.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(_,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function p(_){const g=_.attributes;for(const x in g)t.update(g[x],o.ARRAY_BUFFER)}function m(_){const g=[],x=_.index,y=_.attributes.position;let A=0;if(y===void 0)return;if(x!==null){const L=x.array;A=x.version;for(let I=0,C=L.length;I<C;I+=3){const U=L[I+0],D=L[I+1],N=L[I+2];g.push(U,D,D,N,N,U)}}else{const L=y.array;A=y.version;for(let I=0,C=L.length/3-1;I<C;I+=3){const U=I+0,D=I+1,N=I+2;g.push(U,D,D,N,N,U)}}const b=new(y.count>=65535?oy:sy)(g,1);b.version=A;const M=u.get(_);M&&t.remove(M),u.set(_,b)}function v(_){const g=u.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&m(_)}else m(_);return u.get(_)}return{get:d,update:p,getWireframeAttribute:v}}function u3(o,t,i){let r;function l(_){r=_}let u,h;function d(_){u=_.type,h=_.bytesPerElement}function p(_,g){o.drawElements(r,g,u,_*h),i.update(g,r,1)}function m(_,g,x){x!==0&&(o.drawElementsInstanced(r,g,u,_*h,x),i.update(g,r,x))}function v(_,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,u,_,0,x);let A=0;for(let b=0;b<x;b++)A+=g[b];i.update(A,r,1)}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v}function c3(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:Ge("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function f3(o,t,i){const r=new WeakMap,l=new tn;function u(h,d,p){const m=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(d);if(g===void 0||g.count!==_){let F=function(){E.dispose(),r.delete(d),d.removeEventListener("dispose",F)};var x=F;g!==void 0&&g.texture.dispose();const y=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let C=0;y===!0&&(C=1),A===!0&&(C=2),b===!0&&(C=3);let U=d.attributes.position.count*C,D=1;U>t.maxTextureSize&&(D=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const N=new Float32Array(U*D*4*_),E=new iy(N,U,D,_);E.type=pa,E.needsUpdate=!0;const O=C*4;for(let G=0;G<_;G++){const H=M[G],j=L[G],Z=I[G],Q=U*D*4*G;for(let W=0;W<H.count;W++){const Y=W*O;y===!0&&(l.fromBufferAttribute(H,W),N[Q+Y+0]=l.x,N[Q+Y+1]=l.y,N[Q+Y+2]=l.z,N[Q+Y+3]=0),A===!0&&(l.fromBufferAttribute(j,W),N[Q+Y+4]=l.x,N[Q+Y+5]=l.y,N[Q+Y+6]=l.z,N[Q+Y+7]=0),b===!0&&(l.fromBufferAttribute(Z,W),N[Q+Y+8]=l.x,N[Q+Y+9]=l.y,N[Q+Y+10]=l.z,N[Q+Y+11]=Z.itemSize===4?l.w:1)}}g={count:_,texture:E,size:new re(U,D)},r.set(d,g),d.addEventListener("dispose",F)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let y=0;for(let b=0;b<m.length;b++)y+=m[b];const A=d.morphTargetsRelative?1:1-y;p.getUniforms().setValue(o,"morphTargetBaseInfluence",A),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:u}}function h3(o,t,i,r,l){let u=new WeakMap;function h(m){const v=l.render.frame,_=m.geometry,g=t.get(m,_);if(u.get(g)!==v&&(t.update(g),u.set(g,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==v&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),u.set(m,v))),m.isSkinnedMesh){const x=m.skeleton;u.get(x)!==v&&(x.update(),u.set(x,v))}return g}function d(){u=new WeakMap}function p(m){const v=m.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:d}}const d3={[VS]:"LINEAR_TONE_MAPPING",[kS]:"REINHARD_TONE_MAPPING",[XS]:"CINEON_TONE_MAPPING",[Pm]:"ACES_FILMIC_TONE_MAPPING",[WS]:"AGX_TONE_MAPPING",[YS]:"NEUTRAL_TONE_MAPPING",[qS]:"CUSTOM_TONE_MAPPING"};function p3(o,t,i,r,l,u){const h=new Oi(t,i,{type:o,depthBuffer:l,stencilBuffer:u,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null;const m=new Xn;m.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Sn([0,2,0,0,2,0],2));const v=new jE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new sn(m,v),g=new kl(-1,1,1,-1,0,1);let x=null,y=null,A=!1,b,M=null,L=[],I=!1;this.setSize=function(C,U){h.setSize(C,U),d!==null&&d.setSize(C,U),p!==null&&p.setSize(C,U);for(let D=0;D<L.length;D++){const N=L[D];N.setSize&&N.setSize(C,U)}},this.setEffects=function(C){L=C,I=L.length>0&&L[0].isRenderPass===!0;const U=h.width,D=h.height;L.length>0&&d===null&&(d=new Oi(U,D,{type:_a,depthBuffer:!1,stencilBuffer:!1}),p=new Oi(U,D,{type:_a,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<L.length;N++){const E=L[N];E.setSize&&E.setSize(U,D)}},this.begin=function(C,U){if(A||C.toneMapping===ga&&L.length===0)return!1;if(M=U,U!==null){const D=U.width,N=U.height;(h.width!==D||h.height!==N)&&this.setSize(D,N)}return I===!1&&C.setRenderTarget(h),b=C.toneMapping,C.toneMapping=ga,!0},this.hasRenderPass=function(){return I},this.end=function(C,U){C.toneMapping=b,A=!0;let D=h,N=d;for(let E=0;E<L.length;E++){const O=L[E];O.enabled!==!1&&(O.render(C,N,D,U),O.needsSwap!==!1&&(D=N,N=N===d?p:d))}if(x!==C.outputColorSpace||y!==C.toneMapping){x=C.outputColorSpace,y=C.toneMapping,v.defines={},Be.getTransfer(x)===Qe&&(v.defines.SRGB_TRANSFER="");const E=d3[y];E&&(v.defines[E]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(M),C.render(_,g),M=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){h.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),m.dispose(),v.dispose()}}const yy=new kn,Rm=new Vl(1,1),My=new iy,by=new fE,Ey=new cy,lS=[],uS=[],cS=new Float32Array(16),fS=new Float32Array(9),hS=new Float32Array(4);function Eo(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=lS[l];if(u===void 0&&(u=new Float32Array(l),lS[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function En(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function Tn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function pf(o,t){let i=uS[t];i===void 0&&(i=new Int32Array(t),uS[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function m3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function g3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;o.uniform2fv(this.addr,t),Tn(i,t)}}function v3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(En(i,t))return;o.uniform3fv(this.addr,t),Tn(i,t)}}function _3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;o.uniform4fv(this.addr,t),Tn(i,t)}}function x3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,r))return;hS.set(r),o.uniformMatrix2fv(this.addr,!1,hS),Tn(i,r)}}function S3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,r))return;fS.set(r),o.uniformMatrix3fv(this.addr,!1,fS),Tn(i,r)}}function y3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,r))return;cS.set(r),o.uniformMatrix4fv(this.addr,!1,cS),Tn(i,r)}}function M3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function b3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;o.uniform2iv(this.addr,t),Tn(i,t)}}function E3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;o.uniform3iv(this.addr,t),Tn(i,t)}}function T3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;o.uniform4iv(this.addr,t),Tn(i,t)}}function A3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function w3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;o.uniform2uiv(this.addr,t),Tn(i,t)}}function R3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;o.uniform3uiv(this.addr,t),Tn(i,t)}}function C3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;o.uniform4uiv(this.addr,t),Tn(i,t)}}function D3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Rm.compareFunction=i.isReversedDepthBuffer()?km:Vm,u=Rm):u=yy,i.setTexture2D(t||u,l)}function N3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||by,l)}function U3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Ey,l)}function L3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||My,l)}function O3(o){switch(o){case 5126:return m3;case 35664:return g3;case 35665:return v3;case 35666:return _3;case 35674:return x3;case 35675:return S3;case 35676:return y3;case 5124:case 35670:return M3;case 35667:case 35671:return b3;case 35668:case 35672:return E3;case 35669:case 35673:return T3;case 5125:return A3;case 36294:return w3;case 36295:return R3;case 36296:return C3;case 35678:case 36198:case 36298:case 36306:case 35682:return D3;case 35679:case 36299:case 36307:return N3;case 35680:case 36300:case 36308:case 36293:return U3;case 36289:case 36303:case 36311:case 36292:return L3}}function P3(o,t){o.uniform1fv(this.addr,t)}function z3(o,t){const i=Eo(t,this.size,2);o.uniform2fv(this.addr,i)}function I3(o,t){const i=Eo(t,this.size,3);o.uniform3fv(this.addr,i)}function B3(o,t){const i=Eo(t,this.size,4);o.uniform4fv(this.addr,i)}function F3(o,t){const i=Eo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function H3(o,t){const i=Eo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function G3(o,t){const i=Eo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function V3(o,t){o.uniform1iv(this.addr,t)}function k3(o,t){o.uniform2iv(this.addr,t)}function X3(o,t){o.uniform3iv(this.addr,t)}function q3(o,t){o.uniform4iv(this.addr,t)}function W3(o,t){o.uniform1uiv(this.addr,t)}function Y3(o,t){o.uniform2uiv(this.addr,t)}function K3(o,t){o.uniform3uiv(this.addr,t)}function Z3(o,t){o.uniform4uiv(this.addr,t)}function Q3(o,t,i){const r=this.cache,l=t.length,u=pf(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=Rm:h=yy;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,u[d])}function J3(o,t,i){const r=this.cache,l=t.length,u=pf(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||by,u[h])}function j3(o,t,i){const r=this.cache,l=t.length,u=pf(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Ey,u[h])}function $3(o,t,i){const r=this.cache,l=t.length,u=pf(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||My,u[h])}function tw(o){switch(o){case 5126:return P3;case 35664:return z3;case 35665:return I3;case 35666:return B3;case 35674:return F3;case 35675:return H3;case 35676:return G3;case 5124:case 35670:return V3;case 35667:case 35671:return k3;case 35668:case 35672:return X3;case 35669:case 35673:return q3;case 5125:return W3;case 36294:return Y3;case 36295:return K3;case 36296:return Z3;case 35678:case 36198:case 36298:case 36306:case 35682:return Q3;case 35679:case 36299:case 36307:return J3;case 35680:case 36300:case 36308:case 36293:return j3;case 36289:case 36303:case 36311:case 36292:return $3}}class ew{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=O3(i.type)}}class nw{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=tw(i.type)}}class iw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Np=/(\w+)(\])?(\[|\.)?/g;function dS(o,t){o.seq.push(t),o.map[t.id]=t}function aw(o,t,i){const r=o.name,l=r.length;for(Np.lastIndex=0;;){const u=Np.exec(r),h=Np.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){dS(i,m===void 0?new ew(d,o,t):new nw(d,o,t));break}else{let _=i.map[d];_===void 0&&(_=new iw(d),dS(i,_)),i=_}}}class Qc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=t.getActiveUniform(i,h),p=t.getUniformLocation(i,d.name);aw(d,p,this)}const l=[],u=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function pS(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const rw=37297;let sw=0;function ow(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const mS=new me;function lw(o){Be._getMatrix(mS,Be.workingColorSpace,o);const t=`mat3( ${mS.elements.map(i=>i.toFixed(4))} )`;switch(Be.getTransfer(o)){case sf:return[t,"LinearTransferOETF"];case Qe:return[t,"sRGBTransferOETF"];default:return ue("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function gS(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+ow(o.getShaderSource(t),d)}else return u}function uw(o,t){const i=lw(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const cw={[VS]:"Linear",[kS]:"Reinhard",[XS]:"Cineon",[Pm]:"ACESFilmic",[WS]:"AgX",[YS]:"Neutral",[qS]:"Custom"};function fw(o,t){const i=cw[t];return i===void 0?(ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gc=new k;function hw(){Be.getLuminanceCoefficients(Gc);const o=Gc.x.toFixed(4),t=Gc.y.toFixed(4),i=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nl).join(`
`)}function pw(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function mw(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Nl(o){return o!==""}function vS(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _S(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cm(o){return o.replace(gw,_w)}const vw=new Map;function _w(o,t){let i=be[t];if(i===void 0){const r=vw.get(t);if(r!==void 0)i=be[r],ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Cm(i)}const xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xS(o){return o.replace(xw,Sw)}function Sw(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function SS(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const yw={[qc]:"SHADOWMAP_TYPE_PCF",[Dl]:"SHADOWMAP_TYPE_VSM"};function Mw(o){return yw[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bw={[fs]:"ENVMAP_TYPE_CUBE",[yo]:"ENVMAP_TYPE_CUBE",[hf]:"ENVMAP_TYPE_CUBE_UV"};function Ew(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":bw[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const Tw={[yo]:"ENVMAP_MODE_REFRACTION"};function Aw(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":Tw[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ww={[GS]:"ENVMAP_BLENDING_MULTIPLY",[Vb]:"ENVMAP_BLENDING_MIX",[kb]:"ENVMAP_BLENDING_ADD"};function Rw(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":ww[o.combine]||"ENVMAP_BLENDING_NONE"}function Cw(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Dw(o,t,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=Mw(i),m=Ew(i),v=Aw(i),_=Rw(i),g=Cw(i),x=dw(i),y=pw(u),A=l.createProgram();let b,M,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y].filter(Nl).join(`
`),b.length>0&&(b+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y].filter(Nl).join(`
`),M.length>0&&(M+=`
`)):(b=[SS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nl).join(`
`),M=[SS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ga?"#define TONE_MAPPING":"",i.toneMapping!==ga?be.tonemapping_pars_fragment:"",i.toneMapping!==ga?fw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,uw("linearToOutputTexel",i.outputColorSpace),hw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Nl).join(`
`)),h=Cm(h),h=vS(h,i),h=_S(h,i),d=Cm(d),d=vS(d,i),d=_S(d,i),h=xS(h),d=xS(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,b=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,M=["#define varying in",i.glslVersion===Mx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Mx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const I=L+b+h,C=L+M+d,U=pS(l,l.VERTEX_SHADER,I),D=pS(l,l.FRAGMENT_SHADER,C);l.attachShader(A,U),l.attachShader(A,D),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function N(G){if(o.debug.checkShaderErrors){const H=l.getProgramInfoLog(A)||"",j=l.getShaderInfoLog(U)||"",Z=l.getShaderInfoLog(D)||"",Q=H.trim(),W=j.trim(),Y=Z.trim();let lt=!0,at=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(lt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,U,D);else{const mt=gS(l,U,"vertex"),bt=gS(l,D,"fragment");Ge("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Q+`
`+mt+`
`+bt)}else Q!==""?ue("WebGLProgram: Program Info Log:",Q):(W===""||Y==="")&&(at=!1);at&&(G.diagnostics={runnable:lt,programLog:Q,vertexShader:{log:W,prefix:b},fragmentShader:{log:Y,prefix:M}})}l.deleteShader(U),l.deleteShader(D),E=new Qc(l,A),O=mw(l,A)}let E;this.getUniforms=function(){return E===void 0&&N(this),E};let O;this.getAttributes=function(){return O===void 0&&N(this),O};let F=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=l.getProgramParameter(A,rw)),F},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=sw++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=U,this.fragmentShader=D,this}let Nw=0;class Uw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,r){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new Lw(t),i.set(t,r)),r}}class Lw{constructor(t){this.id=Nw++,this.code=t,this.usedTimes=0}}function Ow(o){return o===hs||o===nf||o===af}function Pw(o,t,i,r,l,u){const h=new ay,d=new Uw,p=new Set,m=[],v=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return p.add(E),E===0?"uv":`uv${E}`}function A(E,O,F,G,H,j){const Z=G.fog,Q=H.geometry,W=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,Y=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,lt=t.get(E.envMap||W,Y),at=lt&&lt.mapping===hf?lt.image.height:null,mt=x[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&ue("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const bt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Kt=bt!==void 0?bt.length:0;let _t=0;Q.morphAttributes.position!==void 0&&(_t=1),Q.morphAttributes.normal!==void 0&&(_t=2),Q.morphAttributes.color!==void 0&&(_t=3);let z,ht,wt,K;if(mt){const ze=da[mt];z=ze.vertexShader,ht=ze.fragmentShader}else{z=E.vertexShader,ht=E.fragmentShader;const ze=d.getVertexShaderStage(E),ge=d.getFragmentShaderStage(E);d.update(E,ze,ge),wt=ze.id,K=ge.id}const ft=o.getRenderTarget(),Et=o.state.buffers.depth.getReversed(),Nt=H.isInstancedMesh===!0,tt=H.isBatchedMesh===!0,Ut=!!E.map,_e=!!E.matcap,oe=!!lt,Tt=!!E.aoMap,Dt=!!E.lightMap,Rt=!!E.bumpMap&&E.wireframe===!1,$t=!!E.normalMap,de=!!E.displacementMap,Me=!!E.emissiveMap,ce=!!E.metalnessMap,we=!!E.roughnessMap,q=E.anisotropy>0,Xe=E.clearcoat>0,xe=E.dispersion>0,P=E.retroreflectivity>0,T=E.iridescence>0,et=E.sheen>0,rt=E.transmission>0,gt=q&&!!E.anisotropyMap,At=Xe&&!!E.clearcoatMap,Lt=Xe&&!!E.clearcoatNormalMap,vt=Xe&&!!E.clearcoatRoughnessMap,xt=T&&!!E.iridescenceMap,Ot=T&&!!E.iridescenceThicknessMap,ne=et&&!!E.sheenColorMap,Bt=et&&!!E.sheenRoughnessMap,zt=!!E.specularMap,Yt=!!E.specularColorMap,se=!!E.specularIntensityMap,pe=rt&&!!E.transmissionMap,J=rt&&!!E.thicknessMap,Pt=!!E.gradientMap,Mt=!!E.alphaMap,Ft=E.alphaTest>0,Wt=!!E.alphaHash,Ct=!!E.extensions;let ie=ga;E.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ie=o.toneMapping);const qt={shaderID:mt,shaderType:E.type,shaderName:E.name,vertexShader:z,fragmentShader:ht,defines:E.defines,customVertexShaderID:wt,customFragmentShaderID:K,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:tt,batchingColor:tt&&H._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&H.instanceColor!==null,instancingMorph:Nt&&H.morphTexture!==null,outputColorSpace:ft===null?o.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Be.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Ut,matcap:_e,envMap:oe,envMapMode:oe&&lt.mapping,envMapCubeUVHeight:at,aoMap:Tt,lightMap:Dt,bumpMap:Rt,normalMap:$t,displacementMap:de,emissiveMap:Me,normalMapObjectSpace:$t&&E.normalMapType===Wb,normalMapTangentSpace:$t&&E.normalMapType===Tm,packedNormalMap:$t&&E.normalMapType===Tm&&Ow(E.normalMap.format),metalnessMap:ce,roughnessMap:we,anisotropy:q,anisotropyMap:gt,clearcoat:Xe,clearcoatMap:At,clearcoatNormalMap:Lt,clearcoatRoughnessMap:vt,dispersion:xe,retroreflection:P,iridescence:T,iridescenceMap:xt,iridescenceThicknessMap:Ot,sheen:et,sheenColorMap:ne,sheenRoughnessMap:Bt,specularMap:zt,specularColorMap:Yt,specularIntensityMap:se,transmission:rt,transmissionMap:pe,thicknessMap:J,gradientMap:Pt,opaque:E.transparent===!1&&E.blending===Ll&&E.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Ft,alphaHash:Wt,combine:E.combine,mapUv:Ut&&y(E.map.channel),aoMapUv:Tt&&y(E.aoMap.channel),lightMapUv:Dt&&y(E.lightMap.channel),bumpMapUv:Rt&&y(E.bumpMap.channel),normalMapUv:$t&&y(E.normalMap.channel),displacementMapUv:de&&y(E.displacementMap.channel),emissiveMapUv:Me&&y(E.emissiveMap.channel),metalnessMapUv:ce&&y(E.metalnessMap.channel),roughnessMapUv:we&&y(E.roughnessMap.channel),anisotropyMapUv:gt&&y(E.anisotropyMap.channel),clearcoatMapUv:At&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&y(E.sheenRoughnessMap.channel),specularMapUv:zt&&y(E.specularMap.channel),specularColorMapUv:Yt&&y(E.specularColorMap.channel),specularIntensityMapUv:se&&y(E.specularIntensityMap.channel),transmissionMapUv:pe&&y(E.transmissionMap.channel),thicknessMapUv:J&&y(E.thicknessMap.channel),alphaMapUv:Mt&&y(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&($t||q),vertexNormals:!!Q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(Ut||Mt),fog:!!Z,useFog:E.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Q.attributes.normal===void 0&&$t===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Et,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Kt,morphTextureStride:_t,numSunLights:O.sun.length,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numSunLightShadows:O.sunShadowMap.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ut&&E.map.isVideoTexture===!0&&Be.getTransfer(E.map.colorSpace)===Qe,decodeVideoTextureEmissive:Me&&E.emissiveMap.isVideoTexture===!0&&Be.getTransfer(E.emissiveMap.colorSpace)===Qe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Li,flipSided:E.side===oi,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ct&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&E.extensions.multiDraw===!0||tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qt.vertexUv1s=p.has(1),qt.vertexUv2s=p.has(2),qt.vertexUv3s=p.has(3),p.clear(),qt}function b(E){const O=[];if(E.shaderID?O.push(E.shaderID):(O.push(E.customVertexShaderID),O.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)O.push(F),O.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(M(O,E),L(O,E),O.push(o.outputColorSpace)),O.push(E.customProgramCacheKey),O.join()}function M(E,O){E.push(O.precision),E.push(O.outputColorSpace),E.push(O.envMapMode),E.push(O.envMapCubeUVHeight),E.push(O.mapUv),E.push(O.alphaMapUv),E.push(O.lightMapUv),E.push(O.aoMapUv),E.push(O.bumpMapUv),E.push(O.normalMapUv),E.push(O.displacementMapUv),E.push(O.emissiveMapUv),E.push(O.metalnessMapUv),E.push(O.roughnessMapUv),E.push(O.anisotropyMapUv),E.push(O.clearcoatMapUv),E.push(O.clearcoatNormalMapUv),E.push(O.clearcoatRoughnessMapUv),E.push(O.iridescenceMapUv),E.push(O.iridescenceThicknessMapUv),E.push(O.sheenColorMapUv),E.push(O.sheenRoughnessMapUv),E.push(O.specularMapUv),E.push(O.specularColorMapUv),E.push(O.specularIntensityMapUv),E.push(O.transmissionMapUv),E.push(O.thicknessMapUv),E.push(O.combine),E.push(O.fogExp2),E.push(O.sizeAttenuation),E.push(O.morphTargetsCount),E.push(O.morphAttributeCount),E.push(O.numSunLights),E.push(O.numDirLights),E.push(O.numPointLights),E.push(O.numSpotLights),E.push(O.numSpotLightMaps),E.push(O.numHemiLights),E.push(O.numRectAreaLights),E.push(O.numSunLightShadows),E.push(O.numDirLightShadows),E.push(O.numPointLightShadows),E.push(O.numSpotLightShadows),E.push(O.numSpotLightShadowsWithMaps),E.push(O.numLightProbes),E.push(O.shadowMapType),E.push(O.toneMapping),E.push(O.numClippingPlanes),E.push(O.numClipIntersection),E.push(O.depthPacking)}function L(E,O){h.disableAll(),O.instancing&&h.enable(0),O.instancingColor&&h.enable(1),O.instancingMorph&&h.enable(2),O.matcap&&h.enable(3),O.envMap&&h.enable(4),O.normalMapObjectSpace&&h.enable(5),O.normalMapTangentSpace&&h.enable(6),O.clearcoat&&h.enable(7),O.iridescence&&h.enable(8),O.alphaTest&&h.enable(9),O.vertexColors&&h.enable(10),O.vertexAlphas&&h.enable(11),O.vertexUv1s&&h.enable(12),O.vertexUv2s&&h.enable(13),O.vertexUv3s&&h.enable(14),O.vertexTangents&&h.enable(15),O.anisotropy&&h.enable(16),O.alphaHash&&h.enable(17),O.batching&&h.enable(18),O.dispersion&&h.enable(19),O.retroreflection&&h.enable(24),O.batchingColor&&h.enable(20),O.gradientMap&&h.enable(21),O.packedNormalMap&&h.enable(22),O.vertexNormals&&h.enable(23),E.push(h.mask),h.disableAll(),O.fog&&h.enable(0),O.useFog&&h.enable(1),O.flatShading&&h.enable(2),O.logarithmicDepthBuffer&&h.enable(3),O.reversedDepthBuffer&&h.enable(4),O.skinning&&h.enable(5),O.morphTargets&&h.enable(6),O.morphNormals&&h.enable(7),O.morphColors&&h.enable(8),O.premultipliedAlpha&&h.enable(9),O.shadowMapEnabled&&h.enable(10),O.doubleSided&&h.enable(11),O.flipSided&&h.enable(12),O.useDepthPacking&&h.enable(13),O.dithering&&h.enable(14),O.transmission&&h.enable(15),O.sheen&&h.enable(16),O.opaque&&h.enable(17),O.pointsUvs&&h.enable(18),O.decodeVideoTexture&&h.enable(19),O.decodeVideoTextureEmissive&&h.enable(20),O.alphaToCoverage&&h.enable(21),O.numLightProbeGrids>0&&h.enable(22),O.hasPositionAttribute&&h.enable(23),E.push(h.mask)}function I(E){const O=x[E.type];let F;if(O){const G=da[O];F=ZE.clone(G.uniforms)}else F=E.uniforms;return F}function C(E,O){let F=v.get(O);return F!==void 0?++F.usedTimes:(F=new Dw(o,O,E,l),m.push(F),v.set(O,F)),F}function U(E){if(--E.usedTimes===0){const O=m.indexOf(E);m[O]=m[m.length-1],m.pop(),v.delete(E.cacheKey),E.destroy()}}function D(E){d.remove(E)}function N(){d.dispose()}return{getParameters:A,getProgramCacheKey:b,getUniforms:I,acquireProgram:C,releaseProgram:U,releaseShaderCache:D,programs:m,dispose:N}}function zw(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function Iw(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function yS(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function MS(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function d(g,x,y,A,b,M){let L=o[t];return L===void 0?(L={id:g.id,object:g,geometry:x,material:y,materialVariant:h(g),groupOrder:A,renderOrder:g.renderOrder,z:b,group:M},o[t]=L):(L.id=g.id,L.object=g,L.geometry=x,L.material=y,L.materialVariant=h(g),L.groupOrder=A,L.renderOrder=g.renderOrder,L.z=b,L.group=M),t++,L}function p(g,x,y,A,b,M,L){L.reversedDepth===!0&&(b=-b);const I=d(g,x,y,A,b,M);y.transmission>0?r.push(I):y.transparent===!0?l.push(I):i.push(I)}function m(g,x,y,A,b,M){const L=d(g,x,y,A,b,M);y.transmission>0?r.unshift(L):y.transparent===!0?l.unshift(L):i.unshift(L)}function v(g,x){i.length>1&&i.sort(g||Iw),r.length>1&&r.sort(x||yS),l.length>1&&l.sort(x||yS)}function _(){for(let g=t,x=o.length;g<x;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:p,unshift:m,finish:_,sort:v}}function Bw(){let o=new WeakMap;function t(r,l){const u=o.get(r);let h;return u===void 0?(h=new MS,o.set(r,[h])):l>=u.length?(h=new MS,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Fw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new k,color:new Pe};break;case"SpotLight":i={position:new k,direction:new k,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":i={color:new Pe,position:new k,halfWidth:new k,halfHeight:new k};break}return o[t.id]=i,i}}}function Hw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Gw=0;function Vw(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function kw(o){const t=new Fw,i=Hw(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new k);const l=new k,u=new rn,h=new rn;function d(m){let v=0,_=0,g=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let x=0,y=0,A=0,b=0,M=0,L=0,I=0,C=0,U=0,D=0,N=0,E=0,O=0,F=0;m.sort(Vw);for(let H=0,j=m.length;H<j;H++){const Z=m[H],Q=Z.color,W=Z.intensity,Y=Z.distance;let lt=null;if(Z.shadow&&Z.shadow.map&&(Z.shadow.map.texture.format===hs?lt=Z.shadow.map.texture:lt=Z.shadow.map.depthTexture||Z.shadow.map.texture),Z.isAmbientLight)v+=Q.r*W,_+=Q.g*W,g+=Q.b*W;else if(Z.isLightProbe){for(let at=0;at<9;at++)r.probe[at].addScaledVector(Z.sh.coefficients[at],W);F++}else if(Z.isSunLight){const at=t.get(Z);if(at.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){const mt=Z.shadow,bt=i.get(Z);bt.shadowIntensity=mt.intensity,bt.shadowBias=mt.bias,bt.shadowNormalBias=mt.normalBias,bt.shadowRadius=mt.radius,bt.shadowMapSize.copy(mt.mapSize).multiply(mt.getFrameExtents()),r.sunShadow[y]=bt,r.sunShadowMap[y]=lt;const Kt=mt.getViewportCount();for(let _t=0;_t<Kt;_t++)r.sunShadowMatrix[A+_t]=mt.getMatrix(_t),r.sunShadowCascade[A+_t]=mt._cascadeData[_t];A+=Kt,y++}r.sun[x]=at,x++}else if(Z.isDirectionalLight){const at=t.get(Z);if(at.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){const mt=Z.shadow,bt=i.get(Z);bt.shadowIntensity=mt.intensity,bt.shadowBias=mt.bias,bt.shadowNormalBias=mt.normalBias,bt.shadowRadius=mt.radius,bt.shadowMapSize=mt.mapSize,r.directionalShadow[b]=bt,r.directionalShadowMap[b]=lt,r.directionalShadowMatrix[b]=Z.shadow.matrix,U++}r.directional[b]=at,b++}else if(Z.isSpotLight){const at=t.get(Z);at.position.setFromMatrixPosition(Z.matrixWorld),at.color.copy(Q).multiplyScalar(W),at.distance=Y,at.coneCos=Math.cos(Z.angle),at.penumbraCos=Math.cos(Z.angle*(1-Z.penumbra)),at.decay=Z.decay,r.spot[L]=at;const mt=Z.shadow;if(Z.map&&(r.spotLightMap[E]=Z.map,E++,mt.updateMatrices(Z),Z.castShadow&&O++),r.spotLightMatrix[L]=mt.matrix,Z.castShadow){const bt=i.get(Z);bt.shadowIntensity=mt.intensity,bt.shadowBias=mt.bias,bt.shadowNormalBias=mt.normalBias,bt.shadowRadius=mt.radius,bt.shadowMapSize=mt.mapSize,r.spotShadow[L]=bt,r.spotShadowMap[L]=lt,N++}L++}else if(Z.isRectAreaLight){const at=t.get(Z);at.color.copy(Q).multiplyScalar(W),at.halfWidth.set(Z.width*.5,0,0),at.halfHeight.set(0,Z.height*.5,0),r.rectArea[I]=at,I++}else if(Z.isPointLight){const at=t.get(Z);if(at.color.copy(Z.color).multiplyScalar(Z.intensity),at.distance=Z.distance,at.decay=Z.decay,Z.castShadow){const mt=Z.shadow,bt=i.get(Z);bt.shadowIntensity=mt.intensity,bt.shadowBias=mt.bias,bt.shadowNormalBias=mt.normalBias,bt.shadowRadius=mt.radius,bt.shadowMapSize=mt.mapSize,bt.shadowCameraNear=mt.camera.near,bt.shadowCameraFar=mt.camera.far,r.pointShadow[M]=bt,r.pointShadowMap[M]=lt,r.pointShadowMatrix[M]=Z.shadow.matrix,D++}r.point[M]=at,M++}else if(Z.isHemisphereLight){const at=t.get(Z);at.skyColor.copy(Z.color).multiplyScalar(W),at.groundColor.copy(Z.groundColor).multiplyScalar(W),r.hemi[C]=at,C++}}I>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Xt.LTC_FLOAT_1,r.rectAreaLTC2=Xt.LTC_FLOAT_2):(r.rectAreaLTC1=Xt.LTC_HALF_1,r.rectAreaLTC2=Xt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const G=r.hash;(G.sunLength!==x||G.directionalLength!==b||G.pointLength!==M||G.spotLength!==L||G.rectAreaLength!==I||G.hemiLength!==C||G.numSunShadows!==y||G.numDirectionalShadows!==U||G.numPointShadows!==D||G.numSpotShadows!==N||G.numSpotMaps!==E||G.numLightProbes!==F)&&(r.sun.length=x,r.directional.length=b,r.spot.length=L,r.rectArea.length=I,r.point.length=M,r.hemi.length=C,r.sunShadow.length=y,r.sunShadowMap.length=y,r.sunShadowMatrix.length=A,r.sunShadowCascade.length=A,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.directionalShadowMatrix.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.pointShadowMatrix.length=D,r.spotShadow.length=N,r.spotShadowMap.length=N,r.spotLightMatrix.length=N+E-O,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=F,G.sunLength=x,G.directionalLength=b,G.pointLength=M,G.spotLength=L,G.rectAreaLength=I,G.hemiLength=C,G.numSunShadows=y,G.numDirectionalShadows=U,G.numPointShadows=D,G.numSpotShadows=N,G.numSpotMaps=E,G.numLightProbes=F,r.version=Gw++)}function p(m,v){let _=0,g=0,x=0,y=0,A=0,b=0;const M=v.matrixWorldInverse;for(let L=0,I=m.length;L<I;L++){const C=m[L];if(C.isSunLight){const U=r.sun[_];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(M),_++}else if(C.isDirectionalLight){const U=r.directional[g];U.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),g++}else if(C.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(C.isRectAreaLight){const U=r.rectArea[A];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(M),h.identity(),u.copy(C.matrixWorld),u.premultiply(M),h.extractRotation(u),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),A++}else if(C.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(M),x++}else if(C.isHemisphereLight){const U=r.hemi[b];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(M),b++}}}return{setup:d,setupView:p,state:r}}function bS(o){const t=new kw(o),i=[],r=[],l=[];function u(g){_.camera=g,i.length=0,r.length=0,l.length=0}function h(g){i.push(g)}function d(g){r.push(g)}function p(g){l.push(g)}function m(){t.setup(i)}function v(g){t.setupView(i,g)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:_,setupLights:m,setupLightsView:v,pushLight:h,pushShadow:d,pushLightProbeGrid:p}}function Xw(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new bS(o),t.set(l,[d])):u>=h.length?(d=new bS(o),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const qw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ww=`uniform sampler2D shadow_pass;
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
}`,Yw=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Kw=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],ES=new rn,Rl=new k,Up=new k;function Zw(o,t,i){let r=new Wm;const l=new re,u=new re,h=new tn,d=new $E,p=new tT,m={},v=i.maxTextureSize,_={[cs]:oi,[oi]:cs,[Li]:Li},g=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:qw,fragmentShader:Ww}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const y=new Xn;y.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new sn(y,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let M=this.type;this.render=function(D,N,E){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||D.length===0)return;this.type===Tb&&(ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qc);const O=o.getRenderTarget(),F=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),H=o.state;H.setBlending(Zi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const j=M!==this.type;j&&N.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(Q=>Q.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,Q=D.length;Z<Q;Z++){const W=D[Z],Y=W.shadow;if(Y===void 0){ue("WebGLShadowMap:",W,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const lt=Y.getFrameExtents();l.multiply(lt),u.copy(Y.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/lt.x),l.x=u.x*lt.x,Y.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/lt.y),l.y=u.y*lt.y,Y.mapSize.y=u.y));const at=o.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=at,Y.map===null||j===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Dl){if(W.isPointLight){ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Oi(l.x,l.y,{format:hs,type:_a,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),Y.map.texture.name=W.name+".shadowMap",Y.map.depthTexture=new Vl(l.x,l.y,pa),Y.map.depthTexture.name=W.name+".shadowMapDepth",Y.map.depthTexture.format=ka,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=In,Y.map.depthTexture.magFilter=In}else W.isPointLight?(Y.map=new Sy(l.x),Y.map.depthTexture=new UE(l.x,va)):(Y.map=new Oi(l.x,l.y),Y.map.depthTexture=new Vl(l.x,l.y,va)),Y.map.depthTexture.name=W.name+".shadowMap",Y.map.depthTexture.format=ka,this.type===qc?(Y.map.depthTexture.compareFunction=at?km:Vm,Y.map.depthTexture.minFilter=Vn,Y.map.depthTexture.magFilter=Vn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=In,Y.map.depthTexture.magFilter=In);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==l.x||Y.map.height!==l.y)&&Y.map.setSize(l.x,l.y);const mt=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();W.isPointLight!==!0&&Y.updateMatrices(W,E);for(let bt=0;bt<mt;bt++){const Kt=Y.getCamera(bt);if(W.isPointLight){const _t=Y.camera,z=Y.matrix,ht=W.distance||_t.far;ht!==_t.far&&(_t.far=ht,_t.updateProjectionMatrix()),Rl.setFromMatrixPosition(W.matrixWorld),_t.position.copy(Rl),Up.copy(_t.position),Up.add(Yw[bt]),_t.up.copy(Kw[bt]),_t.lookAt(Up),_t.updateMatrixWorld(),z.makeTranslation(-Rl.x,-Rl.y,-Rl.z),ES.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(ES,_t.coordinateSystem,_t.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)o.setRenderTarget(Y.map,bt),o.clear();else{bt===0&&(o.setRenderTarget(Y.map),o.clear());const _t=Y.getViewport(bt);h.set(u.x*_t.x,u.y*_t.y,u.x*_t.z,u.y*_t.w),H.viewport(h)}r=Y.getFrustum(bt),C(N,E,Kt,W,this.type)}Y.isPointLightShadow!==!0&&this.type===Dl&&L(Y,E),Y.needsUpdate=!1}M=this.type,b.needsUpdate=!1,o.setRenderTarget(O,F,G)};function L(D,N){const E=t.update(A);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null?D.mapPass=new Oi(l.x,l.y,{format:hs,type:_a}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value.set(D.map.width,D.map.height),g.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(N,null,E,g,A,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value.set(D.map.width,D.map.height),x.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(N,null,E,x,A,null)}function I(D,N,E,O){let F=null;const G=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(G!==void 0)F=G;else if(F=E.isPointLight===!0?p:d,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const H=F.uuid,j=N.uuid;let Z=m[H];Z===void 0&&(Z={},m[H]=Z);let Q=Z[j];Q===void 0&&(Q=F.clone(),Z[j]=Q,N.addEventListener("dispose",U)),F=Q}if(F.visible=N.visible,F.wireframe=N.wireframe,O===Dl?F.side=N.shadowSide!==null?N.shadowSide:N.side:F.side=N.shadowSide!==null?N.shadowSide:_[N.side],F.alphaMap=N.alphaMap,F.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,F.map=N.map,F.clipShadows=N.clipShadows,F.clippingPlanes=N.clippingPlanes,F.clipIntersection=N.clipIntersection,F.displacementMap=N.displacementMap,F.displacementScale=N.displacementScale,F.displacementBias=N.displacementBias,F.wireframeLinewidth=N.wireframeLinewidth,F.linewidth=N.linewidth,E.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const H=o.properties.get(F);H.light=E}return F}function C(D,N,E,O,F){if(D.visible===!1)return;if(D.layers.test(N.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&F===Dl)&&(!D.frustumCulled||D.intersectsFrustum(r))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const j=t.update(D),Z=D.material;if(Array.isArray(Z)){const Q=j.groups;for(let W=0,Y=Q.length;W<Y;W++){const lt=Q[W],at=Z[lt.materialIndex];if(at&&at.visible){const mt=I(D,at,O,F);D.onBeforeShadow(o,D,N,E,j,mt,lt),o.renderBufferDirect(E,null,j,mt,D,lt),D.onAfterShadow(o,D,N,E,j,mt,lt)}}}else if(Z.visible){const Q=I(D,Z,O,F);D.onBeforeShadow(o,D,N,E,j,Q,null),o.renderBufferDirect(E,null,j,Q,D,null),D.onAfterShadow(o,D,N,E,j,Q,null)}}const H=D.children;for(let j=0,Z=H.length;j<Z;j++)C(H[j],N,E,O,F)}function U(D){D.target.removeEventListener("dispose",U);for(const E in m){const O=m[E],F=D.target.uuid;F in O&&(O[F].dispose(),delete O[F])}}}function Qw(o,t){function i(){let J=!1;const Pt=new tn;let Mt=null;const Ft=new tn(0,0,0,0);return{setMask:function(Wt){Mt!==Wt&&!J&&(o.colorMask(Wt,Wt,Wt,Wt),Mt=Wt)},setLocked:function(Wt){J=Wt},setClear:function(Wt,Ct,ie,qt,ze){ze===!0&&(Wt*=qt,Ct*=qt,ie*=qt),Pt.set(Wt,Ct,ie,qt),Ft.equals(Pt)===!1&&(o.clearColor(Wt,Ct,ie,qt),Ft.copy(Pt))},reset:function(){J=!1,Mt=null,Ft.set(-1,0,0,0)}}}function r(){let J=!1,Pt=!1,Mt=null,Ft=null,Wt=null;return{setReversed:function(Ct){if(Pt!==Ct){const ie=t.get("EXT_clip_control");Ct?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),Pt=Ct;const qt=Wt;Wt=null,this.setClear(qt)}},getReversed:function(){return Pt},setTest:function(Ct){Ct?ft(o.DEPTH_TEST):Et(o.DEPTH_TEST)},setMask:function(Ct){Mt!==Ct&&!J&&(o.depthMask(Ct),Mt=Ct)},setFunc:function(Ct){if(Pt&&(Ct=aE[Ct]),Ft!==Ct){switch(Ct){case Hp:o.depthFunc(o.NEVER);break;case Gp:o.depthFunc(o.ALWAYS);break;case Vp:o.depthFunc(o.LESS);break;case Il:o.depthFunc(o.LEQUAL);break;case kp:o.depthFunc(o.EQUAL);break;case Xp:o.depthFunc(o.GEQUAL);break;case qp:o.depthFunc(o.GREATER);break;case Wp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ft=Ct}},setLocked:function(Ct){J=Ct},setClear:function(Ct){Wt!==Ct&&(Wt=Ct,Pt&&(Ct=1-Ct),o.clearDepth(Ct))},reset:function(){J=!1,Mt=null,Ft=null,Wt=null,Pt=!1}}}function l(){let J=!1,Pt=null,Mt=null,Ft=null,Wt=null,Ct=null,ie=null,qt=null,ze=null;return{setTest:function(ge){J||(ge?ft(o.STENCIL_TEST):Et(o.STENCIL_TEST))},setMask:function(ge){Pt!==ge&&!J&&(o.stencilMask(ge),Pt=ge)},setFunc:function(ge,li,yi){(Mt!==ge||Ft!==li||Wt!==yi)&&(o.stencilFunc(ge,li,yi),Mt=ge,Ft=li,Wt=yi)},setOp:function(ge,li,yi){(Ct!==ge||ie!==li||qt!==yi)&&(o.stencilOp(ge,li,yi),Ct=ge,ie=li,qt=yi)},setLocked:function(ge){J=ge},setClear:function(ge){ze!==ge&&(o.clearStencil(ge),ze=ge)},reset:function(){J=!1,Pt=null,Mt=null,Ft=null,Wt=null,Ct=null,ie=null,qt=null,ze=null}}}const u=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let v={},_={},g={},x=new WeakMap,y=[],A=null,b=!1,M=null,L=null,I=null,C=null,U=null,D=null,N=null,E=new Pe(0,0,0),O=0,F=!1,G=null,H=null,j=null,Z=null,Q=null;const W=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,lt=0;const at=o.getParameter(o.VERSION);at.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(at)[1]),Y=lt>=1):at.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),Y=lt>=2);let mt=null,bt={};const Kt=o.getParameter(o.SCISSOR_BOX),_t=o.getParameter(o.VIEWPORT),z=new tn().fromArray(Kt),ht=new tn().fromArray(_t);function wt(J,Pt,Mt,Ft){const Wt=new Uint8Array(4),Ct=o.createTexture();o.bindTexture(J,Ct),o.texParameteri(J,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(J,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ie=0;ie<Mt;ie++)J===o.TEXTURE_3D||J===o.TEXTURE_2D_ARRAY?o.texImage3D(Pt,0,o.RGBA,1,1,Ft,0,o.RGBA,o.UNSIGNED_BYTE,Wt):o.texImage2D(Pt+ie,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Wt);return Ct}const K={};K[o.TEXTURE_2D]=wt(o.TEXTURE_2D,o.TEXTURE_2D,1),K[o.TEXTURE_CUBE_MAP]=wt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[o.TEXTURE_2D_ARRAY]=wt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),K[o.TEXTURE_3D]=wt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ft(o.DEPTH_TEST),h.setFunc(Il),Rt(!1),$t(_x),ft(o.CULL_FACE),Tt(Zi);function ft(J){v[J]!==!0&&(o.enable(J),v[J]=!0)}function Et(J){v[J]!==!1&&(o.disable(J),v[J]=!1)}function Nt(J,Pt){return g[J]!==Pt?(o.bindFramebuffer(J,Pt),g[J]=Pt,J===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Pt),J===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Pt),!0):!1}function tt(J,Pt){let Mt=y,Ft=!1;if(J){Mt=x.get(Pt),Mt===void 0&&(Mt=[],x.set(Pt,Mt));const Wt=J.textures;if(Mt.length!==Wt.length||Mt[0]!==o.COLOR_ATTACHMENT0){for(let Ct=0,ie=Wt.length;Ct<ie;Ct++)Mt[Ct]=o.COLOR_ATTACHMENT0+Ct;Mt.length=Wt.length,Ft=!0}}else Mt[0]!==o.BACK&&(Mt[0]=o.BACK,Ft=!0);Ft&&o.drawBuffers(Mt)}function Ut(J){return A!==J?(o.useProgram(J),A=J,!0):!1}const _e={[ls]:o.FUNC_ADD,[Ab]:o.FUNC_SUBTRACT,[wb]:o.FUNC_REVERSE_SUBTRACT};_e[Rb]=o.MIN,_e[Cb]=o.MAX;const oe={[Db]:o.ZERO,[Fp]:o.ONE,[Nb]:o.SRC_COLOR,[HS]:o.SRC_ALPHA,[Ib]:o.SRC_ALPHA_SATURATE,[Pb]:o.DST_COLOR,[Lb]:o.DST_ALPHA,[Ub]:o.ONE_MINUS_SRC_COLOR,[ef]:o.ONE_MINUS_SRC_ALPHA,[zb]:o.ONE_MINUS_DST_COLOR,[Ob]:o.ONE_MINUS_DST_ALPHA,[Bb]:o.CONSTANT_COLOR,[Fb]:o.ONE_MINUS_CONSTANT_COLOR,[Hb]:o.CONSTANT_ALPHA,[Gb]:o.ONE_MINUS_CONSTANT_ALPHA};function Tt(J,Pt,Mt,Ft,Wt,Ct,ie,qt,ze,ge){if(J===Zi){b===!0&&(Et(o.BLEND),b=!1);return}if(b===!1&&(ft(o.BLEND),b=!0),J!==FS){if(J!==M||ge!==F){if((L!==ls||U!==ls)&&(o.blendEquation(o.FUNC_ADD),L=ls,U=ls),ge)switch(J){case Ll:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case xx:o.blendFunc(o.ONE,o.ONE);break;case Sx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case yx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ge("WebGLState: Invalid blending: ",J);break}else switch(J){case Ll:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case xx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Sx:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yx:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",J);break}I=null,C=null,D=null,N=null,E.set(0,0,0),O=0,M=J,F=ge}return}Wt=Wt||Pt,Ct=Ct||Mt,ie=ie||Ft,(Pt!==L||Wt!==U)&&(o.blendEquationSeparate(_e[Pt],_e[Wt]),L=Pt,U=Wt),(Mt!==I||Ft!==C||Ct!==D||ie!==N)&&(o.blendFuncSeparate(oe[Mt],oe[Ft],oe[Ct],oe[ie]),I=Mt,C=Ft,D=Ct,N=ie),(qt.equals(E)===!1||ze!==O)&&(o.blendColor(qt.r,qt.g,qt.b,ze),E.copy(qt),O=ze),M=J,F=!1}function Dt(J,Pt){J.side===Li?Et(o.CULL_FACE):ft(o.CULL_FACE);let Mt=J.side===oi;Pt&&(Mt=!Mt),Rt(Mt),J.blending===Ll&&J.transparent===!1?Tt(Zi):Tt(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),h.setFunc(J.depthFunc),h.setTest(J.depthTest),h.setMask(J.depthWrite),u.setMask(J.colorWrite);const Ft=J.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(J.stencilWriteMask),d.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),d.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Me(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?ft(o.SAMPLE_ALPHA_TO_COVERAGE):Et(o.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(J){G!==J&&(J?o.frontFace(o.CW):o.frontFace(o.CCW),G=J)}function $t(J){J!==bb?(ft(o.CULL_FACE),J!==H&&(J===_x?o.cullFace(o.BACK):J===Eb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Et(o.CULL_FACE),H=J}function de(J){J!==j&&(Y&&o.lineWidth(J),j=J)}function Me(J,Pt,Mt){J?(ft(o.POLYGON_OFFSET_FILL),(Z!==Pt||Q!==Mt)&&(Z=Pt,Q=Mt,h.getReversed()&&(Pt=-Pt),o.polygonOffset(Pt,Mt))):Et(o.POLYGON_OFFSET_FILL)}function ce(J){J?ft(o.SCISSOR_TEST):Et(o.SCISSOR_TEST)}function we(J){J===void 0&&(J=o.TEXTURE0+W-1),mt!==J&&(o.activeTexture(J),mt=J)}function q(J,Pt,Mt){Mt===void 0&&(mt===null?Mt=o.TEXTURE0+W-1:Mt=mt);let Ft=bt[Mt];Ft===void 0&&(Ft={type:void 0,texture:void 0},bt[Mt]=Ft),(Ft.type!==J||Ft.texture!==Pt)&&(mt!==Mt&&(o.activeTexture(Mt),mt=Mt),o.bindTexture(J,Pt||K[J]),Ft.type=J,Ft.texture=Pt)}function Xe(){const J=bt[mt];J!==void 0&&J.type!==void 0&&(o.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function xe(){try{o.compressedTexImage2D(...arguments)}catch(J){Ge("WebGLState:",J)}}function P(){try{o.compressedTexImage3D(...arguments)}catch(J){Ge("WebGLState:",J)}}function T(){try{o.texSubImage2D(...arguments)}catch(J){Ge("WebGLState:",J)}}function et(){try{o.texSubImage3D(...arguments)}catch(J){Ge("WebGLState:",J)}}function rt(){try{o.compressedTexSubImage2D(...arguments)}catch(J){Ge("WebGLState:",J)}}function gt(){try{o.compressedTexSubImage3D(...arguments)}catch(J){Ge("WebGLState:",J)}}function At(){try{o.texStorage2D(...arguments)}catch(J){Ge("WebGLState:",J)}}function Lt(){try{o.texStorage3D(...arguments)}catch(J){Ge("WebGLState:",J)}}function vt(){try{o.texImage2D(...arguments)}catch(J){Ge("WebGLState:",J)}}function xt(){try{o.texImage3D(...arguments)}catch(J){Ge("WebGLState:",J)}}function Ot(J){return _[J]!==void 0?_[J]:o.getParameter(J)}function ne(J,Pt){_[J]!==Pt&&(o.pixelStorei(J,Pt),_[J]=Pt)}function Bt(J){z.equals(J)===!1&&(o.scissor(J.x,J.y,J.z,J.w),z.copy(J))}function zt(J){ht.equals(J)===!1&&(o.viewport(J.x,J.y,J.z,J.w),ht.copy(J))}function Yt(J,Pt){let Mt=m.get(Pt);Mt===void 0&&(Mt=new WeakMap,m.set(Pt,Mt));let Ft=Mt.get(J);Ft===void 0&&(Ft=o.getUniformBlockIndex(Pt,J.name),Mt.set(J,Ft))}function se(J,Pt){const Ft=m.get(Pt).get(J);p.get(Pt)!==Ft&&(o.uniformBlockBinding(Pt,Ft,J.__bindingPointIndex),p.set(Pt,Ft))}function pe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),v={},_={},mt=null,bt={},g={},x=new WeakMap,y=[],A=null,b=!1,M=null,L=null,I=null,C=null,U=null,D=null,N=null,E=new Pe(0,0,0),O=0,F=!1,G=null,H=null,j=null,Z=null,Q=null,z.set(0,0,o.canvas.width,o.canvas.height),ht.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ft,disable:Et,bindFramebuffer:Nt,drawBuffers:tt,useProgram:Ut,setBlending:Tt,setMaterial:Dt,setFlipSided:Rt,setCullFace:$t,setLineWidth:de,setPolygonOffset:Me,setScissorTest:ce,activeTexture:we,bindTexture:q,unbindTexture:Xe,compressedTexImage2D:xe,compressedTexImage3D:P,texImage2D:vt,texImage3D:xt,pixelStorei:ne,getParameter:Ot,updateUBOMapping:Yt,uniformBlockBinding:se,texStorage2D:At,texStorage3D:Lt,texSubImage2D:T,texSubImage3D:et,compressedTexSubImage2D:rt,compressedTexSubImage3D:gt,scissor:Bt,viewport:zt,reset:pe}}function Jw(o,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new re,v=new WeakMap,_=new Set;let g;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(P,T){return y?new OffscreenCanvas(P,T):Gl("canvas")}function b(P,T,et){let rt=1;const gt=xe(P);if((gt.width>et||gt.height>et)&&(rt=et/Math.max(gt.width,gt.height)),rt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const At=Math.floor(rt*gt.width),Lt=Math.floor(rt*gt.height);g===void 0&&(g=A(At,Lt));const vt=T?A(At,Lt):g;return vt.width=At,vt.height=Lt,vt.getContext("2d").drawImage(P,0,0,At,Lt),ue("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+At+"x"+Lt+")."),vt}else return"data"in P&&ue("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),P;return P}function M(P){return P.generateMipmaps}function L(P){o.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(P,T,et,rt,gt,At=!1){if(P!==null){if(o[P]!==void 0)return o[P];ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Lt;rt&&(Lt=t.get("EXT_texture_norm16"),Lt||ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let vt=T;if(T===o.RED&&(et===o.FLOAT&&(vt=o.R32F),et===o.HALF_FLOAT&&(vt=o.R16F),et===o.UNSIGNED_BYTE&&(vt=o.R8),et===o.UNSIGNED_SHORT&&Lt&&(vt=Lt.R16_EXT),et===o.SHORT&&Lt&&(vt=Lt.R16_SNORM_EXT)),T===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(vt=o.R8UI),et===o.UNSIGNED_SHORT&&(vt=o.R16UI),et===o.UNSIGNED_INT&&(vt=o.R32UI),et===o.BYTE&&(vt=o.R8I),et===o.SHORT&&(vt=o.R16I),et===o.INT&&(vt=o.R32I)),T===o.RG&&(et===o.FLOAT&&(vt=o.RG32F),et===o.HALF_FLOAT&&(vt=o.RG16F),et===o.UNSIGNED_BYTE&&(vt=o.RG8),et===o.UNSIGNED_SHORT&&Lt&&(vt=Lt.RG16_EXT),et===o.SHORT&&Lt&&(vt=Lt.RG16_SNORM_EXT)),T===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(vt=o.RG8UI),et===o.UNSIGNED_SHORT&&(vt=o.RG16UI),et===o.UNSIGNED_INT&&(vt=o.RG32UI),et===o.BYTE&&(vt=o.RG8I),et===o.SHORT&&(vt=o.RG16I),et===o.INT&&(vt=o.RG32I)),T===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(vt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(vt=o.RGB16UI),et===o.UNSIGNED_INT&&(vt=o.RGB32UI),et===o.BYTE&&(vt=o.RGB8I),et===o.SHORT&&(vt=o.RGB16I),et===o.INT&&(vt=o.RGB32I)),T===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(vt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(vt=o.RGBA16UI),et===o.UNSIGNED_INT&&(vt=o.RGBA32UI),et===o.BYTE&&(vt=o.RGBA8I),et===o.SHORT&&(vt=o.RGBA16I),et===o.INT&&(vt=o.RGBA32I)),T===o.RGB&&(et===o.UNSIGNED_SHORT&&Lt&&(vt=Lt.RGB16_EXT),et===o.SHORT&&Lt&&(vt=Lt.RGB16_SNORM_EXT),et===o.UNSIGNED_INT_5_9_9_9_REV&&(vt=o.RGB9_E5),et===o.UNSIGNED_INT_10F_11F_11F_REV&&(vt=o.R11F_G11F_B10F)),T===o.RGBA){const xt=At?sf:Be.getTransfer(gt);et===o.FLOAT&&(vt=o.RGBA32F),et===o.HALF_FLOAT&&(vt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(vt=xt===Qe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT&&Lt&&(vt=Lt.RGBA16_EXT),et===o.SHORT&&Lt&&(vt=Lt.RGBA16_SNORM_EXT),et===o.UNSIGNED_SHORT_4_4_4_4&&(vt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(vt=o.RGB5_A1)}return(vt===o.R16F||vt===o.R32F||vt===o.RG16F||vt===o.RG32F||vt===o.RGBA16F||vt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function U(P,T){let et;return P?T===null||T===va||T===Fl?et=o.DEPTH24_STENCIL8:T===pa?et=o.DEPTH32F_STENCIL8:T===Bl&&(et=o.DEPTH24_STENCIL8,ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===va||T===Fl?et=o.DEPTH_COMPONENT24:T===pa?et=o.DEPTH_COMPONENT32F:T===Bl&&(et=o.DEPTH_COMPONENT16),et}function D(P,T){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==In&&P.minFilter!==Vn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function N(P){const T=P.target;T.removeEventListener("dispose",N),O(T),T.isVideoTexture&&v.delete(T),T.isHTMLTexture&&_.delete(T)}function E(P){const T=P.target;T.removeEventListener("dispose",E),G(T)}function O(P){const T=r.get(P);if(T.__webglInit===void 0)return;const et=P.source,rt=x.get(et);if(rt){const gt=rt[T.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&F(P),Object.keys(rt).length===0&&x.delete(et)}r.remove(P)}function F(P){const T=r.get(P);o.deleteTexture(T.__webglTexture);const et=P.source,rt=x.get(et);delete rt[T.__cacheKey],h.memory.textures--}function G(P){const T=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(T.__webglFramebuffer[rt]))for(let gt=0;gt<T.__webglFramebuffer[rt].length;gt++)o.deleteFramebuffer(T.__webglFramebuffer[rt][gt]);else o.deleteFramebuffer(T.__webglFramebuffer[rt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[rt])}else{if(Array.isArray(T.__webglFramebuffer))for(let rt=0;rt<T.__webglFramebuffer.length;rt++)o.deleteFramebuffer(T.__webglFramebuffer[rt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let rt=0;rt<T.__webglColorRenderbuffer.length;rt++)T.__webglColorRenderbuffer[rt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[rt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=P.textures;for(let rt=0,gt=et.length;rt<gt;rt++){const At=r.get(et[rt]);At.__webglTexture&&(o.deleteTexture(At.__webglTexture),h.memory.textures--),r.remove(et[rt])}r.remove(P)}let H=0;function j(){H=0}function Z(){return H}function Q(P){H=P}function W(){const P=H;return P>=l.maxTextures&&ue("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+l.maxTextures),H+=1,P}function Y(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function lt(P,T){const et=r.get(P);if(P.isVideoTexture&&q(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&et.__version!==P.version){const rt=P.image;if(rt===null)ue("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(et,P,T);return}}else P.isExternalTexture&&(et.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+T)}function at(P,T){const et=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){Et(et,P,T);return}else P.isExternalTexture&&(et.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+T)}function mt(P,T){const et=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&et.__version!==P.version){Et(et,P,T);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+T)}function bt(P,T){const et=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&et.__version!==P.version){Nt(et,P,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+T)}const Kt={[Yp]:o.REPEAT,[Ga]:o.CLAMP_TO_EDGE,[Kp]:o.MIRRORED_REPEAT},_t={[In]:o.NEAREST,[Xb]:o.NEAREST_MIPMAP_NEAREST,[gc]:o.NEAREST_MIPMAP_LINEAR,[Vn]:o.LINEAR,[Qd]:o.LINEAR_MIPMAP_NEAREST,[Nr]:o.LINEAR_MIPMAP_LINEAR},z={[Kb]:o.NEVER,[$b]:o.ALWAYS,[Zb]:o.LESS,[Vm]:o.LEQUAL,[Qb]:o.EQUAL,[km]:o.GEQUAL,[Jb]:o.GREATER,[jb]:o.NOTEQUAL};function ht(P,T){if(T.type===pa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Vn||T.magFilter===Qd||T.magFilter===gc||T.magFilter===Nr||T.minFilter===Vn||T.minFilter===Qd||T.minFilter===gc||T.minFilter===Nr)&&ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,Kt[T.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,Kt[T.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,Kt[T.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,_t[T.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,_t[T.minFilter]),T.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,z[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===In||T.minFilter!==gc&&T.minFilter!==Nr||T.type===pa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(P,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function wt(P,T){let et=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",N));const rt=T.source;let gt=x.get(rt);gt===void 0&&(gt={},x.set(rt,gt));const At=Y(T);if(At!==P.__cacheKey){gt[At]===void 0&&(gt[At]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),gt[At].usedTimes++;const Lt=gt[P.__cacheKey];Lt!==void 0&&(gt[P.__cacheKey].usedTimes--,Lt.usedTimes===0&&F(T)),P.__cacheKey=At,P.__webglTexture=gt[At].texture}return et}function K(P,T,et){return Math.floor(Math.floor(P/et)/T)}function ft(P,T,et,rt){const At=P.updateRanges;if(At.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,et,rt,T.data);else{At.sort((ne,Bt)=>ne.start-Bt.start);let Lt=0;for(let ne=1;ne<At.length;ne++){const Bt=At[Lt],zt=At[ne],Yt=Bt.start+Bt.count,se=K(zt.start,T.width,4),pe=K(Bt.start,T.width,4);zt.start<=Yt+1&&se===pe&&K(zt.start+zt.count-1,T.width,4)===se?Bt.count=Math.max(Bt.count,zt.start+zt.count-Bt.start):(++Lt,At[Lt]=zt)}At.length=Lt+1;const vt=i.getParameter(o.UNPACK_ROW_LENGTH),xt=i.getParameter(o.UNPACK_SKIP_PIXELS),Ot=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let ne=0,Bt=At.length;ne<Bt;ne++){const zt=At[ne],Yt=Math.floor(zt.start/4),se=Math.ceil(zt.count/4),pe=Yt%T.width,J=Math.floor(Yt/T.width),Pt=se,Mt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,pe),i.pixelStorei(o.UNPACK_SKIP_ROWS,J),i.texSubImage2D(o.TEXTURE_2D,0,pe,J,Pt,Mt,et,rt,T.data)}P.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,vt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,xt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ot)}}function Et(P,T,et){let rt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(rt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(rt=o.TEXTURE_3D);const gt=wt(P,T),At=T.source;i.bindTexture(rt,P.__webglTexture,o.TEXTURE0+et);const Lt=r.get(At);if(At.version!==Lt.__version||gt===!0){if(i.activeTexture(o.TEXTURE0+et),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Mt=Be.getPrimaries(Be.workingColorSpace),Ft=T.colorSpace===Cr?null:Be.getPrimaries(T.colorSpace),Wt=T.colorSpace===Cr||Mt===Ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt)}i.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment);let xt=b(T.image,!1,l.maxTextureSize);xt=Xe(T,xt);const Ot=u.convert(T.format,T.colorSpace),ne=u.convert(T.type);let Bt=C(T.internalFormat,Ot,ne,T.normalized,T.colorSpace,T.isVideoTexture);ht(rt,T);let zt;const Yt=T.mipmaps,se=T.isVideoTexture!==!0,pe=Lt.__version===void 0||gt===!0,J=At.dataReady,Pt=D(T,xt);if(T.isDepthTexture)Bt=U(T.format===us,T.type),pe&&(se?i.texStorage2D(o.TEXTURE_2D,1,Bt,xt.width,xt.height):i.texImage2D(o.TEXTURE_2D,0,Bt,xt.width,xt.height,0,Ot,ne,null));else if(T.isDataTexture)if(Yt.length>0){se&&pe&&i.texStorage2D(o.TEXTURE_2D,Pt,Bt,Yt[0].width,Yt[0].height);for(let Mt=0,Ft=Yt.length;Mt<Ft;Mt++)zt=Yt[Mt],se?J&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,zt.width,zt.height,Ot,ne,zt.data):i.texImage2D(o.TEXTURE_2D,Mt,Bt,zt.width,zt.height,0,Ot,ne,zt.data);T.generateMipmaps=!1}else se?(pe&&i.texStorage2D(o.TEXTURE_2D,Pt,Bt,xt.width,xt.height),J&&ft(T,xt,Ot,ne)):i.texImage2D(o.TEXTURE_2D,0,Bt,xt.width,xt.height,0,Ot,ne,xt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){se&&pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Bt,Yt[0].width,Yt[0].height,xt.depth);for(let Mt=0,Ft=Yt.length;Mt<Ft;Mt++)if(zt=Yt[Mt],T.format!==Ki)if(Ot!==null)if(se){if(J)if(T.layerUpdates.size>0){const Wt=nS(zt.width,zt.height,T.format,T.type);for(const Ct of T.layerUpdates){const ie=zt.data.subarray(Ct*Wt/zt.data.BYTES_PER_ELEMENT,(Ct+1)*Wt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,Ct,zt.width,zt.height,1,Ot,ie)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,zt.width,zt.height,xt.depth,Ot,zt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Bt,zt.width,zt.height,xt.depth,0,zt.data,0,0);else ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?J&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,zt.width,zt.height,xt.depth,Ot,ne,zt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Bt,zt.width,zt.height,xt.depth,0,Ot,ne,zt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{se&&pe&&i.texStorage2D(o.TEXTURE_2D,Pt,Bt,Yt[0].width,Yt[0].height);for(let Mt=0,Ft=Yt.length;Mt<Ft;Mt++)zt=Yt[Mt],T.format!==Ki?Ot!==null?se?J&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,zt.width,zt.height,Ot,zt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Bt,zt.width,zt.height,0,zt.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?J&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,zt.width,zt.height,Ot,ne,zt.data):i.texImage2D(o.TEXTURE_2D,Mt,Bt,zt.width,zt.height,0,Ot,ne,zt.data)}else if(T.isDataArrayTexture)if(se){if(pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Bt,xt.width,xt.height,xt.depth),J)if(T.layerUpdates.size>0){const Mt=nS(xt.width,xt.height,T.format,T.type);for(const Ft of T.layerUpdates){const Wt=xt.data.subarray(Ft*Mt/xt.data.BYTES_PER_ELEMENT,(Ft+1)*Mt/xt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ft,xt.width,xt.height,1,Ot,ne,Wt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Ot,ne,xt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Bt,xt.width,xt.height,xt.depth,0,Ot,ne,xt.data);else if(T.isData3DTexture)se?(pe&&i.texStorage3D(o.TEXTURE_3D,Pt,Bt,xt.width,xt.height,xt.depth),J&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Ot,ne,xt.data)):i.texImage3D(o.TEXTURE_3D,0,Bt,xt.width,xt.height,xt.depth,0,Ot,ne,xt.data);else if(T.isFramebufferTexture){if(pe)if(se)i.texStorage2D(o.TEXTURE_2D,Pt,Bt,xt.width,xt.height);else{let Mt=xt.width,Ft=xt.height;for(let Wt=0;Wt<Pt;Wt++)i.texImage2D(o.TEXTURE_2D,Wt,Bt,Mt,Ft,0,Ot,ne,null),Mt>>=1,Ft>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in o){const Mt=o.canvas;if(Mt.hasAttribute("layoutsubtree")||Mt.setAttribute("layoutsubtree","true"),xt.parentNode!==Mt){Mt.appendChild(xt),_.add(T),Mt.onpaint=Ft=>{const Wt=Ft.changedElements;for(const Ct of _)Wt.includes(Ct.image)&&(Ct.needsUpdate=!0)},Mt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,xt);else{const Wt=o.RGBA,Ct=o.RGBA,ie=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Wt,Ct,ie,xt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(se&&pe){const Mt=xe(Yt[0]);i.texStorage2D(o.TEXTURE_2D,Pt,Bt,Mt.width,Mt.height)}for(let Mt=0,Ft=Yt.length;Mt<Ft;Mt++)zt=Yt[Mt],se?J&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot,ne,zt):i.texImage2D(o.TEXTURE_2D,Mt,Bt,Ot,ne,zt);T.generateMipmaps=!1}else if(se){if(pe){const Mt=xe(xt);i.texStorage2D(o.TEXTURE_2D,Pt,Bt,Mt.width,Mt.height)}J&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,ne,xt)}else i.texImage2D(o.TEXTURE_2D,0,Bt,Ot,ne,xt);M(T)&&L(rt),Lt.__version=At.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Nt(P,T,et){if(T.image.length!==6)return;const rt=wt(P,T),gt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+et);const At=r.get(gt);if(gt.version!==At.__version||rt===!0){i.activeTexture(o.TEXTURE0+et);const Lt=Be.getPrimaries(Be.workingColorSpace),vt=T.colorSpace===Cr?null:Be.getPrimaries(T.colorSpace),xt=T.colorSpace===Cr||Lt===vt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Ot=T.isCompressedTexture||T.image[0].isCompressedTexture,ne=T.image[0]&&T.image[0].isDataTexture,Bt=[];for(let Ct=0;Ct<6;Ct++)!Ot&&!ne?Bt[Ct]=b(T.image[Ct],!0,l.maxCubemapSize):Bt[Ct]=ne?T.image[Ct].image:T.image[Ct],Bt[Ct]=Xe(T,Bt[Ct]);const zt=Bt[0],Yt=u.convert(T.format,T.colorSpace),se=u.convert(T.type),pe=C(T.internalFormat,Yt,se,T.normalized,T.colorSpace),J=T.isVideoTexture!==!0,Pt=At.__version===void 0||rt===!0,Mt=gt.dataReady;let Ft=D(T,zt);ht(o.TEXTURE_CUBE_MAP,T);let Wt;if(Ot){J&&Pt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,pe,zt.width,zt.height);for(let Ct=0;Ct<6;Ct++){Wt=Bt[Ct].mipmaps;for(let ie=0;ie<Wt.length;ie++){const qt=Wt[ie];T.format!==Ki?Yt!==null?J?Mt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ie,0,0,qt.width,qt.height,Yt,qt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ie,pe,qt.width,qt.height,0,qt.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ie,0,0,qt.width,qt.height,Yt,se,qt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ie,pe,qt.width,qt.height,0,Yt,se,qt.data)}}}else{if(Wt=T.mipmaps,J&&Pt){Wt.length>0&&Ft++;const Ct=xe(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,pe,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(ne){J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Bt[Ct].width,Bt[Ct].height,Yt,se,Bt[Ct].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,pe,Bt[Ct].width,Bt[Ct].height,0,Yt,se,Bt[Ct].data);for(let ie=0;ie<Wt.length;ie++){const ze=Wt[ie].image[Ct].image;J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ie+1,0,0,ze.width,ze.height,Yt,se,ze.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ie+1,pe,ze.width,ze.height,0,Yt,se,ze.data)}}else{J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Yt,se,Bt[Ct]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,pe,Yt,se,Bt[Ct]);for(let ie=0;ie<Wt.length;ie++){const qt=Wt[ie];J?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ie+1,0,0,Yt,se,qt.image[Ct]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ie+1,pe,Yt,se,qt.image[Ct])}}}M(T)&&L(o.TEXTURE_CUBE_MAP),At.__version=gt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function tt(P,T,et,rt,gt,At){const Lt=u.convert(et.format,et.colorSpace),vt=u.convert(et.type),xt=C(et.internalFormat,Lt,vt,et.normalized,et.colorSpace),Ot=r.get(T),ne=r.get(et);if(ne.__renderTarget=T,!Ot.__hasExternalTextures){const Bt=Math.max(1,T.width>>At),zt=Math.max(1,T.height>>At);gt===o.TEXTURE_3D||gt===o.TEXTURE_2D_ARRAY?i.texImage3D(gt,At,xt,Bt,zt,T.depth,0,Lt,vt,null):i.texImage2D(gt,At,xt,Bt,zt,0,Lt,vt,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),we(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,rt,gt,ne.__webglTexture,0,ce(T)):(gt===o.TEXTURE_2D||gt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,rt,gt,ne.__webglTexture,At),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(P,T,et){if(o.bindRenderbuffer(o.RENDERBUFFER,P),T.depthBuffer){const rt=T.depthTexture,gt=rt&&rt.isDepthTexture?rt.type:null,At=U(T.stencilBuffer,gt),Lt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;we(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ce(T),At,T.width,T.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,ce(T),At,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,At,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Lt,o.RENDERBUFFER,P)}else{const rt=T.textures;for(let gt=0;gt<rt.length;gt++){const At=rt[gt],Lt=u.convert(At.format,At.colorSpace),vt=u.convert(At.type),xt=C(At.internalFormat,Lt,vt,At.normalized,At.colorSpace);we(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ce(T),xt,T.width,T.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,ce(T),xt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,xt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function _e(P,T,et){const rt=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const gt=r.get(T.depthTexture);if(gt.__renderTarget=T,(!gt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),rt){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,T.depthTexture.addEventListener("dispose",N)),gt.__webglTexture===void 0){gt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),ht(o.TEXTURE_CUBE_MAP,T.depthTexture);const Ot=u.convert(T.depthTexture.format),ne=u.convert(T.depthTexture.type);let Bt;T.depthTexture.format===ka?Bt=o.DEPTH_COMPONENT24:T.depthTexture.format===us&&(Bt=o.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Bt,T.width,T.height,0,Ot,ne,null)}}else lt(T.depthTexture,0);const At=gt.__webglTexture,Lt=ce(T),vt=rt?o.TEXTURE_CUBE_MAP_POSITIVE_X+et:o.TEXTURE_2D,xt=T.depthTexture.format===us?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===ka)we(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xt,vt,At,0,Lt):o.framebufferTexture2D(o.FRAMEBUFFER,xt,vt,At,0);else if(T.depthTexture.format===us)we(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xt,vt,At,0,Lt):o.framebufferTexture2D(o.FRAMEBUFFER,xt,vt,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(P){const T=r.get(P),et=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const rt=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),rt){const gt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,rt.removeEventListener("dispose",gt)};rt.addEventListener("dispose",gt),T.__depthDisposeCallback=gt}T.__boundDepthTexture=rt}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(et)for(let rt=0;rt<6;rt++)_e(T.__webglFramebuffer[rt],P,rt);else{const rt=P.texture.mipmaps;rt&&rt.length>0?_e(T.__webglFramebuffer[0],P,0):_e(T.__webglFramebuffer,P,0)}else if(et){T.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[rt]),T.__webglDepthbuffer[rt]===void 0)T.__webglDepthbuffer[rt]=o.createRenderbuffer(),Ut(T.__webglDepthbuffer[rt],P,!1);else{const gt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=T.__webglDepthbuffer[rt];o.bindRenderbuffer(o.RENDERBUFFER,At),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,At)}}else{const rt=P.texture.mipmaps;if(rt&&rt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Ut(T.__webglDepthbuffer,P,!1);else{const gt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,At),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,At)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Tt(P,T,et){const rt=r.get(P);T!==void 0&&tt(rt.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&oe(P)}function Dt(P){const T=P.texture,et=r.get(P),rt=r.get(T);P.addEventListener("dispose",E);const gt=P.textures,At=P.isWebGLCubeRenderTarget===!0,Lt=gt.length>1;if(Lt||(rt.__webglTexture===void 0&&(rt.__webglTexture=o.createTexture()),rt.__version=T.version,h.memory.textures++),At){et.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[vt]=[];for(let xt=0;xt<T.mipmaps.length;xt++)et.__webglFramebuffer[vt][xt]=o.createFramebuffer()}else et.__webglFramebuffer[vt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let vt=0;vt<T.mipmaps.length;vt++)et.__webglFramebuffer[vt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Lt)for(let vt=0,xt=gt.length;vt<xt;vt++){const Ot=r.get(gt[vt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=o.createTexture(),h.memory.textures++)}if(P.samples>0&&we(P)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let vt=0;vt<gt.length;vt++){const xt=gt[vt];et.__webglColorRenderbuffer[vt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[vt]);const Ot=u.convert(xt.format,xt.colorSpace),ne=u.convert(xt.type),Bt=C(xt.internalFormat,Ot,ne,xt.normalized,xt.colorSpace,P.isXRRenderTarget===!0),zt=ce(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,Bt,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+vt,o.RENDERBUFFER,et.__webglColorRenderbuffer[vt])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),Ut(et.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(At){i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture),ht(o.TEXTURE_CUBE_MAP,T);for(let vt=0;vt<6;vt++)if(T.mipmaps&&T.mipmaps.length>0)for(let xt=0;xt<T.mipmaps.length;xt++)tt(et.__webglFramebuffer[vt][xt],P,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,xt);else tt(et.__webglFramebuffer[vt],P,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);M(T)&&L(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Lt){for(let vt=0,xt=gt.length;vt<xt;vt++){const Ot=gt[vt],ne=r.get(Ot);let Bt=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Bt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Bt,ne.__webglTexture),ht(Bt,Ot),tt(et.__webglFramebuffer,P,Ot,o.COLOR_ATTACHMENT0+vt,Bt,0),M(Ot)&&L(Bt)}i.unbindTexture()}else{let vt=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(vt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(vt,rt.__webglTexture),ht(vt,T),T.mipmaps&&T.mipmaps.length>0)for(let xt=0;xt<T.mipmaps.length;xt++)tt(et.__webglFramebuffer[xt],P,T,o.COLOR_ATTACHMENT0,vt,xt);else tt(et.__webglFramebuffer,P,T,o.COLOR_ATTACHMENT0,vt,0);M(T)&&L(vt),i.unbindTexture()}P.depthBuffer&&oe(P)}function Rt(P){const T=P.textures;for(let et=0,rt=T.length;et<rt;et++){const gt=T[et];if(M(gt)){const At=I(P),Lt=r.get(gt).__webglTexture;i.bindTexture(At,Lt),L(At),i.unbindTexture()}}}const $t=[],de=[];function Me(P){if(P.samples>0){if(we(P)===!1){const T=P.textures,et=P.width,rt=P.height;let gt=o.COLOR_BUFFER_BIT;const At=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Lt=r.get(P),vt=T.length>1;if(vt)for(let Ot=0;Ot<T.length;Ot++)i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const xt=P.texture.mipmaps;xt&&xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ot=0;Ot<T.length;Ot++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(gt|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(gt|=o.STENCIL_BUFFER_BIT)),vt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ot]);const ne=r.get(T[Ot]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ne,0)}o.blitFramebuffer(0,0,et,rt,0,0,et,rt,gt,o.NEAREST),p===!0&&($t.length=0,de.length=0,$t.push(o.COLOR_ATTACHMENT0+Ot),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&($t.push(At),de.push(At),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,de)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,$t))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),vt)for(let Ot=0;Ot<T.length;Ot++){i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ot]);const ne=r.get(T[Ot]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,ne,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&p){const T=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ce(P){return Math.min(l.maxSamples,P.samples)}function we(P){const T=r.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function q(P){const T=h.render.frame;v.get(P)!==T&&(v.set(P,T),P.update())}function Xe(P,T){const et=P.colorSpace,rt=P.format,gt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||et!==rf&&et!==Cr&&(Be.getTransfer(et)===Qe?(rt!==Ki||gt!==Si)&&ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",et)),T}function xe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=W,this.resetTextureUnits=j,this.getTextureUnits=Z,this.setTextureUnits=Q,this.setTexture2D=lt,this.setTexture2DArray=at,this.setTexture3D=mt,this.setTextureCube=bt,this.rebindTextures=Tt,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function jw(o,t){function i(r,l=Cr){let u;const h=Be.getTransfer(l);if(r===Si)return o.UNSIGNED_BYTE;if(r===Im)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Bm)return o.UNSIGNED_SHORT_5_5_5_1;if(r===JS)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===jS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===ZS)return o.BYTE;if(r===QS)return o.SHORT;if(r===Bl)return o.UNSIGNED_SHORT;if(r===zm)return o.INT;if(r===va)return o.UNSIGNED_INT;if(r===pa)return o.FLOAT;if(r===_a)return o.HALF_FLOAT;if(r===$S)return o.ALPHA;if(r===ty)return o.RGB;if(r===Ki)return o.RGBA;if(r===ka)return o.DEPTH_COMPONENT;if(r===us)return o.DEPTH_STENCIL;if(r===ey)return o.RED;if(r===Fm)return o.RED_INTEGER;if(r===hs)return o.RG;if(r===Hm)return o.RG_INTEGER;if(r===Gm)return o.RGBA_INTEGER;if(r===Wc||r===Yc||r===Kc||r===Zc)if(h===Qe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Wc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Kc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Wc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Kc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zp||r===Qp||r===Jp||r===jp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Zp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$p||r===tm||r===em||r===nm||r===im||r===nf||r===am)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===$p||r===tm)return h===Qe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===em)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===nm)return u.COMPRESSED_R11_EAC;if(r===im)return u.COMPRESSED_SIGNED_R11_EAC;if(r===nf)return u.COMPRESSED_RG11_EAC;if(r===am)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===rm||r===sm||r===om||r===lm||r===um||r===cm||r===fm||r===hm||r===dm||r===pm||r===mm||r===gm||r===vm||r===_m)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===rm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===om)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===um)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_m)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xm||r===Sm||r===ym)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===xm)return h===Qe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ym)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Mm||r===bm||r===af||r===Em)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Mm)return u.COMPRESSED_RED_RGTC1_EXT;if(r===bm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===af)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Em)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const $w=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tR=`
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

}`;class eR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new fy(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new on({vertexShader:$w,fragmentShader:tR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new sn(new bo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nR extends ds{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,v=null,_=null,g=null,x=null,y=null;const A=typeof XRWebGLBinding<"u",b=new eR,M={},L=i.getContextAttributes();let I=null,C=null;const U=[],D=[],N=new re;let E=null,O=null;const F=new Wi;F.viewport=new tn;const G=new Wi;G.viewport=new tn;const H=[F,G],j=new cT;let Z=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ft=U[K];return ft===void 0&&(ft=new rp,U[K]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(K){let ft=U[K];return ft===void 0&&(ft=new rp,U[K]=ft),ft.getGripSpace()},this.getHand=function(K){let ft=U[K];return ft===void 0&&(ft=new rp,U[K]=ft),ft.getHandSpace()};function W(K){const ft=D.indexOf(K.inputSource);if(ft===-1)return;const Et=U[ft];Et!==void 0&&(Et.update(K.inputSource,K.frame,m||h),Et.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",Y),l.removeEventListener("inputsourceschange",lt);for(let K=0;K<U.length;K++){const ft=D[K];ft!==null&&(D[K]=null,U[K].disconnect(ft))}Z=null,Q=null,b.reset();for(const K in M)delete M[K];if(t.setRenderTarget(I),x=null,g=null,_=null,l=null,C=null,wt.stop(),r.isPresenting=!1,t.setPixelRatio(E),t.setSize(N.width,N.height,!1),O!==null){const K=O.camera;K.fov=O.fov,K.zoom=O.zoom,K.updateProjectionMatrix(),O=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,r.isPresenting===!0&&ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return y},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(I=t.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",Y),l.addEventListener("inputsourceschange",lt),L.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(N),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Nt=null,tt=null;L.depth&&(tt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=L.stencil?us:ka,Nt=L.stencil?Fl:va);const Ut={colorFormat:i.RGBA8,depthFormat:tt,scaleFactor:u};_=this.getBinding(),g=_.createProjectionLayer(Ut),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),C=new Oi(g.textureWidth,g.textureHeight,{format:Ki,type:Si,depthTexture:new Vl(g.textureWidth,g.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Et={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:u};x=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new Oi(x.framebufferWidth,x.framebufferHeight,{format:Ki,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),wt.setContext(l),wt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function lt(K){for(let ft=0;ft<K.removed.length;ft++){const Et=K.removed[ft],Nt=D.indexOf(Et);Nt>=0&&(D[Nt]=null,U[Nt].disconnect(Et))}for(let ft=0;ft<K.added.length;ft++){const Et=K.added[ft];let Nt=D.indexOf(Et);if(Nt===-1){for(let Ut=0;Ut<U.length;Ut++)if(Ut>=D.length){D.push(Et),Nt=Ut;break}else if(D[Ut]===null){D[Ut]=Et,Nt=Ut;break}if(Nt===-1)break}const tt=U[Nt];tt&&tt.connect(Et)}}const at=new k,mt=new k;function bt(K,ft,Et){at.setFromMatrixPosition(ft.matrixWorld),mt.setFromMatrixPosition(Et.matrixWorld);const Nt=at.distanceTo(mt),tt=ft.projectionMatrix.elements,Ut=Et.projectionMatrix.elements,_e=tt[14]/(tt[10]-1),oe=tt[14]/(tt[10]+1),Tt=(tt[9]+1)/tt[5],Dt=(tt[9]-1)/tt[5],Rt=(tt[8]-1)/tt[0],$t=(Ut[8]+1)/Ut[0],de=_e*Rt,Me=_e*$t,ce=Nt/(-Rt+$t),we=ce*-Rt;if(ft.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(we),K.translateZ(ce),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),tt[10]===-1)K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const q=_e+ce,Xe=oe+ce,xe=de-we,P=Me+(Nt-we),T=Tt*oe/Xe*q,et=Dt*oe/Xe*q;K.projectionMatrix.makePerspective(xe,P,T,et,q,Xe),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Kt(K,ft){ft===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ft.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let ft=K.near,Et=K.far;b.texture!==null&&(b.depthNear>0&&(ft=b.depthNear),b.depthFar>0&&(Et=b.depthFar)),j.near=G.near=F.near=ft,j.far=G.far=F.far=Et,(Z!==j.near||Q!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),Z=j.near,Q=j.far),j.layers.mask=K.layers.mask|6,F.layers.mask=j.layers.mask&-5,G.layers.mask=j.layers.mask&-3;const Nt=K.parent,tt=j.cameras;Kt(j,Nt);for(let Ut=0;Ut<tt.length;Ut++)Kt(tt[Ut],Nt);tt.length===2?bt(j,F,G):j.projectionMatrix.copy(F.projectionMatrix),O===null&&K.isPerspectiveCamera&&(O={camera:K,fov:K.fov,zoom:K.zoom}),_t(K,j,Nt)};function _t(K,ft,Et){Et===null?K.matrix.copy(ft.matrixWorld):(K.matrix.copy(Et.matrixWorld),K.matrix.invert(),K.matrix.multiply(ft.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Am*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&x===null))return p},this.setFoveation=function(K){p=K,g!==null&&(g.fixedFoveation=K),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=K)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(j)},this.getCameraTexture=function(K){return M[K]};let z=null;function ht(K,ft){if(v=ft.getViewerPose(m||h),y=ft,v!==null){const Et=v.views;x!==null&&(t.setRenderTargetFramebuffer(C,x.framebuffer),t.setRenderTarget(C));let Nt=!1;Et.length!==j.cameras.length&&(j.cameras.length=0,Nt=!0);for(let oe=0;oe<Et.length;oe++){const Tt=Et[oe];let Dt=null;if(x!==null)Dt=x.getViewport(Tt);else{const $t=_.getViewSubImage(g,Tt);Dt=$t.viewport,oe===0&&(t.setRenderTargetTextures(C,$t.colorTexture,$t.depthStencilTexture),t.setRenderTarget(C))}let Rt=H[oe];Rt===void 0&&(Rt=new Wi,Rt.layers.enable(oe),Rt.viewport=new tn,H[oe]=Rt),Rt.matrix.fromArray(Tt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Tt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),oe===0&&(j.matrix.copy(Rt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Nt===!0&&j.cameras.push(Rt)}const tt=l.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){_=r.getBinding();const oe=_.getDepthInformation(Et[0]);oe&&oe.isValid&&oe.texture&&b.init(oe,l.renderState)}if(tt&&tt.includes("camera-access")&&A){t.state.unbindTexture(),_=r.getBinding();for(let oe=0;oe<Et.length;oe++){const Tt=Et[oe].camera;if(Tt){let Dt=M[Tt];Dt||(Dt=new fy,M[Tt]=Dt);const Rt=_.getCameraImage(Tt);Dt.sourceTexture=Rt}}}}for(let Et=0;Et<U.length;Et++){const Nt=D[Et],tt=U[Et];Nt!==null&&tt!==void 0&&tt.update(Nt,ft,m||h)}z&&z(K,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),y=null}const wt=new _y;wt.setAnimationLoop(ht),this.setAnimationLoop=function(K){z=K},this.dispose=function(){}}}const iR=new rn,Ty=new me;Ty.set(-1,0,0,0,1,0,0,0,1);function aR(o,t){function i(b,M){b.matrixAutoUpdate===!0&&b.updateMatrix(),M.value.copy(b.matrix)}function r(b,M){M.color.getRGB(b.fogColor.value,my(o)),M.isFog?(b.fogNear.value=M.near,b.fogFar.value=M.far):M.isFogExp2&&(b.fogDensity.value=M.density)}function l(b,M,L,I,C){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?u(b,M):M.isMeshLambertMaterial?(u(b,M),M.envMap&&(b.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(u(b,M),_(b,M)):M.isMeshPhongMaterial?(u(b,M),v(b,M),M.envMap&&(b.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(u(b,M),g(b,M),M.isMeshPhysicalMaterial&&x(b,M,C)):M.isMeshMatcapMaterial?(u(b,M),y(b,M)):M.isMeshDepthMaterial?u(b,M):M.isMeshDistanceMaterial?(u(b,M),A(b,M)):M.isMeshNormalMaterial?u(b,M):M.isLineBasicMaterial?(h(b,M),M.isLineDashedMaterial&&d(b,M)):M.isPointsMaterial?p(b,M,L,I):M.isSpriteMaterial?m(b,M):M.isShadowMaterial?(b.color.value.copy(M.color),b.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function u(b,M){b.opacity.value=M.opacity,M.color&&b.diffuse.value.copy(M.color),M.emissive&&b.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(b.map.value=M.map,i(M.map,b.mapTransform)),M.alphaMap&&(b.alphaMap.value=M.alphaMap,i(M.alphaMap,b.alphaMapTransform)),M.bumpMap&&(b.bumpMap.value=M.bumpMap,i(M.bumpMap,b.bumpMapTransform),b.bumpScale.value=M.bumpScale,M.side===oi&&(b.bumpScale.value*=-1)),M.normalMap&&(b.normalMap.value=M.normalMap,i(M.normalMap,b.normalMapTransform),b.normalScale.value.copy(M.normalScale),M.side===oi&&b.normalScale.value.negate()),M.displacementMap&&(b.displacementMap.value=M.displacementMap,i(M.displacementMap,b.displacementMapTransform),b.displacementScale.value=M.displacementScale,b.displacementBias.value=M.displacementBias),M.emissiveMap&&(b.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,b.emissiveMapTransform)),M.specularMap&&(b.specularMap.value=M.specularMap,i(M.specularMap,b.specularMapTransform)),M.alphaTest>0&&(b.alphaTest.value=M.alphaTest);const L=t.get(M),I=L.envMap,C=L.envMapRotation;I&&(b.envMap.value=I,b.envMapRotation.value.setFromMatrix4(iR.makeRotationFromEuler(C)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(Ty),b.reflectivity.value=M.reflectivity,b.ior.value=M.ior,b.refractionRatio.value=M.refractionRatio),M.lightMap&&(b.lightMap.value=M.lightMap,b.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,b.lightMapTransform)),M.aoMap&&(b.aoMap.value=M.aoMap,b.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,b.aoMapTransform))}function h(b,M){b.diffuse.value.copy(M.color),b.opacity.value=M.opacity,M.map&&(b.map.value=M.map,i(M.map,b.mapTransform))}function d(b,M){b.dashSize.value=M.dashSize,b.totalSize.value=M.dashSize+M.gapSize,b.scale.value=M.scale}function p(b,M,L,I){b.diffuse.value.copy(M.color),b.opacity.value=M.opacity,b.size.value=M.size*L,b.scale.value=I*.5,M.map&&(b.map.value=M.map,i(M.map,b.uvTransform)),M.alphaMap&&(b.alphaMap.value=M.alphaMap,i(M.alphaMap,b.alphaMapTransform)),M.alphaTest>0&&(b.alphaTest.value=M.alphaTest)}function m(b,M){b.diffuse.value.copy(M.color),b.opacity.value=M.opacity,b.rotation.value=M.rotation,M.map&&(b.map.value=M.map,i(M.map,b.mapTransform)),M.alphaMap&&(b.alphaMap.value=M.alphaMap,i(M.alphaMap,b.alphaMapTransform)),M.alphaTest>0&&(b.alphaTest.value=M.alphaTest)}function v(b,M){b.specular.value.copy(M.specular),b.shininess.value=Math.max(M.shininess,1e-4)}function _(b,M){M.gradientMap&&(b.gradientMap.value=M.gradientMap)}function g(b,M){b.metalness.value=M.metalness,M.metalnessMap&&(b.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,b.metalnessMapTransform)),b.roughness.value=M.roughness,M.roughnessMap&&(b.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,b.roughnessMapTransform)),M.envMap&&(b.envMapIntensity.value=M.envMapIntensity)}function x(b,M,L){b.ior.value=M.ior,M.sheen>0&&(b.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),b.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(b.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,b.sheenColorMapTransform)),M.sheenRoughnessMap&&(b.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,b.sheenRoughnessMapTransform))),M.clearcoat>0&&(b.clearcoat.value=M.clearcoat,b.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(b.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,b.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(b.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===oi&&b.clearcoatNormalScale.value.negate())),M.dispersion>0&&(b.dispersion.value=M.dispersion),M.retroreflectivity>0&&(b.retroreflectivity.value=M.retroreflectivity),M.iridescence>0&&(b.iridescence.value=M.iridescence,b.iridescenceIOR.value=M.iridescenceIOR,b.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(b.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,b.iridescenceMapTransform)),M.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),M.transmission>0&&(b.transmission.value=M.transmission,b.transmissionSamplerMap.value=L.texture,b.transmissionSamplerSize.value.set(L.width,L.height),M.transmissionMap&&(b.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,b.transmissionMapTransform)),b.thickness.value=M.thickness,M.thicknessMap&&(b.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=M.attenuationDistance,b.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(b.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(b.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=M.specularIntensity,b.specularColor.value.copy(M.specularColor),M.specularColorMap&&(b.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,b.specularColorMapTransform)),M.specularIntensityMap&&(b.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,b.specularIntensityMapTransform))}function y(b,M){M.matcap&&(b.matcap.value=M.matcap)}function A(b,M){const L=t.get(M).light;b.referencePosition.value.setFromMatrixPosition(L.matrixWorld),b.nearDistance.value=L.shadow.camera.near,b.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function rR(o,t,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,U){const D=U.program;r.uniformBlockBinding(C,D)}function m(C,U){let D=l[C.id];D===void 0&&(b(C),D=v(C),l[C.id]=D,C.addEventListener("dispose",L));const N=U.program;r.updateUBOMapping(C,N);const E=t.render.frame;u[C.id]!==E&&(g(C),u[C.id]=E)}function v(C){const U=_();C.__bindingPointIndex=U;const D=o.createBuffer(),N=C.__size,E=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,N,E),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,D),D}function _(){for(let C=0;C<d;C++)if(h.indexOf(C)===-1)return h.push(C),C;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const U=l[C.id],D=C.uniforms,N=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let E=0,O=D.length;E<O;E++){const F=D[E];if(Array.isArray(F))for(let G=0,H=F.length;G<H;G++)x(F[G],E,G,N);else x(F,E,0,N)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(C,U,D,N){if(A(C,U,D,N)===!0){const E=C.__offset,O=C.value;if(Array.isArray(O)){let F=0;for(let G=0;G<O.length;G++){const H=O[G],j=M(H);y(H,C.__data,F),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(F+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(O,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,E,C.__data)}}function y(C,U,D){typeof C=="number"||typeof C=="boolean"?U[0]=C:C.isMatrix3?(U[0]=C.elements[0],U[1]=C.elements[1],U[2]=C.elements[2],U[3]=0,U[4]=C.elements[3],U[5]=C.elements[4],U[6]=C.elements[5],U[7]=0,U[8]=C.elements[6],U[9]=C.elements[7],U[10]=C.elements[8],U[11]=0):ArrayBuffer.isView(C)?U.set(new C.constructor(C.buffer,C.byteOffset,U.length)):C.toArray(U,D)}function A(C,U,D,N){const E=C.value,O=U+"_"+D;if(N[O]===void 0)return typeof E=="number"||typeof E=="boolean"?N[O]=E:ArrayBuffer.isView(E)?N[O]=E.slice():N[O]=E.clone(),!0;{const F=N[O];if(typeof E=="number"||typeof E=="boolean"){if(F!==E)return N[O]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(F.equals(E)===!1)return F.copy(E),!0}}return!1}function b(C){const U=C.uniforms;let D=0;const N=16;for(let O=0,F=U.length;O<F;O++){const G=Array.isArray(U[O])?U[O]:[U[O]];for(let H=0,j=G.length;H<j;H++){const Z=G[H],Q=Array.isArray(Z.value)?Z.value:[Z.value];for(let W=0,Y=Q.length;W<Y;W++){const lt=Q[W],at=M(lt),mt=D%N,bt=mt%at.boundary,Kt=mt+bt;D+=bt,Kt!==0&&N-Kt<at.storage&&(D+=N-Kt),Z.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=D,D+=at.storage}}}const E=D%N;return E>0&&(D+=N-E),C.__size=D,C.__cache={},this}function M(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(U.boundary=16,U.storage=C.byteLength):ue("WebGLRenderer: Unsupported uniform value type.",C),U}function L(C){const U=C.target;U.removeEventListener("dispose",L);const D=h.indexOf(U.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function I(){for(const C in l)o.deleteBuffer(l[C]);h=[],l={},u={}}return{bind:p,update:m,dispose:I}}const sR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ha=null;function oR(){return ha===null&&(ha=new AE(sR,16,16,hs,_a),ha.name="DFG_LUT",ha.minFilter=Vn,ha.magFilter=Vn,ha.wrapS=Ga,ha.wrapT=Ga,ha.generateMipmaps=!1,ha.needsUpdate=!0),ha}class lR{constructor(t={}){const{canvas:i=nE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:x=Si}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const A=x,b=new Set([Gm,Hm,Fm]),M=new Set([Si,va,Bl,Fl,Im,Bm]),L=new Uint32Array(4),I=new Int32Array(4),C=new k;let U=null,D=null;const N=[],E=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let G=!1,H=null,j=null,Z=null,Q=null;this._outputColorSpace=Jn;let W=0,Y=0,lt=null,at=-1,mt=null;const bt=new tn,Kt=new tn;let _t=null;const z=new Pe(0);let ht=0,wt=i.width,K=i.height,ft=1,Et=null,Nt=null;const tt=new tn(0,0,wt,K),Ut=new tn(0,0,wt,K);let _e=!1;const oe=new Wm;let Tt=!1,Dt=!1;const Rt=new rn,$t=new k,de=new tn,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function we(){return lt===null?ft:1}let q=r;function Xe(w,V){return i.getContext(w,V)}let xe,P,T,et,rt,gt,At,Lt,vt,xt,Ot,ne,Bt,zt,Yt,se,pe,J,Pt,Mt,Ft,Wt,Ct;try{const w={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Om}`),i.addEventListener("webglcontextlost",ze,!1),i.addEventListener("webglcontextrestored",ge,!1),i.addEventListener("webglcontextcreationerror",li,!1),q===null){const V="webgl2";if(q=Xe(V,w),q===null)throw Xe(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ie()}catch(w){throw i.removeEventListener("webglcontextlost",ze,!1),i.removeEventListener("webglcontextrestored",ge,!1),i.removeEventListener("webglcontextcreationerror",li,!1),Ge("WebGLRenderer: "+w.message),w}function ie(){xe=new o3(q),xe.init(),Ft=new jw(q,xe),P=new J2(q,xe,t,Ft),T=new Qw(q,xe),P.reversedDepthBuffer&&g&&T.buffers.depth.setReversed(!0),j=q.createFramebuffer(),Z=q.createFramebuffer(),Q=q.createFramebuffer(),et=new c3(q),rt=new zw,gt=new Jw(q,xe,T,rt,P,Ft,et),At=new s3(F),Lt=new hT(q),Wt=new Z2(q,Lt),vt=new l3(q,Lt,et,Wt),xt=new h3(q,vt,Lt,Wt,et),J=new f3(q,P,gt),Yt=new j2(rt),Ot=new Pw(F,At,xe,P,Wt,Yt),ne=new aR(F,rt),Bt=new Bw,zt=new Xw(xe),pe=new K2(F,At,T,xt,y,p),se=new Zw(F,xt,P),Ct=new rR(q,et,P,T),Pt=new Q2(q,xe,et),Mt=new u3(q,xe,et),et.programs=Ot.programs,F.capabilities=P,F.extensions=xe,F.properties=rt,F.renderLists=Bt,F.shadowMap=se,F.state=T,F.info=et}A!==Si&&(O=new p3(A,i.width,i.height,d,l,u));const qt=new nR(F,q);this.xr=qt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const w=xe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=xe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(w){w!==void 0&&(ft=w,this.setSize(wt,K,!1))},this.getSize=function(w){return w.set(wt,K)},this.setSize=function(w,V,pt=!0){if(qt.isPresenting){ue("WebGLRenderer: Can't change size while VR device is presenting.");return}wt=w,K=V,i.width=Math.floor(w*ft),i.height=Math.floor(V*ft),pt===!0&&(i.style.width=w+"px",i.style.height=V+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(wt*ft,K*ft).floor()},this.setDrawingBufferSize=function(w,V,pt){wt=w,K=V,ft=pt,i.width=Math.floor(w*pt),i.height=Math.floor(V*pt),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(A===Si){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(bt)},this.getViewport=function(w){return w.copy(tt)},this.setViewport=function(w,V,pt,ot){w.isVector4?tt.set(w.x,w.y,w.z,w.w):tt.set(w,V,pt,ot),T.viewport(bt.copy(tt).multiplyScalar(ft).round())},this.getScissor=function(w){return w.copy(Ut)},this.setScissor=function(w,V,pt,ot){w.isVector4?Ut.set(w.x,w.y,w.z,w.w):Ut.set(w,V,pt,ot),T.scissor(Kt.copy(Ut).multiplyScalar(ft).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(w){T.setScissorTest(_e=w)},this.setOpaqueSort=function(w){Et=w},this.setTransparentSort=function(w){Nt=w},this.getClearColor=function(w){return w.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,pt=!0){let ot=0;if(w){let ut=!1;if(lt!==null){const Vt=lt.texture.format;ut=b.has(Vt)}if(ut){const Vt=lt.texture.type,Zt=M.has(Vt),Ht=pe.getClearColor(),jt=pe.getClearAlpha(),te=Ht.r,fe=Ht.g,ve=Ht.b;Zt?(L[0]=te,L[1]=fe,L[2]=ve,L[3]=jt,q.clearBufferuiv(q.COLOR,0,L)):(I[0]=te,I[1]=fe,I[2]=ve,I[3]=jt,q.clearBufferiv(q.COLOR,0,I))}else ot|=q.COLOR_BUFFER_BIT}V&&(ot|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pt&&(ot|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&q.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),H=w},this.dispose=function(){i.removeEventListener("webglcontextlost",ze,!1),i.removeEventListener("webglcontextrestored",ge,!1),i.removeEventListener("webglcontextcreationerror",li,!1),pe.dispose(),Bt.dispose(),zt.dispose(),rt.dispose(),At.dispose(),xt.dispose(),Wt.dispose(),Ct.dispose(),Ot.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",Pr),qt.removeEventListener("sessionend",Ya),Ji.stop()};function ze(w){w.preventDefault(),Ex("WebGLRenderer: Context Lost."),G=!0}function ge(){Ex("WebGLRenderer: Context Restored."),G=!1;const w=et.autoReset,V=se.enabled,pt=se.autoUpdate,ot=se.needsUpdate,ut=se.type;ie(),et.autoReset=w,se.enabled=V,se.autoUpdate=pt,se.needsUpdate=ot,se.type=ut}function li(w){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function yi(w){const V=w.target;V.removeEventListener("dispose",yi),gf(V)}function gf(w){ms(w),rt.remove(w)}function ms(w){const V=rt.get(w).programs;V!==void 0&&(V.forEach(function(pt){Ot.releaseProgram(pt)}),w.isShaderMaterial&&Ot.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,pt,ot,ut,Vt){V===null&&(V=Me);const Zt=ut.isMesh&&ut.matrixWorld.determinantAffine()<0,Ht=Do(w,V,pt,ot,ut);T.setMaterial(ot,Zt);let jt=pt.index,te=1;if(ot.wireframe===!0){if(jt=vt.getWireframeAttribute(pt),jt===void 0)return;te=2}const fe=pt.drawRange,ve=pt.attributes.position;let Qt=fe.start*te,Re=(fe.start+fe.count)*te;Vt!==null&&(Qt=Math.max(Qt,Vt.start*te),Re=Math.min(Re,(Vt.start+Vt.count)*te)),jt!==null?(Qt=Math.max(Qt,0),Re=Math.min(Re,jt.count)):ve!=null&&(Qt=Math.max(Qt,0),Re=Math.min(Re,ve.count));const Ee=Re-Qt;if(Ee<0||Ee===1/0)return;Wt.setup(ut,ot,Ht,pt,jt);let Je,qe=Pt;if(jt!==null&&(Je=Lt.get(jt),qe=Mt,qe.setIndex(Je)),ut.isMesh)ot.wireframe===!0?(T.setLineWidth(ot.wireframeLinewidth*we()),qe.setMode(q.LINES)):qe.setMode(q.TRIANGLES);else if(ut.isLine){let yn=ot.linewidth;yn===void 0&&(yn=1),T.setLineWidth(yn*we()),ut.isLineSegments?qe.setMode(q.LINES):ut.isLineLoop?qe.setMode(q.LINE_LOOP):qe.setMode(q.LINE_STRIP)}else ut.isPoints?qe.setMode(q.POINTS):ut.isSprite&&qe.setMode(q.TRIANGLES);if(ut.isBatchedMesh)if(xe.get("WEBGL_multi_draw"))qe.renderMultiDraw(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount);else{const yn=ut._multiDrawStarts,kt=ut._multiDrawCounts,cn=ut._multiDrawCount,Ie=jt?Lt.get(jt).bytesPerElement:1,qn=rt.get(ot).currentProgram.getUniforms();for(let ui=0;ui<cn;ui++)qn.setValue(q,"_gl_DrawID",ui),qe.render(yn[ui]/Ie,kt[ui])}else if(ut.isInstancedMesh)qe.renderInstances(Qt,Ee,ut.count);else if(pt.isInstancedBufferGeometry){const yn=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,kt=Math.min(pt.instanceCount,yn);qe.renderInstances(Qt,Ee,kt)}else qe.render(Qt,Ee)};function Or(w,V,pt,ot){H!==null&&w.isNodeMaterial&&H.setObject(ot,w),Tt===!0&&Yt.setState(w,pt,!1),w.transparent===!0&&w.side===Li&&w.forceSinglePass===!1?(w.side=oi,w.needsUpdate=!0,zr(w,V,ot),w.side=cs,w.needsUpdate=!0,zr(w,V,ot),w.side=Li):zr(w,V,ot)}this.compile=function(w,V,pt=null){pt===null&&(pt=w),H!==null&&H.renderStart(w,V,pt),D=zt.get(pt),D.init(V),E.push(D),pt.traverseVisible(function(ut){ut.isLight&&ut.layers.test(V.layers)&&(D.pushLight(ut),ut.castShadow&&D.pushShadow(ut))}),w!==pt&&w.traverseVisible(function(ut){ut.isLight&&ut.layers.test(V.layers)&&(D.pushLight(ut),ut.castShadow&&D.pushShadow(ut))}),D.setupLights(),H!==null&&H.updateLights(D.state.lightsArray),Dt=this.localClippingEnabled,Tt=Yt.init(this.clippingPlanes,Dt),Tt===!0&&Yt.setGlobalState(this.clippingPlanes,V),H!==null&&se.render(D.state.shadowsArray,pt,V);const ot=new Set;return w.traverse(function(ut){if(!(ut.isMesh||ut.isPoints||ut.isLine||ut.isSprite))return;const Vt=ut.material;if(Vt)if(Array.isArray(Vt))for(let Zt=0;Zt<Vt.length;Zt++){const Ht=Vt[Zt];Or(Ht,pt,V,ut),ot.add(Ht)}else Or(Vt,pt,V,ut),ot.add(Vt)}),D=E.pop(),H!==null&&H.renderEnd(),ot},this.compileAsync=function(w,V,pt=null){const ot=this.compile(w,V,pt);return new Promise(ut=>{function Vt(){if(ot.forEach(function(Zt){const jt=rt.get(Zt).currentProgram;(jt===void 0||jt.isReady())&&ot.delete(Zt)}),ot.size===0){ut(w);return}setTimeout(Vt,10)}xe.get("KHR_parallel_shader_compile")!==null?Vt():setTimeout(Vt,10)})};let Wa=null;function Sa(w){Wa&&Wa(w)}function Pr(){Ji.stop()}function Ya(){Ji.start()}const Ji=new _y;Ji.setAnimationLoop(Sa),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(w){Wa=w,qt.setAnimationLoop(w),w===null?Ji.stop():Ji.start()},qt.addEventListener("sessionstart",Pr),qt.addEventListener("sessionend",Ya),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;H!==null&&H.renderStart(w,V);const pt=qt.enabled===!0&&qt.isPresenting===!0,ot=O!==null&&(lt===null||pt)&&O.begin(F,lt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(V),V=qt.getCamera()),w.isScene===!0&&w.onBeforeRender(F,w,V,lt),D=zt.get(w,E.length),D.init(V),D.state.textureUnits=gt.getTextureUnits(),E.push(D),Rt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),oe.setFromProjectionMatrix(Rt,ma,V.reversedDepth),Dt=this.localClippingEnabled,Tt=Yt.init(this.clippingPlanes,Dt),U=Bt.get(w,N.length),U.init(),N.push(U),qt.enabled===!0&&qt.isPresenting===!0){const Zt=F.xr.getDepthSensingMesh();Zt!==null&&To(Zt,V,-1/0,F.sortObjects)}To(w,V,0,F.sortObjects),U.finish(),H!==null&&H.updateLights(D.state.lightsArray),F.sortObjects===!0&&U.sort(Et,Nt),ce=qt.enabled===!1||qt.isPresenting===!1||qt.hasDepthSensing()===!1,ce&&pe.addToRenderList(U,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Tt===!0&&Yt.beginShadows();const ut=D.state.shadowsArray;if(se.render(ut,w,V),Tt===!0&&Yt.endShadows(),(ot&&O.hasRenderPass())===!1){const Zt=U.opaque,Ht=U.transmissive;if(D.setupLights(),V.isArrayCamera){const jt=V.cameras;if(Ht.length>0)for(let te=0,fe=jt.length;te<fe;te++){const ve=jt[te];gs(Zt,Ht,w,ve)}ce&&pe.render(w);for(let te=0,fe=jt.length;te<fe;te++){const ve=jt[te];Ao(U,w,ve,ve.viewport)}}else Ht.length>0&&gs(Zt,Ht,w,V),ce&&pe.render(w),Ao(U,w,V)}lt!==null&&Y===0&&(gt.updateMultisampleRenderTarget(lt),gt.updateRenderTargetMipmap(lt)),ot&&O.end(F),w.isScene===!0&&w.onAfterRender(F,w,V),Wt.resetDefaultState(),at=-1,mt=null,E.pop(),E.length>0?(D=E[E.length-1],gt.setTextureUnits(D.state.textureUnits),Tt===!0&&Yt.setGlobalState(F.clippingPlanes,D.state.camera)):D=null,N.pop(),N.length>0?U=N[N.length-1]:U=null,H!==null&&H.renderEnd()};function To(w,V,pt,ot){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)pt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLightProbeGrid)D.pushLightProbeGrid(w);else if(w.isLight)D.pushLight(w),w.castShadow&&D.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(oe)){ot&&de.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Rt);const Zt=xt.update(w),Ht=w.material;Ht.visible&&U.push(w,Zt,Ht,pt,de.z,null,V)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(oe))){const Zt=xt.update(w),Ht=w.material;if(ot&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),de.copy(w.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),de.copy(Zt.boundingSphere.center)),de.applyMatrix4(w.matrixWorld).applyMatrix4(Rt)),Array.isArray(Ht)){const jt=Zt.groups;for(let te=0,fe=jt.length;te<fe;te++){const ve=jt[te],Qt=Ht[ve.materialIndex];Qt&&Qt.visible&&U.push(w,Zt,Qt,pt,de.z,ve,V)}}else Ht.visible&&U.push(w,Zt,Ht,pt,de.z,null,V)}}const Vt=w.children;for(let Zt=0,Ht=Vt.length;Zt<Ht;Zt++)To(Vt[Zt],V,pt,ot)}function Ao(w,V,pt,ot){const{opaque:ut,transmissive:Vt,transparent:Zt}=w;D.setupLightsView(pt),Tt===!0&&Yt.setGlobalState(F.clippingPlanes,pt),ot&&T.viewport(bt.copy(ot)),ut.length>0&&ji(ut,V,pt),Vt.length>0&&ji(Vt,V,pt),Zt.length>0&&ji(Zt,V,pt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function gs(w,V,pt,ot){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ot.id]===void 0){const Qt=xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ot.id]=new Oi(1,1,{generateMipmaps:!0,type:Qt?_a:Si,minFilter:Nr,samples:Math.max(4,P.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Be.workingColorSpace})}const Vt=D.state.transmissionRenderTarget[ot.id],Zt=ot.viewport||bt;Vt.setSize(Zt.z*F.transmissionResolutionScale,Zt.w*F.transmissionResolutionScale);const Ht=F.getRenderTarget(),jt=F.getActiveCubeFace(),te=F.getActiveMipmapLevel();F.setRenderTarget(Vt),F.getClearColor(z),ht=F.getClearAlpha(),ht<1&&F.setClearColor(16777215,.5),F.clear(),ce&&pe.render(pt);const fe=F.toneMapping;F.toneMapping=ga;const ve=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),D.setupLightsView(ot),Tt===!0&&Yt.setGlobalState(F.clippingPlanes,ot),ji(w,pt,ot),gt.updateMultisampleRenderTarget(Vt),gt.updateRenderTargetMipmap(Vt),xe.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Re=0,Ee=V.length;Re<Ee;Re++){const Je=V[Re],{object:qe,geometry:yn,material:kt,group:cn}=Je;if(kt.side===Li&&qe.layers.test(ot.layers)){const Ie=kt.side;kt.side=oi,kt.needsUpdate=!0,Kl(qe,pt,ot,yn,kt,cn),kt.side=Ie,kt.needsUpdate=!0,Qt=!0}}Qt===!0&&(gt.updateMultisampleRenderTarget(Vt),gt.updateRenderTargetMipmap(Vt))}F.setRenderTarget(Ht,jt,te),F.setClearColor(z,ht),ve!==void 0&&(ot.viewport=ve),F.toneMapping=fe}function ji(w,V,pt){const ot=V.isScene===!0?V.overrideMaterial:null;for(let ut=0,Vt=w.length;ut<Vt;ut++){const Zt=w[ut],{object:Ht,geometry:jt,group:te}=Zt;let fe=Zt.material;fe.allowOverride===!0&&ot!==null&&(fe=ot),Ht.layers.test(pt.layers)&&Kl(Ht,V,pt,jt,fe,te)}}function Kl(w,V,pt,ot,ut,Vt){H!==null&&ut.isNodeMaterial&&H.setObject(w,ut),w.onBeforeRender(F,V,pt,ot,ut,Vt),w.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ut.onBeforeRender(F,V,pt,ot,w,Vt),ut.transparent===!0&&ut.side===Li&&ut.forceSinglePass===!1?(ut.side=oi,ut.needsUpdate=!0,F.renderBufferDirect(pt,V,ot,ut,w,Vt),ut.side=cs,ut.needsUpdate=!0,F.renderBufferDirect(pt,V,ot,ut,w,Vt),ut.side=Li):F.renderBufferDirect(pt,V,ot,ut,w,Vt),w.onAfterRender(F,V,pt,ot,ut,Vt)}function zr(w,V,pt){V.isScene!==!0&&(V=Me);const ot=rt.get(w),ut=D.state.lights,Vt=D.state.shadowsArray,Zt=ut.state.version,Ht=Ot.getParameters(w,ut.state,Vt,V,pt,D.state.lightProbeGridArray),jt=Ot.getProgramCacheKey(Ht);let te=ot.programs;ot.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,ot.fog=V.fog;const fe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ot.envMap=At.get(w.envMap||ot.environment,fe),ot.envMapRotation=ot.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,te===void 0&&(w.addEventListener("dispose",yi),te=new Map,ot.programs=te);let ve=te.get(jt);if(ve!==void 0){if(ot.currentProgram===ve&&ot.lightsStateVersion===Zt)return Ro(w,Ht),ve}else Ht.uniforms=Ot.getUniforms(w),H!==null&&w.isNodeMaterial&&H.build(w,pt,Ht),w.onBeforeCompile(Ht,F),ve=Ot.acquireProgram(Ht,jt),te.set(jt,ve),ot.uniforms=Ht.uniforms;const Qt=ot.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Qt.clippingPlanes=Yt.uniform),Ro(w,Ht),ot.needsLights=Ql(w),ot.lightsStateVersion=Zt,ot.needsLights&&(Qt.ambientLightColor.value=ut.state.ambient,Qt.lightProbe.value=ut.state.probe,Qt.sunLights.value=ut.state.sun,Qt.sunLightShadows.value=ut.state.sunShadow,Qt.directionalLights.value=ut.state.directional,Qt.directionalLightShadows.value=ut.state.directionalShadow,Qt.spotLights.value=ut.state.spot,Qt.spotLightShadows.value=ut.state.spotShadow,Qt.rectAreaLights.value=ut.state.rectArea,Qt.ltc_1.value=ut.state.rectAreaLTC1,Qt.ltc_2.value=ut.state.rectAreaLTC2,Qt.pointLights.value=ut.state.point,Qt.pointLightShadows.value=ut.state.pointShadow,Qt.hemisphereLights.value=ut.state.hemi,Qt.sunShadowMatrix.value=ut.state.sunShadowMatrix,Qt.sunShadowCascade.value=ut.state.sunShadowCascade,Qt.directionalShadowMatrix.value=ut.state.directionalShadowMatrix,Qt.spotLightMatrix.value=ut.state.spotLightMatrix,Qt.spotLightMap.value=ut.state.spotLightMap,Qt.pointShadowMatrix.value=ut.state.pointShadowMatrix),ot.lightProbeGrid=D.state.lightProbeGridArray.length>0,ot.currentProgram=ve,ot.uniformsList=null,ve}function wo(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=Qc.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Ro(w,V){const pt=rt.get(w);pt.outputColorSpace=V.outputColorSpace,pt.batching=V.batching,pt.batchingColor=V.batchingColor,pt.instancing=V.instancing,pt.instancingColor=V.instancingColor,pt.instancingMorph=V.instancingMorph,pt.skinning=V.skinning,pt.morphTargets=V.morphTargets,pt.morphNormals=V.morphNormals,pt.morphColors=V.morphColors,pt.morphTargetsCount=V.morphTargetsCount,pt.numClippingPlanes=V.numClippingPlanes,pt.numIntersection=V.numClipIntersection,pt.vertexAlphas=V.vertexAlphas,pt.vertexTangents=V.vertexTangents,pt.toneMapping=V.toneMapping}function Co(w,V){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;C.setFromMatrixPosition(V.matrixWorld);for(let pt=0,ot=w.length;pt<ot;pt++){const ut=w[pt];if(ut.texture!==null&&ut.boundingBox.containsPoint(C))return ut}return null}function Do(w,V,pt,ot,ut){V.isScene!==!0&&(V=Me),gt.resetTextureUnits();const Vt=V.fog,Zt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?V.environment:null,Ht=lt===null?F.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Be.workingColorSpace,jt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,te=At.get(ot.envMap||Zt,jt),fe=ot.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,ve=!!pt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Qt=!!pt.morphAttributes.position,Re=!!pt.morphAttributes.normal,Ee=!!pt.morphAttributes.color;let Je=ga;ot.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Je=F.toneMapping);const qe=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,yn=qe!==void 0?qe.length:0,kt=rt.get(ot),cn=D.state.lights;if(Tt===!0&&(Dt===!0||w!==mt)){const Ue=w===mt&&ot.id===at;Yt.setState(ot,w,Ue)}let Ie=!1;ot.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==cn.state.version||kt.outputColorSpace!==Ht||ut.isBatchedMesh&&kt.batching===!1||!ut.isBatchedMesh&&kt.batching===!0||ut.isBatchedMesh&&kt.batchingColor===!0&&ut._colorsTexture===null||ut.isBatchedMesh&&kt.batchingColor===!1&&ut._colorsTexture!==null||ut.isInstancedMesh&&kt.instancing===!1||!ut.isInstancedMesh&&kt.instancing===!0||ut.isSkinnedMesh&&kt.skinning===!1||!ut.isSkinnedMesh&&kt.skinning===!0||ut.isInstancedMesh&&kt.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&kt.instancingColor===!1&&ut.instanceColor!==null||ut.isInstancedMesh&&kt.instancingMorph===!0&&ut.morphTexture===null||ut.isInstancedMesh&&kt.instancingMorph===!1&&ut.morphTexture!==null||kt.envMap!==te||ot.fog===!0&&kt.fog!==Vt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Yt.numPlanes||kt.numIntersection!==Yt.numIntersection)||kt.vertexAlphas!==fe||kt.vertexTangents!==ve||kt.morphTargets!==Qt||kt.morphNormals!==Re||kt.morphColors!==Ee||kt.toneMapping!==Je||kt.morphTargetsCount!==yn||!!kt.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Ie=!0):(Ie=!0,kt.__version=ot.version);let qn=kt.currentProgram;Ie===!0&&(qn=zr(ot,V,ut),H&&ot.isNodeMaterial&&H.onUpdateProgram(ot,qn,kt));let ui=!1,$i=!1,Te=!1;const Ve=qn.getUniforms(),en=kt.uniforms;if(T.useProgram(qn.program)&&(ui=!0,$i=!0,Te=!0),ot.id!==at&&(at=ot.id,$i=!0),kt.needsLights){const Ue=Co(D.state.lightProbeGridArray,ut);kt.lightProbeGrid!==Ue&&(kt.lightProbeGrid=Ue,$i=!0)}if(ui||mt!==w){T.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ve.setValue(q,"projectionMatrix",w.projectionMatrix),Ve.setValue(q,"viewMatrix",w.matrixWorldInverse);const fn=Ve.map.cameraPosition;fn!==void 0&&fn.setValue(q,$t.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&Ve.setValue(q,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ve.setValue(q,"isOrthographic",w.isOrthographicCamera===!0),mt!==w&&(mt=w,$i=!0,Te=!0)}if(kt.needsLights&&(cn.state.sunShadowMap.length>0&&Ve.setValue(q,"sunShadowMap",cn.state.sunShadowMap,gt),cn.state.directionalShadowMap.length>0&&Ve.setValue(q,"directionalShadowMap",cn.state.directionalShadowMap,gt),cn.state.spotShadowMap.length>0&&Ve.setValue(q,"spotShadowMap",cn.state.spotShadowMap,gt),cn.state.pointShadowMap.length>0&&Ve.setValue(q,"pointShadowMap",cn.state.pointShadowMap,gt)),ut.isSkinnedMesh){Ve.setOptional(q,ut,"bindMatrix"),Ve.setOptional(q,ut,"bindMatrixInverse");const Ue=ut.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Ve.setValue(q,"boneTexture",Ue.boneTexture,gt))}ut.isBatchedMesh&&(Ve.setOptional(q,ut,"batchingTexture"),Ve.setValue(q,"batchingTexture",ut._matricesTexture,gt),Ve.setOptional(q,ut,"batchingIdTexture"),Ve.setValue(q,"batchingIdTexture",ut._indirectTexture,gt),Ve.setOptional(q,ut,"batchingColorTexture"),ut._colorsTexture!==null&&Ve.setValue(q,"batchingColorTexture",ut._colorsTexture,gt));const ci=pt.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&J.update(ut,pt,qn),($i||kt.receiveShadow!==ut.receiveShadow)&&(kt.receiveShadow=ut.receiveShadow,Ve.setValue(q,"receiveShadow",ut.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&V.environment!==null&&(en.envMapIntensity.value=V.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=oR()),$i){if(Ve.setValue(q,"toneMappingExposure",F.toneMappingExposure),kt.needsLights&&Zl(en,Te),Vt&&ot.fog===!0&&ne.refreshFogUniforms(en,Vt),ne.refreshMaterialUniforms(en,ot,ft,K,D.state.transmissionRenderTarget[w.id]),kt.needsLights&&kt.lightProbeGrid){const Ue=kt.lightProbeGrid;en.probesSH.value=Ue.texture,en.probesMin.value.copy(Ue.boundingBox.min),en.probesMax.value.copy(Ue.boundingBox.max),en.probesResolution.value.copy(Ue.resolution)}Qc.upload(q,wo(kt),en,gt)}if(ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Qc.upload(q,wo(kt),en,gt),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ve.setValue(q,"center",ut.center),Ve.setValue(q,"modelViewMatrix",ut.modelViewMatrix),Ve.setValue(q,"normalMatrix",ut.normalMatrix),Ve.setValue(q,"modelMatrix",ut.matrixWorld),ot.uniformsGroups!==void 0){const Ue=ot.uniformsGroups;for(let fn=0,ya=Ue.length;fn<ya;fn++){const Jl=Ue[fn];Ct.update(Jl,qn),Ct.bind(Jl,qn)}}return qn}function Zl(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.sunLights.needsUpdate=V,w.sunLightShadows.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function Ql(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return lt},this.setRenderTargetTextures=function(w,V,pt){const ot=rt.get(w);ot.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),rt.get(w.texture).__webglTexture=V,rt.get(w.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:pt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){const pt=rt.get(w);pt.__webglFramebuffer=V,pt.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,pt=0){lt=w,W=V,Y=pt;let ot=null,ut=!1,Vt=!1;if(w){const Ht=rt.get(w);if(Ht.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(q.FRAMEBUFFER,Ht.__webglFramebuffer),bt.copy(w.viewport),Kt.copy(w.scissor),_t=w.scissorTest,T.viewport(bt),T.scissor(Kt),T.setScissorTest(_t),at=-1;return}else if(Ht.__webglFramebuffer===void 0)gt.setupRenderTarget(w);else if(Ht.__hasExternalTextures)gt.rebindTextures(w,rt.get(w.texture).__webglTexture,rt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const fe=w.depthTexture;if(Ht.__boundDepthTexture!==fe){if(fe!==null&&rt.has(fe)&&(w.width!==fe.image.width||w.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(w)}}const jt=w.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Vt=!0);const te=rt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(te[V])?ot=te[V][pt]:ot=te[V],ut=!0):w.samples>0&&gt.useMultisampledRTT(w)===!1?ot=rt.get(w).__webglMultisampledFramebuffer:Array.isArray(te)?ot=te[pt]:ot=te,bt.copy(w.viewport),Kt.copy(w.scissor),_t=w.scissorTest}else bt.copy(tt).multiplyScalar(ft).floor(),Kt.copy(Ut).multiplyScalar(ft).floor(),_t=_e;if(pt!==0&&(ot=j),T.bindFramebuffer(q.FRAMEBUFFER,ot)&&T.drawBuffers(w,ot),T.viewport(bt),T.scissor(Kt),T.setScissorTest(_t),ut){const Ht=rt.get(w.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ht.__webglTexture,pt)}else if(Vt){const Ht=V;for(let jt=0;jt<w.textures.length;jt++){const te=rt.get(w.textures[jt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+jt,te.__webglTexture,pt,Ht)}}else if(w!==null&&pt!==0){const Ht=rt.get(w.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ht.__webglTexture,pt)}at=-1};function Mi(w){const V=rt.get(w);return(V.__readFormat!==w.format||V.__readType!==w.type)&&(V.__readFormat=w.format,V.__readType=w.type,V.__formatReadable=P.textureFormatReadable(w.format),V.__typeReadable=P.textureTypeReadable(w.type)),V}this.readRenderTargetPixels=function(w,V,pt,ot,ut,Vt,Zt,Ht=0){if(!(w&&w.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Zt!==void 0&&(jt=jt[Zt]),jt){T.bindFramebuffer(q.FRAMEBUFFER,jt);try{const te=w.textures[Ht],fe=te.format,ve=te.type;w.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ht);const Qt=Mi(te);if(Qt.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qt.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-ot&&pt>=0&&pt<=w.height-ut&&q.readPixels(V,pt,ot,ut,Ft.convert(fe),Ft.convert(ve),Vt)}finally{const te=lt!==null?rt.get(lt).__webglFramebuffer:null;T.bindFramebuffer(q.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(w,V,pt,ot,ut,Vt,Zt,Ht=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Zt!==void 0&&(jt=jt[Zt]),jt)if(V>=0&&V<=w.width-ot&&pt>=0&&pt<=w.height-ut){T.bindFramebuffer(q.FRAMEBUFFER,jt);const te=w.textures[Ht],fe=te.format,ve=te.type;w.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ht);const Qt=Mi(te);if(Qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Re),q.bufferData(q.PIXEL_PACK_BUFFER,Vt.byteLength,q.STREAM_READ),q.readPixels(V,pt,ot,ut,Ft.convert(fe),Ft.convert(ve),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const Ee=lt!==null?rt.get(lt).__webglFramebuffer:null;T.bindFramebuffer(q.FRAMEBUFFER,Ee);const Je=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await iE(q,Je,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Re),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Vt),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Re),q.deleteSync(Je),Vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,pt=0){const ot=Math.pow(2,-pt),ut=Math.floor(w.image.width*ot),Vt=Math.floor(w.image.height*ot),Zt=V!==null?V.x:0,Ht=V!==null?V.y:0;gt.setTexture2D(w,0),q.copyTexSubImage2D(q.TEXTURE_2D,pt,0,0,Zt,Ht,ut,Vt),T.unbindTexture()},this.copyTextureToTexture=function(w,V,pt=null,ot=null,ut=0,Vt=0){let Zt,Ht,jt,te,fe,ve,Qt,Re,Ee;const Je=w.isCompressedTexture?w.mipmaps[Vt]:w.image;if(pt!==null)Zt=pt.max.x-pt.min.x,Ht=pt.max.y-pt.min.y,jt=pt.isBox3?pt.max.z-pt.min.z:1,te=pt.min.x,fe=pt.min.y,ve=pt.isBox3?pt.min.z:0;else{const en=Math.pow(2,-ut);Zt=Math.floor(Je.width*en),Ht=Math.floor(Je.height*en),w.isDataArrayTexture?jt=Je.depth:w.isData3DTexture?jt=Math.floor(Je.depth*en):jt=1,te=0,fe=0,ve=0}ot!==null?(Qt=ot.x,Re=ot.y,Ee=ot.z):(Qt=0,Re=0,Ee=0);const qe=Ft.convert(V.format),yn=Ft.convert(V.type);let kt;V.isData3DTexture?(gt.setTexture3D(V,0),kt=q.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(gt.setTexture2DArray(V,0),kt=q.TEXTURE_2D_ARRAY):(gt.setTexture2D(V,0),kt=q.TEXTURE_2D),T.activeTexture(q.TEXTURE0),T.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,V.flipY),T.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),T.pixelStorei(q.UNPACK_ALIGNMENT,V.unpackAlignment);const cn=T.getParameter(q.UNPACK_ROW_LENGTH),Ie=T.getParameter(q.UNPACK_IMAGE_HEIGHT),qn=T.getParameter(q.UNPACK_SKIP_PIXELS),ui=T.getParameter(q.UNPACK_SKIP_ROWS),$i=T.getParameter(q.UNPACK_SKIP_IMAGES);T.pixelStorei(q.UNPACK_ROW_LENGTH,Je.width),T.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Je.height),T.pixelStorei(q.UNPACK_SKIP_PIXELS,te),T.pixelStorei(q.UNPACK_SKIP_ROWS,fe),T.pixelStorei(q.UNPACK_SKIP_IMAGES,ve);const Te=w.isDataArrayTexture||w.isData3DTexture,Ve=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){const en=rt.get(w),ci=rt.get(V),Ue=rt.get(en.__renderTarget),fn=rt.get(ci.__renderTarget);T.bindFramebuffer(q.READ_FRAMEBUFFER,Ue.__webglFramebuffer),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,fn.__webglFramebuffer);for(let ya=0;ya<jt;ya++)Te&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,rt.get(w).__webglTexture,ut,ve+ya),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,rt.get(V).__webglTexture,Vt,Ee+ya)),q.blitFramebuffer(te,fe,Zt,Ht,Qt,Re,Zt,Ht,q.DEPTH_BUFFER_BIT,q.NEAREST);T.bindFramebuffer(q.READ_FRAMEBUFFER,null),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ut!==0||w.isRenderTargetTexture||rt.has(w)){const en=rt.get(w),ci=rt.get(V);T.bindFramebuffer(q.READ_FRAMEBUFFER,Z),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,Q);for(let Ue=0;Ue<jt;Ue++)Te?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,en.__webglTexture,ut,ve+Ue):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,en.__webglTexture,ut),Ve?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ci.__webglTexture,Vt,Ee+Ue):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ci.__webglTexture,Vt),ut!==0?q.blitFramebuffer(te,fe,Zt,Ht,Qt,Re,Zt,Ht,q.COLOR_BUFFER_BIT,q.NEAREST):Ve?q.copyTexSubImage3D(kt,Vt,Qt,Re,Ee+Ue,te,fe,Zt,Ht):q.copyTexSubImage2D(kt,Vt,Qt,Re,te,fe,Zt,Ht);T.bindFramebuffer(q.READ_FRAMEBUFFER,null),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ve?w.isDataTexture||w.isData3DTexture?q.texSubImage3D(kt,Vt,Qt,Re,Ee,Zt,Ht,jt,qe,yn,Je.data):V.isCompressedArrayTexture?q.compressedTexSubImage3D(kt,Vt,Qt,Re,Ee,Zt,Ht,jt,qe,Je.data):q.texSubImage3D(kt,Vt,Qt,Re,Ee,Zt,Ht,jt,qe,yn,Je):w.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Vt,Qt,Re,Zt,Ht,qe,yn,Je.data):w.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Vt,Qt,Re,Je.width,Je.height,qe,Je.data):q.texSubImage2D(q.TEXTURE_2D,Vt,Qt,Re,Zt,Ht,qe,yn,Je);T.pixelStorei(q.UNPACK_ROW_LENGTH,cn),T.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ie),T.pixelStorei(q.UNPACK_SKIP_PIXELS,qn),T.pixelStorei(q.UNPACK_SKIP_ROWS,ui),T.pixelStorei(q.UNPACK_SKIP_IMAGES,$i),Vt===0&&V.generateMipmaps&&q.generateMipmap(kt),T.unbindTexture()},this.initRenderTarget=function(w){rt.get(w).__webglFramebuffer===void 0&&gt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?gt.setTextureCube(w,0):w.isData3DTexture?gt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?gt.setTexture2DArray(w,0):gt.setTexture2D(w,0),T.unbindTexture()},this.resetState=function(){W=0,Y=0,lt=null,T.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Be._getDrawingBufferColorSpace(t),i.unpackColorSpace=Be._getUnpackColorSpace()}}const uR="/scale-tour/tex/",Jc={ceres:{type:"planet",tex:"ceres",hi:!0,spin:.03},makemake:{type:"planet",tex:"makemake",hi:!0,spin:.03},pluto:{type:"planet",tex:"pluto",hi:!0,atmo:[.55,.7,1,.22],lean:.5,spin:.02},europa:{type:"planet",tex:"europa",spin:.02},titan:{type:"planet",tex:"titan",atmo:[1,.66,.3,1.25],atmoScale:1.06,spin:.015},kepler22b:{type:"planet",tex:"kepler22b",atmo:[.45,.75,1,.9],tilt:.3,spin:.03},moon:{type:"planet",tex:"moon",hi:!0,spin:.02},mercury:{type:"planet",tex:"mercury",hi:!0,spin:.02},mars:{type:"planet",tex:"mars",hi:!0,atmo:[.9,.55,.4,.35],tilt:.44,spin:.03},venus:{type:"planet",tex:"venus",hi:!0,atmo:[1,.9,.7,.5],spin:.01},earth:{type:"planet",tex:"earth",hi:!0,clouds:!0,atmo:[.35,.6,1,1],tilt:.41,spin:.03},neptune:{type:"planet",tex:"neptune",atmo:[.4,.55,1,.8],tilt:.49,spin:.03},uranus:{type:"planet",tex:"uranus",atmo:[.6,.9,.95,.8],tilt:1.7,spin:.03},saturn:{type:"planet",tex:"saturn",hi:!0,ring:!0,atmo:[.95,.85,.6,.3],tilt:.47,spin:.04},jupiter:{type:"planet",tex:"jupiter",hi:!0,atmo:[.95,.8,.6,.3],tilt:.05,spin:.04},sun:{type:"star",scale:10,contrast:.3,speck:.5,spots:5,spotSize:.03,active:3,actSize:.07,glow:.9,flame:.6,proms:[[.55,-1.45,.22,.16,1.45],[-.45,1.5,.16,.12,1.85],[.1,1.55,.11,.08,1.85]]},sirius:{type:"star",scale:7,contrast:.16,speck:.3,spots:0,spotSize:0,active:2,actSize:.06,glow:1,flame:.4,proms:[[.4,-1.5,.12,.08,1.65]]},pollux:{type:"star",scale:4.5,contrast:.45,speck:.5,spots:0,spotSize:0,active:3,actSize:.08,glow:.95,flame:.7,proms:[[.5,-1.45,.3,.22,1.45],[-.5,1.45,.24,.18,1.65]]},arcturus:{type:"star",scale:4.2,contrast:.45,speck:.5,spots:0,spotSize:0,active:3,actSize:.08,glow:.95,flame:.7,proms:[[.6,-1.5,.32,.24,1.75],[-.4,1.5,.27,.2,1.55]]},aldebaran:{type:"star",scale:4,contrast:.5,speck:.5,spots:0,spotSize:0,active:3,actSize:.09,glow:.95,flame:.75,proms:[[.55,-1.45,.38,.28,1.55],[-.5,1.5,.32,.24,1.75]]},rigel:{type:"star",scale:7,contrast:.16,speck:.3,spots:0,spotSize:0,active:2,actSize:.06,glow:1.05,flame:.4,proms:[[-.4,1.5,.12,.08,1.85]]},antares:{type:"star",scale:3.4,contrast:.55,speck:.45,spots:0,spotSize:0,active:3,actSize:.1,glow:.95,flame:.85,proms:[[.6,-1.45,.51,.38,1.45],[-.55,1.5,.46,.34,1.65],[.05,1.55,.27,.2,1.65]]},betelgeuse:{type:"star",scale:5,contrast:.45,speck:.55,spots:0,spotSize:0,active:4,actSize:.15,glow:1,flame:.9,proms:[[.62,-1.42,.57,.42,1.8],[-.6,1.48,.51,.38,1.75]]},uyscuti:{type:"star",scale:3.3,contrast:.55,speck:.45,spots:0,spotSize:0,active:3,actSize:.1,glow:.95,flame:.85,proms:[[.5,-1.5,.54,.4,1.55],[-.6,1.45,.49,.36,1.65],[-.1,-1.55,.3,.22,1.65]]},elnath:{type:"star",scale:7,contrast:.16,speck:.3,spots:0,spotSize:0,active:2,actSize:.06,glow:1,flame:.4},aludra:{type:"star",scale:6,contrast:.2,speck:.35,spots:0,spotSize:0,active:3,actSize:.07,glow:1.05,flame:.5},pistol:{type:"star",scale:5.5,contrast:.24,speck:.35,spots:0,spotSize:0,active:3,actSize:.08,glow:1.1,flame:.6},vycma:{type:"star",scale:3.2,contrast:.58,speck:.45,spots:0,spotSize:0,active:4,actSize:.12,glow:1,flame:.95},st218:{type:"star",scale:3,contrast:.6,speck:.45,spots:0,spotSize:0,active:4,actSize:.12,glow:1,flame:.95},sgra:{type:"bh",disk:[2.6,5.2],hot:[.82,.9,1],cool:[.3,.45,.95],ring:[.82,.9,1],gain:.4,quasar:0,tilt:.2,roll:-.12},s5:{type:"bh",disk:[2.6,6],hot:[1,.94,.84],cool:[.95,.6,.32],ring:[1,.92,.8],gain:1,quasar:.5,tilt:.28,roll:.1},ton618:{type:"bh",disk:[2.6,6.2],hot:[1,.72,.34],cool:[1,.3,.02],ring:[1,.8,.5],gain:1.5,quasar:1.1,tilt:.16,roll:-.08},heliosphere:{type:"proc",kind:"heliosphere"},oort:{type:"proc",kind:"oort"},helix:{type:"image",src:"helix.webp",fill:.6,aspect:1,mask:[.48,.48],sat:.95,gain:1},pillars:{type:"image",src:"pillars.webp",fill:1.1,aspect:2560/2053,mask:[.47,.48],sat:.9,gain:.95},horsehead:{type:"image",src:"horsehead.webp",fill:.9,aspect:2560/2449,mask:[.48,.48],sat:.95,gain:1},orion:{type:"image",src:"orion.webp",fill:1,aspect:1,mask:[.5,.5],sat:.85,gain:.95},omega:{type:"image",src:"omega.webp",fill:.62,aspect:1,mask:[.46,.46],sat:.8,gain:1.05},segue2:{type:"proc",kind:"dwarf"},tarantula:{type:"image",src:"tarantula.webp",fill:1,aspect:2048/2560,mask:[.49,.47],sat:.9,gain:1},m64:{type:"image",src:"m64.webp",fill:.82,aspect:2560/2422,mask:[.48,.48],sat:.95,gain:1.05},milkyway:{type:"galaxy",arms:2,pitch:.24,bar:1,bulge:.15,dust:1.15,seed:3.1,floc:.55,clump:1,ring:0,tilt:-.95,pa:.5},andromeda:{type:"galaxy",arms:2,pitch:.12,bar:0,bulge:.2,dust:1.25,seed:7.7,floc:.6,clump:.9,ring:.8,tilt:-1.34,pa:-.62,pal:{gold:[1,.9,.74],grey:[.66,.6,.96],blue:[.72,.62,1],dust:[.5,.2,.12],knot:[1,.42,.78],warm:[1,.8,.62],warmR:.6,knotAmt:1,gain:1.7},sats:[[.2,.3,.035,.03,0,1.6],[-.42,-.55,.11,.065,.9,.9]],field:1},ic1101:{type:"proc",kind:"elliptical"},virgo:{type:"proc",kind:"supercluster"},laniakea:{type:"proc",kind:"laniakea"},universe:{type:"proc",kind:"universe"}},Ul={saturn:2.3,sgra:5.6,s5:6.2,ton618:6.4,segue2:1.4,ic1101:1.6},TS={sgra:4,s5:4.4,ton618:4.6};function Ay(o){let t=o>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)%1e6/1e6)}const Tr=o=>Math.sqrt(-2*Math.log(o()+1e-9))*Math.cos(2*Math.PI*o()),Ur=`
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
`;function Pi(o){return o.blending=FS,o.blendEquation=ls,o.blendSrc=Fp,o.blendDst=ef,o.blendSrcAlpha=Fp,o.blendDstAlpha=ef,o.premultipliedAlpha=!0,o}const Qi=`vec4 premul(vec3 c, float o){ c *= o; return vec4(c, clamp(max(c.r, max(c.g, c.b)), 0.0, 1.0)); }
`;let cR=null;const jc=()=>cR??=new Zm(1,160,96);let fR=null;const Xa=()=>fR??=new bo(1,1);function $c(o,t){return t.transparent=!0,o.fades.push({material:t,base:t.opacity}),t}const uf=1.1,Dm=2,AS=1.25,wS=2,hR=new aT,zl=new Map;let wy=8;function tf(o,t=!0){let i=zl.get(o);return i||(i=new Promise((r,l)=>{hR.load(uR+o,u=>{t&&(u.colorSpace=Jn),u.anisotropy=wy,u.generateMipmaps=!0,u.minFilter=Nr,r(u)},void 0,l)}),zl.set(o,i)),i}function dR(o,t){const i=new bn,r={group:i,fades:[],dot:o.color},l=new bn;i.add(l),r.rot=l;const u=new bn;u.rotation.z=-(t.tilt??0),u.rotation.x=t.lean??.18,l.add(u);const h=$c(r,new Ep({color:new Pe(o.color),roughness:1,metalness:0})),d=new sn(jc(),h);u.add(d);let p=null,m=null;if(t.clouds&&(m=$c(r,new Ep({color:16777215,roughness:1,opacity:0,depthWrite:!1})),p=new sn(jc(),m),p.scale.setScalar(1.006),u.add(p)),t.atmo){const[_,g,x,y]=t.atmo,A=Pi(new on({uniforms:{uColor:{value:new k(_,g,x)},uStrength:{value:y},opacity:{value:1},uLight:{value:new k(-.55,.45,.7).normalize()}},vertexShader:"varying vec3 vN; void main(){ vN = normalize(normalMatrix*normal); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Qi+`uniform vec3 uColor; uniform float uStrength; uniform float opacity; uniform vec3 uLight; varying vec3 vN;
        void main(){ float mu = dot(normalize(vN), vec3(0.,0.,1.)); float rim = pow(1.0 - clamp(mu,0.,1.), 3.0);
          float lit = 0.14 + 0.86*smoothstep(-0.25, 0.6, dot(normalize(vN), uLight)); // faint rim survives on the night side
          gl_FragColor = premul(uColor * rim * lit * uStrength * 1.4, opacity); }`,depthWrite:!1,transparent:!0}));r.fades.push({material:A,base:1});const b=new sn(jc(),A);b.scale.setScalar(t.atmoScale??1.035),i.add(b)}if(t.ring){const x=new Km(1.24,2.27,256,1),y=x.attributes.position,A=x.attributes.uv;for(let L=0;L<y.count;L++){const I=Math.hypot(y.getX(L),y.getY(L));A.setXY(L,(I-1.24)/(2.27-1.24),.5)}const b=$c(r,new Ep({color:16777215,side:Li,roughness:1,depthWrite:!1,opacity:1,alphaTest:.01}));tf("ring.webp").then(L=>{b.map=L,b.needsUpdate=!0});const M=new sn(x,b);M.rotation.x=-Math.PI/2,u.add(M),u.rotation.x=.42}let v=0;return r.wantTex=_=>{const g=_&&t.hi?2:1;if(v>=g)return;v=g;const x=`${t.tex}_${g===2?"4k":"2k"}.webp`;tf(x).then(y=>{h.map=y,h.color.set(16777215),h.needsUpdate=!0}),m&&tf(`clouds_${g===2?"4k":"2k"}.webp`,!1).then(y=>{m.alphaMap=y,m.opacity=.9,r.fades.find(A=>A.material===m).base=.9,m.needsUpdate=!0})},r.update=(_,g,x,y,A)=>{y||(d.rotation.y+=g*(t.spin??.03)*uf*Dm*AS*A,p&&(p.rotation.y+=g*(t.spin??.03)*uf*Dm*AS*(.25+1*A)))},r}const Lp={sun:[44,.45,.6],sirius:[48,.55,.62],rigel:[46,.55,.62],pollux:[30,.3,.75],arcturus:[30,.3,.75],aldebaran:[28,.3,.78],antares:[17,.2,.88],betelgeuse:[16,.18,.9],uyscuti:[16,.2,.88],elnath:[46,.55,.62],aludra:[40,.5,.66],pistol:[36,.45,.7],vycma:[15,.2,.9],st218:[14,.2,.9]},RS={sun:{deep:[.92,.3,.03],mid:[1,.72,.26],bright:[1,.88,.5],hot:[1,.97,.86],prom:[.95,.3,.08],glow:[1,.36,.08]},sirius:{deep:[.14,.36,1],mid:[.5,.74,1],bright:[.86,.97,1],hot:[.97,1,1],prom:[.45,.6,1],glow:[.1,.5,1]},pollux:{deep:[.6,.17,.03],mid:[1,.5,.09],bright:[1,.76,.3],hot:[1,.95,.78],prom:[.8,.18,.04]},arcturus:{deep:[.6,.15,.03],mid:[1,.47,.08],bright:[1,.73,.27],hot:[1,.94,.76],prom:[.78,.16,.04]},aldebaran:{deep:[.55,.1,.02],mid:[1,.38,.06],bright:[1,.64,.2],hot:[1,.92,.7],prom:[.72,.12,.03]},rigel:{deep:[.16,.34,.98],mid:[.5,.7,1],bright:[.84,.94,1],hot:[.97,1,1],prom:[.45,.58,1],glow:[.12,.48,1]},antares:{deep:[.42,.04,.02],mid:[.9,.2,.04],bright:[1,.46,.12],hot:[1,.82,.55],prom:[.6,.06,.02]},betelgeuse:{deep:[.8,.26,.03],mid:[1,.54,.09],bright:[1,.82,.32],hot:[1,.95,.72],prom:[.7,.1,.03]},uyscuti:{deep:[.5,.07,.02],mid:[.96,.3,.04],bright:[1,.58,.14],hot:[1,.88,.62],prom:[.62,.08,.02]},elnath:{deep:[.2,.42,1],mid:[.55,.76,1],bright:[.88,.96,1],hot:[.97,1,1],prom:[.5,.64,1],glow:[.15,.52,1]},aludra:{deep:[.18,.38,1],mid:[.52,.72,1],bright:[.86,.95,1],hot:[.97,1,1],prom:[.45,.6,1],glow:[.12,.5,1]},pistol:{deep:[.12,.3,.95],mid:[.45,.66,1],bright:[.82,.92,1],hot:[.96,.99,1],prom:[.4,.55,1],glow:[.1,.42,1]},vycma:{deep:[.45,.05,.02],mid:[.92,.24,.05],bright:[1,.5,.13],hot:[1,.84,.58],prom:[.62,.07,.02]},st218:{deep:[.4,.03,.02],mid:[.86,.18,.04],bright:[1,.42,.1],hot:[1,.78,.5],prom:[.58,.05,.02]}},pR={sun:[6,.24,.19],sirius:[6,.24,.2],rigel:[6,.26,.21],pollux:[4,.3,.22],arcturus:[4,.32,.24],aldebaran:[4,.36,.27],antares:[5,.55,.42],betelgeuse:[5,.6,.46],uyscuti:[5,.55,.42],elnath:[6,.24,.2],aludra:[6,.26,.21],pistol:[6,.32,.26],vycma:[5,.6,.46],st218:[5,.62,.48]},mR=`
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
}`,gR=`
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
}`,vR=`
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
}`,_R=`
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
}`;function xR(o,t){const i=new bn,r={group:i,fades:[],dot:"#fff"},l=o.tempK??5800,u=RS[o.id]??RS.sun;r.dot=`rgb(${u.bright[0]*255|0},${u.bright[1]*255|0},${u.bright[2]*255|0})`;const h=Ay(l*7+3),d=(_t,z)=>new k(Math.cos(_t)*Math.sin(z),Math.sin(_t),Math.cos(_t)*Math.cos(z)),p=[];let m=0,v=0;for(let _t=0;_t<6;_t++)if(_t<t.spots){const z=_t===0||h()<.45;z?(m=(h()<.5?-1:1)*(.14+h()*.32),v=-.8+h()*1.6):(v-=.03+h()*.11,m+=(h()-.5)*.07);const ht=d(m,v);p.push(new tn(ht.x,ht.y,ht.z,t.spotSize*(z?.8+h()*.6:.35+h()*.35)))}else p.push(new tn(0,0,1,0));const _=[];for(let _t=0;_t<5;_t++)if(_t<t.active){const z=d((h()-.5)*1.1,(h()-.5)*1.8);_.push(new tn(z.x,z.y,z.z,t.actSize*(.7+h()*.6)))}else _.push(new tn(0,0,1,0));const g=_t=>new k(..._t),x={uDeep:{value:g(u.deep)},uMid:{value:g(u.mid)},uBright:{value:g(u.bright)},uHot:{value:g(u.hot)},uTime:{value:0},uScale:{value:t.scale},uContrast:{value:t.contrast},uPx:{value:500},uSeed:{value:l%97*.13},uRim:{value:1},uSpeck:{value:t.speck},uCell:{value:(Lp[o.id]??[30,.3,.75])[0]},uGran:{value:(Lp[o.id]??[30,.3,.75])[1]},uLimbD:{value:(Lp[o.id]??[30,.3,.75])[2]},uSpots:{value:p},uNSpots:{value:t.spots},uAct:{value:_},uNAct:{value:t.active},opacity:{value:1}},y=new on({uniforms:x,vertexShader:`varying vec3 vN; varying vec3 vP;
      void main(){ vN = normalize(normalMatrix*normal); vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,fragmentShader:Ur+mR,transparent:!0,toneMapped:!1,premultipliedAlpha:!0});r.fades.push({material:y,base:1});const A=new bn;i.add(A),r.rot=A;const b=new bn;b.rotation.z=-.12,A.add(b);const M=new sn(jc(),y);M.renderOrder=0,b.add(M);const[L,I,C]=pR[o.id]??[4,.2,.15],U=l>7e3,D=U?1:o.id==="sun"?.6:0,N=1+1.8*D,E=C>.3,O=[],F=new k(0,1,0),G=g(u.hot.map((_t,z)=>_t*.7+u.bright[z]*.3));for(let _t=0;_t<L;_t++){const z=new bn,ht=.7+h()*.6,wt=I*ht,K=C*ht*1.25,ft=new k(-Math.sin(wt/2),Math.cos(wt/2),0),Et=new k(Math.sin(wt/2),Math.cos(wt/2),0),Nt=new k(0,0,1),tt=[],Ut=8;for(let _e=0;_e<Ut;_e++){const oe=_e<2,Tt=[],Dt=K*(oe?.85:.6+.5*h()),Rt=(h()-.5)*wt*(oe?.1:.3),$t=(h()-.5)*K*.6,de=h()*6.28,Me=2+h()*3,ce=(h()-.5)*.5;for(let et=0;et<=48;et++){const rt=et/48,gt=new k().copy(ft).lerp(Et,rt).normalize(),At=Math.sin(Math.PI*rt),Lt=1+Dt*Math.pow(At,.75)*(1+.1*Math.sin(rt*Me*3.1+de)),vt=gt.multiplyScalar(Lt);vt.addScaledVector(Nt,(Rt+$t*At+.05*K*Math.sin(rt*Me*5+de))*At),vt.x+=ce*K*At*At,Tt.push(vt)}const we=new dy(Tt),q=oe?K*(.13+.05*h()):K*(.018+.05*h()*h()),Xe=new Qm(we,96,q,oe?10:7,!1),xe={uColor:{value:g(U?u.prom.map((et,rt)=>et*.55+u.bright[rt]*.45):u.prom)},uHotC:{value:G},opacity:{value:1},uTime:{value:0},uSeed:{value:_t*5.1+_e*1.7},uGrow:{value:1},uDrift:{value:0},uReveal:{value:1.2},uBright:{value:1},uCore:{value:oe?.2:1},uWide:{value:oe?1:0},uSpeed:{value:N}};tt.push(xe);const P=Pi(new on({uniforms:xe,vertexShader:vR,fragmentShader:Qi+Ur+_R,depthWrite:!1,transparent:!0,toneMapped:!1,side:Li}));r.fades.push({material:P,base:1});const T=new sn(Xe,P);T.renderOrder=1,z.add(T)}b.add(z),O.push({g:z,u:tt,t0:0,D:10,erupt:!1,hm:1,gap:0})}const H=new xa,j=new xa,Z=new k,Q=_t=>{const z=h()<(U?.8:.65),ht=h()*Math.PI*2,wt=z?-.12+h()*.35:.3+h()*.6,K=Math.sqrt(1-wt*wt);Z.set(Math.cos(ht)*K,Math.sin(ht)*K,wt),b.getWorldQuaternion(H).invert(),Z.applyQuaternion(H).normalize(),_t.g.quaternion.setFromUnitVectors(F,Z).multiply(j.setFromAxisAngle(F,h()*Math.PI*2))},W=(_t,z,ht)=>{_t.erupt=h()<.14+.16*D;const wt=(1-.5*D)*(E?1.25:1);_t.D=(_t.erupt?10+h()*4:7+h()*4)*wt,_t.hm=_t.erupt?1.2:.75+h()*.45,_t.gap=(1+h()*5)*(1-.5*D)*(E?1.4:1);const K=ht*(_t.D+_t.gap);_t.t0=z-K,Q(_t)};let Y=!1;const lt=(_t,z,ht)=>{let wt=0,K=0,ft=1;const Et=1.2,Nt=tt=>tt*tt*(3-2*tt);if(z<.4){const tt=z/.4;wt=Nt(Math.max(0,(tt-.08)/.92)),ft=1+.6*Math.exp(-Math.pow(tt/.12,2))}else if(z<.6){const tt=(z-.4)/.2;wt=1+.06*Math.sin(tt*Math.PI),ft=1+.45*Math.sin(tt*Math.PI)}else{const tt=Math.min(1,(z-.6)/.4);_t.erupt?(wt=1.05,K=1.1*tt*tt*_t.hm*C*6,ft=1.1*(1-Nt(tt))):(wt=1-Nt(tt),ft=1-.25*tt)}D>0&&(ft*=(1+.7*D)*(1+D*(.22*Math.sin(ht*7.3+_t.hm*11)+.14*Math.sin(ht*13.1+_t.D)+.1*Math.sin(ht*23.7))));for(const tt of _t.u)tt.uGrow.value=wt*_t.hm,tt.uReveal.value=Et,tt.uDrift.value=K,tt.uBright.value=ft,tt.uTime.value=ht},at=4.4,mt={uGlow:{value:g(u.glow??u.mid.map((_t,z)=>_t*.75+u.bright[z]*.25))},uHotGlow:{value:g(u.bright.map((_t,z)=>_t*.6+u.hot[z]*.4))},opacity:{value:1},uG:{value:at},uTime:{value:0},uStrength:{value:t.glow},uFlame:{value:t.flame}},bt=Pi(new on({uniforms:mt,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Qi+Ur+gR,depthWrite:!1,depthTest:!1,transparent:!0,toneMapped:!1}));r.fades.push({material:bt,base:1});const Kt=new sn(Xa(),bt);return Kt.scale.set(2*at,2*at,1),Kt.renderOrder=2,i.add(Kt),r.update=(_t,z,ht,wt,K)=>{const ft=wt?0:_t;x.uTime.value=ft,mt.uTime.value=ft;const Et=_t/wS,Nt=ft/wS;Y||(Y=!0,O.forEach(tt=>W(tt,Et,h()))),O.forEach((tt,Ut)=>{if(wt){tt.g.visible=Ut===0,Ut===0&&lt(tt,.12,0);return}const _e=(Et-tt.t0)/tt.D;if(_e>=1){tt.g.visible=!1,(_e-1)*tt.D>tt.gap&&W(tt,Et,0);return}lt(tt,Math.max(0,_e),Nt),tt.g.visible=_e>=0&&(tt.u[0].uGrow.value>.01||tt.u[0].uDrift.value>0)}),x.uPx.value=ht*Gn.dpr,wt||(b.rotation.y+=z*.012*uf*(o.id==="sun"?Dm:1)*K)},r}const SR=`
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
}`,Ry=`
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
`,yR=`
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
}`,MR=`
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
}`,mf="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ";function Vc(o,t,i,r,l,u){const h={opacity:{value:1},uC:{value:new k(...l).multiplyScalar(u)}},d=Pi(new on({uniforms:h,vertexShader:mf,fragmentShader:Qi+"uniform float opacity; uniform vec3 uC; varying vec2 vUv; void main(){ float r = length(vUv-0.5)*2.0; float g = exp(-r*r*4.0)*(1.0 - smoothstep(0.8, 1.0, r)) + exp(-r*18.0)*1.5; gl_FragColor = premul(uC*g, opacity); }",depthWrite:!1,transparent:!0,toneMapped:!1}));o.fades.push({material:d,base:1});const p=new sn(Xa(),d);return p.position.set(t,i,0),p.scale.setScalar(r*2),p}function Nm(o,t,i,r,l,u=[1,.93,.84]){const h={opacity:{value:1},uPx:{value:10},uSeed:{value:i},uKind:{value:t},uBright:{value:r},uAsp:{value:l},uTint:{value:new k(...u)}},d=Pi(new on({uniforms:h,vertexShader:mf,fragmentShader:Qi+Ur+Ry+yR,depthWrite:!1,transparent:!0,toneMapped:!1}));return o.fades.push({material:d,base:1}),{mesh:new sn(Xa(),d),uPx:h.uPx}}function bR(o,t,i){const r={opacity:{value:1},uPx:{value:10},uSeed:{value:i},uSpan:{value:t*2}},l=Pi(new on({uniforms:r,vertexShader:mf,fragmentShader:Qi+Ur+Ry+MR,depthWrite:!1,transparent:!0,toneMapped:!1}));o.fades.push({material:l,base:1});const u=new sn(Xa(),l);return u.scale.setScalar(t*2),u.renderOrder=-1,{mesh:u,uPx:r.uPx}}const ER={gold:[1,.8,.52],grey:[.78,.8,.84],blue:[.7,.82,1],dust:[.42,.26,.13],knot:[1,.55,.6],warm:[.95,.82,.62],warmR:.22,knotAmt:0};function Cy(o,t){const i=new bn,r={group:i,fades:[],dot:"#e9dcc4"},l=t.pal??ER,u=[];if(t.field){const y=bR(r,2.3,t.seed);i.add(y.mesh),u.push({u:y.uPx,k:1})}const h={uTime:{value:0},uArms:{value:t.arms},uPitch:{value:t.pitch},uBar:{value:t.bar},uBulge:{value:t.bulge},uDust:{value:t.dust},uSeed:{value:t.seed},uPx:{value:500},opacity:{value:1},uSpin:{value:0},uFloc:{value:t.floc},uClump:{value:t.clump},uRing:{value:t.ring},uGold:{value:new k(...l.gold)},uGrey:{value:new k(...l.grey)},uBlue:{value:new k(...l.blue)},uDustC:{value:new k(...l.dust)},uKnot:{value:new k(...l.knot)},uWarm:{value:new k(...l.warm)},uWarmR:{value:l.warmR},uKnotAmt:{value:l.knotAmt},uGain:{value:l.gain??1}},d=Pi(new on({uniforms:h,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Qi+Ur+SR,depthWrite:!1,transparent:!0,toneMapped:!1,side:Li}));r.fades.push({material:d,base:1});const p=new bn;i.add(p),r.rot=p;const m=new bn;m.rotation.set(t.tilt,0,t.pa,"ZXY"),p.add(m);const v=new sn(Xa(),d);v.scale.set(2.5,2.5,1),m.add(v);const _={opacity:{value:1}},g=Pi(new on({uniforms:_,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Qi+"uniform float opacity; varying vec2 vUv; void main(){ float r = length(vUv-0.5)*2.0; float g = exp(-r*r*18.0)*0.35 + exp(-r*6.0)*0.08; gl_FragColor = premul(vec3(1.0, 0.82, 0.58)*g, opacity); }",depthWrite:!1,depthTest:!1,transparent:!0,toneMapped:!1}));r.fades.push({material:g,base:1});const x=new sn(Xa(),g);x.scale.set(t.bulge*3.2,t.bulge*3.2,1),x.renderOrder=3,i.add(x);for(const[y,A,b,M,L,I]of t.sats??[]){const C=Nm(r,0,t.seed+y*13,I,M/b);C.mesh.position.set(y,A,0),C.mesh.scale.setScalar(b*2.4),C.mesh.rotation.z=L,C.mesh.renderOrder=2,i.add(C.mesh),u.push({u:C.uPx,k:b})}return r.update=(y,A,b,M,L)=>{h.uPx.value=b*Gn.dpr;for(const I of u)I.u.value=b*I.k*Gn.dpr;M||(h.uSpin.value+=A*.008*uf*L)},r}const TR=`
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
}`;function AR(o,t){const i=new bn,r={group:i,fades:[],dot:o.color},l=new bn;i.add(l),r.rot=l;const u=new bn;u.rotation.set(t.tilt,0,t.roll,"ZXY"),l.add(u);const h=(Ul[o.id]??6)+.6,d={uTime:{value:0},opacity:{value:1},uQ:{value:h},uIn:{value:t.disk[0]},uOut:{value:t.disk[1]},uGain:{value:t.gain},uQuasar:{value:t.quasar},uPx:{value:300},uHot:{value:new k(...t.hot)},uCool:{value:new k(...t.cool)},uRing:{value:new k(...t.ring)},uM:{value:new me}},p=Pi(new on({uniforms:d,vertexShader:mf,fragmentShader:Ur+TR,depthWrite:!1,depthTest:!1,transparent:!0,toneMapped:!1}));r.fades.push({material:p,base:1});const m=new sn(Xa(),p);m.scale.set(2*h,2*h,1),i.add(m);const v=new xa,_=new rn;let g=0;return r.update=(x,y,A,b)=>{b||(g+=y),d.uTime.value=g,d.uPx.value=A*Gn.dpr,v.copy(l.quaternion).multiply(u.quaternion).invert(),d.uM.value.setFromMatrix4(_.makeRotationFromQuaternion(v))},r}function wR(o,t){const i=new bn,r={group:i,fades:[],dot:o.color,flat:!0},l={uMap:{value:null},opacity:{value:1},uMask:{value:new re(...t.mask)},uSat:{value:t.sat??1},uGain:{value:0},uAspect:{value:t.aspect}},u=Pi(new on({uniforms:l,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Qi+`uniform sampler2D uMap; uniform float opacity, uSat, uGain, uAspect; uniform vec2 uMask; varying vec2 vUv;
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
      }`,depthWrite:!1,transparent:!0,toneMapped:!1}));r.fades.push({material:u,base:1});const h=new sn(Xa(),u),d=2/t.fill;h.scale.set(d,d*t.aspect,1),i.add(h);let p=!1;return r.wantTex=()=>{p||(p=!0,tf(t.src).then(m=>{l.uMap.value=m,l.uGain.value=t.gain??1}))},r}function RR(o){const t={opacity:{value:1},uDpr:{value:1},uScale:{value:1}},i=Pi(new on({uniforms:t,vertexShader:`attribute float aSize; attribute vec3 aColor; attribute float aAlpha; uniform float uDpr, uScale; varying vec3 vC; varying float vA;
      void main(){ vC = aColor; vA = aAlpha; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);
        float s = aSize*uDpr*uScale; gl_PointSize = max(s, 1.0); vA *= min(1.0, s*s); }`,fragmentShader:Qi+`uniform float opacity; varying vec3 vC; varying float vA;
      void main(){ vec2 q = gl_PointCoord-0.5; float d = dot(q,q)*4.0; float a = exp(-d*3.2); if (a < 0.01) discard; gl_FragColor = premul(vC*a*vA, opacity); }`,depthWrite:!1,transparent:!0,toneMapped:!1}));return o.fades.push({material:i,base:1}),{m:i,u:t}}function CR(o,t){const i=t.length,r=new Float32Array(i*3),l=new Float32Array(i),u=new Float32Array(i*3),h=new Float32Array(i);t.forEach((_,g)=>{r[g*3]=_.x,r[g*3+1]=_.y,r[g*3+2]=0,l[g]=_.s,u.set(_.c,g*3),h[g]=_.a});const d=new Xn;d.setAttribute("position",new si(r,3)),d.setAttribute("aSize",new si(l,1)),d.setAttribute("aColor",new si(u,3)),d.setAttribute("aAlpha",new si(h,1));const{m:p,u:m}=RR(o),v=new NE(d,p);return v.frustumCulled=!1,{points:v,u:m}}function Cl(o,t,i,r){const l=new Xn;l.setAttribute("position",new si(new Float32Array(t),3));const u=$c(o,new uy({color:i,opacity:r,depthWrite:!1,toneMapped:!1})),h=new CE(l,u);return h.frustumCulled=!1,h}function vo(o,t,i){const r={opacity:{value:1},uC:{value:new k(...t)},uRim:{value:i.rim},uRimW:{value:i.rimW},uFill:{value:i.fill},uInner:{value:i.inner??0},uDash:{value:i.dash??0},uNoise:{value:i.noise??0},uOff:{value:i.offset??0}},l=Pi(new on({uniforms:r,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Qi+Ur+`uniform float opacity, uRim, uRimW, uFill, uInner, uDash, uNoise, uOff; uniform vec3 uC; varying vec2 vUv;
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
      }`,depthWrite:!1,transparent:!0,toneMapped:!1}));o.fades.push({material:l,base:1});const u=new sn(Xa(),l);return u.scale.set(2.4,2.4,1),u}const Ha=[1,.93,.82],Ar=[.83,.65,.45],DR=[.85,.9,1];function NR(o,t,i=1){const r=[];for(let l=0;l<t;l++){const u=o()*Math.PI*2,h=Math.sqrt(o())*.96;r.push([Math.cos(u)*h,Math.sin(u)*h*i,o()])}return r}function CS(o,t,i=3){const r=[];for(let l=0;l<o.length;l++){const u=[];for(let h=0;h<o.length;h++){if(l===h)continue;const d=Math.hypot(o[l][0]-o[h][0],o[l][1]-o[h][1]);d<t&&u.push([d,h])}u.sort((h,d)=>h[0]-d[0]);for(const[,h]of u.slice(0,i))r.some(([d,p])=>d===h&&p===l)||r.push([l,h])}return r}function UR(o,t){const i=new bn,r={group:i,fades:[],dot:o.color,flat:!0},l=Ay(o.id.length*7919+17),u=[],h=v=>{const{points:_,u:g}=CR(r,v);return i.add(_),u.push(g.uScale),g},d=[],p=v=>{const _=h(v);return d.push(_.uDpr),_};let m;switch(t.kind){case"heliosphere":{i.add(vo(r,[.72,.8,.95],{rim:.32,rimW:.035,fill:.07,inner:.78,dash:90,noise:1}));const v=[];for(let _=0;_<260;_++){const g=l()*Math.PI*2,x=.04+l()*.2,y=.35+l()*.5;v.push(Math.cos(g)*x,Math.sin(g)*x,0,Math.cos(g)*y,Math.sin(g)*y,0)}i.add(Cl(r,v,6050886,.35)),p([{x:0,y:0,s:6,c:[1,.95,.85],a:1},{x:0,y:0,s:18,c:[1,.85,.6],a:.35}]);break}case"oort":{const v=[];for(let _=0;_<42e3;_++){const g=l()*2-1,x=l()*Math.PI*2,y=Math.pow(.03+l()*.97,.33),A=Math.sqrt(1-g*g);v.push({x:y*A*Math.cos(x),y:y*g,s:.9+l()*1.1,c:DR,a:.18+l()*.4})}v.push({x:0,y:0,s:5,c:[1,.93,.8],a:1}),p(v),i.add(vo(r,[.8,.85,.95],{rim:.05,rimW:.12,fill:.03}));break}case"group":{i.add(vo(r,Ar,{rim:.12,rimW:.01,fill:.02,noise:1}));const v=[],_=[],g=(D,N,E,O,F)=>{const G=Cy({...o},{...F,field:0,sats:[]});G.group.position.set(N,E,0),G.group.scale.setScalar(O),G.fades.forEach(H=>r.fades.push(H)),i.add(G.group),v.push({o:G,r:O})},x=(D,N,E,O,F,G=1,H=0)=>{const j=Nm(r,O,D*91+N*37,F,G);j.mesh.position.set(D,N,0),j.mesh.scale.setScalar(E*2.4),j.mesh.rotation.z=H,i.add(j.mesh),_.push({u:j.uPx,r:E})},y=[-.2,-.12],A=[.25,.12];g("milkyway",y[0],y[1],.01,Jc.milkyway),g("andromeda",A[0],A[1],.0152,Jc.andromeda),g("triangulum",A[0]+.1,A[1]-.08,.006,{type:"galaxy",arms:2,pitch:.4,bar:0,bulge:.06,dust:.6,seed:5.3,floc:.9,clump:1.2,ring:0,tilt:-.9,pa:.4,pal:{...Jc.andromeda.pal,grey:[.62,.68,.9],knot:[1,.35,.5],gold:[1,.92,.8]}});const b=[[y[0]+.018,y[1]-.028,.0014,1,1.2,.8,.3],[y[0]+.03,y[1]-.027,8e-4,1,1,.7,.8],[y[0]-.05,y[1]+.077,6e-4,0,.55],[y[0]+.04,y[1]+.042,5e-4,0,.45],[y[0]-.045,y[1]-.025,4e-4,0,.4],[y[0]+.02,y[1]+.16,5e-4,0,.45],[y[0]+.003,y[1]+.006,6e-4,0,.35,.4,1.2],[A[0]-.004,A[1]-.007,9e-4,0,.8,.6,.9],[A[0]+.011,A[1]+.04,5e-4,0,.55],[A[0]-.006,A[1]+.05,5e-4,0,.5,.7],[-.35,.13,7e-4,1,.9,.8,.2],[.05,.35,8e-4,1,.7,.9,.5],[-.55,-.55,6e-4,1,.8,.45,1.3]];for(const[D,N,E,O,F,G,H]of b)x(D,N,E,O,F,G??1,H??0);const M=[{x:y[0],y:y[1],s:60,c:Ha,a:.16},{x:A[0],y:A[1],s:76,c:[.9,.86,1],a:.16}];for(const[D,N,,E]of b)M.push({x:D,y:N,s:E?14:9,c:E?[.82,.8,1]:Ha,a:E?.45:.35});for(let D=0;D<60;D++){const N=D<22?y:D<44?A:[0,0],E=D<44?.06:.4;M.push({x:N[0]+Tr(l)*E,y:N[1]+Tr(l)*E,s:1.3+l()*1.4,c:Ha,a:.35+l()*.4})}p(M),r.labels=[{x:y[0],y:y[1],r:.01,name:"milky way",major:!0,left:!0},{x:A[0],y:A[1],r:.0152,name:"andromeda",major:!0},{x:A[0]+.1,y:A[1]-.08,r:.006,name:"triangulum"},{x:y[0]+.024,y:y[1]-.028,r:.008,name:"magellanic clouds"},{x:y[0]+.02,y:y[1]+.16,r:.001,name:"leo i"},{x:-.35,y:.13,r:.001,name:"ngc 6822"},{x:.05,y:.35,r:.001,name:"ic 1613"},{x:-.55,y:-.55,r:.001,name:"wlm"}],i.add(Vc(r,y[0],y[1],.09,[.85,.8,.7],.05)),i.add(Vc(r,A[0],A[1],.11,[.78,.74,.95],.05));const L=[],I=A[0]-y[0],C=A[1]-y[1],U=Math.hypot(I,C);for(let D=.05;D<.95;D+=.02){const N=D+.01;L.push(y[0]+I*D,y[1]+C*D,0,y[0]+I*N,y[1]+C*N,0)}i.add(Cl(r,L,10123861,.9)),r.labels.push({x:y[0]+I*.62,y:y[1]+C*.62,r:0,name:`${(U*5).toFixed(1)}m light-years`}),m=(D,N,E,O,F)=>{for(const G of v)G.o.update?.(D,N,E*G.r,O,F);for(const G of _)G.u.value=E*G.r*Gn.dpr};break}case"dwarf":{const v=[];for(let _=0;_<650;_++){const g=Math.max(1e-4,l()*.97),x=.62/Math.sqrt(Math.pow(g,-2/3)-1);if(x>1.7)continue;const y=l()*Math.PI*2,A=l()<.04,b=l()<.08;v.push({x:Math.cos(y)*x,y:Math.sin(y)*x*.92,s:b?3.2+l()*1.8:1.5+l()*1.3,c:A?[.75,.84,1]:b?[1,.78,.52]:[1,.9,.76],a:b?1:.6+l()*.4})}p(v),i.add(Vc(r,0,0,.8,[1,.88,.72],.1));break}case"elliptical":{const v=[],_=(x,y,A,b,M,L,I)=>{const C=Nm(r,0,x*91+y*37+5,b,M,I);C.mesh.position.set(x,y,0),C.mesh.scale.setScalar(A*2.4),C.mesh.rotation.z=L,i.add(C.mesh),v.push({u:C.uPx,r:A})};i.add(Vc(r,0,0,1.25,[1,.8,.5],.09)),_(0,0,1,1.25,.56,.62,[1,.8,.52]);for(let x=0;x<26;x++){const y=l()*Math.PI*2,A=.45+Math.pow(l(),.7)*1.1,b=.012+l()*l()*.07;_(Math.cos(y)*A,Math.sin(y)*A*.8,b,.8+l()*.6,.55+l()*.45,l()*3.14,l()<.2?[.86,.88,1]:[1,.86,.66])}const g=[];for(let x=0;x<260;x++){const y=l()*Math.PI*2,A=Math.sqrt(l())*1.9;g.push({x:Math.cos(y)*A,y:Math.sin(y)*A*.8,s:.9+l()*.9,c:l()<.7?Ha:[.85,.88,1],a:.15+l()*.3})}p(g),m=(x,y,A)=>{for(const b of v)b.u.value=A*b.r*Gn.dpr};break}case"supercluster":{const v=NR(l,90,.72);v.push([.05,0,1]);const _=[],g=[];for(const[x,y]of CS(v,.42)){_.push(v[x][0],v[x][1],0,v[y][0],v[y][1],0);const A=Math.hypot(v[x][0]-v[y][0],v[x][1]-v[y][1]);for(let b=0;b<260*A;b++){const M=l();g.push({x:v[x][0]+(v[y][0]-v[x][0])*M+Tr(l)*.01,y:v[x][1]+(v[y][1]-v[x][1])*M+Tr(l)*.01,s:1+l(),c:l()<.7?Ha:Ar,a:.25+l()*.4})}}for(const[x,y,A]of v)for(let b=0;b<30+A*90;b++)g.push({x:x+Tr(l)*.013,y:y+Tr(l)*.013,s:1.1+l()*1.3,c:Ha,a:.4+l()*.5});i.add(Cl(r,_,6967864,.8)),p(g),i.add(vo(r,Ar,{rim:0,rimW:.1,fill:.05,noise:1}));break}case"laniakea":{const g=[];for(let y=0;y<220;y++){const A=l()*Math.PI*2,b=.5+l()*.48;let M=Math.cos(A)*b,L=Math.sin(A)*b*.86;const I=(l()-.5)*1.5;for(let C=0;C<80;C++){const U=.08-M,D=.05-L,N=Math.hypot(U,D);if(N<.03)break;const E=U/N+-D/N*I*N,O=D/N+U/N*I*N,F=M+E*.016,G=L+O*.016;g.push(M,L,0,F,G,0),M=F,L=G}}i.add(Cl(r,g,4866098,.9));const x=[];for(let y=0;y<16e3;y++){const A=l()*Math.PI*2,b=Math.pow(l(),.7)*.98;x.push({x:Math.cos(A)*b,y:Math.sin(A)*b*.86,s:.9+l()*1.1,c:l()<.8?Ha:Ar,a:.15+l()*.4})}x.push({x:.08,y:.05,s:30,c:Ar,a:.3}),p(x),i.add(vo(r,Ar,{rim:.14,rimW:.008,fill:.04}));break}case"universe":{i.add(vo(r,Ar,{rim:.5,rimW:.05,fill:.05,noise:1}));const v=[];for(let x=0;x<700;x++){const y=l()*2-1,A=l()*Math.PI*2,b=Math.cbrt(l())*.985,M=Math.sqrt(1-y*y);v.push([b*M*Math.cos(A),b*y,l()])}const _=[],g=[];for(const[x,y]of CS(v,.16)){_.push(v[x][0],v[x][1],0,v[y][0],v[y][1],0);const A=Math.hypot(v[x][0]-v[y][0],v[x][1]-v[y][1]);for(let b=0;b<500*A;b++){const M=l();g.push({x:v[x][0]+(v[y][0]-v[x][0])*M+Tr(l)*.004,y:v[x][1]+(v[y][1]-v[x][1])*M+Tr(l)*.004,s:.8+l()*.8,c:l()<.6?Ha:Ar,a:.1+l()*.18})}}for(const[x,y,A]of v)g.push({x,y,s:3+A*6,c:Ha,a:.12+A*.14});g.push({x:0,y:0,s:3,c:[.96,.95,.92],a:1}),i.add(Cl(r,_,6179379,.5)),p(g);break}}return r.update=(v,_,g,x,y)=>{m?.(v,_,g,x,y);const A=Math.min(1,Math.max(.35,g/260));for(const b of u)b.value=A;for(const b of d)b.value=Gn.dpr},r}class Gn{constructor(t,i){this.bodies=i,this.renderer=new lR({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Jn,this.renderer.toneMapping=Pm,this.renderer.toneMappingExposure=1.15,wy=this.renderer.capabilities.getMaxAnisotropy();const r=new oT(16775406,3.7);r.position.set(-1,.75,.85),this.scene.add(r),this.scene.add(new lT(8949920,.006))}bodies;static dpr=1;renderer;scene=new Px;camera=new kl(-1,1,1,-1,-10,10);objs=new Map;st=new Map;now=0;state(t){let i=this.st.get(t);return i||(i={vx:0,vy:0,last:-1e9,dragging:!1,tx:0,ty:0,gx:0,gy:0},this.st.set(t,i)),i}static qa=new xa;static ax=new k;turn(t,i,r){const l=Gn.qa;i&&(l.setFromAxisAngle(Gn.ax.set(0,1,0),i),t.quaternion.premultiply(l)),r&&(l.setFromAxisAngle(Gn.ax.set(1,0,0),r),t.quaternion.premultiply(l))}grabKind(t){const i=this.objs.get(t);return i?i.rot?"rotate":i.flat?"tilt":null:null}grab(t){const i=this.state(t);i.dragging=!0,i.vx=0,i.vy=0,i.last=this.now}drag(t,i,r,l,u){const h=this.objs.get(t),d=this.state(t);if(h)if(d.last=this.now,h.rot){const p=i/Math.max(l,40),m=r/Math.max(l,40);this.turn(h.rot,p,m);const v=Math.min(1,u*18);d.vx+=(p/Math.max(u,1/240)-d.vx)*v,d.vy+=(m/Math.max(u,1/240)-d.vy)*v}else h.flat&&(d.gx=Math.max(-.35,Math.min(.35,d.gx+i/Math.max(l,80)*.5)),d.gy=Math.max(-.35,Math.min(.35,d.gy+r/Math.max(l,80)*.5)))}release(t,i){const r=this.state(t);r.dragging=!1,r.last=this.now,r.gx=0,r.gy=0,i&&(r.vx=0,r.vy=0);const l=12;r.vx=Math.max(-l,Math.min(l,r.vx)),r.vy=Math.max(-l,Math.min(l,r.vy))}w=1;h=1;resize(t,i,r){this.w=t,this.h=i,Gn.dpr=r,this.renderer.setPixelRatio(r),this.renderer.setSize(t,i,!1)}obj(t){let i=this.objs.get(t);if(!i){const r=this.bodies[t],l=Jc[r.id];i=l.type==="planet"?dR(r,l):l.type==="star"?xR(r,l):l.type==="image"?wR(r,l):l.type==="galaxy"?Cy(r,l):l.type==="bh"?AR(r,l):UR(r,l),i.group.visible=!1,this.scene.add(i.group),this.objs.set(t,i)}return i}has(t){return this.objs.has(t)}rtA=null;rtB=null;rtC=null;fsScene=new Px;fsCam=new kl(-1,1,1,-1,0,1);fsQuad=null;blurMat=null;compMat=null;setupDof(){const t=Math.max(1,Math.round(this.w*Gn.dpr)),i=Math.max(1,Math.round(this.h*Gn.dpr)),r=(l,u,h)=>{const d=new Oi(l,u,{samples:h,depthBuffer:h>0});return d.texture.colorSpace=Jn,d.texture.internalFormat="RGBA8",d};if((!this.rtA||this.rtA.width!==t||this.rtA.height!==i)&&(this.rtA?.dispose(),this.rtB?.dispose(),this.rtC?.dispose(),this.rtA=r(t,i,4),this.rtA.isXRRenderTarget=!0,this.rtB=r(Math.ceil(t/2),Math.ceil(i/2),0),this.rtC=r(Math.ceil(t/2),Math.ceil(i/2),0)),!this.fsQuad){const l="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy*2.0, 0.0, 1.0); }";this.blurMat=new on({uniforms:{tMap:{value:null},uDir:{value:new re}},vertexShader:l,fragmentShader:`uniform sampler2D tMap; uniform vec2 uDir; varying vec2 vUv;
          void main(){
            vec4 c = texture2D(tMap, vUv)*0.2270;
            c += (texture2D(tMap, vUv + uDir*1.3846) + texture2D(tMap, vUv - uDir*1.3846))*0.3162;
            c += (texture2D(tMap, vUv + uDir*3.2308) + texture2D(tMap, vUv - uDir*3.2308))*0.0703;
            gl_FragColor = c;
          }`,depthTest:!1,depthWrite:!1,blending:Zi,toneMapped:!1}),this.compMat=new on({uniforms:{tSharp:{value:null},tSoft:{value:null},uAmt:{value:0}},vertexShader:l,fragmentShader:`uniform sampler2D tSharp, tSoft; uniform float uAmt; varying vec2 vUv;
          void main(){ gl_FragColor = mix(texture2D(tSharp, vUv), texture2D(tSoft, vUv), uAmt); }`,depthTest:!1,depthWrite:!1,blending:Zi,toneMapped:!1}),this.fsQuad=new sn(new bo(1,1),this.blurMat),this.fsQuad.frustumCulled=!1,this.fsScene.add(this.fsQuad)}}renderDof(t,i){this.setupDof();const r=this.renderer,l=this.camera,u=this.rtA,h=this.rtB,d=this.rtC,p=this.fsQuad,m=this.blurMat,v=this.compMat;t.group.visible=!1,r.setRenderTarget(u),r.clear(),r.render(this.scene,l),t.group.visible=!0;const _=2.6*Gn.dpr*i/2;p.material=m,m.uniforms.tMap.value=u.texture,m.uniforms.uDir.value.set(_/h.width*.5,0),r.setRenderTarget(h),r.render(this.fsScene,this.fsCam),m.uniforms.tMap.value=h.texture,m.uniforms.uDir.value.set(0,_/d.height*.5),r.setRenderTarget(d),r.render(this.fsScene,this.fsCam),m.uniforms.tMap.value=d.texture,m.uniforms.uDir.value.set(_/h.width*.5,0),r.setRenderTarget(h),r.render(this.fsScene,this.fsCam),m.uniforms.tMap.value=h.texture,m.uniforms.uDir.value.set(0,_/d.height*.5),r.setRenderTarget(d),r.render(this.fsScene,this.fsCam),r.setRenderTarget(null),r.clear(),p.material=v,v.uniforms.tSharp.value=u.texture,v.uniforms.tSoft.value=d.texture,v.uniforms.uAmt.value=Math.min(1,i*1.4),r.render(this.fsScene,this.fsCam);const g=[];for(const x of this.objs.values())x!==t&&x.group.visible&&(x.group.visible=!1,g.push(x));r.autoClear=!1,r.render(this.scene,l),r.autoClear=!0;for(const x of g)x.group.visible=!0}render(t,i,r,l,u,h,d=0){this.now=i;for(const g of this.objs.values())g.group.visible=!1;let p=10,m=0;for(const g of t){const x=this.obj(g.i);x.wantTex?.(u&&Math.abs(g.i-h)<=1),x.group.visible=!0,x.group.position.set(g.x-this.w/2,this.h/2-g.y,m),x.group.scale.setScalar(g.rs);for(const M of x.fades){const L=M.base*g.alpha;M.material.opacity=L;const I=M.material.uniforms;I&&I.opacity&&(I.opacity.value=L)}const y=this.state(g.i);if(x.rot&&!y.dragging&&(y.vx||y.vy)){this.turn(x.rot,y.vx*r,y.vy*r);const M=Math.exp(-r*2.4);y.vx*=M,y.vy*=M,Math.abs(y.vx)+Math.abs(y.vy)<.002&&(y.vx=0,y.vy=0),(y.vx||y.vy)&&(y.last=i)}if(x.flat){const M=1-Math.exp(-r*(y.dragging?14:5));y.tx+=(y.gx-y.tx)*M,y.ty+=(y.gy-y.ty)*M,x.group.rotation.set(y.ty,y.tx,0)}const A=i-y.last,b=l?0:Math.min(1,Math.max(0,(A-3)/2));x.update?.(i,r,g.rs,l,b),p=Math.max(p,g.rs*3),m+=0}const v=this.camera;v.left=-this.w/2,v.right=this.w/2,v.top=this.h/2,v.bottom=-this.h/2,v.near=-p*1.1,v.far=p*1.1,v.position.set(0,0,0),v.updateProjectionMatrix();const _=this.objs.get(h);d>.01&&_&&_.group.visible&&t.length>1?this.renderDof(_,d):this.renderer.render(this.scene,v)}async warm(t,i){this.prefetch(t,i);for(let u=0;u<4;u++){const h=zl.size;if(await Promise.allSettled([...zl.values()]),zl.size===h)break}const r=[t-1,t,t+1,t+2].filter(u=>u>=0&&u<this.bodies.length).map(u=>this.obj(u)),l=r.map(u=>u.group.visible);r.forEach(u=>{u.group.visible=!0});try{const u=this.renderer;u.compileAsync&&u.extensions.has("KHR_parallel_shader_compile")?await u.compileAsync(this.scene,this.camera):u.compile(this.scene,this.camera)}catch{}r.forEach((u,h)=>{u.group.visible=l[h]})}prefetch(t,i){for(const r of[t,t+1,t-1,t+2])r<0||r>=this.bodies.length||this.obj(r).wantTex?.(i&&Math.abs(r-t)<=1)}}class LR{constructor(t){this.canvas=t,this.ctx=t.getContext("2d",{alpha:!1})}canvas;ctx;field=null;margin=0;w=0;h=0;dpr=1;meteors=[];next=4+Math.random()*5;twinkle=[];reduced=!1;resize(t,i,r){this.w=t,this.h=i,this.dpr=r,this.canvas.width=Math.round(t*r),this.canvas.height=Math.round(i*r),this.build()}build(){const t=this.canvas.height,i=this.dpr;this.margin=Math.round(this.canvas.width*.12);const r=this.canvas.width+this.margin,l=document.createElement("canvas");l.width=r,l.height=t;const u=l.getContext("2d");u.fillStyle="#0a0a0b",u.fillRect(0,0,r,t);let h=918273;const d=()=>(h=h*16807%2147483647)/2147483647,p=()=>Math.sqrt(-2*Math.log(d()+1e-9))*Math.cos(2*Math.PI*d()),m=-.42,v=r*.5,_=t*.55,g=Math.cos(m),x=Math.sin(m),y=(I,C,U,D,N)=>{for(let E=0;E<D;E++){const O=(d()-.5)*Math.hypot(r,t)*1.1,F=I+p()*C,G=v+g*O-x*F,H=_+x*O+g*F,j=C*(.6+d()*1.6),Z=u.createRadialGradient(G,H,0,G,H,j);Z.addColorStop(0,U.replace("A",String(N*(.5+d())))),Z.addColorStop(1,U.replace("A","0")),u.fillStyle=Z,u.fillRect(G-j,H-j,j*2,j*2)}},A=Math.min(r,t)*.1;y(0,A,"rgba(200,190,175,A)",90,.0065),y(0,A*.45,"rgba(225,205,180,A)",70,.006);const b=r*t/(i*i),M=Math.round(b/520),L=(I,C,U)=>{const D=d(),N=D<.12?[255,214,170]:D<.25?[200,215,255]:[244,241,234],E=Math.min(1,.12+Math.pow(U,2.2)*.9),O=(.55+U*1.1)*i;if(O<=1.35)u.fillStyle=`rgba(${N[0]},${N[1]},${N[2]},${E*Math.max(.35,O)})`,u.fillRect(Math.round(I),Math.round(C),1,1);else{const F=O,G=u.createRadialGradient(I,C,0,I,C,F);G.addColorStop(0,`rgba(${N[0]},${N[1]},${N[2]},${E})`),G.addColorStop(.35,`rgba(${N[0]},${N[1]},${N[2]},${E*.45})`),G.addColorStop(1,`rgba(${N[0]},${N[1]},${N[2]},0)`),u.fillStyle=G,u.beginPath(),u.arc(I,C,F,0,Math.PI*2),u.fill()}};for(let I=0;I<M;I++)L(d()*r,d()*t,Math.pow(d(),6));for(let I=0;I<M*.9;I++){const C=(d()-.5)*Math.hypot(r,t)*1.1,U=p()*A*.7,D=v+g*C-x*U,N=_+x*C+g*U;D<0||N<0||D>=r||N>=t||L(D,N,Math.pow(d(),9)*.6)}this.twinkle=[];for(let I=0;I<Math.round(b/18e3);I++)this.twinkle.push({x:d()*r,y:d()*t,r:(.8+d()*.8)*i,a:.3+d()*.5,p:d()*6.28});this.field=l}draw(t,i,r){const{ctx:l}=this,u=this.canvas.width;if(!this.field)return;l.setTransform(1,0,0,1,0,0),l.globalCompositeOperation="source-over",l.globalAlpha=1;const h=Math.round(Math.max(0,Math.min(1,t))*this.margin);if(l.drawImage(this.field,-h,0),!this.reduced){for(const d of this.twinkle){const p=d.a*(.5+.5*Math.sin(i*1.3+d.p)),m=d.x-h;m<0||m>u||(l.fillStyle=`rgba(244,241,234,${p*.6})`,l.fillRect(Math.round(m),Math.round(d.y),Math.max(1,Math.round(d.r)),Math.max(1,Math.round(d.r))))}this.meteorsStep(r)}}meteorsStep(t){const{ctx:i}=this,r=this.dpr;if(document.visibilityState==="visible"&&(this.next-=t),this.next<=0){this.next=6+Math.random()*9;const l=this.w,u=this.h,h=Math.random()<.5?-1:1,d=.25+Math.random()*.35,p=700+Math.random()*600;this.meteors.push({x:l*(.15+Math.random()*.7),y:u*(.05+Math.random()*.35),vx:Math.cos(d)*p*h,vy:Math.sin(d)*p,len:110+Math.random()*130,life:.55+Math.random()*.5,age:0,tan:Math.random()<.35,w:1+Math.random()*.6})}i.globalCompositeOperation="lighter",this.meteors=this.meteors.filter(l=>{if(l.age+=t,l.age>l.life)return!1;l.x+=l.vx*t,l.y+=l.vy*t;const u=l.age/l.life,h=Math.min(1,u*6)*(1-Math.pow(u,2)),d=Math.hypot(l.vx,l.vy),p=l.vx/d,m=l.vy/d,v=l.len*Math.min(1,u*4),_=l.x*r,g=l.y*r,x=(l.x-p*v)*r,y=(l.y-m*v)*r,A=-m*l.w*r*.5,b=p*l.w*r*.5,M="244,241,234",L=i.createLinearGradient(_,g,x,y);return L.addColorStop(0,`rgba(${M},${.85*h})`),L.addColorStop(.25,`rgba(${M},${.35*h})`),L.addColorStop(1,`rgba(${M},0)`),i.fillStyle=L,i.beginPath(),i.moveTo(_+A,g+b),i.lineTo(x,y),i.lineTo(_-A,g-b),i.closePath(),i.fill(),i.fillStyle=`rgba(255,250,240,${.9*h})`,i.beginPath(),i.arc(_,g,l.w*r*.6,0,Math.PI*2),i.fill(),!0}),i.globalCompositeOperation="source-over"}}const DS=.2,NS=13*Math.PI/180,US=[Math.cos(NS),-Math.sin(NS)],Op=.06;function LS(o,t){let i=Math.min(window.devicePixelRatio||1,3);const r=3840*2160*1.6;return o*t*i*i>r&&(i=Math.sqrt(r/(o*t))),Math.max(1,i)}function Um(o,t){return Math.max(1,Math.min(o/1600,t/1e3,2.4))}class cf{constructor(t,i,r,l=Dr){this.bgCanvas=t,this.overlay=r,this.bodies=l,this.bg=new LR(t);try{this.gl=new Gn(i,l)}catch(u){console.warn("webgl unavailable, drawing flat discs",u)}this.octx=r.getContext("2d")}bgCanvas;overlay;bodies;gl=null;bg;octx;w=0;h=0;dpr=1;hiRes=!1;lastTime=0;layout={cx:0,cy:0,base:200};reduced=!1;ui=1;quality=1;hitInfo=null;dofOn=!0;acc=null;static rgb(t){return[1,3,5].map(i=>parseInt(t.slice(i,i+2),16))}resize(t,i){this.w=t,this.h=i,this.dpr=Math.max(1,LS(t,i)*this.quality),this.ui=Um(t,i),this.overlay.width=Math.round(t*this.dpr),this.overlay.height=Math.round(i*this.dpr),this.bg.resize(t,i,this.dpr),this.gl?.resize(t,i,this.dpr);const r=t<768;r&&(this.dofOn=!1),this.bgCanvas.style.filter=this.dofOn?"blur(0.6px)":"";const l=r?Math.min(t*.34,i*.2):Math.min(i*.3,t*.22);this.layout=r?{cx:t*.5,cy:i*.36,base:l}:{cx:t*.6,cy:i*.5,base:l},this.hiRes=l*2*this.dpr>700}lowerQuality(){return this.dofOn?(this.dofOn=!1,this.bgCanvas.style.filter="",!0):LS(this.w,this.h)*this.quality<=1.01?!1:(this.quality*=.8,this.resize(this.w,this.h),!0)}hit(t,i){const r=this.hitInfo;if(!r||!this.gl)return null;const l=this.gl.grabKind(r.i);if(!l)return null;const u=Ul[this.bodies[r.i].id]??1,h=r.rs*(l==="rotate"?Math.max(1.04,u*.8):.9*u);return Math.hypot(t-r.x,i-r.y)>Math.max(h,16)?null:{i:r.i,kind:l,rs:r.rs}}grab(t){this.gl?.grab(t)}drag(t,i,r,l,u){this.gl?.drag(t,i,r,l,u)}release(t){this.gl?.release(t,this.reduced)}prefetch(t){this.gl?.prefetch(t,this.hiRes)}async ready(t){const i=document.fonts?Promise.all(['400 16px "Courier Prime"','700 16px "Courier Prime"','400 16px "Instrument Serif"'].map(r=>document.fonts.load(r).catch(()=>null))).then(()=>document.fonts.ready):Promise.resolve();await Promise.all([i,this.gl?.warm(t,this.hiRes)])}draw(t,i){const r=this.lastTime?Math.min(.05,i-this.lastTime):.016;this.lastTime=i;const{w:l,h:u,bodies:h}=this,d=h.length;t=Math.max(0,Math.min(d-1,t));let p=Math.floor(t),m=t-p;p>=d-1&&(p=d-2,m=1);const v=p+1,_=h[p].radiusKm*(TS[h[p].id]??1),g=h[v].radiusKm*(TS[h[v].id]??1),x=Math.exp(Math.log(_)+(Math.log(g)-Math.log(_))*m),{cx:y,cy:A,base:b}=this.layout,M=b/x,L=cf.rgb(h[Math.round(t)].accent);if(!this.acc||this.reduced)this.acc=L.slice();else{const H=1-Math.exp(-r/.16);this.acc=this.acc.map((j,Z)=>j+(L[Z]-j)*H)}const I=this.acc.map(Math.round).join(",");this.bg.reduced=this.reduced,this.bg.draw(t/(d-1),i,r);const C=H=>h[H].radiusKm*(Ul[h[H].id]??1),U=new Array(d);U[p]=0;for(let H=p+1;H<d;H++)U[H]=U[H-1]+C(H-1)+C(H)+DS*h[H].radiusKm;for(let H=p-1;H>=0;H--)U[H]=U[H+1]-(C(H+1)+C(H)+DS*h[H+1].radiusKm);const D=m*U[v]*(x/g),N=Math.round(t),E=Math.max(0,1-Math.abs(t-N)*3),O=Math.hypot(l,u),F=this.octx;F.setTransform(this.dpr,0,0,this.dpr,0,0),F.clearRect(0,0,l,u);const G=[];for(let H=d-1;H>=0;H--){const j=H-t,Z=j<=0?1:j<1?Op+(1-Op)*(1-j):j<2?Op*(2-j):0;if(Z<=.001)continue;const Q=h[H].radiusKm*M;if(Q<.04)continue;const W=(U[H]-D)*M,Y=y+US[0]*W,lt=A+US[1]*W;if(!(Q>O*8)){if(Q<1.5){const at=this.gl?.has(H)?this.gl.obj(H).dot:h[H].color;F.globalAlpha=Z*Math.min(1,.35+Q),F.fillStyle=at,F.beginPath(),F.arc(Y,lt,Math.max(Q,.75),0,Math.PI*2),F.fill(),F.globalAlpha=1}else this.gl?G.push({i:H,x:Y,y:lt,rs:Q,alpha:Z}):(F.globalAlpha=Z,F.fillStyle=h[H].color,F.beginPath(),F.arc(Y,lt,Q,0,Math.PI*2),F.fill(),F.globalAlpha=1);if(H===N-1&&E>.01&&this.marker(Y,lt,Q*(Ul[h[H].id]??1),h[H].accent,E),H===N&&(this.hitInfo=E>.6&&Q>8?{i:H,x:Y,y:lt,rs:Q}:null),H===N&&E>.01&&this.gl?.has(H)){const at=this.gl.obj(H).labels;at&&this.labels(Y,lt,Q,at,E)}if(H===N&&E>.01&&Q>20){const at=Q*(Ul[h[H].id]??1)*1.1+8;F.strokeStyle=`rgba(${I},${.42*E})`,F.lineWidth=1,F.beginPath();const mt=-Math.PI*.62;F.arc(Y,lt,at,mt,mt+Math.PI*2*(this.reduced?1:1-Math.pow(1-E,3))),F.stroke()}}}this.gl?.render(G,i,r,this.reduced,this.hiRes,N,this.dofOn?E*E:0)}labels(t,i,r,l,u){const h=this.octx,d=this.ui;h.textBaseline="middle",h.textAlign="left";for(const p of l){const m=t+p.x*r,v=i-p.y*r;if(p.r===0){h.font=`${Math.round(10*d)}px "Courier Prime", "Courier New", ui-monospace, SFMono-Regular, Menlo, monospace`,h.fillStyle=`rgba(161,161,170,${.55*u})`,h.textAlign="center",h.fillText(p.name,m,v-10*d),h.textAlign="left";continue}const _=Math.max(p.r*r,3*d),g=p.left?-1:1,x=m+g*(_*.72+4*d),y=v-_*.72-4*d;h.strokeStyle=p.major?`rgba(${this.acc?.map(Math.round).join(",")??"212,165,116"},${.55*u})`:`rgba(161,161,170,${.35*u})`,h.lineWidth=1,h.beginPath(),h.moveTo(x,y),h.lineTo(x+g*10*d,y-10*d),h.lineTo(x+g*18*d,y-10*d),h.stroke(),h.font=`${Math.round((p.major?11:10)*d)}px "Courier Prime", "Courier New", ui-monospace, SFMono-Regular, Menlo, monospace`,h.fillStyle=p.major?`rgba(${this.acc?.map(Math.round).join(",")??"212,165,116"},${.9*u})`:`rgba(161,161,170,${.75*u})`,h.textAlign=p.left?"right":"left",h.fillText(p.name,x+g*22*d,y-10*d),h.textAlign="left"}}marker(t,i,r,l,u){const h=this.octx,d=Math.max(r+7*this.ui,11*this.ui);h.strokeStyle=`rgba(${cf.rgb(l).join(",")},${.4*u})`,h.lineWidth=1,h.beginPath(),h.arc(t,i,d,0,Math.PI*2),h.stroke()}}const wr=Dr.length,Pp=o=>String(o).padStart(2,"0"),zp=(o,t,i)=>Math.max(t,Math.min(i,o));function OR(o){return o<768?12:Math.round(Math.max(32,Math.min(64,o*.026)))}const Ip=()=>({w:innerWidth,h:innerHeight,m:OR(innerWidth)});let qi=null;function OS(){if(!qi)return;const o=qi.currentTime,t=Math.floor(qi.sampleRate*.03),i=qi.createBuffer(1,t,qi.sampleRate),r=i.getChannelData(0);for(let d=0;d<t;d++)r[d]=(Math.random()*2-1)*Math.exp(-d/(t*.09));const l=qi.createBufferSource();l.buffer=i;const u=qi.createBiquadFilter();u.type="bandpass",u.frequency.value=3200,u.Q.value=1.4;const h=qi.createGain();h.gain.setValueAtTime(.09,o),h.gain.exponentialRampToValueAtTime(1e-4,o+.03),l.connect(u).connect(h).connect(qi.destination),l.start(o),l.stop(o+.04)}function PS(){const o=decodeURIComponent(location.hash.slice(1)),t=Dr.findIndex(i=>i.id===o);return t>=0?t:0}function PR(){const o=He.useRef(null),t=He.useRef(null),i=He.useRef(null),r=He.useRef(null),l=He.useRef(PS()),u=He.useRef(l.current),h=He.useRef(0),d=He.useRef(l.current),p=He.useRef(null),m=He.useRef(!1),v=He.useRef(null),_=He.useRef(null),[g,x]=He.useState(l.current),[y,A]=He.useState(!1),[b,M]=He.useState(!1),[L,I]=He.useState(!1),[C,U]=He.useState(Ip),D=He.useRef(matchMedia("(prefers-reduced-motion: reduce)").matches),[N]=He.useState(()=>!D.current),[E,O]=He.useState(()=>D.current),[F,G]=He.useState(()=>{try{return localStorage.getItem("scale-tour-sound")==="on"}catch{return!1}}),H=He.useCallback(()=>{G(Tt=>{const Dt=!Tt;try{localStorage.setItem("scale-tour-sound",Dt?"on":"off")}catch{}return Dt&&(qi??=new AudioContext,qi.resume(),OS()),Dt})},[]),[j,Z]=He.useState(()=>{const Tt=Ip();return Um(Tt.w-Tt.m*2,Tt.h-Tt.m*2)}),Q=He.useCallback(Tt=>{d.current=zp(Math.round(Tt),0,wr-1),m.current&&(u.current=d.current,h.current=0)},[]),W=He.useCallback(Tt=>Q(d.current+Tt),[Q]);He.useEffect(()=>{const Tt=i.current,Dt=new cf(o.current,t.current,Tt);v.current=Dt;const Rt=matchMedia("(prefers-reduced-motion: reduce)"),$t=()=>{m.current=Rt.matches,Dt.reduced=Rt.matches};$t(),Rt.addEventListener("change",$t);const de=()=>{const At=Ip();U(At),Dt.resize(At.w-At.m*2,At.h-At.m*2),Dt.prefetch(d.current),Z(Um(At.w-At.m*2,At.h-At.m*2))};de(),addEventListener("resize",de);let Me=!1;const ce=()=>new Promise(At=>requestAnimationFrame(()=>At()));Promise.race([Dt.ready(l.current).then(ce).then(ce).then(ce),new Promise(At=>setTimeout(At,6e3))]).catch(()=>{}).then(()=>{Me||I(!0)});let we=0,q=performance.now(),Xe=-1,xe=-1,P=0,T=0,et=0,rt=0;const gt=At=>{const Lt=Math.min(.05,(At-q)/1e3);if(q=At,!p.current)if(m.current)u.current=d.current,h.current=0;else{const xt=Math.max(1,Math.ceil(Lt/.008333333333333333)),Ot=Lt/xt;for(let Bt=0;Bt<xt;Bt++){const zt=d.current-u.current;h.current+=(150*zt-16*h.current)*Ot,u.current+=h.current*Ot}const ne=d.current-u.current;Math.abs(ne)<4e-4&&Math.abs(h.current)<.002&&(u.current=d.current,h.current=0)}Dt.draw(u.current,At/1e3),rt++,Lt>1/45&&et++,T+=Lt,T>2&&(et/rt>.5&&At-P>3e3&&(Dt.lowerQuality(),P=At),T=0,rt=0,et=0),d.current!==xe&&(xe=d.current,Dt.prefetch(d.current));const vt=zp(Math.round(u.current),0,wr-1);vt!==Xe&&(Xe=vt,x(vt),history.replaceState(null,"",`#${Dr[vt].id}`)),we=requestAnimationFrame(gt)};return we=requestAnimationFrame(gt),()=>{Me=!0,cancelAnimationFrame(we),removeEventListener("resize",de),Rt.removeEventListener("change",$t)}},[]),He.useEffect(()=>{if(E)return;const Tt=setTimeout(()=>O(!0),1150);return()=>clearTimeout(Tt)},[E]),He.useEffect(()=>{L&&E&&M(!0)},[L,E]);const Y=He.useRef(g);He.useEffect(()=>{g!==Y.current&&(Y.current=g,F&&b&&OS())},[g,F,b]),He.useEffect(()=>{const Tt=Dt=>{if(Dt.metaKey||Dt.ctrlKey||Dt.altKey)return;const Rt=Dt.key;Rt==="ArrowRight"||Rt==="ArrowDown"||Rt==="PageDown"||Rt===" "||Rt==="j"?(Dt.preventDefault(),W(1)):Rt==="ArrowLeft"||Rt==="ArrowUp"||Rt==="PageUp"||Rt==="k"?(Dt.preventDefault(),W(-1)):Rt==="Home"?(Dt.preventDefault(),Q(0)):Rt==="End"&&(Dt.preventDefault(),Q(wr-1))};return addEventListener("keydown",Tt),()=>removeEventListener("keydown",Tt)},[Q,W]),He.useEffect(()=>{const Tt=()=>Q(PS());return addEventListener("hashchange",Tt),()=>removeEventListener("hashchange",Tt)},[Q]),He.useEffect(()=>{let Tt=0,Dt=0,Rt=!1,$t=0;const de=Me=>{Me.preventDefault();const ce=performance.now(),we=(Math.abs(Me.deltaY)>Math.abs(Me.deltaX)?Me.deltaY:Me.deltaX)*(Me.deltaMode===1?30:1);ce-Dt>180&&(Rt=!1,Tt=0),Rt&&ce-$t>900&&(Rt=!1,Tt=0),Dt=ce,!Rt&&(Tt+=we,Math.abs(Tt)>30&&(W(Math.sign(Tt)),Tt=0,Rt=!0,$t=ce))};return addEventListener("wheel",de,{passive:!1}),()=>removeEventListener("wheel",de)},[W]);const lt=Tt=>{const Dt=r.current.getBoundingClientRect();return[Tt.clientX-Dt.left,Tt.clientY-Dt.top]},at=Tt=>{r.current&&r.current.style.cursor!==Tt&&(r.current.style.cursor=Tt)},mt=Tt=>{if(Tt.button!==0)return;Tt.target.setPointerCapture?.(Tt.pointerId);const Dt=v.current?.hit(...lt(Tt));if(Dt&&!_.current){_.current={i:Dt.i,x:Tt.clientX,y:Tt.clientY,t:performance.now(),rs:Dt.rs,id:Tt.pointerId},v.current.grab(Dt.i),at("grabbing");return}at("grabbing"),p.current={x:Tt.clientX,y:Tt.clientY,start:u.current,axis:0,lastT:performance.now(),lastP:u.current,v:0},h.current=0},bt=Tt=>{const Dt=_.current;if(Dt){if(Tt.pointerId!==Dt.id)return;const xe=performance.now();v.current?.drag(Dt.i,Tt.clientX-Dt.x,Tt.clientY-Dt.y,Dt.rs,Math.max(.001,(xe-Dt.t)/1e3)),Dt.x=Tt.clientX,Dt.y=Tt.clientY,Dt.t=xe;return}const Rt=p.current;if(!Rt){Tt.pointerType==="mouse"&&at(v.current?.hit(...lt(Tt))?"grab":"default");return}const $t=Tt.clientX-Rt.x,de=Tt.clientY-Rt.y;if(Rt.axis===0&&Math.hypot($t,de)>6&&(Rt.axis=Math.abs($t)>=Math.abs(de)?1:-1),Rt.axis===0)return;const Me=Math.min(innerWidth,900)*.45,ce=Rt.axis===1?-$t/Me:-de/Me;if(m.current)return;const we=zp(Rt.start+ce,-.25,wr-.75),q=performance.now(),Xe=Math.max(1,q-Rt.lastT);Rt.v=.7*Rt.v+.3*((we-Rt.lastP)/Xe)*1e3,Rt.lastT=q,Rt.lastP=we,u.current=we},Kt=Tt=>{const Dt=_.current;if(Dt){if(Tt.pointerId!==Dt.id)return;_.current=null,performance.now()-Dt.t>90&&v.current?.drag(Dt.i,0,0,Dt.rs,.1),v.current?.release(Dt.i),at(Tt.pointerType==="mouse"&&v.current?.hit(...lt(Tt))?"grab":"default");return}at("default");const Rt=p.current;if(p.current=null,!Rt)return;const $t=Tt.clientX-Rt.x,de=Tt.clientY-Rt.y;if(m.current){const ce=Rt.axis===1?$t:de;Math.abs(ce)>40&&W(ce<0?1:-1);return}if(Rt.axis===0)return;let Me=Math.round(u.current+Rt.v*.12);Math.abs(Rt.v)>.8&&Me===Math.round(Rt.start)&&(Me+=Math.sign(Rt.v)),h.current=Rt.v*.5,Q(Me)},_t=Dr[g],z=g>0?Dr[g-1]:null,ht=yb(_t.sphere?_t.radiusKm:_t.radiusKm*2),wt=z?_t.radiusKm/z.radiusKm:null,K=_t.radiusKm/Sb.radiusKm,ft=g/(wr-1),{w:Et,h:Nt,m:tt}=C,Ut=Et-tt*2,_e=Nt-tt*2,oe=Et<768?12:16;return It.jsxs("div",{className:"accent-root fixed inset-0 select-none bg-black text-mist",style:{"--accent":_t.accent},children:[It.jsxs("div",{className:"absolute overflow-hidden bg-ink",style:{left:tt,top:tt,width:Ut,height:_e,borderRadius:oe},children:[It.jsxs("div",{ref:r,className:"scene-fade absolute inset-0 touch-none",onPointerDown:mt,onPointerMove:bt,onPointerUp:Kt,onPointerCancel:Kt,role:"group","aria-roledescription":"carousel","aria-label":"intergalactic scale tour, from ceres to the observable universe",tabIndex:0,style:{opacity:b?1:0},"data-loaded":b||void 0,children:[It.jsx("canvas",{ref:o,className:"absolute inset-0 block h-full w-full"}),It.jsx("canvas",{ref:t,className:"absolute inset-0 block h-full w-full"}),It.jsx("canvas",{ref:i,className:"absolute inset-0 block h-full w-full"})]}),It.jsx("div",{className:"ui-fade ui-legible pointer-events-none absolute left-0 top-0 font-mono text-[11px] tracking-[0.05em]",style:{zoom:j,width:Ut/j,height:_e/j,opacity:b?1:0,visibility:b?"visible":"hidden"},children:It.jsxs("div",{className:"absolute inset-0 p-5 md:p-7",children:[It.jsxs("div",{className:"pointer-events-auto absolute left-5 top-5 md:left-7 md:top-7",children:[It.jsxs("a",{href:"https://gmunoz512.github.io/german-plus/",className:"font-serif text-2xl leading-none tracking-normal text-paper",children:["german",It.jsx("span",{className:"text-accent",children:"+"})]}),It.jsx("p",{className:"mt-1.5 text-fog",children:"intergalactic scale tour"})]}),It.jsxs("div",{className:"absolute right-5 top-5 flex flex-col items-end gap-1.5 md:right-7 md:top-7",children:[It.jsxs("p",{"aria-hidden":!0,children:[It.jsx("span",{className:"text-fog",children:"["}),It.jsx("span",{className:"text-paper",children:Pp(g+1)}),It.jsxs("span",{className:"text-fog",children:["/",Pp(wr),"]"]})]}),It.jsxs("button",{onClick:H,className:"pointer-events-auto text-fog transition-colors hover:text-paper","aria-pressed":F,children:["sound ",It.jsxs("span",{className:F?"text-paper":"",children:["[",F?"on":"off","]"]})]})]}),It.jsxs("section",{className:"absolute inset-x-5 bottom-[92px] md:inset-x-auto md:bottom-auto md:left-7 md:top-1/2 md:w-[320px] md:-translate-y-1/2","aria-live":"polite","aria-atomic":"true",children:[It.jsxs("p",{className:"text-accent",children:["[",Pp(g+1),"]"]}),It.jsx("h1",{className:"mt-1.5 font-mono text-[34px] leading-[1.05] tracking-[-0.01em] text-paper text-balance md:text-[48px]",children:_t.name}),It.jsxs("dl",{className:"mt-4 space-y-1 md:mt-5",children:[It.jsx(Bp,{label:_t.dim??(_t.sphere?"radius":"across"),value:`${ht.value} ${ht.unit}`}),It.jsx(Bp,{label:"vs previous",value:wt?vx(wt):"—",note:wt?z.name.replace(/^the /,""):"where i start"}),It.jsx(Bp,{label:"vs earth",value:vx(K)})]}),It.jsx("p",{className:"mt-4 font-mono text-[15px] leading-[1.5] tracking-[0.01em] text-paper-dim md:mt-5 md:text-[18px] md:leading-[1.45]",children:_t.fact}),_t.note&&It.jsx("p",{className:"mt-2 hidden font-mono text-[11px] leading-relaxed tracking-[0.02em] text-fog md:block",children:_t.note})]}),y&&It.jsxs("div",{className:"pointer-events-auto absolute bottom-20 left-5 right-5 z-10 max-w-md rounded-[10px] border border-line bg-ink-raised/95 p-5 font-mono text-[11px] leading-relaxed tracking-[0.02em] text-mist md:left-7 md:right-auto",children:[It.jsxs("div",{className:"flex items-baseline justify-between",children:[It.jsx("p",{className:"font-mono text-[13px] text-paper",children:"credits"}),It.jsx("button",{onClick:()=>A(!1),className:"font-mono text-[11px] tracking-[0.05em] text-fog hover:text-paper",children:"[close]"})]}),It.jsxs("ul",{className:"mt-3 space-y-1.5",children:[It.jsxs("li",{children:["planet maps: ",It.jsx("a",{className:"text-paper-dim underline decoration-line underline-offset-2 hover:text-accent",href:"https://www.solarsystemscope.com/textures/",children:"solar system scope"}),", cc by 4.0 (based on nasa data; ceres & makemake are their illustrative maps)"]}),It.jsx("li",{children:"pluto: nasa/jhuapl/swri (new horizons), unimaged south filled in · europa: usgs voyager/galileo mosaic · titan: nasa/jpl-caltech/ssi (cassini), toned to its haze — public domain"}),It.jsx("li",{children:"helix nebula: eso — cc by 4.0 · horsehead nebula: nasa, esa & the hubble heritage team (aura/stsci) — cc by 4.0"}),It.jsx("li",{children:"pillars of creation: nasa, esa, csa, stsci; j. depasquale, a. koekemoer, a. pagan (stsci) — webb, cc by 4.0"}),It.jsx("li",{children:"tarantula nebula: nasa, esa, eso, d. lennon & e. sabbi (esa/stsci) et al. — hubble, cc by 4.0 · black eye galaxy (m64): nasa, esa, hubble (2026 wfc3 image) — public domain"}),It.jsx("li",{children:"orion nebula: nasa, esa, m. robberto (stsci/esa) & the hubble orion treasury project team — public domain"}),It.jsx("li",{children:"omega centauri: eso/inaf-vst/omegacam, a. grado, l. limatola — cc by 4.0"}),It.jsx("li",{children:"kepler-22b, the black holes (live lensed ray march), segue 2, ic 1101, the sun & stars, the milky way, andromeda, the heliosphere, oort cloud, superclusters & the observable universe are live procedural renders (illustrations, styled after eso, hubble & amateur astrophotos). sizes & sources in the repo’s src/data.ts."})]}),It.jsx("p",{className:"mt-3 text-fog",children:"made by german, for fun. images are toned to fit the page."})]}),It.jsxs("footer",{className:"pointer-events-auto absolute inset-x-5 bottom-5 md:inset-x-7 md:bottom-7",children:[It.jsxs("div",{className:"relative h-px w-full bg-line","aria-hidden":!0,children:[It.jsx("div",{className:"absolute inset-y-0 left-0 bg-accent",style:{width:`${ft*100}%`}}),Dr.map((Tt,Dt)=>It.jsx("button",{onClick:()=>Q(Dt),tabIndex:-1,title:Tt.name,className:"absolute -top-2 h-4 w-3 -translate-x-1/2 cursor-pointer",style:{left:`${Dt/(wr-1)*100}%`},children:It.jsx("span",{className:`mx-auto block w-px ${Dt<=g?"bg-accent":"bg-fog/50"} ${Dt===g?"h-2.5":"h-1.5"}`})},Tt.id))]}),It.jsxs("div",{className:"mt-3.5 flex items-center justify-between",children:[It.jsxs("p",{className:"text-fog",children:[It.jsxs("span",{className:"hidden md:inline",children:["[scroll · drag · ← →] ",It.jsx("span",{className:"text-fog/70",children:"drag a body to spin it"})]}),It.jsx("span",{className:"md:hidden",children:"[swipe · touch to spin]"}),It.jsx("span",{className:"mx-2 text-line",children:"/"}),It.jsx("button",{onClick:()=>A(Tt=>!Tt),className:"text-fog transition-colors hover:text-paper","aria-expanded":y,children:"credits"})]}),It.jsxs("div",{className:"flex items-center gap-1",children:[It.jsx(zS,{label:"previous",disabled:g===0,onClick:()=>W(-1),children:"[←]"}),It.jsx(zS,{label:"next",disabled:g===wr-1,onClick:()=>W(1),children:"[→]"})]})]})]})]})}),It.jsx("div",{className:`loader pointer-events-none absolute inset-0 flex items-center justify-center ${b||!E?"loader-done":""}`,"aria-hidden":b,role:"status",children:It.jsxs("div",{className:"flex flex-col items-center",children:[It.jsxs("p",{className:"font-serif text-lg leading-none text-paper/70",children:["german",It.jsx("span",{className:"text-accent/80",children:"+"})]}),It.jsx("div",{className:"mt-3 h-px w-24 overflow-hidden bg-line/60",children:It.jsx("div",{className:"loader-bar h-full bg-accent/70"})}),It.jsx("span",{className:"sr-only",children:"loading"})]})})]}),It.jsxs("svg",{className:"pointer-events-none absolute inset-0",width:Et,height:Nt,"aria-hidden":!0,children:[It.jsx("g",{fill:"none",stroke:"#2a2a2e",strokeWidth:"1",className:N?"frame-draw":"",children:zR(tt+.5,tt+.5,Et-tt-.5,Nt-tt-.5,oe).map((Tt,Dt)=>It.jsx("path",{d:Tt,pathLength:1},Dt))}),It.jsxs("g",{stroke:"#4a4a50",strokeWidth:"1",className:`frame-marks ${E?"frame-marks-on":""}`,children:[[[tt+14*j,tt+14*j],[Et-tt-14*j,tt+14*j],[tt+14*j,Nt-tt-14*j],[Et-tt-14*j,Nt-tt-14*j]].map(([Tt,Dt],Rt)=>It.jsx("path",{d:`M${Tt-4.5*j} ${Dt+.5}H${Tt+.5+5*j}M${Tt+.5} ${Dt-4.5*j}V${Dt+.5+5*j}`},Rt)),Et>=768&&[`M${Et/2+.5} ${tt}v${7*j}`,`M${Et/2+.5} ${Nt-tt}v${-7*j}`,`M${tt} ${Nt/2+.5}h${7*j}`,`M${Et-tt} ${Nt/2+.5}h${-7*j}`].map((Tt,Dt)=>It.jsx("path",{d:Tt},`t${Dt}`))]})]})]})}function zR(o,t,i,r,l){const u=(o+i)/2,h=(t+r)/2,d=l*(1-Math.SQRT1_2),p=[];for(const[m,v,_,g]of[[o,t,1,1],[i,t,-1,1],[o,r,1,-1],[i,r,-1,-1]]){const x=m+_*d,y=v+g*d,A=_*g>0?1:0;p.push(`M${x} ${y}A${l} ${l} 0 0 ${A} ${m+_*l} ${v}L${u} ${v}`),p.push(`M${x} ${y}A${l} ${l} 0 0 ${1-A} ${m} ${v+g*l}L${m} ${h}`)}return p}function Bp({label:o,value:t,note:i}){return It.jsxs("div",{className:"flex items-baseline justify-between gap-4",children:[It.jsx("dt",{className:"text-fog",children:o}),It.jsxs("dd",{className:"text-right",children:[i&&It.jsx("span",{className:"mr-2 text-fog/70",children:i}),It.jsx("span",{className:"text-fog",children:"["}),It.jsx("span",{className:"text-paper",children:t}),It.jsx("span",{className:"text-fog",children:"]"})]})]})}function zS({label:o,disabled:t,onClick:i,children:r}){return It.jsx("button",{"aria-label":o,disabled:t,onClick:i,className:"px-1.5 py-1 font-mono text-[12px] text-paper transition-colors hover:text-accent disabled:text-fog/40 disabled:hover:text-fog/40",children:r})}_b.createRoot(document.getElementById("root")).render(It.jsx(He.StrictMode,{children:It.jsx(PR,{})}));
