function parseHtml(e){var t,n,r=new htmlparser.DomHandler(function(e,r){n=e,t=r}),i=new htmlparser.Parser(r);if(i.write(e),i.done(),n)throw n;if(!t)throw Error("HTML parsing did not complete");return{type:"document",children:t}}function visit(e,t){var n,r=function(){n=!0};if(t(e,r),!n)for(var i=e.children,a=i?i.length:0,o=0;a>o;o++)visit(i[o],t)}function getAttribute(e,t){return e.attribs?e.attribs[t]:null}function getText(e){return DomUtils.getText(e)}function parsePrototypeForModule(e){return e.replace(/\[[^\]]+\]$/,"")}var FS=require("q-io/fs"),MontageBoot=require("./montage"),Require=require("mr/require");require("mr/node");var Promise=require("q"),URL=require("./url"),htmlparser=require("htmlparser2"),DomUtils=htmlparser.DomUtils;Require.overlays=["node","server","montage"],exports.bootstrap=function(){var e=process.argv.slice(0,3),t=process.argv.slice(2),n=t.shift();return FS.canonical(n).then(function(n){return findPackage(n).fail(function(r){if("Can't find package"!==r.message)throw Error(r);loadFreeModule(n,e,t)}).then(function(r){return loadPackagedModule(r,n,e,t)})})};var findPackage=function(e){var t=FS.directory(e);if(t===e)throw Error("Can't find package");return FS.join(t,"package.json"),FS.stat(e).then(function(e){return e.isFile()?t:findPackage(t)})},loadFreeModule=function(){throw Error("Can't load module that is not in a package")},loadPackagedModule=function(e,t){return MontageBoot.loadPackage(e).then(function(n){var r=t.slice(e.length+1);return n.async(r)}).done()};MontageBoot.loadPackage=function(e,t){return"/"!==e.slice(e.length-1,e.length)&&(e+="/"),t=t||{},t.location=URL.resolve(Require.getLocation(),e),t.moduleTypes=["html","meta"],t.makeLoader=function(e){return MontageBoot.ReelLoader(e,Require.makeLoader(e))},t.makeCompiler=function(e){return MontageBoot.TemplateCompiler(e,MontageBoot.SerializationCompiler(e,Require.makeCompiler(e)))},Require.loadPackage(t.location,t)},MontageBoot.TemplateLoader=function(e,t){return function(e,n){var r=e.match(/(.*\/)?(?=[^\/]+\.html$)/),i=e.match(/(?=[^\/]+\.json$)/),a=e.match(/(.*\/)?([^\/]+)\.reel\/\2$/);return r?t(e,n).then(function(){return n.dependencies=parseHtmlDependencies(n.text,n.location),n}):i?t(e,n).then(function(){return n.dependencies=collectSerializationDependencies(n.text,[]),n}):a?t(e,n).then(function(){var t=URL.resolve(n.location,a[2]+".html");return FS.stat(URL.parse(t).pathname).then(function(t){t.isFile()&&(n.extraDependencies=[e+".html"])},function(){})}):t(e,n)}},Require.makeLoader=function(e){return function(t){return MontageBoot.TemplateLoader(t,e(t))}}(Require.makeLoader);var parseHtmlDependencies=function(e){var t=[],n=parseHtml(e);return collectHtmlDependencies(n,t),t},collectHtmlDependencies=function(e,t){visit(e,function(e){DomUtils.isTag(e)&&("script"===e.name?"text/montage-serialization"===getAttribute(e,"type")&&collectSerializationDependencies(getText(e),t):"link"===e.name&&"text/montage-serialization"===getAttribute(e,"type")&&t.push(getAttribute(e,"href")))})},collectSerializationDependencies=function(e,t){var n=JSON.parse(e);return Object.keys(n).forEach(function(e){var r=n[e];r.lazy||("string"==typeof r.prototype&&t.push(parsePrototypeForModule(r.prototype)),"string"==typeof r.object&&t.push(parsePrototypeForModule(r.object)))}),t};