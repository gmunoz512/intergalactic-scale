(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var ap={exports:{}},Ul={};var wx;function kb(){if(wx)return Ul;wx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Ul.Fragment=t,Ul.jsx=i,Ul.jsxs=i,Ul}var Rx;function Xb(){return Rx||(Rx=1,ap.exports=kb()),ap.exports}var Xt=Xb(),sp={exports:{}},me={};var Cx;function qb(){if(Cx)return me;Cx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),x=Symbol.iterator;function S(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function L(z,Z,ft){this.props=z,this.context=Z,this.refs=y,this.updater=ft||A}L.prototype.isReactComponent={},L.prototype.setState=function(z,Z){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,Z,"setState")},L.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function I(){}I.prototype=L.prototype;function w(z,Z,ft){this.props=z,this.context=Z,this.refs=y,this.updater=ft||A}var N=w.prototype=new I;N.constructor=w,b(N,L.prototype),N.isPureReactComponent=!0;var D=Array.isArray;function U(){}var E={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function P(z,Z,ft){var G=ft.ref;return{$$typeof:o,type:z,key:Z,ref:G!==void 0?G:null,props:ft}}function F(z,Z){return P(z.type,Z,z.props)}function H(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function q(z){var Z={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(ft){return Z[ft]})}var k=/\/+/g;function W(z,Z){return typeof z=="object"&&z!==null&&z.key!=null?q(""+z.key):Z.toString(36)}function X(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(U,U):(z.status="pending",z.then(function(Z){z.status==="pending"&&(z.status="fulfilled",z.value=Z)},function(Z){z.status==="pending"&&(z.status="rejected",z.reason=Z)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function Y(z,Z,ft,G,tt){var ht=typeof z;(ht==="undefined"||ht==="boolean")&&(z=null);var xt=!1;if(z===null)xt=!0;else switch(ht){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(z.$$typeof){case o:case t:xt=!0;break;case g:return xt=z._init,Y(xt(z._payload),Z,ft,G,tt)}}if(xt)return tt=tt(z),xt=G===""?"."+W(z,0):G,D(tt)?(ft="",xt!=null&&(ft=xt.replace(k,"$&/")+"/"),Y(tt,Z,ft,"",function(ae){return ae})):tt!=null&&(H(tt)&&(tt=F(tt,ft+(tt.key==null||z&&z.key===tt.key?"":(""+tt.key).replace(k,"$&/")+"/")+xt)),Z.push(tt)),1;xt=0;var j=G===""?".":G+":";if(D(z))for(var wt=0;wt<z.length;wt++)G=z[wt],ht=j+W(G,wt),xt+=Y(G,Z,ft,ht,tt);else if(wt=S(z),typeof wt=="function")for(z=wt.call(z),wt=0;!(G=z.next()).done;)G=G.value,ht=j+W(G,wt++),xt+=Y(G,Z,ft,ht,tt);else if(ht==="object"){if(typeof z.then=="function")return Y(X(z),Z,ft,G,tt);throw Z=String(z),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return xt}function rt(z,Z,ft){if(z==null)return z;var G=[],tt=0;return Y(z,G,"","",function(ht){return Z.call(ft,ht,tt++)}),G}function nt(z){if(z._status===-1){var Z=z._result,ft=Z();ft.then(function(G){(z._status===0||z._status===-1)&&(z._status=1,z._result=G,ft.status===void 0&&(ft.status="fulfilled",ft.value=G))},function(G){(z._status===0||z._status===-1)&&(z._status=2,z._result=G,ft.status===void 0&&(ft.status="rejected",ft.reason=G))}),z._status===-1&&(z._status=0,z._result=ft)}if(z._status===1)return z._result.default;throw z._result}var ct=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function _t(z){var Z=E.T,ft={};ft.types=Z!==null?Z.types:null,E.T=ft;try{var G=z(),tt=E.S;tt!==null&&tt(ft,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(U,ct)}catch(ht){ct(ht)}finally{Z!==null&&ft.types!==null&&(Z.types=ft.types),E.T=Z}}function Ot(z){var Z=E.T;if(Z!==null){var ft=Z.types;ft===null?Z.types=[z]:ft.indexOf(z)===-1&&ft.push(z)}else _t(Ot.bind(null,z))}var Mt={map:rt,forEach:function(z,Z,ft){rt(z,function(){Z.apply(this,arguments)},ft)},count:function(z){var Z=0;return rt(z,function(){Z++}),Z},toArray:function(z){return rt(z,function(Z){return Z})||[]},only:function(z){if(!H(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return me.Activity=_,me.Children=Mt,me.Component=L,me.Fragment=i,me.Profiler=l,me.PureComponent=w,me.StrictMode=s,me.Suspense=p,me.ViewTransition=v,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,me.__COMPILER_RUNTIME={__proto__:null,c:function(z){return E.H.useMemoCache(z)}},me.addTransitionType=Ot,me.cache=function(z){return function(){return z.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(z,Z,ft){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var G=b({},z.props),tt=z.key;if(Z!=null)for(ht in Z.key!==void 0&&(tt=""+Z.key),Z)!O.call(Z,ht)||ht==="key"||ht==="__self"||ht==="__source"||ht==="ref"&&Z.ref===void 0||(G[ht]=Z[ht]);var ht=arguments.length-2;if(ht===1)G.children=ft;else if(1<ht){for(var xt=Array(ht),j=0;j<ht;j++)xt[j]=arguments[j+2];G.children=xt}return P(z.type,tt,G)},me.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},me.createElement=function(z,Z,ft){var G,tt={},ht=null;if(Z!=null)for(G in Z.key!==void 0&&(ht=""+Z.key),Z)O.call(Z,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(tt[G]=Z[G]);var xt=arguments.length-2;if(xt===1)tt.children=ft;else if(1<xt){for(var j=Array(xt),wt=0;wt<xt;wt++)j[wt]=arguments[wt+2];tt.children=j}if(z&&z.defaultProps)for(G in xt=z.defaultProps,xt)tt[G]===void 0&&(tt[G]=xt[G]);return P(z,ht,tt)},me.createRef=function(){return{current:null}},me.forwardRef=function(z){return{$$typeof:d,render:z}},me.isValidElement=H,me.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:nt}},me.memo=function(z,Z){return{$$typeof:m,type:z,compare:Z===void 0?null:Z}},me.startTransition=_t,me.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},me.use=function(z){return E.H.use(z)},me.useActionState=function(z,Z,ft){return E.H.useActionState(z,Z,ft)},me.useCallback=function(z,Z){return E.H.useCallback(z,Z)},me.useContext=function(z){return E.H.useContext(z)},me.useDebugValue=function(){},me.useDeferredValue=function(z,Z){return E.H.useDeferredValue(z,Z)},me.useEffect=function(z,Z){return E.H.useEffect(z,Z)},me.useEffectEvent=function(z){return E.H.useEffectEvent(z)},me.useId=function(){return E.H.useId()},me.useImperativeHandle=function(z,Z,ft){return E.H.useImperativeHandle(z,Z,ft)},me.useInsertionEffect=function(z,Z){return E.H.useInsertionEffect(z,Z)},me.useLayoutEffect=function(z,Z){return E.H.useLayoutEffect(z,Z)},me.useMemo=function(z,Z){return E.H.useMemo(z,Z)},me.useOptimistic=function(z,Z){return E.H.useOptimistic(z,Z)},me.useReducer=function(z,Z,ft){return E.H.useReducer(z,Z,ft)},me.useRef=function(z){return E.H.useRef(z)},me.useState=function(z){return E.H.useState(z)},me.useSyncExternalStore=function(z,Z,ft){return E.H.useSyncExternalStore(z,Z,ft)},me.useTransition=function(){return E.H.useTransition()},me.version="19.3.0",me}var Dx;function $0(){return Dx||(Dx=1,sp.exports=qb()),sp.exports}var Ge=$0(),rp={exports:{}},Ll={},op={exports:{}},lp={};var Nx;function Wb(){return Nx||(Nx=1,(function(o){function t(X,Y){var rt=X.length;X.push(Y);t:for(;0<rt;){var nt=rt-1>>>1,ct=X[nt];if(0<l(ct,Y))X[nt]=Y,X[rt]=ct,rt=nt;else break t}}function i(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var Y=X[0],rt=X.pop();if(rt!==Y){X[0]=rt;t:for(var nt=0,ct=X.length,_t=ct>>>1;nt<_t;){var Ot=2*(nt+1)-1,Mt=X[Ot],z=Ot+1,Z=X[z];if(0>l(Mt,rt))z<ct&&0>l(Z,Mt)?(X[nt]=Z,X[z]=rt,nt=z):(X[nt]=Mt,X[Ot]=rt,nt=Ot);else if(z<ct&&0>l(Z,rt))X[nt]=Z,X[z]=rt,nt=z;else break t}}return Y}function l(X,Y){var rt=X.sortIndex-Y.sortIndex;return rt!==0?rt:X.id-Y.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,_=null,v=3,x=!1,S=!1,A=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function w(X){for(var Y=i(m);Y!==null;){if(Y.callback===null)s(m);else if(Y.startTime<=X)s(m),Y.sortIndex=Y.expirationTime,t(p,Y);else break;Y=i(m)}}function N(X){if(A=!1,w(X),!S)if(i(p)!==null)S=!0,D||(D=!0,H());else{var Y=i(m);Y!==null&&W(N,Y.startTime-X)}}var D=!1,U=-1,E=5,O=-1;function P(){return b?!0:!(o.unstable_now()-O<E)}function F(){if(b=!1,D){var X=o.unstable_now();O=X;var Y=!0;try{t:{S=!1,A&&(A=!1,L(U),U=-1),x=!0;var rt=v;try{e:{for(w(X),_=i(p);_!==null&&!(_.expirationTime>X&&P());){var nt=_.callback;if(typeof nt=="function"){_.callback=null,v=_.priorityLevel;var ct=nt(_.expirationTime<=X);if(X=o.unstable_now(),typeof ct=="function"){_.callback=ct,w(X),Y=!0;break e}_===i(p)&&s(p),w(X)}else s(p);_=i(p)}if(_!==null)Y=!0;else{var _t=i(m);_t!==null&&W(N,_t.startTime-X),Y=!1}}break t}finally{_=null,v=rt,x=!1}Y=void 0}}finally{Y?H():D=!1}}}var H;if(typeof I=="function")H=function(){I(F)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,k=q.port2;q.port1.onmessage=F,H=function(){k.postMessage(null)}}else H=function(){y(F,0)};function W(X,Y){U=y(function(){X(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(X){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var rt=v;v=Y;try{return X()}finally{v=rt}},o.unstable_requestPaint=function(){b=!0},o.unstable_runWithPriority=function(X,Y){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var rt=v;v=X;try{return Y()}finally{v=rt}},o.unstable_scheduleCallback=function(X,Y,rt){var nt=o.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?nt+rt:nt):rt=nt,X){case 1:var ct=-1;break;case 2:ct=250;break;case 5:ct=1073741823;break;case 4:ct=1e4;break;default:ct=5e3}return ct=rt+ct,X={id:g++,callback:Y,priorityLevel:X,startTime:rt,expirationTime:ct,sortIndex:-1},rt>nt?(X.sortIndex=rt,t(m,X),i(p)===null&&X===i(m)&&(A?(L(U),U=-1):A=!0,W(N,rt-nt))):(X.sortIndex=ct,t(p,X),S||x||(S=!0,D||(D=!0,H()))),X},o.unstable_shouldYield=P,o.unstable_wrapCallback=function(X){var Y=v;return function(){var rt=v;v=Y;try{return X.apply(this,arguments)}finally{v=rt}}}})(lp)),lp}var Ux;function Yb(){return Ux||(Ux=1,op.exports=Wb()),op.exports}var cp={exports:{}},Fn={};var Lx;function Kb(){if(Lx)return Fn;Lx=1;var o=$0();function t(g){var _="https://react.dev/errors/"+g;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)_+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),f=Symbol.for("react.optimistic_key");function d(g,_,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:x===f?f:""+x,children:g,containerInfo:_,implementation:v}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,_){if(g==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fn.browser=function(g){return{$$typeof:c,_reason:g}},Fn.createPortal=function(g,_){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return d(g,_,null,v)},Fn.flushSync=function(g){var _=p.T,v=s.p;try{if(p.T=null,s.p=2,g)return g()}finally{p.T=_,s.p=v,s.d.f()}},Fn.preconnect=function(g,_){typeof g=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(g,_))},Fn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Fn.preinit=function(g,_){if(typeof g=="string"&&_&&typeof _.as=="string"){var v=_.as,x=m(v,_.crossOrigin),S=typeof _.integrity=="string"?_.integrity:void 0,A=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;v==="style"?s.d.S(g,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:A}):v==="script"&&s.d.X(g,{crossOrigin:x,integrity:S,fetchPriority:A,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Fn.preinitModule=function(g,_){if(typeof g=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var v=m(_.as,_.crossOrigin);s.d.M(g,{crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&s.d.M(g)},Fn.preload=function(g,_){if(typeof g=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var v=_.as,x=m(v,_.crossOrigin);s.d.L(g,v,{crossOrigin:x,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Fn.preloadModule=function(g,_){if(typeof g=="string")if(_){var v=m(_.as,_.crossOrigin);s.d.m(g,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else s.d.m(g)},Fn.requestFormReset=function(g){s.d.r(g)},Fn.unstable_batchedUpdates=function(g,_){return g(_)},Fn.useFormState=function(g,_,v){return p.H.useFormState(g,_,v)},Fn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Fn.version="19.3.0",Fn}var Ox;function Zb(){if(Ox)return cp.exports;Ox=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),cp.exports=Kb(),cp.exports}var Px;function Qb(){if(Px)return Ll;Px=1;var o=Yb(),t=$0(),i=Zb();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return p(u),e;if(h===r)return p(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=h;else{for(var M=!1,C=u.child;C;){if(C===a){M=!0,a=u,r=h;break}if(C===r){M=!0,r=u,a=h;break}C=C.sibling}if(!M){for(C=h.child;C;){if(C===a){M=!0,a=h,r=u;break}if(C===r){M=!0,r=h,a=u;break}C=C.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}function _(e,n,a,r,u,h){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,u,h)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&_(e.child,n,a,r,u,h))return!0;e=e.sibling}return!1}function v(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function x(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function S(e){var n=[null,null],a=v(e);return a===null||A(n,e,a.child,{foundSelf:!1}),n}function A(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(e,n,a.child,r))return!0;a=a.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var y=null,L=null;function I(e,n,a){return e===a?!0:e===n?(y=e,!0):!1}function w(e,n,a){return e===a?(L=e,!1):e===n?(L!==null&&(y=e),!0):!1}function N(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function D(e,n,a){for(var r=0,u=e;u;u=a(u))r++;u=0;for(var h=n;h;h=a(h))u++;for(;0<r-u;)e=a(e),r--;for(;0<u-r;)n=a(n),u--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var U=Object.assign,E=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),W=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),nt=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),_t=Symbol.for("react.activity"),Ot=Symbol.for("react.legacy_hidden"),Mt=Symbol.for("react.memo_cache_sentinel"),z=Symbol.for("react.view_transition"),Z=Symbol.for("react.recoverable"),ft=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=ft&&e[ft]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case q:return"Profiler";case H:return"StrictMode";case Y:return"Suspense";case rt:return"SuspenseList";case _t:return"Activity";case z:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case P:return"Portal";case W:return e.displayName||"Context";case k:return(e._context.displayName||"Context")+".Consumer";case X:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nt:return n=e.displayName||null,n!==null?n:ht(e.type)||"Memo";case ct:n=e._payload,e=e._init;try{return ht(e(n))}catch{}}return null}var xt=Array.isArray,j=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,wt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},Qt=[],bt=-1;function Dt(e){return{current:e}}function Et(e){0>bt||(e.current=Qt[bt],Qt[bt]=null,bt--)}function Ft(e,n){bt++,Qt[bt]=e.current,e.current=n}var oe=Dt(null),ve=Dt(null),fe=Dt(null),Te=Dt(null);function Q(e,n){switch(Ft(fe,n),Ft(ve,e),Ft(oe,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?z_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=z_(n),e=I_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Et(oe),Ft(oe,e)}function Ve(){Et(oe),Et(ve),Et(fe)}function _e(e){var n=e.memoizedState;n!==null&&(oo._currentValue=n.memoizedState,Ft(Te,e)),n=oe.current;var a=I_(n,e.type);n!==a&&(Ft(ve,e),Ft(oe,a))}function B(e){ve.current===e&&(Et(oe),Et(ve)),Te.current===e&&(Et(Te),oo._currentValue=ae)}var T,it;function lt(e){if(T===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);T=n&&n[1]||"",it=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+T+e+it}var yt=!1;function Nt(e,n){if(!e||yt)return"";yt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Rt=function(){throw Error()};if(Object.defineProperty(Rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Rt,[])}catch(Vt){var at=Vt}Reflect.construct(e,[],Rt)}else{try{Rt.call()}catch(Vt){at=Vt}Rt=!1;try{var mt=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Rt=!0,new e}finally{Rt&&(mt!==void 0?Object.defineProperty(e.prototype,"props",mt):delete e.prototype.props)}}}else{try{throw Error()}catch(Vt){at=Vt}(Rt=e())&&typeof Rt.catch=="function"&&Rt.catch(function(){})}}catch(Vt){if(Vt&&at&&typeof Vt.stack=="string")return[Vt.stack,at.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=r.DetermineComponentFrameRoot(),M=h[0],C=h[1];if(M&&C){var V=M.split(`
`),ot=C.split(`
`);for(u=r=0;r<V.length&&!V[r].includes("DetermineComponentFrameRoot");)r++;for(;u<ot.length&&!ot[u].includes("DetermineComponentFrameRoot");)u++;if(r===V.length||u===ot.length)for(r=V.length-1,u=ot.length-1;1<=r&&0<=u&&V[r]!==ot[u];)u--;for(;1<=r&&0<=u;r--,u--)if(V[r]!==ot[u]){if(r!==1||u!==1)do if(r--,u--,0>u||V[r]!==ot[u]){var gt=`
`+V[r].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=r&&0<=u);break}}}finally{yt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?lt(a):""}function Pt(e,n){switch(e.tag){case 26:case 27:case 5:return lt(e.type);case 16:return lt("Lazy");case 13:return e.child!==n&&n!==null?lt("Suspense Fallback"):lt("Suspense");case 19:return lt("SuspenseList");case 0:case 15:return Nt(e.type,!1);case 11:return Nt(e.type.render,!1);case 1:return Nt(e.type,!0);case 31:return lt("Activity");case 30:return lt("ViewTransition");default:return""}}function St(e){try{var n="",a=null;do n+=Pt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Tt=Object.prototype.hasOwnProperty,zt=o.unstable_scheduleCallback,ee=o.unstable_cancelCallback,It=o.unstable_shouldYield,Lt=o.unstable_requestPaint,kt=o.unstable_now,re=o.unstable_getCurrentPriorityLevel,pe=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,Bt=o.unstable_NormalPriority,Ct=o.unstable_LowPriority,Ht=o.unstable_IdlePriority,Zt=o.log,Ut=o.unstable_setDisableYieldValue,se=null,Kt=null;function Ie(e){if(typeof Zt=="function"&&Ut(e),Kt&&typeof Kt.setStrictMode=="function")try{Kt.setStrictMode(se,e)}catch{}}var xe=Math.clz32?Math.clz32:Lf,di=Math.log,Ri=Math.LN2;function Lf(e){return e>>>=0,e===0?32:31-(di(e)/Ri|0)|0}var br=256,Hs=262144,ja=4194304;function Ta(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gs(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,h=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var C=r&134217727;return C!==0?(r=C&~h,r!==0?u=Ta(r):(M&=C,M!==0?u=Ta(M):a||(a=C&~e,a!==0&&(u=Ta(a))))):(C=r&~h,C!==0?u=Ta(C):M!==0?u=Ta(M):a||(a=r&~e,a!==0&&(u=Ta(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function $a(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function aa(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-xe(a),u=1<<r;n|=e[r],a&=~u}return n}function Bo(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fo(){var e=ja;return ja<<=1,(ja&62914560)===0&&(ja=4194304),e}function Er(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function sa(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rc(e,n,a,r,u,h){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,V=e.expirationTimes,ot=e.hiddenUpdates;for(a=M&~a;0<a;){var gt=31-xe(a),Rt=1<<gt;C[gt]=0,V[gt]=-1;var at=ot[gt];if(at!==null)for(ot[gt]=null,gt=0;gt<at.length;gt++){var mt=at[gt];mt!==null&&(mt.lane&=-536870913)}a&=~Rt}r!==0&&Vs(e,r,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(M&~n))}function Vs(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-xe(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Ho(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-xe(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Go(e,n){var a=n&-n;return a=(a&42)!==0?1:Vo(a),(a&(e.suspendedLanes|n))!==0?0:a}function Vo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ko(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function oc(){var e=wt.p;return e!==0?e:(e=window.event,e===void 0?32:yx(e.type))}function lc(e,n){var a=wt.p;try{return wt.p=e,n()}finally{wt.p=a}}var Ci=Math.random().toString(36).slice(2),R="__reactFiber$"+Ci,J="__reactProps$"+Ci,vt="__reactContainer$"+Ci,dt="__reactEvents$"+Ci,pt="__reactListeners$"+Ci,qt="__reactHandles$"+Ci,Jt="__reactResources$"+Ci,Gt="__reactMarker$"+Ci,te="__reactLoad$"+Ci;function ne(e){delete e[R],delete e[J],delete e[pt],delete e[qt]}function de(e){var n;if(n=e[R])return n;for(var a=e.parentNode;a;){if(n=a[vt]||a[R]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=tx(e);e!==null;){if(a=e[R])return a;e=tx(e)}return n}e=a,a=e.parentNode}return null}function ye(e){if(e=e[R]||e[vt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function jt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ce(e){var n=e[Jt];return n||(n=e[Jt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ae(e){e[Gt]=!0}function $e(e){e[te]=void 0}var We=new Set,En={};function Wt(e,n){dn(e,n),dn(e+"Capture",n)}function dn(e,n){for(En[e]=n,e=0;e<n.length;e++)We.add(n[e])}var Be=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qn={},pi={};function ra(e){return Tt.call(pi,e)?!0:Tt.call(Qn,e)?!1:Be.test(e)?pi[e]=!0:(Qn[e]=!0,!1)}var we=!1;function Xe(){var e=we;return we=!1,e}function sn(e,n,a){if(ra(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function mi(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Le(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function pn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Aa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cc(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,h=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){a=""+M,h.call(this,M)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Of(e){if(!e._valueTracker){var n=Aa(e)?"checked":"value";e._valueTracker=cc(e,n,""+e[n])}}function Em(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Aa(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var uS=/[\n"\\]/g;function Di(e){return e.replace(uS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pf(e,n,a,r,u,h,M,C){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+pn(n)):e.value!==""+pn(n)&&(e.value=""+pn(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?M==="number"&&e.value==n?zf(e,pn(e.value)):zf(e,pn(n)):a!=null?zf(e,pn(a)):r!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+pn(C):e.removeAttribute("name")}function Tm(e,n,a,r,u,h,M,C){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Of(e);return}a=a!=null?""+pn(a):"",n=n!=null?""+pn(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=C?e.checked:!!r,e.defaultChecked=!!r,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),Of(e)}function zf(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function Tr(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+pn(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Am(e,n,a){if(n!=null&&(n=""+pn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+pn(a):""}function wm(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(xt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=pn(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Of(e)}function Ar(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var fS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rm(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||fS.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Cm(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",we=!0);for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&(Rm(e,u,r),we=!0)}else for(var h in n)n.hasOwnProperty(h)&&Rm(e,h,n[h])}function If(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function uc(e){return dS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function oa(){}var Bf=null;function Ff(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Rr=null;function Dm(e){var n=ye(e);if(n&&(e=n.stateNode)){var a=e[J]||null;t:switch(e=n.stateNode,n.type){case"input":if(Pf(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Di(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[J]||null;if(!u)throw Error(s(90));Pf(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Em(r)}break t;case"textarea":Am(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Tr(e,!!a.multiple,n,!1)}}}var Hf=!1;function Nm(e,n,a){if(Hf)return e(n,a);Hf=!0;try{var r=e(n);return r}finally{if(Hf=!1,(wr!==null||Rr!==null)&&(uu(),wr&&(n=wr,e=Rr,Rr=wr=null,Dm(n),e)))for(n=0;n<e.length;n++)Dm(e[n])}}function Xo(e,n){var a=e.stateNode;if(a===null)return null;var r=a[J]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var wa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gf=!1;if(wa)try{var qo={};Object.defineProperty(qo,"passive",{get:function(){Gf=!0}}),window.addEventListener("test",qo,qo),window.removeEventListener("test",qo,qo)}catch{Gf=!1}var ts=null,Vf=null,fc=null;function Um(){if(fc)return fc;var e,n=Vf,a=n.length,r,u="value"in ts?ts.value:ts.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(r=1;r<=M&&n[a-r]===u[h-r];r++);return fc=u.slice(e,1<r?1-r:void 0)}function hc(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function dc(){return!0}function Lm(){return!1}function Jn(e){function n(a,r,u,h,M){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?dc:Lm,this.isPropagationStopped=Lm,this}return U(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=dc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=dc)},persist:function(){},isPersistent:dc}),n}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=Jn(es),Wo=U({},es,{view:0,detail:0}),pS=Jn(Wo),kf,Xf,Yo,mc=U({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yo&&(Yo&&e.type==="mousemove"?(kf=e.screenX-Yo.screenX,Xf=e.screenY-Yo.screenY):Xf=kf=0,Yo=e),kf)},movementY:function(e){return"movementY"in e?e.movementY:Xf}}),Om=Jn(mc),mS=U({},mc,{dataTransfer:0}),gS=Jn(mS),vS=U({},Wo,{relatedTarget:0}),qf=Jn(vS),_S=U({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),xS=Jn(_S),yS=U({},es,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),SS=Jn(yS),MS=U({},es,{data:0}),Pm=Jn(MS),bS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ES={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=TS[e])?!!n[e]:!1}function Wf(){return AS}var wS=U({},Wo,{key:function(e){if(e.key){var n=bS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ES[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wf,charCode:function(e){return e.type==="keypress"?hc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),RS=Jn(wS),CS=U({},mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zm=Jn(CS),DS=U({},es,{submitter:0}),NS=Jn(DS),US=U({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wf}),LS=Jn(US),OS=U({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),PS=Jn(OS),zS=U({},mc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),IS=Jn(zS),BS=U({},es,{newState:0,oldState:0,source:0}),FS=Jn(BS),HS=[9,13,27,32],Yf=wa&&"CompositionEvent"in window,Ko=null;wa&&"documentMode"in document&&(Ko=document.documentMode);var GS=wa&&"TextEvent"in window&&!Ko,Im=wa&&(!Yf||Ko&&8<Ko&&11>=Ko),Bm=" ",Fm=!1;function Hm(e,n){switch(e){case"keyup":return HS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cr=!1;function VS(e,n){switch(e){case"compositionend":return Gm(n);case"keypress":return n.which!==32?null:(Fm=!0,Bm);case"textInput":return e=n.data,e===Bm&&Fm?null:e;default:return null}}function kS(e,n){if(Cr)return e==="compositionend"||!Yf&&Hm(e,n)?(e=Um(),fc=Vf=ts=null,Cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Im&&n.locale!=="ko"?null:n.data;default:return null}}var XS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!XS[e.type]:n==="textarea"}function km(e,n,a,r){wr?Rr?Rr.push(r):Rr=[r]:wr=r,n=gu(n,"onChange"),0<n.length&&(a=new pc("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Zo=null,Qo=null;function qS(e){D_(e,0)}function gc(e){var n=jt(e);if(Em(n))return e}function Xm(e,n){if(e==="change")return n}var qm=!1;if(wa){var Kf;if(wa){var Zf="oninput"in document;if(!Zf){var Wm=document.createElement("div");Wm.setAttribute("oninput","return;"),Zf=typeof Wm.oninput=="function"}Kf=Zf}else Kf=!1;qm=Kf&&(!document.documentMode||9<document.documentMode)}function Ym(){Zo&&(Zo.detachEvent("onpropertychange",Km),Qo=Zo=null)}function Km(e){if(e.propertyName==="value"&&gc(Qo)){var n=[];km(n,Qo,e,Ff(e)),Nm(qS,n)}}function WS(e,n,a){e==="focusin"?(Ym(),Zo=n,Qo=a,Zo.attachEvent("onpropertychange",Km)):e==="focusout"&&Ym()}function YS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gc(Qo)}function KS(e,n){if(e==="click")return gc(n)}function ZS(e,n){if(e==="input"||e==="change")return gc(n)}function QS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var gi=typeof Object.is=="function"?Object.is:QS;function Jo(e,n){if(gi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Tt.call(n,u)||!gi(e[u],n[u]))return!1}return!0}function Qf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qm(e,n){var a=Zm(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Zm(a)}}function Jm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Jm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function jm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Qf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Qf(e.document)}return n}function Jf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var JS=wa&&"documentMode"in document&&11>=document.documentMode,Dr=null,jf=null,jo=null,$f=!1;function $m(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$f||Dr==null||Dr!==Qf(r)||(r=Dr,"selectionStart"in r&&Jf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jo&&Jo(jo,r)||(jo=r,r=gu(jf,"onSelect"),0<r.length&&(n=new pc("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Dr)))}function ks(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Nr={animationend:ks("Animation","AnimationEnd"),animationiteration:ks("Animation","AnimationIteration"),animationstart:ks("Animation","AnimationStart"),transitionrun:ks("Transition","TransitionRun"),transitionstart:ks("Transition","TransitionStart"),transitioncancel:ks("Transition","TransitionCancel"),transitionend:ks("Transition","TransitionEnd")},th={},tg={};wa&&(tg=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function Xs(e){if(th[e])return th[e];if(!Nr[e])return e;var n=Nr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in tg)return th[e]=n[a];return e}var eg=Xs("animationend"),ng=Xs("animationiteration"),ig=Xs("animationstart"),jS=Xs("transitionrun"),$S=Xs("transitionstart"),tM=Xs("transitioncancel"),ag=Xs("transitionend"),sg=new Map,eh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");eh.push("scrollEnd");function ki(e,n){sg.set(e,n),Wt(n,[e])}var eM=0;function Ra(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Yi.identifierPrefix;var a=eM++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function rg(e){if(e==null||typeof e=="string")return e;var n=null,a=Jr;if(a!==null)for(var r=0;r<a.length;r++){var u=e[a[r]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??e.default}function Ca(e,n){return e=rg(e),n=rg(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var vc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ni=[],Ur=0,nh=0;function _c(){for(var e=Ur,n=nh=Ur=0;n<e;){var a=Ni[n];Ni[n++]=null;var r=Ni[n];Ni[n++]=null;var u=Ni[n];Ni[n++]=null;var h=Ni[n];if(Ni[n++]=null,r!==null&&u!==null){var M=r.pending;M===null?u.next=u:(u.next=M.next,M.next=u),r.pending=u}h!==0&&og(a,u,h)}}function xc(e,n,a,r){Ni[Ur++]=e,Ni[Ur++]=n,Ni[Ur++]=a,Ni[Ur++]=r,nh|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ih(e,n,a,r){return xc(e,n,a,r),yc(e)}function qs(e,n){return xc(e,null,null,n),yc(e)}function og(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,r=h.alternate,r!==null&&(r.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-xe(a),e=h.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),h):null}function yc(e){if(50<yl)throw yl=0,cu=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Lr={};function nM(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,n,a,r){return new nM(e,n,a,r)}function ah(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Da(e,n){var a=e.alternate;return a===null?(a=ii(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function lg(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Sc(e,n,a,r,u,h){var M=0;if(r=e,typeof r=="function")ah(r)&&(M=1);else if(typeof r=="string")M=Db(e,a,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(r){case _t:return e=ii(31,a,n,u),e.elementType=_t,e.lanes=h,e;case F:return Ws(a.children,u,h,n);case H:M=8,u|=24;break;case q:return e=ii(12,a,n,u|2),e.elementType=q,e.lanes=h,e;case Y:return e=ii(13,a,n,u),e.elementType=Y,e.lanes=h,e;case rt:return e=ii(19,a,n,u),e.elementType=rt,e.lanes=h,e;case Ot:case z:return e=u|32,e=ii(30,a,n,e),e.elementType=z,e.lanes=h,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case W:M=10;break t;case k:M=9;break t;case X:M=11;break t;case nt:M=14;break t;case ct:M=16,r=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=ii(M,a,n,u),n.elementType=e,n.type=r,n.lanes=h,n}function Ws(e,n,a,r){return e=ii(7,e,r,n),e.lanes=a,e}function sh(e,n,a){return e=ii(6,e,null,n),e.lanes=a,e}function cg(e){var n=ii(18,null,null,0);return n.stateNode=e,n}function rh(e,n,a){return n=ii(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ug=new WeakMap;function Ui(e,n){if(typeof e=="object"&&e!==null){var a=ug.get(e);return a!==void 0?a:(n={value:e,source:n,stack:St(n)},ug.set(e,n),n)}return{value:e,source:n,stack:St(n)}}var Or=[],Pr=0,Mc=null,$o=0,Li=[],Oi=0,ns=null,la=1,ca="";function Na(e,n){Or[Pr++]=$o,Or[Pr++]=Mc,Mc=e,$o=n}function fg(e,n,a){Li[Oi++]=la,Li[Oi++]=ca,Li[Oi++]=ns,ns=e;var r=la;e=ca;var u=32-xe(r)-1;r&=~(1<<u),a+=1;var h=32-xe(n)+u;if(30<h){var M=u-u%5;h=(r&(1<<M)-1).toString(32),r>>=M,u-=M,la=1<<32-xe(n)+u|a<<u|r,ca=h+e}else la=1<<h|a<<u|r,ca=e}function bc(e){e.return!==null&&(Na(e,1),fg(e,1,0))}function oh(e){for(;e===Mc;)Mc=Or[--Pr],Or[Pr]=null,$o=Or[--Pr],Or[Pr]=null;for(;e===ns;)ns=Li[--Oi],Li[Oi]=null,ca=Li[--Oi],Li[Oi]=null,la=Li[--Oi],Li[Oi]=null}function hg(e,n){Li[Oi++]=la,Li[Oi++]=ca,Li[Oi++]=ns,la=n.id,ca=n.overflow,ns=e}var Rn=null,rn=null,Re=!1,is=null,Pi=!1,lh=Error(s(519));function as(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tl(Ui(n,e)),lh}function dg(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[R]=e,n[J]=r,a){case"dialog":Ne("cancel",n),Ne("close",n);break;case"iframe":case"object":case"embed":Ne("load",n);break;case"video":case"audio":for(a=0;a<Ml.length;a++)Ne(Ml[a],n);break;case"source":Ne("error",n);break;case"img":case"image":case"link":Ne("error",n),Ne("load",n);break;case"details":Ne("toggle",n);break;case"input":Ne("invalid",n),Tm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ne("invalid",n);break;case"textarea":Ne("invalid",n),wm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||O_(n.textContent,a)?(r.popover!=null&&(Ne("beforetoggle",n),Ne("toggle",n)),r.onScroll!=null&&Ne("scroll",n),r.onScrollEnd!=null&&Ne("scrollend",n),r.onClick!=null&&(n.onclick=oa),n=!0):n=!1,n||as(e,!0)}function Ec(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:Rn=Rn.return}}function zr(e){if(e!==Rn)return!1;if(!Re)return Ec(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Bd(e.type,e.memoizedProps)),a=!a),a&&rn&&as(e),Ec(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));rn=$_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));rn=$_(e)}else n===27?(n=rn,ys(e.type)?(e=Yd,Yd=null,rn=e):rn=n):rn=Rn?Ii(e.stateNode.nextSibling):null;return!0}function Ys(){rn=Rn=null,Re=!1}function ch(){var e=is;return e!==null&&(ri===null?ri=e:ri.push.apply(ri,e),is=null),e}function tl(e){is===null?is=[e]:is.push(e)}var uh=Dt(null),Ks=null,Ua=null;function ss(e,n,a){Ft(uh,n._currentValue),n._currentValue=a}function La(e){e._currentValue=uh.current,Et(uh)}function Tc(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function fh(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var M=u.child;h=h.firstContext;t:for(;h!==null;){var C=h;h=u;for(var V=0;V<n.length;V++)if(C.context===n[V]){h.lanes|=a,C=h.alternate,C!==null&&(C.lanes|=a),Tc(h.return,a,e),r||(M=null);break t}h=C.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),Tc(M,a,e),M=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,M=u.alternate,M!==null&&(M.lanes|=a),Tc(u.return,a,e),M=u.child,M=M!==null?M.sibling:null):M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Zs(e,n,a,r){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var C=u.type;gi(u.pendingProps.value,M.value)||(e!==null?e.push(C):e=[C])}}else if(u===Te.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(oo):e=[oo])}u=u.return}return e!==null&&fh(n,e,a,r),n.flags|=262144,e!==null}function Ac(e){for(e=e.firstContext;e!==null;){if(!gi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qs(e){Ks=e,Ua=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function On(e){return pg(Ks,e)}function wc(e,n){return Ks===null&&Qs(e),pg(e,n)}function pg(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ua===null){if(e===null)throw Error(s(308));Ua=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ua=Ua.next=n;return a}var iM=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},aM=o.unstable_scheduleCallback,sM=o.unstable_NormalPriority,_n={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hh(){return{controller:new iM,data:new Map,refCount:0}}function el(e){e.refCount--,e.refCount===0&&aM(sM,function(){e.controller.abort()})}function mg(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var nl=null;function rM(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var il=null,dh=0,Js=0,Ir=null;function oM(e,n){if(il===null){var a=il=[];dh=0,Js=Cd(),Ir={status:"pending",value:void 0,then:function(r){a.push(r)}}}return dh++,n.then(gg,gg),n}function gg(){if(--dh===0&&(nl=null,il!==null)){Ir!==null&&(Ir.status="fulfilled");var e=il;il=null,Js=0,Ir=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function lM(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var vg=j.S;j.S=function(e,n){if(c_=kt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&oM(e,n),nl!==null)for(var a=eo;a!==null;)mg(a,nl),a=a.next;if(a=e.types,a!==null){for(var r=eo;r!==null;)mg(r,a),r=r.next;if(Js!==0){r=nl,r===null&&(r=nl=[]);for(var u=0;u<a.length;u++){var h=a[u];r.indexOf(h)===-1&&r.push(h)}}}vg!==null&&vg(e,n)};var js=Dt(null);function ph(){var e=js.current;return e!==null?e:nn.pooledCache}function Rc(e,n){n===null?Ft(js,js.current):Ft(js,n.pool)}function _g(){var e=ph();return e===null?null:{parent:_n._currentValue,pool:e}}var Br=Error(s(460)),mh=Error(s(474)),Cc=Error(s(542)),Dc={then:function(){}};function xg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yg(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(oa,oa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Mg(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(oa,oa);else{if(e=nn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Mg(e),e}throw tr=n,Br}}function $s(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(tr=a,Br):a}}var tr=null;function Sg(){if(tr===null)throw Error(s(459));var e=tr;return tr=null,e}function Mg(e){if(e===Br||e===Cc)throw Error(s(483))}var Fr=null,al=0;function Nc(e){var n=al;return al+=1,Fr===null&&(Fr=[]),yg(Fr,e,n)}function rs(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Uc(e,n){throw n.$$typeof===E?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function bg(e){function n(st,$){if(e){var ut=st.deletions;ut===null?(st.deletions=[$],st.flags|=16):ut.push($)}}function a(st,$){if(!e)return null;for(;$!==null;)n(st,$),$=$.sibling;return null}function r(st){for(var $=new Map;st!==null;)st.key===null?$.set(st.index,st):$.set(st.key,st),st=st.sibling;return $}function u(st,$){return st=Da(st,$),st.index=0,st.sibling=null,st}function h(st,$,ut){return st.index=ut,e?(ut=st.alternate,ut!==null?(ut=ut.index,ut<$?(st.flags|=2,$):ut):(st.flags|=134217730,$)):(st.flags|=1048576,$)}function M(st){return e&&st.alternate===null&&(st.flags|=134217730),st}function C(st,$,ut,At){return $===null||$.tag!==6?($=sh(ut,st.mode,At),$.return=st,$):($=u($,ut),$.return=st,$)}function V(st,$,ut,At){var $t=ut.type;return $t===F?(st=gt(st,$,ut.props.children,At,ut.key),rs(st,ut),st):$!==null&&($.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===ct&&$s($t)===$.type)?($=u($,ut.props),rs($,ut),$.return=st,$):($=Sc(ut.type,ut.key,ut.props,null,st.mode,At),rs($,ut),$.return=st,$)}function ot(st,$,ut,At){return $===null||$.tag!==4||$.stateNode.containerInfo!==ut.containerInfo||$.stateNode.implementation!==ut.implementation?($=rh(ut,st.mode,At),$.return=st,$):($=u($,ut.children||[]),$.return=st,$)}function gt(st,$,ut,At,$t){return $===null||$.tag!==7?($=Ws(ut,st.mode,At,$t),$.return=st,$):($=u($,ut),$.return=st,$)}function Rt(st,$,ut){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=sh(""+$,st.mode,ut),$.return=st,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case O:return ut=Sc($.type,$.key,$.props,null,st.mode,ut),rs(ut,$),ut.return=st,ut;case P:return $=rh($,st.mode,ut),$.return=st,$;case ct:return $=$s($),Rt(st,$,ut)}if(xt($)||G($))return $=Ws($,st.mode,ut,null),$.return=st,$;if(typeof $.then=="function")return Rt(st,Nc($),ut);if($.$$typeof===W)return Rt(st,wc(st,$),ut);Uc(st,$)}return null}function at(st,$,ut,At){var $t=$!==null?$.key:null;if(typeof ut=="string"&&ut!==""||typeof ut=="number"||typeof ut=="bigint")return $t!==null?null:C(st,$,""+ut,At);if(typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case O:return ut.key===$t?V(st,$,ut,At):null;case P:return ut.key===$t?ot(st,$,ut,At):null;case ct:return ut=$s(ut),at(st,$,ut,At)}if(xt(ut)||G(ut))return $t!==null?null:gt(st,$,ut,At,null);if(typeof ut.then=="function")return at(st,$,Nc(ut),At);if(ut.$$typeof===W)return at(st,$,wc(st,ut),At);Uc(st,ut)}return null}function mt(st,$,ut,At,$t){if(typeof At=="string"&&At!==""||typeof At=="number"||typeof At=="bigint")return st=st.get(ut)||null,C($,st,""+At,$t);if(typeof At=="object"&&At!==null){switch(At.$$typeof){case O:return st=st.get(At.key===null?ut:At.key)||null,V($,st,At,$t);case P:return st=st.get(At.key===null?ut:At.key)||null,ot($,st,At,$t);case ct:return At=$s(At),mt(st,$,ut,At,$t)}if(xt(At)||G(At))return st=st.get(ut)||null,gt($,st,At,$t,null);if(typeof At.then=="function")return mt(st,$,ut,Nc(At),$t);if(At.$$typeof===W)return mt(st,$,ut,wc($,At),$t);Uc($,At)}return null}function Vt(st,$,ut,At){for(var $t=null,Pe=null,le=$,ue=$=0,Sn=null;le!==null&&ue<ut.length;ue++){le.index>ue?(Sn=le,le=null):Sn=le.sibling;var He=at(st,le,ut[ue],At);if(He===null){le===null&&(le=Sn);break}e&&le&&He.alternate===null&&n(st,le),$=h(He,$,ue),Pe===null?$t=He:Pe.sibling=He,Pe=He,le=Sn}if(ue===ut.length)return a(st,le),Re&&Na(st,ue),$t;if(le===null){for(;ue<ut.length;ue++)le=Rt(st,ut[ue],At),le!==null&&($=h(le,$,ue),Pe===null?$t=le:Pe.sibling=le,Pe=le);return Re&&Na(st,ue),$t}for(le=r(le);ue<ut.length;ue++)Sn=mt(le,st,ue,ut[ue],At),Sn!==null&&(e&&(He=Sn.alternate,He!==null&&le.delete(He.key===null?ue:He.key)),$=h(Sn,$,ue),Pe===null?$t=Sn:Pe.sibling=Sn,Pe=Sn);return e&&le.forEach(function(Ts){return n(st,Ts)}),Re&&Na(st,ue),$t}function ie(st,$,ut,At){if(ut==null)throw Error(s(151));for(var $t=null,Pe=null,le=$,ue=$=0,Sn=null,He=ut.next();le!==null&&!He.done;ue++,He=ut.next()){le.index>ue?(Sn=le,le=null):Sn=le.sibling;var Ts=at(st,le,He.value,At);if(Ts===null){le===null&&(le=Sn);break}e&&le&&Ts.alternate===null&&n(st,le),$=h(Ts,$,ue),Pe===null?$t=Ts:Pe.sibling=Ts,Pe=Ts,le=Sn}if(He.done)return a(st,le),Re&&Na(st,ue),$t;if(le===null){for(;!He.done;ue++,He=ut.next())He=Rt(st,He.value,At),He!==null&&($=h(He,$,ue),Pe===null?$t=He:Pe.sibling=He,Pe=He);return Re&&Na(st,ue),$t}for(le=r(le);!He.done;ue++,He=ut.next())He=mt(le,st,ue,He.value,At),He!==null&&(e&&(Sn=He.alternate,Sn!==null&&le.delete(Sn.key===null?ue:Sn.key)),$=h(He,$,ue),Pe===null?$t=He:Pe.sibling=He,Pe=He);return e&&le.forEach(function(Vb){return n(st,Vb)}),Re&&Na(st,ue),$t}function Me(st,$,ut,At){if(typeof ut=="object"&&ut!==null&&ut.type===F&&ut.key===null&&ut.props.ref===void 0&&(ut=ut.props.children),typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case O:t:{for(var $t=ut.key;$!==null;){if($.key===$t){if($t=ut.type,$t===F){if($.tag===7){a(st,$.sibling),At=u($,ut.props.children),rs(At,ut),At.return=st,st=At;break t}}else if($.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===ct&&$s($t)===$.type){a(st,$.sibling),At=u($,ut.props),rs(At,ut),At.return=st,st=At;break t}a(st,$);break}else n(st,$);$=$.sibling}ut.type===F?(At=Ws(ut.props.children,st.mode,At,ut.key),rs(At,ut),At.return=st,st=At):(At=Sc(ut.type,ut.key,ut.props,null,st.mode,At),rs(At,ut),At.return=st,st=At)}return M(st);case P:t:{for($t=ut.key;$!==null;){if($.key===$t)if($.tag===4&&$.stateNode.containerInfo===ut.containerInfo&&$.stateNode.implementation===ut.implementation){a(st,$.sibling),At=u($,ut.children||[]),At.return=st,st=At;break t}else{a(st,$);break}else n(st,$);$=$.sibling}At=rh(ut,st.mode,At),At.return=st,st=At}return M(st);case ct:return ut=$s(ut),Me(st,$,ut,At)}if(xt(ut))return Vt(st,$,ut,At);if(G(ut)){if($t=G(ut),typeof $t!="function")throw Error(s(150));return ut=$t.call(ut),ie(st,$,ut,At)}if(typeof ut.then=="function")return Me(st,$,Nc(ut),At);if(ut.$$typeof===W)return Me(st,$,wc(st,ut),At);Uc(st,ut)}return typeof ut=="string"&&ut!==""||typeof ut=="number"||typeof ut=="bigint"?(ut=""+ut,$!==null&&$.tag===6?(a(st,$.sibling),At=u($,ut),At.return=st,st=At):(a(st,$),At=sh(ut,st.mode,At),At.return=st,st=At),M(st)):a(st,$)}return function(st,$,ut,At){try{al=0;var $t=Me(st,$,ut,At);return Fr=null,$t}catch(le){if(le===Br||le===Cc)throw le;var Pe=ii(29,le,null,st.mode);return Pe.lanes=At,Pe.return=st,Pe}}}var er=bg(!0),Eg=bg(!1),os=!1;function gh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ls(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function cs(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(qe&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=yc(e),og(e,null,a),n}return xc(e,r,n,a),yc(e)}function sl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ho(e,a)}}function _h(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var xh=!1;function rl(){if(xh){var e=Ir;if(e!==null)throw e}}function ol(e,n,a,r){xh=!1;var u=e.updateQueue;os=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var V=C,ot=V.next;V.next=null,M===null?h=ot:M.next=ot,M=V;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,C=gt.lastBaseUpdate,C!==M&&(C===null?gt.firstBaseUpdate=ot:C.next=ot,gt.lastBaseUpdate=V))}if(h!==null){var Rt=u.baseState;M=0,gt=ot=V=null,C=h;do{var at=C.lane&-536870913,mt=at!==C.lane;if(mt?(Oe&at)===at:(r&at)===at){at!==0&&at===Js&&(xh=!0),gt!==null&&(gt=gt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Vt=e,ie=C;at=n;var Me=a;switch(ie.tag){case 1:if(Vt=ie.payload,typeof Vt=="function"){Rt=Vt.call(Me,Rt,at);break t}Rt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=ie.payload,at=typeof Vt=="function"?Vt.call(Me,Rt,at):Vt,at==null)break t;Rt=U({},Rt,at);break t;case 2:os=!0}}at=C.callback,at!==null&&(e.flags|=64,mt&&(e.flags|=8192),mt=u.callbacks,mt===null?u.callbacks=[at]:mt.push(at))}else mt={lane:at,tag:C.tag,payload:C.payload,callback:C.callback,next:null},gt===null?(ot=gt=mt,V=Rt):gt=gt.next=mt,M|=at;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;mt=C,C=mt.next,mt.next=null,u.lastBaseUpdate=mt,u.shared.pending=null}}while(!0);gt===null&&(V=Rt),u.baseState=V,u.firstBaseUpdate=ot,u.lastBaseUpdate=gt,h===null&&(u.shared.lanes=0),gs|=M,e.lanes=M,e.memoizedState=Rt}}function Tg(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Ag(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Tg(a[e],n)}var us=Dt(null),Lc=Dt(0);function wg(e,n){e=Ba,Ft(Lc,e),Ft(us,n),Ba=e|n.baseLanes}function yh(){Ft(Lc,Ba),Ft(us,us.current)}function Sh(){Ba=Lc.current,Et(us),Et(Lc)}var Pn=Dt(null),Xn=null;function fs(e){var n=e.alternate;Ft(zn,zn.current&1),Ft(Pn,e),Xn===null&&(n===null||us.current!==null||n.memoizedState!==null)&&(Xn=e)}function Mh(e){Ft(zn,zn.current),Ft(Pn,e),Xn===null&&(Xn=e)}function Rg(e){e.tag===22?(Ft(zn,zn.current),Ft(Pn,e),Xn===null&&(Xn=e)):hs()}function hs(){Ft(zn,zn.current),Ft(Pn,Pn.current)}function vi(e){Et(Pn),Xn===e&&(Xn=null),Et(zn)}var zn=Dt(0);function ll(e,n){Ft(Pn,Pn.current),Ft(zn,n)}function bh(e){Et(zn),Et(Pn),Xn===e&&(Xn=null)}function Oc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||qd(a)||Wd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Oa=0,Se=null,tn=null,xn=null,Pc=!1,Hr=!1,nr=!1,zc=0,cl=0,Gr=null,cM=0;function mn(){throw Error(s(321))}function Eh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!gi(e[a],n[a]))return!1;return!0}function Th(e,n,a,r,u,h){return Oa=h,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,j.H=e===null||e.memoizedState===null?fv:hv,nr=!1,h=a(r,u),nr=!1,Hr&&(h=Dg(n,a,r,u)),Cg(e),h}function Cg(e){j.H=kc;var n=tn!==null&&tn.next!==null;if(Oa=0,xn=tn=Se=null,Pc=!1,cl=0,Gr=null,n)throw Error(s(300));e===null||yn||(e=e.dependencies,e!==null&&Ac(e)&&(yn=!0))}function Dg(e,n,a,r){Se=e;var u=0;do{if(Hr&&(Gr=null),cl=0,Hr=!1,25<=u)throw Error(s(301));if(u+=1,xn=tn=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}j.H=vM,h=n(a,r)}while(Hr);return h}function uM(){var e=j.H,n=e.useState()[0];return n=typeof n.then=="function"?ul(n):n,e=e.useState()[0],(tn!==null?tn.memoizedState:null)!==e&&(Se.flags|=1024),n}function Ah(){var e=zc!==0;return zc=0,e}function wh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Rh(e){if(Pc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Pc=!1}Oa=0,xn=tn=Se=null,Hr=!1,cl=zc=0,Gr=null}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?Se.memoizedState=xn=e:xn=xn.next=e,xn}function vn(){if(tn===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=tn.next;var n=xn===null?Se.memoizedState:xn.next;if(n!==null)xn=n,tn=e;else{if(e===null)throw Se.alternate===null?Error(s(467)):Error(s(310));tn=e,e={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},xn===null?Se.memoizedState=xn=e:xn=xn.next=e}return xn}function Ic(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ul(e){var n=cl;return cl+=1,Gr===null&&(Gr=[]),e=yg(Gr,e,n),n=Se,(xn===null?n.memoizedState:xn.next)===null&&(n=n.alternate,j.H=n===null||n.memoizedState===null?fv:hv),e}function Bc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ul(e);if(e.$$typeof===Z)return;if(e.$$typeof===W)return On(e)}throw Error(s(438,String(e)))}function Ch(e){var n=null,a=Se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=Se.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ic(),Se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=Mt;return n.index++,a}function Pa(e,n){return typeof n=="function"?n(e):n}function Fc(e){var n=vn();return Dh(n,tn,e)}function Dh(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,h=r.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}n.baseQueue=u=h,r.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var C=M=null,V=null,ot=n,gt=!1;do{var Rt=ot.lane&-536870913;if(Rt!==ot.lane?(Oe&Rt)===Rt:(Oa&Rt)===Rt){var at=ot.revertLane;if(at===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),Rt===Js&&(gt=!0);else if((Oa&at)===at){ot=ot.next,at===Js&&(gt=!0);continue}else Rt={lane:0,revertLane:ot.revertLane,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},V===null?(C=V=Rt,M=h):V=V.next=Rt,Se.lanes|=at,gs|=at;Rt=ot.action,nr&&a(h,Rt),h=ot.hasEagerState?ot.eagerState:a(h,Rt)}else at={lane:Rt,revertLane:ot.revertLane,gesture:ot.gesture,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},V===null?(C=V=at,M=h):V=V.next=at,Se.lanes|=Rt,gs|=Rt;ot=ot.next}while(ot!==null&&ot!==n);if(V===null?M=h:V.next=C,!gi(h,e.memoizedState)&&(yn=!0,gt&&(a=Ir,a!==null)))throw a;e.memoizedState=h,e.baseState=M,e.baseQueue=V,r.lastRenderedState=h}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Nh(e){var n=vn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do h=e(h,M.action),M=M.next;while(M!==u);gi(h,n.memoizedState)||(yn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,r]}function Ng(e,n,a){var r=Se,u=vn(),h=Re;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!gi((tn||u).memoizedState,a);if(M&&(u.memoizedState=a,yn=!0),u=u.queue,Oh(Og.bind(null,r,u,e),[e]),e=u.getSnapshot!==n||M||xn!==null&&(xn.memoizedState.tag&1)!==0,Vr(e?9:8,{destroy:void 0},Lg.bind(null,r,u,a,n),null),e){if(r.flags|=2048,nn===null)throw Error(s(349));h||(Oa&127)!==0||Ug(r,n,a)}return a}function Ug(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Se.updateQueue,n===null?(n=Ic(),Se.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Lg(e,n,a,r){n.value=a,n.getSnapshot=r,Pg(n)&&zg(e)}function Og(e,n,a){return a(function(){Pg(n)&&zg(e)})}function Pg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!gi(e,a)}catch{return!0}}function zg(e){var n=qs(e,2);n!==null&&oi(n,e,2)}function Uh(e){var n=jn();if(typeof e=="function"){var a=e;if(e=a(),nr){Ie(!0);try{a()}finally{Ie(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:e},n}function Ig(e,n,a,r){return e.baseState=a,Dh(e,tn,typeof r=="function"?r:Pa)}function fM(e,n,a,r,u){if(Vc(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};j.T!==null?a(!0):h.isTransition=!1,r(h),a=n.pending,a===null?(h.next=n.pending=h,Bg(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Bg(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var h=j.T,M={};M.types=h!==null?h.types:null,j.T=M;try{var C=a(u,r),V=j.S;V!==null&&V(M,C),Fg(e,n,C)}catch(ot){Lh(e,n,ot)}finally{h!==null&&M.types!==null&&(h.types=M.types),j.T=h}}else try{h=a(u,r),Fg(e,n,h)}catch(ot){Lh(e,n,ot)}}function Fg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Hg(e,n,r)},function(r){return Lh(e,n,r)}):Hg(e,n,a)}function Hg(e,n,a){n.status="fulfilled",n.value=a,Gg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Bg(e,a)))}function Lh(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Gg(n),n=n.next;while(n!==r)}e.action=null}function Gg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Vg(e,n){return n}function kg(e,n){if(Re){var a=nn.formState;if(a!==null){t:{var r=Se;if(Re){if(rn){e:{for(var u=rn,h=Pi;u.nodeType!==8;){if(!h){u=null;break e}if(u=Ii(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){rn=Ii(u.nextSibling),r=u.data==="F!";break t}}as(r)}r=!1}r&&(n=a[0])}}return a=jn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vg,lastRenderedState:n},a.queue=r,a=lv.bind(null,Se,r),r.dispatch=a,r=Uh(!1),h=Fh.bind(null,Se,!1,r.queue),r=jn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=fM.bind(null,Se,u,h,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function Xg(e){var n=vn();return qg(n,tn,e)}function qg(e,n,a){if(n=Dh(e,n,Vg)[0],e=Fc(Pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ul(n)}catch(M){throw M===Br?Cc:M}else r=n;n=vn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(Se.flags|=2048,Vr(9,{destroy:void 0},hM.bind(null,u,a),null)),[r,h,e]}function hM(e,n){e.action=n}function Wg(e){var n=vn(),a=tn;if(a!==null)return qg(n,a,e);vn(),n=n.memoizedState,a=vn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Vr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=Se.updateQueue,n===null&&(n=Ic(),Se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Yg(){return vn().memoizedState}function Hc(e,n,a,r){var u=jn();Se.flags|=e,u.memoizedState=Vr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Gc(e,n,a,r){var u=vn();r=r===void 0?null:r;var h=u.memoizedState.inst;tn!==null&&r!==null&&Eh(r,tn.memoizedState.deps)?u.memoizedState=Vr(n,h,a,r):(Se.flags|=e,u.memoizedState=Vr(1|n,h,a,r))}function Kg(e,n){Hc(8390656,8,e,n)}function Oh(e,n){Gc(2048,8,e,n)}function dM(e){Se.flags|=4;var n=Se.updateQueue;if(n===null)n=Ic(),Se.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Zg(e){var n=vn().memoizedState;return dM({ref:n,nextImpl:e}),function(){if((qe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Qg(e,n){return Gc(4,2,e,n)}function Jg(e,n){return Gc(4,4,e,n)}function jg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function $g(e,n,a){a=a!=null?a.concat([e]):null,Gc(4,4,jg.bind(null,n,e),a)}function Ph(){}function tv(e,n){var a=vn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Eh(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function ev(e,n){var a=vn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Eh(n,r[1]))return r[0];if(r=e(),nr){Ie(!0);try{e()}finally{Ie(!1)}}return a.memoizedState=[r,n],r}function zh(e,n,a){return a===void 0||(Oa&1073741824)!==0&&(Oe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=f_(),Se.lanes|=e,gs|=e,a)}function nv(e,n,a,r){return gi(a,n)?a:us.current!==null?(e=zh(e,a,r),gi(e,n)||(yn=!0),e):(Oa&106)===0||(Oa&1073741824)!==0&&(Oe&261930)===0?(yn=!0,e.memoizedState=a):(e=f_(),Se.lanes|=e,gs|=e,n)}function iv(e,n,a,r,u){var h=wt.p;wt.p=h!==0&&8>h?h:8;var M=j.T,C={};C.types=M!==null?M.types:null,j.T=C,Fh(e,!1,n,a);try{var V=u(),ot=j.S;if(ot!==null&&ot(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var gt=lM(V,r);fl(e,n,gt,Si(e))}else fl(e,n,r,Si(e))}catch(Rt){fl(e,n,{then:function(){},status:"rejected",reason:Rt},Si())}finally{wt.p=h,M!==null&&C.types!==null&&(M.types=C.types),j.T=M}}function pM(){}function Ih(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=av(e).queue;iv(e,u,n,ae,a===null?pM:function(){return sv(e),a(r)})}function av(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:ae},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function sv(e){var n=av(e);n.next===null&&(n=e.alternate.memoizedState),fl(e,n.next.queue,{},Si())}function Bh(){return On(oo)}function rv(){return vn().memoizedState}function ov(){return vn().memoizedState}function mM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Si();e=ls(a);var r=cs(n,e,a);r!==null&&(oi(r,n,a),sl(r,n,a)),n={cache:hh()},e.payload=n;return}n=n.return}}function gM(e,n,a){var r=Si();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vc(e)?cv(n,a):(a=ih(e,n,a,r),a!==null&&(oi(a,e,r),uv(a,n,r)))}function lv(e,n,a){var r=Si();fl(e,n,a,r)}function fl(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vc(e))cv(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,C=h(M,a);if(u.hasEagerState=!0,u.eagerState=C,gi(C,M))return xc(e,n,u,0),nn===null&&_c(),!1}catch{}if(a=ih(e,n,u,r),a!==null)return oi(a,e,r),uv(a,n,r),!0}return!1}function Fh(e,n,a,r){if(r={lane:2,revertLane:Cd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Vc(e)){if(n)throw Error(s(479))}else n=ih(e,a,r,2),n!==null&&oi(n,e,2)}function Vc(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function cv(e,n){Hr=Pc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function uv(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ho(e,a)}}var kc={readContext:On,use:Bc,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useLayoutEffect:mn,useInsertionEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useSyncExternalStore:mn,useId:mn,useHostTransitionStatus:mn,useFormState:mn,useActionState:mn,useOptimistic:mn,useMemoCache:mn,useCacheRefresh:mn,useEffectEvent:mn},fv={readContext:On,use:Bc,useCallback:function(e,n){return jn().memoizedState=[e,n===void 0?null:n],e},useContext:On,useEffect:Kg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Hc(4194308,4,jg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Hc(4194308,4,e,n)},useInsertionEffect:function(e,n){Hc(4,2,e,n)},useMemo:function(e,n){var a=jn();n=n===void 0?null:n;var r=e();if(nr){Ie(!0);try{e()}finally{Ie(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=jn();if(a!==void 0){var u=a(n);if(nr){Ie(!0);try{a(n)}finally{Ie(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=gM.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var n=jn();return e={current:e},n.memoizedState=e},useState:function(e){e=Uh(e);var n=e.queue,a=lv.bind(null,Se,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ph,useDeferredValue:function(e,n){var a=jn();return zh(a,e,n)},useTransition:function(){var e=Uh(!1);return e=iv.bind(null,Se,e.queue,!0,!1),jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=Se,u=jn();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),nn===null)throw Error(s(349));(Oe&127)!==0||Ug(r,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Kg(Og.bind(null,r,h,e),[e]),r.flags|=2048,Vr(9,{destroy:void 0},Lg.bind(null,r,h,a,n),null),a},useId:function(){var e=jn(),n=nn.identifierPrefix;if(Re){var a=ca,r=la;a=(r&~(1<<32-xe(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=zc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=cM++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Bh,useFormState:kg,useActionState:kg,useOptimistic:function(e){var n=jn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Fh.bind(null,Se,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ch,useCacheRefresh:function(){return jn().memoizedState=mM.bind(null,Se)},useEffectEvent:function(e){var n=jn(),a={impl:e};return n.memoizedState=a,function(){if((qe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},hv={readContext:On,use:Bc,useCallback:tv,useContext:On,useEffect:Oh,useImperativeHandle:$g,useInsertionEffect:Qg,useLayoutEffect:Jg,useMemo:ev,useReducer:Fc,useRef:Yg,useState:function(){return Fc(Pa)},useDebugValue:Ph,useDeferredValue:function(e,n){var a=vn();return nv(a,tn.memoizedState,e,n)},useTransition:function(){var e=Fc(Pa)[0],n=vn().memoizedState;return[typeof e=="boolean"?e:ul(e),n]},useSyncExternalStore:Ng,useId:rv,useHostTransitionStatus:Bh,useFormState:Xg,useActionState:Xg,useOptimistic:function(e,n){var a=vn();return Ig(a,tn,e,n)},useMemoCache:Ch,useCacheRefresh:ov,useEffectEvent:Zg},vM={readContext:On,use:Bc,useCallback:tv,useContext:On,useEffect:Oh,useImperativeHandle:$g,useInsertionEffect:Qg,useLayoutEffect:Jg,useMemo:ev,useReducer:Nh,useRef:Yg,useState:function(){return Nh(Pa)},useDebugValue:Ph,useDeferredValue:function(e,n){var a=vn();return tn===null?zh(a,e,n):nv(a,tn.memoizedState,e,n)},useTransition:function(){var e=Nh(Pa)[0],n=vn().memoizedState;return[typeof e=="boolean"?e:ul(e),n]},useSyncExternalStore:Ng,useId:rv,useHostTransitionStatus:Bh,useFormState:Wg,useActionState:Wg,useOptimistic:function(e,n){var a=vn();return tn!==null?Ig(a,tn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ch,useCacheRefresh:ov,useEffectEvent:Zg};function Hh(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:U({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gh={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Si(),u=ls(r);u.payload=n,a!=null&&(u.callback=a),n=cs(e,u,r),n!==null&&(oi(n,e,r),sl(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Si(),u=ls(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=cs(e,u,r),n!==null&&(oi(n,e,r),sl(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Si(),r=ls(a);r.tag=2,n!=null&&(r.callback=n),n=cs(e,r,a),n!==null&&(oi(n,e,a),sl(n,e,a))}};function dv(e,n,a,r,u,h,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,h,M):n.prototype&&n.prototype.isPureReactComponent?!Jo(a,r)||!Jo(u,h):!0}function pv(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Gh.enqueueReplaceState(n,n.state,null)}function ir(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=U({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function mv(e){vc(e)}function gv(e){console.error(e)}function vv(e){vc(e)}function Xc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function _v(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Vh(e,n,a){return a=ls(a),a.tag=3,a.payload={element:null},a.callback=function(){Xc(e,n)},a}function xv(e){return e=ls(e),e.tag=3,e}function yv(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;e.payload=function(){return u(h)},e.callback=function(){_v(n,a,r)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){_v(n,a,r),typeof u!="function"&&(vs===null?vs=new Set([this]):vs.add(this));var C=r.stack;this.componentDidCatch(r.value,{componentStack:C!==null?C:""})})}function _M(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Zs(n,a,u,!0),a=Pn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Xn===null?fu():a.alternate===null&&gn===0&&(gn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Dc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Ad(e,r,u)),!1;case 22:return a.flags|=65536,r===Dc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Ad(e,r,u)),!1}throw Error(s(435,a.tag))}return Ad(e,r,u),fu(),!1}if(Re)return n=Pn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==lh&&(e=Error(s(422),{cause:r}),tl(Ui(e,a)))):(r!==lh&&(n=Error(s(423),{cause:r}),tl(Ui(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=Ui(r,a),u=Vh(e.stateNode,r,u),_h(e,u),gn!==4&&(gn=2)),!1;var h=Error(s(520),{cause:r});if(h=Ui(h,a),xl===null?xl=[h]:xl.push(h),gn!==4&&(gn=2),n===null)return!0;r=Ui(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Vh(a.stateNode,r,e),_h(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(vs===null||!vs.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=xv(u),yv(u,e,a,r),_h(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var kh=Error(s(461)),yn=!1;function Tn(e,n,a,r){n.child=e===null?Eg(n,null,a,r):er(n,e.child,a,r)}function Sv(e,n,a,r,u){a=a.render;var h=n.ref;if("ref"in r){var M={};for(var C in r)C!=="ref"&&(M[C]=r[C])}else M=r;return Qs(n),r=Th(e,n,a,M,h,u),C=Ah(),e!==null&&!yn?(wh(e,n,u),za(e,n,u)):(Re&&C&&bc(n),n.flags|=1,Tn(e,n,r,u),n.child)}function Mv(e,n,a,r,u){if(e===null){var h=a.type;return typeof h=="function"&&!ah(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,bv(e,n,h,r,u)):(e=Sc(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Jh(e,u)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:Jo,a(M,r)&&e.ref===n.ref)return za(e,n,u)}return n.flags|=1,e=Da(h,r),e.ref=n.ref,e.return=n,n.child=e}function bv(e,n,a,r,u){if(e!==null){var h=e.memoizedProps;if(Jo(h,r)&&e.ref===n.ref)if(yn=!1,n.pendingProps=r=h,Jh(e,u))(e.flags&131072)!==0&&(yn=!0);else return n.lanes=e.lanes,za(e,n,u)}return Xh(e,n,a,r,u)}function Ev(e,n,a,r){var u=r.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~h}else r=0,n.child=null;return Tv(e,n,h,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rc(n,h!==null?h.cachePool:null),h!==null?wg(n,h):yh(),Rg(n);else return r=n.lanes=536870912,Tv(e,n,h!==null?h.baseLanes|a:a,a,r)}else h!==null?(Rc(n,h.cachePool),wg(n,h),hs(),n.memoizedState=null):(e!==null&&Rc(n,null),yh(),hs());return Tn(e,n,u,a),n.child}function hl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Tv(e,n,a,r,u){var h=ph();return h=h===null?null:{parent:_n._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Rc(n,null),yh(),Rg(n),e!==null&&Zs(e,n,r,!0),n.childLanes=u,null}function qc(e,n){return n=Wc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Av(e,n,a){return er(n,e.child,null,a),e=qc(n,n.pendingProps),e.flags|=2,vi(n),n.memoizedState=null,e}function xM(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Re){if(r.mode==="hidden")return e=qc(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},hl(null,e);if(Mh(n),(e=rn)?(e=j_(e,Pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ns!==null?{id:la,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},a=cg(e),a.return=n,n.child=a,Rn=n,rn=null)):e=null,e===null)throw as(n);return n.lanes=536870912,null}return qc(n,r)}var h=e.memoizedState;if(h!==null){var M=h.dehydrated;if(Mh(n),u)if(n.flags&256)n.flags&=-257,n=Av(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(yn||Zs(e,n,a,!1),u=(a&e.childLanes)!==0,yn||u){if(us.current===null){if(r=nn,r!==null&&(M=Go(r,a),M!==0&&M!==h.retryLane))throw h.retryLane=M,qs(e,M),oi(r,e,M),kh;fu()}n=Av(e,n,a)}else e=h.treeContext,rn=Ii(M.nextSibling),Rn=n,Re=!0,is=null,Pi=!1,e!==null&&hg(n,e),n=qc(n,r),n.flags|=134221824;return n}return e=Da(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function kr(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Xh(e,n,a,r,u){return Qs(n),a=Th(e,n,a,r,void 0,u),r=Ah(),e!==null&&!yn?(wh(e,n,u),za(e,n,u)):(Re&&r&&bc(n),n.flags|=1,Tn(e,n,a,u),n.child)}function wv(e,n,a,r,u,h){return Qs(n),n.updateQueue=null,a=Dg(n,r,a,u),Cg(e),r=Ah(),e!==null&&!yn?(wh(e,n,h),za(e,n,h)):(Re&&r&&bc(n),n.flags|=1,Tn(e,n,a,h),n.child)}function Rv(e,n,a,r,u){if(Qs(n),n.stateNode===null){var h=Lr,M=a.contextType;typeof M=="object"&&M!==null&&(h=On(M)),h=new a(r,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Gh,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=r,h.state=n.memoizedState,h.refs={},gh(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?On(M):Lr,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Hh(n,a,M,r),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&Gh.enqueueReplaceState(h,h.state,null),ol(n,r,h,u),rl(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){h=n.stateNode;var C=n.memoizedProps,V=ir(a,C);h.props=V;var ot=h.context,gt=a.contextType;M=Lr,typeof gt=="object"&&gt!==null&&(M=On(gt));var Rt=a.getDerivedStateFromProps;gt=typeof Rt=="function"||typeof h.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,gt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(C||ot!==M)&&pv(n,h,r,M),os=!1;var at=n.memoizedState;h.state=at,ol(n,r,h,u),rl(),ot=n.memoizedState,C||at!==ot||os?(typeof Rt=="function"&&(Hh(n,a,Rt,r),ot=n.memoizedState),(V=os||dv(n,a,V,r,at,ot,M))?(gt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ot),h.props=r,h.state=ot,h.context=M,r=V):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{h=n.stateNode,vh(e,n),M=n.memoizedProps,gt=ir(a,M),h.props=gt,Rt=n.pendingProps,at=h.context,ot=a.contextType,V=Lr,typeof ot=="object"&&ot!==null&&(V=On(ot)),C=a.getDerivedStateFromProps,(ot=typeof C=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==Rt||at!==V)&&pv(n,h,r,V),os=!1,at=n.memoizedState,h.state=at,ol(n,r,h,u),rl();var mt=n.memoizedState;M!==Rt||at!==mt||os||e!==null&&e.dependencies!==null&&Ac(e.dependencies)?(typeof C=="function"&&(Hh(n,a,C,r),mt=n.memoizedState),(gt=os||dv(n,a,gt,r,at,mt,V)||e!==null&&e.dependencies!==null&&Ac(e.dependencies))?(ot||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(r,mt,V),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(r,mt,V)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=mt),h.props=r,h.state=mt,h.context=V,r=gt):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),r=!1)}return h=r,kr(e,n),r=(n.flags&128)!==0,h||r?(h=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&r?(n.child=er(n,e.child,null,u),n.child=er(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=za(e,n,u),e}function Cv(e,n,a,r){return Ys(),n.flags|=256,Tn(e,n,a,r),n.child}var qh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wh(e){return{baseLanes:e,cachePool:_g()}}function Yh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=yi),e}function Dv(e,n,a){var r=n.pendingProps,u=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=e!==null&&e.memoizedState===null?!1:(zn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(u?fs(n):hs(),(e=rn)?(e=j_(e,Pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ns!==null?{id:la,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},a=cg(e),a.return=n,n.child=a,Rn=n,rn=null)):e=null,e===null)throw as(n);return Wd(e)?n.lanes=32:n.lanes=536870912,null}return h=r.children,r=r.fallback,u?(hs(),u=n.mode,h=Wc({mode:"hidden",children:h},u),r=Ws(r,u,a,null),h.return=n,r.return=n,h.sibling=r,n.child=h,r=n.child,r.memoizedState=Wh(a),r.childLanes=Yh(e,M,a),n.memoizedState=qh,hl(null,r)):(fs(n),Kh(n,h))}var C=e.memoizedState;if(C!==null){var V=C.dehydrated;if(V!==null)return yM(e,n,h,M,r,V,C,a)}return u?(hs(),u=r.fallback,h=n.mode,C=e.child,V=C.sibling,r=Da(C,{mode:"hidden",children:r.children}),r.subtreeFlags=C.subtreeFlags&1206910976,V!==null?u=Da(V,u):(u=Ws(u,h,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,hl(null,r),r=n.child,u=e.child.memoizedState,u===null?u=Wh(a):(h=u.cachePool,h!==null?(C=_n._currentValue,h=h.parent!==C?{parent:C,pool:C}:h):h=_g(),u={baseLanes:u.baseLanes|a,cachePool:h}),r.memoizedState=u,r.childLanes=Yh(e,M,a),n.memoizedState=qh,hl(e.child,r)):(fs(n),a=e.child,e=a.sibling,a=Da(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function Kh(e,n){return n=Wc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Wc(e,n){return e=ii(22,e,null,n),e.lanes=0,e}function Yc(e,n,a){return er(n,e.child,null,a),e=Kh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function yM(e,n,a,r,u,h,M,C){if(a)return n.flags&256?(fs(n),n.flags&=-257,Yc(e,n,C)):n.memoizedState!==null?(hs(),n.child=e.child,n.flags|=128,null):(hs(),h=u.fallback,M=n.mode,u=Wc({mode:"visible",children:u.children},M),h=Ws(h,M,C,null),h.flags|=2,u.return=n,h.return=n,u.sibling=h,n.child=u,er(n,e.child,null,C),u=n.child,u.memoizedState=Wh(C),u.childLanes=Yh(e,r,C),n.memoizedState=qh,hl(null,u));if(fs(n),Wd(h)){if(r=h.nextSibling&&h.nextSibling.dataset,r)var V=r.dgst;return r=V,r!==""&&(u=Error(s(419)),u.stack="",u.digest=r,tl({value:u,source:null,stack:null})),Yc(e,n,C)}if(yn||Zs(e,n,C,!1),r=(C&e.childLanes)!==0,yn||r){if(us.current!==null)return Yc(e,n,C);if(r=nn,r!==null&&(u=Go(r,C),u!==0&&u!==M.retryLane))throw M.retryLane=u,qs(e,u),oi(r,e,u),kh;return qd(h)||fu(),Yc(e,n,C)}return qd(h)?(n.flags|=192,n.child=e.child,null):(e=M.treeContext,rn=Ii(h.nextSibling),Rn=n,Re=!0,is=null,Pi=!1,e!==null&&hg(n,e),n=Kh(n,u.children),n.flags|=134221824,n)}function Nv(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Tc(e.return,n,a)}function Uv(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&Oc(a)===null&&(n=e),e=e.sibling}return n}function Kc(e,n,a,r,u,h){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:h}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=r,M.tail=a,M.tailMode=u,M.treeForkCount=h)}function Zh(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Qh(e,n,a){var r=n.pendingProps,u=r.revealOrder,h=r.tail;r=r.children;var M=zn.current;if(n.flags&128)return ll(n,M),null;var C=(M&2)!==0;if(C?(M=M&1|2,n.flags|=128):M&=1,ll(n,M),u==="backwards"&&e!==null?(Zh(e),Tn(e,n,r,a),Zh(e)):Tn(e,n,r,a),r=Re?$o:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nv(e,a,n);else if(e.tag===19)Nv(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"backwards":a=Uv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Zh(n)),Kc(n,!0,u,null,h,r);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Oc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Kc(n,!0,a,null,h,r);break;case"together":Kc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Uv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Kc(n,!1,u,a,h,r)}return n.child}function Lv(e,n,a){var r=n.pendingProps;return ss(n,n.type,r.value),Tn(e,n,r.children,a),n.child}function za(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),gs|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Zs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Da(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Da(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Jh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ac(e)))}function SM(e,n,a){switch(n.tag){case 3:Q(n,n.stateNode.containerInfo),ss(n,_n,e.memoizedState.cache),Ys();break;case 27:case 5:_e(n);break;case 4:Q(n,n.stateNode.containerInfo);break;case 10:ss(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mh(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return fs(n),n.flags|=128,null;r=Zs(e,n,a,!1);var u=n.child.childLanes;return r||(a&u)!==0?Dv(e,n,a):(fs(n),e=za(e,n,a),e!==null?e.sibling:null)}fs(n);break;case 19:if(n.flags&128)return Qh(e,n,a);if(u=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Zs(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Qh(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ll(n,zn.current),r)break;return null;case 22:return n.lanes=0,Ev(e,n,a,n.pendingProps);case 24:ss(n,_n,e.memoizedState.cache)}return za(e,n,a)}function Ov(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)yn=!0;else{if(!Jh(e,a)&&(n.flags&128)===0)return yn=!1,SM(e,n,a);yn=(e.flags&131072)!==0}else yn=!1,Re&&(n.flags&1048576)!==0&&fg(n,$o,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=$s(n.elementType),n.type=e,typeof e=="function")ah(e)?(r=ir(e,r),n.tag=1,n=Rv(null,n,e,r,a)):(n.tag=0,n=Xh(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===X){n.tag=11,n=Sv(null,n,e,r,a);break t}else if(u===nt){n.tag=14,n=Mv(null,n,e,r,a);break t}else if(u===W){n.tag=10,n.type=e,n=Lv(null,n,a);break t}}throw n=ht(e)||e,Error(s(306,n,""))}}return n;case 0:return Xh(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=ir(r,n.pendingProps),Rv(e,n,r,u,a);case 3:t:{if(Q(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var h=n.memoizedState;u=h.element,vh(e,n),ol(n,r,null,a);var M=n.memoizedState;if(r=M.cache,ss(n,_n,r),r!==h.cache&&fh(n,[_n],a,!0),rl(),r=M.element,h.isDehydrated)if(h={element:r,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Cv(e,n,r,a);break t}else if(r!==u){u=Ui(Error(s(424)),n),tl(u),n=Cv(e,n,r,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,rn=Ii(e.firstChild),Rn=n,Re=!0,is=null,Pi=!0,a=Eg(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Ys(),r===u){n=za(e,n,a);break t}Tn(e,n,r,a)}n=n.child}return n;case 26:return kr(e,n),e===null?(a=sx(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(n.stateNode=B_(n.type,n.pendingProps,fe.current,n)):n.memoizedState=sx(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return _e(n),e===null&&Re&&(r=n.stateNode=ex(n.type,n.pendingProps,fe.current),Rn=n,Pi=!0,u=rn,ys(n.type)?(Yd=u,rn=Ii(r.firstChild)):rn=u),Tn(e,n,n.pendingProps.children,a),kr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((u=r=rn)&&(r=mb(r,n.type,n.pendingProps,Pi),r!==null?(n.stateNode=r,Rn=n,rn=Ii(r.firstChild),Pi=!1,u=!0):u=!1),u||as(n)),_e(n),u=n.type,h=n.pendingProps,M=e!==null?e.memoizedProps:null,r=h.children,Bd(u,h)?r=null:M!==null&&Bd(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Th(e,n,uM,null,null,a),oo._currentValue=u),kr(e,n),Tn(e,n,r,a),n.child;case 6:return e===null&&Re&&((e=a=rn)&&(a=gb(a,n.pendingProps,Pi),a!==null?(n.stateNode=a,Rn=n,rn=null,e=!0):e=!1),e||as(n)),null;case 13:return Dv(e,n,a);case 4:return Q(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=er(n,null,r,a):Tn(e,n,r,a),n.child;case 11:return Sv(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,kr(e,n),Tn(e,n,r,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return Lv(e,n,a);case 9:return u=n.type._context,r=n.pendingProps.children,Qs(n),u=On(u),r=r(u),n.flags|=1,Tn(e,n,r,a),n.child;case 14:return Mv(e,n,n.type,n.pendingProps,a);case 15:return bv(e,n,n.type,n.pendingProps,a);case 19:return Qh(e,n,a);case 31:return xM(e,n,a);case 22:return Ev(e,n,a,n.pendingProps);case 24:return Qs(n),r=On(_n),e===null?(u=ph(),u===null&&(u=nn,h=hh(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:r,cache:u},gh(n),ss(n,_n,u)):((e.lanes&a)!==0&&(vh(e,n),ol(n,null,null,a),rl()),u=e.memoizedState,h=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ss(n,_n,r)):(r=h.cache,ss(n,_n,r),r!==u.cache&&fh(n,[_n],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:Re&&bc(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:kr(e,n),Tn(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ia(e){e.flags|=4}function jh(e,n,a,r,u){var h;if((h=(e.mode&32)!==0)&&(h=a===null?cx(n,r):cx(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),h){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(m_())e.flags|=8192;else throw tr=Dc,mh}else e.flags&=-16777217}function Pv(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ux(n))if(m_())e.flags|=8192;else throw tr=Dc,mh}function Zc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Fo():536870912,e.lanes|=n,Kr|=n)}function dl(e,n){if(!Re)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function on(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&1206910976,r|=u.flags&1206910976,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function MM(e,n,a){var r=n.pendingProps;switch(oh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(n),null;case 1:return on(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),La(_n),Ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(zr(n)?Ia(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ch())),on(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(Ia(n),h!==null?(on(n),Pv(n,h)):(on(n),jh(n,u,null,r,a))):h?h!==e.memoizedState?(Ia(n),on(n),Pv(n,h)):(on(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ia(n),on(n),jh(n,u,e,r,a)),null;case 27:if(B(n),a=fe.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return on(n),n.subtreeFlags&=-33554433,null}e=oe.current,zr(n)?dg(n):(e=ex(u,r,a),n.stateNode=e,Ia(n))}return on(n),n.subtreeFlags&=-33554433,null;case 5:if(B(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return on(n),n.subtreeFlags&=-33554433,null}if(h=oe.current,zr(n))dg(n);else{var M=El(fe.current);switch(h){case 1:h=M.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=M.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=M.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof r.is=="string"?M.createElement("select",{is:r.is}):M.createElement("select"),r.multiple?h.multiple=!0:r.size&&(h.size=r.size);break;default:h=typeof r.is=="string"?M.createElement(u,{is:r.is}):M.createElement(u)}}h[R]=n,h[J]=r;t:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)h.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break t;for(;M.sibling===null;){if(M.return===null||M.return===n)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=h;t:switch(Bn(h,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ia(n)}}return on(n),n.subtreeFlags&=-33554433,jh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ia(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=fe.current,zr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[R]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||O_(e.nodeValue,a)),e||as(n,!0)}else e=El(e).createTextNode(r),e[R]=n,n.stateNode=e}return on(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=zr(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[R]=n}else Ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;on(n),e=!1}else a=ch(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(vi(n),n):(vi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return on(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=zr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[R]=n}else Ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;on(n),u=!1}else u=ch(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(vi(n),n):(vi(n),null)}return vi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),h=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(h=r.memoizedState.cachePool.pool),h!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Zc(n,n.updateQueue),on(n),null);case 4:return Ve(),e===null&&Ld(n.stateNode.containerInfo),n.flags|=67108864,on(n),null;case 10:return La(n.type),on(n),null;case 19:if(bh(n),r=n.memoizedState,r===null)return on(n),null;if(u=(n.flags&128)!==0,h=r.rendering,h===null)if(u)dl(r,!1);else{if(gn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Oc(e),h!==null){for(n.flags|=128,dl(r,!1),e=h.updateQueue,n.updateQueue=e,Zc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)lg(a,e),a=a.sibling;return ll(n,zn.current&1|2),Re&&Na(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&kt()>ou&&(n.flags|=128,u=!0,dl(r,!1),n.lanes=4194304)}else{if(!u)if(e=Oc(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Zc(n,e),dl(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!h.alternate&&!Re)return on(n),null}else 2*kt()-r.renderingStartTime>ou&&a!==536870912&&(n.flags|=128,u=!0,dl(r,!1),n.lanes=4194304);r.isBackwards?(h.sibling=n.child,n.child=h):(e=r.last,e!==null?e.sibling=h:n.child=h,r.last=h)}if(r.tail!==null){e=r.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=kt(),e.sibling=null,h=zn.current,h=u?h&1|2:h&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Re?ll(n,h):(a=h,Ft(Pn,n),Ft(zn,a),Xn===null&&(Xn=n)),Re&&Na(n,r.treeForkCount),e}return on(n),null;case 22:case 23:return vi(n),Sh(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(on(n),n.subtreeFlags&6&&(n.flags|=8192)):on(n),a=n.updateQueue,a!==null&&Zc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Et(js),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),La(_n),on(n),null;case 25:return null;case 30:return n.flags|=33554432,on(n),null}throw Error(s(156,n.tag))}function bM(e,n){switch(oh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return La(_n),Ve(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return B(n),null;case 31:if(n.memoizedState!==null){if(vi(n),n.alternate===null)throw Error(s(340));Ys()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(vi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ys()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return bh(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return Ve(),null;case 10:return La(n.type),null;case 22:case 23:return vi(n),Sh(),e!==null&&Et(js),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return La(_n),null;case 25:return null;default:return null}}function zv(e,n){switch(oh(n),n.tag){case 3:La(_n),Ve();break;case 26:case 27:case 5:B(n);break;case 4:Ve();break;case 31:n.memoizedState!==null&&vi(n);break;case 13:vi(n);break;case 19:bh(n);break;case 10:La(n.type);break;case 22:case 23:vi(n),Sh(),e!==null&&Et(js);break;case 24:La(_n)}}function pl(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var h=a.create,M=a.inst;r=h(),M.destroy=r}a=a.next}while(a!==u)}}catch(C){Ze(n,n.return,C)}}function ds(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var h=u.next;r=h;do{if((r.tag&e)===e){var M=r.inst,C=M.destroy;if(C!==void 0){M.destroy=void 0,u=n;var V=a,ot=C;try{ot()}catch(gt){Ze(u,V,gt)}}}r=r.next}while(r!==h)}}catch(gt){Ze(n,n.return,gt)}}function Iv(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Ag(n,a)}catch(r){Ze(e,e.return,r)}}}function Bv(e,n,a){a.props=ir(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ze(e,n,r)}}function ua(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var u=e.stateNode,h=Ra(e.memoizedProps,u);(u.ref===null||u.ref.name!==h)&&(u.ref=q_(h)),r=u.ref;break;case 7:if(e.stateNode===null){var M=new Mi(e);_(e.child,!1,db,M,void 0,void 0),e.stateNode=M}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(C){Ze(e,n,C)}}function In(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Ze(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ze(e,n,u)}else a.current=null}function Qc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)J_(e.stateNode,n[a])}function Fv(e){for(var n=e.return;n!==null&&(td(n)&&J_(e.stateNode,n.stateNode),!$h(n));)n=n.return}function ml(e){for(var n=e.return;n!==null&&(td(n)&&pb(e.stateNode,n.stateNode),!$h(n));)n=n.return}function $h(e){return e.tag===5||e.tag===3||e.tag===27}function td(e){return e&&e.tag===7&&e.stateNode!==null}function ed(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Ze(e,e.return,u)}}function nd(e,n,a){try{var r=e.stateNode;ZM(r,e.type,a,n),r[J]=n}catch(u){Ze(e,e.return,u)}}function Hv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ys(e.type)||e.tag===4}function id(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Hv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ys(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ad(e,n,a,r){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=oa)),Qc(e,r),we=!0;else if(u!==4&&(u===27&&(Qc(e,r),r=null,ys(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(ad(e,n,a,r),e=e.sibling;e!==null;)ad(e,n,a,r),e=e.sibling}function Jc(e,n,a,r){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Qc(e,r),we=!0;else if(u!==4&&(u===27&&(Qc(e,r),r=null,ys(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Jc(e,n,a,r),e=e.sibling;e!==null;)Jc(e,n,a,r),e=e.sibling}function Gv(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Bn(n,r,a),n[R]=e,n[J]=a}catch(h){Ze(e,e.return,h)}}var jc=!1,_i=null;function Vv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(jc=!0)}var fa=null;function kv(){var e=fa;return fa=null,e}var ai=0;function Xr(e,n,a,r,u){return ai=0,Xv(e.child,n,a,r,u)}function Xv(e,n,a,r,u){for(var h=!1;e!==null;){if(e.tag===5){var M=e.stateNode;if(r!==null){var C=Gd(M);r.push(C),C.view&&(h=!0)}else h||Gd(M).view&&(h=!0);jc=!0,k_(M,ai===0?n:n+"_"+ai,a),ai++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&u||Xv(e.child,n,a,r,u)&&(h=!0));e=e.sibling}return h}function ha(e,n){for(;e!==null;)e.tag===5?X_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||ha(e.child,n)),e=e.sibling}function $c(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&($c(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=Ca(n.default,n.share),n!=="none"&&(Xr(e,a,n,null,!1)||ha(e.child,!1))}e=e.sibling}}function sd(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,u=Ra(r,a),h=Ca(r.default,a.paired?r.share:r.enter);h!=="none"?Xr(e,u,h,null,!1)?($c(e),a.paired||n||jr(e,r.onEnter)):ha(e.child,!1):$c(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)sd(e,n),e=e.sibling;else $c(e)}function rd(e){if(_i!==null&&_i.size!==0){var n=_i;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var u=n.get(r);if(u!==void 0){var h=Ca(a.default,a.share);if(h!=="none"&&(Xr(e,r,h,null,!1)?(h=e.stateNode,u.paired=h,h.paired=u,jr(e,a.onShare)):ha(e.child,!1)),n.delete(r),n.size===0)break}}}rd(e)}e=e.sibling}}}function od(e){if(e.tag===30){var n=e.memoizedProps,a=Ra(n,e.stateNode),r=_i!==null?_i.get(a):void 0,u=Ca(n.default,r!==void 0?n.share:n.exit);u!=="none"&&(Xr(e,a,u,null,!1)?r!==void 0?(u=e.stateNode,r.paired=u,u.paired=r,_i.delete(a),jr(e,n.onShare)):jr(e,n.onExit):ha(e.child,!1)),_i!==null&&rd(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)od(e),e=e.sibling;else _i!==null&&rd(e)}function qv(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=Ra(n,e.stateNode);n=Ca(n.default,n.update),e.flags&=-5,n!=="none"&&Xr(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&qv(e);e=e.sibling}}function ld(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,ha(e.child,!1))}ld(e)}e=e.sibling}}function tu(e){if(e.tag===30)e.stateNode.paired=null,ha(e.child,!1),ld(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)tu(e),e=e.sibling;else ld(e)}function Wv(e){for(e=e.child;e!==null;)e.tag===30?ha(e.child,!1):(e.subtreeFlags&33554432)!==0&&Wv(e),e=e.sibling}function cd(e,n,a,r,u,h,M){for(var C=!1;n!==null;){if(n.tag===5){var V=n.stateNode;if(h!==null&&ai<h.length){var ot=h[ai],gt=Gd(V);(ot.view||gt.view)&&(C=!0);var Rt;if(Rt=(e.flags&4)===0)if(gt.clip)Rt=!0;else{Rt=ot.rect;var at=gt.rect;Rt=Rt.y!==at.y||Rt.x!==at.x||Rt.height!==at.height||Rt.width!==at.width}Rt&&(e.flags|=4),gt.abs?gt=!ot.abs:(ot=ot.rect,gt=gt.rect,gt=ot.height!==gt.height||ot.width!==gt.width),gt&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&k_(V,ai===0?a:a+"_"+ai,u),C&&(e.flags&4)!==0||(fa===null&&(fa=[]),fa.push(V,ai===0?r:r+"_"+ai,n.memoizedProps)),ai++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&M?e.flags|=n.flags&32:cd(e,n.child,a,r,u,h,M)&&(C=!0));n=n.sibling}return C}function Yv(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,u=Ra(a,r),h=Ca(a.default,a.update),M;M=e.memoizedState,e.memoizedState=null,r=e;var C=e.child;ai=0,u=cd(r,C,u,u,h,M,!1),(e.flags&4)!==0&&u&&jr(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Yv(e);e=e.sibling}}var Cn=!1,Ye=!1,da=!1,ud=!1,Kv=typeof WeakSet=="function"?WeakSet:Set,Dn=null,pa=!1,gl=!1,eu=!1,fd=!1;function EM(e,n,a){if(e=e.containerInfo,zd=lo,e=jm(e),Jf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var h=u.anchorOffset,M=u.focusNode;u=u.focusOffset;try{r.nodeType,M.nodeType}catch{r=null;break t}var C=0,V=-1,ot=-1,gt=0,Rt=0,at=e,mt=null;e:for(;;){for(var Vt;at!==r||h!==0&&at.nodeType!==3||(V=C+h),at!==M||u!==0&&at.nodeType!==3||(ot=C+u),at.nodeType===3&&(C+=at.nodeValue.length),(Vt=at.firstChild)!==null;)mt=at,at=Vt;for(;;){if(at===e)break e;if(mt===r&&++gt===h&&(V=C),mt===M&&++Rt===u&&(ot=C),(Vt=at.nextSibling)!==null)break;at=mt,mt=at.parentNode}at=Vt}r=V===-1||ot===-1?null:{start:V,end:ot}}else r=null}r=r||{start:0,end:0}}else r=null;for(Id={focusedElem:e,selectionRange:r},lo=!1,a=(a&335544064)===a,Dn=n,n=a?9270:1024;Dn!==null;){if(e=Dn,a&&(r=e.deletions,r!==null))for(h=0;h<r.length;h++)a&&od(r[h]);if(e.alternate===null&&(e.flags&2)!==0)a&&Vv(e),nu(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&od(r),nu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&Vv(e),nu(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,Dn=r):(a&&qv(e),nu(a))}}_i=null}function nu(e){for(;Dn!==null;){var n=Dn,a=e,r=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&r!==null){a=void 0,u=r.memoizedProps,r=r.memoizedState;var h=n.stateNode;try{var M=ir(n.type,u);a=h.getSnapshotBeforeUpdate(M,r),h.__reactInternalSnapshotBeforeUpdate=a}catch(C){Ze(n,n.return,C)}}break;case 3:if((u&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Xd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Xd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=Ra(r.memoizedProps,r.stateNode),u=n.memoizedProps,u=Ca(u.default,u.update),u!=="none"&&Xr(r,a,u,r.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Dn=r;break}Dn=n.return}}function Zv(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ma(e,a),r&4&&pl(5,a);break;case 1:if(ma(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Ze(a,a.return,M)}else{var u=ir(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Ze(a,a.return,M)}}r&64&&Iv(a),r&512&&ua(a,a.return);break;case 3:if(ma(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ag(e,n)}catch(M){Ze(a,a.return,M)}}break;case 27:n===null&&r&4&&Gv(a);case 26:case 5:ma(e,a),n===null&&r&4&&ed(a),r&512&&ua(a,a.return);break;case 12:ma(e,a);break;case 31:ma(e,a),r&4&&$v(e,a);break;case 13:ma(e,a),r&4&&t_(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=zM.bind(null,a),vb(e,a))));break;case 22:if(r=a.memoizedState!==null||Cn,!r){var h=n!==null&&n.memoizedState!==null||Ye;n=Cn,u=Ye,Cn=r,(Ye=h)&&!u?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Wi(e,a,r)):ma(e,a),Cn=n,Ye=u}break;case 30:ma(e,a),r&512&&ua(a,a.return);break;case 7:r&512&&ua(a,a.return);default:ma(e,a)}}function hd(e,n){for(e=e.child;e!==null;)Qv(e,n),e=e.sibling}function Qv(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var u=e.stateNode,h=e.memoizedProps.style,M=h!=null&&h.hasOwnProperty("display")?h.display:null;u.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(V){Ze(e,e.return,V)}dd(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,we=!0}catch(V){Ze(e,e.return,V)}break;case 18:try{var C=e.stateNode;n?V_(C,!0):V_(e.stateNode,!1)}catch(V){Ze(e,e.return,V)}break;case 22:case 23:e.memoizedState===null&&hd(e,n);break;default:hd(e,n)}}function dd(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,r=n;switch(a.tag){case 4:Qv(a,r);break t;case 22:a.memoizedState===null&&dd(a,r);break t;default:dd(a,r)}}e=e.sibling}}function Jv(e){var n=e.alternate;n!==null&&(e.alternate=null,Jv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ne(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var un=null,si=!1;function Xi(e,n,a){for(a=a.child;a!==null;)jv(e,n,a),a=a.sibling}function jv(e,n,a){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(se,a)}catch{}switch(a.tag){case 26:Ye||In(a,n),Xi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ye&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ye||In(a,n),ml(a);var r=un,u=si;ys(a.type)&&(un=a.stateNode,si=!1),Xi(e,n,a),nx(a.stateNode,a.type,a.memoizedProps),un=r,si=u;break;case 5:Ye||In(a,n),ml(a);case 6:if(a.tag===6&&ml(a),r=un,u=si,un=null,Xi(e,n,a),un=r,si=u,un!==null)if(si)try{(un.nodeType===9?un.body:un.nodeName==="HTML"?un.ownerDocument.body:un).removeChild(a.stateNode),we=!0}catch(h){Ze(a,n,h)}else try{un.removeChild(a.stateNode),we=!0}catch(h){Ze(a,n,h)}break;case 18:un!==null&&(si?(e=un,G_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),co(e)):G_(un,a.stateNode));break;case 4:r=un,u=si,un=a.stateNode.containerInfo,si=!0,Xi(e,n,a),un=r,si=u;break;case 0:case 11:case 14:case 15:ds(2,a,n),Ye||ds(4,a,n),Xi(e,n,a);break;case 1:Ye||(In(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Bv(a,n,r)),Xi(e,n,a);break;case 21:Xi(e,n,a);break;case 22:Ye=(r=Ye)||a.memoizedState!==null,Xi(e,n,a),Ye=r;break;case 30:In(a,n),Xi(e,n,a);break;case 7:Ye||In(a,n),Xi(e,n,a);break;default:Xi(e,n,a)}}function $v(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{co(e)}catch(a){Ze(n,n.return,a)}}}function t_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{co(e)}catch(a){Ze(n,n.return,a)}}function TM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Kv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Kv),n;default:throw Error(s(435,e.tag))}}function iu(e,n){var a=TM(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=IM.bind(null,e,r);r.then(u,u)}})}function $n(e,n,a){var r=n.deletions;if(r!==null)for(var u=0;u<r.length;u++){var h=r[u],M=e,C=n,V=C;t:for(;V!==null;){switch(V.tag){case 27:if(ys(V.type)){un=V.stateNode,si=!1;break t}break;case 5:un=V.stateNode,si=!1;break t;case 3:case 4:un=V.stateNode.containerInfo,si=!0;break t}V=V.return}if(un===null)throw Error(s(160));jv(M,C,h),un=null,si=!1,M=h.alternate,M!==null&&(M.return=null),h.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)e_(n,e,a),n=n.sibling}var qi=null;function e_(e,n,a){var r=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(u&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var h=0;h<r.length;h++){var M=r[h];M.ref.impl=M.nextImpl}$n(n,e,a),ti(e),u&4&&(ds(3,e,e.return),pl(3,e),ds(5,e,e.return));break;case 1:$n(n,e,a),ti(e),u&512&&(Ye||r===null||In(r,r.return)),u&64&&Cn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(h=qi,$n(n,e,a),ti(e),u&512&&(Ye||r===null||In(r,r.return)),u&4)if(u=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(Cn)e.stateNode=B_(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,u=h.ownerDocument||h;e:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[Gt]||r[R]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),Bn(r,n,a),r[R]=e,Ae(r),n=r;break t;case"link":if(h=lx("link","href",u).get(n+(a.href||""))){for(M=0;M<h.length;M++)if(r=h[M],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){h.splice(M,1);break e}}r=u.createElement(n),Bn(r,n,a),u.head.appendChild(r);break;case"meta":if(h=lx("meta","content",u).get(n+(a.content||""))){for(M=0;M<h.length;M++)if(r=h[M],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){h.splice(M,1);break e}}r=u.createElement(n),Bn(r,n,a),u.head.appendChild(r);break;default:throw Error(s(468,n))}r[R]=e,Ae(r),n=r}e.stateNode=n}else Cn||Jd(h,e.type,e.stateNode);else e.stateNode=ox(h,a,e.memoizedProps);else u!==a?(u===null?(n=r.stateNode,n===null||Ye||n.parentNode.removeChild(n)):u.count--,a===null?Cn||Jd(h,e.type,e.stateNode):ox(h,a,e.memoizedProps)):a===null&&e.stateNode!==null&&nd(e,e.memoizedProps,r.memoizedProps);break;case 27:$n(n,e,a),ti(e),u&512&&(Ye||r===null||In(r,r.return)),r!==null&&u&4&&nd(e,e.memoizedProps,r.memoizedProps);break;case 5:if(h=da,da=!1,$n(n,e,a),da=h,ti(e),u&512&&(Ye||r===null||In(r,r.return)),e.flags&32){n=e.stateNode;try{Ar(n,""),we=!0}catch(gt){Ze(e,e.return,gt)}}u&4&&e.stateNode!=null&&(n=e.memoizedProps,nd(e,n,r!==null?r.memoizedProps:n)),u&1024&&(ud=!0);break;case 6:if($n(n,e,a),ti(e),u&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,we=!0}catch(gt){Ze(e,e.return,gt)}}break;case 3:if(we=!1,_u=null,h=qi,qi=Tl(n.containerInfo),$n(n,e,a),qi=h,ti(e),u&4&&r!==null&&r.memoizedState.isDehydrated)try{co(n.containerInfo)}catch(gt){Ze(e,e.return,gt)}ud&&(ud=!1,n_(e)),we=!1;break;case 4:u=da,da=Cn,r=Xe(),h=qi,qi=Tl(e.stateNode.containerInfo),$n(n,e,a),ti(e),qi=h,we&&gl&&(eu=!0),we=r,da=u;break;case 12:$n(n,e,a),ti(e);break;case 31:$n(n,e,a),ti(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,iu(e,n)));break;case 13:$n(n,e,a),ti(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(ru=kt()),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,iu(e,n)));break;case 22:h=e.memoizedState!==null,M=r!==null&&r.memoizedState!==null;var C=Cn,V=Ye,ot=da;Cn=C||h,da=ot||h,Ye=V||M,$n(n,e,a),Ye=V,da=ot,Cn=C,ti(e),u&8192&&(n=e.stateNode,n._visibility=h?n._visibility&-2:n._visibility|1,!h||r===null||M||Cn||Ye||(n=M||Ye,a=Cn,r=Ye,Cn=h||Cn,Ye=n,ps(e,2),Cn=a,Ye=r),!h&&da||hd(e,h)),u&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,iu(e,a))));break;case 19:$n(n,e,a),ti(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,iu(e,n)));break;case 30:u&512&&(Ye||r===null||In(r,r.return)),u=Xe(),h=gl,M=(a&335544064)===a,C=e.memoizedProps,gl=M&&Ca(C.default,C.update)!=="none",$n(n,e,a),ti(e),M&&r!==null&&we&&(e.flags|=4),gl=h,we=u;break;case 21:break;case 7:u&512&&(Ye||r===null||In(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:$n(n,e,a),ti(e)}}function ti(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Hv(r)){a=r;break}r=r.return}r=null;for(var u=e.return;u!==null;){if(td(u)){var h=u.stateNode;r===null?r=[h]:r.push(h)}if($h(u))break;u=u.return}var M=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var C=a.stateNode,V=id(e);Jc(e,V,C,M);break;case 5:var ot=a.stateNode;a.flags&32&&(Ar(ot,""),a.flags&=-33);var gt=id(e);Jc(e,gt,ot,M);break;case 3:case 4:var Rt=a.stateNode.containerInfo,at=id(e);ad(e,at,Rt,M);break;default:throw Error(s(161))}}catch(mt){Ze(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function n_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;n_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,lo=!0,n.reset(),lo=!1),e=e.sibling}}function qr(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)i_(n,e),n=n.sibling;else Yv(n)}function i_(e,n){var a=e.alternate;if(a===null)sd(e,!1);else switch(e.tag){case 3:if(fd=pa=!1,kv(),qr(n,e),!pa&&!eu){if(e=fa,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var u=e[r+1];X_(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),fd=!0}fa=null;break;case 5:qr(n,e);break;case 4:r=pa,pa=!1,qr(n,e),pa&&(eu=!0),pa=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?sd(e,!1):qr(n,e));break;case 30:r=pa,u=kv(),pa=!1,qr(n,e),pa&&(e.flags|=4);var h=e.memoizedProps,M=e.stateNode;n=Ra(h,M),M=Ra(a.memoizedProps,M);var C=Ca(h.default,h.update);C==="none"?n=!1:(h=a.memoizedState,a.memoizedState=null,a=e.child,ai=0,n=cd(e,a,n,M,C,h,!0),ai!==(h===null?0:h.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(jr(e,e.memoizedProps.onUpdate),fa=u):u!==null&&(u.push.apply(u,fa),fa=u),pa=(e.flags&32)!==0?!0:r;break;default:qr(n,e)}}function ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Zv(e,n.alternate,n),n=n.sibling}function ps(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:ds(4,a,a.return),ps(a,r);break;case 1:In(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&Bv(a,a.return,u),ps(a,r);break;case 27:(r&2)!==0&&nx(a.stateNode,a.type,a.memoizedProps);case 5:In(a,a.return),a.tag!==5&&a.tag!==27||ml(a),ps(a,r);break;case 6:ml(a);break;case 26:In(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Ye||u.parentNode.removeChild(u),ps(a,r);break;case 22:a.memoizedState===null&&ps(a,r);break;case 30:In(a,a.return),ps(a,r);break;case 7:In(a,a.return);default:ps(a,r)}e=e.sibling}}function Wi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,u=e,h=n,M=h.flags,C=(a&1)!==0;switch(h.tag){case 0:case 11:case 15:Wi(u,h,a),pl(4,h);break;case 1:if(Wi(u,h,a),r=h,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(gt){Ze(r,r.return,gt)}if(r=h,u=r.updateQueue,u!==null){var V=r.stateNode;try{var ot=u.shared.hiddenCallbacks;if(ot!==null)for(u.shared.hiddenCallbacks=null,u=0;u<ot.length;u++)Tg(ot[u],V)}catch(gt){Ze(r,r.return,gt)}}C&&M&64&&Iv(h),ua(h,h.return);break;case 27:(a&2)!==0&&Gv(h);case 5:h.tag!==5&&h.tag!==27||Fv(h),Wi(u,h,a),C&&r===null&&M&4&&ed(h),ua(h,h.return);break;case 6:Fv(h);break;case 26:V=h.stateNode,h.memoizedState!==null||V===null||Cn||Jd(Tl(V.ownerDocument),h.type,V),Wi(u,h,a),C&&r===null&&M&4&&ed(h),ua(h,h.return);break;case 12:Wi(u,h,a);break;case 31:Wi(u,h,a),C&&M&4&&$v(u,h);break;case 13:Wi(u,h,a),C&&M&4&&t_(u,h);break;case 22:h.memoizedState===null&&Wi(u,h,a),ua(h,h.return);break;case 30:Wi(u,h,a),ua(h,h.return);break;case 7:ua(h,h.return);default:Wi(u,h,a)}n=n.sibling}}function pd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&el(a))}function md(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&el(e))}function zi(e,n,a,r){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)a_(e,n,a,r),n=n.sibling;else u&&Wv(n)}function a_(e,n,a,r){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&tu(n);var h=n.flags;switch(n.tag){case 0:case 11:case 15:zi(e,n,a,r),h&2048&&pl(9,n);break;case 1:zi(e,n,a,r);break;case 3:zi(e,n,a,r),u&&fd&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),h&2048&&(h=null,n.alternate!==null&&(h=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==h&&(n.refCount++,h!=null&&el(h)));break;case 12:if(h&2048){zi(e,n,a,r),h=n.stateNode;try{var M=n.memoizedProps,C=M.id,V=M.onPostCommit;typeof V=="function"&&V(C,n.alternate===null?"mount":"update",h.passiveEffectDuration,-0)}catch(ot){Ze(n,n.return,ot)}}else zi(e,n,a,r);break;case 31:zi(e,n,a,r);break;case 13:zi(e,n,a,r);break;case 23:break;case 22:M=n.stateNode,C=n.alternate,n.memoizedState!==null?(u&&C!==null&&C.memoizedState===null&&tu(C),M._visibility&2?zi(e,n,a,r):vl(e,n)):(u&&C!==null&&C.memoizedState!==null&&tu(n),M._visibility&2?zi(e,n,a,r):(M._visibility|=2,Wr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),h&2048&&pd(C,n);break;case 24:zi(e,n,a,r),h&2048&&md(n.alternate,n);break;case 30:u&&(h=n.alternate,h!==null&&(ha(h.child,!0),ha(n.child,!0))),zi(e,n,a,r);break;default:zi(e,n,a,r)}}function Wr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,M=n,C=a,V=r,ot=M.flags;switch(M.tag){case 0:case 11:case 15:Wr(h,M,C,V,u),pl(8,M);break;case 23:break;case 22:var gt=M.stateNode;M.memoizedState!==null?gt._visibility&2?Wr(h,M,C,V,u):vl(h,M):(gt._visibility|=2,Wr(h,M,C,V,u)),u&&ot&2048&&pd(M.alternate,M);break;case 24:Wr(h,M,C,V,u),u&&ot&2048&&md(M.alternate,M);break;default:Wr(h,M,C,V,u)}n=n.sibling}}function vl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:vl(a,r),u&2048&&pd(r.alternate,r);break;case 24:vl(a,r),u&2048&&md(r.alternate,r);break;default:vl(a,r)}n=n.sibling}}var ar=8192;function sr(e,n,a){if(e.subtreeFlags&ar)for(e=e.child;e!==null;)s_(e,n,a),e=e.sibling}function s_(e,n,a){switch(e.tag){case 26:sr(e,n,a),e.flags&ar&&(e.memoizedState!==null?Nb(a,qi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&hx(a,e)));break;case 5:sr(e,n,a),e.flags&ar&&(e=e.stateNode,(n&335544128)===n&&hx(a,e));break;case 3:case 4:var r=qi;qi=Tl(e.stateNode.containerInfo),sr(e,n,a),qi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=ar,ar=16777216,sr(e,n,a),ar=r):sr(e,n,a));break;case 30:if((e.flags&ar)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var u=e.stateNode;u.paired=null,_i===null&&(_i=new Map),_i.set(r,u)}sr(e,n,a);break;default:sr(e,n,a)}}function r_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function _l(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Dn=r,l_(r,e)}r_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)o_(e),e=e.sibling}function o_(e){switch(e.tag){case 0:case 11:case 15:_l(e),e.flags&2048&&ds(9,e,e.return);break;case 3:_l(e);break;case 12:_l(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,au(e)):_l(e);break;default:_l(e)}}function au(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Dn=r,l_(r,e)}r_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ds(8,n,n.return),au(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,au(n));break;default:au(n)}e=e.sibling}}function l_(e,n){for(;Dn!==null;){var a=Dn;switch(a.tag){case 0:case 11:case 15:ds(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:el(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Dn=r;else t:for(a=e;Dn!==null;){r=Dn;var u=r.sibling,h=r.return;if(Jv(r),r===a){Dn=null;break t}if(u!==null){u.return=h,Dn=u;break t}Dn=h}}}var AM={getCacheForType:function(e){var n=On(_n),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return On(_n).controller.signal}},wM=typeof WeakMap=="function"?WeakMap:Map,qe=0,nn=null,De=null,Oe=0,Ke=0,xi=null,ms=!1,Yr=!1,gd=!1,Ba=0,gn=0,gs=0,rr=0,su=0,yi=0,Kr=0,xl=null,ri=null,vd=!1,ru=0,c_=0,ou=1/0,lu=null,vs=null,fn=0,Yi=null,or=null,ga=0,_d=0,xd=null,u_=null,Zr=null,Qr=null,Jr=null,yl=0,cu=null;function Si(){return(qe&2)!==0&&Oe!==0?Oe&-Oe:j.T!==null?Cd():oc()}function f_(){if(yi===0)if((Oe&536870912)===0||Re){var e=Hs;Hs<<=1,(Hs&3932160)===0&&(Hs=262144),yi=e}else yi=536870912;return e=Pn.current,e!==null&&(e.flags|=32),yi}function jr(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=q_(Ra(e.memoizedProps,a))),Qr===null&&(Qr=[]),Qr.push(n.bind(null,r))}}function oi(e,n,a){(e===nn&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)&&($r(e,0),_s(e,Oe,yi,!1)),sa(e,a),((qe&2)===0||e!==nn)&&(e===nn&&((qe&2)===0&&(rr|=a),gn===4&&_s(e,Oe,yi,!1)),va(e))}function h_(e,n,a){if((qe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||$a(e,n),u=r?DM(e,n):Sd(e,n,!0),h=r;do{if(u===0){Yr&&!r&&_s(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!RM(a)){u=Sd(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var C=e;u=xl;var V=C.current.memoizedState.isDehydrated;if(V&&($r(C,M).flags|=256),M=Sd(C,M,!1),M!==2&&M!==6){if(gd&&!V){C.errorRecoveryDisabledLanes|=h,rr|=h,u=4;break t}h=ri,ri=u,h!==null&&(ri===null?ri=h:ri.push.apply(ri,h))}u=M}if(h=!1,u!==2)continue}}if(u===1){$r(e,0),_s(e,n,0,!0);break}t:{switch(r=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:_s(r,n,yi,!ms);break t;case 2:ri=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ru+300-kt(),10<u)){if(_s(r,n,yi,!ms),Gs(r,0,!0)!==0)break t;ga=n,r.timeoutHandle=Hd(d_.bind(null,r,a,ri,lu,vd,n,yi,rr,Kr,ms,h,"Throttled",-0,0),u);break t}d_(r,a,ri,lu,vd,n,yi,rr,Kr,ms,h,null,-0,0)}}break}while(!0);va(e)}function d_(e,n,a,r,u,h,M,C,V,ot,gt,Rt,at,mt){e.timeoutHandle=-1;var Vt=n.subtreeFlags,ie=(h&335544064)===h;if(Rt=null,(ie||Vt&8192||(Vt&16785408)===16785408)&&(Rt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},_i=null,s_(n,h,Rt),ie&&(Vt=Rt,ie=e.containerInfo,ie=(ie.nodeType===9?ie:ie.ownerDocument).__reactViewTransition,ie!=null&&(Vt.count++,Vt.waitingForViewTransition=!0,Vt=Rl.bind(Vt),ie.finished.then(Vt,Vt))),Vt=(h&62914560)===h?ru-kt():(h&4194048)===h?c_-kt():0,Vt=Ub(Rt,Vt),Vt!==null)){ga=h,e.cancelPendingCommit=Vt(S_.bind(null,e,n,h,a,r,u,M,C,V,ot,gt,Rt,null,at,mt)),_s(e,h,M,!ot);return}S_(e,n,h,a,r,u,M,C,V,ot,gt,Rt)}function RM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],h=u.getSnapshot;u=u.value;try{if(!gi(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function _s(e,n,a,r){n=aa(e,n),n&=~su,n&=~rr,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var h=31-xe(u),M=1<<h;r[h]=-1,u&=~M}a!==0&&Vs(e,a,n)}function uu(){return(qe&6)===0?(Sl(0),!1):!0}function yd(){if(De!==null){if(Ke===0)var e=De.return;else e=De,Ua=Ks=null,Rh(e),Fr=null,al=0,e=De;for(;e!==null;)zv(e.alternate,e),e=e.return;De=null}}function $r(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,jM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ga=0,yd(),nn=e,De=a=Da(e.current,null),Oe=n,Ke=0,xi=null,ms=!1,Yr=$a(e,n),gd=!1,Kr=yi=su=rr=gs=gn=0,ri=xl=null,vd=!1,Ba=aa(e,n),_c(),a}function p_(e,n){Se=null,j.H=kc,n===Br||n===Cc?(n=Sg(),Ke=3):n===mh?(n=Sg(),Ke=4):Ke=n===kh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,xi=n,De===null&&(gn=1,Xc(e,Ui(n,e.current)))}function m_(){var e=Pn.current;return e===null?!0:(Oe&4194048)===Oe?Xn===null:(Oe&62914560)===Oe||(Oe&536870912)!==0?e===Xn:!1}function g_(){var e=j.H;return j.H=kc,e===null?kc:e}function v_(){var e=j.A;return j.A=AM,e}function fu(){gn=4,ms||(Oe&4194048)!==Oe&&Pn.current!==null||(Yr=!0),(gs&134217727)===0&&(rr&134217727)===0||nn===null||_s(nn,Oe,yi,!1)}function Sd(e,n,a){var r=qe;qe|=2;var u=g_(),h=v_();(nn!==e||Oe!==n)&&(lu=null,$r(e,n)),n=!1;var M=gn;t:do try{if(Ke!==0&&De!==null){var C=De,V=xi;switch(Ke){case 8:yd(),M=6;break t;case 3:case 2:case 9:case 6:Pn.current===null&&(n=!0);var ot=Ke;if(Ke=0,xi=null,to(e,C,V,ot),a&&Yr){M=0;break t}break;default:ot=Ke,Ke=0,xi=null,to(e,C,V,ot)}}CM(),M=gn;break}catch(gt){p_(e,gt)}while(!0);return n&&e.shellSuspendCounter++,Ua=Ks=null,qe=r,j.H=u,j.A=h,De===null&&(nn=null,Oe=0,_c()),M}function CM(){for(;De!==null;)__(De)}function DM(e,n){var a=qe;qe|=2;var r=g_(),u=v_();nn!==e||Oe!==n?(lu=null,ou=kt()+500,$r(e,n)):Yr=$a(e,n);t:do try{if(Ke!==0&&De!==null){n=De;var h=xi;e:switch(Ke){case 1:Ke=0,xi=null,to(e,n,h,1);break;case 2:case 9:if(xg(h)){Ke=0,xi=null,x_(n);break}n=function(){Ke!==2&&Ke!==9||nn!==e||(Ke=7),va(e)},h.then(n,n);break t;case 3:Ke=7;break t;case 4:Ke=5;break t;case 7:xg(h)?(Ke=0,xi=null,x_(n)):(Ke=0,xi=null,to(e,n,h,7));break;case 5:var M=null;switch(De.tag){case 26:M=De.memoizedState;case 5:case 27:var C=De;if(M?ux(M):C.stateNode.complete){Ke=0,xi=null;var V=C.sibling;if(V!==null)De=V;else{var ot=C.return;ot!==null?(De=ot,hu(ot)):De=null}break e}}Ke=0,xi=null,to(e,n,h,5);break;case 6:Ke=0,xi=null,to(e,n,h,6);break;case 8:yd(),gn=6;break t;default:throw Error(s(462))}}NM();break}catch(gt){p_(e,gt)}while(!0);return Ua=Ks=null,j.H=r,j.A=u,qe=a,De!==null?0:(nn=null,Oe=0,_c(),gn)}function NM(){for(;De!==null&&!It();)__(De)}function __(e){var n=Ov(e.alternate,e,Ba);e.memoizedProps=e.pendingProps,n===null?hu(e):De=n}function x_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=wv(a,n,n.pendingProps,n.type,void 0,Oe);break;case 11:n=wv(a,n,n.pendingProps,n.type.render,n.ref,Oe);break;case 5:Rh(n);var r=n;r===Rn&&(Re?(Ec(r),r.tag===5&&r.stateNode!=null&&(rn=r.stateNode)):(Ec(r),Re=!0));default:zv(a,n),n=De=lg(n,Ba),n=Ov(a,n,Ba)}e.memoizedProps=e.pendingProps,n===null?hu(e):De=n}function to(e,n,a,r){Ua=Ks=null,Rh(n),Fr=null,al=0;var u=n.return;try{if(_M(e,u,n,a,Oe)){gn=1,Xc(e,Ui(a,e.current)),De=null;return}}catch(h){if(u!==null)throw De=u,h;gn=1,Xc(e,Ui(a,e.current)),De=null;return}n.flags&32768?(Re||r===1?e=!0:Yr||(Oe&536870912)!==0?e=!1:(ms=e=!0,(r===2||r===9||r===3||r===6)&&(r=Pn.current,r!==null&&r.tag===13&&(r.flags|=16384))),y_(n,e)):hu(n)}function hu(e){var n=e;do{if((n.flags&32768)!==0){y_(n,ms);return}e=n.return;var a=MM(n.alternate,n,Ba);if(a!==null){De=a;return}if(n=n.sibling,n!==null){De=n;return}De=n=e}while(n!==null);gn===0&&(gn=5)}function y_(e,n){do{var a=bM(e.alternate,e);if(a!==null){a.flags&=32767,De=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){De=e;return}De=e=a}while(e!==null);gn=6,De=null}function S_(e,n,a,r,u,h,M,C,V,ot,gt,Rt){e.cancelPendingCommit=null;do du();while(fn!==0);if((qe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===nn&&(De=nn=null,Oe=0),or=n,Yi=e,ga=a,xd=u,u_=r,UM(e,n,a,M,C,V,Rt)}}function UM(e,n,a,r,u,h,M){var C=n.lanes|n.childLanes;if(_d=C,C|=nh,rc(e,a,C,r,u,h),Qr=null,(a&335544064)===a?(Jr=rM(e),r=10262):(Jr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,BM(Bt,function(){return Td(),null})):(e.callbackNode=null,e.callbackPriority=0),jc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=j.T,j.T=null,u=wt.p,wt.p=2,h=qe,qe|=4;try{EM(e,n,a)}finally{qe=h,wt.p=u,j.T=r}}fn=1,jc?Zr=ab(M,e.containerInfo,Jr,Md,bd,OM,Ed,Td,LM):(Md(),bd(),Ed())}function LM(e){if(fn!==0){var n=Yi.onRecoverableError;n(e,{componentStack:null})}}function OM(){fn===3&&(fn=0,i_(or,Yi),fn=4)}function Md(){if(fn===1){fn=0;var e=Yi,n=or,a=ga,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=j.T,j.T=null;var u=wt.p;wt.p=2;var h=qe;qe|=4;try{gl=eu=!1,e_(n,e,a),a=Id;var M=jm(e.containerInfo),C=a.focusedElem,V=a.selectionRange;if(M!==C&&C&&C.ownerDocument&&Jm(C.ownerDocument.documentElement,C)){if(V!==null&&Jf(C)){var ot=V.start,gt=V.end;if(gt===void 0&&(gt=ot),"selectionStart"in C)C.selectionStart=ot,C.selectionEnd=Math.min(gt,C.value.length);else{var Rt=C.ownerDocument||document,at=Rt&&Rt.defaultView||window;if(at.getSelection){var mt=at.getSelection(),Vt=C.textContent.length,ie=Math.min(V.start,Vt),Me=V.end===void 0?ie:Math.min(V.end,Vt);!mt.extend&&ie>Me&&(M=Me,Me=ie,ie=M);var st=Qm(C,ie),$=Qm(C,Me);if(st&&$&&(mt.rangeCount!==1||mt.anchorNode!==st.node||mt.anchorOffset!==st.offset||mt.focusNode!==$.node||mt.focusOffset!==$.offset)){var ut=Rt.createRange();ut.setStart(st.node,st.offset),mt.removeAllRanges(),ie>Me?(mt.addRange(ut),mt.extend($.node,$.offset)):(ut.setEnd($.node,$.offset),mt.addRange(ut))}}}}for(Rt=[],mt=C;mt=mt.parentNode;)mt.nodeType===1&&Rt.push({element:mt,left:mt.scrollLeft,top:mt.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Rt.length;C++){var At=Rt[C];At.element.scrollLeft=At.left,At.element.scrollTop=At.top}}lo=!!zd,Id=zd=null}finally{qe=h,wt.p=u,j.T=r}}e.current=n,fn=2}}function bd(){if(fn===2){fn=0;var e=Yi,n=or,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var r=wt.p;wt.p=2;var u=qe;qe|=4;try{Zv(e,n.alternate,n)}finally{qe=u,wt.p=r,j.T=a}}fn=3}}function Ed(){if(fn===4||fn===3){fn=0;var e=Zr;Zr=null,Lt();var n=Yi,a=or,r=ga,u=u_,h=(r&335544064)===r?10262:10256;if((a.subtreeFlags&h)!==0||(a.flags&h)!==0?fn=5:(fn=0,or=Yi=null,M_(n,n.pendingLanes)),h=n.pendingLanes,h===0&&(vs=null),ko(r),a=a.stateNode,Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(se,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=j.T,h=wt.p,wt.p=2,j.T=null;try{for(var M=n.onRecoverableError,C=0;C<u.length;C++){var V=u[C];M(V.value,{componentStack:V.stack})}}finally{j.T=a,wt.p=h}}if(u=Qr,M=Jr,Jr=null,u!==null&&(Qr=null,M===null&&(M=[]),e!==null))for(V=0;V<u.length;V++)a=(0,u[V])(M),a!==void 0&&e.finished.finally(a);(ga&3)!==0&&du(),va(n),h=n.pendingLanes,(r&261930)!==0&&(h&42)!==0?n===cu?yl++:(yl=0,cu=n):(yl=0,cu=null),Sl(0)}}function M_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,el(n)))}function du(){return Zr!==null&&(Zr.skipTransition(),Zr=null),Md(),bd(),Ed(),Td()}function Td(){if(fn!==5)return!1;var e=Yi,n=_d;_d=0;var a=ko(ga),r=j.T,u=wt.p;try{wt.p=32>a?32:a,j.T=null,a=xd,xd=null;var h=Yi,M=ga;if(fn=0,or=Yi=null,ga=0,(qe&6)!==0)throw Error(s(331));var C=qe;if(qe|=4,o_(h.current),a_(h,h.current,M,a),qe=C,Sl(0,!1),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(se,h)}catch{}return!0}finally{wt.p=u,j.T=r,M_(e,n)}}function b_(e,n,a){n=Ui(a,n),n=Vh(e.stateNode,n,2),e=cs(e,n,2),e!==null&&(sa(e,2),va(e))}function Ze(e,n,a){if(e.tag===3)b_(e,e,a);else for(;n!==null;){if(n.tag===3){b_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vs===null||!vs.has(r))){e=Ui(a,e),a=xv(2),r=cs(n,a,2),r!==null&&(yv(a,r,n,e),sa(r,2),va(r));break}}n=n.return}}function Ad(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new wM;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(gd=!0,u.add(a),e=PM.bind(null,e,n,a),n.then(e,e))}function PM(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,nn===e&&(Oe&a)===a&&((gn===4||gn===3&&(Oe&62914560)===Oe&&300>kt()-ru)&&(qe&2)===0?$r(e,0):su|=a,Kr===Oe&&(Kr=0)),va(e)}function E_(e,n){n===0&&(n=Fo()),e=qs(e,n),e!==null&&(sa(e,n),va(e))}function zM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),E_(e,a)}function IM(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),E_(e,a)}function BM(e,n){return zt(e,n)}var eo=null,no=null,wd=!1,pu=!1,Rd=!1,xs=0;function va(e){e!==no&&e.next===null&&(no===null?eo=no=e:no=no.next=e),pu=!0,wd||(wd=!0,HM())}function Sl(e,n){if(!Rd&&pu){Rd=!0;do for(var a=!1,r=eo;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var h=0;else{var M=r.suspendedLanes,C=r.pingedLanes;h=(1<<31-xe(42|e)+1)-1,h&=u&~(M&~C),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,R_(r,h))}else h=Oe,h=Gs(r,r===nn?h:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(h&3)===0||$a(r,h)||(a=!0,R_(r,h));r=r.next}while(a);Rd=!1}}function FM(){T_()}function T_(){pu=wd=!1;var e=0;xs!==0&&JM()&&(e=xs);for(var n=kt(),a=null,r=eo;r!==null;){var u=r.next,h=A_(r,n);h===0?(r.next=null,a===null?eo=u:a.next=u,u===null&&(no=a)):(a=r,(e!==0||(h&3)!==0)&&(pu=!0)),r=u}fn!==0&&fn!==5||Sl(e),xs!==0&&(xs=0)}function A_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var M=31-xe(h),C=1<<M,V=u[M];V===-1?((C&a)===0||(C&r)!==0)&&(u[M]=Bo(C,n)):V<=n&&(e.expiredLanes|=C),h&=~C}if(n=nn,a=Oe,a=Gs(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ee(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$a(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&ee(r),ko(a)){case 2:case 8:a=et;break;case 32:a=Bt;break;case 268435456:a=Ht;break;default:a=Bt}return r=w_.bind(null,e),a=zt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&ee(r),e.callbackPriority=2,e.callbackNode=null,2}function w_(e,n){if(fn!==0&&fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(du()&&e.callbackNode!==a)return null;var r=Oe;return r=Gs(e,e===nn?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(h_(e,r,n),A_(e,kt()),e.callbackNode!=null&&e.callbackNode===a?w_.bind(null,e):null)}function R_(e,n){if(du())return null;h_(e,n,!0)}function HM(){$M(function(){(qe&6)!==0?zt(pe,FM):T_()})}function Cd(){if(xs===0){var e=Js;e===0&&(e=br,br<<=1,(br&261888)===0&&(br=256)),xs=e}return xs}function C_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:uc(e)}function GM(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var h=C_((u[J]||null).action),M=r.submitter;M&&(n=(n=M[J]||null)?C_(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var C=new pc("action","action",null,r,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(xs!==0){var V=new FormData(u,M);Ih(a,{pending:!0,data:V,method:u.method,action:h},null,V)}}else typeof h=="function"&&(C.preventDefault(),V=new FormData(u,M),Ih(a,{pending:!0,data:V,method:u.method,action:h},h,V))},currentTarget:u}]})}}for(var Dd=0;Dd<eh.length;Dd++){var Nd=eh[Dd],VM=Nd.toLowerCase(),kM=Nd[0].toUpperCase()+Nd.slice(1);ki(VM,"on"+kM)}ki(eg,"onAnimationEnd"),ki(ng,"onAnimationIteration"),ki(ig,"onAnimationStart"),ki("dblclick","onDoubleClick"),ki("focusin","onFocus"),ki("focusout","onBlur"),ki(jS,"onTransitionRun"),ki($S,"onTransitionStart"),ki(tM,"onTransitionCancel"),ki(ag,"onTransitionEnd"),dn("onMouseEnter",["mouseout","mouseover"]),dn("onMouseLeave",["mouseout","mouseover"]),dn("onPointerEnter",["pointerout","pointerover"]),dn("onPointerLeave",["pointerout","pointerover"]),Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ml));function D_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var h=void 0;if(n)for(var M=r.length-1;0<=M;M--){var C=r[M],V=C.instance,ot=C.currentTarget;if(C=C.listener,V!==h&&u.isPropagationStopped())break t;h=C,u.currentTarget=ot;try{h(u)}catch(gt){vc(gt)}u.currentTarget=null,h=V}else for(M=0;M<r.length;M++){if(C=r[M],V=C.instance,ot=C.currentTarget,C=C.listener,V!==h&&u.isPropagationStopped())break t;h=C,u.currentTarget=ot;try{h(u)}catch(gt){vc(gt)}u.currentTarget=null,h=V}}}}function Ne(e,n){var a=n[dt];a===void 0&&(a=n[dt]=new Set);var r=e+"__bubble";a.has(r)||(N_(n,e,2,!1),a.add(r))}function Ud(e,n,a){var r=0;n&&(r|=4),N_(a,e,r,n)}var mu="_reactListening"+Math.random().toString(36).slice(2);function Ld(e){if(!e[mu]){e[mu]=!0,We.forEach(function(a){a!=="selectionchange"&&(XM.has(a)||Ud(a,!1,e),Ud(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[mu]||(n[mu]=!0,Ud("selectionchange",!1,n))}}function N_(e,n,a,r){switch(yx(n)){case 2:var u=zb;break;case 8:u=Ib;break;default:u=$d}a=u.bind(null,n,a,e),u=void 0,!Gf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Od(e,n,a,r,u){var h=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var M=r.tag;if(M===3||M===4){var C=r.stateNode.containerInfo;if(C===u)break;if(M===4)for(M=r.return;M!==null;){var V=M.tag;if((V===3||V===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;C!==null;){if(M=de(C),M===null)return;if(V=M.tag,V===5||V===6||V===26||V===27){r=h=M;continue t}C=C.parentNode}}r=r.return}Nm(function(){var ot=h,gt=Ff(a),Rt=[];t:{var at=sg.get(e);if(at!==void 0){var mt=pc,Vt=e;switch(e){case"keypress":if(hc(a)===0)break t;case"keydown":case"keyup":mt=RS;break;case"focusin":Vt="focus",mt=qf;break;case"focusout":Vt="blur",mt=qf;break;case"beforeblur":case"afterblur":mt=qf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":mt=Om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":mt=gS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":mt=LS;break;case eg:case ng:case ig:mt=xS;break;case ag:mt=PS;break;case"scroll":case"scrollend":mt=pS;break;case"wheel":mt=IS;break;case"copy":case"cut":case"paste":mt=SS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":mt=zm;break;case"submit":mt=NS;break;case"toggle":case"beforetoggle":mt=FS}var ie=(n&4)!==0,Me=!ie&&(e==="scroll"||e==="scrollend"),st=ie?at!==null?at+"Capture":null:at;ie=[];for(var $=ot,ut;$!==null;){var At=$;if(ut=At.stateNode,At=At.tag,At!==5&&At!==26&&At!==27||ut===null||st===null||(At=Xo($,st),At!=null&&ie.push(bl($,At,ut))),Me)break;$=$.return}0<ie.length&&(at=new mt(at,Vt,null,a,gt),Rt.push({event:at,listeners:ie}))}}if((n&7)===0){t:{if(mt=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",mt&&a!==Bf&&(Vt=a.relatedTarget||a.fromElement)&&(de(Vt)||Vt[vt]))break t;(at||mt)&&(Vt=gt.window===gt?gt:(mt=gt.ownerDocument)?mt.defaultView||mt.parentWindow:window,at?(mt=a.relatedTarget||a.toElement,at=ot,mt=mt?de(mt):null,mt!==null&&(Me=c(mt),ie=mt.tag,mt!==Me||ie!==5&&ie!==27&&ie!==6)&&(mt=null)):(at=null,mt=ot),at!==mt&&(ie=Om,At="onMouseLeave",st="onMouseEnter",$="mouse",(e==="pointerout"||e==="pointerover")&&(ie=zm,At="onPointerLeave",st="onPointerEnter",$="pointer"),Me=at==null?Vt:jt(at),ut=mt==null?Vt:jt(mt),Vt=new ie(At,$+"leave",at,a,gt),Vt.target=Me,Vt.relatedTarget=ut,At=null,de(gt)===ot&&(ie=new ie(st,$+"enter",mt,a,gt),ie.target=ut,ie.relatedTarget=Me,At=ie),Me=At,ie=at&&mt?D(at,mt,qM):null,at!==null&&U_(Rt,Vt,at,ie,!1),mt!==null&&Me!==null&&U_(Rt,Me,mt,ie,!0)))}t:{if(at=ot?jt(ot):window,mt=at.nodeName&&at.nodeName.toLowerCase(),mt==="select"||mt==="input"&&at.type==="file")var $t=Xm;else if(Vm(at))if(qm)$t=ZS;else{$t=YS;var Pe=WS}else mt=at.nodeName,!mt||mt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?ot&&If(ot.elementType)&&($t=Xm):$t=KS;if($t&&($t=$t(e,ot))){km(Rt,$t,a,gt);break t}Pe&&Pe(e,at,ot)}switch(Pe=ot?jt(ot):window,e){case"focusin":(Vm(Pe)||Pe.contentEditable==="true")&&(Dr=Pe,jf=ot,jo=null);break;case"focusout":jo=jf=Dr=null;break;case"mousedown":$f=!0;break;case"contextmenu":case"mouseup":case"dragend":$f=!1,$m(Rt,a,gt);break;case"selectionchange":if(JS)break;case"keydown":case"keyup":$m(Rt,a,gt)}var le;if(Yf)t:{switch(e){case"compositionstart":var ue="onCompositionStart";break t;case"compositionend":ue="onCompositionEnd";break t;case"compositionupdate":ue="onCompositionUpdate";break t}ue=void 0}else Cr?Hm(e,a)&&(ue="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(Im&&a.locale!=="ko"&&(Cr||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Cr&&(le=Um()):(ts=gt,Vf="value"in ts?ts.value:ts.textContent,Cr=!0)),Pe=gu(ot,ue),0<Pe.length&&(ue=new Pm(ue,e,null,a,gt),Rt.push({event:ue,listeners:Pe}),le?ue.data=le:(le=Gm(a),le!==null&&(ue.data=le)))),(le=GS?VS(e,a):kS(e,a))&&(ue=gu(ot,"onBeforeInput"),0<ue.length&&(Pe=new Pm("onBeforeInput","beforeinput",null,a,gt),Rt.push({event:Pe,listeners:ue}),Pe.data=le)),GM(Rt,e,ot,a,gt)}D_(Rt,n)})}function bl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function gu(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Xo(e,a),u!=null&&r.unshift(bl(e,u,h)),u=Xo(e,n),u!=null&&r.push(bl(e,u,h))),e.tag===3)return r;e=e.return}return[]}function qM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function U_(e,n,a,r,u){for(var h=n._reactName,M=[];a!==null&&a!==r;){var C=a,V=C.alternate,ot=C.stateNode;if(C=C.tag,V!==null&&V===r)break;C!==5&&C!==26&&C!==27||ot===null||(V=ot,u?(ot=Xo(a,h),ot!=null&&M.unshift(bl(a,ot,V))):u||(ot=Xo(a,h),ot!=null&&M.push(bl(a,ot,V)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var WM=/\r\n?/g,YM=/\u0000|\uFFFD/g;function L_(e){return(typeof e=="string"?e:""+e).replace(WM,`
`).replace(YM,"")}function O_(e,n){return n=L_(n),L_(e)===n}function Qe(e,n,a,r,u,h){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||Ar(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&Ar(e,""+r);else return;break;case"className":mi(e,"class",r);break;case"tabIndex":mi(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":mi(e,a,r);break;case"style":Cm(e,r,h);return;case"data":if(n!=="object"){mi(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=uc(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Qe(e,n,"name",u.name,u,null),Qe(e,n,"formEncType",u.formEncType,u,null),Qe(e,n,"formMethod",u.formMethod,u,null),Qe(e,n,"formTarget",u.formTarget,u,null)):(Qe(e,n,"encType",u.encType,u,null),Qe(e,n,"method",u.method,u,null),Qe(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=uc(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=oa);return;case"onScroll":r!=null&&Ne("scroll",e);return;case"onScrollEnd":r!=null&&Ne("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));h?.__html!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=uc(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Ne("beforetoggle",e),Ne("toggle",e),sn(e,"popover",r);break;case"xlinkActuate":Le(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Le(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Le(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Le(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Le(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Le(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Le(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Le(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Le(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":sn(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=hS.get(a)||a,sn(e,a,r);else return}we=!0}function Pd(e,n,a,r,u,h){switch(a){case"style":Cm(e,r,h);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));h?.__html!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")Ar(e,r);else if(typeof r=="number"||typeof r=="bigint")Ar(e,""+r);else return;break;case"onScroll":r!=null&&Ne("scroll",e);return;case"onScrollEnd":r!=null&&Ne("scrollend",e);return;case"onClick":r!=null&&(e.onclick=oa);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!En.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),h=a.slice(2,u?a.length-7:void 0),n=e[J]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(h,n,u),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(h,r,u);break t}we=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):sn(e,a,r)}return}we=!0}function Bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",e),Ne("load",e);var r=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Qe(e,n,h,M,a,null)}}u&&Qe(e,n,"srcSet",a.srcSet,a,null),r&&Qe(e,n,"src",a.src,a,null);return;case"input":Ne("invalid",e);var C=h=M=u=null,V=null,ot=null;for(r in a)if(a.hasOwnProperty(r)){var gt=a[r];if(gt!=null)switch(r){case"name":u=gt;break;case"type":M=gt;break;case"checked":V=gt;break;case"defaultChecked":ot=gt;break;case"value":h=gt;break;case"defaultValue":C=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:Qe(e,n,r,gt,a,null)}}Tm(e,h,C,V,ot,M,u,!1);return;case"select":Ne("invalid",e),r=M=h=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":h=C;break;case"defaultValue":M=C;break;case"multiple":r=C;default:Qe(e,n,u,C,a,null)}n=h,a=M,e.multiple=!!r,n!=null?Tr(e,!!r,n,!1):a!=null&&Tr(e,!!r,a,!0);return;case"textarea":Ne("invalid",e),h=u=r=null;for(M in a)if(a.hasOwnProperty(M)&&(C=a[M],C!=null))switch(M){case"value":r=C;break;case"defaultValue":u=C;break;case"children":h=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Qe(e,n,M,C,a,null)}wm(e,r,u,h);return;case"option":for(V in a)a.hasOwnProperty(V)&&(r=a[V],r!=null)&&(V==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Qe(e,n,V,r,a,null));return;case"dialog":Ne("beforetoggle",e),Ne("toggle",e),Ne("cancel",e),Ne("close",e);break;case"iframe":case"object":Ne("load",e);break;case"video":case"audio":for(r=0;r<Ml.length;r++)Ne(Ml[r],e);break;case"image":Ne("error",e),Ne("load",e);break;case"details":Ne("toggle",e);break;case"embed":case"source":case"link":Ne("error",e),Ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ot in a)if(a.hasOwnProperty(ot)&&(r=a[ot],r!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Qe(e,n,ot,r,a,null)}return;default:if(If(n)){for(gt in a)a.hasOwnProperty(gt)&&(r=a[gt],r!==void 0&&Pd(e,n,gt,r,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(r=a[C],r!=null&&Qe(e,n,C,r,a,null))}var KM={};function ZM(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,M=null,C=null,V=null,ot=null,gt=null;for(mt in a){var Rt=a[mt];if(a.hasOwnProperty(mt)&&Rt!=null)switch(mt){case"checked":break;case"value":break;case"defaultValue":V=Rt;default:r.hasOwnProperty(mt)||Qe(e,n,mt,null,r,Rt)}}for(var at in r){var mt=r[at];if(Rt=a[at],r.hasOwnProperty(at)&&(mt!=null||Rt!=null))switch(at){case"type":mt!==Rt&&(we=!0),h=mt;break;case"name":mt!==Rt&&(we=!0),u=mt;break;case"checked":mt!==Rt&&(we=!0),ot=mt;break;case"defaultChecked":mt!==Rt&&(we=!0),gt=mt;break;case"value":mt!==Rt&&(we=!0),M=mt;break;case"defaultValue":mt!==Rt&&(we=!0),C=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:mt!==Rt&&Qe(e,n,at,mt,r,Rt)}}Pf(e,M,C,V,ot,gt,h,u);return;case"select":mt=M=C=at=null;for(h in a)if(V=a[h],a.hasOwnProperty(h)&&V!=null)switch(h){case"value":break;case"multiple":mt=V;default:r.hasOwnProperty(h)||Qe(e,n,h,null,r,V)}for(u in r)if(h=r[u],V=a[u],r.hasOwnProperty(u)&&(h!=null||V!=null))switch(u){case"value":h!==V&&(we=!0),at=h;break;case"defaultValue":h!==V&&(we=!0),C=h;break;case"multiple":h!==V&&(we=!0),M=h;default:h!==V&&Qe(e,n,u,h,r,V)}n=C,a=M,r=mt,at!=null?Tr(e,!!a,at,!1):!!r!=!!a&&(n!=null?Tr(e,!!a,n,!0):Tr(e,!!a,a?[]:"",!1));return;case"textarea":mt=at=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!r.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Qe(e,n,C,null,r,u)}for(M in r)if(u=r[M],h=a[M],r.hasOwnProperty(M)&&(u!=null||h!=null))switch(M){case"value":u!==h&&(we=!0),at=u;break;case"defaultValue":u!==h&&(we=!0),mt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Qe(e,n,M,u,r,h)}Am(e,at,mt);return;case"option":for(var Vt in a)at=a[Vt],a.hasOwnProperty(Vt)&&at!=null&&!r.hasOwnProperty(Vt)&&(Vt==="selected"?e.selected=!1:Qe(e,n,Vt,null,r,at));for(V in r)at=r[V],mt=a[V],r.hasOwnProperty(V)&&at!==mt&&(at!=null||mt!=null)&&(V==="selected"?(at!==mt&&(we=!0),e.selected=at&&typeof at!="function"&&typeof at!="symbol"):Qe(e,n,V,at,r,mt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)at=a[ie],a.hasOwnProperty(ie)&&at!=null&&!r.hasOwnProperty(ie)&&Qe(e,n,ie,null,r,at);for(ot in r)if(at=r[ot],mt=a[ot],r.hasOwnProperty(ot)&&at!==mt&&(at!=null||mt!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:Qe(e,n,ot,at,r,mt)}return;default:if(If(n)){for(var Me in a)at=a[Me],a.hasOwnProperty(Me)&&at!==void 0&&!r.hasOwnProperty(Me)&&Pd(e,n,Me,void 0,r,at);for(gt in r)at=r[gt],mt=a[gt],!r.hasOwnProperty(gt)||at===mt||at===void 0&&mt===void 0||Pd(e,n,gt,at,r,mt);return}}for(var st in a)at=a[st],a.hasOwnProperty(st)&&at!=null&&!r.hasOwnProperty(st)&&Qe(e,n,st,null,r,at);for(Rt in r)at=r[Rt],mt=a[Rt],!r.hasOwnProperty(Rt)||at===mt||at==null&&mt==null||Qe(e,n,Rt,at,r,mt)}function P_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function QM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],h=u.transferSize,M=u.initiatorType,C=u.duration;if(h&&C&&P_(M)){for(M=0,C=u.responseEnd,r+=1;r<a.length;r++){var V=a[r],ot=V.startTime;if(ot>C)break;var gt=V.transferSize,Rt=V.initiatorType;gt&&P_(Rt)&&(V=V.responseEnd,M+=gt*(V<C?1:(C-ot)/(V-ot)))}if(--r,n+=8*(h+M)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zd=null,Id=null;function El(e){return e.nodeType===9?e:e.ownerDocument}function z_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function I_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function B_(e,n,a,r){return a=El(a).createElement(e),a[R]=r,a[J]=n,Bn(a,e,n),Ae(a),a}function Bd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Fd=null;function JM(){var e=window.event;return e&&e.type==="popstate"?e===Fd?!1:(Fd=e,!0):(Fd=null,!1)}var Hd=typeof setTimeout=="function"?setTimeout:void 0,jM=typeof clearTimeout=="function"?clearTimeout:void 0,F_=typeof Promise=="function"?Promise:void 0,H_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Hd,$M=typeof queueMicrotask=="function"?queueMicrotask:typeof F_<"u"?function(e){return F_.resolve(null).then(e).catch(tb)}:Hd;function tb(e){setTimeout(function(){throw e})}function ys(e){return e==="head"}function G_(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),co(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Kd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Kd(a);for(var h=a.firstChild;h;){var M=h.nextSibling,C=h.nodeName;h[Gt]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=M}}else a==="body"&&Kd(e.ownerDocument.body);a=u}while(a);co(n)}function V_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function k_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var u=r=0;u<n.length;u++){var h=n[u];0<h.width&&0<h.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function X_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function eb(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Gd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return eb(n,a,e)}function nb(e){return e.documentElement.clientHeight}function ib(e){this.addEventListener("load",e),this.addEventListener("error",e)}function ab(e,n,a,r,u,h,M,C,V){var ot=n.nodeType===9?n:n.ownerDocument;try{var gt=ot.startViewTransition({update:function(){var at=ot.defaultView,mt=at.navigation&&at.navigation.transition,Vt=ot.fonts.status;r();var ie=[];if(Vt==="loaded"&&(nb(ot),ot.fonts.status==="loading"&&ie.push(ot.fonts.ready)),Vt=ie.length,e!==null)for(var Me=e.suspenseyImages,st=0,$=0;$<Me.length;$++){var ut=Me[$];if(!ut.complete){var At=ut.getBoundingClientRect();if(0<At.bottom&&0<At.right&&At.top<at.innerHeight&&At.left<at.innerWidth){if(st+=fx(ut),st>xu){ie.length=Vt;break}ut=new Promise(ib.bind(ut)),ie.push(ut)}}}if(0<ie.length)return at=Promise.race([Promise.all(ie),new Promise(function($t){return setTimeout($t,500)})]).then(u,u),(mt?Promise.allSettled([mt.finished,at]):at).then(h,h);if(u(),mt)return mt.finished.then(h,h);h()},types:a});ot.__reactViewTransition=gt;var Rt=[];return gt.ready.then(function(){for(var at=ot.documentElement.getAnimations({subtree:!0}),mt=0;mt<at.length;mt++){var Vt=at[mt],ie=Vt.effect,Me=ie.pseudoElement;if(Me!=null&&Me.startsWith("::view-transition")){Rt.push(Vt),Vt=ie.getKeyframes();for(var st=Me=void 0,$=!0,ut=0;ut<Vt.length;ut++){var At=Vt[ut],$t=At.width;if(Me===void 0)Me=$t;else if(Me!==$t){$=!1;break}if($t=At.height,st===void 0)st=$t;else if(st!==$t){$=!1;break}delete At.width,delete At.height,At.transform==="none"&&delete At.transform}$&&Me!==void 0&&st!==void 0&&(ie.setKeyframes(Vt),$=getComputedStyle(ie.target,ie.pseudoElement),$.width!==Me||$.height!==st)&&($=Vt[0],$.width=Me,$.height=st,$=Vt[Vt.length-1],$.width=Me,$.height=st,ie.setKeyframes(Vt))}}M()},function(at){ot.__reactViewTransition===gt&&(ot.__reactViewTransition=null);try{typeof at=="object"&&at!==null&&at.name==="InvalidStateError"&&(at.message==="View transition was skipped because document visibility state is hidden."||at.message==="Skipping view transition because document visibility state has become hidden."||at.message==="Skipping view transition because viewport size changed."||at.message==="Transition was aborted because of invalid state")&&(at=null),at!==null&&V(at)}finally{r(),u(),M()}}),gt.finished.finally(function(){for(var at=0;at<Rt.length;at++)Rt[at].cancel();ot.__reactViewTransition===gt&&(ot.__reactViewTransition=null),C()}),gt}catch{return r(),u(),M(),null}}function lr(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}lr.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:U({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},lr.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],u=0;u<a.length;u++){var h=a[u].effect;h!==null&&h.target===e&&h.pseudoElement===n&&r.push(a[u])}return r},lr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function q_(e){return{name:e,group:new lr("group",e),imagePair:new lr("image-pair",e),old:new lr("old",e),new:new lr("new",e)}}function Mi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Mi.prototype.addEventListener=function(e,n,a){var r=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var h=this._eventListeners;if(Y_(h,e,n,a)===-1){var M=this,C=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(C=function(V){M.removeEventListener(e,n,a),typeof n=="function"?n.call(this,V):n.handleEvent(V)}),r!==null&&(u=M.removeEventListener.bind(M,e,n,a),r.addEventListener("abort",u,{once:!0}),u=r.removeEventListener.bind(r,"abort",u)),r=io(a),h.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:C,cleanup:u}),_(this._fragmentFiber.child,!1,sb,e,C,r)}this._eventListeners=h}};function sb(e,n,a,r){return b(e).addEventListener(n,a,r),!1}Mi.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=Y_(r,e,n,a),n!==-1)){var u=r[n];a=u.attachedListener;var h=u.cleanup;u=io(u.optionsOrUseCapture),_(this._fragmentFiber.child,!1,rb,e,a,u),r.splice(n,1),h!==null&&h()}};function rb(e,n,a,r){return b(e).removeEventListener(n,a,r),!1}function io(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function W_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Y_(e,n,a,r){if(e.length===0)return-1;r=W_(r);for(var u=0;u<e.length;u++){var h=e[u];if(h.type===n&&h.listener===a&&W_(h.optionsOrUseCapture)===r)return u}return-1}Mi.prototype.dispatchEvent=function(e){var n=v(this._fragmentFiber);if(n===null)return!0;n=b(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var h=a[u];r.addEventListener(h.type,h.attachedListener,io(h.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(u=0;u<a.length;u++)h=a[u],r.removeEventListener(h.type,h.attachedListener,io(h.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},Mi.prototype.focus=function(e){_(this._fragmentFiber.child,!0,K_,e,void 0,void 0)};function K_(e,n){return e.tag===6?!1:(e=b(e),_b(e,n))}Mi.prototype.focusLast=function(e){var n=[];_(this._fragmentFiber.child,!0,Vd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!K_(n[a],e);a--);};function Vd(e,n){return n.push(e),!1}Mi.prototype.blur=function(){var e=v(this._fragmentFiber);e!==null&&(e=b(e),e=El(e).activeElement,e!==null&&_(this._fragmentFiber.child,!1,ob,e,void 0,void 0))};function ob(e,n){return e.tag===6?!1:(e=b(e),e===n||e.contains(n)?(n.blur(),!0):!1)}Mi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),_(this._fragmentFiber.child,!1,lb,e,void 0,void 0)};function lb(e,n){return e.tag===6||(e=b(e),n.observe(e)),!1}Mi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),_(this._fragmentFiber.child,!1,cb,e,void 0,void 0);for(var a=n=0;a<Ki.length;a++){var r=Ki[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Ki[n++]=r}Ki.length=n}};function cb(e,n){return e.tag===6||(e=b(e),n.unobserve(e)),!1}var Ki=[],kd=!1;function ub(e,n,a){Ki.push({fragmentInstance:e,observer:n,instance:a}),kd||(kd=!0,xb(function(){kd=!1;var r=Ki;Ki=[];for(var u=0;u<r.length;u++){var h=r[u];h.observer.unobserve(h.instance)}}))}Mi.prototype.getClientRects=function(){var e=[];return _(this._fragmentFiber.child,!1,fb,e,void 0,void 0),e};function fb(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=b(e),n.push.apply(n,e.getClientRects());return!1}Mi.prototype.getRootNode=function(e){var n=v(this._fragmentFiber);return n===null?this:b(n).getRootNode(e)},Mi.prototype.compareDocumentPosition=function(e){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,Vd,a,void 0,void 0);var r=b(n);if(a.length===0){if(a=r,x(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=r=a.compareDocumentPosition(e);return a===e?u=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=S(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(e=b(a).compareDocumentPosition(e),u=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=b(a[0]),u=b(a[a.length-1]);var h=x(this._fragmentFiber)?n.parentElement:r;if(h==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=h.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,h=h.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var M=n.compareDocumentPosition(e),C=u.compareDocumentPosition(e),V=M&Node.DOCUMENT_POSITION_CONTAINED_BY||C&Node.DOCUMENT_POSITION_CONTAINED_BY;return C=r&&h&&M&Node.DOCUMENT_POSITION_FOLLOWING&&C&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||h&&u===e||V||C?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!h&&u===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:M,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||hb(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function hb(e,n,a,r,u){var h=de(u);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!h)t:{for(;h!==null;){if(h.tag===7&&(h===n||h.alternate===n)){a=!0;break t}h=h.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(h===null)return h=u.ownerDocument,u===h||u===h.documentElement||u===h.body;t:{for(h=n,n=v(n);h!==null;){if(!(h.tag!==5&&h.tag!==3&&h.tag!==27||h!==n&&h.alternate!==n)){h=!0;break t}h=h.return}h=!1}return h}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!h)&&!(n=h===a)&&(n=D(a,h,N),n===null?n=!1:(_(n,!0,I,h,a),h=y,y=null,n=h!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!h)&&!(n=h===r)&&(n=D(r,h,N),n===null?n=!1:(_(n,!0,w,h,r),h=y,L=y=null,n=h!==null)),n):!1}function Z_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Mi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];_(this._fragmentFiber.child,!1,Vd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=S(this._fragmentFiber);if(r=a?r[1]||r[0]||v(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Z_(e,a);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var u=n[r];u.tag===6?(u=b(u),Z_(u,a)):b(u).scrollIntoView(e),r+=a?-1:1}};function db(e,n){return e=b(e),Q_(e,n),!1}function Q_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function J_(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];e.addEventListener(u.type,u.attachedListener,io(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(h){for(var M=0,C=0;C<Ki.length;C++){var V=Ki[C];(V.fragmentInstance!==n||V.observer!==h||V.instance!==e)&&(Ki[M++]=V)}Ki.length=M,h.observe(e)}),Q_(e,n))}function pb(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];e.removeEventListener(u.type,u.attachedListener,io(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(h){typeof h.rootMargin=="string"?ub(n,h,e):h.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Xd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xd(a),ne(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function mb(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Gt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Ii(e.nextSibling),e===null)break}return null}function gb(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ii(e.nextSibling),e===null))return null;return e}function j_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ii(e.nextSibling),e===null))return null;return e}function qd(e){return e.data==="$?"||e.data==="$~"}function Wd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vb(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ii(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Yd=null;function $_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ii(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function tx(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function _b(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function xb(e){H_(function(){H_(function(n){return e(n)})})}function ex(e,n,a){switch(n=El(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function nx(e,n,a){for(var r in a){var u=a[r];a.hasOwnProperty(r)&&u!=null&&Qe(e,n,r,null,KM,u)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===oa&&(e.onclick=null),ne(e)}function Kd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ne(e)}var Bi=new Map,ix=new Set;function Tl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Fa=wt.d;wt.d={f:yb,r:Sb,D:Mb,C:bb,L:Eb,m:Tb,X:wb,S:Ab,M:Rb};function yb(){var e=Fa.f(),n=uu();return e||n}function Sb(e){var n=ye(e);n!==null&&n.tag===5&&n.type==="form"?sv(n):Fa.r(e)}var ao=typeof document>"u"?null:document;function ax(e,n,a){var r=ao;if(r&&typeof n=="string"&&n){var u=Di(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),ix.has(u)||(ix.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Bn(n,"link",e),Ae(n),r.head.appendChild(n)))}}function Mb(e){Fa.D(e),ax("dns-prefetch",e,null)}function bb(e,n){Fa.C(e,n),ax("preconnect",e,n)}function Eb(e,n,a){Fa.L(e,n,a);var r=ao;if(r&&e&&n){var u='link[rel="preload"][as="'+Di(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Di(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Di(a.imageSizes)+'"]')):u+='[href="'+Di(e)+'"]';var h=u;switch(n){case"style":h=so(e);break;case"script":h=ro(e)}if(!(Bi.has(h)||(e=U({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Bi.set(h,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Al(h))||n==="script"&&r.querySelector(wl(h))))){var M=r.createElement("link");Bn(M,"link",e),n==="style"&&(M[te]=!0,M.onload=M.onerror=function(){$e(M)}),Ae(M),r.head.appendChild(M)}}}function Tb(e,n){Fa.m(e,n);var a=ao;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Di(r)+'"][href="'+Di(e)+'"]',h=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=ro(e)}if(!Bi.has(h)&&(e=U({rel:"modulepreload",href:e},n),Bi.set(h,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wl(h)))return}r=a.createElement("link"),Bn(r,"link",e),Ae(r),a.head.appendChild(r)}}}function Ab(e,n,a){Fa.S(e,n,a);var r=ao;if(r&&e){var u=Ce(r).hoistableStyles,h=so(e);n=n||"default";var M=u.get(h);if(!M){var C={loading:0,preload:null};if(M=r.querySelector(Al(h)))C.loading=5;else{e=U({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Bi.get(h))&&Zd(e,a);var V=M=r.createElement("link");Ae(V),Bn(V,"link",e),V._p=new Promise(function(ot,gt){V.onload=ot,V.onerror=gt}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,vu(M,n,r)}M={type:"stylesheet",instance:M,count:1,state:C},u.set(h,M)}}}function wb(e,n){Fa.X(e,n);var a=ao;if(a&&e){var r=Ce(a).hoistableScripts,u=ro(e),h=r.get(u);h||(h=a.querySelector(wl(u)),h||(e=U({src:e,async:!0},n),(n=Bi.get(u))&&Qd(e,n),h=a.createElement("script"),Ae(h),Bn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(u,h))}}function Rb(e,n){Fa.M(e,n);var a=ao;if(a&&e){var r=Ce(a).hoistableScripts,u=ro(e),h=r.get(u);h||(h=a.querySelector(wl(u)),h||(e=U({src:e,async:!0,type:"module"},n),(n=Bi.get(u))&&Qd(e,n),h=a.createElement("script"),Ae(h),Bn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(u,h))}}function sx(e,n,a,r){var u=(u=fe.current)?Tl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=so(a.href),n=Ce(u).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=so(a.href);var h=Ce(u).hoistableStyles,M=h.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,M),(h=u.querySelector(Al(e)))?h._p||(M.instance=h,M.state.loading=5):(h=Bi.get(e),h||(h={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Bi.set(e,h)),Cb(u,e,h,M.state))),n&&r===null)throw Error(s(528,""));return M}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=ro(a),n=Ce(u).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function so(e){return'href="'+Di(e)+'"'}function Al(e){return'link[rel="stylesheet"]['+e+"]"}function rx(e){return U({},e,{"data-precedence":e.precedence,precedence:null})}function Cb(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[te]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[te]=!0,n.onload=n.onerror=$e.bind(null,n),Bn(n,"link",a),Ae(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function ro(e){return'[src="'+Di(e)+'"]'}function wl(e){return"script[async]"+e}function ox(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Di(a.href)+'"]');if(r)return n.instance=r,Ae(r),r;var u=U({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ae(r),Bn(r,"style",u),vu(r,a.precedence,e),n.instance=r;case"stylesheet":u=so(a.href);var h=e.querySelector(Al(u));if(h)return n.state.loading|=4,n.instance=h,Ae(h),h;r=rx(a),(u=Bi.get(u))&&Zd(r,u),h=(e.ownerDocument||e).createElement("link"),Ae(h);var M=h;return M._p=new Promise(function(C,V){M.onload=C,M.onerror=V}),Bn(h,"link",r),n.state.loading|=4,vu(h,a.precedence,e),n.instance=h;case"script":return h=ro(a.src),(u=e.querySelector(wl(h)))?(n.instance=u,Ae(u),u):(r=a,(u=Bi.get(h))&&(r=U({},a),Qd(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),Ae(u),Bn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,vu(r,a.precedence,e));return n.instance}function vu(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,h=u,M=0;M<r.length;M++){var C=r[M];if(C.dataset.precedence===n)h=C;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Zd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Qd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var _u=null;function lx(e,n,a){if(_u===null){var r=new Map,u=_u=new Map;u.set(a,r)}else u=_u,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Gt]||h[R]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=e+M;var C=r.get(M);C?C.push(h):r.set(M,[h])}}return r}function Jd(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Db(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function cx(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function ux(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function fx(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function hx(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=fx(n),e.suspenseyImages.push(n)),e=Lb.bind(e),n.decode().then(e,e))}function Nb(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=so(r.href),h=n.querySelector(Al(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Rl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,Ae(h);return}h=n.ownerDocument||n,r=rx(r),(u=Bi.get(u))&&Zd(r,u),h=h.createElement("link"),Ae(h);var M=h;M._p=new Promise(function(C,V){M.onload=C,M.onerror=V}),Bn(h,"link",r),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Rl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var xu=0;function Ub(e,n){return e.stylesheets&&e.count===0&&Su(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Su(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&xu===0&&(xu=62500*QM());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Su(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>xu?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function dx(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Su(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function Rl(){this.count--,dx(this)}function Lb(){this.imgCount--,dx(this)}var yu=null;function Su(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yu=new Map,n.forEach(Ob,e),yu=null,Rl.call(e))}function Ob(e,n){if(!(n.state.loading&4)){var a=yu.get(e);if(a)var r=a.get(null);else{a=new Map,yu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var M=u[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),r=M)}r&&a.set(null,r)}u=n.instance,M=u.getAttribute("data-precedence"),h=a.get(M)||r,h===r&&a.set(null,u),a.set(M,u),this.count++,r=Rl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var oo={$$typeof:W,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function Pb(e,n,a,r,u,h,M,C,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Er(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Er(0),this.hiddenUpdates=Er(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.transitionTypes=null,this.incompleteTransitions=new Map}function px(e,n,a,r,u,h,M,C,V,ot,gt,Rt){return e=new Pb(e,n,a,M,V,ot,gt,Rt,C),n=1,h===!0&&(n|=24),h=ii(3,null,null,n),e.current=h,h.stateNode=e,n=hh(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:r,isDehydrated:a,cache:n},gh(h),e}function mx(e){return e?(e=Lr,e):Lr}function gx(e,n,a,r,u,h){u=mx(u),r.context===null?r.context=u:r.pendingContext=u,r=ls(n),r.payload={element:a},h=h===void 0?null:h,h!==null&&(r.callback=h),a=cs(e,r,n),a!==null&&(oi(a,e,n),sl(a,e,n))}function vx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function jd(e,n){vx(e,n),(e=e.alternate)&&vx(e,n)}function _x(e){if(e.tag===13||e.tag===31){var n=qs(e,67108864);n!==null&&oi(n,e,67108864),jd(e,67108864)}}function xx(e){if(e.tag===13||e.tag===31){var n=Si();n=Vo(n);var a=qs(e,n);a!==null&&oi(a,e,n),jd(e,n)}}var lo=!0;function zb(e,n,a,r){var u=j.T;j.T=null;var h=wt.p;try{wt.p=2,$d(e,n,a,r)}finally{wt.p=h,j.T=u}}function Ib(e,n,a,r){var u=j.T;j.T=null;var h=wt.p;try{wt.p=8,$d(e,n,a,r)}finally{wt.p=h,j.T=u}}function $d(e,n,a,r){if(lo){var u=tp(r);if(u===null)Od(e,n,r,Mu,a),Sx(e,r);else if(Fb(u,e,n,a,r))r.stopPropagation();else if(Sx(e,r),n&4&&-1<Bb.indexOf(e)){for(;u!==null;){var h=ye(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=Ta(h.pendingLanes);if(M!==0){var C=h;for(C.pendingLanes|=2,C.entangledLanes|=2;M;){var V=1<<31-xe(M);C.entanglements[1]|=V,M&=~V}va(h),(qe&6)===0&&(ou=kt()+500,Sl(0))}}break;case 31:case 13:C=qs(h,2),C!==null&&oi(C,h,2),uu(),jd(h,2)}if(h=tp(r),h===null&&Od(e,n,r,Mu,a),h===u)break;u=h}u!==null&&r.stopPropagation()}else Od(e,n,r,null,a)}}function tp(e){return e=Ff(e),ep(e)}var Mu=null;function ep(e){if(Mu=null,e=de(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Mu=e,null}function yx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(re()){case pe:return 2;case et:return 8;case Bt:case Ct:return 32;case Ht:return 268435456;default:return 32}default:return 32}}var np=!1,Ss=null,Ms=null,bs=null,Cl=new Map,Dl=new Map,Es=[],Bb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sx(e,n){switch(e){case"focusin":case"focusout":Ss=null;break;case"dragenter":case"dragleave":Ms=null;break;case"mouseover":case"mouseout":bs=null;break;case"pointerover":case"pointerout":Cl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dl.delete(n.pointerId)}}function Nl(e,n,a,r,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:h,targetContainers:[u]},n!==null&&(n=ye(n),n!==null&&_x(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Fb(e,n,a,r,u){switch(n){case"focusin":return Ss=Nl(Ss,e,n,a,r,u),!0;case"dragenter":return Ms=Nl(Ms,e,n,a,r,u),!0;case"mouseover":return bs=Nl(bs,e,n,a,r,u),!0;case"pointerover":var h=u.pointerId;return Cl.set(h,Nl(Cl.get(h)||null,e,n,a,r,u)),!0;case"gotpointercapture":return h=u.pointerId,Dl.set(h,Nl(Dl.get(h)||null,e,n,a,r,u)),!0}return!1}function Mx(e){var n=de(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,lc(e.priority,function(){xx(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,lc(e.priority,function(){xx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=tp(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Bf=r,a.target.dispatchEvent(r),Bf=null}else return n=ye(a),n!==null&&_x(n),e.blockedOn=a,!1;n.shift()}return!0}function bx(e,n,a){bu(e)&&a.delete(n)}function Hb(){np=!1,Ss!==null&&bu(Ss)&&(Ss=null),Ms!==null&&bu(Ms)&&(Ms=null),bs!==null&&bu(bs)&&(bs=null),Cl.forEach(bx),Dl.forEach(bx)}function Eu(e,n){e.blockedOn===n&&(e.blockedOn=null,np||(np=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Hb)))}var Tu=null;function Ex(e){Tu!==e&&(Tu=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Tu===e&&(Tu=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(ep(r||a)===null)continue;break}var h=ye(a);h!==null&&(e.splice(n,3),n-=3,Ih(h,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function co(e){function n(V){return Eu(V,e)}Ss!==null&&Eu(Ss,e),Ms!==null&&Eu(Ms,e),bs!==null&&Eu(bs,e),Cl.forEach(n),Dl.forEach(n);for(var a=0;a<Es.length;a++){var r=Es[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Es.length&&(a=Es[0],a.blockedOn===null);)Mx(a),a.blockedOn===null&&Es.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],h=a[r+1],M=u[J]||null;if(typeof h=="function")M||Ex(a);else if(M){var C=null;if(h&&h.hasAttribute("formAction")){if(u=h,M=h[J]||null)C=M.formAction;else if(ep(u)!==null)continue}else C=M.action;typeof C=="function"?a[r+1]=C:(a.splice(r,3),r-=3),Ex(a)}}}function Tx(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(M){return u=M})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ip(e){this._internalRoot=e}Au.prototype.render=ip.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Si();gx(a,r,e,n,null,null)},Au.prototype.unmount=ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;gx(e.current,2,null,e,null,null),uu(),n[vt]=null}};function Au(e){this._internalRoot=e}Au.prototype.unstable_scheduleHydration=function(e){if(e){var n=oc();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Es.length&&n!==0&&n<Es[a].priority;a++);Es.splice(a,0,e),a===0&&Mx(e)}};var Ax=t.version;if(Ax!=="19.3.0")throw Error(s(527,Ax,"19.3.0"));wt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Gb={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wu.isDisabled&&wu.supportsFiber)try{se=wu.inject(Gb),Kt=wu}catch{}}return Ll.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=mv,h=gv,M=vv;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=px(e,1,!1,null,null,a,r,null,u,h,M,Tx),e[vt]=n.current,Ld(e),new ip(n)},Ll.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",h=mv,M=gv,C=vv,V=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=px(e,1,!0,n,a??null,r,u,V,h,M,C,Tx),n.context=mx(null),a=n.current,r=Si(),r=Vo(r),u=ls(r),u.callback=null,cs(a,u,r),a=r,n.current.lanes=a,sa(n,a),va(n),e[vt]=n.current,Ld(e),new Au(n)},Ll.version="19.3.0",Ll}var zx;function Jb(){if(zx)return rp.exports;zx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),rp.exports=Qb(),rp.exports}var jb=Jb();const fy=1495978707e-1,hy=94607304725808e-1,li=695700,Ix=fy,ci=hy,$b=6371,up=o=>2.9532*o,zs=[{id:"ceres",accent:"#bdb8b0",name:"ceres",kind:"rocky",radiusKm:469.7,sphere:!0,color:"#8a8782",color2:"#5f5c58",fact:"the biggest thing in the asteroid belt, with bright salt deposits in occator crater.",source:"ceres"},{id:"makemake",accent:"#e0a07e",name:"makemake",kind:"rocky",radiusKm:715,sphere:!0,color:"#b07a5e",color2:"#7a4d3a",fact:"a reddish dwarf planet past neptune, found around easter 2005.",source:"makemake",note:"surface map is an illustration; no spacecraft has visited."},{id:"pluto",accent:"#e4c6a8",name:"pluto",kind:"rocky",radiusKm:1188.3,sphere:!0,color:"#c9b39b",color2:"#7a4a3a",fact:"the heart-shaped plain is a glacier of nitrogen ice, bigger than texas.",source:"pluto"},{id:"europa",accent:"#e6d6bc",name:"europa",kind:"rocky",radiusKm:1560.8,sphere:!0,color:"#d8cbb4",color2:"#8a6a50",fact:"under the cracked ice, an ocean with maybe twice the water of earth’s.",source:"europa"},{id:"moon",accent:"#cfcdc8",name:"the moon",kind:"rocky",radiusKm:1737.4,sphere:!0,color:"#9c9a96",color2:"#6f6d6a",fact:"the only other world people have walked on. twelve of us, so far.",source:"nasa-fs"},{id:"mercury",accent:"#c9bca8",name:"mercury",kind:"rocky",radiusKm:2439.7,sphere:!0,color:"#8f8577",color2:"#5e574e",fact:"a year there is 88 days. a single day is 176.",source:"nasa-fs"},{id:"titan",accent:"#eeb264",name:"titan",kind:"rocky",radiusKm:2574.7,sphere:!0,color:"#d9a04e",color2:"#a8742e",fact:"a moon bigger than mercury, with rain, rivers and seas of liquid methane.",source:"titan"},{id:"mars",accent:"#e8845a",name:"mars",kind:"rocky",radiusKm:3389.5,sphere:!0,color:"#b5623a",color2:"#7a3a22",fact:"home to olympus mons, a volcano about 2.5× taller than everest.",source:"nasa-fs"},{id:"venus",accent:"#ecd29c",name:"venus",kind:"rocky",radiusKm:6051.8,sphere:!0,color:"#d9bf8c",color2:"#b09366",fact:"hot enough to melt lead, under clouds of sulfuric acid.",source:"nasa-fs"},{id:"earth",accent:"#7fb8e6",name:"earth",kind:"earth",radiusKm:6371,sphere:!0,color:"#2f5f8f",color2:"#4f7a3f",fact:"everyone i know, and everyone i ever will, is on here.",source:"nasa-fs"},{id:"kepler22b",accent:"#82c8dc",name:"kepler-22b",kind:"ice",radiusKm:2.1*$b,sphere:!0,color:"#5f93ad",color2:"#2f5f7a",fact:"the first planet kepler found in its star’s habitable zone, 640 light-years away.",source:"k22b",note:"radius uncertain (~2.1–2.4 r⊕); what it’s made of is unknown, so this is an illustration."},{id:"neptune",accent:"#7c9df4",name:"neptune",kind:"ice",radiusKm:24622,sphere:!0,color:"#3f63c7",color2:"#2d4799",fact:"winds up to 2,000 km/h. the fastest we know of in the solar system.",source:"nasa-fs"},{id:"uranus",accent:"#a2e2e8",name:"uranus",kind:"ice",radiusKm:25362,sphere:!0,color:"#8fcfd6",color2:"#6fb2bb",fact:"it rolls around the sun on its side, tipped about 98°.",source:"nasa-fs"},{id:"saturn",accent:"#ead49e",name:"saturn",kind:"ringed",radiusKm:58232,sphere:!0,color:"#d8c08a",color2:"#b39866",fact:"its rings are ~280,000 km wide but mostly just tens of meters thick.",source:"nasa-fs"},{id:"jupiter",accent:"#e4c49e",name:"jupiter",kind:"gas",radiusKm:69911,sphere:!0,color:"#c9a27a",color2:"#8c6446",fact:"the great red spot is a storm wider than earth, running for centuries.",source:"nasa-fs"},{id:"sun",accent:"#ffc95c",name:"the sun",kind:"star",radiusKm:li,sphere:!0,color:"#fff1d6",tempK:5772,fact:"about 99.8% of all the mass in our solar system.",source:"iau"},{id:"sirius",accent:"#bcd6ff",name:"sirius a",kind:"star",radiusKm:1.711*li,sphere:!0,color:"#cfe0ff",tempK:9940,fact:"the brightest star in the night sky, 8.6 light-years away.",source:"sirius"},{id:"elnath",accent:"#c0d8ff",name:"elnath",kind:"star",radiusKm:4.2*li,sphere:!0,color:"#d6e2ff",tempK:13824,fact:"the tip of taurus’ northern horn, a blue-white giant.",source:"elnath"},{id:"pollux",accent:"#ffbc74",name:"pollux",kind:"star",radiusKm:9.06*li,sphere:!0,color:"#ffc58a",tempK:4586,fact:"an orange giant with a planet of its own, thestias.",source:"pollux"},{id:"sgra",accent:"#c6ddff",dim:"horizon radius",name:"sagittarius a*",kind:"blackhole",radiusKm:up(415e4),sphere:!0,color:"#cfe0ff",fact:"the black hole at the heart of the milky way. 4 million suns, quietly starving.",source:"sgra",note:"size is the event horizon; the shadow the eht imaged is ~2.6× wider."},{id:"arcturus",accent:"#ffb06a",name:"arcturus",kind:"star",radiusKm:25.4*li,sphere:!0,color:"#ffb574",tempK:4286,fact:"its light opened the 1933 chicago world’s fair.",source:"arcturus"},{id:"aldebaran",accent:"#ffa060",name:"aldebaran",kind:"star",radiusKm:45.1*li,sphere:!0,color:"#ffa865",tempK:3900,fact:"the red eye of taurus. pioneer 10 is drifting its way.",source:"aldebaran"},{id:"aludra",accent:"#b8d0ff",name:"aludra",kind:"star",radiusKm:54*li,sphere:!0,color:"#c8d8ff",tempK:15800,fact:"a blue supergiant in canis major, probably done being a red one.",source:"aludra",note:"estimates range ~54–80 r☉."},{id:"rigel",accent:"#b2ceff",name:"rigel",kind:"star",radiusKm:78.9*li,sphere:!0,color:"#bcd2ff",tempK:12100,fact:"a blue supergiant, ~120,000 times brighter than the sun.",source:"rigel"},{id:"pistol",accent:"#acc6ff",name:"pistol star",kind:"star",radiusKm:306*li,sphere:!0,color:"#c4d4ff",tempK:11800,fact:"a blue hypergiant hidden by dust near the galactic center, ~1.6 million suns bright.",source:"pistol",note:"radius uncertain (~300–340 r☉)."},{id:"antares",accent:"#ff8458",name:"antares",kind:"star",radiusKm:680*li,sphere:!0,color:"#ff9150",tempK:3660,fact:"put it where the sun is and it swallows mars’ orbit.",source:"antares",note:"radius estimates range ~680–880 r☉."},{id:"betelgeuse",accent:"#ff8a56",name:"betelgeuse",kind:"star",radiusKm:764*li,sphere:!0,color:"#ff8a48",tempK:3600,fact:"it will go supernova someday. someday could be 100,000 years.",source:"betel",note:"radius ~640–1,020 r☉ depending on the study."},{id:"uyscuti",accent:"#ff804e",name:"uy scuti",kind:"star",radiusKm:909*li,sphere:!0,color:"#ff7f40",tempK:3365,fact:"one of the biggest stars we know, though nobody agrees how big.",source:"uyscuti",note:"uncertain: ~909 r☉ (gaia distance) vs 1,708 r☉ (older distance)."},{id:"vycma",accent:"#ff7c4a",name:"vy canis majoris",kind:"star",radiusKm:1420*li,sphere:!0,color:"#ff7a3c",tempK:3490,fact:"a dying hypergiant shedding a sun’s worth of gas every few thousand years.",source:"vycma",note:"radius ~1,300–1,540 r☉."},{id:"st218",accent:"#ff7446",name:"stephenson 2-18",kind:"star",radiusKm:2150*li,sphere:!0,color:"#ff6f38",tempK:3200,fact:"maybe the biggest star known. at the sun’s place, it would reach past saturn.",source:"st218",note:"very uncertain: depends on a model distance and temperature."},{id:"heliosphere",accent:"#aec1e2",name:"the heliosphere",kind:"heliosphere",radiusKm:120*Ix,sphere:!1,color:"#9fb4d9",fact:"the sun’s wind bubble. voyager 1 left it in 2012 and kept going.",source:"helio",note:"really comet-shaped, not round."},{id:"s5",accent:"#ffe0aa",dim:"horizon radius",name:"s5 0014+81",kind:"blackhole",radiusKm:up(4e10),sphere:!0,color:"#ffe3b0",fact:"a blazar: its jet points almost straight at us, outshining whole galaxies.",source:"s5",note:"size is the event horizon; the mass (~40 billion m☉) is uncertain."},{id:"ton618",accent:"#ffa044",dim:"horizon radius",name:"ton 618",kind:"blackhole",radiusKm:up(66e9),sphere:!0,color:"#ffb060",fact:"one of the heaviest black holes known, powering a quasar 10.4 billion light-years away.",source:"ton618",note:"event horizon for ~66 billion m☉; estimates range ~40–66 billion."},{id:"helix",accent:"#74c4e2",name:"helix nebula",kind:"nebula",radiusKm:1.25*ci,sphere:!1,color:"#5fa6c9",color2:"#d9764a",fact:"a sun-like star’s last breath. our sun will make one of these too.",source:"helix",note:"the faint outer ring reaches ~5.7 ly."},{id:"oort",accent:"#cdd7e8",name:"the oort cloud",kind:"oort",radiusKm:1e5*Ix,sphere:!1,color:"#c9d4e6",fact:"a shell of trillions of icy bodies. nobody has seen it directly.",source:"oort",note:"outer edge estimates range 10,000–100,000 au."},{id:"pillars",accent:"#e6ac64",dim:"tall",name:"pillars of creation",kind:"nebula",radiusKm:2*ci,sphere:!1,color:"#d9a05a",color2:"#3f63c7",fact:"towers of gas and dust in the eagle nebula, with new stars forming in their tips.",source:"pillars",note:"size is the tallest pillar; the whole eagle nebula is ~70 × 55 ly."},{id:"horsehead",accent:"#e8947a",dim:"tall",name:"horsehead nebula",kind:"nebula",radiusKm:2.5*ci,sphere:!1,color:"#b0604a",color2:"#6f8fb0",fact:"a dark dust cloud in orion that happens to look like a knight chess piece.",source:"horsehead",note:"height; ~2.5 ly wide."},{id:"orion",accent:"#ec9ec4",name:"orion nebula",kind:"nebula",radiusKm:12*ci,sphere:!1,color:"#d98ab0",color2:"#6fb3c9",fact:"a star nursery you can see with your eyes, under orion’s belt.",source:"orion"},{id:"omega",accent:"#ffe2b8",name:"omega centauri",kind:"cluster",radiusKm:75*ci,sphere:!1,color:"#ffe2b8",fact:"about 10 million stars packed into one ball of light.",source:"omega"},{id:"segue2",accent:"#f0dcc0",name:"segue 2",kind:"dwarf",radiusKm:110*ci,sphere:!1,color:"#ffe2b8",fact:"a galaxy of barely a thousand stars, one of the faintest ever found.",source:"segue2",note:"half-light size."},{id:"tarantula",accent:"#eab48e",name:"tarantula nebula",kind:"nebula",radiusKm:325*ci,sphere:!1,color:"#d9a080",color2:"#5f7fb0",fact:"the busiest star factory near us. at orion’s distance it would cast shadows.",source:"tarantula",note:"size estimates range 650–1,860 ly."},{id:"m64",accent:"#eaca9c",name:"black eye galaxy",kind:"galaxy",radiusKm:27e3*ci,sphere:!1,color:"#e9d2b0",fact:"a dark band of dust over its bright core. its outer gas spins backwards.",source:"m64"},{id:"milkyway",accent:"#f2deb6",name:"the milky way",kind:"galaxy",radiusKm:5e4*ci,sphere:!1,color:"#e9dcc4",color2:"#9fb4d9",tilt:.62,fact:"home. 100–400 billion stars, and we’re in the suburbs.",source:"mw"},{id:"andromeda",accent:"#bcaaf4",name:"andromeda",kind:"galaxy",radiusKm:76e3*ci,sphere:!1,color:"#f0dcc0",color2:"#b8c4de",tilt:.34,fact:"headed our way. we merge in roughly 4–5 billion years.",source:"m31",note:"disc size; its faint halo is far bigger."},{id:"ic1101",accent:"#f2ce8a",name:"ic 1101",kind:"elliptical",radiusKm:85e4*ci,sphere:!1,color:"#e8c88a",fact:"one of the biggest galaxies known, a golden haze of ~100 trillion old stars.",source:"ic1101",note:"~1.7 million ly by the newest deep imaging; older figures (4 million ly+) include a diffuse halo."},{id:"virgo",accent:"#e2d0ae",name:"virgo supercluster",kind:"supercluster",radiusKm:55e6*ci,sphere:!1,color:"#d4a574",fact:"a hundred-ish galaxy groups and clusters, us somewhere on the edge.",source:"virgo"},{id:"laniakea",accent:"#e8c99c",name:"laniakea",kind:"laniakea",radiusKm:26e7*ci,sphere:!1,color:"#d4a574",fact:"hawaiian for “immeasurable heaven.” 100,000 galaxies flowing one way.",source:"lania"},{id:"universe",accent:"#eeede8",name:"the observable universe",kind:"universe",radiusKm:465e8*ci,sphere:!1,color:"#d4a574",fact:"everything light has had time to reach us from. that’s the edge, for now.",source:"ou",note:"comoving size; the universe itself may be infinite."}],tE=zs.find(o=>o.id==="earth");function eE(o){if(o<1e8)return{value:rf(o),unit:"km"};const t=o/fy;return t<2e4?{value:rf(t),unit:"au"}:{value:rf(o/hy),unit:"light-years"}}const nE=[[1e18,"quintillion"],[1e15,"quadrillion"],[1e12,"trillion"],[1e9,"billion"],[1e6,"million"]];function sf(o){return o>=100?Math.round(o).toLocaleString("en-US"):o>=10?(Math.round(o*10)/10).toString():(Math.round(o*100)/100).toString()}function rf(o){if(o>=1e21){const t=Math.floor(Math.log10(o));return`${sf(o/10**t)} × 10^${t}`}for(const[t,i]of nE)if(o>=t)return`${sf(o/t)} ${i}`;return sf(o)}function Bx(o){return o<1?`${sf(o)}×`:`${rf(o)}×`}const tm="186",iE=0,Fx=1,aE=2,of=1,sE=2,Xl=3,vr=0,hi=1,Hi=2,na=0,Yl=1,Hx=2,Gx=3,Vx=4,gf=5,Wa=100,rE=101,oE=102,lE=103,cE=104,i0=200,Ro=201,uE=202,dy=203,py=204,vf=205,fE=206,hE=207,dE=208,pE=209,mE=210,gE=211,vE=212,_E=213,xE=214,a0=0,s0=1,r0=2,Jl=3,o0=4,l0=5,c0=6,u0=7,my=0,yE=1,SE=2,ba=0,gy=1,vy=2,_y=3,em=4,xy=5,yy=6,Sy=7,My=300,_r=301,Uo=302,fp=303,hp=304,Cf=306,f0=1e3,Ya=1001,h0=1002,Gn=1003,ME=1004,Ru=1005,Un=1006,dp=1007,Is=1008,fi=1009,by=1010,Ey=1011,jl=1012,nm=1013,Ea=1014,Sa=1015,ia=1016,im=1017,am=1018,$l=1020,Ty=35902,Ay=35899,wy=1021,Ry=1022,ea=1023,Za=1026,pr=1027,Cy=1028,sm=1029,xr=1030,rm=1031,om=1033,lf=33776,cf=33777,uf=33778,ff=33779,d0=35840,p0=35841,m0=35842,g0=35843,v0=36196,_0=37492,x0=37496,y0=37488,S0=37489,_f=37490,M0=37491,b0=37808,E0=37809,T0=37810,A0=37811,w0=37812,R0=37813,C0=37814,D0=37815,N0=37816,U0=37817,L0=37818,O0=37819,P0=37820,z0=37821,I0=36492,B0=36494,F0=36495,H0=36283,G0=36284,xf=36285,V0=36286,bE=3200,k0=0,EE=1,Ps="",ni="srgb",yf="srgb-linear",Sf="linear",Je="srgb",pp=7680,TE=519,AE=512,wE=513,RE=514,lm=515,CE=516,DE=517,cm=518,NE=519,UE=35044,kx="300 es",Ma=2e3,tc=2001;function LE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function ec(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function OE(){const o=ec("canvas");return o.style.display="block",o}const Xx={};function qx(...o){const t="THREE."+o.shift();console.log(t,...o)}function Dy(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function he(...o){o=Dy(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function ke(...o){o=Dy(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function Co(...o){const t=o.join(" ");t in Xx||(Xx[t]=!0,he(...o))}function PE(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const zE={[a0]:s0,[r0]:c0,[o0]:u0,[Jl]:l0,[s0]:a0,[c0]:r0,[u0]:o0,[l0]:Jl};class yr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mp=Math.PI/180,X0=180/Math.PI;function ic(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(qn[o&255]+qn[o>>8&255]+qn[o>>16&255]+qn[o>>24&255]+"-"+qn[t&255]+qn[t>>8&255]+"-"+qn[t>>16&15|64]+qn[t>>24&255]+"-"+qn[i&63|128]+qn[i>>8&255]+"-"+qn[i>>16&255]+qn[i>>24&255]+qn[s&255]+qn[s>>8&255]+qn[s>>16&255]+qn[s>>24&255]).toLowerCase()}function Ue(o,t,i){return Math.max(t,Math.min(i,o))}function IE(o,t){return(o%t+t)%t}function gp(o,t,i){return(1-i)*o+i*t}function Ol(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ui(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const xm=class xm{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ue(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ue(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xm.prototype.isVector2=!0;let ce=xm;class Kn{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let p=s[l+0],m=s[l+1],g=s[l+2],_=s[l+3],v=c[f+0],x=c[f+1],S=c[f+2],A=c[f+3];if(_!==A||p!==v||m!==x||g!==S){let b=p*v+m*x+g*S+_*A;b<0&&(v=-v,x=-x,S=-S,A=-A,b=-b);let y=1-d;if(b<.9995){const L=Math.acos(b),I=Math.sin(L);y=Math.sin(y*L)/I,d=Math.sin(d*L)/I,p=p*y+v*d,m=m*y+x*d,g=g*y+S*d,_=_*y+A*d}else{p=p*y+v*d,m=m*y+x*d,g=g*y+S*d,_=_*y+A*d;const L=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=L,m*=L,g*=L,_*=L}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],p=s[l+1],m=s[l+2],g=s[l+3],_=c[f],v=c[f+1],x=c[f+2],S=c[f+3];return t[i]=d*S+g*_+p*x-m*v,t[i+1]=p*S+g*v+m*_-d*x,t[i+2]=m*S+g*x+d*v-p*_,t[i+3]=g*S-d*_-p*v-m*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(s/2),g=d(l/2),_=d(c/2),v=p(s/2),x=p(l/2),S=p(c/2);switch(f){case"XYZ":this._x=v*g*_+m*x*S,this._y=m*x*_-v*g*S,this._z=m*g*S+v*x*_,this._w=m*g*_-v*x*S;break;case"YXZ":this._x=v*g*_+m*x*S,this._y=m*x*_-v*g*S,this._z=m*g*S-v*x*_,this._w=m*g*_+v*x*S;break;case"ZXY":this._x=v*g*_-m*x*S,this._y=m*x*_+v*g*S,this._z=m*g*S+v*x*_,this._w=m*g*_-v*x*S;break;case"ZYX":this._x=v*g*_-m*x*S,this._y=m*x*_+v*g*S,this._z=m*g*S-v*x*_,this._w=m*g*_+v*x*S;break;case"YZX":this._x=v*g*_+m*x*S,this._y=m*x*_+v*g*S,this._z=m*g*S-v*x*_,this._w=m*g*_-v*x*S;break;case"XZY":this._x=v*g*_-m*x*S,this._y=m*x*_-v*g*S,this._z=m*g*S+v*x*_,this._w=m*g*_+v*x*S;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],m=i[2],g=i[6],_=i[10],v=s+d+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-p)*x,this._y=(c-m)*x,this._z=(f-l)*x}else if(s>d&&s>_){const x=2*Math.sqrt(1+s-d-_);this._w=(g-p)/x,this._x=.25*x,this._y=(l+f)/x,this._z=(c+m)/x}else if(d>_){const x=2*Math.sqrt(1+d-s-_);this._w=(c-m)/x,this._x=(l+f)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+_-s-d);this._w=(f-l)/x,this._x=(c+m)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=s*g+f*d+l*m-c*p,this._y=l*g+f*p+c*d-s*m,this._z=c*g+f*m+s*p-l*d,this._w=f*g-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let p=1-i;if(d<.9995){const m=Math.acos(d),g=Math.sin(m);p=Math.sin(p*m)/g,i=Math.sin(i*m)/g,this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+f*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ym=class ym{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Wx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Wx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*s),g=2*(d*i-c*l),_=2*(c*s-f*i);return this.x=i+p*m+f*_-d*g,this.y=s+p*g+d*m-c*_,this.z=l+p*_+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this.z=Ue(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this.z=Ue(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ue(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*f-s*p,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return vp.copy(this).projectOnVector(t),this.sub(vp)}reflect(t){return this.sub(vp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ue(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ym.prototype.isVector3=!0;let K=ym;const vp=new K,Wx=new Kn,Sm=class Sm{constructor(t,i,s,l,c,f,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,p,m)}set(t,i,s,l,c,f,d,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=s,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],p=s[6],m=s[1],g=s[4],_=s[7],v=s[2],x=s[5],S=s[8],A=l[0],b=l[3],y=l[6],L=l[1],I=l[4],w=l[7],N=l[2],D=l[5],U=l[8];return c[0]=f*A+d*L+p*N,c[3]=f*b+d*I+p*D,c[6]=f*y+d*w+p*U,c[1]=m*A+g*L+_*N,c[4]=m*b+g*I+_*D,c[7]=m*y+g*w+_*U,c[2]=v*A+x*L+S*N,c[5]=v*b+x*I+S*D,c[8]=v*y+x*w+S*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8];return i*f*g-i*d*m-s*c*g+s*d*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=g*f-d*m,v=d*p-g*c,x=m*c-f*p,S=i*_+s*v+l*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/S;return t[0]=_*A,t[1]=(l*m-g*s)*A,t[2]=(d*s-l*f)*A,t[3]=v*A,t[4]=(g*i-l*p)*A,t[5]=(l*c-d*i)*A,t[6]=x*A,t[7]=(s*p-m*i)*A,t[8]=(f*i-s*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return Co("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_p.makeScale(t,i)),this}rotate(t){return Co("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_p.makeRotation(-t)),this}translate(t,i){return Co("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_p.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Sm.prototype.isMatrix3=!0;let ge=Sm;const _p=new ge,Yx=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kx=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BE(){const o={enabled:!0,workingColorSpace:yf,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Je&&(l.r=Ka(l.r),l.g=Ka(l.g),l.b=Ka(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Je&&(l.r=Do(l.r),l.g=Do(l.g),l.b=Do(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ps?Sf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Co("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Co("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[yf]:{primaries:t,whitePoint:s,transfer:Sf,toXYZ:Yx,fromXYZ:Kx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:t,whitePoint:s,transfer:Je,toXYZ:Yx,fromXYZ:Kx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),o}const Fe=BE();function Ka(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Do(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let uo;class FE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{uo===void 0&&(uo=ec("canvas")),uo.width=t.width,uo.height=t.height;const l=uo.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=uo}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ec("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ka(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ka(i[s]/255)*255):i[s]=Ka(i[s]);return{data:i,width:t.width,height:t.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let HE=0;class um{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=ic(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(xp(l[f].image)):c.push(xp(l[f]))}else c=xp(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function xp(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?FE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}let GE=0;const yp=new K;class Zn extends yr{constructor(t=Zn.DEFAULT_IMAGE,i=Zn.DEFAULT_MAPPING,s=Ya,l=Ya,c=Un,f=Is,d=ea,p=fi,m=Zn.DEFAULT_ANISOTROPY,g=Ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=ic(),this.name="",this.source=new um(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yp).x}get height(){return this.source.getSize(yp).y}get depth(){return this.source.getSize(yp).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){he(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){he(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==My)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case f0:t.x=t.x-Math.floor(t.x);break;case Ya:t.x=t.x<0?0:1;break;case h0:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case f0:t.y=t.y-Math.floor(t.y);break;case Ya:t.y=t.y<0?0:1;break;case h0:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=My;Zn.DEFAULT_ANISOTROPY=1;const Mm=class Mm{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,m=p[0],g=p[4],_=p[8],v=p[1],x=p[5],S=p[9],A=p[2],b=p[6],y=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-A)<.01&&Math.abs(S-b)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+A)<.1&&Math.abs(S+b)<.1&&Math.abs(m+x+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(m+1)/2,w=(x+1)/2,N=(y+1)/2,D=(g+v)/4,U=(_+A)/4,E=(S+b)/4;return I>w&&I>N?I<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(I),l=D/s,c=U/s):w>N?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=D/l,c=E/l):N<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(N),s=U/c,l=E/c),this.set(s,l,c,i),this}let L=Math.sqrt((b-S)*(b-S)+(_-A)*(_-A)+(v-g)*(v-g));return Math.abs(L)<.001&&(L=1),this.x=(b-S)/L,this.y=(_-A)/L,this.z=(v-g)/L,this.w=Math.acos((m+x+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this.z=Ue(this.z,t.z,i.z),this.w=Ue(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this.z=Ue(this.z,t,i),this.w=Ue(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ue(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mm.prototype.isVector4=!0;let an=Mm;class VE extends yr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Zn(l),f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new um(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends VE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Ny extends Zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kE extends Zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Rf=class Rf{constructor(t,i,s,l,c,f,d,p,m,g,_,v,x,S,A,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,p,m,g,_,v,x,S,A,b)}set(t,i,s,l,c,f,d,p,m,g,_,v,x,S,A,b){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=d,y[13]=p,y[2]=m,y[6]=g,y[10]=_,y[14]=v,y[3]=x,y[7]=S,y[11]=A,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rf().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/fo.setFromMatrixColumn(t,0).length(),c=1/fo.setFromMatrixColumn(t,1).length(),f=1/fo.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=f*g,x=f*_,S=d*g,A=d*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=x+S*m,i[5]=v-A*m,i[9]=-d*p,i[2]=A-v*m,i[6]=S+x*m,i[10]=f*p}else if(t.order==="YXZ"){const v=p*g,x=p*_,S=m*g,A=m*_;i[0]=v+A*d,i[4]=S*d-x,i[8]=f*m,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=x*d-S,i[6]=A+v*d,i[10]=f*p}else if(t.order==="ZXY"){const v=p*g,x=p*_,S=m*g,A=m*_;i[0]=v-A*d,i[4]=-f*_,i[8]=S+x*d,i[1]=x+S*d,i[5]=f*g,i[9]=A-v*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const v=f*g,x=f*_,S=d*g,A=d*_;i[0]=p*g,i[4]=S*m-x,i[8]=v*m+A,i[1]=p*_,i[5]=A*m+v,i[9]=x*m-S,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const v=f*p,x=f*m,S=d*p,A=d*m;i[0]=p*g,i[4]=A-v*_,i[8]=S*_+x,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-m*g,i[6]=x*_+S,i[10]=v-A*_}else if(t.order==="XZY"){const v=f*p,x=f*m,S=d*p,A=d*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=v*_+A,i[5]=f*g,i[9]=x*_-S,i[2]=S*_-x,i[6]=d*g,i[10]=A*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(XE,t,qE)}lookAt(t,i,s){const l=this.elements;return bi.subVectors(t,i),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),As.crossVectors(s,bi),As.lengthSq()===0&&(Math.abs(s.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),As.crossVectors(s,bi)),As.normalize(),Cu.crossVectors(bi,As),l[0]=As.x,l[4]=Cu.x,l[8]=bi.x,l[1]=As.y,l[5]=Cu.y,l[9]=bi.y,l[2]=As.z,l[6]=Cu.z,l[10]=bi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],p=s[8],m=s[12],g=s[1],_=s[5],v=s[9],x=s[13],S=s[2],A=s[6],b=s[10],y=s[14],L=s[3],I=s[7],w=s[11],N=s[15],D=l[0],U=l[4],E=l[8],O=l[12],P=l[1],F=l[5],H=l[9],q=l[13],k=l[2],W=l[6],X=l[10],Y=l[14],rt=l[3],nt=l[7],ct=l[11],_t=l[15];return c[0]=f*D+d*P+p*k+m*rt,c[4]=f*U+d*F+p*W+m*nt,c[8]=f*E+d*H+p*X+m*ct,c[12]=f*O+d*q+p*Y+m*_t,c[1]=g*D+_*P+v*k+x*rt,c[5]=g*U+_*F+v*W+x*nt,c[9]=g*E+_*H+v*X+x*ct,c[13]=g*O+_*q+v*Y+x*_t,c[2]=S*D+A*P+b*k+y*rt,c[6]=S*U+A*F+b*W+y*nt,c[10]=S*E+A*H+b*X+y*ct,c[14]=S*O+A*q+b*Y+y*_t,c[3]=L*D+I*P+w*k+N*rt,c[7]=L*U+I*F+w*W+N*nt,c[11]=L*E+I*H+w*X+N*ct,c[15]=L*O+I*q+w*Y+N*_t,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],p=t[9],m=t[13],g=t[2],_=t[6],v=t[10],x=t[14],S=t[3],A=t[7],b=t[11],y=t[15],L=p*x-m*v,I=d*x-m*_,w=d*v-p*_,N=f*x-m*g,D=f*v-p*g,U=f*_-d*g;return i*(A*L-b*I+y*w)-s*(S*L-b*N+y*D)+l*(S*I-A*N+y*U)-c*(S*w-A*D+b*U)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[1],f=t[5],d=t[9],p=t[2],m=t[6],g=t[10];return i*(f*g-d*m)-s*(c*g-d*p)+l*(c*m-f*p)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=t[9],v=t[10],x=t[11],S=t[12],A=t[13],b=t[14],y=t[15],L=i*d-s*f,I=i*p-l*f,w=i*m-c*f,N=s*p-l*d,D=s*m-c*d,U=l*m-c*p,E=g*A-_*S,O=g*b-v*S,P=g*y-x*S,F=_*b-v*A,H=_*y-x*A,q=v*y-x*b,k=L*q-I*H+w*F+N*P-D*O+U*E;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/k;return t[0]=(d*q-p*H+m*F)*W,t[1]=(l*H-s*q-c*F)*W,t[2]=(A*U-b*D+y*N)*W,t[3]=(v*D-_*U-x*N)*W,t[4]=(p*P-f*q-m*O)*W,t[5]=(i*q-l*P+c*O)*W,t[6]=(b*w-S*U-y*I)*W,t[7]=(g*U-v*w+x*I)*W,t[8]=(f*H-d*P+m*E)*W,t[9]=(s*P-i*H-c*E)*W,t[10]=(S*D-A*w+y*L)*W,t[11]=(_*w-g*D-x*L)*W,t[12]=(d*O-f*F-p*E)*W,t[13]=(i*F-s*O+l*E)*W,t[14]=(A*I-S*N-b*L)*W,t[15]=(g*N-_*I+v*L)*W,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,p=t.z,m=c*f,g=c*d;return this.set(m*f+s,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+s,g*p-l*f,0,m*p-l*d,g*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,p=i._w,m=c+c,g=f+f,_=d+d,v=c*m,x=c*g,S=c*_,A=f*g,b=f*_,y=d*_,L=p*m,I=p*g,w=p*_,N=s.x,D=s.y,U=s.z;return l[0]=(1-(A+y))*N,l[1]=(x+w)*N,l[2]=(S-I)*N,l[3]=0,l[4]=(x-w)*D,l[5]=(1-(v+y))*D,l[6]=(b+L)*D,l[7]=0,l[8]=(S+I)*U,l[9]=(b-L)*U,l[10]=(1-(v+A))*U,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let f=fo.set(l[0],l[1],l[2]).length();const d=fo.set(l[4],l[5],l[6]).length(),p=fo.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Zi.copy(this);const m=1/f,g=1/d,_=1/p;return Zi.elements[0]*=m,Zi.elements[1]*=m,Zi.elements[2]*=m,Zi.elements[4]*=g,Zi.elements[5]*=g,Zi.elements[6]*=g,Zi.elements[8]*=_,Zi.elements[9]*=_,Zi.elements[10]*=_,i.setFromRotationMatrix(Zi),s.x=f,s.y=d,s.z=p,this}makePerspective(t,i,s,l,c,f,d=Ma,p=!1){const m=this.elements,g=2*c/(i-t),_=2*c/(s-l),v=(i+t)/(i-t),x=(s+l)/(s-l);let S,A;if(p)S=c/(f-c),A=f*c/(f-c);else if(d===Ma)S=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(d===tc)S=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=S,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=Ma,p=!1){const m=this.elements,g=2/(i-t),_=2/(s-l),v=-(i+t)/(i-t),x=-(s+l)/(s-l);let S,A;if(p)S=1/(f-c),A=f/(f-c);else if(d===Ma)S=-2/(f-c),A=-(f+c)/(f-c);else if(d===tc)S=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=_,m[9]=0,m[13]=x,m[2]=0,m[6]=0,m[10]=S,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Rf.prototype.isMatrix4=!0;let cn=Rf;const fo=new K,Zi=new cn,XE=new K(0,0,0),qE=new K(1,1,1),As=new K,Cu=new K,bi=new K,Zx=new cn,Qx=new Kn;class Ai{constructor(t=0,i=0,s=0,l=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],g=l[9],_=l[2],v=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ue(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Ue(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Ue(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Zx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Qx.setFromEuler(this),this.setFromQuaternion(Qx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class Uy{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let WE=0;const Jx=new K,ho=new Kn,Ha=new cn,Du=new K,Pl=new K,YE=new K,KE=new Kn,jx=new K(1,0,0),$x=new K(0,1,0),t1=new K(0,0,1),e1={type:"added"},ZE={type:"removed"},po={type:"childadded",child:null},Sp={type:"childremoved",child:null};class Ln extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=ic(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new K,i=new Ai,s=new Kn,l=new K(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new ge}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ho.setFromAxisAngle(t,i),this.quaternion.multiply(ho),this}rotateOnWorldAxis(t,i){return ho.setFromAxisAngle(t,i),this.quaternion.premultiply(ho),this}rotateX(t){return this.rotateOnAxis(jx,t)}rotateY(t){return this.rotateOnAxis($x,t)}rotateZ(t){return this.rotateOnAxis(t1,t)}translateOnAxis(t,i){return Jx.copy(t).applyQuaternion(this.quaternion),this.position.add(Jx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(jx,t)}translateY(t){return this.translateOnAxis($x,t)}translateZ(t){return this.translateOnAxis(t1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ha.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Du.copy(t):Du.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Pl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ha.lookAt(Pl,Du,this.up):Ha.lookAt(Du,Pl,this.up),this.quaternion.setFromRotationMatrix(Ha),l&&(Ha.extractRotation(l.matrixWorld),ho.setFromRotationMatrix(Ha),this.quaternion.premultiply(ho.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(ke("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(e1),po.child=t,this.dispatchEvent(po),po.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ZE),Sp.child=t,this.dispatchEvent(Sp),Sp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(e1),po.child=t,this.dispatchEvent(po),po.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,t,YE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,KE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),x=f(t.animations),S=f(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),x.length>0&&(s.animations=x),S.length>0&&(s.nodes=S)}return s.object=l,s;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ln.DEFAULT_UP=new K(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hn extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QE={type:"move"};class Mp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const A of t.hand.values()){const b=i.getJointPose(A,s),y=this._getHandJoint(m,A);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,S=.005;m.inputState.pinching&&v>x+S?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=x-S&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(QE)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new hn;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Ly={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ws={h:0,s:0,l:0},Nu={h:0,s:0,l:0};function bp(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class ze{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Fe.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Fe.workingColorSpace){return this.r=t,this.g=i,this.b=s,Fe.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Fe.workingColorSpace){if(t=IE(t,1),i=Ue(i,0,1),s=Ue(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=bp(f,c,t+1/3),this.g=bp(f,c,t),this.b=bp(f,c,t-1/3)}return Fe.colorSpaceToWorking(this,l),this}setStyle(t,i=ni){function s(c){c!==void 0&&parseFloat(c)<1&&he("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:he("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);he("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ni){const s=Ly[t.toLowerCase()];return s!==void 0?this.setHex(s,i):he("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ka(t.r),this.g=Ka(t.g),this.b=Ka(t.b),this}copyLinearToSRGB(t){return this.r=Do(t.r),this.g=Do(t.g),this.b=Do(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ni){return Fe.workingToColorSpace(Wn.copy(this),t),Math.round(Ue(Wn.r*255,0,255))*65536+Math.round(Ue(Wn.g*255,0,255))*256+Math.round(Ue(Wn.b*255,0,255))}getHexString(t=ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Fe.workingColorSpace){Fe.workingToColorSpace(Wn.copy(this),i);const s=Wn.r,l=Wn.g,c=Wn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const _=f-d;switch(m=g<=.5?_/(f+d):_/(2-f-d),f){case s:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-s)/_+2;break;case c:p=(s-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Fe.workingColorSpace){return Fe.workingToColorSpace(Wn.copy(this),i),t.r=Wn.r,t.g=Wn.g,t.b=Wn.b,t}getStyle(t=ni){Fe.workingToColorSpace(Wn.copy(this),t);const i=Wn.r,s=Wn.g,l=Wn.b;return t!==ni?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ws),this.setHSL(ws.h+t,ws.s+i,ws.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ws),t.getHSL(Nu);const s=gp(ws.h,Nu.h,i),l=gp(ws.s,Nu.s,i),c=gp(ws.l,Nu.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new ze;ze.NAMES=Ly;let Mf=class extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}};const Qi=new K,Ga=new K,Ep=new K,Va=new K,mo=new K,go=new K,n1=new K,Tp=new K,Ap=new K,wp=new K,Rp=new an,Cp=new an,Dp=new an;class ta{constructor(t=new K,i=new K,s=new K){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Qi.subVectors(t,i),l.cross(Qi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Qi.subVectors(l,i),Ga.subVectors(s,i),Ep.subVectors(t,i);const f=Qi.dot(Qi),d=Qi.dot(Ga),p=Qi.dot(Ep),m=Ga.dot(Ga),g=Ga.dot(Ep),_=f*m-d*d;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(m*p-d*g)*v,S=(f*g-d*p)*v;return c.set(1-x-S,S,x)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Va)===null?!1:Va.x>=0&&Va.y>=0&&Va.x+Va.y<=1}static getInterpolation(t,i,s,l,c,f,d,p){return this.getBarycoord(t,i,s,l,Va)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Va.x),p.addScaledVector(f,Va.y),p.addScaledVector(d,Va.z),p)}static getInterpolatedAttribute(t,i,s,l,c,f){return Rp.setScalar(0),Cp.setScalar(0),Dp.setScalar(0),Rp.fromBufferAttribute(t,i),Cp.fromBufferAttribute(t,s),Dp.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Rp,c.x),f.addScaledVector(Cp,c.y),f.addScaledVector(Dp,c.z),f}static isFrontFacing(t,i,s,l){return Qi.subVectors(s,i),Ga.subVectors(t,i),Qi.cross(Ga).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qi.subVectors(this.c,this.b),Ga.subVectors(this.a,this.b),Qi.cross(Ga).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ta.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ta.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return ta.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return ta.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ta.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;mo.subVectors(l,s),go.subVectors(c,s),Tp.subVectors(t,s);const p=mo.dot(Tp),m=go.dot(Tp);if(p<=0&&m<=0)return i.copy(s);Ap.subVectors(t,l);const g=mo.dot(Ap),_=go.dot(Ap);if(g>=0&&_<=g)return i.copy(l);const v=p*_-g*m;if(v<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(s).addScaledVector(mo,f);wp.subVectors(t,c);const x=mo.dot(wp),S=go.dot(wp);if(S>=0&&x<=S)return i.copy(c);const A=x*m-p*S;if(A<=0&&m>=0&&S<=0)return d=m/(m-S),i.copy(s).addScaledVector(go,d);const b=g*S-x*_;if(b<=0&&_-g>=0&&x-S>=0)return n1.subVectors(c,l),d=(_-g)/(_-g+(x-S)),i.copy(l).addScaledVector(n1,d);const y=1/(b+A+v);return f=A*y,d=v*y,i.copy(s).addScaledVector(mo,f).addScaledVector(go,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ac{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ji.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ji.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ji.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Ji):Ji.fromBufferAttribute(c,f),Ji.applyMatrix4(t.matrixWorld),this.expandByPoint(Ji);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Uu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Uu.copy(s.boundingBox)),Uu.applyMatrix4(t.matrixWorld),this.union(Uu)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ji),Ji.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zl),Lu.subVectors(this.max,zl),vo.subVectors(t.a,zl),_o.subVectors(t.b,zl),xo.subVectors(t.c,zl),Rs.subVectors(_o,vo),Cs.subVectors(xo,_o),cr.subVectors(vo,xo);let i=[0,-Rs.z,Rs.y,0,-Cs.z,Cs.y,0,-cr.z,cr.y,Rs.z,0,-Rs.x,Cs.z,0,-Cs.x,cr.z,0,-cr.x,-Rs.y,Rs.x,0,-Cs.y,Cs.x,0,-cr.y,cr.x,0];return!Np(i,vo,_o,xo,Lu)||(i=[1,0,0,0,1,0,0,0,1],!Np(i,vo,_o,xo,Lu))?!1:(Ou.crossVectors(Rs,Cs),i=[Ou.x,Ou.y,Ou.z],Np(i,vo,_o,xo,Lu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ji).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ji).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ka[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ka[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ka[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ka[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ka[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ka[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ka[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ka[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ka),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ka=[new K,new K,new K,new K,new K,new K,new K,new K],Ji=new K,Uu=new ac,vo=new K,_o=new K,xo=new K,Rs=new K,Cs=new K,cr=new K,zl=new K,Lu=new K,Ou=new K,ur=new K;function Np(o,t,i,s,l){for(let c=0,f=o.length-3;c<=f;c+=3){ur.fromArray(o,c);const d=l.x*Math.abs(ur.x)+l.y*Math.abs(ur.y)+l.z*Math.abs(ur.z),p=t.dot(ur),m=i.dot(ur),g=s.dot(ur);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const Mn=new K,Pu=new ce;let JE=0;class Yn extends yr{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:JE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=UE,this.updateRanges=[],this.gpuType=Sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Pu.fromBufferAttribute(this,i),Pu.applyMatrix3(t),this.setXY(i,Pu.x,Pu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix3(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix4(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyNormalMatrix(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.transformDirection(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ol(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ui(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ol(i,this.array)),i}setX(t,i){return this.normalized&&(i=ui(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ol(i,this.array)),i}setY(t,i){return this.normalized&&(i=ui(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ol(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ui(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ol(i,this.array)),i}setW(t,i){return this.normalized&&(i=ui(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=ui(i,this.array),s=ui(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=ui(i,this.array),s=ui(s,this.array),l=ui(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=ui(i,this.array),s=ui(s,this.array),l=ui(l,this.array),c=ui(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Oy extends Yn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Py extends Yn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class bn extends Yn{constructor(t,i,s){super(new Float32Array(t),i,s)}}const jE=new ac,Il=new K,Up=new K;class zo{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):jE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Il.subVectors(t,this.center);const i=Il.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Il,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Up.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Il.copy(t.center).add(Up)),this.expandByPoint(Il.copy(t.center).sub(Up))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let $E=0;const Fi=new cn,Lp=new Ln,yo=new K,Ei=new ac,Bl=new ac,Nn=new K;class kn extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=ic(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(LE(t)?Py:Oy)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ge().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Fi.makeRotationFromQuaternion(t),this.applyMatrix4(Fi),this}rotateX(t){return Fi.makeRotationX(t),this.applyMatrix4(Fi),this}rotateY(t){return Fi.makeRotationY(t),this.applyMatrix4(Fi),this}rotateZ(t){return Fi.makeRotationZ(t),this.applyMatrix4(Fi),this}translate(t,i,s){return Fi.makeTranslation(t,i,s),this.applyMatrix4(Fi),this}scale(t,i,s){return Fi.makeScale(t,i,s),this.applyMatrix4(Fi),this}lookAt(t){return Lp.lookAt(t),Lp.updateMatrix(),this.applyMatrix4(Lp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new bn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ac);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Ei.setFromBufferAttribute(c),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const s=this.boundingSphere.center;if(Ei.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Bl.setFromBufferAttribute(d),this.morphTargetsRelative?(Nn.addVectors(Ei.min,Bl.min),Ei.expandByPoint(Nn),Nn.addVectors(Ei.max,Bl.max),Ei.expandByPoint(Nn)):(Ei.expandByPoint(Bl.min),Ei.expandByPoint(Bl.max))}Ei.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Nn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Nn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)Nn.fromBufferAttribute(d,m),p&&(yo.fromBufferAttribute(t,m),Nn.add(yo)),l=Math.max(l,s.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new Yn(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const d=[],p=[];for(let E=0;E<s.count;E++)d[E]=new K,p[E]=new K;const m=new K,g=new K,_=new K,v=new ce,x=new ce,S=new ce,A=new K,b=new K;function y(E,O,P){m.fromBufferAttribute(s,E),g.fromBufferAttribute(s,O),_.fromBufferAttribute(s,P),v.fromBufferAttribute(c,E),x.fromBufferAttribute(c,O),S.fromBufferAttribute(c,P),g.sub(m),_.sub(m),x.sub(v),S.sub(v);const F=1/(x.x*S.y-S.x*x.y);isFinite(F)&&(A.copy(g).multiplyScalar(S.y).addScaledVector(_,-x.y).multiplyScalar(F),b.copy(_).multiplyScalar(x.x).addScaledVector(g,-S.x).multiplyScalar(F),d[E].add(A),d[O].add(A),d[P].add(A),p[E].add(b),p[O].add(b),p[P].add(b))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let E=0,O=L.length;E<O;++E){const P=L[E],F=P.start,H=P.count;for(let q=F,k=F+H;q<k;q+=3)y(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const I=new K,w=new K,N=new K,D=new K;function U(E){N.fromBufferAttribute(l,E),D.copy(N);const O=d[E];I.copy(O),I.sub(N.multiplyScalar(N.dot(O))).normalize(),w.crossVectors(D,O);const F=w.dot(p[E])<0?-1:1;f.setXYZW(E,I.x,I.y,I.z,F)}for(let E=0,O=L.length;E<O;++E){const P=L[E],F=P.start,H=P.count;for(let q=F,k=F+H;q<k;q+=3)U(t.getX(q+0)),U(t.getX(q+1)),U(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Yn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,x=s.count;v<x;v++)s.setXYZ(v,0,0,0);const l=new K,c=new K,f=new K,d=new K,p=new K,m=new K,g=new K,_=new K;if(t)for(let v=0,x=t.count;v<x;v+=3){const S=t.getX(v+0),A=t.getX(v+1),b=t.getX(v+2);l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,b),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,S),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,b),d.add(g),p.add(g),m.add(g),s.setXYZ(S,d.x,d.y,d.z),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(b,m.x,m.y,m.z)}else for(let v=0,x=i.count;v<x;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Nn.fromBufferAttribute(t,i),Nn.normalize(),t.setXYZ(i,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(d,p){const m=d.array,g=d.itemSize,_=d.normalized,v=new m.constructor(p.length*g);let x=0,S=0;for(let A=0,b=p.length;A<b;A++){d.isInterleavedBufferAttribute?x=p[A]*d.data.stride+d.offset:x=p[A]*g;for(let y=0;y<g;y++)v[S++]=m[x++]}return new Yn(v,g,_)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new kn,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,_=m.length;g<_;g++){const v=m[g],x=t(v,s);p.push(x)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,v=m.length;_<v;_++){const x=m[_];g.push(x.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],_=c[m];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Op=new K,t2=new K,e2=new ge;class Os{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Op.subVectors(s,i).cross(t2.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Op),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(t.start).addScaledVector(l,f)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||e2.getNormalMatrix(t),l=this.coplanarPoint(Op).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let n2=0;class Sr extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n2++}),this.uuid=ic(),this.name="",this.type="Material",this.blending=Yl,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=py,this.blendDst=vf,this.blendEquation=Wa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Jl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=TE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pp,this.stencilZFail=pp,this.stencilZPass=pp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){he(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){he(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new Os().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new ce().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Xa=new K,Pp=new K,zu=new K,Iu=new K;class fm{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Xa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Xa.copy(this.origin).addScaledVector(this.direction,i),Xa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Pp.copy(t).add(i).multiplyScalar(.5),zu.copy(i).sub(t).normalize(),Iu.copy(this.origin).sub(Pp);const c=t.distanceTo(i)*.5,f=-this.direction.dot(zu),d=Iu.dot(this.direction),p=-Iu.dot(zu),m=Iu.lengthSq(),g=Math.abs(1-f*f);let _,v,x,S;if(g>0)if(_=f*p-d,v=f*d-p,S=c*g,_>=0)if(v>=-S)if(v<=S){const A=1/g;_*=A,v*=A,x=_*(_+f*v+2*d)+v*(f*_+v+2*p)+m}else v=c,_=Math.max(0,-(f*v+d)),x=-_*_+v*(v+2*p)+m;else v=-c,_=Math.max(0,-(f*v+d)),x=-_*_+v*(v+2*p)+m;else v<=-S?(_=Math.max(0,-(-f*c+d)),v=_>0?-c:Math.min(Math.max(-c,-p),c),x=-_*_+v*(v+2*p)+m):v<=S?(_=0,v=Math.min(Math.max(-c,-p),c),x=v*(v+2*p)+m):(_=Math.max(0,-(f*c+d)),v=_>0?c:Math.min(Math.max(-c,-p),c),x=-_*_+v*(v+2*p)+m);else v=f>0?-c:c,_=Math.max(0,-(f*v+d)),x=-_*_+v*(v+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Pp).addScaledVector(zu,v),x}intersectSphere(t,i){if(t.radius<0)return null;Xa.subVectors(t.center,this.origin);const s=Xa.dot(this.direction),l=Xa.dot(Xa)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(s=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(s=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-v.z)*_,p=(t.max.z-v.z)*_):(d=(t.max.z-v.z)*_,p=(t.min.z-v.z)*_),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Xa)!==null}intersectTriangle(t,i,s,l,c){const f=this.origin,d=this.direction,p=d.x,m=d.y,g=d.z,_=t.x-f.x,v=t.y-f.y,x=t.z-f.z,S=i.x-f.x,A=i.y-f.y,b=i.z-f.z,y=s.x-f.x,L=s.y-f.y,I=s.z-f.z,w=Math.abs(p),N=Math.abs(m),D=Math.abs(g);let U,E,O,P,F,H,q,k,W,X,Y,rt;if(w>=N&&w>=D?(O=p,H=_,W=S,rt=y,p>=0?(U=m,E=g,P=v,F=x,q=A,k=b,X=L,Y=I):(U=g,E=m,P=x,F=v,q=b,k=A,X=I,Y=L)):N>=D?(O=m,H=v,W=A,rt=L,m>=0?(U=g,E=p,P=x,F=_,q=b,k=S,X=I,Y=y):(U=p,E=g,P=_,F=x,q=S,k=b,X=y,Y=I)):(O=g,H=x,W=b,rt=I,g>=0?(U=p,E=m,P=_,F=v,q=S,k=A,X=y,Y=L):(U=m,E=p,P=v,F=_,q=A,k=S,X=L,Y=y)),O===0)return null;const nt=U/O,ct=E/O,_t=1/O,Ot=P-nt*H,Mt=F-ct*H,z=q-nt*W,Z=k-ct*W,ft=X-nt*rt,G=Y-ct*rt,tt=ft*Z-G*z,ht=Ot*G-Mt*ft,xt=z*Mt-Z*Ot;if(l){if(tt<0||ht<0||xt<0)return null}else if((tt<0||ht<0||xt<0)&&(tt>0||ht>0||xt>0))return null;const j=tt+ht+xt;if(j===0)return null;const wt=_t*(tt*H+ht*W+xt*rt);return(j>0?wt<0:wt>0)?null:this.at(wt/j,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zy extends Sr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=my,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const i1=new cn,fr=new fm,Bu=new zo,a1=new K,Fu=new K,Hu=new K,Gu=new K,zp=new K,Vu=new K,s1=new K,ku=new K;class ln extends Ln{constructor(t=new kn,i=new zy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Vu.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],_=c[p];g!==0&&(zp.fromBufferAttribute(_,t),f?Vu.addScaledVector(zp,g):Vu.addScaledVector(zp.sub(i),g))}i.add(Vu)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Bu.copy(s.boundingSphere),Bu.applyMatrix4(c),fr.copy(t.ray).recast(t.near),!(Bu.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Bu,a1)===null||fr.origin.distanceToSquared(a1)>(t.far-t.near)**2))&&(i1.copy(c).invert(),fr.copy(t.ray).applyMatrix4(i1),!(s.boundingBox!==null&&fr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,fr)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(d!==null)if(Array.isArray(f))for(let S=0,A=v.length;S<A;S++){const b=v[S],y=f[b.materialIndex],L=Math.max(b.start,x.start),I=Math.min(d.count,Math.min(b.start+b.count,x.start+x.count));for(let w=L,N=I;w<N;w+=3){const D=d.getX(w),U=d.getX(w+1),E=d.getX(w+2);l=Xu(this,y,t,s,m,g,_,D,U,E),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const S=Math.max(0,x.start),A=Math.min(d.count,x.start+x.count);for(let b=S,y=A;b<y;b+=3){const L=d.getX(b),I=d.getX(b+1),w=d.getX(b+2);l=Xu(this,f,t,s,m,g,_,L,I,w),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let S=0,A=v.length;S<A;S++){const b=v[S],y=f[b.materialIndex],L=Math.max(b.start,x.start),I=Math.min(p.count,Math.min(b.start+b.count,x.start+x.count));for(let w=L,N=I;w<N;w+=3){const D=w,U=w+1,E=w+2;l=Xu(this,y,t,s,m,g,_,D,U,E),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const S=Math.max(0,x.start),A=Math.min(p.count,x.start+x.count);for(let b=S,y=A;b<y;b+=3){const L=b,I=b+1,w=b+2;l=Xu(this,f,t,s,m,g,_,L,I,w),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function i2(o,t,i,s,l,c,f,d){let p;if(t.side===hi?p=s.intersectTriangle(f,c,l,!0,d):p=s.intersectTriangle(l,c,f,t.side===vr,d),p===null)return null;ku.copy(d),ku.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(ku);return m<i.near||m>i.far?null:{distance:m,point:ku.clone(),object:o}}function Xu(o,t,i,s,l,c,f,d,p,m){o.getVertexPosition(d,Fu),o.getVertexPosition(p,Hu),o.getVertexPosition(m,Gu);const g=i2(o,t,i,s,Fu,Hu,Gu,s1);if(g){const _=new K;ta.getBarycoord(s1,Fu,Hu,Gu,_),l&&(g.uv=ta.getInterpolatedAttribute(l,d,p,m,_,new ce)),c&&(g.uv1=ta.getInterpolatedAttribute(c,d,p,m,_,new ce)),f&&(g.normal=ta.getInterpolatedAttribute(f,d,p,m,_,new K),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new K,materialIndex:0};ta.getNormal(Fu,Hu,Gu,v.normal),g.face=v,g.barycoord=_}return g}class a2 extends Zn{constructor(t=null,i=1,s=1,l,c,f,d,p,m=Gn,g=Gn,_,v){super(null,f,d,p,m,g,l,c,_,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hr=new zo,s2=new ce(.5,.5),qu=new K;class hm{constructor(t=new Os,i=new Os,s=new Os,l=new Os,c=new Os,f=new Os){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ma,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],p=c[2],m=c[3],g=c[4],_=c[5],v=c[6],x=c[7],S=c[8],A=c[9],b=c[10],y=c[11],L=c[12],I=c[13],w=c[14],N=c[15];if(l[0].setComponents(m-f,x-g,y-S,N-L).normalize(),l[1].setComponents(m+f,x+g,y+S,N+L).normalize(),l[2].setComponents(m+d,x+_,y+A,N+I).normalize(),l[3].setComponents(m-d,x-_,y-A,N-I).normalize(),s)l[4].setComponents(p,v,b,w).normalize(),l[5].setComponents(m-p,x-v,y-b,N-w).normalize();else if(l[4].setComponents(m-p,x-v,y-b,N-w).normalize(),i===Ma)l[5].setComponents(m+p,x+v,y+b,N+w).normalize();else if(i===tc)l[5].setComponents(p,v,b,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(t){hr.center.set(0,0,0);const i=s2.distanceTo(t.center);return hr.radius=.7071067811865476+i,hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(qu.x=l.normal.x>0?t.max.x:t.min.x,qu.y=l.normal.y>0?t.max.y:t.min.y,qu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(qu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Iy extends Sr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const bf=new K,Ef=new K,r1=new cn,Fl=new fm,Wu=new zo,Ip=new K,o1=new K;class r2 extends Ln{constructor(t=new kn,i=new Iy){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)bf.fromBufferAttribute(i,l-1),Ef.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=bf.distanceTo(Ef);t.setAttribute("lineDistance",new bn(s,1))}else he("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Wu.copy(s.boundingSphere),Wu.applyMatrix4(l),Wu.radius+=c,t.ray.intersectsSphere(Wu)===!1)return;r1.copy(l).invert(),Fl.copy(t.ray).applyMatrix4(r1);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,g=s.index,v=s.attributes.position;if(g!==null){const x=Math.max(0,f.start),S=Math.min(g.count,f.start+f.count);for(let A=x,b=S-1;A<b;A+=m){const y=g.getX(A),L=g.getX(A+1),I=Yu(this,t,Fl,p,y,L,A);I&&i.push(I)}if(this.isLineLoop){const A=g.getX(S-1),b=g.getX(x),y=Yu(this,t,Fl,p,A,b,S-1);y&&i.push(y)}}else{const x=Math.max(0,f.start),S=Math.min(v.count,f.start+f.count);for(let A=x,b=S-1;A<b;A+=m){const y=Yu(this,t,Fl,p,A,A+1,A);y&&i.push(y)}if(this.isLineLoop){const A=Yu(this,t,Fl,p,S-1,x,S-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Yu(o,t,i,s,l,c,f){const d=o.geometry.attributes.position;if(bf.fromBufferAttribute(d,l),Ef.fromBufferAttribute(d,c),i.distanceSqToSegment(bf,Ef,Ip,o1)>s)return;Ip.applyMatrix4(o.matrixWorld);const m=t.ray.origin.distanceTo(Ip);if(!(m<t.near||m>t.far))return{distance:m,point:o1.clone().applyMatrix4(o.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:o}}const l1=new K,c1=new K;class o2 extends r2{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)l1.fromBufferAttribute(i,l),c1.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+l1.distanceTo(c1);t.setAttribute("lineDistance",new bn(s,1))}else he("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class l2 extends Sr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const u1=new cn,q0=new fm,Ku=new zo,Zu=new K;class By extends Ln{constructor(t=new kn,i=new l2){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ku.copy(s.boundingSphere),Ku.applyMatrix4(l),Ku.radius+=c,t.ray.intersectsSphere(Ku)===!1)return;u1.copy(l).invert(),q0.copy(t.ray).applyMatrix4(u1);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=s.index,_=s.attributes.position;if(m!==null){const v=Math.max(0,f.start),x=Math.min(m.count,f.start+f.count);for(let S=v,A=x;S<A;S++){const b=m.getX(S);Zu.fromBufferAttribute(_,b),f1(Zu,b,p,l,t,i,this)}}else{const v=Math.max(0,f.start),x=Math.min(_.count,f.start+f.count);for(let S=v,A=x;S<A;S++)Zu.fromBufferAttribute(_,S),f1(Zu,S,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function f1(o,t,i,s,l,c,f){const d=q0.distanceSqToPoint(o);if(d<i){const p=new K;q0.closestPointToPoint(o,p),p.applyMatrix4(s);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class Fy extends Zn{constructor(t=[],i=_r,s,l,c,f,d,p,m,g){super(t,i,s,l,c,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nc extends Zn{constructor(t,i,s=Ea,l,c,f,d=Gn,p=Gn,m,g=Za,_=1){if(g!==Za&&g!==pr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:_};super(v,l,c,f,d,p,g,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new um(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class c2 extends nc{constructor(t,i=Ea,s=_r,l,c,f=Gn,d=Gn,p,m=Za){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,f,d,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Hy extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class sc extends kn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],_=[];let v=0,x=0;S("z","y","x",-1,-1,s,i,t,f,c,0),S("z","y","x",1,-1,s,i,-t,f,c,1),S("x","z","y",1,1,t,s,i,l,f,2),S("x","z","y",1,-1,t,s,-i,l,f,3),S("x","y","z",1,-1,t,i,s,l,c,4),S("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new bn(m,3)),this.setAttribute("normal",new bn(g,3)),this.setAttribute("uv",new bn(_,2));function S(A,b,y,L,I,w,N,D,U,E,O){const P=w/U,F=N/E,H=w/2,q=N/2,k=D/2,W=U+1,X=E+1;let Y=0,rt=0;const nt=new K;for(let ct=0;ct<X;ct++){const _t=ct*F-q;for(let Ot=0;Ot<W;Ot++){const Mt=Ot*P-H;nt[A]=Mt*L,nt[b]=_t*I,nt[y]=k,m.push(nt.x,nt.y,nt.z),nt[A]=0,nt[b]=0,nt[y]=D>0?1:-1,g.push(nt.x,nt.y,nt.z),_.push(Ot/U),_.push(1-ct/E),Y+=1}}for(let ct=0;ct<E;ct++)for(let _t=0;_t<U;_t++){const Ot=v+_t+W*ct,Mt=v+_t+W*(ct+1),z=v+(_t+1)+W*(ct+1),Z=v+(_t+1)+W*ct;p.push(Ot,Mt,Z),p.push(Mt,z,Z),rt+=6}d.addGroup(x,rt,O),x+=rt,v+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ja{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){he("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let d=0,p=c-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=s[l]-f,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,s[l]===f)return l/(c-1);const g=s[l],v=s[l+1]-g,x=(f-g)/v;return(l+x)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),p=i||(f.isVector2?new ce:new K);return p.copy(d).sub(f).normalize(),p}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new K,l=[],c=[],f=[],d=new K,p=new cn;for(let x=0;x<=t;x++){const S=x/t;l[x]=this.getTangentAt(S,new K)}c[0]=new K,f[0]=new K;let m=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),v=Math.abs(l[0].z);g<=m&&(m=g,s.set(1,0,0)),_<=m&&(m=_,s.set(0,1,0)),v<=m&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let x=1;x<=t;x++){if(c[x]=c[x-1].clone(),f[x]=f[x-1].clone(),d.crossVectors(l[x-1],l[x]),d.length()>Number.EPSILON){d.normalize();const S=Math.acos(Ue(l[x-1].dot(l[x]),-1,1));c[x].applyMatrix4(p.makeRotationAxis(d,S))}f[x].crossVectors(l[x],c[x])}if(i===!0){let x=Math.acos(Ue(c[0].dot(c[t]),-1,1));x/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(x=-x);for(let S=1;S<=t;S++)c[S].applyMatrix4(p.makeRotationAxis(l[S],x*S)),f[S].crossVectors(l[S],c[S])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Gy extends Ja{constructor(t=0,i=0,s=1,l=1,c=0,f=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new ce){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=p-this.aX,x=m-this.aY;p=v*g-x*_+this.aX,m=v*_+x*g+this.aY}return s.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class u2 extends Gy{constructor(t,i,s,l,c,f){super(t,i,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function dm(){let o=0,t=0,i=0,s=0;function l(c,f,d,p){o=c,t=d,i=-3*c+3*f-2*d-p,s=2*c-2*f+d+p}return{initCatmullRom:function(c,f,d,p,m){l(f,d,m*(d-c),m*(p-f))},initNonuniformCatmullRom:function(c,f,d,p,m,g,_){let v=(f-c)/m-(d-c)/(m+g)+(d-f)/g,x=(d-f)/g-(p-f)/(g+_)+(p-d)/_;v*=g,x*=g,l(f,d,v,x)},calc:function(c){const f=c*c,d=f*c;return o+t*c+i*f+s*d}}}const h1=new K,d1=new K,Bp=new dm,Fp=new dm,Hp=new dm;class Vy extends Ja{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new K){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),p=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,g;this.closed||d>0?m=l[(d-1)%c]:(d1.subVectors(l[0],l[1]).add(l[0]),m=d1);const _=l[d%c],v=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(h1.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=h1),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let S=Math.pow(m.distanceToSquared(_),x),A=Math.pow(_.distanceToSquared(v),x),b=Math.pow(v.distanceToSquared(g),x);A<1e-4&&(A=1),S<1e-4&&(S=A),b<1e-4&&(b=A),Bp.initNonuniformCatmullRom(m.x,_.x,v.x,g.x,S,A,b),Fp.initNonuniformCatmullRom(m.y,_.y,v.y,g.y,S,A,b),Hp.initNonuniformCatmullRom(m.z,_.z,v.z,g.z,S,A,b)}else this.curveType==="catmullrom"&&(Bp.initCatmullRom(m.x,_.x,v.x,g.x,this.tension),Fp.initCatmullRom(m.y,_.y,v.y,g.y,this.tension),Hp.initCatmullRom(m.z,_.z,v.z,g.z,this.tension));return s.set(Bp.calc(p),Fp.calc(p),Hp.calc(p)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new K().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function p1(o,t,i,s,l){const c=(s-t)*.5,f=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*s+c+f)*p+(-3*i+3*s-2*c-f)*d+c*o+i}function f2(o,t){const i=1-o;return i*i*t}function h2(o,t){return 2*(1-o)*o*t}function d2(o,t){return o*o*t}function Kl(o,t,i,s){return f2(o,t)+h2(o,i)+d2(o,s)}function p2(o,t){const i=1-o;return i*i*i*t}function m2(o,t){const i=1-o;return 3*i*i*o*t}function g2(o,t){return 3*(1-o)*o*o*t}function v2(o,t){return o*o*o*t}function Zl(o,t,i,s,l){return p2(o,t)+m2(o,i)+g2(o,s)+v2(o,l)}class _2 extends Ja{constructor(t=new ce,i=new ce,s=new ce,l=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new ce){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(Zl(t,l.x,c.x,f.x,d.x),Zl(t,l.y,c.y,f.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class x2 extends Ja{constructor(t=new K,i=new K,s=new K,l=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new K){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(Zl(t,l.x,c.x,f.x,d.x),Zl(t,l.y,c.y,f.y,d.y),Zl(t,l.z,c.z,f.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class y2 extends Ja{constructor(t=new ce,i=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new ce){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new ce){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class S2 extends Ja{constructor(t=new K,i=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new K){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new K){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class M2 extends Ja{constructor(t=new ce,i=new ce,s=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new ce){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(Kl(t,l.x,c.x,f.x),Kl(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ky extends Ja{constructor(t=new K,i=new K,s=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new K){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(Kl(t,l.x,c.x,f.x),Kl(t,l.y,c.y,f.y),Kl(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class b2 extends Ja{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new ce){const s=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,p=l[f===0?f:f-1],m=l[f],g=l[f>l.length-2?l.length-1:f+1],_=l[f>l.length-3?l.length-1:f+2];return s.set(p1(d,p.x,m.x,g.x,_.x),p1(d,p.y,m.y,g.y,_.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new ce().fromArray(l))}return this}}var E2=Object.freeze({__proto__:null,ArcCurve:u2,CatmullRomCurve3:Vy,CubicBezierCurve:_2,CubicBezierCurve3:x2,EllipseCurve:Gy,LineCurve:y2,LineCurve3:S2,QuadraticBezierCurve:M2,QuadraticBezierCurve3:ky,SplineCurve:b2});class Mr extends kn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,g=p+1,_=t/d,v=i/p,x=[],S=[],A=[],b=[];for(let y=0;y<g;y++){const L=y*v-f;for(let I=0;I<m;I++){const w=I*_-c;S.push(w,-L,0),A.push(0,0,1),b.push(I/d),b.push(1-y/p)}}for(let y=0;y<p;y++)for(let L=0;L<d;L++){const I=L+m*y,w=L+m*(y+1),N=L+1+m*(y+1),D=L+1+m*y;x.push(I,w,D),x.push(w,N,D)}this.setIndex(x),this.setAttribute("position",new bn(S,3)),this.setAttribute("normal",new bn(A,3)),this.setAttribute("uv",new bn(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.width,t.height,t.widthSegments,t.heightSegments)}}class pm extends kn{constructor(t=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],m=[],g=[];let _=t;const v=(i-t)/l,x=new K,S=new ce;for(let A=0;A<=l;A++){for(let b=0;b<=s;b++){const y=c+b/s*f;x.x=_*Math.cos(y),x.y=_*Math.sin(y),p.push(x.x,x.y,x.z),m.push(0,0,1),S.x=(x.x/i+1)/2,S.y=(x.y/i+1)/2,g.push(S.x,S.y)}_+=v}for(let A=0;A<l;A++){const b=A*(s+1);for(let y=0;y<s;y++){const L=y+b,I=L,w=L+s+1,N=L+s+2,D=L+1;d.push(I,w,D),d.push(w,N,D)}}this.setIndex(d),this.setAttribute("position",new bn(p,3)),this.setAttribute("normal",new bn(m,3)),this.setAttribute("uv",new bn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pm(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class mm extends kn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(f+d,Math.PI);let m=0;const g=[],_=new K,v=new K,x=[],S=[],A=[],b=[];for(let y=0;y<=s;y++){const L=[],I=y/s,w=f+I*d,N=t*Math.cos(w),D=Math.sqrt(t*t-N*N);let U=0;y===0&&f===0?U=.5/i:y===s&&p===Math.PI&&(U=-.5/i);for(let E=0;E<=i;E++){const O=E/i,P=l+O*c;_.x=-D*Math.cos(P),_.y=N,_.z=D*Math.sin(P),S.push(_.x,_.y,_.z),v.copy(_).normalize(),A.push(v.x,v.y,v.z),b.push(O+U,1-I),L.push(m++)}g.push(L)}for(let y=0;y<s;y++)for(let L=0;L<i;L++){const I=g[y][L+1],w=g[y][L],N=g[y+1][L],D=g[y+1][L+1];(y!==0||f>0)&&x.push(I,w,D),(y!==s-1||p<Math.PI)&&x.push(w,N,D)}this.setIndex(x),this.setAttribute("position",new bn(S,3)),this.setAttribute("normal",new bn(A,3)),this.setAttribute("uv",new bn(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mm(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class gm extends kn{constructor(t=new ky(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),i=64,s=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:c};const f=t.computeFrenetFrames(i,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const d=new K,p=new K,m=new ce;let g=new K;const _=[],v=[],x=[],S=[];A(),this.setIndex(S),this.setAttribute("position",new bn(_,3)),this.setAttribute("normal",new bn(v,3)),this.setAttribute("uv",new bn(x,2));function A(){for(let I=0;I<i;I++)b(I);b(c===!1?i:0),L(),y()}function b(I){g=t.getPointAt(I/i,g);const w=f.normals[I],N=f.binormals[I];for(let D=0;D<=l;D++){const U=D/l*Math.PI*2,E=Math.sin(U),O=-Math.cos(U);p.x=O*w.x+E*N.x,p.y=O*w.y+E*N.y,p.z=O*w.z+E*N.z,p.normalize(),v.push(p.x,p.y,p.z),d.x=g.x+s*p.x,d.y=g.y+s*p.y,d.z=g.z+s*p.z,_.push(d.x,d.y,d.z)}}function y(){for(let I=1;I<=i;I++)for(let w=1;w<=l;w++){const N=(l+1)*(I-1)+(w-1),D=(l+1)*I+(w-1),U=(l+1)*I+w,E=(l+1)*(I-1)+w;S.push(N,D,E),S.push(D,U,E)}}function L(){for(let I=0;I<=i;I++)for(let w=0;w<=l;w++)m.x=I/i,m.y=w/l,x.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new gm(new E2[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Lo(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];if(m1(l))l.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(m1(l[0])){const c=[];for(let f=0,d=l.length;f<d;f++)c[f]=l[f].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function ei(o){const t={};for(let i=0;i<o.length;i++){const s=Lo(o[i]);for(const l in s)t[l]=s[l]}return t}function m1(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function T2(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Xy(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Fe.workingColorSpace}const A2={clone:Lo,merge:ei};var w2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends Sr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w2,this.fragmentShader=R2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lo(t.uniforms),this.uniformsGroups=T2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new ze().setHex(l.value);break;case"v2":this.uniforms[s].value=new ce().fromArray(l.value);break;case"v3":this.uniforms[s].value=new K().fromArray(l.value);break;case"v4":this.uniforms[s].value=new an().fromArray(l.value);break;case"m3":this.uniforms[s].value=new ge().fromArray(l.value);break;case"m4":this.uniforms[s].value=new cn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class C2 extends en{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gp extends Sr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=k0,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class D2 extends Sr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class N2 extends Sr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vp={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(g1(o)||(this.files[o]=t))},get:function(o){if(this.enabled!==!1&&!g1(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function g1(o){try{const t=o.slice(o.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class U2{constructor(t,i,s){const l=this;let c=!1,f=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,f,d),c=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,d),f===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return m.push(g,_),this},this.removeHandler=function(g){const _=m.indexOf(g);return _!==-1&&m.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=m.length;_<v;_+=2){const x=m[_],S=m[_+1];if(x.global&&(x.lastIndex=0),x.test(g))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const L2=new U2;class vm{constructor(t){this.manager=t!==void 0?t:L2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}vm.DEFAULT_MATERIAL_NAME="__DEFAULT";const So=new WeakMap;class O2 extends vm{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=Vp.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(f),c.manager.itemEnd(t)},0);else{let _=So.get(f);_===void 0&&(_=[],So.set(f,_)),_.push({onLoad:i,onError:l})}return f}const d=ec("img");function p(){g(),i&&i(this);const _=So.get(this)||[];for(let v=0;v<_.length;v++){const x=_[v];x.onLoad&&x.onLoad(this)}So.delete(this),c.manager.itemEnd(t)}function m(_){g(),l&&l(_),Vp.remove(`image:${t}`);const v=So.get(this)||[];for(let x=0;x<v.length;x++){const S=v[x];S.onError&&S.onError(_)}So.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Vp.add(`image:${t}`,d),c.manager.itemStart(t),d.src=t,d}}class P2 extends vm{constructor(t){super(t)}load(t,i,s,l){const c=new Zn,f=new O2(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class qy extends Ln{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const kp=new cn,v1=new K,_1=new K;class z2{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hm,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera;v1.setFromMatrixPosition(t.matrixWorld),i.position.copy(v1),_1.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(_1),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,s,l){kp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),s.setFromProjectionMatrix(kp,t.coordinateSystem,t.reversedDepth);const c=this._frameExtents,f=l?l.z/c.x:1,d=l?l.w/c.y:1,p=l?l.x/c.x:0,m=l?l.y/c.y:0;t.coordinateSystem===tc||t.reversedDepth?i.set(.5*f,0,0,.5*f+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):i.set(.5*f,0,0,.5*f+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),i.multiply(kp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Qu=new K,Ju=new Kn,_a=new K;class Wy extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Ma,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qu,Ju,_a),_a.x===1&&_a.y===1&&_a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qu,Ju,_a.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(Qu,Ju,_a),_a.x===1&&_a.y===1&&_a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qu,Ju,_a.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ds=new K,x1=new ce,y1=new ce;class $i extends Wy{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=X0*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mp*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return X0*2*Math.atan(Math.tan(mp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ds.x,Ds.y).multiplyScalar(-t/Ds.z),Ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ds.x,Ds.y).multiplyScalar(-t/Ds.z)}getViewSize(t,i){return this.getViewBounds(t,x1,y1),i.subVectors(y1,x1)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(mp*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Oo extends Wy{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class I2 extends z2{constructor(){super(new Oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class B2 extends qy{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new I2}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class F2 extends qy{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Mo=-90,bo=1;class H2 extends Ln{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new $i(Mo,bo,t,i);l.layers=this.layers,this.add(l);const c=new $i(Mo,bo,t,i);c.layers=this.layers,this.add(c);const f=new $i(Mo,bo,t,i);f.layers=this.layers,this.add(f);const d=new $i(Mo,bo,t,i);d.layers=this.layers,this.add(d);const p=new $i(Mo,bo,t,i);p.layers=this.layers,this.add(p);const m=new $i(Mo,bo,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,p]=i;for(const m of i)this.remove(m);if(t===Ma)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===tc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let b=!1;t.isWebGLRenderer===!0?b=t.state.buffers.depth.getReversed():b=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,4,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(_,v,x),t.xr.enabled=S,s.texture.needsPMREMUpdate=!0}}class G2 extends $i{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const bm=class bm{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};bm.prototype.isMatrix2=!0;let S1=bm;function M1(o,t,i,s){const l=V2(s);switch(i){case wy:return o*t;case Cy:return o*t/l.components*l.byteLength;case sm:return o*t/l.components*l.byteLength;case xr:return o*t*2/l.components*l.byteLength;case rm:return o*t*2/l.components*l.byteLength;case Ry:return o*t*3/l.components*l.byteLength;case ea:return o*t*4/l.components*l.byteLength;case om:return o*t*4/l.components*l.byteLength;case lf:case cf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case uf:case ff:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case p0:case g0:return Math.max(o,16)*Math.max(t,8)/4;case d0:case m0:return Math.max(o,8)*Math.max(t,8)/2;case v0:case _0:case y0:case S0:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case x0:case _f:case M0:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case b0:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case E0:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case T0:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case A0:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case w0:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case R0:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case C0:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case D0:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case N0:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case U0:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case L0:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case O0:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case P0:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case z0:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case I0:case B0:case F0:return Math.ceil(o/4)*Math.ceil(t/4)*16;case H0:case G0:return Math.ceil(o/4)*Math.ceil(t/4)*8;case xf:case V0:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function V2(o){switch(o){case fi:case by:return{byteLength:1,components:1};case jl:case Ey:case ia:return{byteLength:2,components:1};case im:case am:return{byteLength:2,components:4};case Ea:case nm:case Sa:return{byteLength:4,components:1};case Ty:case Ay:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tm}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tm);function Yy(){let o=null,t=!1,i=null,s=null;function l(c,f){s=o.requestAnimationFrame(l),i(c,f)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function k2(o){const t=new WeakMap;function i(d,p){const m=d.array,g=d.usage,_=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,g),d.onUploadCallback();let x;if(m instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)x=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=o.SHORT;else if(m instanceof Uint32Array)x=o.UNSIGNED_INT;else if(m instanceof Int32Array)x=o.INT;else if(m instanceof Int8Array)x=o.BYTE;else if(m instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,p,m){const g=p.array,_=p.updateRanges;if(o.bindBuffer(m,d),_.length===0)o.bufferSubData(m,0,g);else{_.sort((x,S)=>x.start-S.start);let v=0;for(let x=1;x<_.length;x++){const S=_[v],A=_[x];A.start<=S.start+S.count+1?S.count=Math.max(S.count,A.start+A.count-S.start):(++v,_[v]=A)}_.length=v+1;for(let x=0,S=_.length;x<S;x++){const A=_[x];o.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var X2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q2=`#ifdef USE_ALPHAHASH
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
#endif`,W2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q2=`#ifdef USE_AOMAP
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
#endif`,J2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,j2=`#ifdef USE_BATCHING
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
#endif`,$2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iT=`#ifdef USE_IRIDESCENCE
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
#endif`,aT=`#ifdef USE_BUMPMAP
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
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dT=`#define PI 3.141592653589793
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
} // validated`,pT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mT=`vec3 transformedNormal = objectNormal;
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
#endif`,gT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_T=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yT="gl_FragColor = linearToOutputTexel( gl_FragColor );",ST=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MT=`#ifdef USE_ENVMAP
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
#endif`,bT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
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
#endif`,TT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
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
#endif`,wT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NT=`#ifdef USE_GRADIENTMAP
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
}`,UT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zT=`#ifdef USE_ENVMAP
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
#endif`,IT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GT=`PhysicalMaterial material;
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
#endif`,VT=`uniform sampler2D dfgLUT;
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
}`,kT=`
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
#endif`,XT=`#if defined( RE_IndirectDiffuse )
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
#endif`,qT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,YT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$T=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t3=`#if defined( USE_POINTS_UV )
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
#endif`,e3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r3=`#ifdef USE_MORPHTARGETS
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
#endif`,o3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,d3=`#ifdef USE_NORMALMAP
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
#endif`,p3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C3=`float getShadowMask() {
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
}`,D3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N3=`#ifdef USE_SKINNING
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
#endif`,U3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L3=`#ifdef USE_SKINNING
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
#endif`,O3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B3=`#ifdef USE_TRANSMISSION
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
#endif`,F3=`#ifdef USE_TRANSMISSION
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
#endif`,H3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q3=`uniform sampler2D t2D;
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
}`,W3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q3=`#include <common>
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
}`,J3=`#if DEPTH_PACKING == 3200
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
}`,j3=`#define DISTANCE
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
}`,$3=`#define DISTANCE
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
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nA=`uniform float scale;
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
}`,iA=`uniform vec3 diffuse;
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
}`,aA=`#include <common>
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
}`,sA=`uniform vec3 diffuse;
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
}`,rA=`#define LAMBERT
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
}`,oA=`#define LAMBERT
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
}`,lA=`#define MATCAP
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
}`,cA=`#define MATCAP
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
}`,uA=`#define NORMAL
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
}`,fA=`#define NORMAL
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
}`,hA=`#define PHONG
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
}`,dA=`#define PHONG
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
}`,pA=`#define STANDARD
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
}`,mA=`#define STANDARD
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
}`,gA=`#define TOON
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
}`,vA=`#define TOON
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
}`,_A=`uniform float size;
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
}`,xA=`uniform vec3 diffuse;
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
}`,yA=`#include <common>
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
}`,SA=`uniform vec3 color;
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
}`,MA=`uniform float rotation;
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
}`,bA=`uniform vec3 diffuse;
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
}`,Ee={alphahash_fragment:X2,alphahash_pars_fragment:q2,alphamap_fragment:W2,alphamap_pars_fragment:Y2,alphatest_fragment:K2,alphatest_pars_fragment:Z2,aomap_fragment:Q2,aomap_pars_fragment:J2,batching_pars_vertex:j2,batching_vertex:$2,begin_vertex:tT,beginnormal_vertex:eT,bsdfs:nT,iridescence_fragment:iT,bumpmap_pars_fragment:aT,clipping_planes_fragment:sT,clipping_planes_pars_fragment:rT,clipping_planes_pars_vertex:oT,clipping_planes_vertex:lT,color_fragment:cT,color_pars_fragment:uT,color_pars_vertex:fT,color_vertex:hT,common:dT,cube_uv_reflection_fragment:pT,defaultnormal_vertex:mT,displacementmap_pars_vertex:gT,displacementmap_vertex:vT,emissivemap_fragment:_T,emissivemap_pars_fragment:xT,colorspace_fragment:yT,colorspace_pars_fragment:ST,envmap_fragment:MT,envmap_common_pars_fragment:bT,envmap_pars_fragment:ET,envmap_pars_vertex:TT,envmap_physical_pars_fragment:zT,envmap_vertex:AT,fog_vertex:wT,fog_pars_vertex:RT,fog_fragment:CT,fog_pars_fragment:DT,gradientmap_pars_fragment:NT,lightmap_pars_fragment:UT,lights_lambert_fragment:LT,lights_lambert_pars_fragment:OT,lights_pars_begin:PT,lights_toon_fragment:IT,lights_toon_pars_fragment:BT,lights_phong_fragment:FT,lights_phong_pars_fragment:HT,lights_physical_fragment:GT,lights_physical_pars_fragment:VT,lights_fragment_begin:kT,lights_fragment_maps:XT,lights_fragment_end:qT,lightprobes_pars_fragment:WT,logdepthbuf_fragment:YT,logdepthbuf_pars_fragment:KT,logdepthbuf_pars_vertex:ZT,logdepthbuf_vertex:QT,map_fragment:JT,map_pars_fragment:jT,map_particle_fragment:$T,map_particle_pars_fragment:t3,metalnessmap_fragment:e3,metalnessmap_pars_fragment:n3,morphinstance_vertex:i3,morphcolor_vertex:a3,morphnormal_vertex:s3,morphtarget_pars_vertex:r3,morphtarget_vertex:o3,normal_fragment_begin:l3,normal_fragment_maps:c3,normal_pars_fragment:u3,normal_pars_vertex:f3,normal_vertex:h3,normalmap_pars_fragment:d3,clearcoat_normal_fragment_begin:p3,clearcoat_normal_fragment_maps:m3,clearcoat_pars_fragment:g3,iridescence_pars_fragment:v3,opaque_fragment:_3,packing:x3,premultiplied_alpha_fragment:y3,project_vertex:S3,dithering_fragment:M3,dithering_pars_fragment:b3,roughnessmap_fragment:E3,roughnessmap_pars_fragment:T3,shadowmap_pars_fragment:A3,shadowmap_pars_vertex:w3,shadowmap_vertex:R3,shadowmask_pars_fragment:C3,skinbase_vertex:D3,skinning_pars_vertex:N3,skinning_vertex:U3,skinnormal_vertex:L3,specularmap_fragment:O3,specularmap_pars_fragment:P3,tonemapping_fragment:z3,tonemapping_pars_fragment:I3,transmission_fragment:B3,transmission_pars_fragment:F3,uv_pars_fragment:H3,uv_pars_vertex:G3,uv_vertex:V3,worldpos_vertex:k3,background_vert:X3,background_frag:q3,backgroundCube_vert:W3,backgroundCube_frag:Y3,cube_vert:K3,cube_frag:Z3,depth_vert:Q3,depth_frag:J3,distance_vert:j3,distance_frag:$3,equirect_vert:tA,equirect_frag:eA,linedashed_vert:nA,linedashed_frag:iA,meshbasic_vert:aA,meshbasic_frag:sA,meshlambert_vert:rA,meshlambert_frag:oA,meshmatcap_vert:lA,meshmatcap_frag:cA,meshnormal_vert:uA,meshnormal_frag:fA,meshphong_vert:hA,meshphong_frag:dA,meshphysical_vert:pA,meshphysical_frag:mA,meshtoon_vert:gA,meshtoon_frag:vA,points_vert:_A,points_frag:xA,shadow_vert:yA,shadow_frag:SA,sprite_vert:MA,sprite_frag:bA},Yt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},ya={basic:{uniforms:ei([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:ei([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:ei([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:ei([Yt.common,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.roughnessmap,Yt.metalnessmap,Yt.fog,Yt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:ei([Yt.common,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.gradientmap,Yt.fog,Yt.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:ei([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:ei([Yt.points,Yt.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:ei([Yt.common,Yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:ei([Yt.common,Yt.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:ei([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:ei([Yt.sprite,Yt.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distance:{uniforms:ei([Yt.common,Yt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distance_vert,fragmentShader:Ee.distance_frag},shadow:{uniforms:ei([Yt.lights,Yt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};ya.physical={uniforms:ei([ya.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const ju={r:0,b:0,g:0},EA=new cn,Ky=new ge;Ky.set(-1,0,0,0,1,0,0,0,1);function TA(o,t,i,s,l,c){const f=new ze(0);let d=l===!0?0:1,p,m,g=null,_=0,v=null;function x(L){let I=L.isScene===!0?L.background:null;if(I&&I.isTexture){const w=L.backgroundBlurriness>0;I=t.get(I,w)}return I}function S(L){let I=!1;const w=x(L);w===null?b(f,d):w&&w.isColor&&(b(w,1),I=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function A(L,I){const w=x(I);w&&(w.isCubeTexture||w.mapping===Cf)?(m===void 0&&(m=new ln(new sc(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Lo(ya.backgroundCube.uniforms),vertexShader:ya.backgroundCube.vertexShader,fragmentShader:ya.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=w,m.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(EA.makeRotationFromEuler(I.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Ky),m.material.toneMapped=Fe.getTransfer(w.colorSpace)!==Je,(g!==w||_!==w.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,g=w,_=w.version,v=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new ln(new Mr(2,2),new en({name:"BackgroundMaterial",uniforms:Lo(ya.background.uniforms),vertexShader:ya.background.vertexShader,fragmentShader:ya.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=Fe.getTransfer(w.colorSpace)!==Je,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||_!==w.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,g=w,_=w.version,v=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function b(L,I){L.getRGB(ju,Xy(o)),i.buffers.color.setClear(ju.r,ju.g,ju.b,I,c)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,I=1){f.set(L),d=I,b(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,b(f,d)},render:S,addToRenderList:A,dispose:y}}function AA(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function d(F,H,q,k,W){let X=!1;const Y=_(F,k,q,H);c!==Y&&(c=Y,m(c.object)),X=x(F,k,q,W),X&&S(F,k,q,W),W!==null&&t.update(W,o.ELEMENT_ARRAY_BUFFER),(X||f)&&(f=!1,w(F,H,q,k),W!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function p(){return o.createVertexArray()}function m(F){return o.bindVertexArray(F)}function g(F){return o.deleteVertexArray(F)}function _(F,H,q,k){const W=k.wireframe===!0;let X=s[H.id];X===void 0&&(X={},s[H.id]=X);const Y=F.isInstancedMesh===!0?F.id:0;let rt=X[Y];rt===void 0&&(rt={},X[Y]=rt);let nt=rt[q.id];nt===void 0&&(nt={},rt[q.id]=nt);let ct=nt[W];return ct===void 0&&(ct=v(p()),nt[W]=ct),ct}function v(F){const H=[],q=[],k=[];for(let W=0;W<i;W++)H[W]=0,q[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:q,attributeDivisors:k,object:F,attributes:{},index:null}}function x(F,H,q,k){const W=c.attributes,X=H.attributes;let Y=0;const rt=q.getAttributes();for(const nt in rt)if(rt[nt].location>=0){const _t=W[nt];let Ot=X[nt];if(Ot===void 0&&(nt==="instanceMatrix"&&F.instanceMatrix&&(Ot=F.instanceMatrix),nt==="instanceColor"&&F.instanceColor&&(Ot=F.instanceColor)),_t===void 0||_t.attribute!==Ot||Ot&&_t.data!==Ot.data)return!0;Y++}return c.attributesNum!==Y||c.index!==k}function S(F,H,q,k){const W={},X=H.attributes;let Y=0;const rt=q.getAttributes();for(const nt in rt)if(rt[nt].location>=0){let _t=X[nt];_t===void 0&&(nt==="instanceMatrix"&&F.instanceMatrix&&(_t=F.instanceMatrix),nt==="instanceColor"&&F.instanceColor&&(_t=F.instanceColor));const Ot={};Ot.attribute=_t,_t&&_t.data&&(Ot.data=_t.data),W[nt]=Ot,Y++}c.attributes=W,c.attributesNum=Y,c.index=k}function A(){const F=c.newAttributes;for(let H=0,q=F.length;H<q;H++)F[H]=0}function b(F){y(F,0)}function y(F,H){const q=c.newAttributes,k=c.enabledAttributes,W=c.attributeDivisors;q[F]=1,k[F]===0&&(o.enableVertexAttribArray(F),k[F]=1),W[F]!==H&&(o.vertexAttribDivisor(F,H),W[F]=H)}function L(){const F=c.newAttributes,H=c.enabledAttributes;for(let q=0,k=H.length;q<k;q++)H[q]!==F[q]&&(o.disableVertexAttribArray(q),H[q]=0)}function I(F,H,q,k,W,X,Y){Y===!0?o.vertexAttribIPointer(F,H,q,W,X):o.vertexAttribPointer(F,H,q,k,W,X)}function w(F,H,q,k){A();const W=k.attributes,X=q.getAttributes(),Y=H.defaultAttributeValues;for(const rt in X){const nt=X[rt];if(nt.location>=0){let ct=W[rt];if(ct===void 0&&(rt==="instanceMatrix"&&F.instanceMatrix&&(ct=F.instanceMatrix),rt==="instanceColor"&&F.instanceColor&&(ct=F.instanceColor)),ct!==void 0){const _t=ct.normalized,Ot=ct.itemSize,Mt=t.get(ct);if(Mt===void 0)continue;const z=Mt.buffer,Z=Mt.type,ft=Mt.bytesPerElement,G=Z===o.INT||Z===o.UNSIGNED_INT||ct.gpuType===nm;if(ct.isInterleavedBufferAttribute){const tt=ct.data,ht=tt.stride,xt=ct.offset;if(tt.isInstancedInterleavedBuffer){for(let j=0;j<nt.locationSize;j++)y(nt.location+j,tt.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let j=0;j<nt.locationSize;j++)b(nt.location+j);o.bindBuffer(o.ARRAY_BUFFER,z);for(let j=0;j<nt.locationSize;j++)I(nt.location+j,Ot/nt.locationSize,Z,_t,ht*ft,(xt+Ot/nt.locationSize*j)*ft,G)}else{if(ct.isInstancedBufferAttribute){for(let tt=0;tt<nt.locationSize;tt++)y(nt.location+tt,ct.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let tt=0;tt<nt.locationSize;tt++)b(nt.location+tt);o.bindBuffer(o.ARRAY_BUFFER,z);for(let tt=0;tt<nt.locationSize;tt++)I(nt.location+tt,Ot/nt.locationSize,Z,_t,Ot*ft,Ot/nt.locationSize*tt*ft,G)}}else if(Y!==void 0){const _t=Y[rt];if(_t!==void 0)switch(_t.length){case 2:o.vertexAttrib2fv(nt.location,_t);break;case 3:o.vertexAttrib3fv(nt.location,_t);break;case 4:o.vertexAttrib4fv(nt.location,_t);break;default:o.vertexAttrib1fv(nt.location,_t)}}}}L()}function N(){O();for(const F in s){const H=s[F];for(const q in H){const k=H[q];for(const W in k){const X=k[W];for(const Y in X)g(X[Y].object),delete X[Y];delete k[W]}}delete s[F]}}function D(F){if(s[F.id]===void 0)return;const H=s[F.id];for(const q in H){const k=H[q];for(const W in k){const X=k[W];for(const Y in X)g(X[Y].object),delete X[Y];delete k[W]}}delete s[F.id]}function U(F){for(const H in s){const q=s[H];for(const k in q){const W=q[k];if(W[F.id]===void 0)continue;const X=W[F.id];for(const Y in X)g(X[Y].object),delete X[Y];delete W[F.id]}}}function E(F){for(const H in s){const q=s[H],k=F.isInstancedMesh===!0?F.id:0,W=q[k];if(W!==void 0){for(const X in W){const Y=W[X];for(const rt in Y)g(Y[rt].object),delete Y[rt];delete W[X]}delete q[k],Object.keys(q).length===0&&delete s[H]}}}function O(){P(),f=!0,c!==l&&(c=l,m(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:P,dispose:N,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:b,disableUnusedAttributes:L}}function wA(o,t,i){let s;function l(p){s=p}function c(p,m){o.drawArrays(s,p,m),i.update(m,s,1)}function f(p,m,g){g!==0&&(o.drawArraysInstanced(s,p,m,g),i.update(m,s,g))}function d(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,g);let v=0;for(let x=0;x<g;x++)v+=m[x];i.update(v,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function RA(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(U){return!(U!==ea&&s.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const E=U===ia&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==fi&&U!==Sa&&!E&&s.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(he("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&he("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=o.getParameter(o.MAX_SAMPLES),D=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:S,maxTextureSize:A,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:L,maxVaryings:I,maxFragmentUniforms:w,maxSamples:N,samples:D}}function CA(o){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Os,d=new ge,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||s!==0||l;return l=v,s=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,x){const S=_.clippingPlanes,A=_.clipIntersection,b=_.clipShadows,y=o.get(_);if(!l||S===null||S.length===0||c&&!b)c?g(null):m();else{const L=c?0:s,I=L*4;let w=y.clippingState||null;p.value=w,w=g(S,v,I,x);for(let N=0;N!==I;++N)w[N]=i[N];y.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,v,x,S){const A=_!==null?_.length:0;let b=null;if(A!==0){if(b=p.value,S!==!0||b===null){const y=x+A*4,L=v.matrixWorldInverse;d.getNormalMatrix(L),(b===null||b.length<y)&&(b=new Float32Array(y));for(let I=0,w=x;I!==A;++I,w+=4)f.copy(_[I]).applyMatrix4(L,d),f.normal.toArray(b,w),b[w+3]=f.constant}p.value=b,p.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,b}}const wo=4,DA=6,NA=20,UA=256,Hl=new Oo,b1=new ze;let Xp=null,qp=0,Wp=0,Yp=!1;const LA=new K,dr=new K;class E1{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=LA}=c;Xp=this._renderer.getRenderTarget(),qp=this._renderer.getActiveCubeFace(),Wp=this._renderer.getActiveMipmapLevel(),Yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=w1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=A1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Xp,qp,Wp),this._renderer.xr.enabled=Yp,t.scissorTest=!1,Eo(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===_r||t.mapping===Uo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xp=this._renderer.getRenderTarget(),qp=this._renderer.getActiveCubeFace(),Wp=this._renderer.getActiveMipmapLevel(),Yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:ia,format:ea,colorSpace:yf,depthBuffer:!1},l=T1(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=T1(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=OA(c)),this._blurMaterial=zA(c,t,i),this._ggxMaterial=PA(c,t,i)}return l}_compileMaterial(t){const i=new ln(new kn,t);this._renderer.compile(i,Hl)}_sceneToCubeUV(t,i,s,l,c){const p=new $i(90,1,i,s),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(b1),_.toneMapping=ba,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ln(new sc,new zy({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,b=A.material;let y=!1;const L=t.background;L?L.isColor&&(b.color.copy(L),t.background=null,y=!0):(b.color.copy(b1),y=!0);for(let I=0;I<6;I++){const w=I%3;w===0?(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[I],c.y,c.z)):w===1?(p.up.set(0,0,m[I]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[I],c.z)):(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[I]));const N=this._cubeSize;Eo(l,w*N,I>2?N:0,N,N),_.setRenderTarget(l),y&&_.render(A,p),_.render(t,p)}_.toneMapping=x,_.autoClear=v,t.background=L}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===_r||t.mapping===Uo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=w1()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=A1());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;Eo(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,Hl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const p=f.uniforms,m=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(m*m-g*g),v=m*1.25,x=_*v,{_lodMax:S}=this,A=this._sizeLods[s],b=3*A*(s>S-wo?s-S+wo:0),y=4*(this._cubeSize-A);p.envMap.value=t.texture,p.roughness.value=x,p.mipInt.value=S-i,Eo(c,b,y,3*A,2*A),l.setRenderTarget(c),l.render(d,Hl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=S-s,Eo(t,b,y,3*A,2*A),l.setRenderTarget(t),l.render(d,Hl)}_blur(t,i,s,l){const c=this._pingPongRenderTarget,f=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(t,c,i,s,f),this._blurPass(c,t,s,s,f)}_blurPass(t,i,s,l,c){const f=this._renderer,d=this._blurMaterial,p=this._lodMeshes[l];p.material=d;const m=d.uniforms;m.envMap.value=t.texture,m.sigma.value=c,m.mipInt.value=this._lodMax-s;const g=this._sizeLods[l],_=3*g*(l>this._lodMax-wo?l-this._lodMax+wo:0),v=4*(this._cubeSize-g);Eo(i,_,v,3*g,2*g),f.setRenderTarget(i),f.render(p,Hl)}}function OA(o){const t=[],i=[];let s=o;const l=o-wo+1+DA;for(let c=0;c<l;c++){const f=Math.pow(2,s);t.push(f);const d=1/(f-2),p=-d,m=1+d,g=[p,p,m,p,m,m,p,p,m,m,p,m],_=6,v=6,x=3,S=new Float32Array(x*v*_),A=new Float32Array(x*v*_);for(let y=0;y<_;y++){const L=y%3*2/3-1,I=y>2?0:-1,w=[L,I,0,L+2/3,I,0,L+2/3,I+1,0,L,I,0,L+2/3,I+1,0,L,I+1,0];S.set(w,x*v*y);for(let N=0;N<v;N++){const D=g[N*2]*2-1,U=g[N*2+1]*2-1;y===0?dr.set(1,U,D):y===1?dr.set(-D,1,-U):y===2?dr.set(-D,U,1):y===3?dr.set(-1,U,-D):y===4?dr.set(-D,-1,U):dr.set(D,U,-1),dr.toArray(A,(y*v+N)*x)}}const b=new kn;b.setAttribute("position",new Yn(S,x)),b.setAttribute("outputDirection",new Yn(A,x)),i.push(new ln(b,null)),s>wo&&s--}return{lodMeshes:i,sizeLods:t}}function T1(o,t,i){const s=new Ti(o,t,i);return s.texture.mapping=Cf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Eo(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function PA(o,t,i){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:UA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Df(),fragmentShader:`

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
		`,blending:na,depthTest:!1,depthWrite:!1})}function zA(o,t,i){return new en({name:"SphericalGaussianBlur",defines:{SAMPLES:NA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Df(),fragmentShader:`

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
		`,blending:na,depthTest:!1,depthWrite:!1})}function A1(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Df(),fragmentShader:`

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
		`,blending:na,depthTest:!1,depthWrite:!1})}function w1(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:na,depthTest:!1,depthWrite:!1})}function Df(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Zy extends Ti{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Fy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new sc(5,5,5),c=new en({name:"CubemapFromEquirect",uniforms:Lo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:hi,blending:na});c.uniforms.tEquirect.value=i;const f=new ln(l,c),d=i.minFilter;return i.minFilter===Is&&(i.minFilter=Un),new H2(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function IA(o){let t=new WeakMap,i=new WeakMap,s=null;function l(v,x=!1){return v==null?null:x?f(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===fp||x===hp)if(t.has(v)){const S=t.get(v).texture;return d(S,v.mapping)}else{const S=v.image;if(S&&S.height>0){const A=new Zy(S.height);return A.fromEquirectangularTexture(o,v),t.set(v,A),v.addEventListener("dispose",m),d(A.texture,v.mapping)}else return null}}return v}function f(v){if(v&&v.isTexture){const x=v.mapping,S=x===fp||x===hp,A=x===_r||x===Uo;if(S||A){let b=i.get(v);const y=b!==void 0?b.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return s===null&&(s=new E1(o)),b=S?s.fromEquirectangular(v,b):s.fromCubemap(v,b),b.texture.pmremVersion=v.pmremVersion,i.set(v,b),b.texture;if(b!==void 0)return b.texture;{const L=v.image;return S&&L&&L.height>0||A&&L&&p(L)?(s===null&&(s=new E1(o)),b=S?s.fromEquirectangular(v):s.fromCubemap(v),b.texture.pmremVersion=v.pmremVersion,i.set(v,b),v.addEventListener("dispose",g),b.texture):null}}}return v}function d(v,x){return x===fp?v.mapping=_r:x===hp&&(v.mapping=Uo),v}function p(v){let x=0;const S=6;for(let A=0;A<S;A++)v[A]!==void 0&&x++;return x===S}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=t.get(x);S!==void 0&&(t.delete(x),S.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const S=i.get(x);S!==void 0&&(i.delete(x),S.dispose())}function _(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function BA(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Co("WebGLRenderer: "+s+" extension not supported."),l}}}function FA(o,t,i,s){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const S in v.attributes)t.remove(v.attributes[S]);v.removeEventListener("dispose",f),delete l[v.id];const x=c.get(v);x&&(t.remove(x),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function p(_){const v=_.attributes;for(const x in v)t.update(v[x],o.ARRAY_BUFFER)}function m(_){const v=[],x=_.index,S=_.attributes.position;let A=0;if(S===void 0)return;if(x!==null){const L=x.array;A=x.version;for(let I=0,w=L.length;I<w;I+=3){const N=L[I+0],D=L[I+1],U=L[I+2];v.push(N,D,D,U,U,N)}}else{const L=S.array;A=S.version;for(let I=0,w=L.length/3-1;I<w;I+=3){const N=I+0,D=I+1,U=I+2;v.push(N,D,D,U,U,N)}}const b=new(S.count>=65535?Py:Oy)(v,1);b.version=A;const y=c.get(_);y&&t.remove(y),c.set(_,b)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&m(_)}else m(_);return c.get(_)}return{get:d,update:p,getWireframeAttribute:g}}function HA(o,t,i){let s;function l(_){s=_}let c,f;function d(_){c=_.type,f=_.bytesPerElement}function p(_,v){o.drawElements(s,v,c,_*f),i.update(v,s,1)}function m(_,v,x){x!==0&&(o.drawElementsInstanced(s,v,c,_*f,x),i.update(v,s,x))}function g(_,v,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,c,_,0,x);let A=0;for(let b=0;b<x;b++)A+=v[b];i.update(A,s,1)}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g}function GA(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:ke("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function VA(o,t,i){const s=new WeakMap,l=new an;function c(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=s.get(d);if(v===void 0||v.count!==_){let P=function(){E.dispose(),s.delete(d),d.removeEventListener("dispose",P)};var x=P;v!==void 0&&v.texture.dispose();const S=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let w=0;S===!0&&(w=1),A===!0&&(w=2),b===!0&&(w=3);let N=d.attributes.position.count*w,D=1;N>t.maxTextureSize&&(D=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const U=new Float32Array(N*D*4*_),E=new Ny(U,N,D,_);E.type=Sa,E.needsUpdate=!0;const O=w*4;for(let F=0;F<_;F++){const H=y[F],q=L[F],k=I[F],W=N*D*4*F;for(let X=0;X<H.count;X++){const Y=X*O;S===!0&&(l.fromBufferAttribute(H,X),U[W+Y+0]=l.x,U[W+Y+1]=l.y,U[W+Y+2]=l.z,U[W+Y+3]=0),A===!0&&(l.fromBufferAttribute(q,X),U[W+Y+4]=l.x,U[W+Y+5]=l.y,U[W+Y+6]=l.z,U[W+Y+7]=0),b===!0&&(l.fromBufferAttribute(k,X),U[W+Y+8]=l.x,U[W+Y+9]=l.y,U[W+Y+10]=l.z,U[W+Y+11]=k.itemSize===4?l.w:1)}}v={count:_,texture:E,size:new ce(N,D)},s.set(d,v),d.addEventListener("dispose",P)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,i);else{let S=0;for(let b=0;b<m.length;b++)S+=m[b];const A=d.morphTargetsRelative?1:1-S;p.getUniforms().setValue(o,"morphTargetBaseInfluence",A),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function kA(o,t,i,s,l){let c=new WeakMap;function f(m){const g=l.render.frame,_=m.geometry,v=t.get(m,_);if(c.get(v)!==g&&(t.update(v),c.set(v,g)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==g&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),c.set(m,g))),m.isSkinnedMesh){const x=m.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function d(){c=new WeakMap}function p(m){const g=m.target;g.removeEventListener("dispose",p),s.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:d}}const XA={[gy]:"LINEAR_TONE_MAPPING",[vy]:"REINHARD_TONE_MAPPING",[_y]:"CINEON_TONE_MAPPING",[em]:"ACES_FILMIC_TONE_MAPPING",[yy]:"AGX_TONE_MAPPING",[Sy]:"NEUTRAL_TONE_MAPPING",[xy]:"CUSTOM_TONE_MAPPING"};function qA(o,t,i,s,l,c){const f=new Ti(t,i,{type:o,depthBuffer:l,stencilBuffer:c,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null;const m=new kn;m.setAttribute("position",new bn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new bn([0,2,0,0,2,0],2));const g=new C2({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new ln(m,g),v=new Oo(-1,1,1,-1,0,1);let x=null,S=null,A=!1,b,y=null,L=[],I=!1;this.setSize=function(w,N){f.setSize(w,N),d!==null&&d.setSize(w,N),p!==null&&p.setSize(w,N);for(let D=0;D<L.length;D++){const U=L[D];U.setSize&&U.setSize(w,N)}},this.setEffects=function(w){L=w,I=L.length>0&&L[0].isRenderPass===!0;const N=f.width,D=f.height;L.length>0&&d===null&&(d=new Ti(N,D,{type:ia,depthBuffer:!1,stencilBuffer:!1}),p=new Ti(N,D,{type:ia,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<L.length;U++){const E=L[U];E.setSize&&E.setSize(N,D)}},this.begin=function(w,N){if(A||w.toneMapping===ba&&L.length===0)return!1;if(y=N,N!==null){const D=N.width,U=N.height;(f.width!==D||f.height!==U)&&this.setSize(D,U)}return I===!1&&w.setRenderTarget(f),b=w.toneMapping,w.toneMapping=ba,!0},this.hasRenderPass=function(){return I},this.end=function(w,N){w.toneMapping=b,A=!0;let D=f,U=d;for(let E=0;E<L.length;E++){const O=L[E];O.enabled!==!1&&(O.render(w,U,D,N),O.needsSwap!==!1&&(D=U,U=U===d?p:d))}if(x!==w.outputColorSpace||S!==w.toneMapping){x=w.outputColorSpace,S=w.toneMapping,g.defines={},Fe.getTransfer(x)===Je&&(g.defines.SRGB_TRANSFER="");const E=XA[S];E&&(g.defines[E]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=D.texture,w.setRenderTarget(y),w.render(_,v),y=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){f.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),m.dispose(),g.dispose()}}const Qy=new Zn,W0=new nc(1,1),Jy=new Ny,jy=new kE,$y=new Fy,R1=[],C1=[],D1=new Float32Array(16),N1=new Float32Array(9),U1=new Float32Array(4);function Io(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=R1[l];if(c===void 0&&(c=new Float32Array(l),R1[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,o[f].toArray(c,d)}return c}function An(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function wn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Nf(o,t){let i=C1[t];i===void 0&&(i=new Int32Array(t),C1[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function WA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function YA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;o.uniform2fv(this.addr,t),wn(i,t)}}function KA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(An(i,t))return;o.uniform3fv(this.addr,t),wn(i,t)}}function ZA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;o.uniform4fv(this.addr,t),wn(i,t)}}function QA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;U1.set(s),o.uniformMatrix2fv(this.addr,!1,U1),wn(i,s)}}function JA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;N1.set(s),o.uniformMatrix3fv(this.addr,!1,N1),wn(i,s)}}function jA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;D1.set(s),o.uniformMatrix4fv(this.addr,!1,D1),wn(i,s)}}function $A(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function tw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;o.uniform2iv(this.addr,t),wn(i,t)}}function ew(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(An(i,t))return;o.uniform3iv(this.addr,t),wn(i,t)}}function nw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;o.uniform4iv(this.addr,t),wn(i,t)}}function iw(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function aw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;o.uniform2uiv(this.addr,t),wn(i,t)}}function sw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(An(i,t))return;o.uniform3uiv(this.addr,t),wn(i,t)}}function rw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;o.uniform4uiv(this.addr,t),wn(i,t)}}function ow(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(W0.compareFunction=i.isReversedDepthBuffer()?cm:lm,c=W0):c=Qy,i.setTexture2D(t||c,l)}function lw(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||jy,l)}function cw(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||$y,l)}function uw(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Jy,l)}function fw(o){switch(o){case 5126:return WA;case 35664:return YA;case 35665:return KA;case 35666:return ZA;case 35674:return QA;case 35675:return JA;case 35676:return jA;case 5124:case 35670:return $A;case 35667:case 35671:return tw;case 35668:case 35672:return ew;case 35669:case 35673:return nw;case 5125:return iw;case 36294:return aw;case 36295:return sw;case 36296:return rw;case 35678:case 36198:case 36298:case 36306:case 35682:return ow;case 35679:case 36299:case 36307:return lw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return uw}}function hw(o,t){o.uniform1fv(this.addr,t)}function dw(o,t){const i=Io(t,this.size,2);o.uniform2fv(this.addr,i)}function pw(o,t){const i=Io(t,this.size,3);o.uniform3fv(this.addr,i)}function mw(o,t){const i=Io(t,this.size,4);o.uniform4fv(this.addr,i)}function gw(o,t){const i=Io(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function vw(o,t){const i=Io(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function _w(o,t){const i=Io(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function xw(o,t){o.uniform1iv(this.addr,t)}function yw(o,t){o.uniform2iv(this.addr,t)}function Sw(o,t){o.uniform3iv(this.addr,t)}function Mw(o,t){o.uniform4iv(this.addr,t)}function bw(o,t){o.uniform1uiv(this.addr,t)}function Ew(o,t){o.uniform2uiv(this.addr,t)}function Tw(o,t){o.uniform3uiv(this.addr,t)}function Aw(o,t){o.uniform4uiv(this.addr,t)}function ww(o,t,i){const s=this.cache,l=t.length,c=Nf(i,l);An(s,c)||(o.uniform1iv(this.addr,c),wn(s,c));let f;this.type===o.SAMPLER_2D_SHADOW?f=W0:f=Qy;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,c[d])}function Rw(o,t,i){const s=this.cache,l=t.length,c=Nf(i,l);An(s,c)||(o.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||jy,c[f])}function Cw(o,t,i){const s=this.cache,l=t.length,c=Nf(i,l);An(s,c)||(o.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||$y,c[f])}function Dw(o,t,i){const s=this.cache,l=t.length,c=Nf(i,l);An(s,c)||(o.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Jy,c[f])}function Nw(o){switch(o){case 5126:return hw;case 35664:return dw;case 35665:return pw;case 35666:return mw;case 35674:return gw;case 35675:return vw;case 35676:return _w;case 5124:case 35670:return xw;case 35667:case 35671:return yw;case 35668:case 35672:return Sw;case 35669:case 35673:return Mw;case 5125:return bw;case 36294:return Ew;case 36295:return Tw;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return ww;case 35679:case 36299:case 36307:return Rw;case 35680:case 36300:case 36308:case 36293:return Cw;case 36289:case 36303:case 36311:case 36292:return Dw}}class Uw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=fw(i.type)}}class Lw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Nw(i.type)}}class Ow{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Kp=/(\w+)(\])?(\[|\.)?/g;function L1(o,t){o.seq.push(t),o.map[t.id]=t}function Pw(o,t,i){const s=o.name,l=s.length;for(Kp.lastIndex=0;;){const c=Kp.exec(s),f=Kp.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){L1(i,m===void 0?new Uw(d,o,t):new Lw(d,o,t));break}else{let _=i.map[d];_===void 0&&(_=new Ow(d),L1(i,_)),i=_}}}class hf{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),p=t.getUniformLocation(i,d.name);Pw(d,p,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function O1(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const zw=37297;let Iw=0;function Bw(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const P1=new ge;function Fw(o){Fe._getMatrix(P1,Fe.workingColorSpace,o);const t=`mat3( ${P1.elements.map(i=>i.toFixed(4))} )`;switch(Fe.getTransfer(o)){case Sf:return[t,"LinearTransferOETF"];case Je:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function z1(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+Bw(o.getShaderSource(t),d)}else return c}function Hw(o,t){const i=Fw(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const Gw={[gy]:"Linear",[vy]:"Reinhard",[_y]:"Cineon",[em]:"ACESFilmic",[yy]:"AgX",[Sy]:"Neutral",[xy]:"Custom"};function Vw(o,t){const i=Gw[t];return i===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const $u=new K;function kw(){Fe.getLuminanceCoefficients($u);const o=$u.x.toFixed(4),t=$u.y.toFixed(4),i=$u.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ql).join(`
`)}function qw(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function Ww(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),f=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:o.getAttribLocation(t,f),locationSize:d}}return i}function ql(o){return o!==""}function I1(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function B1(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Y0(o){return o.replace(Yw,Zw)}const Kw=new Map;function Zw(o,t){let i=Ee[t];if(i===void 0){const s=Kw.get(t);if(s!==void 0)i=Ee[s],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Y0(i)}const Qw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F1(o){return o.replace(Qw,Jw)}function Jw(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function H1(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const jw={[of]:"SHADOWMAP_TYPE_PCF",[Xl]:"SHADOWMAP_TYPE_VSM"};function $w(o){return jw[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tR={[_r]:"ENVMAP_TYPE_CUBE",[Uo]:"ENVMAP_TYPE_CUBE",[Cf]:"ENVMAP_TYPE_CUBE_UV"};function eR(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":tR[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const nR={[Uo]:"ENVMAP_MODE_REFRACTION"};function iR(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":nR[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const aR={[my]:"ENVMAP_BLENDING_MULTIPLY",[yE]:"ENVMAP_BLENDING_MIX",[SE]:"ENVMAP_BLENDING_ADD"};function sR(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":aR[o.combine]||"ENVMAP_BLENDING_NONE"}function rR(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function oR(o,t,i,s){const l=o.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=$w(i),m=eR(i),g=iR(i),_=sR(i),v=rR(i),x=Xw(i),S=qw(c),A=l.createProgram();let b,y,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S].filter(ql).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S].filter(ql).join(`
`),y.length>0&&(y+=`
`)):(b=[H1(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ql).join(`
`),y=[H1(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,S,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ba?"#define TONE_MAPPING":"",i.toneMapping!==ba?Ee.tonemapping_pars_fragment:"",i.toneMapping!==ba?Vw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,Hw("linearToOutputTexel",i.outputColorSpace),kw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ql).join(`
`)),f=Y0(f),f=I1(f,i),f=B1(f,i),d=Y0(d),d=I1(d,i),d=B1(d,i),f=F1(f),d=F1(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,b=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",i.glslVersion===kx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===kx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const I=L+b+f,w=L+y+d,N=O1(l,l.VERTEX_SHADER,I),D=O1(l,l.FRAGMENT_SHADER,w);l.attachShader(A,N),l.attachShader(A,D),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function U(F){if(o.debug.checkShaderErrors){const H=l.getProgramInfoLog(A)||"",q=l.getShaderInfoLog(N)||"",k=l.getShaderInfoLog(D)||"",W=H.trim(),X=q.trim(),Y=k.trim();let rt=!0,nt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(rt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,N,D);else{const ct=z1(l,N,"vertex"),_t=z1(l,D,"fragment");ke("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+W+`
`+ct+`
`+_t)}else W!==""?he("WebGLProgram: Program Info Log:",W):(X===""||Y==="")&&(nt=!1);nt&&(F.diagnostics={runnable:rt,programLog:W,vertexShader:{log:X,prefix:b},fragmentShader:{log:Y,prefix:y}})}l.deleteShader(N),l.deleteShader(D),E=new hf(l,A),O=Ww(l,A)}let E;this.getUniforms=function(){return E===void 0&&U(this),E};let O;this.getAttributes=function(){return O===void 0&&U(this),O};let P=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=l.getProgramParameter(A,zw)),P},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Iw++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=N,this.fragmentShader=D,this}let lR=0;class cR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new uR(t),i.set(t,s)),s}}class uR{constructor(t){this.id=lR++,this.code=t,this.usedTimes=0}}function fR(o){return o===xr||o===_f||o===xf}function hR(o,t,i,s,l,c){const f=new Uy,d=new cR,p=new Set,m=[],g=new Map,_=s.logarithmicDepthBuffer;let v=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return p.add(E),E===0?"uv":`uv${E}`}function A(E,O,P,F,H,q){const k=F.fog,W=H.geometry,X=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,Y=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,rt=t.get(E.envMap||X,Y),nt=rt&&rt.mapping===Cf?rt.image.height:null,ct=x[E.type];E.precision!==null&&(v=s.getMaxPrecision(E.precision),v!==E.precision&&he("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const _t=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ot=_t!==void 0?_t.length:0;let Mt=0;W.morphAttributes.position!==void 0&&(Mt=1),W.morphAttributes.normal!==void 0&&(Mt=2),W.morphAttributes.color!==void 0&&(Mt=3);let z,Z,ft,G;if(ct){const Ie=ya[ct];z=Ie.vertexShader,Z=Ie.fragmentShader}else{z=E.vertexShader,Z=E.fragmentShader;const Ie=d.getVertexShaderStage(E),xe=d.getFragmentShaderStage(E);d.update(E,Ie,xe),ft=Ie.id,G=xe.id}const tt=o.getRenderTarget(),ht=o.state.buffers.depth.getReversed(),xt=H.isInstancedMesh===!0,j=H.isBatchedMesh===!0,wt=!!E.map,ae=!!E.matcap,Qt=!!rt,bt=!!E.aoMap,Dt=!!E.lightMap,Et=!!E.bumpMap&&E.wireframe===!1,Ft=!!E.normalMap,oe=!!E.displacementMap,ve=!!E.emissiveMap,fe=!!E.metalnessMap,Te=!!E.roughnessMap,Q=E.anisotropy>0,Ve=E.clearcoat>0,_e=E.dispersion>0,B=E.retroreflectivity>0,T=E.iridescence>0,it=E.sheen>0,lt=E.transmission>0,yt=Q&&!!E.anisotropyMap,Nt=Ve&&!!E.clearcoatMap,Pt=Ve&&!!E.clearcoatNormalMap,St=Ve&&!!E.clearcoatRoughnessMap,Tt=T&&!!E.iridescenceMap,zt=T&&!!E.iridescenceThicknessMap,ee=it&&!!E.sheenColorMap,It=it&&!!E.sheenRoughnessMap,Lt=!!E.specularMap,kt=!!E.specularColorMap,re=!!E.specularIntensityMap,pe=lt&&!!E.transmissionMap,et=lt&&!!E.thicknessMap,Bt=!!E.gradientMap,Ct=!!E.alphaMap,Ht=E.alphaTest>0,Zt=!!E.alphaHash,Ut=!!E.extensions;let se=ba;E.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(se=o.toneMapping);const Kt={shaderID:ct,shaderType:E.type,shaderName:E.name,vertexShader:z,fragmentShader:Z,defines:E.defines,customVertexShaderID:ft,customFragmentShaderID:G,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:j,batchingColor:j&&H._colorsTexture!==null,instancing:xt,instancingColor:xt&&H.instanceColor!==null,instancingMorph:xt&&H.morphTexture!==null,outputColorSpace:tt===null?o.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Fe.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:wt,matcap:ae,envMap:Qt,envMapMode:Qt&&rt.mapping,envMapCubeUVHeight:nt,aoMap:bt,lightMap:Dt,bumpMap:Et,normalMap:Ft,displacementMap:oe,emissiveMap:ve,normalMapObjectSpace:Ft&&E.normalMapType===EE,normalMapTangentSpace:Ft&&E.normalMapType===k0,packedNormalMap:Ft&&E.normalMapType===k0&&fR(E.normalMap.format),metalnessMap:fe,roughnessMap:Te,anisotropy:Q,anisotropyMap:yt,clearcoat:Ve,clearcoatMap:Nt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:St,dispersion:_e,retroreflection:B,iridescence:T,iridescenceMap:Tt,iridescenceThicknessMap:zt,sheen:it,sheenColorMap:ee,sheenRoughnessMap:It,specularMap:Lt,specularColorMap:kt,specularIntensityMap:re,transmission:lt,transmissionMap:pe,thicknessMap:et,gradientMap:Bt,opaque:E.transparent===!1&&E.blending===Yl&&E.alphaToCoverage===!1,alphaMap:Ct,alphaTest:Ht,alphaHash:Zt,combine:E.combine,mapUv:wt&&S(E.map.channel),aoMapUv:bt&&S(E.aoMap.channel),lightMapUv:Dt&&S(E.lightMap.channel),bumpMapUv:Et&&S(E.bumpMap.channel),normalMapUv:Ft&&S(E.normalMap.channel),displacementMapUv:oe&&S(E.displacementMap.channel),emissiveMapUv:ve&&S(E.emissiveMap.channel),metalnessMapUv:fe&&S(E.metalnessMap.channel),roughnessMapUv:Te&&S(E.roughnessMap.channel),anisotropyMapUv:yt&&S(E.anisotropyMap.channel),clearcoatMapUv:Nt&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:It&&S(E.sheenRoughnessMap.channel),specularMapUv:Lt&&S(E.specularMap.channel),specularColorMapUv:kt&&S(E.specularColorMap.channel),specularIntensityMapUv:re&&S(E.specularIntensityMap.channel),transmissionMapUv:pe&&S(E.transmissionMap.channel),thicknessMapUv:et&&S(E.thicknessMap.channel),alphaMapUv:Ct&&S(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ft||Q),vertexNormals:!!W.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!W.attributes.uv&&(wt||Ct),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||W.attributes.normal===void 0&&Ft===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:ht,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:Mt,numSunLights:O.sun.length,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numSunLightShadows:O.sunShadowMap.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:se,decodeVideoTexture:wt&&E.map.isVideoTexture===!0&&Fe.getTransfer(E.map.colorSpace)===Je,decodeVideoTextureEmissive:ve&&E.emissiveMap.isVideoTexture===!0&&Fe.getTransfer(E.emissiveMap.colorSpace)===Je,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Hi,flipSided:E.side===hi,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||j)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Kt.vertexUv1s=p.has(1),Kt.vertexUv2s=p.has(2),Kt.vertexUv3s=p.has(3),p.clear(),Kt}function b(E){const O=[];if(E.shaderID?O.push(E.shaderID):(O.push(E.customVertexShaderID),O.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)O.push(P),O.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(y(O,E),L(O,E),O.push(o.outputColorSpace)),O.push(E.customProgramCacheKey),O.join()}function y(E,O){E.push(O.precision),E.push(O.outputColorSpace),E.push(O.envMapMode),E.push(O.envMapCubeUVHeight),E.push(O.mapUv),E.push(O.alphaMapUv),E.push(O.lightMapUv),E.push(O.aoMapUv),E.push(O.bumpMapUv),E.push(O.normalMapUv),E.push(O.displacementMapUv),E.push(O.emissiveMapUv),E.push(O.metalnessMapUv),E.push(O.roughnessMapUv),E.push(O.anisotropyMapUv),E.push(O.clearcoatMapUv),E.push(O.clearcoatNormalMapUv),E.push(O.clearcoatRoughnessMapUv),E.push(O.iridescenceMapUv),E.push(O.iridescenceThicknessMapUv),E.push(O.sheenColorMapUv),E.push(O.sheenRoughnessMapUv),E.push(O.specularMapUv),E.push(O.specularColorMapUv),E.push(O.specularIntensityMapUv),E.push(O.transmissionMapUv),E.push(O.thicknessMapUv),E.push(O.combine),E.push(O.fogExp2),E.push(O.sizeAttenuation),E.push(O.morphTargetsCount),E.push(O.morphAttributeCount),E.push(O.numSunLights),E.push(O.numDirLights),E.push(O.numPointLights),E.push(O.numSpotLights),E.push(O.numSpotLightMaps),E.push(O.numHemiLights),E.push(O.numRectAreaLights),E.push(O.numSunLightShadows),E.push(O.numDirLightShadows),E.push(O.numPointLightShadows),E.push(O.numSpotLightShadows),E.push(O.numSpotLightShadowsWithMaps),E.push(O.numLightProbes),E.push(O.shadowMapType),E.push(O.toneMapping),E.push(O.numClippingPlanes),E.push(O.numClipIntersection),E.push(O.depthPacking)}function L(E,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.retroreflection&&f.enable(24),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),O.packedNormalMap&&f.enable(22),O.vertexNormals&&f.enable(23),E.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),O.numLightProbeGrids>0&&f.enable(22),O.hasPositionAttribute&&f.enable(23),E.push(f.mask)}function I(E){const O=x[E.type];let P;if(O){const F=ya[O];P=A2.clone(F.uniforms)}else P=E.uniforms;return P}function w(E,O){let P=g.get(O);return P!==void 0?++P.usedTimes:(P=new oR(o,O,E,l),m.push(P),g.set(O,P)),P}function N(E){if(--E.usedTimes===0){const O=m.indexOf(E);m[O]=m[m.length-1],m.pop(),g.delete(E.cacheKey),E.destroy()}}function D(E){d.remove(E)}function U(){d.dispose()}return{getParameters:A,getProgramCacheKey:b,getUniforms:I,acquireProgram:w,releaseProgram:N,releaseShaderCache:D,programs:m,dispose:U}}function dR(){let o=new WeakMap;function t(f){return o.has(f)}function i(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function s(f){o.delete(f)}function l(f,d,p){o.get(f)[d]=p}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function pR(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function G1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function V1(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function d(v,x,S,A,b,y){let L=o[t];return L===void 0?(L={id:v.id,object:v,geometry:x,material:S,materialVariant:f(v),groupOrder:A,renderOrder:v.renderOrder,z:b,group:y},o[t]=L):(L.id=v.id,L.object=v,L.geometry=x,L.material=S,L.materialVariant=f(v),L.groupOrder=A,L.renderOrder=v.renderOrder,L.z=b,L.group=y),t++,L}function p(v,x,S,A,b,y,L){L.reversedDepth===!0&&(b=-b);const I=d(v,x,S,A,b,y);S.transmission>0?s.push(I):S.transparent===!0?l.push(I):i.push(I)}function m(v,x,S,A,b,y){const L=d(v,x,S,A,b,y);S.transmission>0?s.unshift(L):S.transparent===!0?l.unshift(L):i.unshift(L)}function g(v,x){i.length>1&&i.sort(v||pR),s.length>1&&s.sort(x||G1),l.length>1&&l.sort(x||G1)}function _(){for(let v=t,x=o.length;v<x;v++){const S=o[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:p,unshift:m,finish:_,sort:g}}function mR(){let o=new WeakMap;function t(s,l){const c=o.get(s);let f;return c===void 0?(f=new V1,o.set(s,[f])):l>=c.length?(f=new V1,c.push(f)):f=c[l],f}function i(){o=new WeakMap}return{get:t,dispose:i}}function gR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new K,color:new ze};break;case"SpotLight":i={position:new K,direction:new K,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new ze,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":i={color:new ze,position:new K,halfWidth:new K,halfHeight:new K};break}return o[t.id]=i,i}}}function vR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let _R=0;function xR(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function yR(o){const t=new gR,i=vR(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new K);const l=new K,c=new cn,f=new cn;function d(m){let g=0,_=0,v=0;for(let H=0;H<9;H++)s.probe[H].set(0,0,0);let x=0,S=0,A=0,b=0,y=0,L=0,I=0,w=0,N=0,D=0,U=0,E=0,O=0,P=0;m.sort(xR);for(let H=0,q=m.length;H<q;H++){const k=m[H],W=k.color,X=k.intensity,Y=k.distance;let rt=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===xr?rt=k.shadow.map.texture:rt=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=W.r*X,_+=W.g*X,v+=W.b*X;else if(k.isLightProbe){for(let nt=0;nt<9;nt++)s.probe[nt].addScaledVector(k.sh.coefficients[nt],X);P++}else if(k.isSunLight){const nt=t.get(k);if(nt.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ct=k.shadow,_t=i.get(k);_t.shadowIntensity=ct.intensity,_t.shadowBias=ct.bias,_t.shadowNormalBias=ct.normalBias,_t.shadowRadius=ct.radius,_t.shadowMapSize.copy(ct.mapSize).multiply(ct.getFrameExtents()),s.sunShadow[S]=_t,s.sunShadowMap[S]=rt;const Ot=ct.getViewportCount();for(let Mt=0;Mt<Ot;Mt++)s.sunShadowMatrix[A+Mt]=ct.getMatrix(Mt),s.sunShadowCascade[A+Mt]=ct._cascadeData[Mt];A+=Ot,S++}s.sun[x]=nt,x++}else if(k.isDirectionalLight){const nt=t.get(k);if(nt.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ct=k.shadow,_t=i.get(k);_t.shadowIntensity=ct.intensity,_t.shadowBias=ct.bias,_t.shadowNormalBias=ct.normalBias,_t.shadowRadius=ct.radius,_t.shadowMapSize=ct.mapSize,s.directionalShadow[b]=_t,s.directionalShadowMap[b]=rt,s.directionalShadowMatrix[b]=k.shadow.matrix,N++}s.directional[b]=nt,b++}else if(k.isSpotLight){const nt=t.get(k);nt.position.setFromMatrixPosition(k.matrixWorld),nt.color.copy(W).multiplyScalar(X),nt.distance=Y,nt.coneCos=Math.cos(k.angle),nt.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),nt.decay=k.decay,s.spot[L]=nt;const ct=k.shadow;if(k.map&&(s.spotLightMap[E]=k.map,E++,ct.updateMatrices(k),k.castShadow&&O++),s.spotLightMatrix[L]=ct.matrix,k.castShadow){const _t=i.get(k);_t.shadowIntensity=ct.intensity,_t.shadowBias=ct.bias,_t.shadowNormalBias=ct.normalBias,_t.shadowRadius=ct.radius,_t.shadowMapSize=ct.mapSize,s.spotShadow[L]=_t,s.spotShadowMap[L]=rt,U++}L++}else if(k.isRectAreaLight){const nt=t.get(k);nt.color.copy(W).multiplyScalar(X),nt.halfWidth.set(k.width*.5,0,0),nt.halfHeight.set(0,k.height*.5,0),s.rectArea[I]=nt,I++}else if(k.isPointLight){const nt=t.get(k);if(nt.color.copy(k.color).multiplyScalar(k.intensity),nt.distance=k.distance,nt.decay=k.decay,k.castShadow){const ct=k.shadow,_t=i.get(k);_t.shadowIntensity=ct.intensity,_t.shadowBias=ct.bias,_t.shadowNormalBias=ct.normalBias,_t.shadowRadius=ct.radius,_t.shadowMapSize=ct.mapSize,_t.shadowCameraNear=ct.camera.near,_t.shadowCameraFar=ct.camera.far,s.pointShadow[y]=_t,s.pointShadowMap[y]=rt,s.pointShadowMatrix[y]=k.shadow.matrix,D++}s.point[y]=nt,y++}else if(k.isHemisphereLight){const nt=t.get(k);nt.skyColor.copy(k.color).multiplyScalar(X),nt.groundColor.copy(k.groundColor).multiplyScalar(X),s.hemi[w]=nt,w++}}I>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Yt.LTC_FLOAT_1,s.rectAreaLTC2=Yt.LTC_FLOAT_2):(s.rectAreaLTC1=Yt.LTC_HALF_1,s.rectAreaLTC2=Yt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=v;const F=s.hash;(F.sunLength!==x||F.directionalLength!==b||F.pointLength!==y||F.spotLength!==L||F.rectAreaLength!==I||F.hemiLength!==w||F.numSunShadows!==S||F.numDirectionalShadows!==N||F.numPointShadows!==D||F.numSpotShadows!==U||F.numSpotMaps!==E||F.numLightProbes!==P)&&(s.sun.length=x,s.directional.length=b,s.spot.length=L,s.rectArea.length=I,s.point.length=y,s.hemi.length=w,s.sunShadow.length=S,s.sunShadowMap.length=S,s.sunShadowMatrix.length=A,s.sunShadowCascade.length=A,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.directionalShadowMatrix.length=N,s.pointShadow.length=D,s.pointShadowMap.length=D,s.pointShadowMatrix.length=D,s.spotShadow.length=U,s.spotShadowMap.length=U,s.spotLightMatrix.length=U+E-O,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=P,F.sunLength=x,F.directionalLength=b,F.pointLength=y,F.spotLength=L,F.rectAreaLength=I,F.hemiLength=w,F.numSunShadows=S,F.numDirectionalShadows=N,F.numPointShadows=D,F.numSpotShadows=U,F.numSpotMaps=E,F.numLightProbes=P,s.version=_R++)}function p(m,g){let _=0,v=0,x=0,S=0,A=0,b=0;const y=g.matrixWorldInverse;for(let L=0,I=m.length;L<I;L++){const w=m[L];if(w.isSunLight){const N=s.sun[_];N.direction.setFromMatrixPosition(w.matrixWorld),N.direction.transformDirection(y),_++}else if(w.isDirectionalLight){const N=s.directional[v];N.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),v++}else if(w.isSpotLight){const N=s.spot[S];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),S++}else if(w.isRectAreaLight){const N=s.rectArea[A];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(y),f.identity(),c.copy(w.matrixWorld),c.premultiply(y),f.extractRotation(c),N.halfWidth.set(w.width*.5,0,0),N.halfHeight.set(0,w.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),A++}else if(w.isPointLight){const N=s.point[x];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(y),x++}else if(w.isHemisphereLight){const N=s.hemi[b];N.direction.setFromMatrixPosition(w.matrixWorld),N.direction.transformDirection(y),b++}}}return{setup:d,setupView:p,state:s}}function k1(o){const t=new yR(o),i=[],s=[],l=[];function c(v){_.camera=v,i.length=0,s.length=0,l.length=0}function f(v){i.push(v)}function d(v){s.push(v)}function p(v){l.push(v)}function m(){t.setup(i)}function g(v){t.setupView(i,v)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:m,setupLightsView:g,pushLight:f,pushShadow:d,pushLightProbeGrid:p}}function SR(o){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new k1(o),t.set(l,[d])):c>=f.length?(d=new k1(o),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const MR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bR=`uniform sampler2D shadow_pass;
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
}`,ER=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],TR=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],X1=new cn,Gl=new K,Zp=new K;function AR(o,t,i){let s=new hm;const l=new ce,c=new ce,f=new an,d=new D2,p=new N2,m={},g=i.maxTextureSize,_={[vr]:hi,[hi]:vr,[Hi]:Hi},v=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:MR,fragmentShader:bR}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const S=new kn;S.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ln(S,v),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=of;let y=this.type;this.render=function(D,U,E){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||D.length===0)return;this.type===sE&&(he("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=of);const O=o.getRenderTarget(),P=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),H=o.state;H.setBlending(na),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const q=y!==this.type;q&&U.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(W=>W.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,W=D.length;k<W;k++){const X=D[k],Y=X.shadow;if(Y===void 0){he("WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const rt=Y.getFrameExtents();l.multiply(rt),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/rt.x),l.x=c.x*rt.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/rt.y),l.y=c.y*rt.y,Y.mapSize.y=c.y));const nt=o.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=nt,Y.map===null||q===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Xl){if(X.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Ti(l.x,l.y,{format:xr,type:ia,minFilter:Un,magFilter:Un,generateMipmaps:!1}),Y.map.texture.name=X.name+".shadowMap",Y.map.depthTexture=new nc(l.x,l.y,Sa),Y.map.depthTexture.name=X.name+".shadowMapDepth",Y.map.depthTexture.format=Za,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Gn,Y.map.depthTexture.magFilter=Gn}else X.isPointLight?(Y.map=new Zy(l.x),Y.map.depthTexture=new c2(l.x,Ea)):(Y.map=new Ti(l.x,l.y),Y.map.depthTexture=new nc(l.x,l.y,Ea)),Y.map.depthTexture.name=X.name+".shadowMap",Y.map.depthTexture.format=Za,this.type===of?(Y.map.depthTexture.compareFunction=nt?cm:lm,Y.map.depthTexture.minFilter=Un,Y.map.depthTexture.magFilter=Un):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Gn,Y.map.depthTexture.magFilter=Gn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==l.x||Y.map.height!==l.y)&&Y.map.setSize(l.x,l.y);const ct=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();X.isPointLight!==!0&&Y.updateMatrices(X,E);for(let _t=0;_t<ct;_t++){const Ot=Y.getCamera(_t);if(X.isPointLight){const Mt=Y.camera,z=Y.matrix,Z=X.distance||Mt.far;Z!==Mt.far&&(Mt.far=Z,Mt.updateProjectionMatrix()),Gl.setFromMatrixPosition(X.matrixWorld),Mt.position.copy(Gl),Zp.copy(Mt.position),Zp.add(ER[_t]),Mt.up.copy(TR[_t]),Mt.lookAt(Zp),Mt.updateMatrixWorld(),z.makeTranslation(-Gl.x,-Gl.y,-Gl.z),X1.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(X1,Mt.coordinateSystem,Mt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)o.setRenderTarget(Y.map,_t),o.clear();else{_t===0&&(o.setRenderTarget(Y.map),o.clear());const Mt=Y.getViewport(_t);f.set(c.x*Mt.x,c.y*Mt.y,c.x*Mt.z,c.y*Mt.w),H.viewport(f)}s=Y.getFrustum(_t),w(U,E,Ot,X,this.type)}Y.isPointLightShadow!==!0&&this.type===Xl&&L(Y,E),Y.needsUpdate=!1}y=this.type,b.needsUpdate=!1,o.setRenderTarget(O,P,F)};function L(D,U){const E=t.update(A);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null?D.mapPass=new Ti(l.x,l.y,{format:xr,type:ia}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),v.uniforms.shadow_pass.value=D.map.depthTexture,v.uniforms.resolution.value.set(D.map.width,D.map.height),v.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(U,null,E,v,A,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value.set(D.map.width,D.map.height),x.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(U,null,E,x,A,null)}function I(D,U,E,O){let P=null;const F=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(F!==void 0)P=F;else if(P=E.isPointLight===!0?p:d,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const H=P.uuid,q=U.uuid;let k=m[H];k===void 0&&(k={},m[H]=k);let W=k[q];W===void 0&&(W=P.clone(),k[q]=W,U.addEventListener("dispose",N)),P=W}if(P.visible=U.visible,P.wireframe=U.wireframe,O===Xl?P.side=U.shadowSide!==null?U.shadowSide:U.side:P.side=U.shadowSide!==null?U.shadowSide:_[U.side],P.alphaMap=U.alphaMap,P.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,P.map=U.map,P.clipShadows=U.clipShadows,P.clippingPlanes=U.clippingPlanes,P.clipIntersection=U.clipIntersection,P.displacementMap=U.displacementMap,P.displacementScale=U.displacementScale,P.displacementBias=U.displacementBias,P.wireframeLinewidth=U.wireframeLinewidth,P.linewidth=U.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const H=o.properties.get(P);H.light=E}return P}function w(D,U,E,O,P){if(D.visible===!1)return;if(D.layers.test(U.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&P===Xl)&&(!D.frustumCulled||D.intersectsFrustum(s))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const q=t.update(D),k=D.material;if(Array.isArray(k)){const W=q.groups;for(let X=0,Y=W.length;X<Y;X++){const rt=W[X],nt=k[rt.materialIndex];if(nt&&nt.visible){const ct=I(D,nt,O,P);D.onBeforeShadow(o,D,U,E,q,ct,rt),o.renderBufferDirect(E,null,q,ct,D,rt),D.onAfterShadow(o,D,U,E,q,ct,rt)}}}else if(k.visible){const W=I(D,k,O,P);D.onBeforeShadow(o,D,U,E,q,W,null),o.renderBufferDirect(E,null,q,W,D,null),D.onAfterShadow(o,D,U,E,q,W,null)}}const H=D.children;for(let q=0,k=H.length;q<k;q++)w(H[q],U,E,O,P)}function N(D){D.target.removeEventListener("dispose",N);for(const E in m){const O=m[E],P=D.target.uuid;P in O&&(O[P].dispose(),delete O[P])}}}function wR(o,t){function i(){let et=!1;const Bt=new an;let Ct=null;const Ht=new an(0,0,0,0);return{setMask:function(Zt){Ct!==Zt&&!et&&(o.colorMask(Zt,Zt,Zt,Zt),Ct=Zt)},setLocked:function(Zt){et=Zt},setClear:function(Zt,Ut,se,Kt,Ie){Ie===!0&&(Zt*=Kt,Ut*=Kt,se*=Kt),Bt.set(Zt,Ut,se,Kt),Ht.equals(Bt)===!1&&(o.clearColor(Zt,Ut,se,Kt),Ht.copy(Bt))},reset:function(){et=!1,Ct=null,Ht.set(-1,0,0,0)}}}function s(){let et=!1,Bt=!1,Ct=null,Ht=null,Zt=null;return{setReversed:function(Ut){if(Bt!==Ut){const se=t.get("EXT_clip_control");Ut?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),Bt=Ut;const Kt=Zt;Zt=null,this.setClear(Kt)}},getReversed:function(){return Bt},setTest:function(Ut){Ut?tt(o.DEPTH_TEST):ht(o.DEPTH_TEST)},setMask:function(Ut){Ct!==Ut&&!et&&(o.depthMask(Ut),Ct=Ut)},setFunc:function(Ut){if(Bt&&(Ut=zE[Ut]),Ht!==Ut){switch(Ut){case a0:o.depthFunc(o.NEVER);break;case s0:o.depthFunc(o.ALWAYS);break;case r0:o.depthFunc(o.LESS);break;case Jl:o.depthFunc(o.LEQUAL);break;case o0:o.depthFunc(o.EQUAL);break;case l0:o.depthFunc(o.GEQUAL);break;case c0:o.depthFunc(o.GREATER);break;case u0:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ht=Ut}},setLocked:function(Ut){et=Ut},setClear:function(Ut){Zt!==Ut&&(Zt=Ut,Bt&&(Ut=1-Ut),o.clearDepth(Ut))},reset:function(){et=!1,Ct=null,Ht=null,Zt=null,Bt=!1}}}function l(){let et=!1,Bt=null,Ct=null,Ht=null,Zt=null,Ut=null,se=null,Kt=null,Ie=null;return{setTest:function(xe){et||(xe?tt(o.STENCIL_TEST):ht(o.STENCIL_TEST))},setMask:function(xe){Bt!==xe&&!et&&(o.stencilMask(xe),Bt=xe)},setFunc:function(xe,di,Ri){(Ct!==xe||Ht!==di||Zt!==Ri)&&(o.stencilFunc(xe,di,Ri),Ct=xe,Ht=di,Zt=Ri)},setOp:function(xe,di,Ri){(Ut!==xe||se!==di||Kt!==Ri)&&(o.stencilOp(xe,di,Ri),Ut=xe,se=di,Kt=Ri)},setLocked:function(xe){et=xe},setClear:function(xe){Ie!==xe&&(o.clearStencil(xe),Ie=xe)},reset:function(){et=!1,Bt=null,Ct=null,Ht=null,Zt=null,Ut=null,se=null,Kt=null,Ie=null}}}const c=new i,f=new s,d=new l,p=new WeakMap,m=new WeakMap;let g={},_={},v={},x=new WeakMap,S=[],A=null,b=!1,y=null,L=null,I=null,w=null,N=null,D=null,U=null,E=new ze(0,0,0),O=0,P=!1,F=null,H=null,q=null,k=null,W=null;const X=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,rt=0;const nt=o.getParameter(o.VERSION);nt.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(nt)[1]),Y=rt>=1):nt.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),Y=rt>=2);let ct=null,_t={};const Ot=o.getParameter(o.SCISSOR_BOX),Mt=o.getParameter(o.VIEWPORT),z=new an().fromArray(Ot),Z=new an().fromArray(Mt);function ft(et,Bt,Ct,Ht){const Zt=new Uint8Array(4),Ut=o.createTexture();o.bindTexture(et,Ut),o.texParameteri(et,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(et,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let se=0;se<Ct;se++)et===o.TEXTURE_3D||et===o.TEXTURE_2D_ARRAY?o.texImage3D(Bt,0,o.RGBA,1,1,Ht,0,o.RGBA,o.UNSIGNED_BYTE,Zt):o.texImage2D(Bt+se,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Zt);return Ut}const G={};G[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),G[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),G[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),tt(o.DEPTH_TEST),f.setFunc(Jl),Et(!1),Ft(Fx),tt(o.CULL_FACE),bt(na);function tt(et){g[et]!==!0&&(o.enable(et),g[et]=!0)}function ht(et){g[et]!==!1&&(o.disable(et),g[et]=!1)}function xt(et,Bt){return v[et]!==Bt?(o.bindFramebuffer(et,Bt),v[et]=Bt,et===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Bt),et===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Bt),!0):!1}function j(et,Bt){let Ct=S,Ht=!1;if(et){Ct=x.get(Bt),Ct===void 0&&(Ct=[],x.set(Bt,Ct));const Zt=et.textures;if(Ct.length!==Zt.length||Ct[0]!==o.COLOR_ATTACHMENT0){for(let Ut=0,se=Zt.length;Ut<se;Ut++)Ct[Ut]=o.COLOR_ATTACHMENT0+Ut;Ct.length=Zt.length,Ht=!0}}else Ct[0]!==o.BACK&&(Ct[0]=o.BACK,Ht=!0);Ht&&o.drawBuffers(Ct)}function wt(et){return A!==et?(o.useProgram(et),A=et,!0):!1}const ae={[Wa]:o.FUNC_ADD,[rE]:o.FUNC_SUBTRACT,[oE]:o.FUNC_REVERSE_SUBTRACT};ae[lE]=o.MIN,ae[cE]=o.MAX;const Qt={[i0]:o.ZERO,[Ro]:o.ONE,[uE]:o.SRC_COLOR,[py]:o.SRC_ALPHA,[mE]:o.SRC_ALPHA_SATURATE,[dE]:o.DST_COLOR,[fE]:o.DST_ALPHA,[dy]:o.ONE_MINUS_SRC_COLOR,[vf]:o.ONE_MINUS_SRC_ALPHA,[pE]:o.ONE_MINUS_DST_COLOR,[hE]:o.ONE_MINUS_DST_ALPHA,[gE]:o.CONSTANT_COLOR,[vE]:o.ONE_MINUS_CONSTANT_COLOR,[_E]:o.CONSTANT_ALPHA,[xE]:o.ONE_MINUS_CONSTANT_ALPHA};function bt(et,Bt,Ct,Ht,Zt,Ut,se,Kt,Ie,xe){if(et===na){b===!0&&(ht(o.BLEND),b=!1);return}if(b===!1&&(tt(o.BLEND),b=!0),et!==gf){if(et!==y||xe!==P){if((L!==Wa||N!==Wa)&&(o.blendEquation(o.FUNC_ADD),L=Wa,N=Wa),xe)switch(et){case Yl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hx:o.blendFunc(o.ONE,o.ONE);break;case Gx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Vx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:ke("WebGLState: Invalid blending: ",et);break}else switch(et){case Yl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Gx:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vx:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",et);break}I=null,w=null,D=null,U=null,E.set(0,0,0),O=0,y=et,P=xe}return}Zt=Zt||Bt,Ut=Ut||Ct,se=se||Ht,(Bt!==L||Zt!==N)&&(o.blendEquationSeparate(ae[Bt],ae[Zt]),L=Bt,N=Zt),(Ct!==I||Ht!==w||Ut!==D||se!==U)&&(o.blendFuncSeparate(Qt[Ct],Qt[Ht],Qt[Ut],Qt[se]),I=Ct,w=Ht,D=Ut,U=se),(Kt.equals(E)===!1||Ie!==O)&&(o.blendColor(Kt.r,Kt.g,Kt.b,Ie),E.copy(Kt),O=Ie),y=et,P=!1}function Dt(et,Bt){et.side===Hi?ht(o.CULL_FACE):tt(o.CULL_FACE);let Ct=et.side===hi;Bt&&(Ct=!Ct),Et(Ct),et.blending===Yl&&et.transparent===!1?bt(na):bt(et.blending,et.blendEquation,et.blendSrc,et.blendDst,et.blendEquationAlpha,et.blendSrcAlpha,et.blendDstAlpha,et.blendColor,et.blendAlpha,et.premultipliedAlpha),f.setFunc(et.depthFunc),f.setTest(et.depthTest),f.setMask(et.depthWrite),c.setMask(et.colorWrite);const Ht=et.stencilWrite;d.setTest(Ht),Ht&&(d.setMask(et.stencilWriteMask),d.setFunc(et.stencilFunc,et.stencilRef,et.stencilFuncMask),d.setOp(et.stencilFail,et.stencilZFail,et.stencilZPass)),ve(et.polygonOffset,et.polygonOffsetFactor,et.polygonOffsetUnits),et.alphaToCoverage===!0?tt(o.SAMPLE_ALPHA_TO_COVERAGE):ht(o.SAMPLE_ALPHA_TO_COVERAGE)}function Et(et){F!==et&&(et?o.frontFace(o.CW):o.frontFace(o.CCW),F=et)}function Ft(et){et!==iE?(tt(o.CULL_FACE),et!==H&&(et===Fx?o.cullFace(o.BACK):et===aE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ht(o.CULL_FACE),H=et}function oe(et){et!==q&&(Y&&o.lineWidth(et),q=et)}function ve(et,Bt,Ct){et?(tt(o.POLYGON_OFFSET_FILL),(k!==Bt||W!==Ct)&&(k=Bt,W=Ct,f.getReversed()&&(Bt=-Bt),o.polygonOffset(Bt,Ct))):ht(o.POLYGON_OFFSET_FILL)}function fe(et){et?tt(o.SCISSOR_TEST):ht(o.SCISSOR_TEST)}function Te(et){et===void 0&&(et=o.TEXTURE0+X-1),ct!==et&&(o.activeTexture(et),ct=et)}function Q(et,Bt,Ct){Ct===void 0&&(ct===null?Ct=o.TEXTURE0+X-1:Ct=ct);let Ht=_t[Ct];Ht===void 0&&(Ht={type:void 0,texture:void 0},_t[Ct]=Ht),(Ht.type!==et||Ht.texture!==Bt)&&(ct!==Ct&&(o.activeTexture(Ct),ct=Ct),o.bindTexture(et,Bt||G[et]),Ht.type=et,Ht.texture=Bt)}function Ve(){const et=_t[ct];et!==void 0&&et.type!==void 0&&(o.bindTexture(et.type,null),et.type=void 0,et.texture=void 0)}function _e(){try{o.compressedTexImage2D(...arguments)}catch(et){ke("WebGLState:",et)}}function B(){try{o.compressedTexImage3D(...arguments)}catch(et){ke("WebGLState:",et)}}function T(){try{o.texSubImage2D(...arguments)}catch(et){ke("WebGLState:",et)}}function it(){try{o.texSubImage3D(...arguments)}catch(et){ke("WebGLState:",et)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(et){ke("WebGLState:",et)}}function yt(){try{o.compressedTexSubImage3D(...arguments)}catch(et){ke("WebGLState:",et)}}function Nt(){try{o.texStorage2D(...arguments)}catch(et){ke("WebGLState:",et)}}function Pt(){try{o.texStorage3D(...arguments)}catch(et){ke("WebGLState:",et)}}function St(){try{o.texImage2D(...arguments)}catch(et){ke("WebGLState:",et)}}function Tt(){try{o.texImage3D(...arguments)}catch(et){ke("WebGLState:",et)}}function zt(et){return _[et]!==void 0?_[et]:o.getParameter(et)}function ee(et,Bt){_[et]!==Bt&&(o.pixelStorei(et,Bt),_[et]=Bt)}function It(et){z.equals(et)===!1&&(o.scissor(et.x,et.y,et.z,et.w),z.copy(et))}function Lt(et){Z.equals(et)===!1&&(o.viewport(et.x,et.y,et.z,et.w),Z.copy(et))}function kt(et,Bt){let Ct=m.get(Bt);Ct===void 0&&(Ct=new WeakMap,m.set(Bt,Ct));let Ht=Ct.get(et);Ht===void 0&&(Ht=o.getUniformBlockIndex(Bt,et.name),Ct.set(et,Ht))}function re(et,Bt){const Ht=m.get(Bt).get(et);p.get(Bt)!==Ht&&(o.uniformBlockBinding(Bt,Ht,et.__bindingPointIndex),p.set(Bt,Ht))}function pe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),g={},_={},ct=null,_t={},v={},x=new WeakMap,S=[],A=null,b=!1,y=null,L=null,I=null,w=null,N=null,D=null,U=null,E=new ze(0,0,0),O=0,P=!1,F=null,H=null,q=null,k=null,W=null,z.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:tt,disable:ht,bindFramebuffer:xt,drawBuffers:j,useProgram:wt,setBlending:bt,setMaterial:Dt,setFlipSided:Et,setCullFace:Ft,setLineWidth:oe,setPolygonOffset:ve,setScissorTest:fe,activeTexture:Te,bindTexture:Q,unbindTexture:Ve,compressedTexImage2D:_e,compressedTexImage3D:B,texImage2D:St,texImage3D:Tt,pixelStorei:ee,getParameter:zt,updateUBOMapping:kt,uniformBlockBinding:re,texStorage2D:Nt,texStorage3D:Pt,texSubImage2D:T,texSubImage3D:it,compressedTexSubImage2D:lt,compressedTexSubImage3D:yt,scissor:It,viewport:Lt,reset:pe}}function RR(o,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ce,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(B,T){return S?new OffscreenCanvas(B,T):ec("canvas")}function b(B,T,it){let lt=1;const yt=_e(B);if((yt.width>it||yt.height>it)&&(lt=it/Math.max(yt.width,yt.height)),lt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Nt=Math.floor(lt*yt.width),Pt=Math.floor(lt*yt.height);v===void 0&&(v=A(Nt,Pt));const St=T?A(Nt,Pt):v;return St.width=Nt,St.height=Pt,St.getContext("2d").drawImage(B,0,0,Nt,Pt),he("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+Nt+"x"+Pt+")."),St}else return"data"in B&&he("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),B;return B}function y(B){return B.generateMipmaps}function L(B){o.generateMipmap(B)}function I(B){return B.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?o.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function w(B,T,it,lt,yt,Nt=!1){if(B!==null){if(o[B]!==void 0)return o[B];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Pt;lt&&(Pt=t.get("EXT_texture_norm16"),Pt||he("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let St=T;if(T===o.RED&&(it===o.FLOAT&&(St=o.R32F),it===o.HALF_FLOAT&&(St=o.R16F),it===o.UNSIGNED_BYTE&&(St=o.R8),it===o.UNSIGNED_SHORT&&Pt&&(St=Pt.R16_EXT),it===o.SHORT&&Pt&&(St=Pt.R16_SNORM_EXT)),T===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(St=o.R8UI),it===o.UNSIGNED_SHORT&&(St=o.R16UI),it===o.UNSIGNED_INT&&(St=o.R32UI),it===o.BYTE&&(St=o.R8I),it===o.SHORT&&(St=o.R16I),it===o.INT&&(St=o.R32I)),T===o.RG&&(it===o.FLOAT&&(St=o.RG32F),it===o.HALF_FLOAT&&(St=o.RG16F),it===o.UNSIGNED_BYTE&&(St=o.RG8),it===o.UNSIGNED_SHORT&&Pt&&(St=Pt.RG16_EXT),it===o.SHORT&&Pt&&(St=Pt.RG16_SNORM_EXT)),T===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(St=o.RG8UI),it===o.UNSIGNED_SHORT&&(St=o.RG16UI),it===o.UNSIGNED_INT&&(St=o.RG32UI),it===o.BYTE&&(St=o.RG8I),it===o.SHORT&&(St=o.RG16I),it===o.INT&&(St=o.RG32I)),T===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(St=o.RGB8UI),it===o.UNSIGNED_SHORT&&(St=o.RGB16UI),it===o.UNSIGNED_INT&&(St=o.RGB32UI),it===o.BYTE&&(St=o.RGB8I),it===o.SHORT&&(St=o.RGB16I),it===o.INT&&(St=o.RGB32I)),T===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(St=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(St=o.RGBA16UI),it===o.UNSIGNED_INT&&(St=o.RGBA32UI),it===o.BYTE&&(St=o.RGBA8I),it===o.SHORT&&(St=o.RGBA16I),it===o.INT&&(St=o.RGBA32I)),T===o.RGB&&(it===o.UNSIGNED_SHORT&&Pt&&(St=Pt.RGB16_EXT),it===o.SHORT&&Pt&&(St=Pt.RGB16_SNORM_EXT),it===o.UNSIGNED_INT_5_9_9_9_REV&&(St=o.RGB9_E5),it===o.UNSIGNED_INT_10F_11F_11F_REV&&(St=o.R11F_G11F_B10F)),T===o.RGBA){const Tt=Nt?Sf:Fe.getTransfer(yt);it===o.FLOAT&&(St=o.RGBA32F),it===o.HALF_FLOAT&&(St=o.RGBA16F),it===o.UNSIGNED_BYTE&&(St=Tt===Je?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT&&Pt&&(St=Pt.RGBA16_EXT),it===o.SHORT&&Pt&&(St=Pt.RGBA16_SNORM_EXT),it===o.UNSIGNED_SHORT_4_4_4_4&&(St=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(St=o.RGB5_A1)}return(St===o.R16F||St===o.R32F||St===o.RG16F||St===o.RG32F||St===o.RGBA16F||St===o.RGBA32F)&&t.get("EXT_color_buffer_float"),St}function N(B,T){let it;return B?T===null||T===Ea||T===$l?it=o.DEPTH24_STENCIL8:T===Sa?it=o.DEPTH32F_STENCIL8:T===jl&&(it=o.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ea||T===$l?it=o.DEPTH_COMPONENT24:T===Sa?it=o.DEPTH_COMPONENT32F:T===jl&&(it=o.DEPTH_COMPONENT16),it}function D(B,T){return y(B)===!0||B.isFramebufferTexture&&B.minFilter!==Gn&&B.minFilter!==Un?Math.log2(Math.max(T.width,T.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?T.mipmaps.length:1}function U(B){const T=B.target;T.removeEventListener("dispose",U),O(T),T.isVideoTexture&&g.delete(T),T.isHTMLTexture&&_.delete(T)}function E(B){const T=B.target;T.removeEventListener("dispose",E),F(T)}function O(B){const T=s.get(B);if(T.__webglInit===void 0)return;const it=B.source,lt=x.get(it);if(lt){const yt=lt[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&P(B),Object.keys(lt).length===0&&x.delete(it)}s.remove(B)}function P(B){const T=s.get(B);o.deleteTexture(T.__webglTexture);const it=B.source,lt=x.get(it);delete lt[T.__cacheKey],f.memory.textures--}function F(B){const T=s.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),s.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(T.__webglFramebuffer[lt]))for(let yt=0;yt<T.__webglFramebuffer[lt].length;yt++)o.deleteFramebuffer(T.__webglFramebuffer[lt][yt]);else o.deleteFramebuffer(T.__webglFramebuffer[lt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[lt])}else{if(Array.isArray(T.__webglFramebuffer))for(let lt=0;lt<T.__webglFramebuffer.length;lt++)o.deleteFramebuffer(T.__webglFramebuffer[lt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let lt=0;lt<T.__webglColorRenderbuffer.length;lt++)T.__webglColorRenderbuffer[lt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[lt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const it=B.textures;for(let lt=0,yt=it.length;lt<yt;lt++){const Nt=s.get(it[lt]);Nt.__webglTexture&&(o.deleteTexture(Nt.__webglTexture),f.memory.textures--),s.remove(it[lt])}s.remove(B)}let H=0;function q(){H=0}function k(){return H}function W(B){H=B}function X(){const B=H;return B>=l.maxTextures&&he("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+l.maxTextures),H+=1,B}function Y(B){const T=[];return T.push(B.wrapS),T.push(B.wrapT),T.push(B.wrapR||0),T.push(B.magFilter),T.push(B.minFilter),T.push(B.anisotropy),T.push(B.internalFormat),T.push(B.format),T.push(B.type),T.push(B.generateMipmaps),T.push(B.premultiplyAlpha),T.push(B.flipY),T.push(B.unpackAlignment),T.push(B.colorSpace),T.join()}function rt(B,T){const it=s.get(B);if(B.isVideoTexture&&Q(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&it.__version!==B.version){const lt=B.image;if(lt===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{ht(it,B,T);return}}else B.isExternalTexture&&(it.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+T)}function nt(B,T){const it=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&it.__version!==B.version){ht(it,B,T);return}else B.isExternalTexture&&(it.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+T)}function ct(B,T){const it=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&it.__version!==B.version){ht(it,B,T);return}i.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+T)}function _t(B,T){const it=s.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&it.__version!==B.version){xt(it,B,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+T)}const Ot={[f0]:o.REPEAT,[Ya]:o.CLAMP_TO_EDGE,[h0]:o.MIRRORED_REPEAT},Mt={[Gn]:o.NEAREST,[ME]:o.NEAREST_MIPMAP_NEAREST,[Ru]:o.NEAREST_MIPMAP_LINEAR,[Un]:o.LINEAR,[dp]:o.LINEAR_MIPMAP_NEAREST,[Is]:o.LINEAR_MIPMAP_LINEAR},z={[AE]:o.NEVER,[NE]:o.ALWAYS,[wE]:o.LESS,[lm]:o.LEQUAL,[RE]:o.EQUAL,[cm]:o.GEQUAL,[CE]:o.GREATER,[DE]:o.NOTEQUAL};function Z(B,T){if(T.type===Sa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Un||T.magFilter===dp||T.magFilter===Ru||T.magFilter===Is||T.minFilter===Un||T.minFilter===dp||T.minFilter===Ru||T.minFilter===Is)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(B,o.TEXTURE_WRAP_S,Ot[T.wrapS]),o.texParameteri(B,o.TEXTURE_WRAP_T,Ot[T.wrapT]),(B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY)&&o.texParameteri(B,o.TEXTURE_WRAP_R,Ot[T.wrapR]),o.texParameteri(B,o.TEXTURE_MAG_FILTER,Mt[T.magFilter]),o.texParameteri(B,o.TEXTURE_MIN_FILTER,Mt[T.minFilter]),T.compareFunction&&(o.texParameteri(B,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(B,o.TEXTURE_COMPARE_FUNC,z[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Gn||T.minFilter!==Ru&&T.minFilter!==Is||T.type===Sa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");o.texParameterf(B,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ft(B,T){let it=!1;B.__webglInit===void 0&&(B.__webglInit=!0,T.addEventListener("dispose",U));const lt=T.source;let yt=x.get(lt);yt===void 0&&(yt={},x.set(lt,yt));const Nt=Y(T);if(Nt!==B.__cacheKey){yt[Nt]===void 0&&(yt[Nt]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,it=!0),yt[Nt].usedTimes++;const Pt=yt[B.__cacheKey];Pt!==void 0&&(yt[B.__cacheKey].usedTimes--,Pt.usedTimes===0&&P(T)),B.__cacheKey=Nt,B.__webglTexture=yt[Nt].texture}return it}function G(B,T,it){return Math.floor(Math.floor(B/it)/T)}function tt(B,T,it,lt){const Nt=B.updateRanges;if(Nt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,it,lt,T.data);else{Nt.sort((ee,It)=>ee.start-It.start);let Pt=0;for(let ee=1;ee<Nt.length;ee++){const It=Nt[Pt],Lt=Nt[ee],kt=It.start+It.count,re=G(Lt.start,T.width,4),pe=G(It.start,T.width,4);Lt.start<=kt+1&&re===pe&&G(Lt.start+Lt.count-1,T.width,4)===re?It.count=Math.max(It.count,Lt.start+Lt.count-It.start):(++Pt,Nt[Pt]=Lt)}Nt.length=Pt+1;const St=i.getParameter(o.UNPACK_ROW_LENGTH),Tt=i.getParameter(o.UNPACK_SKIP_PIXELS),zt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let ee=0,It=Nt.length;ee<It;ee++){const Lt=Nt[ee],kt=Math.floor(Lt.start/4),re=Math.ceil(Lt.count/4),pe=kt%T.width,et=Math.floor(kt/T.width),Bt=re,Ct=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,pe),i.pixelStorei(o.UNPACK_SKIP_ROWS,et),i.texSubImage2D(o.TEXTURE_2D,0,pe,et,Bt,Ct,it,lt,T.data)}B.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,St),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(o.UNPACK_SKIP_ROWS,zt)}}function ht(B,T,it){let lt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(lt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(lt=o.TEXTURE_3D);const yt=ft(B,T),Nt=T.source;i.bindTexture(lt,B.__webglTexture,o.TEXTURE0+it);const Pt=s.get(Nt);if(Nt.version!==Pt.__version||yt===!0){if(i.activeTexture(o.TEXTURE0+it),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Ct=Fe.getPrimaries(Fe.workingColorSpace),Ht=T.colorSpace===Ps?null:Fe.getPrimaries(T.colorSpace),Zt=T.colorSpace===Ps||Ct===Ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt)}i.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment);let Tt=b(T.image,!1,l.maxTextureSize);Tt=Ve(T,Tt);const zt=c.convert(T.format,T.colorSpace),ee=c.convert(T.type);let It=w(T.internalFormat,zt,ee,T.normalized,T.colorSpace,T.isVideoTexture);Z(lt,T);let Lt;const kt=T.mipmaps,re=T.isVideoTexture!==!0,pe=Pt.__version===void 0||yt===!0,et=Nt.dataReady,Bt=D(T,Tt);if(T.isDepthTexture)It=N(T.format===pr,T.type),pe&&(re?i.texStorage2D(o.TEXTURE_2D,1,It,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,It,Tt.width,Tt.height,0,zt,ee,null));else if(T.isDataTexture)if(kt.length>0){re&&pe&&i.texStorage2D(o.TEXTURE_2D,Bt,It,kt[0].width,kt[0].height);for(let Ct=0,Ht=kt.length;Ct<Ht;Ct++)Lt=kt[Ct],re?et&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,Lt.width,Lt.height,zt,ee,Lt.data):i.texImage2D(o.TEXTURE_2D,Ct,It,Lt.width,Lt.height,0,zt,ee,Lt.data);T.generateMipmaps=!1}else re?(pe&&i.texStorage2D(o.TEXTURE_2D,Bt,It,Tt.width,Tt.height),et&&tt(T,Tt,zt,ee)):i.texImage2D(o.TEXTURE_2D,0,It,Tt.width,Tt.height,0,zt,ee,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){re&&pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,It,kt[0].width,kt[0].height,Tt.depth);for(let Ct=0,Ht=kt.length;Ct<Ht;Ct++)if(Lt=kt[Ct],T.format!==ea)if(zt!==null)if(re){if(et)if(T.layerUpdates.size>0){const Zt=M1(Lt.width,Lt.height,T.format,T.type);for(const Ut of T.layerUpdates){const se=Lt.data.subarray(Ut*Zt/Lt.data.BYTES_PER_ELEMENT,(Ut+1)*Zt/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,Ut,Lt.width,Lt.height,1,zt,se)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,0,Lt.width,Lt.height,Tt.depth,zt,Lt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ct,It,Lt.width,Lt.height,Tt.depth,0,Lt.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?et&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,0,Lt.width,Lt.height,Tt.depth,zt,ee,Lt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ct,It,Lt.width,Lt.height,Tt.depth,0,zt,ee,Lt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{re&&pe&&i.texStorage2D(o.TEXTURE_2D,Bt,It,kt[0].width,kt[0].height);for(let Ct=0,Ht=kt.length;Ct<Ht;Ct++)Lt=kt[Ct],T.format!==ea?zt!==null?re?et&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ct,0,0,Lt.width,Lt.height,zt,Lt.data):i.compressedTexImage2D(o.TEXTURE_2D,Ct,It,Lt.width,Lt.height,0,Lt.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?et&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,Lt.width,Lt.height,zt,ee,Lt.data):i.texImage2D(o.TEXTURE_2D,Ct,It,Lt.width,Lt.height,0,zt,ee,Lt.data)}else if(T.isDataArrayTexture)if(re){if(pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,It,Tt.width,Tt.height,Tt.depth),et)if(T.layerUpdates.size>0){const Ct=M1(Tt.width,Tt.height,T.format,T.type);for(const Ht of T.layerUpdates){const Zt=Tt.data.subarray(Ht*Ct/Tt.data.BYTES_PER_ELEMENT,(Ht+1)*Ct/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ht,Tt.width,Tt.height,1,zt,ee,Zt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,zt,ee,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,It,Tt.width,Tt.height,Tt.depth,0,zt,ee,Tt.data);else if(T.isData3DTexture)re?(pe&&i.texStorage3D(o.TEXTURE_3D,Bt,It,Tt.width,Tt.height,Tt.depth),et&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,zt,ee,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,It,Tt.width,Tt.height,Tt.depth,0,zt,ee,Tt.data);else if(T.isFramebufferTexture){if(pe)if(re)i.texStorage2D(o.TEXTURE_2D,Bt,It,Tt.width,Tt.height);else{let Ct=Tt.width,Ht=Tt.height;for(let Zt=0;Zt<Bt;Zt++)i.texImage2D(o.TEXTURE_2D,Zt,It,Ct,Ht,0,zt,ee,null),Ct>>=1,Ht>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in o){const Ct=o.canvas;if(Ct.hasAttribute("layoutsubtree")||Ct.setAttribute("layoutsubtree","true"),Tt.parentNode!==Ct){Ct.appendChild(Tt),_.add(T),Ct.onpaint=Ht=>{const Zt=Ht.changedElements;for(const Ut of _)Zt.includes(Ut.image)&&(Ut.needsUpdate=!0)},Ct.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Tt);else{const Zt=o.RGBA,Ut=o.RGBA,se=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Zt,Ut,se,Tt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(kt.length>0){if(re&&pe){const Ct=_e(kt[0]);i.texStorage2D(o.TEXTURE_2D,Bt,It,Ct.width,Ct.height)}for(let Ct=0,Ht=kt.length;Ct<Ht;Ct++)Lt=kt[Ct],re?et&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,zt,ee,Lt):i.texImage2D(o.TEXTURE_2D,Ct,It,zt,ee,Lt);T.generateMipmaps=!1}else if(re){if(pe){const Ct=_e(Tt);i.texStorage2D(o.TEXTURE_2D,Bt,It,Ct.width,Ct.height)}et&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,ee,Tt)}else i.texImage2D(o.TEXTURE_2D,0,It,zt,ee,Tt);y(T)&&L(lt),Pt.__version=Nt.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function xt(B,T,it){if(T.image.length!==6)return;const lt=ft(B,T),yt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,B.__webglTexture,o.TEXTURE0+it);const Nt=s.get(yt);if(yt.version!==Nt.__version||lt===!0){i.activeTexture(o.TEXTURE0+it);const Pt=Fe.getPrimaries(Fe.workingColorSpace),St=T.colorSpace===Ps?null:Fe.getPrimaries(T.colorSpace),Tt=T.colorSpace===Ps||Pt===St?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const zt=T.isCompressedTexture||T.image[0].isCompressedTexture,ee=T.image[0]&&T.image[0].isDataTexture,It=[];for(let Ut=0;Ut<6;Ut++)!zt&&!ee?It[Ut]=b(T.image[Ut],!0,l.maxCubemapSize):It[Ut]=ee?T.image[Ut].image:T.image[Ut],It[Ut]=Ve(T,It[Ut]);const Lt=It[0],kt=c.convert(T.format,T.colorSpace),re=c.convert(T.type),pe=w(T.internalFormat,kt,re,T.normalized,T.colorSpace),et=T.isVideoTexture!==!0,Bt=Nt.__version===void 0||lt===!0,Ct=yt.dataReady;let Ht=D(T,Lt);Z(o.TEXTURE_CUBE_MAP,T);let Zt;if(zt){et&&Bt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,pe,Lt.width,Lt.height);for(let Ut=0;Ut<6;Ut++){Zt=It[Ut].mipmaps;for(let se=0;se<Zt.length;se++){const Kt=Zt[se];T.format!==ea?kt!==null?et?Ct&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,se,0,0,Kt.width,Kt.height,kt,Kt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,se,pe,Kt.width,Kt.height,0,Kt.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,se,0,0,Kt.width,Kt.height,kt,re,Kt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,se,pe,Kt.width,Kt.height,0,kt,re,Kt.data)}}}else{if(Zt=T.mipmaps,et&&Bt){Zt.length>0&&Ht++;const Ut=_e(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,pe,Ut.width,Ut.height)}for(let Ut=0;Ut<6;Ut++)if(ee){et?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,0,0,It[Ut].width,It[Ut].height,kt,re,It[Ut].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,pe,It[Ut].width,It[Ut].height,0,kt,re,It[Ut].data);for(let se=0;se<Zt.length;se++){const Ie=Zt[se].image[Ut].image;et?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,se+1,0,0,Ie.width,Ie.height,kt,re,Ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,se+1,pe,Ie.width,Ie.height,0,kt,re,Ie.data)}}else{et?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,0,0,kt,re,It[Ut]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,pe,kt,re,It[Ut]);for(let se=0;se<Zt.length;se++){const Kt=Zt[se];et?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,se+1,0,0,kt,re,Kt.image[Ut]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,se+1,pe,kt,re,Kt.image[Ut])}}}y(T)&&L(o.TEXTURE_CUBE_MAP),Nt.__version=yt.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function j(B,T,it,lt,yt,Nt){const Pt=c.convert(it.format,it.colorSpace),St=c.convert(it.type),Tt=w(it.internalFormat,Pt,St,it.normalized,it.colorSpace),zt=s.get(T),ee=s.get(it);if(ee.__renderTarget=T,!zt.__hasExternalTextures){const It=Math.max(1,T.width>>Nt),Lt=Math.max(1,T.height>>Nt);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?i.texImage3D(yt,Nt,Tt,It,Lt,T.depth,0,Pt,St,null):i.texImage2D(yt,Nt,Tt,It,Lt,0,Pt,St,null)}i.bindFramebuffer(o.FRAMEBUFFER,B),Te(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,lt,yt,ee.__webglTexture,0,fe(T)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,lt,yt,ee.__webglTexture,Nt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function wt(B,T,it){if(o.bindRenderbuffer(o.RENDERBUFFER,B),T.depthBuffer){const lt=T.depthTexture,yt=lt&&lt.isDepthTexture?lt.type:null,Nt=N(T.stencilBuffer,yt),Pt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Te(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,fe(T),Nt,T.width,T.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,fe(T),Nt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Nt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,B)}else{const lt=T.textures;for(let yt=0;yt<lt.length;yt++){const Nt=lt[yt],Pt=c.convert(Nt.format,Nt.colorSpace),St=c.convert(Nt.type),Tt=w(Nt.internalFormat,Pt,St,Nt.normalized,Nt.colorSpace);Te(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,fe(T),Tt,T.width,T.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,fe(T),Tt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Tt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ae(B,T,it){const lt=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,B),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const yt=s.get(T.depthTexture);if(yt.__renderTarget=T,(!yt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),lt){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,T.depthTexture.addEventListener("dispose",U)),yt.__webglTexture===void 0){yt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,yt.__webglTexture),Z(o.TEXTURE_CUBE_MAP,T.depthTexture);const zt=c.convert(T.depthTexture.format),ee=c.convert(T.depthTexture.type);let It;T.depthTexture.format===Za?It=o.DEPTH_COMPONENT24:T.depthTexture.format===pr&&(It=o.DEPTH24_STENCIL8);for(let Lt=0;Lt<6;Lt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,It,T.width,T.height,0,zt,ee,null)}}else rt(T.depthTexture,0);const Nt=yt.__webglTexture,Pt=fe(T),St=lt?o.TEXTURE_CUBE_MAP_POSITIVE_X+it:o.TEXTURE_2D,Tt=T.depthTexture.format===pr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===Za)Te(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Tt,St,Nt,0,Pt):o.framebufferTexture2D(o.FRAMEBUFFER,Tt,St,Nt,0);else if(T.depthTexture.format===pr)Te(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Tt,St,Nt,0,Pt):o.framebufferTexture2D(o.FRAMEBUFFER,Tt,St,Nt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qt(B){const T=s.get(B),it=B.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==B.depthTexture){const lt=B.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),lt){const yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,lt.removeEventListener("dispose",yt)};lt.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=lt}if(B.depthTexture&&!T.__autoAllocateDepthBuffer)if(it)for(let lt=0;lt<6;lt++)ae(T.__webglFramebuffer[lt],B,lt);else{const lt=B.texture.mipmaps;lt&&lt.length>0?ae(T.__webglFramebuffer[0],B,0):ae(T.__webglFramebuffer,B,0)}else if(it){T.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[lt]),T.__webglDepthbuffer[lt]===void 0)T.__webglDepthbuffer[lt]=o.createRenderbuffer(),wt(T.__webglDepthbuffer[lt],B,!1);else{const yt=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=T.__webglDepthbuffer[lt];o.bindRenderbuffer(o.RENDERBUFFER,Nt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,Nt)}}else{const lt=B.texture.mipmaps;if(lt&&lt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),wt(T.__webglDepthbuffer,B,!1);else{const yt=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Nt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,Nt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function bt(B,T,it){const lt=s.get(B);T!==void 0&&j(lt.__webglFramebuffer,B,B.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&Qt(B)}function Dt(B){const T=B.texture,it=s.get(B),lt=s.get(T);B.addEventListener("dispose",E);const yt=B.textures,Nt=B.isWebGLCubeRenderTarget===!0,Pt=yt.length>1;if(Pt||(lt.__webglTexture===void 0&&(lt.__webglTexture=o.createTexture()),lt.__version=T.version,f.memory.textures++),Nt){it.__webglFramebuffer=[];for(let St=0;St<6;St++)if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer[St]=[];for(let Tt=0;Tt<T.mipmaps.length;Tt++)it.__webglFramebuffer[St][Tt]=o.createFramebuffer()}else it.__webglFramebuffer[St]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer=[];for(let St=0;St<T.mipmaps.length;St++)it.__webglFramebuffer[St]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let St=0,Tt=yt.length;St<Tt;St++){const zt=s.get(yt[St]);zt.__webglTexture===void 0&&(zt.__webglTexture=o.createTexture(),f.memory.textures++)}if(B.samples>0&&Te(B)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let St=0;St<yt.length;St++){const Tt=yt[St];it.__webglColorRenderbuffer[St]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[St]);const zt=c.convert(Tt.format,Tt.colorSpace),ee=c.convert(Tt.type),It=w(Tt.internalFormat,zt,ee,Tt.normalized,Tt.colorSpace,B.isXRRenderTarget===!0),Lt=fe(B);o.renderbufferStorageMultisample(o.RENDERBUFFER,Lt,It,B.width,B.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+St,o.RENDERBUFFER,it.__webglColorRenderbuffer[St])}o.bindRenderbuffer(o.RENDERBUFFER,null),B.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),wt(it.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Nt){i.bindTexture(o.TEXTURE_CUBE_MAP,lt.__webglTexture),Z(o.TEXTURE_CUBE_MAP,T);for(let St=0;St<6;St++)if(T.mipmaps&&T.mipmaps.length>0)for(let Tt=0;Tt<T.mipmaps.length;Tt++)j(it.__webglFramebuffer[St][Tt],B,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Tt);else j(it.__webglFramebuffer[St],B,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);y(T)&&L(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let St=0,Tt=yt.length;St<Tt;St++){const zt=yt[St],ee=s.get(zt);let It=o.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(It=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(It,ee.__webglTexture),Z(It,zt),j(it.__webglFramebuffer,B,zt,o.COLOR_ATTACHMENT0+St,It,0),y(zt)&&L(It)}i.unbindTexture()}else{let St=o.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(St=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(St,lt.__webglTexture),Z(St,T),T.mipmaps&&T.mipmaps.length>0)for(let Tt=0;Tt<T.mipmaps.length;Tt++)j(it.__webglFramebuffer[Tt],B,T,o.COLOR_ATTACHMENT0,St,Tt);else j(it.__webglFramebuffer,B,T,o.COLOR_ATTACHMENT0,St,0);y(T)&&L(St),i.unbindTexture()}B.depthBuffer&&Qt(B)}function Et(B){const T=B.textures;for(let it=0,lt=T.length;it<lt;it++){const yt=T[it];if(y(yt)){const Nt=I(B),Pt=s.get(yt).__webglTexture;i.bindTexture(Nt,Pt),L(Nt),i.unbindTexture()}}}const Ft=[],oe=[];function ve(B){if(B.samples>0){if(Te(B)===!1){const T=B.textures,it=B.width,lt=B.height;let yt=o.COLOR_BUFFER_BIT;const Nt=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=s.get(B),St=T.length>1;if(St)for(let zt=0;zt<T.length;zt++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Tt=B.texture.mipmaps;Tt&&Tt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let zt=0;zt<T.length;zt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),St){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[zt]);const ee=s.get(T[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ee,0)}o.blitFramebuffer(0,0,it,lt,0,0,it,lt,yt,o.NEAREST),p===!0&&(Ft.length=0,oe.length=0,Ft.push(o.COLOR_ATTACHMENT0+zt),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(Ft.push(Nt),oe.push(Nt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,oe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ft))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),St)for(let zt=0;zt<T.length;zt++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[zt]);const ee=s.get(T[zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,ee,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&p){const T=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function fe(B){return Math.min(l.maxSamples,B.samples)}function Te(B){const T=s.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Q(B){const T=f.render.frame;g.get(B)!==T&&(g.set(B,T),B.update())}function Ve(B,T){const it=B.colorSpace,lt=B.format,yt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||it!==yf&&it!==Ps&&(Fe.getTransfer(it)===Je?(lt!==ea||yt!==fi)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",it)),T}function _e(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(m.width=B.naturalWidth||B.width,m.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(m.width=B.displayWidth,m.height=B.displayHeight):(m.width=B.width,m.height=B.height),m}this.allocateTextureUnit=X,this.resetTextureUnits=q,this.getTextureUnits=k,this.setTextureUnits=W,this.setTexture2D=rt,this.setTexture2DArray=nt,this.setTexture3D=ct,this.setTextureCube=_t,this.rebindTextures=bt,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function CR(o,t){function i(s,l=Ps){let c;const f=Fe.getTransfer(l);if(s===fi)return o.UNSIGNED_BYTE;if(s===im)return o.UNSIGNED_SHORT_4_4_4_4;if(s===am)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Ty)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Ay)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===by)return o.BYTE;if(s===Ey)return o.SHORT;if(s===jl)return o.UNSIGNED_SHORT;if(s===nm)return o.INT;if(s===Ea)return o.UNSIGNED_INT;if(s===Sa)return o.FLOAT;if(s===ia)return o.HALF_FLOAT;if(s===wy)return o.ALPHA;if(s===Ry)return o.RGB;if(s===ea)return o.RGBA;if(s===Za)return o.DEPTH_COMPONENT;if(s===pr)return o.DEPTH_STENCIL;if(s===Cy)return o.RED;if(s===sm)return o.RED_INTEGER;if(s===xr)return o.RG;if(s===rm)return o.RG_INTEGER;if(s===om)return o.RGBA_INTEGER;if(s===lf||s===cf||s===uf||s===ff)if(f===Je)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===lf)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===cf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===uf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ff)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===lf)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===cf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===uf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ff)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===d0||s===p0||s===m0||s===g0)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===d0)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===p0)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===m0)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===g0)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===v0||s===_0||s===x0||s===y0||s===S0||s===_f||s===M0)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===v0||s===_0)return f===Je?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===x0)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===y0)return c.COMPRESSED_R11_EAC;if(s===S0)return c.COMPRESSED_SIGNED_R11_EAC;if(s===_f)return c.COMPRESSED_RG11_EAC;if(s===M0)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===b0||s===E0||s===T0||s===A0||s===w0||s===R0||s===C0||s===D0||s===N0||s===U0||s===L0||s===O0||s===P0||s===z0)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===b0)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===E0)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===T0)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===A0)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===w0)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===R0)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===C0)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===D0)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===N0)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===U0)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===L0)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===O0)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===P0)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===z0)return f===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===I0||s===B0||s===F0)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===I0)return f===Je?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===B0)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===F0)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===H0||s===G0||s===xf||s===V0)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===H0)return c.COMPRESSED_RED_RGTC1_EXT;if(s===G0)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===V0)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$l?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const DR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NR=`
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

}`;class UR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Hy(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new en({vertexShader:DR,fragmentShader:NR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ln(new Mr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LR extends yr{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,g=null,_=null,v=null,x=null,S=null;const A=typeof XRWebGLBinding<"u",b=new UR,y={},L=i.getContextAttributes();let I=null,w=null;const N=[],D=[],U=new ce;let E=null,O=null;const P=new $i;P.viewport=new an;const F=new $i;F.viewport=new an;const H=[P,F],q=new G2;let k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let tt=N[G];return tt===void 0&&(tt=new Mp,N[G]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(G){let tt=N[G];return tt===void 0&&(tt=new Mp,N[G]=tt),tt.getGripSpace()},this.getHand=function(G){let tt=N[G];return tt===void 0&&(tt=new Mp,N[G]=tt),tt.getHandSpace()};function X(G){const tt=D.indexOf(G.inputSource);if(tt===-1)return;const ht=N[tt];ht!==void 0&&(ht.update(G.inputSource,G.frame,m||f),ht.dispatchEvent({type:G.type,data:G.inputSource}))}function Y(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",Y),l.removeEventListener("inputsourceschange",rt);for(let G=0;G<N.length;G++){const tt=D[G];tt!==null&&(D[G]=null,N[G].disconnect(tt))}k=null,W=null,b.reset();for(const G in y)delete y[G];if(t.setRenderTarget(I),x=null,v=null,_=null,l=null,w=null,ft.stop(),s.isPresenting=!1,t.setPixelRatio(E),t.setSize(U.width,U.height,!1),O!==null){const G=O.camera;G.fov=O.fov,G.zoom=O.zoom,G.updateProjectionMatrix(),O=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){c=G,s.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){d=G,s.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(G){m=G},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return S},this.getSession=function(){return l},this.setSession=async function(G){if(l=G,l!==null){if(I=t.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",Y),l.addEventListener("inputsourceschange",rt),L.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(U),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,xt=null,j=null;L.depth&&(j=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ht=L.stencil?pr:Za,xt=L.stencil?$l:Ea);const wt={colorFormat:i.RGBA8,depthFormat:j,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(wt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),w=new Ti(v.textureWidth,v.textureHeight,{format:ea,type:fi,depthTexture:new nc(v.textureWidth,v.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const ht={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,i,ht),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new Ti(x.framebufferWidth,x.framebufferHeight,{format:ea,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),ft.setContext(l),ft.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function rt(G){for(let tt=0;tt<G.removed.length;tt++){const ht=G.removed[tt],xt=D.indexOf(ht);xt>=0&&(D[xt]=null,N[xt].disconnect(ht))}for(let tt=0;tt<G.added.length;tt++){const ht=G.added[tt];let xt=D.indexOf(ht);if(xt===-1){for(let wt=0;wt<N.length;wt++)if(wt>=D.length){D.push(ht),xt=wt;break}else if(D[wt]===null){D[wt]=ht,xt=wt;break}if(xt===-1)break}const j=N[xt];j&&j.connect(ht)}}const nt=new K,ct=new K;function _t(G,tt,ht){nt.setFromMatrixPosition(tt.matrixWorld),ct.setFromMatrixPosition(ht.matrixWorld);const xt=nt.distanceTo(ct),j=tt.projectionMatrix.elements,wt=ht.projectionMatrix.elements,ae=j[14]/(j[10]-1),Qt=j[14]/(j[10]+1),bt=(j[9]+1)/j[5],Dt=(j[9]-1)/j[5],Et=(j[8]-1)/j[0],Ft=(wt[8]+1)/wt[0],oe=ae*Et,ve=ae*Ft,fe=xt/(-Et+Ft),Te=fe*-Et;if(tt.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Te),G.translateZ(fe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),j[10]===-1)G.projectionMatrix.copy(tt.projectionMatrix),G.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Q=ae+fe,Ve=Qt+fe,_e=oe-Te,B=ve+(xt-Te),T=bt*Qt/Ve*Q,it=Dt*Qt/Ve*Q;G.projectionMatrix.makePerspective(_e,B,T,it,Q,Ve),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Ot(G,tt){tt===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(tt.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(l===null)return;let tt=G.near,ht=G.far;b.texture!==null&&(b.depthNear>0&&(tt=b.depthNear),b.depthFar>0&&(ht=b.depthFar)),q.near=F.near=P.near=tt,q.far=F.far=P.far=ht,(k!==q.near||W!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),k=q.near,W=q.far),q.layers.mask=G.layers.mask|6,P.layers.mask=q.layers.mask&-5,F.layers.mask=q.layers.mask&-3;const xt=G.parent,j=q.cameras;Ot(q,xt);for(let wt=0;wt<j.length;wt++)Ot(j[wt],xt);j.length===2?_t(q,P,F):q.projectionMatrix.copy(P.projectionMatrix),O===null&&G.isPerspectiveCamera&&(O={camera:G,fov:G.fov,zoom:G.zoom}),Mt(G,q,xt)};function Mt(G,tt,ht){ht===null?G.matrix.copy(tt.matrixWorld):(G.matrix.copy(ht.matrixWorld),G.matrix.invert(),G.matrix.multiply(tt.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(tt.projectionMatrix),G.projectionMatrixInverse.copy(tt.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=X0*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(v===null&&x===null))return p},this.setFoveation=function(G){p=G,v!==null&&(v.fixedFoveation=G),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=G)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(q)},this.getCameraTexture=function(G){return y[G]};let z=null;function Z(G,tt){if(g=tt.getViewerPose(m||f),S=tt,g!==null){const ht=g.views;x!==null&&(t.setRenderTargetFramebuffer(w,x.framebuffer),t.setRenderTarget(w));let xt=!1;ht.length!==q.cameras.length&&(q.cameras.length=0,xt=!0);for(let Qt=0;Qt<ht.length;Qt++){const bt=ht[Qt];let Dt=null;if(x!==null)Dt=x.getViewport(bt);else{const Ft=_.getViewSubImage(v,bt);Dt=Ft.viewport,Qt===0&&(t.setRenderTargetTextures(w,Ft.colorTexture,Ft.depthStencilTexture),t.setRenderTarget(w))}let Et=H[Qt];Et===void 0&&(Et=new $i,Et.layers.enable(Qt),Et.viewport=new an,H[Qt]=Et),Et.matrix.fromArray(bt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(bt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Qt===0&&(q.matrix.copy(Et.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),xt===!0&&q.cameras.push(Et)}const j=l.enabledFeatures;if(j&&j.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){_=s.getBinding();const Qt=_.getDepthInformation(ht[0]);Qt&&Qt.isValid&&Qt.texture&&b.init(Qt,l.renderState)}if(j&&j.includes("camera-access")&&A){t.state.unbindTexture(),_=s.getBinding();for(let Qt=0;Qt<ht.length;Qt++){const bt=ht[Qt].camera;if(bt){let Dt=y[bt];Dt||(Dt=new Hy,y[bt]=Dt);const Et=_.getCameraImage(bt);Dt.sourceTexture=Et}}}}for(let ht=0;ht<N.length;ht++){const xt=D[ht],j=N[ht];xt!==null&&j!==void 0&&j.update(xt,tt,m||f)}z&&z(G,tt),tt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:tt}),S=null}const ft=new Yy;ft.setAnimationLoop(Z),this.setAnimationLoop=function(G){z=G},this.dispose=function(){}}}const OR=new cn,tS=new ge;tS.set(-1,0,0,0,1,0,0,0,1);function PR(o,t){function i(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function s(b,y){y.color.getRGB(b.fogColor.value,Xy(o)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function l(b,y,L,I,w){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(b,y):y.isMeshLambertMaterial?(c(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(b,y),_(b,y)):y.isMeshPhongMaterial?(c(b,y),g(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(b,y),v(b,y),y.isMeshPhysicalMaterial&&x(b,y,w)):y.isMeshMatcapMaterial?(c(b,y),S(b,y)):y.isMeshDepthMaterial?c(b,y):y.isMeshDistanceMaterial?(c(b,y),A(b,y)):y.isMeshNormalMaterial?c(b,y):y.isLineBasicMaterial?(f(b,y),y.isLineDashedMaterial&&d(b,y)):y.isPointsMaterial?p(b,y,L,I):y.isSpriteMaterial?m(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,i(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===hi&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,i(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===hi&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,i(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,i(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const L=t.get(y),I=L.envMap,w=L.envMapRotation;I&&(b.envMap.value=I,b.envMapRotation.value.setFromMatrix4(OR.makeRotationFromEuler(w)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(tS),b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,b.aoMapTransform))}function f(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform))}function d(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function p(b,y,L,I){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*L,b.scale.value=I*.5,y.map&&(b.map.value=y.map,i(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function m(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function g(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function _(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function v(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function x(b,y,L){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===hi&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.retroreflectivity>0&&(b.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=L.texture,b.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,b.specularIntensityMapTransform))}function S(b,y){y.matcap&&(b.matcap.value=y.matcap)}function A(b,y){const L=t.get(y).light;b.referencePosition.value.setFromMatrixPosition(L.matrixWorld),b.nearDistance.value=L.shadow.camera.near,b.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function zR(o,t,i,s){let l={},c={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,N){const D=N.program;s.uniformBlockBinding(w,D)}function m(w,N){let D=l[w.id];D===void 0&&(b(w),D=g(w),l[w.id]=D,w.addEventListener("dispose",L));const U=N.program;s.updateUBOMapping(w,U);const E=t.render.frame;c[w.id]!==E&&(v(w),c[w.id]=E)}function g(w){const N=_();w.__bindingPointIndex=N;const D=o.createBuffer(),U=w.__size,E=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,U,E),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,D),D}function _(){for(let w=0;w<d;w++)if(f.indexOf(w)===-1)return f.push(w),w;return ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const N=l[w.id],D=w.uniforms,U=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let E=0,O=D.length;E<O;E++){const P=D[E];if(Array.isArray(P))for(let F=0,H=P.length;F<H;F++)x(P[F],E,F,U);else x(P,E,0,U)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(w,N,D,U){if(A(w,N,D,U)===!0){const E=w.__offset,O=w.value;if(Array.isArray(O)){let P=0;for(let F=0;F<O.length;F++){const H=O[F],q=y(H);S(H,w.__data,P),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(O,w.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,E,w.__data)}}function S(w,N,D){typeof w=="number"||typeof w=="boolean"?N[0]=w:w.isMatrix3?(N[0]=w.elements[0],N[1]=w.elements[1],N[2]=w.elements[2],N[3]=0,N[4]=w.elements[3],N[5]=w.elements[4],N[6]=w.elements[5],N[7]=0,N[8]=w.elements[6],N[9]=w.elements[7],N[10]=w.elements[8],N[11]=0):ArrayBuffer.isView(w)?N.set(new w.constructor(w.buffer,w.byteOffset,N.length)):w.toArray(N,D)}function A(w,N,D,U){const E=w.value,O=N+"_"+D;if(U[O]===void 0)return typeof E=="number"||typeof E=="boolean"?U[O]=E:ArrayBuffer.isView(E)?U[O]=E.slice():U[O]=E.clone(),!0;{const P=U[O];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return U[O]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(P.equals(E)===!1)return P.copy(E),!0}}return!1}function b(w){const N=w.uniforms;let D=0;const U=16;for(let O=0,P=N.length;O<P;O++){const F=Array.isArray(N[O])?N[O]:[N[O]];for(let H=0,q=F.length;H<q;H++){const k=F[H],W=Array.isArray(k.value)?k.value:[k.value];for(let X=0,Y=W.length;X<Y;X++){const rt=W[X],nt=y(rt),ct=D%U,_t=ct%nt.boundary,Ot=ct+_t;D+=_t,Ot!==0&&U-Ot<nt.storage&&(D+=U-Ot),k.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=D,D+=nt.storage}}}const E=D%U;return E>0&&(D+=U-E),w.__size=D,w.__cache={},this}function y(w){const N={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(N.boundary=4,N.storage=4):w.isVector2?(N.boundary=8,N.storage=8):w.isVector3||w.isColor?(N.boundary=16,N.storage=12):w.isVector4?(N.boundary=16,N.storage=16):w.isMatrix3?(N.boundary=48,N.storage=48):w.isMatrix4?(N.boundary=64,N.storage=64):w.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(N.boundary=16,N.storage=w.byteLength):he("WebGLRenderer: Unsupported uniform value type.",w),N}function L(w){const N=w.target;N.removeEventListener("dispose",L);const D=f.indexOf(N.__bindingPointIndex);f.splice(D,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function I(){for(const w in l)o.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:p,update:m,dispose:I}}const IR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xa=null;function BR(){return xa===null&&(xa=new a2(IR,16,16,xr,ia),xa.name="DFG_LUT",xa.minFilter=Un,xa.magFilter=Un,xa.wrapS=Ya,xa.wrapT=Ya,xa.generateMipmaps=!1,xa.needsUpdate=!0),xa}class FR{constructor(t={}){const{canvas:i=OE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=fi}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=f;const A=x,b=new Set([om,rm,sm]),y=new Set([fi,Ea,jl,$l,im,am]),L=new Uint32Array(4),I=new Int32Array(4),w=new K;let N=null,D=null;const U=[],E=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ba,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let F=!1,H=null,q=null,k=null,W=null;this._outputColorSpace=ni;let X=0,Y=0,rt=null,nt=-1,ct=null;const _t=new an,Ot=new an;let Mt=null;const z=new ze(0);let Z=0,ft=i.width,G=i.height,tt=1,ht=null,xt=null;const j=new an(0,0,ft,G),wt=new an(0,0,ft,G);let ae=!1;const Qt=new hm;let bt=!1,Dt=!1;const Et=new cn,Ft=new K,oe=new an,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function Te(){return rt===null?tt:1}let Q=s;function Ve(R,J){return i.getContext(R,J)}let _e,B,T,it,lt,yt,Nt,Pt,St,Tt,zt,ee,It,Lt,kt,re,pe,et,Bt,Ct,Ht,Zt,Ut;try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${tm}`),i.addEventListener("webglcontextlost",Ie,!1),i.addEventListener("webglcontextrestored",xe,!1),i.addEventListener("webglcontextcreationerror",di,!1),Q===null){const J="webgl2";if(Q=Ve(J,R),Q===null)throw Ve(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}se()}catch(R){throw i.removeEventListener("webglcontextlost",Ie,!1),i.removeEventListener("webglcontextrestored",xe,!1),i.removeEventListener("webglcontextcreationerror",di,!1),ke("WebGLRenderer: "+R.message),R}function se(){_e=new BA(Q),_e.init(),Ht=new CR(Q,_e),B=new RA(Q,_e,t,Ht),T=new wR(Q,_e),B.reversedDepthBuffer&&v&&T.buffers.depth.setReversed(!0),q=Q.createFramebuffer(),k=Q.createFramebuffer(),W=Q.createFramebuffer(),it=new GA(Q),lt=new dR,yt=new RR(Q,_e,T,lt,B,Ht,it),Nt=new IA(P),Pt=new k2(Q),Zt=new AA(Q,Pt),St=new FA(Q,Pt,it,Zt),Tt=new kA(Q,St,Pt,Zt,it),et=new VA(Q,B,yt),kt=new CA(lt),zt=new hR(P,Nt,_e,B,Zt,kt),ee=new PR(P,lt),It=new mR,Lt=new SR(_e),pe=new TA(P,Nt,T,Tt,S,p),re=new AR(P,Tt,B),Ut=new zR(Q,it,B,T),Bt=new wA(Q,_e,it),Ct=new HA(Q,_e,it),it.programs=zt.programs,P.capabilities=B,P.extensions=_e,P.properties=lt,P.renderLists=It,P.shadowMap=re,P.state=T,P.info=it}A!==fi&&(O=new qA(A,i.width,i.height,d,l,c));const Kt=new LR(P,Q);this.xr=Kt,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const R=_e.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=_e.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(R){R!==void 0&&(tt=R,this.setSize(ft,G,!1))},this.getSize=function(R){return R.set(ft,G)},this.setSize=function(R,J,vt=!0){if(Kt.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=R,G=J,i.width=Math.floor(R*tt),i.height=Math.floor(J*tt),vt===!0&&(i.style.width=R+"px",i.style.height=J+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,R,J)},this.getDrawingBufferSize=function(R){return R.set(ft*tt,G*tt).floor()},this.setDrawingBufferSize=function(R,J,vt){ft=R,G=J,tt=vt,i.width=Math.floor(R*vt),i.height=Math.floor(J*vt),this.setViewport(0,0,R,J)},this.setEffects=function(R){if(A===fi){ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let J=0;J<R.length;J++)if(R[J].isOutputPass===!0){he("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(_t)},this.getViewport=function(R){return R.copy(j)},this.setViewport=function(R,J,vt,dt){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,J,vt,dt),T.viewport(_t.copy(j).multiplyScalar(tt).round())},this.getScissor=function(R){return R.copy(wt)},this.setScissor=function(R,J,vt,dt){R.isVector4?wt.set(R.x,R.y,R.z,R.w):wt.set(R,J,vt,dt),T.scissor(Ot.copy(wt).multiplyScalar(tt).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(R){T.setScissorTest(ae=R)},this.setOpaqueSort=function(R){ht=R},this.setTransparentSort=function(R){xt=R},this.getClearColor=function(R){return R.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(R=!0,J=!0,vt=!0){let dt=0;if(R){let pt=!1;if(rt!==null){const qt=rt.texture.format;pt=b.has(qt)}if(pt){const qt=rt.texture.type,Jt=y.has(qt),Gt=pe.getClearColor(),te=pe.getClearAlpha(),ne=Gt.r,de=Gt.g,ye=Gt.b;Jt?(L[0]=ne,L[1]=de,L[2]=ye,L[3]=te,Q.clearBufferuiv(Q.COLOR,0,L)):(I[0]=ne,I[1]=de,I[2]=ye,I[3]=te,Q.clearBufferiv(Q.COLOR,0,I))}else dt|=Q.COLOR_BUFFER_BIT}J&&(dt|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),vt&&(dt|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),dt!==0&&Q.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),H=R},this.dispose=function(){i.removeEventListener("webglcontextlost",Ie,!1),i.removeEventListener("webglcontextrestored",xe,!1),i.removeEventListener("webglcontextcreationerror",di,!1),pe.dispose(),It.dispose(),Lt.dispose(),lt.dispose(),Nt.dispose(),Tt.dispose(),Zt.dispose(),Ut.dispose(),zt.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",Gs),Kt.removeEventListener("sessionend",$a),aa.stop()};function Ie(R){R.preventDefault(),qx("WebGLRenderer: Context Lost."),F=!0}function xe(){qx("WebGLRenderer: Context Restored."),F=!1;const R=it.autoReset,J=re.enabled,vt=re.autoUpdate,dt=re.needsUpdate,pt=re.type;se(),it.autoReset=R,re.enabled=J,re.autoUpdate=vt,re.needsUpdate=dt,re.type=pt}function di(R){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ri(R){const J=R.target;J.removeEventListener("dispose",Ri),Lf(J)}function Lf(R){br(R),lt.remove(R)}function br(R){const J=lt.get(R).programs;J!==void 0&&(J.forEach(function(vt){zt.releaseProgram(vt)}),R.isShaderMaterial&&zt.releaseShaderCache(R))}this.renderBufferDirect=function(R,J,vt,dt,pt,qt){J===null&&(J=ve);const Jt=pt.isMesh&&pt.matrixWorld.determinantAffine()<0,Gt=ko(R,J,vt,dt,pt);T.setMaterial(dt,Jt);let te=vt.index,ne=1;if(dt.wireframe===!0){if(te=St.getWireframeAttribute(vt),te===void 0)return;ne=2}const de=vt.drawRange,ye=vt.attributes.position;let jt=de.start*ne,Ce=(de.start+de.count)*ne;qt!==null&&(jt=Math.max(jt,qt.start*ne),Ce=Math.min(Ce,(qt.start+qt.count)*ne)),te!==null?(jt=Math.max(jt,0),Ce=Math.min(Ce,te.count)):ye!=null&&(jt=Math.max(jt,0),Ce=Math.min(Ce,ye.count));const Ae=Ce-jt;if(Ae<0||Ae===1/0)return;Zt.setup(pt,dt,Gt,vt,te);let $e,We=Bt;if(te!==null&&($e=Pt.get(te),We=Ct,We.setIndex($e)),pt.isMesh)dt.wireframe===!0?(T.setLineWidth(dt.wireframeLinewidth*Te()),We.setMode(Q.LINES)):We.setMode(Q.TRIANGLES);else if(pt.isLine){let En=dt.linewidth;En===void 0&&(En=1),T.setLineWidth(En*Te()),pt.isLineSegments?We.setMode(Q.LINES):pt.isLineLoop?We.setMode(Q.LINE_LOOP):We.setMode(Q.LINE_STRIP)}else pt.isPoints?We.setMode(Q.POINTS):pt.isSprite&&We.setMode(Q.TRIANGLES);if(pt.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))We.renderMultiDraw(pt._multiDrawStarts,pt._multiDrawCounts,pt._multiDrawCount);else{const En=pt._multiDrawStarts,Wt=pt._multiDrawCounts,dn=pt._multiDrawCount,Be=te?Pt.get(te).bytesPerElement:1,Qn=lt.get(dt).currentProgram.getUniforms();for(let pi=0;pi<dn;pi++)Qn.setValue(Q,"_gl_DrawID",pi),We.render(En[pi]/Be,Wt[pi])}else if(pt.isInstancedMesh)We.renderInstances(jt,Ae,pt.count);else if(vt.isInstancedBufferGeometry){const En=vt._maxInstanceCount!==void 0?vt._maxInstanceCount:1/0,Wt=Math.min(vt.instanceCount,En);We.renderInstances(jt,Ae,Wt)}else We.render(jt,Ae)};function Hs(R,J,vt,dt){H!==null&&R.isNodeMaterial&&H.setObject(dt,R),bt===!0&&kt.setState(R,vt,!1),R.transparent===!0&&R.side===Hi&&R.forceSinglePass===!1?(R.side=hi,R.needsUpdate=!0,Vs(R,J,dt),R.side=vr,R.needsUpdate=!0,Vs(R,J,dt),R.side=Hi):Vs(R,J,dt)}this.compile=function(R,J,vt=null){vt===null&&(vt=R),H!==null&&H.renderStart(R,J,vt),D=Lt.get(vt),D.init(J),E.push(D),vt.traverseVisible(function(pt){pt.isLight&&pt.layers.test(J.layers)&&(D.pushLight(pt),pt.castShadow&&D.pushShadow(pt))}),R!==vt&&R.traverseVisible(function(pt){pt.isLight&&pt.layers.test(J.layers)&&(D.pushLight(pt),pt.castShadow&&D.pushShadow(pt))}),D.setupLights(),H!==null&&H.updateLights(D.state.lightsArray),Dt=this.localClippingEnabled,bt=kt.init(this.clippingPlanes,Dt),bt===!0&&kt.setGlobalState(this.clippingPlanes,J),H!==null&&re.render(D.state.shadowsArray,vt,J);const dt=new Set;return R.traverse(function(pt){if(!(pt.isMesh||pt.isPoints||pt.isLine||pt.isSprite))return;const qt=pt.material;if(qt)if(Array.isArray(qt))for(let Jt=0;Jt<qt.length;Jt++){const Gt=qt[Jt];Hs(Gt,vt,J,pt),dt.add(Gt)}else Hs(qt,vt,J,pt),dt.add(qt)}),D=E.pop(),H!==null&&H.renderEnd(),dt},this.compileAsync=function(R,J,vt=null){const dt=this.compile(R,J,vt);return new Promise(pt=>{function qt(){if(dt.forEach(function(Jt){const te=lt.get(Jt).currentProgram;(te===void 0||te.isReady())&&dt.delete(Jt)}),dt.size===0){pt(R);return}setTimeout(qt,10)}_e.get("KHR_parallel_shader_compile")!==null?qt():setTimeout(qt,10)})};let ja=null;function Ta(R){ja&&ja(R)}function Gs(){aa.stop()}function $a(){aa.start()}const aa=new Yy;aa.setAnimationLoop(Ta),typeof self<"u"&&aa.setContext(self),this.setAnimationLoop=function(R){ja=R,Kt.setAnimationLoop(R),R===null?aa.stop():aa.start()},Kt.addEventListener("sessionstart",Gs),Kt.addEventListener("sessionend",$a),this.render=function(R,J){if(J!==void 0&&J.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;H!==null&&H.renderStart(R,J);const vt=Kt.enabled===!0&&Kt.isPresenting===!0,dt=O!==null&&(rt===null||vt)&&O.begin(P,rt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(J),J=Kt.getCamera()),R.isScene===!0&&R.onBeforeRender(P,R,J,rt),D=Lt.get(R,E.length),D.init(J),D.state.textureUnits=yt.getTextureUnits(),E.push(D),Et.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Qt.setFromProjectionMatrix(Et,Ma,J.reversedDepth),Dt=this.localClippingEnabled,bt=kt.init(this.clippingPlanes,Dt),N=It.get(R,U.length),N.init(),U.push(N),Kt.enabled===!0&&Kt.isPresenting===!0){const Jt=P.xr.getDepthSensingMesh();Jt!==null&&Bo(Jt,J,-1/0,P.sortObjects)}Bo(R,J,0,P.sortObjects),N.finish(),H!==null&&H.updateLights(D.state.lightsArray),P.sortObjects===!0&&N.sort(ht,xt),fe=Kt.enabled===!1||Kt.isPresenting===!1||Kt.hasDepthSensing()===!1,fe&&pe.addToRenderList(N,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),bt===!0&&kt.beginShadows();const pt=D.state.shadowsArray;if(re.render(pt,R,J),bt===!0&&kt.endShadows(),(dt&&O.hasRenderPass())===!1){const Jt=N.opaque,Gt=N.transmissive;if(D.setupLights(),J.isArrayCamera){const te=J.cameras;if(Gt.length>0)for(let ne=0,de=te.length;ne<de;ne++){const ye=te[ne];Er(Jt,Gt,R,ye)}fe&&pe.render(R);for(let ne=0,de=te.length;ne<de;ne++){const ye=te[ne];Fo(N,R,ye,ye.viewport)}}else Gt.length>0&&Er(Jt,Gt,R,J),fe&&pe.render(R),Fo(N,R,J)}rt!==null&&Y===0&&(yt.updateMultisampleRenderTarget(rt),yt.updateRenderTargetMipmap(rt)),dt&&O.end(P),R.isScene===!0&&R.onAfterRender(P,R,J),Zt.resetDefaultState(),nt=-1,ct=null,E.pop(),E.length>0?(D=E[E.length-1],yt.setTextureUnits(D.state.textureUnits),bt===!0&&kt.setGlobalState(P.clippingPlanes,D.state.camera)):D=null,U.pop(),U.length>0?N=U[U.length-1]:N=null,H!==null&&H.renderEnd()};function Bo(R,J,vt,dt){if(R.visible===!1)return;if(R.layers.test(J.layers)){if(R.isGroup)vt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(J);else if(R.isLightProbeGrid)D.pushLightProbeGrid(R);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(Qt)){dt&&oe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Et);const Jt=Tt.update(R),Gt=R.material;Gt.visible&&N.push(R,Jt,Gt,vt,oe.z,null,J)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(Qt))){const Jt=Tt.update(R),Gt=R.material;if(dt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),oe.copy(R.boundingSphere.center)):(Jt.boundingSphere===null&&Jt.computeBoundingSphere(),oe.copy(Jt.boundingSphere.center)),oe.applyMatrix4(R.matrixWorld).applyMatrix4(Et)),Array.isArray(Gt)){const te=Jt.groups;for(let ne=0,de=te.length;ne<de;ne++){const ye=te[ne],jt=Gt[ye.materialIndex];jt&&jt.visible&&N.push(R,Jt,jt,vt,oe.z,ye,J)}}else Gt.visible&&N.push(R,Jt,Gt,vt,oe.z,null,J)}}const qt=R.children;for(let Jt=0,Gt=qt.length;Jt<Gt;Jt++)Bo(qt[Jt],J,vt,dt)}function Fo(R,J,vt,dt){const{opaque:pt,transmissive:qt,transparent:Jt}=R;D.setupLightsView(vt),bt===!0&&kt.setGlobalState(P.clippingPlanes,vt),dt&&T.viewport(_t.copy(dt)),pt.length>0&&sa(pt,J,vt),qt.length>0&&sa(qt,J,vt),Jt.length>0&&sa(Jt,J,vt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Er(R,J,vt,dt){if((vt.isScene===!0?vt.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[dt.id]===void 0){const jt=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[dt.id]=new Ti(1,1,{generateMipmaps:!0,type:jt?ia:fi,minFilter:Is,samples:Math.max(4,B.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Fe.workingColorSpace})}const qt=D.state.transmissionRenderTarget[dt.id],Jt=dt.viewport||_t;qt.setSize(Jt.z*P.transmissionResolutionScale,Jt.w*P.transmissionResolutionScale);const Gt=P.getRenderTarget(),te=P.getActiveCubeFace(),ne=P.getActiveMipmapLevel();P.setRenderTarget(qt),P.getClearColor(z),Z=P.getClearAlpha(),Z<1&&P.setClearColor(16777215,.5),P.clear(),fe&&pe.render(vt);const de=P.toneMapping;P.toneMapping=ba;const ye=dt.viewport;if(dt.viewport!==void 0&&(dt.viewport=void 0),D.setupLightsView(dt),bt===!0&&kt.setGlobalState(P.clippingPlanes,dt),sa(R,vt,dt),yt.updateMultisampleRenderTarget(qt),yt.updateRenderTargetMipmap(qt),_e.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Ce=0,Ae=J.length;Ce<Ae;Ce++){const $e=J[Ce],{object:We,geometry:En,material:Wt,group:dn}=$e;if(Wt.side===Hi&&We.layers.test(dt.layers)){const Be=Wt.side;Wt.side=hi,Wt.needsUpdate=!0,rc(We,vt,dt,En,Wt,dn),Wt.side=Be,Wt.needsUpdate=!0,jt=!0}}jt===!0&&(yt.updateMultisampleRenderTarget(qt),yt.updateRenderTargetMipmap(qt))}P.setRenderTarget(Gt,te,ne),P.setClearColor(z,Z),ye!==void 0&&(dt.viewport=ye),P.toneMapping=de}function sa(R,J,vt){const dt=J.isScene===!0?J.overrideMaterial:null;for(let pt=0,qt=R.length;pt<qt;pt++){const Jt=R[pt],{object:Gt,geometry:te,group:ne}=Jt;let de=Jt.material;de.allowOverride===!0&&dt!==null&&(de=dt),Gt.layers.test(vt.layers)&&rc(Gt,J,vt,te,de,ne)}}function rc(R,J,vt,dt,pt,qt){H!==null&&pt.isNodeMaterial&&H.setObject(R,pt),R.onBeforeRender(P,J,vt,dt,pt,qt),R.modelViewMatrix.multiplyMatrices(vt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),pt.onBeforeRender(P,J,vt,dt,R,qt),pt.transparent===!0&&pt.side===Hi&&pt.forceSinglePass===!1?(pt.side=hi,pt.needsUpdate=!0,P.renderBufferDirect(vt,J,dt,pt,R,qt),pt.side=vr,pt.needsUpdate=!0,P.renderBufferDirect(vt,J,dt,pt,R,qt),pt.side=Hi):P.renderBufferDirect(vt,J,dt,pt,R,qt),R.onAfterRender(P,J,vt,dt,pt,qt)}function Vs(R,J,vt){J.isScene!==!0&&(J=ve);const dt=lt.get(R),pt=D.state.lights,qt=D.state.shadowsArray,Jt=pt.state.version,Gt=zt.getParameters(R,pt.state,qt,J,vt,D.state.lightProbeGridArray),te=zt.getProgramCacheKey(Gt);let ne=dt.programs;dt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?J.environment:null,dt.fog=J.fog;const de=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;dt.envMap=Nt.get(R.envMap||dt.environment,de),dt.envMapRotation=dt.environment!==null&&R.envMap===null?J.environmentRotation:R.envMapRotation,ne===void 0&&(R.addEventListener("dispose",Ri),ne=new Map,dt.programs=ne);let ye=ne.get(te);if(ye!==void 0){if(dt.currentProgram===ye&&dt.lightsStateVersion===Jt)return Go(R,Gt),ye}else Gt.uniforms=zt.getUniforms(R),H!==null&&R.isNodeMaterial&&H.build(R,vt,Gt),R.onBeforeCompile(Gt,P),ye=zt.acquireProgram(Gt,te),ne.set(te,ye),dt.uniforms=Gt.uniforms;const jt=dt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(jt.clippingPlanes=kt.uniform),Go(R,Gt),dt.needsLights=lc(R),dt.lightsStateVersion=Jt,dt.needsLights&&(jt.ambientLightColor.value=pt.state.ambient,jt.lightProbe.value=pt.state.probe,jt.sunLights.value=pt.state.sun,jt.sunLightShadows.value=pt.state.sunShadow,jt.directionalLights.value=pt.state.directional,jt.directionalLightShadows.value=pt.state.directionalShadow,jt.spotLights.value=pt.state.spot,jt.spotLightShadows.value=pt.state.spotShadow,jt.rectAreaLights.value=pt.state.rectArea,jt.ltc_1.value=pt.state.rectAreaLTC1,jt.ltc_2.value=pt.state.rectAreaLTC2,jt.pointLights.value=pt.state.point,jt.pointLightShadows.value=pt.state.pointShadow,jt.hemisphereLights.value=pt.state.hemi,jt.sunShadowMatrix.value=pt.state.sunShadowMatrix,jt.sunShadowCascade.value=pt.state.sunShadowCascade,jt.directionalShadowMatrix.value=pt.state.directionalShadowMatrix,jt.spotLightMatrix.value=pt.state.spotLightMatrix,jt.spotLightMap.value=pt.state.spotLightMap,jt.pointShadowMatrix.value=pt.state.pointShadowMatrix),dt.lightProbeGrid=D.state.lightProbeGridArray.length>0,dt.currentProgram=ye,dt.uniformsList=null,ye}function Ho(R){if(R.uniformsList===null){const J=R.currentProgram.getUniforms();R.uniformsList=hf.seqWithValue(J.seq,R.uniforms)}return R.uniformsList}function Go(R,J){const vt=lt.get(R);vt.outputColorSpace=J.outputColorSpace,vt.batching=J.batching,vt.batchingColor=J.batchingColor,vt.instancing=J.instancing,vt.instancingColor=J.instancingColor,vt.instancingMorph=J.instancingMorph,vt.skinning=J.skinning,vt.morphTargets=J.morphTargets,vt.morphNormals=J.morphNormals,vt.morphColors=J.morphColors,vt.morphTargetsCount=J.morphTargetsCount,vt.numClippingPlanes=J.numClippingPlanes,vt.numIntersection=J.numClipIntersection,vt.vertexAlphas=J.vertexAlphas,vt.vertexTangents=J.vertexTangents,vt.toneMapping=J.toneMapping}function Vo(R,J){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;w.setFromMatrixPosition(J.matrixWorld);for(let vt=0,dt=R.length;vt<dt;vt++){const pt=R[vt];if(pt.texture!==null&&pt.boundingBox.containsPoint(w))return pt}return null}function ko(R,J,vt,dt,pt){J.isScene!==!0&&(J=ve),yt.resetTextureUnits();const qt=J.fog,Jt=dt.isMeshStandardMaterial||dt.isMeshLambertMaterial||dt.isMeshPhongMaterial?J.environment:null,Gt=rt===null?P.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Fe.workingColorSpace,te=dt.isMeshStandardMaterial||dt.isMeshLambertMaterial&&!dt.envMap||dt.isMeshPhongMaterial&&!dt.envMap,ne=Nt.get(dt.envMap||Jt,te),de=dt.vertexColors===!0&&!!vt.attributes.color&&vt.attributes.color.itemSize===4,ye=!!vt.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),jt=!!vt.morphAttributes.position,Ce=!!vt.morphAttributes.normal,Ae=!!vt.morphAttributes.color;let $e=ba;dt.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&($e=P.toneMapping);const We=vt.morphAttributes.position||vt.morphAttributes.normal||vt.morphAttributes.color,En=We!==void 0?We.length:0,Wt=lt.get(dt),dn=D.state.lights;if(bt===!0&&(Dt===!0||R!==ct)){const Le=R===ct&&dt.id===nt;kt.setState(dt,R,Le)}let Be=!1;dt.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==dn.state.version||Wt.outputColorSpace!==Gt||pt.isBatchedMesh&&Wt.batching===!1||!pt.isBatchedMesh&&Wt.batching===!0||pt.isBatchedMesh&&Wt.batchingColor===!0&&pt._colorsTexture===null||pt.isBatchedMesh&&Wt.batchingColor===!1&&pt._colorsTexture!==null||pt.isInstancedMesh&&Wt.instancing===!1||!pt.isInstancedMesh&&Wt.instancing===!0||pt.isSkinnedMesh&&Wt.skinning===!1||!pt.isSkinnedMesh&&Wt.skinning===!0||pt.isInstancedMesh&&Wt.instancingColor===!0&&pt.instanceColor===null||pt.isInstancedMesh&&Wt.instancingColor===!1&&pt.instanceColor!==null||pt.isInstancedMesh&&Wt.instancingMorph===!0&&pt.morphTexture===null||pt.isInstancedMesh&&Wt.instancingMorph===!1&&pt.morphTexture!==null||Wt.envMap!==ne||dt.fog===!0&&Wt.fog!==qt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==kt.numPlanes||Wt.numIntersection!==kt.numIntersection)||Wt.vertexAlphas!==de||Wt.vertexTangents!==ye||Wt.morphTargets!==jt||Wt.morphNormals!==Ce||Wt.morphColors!==Ae||Wt.toneMapping!==$e||Wt.morphTargetsCount!==En||!!Wt.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Be=!0):(Be=!0,Wt.__version=dt.version);let Qn=Wt.currentProgram;Be===!0&&(Qn=Vs(dt,J,pt),H&&dt.isNodeMaterial&&H.onUpdateProgram(dt,Qn,Wt));let pi=!1,ra=!1,we=!1;const Xe=Qn.getUniforms(),sn=Wt.uniforms;if(T.useProgram(Qn.program)&&(pi=!0,ra=!0,we=!0),dt.id!==nt&&(nt=dt.id,ra=!0),Wt.needsLights){const Le=Vo(D.state.lightProbeGridArray,pt);Wt.lightProbeGrid!==Le&&(Wt.lightProbeGrid=Le,ra=!0)}if(pi||ct!==R){T.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Xe.setValue(Q,"projectionMatrix",R.projectionMatrix),Xe.setValue(Q,"viewMatrix",R.matrixWorldInverse);const pn=Xe.map.cameraPosition;pn!==void 0&&pn.setValue(Q,Ft.setFromMatrixPosition(R.matrixWorld)),B.logarithmicDepthBuffer&&Xe.setValue(Q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&Xe.setValue(Q,"isOrthographic",R.isOrthographicCamera===!0),ct!==R&&(ct=R,ra=!0,we=!0)}if(Wt.needsLights&&(dn.state.sunShadowMap.length>0&&Xe.setValue(Q,"sunShadowMap",dn.state.sunShadowMap,yt),dn.state.directionalShadowMap.length>0&&Xe.setValue(Q,"directionalShadowMap",dn.state.directionalShadowMap,yt),dn.state.spotShadowMap.length>0&&Xe.setValue(Q,"spotShadowMap",dn.state.spotShadowMap,yt),dn.state.pointShadowMap.length>0&&Xe.setValue(Q,"pointShadowMap",dn.state.pointShadowMap,yt)),pt.isSkinnedMesh){Xe.setOptional(Q,pt,"bindMatrix"),Xe.setOptional(Q,pt,"bindMatrixInverse");const Le=pt.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),Xe.setValue(Q,"boneTexture",Le.boneTexture,yt))}pt.isBatchedMesh&&(Xe.setOptional(Q,pt,"batchingTexture"),Xe.setValue(Q,"batchingTexture",pt._matricesTexture,yt),Xe.setOptional(Q,pt,"batchingIdTexture"),Xe.setValue(Q,"batchingIdTexture",pt._indirectTexture,yt),Xe.setOptional(Q,pt,"batchingColorTexture"),pt._colorsTexture!==null&&Xe.setValue(Q,"batchingColorTexture",pt._colorsTexture,yt));const mi=vt.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&et.update(pt,vt,Qn),(ra||Wt.receiveShadow!==pt.receiveShadow)&&(Wt.receiveShadow=pt.receiveShadow,Xe.setValue(Q,"receiveShadow",pt.receiveShadow)),(dt.isMeshStandardMaterial||dt.isMeshLambertMaterial||dt.isMeshPhongMaterial)&&dt.envMap===null&&J.environment!==null&&(sn.envMapIntensity.value=J.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=BR()),ra){if(Xe.setValue(Q,"toneMappingExposure",P.toneMappingExposure),Wt.needsLights&&oc(sn,we),qt&&dt.fog===!0&&ee.refreshFogUniforms(sn,qt),ee.refreshMaterialUniforms(sn,dt,tt,G,D.state.transmissionRenderTarget[R.id]),Wt.needsLights&&Wt.lightProbeGrid){const Le=Wt.lightProbeGrid;sn.probesSH.value=Le.texture,sn.probesMin.value.copy(Le.boundingBox.min),sn.probesMax.value.copy(Le.boundingBox.max),sn.probesResolution.value.copy(Le.resolution)}hf.upload(Q,Ho(Wt),sn,yt)}if(dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(hf.upload(Q,Ho(Wt),sn,yt),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&Xe.setValue(Q,"center",pt.center),Xe.setValue(Q,"modelViewMatrix",pt.modelViewMatrix),Xe.setValue(Q,"normalMatrix",pt.normalMatrix),Xe.setValue(Q,"modelMatrix",pt.matrixWorld),dt.uniformsGroups!==void 0){const Le=dt.uniformsGroups;for(let pn=0,Aa=Le.length;pn<Aa;pn++){const cc=Le[pn];Ut.update(cc,Qn),Ut.bind(cc,Qn)}}return Qn}function oc(R,J){R.ambientLightColor.needsUpdate=J,R.lightProbe.needsUpdate=J,R.sunLights.needsUpdate=J,R.sunLightShadows.needsUpdate=J,R.directionalLights.needsUpdate=J,R.directionalLightShadows.needsUpdate=J,R.pointLights.needsUpdate=J,R.pointLightShadows.needsUpdate=J,R.spotLights.needsUpdate=J,R.spotLightShadows.needsUpdate=J,R.rectAreaLights.needsUpdate=J,R.hemisphereLights.needsUpdate=J}function lc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(R,J,vt){const dt=lt.get(R);dt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,dt.__autoAllocateDepthBuffer===!1&&(dt.__useRenderToTexture=!1),lt.get(R.texture).__webglTexture=J,lt.get(R.depthTexture).__webglTexture=dt.__autoAllocateDepthBuffer?void 0:vt,dt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,J){const vt=lt.get(R);vt.__webglFramebuffer=J,vt.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(R,J=0,vt=0){rt=R,X=J,Y=vt;let dt=null,pt=!1,qt=!1;if(R){const Gt=lt.get(R);if(Gt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(Q.FRAMEBUFFER,Gt.__webglFramebuffer),_t.copy(R.viewport),Ot.copy(R.scissor),Mt=R.scissorTest,T.viewport(_t),T.scissor(Ot),T.setScissorTest(Mt),nt=-1;return}else if(Gt.__webglFramebuffer===void 0)yt.setupRenderTarget(R);else if(Gt.__hasExternalTextures)yt.rebindTextures(R,lt.get(R.texture).__webglTexture,lt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const de=R.depthTexture;if(Gt.__boundDepthTexture!==de){if(de!==null&&lt.has(de)&&(R.width!==de.image.width||R.height!==de.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");yt.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(qt=!0);const ne=lt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ne[J])?dt=ne[J][vt]:dt=ne[J],pt=!0):R.samples>0&&yt.useMultisampledRTT(R)===!1?dt=lt.get(R).__webglMultisampledFramebuffer:Array.isArray(ne)?dt=ne[vt]:dt=ne,_t.copy(R.viewport),Ot.copy(R.scissor),Mt=R.scissorTest}else _t.copy(j).multiplyScalar(tt).floor(),Ot.copy(wt).multiplyScalar(tt).floor(),Mt=ae;if(vt!==0&&(dt=q),T.bindFramebuffer(Q.FRAMEBUFFER,dt)&&T.drawBuffers(R,dt),T.viewport(_t),T.scissor(Ot),T.setScissorTest(Mt),pt){const Gt=lt.get(R.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+J,Gt.__webglTexture,vt)}else if(qt){const Gt=J;for(let te=0;te<R.textures.length;te++){const ne=lt.get(R.textures[te]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+te,ne.__webglTexture,vt,Gt)}}else if(R!==null&&vt!==0){const Gt=lt.get(R.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Gt.__webglTexture,vt)}nt=-1};function Ci(R){const J=lt.get(R);return(J.__readFormat!==R.format||J.__readType!==R.type)&&(J.__readFormat=R.format,J.__readType=R.type,J.__formatReadable=B.textureFormatReadable(R.format),J.__typeReadable=B.textureTypeReadable(R.type)),J}this.readRenderTargetPixels=function(R,J,vt,dt,pt,qt,Jt,Gt=0){if(!(R&&R.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Jt!==void 0&&(te=te[Jt]),te){T.bindFramebuffer(Q.FRAMEBUFFER,te);try{const ne=R.textures[Gt],de=ne.format,ye=ne.type;R.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Gt);const jt=Ci(ne);if(jt.__formatReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(jt.__typeReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=R.width-dt&&vt>=0&&vt<=R.height-pt&&Q.readPixels(J,vt,dt,pt,Ht.convert(de),Ht.convert(ye),qt)}finally{const ne=rt!==null?lt.get(rt).__webglFramebuffer:null;T.bindFramebuffer(Q.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(R,J,vt,dt,pt,qt,Jt,Gt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Jt!==void 0&&(te=te[Jt]),te)if(J>=0&&J<=R.width-dt&&vt>=0&&vt<=R.height-pt){T.bindFramebuffer(Q.FRAMEBUFFER,te);const ne=R.textures[Gt],de=ne.format,ye=ne.type;R.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Gt);const jt=Ci(ne);if(jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Ce),Q.bufferData(Q.PIXEL_PACK_BUFFER,qt.byteLength,Q.STREAM_READ),Q.readPixels(J,vt,dt,pt,Ht.convert(de),Ht.convert(ye),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);const Ae=rt!==null?lt.get(rt).__webglFramebuffer:null;T.bindFramebuffer(Q.FRAMEBUFFER,Ae);const $e=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await PE(Q,$e,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Ce),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,qt),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(Ce),Q.deleteSync($e),qt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,J=null,vt=0){const dt=Math.pow(2,-vt),pt=Math.floor(R.image.width*dt),qt=Math.floor(R.image.height*dt),Jt=J!==null?J.x:0,Gt=J!==null?J.y:0;yt.setTexture2D(R,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,vt,0,0,Jt,Gt,pt,qt),T.unbindTexture()},this.copyTextureToTexture=function(R,J,vt=null,dt=null,pt=0,qt=0){let Jt,Gt,te,ne,de,ye,jt,Ce,Ae;const $e=R.isCompressedTexture?R.mipmaps[qt]:R.image;if(vt!==null)Jt=vt.max.x-vt.min.x,Gt=vt.max.y-vt.min.y,te=vt.isBox3?vt.max.z-vt.min.z:1,ne=vt.min.x,de=vt.min.y,ye=vt.isBox3?vt.min.z:0;else{const sn=Math.pow(2,-pt);Jt=Math.floor($e.width*sn),Gt=Math.floor($e.height*sn),R.isDataArrayTexture?te=$e.depth:R.isData3DTexture?te=Math.floor($e.depth*sn):te=1,ne=0,de=0,ye=0}dt!==null?(jt=dt.x,Ce=dt.y,Ae=dt.z):(jt=0,Ce=0,Ae=0);const We=Ht.convert(J.format),En=Ht.convert(J.type);let Wt;J.isData3DTexture?(yt.setTexture3D(J,0),Wt=Q.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(yt.setTexture2DArray(J,0),Wt=Q.TEXTURE_2D_ARRAY):(yt.setTexture2D(J,0),Wt=Q.TEXTURE_2D),T.activeTexture(Q.TEXTURE0),T.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,J.flipY),T.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),T.pixelStorei(Q.UNPACK_ALIGNMENT,J.unpackAlignment);const dn=T.getParameter(Q.UNPACK_ROW_LENGTH),Be=T.getParameter(Q.UNPACK_IMAGE_HEIGHT),Qn=T.getParameter(Q.UNPACK_SKIP_PIXELS),pi=T.getParameter(Q.UNPACK_SKIP_ROWS),ra=T.getParameter(Q.UNPACK_SKIP_IMAGES);T.pixelStorei(Q.UNPACK_ROW_LENGTH,$e.width),T.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,$e.height),T.pixelStorei(Q.UNPACK_SKIP_PIXELS,ne),T.pixelStorei(Q.UNPACK_SKIP_ROWS,de),T.pixelStorei(Q.UNPACK_SKIP_IMAGES,ye);const we=R.isDataArrayTexture||R.isData3DTexture,Xe=J.isDataArrayTexture||J.isData3DTexture;if(R.isDepthTexture){const sn=lt.get(R),mi=lt.get(J),Le=lt.get(sn.__renderTarget),pn=lt.get(mi.__renderTarget);T.bindFramebuffer(Q.READ_FRAMEBUFFER,Le.__webglFramebuffer),T.bindFramebuffer(Q.DRAW_FRAMEBUFFER,pn.__webglFramebuffer);for(let Aa=0;Aa<te;Aa++)we&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,lt.get(R).__webglTexture,pt,ye+Aa),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,lt.get(J).__webglTexture,qt,Ae+Aa)),Q.blitFramebuffer(ne,de,Jt,Gt,jt,Ce,Jt,Gt,Q.DEPTH_BUFFER_BIT,Q.NEAREST);T.bindFramebuffer(Q.READ_FRAMEBUFFER,null),T.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(pt!==0||R.isRenderTargetTexture||lt.has(R)){const sn=lt.get(R),mi=lt.get(J);T.bindFramebuffer(Q.READ_FRAMEBUFFER,k),T.bindFramebuffer(Q.DRAW_FRAMEBUFFER,W);for(let Le=0;Le<te;Le++)we?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,sn.__webglTexture,pt,ye+Le):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,sn.__webglTexture,pt),Xe?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,mi.__webglTexture,qt,Ae+Le):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,mi.__webglTexture,qt),pt!==0?Q.blitFramebuffer(ne,de,Jt,Gt,jt,Ce,Jt,Gt,Q.COLOR_BUFFER_BIT,Q.NEAREST):Xe?Q.copyTexSubImage3D(Wt,qt,jt,Ce,Ae+Le,ne,de,Jt,Gt):Q.copyTexSubImage2D(Wt,qt,jt,Ce,ne,de,Jt,Gt);T.bindFramebuffer(Q.READ_FRAMEBUFFER,null),T.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Xe?R.isDataTexture||R.isData3DTexture?Q.texSubImage3D(Wt,qt,jt,Ce,Ae,Jt,Gt,te,We,En,$e.data):J.isCompressedArrayTexture?Q.compressedTexSubImage3D(Wt,qt,jt,Ce,Ae,Jt,Gt,te,We,$e.data):Q.texSubImage3D(Wt,qt,jt,Ce,Ae,Jt,Gt,te,We,En,$e):R.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,qt,jt,Ce,Jt,Gt,We,En,$e.data):R.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,qt,jt,Ce,$e.width,$e.height,We,$e.data):Q.texSubImage2D(Q.TEXTURE_2D,qt,jt,Ce,Jt,Gt,We,En,$e);T.pixelStorei(Q.UNPACK_ROW_LENGTH,dn),T.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Be),T.pixelStorei(Q.UNPACK_SKIP_PIXELS,Qn),T.pixelStorei(Q.UNPACK_SKIP_ROWS,pi),T.pixelStorei(Q.UNPACK_SKIP_IMAGES,ra),qt===0&&J.generateMipmaps&&Q.generateMipmap(Wt),T.unbindTexture()},this.initRenderTarget=function(R){lt.get(R).__webglFramebuffer===void 0&&yt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?yt.setTextureCube(R,0):R.isData3DTexture?yt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?yt.setTexture2DArray(R,0):yt.setTexture2D(R,0),T.unbindTexture()},this.resetState=function(){X=0,Y=0,rt=null,T.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Fe._getDrawingBufferColorSpace(t),i.unpackColorSpace=Fe._getUnpackColorSpace()}}const HR="/intergalactic-scale/tex/";function q1(o){let t=o>>>0;return()=>{t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}const be=o=>Math.sqrt(-2*Math.log(o()+1e-12))*Math.cos(6.283185307*o()),Vn=(o,t,i)=>{const s=Math.max(0,Math.min(1,(i-o)/(t-o)));return s*s*(3-2*s)},No=(o,t,i)=>o+(t-o)*i,Hn=(o,t,i)=>[No(o[0],t[0],i),No(o[1],t[1],i),No(o[2],t[2],i)];function tf(o,t,i){let s=Math.imul(o,374761393)+Math.imul(t,668265263)+Math.imul(i,1442695041)|0;return s=Math.imul(s^s>>>13,1274126177),((s^s>>>16)>>>0)/4294967296}function eS(o,t,i){const s=Math.floor(o),l=Math.floor(t),c=o-s,f=t-l,d=c*c*(3-2*c),p=f*f*(3-2*f),m=tf(s,l,i),g=tf(s+1,l,i),_=tf(s,l+1,i),v=tf(s+1,l+1,i);return(m+(g-m)*d+(_-m)*p+(m-g-_+v)*d*p)*2-1}function Po(o,t,i,s=4){let l=.5,c=0;for(let f=0;f<s;f++){c+=l*eS(o,t,i+f*17);const d=o*1.6-t*1.2,p=o*1.2+t*1.6;o=d+3.1,t=p+1.7,l*=.5}return c}function GR(o,t,i){let s=.5,l=0;for(let c=0;c<4;c++){const f=1-Math.abs(eS(o,t,i+c*31));l+=s*f*f*f;const d=o*1.7-t*1.1,p=o*1.1+t*1.7;o=d+2.7,t=p+.4,s*=.55}return l}const ef=[2,3,5,7,11,13,17,19,23,29];class _m{i;d=0;shift;constructor(t){this.shift=ef.map(()=>t()),this.i=17+Math.floor(t()*4e3)}next(){return this.i++,this.d=0,()=>{const t=ef[Math.min(this.d,ef.length-1)];let i=1,s=0,l=this.i;for(;l>0;)i/=t,s+=i*(l%t),l=Math.floor(l/t);return s+=this.shift[Math.min(this.d,ef.length-1)],this.d++,s-Math.floor(s)}}}const mr=(o,t)=>{const i=Math.sqrt(o()*.999);return t*i/(1-i)};function Bs(o){const t=o()*2-1,i=o()*6.283185307,s=Math.sqrt(1-t*t);return[s*Math.cos(i),s*Math.sin(i),t]}class Gi{constructor(t){this.cap=t,this.p=new Float32Array(t*3),this.c=new Float32Array(t*4),this.d=new Uint8Array(t)}cap;p;c;n=0;d;add(t,i,s,l,c,f){if(this.n>=this.cap)return!1;const d=this.n++;return this.p[d*3]=t,this.p[d*3+1]=i,this.p[d*3+2]=s,this.c[d*4]=l[0]*c,this.c[d*4+1]=l[1]*c,this.c[d*4+2]=l[2]*c,this.c[d*4+3]=f,this.d[d]=f<0?1:0,!0}split(){let t=0;for(let l=0;l<this.n;l++)t+=this.d[l];const i=new Gi(t),s=new Gi(this.n-t);for(let l=0;l<this.n;l++){const c=this.d[l]?i:s,f=c.n++;c.p.set(this.p.subarray(l*3,l*3+3),f*3),c.c.set(this.c.subarray(l*4,l*4+4),f*4)}return[i,s]}get full(){return this.n>=this.cap}adapt(t,i,s,l,c=160){const f=new Float32Array(c*c),d=2*i/c,p=g=>{const _=Math.floor((this.p[g*3]+i)/d),v=Math.floor((this.p[g*3+1]+i)/d);return _<0||v<0||_>=c||v>=c?-1:v*c+_};for(let g=0;g<this.n;g++)if(this.c[g*4+3]<0){const _=p(g);_>=0&&f[_]++}const m=Ao(f,c,c,1,2);for(let g=0;g<this.n;g++){const _=this.c[g*4+3];if(_>=0)continue;const v=p(g),x=v>=0?Math.max(m[v],.25)/(d*d):1;this.c[g*4+3]=Math.min(l,Math.max(s,t/Math.sqrt(x)))*-_}}geometry(t){const{p:i,c:s,n:l}=this;for(let f=l-1;f>0;f--){const d=Math.floor(t()*(f+1));for(let p=0;p<3;p++){const m=i[f*3+p];i[f*3+p]=i[d*3+p],i[d*3+p]=m}for(let p=0;p<4;p++){const m=s[f*4+p];s[f*4+p]=s[d*4+p],s[d*4+p]=m}}const c=new kn;return c.setAttribute("position",new Yn(i.slice(0,l*3),3)),c.setAttribute("aC",new Yn(s.slice(0,l*4),4)),c.boundingSphere=new zo(new K,10),c}}const gr=o=>-(.8+.4*o()),Tf=3.2,W1=1/3,Y1=new Map;function nS(o,t){const i=o+"@"+t;let s=Y1.get(i);return s||(s=(async()=>{const l=new Image;l.crossOrigin="anonymous",l.src=HR+o,await l.decode();const c=Math.round(t*l.naturalHeight/l.naturalWidth),f=document.createElement("canvas");f.width=t,f.height=c;const d=f.getContext("2d",{willReadFrequently:!0});d.imageSmoothingQuality="high",d.drawImage(l,0,0,t,c);const p=d.getImageData(0,0,t,c).data,m=new Float32Array(t*c),g=new Float32Array(t*c),_=new Float32Array(t*c);for(let v=0;v<t*c;v++)m[v]=p[v*4]/255,g[v]=p[v*4+1]/255,_[v]=p[v*4+2]/255;return{w:t,h:c,r:m,g,b:_}})(),Y1.set(i,s)),s}const iS=(o,t)=>.2126*o.r[t]+.7152*o.g[t]+.0722*o.b[t];function Ao(o,t,i,s,l=3){let c=o.slice(),f=new Float32Array(t*i);for(let d=0;d<l;d++){for(let p=0;p<i;p++){let m=0;const g=p*t;for(let _=-s;_<=s;_++)m+=c[g+Math.min(t-1,Math.max(0,_))];for(let _=0;_<t;_++)f[g+_]=m/(2*s+1),m+=c[g+Math.min(t-1,_+s+1)]-c[g+Math.max(0,_-s)]}for(let p=0;p<t;p++){let m=0;for(let g=-s;g<=s;g++)m+=f[Math.min(i-1,Math.max(0,g))*t+p];for(let g=0;g<i;g++)c[g*t+p]=m/(2*s+1),m+=f[Math.min(i-1,g+s+1)*t+p]-f[Math.max(0,g-s)*t+p]}}return c}function nf(o,t,i,s){const l=new Float32Array(t*i);for(let c=0;c<i;c++)for(let f=0;f<t;f++){let d=o[c*t+f];for(let p=-1;p<=1;p++){const m=Math.min(i-1,Math.max(0,c+p));for(let g=-1;g<=1;g++){const _=o[m*t+Math.min(t-1,Math.max(0,f+g))];d=s?Math.max(d,_):Math.min(d,_)}}l[c*t+f]=d}return l}function Qp(o,t,i){return nf(nf(nf(nf(o,t,i,!1),t,i,!1),t,i,!0),t,i,!0)}function VR(o){const t=new Float64Array(o.length);let i=0;for(let s=0;s<o.length;s++)i+=o[s],t[s]=i;return{c:t,total:i,pick(s){const l=s*i;let c=0,f=t.length-1;for(;c<f;){const d=c+f>>1;t[d]<l?c=d+1:f=d}return c}}}const K0=new Ai(-1.3,0,-.62,"ZXY"),Z0=new Ai(-.99,0,.91,"ZXY"),kR=new Ai(.55,.35,.62,"ZXY");function K1(o,t,i,s){const l=new K(t,i,s).applyQuaternion(new Kn().setFromEuler(o).invert());return[l.x,l.y,l.z]}function XR(o,t){const i=new Gi(Math.round(o*.93)),s=new Gi(Math.round(o*.07)),l=new Gi(Math.round(o*.2)),c=[1,.88,.7],f=[.66,.6,.96],d=[.7,.62,1],p=[1,.42,.78],m=[1,.8,.62],g=[1,.96,.88],_=Math.tan(.12),v=(w,N)=>{const D=Math.hypot(w,N),E=Math.atan2(N,w)-Math.log(Math.max(D,.02))/_,O=Math.pow(.5+.5*Math.cos(2*E),2.2),P=Vn(.12,.3,D)*Vn(1.12,.6,D),F=Vn(-.3,.5,Po(w*6,N*6,7,5)),H=Math.exp(-(((D-.55)/.07)**2))+.6*Math.exp(-(((D-.8)/.06)**2));return{rr:D,ph:E,zone:P,frag:F,s:Math.max(O*(.45+.9*F)*.76+F*F*.33,H*(.6+.4*F))*P}},x=(w,N=!1)=>{const D=t(),U=D<.14?Hn(w,[.78,.82,1],N?.15:.5):D>.9?Hn(w,[1,.74,.52],N?.15:.5):w,E=N?1+.06*be(t):Math.exp(.45*be(t));return[U[0]*E,U[1]*E,U[2]*E]},S=i.cap*.55,A=.5/S,b=new _m(t);for(let w=0;w<S;){const N=t()<.8,D=N?b.next():t,U=-.24*Math.log(D()*D()+1e-12);if(U>1.18)continue;const E=D()*6.283185307,O=Math.cos(E)*U,P=Math.sin(E)*U,F=v(O,P);if(D()>.25+.75*Math.min(1,F.s))continue;w++;const H=t()<.18?.05+.03*U:.012+.02*U,q=Math.exp(-U/.16);let k=Hn(f,c,q);k=Hn(k,m,Math.exp(-U/.6)*.45*(1-q)),k=Hn(k,Hn(k,d,.4),Math.min(1,F.s)*(1-q)),i.add(O,P,be(D)*H,x(k,N),A*(N?1.2:.2*Math.exp(.8*be(t))),N?gr(t):.003)}for(let w=0;w<420&&!i.full;){const N=.25+t()*.85,D=t()*6.283185307,U=Math.cos(D)*N,E=Math.sin(D)*N,O=v(U,E);if(O.s<.55||t()>O.s)continue;w++;const P=t()<.45,F=4+Math.floor(t()*t()*26),H=.004+.006*t(),q=P?p:Hn(d,[.85,.9,1],.5);for(let k=0;k<F;k++)i.add(U+be(t)*H,E+be(t)*H,be(t)*.006,x(q),.03/(420*12),.003+.004*t())}const y=i.cap*.25;for(let w=0;w<y;w++){const N=t()<.85,D=N?b.next():t,U=mr(D,.07);if(U>.7){w--;continue}const[E,O,P]=Bs(D),F=Hn(c,g,Math.exp(-U/.05));i.add(E*U,O*U*.92,P*U*.7,x(F,N),.3/y*(N?1.15:.15*Math.exp(.7*be(t))),N?gr(t):.003)}for(let w=0;w<1800;w++)i.add(be(t)*.011,be(t)*.011,be(t)*.009,g,.04/1800,.008+.01*t());for(;!i.full;){const w=mr(t,.32);if(w>1.45)continue;const[N,D,U]=Bs(t);i.add(N*w,D*w,U*w*.8,x([.95,.88,.82]),.012/(i.cap*.1)*Math.exp(.8*be(t)),.003)}const L=(w,N,D,U,E,O,P,F,H)=>{const[q,k,W]=K1(K0,w,N,D),X=Math.cos(P),Y=Math.sin(P);for(let rt=0;rt<F;){const nt=t()<.8,ct=nt?b.next():t,_t=mr(ct,U);if(_t>E)continue;rt++;const[Ot,Mt,z]=Bs(ct),Z=Ot*_t,ft=Mt*_t*O,[G,tt,ht]=K1(K0,Z*X-ft*Y,Z*Y+ft*X,z*_t*O),xt=Hn([1,.86,.7],g,Math.exp(-_t/(U*.8)));s.add(q+G,k+tt,W+ht,x(xt,nt),H/F*(nt?1.2:.2),nt?gr(t):.003)}};L(.2,.3,.2,.01,.06,.85,0,Math.round(s.cap*.4),.0065),L(-.42,-.55,-.25,.03,.15,.6,.9,Math.round(s.cap*.6),.011);const I=1/l.cap;for(;!l.full;){const w=.18+t()*1,N=t()*6.283185307,D=Math.cos(N)*w,U=Math.sin(N)*w,E=v(D,U),O=Math.exp(-(((w-.47)/.035)**2))+.8*Math.exp(-(((w-.68)/.04)**2))+.5*Math.exp(-(((w-.34)/.03)**2))+.35*Math.exp(-(((w-.88)/.04)**2)),P=Math.pow(.5+.5*Math.cos(2*(E.ph+.25)),3),F=Vn(-.2,.4,Po(D*5,U*5,4)),H=GR(D*9,U*9,9),q=(O+P*.4*E.zone)*(.3+.7*F)*(.35+.65*H);if(t()*1.3>q)continue;const k=.01+.022*t();l.add(D,U,be(t)*.006,[.5,.8,.9],I*(.6+.8*t())*k*k*2500,k)}return i.adapt(Tf,1.5,.004,.1),s.adapt(Tf,1.5,.003,.04),{layers:[{buf:i,split:!0,spin:!0},{buf:s,split:!0,spin:!1}],dust:l,extent:[1.35,1.35]}}async function qR(o,t){const i=await nS("m64.webp",520),{w:s,h:l}=i,c=new Float32Array(s*l);for(let z=0;z<s*l;z++)c[z]=iS(i,z);const f=Ao(c,s,l,1,2),d=Ao(c,s,l,18,3),p=Ao(i.r,s,l,2,2),m=Ao(i.g,s,l,2,2),g=Ao(i.b,s,l,2,2),_=new Kn().setFromEuler(Z0),v=new K,x=2/.82,S=x*(2560/2422),A=.495,b=.435,y=(z,Z)=>{v.set(z,Z,0).applyQuaternion(_);const ft=A+v.x/x,G=b-v.y/S,tt=Math.min(s-1,Math.max(0,Math.round(ft*s)));return Math.min(l-1,Math.max(0,Math.round(G*l)))*s+tt},L=28,I=new Float64Array(L*4);for(let z=0;z<6e4;z++){const Z=Math.sqrt(t())*1.35,ft=t()*6.283185307,G=y(Math.cos(ft)*Z,Math.sin(ft)*Z);if(f[G]<d[G]*.8)continue;const tt=Math.min(L-1,Math.floor(Z/1.35*L));I[tt*4]+=p[G],I[tt*4+1]+=m[G],I[tt*4+2]+=g[G],I[tt*4+3]++}const w=z=>{const Z=Math.min(L-1,Math.floor(z/1.35*L)),ft=Math.max(1,I[Z*4+3]),G=[I[Z*4]/ft,I[Z*4+1]/ft,I[Z*4+2]/ft],tt=Math.max(G[0],G[1],G[2],.001);return[G[0]/tt,G[1]/tt,G[2]/tt]},N=new Gi(Math.round(o*.9)),D=new Gi(Math.round(o*.22)),U=(z,Z=1,ft=!1)=>{const G=t(),tt=G<.12?Hn(z,[.72,.8,1],.45*Z):G>.9?Hn(z,[1,.72,.5],.4*Z):z,ht=ft?1+.06*be(t):Math.exp(.4*be(t));return[tt[0]*ht,tt[1]*ht,tt[2]*ht]},E=new _m(t),O=N.cap*.62,P=z=>Math.max(f[z],d[z]*.92)-.035;let F=0,H=0,q=0,k=0;const W=[];for(;W.length<O&&k<O*30;k++){const z=t()<.8,Z=z?E.next():t,ft=Math.sqrt(Z())*1.32,G=Z()*6.283185307,tt=Math.cos(G)*ft,ht=Math.sin(G)*ft,xt=y(tt,ht),j=Math.max(0,P(xt))*Vn(1.32,1,ft),wt=j*Vn(.03,.28,ft);H+=wt,q+=j-wt;const ae=Math.pow(wt,.5);if(Z()*.75>ae)continue;const Qt=wt/Math.max(ae,1e-4),bt=Hn(w(ft),[p[xt],m[xt],g[xt]].map(Et=>Et/Math.max(p[xt],m[xt],g[xt],.001)),f[xt]>d[xt]*.9?.5:0),Dt=.012+.018*ft;W.push([tt,ht,be(Z)*Dt,U(bt,1,z),Qt*(z?1.2:.2*Math.exp(.8*be(t))),z?gr(t):.003]),F+=Qt}const X=Math.PI*1.32*1.32*Math.cos(Z0.x),Y=X*H/k,rt=X*q/k;for(const[z,Z,ft,G,tt,ht]of W)N.add(z,Z,ft,G,tt/F*Y,ht);const nt=[1,.93,.76],ct=[1,.97,.9],_t=N.cap*.26;for(let z=0;z<_t;){const Z=t()<.85,ft=Z?E.next():t,G=mr(ft,.075);if(G>.6)continue;z++;const[tt,ht,xt]=Bs(ft);N.add(tt*G,ht*G,xt*G*.75,U(Hn(w(.15),nt,Math.exp(-G/.06)),.5,Z),rt*1.15/_t*(Z?1.15:.15),Z?gr(t):.003)}for(let z=0;z<1500;z++)N.add(be(t)*.01,be(t)*.01,be(t)*.008,ct,rt*.05/1500,.008+.01*t());const Ot=Math.round(o*.03);for(let z=0,Z=0;Z<Ot&&!N.full&&z<4e5;z++){const ft=.12+Math.sqrt(t())*.75,G=t()*6.283185307,tt=Math.cos(G)*ft,ht=Math.sin(G)*ft,xt=y(tt,ht),j=c[xt]-f[xt]*.5-d[xt]*.5,wt=i.b[xt]-i.r[xt],ae=i.r[xt]-i.g[xt],Qt=wt>.05?1:ae>.14?2:0;if(!Qt||ft>.62||j<.05||t()>j*5)continue;const bt=Qt===1?[.55,.7,1]:[1,.42,.6],Dt=2+Math.floor(t()*6),Et=.003+.004*t();for(let Ft=0;Ft<Dt;Ft++,Z++)N.add(tt+be(t)*Et,ht+be(t)*Et,be(t)*.005,U(bt,.3),(Qt===1?25e-7:5e-6)*Math.exp(.6*be(t)),.003)}const Mt=1/D.cap;for(let z=0;!D.full&&z<D.cap*60;z++){const Z=.06+Math.sqrt(t())*.9,ft=t()*6.283185307,G=Math.cos(ft)*Z,tt=Math.sin(ft)*Z,ht=y(G,tt),xt=Math.max(0,1-f[ht]/Math.max(d[ht]*.95,.001)),j=Vn(-.02,.08,p[ht]-g[ht]),wt=Math.pow(xt,1.1)*(.35+.65*j)*Vn(.95,.6,Z)*2.2;if(t()>wt)continue;const ae=.008+.016*t();D.add(G,tt,be(t)*.007,[.55,.82,.95],Mt*(.6+.8*t())*ae*ae*1e4,ae)}return N.adapt(Tf,1.5,.004,.1),{layers:[{buf:N,split:!0,spin:!0}],dust:D,extent:[1.4,1.4]}}function WR(o,t){const i=new Gi(Math.round(o*.82)),s=new Gi(Math.round(o*.18)),l=[1,.95,.84],c=[1,.85,.62],f=[.98,.78,.55],d=(S,A=!1)=>{const b=t(),y=b<.06?Hn(S,[.85,.88,1],A?.1:.35):b>.85?Hn(S,[1,.7,.45],A?.1:.35):S,L=A?1+.06*be(t):Math.exp(.35*be(t));return[y[0]*L,y[1]*L,y[2]*L]},p=new _m(t),m=[1,.68,.5],g=i.cap*.93;for(let S=0;S<g;){const A=t()<.88,b=A?p.next():t,y=mr(b,.2);if(y>1.7)continue;S++;const[L,I,w]=Bs(b),N=y<.3?Hn(c,l,Math.exp(-y/.08)):Hn(c,f,Vn(.3,1.3,y));i.add(L*y*m[0],I*y*m[1],w*y*m[2],d(N,A),.8/g*(A?1.12:.04*Math.exp(.8*be(t))),A?gr(t):.003)}for(let S=0;S<2200;S++)i.add(be(t)*.018,be(t)*.013,be(t)*.01,l,.04/2200,.01+.012*t());for(;!i.full;){const S=mr(t,.45);if(S>1.8)continue;const[A,b,y]=Bs(t);i.add(A*S,b*S*.8,y*S*.7,d([1,.9,.75]),4e-6*Math.exp(.7*be(t)),.003)}const _=30,v=22,x=s.cap/(_*1+v*.25);for(let S=0;S<_+v;S++){const A=S>=_,b=t()*6.283185307,y=A?1.5+t()*.5:.5+Math.pow(t(),.7)*1.1,L=Math.cos(b)*y,I=Math.sin(b)*y*.8,w=(t()*2-1)*(A?.4:.8)-(A?1.2:0),N=A?.008+.012*t():.012+t()*t()*.06,D=t()<(A?.4:.2),U=Math.round(x*(A?.25:.4+1.2*(N/.07))),E=(A?7e-4:.0028)*(.4+N/.07*1.5),O=D?[.86,.88,1]:t()<.3?[1,.92,.8]:[1,.86,.66],P=new Kn().setFromEuler(new Ai(t()*3,t()*3,t()*3)),F=new K;for(let H=0;H<U;H++){if(D){const k=-N*.35*Math.log(t()*t()+1e-9),W=t()*6.283185307,X=Math.pow(.5+.5*Math.cos(2*(W-Math.log(Math.max(k/N,.05))*3)),2);if(t()>.3+.7*X&&k>N*.15){H--;continue}F.set(Math.cos(W)*k,Math.sin(W)*k,be(t)*N*.05)}else{const k=Math.min(mr(t,N*.25),N*1.6),[W,X,Y]=Bs(t);F.set(W*k,X*k*.75,Y*k*.6)}F.applyQuaternion(P);const q=F.length()<N*.12;s.add(L+F.x,I+F.y,w+F.z,d(q?[1,.93,.8]:O),E/U*.6,t()<.85?gr(t):.003)}}return i.adapt(Tf,1.9,.004,.14),s.adapt(1.4,2,.002,.012,320),{layers:[{buf:i,split:!1,spin:!1},{buf:s,split:!1,spin:!1}],extent:[1.95,1.95]}}async function Z1(o,t,i){const s=await nS(i.file,Math.round(Math.sqrt(o*.88/i.aspect))),{w:l,h:c}=s,f=i.Wimg*c/l,d=i.Wimg/l,p=new Float32Array(l*c);for(let P=0;P<l*c;P++)p[P]=iS(s,P);const m=Qp(s.r,l,c),g=Qp(s.g,l,c),_=Qp(s.b,l,c),v=new Float32Array(l*c);for(let P=0;P<l*c;P++)v[P]=.2126*m[P]+.7152*g[P]+.0722*_[P];const x=new Float32Array(l*c);for(let P=0;P<l*c;P++)x[P]=p[P]-v[P];const S=s.r.slice(),A=s.g.slice(),b=s.b.slice(),y=[];for(let P=3;P<c-3;P++)for(let F=3;F<l-3;F++){const H=P*l+F,q=x[H];if(q<i.starMin)continue;let k=!0;for(let _t=-1;_t<=1&&k;_t++)for(let Ot=-1;Ot<=1;Ot++)if((Ot||_t)&&x[H+_t*l+Ot]>q){k=!1;break}if(!k||(x[H-3]+x[H+3]+x[H-3*l]+x[H+3*l])/4>q*.45)continue;const X=q>.5?12:q>.25?5:2,Y=[0,0,0];let rt=0,nt=0,ct=0;for(let _t=-X;_t<=X;_t++)for(let Ot=-X;Ot<=X;Ot++){const Mt=F+Ot,z=P+_t;if(Mt<0||z<0||Mt>=l||z>=c)continue;const Z=z*l+Mt,ft=Ot*Ot+_t*_t;if(ft>X*X||ft>6&&x[Z]<.04)continue;const G=Math.max(0,s.r[Z]-m[Z]),tt=Math.max(0,s.g[Z]-g[Z]),ht=Math.max(0,s.b[Z]-_[Z]);if(ft<=6){Y[0]+=G,Y[1]+=tt,Y[2]+=ht;const xt=G+tt+ht;rt+=Ot*xt,nt+=_t*xt,ct+=xt}S[Z]=m[Z],A[Z]=g[Z],b[Z]=_[Z]}y.push([F+.5+rt/Math.max(ct,1e-6),P+.5+nt/Math.max(ct,1e-6),Y,q])}if(i.clip)for(let P=0;P<l*c;P++)S[P]=Math.min(S[P],m[P]+i.clip),A[P]=Math.min(A[P],g[P]+i.clip),b[P]=Math.min(b[P],_[P]+i.clip);const L=new Float32Array(l*c),I=new Float32Array(l*c);for(let P=0;P<c;P++)for(let F=0;F<l;F++){const H=P*l+F,q=((F+.5)/l-.5)/i.mask[0],k=((P+.5)/c-.5)/i.mask[1],W=Vn(1,.62,Math.hypot(q,k));I[H]=W;const X=.2126*S[H]+.7152*A[H]+.0722*b[H]-i.black;L[H]=X>.004&&W>0?Math.pow(X,.3)*W:0}const w=VR(L),N=Math.min(y.length,Math.round(o*.025)),D=new Gi(o-N*2-6e3),U=new Gi(N*2+6e3),E=D.cap,O=i.black;for(let P=0;P<E;P++){const F=w.pick((P+t())/E),H=F%l,q=F/l|0,k=H+.5+be(t)*.3,W=q+.5+be(t)*.3,X=k/l,Y=W/c,rt=[Math.max(0,S[F]-O),Math.max(0,A[F]-O),Math.max(0,b[F]-O)],nt=d*d*w.total/(L[F]*E)*I[F],ct=(X-.5)*i.Wimg,_t=(.5-Y)*f,Ot=i.depth(ct,_t,X,Y,rt,t),Mt=1+.03*be(t),z=Math.min(4,Math.max(.7,1/Math.sqrt(E*L[F]/w.total)));D.add(ct,_t,Ot,[rt[0]*Mt,rt[1]*Mt,rt[2]*Mt],nt,d*z*(1.5+.4*t()))}y.sort((P,F)=>F[3]-P[3]);for(let P=0;P<N;P++){const[F,H,q]=y[P],k=F/l,W=H/c,X=(k-.5)/i.mask[0],Y=(W-.5)/i.mask[1],rt=Vn(1,.62,Math.hypot(X,Y));if(rt<=0)continue;const nt=(k-.5)*i.Wimg,ct=(.5-W)*f,_t=i.starZ(nt,ct,t),Ot=d*d*rt;U.add(nt,ct,_t,q,Ot*.85,d*.7),y[P][3]>.25&&U.add(nt,ct,_t,q,Ot*.35,d*5)}return i.extra?.(U,t),{layers:[{buf:D,split:!1,spin:!1},{buf:U,split:!1,spin:!1}],extent:[i.Wimg/2,f/2]}}const YR=[[[40,900,.45,150],[120,700,.4,110],[170,560,.33,55],[205,430,.28,22]],[[60,900,.66,60],[140,810,.62,45],[205,745,.6,25]],[[420,640,.05,60],[360,470,0,70],[320,330,-.06,55],[380,230,-.16,40],[470,140,-.26,45],[575,80,-.34,48]],[[430,470,-.2,42],[520,380,-.28,36],[632,262,-.36,26]],[[520,520,-.34,22],[575,450,-.4,20],[630,400,-.46,18]]];function KR(o,t){const i=(l,c)=>[(l/722-.5)*o,(.5-c/900)*t],s=[];for(const l of YR)for(let c=0;c<l.length-1;c++){const[f,d]=[l[c],l[c+1]],[p,m]=i(f[0],f[1]),[g,_]=i(d[0],d[1]);s.push({ax:p,ay:m,bx:g,by:_,za:f[2],zb:d[2],wa:f[3]/722*o,wb:d[3]/722*o})}return(l,c,f,d,p,m)=>{const g=(p[0]-p[2])/Math.max(.05,p[0]+p[1]+p[2]),_=Vn(-.04,.16,g);let v=1e9,x=0,S=1;for(const y of s){const L=y.bx-y.ax,I=y.by-y.ay,w=Math.max(0,Math.min(1,((l-y.ax)*L+(c-y.ay)*I)/(L*L+I*I))),N=No(y.wa,y.wb,w),D=Math.hypot(l-y.ax-L*w,c-y.ay-I*w)/N;D<v&&(v=D,x=No(y.za,y.zb,w),S=N)}const A=_*Vn(1.5,.95,v);if(m()<A){const y=Math.min(v/1.3,1),L=Math.sqrt(Math.max(0,1-y*y));return x+(m()*2-1)*S*(.25+.75*L)*.95}return _>.35?-.1+.35*Po(f*3,d*3,5)+be(m)*.035:-.6+.35*((f-.5)**2+(d-.5)**2)+.2*Po(f*2.5,d*2.5,11)+be(m)*.04}}function ZR(){return(i,s,l,c,f,d)=>{const p=Math.hypot(i- -.398,s-0),m=Po(l*3.2,c*3.2,21),g=Po(l*7,c*7,23),_=.55+.3*m,x=Math.tanh(2.5*m+.4)*.55*Math.max(0,_*_-p*p)/_,S=Vn(_*.8,_*1.3,p),A=.2126*f[0]+.7152*f[1]+.0722*f[2],b=Vn(.02,.12,f[0]-f[2])*Vn(.25,.05,A);return No(x,.35*m+.1*g,S)+b*.22+be(d)*(.03+.05*Vn(.3,.05,A))}}const Q1=`
attribute vec4 aC;
uniform float uPPU, uMinPx, uMaxPx, uK, uSide;
uniform vec3 uN;
varying vec3 vC; varying float vR;
void main(){
  vec4 mv = modelViewMatrix*vec4(position, 1.0);
  // disc galaxies draw in two halves (behind / in front of the disc plane) around the dust pass
  if (uSide != 0.0 && dot(mv.xyz, uN)*uN.z*uSide > 0.0) { gl_Position = vec4(0.0, 0.0, 2.0, 1.0); gl_PointSize = 0.0; vC = vec3(0.0); vR = 1.0; return; }
  gl_Position = projectionMatrix*mv;
  float sig = 0.5*aC.w*uPPU;
  float sg = max(sig, uMinPx);
  // flux-conserving: a sprite clamped to the minimum size spreads the same light over more pixels
  vC = aC.rgb*uK*uPPU*uPPU/(6.2831853*sg*sg);
  float ps = min(sg*5.0, uMaxPx);
  gl_PointSize = ps;
  vR = ps/sg;
}`,J1=`
varying vec3 vC; varying float vR;
uniform float uDust;
void main(){
  vec2 q = (gl_PointCoord - 0.5)*vR;
  float g = exp(-0.5*dot(q, q));
  if (g < 0.01) discard;
  if (uDust > 0.5) gl_FragColor = vec4(1.0 - exp(-vC*g), 1.0);
  else gl_FragColor = vec4(vC*g, 1.0);
}`,QR=`
uniform sampler2D tMap, tLo; uniform vec2 uUv, uUvLo; uniform float opacity, uExp, uKnee, uSat, uEnc;
varying vec2 vUv;
float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x*p.y); }
vec3 knee(vec3 x){ return mix(x, 0.7 + 0.3*(1.0 - exp(-(x - 0.7)/0.3)), step(0.7, x)); }
void main(){
  vec3 hdr = max((texture2D(tMap, vUv*uUv).rgb + texture2D(tLo, vUv*uUvLo).rgb)*uEnc*uExp, 0.0);
  vec3 c = uKnee > 0.5 ? knee(hdr) : 1.0 - exp(-hdr);
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = max(mix(vec3(l), c, uSat), 0.0);
  c += (h21(gl_FragCoord.xy) - 0.5)/255.0;   // dither: no banding in the faint haze
  gl_FragColor = premul(max(c, 0.0), opacity);
}`,aS={andromeda:{exp:1.8,knee:!1,sat:1,spin:.022,wobble:.07,tumble:0,sway:0,count:23e4},m64:{exp:1.05,knee:!0,sat:1.05,spin:.02,wobble:.07,tumble:0,sway:0,count:22e4},ic1101:{exp:1.8,knee:!1,sat:1,spin:0,wobble:0,tumble:.03,sway:0,count:2e5},pillars:{exp:1,knee:!0,sat:.92,limit:[.85,.5],spin:0,wobble:0,tumble:0,sway:.32,count:24e4},tarantula:{exp:.86,knee:!0,sat:.95,limit:[.85,.5],spin:0,wobble:0,tumble:0,sway:.32,count:24e4}};function JR(o){const t=typeof matchMedia<"u"&&(matchMedia("(pointer: coarse)").matches||innerWidth<768);return Math.round(aS[o].count*(t?.5:1))}let Vl=null;function jR(o,t,i){const s=aS[t],l=new hn,c={group:l,fades:i,dot:o.color},f=new hn;l.add(f),c.rot=f,s.limit&&(c.limit=s.limit);const d={tMap:{value:null},tLo:{value:null},uUv:{value:new ce(1,1)},uUvLo:{value:new ce(1,1)},opacity:{value:1},uExp:{value:s.exp},uKnee:{value:s.knee?1:0},uSat:{value:s.sat},uEnc:{value:1}},p=wi(new en({uniforms:d,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Vi+QR,depthWrite:!1,depthTest:!1,transparent:!0,toneMapped:!1}));i.push({material:p,base:1});const m=new Mr(1,1),g=new ln(m,p);g.visible=!1,l.add(g);const _=new Mf,v=new Mf,x=new Oo(-1,1,1,-1,-10,10),S=Z=>{const ft=new hn,G=new hn;return ft.add(G),Z.add(ft),{root:ft,spinG:G}},A=S(_),b=S(v),y={uPPU:{value:100},uMinPx:{value:1},uMaxPx:{value:128},uK:{value:1},uN:{value:new K(0,0,1)}},L=Z=>new en({uniforms:{...y,uSide:{value:Z},uDust:{value:0}},vertexShader:Q1,fragmentShader:J1,depthTest:!1,depthWrite:!1,transparent:!0,blending:gf,blendEquation:Wa,blendSrc:Ro,blendDst:Ro}),I={back:L(1),front:L(-1),all:L(0),dust:new en({uniforms:{...y,uSide:{value:0},uDust:{value:1}},vertexShader:Q1,fragmentShader:J1,depthTest:!1,depthWrite:!1,transparent:!0,blending:gf,blendEquation:Wa,blendSrc:i0,blendDst:dy,blendSrcAlpha:i0,blendDstAlpha:Ro})};let w=null,N=null,D=[],U=[],E=[1.4,1.4],O="idle",P=0,F=0;const H=()=>{if(O!=="idle")return;O="building";const Z=++P,ft=JR(t),G=q1(o.id.length*7919+t.length*104729+3),tt=async()=>{if(t==="andromeda")return XR(ft,G);if(t==="m64")return qR(ft,G);if(t==="ic1101")return WR(ft,G);if(t==="pillars"){const ht=1.8181818181818181,xt=ht*(2560/2053);return Z1(ft,G,{file:"pillars.webp",aspect:2053/2560,Wimg:ht,mask:[.47,.48],black:.035,starMin:.07,depth:KR(ht,xt),starZ:(j,wt,ae)=>(ae()*2-1)*.85})}return Z1(ft,G,{file:"tarantula.webp",aspect:2560/2048,Wimg:2,mask:[.49,.47],black:.03,clip:.03,starMin:.12,depth:ZR(),starZ:(ht,xt,j)=>{const wt=Math.hypot(ht+.398,xt);return wt<.2?be(j)*wt*.9:(j()*2-1)*.7},extra:(ht,xt)=>{const j=Math.min(ht.cap-ht.n,5200);for(let wt=0;wt<j;wt++){const ae=Math.max(1e-4,xt()*.98),Qt=Math.min(.12,.012/Math.sqrt(Math.pow(ae,-2/3)-1)),[bt,Dt,Et]=Bs(xt),Ft=xt()<.8?[.78,.86,1]:[1,.95,.9],oe=Math.exp(.6*be(xt));ht.add(-.398+bt*Qt,Dt*Qt,Et*Qt,[Ft[0]*oe,Ft[1]*oe,Ft[2]*oe],15e-6/5.2*(wt<30?6:1),.0025)}}})};setTimeout(()=>{tt().then(ht=>{if(Z!==P)return;const xt=q1(99);E=ht.extent,F=0;const j=(wt,ae,Qt,bt)=>{const Dt=new By(wt,ae);Dt.frustumCulled=!1,Dt.renderOrder=bt,Qt.add(Dt),U.push(Dt)};for(const wt of ht.layers){const[ae,Qt]=wt.buf.split();for(const[bt,Dt]of[[ae,b],[Qt,A]]){if(!bt.n)continue;const Et=bt.geometry(xt);D.push(Et),F+=bt.n;const Ft=wt.spin?Dt.spinG:Dt.root;wt.split&&ht.dust?(j(Et,I.back,Ft,0),j(Et,I.front,Ft,2)):j(Et,I.all,Ft,0)}}if(ht.dust){const wt=ht.dust.geometry(xt);D.push(wt),j(wt,I.dust,A.spinG,1),j(wt,I.dust,b.spinG,1)}O="ready"}).catch(ht=>{console.warn("cloud build failed",t,ht),O="idle"})},0)};c.wantTex=()=>H(),c.sleep=()=>{if(O!=="idle"){P++;for(const Z of U)Z.removeFromParent();for(const Z of D)Z.dispose();U=[],D=[],w?.dispose(),N?.dispose(),w=N=null,d.tMap.value=null,d.tLo.value=null,g.visible=!1,O="idle"}};const q=t==="andromeda"?K0:t==="m64"?Z0:t==="ic1101"?kR:new Ai,k=new Kn().setFromEuler(q);let W=0,X=0,Y=0,rt=0;const nt=new Kn,ct=new Kn,_t=new K(1,0,0),Ot=new K(0,1,0),Mt=new K(0,0,1),z=new K;return c.update=(Z,ft,G,tt,ht)=>{if(O!=="ready"){H(),g.visible=!1;return}const xt=je.renderer;if(!xt)return;if(Vl===null&&(Vl=xt.extensions.has("EXT_color_buffer_float")||xt.extensions.has("EXT_color_buffer_half_float")),tt||(W+=ft*s.spin*ht,X+=ft*.09*ht,Y+=ft*s.tumble*ht,rt+=ft*.11*ht),s.limit){const Lt=s.limit,kt=Math.max(-Lt[0],Math.min(Lt[0],(f.userData.yaw??0)+s.sway*Math.sin(rt))),re=Math.max(-Lt[1],Math.min(Lt[1],f.userData.pitch??0));ct.setFromAxisAngle(Ot,kt).multiply(nt.setFromAxisAngle(_t,re))}else ct.copy(f.quaternion),s.tumble&&ct.multiply(nt.setFromAxisAngle(Ot,Y)),s.wobble&&ct.multiply(nt.setFromAxisAngle(_t,s.wobble*Math.sin(X))),ct.multiply(k);for(const Lt of[A,b])Lt.root.quaternion.copy(ct),Lt.spinG.quaternion.setFromAxisAngle(Mt,W);z.copy(Mt).applyQuaternion(ct);const j=je.dpr,wt=l.position.x,ae=l.position.y,Qt=Math.max(E[0],E[1])*(s.limit?1.05:1),bt=je.vw/2,Dt=je.vh/2,Et=Math.max(-Qt,(-bt-wt)/G),Ft=Math.min(Qt,(bt-wt)/G),oe=Math.max(-Qt,(-Dt-ae)/G),ve=Math.min(Qt,(Dt-ae)/G);if(Ft<=Et||ve<=oe){g.visible=!1;return}const Te=je.vw<768?1600:2400;let Q=G*j;const Ve=(Ft-Et)*Q,_e=(ve-oe)*Q,B=Math.min(1,Te/Math.max(Ve,_e));Q*=B;const T=Math.max(8,Math.ceil((Ft-Et)*Q)),it=Math.max(8,Math.ceil((ve-oe)*Q)),lt=Math.max(4,Math.ceil(T*W1)),yt=Math.max(4,Math.ceil(it*W1)),Nt=(Lt,kt,re)=>{if(Lt&&Lt.width>=kt&&Lt.height>=re&&Lt.width<=kt*1.6+256&&Lt.height<=re*1.6+256)return Lt;Lt?.dispose();const pe=Math.min(4096,Math.ceil(kt*1.15/32)*32),et=Math.min(4096,Math.ceil(re*1.15/32)*32);return new Ti(pe,et,{type:Vl?ia:fi,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,minFilter:Un,magFilter:Un})};w=Nt(w,T,it),N=Nt(N,lt,yt),d.tMap.value=w.texture,d.tLo.value=N.texture,d.uEnc.value=Vl?1:4,w.viewport.set(0,0,T,it),N.viewport.set(0,0,lt,yt);const Pt=Et+T/Q,St=oe+it/Q;x.left=Et,x.right=Pt,x.bottom=oe,x.top=St,x.updateProjectionMatrix();const Tt=Math.max(.45,Math.min(1,je.quality*je.quality));for(const Lt of U){const kt=Lt.geometry.attributes.position.count;Lt.geometry.setDrawRange(0,Math.ceil(kt*Tt))}y.uMaxPx.value=je.maxPoint,y.uK.value=1/Tt*(Vl?1:.25),y.uN.value.copy(z);const zt=xt.getRenderTarget(),ee=xt.autoClear;xt.autoClear=!0,y.uPPU.value=Q,y.uMinPx.value=Math.max(.75,.62*j*B),xt.setRenderTarget(w),xt.render(_,x),y.uPPU.value=Q*(lt/T),y.uMinPx.value=.75,xt.setRenderTarget(N),xt.render(v,x),xt.setRenderTarget(zt),xt.autoClear=ee;const It=w;d.uUvLo.value.set(lt/N.width,yt/N.height),d.uUv.value.set(T/It.width,it/It.height),g.position.set((Et+Pt)/2,(oe+St)/2,0),g.scale.set(Pt-Et,St-oe,1),g.visible=!0},c}const $R="/intergalactic-scale/tex/",sS={ceres:{type:"planet",tex:"ceres",hi:!0,spin:.03},makemake:{type:"planet",tex:"makemake",hi:!0,spin:.03},pluto:{type:"planet",tex:"pluto",hi:!0,atmo:[.55,.7,1,.22],lean:.5,spin:.02},europa:{type:"planet",tex:"europa",spin:.02},titan:{type:"planet",tex:"titan",atmo:[1,.66,.3,1.25],atmoScale:1.06,spin:.015},kepler22b:{type:"planet",tex:"kepler22b",atmo:[.45,.75,1,.9],tilt:.3,spin:.03},moon:{type:"planet",tex:"moon",hi:!0,spin:.02},mercury:{type:"planet",tex:"mercury",hi:!0,spin:.02},mars:{type:"planet",tex:"mars",hi:!0,atmo:[.9,.55,.4,.35],tilt:.44,spin:.03},venus:{type:"planet",tex:"venus",hi:!0,atmo:[1,.9,.7,.5],spin:.01},earth:{type:"planet",tex:"earth",hi:!0,clouds:!0,atmo:[.35,.6,1,1],tilt:.41,spin:.03},neptune:{type:"planet",tex:"neptune",atmo:[.4,.55,1,.8],tilt:.49,spin:.03},uranus:{type:"planet",tex:"uranus",atmo:[.6,.9,.95,.8],tilt:1.7,spin:.03},saturn:{type:"planet",tex:"saturn",hi:!0,ring:!0,atmo:[.95,.85,.6,.3],tilt:.47,spin:.04},jupiter:{type:"planet",tex:"jupiter",hi:!0,atmo:[.95,.8,.6,.3],tilt:.05,spin:.04},sun:{type:"star",scale:10,contrast:.3,speck:.5,spots:5,spotSize:.03,active:3,actSize:.07,glow:.9,flame:.6,proms:[[.55,-1.45,.22,.16,1.45],[-.45,1.5,.16,.12,1.85],[.1,1.55,.11,.08,1.85]]},sirius:{type:"star",scale:7,contrast:.16,speck:.3,spots:0,spotSize:0,active:2,actSize:.06,glow:1,flame:.4,proms:[[.4,-1.5,.12,.08,1.65]]},pollux:{type:"star",scale:4.5,contrast:.45,speck:.5,spots:0,spotSize:0,active:3,actSize:.08,glow:.95,flame:.7,proms:[[.5,-1.45,.3,.22,1.45],[-.5,1.45,.24,.18,1.65]]},arcturus:{type:"star",scale:4.2,contrast:.45,speck:.5,spots:0,spotSize:0,active:3,actSize:.08,glow:.95,flame:.7,proms:[[.6,-1.5,.32,.24,1.75],[-.4,1.5,.27,.2,1.55]]},aldebaran:{type:"star",scale:4,contrast:.5,speck:.5,spots:0,spotSize:0,active:3,actSize:.09,glow:.95,flame:.75,proms:[[.55,-1.45,.38,.28,1.55],[-.5,1.5,.32,.24,1.75]]},rigel:{type:"star",scale:7,contrast:.16,speck:.3,spots:0,spotSize:0,active:2,actSize:.06,glow:1.05,flame:.4,proms:[[-.4,1.5,.12,.08,1.85]]},antares:{type:"star",scale:3.4,contrast:.55,speck:.45,spots:0,spotSize:0,active:3,actSize:.1,glow:.95,flame:.85,proms:[[.6,-1.45,.51,.38,1.45],[-.55,1.5,.46,.34,1.65],[.05,1.55,.27,.2,1.65]]},betelgeuse:{type:"star",scale:5,contrast:.45,speck:.55,spots:0,spotSize:0,active:4,actSize:.15,glow:1,flame:.9,proms:[[.62,-1.42,.57,.42,1.8],[-.6,1.48,.51,.38,1.75]]},uyscuti:{type:"star",scale:3.3,contrast:.55,speck:.45,spots:0,spotSize:0,active:3,actSize:.1,glow:.95,flame:.85,proms:[[.5,-1.5,.54,.4,1.55],[-.6,1.45,.49,.36,1.65],[-.1,-1.55,.3,.22,1.65]]},elnath:{type:"star",scale:7,contrast:.16,speck:.3,spots:0,spotSize:0,active:2,actSize:.06,glow:1,flame:.4},aludra:{type:"star",scale:6,contrast:.2,speck:.35,spots:0,spotSize:0,active:3,actSize:.07,glow:1.05,flame:.5},pistol:{type:"star",scale:5.5,contrast:.24,speck:.35,spots:0,spotSize:0,active:3,actSize:.08,glow:1.1,flame:.6},vycma:{type:"star",scale:3.2,contrast:.58,speck:.45,spots:0,spotSize:0,active:4,actSize:.12,glow:1,flame:.95},st218:{type:"star",scale:3,contrast:.6,speck:.45,spots:0,spotSize:0,active:4,actSize:.12,glow:1,flame:.95},sgra:{type:"bh",disk:[2.6,5.2],hot:[.82,.9,1],cool:[.3,.45,.95],ring:[.82,.9,1],gain:.4,quasar:0,tilt:.2,roll:-.12},s5:{type:"bh",disk:[2.6,6],hot:[1,.94,.84],cool:[.95,.6,.32],ring:[1,.92,.8],gain:1,quasar:.5,tilt:.28,roll:.1},ton618:{type:"bh",disk:[2.6,6.2],hot:[1,.72,.34],cool:[1,.3,.02],ring:[1,.8,.5],gain:1.5,quasar:1.1,tilt:.16,roll:-.08},heliosphere:{type:"proc",kind:"heliosphere"},oort:{type:"proc",kind:"oort"},helix:{type:"image",src:"helix.webp",fill:.6,aspect:1,mask:[.48,.48],sat:.95,gain:1},pillars:{type:"cloud",kind:"pillars"},horsehead:{type:"image",src:"horsehead.webp",fill:.9,aspect:2560/2449,mask:[.48,.48],sat:.95,gain:1},orion:{type:"image",src:"orion.webp",fill:1,aspect:1,mask:[.5,.5],sat:.85,gain:.95},omega:{type:"image",src:"omega.webp",fill:.62,aspect:1,mask:[.46,.46],sat:.8,gain:1.05},segue2:{type:"proc",kind:"dwarf"},tarantula:{type:"cloud",kind:"tarantula"},m64:{type:"cloud",kind:"m64"},milkyway:{type:"galaxy",arms:2,pitch:.24,bar:1,bulge:.15,dust:1.15,seed:3.1,floc:.55,clump:1,ring:0,tilt:-.95,pa:.5},andromeda:{type:"cloud",kind:"andromeda"},ic1101:{type:"cloud",kind:"ic1101"},virgo:{type:"proc",kind:"supercluster"},laniakea:{type:"proc",kind:"laniakea"},universe:{type:"proc",kind:"universe"}},j1={type:"galaxy",arms:2,pitch:.12,bar:0,bulge:.2,dust:1.25,seed:7.7,floc:.6,clump:.9,ring:.8,tilt:-1.34,pa:-.62,pal:{gold:[1,.9,.74],grey:[.66,.6,.96],blue:[.72,.62,1],dust:[.5,.2,.12],knot:[1,.42,.78],warm:[1,.8,.62],warmR:.6,knotAmt:1,gain:1.7},sats:[[.2,.3,.035,.03,0,1.6],[-.42,-.55,.11,.065,.9,.9]],field:1},Wl={saturn:2.3,sgra:5.6,s5:6.2,ton618:6.4,segue2:1.4,ic1101:1.6},$1={sgra:4,s5:4.4,ton618:4.6};function rS(o){let t=o>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)%1e6/1e6)}const Ns=o=>Math.sqrt(-2*Math.log(o()+1e-9))*Math.cos(2*Math.PI*o()),Fs=`
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
`;function wi(o){return o.blending=gf,o.blendEquation=Wa,o.blendSrc=Ro,o.blendDst=vf,o.blendSrcAlpha=Ro,o.blendDstAlpha=vf,o.premultipliedAlpha=!0,o}const Vi=`vec4 premul(vec3 c, float o){ c *= o; return vec4(c, clamp(max(c.r, max(c.g, c.b)), 0.0, 1.0)); }
`;let tC=null;const df=()=>tC??=new mm(1,160,96);let eC=null;const Qa=()=>eC??=new Mr(1,1);function pf(o,t){return t.transparent=!0,o.fades.push({material:t,base:t.opacity}),t}const Af=1.1,Q0=2,ty=1.25,ey=2,nC=new P2,Ql=new Map;let oS=8;function mf(o,t=!0){let i=Ql.get(o);return i||(i=new Promise((s,l)=>{nC.load($R+o,c=>{t&&(c.colorSpace=ni),c.anisotropy=oS,c.generateMipmaps=!0,c.minFilter=Is,s(c)},void 0,l)}),Ql.set(o,i)),i}function iC(o,t){const i=new hn,s={group:i,fades:[],dot:o.color},l=new hn;i.add(l),s.rot=l;const c=new hn;c.rotation.z=-(t.tilt??0),c.rotation.x=t.lean??.18,l.add(c);const f=pf(s,new Gp({color:new ze(o.color),roughness:1,metalness:0})),d=new ln(df(),f);c.add(d);let p=null,m=null;if(t.clouds&&(m=pf(s,new Gp({color:16777215,roughness:1,opacity:0,depthWrite:!1})),p=new ln(df(),m),p.scale.setScalar(1.006),c.add(p)),t.atmo){const[_,v,x,S]=t.atmo,A=wi(new en({uniforms:{uColor:{value:new K(_,v,x)},uStrength:{value:S},opacity:{value:1},uLight:{value:new K(-.55,.45,.7).normalize()}},vertexShader:"varying vec3 vN; void main(){ vN = normalize(normalMatrix*normal); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Vi+`uniform vec3 uColor; uniform float uStrength; uniform float opacity; uniform vec3 uLight; varying vec3 vN;
        void main(){ float mu = dot(normalize(vN), vec3(0.,0.,1.)); float rim = pow(1.0 - clamp(mu,0.,1.), 3.0);
          float lit = 0.14 + 0.86*smoothstep(-0.25, 0.6, dot(normalize(vN), uLight)); // faint rim survives on the night side
          gl_FragColor = premul(uColor * rim * lit * uStrength * 1.4, opacity); }`,depthWrite:!1,transparent:!0}));s.fades.push({material:A,base:1});const b=new ln(df(),A);b.scale.setScalar(t.atmoScale??1.035),i.add(b)}if(t.ring){const x=new pm(1.24,2.27,256,1),S=x.attributes.position,A=x.attributes.uv;for(let L=0;L<S.count;L++){const I=Math.hypot(S.getX(L),S.getY(L));A.setXY(L,(I-1.24)/(2.27-1.24),.5)}const b=pf(s,new Gp({color:16777215,side:Hi,roughness:1,depthWrite:!1,opacity:1,alphaTest:.01}));mf("ring.webp").then(L=>{b.map=L,b.needsUpdate=!0});const y=new ln(x,b);y.rotation.x=-Math.PI/2,c.add(y),c.rotation.x=.42}let g=0;return s.wantTex=_=>{const v=_&&t.hi?2:1;if(g>=v)return;g=v;const x=`${t.tex}_${v===2?"4k":"2k"}.webp`;mf(x).then(S=>{f.map=S,f.color.set(16777215),f.needsUpdate=!0}),m&&mf(`clouds_${v===2?"4k":"2k"}.webp`,!1).then(S=>{m.alphaMap=S,m.opacity=.9,s.fades.find(A=>A.material===m).base=.9,m.needsUpdate=!0})},s.update=(_,v,x,S,A)=>{S||(d.rotation.y+=v*(t.spin??.03)*Af*Q0*ty*A,p&&(p.rotation.y+=v*(t.spin??.03)*Af*Q0*ty*(.25+1*A)))},s}const Jp={sun:[44,.45,.6],sirius:[48,.55,.62],rigel:[46,.55,.62],pollux:[30,.3,.75],arcturus:[30,.3,.75],aldebaran:[28,.3,.78],antares:[17,.2,.88],betelgeuse:[16,.18,.9],uyscuti:[16,.2,.88],elnath:[46,.55,.62],aludra:[40,.5,.66],pistol:[36,.45,.7],vycma:[15,.2,.9],st218:[14,.2,.9]},ny={sun:{deep:[.92,.3,.03],mid:[1,.72,.26],bright:[1,.88,.5],hot:[1,.97,.86],prom:[.95,.3,.08],glow:[1,.36,.08]},sirius:{deep:[.14,.36,1],mid:[.5,.74,1],bright:[.86,.97,1],hot:[.97,1,1],prom:[.45,.6,1],glow:[.1,.5,1]},pollux:{deep:[.6,.17,.03],mid:[1,.5,.09],bright:[1,.76,.3],hot:[1,.95,.78],prom:[.8,.18,.04]},arcturus:{deep:[.6,.15,.03],mid:[1,.47,.08],bright:[1,.73,.27],hot:[1,.94,.76],prom:[.78,.16,.04]},aldebaran:{deep:[.55,.1,.02],mid:[1,.38,.06],bright:[1,.64,.2],hot:[1,.92,.7],prom:[.72,.12,.03]},rigel:{deep:[.16,.34,.98],mid:[.5,.7,1],bright:[.84,.94,1],hot:[.97,1,1],prom:[.45,.58,1],glow:[.12,.48,1]},antares:{deep:[.42,.04,.02],mid:[.9,.2,.04],bright:[1,.46,.12],hot:[1,.82,.55],prom:[.6,.06,.02]},betelgeuse:{deep:[.8,.26,.03],mid:[1,.54,.09],bright:[1,.82,.32],hot:[1,.95,.72],prom:[.7,.1,.03]},uyscuti:{deep:[.5,.07,.02],mid:[.96,.3,.04],bright:[1,.58,.14],hot:[1,.88,.62],prom:[.62,.08,.02]},elnath:{deep:[.2,.42,1],mid:[.55,.76,1],bright:[.88,.96,1],hot:[.97,1,1],prom:[.5,.64,1],glow:[.15,.52,1]},aludra:{deep:[.18,.38,1],mid:[.52,.72,1],bright:[.86,.95,1],hot:[.97,1,1],prom:[.45,.6,1],glow:[.12,.5,1]},pistol:{deep:[.12,.3,.95],mid:[.45,.66,1],bright:[.82,.92,1],hot:[.96,.99,1],prom:[.4,.55,1],glow:[.1,.42,1]},vycma:{deep:[.45,.05,.02],mid:[.92,.24,.05],bright:[1,.5,.13],hot:[1,.84,.58],prom:[.62,.07,.02]},st218:{deep:[.4,.03,.02],mid:[.86,.18,.04],bright:[1,.42,.1],hot:[1,.78,.5],prom:[.58,.05,.02]}},aC={sun:[6,.24,.19],sirius:[6,.24,.2],rigel:[6,.26,.21],pollux:[4,.3,.22],arcturus:[4,.32,.24],aldebaran:[4,.36,.27],antares:[5,.55,.42],betelgeuse:[5,.6,.46],uyscuti:[5,.55,.42],elnath:[6,.24,.2],aludra:[6,.26,.21],pistol:[6,.32,.26],vycma:[5,.6,.46],st218:[5,.62,.48]},sC=`
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
}`,rC=`
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
}`,oC=`
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
}`,lC=`
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
}`;function cC(o,t){const i=new hn,s={group:i,fades:[],dot:"#fff"},l=o.tempK??5800,c=ny[o.id]??ny.sun;s.dot=`rgb(${c.bright[0]*255|0},${c.bright[1]*255|0},${c.bright[2]*255|0})`;const f=rS(l*7+3),d=(Mt,z)=>new K(Math.cos(Mt)*Math.sin(z),Math.sin(Mt),Math.cos(Mt)*Math.cos(z)),p=[];let m=0,g=0;for(let Mt=0;Mt<6;Mt++)if(Mt<t.spots){const z=Mt===0||f()<.45;z?(m=(f()<.5?-1:1)*(.14+f()*.32),g=-.8+f()*1.6):(g-=.03+f()*.11,m+=(f()-.5)*.07);const Z=d(m,g);p.push(new an(Z.x,Z.y,Z.z,t.spotSize*(z?.8+f()*.6:.35+f()*.35)))}else p.push(new an(0,0,1,0));const _=[];for(let Mt=0;Mt<5;Mt++)if(Mt<t.active){const z=d((f()-.5)*1.1,(f()-.5)*1.8);_.push(new an(z.x,z.y,z.z,t.actSize*(.7+f()*.6)))}else _.push(new an(0,0,1,0));const v=Mt=>new K(...Mt),x={uDeep:{value:v(c.deep)},uMid:{value:v(c.mid)},uBright:{value:v(c.bright)},uHot:{value:v(c.hot)},uTime:{value:0},uScale:{value:t.scale},uContrast:{value:t.contrast},uPx:{value:500},uSeed:{value:l%97*.13},uRim:{value:1},uSpeck:{value:t.speck},uCell:{value:(Jp[o.id]??[30,.3,.75])[0]},uGran:{value:(Jp[o.id]??[30,.3,.75])[1]},uLimbD:{value:(Jp[o.id]??[30,.3,.75])[2]},uSpots:{value:p},uNSpots:{value:t.spots},uAct:{value:_},uNAct:{value:t.active},opacity:{value:1}},S=new en({uniforms:x,vertexShader:`varying vec3 vN; varying vec3 vP;
      void main(){ vN = normalize(normalMatrix*normal); vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,fragmentShader:Fs+sC,transparent:!0,toneMapped:!1,premultipliedAlpha:!0});s.fades.push({material:S,base:1});const A=new hn;i.add(A),s.rot=A;const b=new hn;b.rotation.z=-.12,A.add(b);const y=new ln(df(),S);y.renderOrder=0,b.add(y);const[L,I,w]=aC[o.id]??[4,.2,.15],N=l>7e3,D=N?1:o.id==="sun"?.6:0,U=1+1.8*D,E=w>.3,O=[],P=new K(0,1,0),F=v(c.hot.map((Mt,z)=>Mt*.7+c.bright[z]*.3));for(let Mt=0;Mt<L;Mt++){const z=new hn,Z=.7+f()*.6,ft=I*Z,G=w*Z*1.25,tt=new K(-Math.sin(ft/2),Math.cos(ft/2),0),ht=new K(Math.sin(ft/2),Math.cos(ft/2),0),xt=new K(0,0,1),j=[],wt=8;for(let ae=0;ae<wt;ae++){const Qt=ae<2,bt=[],Dt=G*(Qt?.85:.6+.5*f()),Et=(f()-.5)*ft*(Qt?.1:.3),Ft=(f()-.5)*G*.6,oe=f()*6.28,ve=2+f()*3,fe=(f()-.5)*.5;for(let it=0;it<=48;it++){const lt=it/48,yt=new K().copy(tt).lerp(ht,lt).normalize(),Nt=Math.sin(Math.PI*lt),Pt=1+Dt*Math.pow(Nt,.75)*(1+.1*Math.sin(lt*ve*3.1+oe)),St=yt.multiplyScalar(Pt);St.addScaledVector(xt,(Et+Ft*Nt+.05*G*Math.sin(lt*ve*5+oe))*Nt),St.x+=fe*G*Nt*Nt,bt.push(St)}const Te=new Vy(bt),Q=Qt?G*(.13+.05*f()):G*(.018+.05*f()*f()),Ve=new gm(Te,96,Q,Qt?10:7,!1),_e={uColor:{value:v(N?c.prom.map((it,lt)=>it*.55+c.bright[lt]*.45):c.prom)},uHotC:{value:F},opacity:{value:1},uTime:{value:0},uSeed:{value:Mt*5.1+ae*1.7},uGrow:{value:1},uDrift:{value:0},uReveal:{value:1.2},uBright:{value:1},uCore:{value:Qt?.2:1},uWide:{value:Qt?1:0},uSpeed:{value:U}};j.push(_e);const B=wi(new en({uniforms:_e,vertexShader:oC,fragmentShader:Vi+Fs+lC,depthWrite:!1,transparent:!0,toneMapped:!1,side:Hi}));s.fades.push({material:B,base:1});const T=new ln(Ve,B);T.renderOrder=1,z.add(T)}b.add(z),O.push({g:z,u:j,t0:0,D:10,erupt:!1,hm:1,gap:0})}const H=new Kn,q=new Kn,k=new K,W=Mt=>{const z=f()<(N?.8:.65),Z=f()*Math.PI*2,ft=z?-.12+f()*.35:.3+f()*.6,G=Math.sqrt(1-ft*ft);k.set(Math.cos(Z)*G,Math.sin(Z)*G,ft),b.getWorldQuaternion(H).invert(),k.applyQuaternion(H).normalize(),Mt.g.quaternion.setFromUnitVectors(P,k).multiply(q.setFromAxisAngle(P,f()*Math.PI*2))},X=(Mt,z,Z)=>{Mt.erupt=f()<.14+.16*D;const ft=(1-.5*D)*(E?1.25:1);Mt.D=(Mt.erupt?10+f()*4:7+f()*4)*ft,Mt.hm=Mt.erupt?1.2:.75+f()*.45,Mt.gap=(1+f()*5)*(1-.5*D)*(E?1.4:1);const G=Z*(Mt.D+Mt.gap);Mt.t0=z-G,W(Mt)};let Y=!1;const rt=(Mt,z,Z)=>{let ft=0,G=0,tt=1;const ht=1.2,xt=j=>j*j*(3-2*j);if(z<.4){const j=z/.4;ft=xt(Math.max(0,(j-.08)/.92)),tt=1+.6*Math.exp(-Math.pow(j/.12,2))}else if(z<.6){const j=(z-.4)/.2;ft=1+.06*Math.sin(j*Math.PI),tt=1+.45*Math.sin(j*Math.PI)}else{const j=Math.min(1,(z-.6)/.4);Mt.erupt?(ft=1.05,G=1.1*j*j*Mt.hm*w*6,tt=1.1*(1-xt(j))):(ft=1-xt(j),tt=1-.25*j)}D>0&&(tt*=(1+.7*D)*(1+D*(.22*Math.sin(Z*7.3+Mt.hm*11)+.14*Math.sin(Z*13.1+Mt.D)+.1*Math.sin(Z*23.7))));for(const j of Mt.u)j.uGrow.value=ft*Mt.hm,j.uReveal.value=ht,j.uDrift.value=G,j.uBright.value=tt,j.uTime.value=Z},nt=4.4,ct={uGlow:{value:v(c.glow??c.mid.map((Mt,z)=>Mt*.75+c.bright[z]*.25))},uHotGlow:{value:v(c.bright.map((Mt,z)=>Mt*.6+c.hot[z]*.4))},opacity:{value:1},uG:{value:nt},uTime:{value:0},uStrength:{value:t.glow},uFlame:{value:t.flame}},_t=wi(new en({uniforms:ct,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Vi+Fs+rC,depthWrite:!1,depthTest:!1,transparent:!0,toneMapped:!1}));s.fades.push({material:_t,base:1});const Ot=new ln(Qa(),_t);return Ot.scale.set(2*nt,2*nt,1),Ot.renderOrder=2,i.add(Ot),s.update=(Mt,z,Z,ft,G)=>{const tt=ft?0:Mt;x.uTime.value=tt,ct.uTime.value=tt;const ht=Mt/ey,xt=tt/ey;Y||(Y=!0,O.forEach(j=>X(j,ht,f()))),O.forEach((j,wt)=>{if(ft){j.g.visible=wt===0,wt===0&&rt(j,.12,0);return}const ae=(ht-j.t0)/j.D;if(ae>=1){j.g.visible=!1,(ae-1)*j.D>j.gap&&X(j,ht,0);return}rt(j,Math.max(0,ae),xt),j.g.visible=ae>=0&&(j.u[0].uGrow.value>.01||j.u[0].uDrift.value>0)}),x.uPx.value=Z*je.dpr,ft||(b.rotation.y+=z*.012*Af*(o.id==="sun"?Q0:1)*G)},s}const uC=`
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
}`,lS=`
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
`,fC=`
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
}`,hC=`
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
}`,Uf="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ";function af(o,t,i,s,l,c){const f={opacity:{value:1},uC:{value:new K(...l).multiplyScalar(c)}},d=wi(new en({uniforms:f,vertexShader:Uf,fragmentShader:Vi+"uniform float opacity; uniform vec3 uC; varying vec2 vUv; void main(){ float r = length(vUv-0.5)*2.0; float g = exp(-r*r*4.0)*(1.0 - smoothstep(0.8, 1.0, r)) + exp(-r*18.0)*1.5; gl_FragColor = premul(uC*g, opacity); }",depthWrite:!1,transparent:!0,toneMapped:!1}));o.fades.push({material:d,base:1});const p=new ln(Qa(),d);return p.position.set(t,i,0),p.scale.setScalar(s*2),p}function J0(o,t,i,s,l,c=[1,.93,.84]){const f={opacity:{value:1},uPx:{value:10},uSeed:{value:i},uKind:{value:t},uBright:{value:s},uAsp:{value:l},uTint:{value:new K(...c)}},d=wi(new en({uniforms:f,vertexShader:Uf,fragmentShader:Vi+Fs+lS+fC,depthWrite:!1,transparent:!0,toneMapped:!1}));return o.fades.push({material:d,base:1}),{mesh:new ln(Qa(),d),uPx:f.uPx}}function dC(o,t,i){const s={opacity:{value:1},uPx:{value:10},uSeed:{value:i},uSpan:{value:t*2}},l=wi(new en({uniforms:s,vertexShader:Uf,fragmentShader:Vi+Fs+lS+hC,depthWrite:!1,transparent:!0,toneMapped:!1}));o.fades.push({material:l,base:1});const c=new ln(Qa(),l);return c.scale.setScalar(t*2),c.renderOrder=-1,{mesh:c,uPx:s.uPx}}const pC={gold:[1,.8,.52],grey:[.78,.8,.84],blue:[.7,.82,1],dust:[.42,.26,.13],knot:[1,.55,.6],warm:[.95,.82,.62],warmR:.22,knotAmt:0};function cS(o,t){const i=new hn,s={group:i,fades:[],dot:"#e9dcc4"},l=t.pal??pC,c=[];if(t.field){const S=dC(s,2.3,t.seed);i.add(S.mesh),c.push({u:S.uPx,k:1})}const f={uTime:{value:0},uArms:{value:t.arms},uPitch:{value:t.pitch},uBar:{value:t.bar},uBulge:{value:t.bulge},uDust:{value:t.dust},uSeed:{value:t.seed},uPx:{value:500},opacity:{value:1},uSpin:{value:0},uFloc:{value:t.floc},uClump:{value:t.clump},uRing:{value:t.ring},uGold:{value:new K(...l.gold)},uGrey:{value:new K(...l.grey)},uBlue:{value:new K(...l.blue)},uDustC:{value:new K(...l.dust)},uKnot:{value:new K(...l.knot)},uWarm:{value:new K(...l.warm)},uWarmR:{value:l.warmR},uKnotAmt:{value:l.knotAmt},uGain:{value:l.gain??1}},d=wi(new en({uniforms:f,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Vi+Fs+uC,depthWrite:!1,transparent:!0,toneMapped:!1,side:Hi}));s.fades.push({material:d,base:1});const p=new hn;i.add(p),s.rot=p;const m=new hn;m.rotation.set(t.tilt,0,t.pa,"ZXY"),p.add(m);const g=new ln(Qa(),d);g.scale.set(2.5,2.5,1),m.add(g);const _={opacity:{value:1}},v=wi(new en({uniforms:_,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Vi+"uniform float opacity; varying vec2 vUv; void main(){ float r = length(vUv-0.5)*2.0; float g = exp(-r*r*18.0)*0.35 + exp(-r*6.0)*0.08; gl_FragColor = premul(vec3(1.0, 0.82, 0.58)*g, opacity); }",depthWrite:!1,depthTest:!1,transparent:!0,toneMapped:!1}));s.fades.push({material:v,base:1});const x=new ln(Qa(),v);x.scale.set(t.bulge*3.2,t.bulge*3.2,1),x.renderOrder=3,i.add(x);for(const[S,A,b,y,L,I]of t.sats??[]){const w=J0(s,0,t.seed+S*13,I,y/b);w.mesh.position.set(S,A,0),w.mesh.scale.setScalar(b*2.4),w.mesh.rotation.z=L,w.mesh.renderOrder=2,i.add(w.mesh),c.push({u:w.uPx,k:b})}return s.update=(S,A,b,y,L)=>{f.uPx.value=b*je.dpr;for(const I of c)I.u.value=b*I.k*je.dpr;y||(f.uSpin.value+=A*.008*Af*L)},s}const mC=`
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
}`;function gC(o,t){const i=new hn,s={group:i,fades:[],dot:o.color},l=new hn;i.add(l),s.rot=l;const c=new hn;c.rotation.set(t.tilt,0,t.roll,"ZXY"),l.add(c);const f=(Wl[o.id]??6)+.6,d={uTime:{value:0},opacity:{value:1},uQ:{value:f},uIn:{value:t.disk[0]},uOut:{value:t.disk[1]},uGain:{value:t.gain},uQuasar:{value:t.quasar},uPx:{value:300},uHot:{value:new K(...t.hot)},uCool:{value:new K(...t.cool)},uRing:{value:new K(...t.ring)},uM:{value:new ge}},p=wi(new en({uniforms:d,vertexShader:Uf,fragmentShader:Fs+mC,depthWrite:!1,depthTest:!1,transparent:!0,toneMapped:!1}));s.fades.push({material:p,base:1});const m=new ln(Qa(),p);m.scale.set(2*f,2*f,1),i.add(m);const g=new Kn,_=new cn;let v=0;return s.update=(x,S,A,b)=>{b||(v+=S),d.uTime.value=v,d.uPx.value=A*je.dpr,g.copy(l.quaternion).multiply(c.quaternion).invert(),d.uM.value.setFromMatrix4(_.makeRotationFromQuaternion(g))},s}function vC(o,t){const i=new hn,s={group:i,fades:[],dot:o.color,flat:!0},l={uMap:{value:null},opacity:{value:1},uMask:{value:new ce(...t.mask)},uSat:{value:t.sat??1},uGain:{value:0},uAspect:{value:t.aspect}},c=wi(new en({uniforms:l,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Vi+`uniform sampler2D uMap; uniform float opacity, uSat, uGain, uAspect; uniform vec2 uMask; varying vec2 vUv;
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
      }`,depthWrite:!1,transparent:!0,toneMapped:!1}));s.fades.push({material:c,base:1});const f=new ln(Qa(),c),d=2/t.fill;f.scale.set(d,d*t.aspect,1),i.add(f);let p=!1;return s.wantTex=()=>{p||(p=!0,mf(t.src).then(m=>{l.uMap.value=m,l.uGain.value=t.gain??1}))},s}function _C(o){const t={opacity:{value:1},uDpr:{value:1},uScale:{value:1}},i=wi(new en({uniforms:t,vertexShader:`attribute float aSize; attribute vec3 aColor; attribute float aAlpha; uniform float uDpr, uScale; varying vec3 vC; varying float vA;
      void main(){ vC = aColor; vA = aAlpha; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);
        float s = aSize*uDpr*uScale; gl_PointSize = max(s, 1.0); vA *= min(1.0, s*s); }`,fragmentShader:Vi+`uniform float opacity; varying vec3 vC; varying float vA;
      void main(){ vec2 q = gl_PointCoord-0.5; float d = dot(q,q)*4.0; float a = exp(-d*3.2); if (a < 0.01) discard; gl_FragColor = premul(vC*a*vA, opacity); }`,depthWrite:!1,transparent:!0,toneMapped:!1}));return o.fades.push({material:i,base:1}),{m:i,u:t}}function xC(o,t){const i=t.length,s=new Float32Array(i*3),l=new Float32Array(i),c=new Float32Array(i*3),f=new Float32Array(i);t.forEach((_,v)=>{s[v*3]=_.x,s[v*3+1]=_.y,s[v*3+2]=0,l[v]=_.s,c.set(_.c,v*3),f[v]=_.a});const d=new kn;d.setAttribute("position",new Yn(s,3)),d.setAttribute("aSize",new Yn(l,1)),d.setAttribute("aColor",new Yn(c,3)),d.setAttribute("aAlpha",new Yn(f,1));const{m:p,u:m}=_C(o),g=new By(d,p);return g.frustumCulled=!1,{points:g,u:m}}function kl(o,t,i,s){const l=new kn;l.setAttribute("position",new Yn(new Float32Array(t),3));const c=pf(o,new Iy({color:i,opacity:s,depthWrite:!1,toneMapped:!1})),f=new o2(l,c);return f.frustumCulled=!1,f}function To(o,t,i){const s={opacity:{value:1},uC:{value:new K(...t)},uRim:{value:i.rim},uRimW:{value:i.rimW},uFill:{value:i.fill},uInner:{value:i.inner??0},uDash:{value:i.dash??0},uNoise:{value:i.noise??0},uOff:{value:i.offset??0}},l=wi(new en({uniforms:s,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Vi+Fs+`uniform float opacity, uRim, uRimW, uFill, uInner, uDash, uNoise, uOff; uniform vec3 uC; varying vec2 vUv;
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
      }`,depthWrite:!1,transparent:!0,toneMapped:!1}));o.fades.push({material:l,base:1});const c=new ln(Qa(),l);return c.scale.set(2.4,2.4,1),c}const qa=[1,.93,.82],Us=[.83,.65,.45],yC=[.85,.9,1];function SC(o,t,i=1){const s=[];for(let l=0;l<t;l++){const c=o()*Math.PI*2,f=Math.sqrt(o())*.96;s.push([Math.cos(c)*f,Math.sin(c)*f*i,o()])}return s}function iy(o,t,i=3){const s=[];for(let l=0;l<o.length;l++){const c=[];for(let f=0;f<o.length;f++){if(l===f)continue;const d=Math.hypot(o[l][0]-o[f][0],o[l][1]-o[f][1]);d<t&&c.push([d,f])}c.sort((f,d)=>f[0]-d[0]);for(const[,f]of c.slice(0,i))s.some(([d,p])=>d===f&&p===l)||s.push([l,f])}return s}function MC(o,t){const i=new hn,s={group:i,fades:[],dot:o.color,flat:!0},l=rS(o.id.length*7919+17),c=[],f=g=>{const{points:_,u:v}=xC(s,g);return i.add(_),c.push(v.uScale),v},d=[],p=g=>{const _=f(g);return d.push(_.uDpr),_};let m;switch(t.kind){case"heliosphere":{i.add(To(s,[.72,.8,.95],{rim:.32,rimW:.035,fill:.07,inner:.78,dash:90,noise:1}));const g=[];for(let _=0;_<260;_++){const v=l()*Math.PI*2,x=.04+l()*.2,S=.35+l()*.5;g.push(Math.cos(v)*x,Math.sin(v)*x,0,Math.cos(v)*S,Math.sin(v)*S,0)}i.add(kl(s,g,6050886,.35)),p([{x:0,y:0,s:6,c:[1,.95,.85],a:1},{x:0,y:0,s:18,c:[1,.85,.6],a:.35}]);break}case"oort":{const g=[];for(let _=0;_<42e3;_++){const v=l()*2-1,x=l()*Math.PI*2,S=Math.pow(.03+l()*.97,.33),A=Math.sqrt(1-v*v);g.push({x:S*A*Math.cos(x),y:S*v,s:.9+l()*1.1,c:yC,a:.18+l()*.4})}g.push({x:0,y:0,s:5,c:[1,.93,.8],a:1}),p(g),i.add(To(s,[.8,.85,.95],{rim:.05,rimW:.12,fill:.03}));break}case"group":{i.add(To(s,Us,{rim:.12,rimW:.01,fill:.02,noise:1}));const g=[],_=[],v=(D,U,E,O,P)=>{const F=cS({...o},{...P,field:0,sats:[]});F.group.position.set(U,E,0),F.group.scale.setScalar(O),F.fades.forEach(H=>s.fades.push(H)),i.add(F.group),g.push({o:F,r:O})},x=(D,U,E,O,P,F=1,H=0)=>{const q=J0(s,O,D*91+U*37,P,F);q.mesh.position.set(D,U,0),q.mesh.scale.setScalar(E*2.4),q.mesh.rotation.z=H,i.add(q.mesh),_.push({u:q.uPx,r:E})},S=[-.2,-.12],A=[.25,.12];v("milkyway",S[0],S[1],.01,sS.milkyway),v("andromeda",A[0],A[1],.0152,j1),v("triangulum",A[0]+.1,A[1]-.08,.006,{type:"galaxy",arms:2,pitch:.4,bar:0,bulge:.06,dust:.6,seed:5.3,floc:.9,clump:1.2,ring:0,tilt:-.9,pa:.4,pal:{...j1.pal,grey:[.62,.68,.9],knot:[1,.35,.5],gold:[1,.92,.8]}});const b=[[S[0]+.018,S[1]-.028,.0014,1,1.2,.8,.3],[S[0]+.03,S[1]-.027,8e-4,1,1,.7,.8],[S[0]-.05,S[1]+.077,6e-4,0,.55],[S[0]+.04,S[1]+.042,5e-4,0,.45],[S[0]-.045,S[1]-.025,4e-4,0,.4],[S[0]+.02,S[1]+.16,5e-4,0,.45],[S[0]+.003,S[1]+.006,6e-4,0,.35,.4,1.2],[A[0]-.004,A[1]-.007,9e-4,0,.8,.6,.9],[A[0]+.011,A[1]+.04,5e-4,0,.55],[A[0]-.006,A[1]+.05,5e-4,0,.5,.7],[-.35,.13,7e-4,1,.9,.8,.2],[.05,.35,8e-4,1,.7,.9,.5],[-.55,-.55,6e-4,1,.8,.45,1.3]];for(const[D,U,E,O,P,F,H]of b)x(D,U,E,O,P,F??1,H??0);const y=[{x:S[0],y:S[1],s:60,c:qa,a:.16},{x:A[0],y:A[1],s:76,c:[.9,.86,1],a:.16}];for(const[D,U,,E]of b)y.push({x:D,y:U,s:E?14:9,c:E?[.82,.8,1]:qa,a:E?.45:.35});for(let D=0;D<60;D++){const U=D<22?S:D<44?A:[0,0],E=D<44?.06:.4;y.push({x:U[0]+Ns(l)*E,y:U[1]+Ns(l)*E,s:1.3+l()*1.4,c:qa,a:.35+l()*.4})}p(y),s.labels=[{x:S[0],y:S[1],r:.01,name:"milky way",major:!0,left:!0},{x:A[0],y:A[1],r:.0152,name:"andromeda",major:!0},{x:A[0]+.1,y:A[1]-.08,r:.006,name:"triangulum"},{x:S[0]+.024,y:S[1]-.028,r:.008,name:"magellanic clouds"},{x:S[0]+.02,y:S[1]+.16,r:.001,name:"leo i"},{x:-.35,y:.13,r:.001,name:"ngc 6822"},{x:.05,y:.35,r:.001,name:"ic 1613"},{x:-.55,y:-.55,r:.001,name:"wlm"}],i.add(af(s,S[0],S[1],.09,[.85,.8,.7],.05)),i.add(af(s,A[0],A[1],.11,[.78,.74,.95],.05));const L=[],I=A[0]-S[0],w=A[1]-S[1],N=Math.hypot(I,w);for(let D=.05;D<.95;D+=.02){const U=D+.01;L.push(S[0]+I*D,S[1]+w*D,0,S[0]+I*U,S[1]+w*U,0)}i.add(kl(s,L,10123861,.9)),s.labels.push({x:S[0]+I*.62,y:S[1]+w*.62,r:0,name:`${(N*5).toFixed(1)}m light-years`}),m=(D,U,E,O,P)=>{for(const F of g)F.o.update?.(D,U,E*F.r,O,P);for(const F of _)F.u.value=E*F.r*je.dpr};break}case"dwarf":{const g=[];for(let _=0;_<650;_++){const v=Math.max(1e-4,l()*.97),x=.62/Math.sqrt(Math.pow(v,-2/3)-1);if(x>1.7)continue;const S=l()*Math.PI*2,A=l()<.04,b=l()<.08;g.push({x:Math.cos(S)*x,y:Math.sin(S)*x*.92,s:b?3.2+l()*1.8:1.5+l()*1.3,c:A?[.75,.84,1]:b?[1,.78,.52]:[1,.9,.76],a:b?1:.6+l()*.4})}p(g),i.add(af(s,0,0,.8,[1,.88,.72],.1));break}case"elliptical":{const g=[],_=(x,S,A,b,y,L,I)=>{const w=J0(s,0,x*91+S*37+5,b,y,I);w.mesh.position.set(x,S,0),w.mesh.scale.setScalar(A*2.4),w.mesh.rotation.z=L,i.add(w.mesh),g.push({u:w.uPx,r:A})};i.add(af(s,0,0,1.25,[1,.8,.5],.09)),_(0,0,1,1.25,.56,.62,[1,.8,.52]);for(let x=0;x<26;x++){const S=l()*Math.PI*2,A=.45+Math.pow(l(),.7)*1.1,b=.012+l()*l()*.07;_(Math.cos(S)*A,Math.sin(S)*A*.8,b,.8+l()*.6,.55+l()*.45,l()*3.14,l()<.2?[.86,.88,1]:[1,.86,.66])}const v=[];for(let x=0;x<260;x++){const S=l()*Math.PI*2,A=Math.sqrt(l())*1.9;v.push({x:Math.cos(S)*A,y:Math.sin(S)*A*.8,s:.9+l()*.9,c:l()<.7?qa:[.85,.88,1],a:.15+l()*.3})}p(v),m=(x,S,A)=>{for(const b of g)b.u.value=A*b.r*je.dpr};break}case"supercluster":{const g=SC(l,90,.72);g.push([.05,0,1]);const _=[],v=[];for(const[x,S]of iy(g,.42)){_.push(g[x][0],g[x][1],0,g[S][0],g[S][1],0);const A=Math.hypot(g[x][0]-g[S][0],g[x][1]-g[S][1]);for(let b=0;b<260*A;b++){const y=l();v.push({x:g[x][0]+(g[S][0]-g[x][0])*y+Ns(l)*.01,y:g[x][1]+(g[S][1]-g[x][1])*y+Ns(l)*.01,s:1+l(),c:l()<.7?qa:Us,a:.25+l()*.4})}}for(const[x,S,A]of g)for(let b=0;b<30+A*90;b++)v.push({x:x+Ns(l)*.013,y:S+Ns(l)*.013,s:1.1+l()*1.3,c:qa,a:.4+l()*.5});i.add(kl(s,_,6967864,.8)),p(v),i.add(To(s,Us,{rim:0,rimW:.1,fill:.05,noise:1}));break}case"laniakea":{const v=[];for(let S=0;S<220;S++){const A=l()*Math.PI*2,b=.5+l()*.48;let y=Math.cos(A)*b,L=Math.sin(A)*b*.86;const I=(l()-.5)*1.5;for(let w=0;w<80;w++){const N=.08-y,D=.05-L,U=Math.hypot(N,D);if(U<.03)break;const E=N/U+-D/U*I*U,O=D/U+N/U*I*U,P=y+E*.016,F=L+O*.016;v.push(y,L,0,P,F,0),y=P,L=F}}i.add(kl(s,v,4866098,.9));const x=[];for(let S=0;S<16e3;S++){const A=l()*Math.PI*2,b=Math.pow(l(),.7)*.98;x.push({x:Math.cos(A)*b,y:Math.sin(A)*b*.86,s:.9+l()*1.1,c:l()<.8?qa:Us,a:.15+l()*.4})}x.push({x:.08,y:.05,s:30,c:Us,a:.3}),p(x),i.add(To(s,Us,{rim:.14,rimW:.008,fill:.04}));break}case"universe":{i.add(To(s,Us,{rim:.5,rimW:.05,fill:.05,noise:1}));const g=[];for(let x=0;x<700;x++){const S=l()*2-1,A=l()*Math.PI*2,b=Math.cbrt(l())*.985,y=Math.sqrt(1-S*S);g.push([b*y*Math.cos(A),b*S,l()])}const _=[],v=[];for(const[x,S]of iy(g,.16)){_.push(g[x][0],g[x][1],0,g[S][0],g[S][1],0);const A=Math.hypot(g[x][0]-g[S][0],g[x][1]-g[S][1]);for(let b=0;b<500*A;b++){const y=l();v.push({x:g[x][0]+(g[S][0]-g[x][0])*y+Ns(l)*.004,y:g[x][1]+(g[S][1]-g[x][1])*y+Ns(l)*.004,s:.8+l()*.8,c:l()<.6?qa:Us,a:.1+l()*.18})}}for(const[x,S,A]of g)v.push({x,y:S,s:3+A*6,c:qa,a:.12+A*.14});v.push({x:0,y:0,s:3,c:[.96,.95,.92],a:1}),i.add(kl(s,_,6179379,.5)),p(v);break}}return s.update=(g,_,v,x,S)=>{m?.(g,_,v,x,S);const A=Math.min(1,Math.max(.35,v/260));for(const b of c)b.value=A;for(const b of d)b.value=je.dpr},s}class je{constructor(t,i){this.bodies=i,this.renderer=new FR({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=ni,this.renderer.toneMapping=em,this.renderer.toneMappingExposure=1.15,oS=this.renderer.capabilities.getMaxAnisotropy(),je.renderer=this.renderer;try{const l=this.renderer.getContext(),c=l.getParameter(l.ALIASED_POINT_SIZE_RANGE);je.maxPoint=Math.max(8,Math.min(256,c?.[1]??64))}catch{}const s=new B2(16775406,3.7);s.position.set(-1,.75,.85),this.scene.add(s),this.scene.add(new F2(8949920,.006))}bodies;static dpr=1;static renderer=null;static vw=1;static vh=1;static quality=1;static maxPoint=64;renderer;scene=new Mf;camera=new Oo(-1,1,1,-1,-10,10);objs=new Map;st=new Map;now=0;state(t){let i=this.st.get(t);return i||(i={vx:0,vy:0,last:-1e9,dragging:!1,tx:0,ty:0,gx:0,gy:0},this.st.set(t,i)),i}static qa=new Kn;static ax=new K;turn(t,i,s,l){if(l){const f=t.userData,d=(f.yaw??0)+i,p=(f.pitch??0)+s;return f.yaw=Math.max(-l[0],Math.min(l[0],d)),f.pitch=Math.max(-l[1],Math.min(l[1],p)),[f.yaw!==d,f.pitch!==p]}const c=je.qa;return i&&(c.setFromAxisAngle(je.ax.set(0,1,0),i),t.quaternion.premultiply(c)),s&&(c.setFromAxisAngle(je.ax.set(1,0,0),s),t.quaternion.premultiply(c)),[!1,!1]}grabKind(t){const i=this.objs.get(t);return i?i.rot?"rotate":i.flat?"tilt":null:null}grab(t){const i=this.state(t);i.dragging=!0,i.vx=0,i.vy=0,i.last=this.now}drag(t,i,s,l,c){const f=this.objs.get(t),d=this.state(t);if(f)if(d.last=this.now,f.rot){const p=i/Math.max(l,40),m=s/Math.max(l,40);this.turn(f.rot,p,m,f.limit);const g=Math.min(1,c*18);d.vx+=(p/Math.max(c,1/240)-d.vx)*g,d.vy+=(m/Math.max(c,1/240)-d.vy)*g}else f.flat&&(d.gx=Math.max(-.35,Math.min(.35,d.gx+i/Math.max(l,80)*.5)),d.gy=Math.max(-.35,Math.min(.35,d.gy+s/Math.max(l,80)*.5)))}release(t,i){const s=this.state(t);s.dragging=!1,s.last=this.now,s.gx=0,s.gy=0,i&&(s.vx=0,s.vy=0);const l=12;s.vx=Math.max(-l,Math.min(l,s.vx)),s.vy=Math.max(-l,Math.min(l,s.vy))}w=1;h=1;resize(t,i,s){this.w=t,this.h=i,je.dpr=s,je.vw=t,je.vh=i,this.renderer.setPixelRatio(s),this.renderer.setSize(t,i,!1)}obj(t){let i=this.objs.get(t);if(!i){const s=this.bodies[t],l=sS[s.id];i=l.type==="planet"?iC(s,l):l.type==="star"?cC(s,l):l.type==="image"?vC(s,l):l.type==="galaxy"?cS(s,l):l.type==="bh"?gC(s,l):l.type==="cloud"?jR(s,l.kind,[]):MC(s,l),i.group.visible=!1,this.scene.add(i.group),this.objs.set(t,i)}return i}has(t){return this.objs.has(t)}rtA=null;rtB=null;rtC=null;fsScene=new Mf;fsCam=new Oo(-1,1,1,-1,0,1);fsQuad=null;blurMat=null;compMat=null;setupDof(){const t=Math.max(1,Math.round(this.w*je.dpr)),i=Math.max(1,Math.round(this.h*je.dpr)),s=(l,c,f)=>{const d=new Ti(l,c,{samples:f,depthBuffer:f>0});return d.texture.colorSpace=ni,d.texture.internalFormat="RGBA8",d};if((!this.rtA||this.rtA.width!==t||this.rtA.height!==i)&&(this.rtA?.dispose(),this.rtB?.dispose(),this.rtC?.dispose(),this.rtA=s(t,i,4),this.rtA.isXRRenderTarget=!0,this.rtB=s(Math.ceil(t/2),Math.ceil(i/2),0),this.rtC=s(Math.ceil(t/2),Math.ceil(i/2),0)),!this.fsQuad){const l="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy*2.0, 0.0, 1.0); }";this.blurMat=new en({uniforms:{tMap:{value:null},uDir:{value:new ce}},vertexShader:l,fragmentShader:`uniform sampler2D tMap; uniform vec2 uDir; varying vec2 vUv;
          void main(){
            vec4 c = texture2D(tMap, vUv)*0.2270;
            c += (texture2D(tMap, vUv + uDir*1.3846) + texture2D(tMap, vUv - uDir*1.3846))*0.3162;
            c += (texture2D(tMap, vUv + uDir*3.2308) + texture2D(tMap, vUv - uDir*3.2308))*0.0703;
            gl_FragColor = c;
          }`,depthTest:!1,depthWrite:!1,blending:na,toneMapped:!1}),this.compMat=new en({uniforms:{tSharp:{value:null},tSoft:{value:null},uAmt:{value:0}},vertexShader:l,fragmentShader:`uniform sampler2D tSharp, tSoft; uniform float uAmt; varying vec2 vUv;
          void main(){ gl_FragColor = mix(texture2D(tSharp, vUv), texture2D(tSoft, vUv), uAmt); }`,depthTest:!1,depthWrite:!1,blending:na,toneMapped:!1}),this.fsQuad=new ln(new Mr(1,1),this.blurMat),this.fsQuad.frustumCulled=!1,this.fsScene.add(this.fsQuad)}}renderDof(t,i){this.setupDof();const s=this.renderer,l=this.camera,c=this.rtA,f=this.rtB,d=this.rtC,p=this.fsQuad,m=this.blurMat,g=this.compMat;t.group.visible=!1,s.setRenderTarget(c),s.clear(),s.render(this.scene,l),t.group.visible=!0;const _=2.6*je.dpr*i/2;p.material=m,m.uniforms.tMap.value=c.texture,m.uniforms.uDir.value.set(_/f.width*.5,0),s.setRenderTarget(f),s.render(this.fsScene,this.fsCam),m.uniforms.tMap.value=f.texture,m.uniforms.uDir.value.set(0,_/d.height*.5),s.setRenderTarget(d),s.render(this.fsScene,this.fsCam),m.uniforms.tMap.value=d.texture,m.uniforms.uDir.value.set(_/f.width*.5,0),s.setRenderTarget(f),s.render(this.fsScene,this.fsCam),m.uniforms.tMap.value=f.texture,m.uniforms.uDir.value.set(0,_/d.height*.5),s.setRenderTarget(d),s.render(this.fsScene,this.fsCam),s.setRenderTarget(null),s.clear(),p.material=g,g.uniforms.tSharp.value=c.texture,g.uniforms.tSoft.value=d.texture,g.uniforms.uAmt.value=Math.min(1,i*1.4),s.render(this.fsScene,this.fsCam);const v=[];for(const x of this.objs.values())x!==t&&x.group.visible&&(x.group.visible=!1,v.push(x));s.autoClear=!1,s.render(this.scene,l),s.autoClear=!0;for(const x of v)x.group.visible=!0}render(t,i,s,l,c,f,d=0){this.now=i;for(const v of this.objs.values())v.group.visible=!1;let p=10,m=0;for(const v of t){const x=this.obj(v.i);x.wantTex?.(c&&Math.abs(v.i-f)<=1),x.group.visible=!0,x.group.position.set(v.x-this.w/2,this.h/2-v.y,m),x.group.scale.setScalar(v.rs);for(const y of x.fades){const L=y.base*v.alpha;y.material.opacity=L;const I=y.material.uniforms;I&&I.opacity&&(I.opacity.value=L)}const S=this.state(v.i);if(x.rot&&!S.dragging&&(S.vx||S.vy)){const[y,L]=this.turn(x.rot,S.vx*s,S.vy*s,x.limit);y&&(S.vx=0),L&&(S.vy=0);const I=Math.exp(-s*2.4);S.vx*=I,S.vy*=I,Math.abs(S.vx)+Math.abs(S.vy)<.002&&(S.vx=0,S.vy=0),(S.vx||S.vy)&&(S.last=i)}if(x.flat){const y=1-Math.exp(-s*(S.dragging?14:5));S.tx+=(S.gx-S.tx)*y,S.ty+=(S.gy-S.ty)*y,x.group.rotation.set(S.ty,S.tx,0)}const A=i-S.last,b=l?0:Math.min(1,Math.max(0,(A-3)/2));x.update?.(i,s,v.rs,l,b),p=Math.max(p,v.rs*3),m+=0}for(const[v,x]of this.objs)x.sleep&&Math.abs(v-f)>3&&x.sleep();const g=this.camera;g.left=-this.w/2,g.right=this.w/2,g.top=this.h/2,g.bottom=-this.h/2,g.near=-p*1.1,g.far=p*1.1,g.position.set(0,0,0),g.updateProjectionMatrix();const _=this.objs.get(f);d>.01&&_&&_.group.visible&&t.length>1?this.renderDof(_,d):this.renderer.render(this.scene,g)}async warm(t,i){this.prefetch(t,i);for(let c=0;c<4;c++){const f=Ql.size;if(await Promise.allSettled([...Ql.values()]),Ql.size===f)break}const s=[t-1,t,t+1,t+2].filter(c=>c>=0&&c<this.bodies.length).map(c=>this.obj(c)),l=s.map(c=>c.group.visible);s.forEach(c=>{c.group.visible=!0});try{const c=this.renderer;c.compileAsync&&c.extensions.has("KHR_parallel_shader_compile")?await c.compileAsync(this.scene,this.camera):c.compile(this.scene,this.camera)}catch{}s.forEach((c,f)=>{c.group.visible=l[f]})}prefetch(t,i){for(const s of[t,t+1,t-1,t+2])s<0||s>=this.bodies.length||this.obj(s).wantTex?.(i&&Math.abs(s-t)<=1)}}class bC{constructor(t){this.canvas=t,this.ctx=t.getContext("2d",{alpha:!1})}canvas;ctx;field=null;margin=0;w=0;h=0;dpr=1;meteors=[];next=4+Math.random()*5;twinkle=[];reduced=!1;resize(t,i,s){this.w=t,this.h=i,this.dpr=s,this.canvas.width=Math.round(t*s),this.canvas.height=Math.round(i*s),this.build()}build(){const t=this.canvas.height,i=this.dpr;this.margin=Math.round(this.canvas.width*.12);const s=this.canvas.width+this.margin,l=document.createElement("canvas");l.width=s,l.height=t;const c=l.getContext("2d");c.fillStyle="#0a0a0b",c.fillRect(0,0,s,t);let f=918273;const d=()=>(f=f*16807%2147483647)/2147483647,p=()=>Math.sqrt(-2*Math.log(d()+1e-9))*Math.cos(2*Math.PI*d()),m=-.42,g=s*.5,_=t*.55,v=Math.cos(m),x=Math.sin(m),S=(I,w,N,D,U)=>{for(let E=0;E<D;E++){const O=(d()-.5)*Math.hypot(s,t)*1.1,P=I+p()*w,F=g+v*O-x*P,H=_+x*O+v*P,q=w*(.6+d()*1.6),k=c.createRadialGradient(F,H,0,F,H,q);k.addColorStop(0,N.replace("A",String(U*(.5+d())))),k.addColorStop(1,N.replace("A","0")),c.fillStyle=k,c.fillRect(F-q,H-q,q*2,q*2)}},A=Math.min(s,t)*.1;S(0,A,"rgba(200,190,175,A)",90,.0065),S(0,A*.45,"rgba(225,205,180,A)",70,.006);const b=s*t/(i*i),y=Math.round(b/520),L=(I,w,N)=>{const D=d(),U=D<.12?[255,214,170]:D<.25?[200,215,255]:[244,241,234],E=Math.min(1,.12+Math.pow(N,2.2)*.9),O=(.55+N*1.1)*i;if(O<=1.35)c.fillStyle=`rgba(${U[0]},${U[1]},${U[2]},${E*Math.max(.35,O)})`,c.fillRect(Math.round(I),Math.round(w),1,1);else{const P=O,F=c.createRadialGradient(I,w,0,I,w,P);F.addColorStop(0,`rgba(${U[0]},${U[1]},${U[2]},${E})`),F.addColorStop(.35,`rgba(${U[0]},${U[1]},${U[2]},${E*.45})`),F.addColorStop(1,`rgba(${U[0]},${U[1]},${U[2]},0)`),c.fillStyle=F,c.beginPath(),c.arc(I,w,P,0,Math.PI*2),c.fill()}};for(let I=0;I<y;I++)L(d()*s,d()*t,Math.pow(d(),6));for(let I=0;I<y*.9;I++){const w=(d()-.5)*Math.hypot(s,t)*1.1,N=p()*A*.7,D=g+v*w-x*N,U=_+x*w+v*N;D<0||U<0||D>=s||U>=t||L(D,U,Math.pow(d(),9)*.6)}this.twinkle=[];for(let I=0;I<Math.round(b/18e3);I++)this.twinkle.push({x:d()*s,y:d()*t,r:(.8+d()*.8)*i,a:.3+d()*.5,p:d()*6.28});this.field=l}draw(t,i,s){const{ctx:l}=this,c=this.canvas.width;if(!this.field)return;l.setTransform(1,0,0,1,0,0),l.globalCompositeOperation="source-over",l.globalAlpha=1;const f=Math.round(Math.max(0,Math.min(1,t))*this.margin);if(l.drawImage(this.field,-f,0),!this.reduced){for(const d of this.twinkle){const p=d.a*(.5+.5*Math.sin(i*1.3+d.p)),m=d.x-f;m<0||m>c||(l.fillStyle=`rgba(244,241,234,${p*.6})`,l.fillRect(Math.round(m),Math.round(d.y),Math.max(1,Math.round(d.r)),Math.max(1,Math.round(d.r))))}this.meteorsStep(s)}}meteorsStep(t){const{ctx:i}=this,s=this.dpr;if(document.visibilityState==="visible"&&(this.next-=t),this.next<=0){this.next=6+Math.random()*9;const l=this.w,c=this.h,f=Math.random()<.5?-1:1,d=.25+Math.random()*.35,p=700+Math.random()*600;this.meteors.push({x:l*(.15+Math.random()*.7),y:c*(.05+Math.random()*.35),vx:Math.cos(d)*p*f,vy:Math.sin(d)*p,len:110+Math.random()*130,life:.55+Math.random()*.5,age:0,tan:Math.random()<.35,w:1+Math.random()*.6})}i.globalCompositeOperation="lighter",this.meteors=this.meteors.filter(l=>{if(l.age+=t,l.age>l.life)return!1;l.x+=l.vx*t,l.y+=l.vy*t;const c=l.age/l.life,f=Math.min(1,c*6)*(1-Math.pow(c,2)),d=Math.hypot(l.vx,l.vy),p=l.vx/d,m=l.vy/d,g=l.len*Math.min(1,c*4),_=l.x*s,v=l.y*s,x=(l.x-p*g)*s,S=(l.y-m*g)*s,A=-m*l.w*s*.5,b=p*l.w*s*.5,y="244,241,234",L=i.createLinearGradient(_,v,x,S);return L.addColorStop(0,`rgba(${y},${.85*f})`),L.addColorStop(.25,`rgba(${y},${.35*f})`),L.addColorStop(1,`rgba(${y},0)`),i.fillStyle=L,i.beginPath(),i.moveTo(_+A,v+b),i.lineTo(x,S),i.lineTo(_-A,v-b),i.closePath(),i.fill(),i.fillStyle=`rgba(255,250,240,${.9*f})`,i.beginPath(),i.arc(_,v,l.w*s*.6,0,Math.PI*2),i.fill(),!0}),i.globalCompositeOperation="source-over"}}const ay=.2,sy=13*Math.PI/180,ry=[Math.cos(sy),-Math.sin(sy)],jp=.06;function oy(o,t){let i=Math.min(window.devicePixelRatio||1,3);const s=3840*2160*1.6;return o*t*i*i>s&&(i=Math.sqrt(s/(o*t))),Math.max(1,i)}function j0(o,t){return Math.max(1,Math.min(o/1600,t/1e3,2.4))}class wf{constructor(t,i,s,l=zs){this.bgCanvas=t,this.overlay=s,this.bodies=l,this.bg=new bC(t);try{this.gl=new je(i,l)}catch(c){console.warn("webgl unavailable, drawing flat discs",c)}this.octx=s.getContext("2d")}bgCanvas;overlay;bodies;gl=null;bg;octx;w=0;h=0;dpr=1;hiRes=!1;lastTime=0;layout={cx:0,cy:0,base:200};reduced=!1;ui=1;quality=1;hitInfo=null;dofOn=!0;expand=1;expandT=0;acc=null;static rgb(t){return[1,3,5].map(i=>parseInt(t.slice(i,i+2),16))}resize(t,i){this.w=t,this.h=i,this.dpr=Math.max(1,oy(t,i)*this.quality),this.ui=j0(t,i),this.overlay.width=Math.round(t*this.dpr),this.overlay.height=Math.round(i*this.dpr),this.bg.resize(t,i,this.dpr),this.gl?.resize(t,i,this.dpr);const s=t<768;s&&(this.dofOn=!1),this.bgCanvas.style.filter=this.dofOn?"blur(0.6px)":"";const l=s?Math.min(t*.34,i*.2):Math.min(i*.3,t*.22);this.layout=s?{cx:t*.5,cy:i*.36,base:l}:{cx:t*.6,cy:i*.5,base:l},this.hiRes=l*2*this.dpr>700}lowerQuality(){return this.dofOn?(this.dofOn=!1,this.bgCanvas.style.filter="",!0):oy(this.w,this.h)*this.quality<=1.01?!1:(this.quality*=.8,je.quality=this.quality,this.resize(this.w,this.h),!0)}hit(t,i){const s=this.hitInfo;if(!s||!this.gl)return null;const l=this.gl.grabKind(s.i);if(!l)return null;const c=Wl[this.bodies[s.i].id]??1,f=s.rs*(l==="rotate"?Math.max(1.04,c*.8):.9*c);return Math.hypot(t-s.x,i-s.y)>Math.max(f,16)?null:{i:s.i,kind:l,rs:s.rs}}grab(t){this.gl?.grab(t)}drag(t,i,s,l,c){this.gl?.drag(t,i,s,l,c)}release(t){this.gl?.release(t,this.reduced)}prefetch(t){this.gl?.prefetch(t,this.hiRes)}async ready(t){const i=document.fonts?Promise.all(['400 16px "Courier Prime"','700 16px "Courier Prime"','400 16px "Instrument Serif"'].map(s=>document.fonts.load(s).catch(()=>null))).then(()=>document.fonts.ready):Promise.resolve();await Promise.all([i,this.gl?.warm(t,this.hiRes)])}draw(t,i){const s=this.lastTime?Math.min(.05,i-this.lastTime):.016;this.lastTime=i;const{w:l,h:c,bodies:f}=this,d=f.length;t=Math.max(0,Math.min(d-1,t));let p=Math.floor(t),m=t-p;p>=d-1&&(p=d-2,m=1);const g=p+1,_=f[p].radiusKm*($1[f[p].id]??1),v=f[g].radiusKm*($1[f[g].id]??1),x=Math.exp(Math.log(_)+(Math.log(v)-Math.log(_))*m),{cx:S,cy:A,base:b}=this.layout,y=b/x,L=wf.rgb(f[Math.round(t)].accent);if(!this.acc||this.reduced)this.acc=L.slice();else{const H=1-Math.exp(-s/.16);this.acc=this.acc.map((q,k)=>q+(L[k]-q)*H)}const I=this.acc.map(Math.round).join(",");this.bg.reduced=this.reduced,this.bg.draw(t/(d-1),i,s);const w=H=>f[H].radiusKm*(Wl[f[H].id]??1),N=new Array(d);N[p]=0;for(let H=p+1;H<d;H++)N[H]=N[H-1]+w(H-1)+w(H)+ay*f[H].radiusKm;for(let H=p-1;H>=0;H--)N[H]=N[H+1]-(w(H+1)+w(H)+ay*f[H+1].radiusKm);const D=m*N[g]*(x/v),U=Math.round(t),E=Math.max(0,1-Math.abs(t-U)*3);if(f[U].id==="universe"&&E>.98&&!this.reduced){this.expandT+=s;const H=Math.min(1,this.expandT/4),k=l<768?Math.min(S,l-S,A)-20:Math.min(A,c-A,l-S)-48,X=1+Math.max(0,Math.min(.06,(k-8)/(1.1*b)-1))*(1-Math.exp(-this.expandT/40));this.expand+=(X-this.expand)*H*H}else this.expandT=0,this.expand=1+(this.expand-1)*Math.exp(-s/.25);const O=Math.hypot(l,c),P=this.octx;P.setTransform(this.dpr,0,0,this.dpr,0,0),P.clearRect(0,0,l,c);const F=[];for(let H=d-1;H>=0;H--){const q=H-t,k=q<=0?1:q<1?jp+(1-jp)*(1-q):q<2?jp*(2-q):0;if(k<=.001)continue;const W=f[H].radiusKm*y*(f[H].id==="universe"?this.expand:1);if(W<.04)continue;const X=(N[H]-D)*y,Y=S+ry[0]*X,rt=A+ry[1]*X;if(!(W>O*8)){if(W<1.5){const nt=this.gl?.has(H)?this.gl.obj(H).dot:f[H].color;P.globalAlpha=k*Math.min(1,.35+W),P.fillStyle=nt,P.beginPath(),P.arc(Y,rt,Math.max(W,.75),0,Math.PI*2),P.fill(),P.globalAlpha=1}else this.gl?F.push({i:H,x:Y,y:rt,rs:W,alpha:k}):(P.globalAlpha=k,P.fillStyle=f[H].color,P.beginPath(),P.arc(Y,rt,W,0,Math.PI*2),P.fill(),P.globalAlpha=1);if(H===U-1&&E>.01&&this.marker(Y,rt,W*(Wl[f[H].id]??1),f[H].accent,E),H===U&&(this.hitInfo=E>.6&&W>8?{i:H,x:Y,y:rt,rs:W}:null),H===U&&E>.01&&this.gl?.has(H)){const nt=this.gl.obj(H).labels;nt&&this.labels(Y,rt,W,nt,E)}if(H===U&&E>.01&&W>20){const nt=W*(Wl[f[H].id]??1)*1.1+8;P.strokeStyle=`rgba(${I},${.42*E})`,P.lineWidth=1,P.beginPath();const ct=-Math.PI*.62;P.arc(Y,rt,nt,ct,ct+Math.PI*2*(this.reduced?1:1-Math.pow(1-E,3))),P.stroke()}}}this.gl?.render(F,i,s,this.reduced,this.hiRes,U,this.dofOn?E*E:0)}labels(t,i,s,l,c){const f=this.octx,d=this.ui;f.textBaseline="middle",f.textAlign="left";for(const p of l){const m=t+p.x*s,g=i-p.y*s;if(p.r===0){f.font=`${Math.round(10*d)}px "Courier Prime", "Courier New", ui-monospace, SFMono-Regular, Menlo, monospace`,f.fillStyle=`rgba(161,161,170,${.55*c})`,f.textAlign="center",f.fillText(p.name,m,g-10*d),f.textAlign="left";continue}const _=Math.max(p.r*s,3*d),v=p.left?-1:1,x=m+v*(_*.72+4*d),S=g-_*.72-4*d;f.strokeStyle=p.major?`rgba(${this.acc?.map(Math.round).join(",")??"212,165,116"},${.55*c})`:`rgba(161,161,170,${.35*c})`,f.lineWidth=1,f.beginPath(),f.moveTo(x,S),f.lineTo(x+v*10*d,S-10*d),f.lineTo(x+v*18*d,S-10*d),f.stroke(),f.font=`${Math.round((p.major?11:10)*d)}px "Courier Prime", "Courier New", ui-monospace, SFMono-Regular, Menlo, monospace`,f.fillStyle=p.major?`rgba(${this.acc?.map(Math.round).join(",")??"212,165,116"},${.9*c})`:`rgba(161,161,170,${.75*c})`,f.textAlign=p.left?"right":"left",f.fillText(p.name,x+v*22*d,S-10*d),f.textAlign="left"}}marker(t,i,s,l,c){const f=this.octx,d=Math.max(s+7*this.ui,11*this.ui);f.strokeStyle=`rgba(${wf.rgb(l).join(",")},${.4*c})`,f.lineWidth=1,f.beginPath(),f.arc(t,i,d,0,Math.PI*2),f.stroke()}}const Ls=zs.length,$p=o=>String(o).padStart(2,"0"),t0=(o,t,i)=>Math.max(t,Math.min(i,o));function EC(o){return o<768?12:Math.round(Math.max(32,Math.min(64,o*.026)))}const e0=()=>({w:innerWidth,h:innerHeight,m:EC(innerWidth)});let ji=null;function ly(){if(!ji)return;const o=ji.currentTime,t=Math.floor(ji.sampleRate*.03),i=ji.createBuffer(1,t,ji.sampleRate),s=i.getChannelData(0);for(let d=0;d<t;d++)s[d]=(Math.random()*2-1)*Math.exp(-d/(t*.09));const l=ji.createBufferSource();l.buffer=i;const c=ji.createBiquadFilter();c.type="bandpass",c.frequency.value=3200,c.Q.value=1.4;const f=ji.createGain();f.gain.setValueAtTime(.09,o),f.gain.exponentialRampToValueAtTime(1e-4,o+.03),l.connect(c).connect(f).connect(ji.destination),l.start(o),l.stop(o+.04)}function cy(){const o=decodeURIComponent(location.hash.slice(1)),t=zs.findIndex(i=>i.id===o);return t>=0?t:0}function TC(){const o=Ge.useRef(null),t=Ge.useRef(null),i=Ge.useRef(null),s=Ge.useRef(null),l=Ge.useRef(cy()),c=Ge.useRef(l.current),f=Ge.useRef(0),d=Ge.useRef(l.current),p=Ge.useRef(null),m=Ge.useRef(!1),g=Ge.useRef(null),_=Ge.useRef(null),[v,x]=Ge.useState(l.current),[S,A]=Ge.useState(!1),[b,y]=Ge.useState(!1),[L,I]=Ge.useState(!1),[w,N]=Ge.useState(e0),D=Ge.useRef(matchMedia("(prefers-reduced-motion: reduce)").matches),[U]=Ge.useState(()=>!D.current),[E,O]=Ge.useState(()=>D.current),[P,F]=Ge.useState(()=>{try{return localStorage.getItem("scale-tour-sound")==="on"}catch{return!1}}),H=Ge.useCallback(()=>{F(bt=>{const Dt=!bt;try{localStorage.setItem("scale-tour-sound",Dt?"on":"off")}catch{}return Dt&&(ji??=new AudioContext,ji.resume(),ly()),Dt})},[]),[q,k]=Ge.useState(()=>{const bt=e0();return j0(bt.w-bt.m*2,bt.h-bt.m*2)}),W=Ge.useCallback(bt=>{d.current=t0(Math.round(bt),0,Ls-1),m.current&&(c.current=d.current,f.current=0)},[]),X=Ge.useCallback(bt=>W(d.current+bt),[W]);Ge.useEffect(()=>{const bt=i.current,Dt=new wf(o.current,t.current,bt);g.current=Dt;const Et=matchMedia("(prefers-reduced-motion: reduce)"),Ft=()=>{m.current=Et.matches,Dt.reduced=Et.matches};Ft(),Et.addEventListener("change",Ft);const oe=()=>{const Nt=e0();N(Nt),Dt.resize(Nt.w-Nt.m*2,Nt.h-Nt.m*2),Dt.prefetch(d.current),k(j0(Nt.w-Nt.m*2,Nt.h-Nt.m*2))};oe(),addEventListener("resize",oe);let ve=!1;const fe=()=>new Promise(Nt=>requestAnimationFrame(()=>Nt()));Promise.race([Dt.ready(l.current).then(fe).then(fe).then(fe),new Promise(Nt=>setTimeout(Nt,6e3))]).catch(()=>{}).then(()=>{ve||I(!0)});let Te=0,Q=performance.now(),Ve=-1,_e=-1,B=0,T=0,it=0,lt=0;const yt=Nt=>{const Pt=Math.min(.05,(Nt-Q)/1e3);if(Q=Nt,!p.current)if(m.current)c.current=d.current,f.current=0;else{const Tt=Math.max(1,Math.ceil(Pt/.008333333333333333)),zt=Pt/Tt;for(let It=0;It<Tt;It++){const Lt=d.current-c.current;f.current+=(150*Lt-16*f.current)*zt,c.current+=f.current*zt}const ee=d.current-c.current;Math.abs(ee)<4e-4&&Math.abs(f.current)<.002&&(c.current=d.current,f.current=0)}Dt.draw(c.current,Nt/1e3),lt++,Pt>1/45&&it++,T+=Pt,T>2&&(it/lt>.5&&Nt-B>3e3&&(Dt.lowerQuality(),B=Nt),T=0,lt=0,it=0),d.current!==_e&&(_e=d.current,Dt.prefetch(d.current));const St=t0(Math.round(c.current),0,Ls-1);St!==Ve&&(Ve=St,x(St),history.replaceState(null,"",`#${zs[St].id}`)),Te=requestAnimationFrame(yt)};return Te=requestAnimationFrame(yt),()=>{ve=!0,cancelAnimationFrame(Te),removeEventListener("resize",oe),Et.removeEventListener("change",Ft)}},[]),Ge.useEffect(()=>{if(E)return;const bt=setTimeout(()=>O(!0),1150);return()=>clearTimeout(bt)},[E]),Ge.useEffect(()=>{L&&E&&y(!0)},[L,E]);const Y=Ge.useRef(v);Ge.useEffect(()=>{v!==Y.current&&(Y.current=v,P&&b&&ly())},[v,P,b]),Ge.useEffect(()=>{const bt=Dt=>{if(Dt.metaKey||Dt.ctrlKey||Dt.altKey)return;const Et=Dt.key;Et==="ArrowRight"||Et==="ArrowDown"||Et==="PageDown"||Et===" "||Et==="j"?(Dt.preventDefault(),X(1)):Et==="ArrowLeft"||Et==="ArrowUp"||Et==="PageUp"||Et==="k"?(Dt.preventDefault(),X(-1)):Et==="Home"?(Dt.preventDefault(),W(0)):Et==="End"&&(Dt.preventDefault(),W(Ls-1))};return addEventListener("keydown",bt),()=>removeEventListener("keydown",bt)},[W,X]),Ge.useEffect(()=>{const bt=()=>W(cy());return addEventListener("hashchange",bt),()=>removeEventListener("hashchange",bt)},[W]),Ge.useEffect(()=>{let bt=0,Dt=0,Et=!1,Ft=0;const oe=ve=>{ve.preventDefault();const fe=performance.now(),Te=(Math.abs(ve.deltaY)>Math.abs(ve.deltaX)?ve.deltaY:ve.deltaX)*(ve.deltaMode===1?30:1);fe-Dt>180&&(Et=!1,bt=0),Et&&fe-Ft>900&&(Et=!1,bt=0),Dt=fe,!Et&&(bt+=Te,Math.abs(bt)>30&&(X(Math.sign(bt)),bt=0,Et=!0,Ft=fe))};return addEventListener("wheel",oe,{passive:!1}),()=>removeEventListener("wheel",oe)},[X]);const rt=bt=>{const Dt=s.current.getBoundingClientRect();return[bt.clientX-Dt.left,bt.clientY-Dt.top]},nt=bt=>{s.current&&s.current.style.cursor!==bt&&(s.current.style.cursor=bt)},ct=bt=>{if(bt.button!==0)return;bt.target.setPointerCapture?.(bt.pointerId);const Dt=g.current?.hit(...rt(bt));if(Dt&&!_.current){_.current={i:Dt.i,x:bt.clientX,y:bt.clientY,t:performance.now(),rs:Dt.rs,id:bt.pointerId},g.current.grab(Dt.i),nt("grabbing");return}nt("grabbing"),p.current={x:bt.clientX,y:bt.clientY,start:c.current,axis:0,lastT:performance.now(),lastP:c.current,v:0},f.current=0},_t=bt=>{const Dt=_.current;if(Dt){if(bt.pointerId!==Dt.id)return;const _e=performance.now();g.current?.drag(Dt.i,bt.clientX-Dt.x,bt.clientY-Dt.y,Dt.rs,Math.max(.001,(_e-Dt.t)/1e3)),Dt.x=bt.clientX,Dt.y=bt.clientY,Dt.t=_e;return}const Et=p.current;if(!Et){bt.pointerType==="mouse"&&nt(g.current?.hit(...rt(bt))?"grab":"default");return}const Ft=bt.clientX-Et.x,oe=bt.clientY-Et.y;if(Et.axis===0&&Math.hypot(Ft,oe)>6&&(Et.axis=Math.abs(Ft)>=Math.abs(oe)?1:-1),Et.axis===0)return;const ve=Math.min(innerWidth,900)*.45,fe=Et.axis===1?-Ft/ve:-oe/ve;if(m.current)return;const Te=t0(Et.start+fe,-.25,Ls-.75),Q=performance.now(),Ve=Math.max(1,Q-Et.lastT);Et.v=.7*Et.v+.3*((Te-Et.lastP)/Ve)*1e3,Et.lastT=Q,Et.lastP=Te,c.current=Te},Ot=bt=>{const Dt=_.current;if(Dt){if(bt.pointerId!==Dt.id)return;_.current=null,performance.now()-Dt.t>90&&g.current?.drag(Dt.i,0,0,Dt.rs,.1),g.current?.release(Dt.i),nt(bt.pointerType==="mouse"&&g.current?.hit(...rt(bt))?"grab":"default");return}nt("default");const Et=p.current;if(p.current=null,!Et)return;const Ft=bt.clientX-Et.x,oe=bt.clientY-Et.y;if(m.current){const fe=Et.axis===1?Ft:oe;Math.abs(fe)>40&&X(fe<0?1:-1);return}if(Et.axis===0)return;let ve=Math.round(c.current+Et.v*.12);Math.abs(Et.v)>.8&&ve===Math.round(Et.start)&&(ve+=Math.sign(Et.v)),f.current=Et.v*.5,W(ve)},Mt=zs[v],z=v>0?zs[v-1]:null,Z=eE(Mt.sphere?Mt.radiusKm:Mt.radiusKm*2),ft=z?Mt.radiusKm/z.radiusKm:null,G=Mt.radiusKm/tE.radiusKm,tt=v/(Ls-1),{w:ht,h:xt,m:j}=w,wt=ht-j*2,ae=xt-j*2,Qt=ht<768?12:16;return Xt.jsxs("div",{className:"accent-root fixed inset-0 select-none bg-black text-mist",style:{"--accent":Mt.accent},children:[Xt.jsxs("div",{className:"absolute overflow-hidden bg-ink",style:{left:j,top:j,width:wt,height:ae,borderRadius:Qt},children:[Xt.jsxs("div",{ref:s,className:"scene-fade absolute inset-0 touch-none",onPointerDown:ct,onPointerMove:_t,onPointerUp:Ot,onPointerCancel:Ot,role:"group","aria-roledescription":"carousel","aria-label":"intergalactic scale, from ceres to the observable universe",tabIndex:0,style:{opacity:b?1:0},"data-loaded":b||void 0,children:[Xt.jsx("canvas",{ref:o,className:"absolute inset-0 block h-full w-full"}),Xt.jsx("canvas",{ref:t,className:"absolute inset-0 block h-full w-full"}),Xt.jsx("canvas",{ref:i,className:"absolute inset-0 block h-full w-full"})]}),Xt.jsx("div",{className:"ui-fade ui-legible pointer-events-none absolute left-0 top-0 font-mono text-[11px] tracking-[0.05em]",style:{zoom:q,width:wt/q,height:ae/q,opacity:b?1:0,visibility:b?"visible":"hidden"},children:Xt.jsxs("div",{className:"absolute inset-0 p-5 md:p-7",children:[Xt.jsxs("div",{className:"pointer-events-auto absolute left-5 top-5 md:left-7 md:top-7",children:[Xt.jsxs("a",{href:"https://gmunoz512.github.io/german-plus/",className:"font-serif text-2xl leading-none tracking-normal text-paper",children:["german",Xt.jsx("span",{className:"text-accent",children:"+"})]}),Xt.jsx("p",{className:"mt-1.5 text-fog",children:"intergalactic scale"})]}),Xt.jsxs("div",{className:"absolute right-5 top-5 flex flex-col items-end gap-1.5 md:right-7 md:top-7",children:[Xt.jsxs("p",{"aria-hidden":!0,children:[Xt.jsx("span",{className:"text-fog",children:"["}),Xt.jsx("span",{className:"text-paper",children:$p(v+1)}),Xt.jsxs("span",{className:"text-fog",children:["/",$p(Ls),"]"]})]}),Xt.jsxs("button",{onClick:H,className:"pointer-events-auto text-fog transition-colors hover:text-paper","aria-pressed":P,children:["sound ",Xt.jsxs("span",{className:P?"text-paper":"",children:["[",P?"on":"off","]"]})]})]}),Xt.jsxs("section",{className:"absolute inset-x-5 bottom-[92px] md:inset-x-auto md:bottom-auto md:left-7 md:top-1/2 md:w-[320px] md:-translate-y-1/2","aria-live":"polite","aria-atomic":"true",children:[Xt.jsxs("p",{className:"text-accent",children:["[",$p(v+1),"]"]}),Xt.jsx("h1",{className:"mt-1.5 font-mono text-[34px] leading-[1.05] tracking-[-0.01em] text-paper text-balance md:text-[48px]",children:Mt.name}),Xt.jsxs("dl",{className:"mt-4 space-y-1 md:mt-5",children:[Xt.jsx(n0,{label:Mt.dim??(Mt.sphere?"radius":"across"),value:`${Z.value} ${Z.unit}`}),Xt.jsx(n0,{label:"vs previous",value:ft?Bx(ft):"—",note:ft?z.name.replace(/^the /,""):"where i start"}),Xt.jsx(n0,{label:"vs earth",value:Bx(G)})]}),Xt.jsx("p",{className:"mt-4 font-mono text-[15px] leading-[1.5] tracking-[0.01em] text-paper-dim md:mt-5 md:text-[18px] md:leading-[1.45]",children:Mt.fact}),Mt.note&&Xt.jsx("p",{className:"mt-2 hidden font-mono text-[11px] leading-relaxed tracking-[0.02em] text-fog md:block",children:Mt.note})]}),S&&Xt.jsxs("div",{className:"pointer-events-auto absolute bottom-20 left-5 right-5 z-10 max-w-md rounded-[10px] border border-line bg-ink-raised/95 p-5 font-mono text-[11px] leading-relaxed tracking-[0.02em] text-mist md:left-7 md:right-auto",children:[Xt.jsxs("div",{className:"flex items-baseline justify-between",children:[Xt.jsx("p",{className:"font-mono text-[13px] text-paper",children:"credits"}),Xt.jsx("button",{onClick:()=>A(!1),className:"font-mono text-[11px] tracking-[0.05em] text-fog hover:text-paper",children:"[close]"})]}),Xt.jsxs("ul",{className:"mt-3 space-y-1.5",children:[Xt.jsxs("li",{children:["planet maps: ",Xt.jsx("a",{className:"text-paper-dim underline decoration-line underline-offset-2 hover:text-accent",href:"https://www.solarsystemscope.com/textures/",children:"solar system scope"}),", cc by 4.0 (based on nasa data; ceres & makemake are their illustrative maps)"]}),Xt.jsx("li",{children:"pluto: nasa/jhuapl/swri (new horizons), unimaged south filled in · europa: usgs voyager/galileo mosaic · titan: nasa/jpl-caltech/ssi (cassini), toned to its haze — public domain"}),Xt.jsx("li",{children:"helix nebula: eso — cc by 4.0 · horsehead nebula: nasa, esa & the hubble heritage team (aura/stsci) — cc by 4.0"}),Xt.jsx("li",{children:"pillars of creation: nasa, esa, csa, stsci; j. depasquale, a. koekemoer, a. pagan (stsci) — webb, cc by 4.0"}),Xt.jsx("li",{children:"tarantula nebula: nasa, esa, eso, d. lennon & e. sabbi (esa/stsci) et al. — hubble, cc by 4.0 · black eye galaxy (m64): nasa, esa, hubble (2026 wfc3 image) — public domain"}),Xt.jsx("li",{children:"the pillars, the tarantula & m64 are rebuilt as 3d point clouds from those images (depth is an artistic reconstruction, not measured) · andromeda & ic 1101 are procedural 3d particle renders"}),Xt.jsx("li",{children:"orion nebula: nasa, esa, m. robberto (stsci/esa) & the hubble orion treasury project team — public domain"}),Xt.jsx("li",{children:"omega centauri: eso/inaf-vst/omegacam, a. grado, l. limatola — cc by 4.0"}),Xt.jsx("li",{children:"kepler-22b, the black holes (live lensed ray march), segue 2, the sun & stars, the milky way, the heliosphere, oort cloud, superclusters & the observable universe are live procedural renders (illustrations, styled after eso, hubble & amateur astrophotos). sizes & sources in the repo’s src/data.ts."})]}),Xt.jsx("p",{className:"mt-3 text-fog",children:"made by german, for fun. images are toned to fit the page."})]}),Xt.jsxs("footer",{className:"pointer-events-auto absolute inset-x-5 bottom-5 md:inset-x-7 md:bottom-7",children:[Xt.jsxs("div",{className:"relative h-px w-full bg-line","aria-hidden":!0,children:[Xt.jsx("div",{className:"absolute inset-y-0 left-0 bg-accent",style:{width:`${tt*100}%`}}),zs.map((bt,Dt)=>Xt.jsx("button",{onClick:()=>W(Dt),tabIndex:-1,title:bt.name,className:"absolute -top-2 h-4 w-3 -translate-x-1/2 cursor-pointer",style:{left:`${Dt/(Ls-1)*100}%`},children:Xt.jsx("span",{className:`mx-auto block w-px ${Dt<=v?"bg-accent":"bg-fog/50"} ${Dt===v?"h-2.5":"h-1.5"}`})},bt.id))]}),Xt.jsxs("div",{className:"mt-3.5 flex items-center justify-between",children:[Xt.jsx("p",{className:"text-fog",children:Xt.jsx("button",{onClick:()=>A(bt=>!bt),className:"text-fog transition-colors hover:text-paper","aria-expanded":S,children:"credits"})}),Xt.jsxs("div",{className:"flex items-center gap-1",children:[Xt.jsx(uy,{label:"previous",disabled:v===0,onClick:()=>X(-1),children:"[←]"}),Xt.jsx(uy,{label:"next",disabled:v===Ls-1,onClick:()=>X(1),children:"[→]"})]})]})]})]})}),Xt.jsx("div",{className:`loader pointer-events-none absolute inset-0 flex items-center justify-center ${b||!E?"loader-done":""}`,"aria-hidden":b,role:"status",children:Xt.jsxs("div",{className:"flex flex-col items-center",children:[Xt.jsxs("p",{className:"font-serif text-lg leading-none text-paper/70",children:["german",Xt.jsx("span",{className:"text-accent/80",children:"+"})]}),Xt.jsx("div",{className:"mt-3 h-px w-24 overflow-hidden bg-line/60",children:Xt.jsx("div",{className:"loader-bar h-full bg-accent/70"})}),Xt.jsx("span",{className:"sr-only",children:"loading"})]})})]}),Xt.jsxs("svg",{className:"pointer-events-none absolute inset-0",width:ht,height:xt,"aria-hidden":!0,children:[Xt.jsx("g",{fill:"none",stroke:"#2a2a2e",strokeWidth:"1",className:U?"frame-draw":"",children:AC(j+.5,j+.5,ht-j-.5,xt-j-.5,Qt).map((bt,Dt)=>Xt.jsx("path",{d:bt,pathLength:1},Dt))}),Xt.jsxs("g",{stroke:"#4a4a50",strokeWidth:"1",className:`frame-marks ${E?"frame-marks-on":""}`,children:[[[j+14*q,j+14*q],[ht-j-14*q,j+14*q],[j+14*q,xt-j-14*q],[ht-j-14*q,xt-j-14*q]].map(([bt,Dt],Et)=>Xt.jsx("path",{d:`M${bt-4.5*q} ${Dt+.5}H${bt+.5+5*q}M${bt+.5} ${Dt-4.5*q}V${Dt+.5+5*q}`},Et)),ht>=768&&[`M${ht/2+.5} ${j}v${7*q}`,`M${ht/2+.5} ${xt-j}v${-7*q}`,`M${j} ${xt/2+.5}h${7*q}`,`M${ht-j} ${xt/2+.5}h${-7*q}`].map((bt,Dt)=>Xt.jsx("path",{d:bt},`t${Dt}`))]})]})]})}function AC(o,t,i,s,l){const c=(o+i)/2,f=(t+s)/2,d=l*(1-Math.SQRT1_2),p=[];for(const[m,g,_,v]of[[o,t,1,1],[i,t,-1,1],[o,s,1,-1],[i,s,-1,-1]]){const x=m+_*d,S=g+v*d,A=_*v>0?1:0;p.push(`M${x} ${S}A${l} ${l} 0 0 ${A} ${m+_*l} ${g}L${c} ${g}`),p.push(`M${x} ${S}A${l} ${l} 0 0 ${1-A} ${m} ${g+v*l}L${m} ${f}`)}return p}function n0({label:o,value:t,note:i}){return Xt.jsxs("div",{className:"flex items-baseline justify-between gap-4",children:[Xt.jsx("dt",{className:"text-fog",children:o}),Xt.jsxs("dd",{className:"text-right",children:[i&&Xt.jsx("span",{className:"mr-2 text-fog/70",children:i}),Xt.jsx("span",{className:"text-fog",children:"["}),Xt.jsx("span",{className:"text-paper",children:t}),Xt.jsx("span",{className:"text-fog",children:"]"})]})]})}function uy({label:o,disabled:t,onClick:i,children:s}){return Xt.jsx("button",{"aria-label":o,disabled:t,onClick:i,className:"px-1.5 py-1 font-mono text-[12px] text-paper transition-colors hover:text-accent disabled:text-fog/40 disabled:hover:text-fog/40",children:s})}jb.createRoot(document.getElementById("root")).render(Xt.jsx(Ge.StrictMode,{children:Xt.jsx(TC,{})}));
