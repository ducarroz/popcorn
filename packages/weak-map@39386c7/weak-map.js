(function(){"use strict";function e(i){i.permitHostObjects___&&i.permitHostObjects___(e)}function i(e){return!(e.substr(0,r.length)==r&&"___"===e.substr(e.length-3))}function t(e){if(e!==Object(e))throw new TypeError("Not an object: "+e);var i=e[o];if(i&&i.key===e)return i;if(!l(e))return void 0;var t=[],s=[];return i={key:e,gets:t,vals:s},n(e,o,{value:i,writable:!1,enumerable:!1,configurable:!1}),i}function s(e){return e.prototype=null,Object.freeze(e)}if("undefined"==typeof ses||!ses.ok||ses.ok()){if("undefined"!=typeof ses&&(ses.weakMapPermitHostObjects=e),"function"==typeof WeakMap){var a=WeakMap;if("undefined"==typeof navigator||!/Firefox/.test(navigator.userAgent))return module.exports=WeakMap,void 0}Object.prototype.hasOwnProperty;var u=Object.getOwnPropertyNames,n=Object.defineProperty,l=Object.isExtensible,r="weakmap:",o=r+"ident:"+Math.random()+"___";if("undefined"!=typeof crypto&&"function"==typeof crypto.getRandomValues&&"function"==typeof ArrayBuffer&&"function"==typeof Uint8Array){var c=new ArrayBuffer(25),m=new Uint8Array(c);crypto.getRandomValues(m),o=r+"rand:"+Array.prototype.map.call(m,function(e){return(e%36).toString(36)}).join("")+"___"}if(n(Object,"getOwnPropertyNames",{value:function(e){return u(e).filter(i)}}),"getPropertyNames"in Object){var d=Object.getPropertyNames;n(Object,"getPropertyNames",{value:function(e){return d(e).filter(i)}})}(function(){var e=Object.freeze;n(Object,"freeze",{value:function(i){return t(i),e(i)}});var i=Object.seal;n(Object,"seal",{value:function(e){return t(e),i(e)}});var s=Object.preventExtensions;n(Object,"preventExtensions",{value:function(e){return t(e),s(e)}})})();var p=function(){function e(i,s){var a,u,r=t(i);return r?(a=r.gets.indexOf(e),u=r.vals):(a=n.indexOf(i),u=l),a>=0?u[a]:s}function i(i){var s,a=t(i);return s=a?a.gets.indexOf(e):n.indexOf(i),s>=0}function a(i,s){var a,u=t(i);u?(a=u.gets.indexOf(e),a>=0?u.vals[a]=s:(u.gets.push(e),u.vals.push(s))):(a=n.indexOf(i),a>=0?l[a]=s:(n.push(i),l.push(s)))}function u(i){var s,a=t(i);return a?(s=a.gets.indexOf(e),s>=0&&(a.gets.splice(s,1),a.vals.splice(s,1))):(s=n.indexOf(i),s>=0&&(n.splice(s,1),l.splice(s,1))),!0}var n=[],l=[];return Object.create(p.prototype,{get___:{value:s(e)},has___:{value:s(i)},set___:{value:s(a)},delete___:{value:s(u)}})};p.prototype=Object.create(Object.prototype,{get:{value:function(e,i){return this.get___(e,i)},writable:!0,configurable:!0},has:{value:function(e){return this.has___(e)},writable:!0,configurable:!0},set:{value:function(e,i){this.set___(e,i)},writable:!0,configurable:!0},"delete":{value:function(e){return this.delete___(e)},writable:!0,configurable:!0}}),"function"==typeof a?function(){function i(){function i(e,i){return r?l.has(e)?l.get(e):r.get___(e,i):l.get(e,i)}function t(e){return l.has(e)||(r?r.has___(e):!1)}function u(e,i){if(o)try{l.set(e,i)}catch(t){r||(r=new p),r.set___(e,i)}else l.set(e,i)}function n(e){l["delete"](e),r&&r.delete___(e)}var l=new a,r=void 0,o=!1;return Object.create(p.prototype,{get___:{value:s(i)},has___:{value:s(t)},set___:{value:s(u)},delete___:{value:s(n)},permitHostObjects___:{value:s(function(i){if(i!==e)throw Error("bogus call to permitHostObjects___");o=!0})}})}i.prototype=p.prototype,module.exports=i,Object.defineProperty(WeakMap.prototype,"constructor",{value:WeakMap,enumerable:!1,configurable:!0,writable:!0})}():("undefined"!=typeof Proxy&&(Proxy=void 0),module.exports=p)}})();