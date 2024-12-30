var T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function j(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var u={},w;function C(){if(w)return u;w=1,Object.defineProperty(u,"__esModule",{value:!0}),u.parse=E,u.serialize=v;const c=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,x=/^[\u0021-\u003A\u003C-\u007E]*$/,g=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,p=/^[\u0020-\u003A\u003D-\u007E]*$/,b=Object.prototype.toString,S=(()=>{const r=function(){};return r.prototype=Object.create(null),r})();function E(r,i){const e=new S,a=r.length;if(a<2)return e;const d=(i==null?void 0:i.decode)||I;let t=0;do{const n=r.indexOf("=",t);if(n===-1)break;const s=r.indexOf(";",t),o=s===-1?a:s;if(n>o){t=r.lastIndexOf(";",n-1)+1;continue}const y=l(r,t,n),k=f(r,n,y),m=r.slice(y,k);if(e[m]===void 0){let h=l(r,n+1,o),$=f(r,o,h);const A=d(r.slice(h,$));e[m]=A}t=o+1}while(t<a);return e}function l(r,i,e){do{const a=r.charCodeAt(i);if(a!==32&&a!==9)return i}while(++i<e);return e}function f(r,i,e){for(;i>e;){const a=r.charCodeAt(--i);if(a!==32&&a!==9)return i+1}return e}function v(r,i,e){const a=(e==null?void 0:e.encode)||encodeURIComponent;if(!c.test(r))throw new TypeError(`argument name is invalid: ${r}`);const d=a(i);if(!x.test(d))throw new TypeError(`argument val is invalid: ${i}`);let t=r+"="+d;if(!e)return t;if(e.maxAge!==void 0){if(!Number.isInteger(e.maxAge))throw new TypeError(`option maxAge is invalid: ${e.maxAge}`);t+="; Max-Age="+e.maxAge}if(e.domain){if(!g.test(e.domain))throw new TypeError(`option domain is invalid: ${e.domain}`);t+="; Domain="+e.domain}if(e.path){if(!p.test(e.path))throw new TypeError(`option path is invalid: ${e.path}`);t+="; Path="+e.path}if(e.expires){if(!O(e.expires)||!Number.isFinite(e.expires.valueOf()))throw new TypeError(`option expires is invalid: ${e.expires}`);t+="; Expires="+e.expires.toUTCString()}if(e.httpOnly&&(t+="; HttpOnly"),e.secure&&(t+="; Secure"),e.partitioned&&(t+="; Partitioned"),e.priority)switch(typeof e.priority=="string"?e.priority.toLowerCase():void 0){case"low":t+="; Priority=Low";break;case"medium":t+="; Priority=Medium";break;case"high":t+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${e.priority}`)}if(e.sameSite)switch(typeof e.sameSite=="string"?e.sameSite.toLowerCase():e.sameSite){case!0:case"strict":t+="; SameSite=Strict";break;case"lax":t+="; SameSite=Lax";break;case"none":t+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${e.sameSite}`)}return t}function I(r){if(r.indexOf("%")===-1)return r;try{return decodeURIComponent(r)}catch{return r}}function O(r){return b.call(r)==="[object Date]"}return u}C();export{T as c,j as g};
//# sourceMappingURL=cookie-CY119PWS.js.map
