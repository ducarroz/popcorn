montageDefine("99596c3","expand",{dependencies:["collections/set","collections/map","./operators"],factory:function(e,i,t){function s(e,i){var t=s.semantics.expand.bind(s.semantics);return t(e,i,t)}var a=e("collections/set"),u=e("collections/map");e("./operators"),t.exports=s,s.semantics={reflexive:a(["literal","element","rangeContent","mapContent"]),traverseLeft:a(["with","mapBlock","filterBlock","someBlock","everyBlock","sortedBlock","groupBlock","groupMapBlock"]),expanders:u({value:function(e,i){return i.value||{type:"value"}},parameters:function(e,i){return i.parameters||{type:"parameters"}},record:function(e,i,t){var s={type:"record",args:[]};for(var a in e.args)s.args[a]=t(e.args[a],i,t);return s},component:function(e,i){return i.components&&e.component?{type:"component",label:i.components.getObjectLabel(e.component)}:e}}),expand:function(e,i,t){return this.expanders.has(e.type)?this.expanders.get(e.type)(e,i,t):this.traverseLeft.has(e.type)?{type:e.type,args:[t(e.args[0],i,t)].concat(e.args.slice(1))}:this.reflexive.has(e.type)?e:{type:e.type,args:e.args.map(function(e){return t(e,i,t)})}}}}});