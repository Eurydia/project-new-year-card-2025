const i=function(n){if(n==null)return p;if(typeof n=="function")return u(n);if(typeof n=="object")return Array.isArray(n)?f(n):y(n);if(typeof n=="string")return l(n);throw new Error("Expected function, string, or object as test")};function f(n){const e=[];let r=-1;for(;++r<n.length;)e[r]=i(n[r]);return u(t);function t(...c){let o=-1;for(;++o<e.length;)if(e[o].apply(this,c))return!0;return!1}}function y(n){const e=n;return u(r);function r(t){const c=t;let o;for(o in n)if(c[o]!==e[o])return!1;return!0}}function l(n){return u(e);function e(r){return r&&r.type===n}}function u(n){return e;function e(r,t,c){return!!(a(r)&&n.call(this,r,typeof t=="number"?t:void 0,c||void 0))}}function p(){return!0}function a(n){return n!==null&&typeof n=="object"&&"type"in n}export{i as c};
//# sourceMappingURL=unist-util-is-D9KQvrmg.js.map
