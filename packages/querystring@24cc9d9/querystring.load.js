montageDefine("24cc9d9","querystring",{dependencies:[],factory:function(e,t,n){("undefined"==typeof define?function(i){i(e,t,n)}:define)(function(e,t,n,i){"use strict";var r=t;r.unescape=decodeURIComponent,r.escape=encodeURIComponent;var a=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};r.stringify=r.encode=function(e,t,n,s){switch(t=t||"&",n=n||"=",e=null===e?i:e,typeof e){case"object":return Object.keys(e).map(function(i){return Array.isArray(e[i])?e[i].map(function(e){return r.escape(a(i))+n+r.escape(a(e))}).join(t):r.escape(a(i))+n+r.escape(a(e[i]))}).join(t);default:return s?r.escape(a(s))+n+r.escape(a(e)):""}},r.parse=r.decode=function(e,t,n){t=t||"&",n=n||"=";var i={};return"string"!=typeof e||0===e.length?i:(e.split(t).forEach(function(e){var t=e.split(n),a=r.unescape(t[0],!0),s=r.unescape(t.slice(1).join(n),!0);a in i?Array.isArray(i[a])?i[a].push(s):i[a]=[i[a],s]:i[a]=s}),i)}})}});