montageDefine("99596c3","compute",{dependencies:["./parse","./compile-observer","./compile-binder","./observers","./scope"],factory:function(e,i,t){function s(e,i,t){t.target=e,t.targetPath=i;var s=t.source=t.source||e,o=t.args,c=t.compute,m=t.parameters=t.parameters||s,d=t.document,p=t.components,v=t.trace,g=t.sourceScope=new r(s);g.parameters=m,g.document=d,g.components=p;var h=t.targetScope=new r(e);h.parameters=m,h.document=d,h.components=p;var b=o.map(function(e){return a(e)}).map(function(e){if("rangeContent"===e.type){var i=u(e.args[0]);return l.makeRangeContentObserver(i)}if("mapContent"===e.type){var i=u(e.args[0]);return l.makeMapContentObserver(i)}return u(e)}),f=l.makeRangeContentObserver(l.makeObserversObserver(b)),q=l.makeComputerObserver(f,c,e),S=a(i),P=n(S);return P(q,g,h,t,v?{sourcePath:o.join(", "),targetPath:i}:void 0)}var a=e("./parse"),u=e("./compile-observer"),n=e("./compile-binder"),l=e("./observers"),r=e("./scope");t.exports=s}});