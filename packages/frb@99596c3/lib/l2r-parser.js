function makeLeftToRightParser(e,i,t){var s=function(a,u){return u?i(function(i){return i?e(function(e){return s(a,t(i,u,e))}):a(u)}):e(function(e){return s(a,e)})};return s}module.exports=makeLeftToRightParser;