var R={exports:{}},r={};/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var w;function M(){if(w)return r;w=1;var t=typeof Symbol=="function"&&Symbol.for,v=t?Symbol.for("react.element"):60103,b=t?Symbol.for("react.portal"):60106,p=t?Symbol.for("react.fragment"):60107,i=t?Symbol.for("react.strict_mode"):60108,u=t?Symbol.for("react.profiler"):60114,s=t?Symbol.for("react.provider"):60109,l=t?Symbol.for("react.context"):60110,$=t?Symbol.for("react.async_mode"):60111,a=t?Symbol.for("react.concurrent_mode"):60111,m=t?Symbol.for("react.forward_ref"):60112,S=t?Symbol.for("react.suspense"):60113,O=t?Symbol.for("react.suspense_list"):60120,y=t?Symbol.for("react.memo"):60115,n=t?Symbol.for("react.lazy"):60116,f=t?Symbol.for("react.block"):60121,P=t?Symbol.for("react.fundamental"):60117,_=t?Symbol.for("react.responder"):60118,d=t?Symbol.for("react.scope"):60119;function o(e){if(typeof e=="object"&&e!==null){var c=e.$$typeof;switch(c){case v:switch(e=e.type,e){case $:case a:case p:case u:case i:case S:return e;default:switch(e=e&&e.$$typeof,e){case l:case m:case n:case y:case s:return e;default:return c}}case b:return c}}}function T(e){return o(e)===a}return r.AsyncMode=$,r.ConcurrentMode=a,r.ContextConsumer=l,r.ContextProvider=s,r.Element=v,r.ForwardRef=m,r.Fragment=p,r.Lazy=n,r.Memo=y,r.Portal=b,r.Profiler=u,r.StrictMode=i,r.Suspense=S,r.isAsyncMode=function(e){return T(e)||o(e)===$},r.isConcurrentMode=T,r.isContextConsumer=function(e){return o(e)===l},r.isContextProvider=function(e){return o(e)===s},r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===v},r.isForwardRef=function(e){return o(e)===m},r.isFragment=function(e){return o(e)===p},r.isLazy=function(e){return o(e)===n},r.isMemo=function(e){return o(e)===y},r.isPortal=function(e){return o(e)===b},r.isProfiler=function(e){return o(e)===u},r.isStrictMode=function(e){return o(e)===i},r.isSuspense=function(e){return o(e)===S},r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===p||e===a||e===u||e===i||e===S||e===O||typeof e=="object"&&e!==null&&(e.$$typeof===n||e.$$typeof===y||e.$$typeof===s||e.$$typeof===l||e.$$typeof===m||e.$$typeof===P||e.$$typeof===_||e.$$typeof===d||e.$$typeof===f)},r.typeOf=o,r}var x;function h(){return x||(x=1,R.exports=M()),R.exports}var g,j;function N(){if(j)return g;j=1;var t=h(),v={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},b={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},p={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};u[t.ForwardRef]=p,u[t.Memo]=i;function s(n){return t.isMemo(n)?i:u[n.$$typeof]||v}var l=Object.defineProperty,$=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,S=Object.getPrototypeOf,O=Object.prototype;function y(n,f,P){if(typeof f!="string"){if(O){var _=S(f);_&&_!==O&&y(n,_,P)}var d=$(f);a&&(d=d.concat(a(f)));for(var o=s(n),T=s(f),e=0;e<d.length;++e){var c=d[e];if(!b[c]&&!(P&&P[c])&&!(T&&T[c])&&!(o&&o[c])){var I=m(f,c);try{l(n,c,I)}catch{}}}}return n}return g=y,g}N();
//# sourceMappingURL=hoist-non-react-statics-mLZj6LgC.js.map