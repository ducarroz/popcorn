function compile(e){return compile.semantics.compile(e)}var compileEvaluator=require("./compile-evaluator"),solve=require("./algebra"),Scope=require("./scope"),valueSyntax={type:"value"},trueScope={type:"literal",value:!0},falseScope={type:"literal",value:!1};module.exports=compile,compile.semantics={compile:function(e){var i=this.compilers;if("equals"===e.type){var t=this.compile(e.args[0]),s=this.compileEvaluator(e.args[1]);return i.equals(t,s)}if("if"===e.type){var a=this.compileEvaluator(e.args[0]),u=this.compile(e.args[1]),n=this.compile(e.args[2]);return i["if"](a,u,n)}if("and"===e.type||"or"===e.type){var l=solve(e.args[0],valueSyntax),r=solve(e.args[1],valueSyntax),o=this.compileEvaluator(e.args[0]),s=this.compileEvaluator(e.args[1]),c=this.compileEvaluator(l[1]),m=this.compileEvaluator(r[1]),t=this.compile(l[0]),d=this.compile(r[0]);return i[e.type](t,d,o,s,c,m)}if("everyBlock"===e.type){var p=this.compileEvaluator(e.args[0]),v=solve(e.args[1],{type:"literal",value:!0}),g=this.compile(v[0]),h=this.compileEvaluator(v[1]);return i.everyBlock(p,g,h)}if("parent"===e.type){var b=this.compile(e.args[0]);return function(e,i){return b(e,i.parent)}}if(i.hasOwnProperty(e.type)){var f=e.args.map(this.compileEvaluator,this.compileEvaluator.semantics);return i[e.type].apply(null,f)}throw Error("Can't compile assigner for "+JSON.stringify(e.type))},compileEvaluator:compileEvaluator,compilers:{property:function(e,i){return function(t,s){var a=e(s);if(a){var u=i(s);null!=u&&(Array.isArray(a)?a.set(u,t):a[u]=t)}}},get:function(e,i){return function(t,s){var a=e(s);if(a){var u=i(s);null!=u&&a.set(u,t)}}},has:function(e,i){return function(t,s){var a=e(s);if(a){var u=i(s);null!=t&&(t?(a.has||a.contains).call(a,u)||a.add(u):(a.has||a.contains).call(a,u)&&(a.remove||a["delete"]).call(a,u))}}},equals:function(e,i){return function(t,s){return t?e(i(s),s):void 0}},"if":function(e,i,t){return function(s,a){var u=e(a);if(null!=u)return u?i(s,a):t(s,a)}},and:function(e,i,t,s,a,u){return function(n,l){null!=n&&(n?(e(a(trueScope),l),i(u(trueScope),l)):e(t(l)&&!s(l),l))}},or:function(e,i,t,s,a,u){return function(n,l){null!=n&&(n?e(t(l)||!s(l),l):(e(a(falseScope),l),i(u(falseScope),l)))}},rangeContent:function(e){return function(i,t){var s=e(t);s&&(i?s.swap(0,s.length,i):s.clear())}},mapContent:function(e){return function(i,t){var s=e(t);s&&(s.clear(),t.value&&s.addEach(i))}},reversed:function(e){return function(i,t){var s=e(t);s&&s.swap(0,s.length,i.reversed())}},everyBlock:function(e,i,t){return function(s,a){if(s){var u=e(a),n=t(a);u.forEach(function(e){i(n,a.nest(e))})}}}}};