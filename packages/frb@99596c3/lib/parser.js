function makeParser(e){return function(i){var t,s=0,a=1,u=e.apply(this,[function(e){return t=e,expectEof()}].concat(Array.prototype.slice.call(arguments,1)));try{for(var n=0;i.length>n;n++)u=u(i[n],{index:n,line:a,column:s}),"\n"===i[n]?(a++,s=0):s++;u=u("",{index:n,line:a,column:s})}catch(l){if(l.loc){var r=l.loc;l.message+=i.length>80?" at line "+r.line+", column "+r.column:" in "+JSON.stringify(i)+" at index "+r.index}throw l}return t}}function expectEof(){return function(e,i){if(""!==e){var t=Error("Unexpected "+JSON.stringify(e));throw t.loc=i,t}return function s(){return s}}}function makeExpect(e){return function(i){return function(t,s){return t===e?i(t,s):i(null,s)(t,s)}}}exports.makeParser=makeParser,exports.expectEof=expectEof,exports.makeExpect=makeExpect;