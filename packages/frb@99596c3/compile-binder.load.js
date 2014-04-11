montageDefine("99596c3","compile-binder",{dependencies:["./compile-observer","./observers","./binders","./algebra"],factory:function(e,i,t){function s(e){return s.semantics.compile(e)}var a=e("./compile-observer");e("./observers");var u=e("./binders"),n=e("./algebra"),l={type:"value"},r={type:"literal",value:!0};t.exports=s,s.semantics={compilers:{property:u.makePropertyBinder,get:u.makeGetBinder,has:u.makeHasBinder,only:u.makeOnlyBinder,one:u.makeOneBinder,rangeContent:u.makeRangeContentBinder,mapContent:u.makeMapContentBinder,reversed:u.makeReversedBinder,and:u.makeAndBinder,or:u.makeOrBinder},compile:function(e){var i=this.compilers;if("default"===e.type)return this.compile(e.args[0]);if("literal"===e.type){if(null==e.value)return Function.noop;throw Error("Can't bind to literal: "+e.value)}if("equals"===e.type){var t=this.compile(e.args[0]),s=a(e.args[1]);return u.makeEqualityBinder(t,s)}if("if"===e.type){var o=a(e.args[0]),c=this.compile(e.args[1]),m=this.compile(e.args[2]);return u.makeConditionalBinder(o,c,m)}if("and"===e.type||"or"===e.type){var d=n(e.args[0],l),p=n(e.args[1],l),t=this.compile(d[0]),v=this.compile(p[0]),g=a(d[1]),h=a(p[1]),b=a(e.args[0]),s=a(e.args[1]);return this.compilers[e.type](t,v,b,s,g,h)}if("everyBlock"===e.type){var f=a(e.args[0]),q=n(e.args[1],r),S=this.compile(q[0]),P=a(q[1]);return u.makeEveryBlockBinder(f,S,P)}if("rangeContent"===e.type){var y,N=a(e.args[0]);try{y=this.compile(e.args[0])}catch(C){y=Function.noop}return u.makeRangeContentBinder(N,y)}if("defined"===e.type){var y=this.compile(e.args[0]);return u.makeDefinedBinder(y)}if("parent"===e.type){var y=this.compile(e.args[0]);return u.makeParentBinder(y)}if("with"===e.type){var N=a(e.args[0]),y=this.compile(e.args[1]);return u.makeWithBinder(N,y)}if(i.hasOwnProperty(e.type)){var D=e.args.map(a,a.semantics);return i[e.type].apply(null,D)}throw Error("Can't compile binder for "+JSON.stringify(e.type))}}}});