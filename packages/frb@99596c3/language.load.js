montageDefine("99596c3","language",{dependencies:["collections/set","collections/dict"],factory:function(e,i){var t=e("collections/set"),s=e("collections/dict"),a=i.precedence=s(),u=i.precedenceLevels=[["tuple","record"],["literal","value","parameters","property","element","component","mapBlock","filterBlock","sortedBlock","groupBlock","groupMapBlock","with"],["not","neg","number","parent"],["scope"],["default"],["pow","root","log"],["mul","div","mod","rem"],["add","sub"],["equals","lt","gt","le","ge","compare"],["and"],["or"],["if"]];u.forEach(function(e){var i=t(a.keys());e.forEach(function(e){a.set(e,i)})});var n=i.operatorTokens=s({"**":"pow","//":"root","%%":"log","*":"mul","/":"div","%":"mod",rem:"rem","+":"add","-":"sub","<":"lt",">":"gt","<=":"le",">=":"ge","==":"equals","<=>":"compare","!=":"notEquals","??":"default","&&":"and","||":"or","?":"then",":":"else"});i.operatorTypes=s(n.map(function(e,i){return[e,i]}))}});