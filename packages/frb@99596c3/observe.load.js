montageDefine("99596c3","observe",{dependencies:["./parse","./compile-observer","./observers","./scope"],factory:function(e,i,t){function s(e,i,t){var s;s="function"==typeof t?{change:t}:t,s=s||o,s.source=e,s.sourcePath=i;var c=s.parameters=s.parameters||e,m=s.document,d=s.components,p=s.beforeChange,v=s.contentChange,g=new r(e);g.parameters=c,g.document=m,g.components=d,g.beforeChange=p;var h=a(i),b=u(h);return v===!0&&(b=n.makeRangeContentObserver(b)),b(l(function(i){if(i){if("function"!=typeof v)return s.change.apply(e,arguments);if("function"==typeof v)return i.addRangeChangeListener(v),n.once(function(){i.removeRangeChangeListener(v)})}else;}),g)}var a=e("./parse"),u=e("./compile-observer"),n=e("./observers"),l=n.autoCancelPrevious,r=e("./scope");t.exports=s;var o={}}});