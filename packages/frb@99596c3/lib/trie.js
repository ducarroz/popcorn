function makeTrie(e){var i=Object.keys(e),t={value:void 0,children:{}},s={};i.forEach(function(i){if(0===i.length)t.value=e[i];else{var a=i[0];s[a]||(s[a]={});var u=i.slice(1);s[a][u]=e[i]}});var a=Object.keys(s);return a.forEach(function(e){t.children[e]=makeTrie(s[e])}),t}module.exports=makeTrie;