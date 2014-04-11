montageDefine("be2af55","vendor/requirejs/docs/requirements.html",{text:'<html><head></head><body><div id=directory class=section>\n<h1>RequireJS Requirements</h1>\n\n<ul class="index mono">\n    <li class=hbox>\n        <a href=#1>Get RequireJS</a><span class="spacer boxFlex"></span><span class=sect>§ 1</span>\n    </li>\n    <li class=hbox>\n        <a href=#2>Go with the grain of the browser</a><span class="spacer boxFlex"></span><span class=sect>§ 2</span>\n    </li>\n    <li class=hbox>\n        <a href=#3>Load code before and after page load</a><span class="spacer boxFlex"></span><span class=sect>§ 3</span>\n    </li>\n    <li class=hbox>\n        <a href=#4>The loader should be able to load nested dependencies</a><span class="spacer boxFlex"></span><span class=sect>§ 4</span>\n    </li>\n    <li class=hbox>\n        <a href=#5>Modules need to be evaluated according to dependencies</a><span class="spacer boxFlex"></span><span class=sect>§ 5</span>\n    </li>\n    <li class=hbox>\n        <a href=#6>The module format should be compact</a><span class="spacer boxFlex"></span><span class=sect>§ 6</span>\n    </li>\n    <li class=hbox>\n        <a href=#7>Have a streamlined core loader, but allow for the future</a><span class="spacer boxFlex"></span><span class=sect>§ 7</span>\n    </li>\n    <li class=hbox>\n        <a href=#8>Allow modules to keep a clean global namespace</a><span class="spacer boxFlex"></span><span class=sect>§ 8</span>\n    </li>\n    <li class=hbox>\n        <a href=#9>Load any script</a><span class="spacer boxFlex"></span><span class=sect>§ 9</span>\n    </li>\n    <li class=hbox>\n        <a href=#10>Allow for performance upgrades</a><span class="spacer boxFlex"></span><span class=sect>§ 10</span>\n    </li>\n</ul>\n\n<span class=note>Note: RequireJS is designed to meet the following requirements:</span>\n</div>\n\n<div class=section>\n<h2><a name=1>Go with the grain of the browser</a><span class=sectionMark>§ 1</span></h2>\n\n<p>XMLHttpRequest(XHR) loaders are limited to the same domain as the page, and make debugging harder. Certain browsers allow cross-domain XHR calls and better conventions for debugging when eval is used, but support is inconsistent across browsers.</p>\n\n<p>Eval-based loaders should be avoided since eval is not a JavaScript best practice and it is not allowed in some environments. There is a time and place for eval, but a module loader can do better than to use it.</p>\n\n<p>A server process that transforms scripts on the fly should also not be needed. Getting everyone to use the same server process or even making specs for a common format they can all emit is more overhead, more stuff to write. Front-end developers have a long established practice of being able to author plain text files and having them load in the browser without a bunch of server hardware.</p>\n\n<p>Scripts loaded via script tags work everywhere and work across domains. It is a much simpler loading style that uses the natural way browsers load scripts.</p>\n</div>\n\n<div class=section>\n<h2><a name=2>Load code before and after page load</a><span class=sectionMark>§ 2</span></h2>\n\n<p>The same system should be usable before and after page load. Delaying loading of code until a later page action is a key performance benefit.</p>\n</div>\n\n<div class=section>\n<h2><a name=3>Scripts should be able to specify dependencies</a><span class=sectionMark>§ 3</span></h2>\n\n<p>It is very easy for a project to beyond needing a couple of scripts. It is hard to manually track all the dependencies and the correct loading order. A script should be able to specify its immediate dependencies. The developer should not have to worry about what those dependencies need to load and work out the correct loading order.</p>\n</div>\n\n<div class=section>\n<h2><a name=4>The loader should be able to load nested dependencies</a><span class=sectionMark>§ 4</span></h2>\n\n<p>If each module specifies its own direct dependencies, the loader should be able to work out the correct dependencies across the whole system, even nested dependencies, for dependencies of dependencies.</p>\n</div>\n\n<div class=section>\n<h2><a name=5>Scripts can be evaluated out of order, but modules need to be evaluated according to dependencies</a><span class=sectionMark>§ 5</span></h2>\n\n<p>Using the browser-native script loading that has nested dependency resolution and works after page load means that scripts will need to be loaded at least part of the time via using appendChild for script elements.</p>\n\n<p>IE and WebKit will execute scripts added via appendChild out of DOM order, they\nexecute them in network receive order. Even if they executed scripts in the order\nthey were added to the DOM, dependencies for a module are discovered after\nthe module script has been loaded, so scripts for the dependencies will always be added\nafter the script that needs them.</p>\n\n<p>This leads to constructing a module format for a script, one that puts the bulk of the script in a function, with its dependencies specified outside of that function wrapper. This allows scripts to be evaluated out of order by the browser, but gives the chance to properly work out the dependencies, then call the function wrappers in the right sequence to bring the scripts into being.</p>\n</div>\n\n<div class=section>\n<h2><a name=6>The module format should be compact</a><span class=sectionMark>§ 6</span></h2>\n\n<p>Boilerplate code is a pain. However a function wrapper is needed as part of the boilerplate. Prefer making the boilerplate as terse as possible, to allow easy hand-coding by developers. Avoid overly-explicit module formats that use a name/value pair for each property, since developer will have to code these by hand.</p>\n</div>\n\n<div class=section>\n<h2><a name=7>Have a streamlined core loader, but allow for the future</a><span class=sectionMark>§ 7</span></h2>\n\n<p>The core of the loader, module format support with nested dependency resolution, should be compact, but allow for plugins to expand the concept of dependencies and what it means to load them.</p>\n\n<p>In Dojo, it is common to need i18n string bundles and text strings of HTML for widget constructions. Allow the loader to be able to load these things, but as plugins, so the core stays lightweight.</p>\n</div>\n\n<div class=section>\n<h2><a name=8>Allow modules to keep a clean global namespace</a><span class=sectionMark>§ 8</span></h2>\n\n<p>As projects get bigger, it is more common to need to load two versions of a module in a page. This should be possible by allowing a module system that does not define modules in the globale namespace.</p>\n\n<p>If a module wants to work with the global namespace, but that is normally easy to allow in a module spec. The harder part is constructing a format that works well to avoid the global namespace.</p>\n</div>\n\n<div class=section>\n<h2><a name=9>Load any script</a><span class=sectionMark>§ 9</span></h2>\n\n<p>Not all scripts will be using the module format. Allow existing scripts to be loaded and treated as a dependency.</p>\n</div>\n\n<div class=section>\n<h2><a name=10>Allow for performance upgrades</a><span class=sectionMark>§ 10</span></h2>\n\n<p>This mainly means have a build system that can combine and optimize modules. It also means the loader should allow loading a script with multiple modules defined in it, and only fetch dependencies that are not already included in that script file.</p>\n</div>\n</body></html>'});