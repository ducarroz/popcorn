function Signal(e){var i=new Map;return i.getDefault=function(){return 0},{observe:function(t){return t(e),i.set(t,i.get(t)+1),function(){i.set(t,i.get(t)-1)}},emit:function(t){e=t,i.forEach(function(e,i){i(t)})}}}var Map=require("collections/map");module.exports=Signal;