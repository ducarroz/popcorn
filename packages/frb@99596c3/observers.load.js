montageDefine("99596c3","observers",{dependencies:["collections/shim","collections/listen/property-changes","collections/listen/array-changes","collections/sorted-array","collections/sorted-set","collections/map","collections/set","collections/heap","./scope","./operators","./parse","./compile-observer","./merge"],factory:function(e,i){function t(e){return function(i){return i(e)||Function.noop}}function s(e,i){return e(i.value)||Function.noop}function a(e,i){return e(i.parameters)||Function.noop}function u(e){return function(i,t){return i(t.document.getElementById(e))||Function.noop}}function n(e,i){return function(t,s){var a=s.components,u=a.getObjectByLabel||a.getComponentByLabel,n=u.call(a,e);return i.component=n,t(n)||Function.noop}}function l(e,i,t,s){function a(e,i,s){u(),u=t(e,i,s)||Function.noop}if(null==e)return t();var u=Function.noop;return Ci.addOwnPropertyChangeListener(e,i,a,s.beforeChange),a(e[i],i,e),Ni(function(){u(),Ci.removeOwnPropertyChangeListener(e,i,a,s.beforeChange)})}function r(e,i){return function(t,s){return i(yi(function(i){return"string"!=typeof i&&"number"!=typeof i?t():e(yi(function(e){return null==e?t():e.observeProperty?e.observeProperty(i,t,s):wi(e,i,t,s)}),s)}),s)}}function o(e,i,t,s){function a(e,s,a){n(i,s)&&(u(),u=t(e,i,a)||Function.noop)}var u=Function.noop,n=e.contentEquals||Object.equals;return a(e.get(i),i,e),e.addMapChangeListener(a,s.beforeChange),Ni(function(){u(),e.removeMapChangeListener(a)})}function c(e,i){return function(t,s){return e(yi(function(e){return e?i(yi(function(i){return null==i?t():e.observeGet?e.observeGet(i,t,s):Ii(e,i,t,s)}),s):t()}),s)}}function m(e,i){return function(t,s){return t=Si(t),i(yi(function(i){return e(yi(function(e){return e?K(e,function(){return t((e.has||e.contains).call(e,i))},s):t()}),s)}),s)}}function d(e){return function(i,t){for(var s=Array(e.length),a=0;e.length>a;a++)s[a]=void 0;var u=e.map(function(e,i){return e(function(e){s.set(i,e)},t)}),n=i(s)||Function.noop;return Ni(function(){n(),Pi(u)})}}function p(e){return function(i,t){var s={},a={};for(var u in e)(function(e,i){s[e]=i(function(i){a[e]=i},t)})(u,e[u]);var n=i(a)||Function.noop;return function(){n();for(var e in s)s[e]()}}}function v(){return d(Array.prototype.slice.call(arguments))}function g(e){return function(){var i=d(Array.prototype.slice.call(arguments)),t=ai(i);return function(i,s){return t(yi(function(t){return t.every(Ei.defined)?i(e.apply(void 0,t)):i()}),s)}}}function h(e){var i=e.slice(0,1).toUpperCase()+e.slice(1),t="make"+i+"Observer",s="observe"+i;return function(){var i=arguments[0],a=Array.prototype.slice.call(arguments,1),u=a.map(function(e){return function(i,t){return e(yi(i),t)}}),n=d(a),l=ai(n);return function(a,n){return i(yi(function(i){return i?i[t]?i[t].apply(i,u)(a,n):i[s]?i[s](a,n):l(yi(function(t){return t.every(Ei.defined)?"function"==typeof i[e]?a(i[e].apply(i,t)):a():a()}),n):a()}),n)}}}function b(e){return function(i,t){return e(yi(function(e){return i(!e)}),t)}}function f(e,i){return function(t,s){return e(yi(function(e){return e?i(t,s):t(e)}),s)}}function q(e,i){return function(t,s){return e(yi(function(e){return e?t(e):i(t,s)}),s)}}function S(e,i,t){return function(s,a){return e(yi(function(e){return null==e?s():e?i(s,a):t(s,a)}),a)}}function P(e){return function(i,t){return e(yi(function(e){return i(null!=e)}),t)}}function y(e,i){return function(t,s){return e(yi(function(e){return null==e?i(t,s):t(e)}),s)}}function N(e,i){return function(t,s){return e(yi(function(e){function a(i){for(;e.length>i;i++)l[i].index=i}function u(e,t,u){l.swap(u,t.length,e.map(function(e,i){return{index:u+i}})),a(u+e.length);var o,c=[];Pi(r.swap(u,t.length,e.map(function(e,t){var a=l[u+t];return i(yi(function(e){o?n.set(a.index,e):c[t]=e}),s.nest(e))}))),o=!0,n.swap(u,t.length,c)}if(!e)return t();var n=[],l=[],r=[],o=K(e,u,s),c=t(n,e)||Function.noop;return Ni(function(){c(),Pi(r),o()})}),s)}}function C(e,i){var t=N(e,i);return function(e,i){return t(yi(function(t,s){function a(e){for(;t.length>e;e++)r[e+1]=r[e]+!!t[e]}function u(e,i,t){var u=s.slice(t,t+e.length),l=i.map(Boolean).sum(),o=u.filter(function(i,t){return e[t]}),c=r[t],m=n.slice(c,c+l);(m.length!==o.length||m.some(function(e,i){return e!==o[i]}))&&n.swap(c,l,o),a(c)}if(!s)return e();var n=[],l=[],r=[0],o=K(t,u,i),c=e(n)||Function.noop;return Ni(function(){c(),Pi(l),o()})}),i)}}function D(e,i){var t=_(i),s=N(e,t),a=function(e,i){return s(yi(function(t){function s(e,i){u.addEach(e),u.deleteEach(i)}if(!t)return e();var a=[],u=Di(a,M,A),n=K(t,s,i),l=e(a)||Function.noop;return function(){l(),n()}}),i)};return xi(a,ci)}function M(e,i){return Object.equals(e[1],i[1])}function A(e,i){return Object.compare(e[1],i[1])}function _(e){return function(i,t){return e(yi(function(e){return i([t.value,e])||Function.noop}),t)}}function E(e,i){var t=_(i),s=N(e,t),a=j(s,di),u=N(a,$(di));return function(e,i){function t(e,i){return e=l.get(e),i=l.get(i),Object.compare(e,i)}function s(e,i){return e=l.get(e),i=l.get(i),Object.equals(e,i)}function a(e,i){i.forEach(function(e){r["delete"](e[0]),l["delete"](e[0])}),e.forEach(function(e){l.set(e[0],e[1]),r.add(e[0])})}function n(e){return r.clear(),K(e,a,i)}var l=new Ai,r=new Mi(null,s,t),o=e(r)||Function.noop,c=u(n,i);return function(){o(),c()}}}function w(e){return function(i,t){return e(yi(function(e){function s(e,i,t){var s=a.length-t-i.length;a.swap(s,i.length,e.reversed())}if(!e)return i();var a=[],u=K(e,s,t),n=i(a);return Ni(function(){n(),u()})}),t)}}function I(e){return function(i,t){return e(yi(function(e){function s(i){for(var t=i;e.length>t;t++)r[t].index=t,l[t+1]=e[t]?l[t]+e[t].length:l[t]}function a(e,i,a){var o=l[a],c=l[a+i.length],m=c-o;u.swap(o,m,[]),r.swap(a,i.length,e.map(function(){return{index:null}})),s(a),Pi(n.swap(a,i.length,e.map(function(e,i){function n(e,i,t){s(o.index);var a=l[o.index]+t,n=l[o.index]+t+i.length,r=n-a;u.swap(a,r,e)}var o=r[a+i];return K(e,n,t)})))}if(!e)return i();var u=[],n=[],l=[0],r=[],o=K(e,a,t),c=i(u)||Function.noop;return Ni(function(){c(),Pi(n),o()})}),t)}}function x(){return Vi(d(Array.prototype.slice.call(arguments)))}function L(e,i){var t=Li(e,i),s=r(t,ji);return gi(s,Boolean)}function V(e,i){var t=gi(i,Ei.not),s=Li(e,t),a=r(s,ji);return gi(a,Ei.not)}function j(e,i){var t=T(e,i);return Oi(t)}function T(e,i){var t=_(i),s=N(e,t);return function(e,i){return s(yi(function(t,s){function a(e,i){i.forEach(function(e){var i=u.get(e[1]);1===i.length?u["delete"](e[1]):i["delete"](e[0])}),e.forEach(function(e){var i,t=!u.has(e[1]);i=t?s.constructClone():u.get(e[1]),i.add(e[0]),t&&u.set(e[1],i)})}if(!t)return e();var u=Ai(),n=K(t,a,i),l=e(u)||Function.noop;return function(){n(),l()}}),i)}}function F(e,i,t){function s(e,i){return Object.compare(e[1],i[1])*t}var a=_(i),u=N(e,a);return function(e,i){return u(yi(function(t){function a(e,i){n.addEach(e),n.deleteEach(i)}function u(i,t){return 0===t?i?e(i[0]):e():void 0}if(!t)return e();var n=new _i(null,M,s),l=K(t,a,i),r=ni(n,u,i);return function(){l(),r()}}),i)}}function k(e,i){return F(e,i,1)}function O(e,i){return F(e,i,-1)}function z(e){return F(e,s,1)}function U(e){return F(e,s,-1)}function Q(e){return function(i){return function(t,s){return t=Si(t),i(yi(function(i){if(!i)return t();var a=e(i,t);return K(i,function(e,i,s){return t(a(e,i,s))},s)}),s)}}}function B(e){return"number"==typeof e&&!isNaN(e)}function R(e,i,t){return t||(t=i,i=Ti),function(s,a){return e(yi(function(e){function u(i,t,s){if(m){var a=i.length-t.length;l>=s?a>0?(c.swap(0,0,e.slice(l,l+a)),c.splice(n,c.length-n)):(c.splice(0,-a),c.swap(c.length,0,e.slice(l+c.length,l+n))):l+n>s&&(c.swap(s-l,t.length,i),a>0?c.splice(n,c.length-n):c.swap(c.length,0,e.slice(l+c.length,l+n)))}}if(!e)return s();var n,l,r,o,c=[],m=!1,d=K(e,u,a),p=t(function(i){i=+i,isNaN(i)&&(i=void 0);var t="number"==typeof i&&"number"==typeof l,s=Math.max(0,i);"number"==typeof o&&(s=Math.min(s,e.length-o)),m!==t?(t?c.swap(0,0,e.slice(o,o+s)):c.clear(),m=t):m&&r!==s&&(r>s?c.splice(i,r-s):c.swap(r,0,e.slice(o+r,o+s))),n=i,r=s},a),v=i(function(i){i=+i,isNaN(i)&&(i=void 0);var t="number"==typeof n&&"number"==typeof i,s=Math.max(0,i);"number"==typeof n&&(s=Math.min(s,e.length));var a=Math.max(0,n);if("number"==typeof s&&(a=Math.min(a,e.length-s)),m!==t)t?c.swap(0,c.length,e.slice(s,s+a)):c.clear(),m=t;else if(m&&o!==s){var u=Math.abs(s-o);r>u&&o>s?(c.swap(0,0,e.slice(s,o)),c.splice(a,c.length-a)):r>u&&s>o?(c.swap(c.length,0,e.slice(o+r,s+a)),c.splice(0,c.length-a)):c.swap(0,c.length,e.slice(s,s+a))}l=i,o=s,r=a},a),g=s(c)||Function.noop;return function(){g(),p(),v(),d()}}),a)}}function H(e){return function(i,t){return e(yi(function(e){function s(e){for(;u.length>e;e++)u[e].set(0,e)}function a(e,i,t){u.swap(t,i.length,e.map(function(e,i){return[t+i,e]})),s(t+e.length)}if(!e)return i();var u=[],n=K(e,a,t),l=i(u)||Function.noop;return function(){l(),n()}}),t)}}function W(e){return function(i,t){var s=[],a=i(s)||Function.noop,u=e(function(e){if(e>>>=0,null==e)s.clear();else if(e>s.length){for(var i=[],t=s.length;e>t;t++)i.push(t);s.swap(s.length,0,i)}else s.length>e&&s.splice(e,s.length)},t);return function(){a(),u()}}}function Y(e,i){return function(t,s){return i(function(i){var a=RegExp("^"+RegExp.escape(i));return e(function(e){return t(a.test(e))||Function.noop},s)},s)}}function X(e,i){return function(t,s){return i(function(i){var a=RegExp(RegExp.escape(i)+"$");return e(function(e){return t(a.test(e))||Function.noop},s)},s)}}function G(e,i){return function(t,s){return i(function(i){var a=RegExp(RegExp.escape(i));return e(function(e){return t(a.test(e))||Function.noop},s)},s)}}function J(e,i){return i=i||Fi,function(t,s){return e(yi(function(e){return e?i(yi(function(i){function a(){u=t(e.join(i))||Function.noop}if("string"!=typeof i)return t()||Function.noop;var u=Function.noop,n=K(e,a,s);return function(){n(),u()}}),s):t()||Function.noop}),s)}}function K(e,i,t){function s(e,t,s){a(),a=i(e,t,s)||Function.noop}if(!e)return Function.noop;var a=Function.noop;if(!e.toArray)return Function.noop;if(!e.addRangeChangeListener)return Function.noop;s(e.toArray(),[],0);var u=e.addRangeChangeListener(s,null,t.beforeChange);return function(){a(),u()}}function $(e){return function(i,t){return e(yi(function(e){return ki(e,i,t)}),t)}}function Z(e,i,t){function s(t,s,l){if(a+=t.length-s.length,!(a>l+s.length&&a>l+t.length)){var r=0>a?null:e.get(a);u(),u=i(r)||Function.noop,n=r}}var a=-1,u=Function.noop,n=null,l=K(e,s,t);return function(){u(),l()}}function ei(e){return function(i,t){return e(yi(Si(function(e){return ii(e,i,t)})),t)}}function ii(e,i,t){function s(t,s){return a+=t.length-s.length,1===a?i(e.only()):i()}var a=0;return K(e,s,t)}function ti(e){return function(i,t){return e(yi(Si(function(e){return si(e,i,t)})),t)}}function si(e,i,t){function s(t,s){return a+=t.length-s.length,a>0?i(e.one()):i()}var a=0;return K(e,s,t)}function ai(e){return function(i,t){return e(yi(function(e){return e&&e.addRangeChangeListener?K(e,function(){return i(e)},t):i(e)}),t)}}function ui(e){return function(i,t){return e(yi(function(e){return e&&e.addMapChangeListener?ni(e,function(){return i(e)},t):i(e)}),t)}}function ni(e,i,t){function s(e,t,s){var u=a.get(t)||Function.noop;a["delete"](t),u(),u=i(e,t,s)||Function.noop,void 0===e?u():a.set(t,u)}if(e.addMapChangeListener){var a=new Ai;e.forEach(s);var u=e.addMapChangeListener(s,t.beforeChange);return Ni(function(){a.forEach(function(e){e()}),u()})}}function li(e){return function(i,t){return e(yi(function(e){return e?ri(e,i,t):i()}),t)}}function ri(e,i,t){function s(e,i){var t,s;u.has(i)?null==e?(t=u.get(i),u["delete"](i),s=a.indexOf(t),a.splice(s,1)):(t=u.get(i),t.set(1,e)):(t=[i,e],u.set(i,t),a.push(t))}var a=[],u=Ai(),n=i(a)||Function.noop,l=ni(e,s,t)||Function.noop;return Ni(function(){n(),l()})}function oi(e){var i=Oi(e);return xi(i,ci)}function ci(e,i){return i.value?e(i.value[0])||Function.noop:e()}function mi(e){var i=Oi(e);return xi(i,di)}function di(e,i){return i.value?e(i.value[1])||Function.noop:e()}function pi(e){return function(i,t){var s=new Ai,a=i(s)||Function.noop,u=e(yi(function(e){function i(e,i){void 0===e?s["delete"](i):s.set(i,e)}if(s.clear(),e&&"object"==typeof e){if(e.addRangeChangeListener)return zi(yi(function(e){function i(e,i){i.forEach(function(e){s["delete"](e[0])}),e.forEach(function(e){s.set(e[0],e[1])})}return K(e,i,t)}),t.nest(e));if(e.addMapChangeListener)return ni(e,i,t);var a=Object.keys(e).map(function(i){return wi(e,i,yi(function(e){void 0===e?s["delete"](i):s.set(i,e)}),t)});return function(){Pi(a)}}}),t);return function(){a(),u()}}}function vi(e){return function(i,t){return e(i,t.parent||t.nest())}}function gi(e,i,t){return function(s,a){return s=Si(s),e(yi(function(e){return s(i.call(t,e))}),a)}}function hi(e,i,t){return function(s,a){return s=Si(s),e(yi(function(e){return e&&e.every(Ei.defined)?s(i.apply(t,e)):void 0}),a)}}function bi(i,t){var s=e("./parse"),a=e("./compile-observer");return function(e,u){return e=Si(e),t(yi(function(t){if(null==t)return e();var n,l;try{n=s(t),l=a(n)}catch(r){return e()}return i(yi(function(i){return l(e,u.nest(i))}),u)}),u)}}function fi(e,i){return function(t,s){return e(yi(function(e){return i(yi(function(e){return t(e)}),s.nest(e))}),s)}}function qi(e){return function(){var i=e.apply(this,arguments);return function(e,t){var s=[],a=i(yi(function(e){function i(e,i,t){s.swap(t,i.length,e)}if(e){Ui(s,e);var a=e.addRangeChangeListener(i,null,t.beforeChange);return Ni(a)}s.clear()}),t),u=e(s)||Function.noop;return Ni(function(){a(),u()})}}}function Si(e){var i;return function(t){if(t!==i){var s=e.apply(this,arguments);return i=t,s}}}function Pi(e){e.forEach(function(e){e&&e()})}function yi(e){var i=Function.noop;return function(){return i(),i=e.apply(this,arguments)||Function.noop,function(){i()}}}function Ni(e){var i;return function(){return i?Function.noop:(i=!0,e.apply(this,arguments))}}e("collections/shim");var Ci=e("collections/listen/property-changes");e("collections/listen/array-changes");var Di=e("collections/sorted-array"),Mi=e("collections/sorted-set"),Ai=e("collections/map");e("collections/set");var _i=e("collections/heap");e("./scope");var Ei=e("./operators");i.makeLiteralObserver=t,i.observeValue=s,i.observeParameters=a,i.makeElementObserver=u,i.makeComponentObserver=n,i.observeProperty=l;var wi=l;i.makePropertyObserver=r,i.observeKey=o,i.observeGet=o;var Ii=o;i.makeGetObserver=c,i.makeHasObserver=m,i.makeObserversObserver=d,i.makeRecordObserver=p,i.makeObjectObserver=p,i.makeTupleObserver=v,i.makeArrayObserver=v,i.makeOperatorObserverMaker=g,i.makeMethodObserverMaker=h,i.makeNotObserver=b,i.makeAndObserver=f,i.makeOrObserver=q,i.makeConditionalObserver=S,i.makeDefinedObserver=P,i.makeDefaultObserver=y;var xi=i.makeMapBlockObserver=qi(N),Li=i.makeFilterBlockObserver=qi(C);i.makeSortedBlockObserver=D,i.makeSortedSetBlockObserver=E,i.makeReversedObserver=qi(w);var Vi=i.makeFlattenObserver=qi(I);i.makeConcatObserver=x,i.makeSomeBlockObserver=L,i.makeEveryBlockObserver=V,i.makeGroupBlockObserver=j,i.makeGroupMapBlockObserver=T,i.makeMaxBlockObserver=k,i.makeMinBlockObserver=O,i.makeMaxObserver=z,i.makeMinObserver=U;var ji=t("length");i.makeSumObserver=Q(function(){var e=0;return function(i,t){return i=i.filter(B),t=t.filter(B),e+=i.sum()-t.sum()}}),i.makeAverageObserver=Q(function(){var e=0,i=0;return function(t,s){return t=t.filter(B),s=s.filter(B),e+=t.sum()-s.sum(),i+=t.length-s.length,e/i}}),i.makeViewObserver=qi(R);var Ti=t(0);i.makeEnumerateObserver=qi(H),i.makeEnumerationObserver=i.makeEnumerateObserver,i.makeRangeObserver=W,i.makeStartsWithObserver=Y,i.makeEndsWithObserver=X,i.makeContainsObserver=G,i.makeJoinObserver=J;var Fi=t("");i.observeRangeChange=K,i.makeLastObserver=$,i.observeLast=Z;var ki=Z;i.makeOnlyObserver=ei,i.observeOnly=ii,i.makeOneObserver=ti,i.observeOne=si,i.makeRangeContentObserver=ai,i.makeMapContentObserver=ui,i.observeMapChange=ni;var Oi=i.makeEntriesObserver=qi(li);i.observeEntries=ri,i.makeKeysObserver=oi,i.observeEntryKey=ci,i.makeValuesObserver=mi,i.observeEntryValue=di,i.makeToMapObserver=pi;var zi=xi(j(s,ci),$(di));i.makeParentObserver=vi,i.makeConverterObserver=gi,i.makeComputerObserver=hi,i.makePathObserver=bi,i.makeExpressionObserver=bi,i.makeWithObserver=fi,i.makeToArrayObserver=qi(Function.identity),i.makeAsArrayObserver=i.makeToArrayObserver;var Ui=e("./merge").merge;i.makeUniq=Si,i.cancelEach=Pi,i.autoCancelPrevious=yi,i.once=Ni}});