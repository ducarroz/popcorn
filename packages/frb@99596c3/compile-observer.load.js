montageDefine("99596c3","compile-observer",{dependencies:["./observers","./operators"],factory:function(e,i,t){function s(e){return n.compile(e)}var a=e("./observers"),u=e("./operators");t.exports=s;var n=s.semantics={compilers:{property:a.makePropertyObserver,get:a.makeGetObserver,path:a.makePathObserver,"with":a.makeWithObserver,"if":a.makeConditionalObserver,parent:a.makeParentObserver,not:a.makeNotObserver,and:a.makeAndObserver,or:a.makeOrObserver,"default":a.makeDefaultObserver,defined:a.makeDefinedObserver,rangeContent:Function.identity,mapContent:Function.identity,keys:a.makeKeysObserver,values:a.makeValuesObserver,items:a.makeEntriesObserver,entries:a.makeEntriesObserver,toMap:a.makeToMapObserver,mapBlock:a.makeMapBlockObserver,filterBlock:a.makeFilterBlockObserver,everyBlock:a.makeEveryBlockObserver,someBlock:a.makeSomeBlockObserver,sortedBlock:a.makeSortedBlockObserver,sortedSetBlock:a.makeSortedSetBlockObserver,groupBlock:a.makeGroupBlockObserver,groupMapBlock:a.makeGroupMapBlockObserver,minBlock:a.makeMinBlockObserver,maxBlock:a.makeMaxBlockObserver,min:a.makeMinObserver,max:a.makeMaxObserver,enumerate:a.makeEnumerationObserver,reversed:a.makeReversedObserver,flatten:a.makeFlattenObserver,concat:a.makeConcatObserver,view:a.makeViewObserver,sum:a.makeSumObserver,average:a.makeAverageObserver,last:a.makeLastObserver,only:a.makeOnlyObserver,one:a.makeOneObserver,has:a.makeHasObserver,tuple:a.makeArrayObserver,range:a.makeRangeObserver,startsWith:a.makeStartsWithObserver,endsWith:a.makeEndsWithObserver,contains:a.makeContainsObserver,join:a.makeJoinObserver,toArray:a.makeToArrayObserver,asArray:a.makeToArrayObserver},compile:function(e){var i=this.compilers;if("literal"===e.type)return a.makeLiteralObserver(e.value);if("value"===e.type)return a.observeValue;if("parameters"===e.type)return a.observeParameters;if("element"===e.type)return a.makeElementObserver(e.id);if("component"===e.type)return a.makeComponentObserver(e.label,e);if("record"===e.type){var t={},s=e.args;for(var u in s)t[u]=this.compile(s[u]);return a.makeObjectObserver(t)}i.hasOwnProperty(e.type)||(i[e.type]=a.makeMethodObserverMaker(e.type));var n=e.args.map(this.compile,this);return i[e.type].apply(null,n)}},l=n.compilers;Object.keys(u).forEach(function(e){l[e]||(l[e]=a.makeOperatorObserverMaker(u[e]))}),l.toString=a.makeOperatorObserverMaker(u.toString)}});