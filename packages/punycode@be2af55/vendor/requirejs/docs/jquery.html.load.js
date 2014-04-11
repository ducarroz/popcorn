montageDefine("be2af55","vendor/requirejs/docs/jquery.html",{text:'<html><head></head><body><div id=directory class=section>\n<h1>How to use RequireJS with jQuery</h1>\n<ul class="index mono">\n    <li class=hbox>\n        <a href=#get>Get RequireJS</a><span class="spacer boxFlex"></span><span class=sect>§ 1</span>\n    </li>\n    <li class=hbox>\n        <a href=#setup>Set up your HTML page</a><span class="spacer boxFlex"></span><span class=sect>§ 2</span>\n    </li>\n    <li class=hbox>\n        <a href=#optimize>Feel the need for speed</a><span class="spacer boxFlex"></span><span class=sect>§ 3</span>\n    </li>\n    <li class=hbox>\n        <a href=#advanced>Advanced use</a><span class="spacer boxFlex"></span><span class=sect>§ 4</span>\n    </li>\n</ul>\n<p>When a project reaches a certain size, managing the script modules for a project starts to get tricky. You need to be sure to sequence the scripts in the right order, and you need to start seriously thinking about combining scripts together into a bundle for deployment, so that only one or a very small number of requests are made to load the scripts.</p>\n\n<p>You may also want to load code on the fly, after page load.</p>\n\n<p>RequireJS can help you manage the script modules, load them in the right order, and make it easy to combine the scripts later via the RequireJS <a href=optimization.md>optimizer</a> without needing to change your markup. It also gives you an easy way to load scripts after the page has loaded, allowing you to spread out the download size over time.</p>\n\n<p>RequireJS has a module system that lets you define well-scoped modules, but you do not have to follow that system to get the benefits of dependency management and build-time optimizations. Over time, if you start to create more modular code that needs to be reused in a few places, the module format for RequireJS makes it easy to write encapsulated code that can be loaded on the fly. It can grow with you, particularly if you want to incorporate internationalization (i18n) string bundles, to localize your project for different languages, or load some HTML strings and make sure those strings are available before executing code, or even use JSONP services as dependencies.</p>\n</div>\n\n<div class=section>\n<h2>\n<a name=get>Get RequireJS</a>\n<span class=sectionMark>§ 1</span>\n</h2>\n\n<p>First step is to get RequireJS:</p>\n<ul>\n    <li><a href=download.html#samplejquery>download the sample project</a>.</li>\n</ul>\n\n<p>This sample project uses a combined jQuery+RequireJS file. If you prefer to not bundle jQuery with RequireJS, the <a href=https://github.com/jrburke/require-jquery>sample project\'s README</a> has an alternate way to use jQuery with RequireJS, but it requires consideration of more edge cases.</p>\n\n</div>\n\n<div class=section>\n<h2>\n<a name=setup>Set up your HTML page</a>\n<span class=sectionMark>§ 2</span>\n</h2>\n\n<p>A sample HTML page would look like this (assuming you put all your .js files in a "scripts" subdirectory):</p>\n\n<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n    &lt;head&gt;\n        &lt;title&gt;jQuery+RequireJS Sample Page&lt;/title&gt;\n        &lt;script data-main="scripts/main" src="scripts/require-jquery.js"&gt;&lt;/script&gt;\n    &lt;/head&gt;\n    &lt;body&gt;\n        &lt;h1&gt;jQuery+RequireJS Sample Page&lt;/h1&gt;\n    &lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n\n<span class=note>The path rules used for data-main changed in RequireJS 0.23. Before that version, data-main="main" for the above example.</span>\n\n<p>The data-main attribute on the script tag for require.js tells RequireJS to load the scripts/main.js file. RequireJS will load any dependency that is passed to require() without a ".js" file from the same directory as the one used for data-main. If you feel more comfortable specifying the whole path, you can also do the following:</p>\n\n<pre><code>&lt;script data-main="scripts/main.js" src="scripts/require-jquery.js"&gt;&lt;/script&gt;\n</code></pre>\n\n<p>What is in main.js? A call to require() to load all the scripts you need and any init work you want to do for the page. This example main.js script loads two plugins, jquery.alpha.js and jquery.beta.js (not the names of real plugins, just an example). The plugins should be in the same directory as require-jquery.js:</p>\n\n<p>main.js:</p>\n\n<pre><code>require(["jquery", "jquery.alpha", "jquery.beta"], function($) {\n    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.\n    $(function() {\n        $(\'body\').alpha().beta();\n    });\n});\n</code></pre>\n\n<p>In the require() call, "jquery" was referenced as a dependency. The require-jquery.js file has special code in it to register jQuery as a RequireJS module, and since it is registered as a module, you can get a handle on that module as the first argument to the function callback passed to require. In the above example, $ is used to reference the jQuery module.</p>\n\n<p>Since jquery.alpha and jquery.beta are just plugins that augment jQuery, they do not return modules that you can reference as function arguments.</p>\n\n</div>\n\n<div class=section>\n<h2>\n<a name=optimize>Feel the need for speed</a>\n<span class=sectionMark>§ 3</span>\n</h2>\n\n<p>Now your page is set up to be optimized very easily via the <a href=optimization.html>optimizer</a>.</p>\n\n<p>If you downloaded the jQuery sample project, then the optimizer that is part of the RequireJS source is already included.</p>\n\n<p>If you are not using the jQuery sample project, get the optimizer by downloading the <a href=download.html#rjs>r.js file</a> and place it anywhere you like outside your web development area.</p>\n\n<p>For the purposes of this example, the RequireJS source is placed as a sibling to the <strong>webapp</strong> directory, which contains the HTML page and the scripts directory with all the scripts. Complete directory structure:</p>\n\n<ul>\n<li>r.js  (the file that includes the optimizer)</li>\n<li>webapp/app.html</li>\n<li>webapp/scripts/main.js</li>\n<li>webapp/scripts/require-jquery.js</li>\n<li>webapp/scripts/jquery.alpha.js</li>\n<li>webapp/scripts/jquery.beta.js</li>\n</ul>\n\n<p>Then, in the scripts directory that has require-jquery.js and main.js, create a file called app.build.js with the following contents:</p>\n\n<pre><code>({\n    appDir: "../",\n    baseUrl: "scripts",\n    dir: "../../webapp-build",\n    //Comment out the optimize line if you want\n    //the code minified by UglifyJS.\n    optimize: "none",\n\n    paths: {\n        "jquery": "require-jquery"\n    },\n\n    modules: [\n        {\n            name: "main",\n            exclude: ["jquery"]\n        }\n    ]\n})\n</code></pre>\n\n<p>To use the optimizer, you need <a href=http://nodejs.org>Node</a> or Java 6 installed. These instructions assume Node is being used. See the <a href=optimization.html>Optimization page</a> for more information.</p>\n\n<p>To start the build, go to the <strong>webapp/scripts</strong> directory, execute the following command:</p>\n\n<pre><code>node ../../r.js -o app.build.js\n</code></pre>\n\n<p>Now, in the webapp-build directory, main.js will have the main.js contents, jquery.alpha.js and jquery.beta.js inlined. If you then load the app.html file in the webapp-build directory, you should not see any network requests for jquery.alpha.js and jquery.beta.js.</p>\n</div>\n\n\n<div class=section>\n<h2>\n<a name=advanced>Advanced use</a>\n<span class=sectionMark>§ 4</span>\n</h2>\n\n<p>The steps above make it easy start modular development with jQuery, particularly if you are using\njQuery plugins that assume jQuery is already loaded in the page. The trade-off with the above approach\nis using a combined RequireJS and jQuery file.</p>\n\n<p>Ideally you would not need to include jQuery with RequireJS, and just use RequireJS to load jQuery\non demand. However, by default scripts can load out of order with RequireJS, and this does not work well\nwith jQuery plugins.</p>\n\n<p>Some options:</p>\n\n<ul>\n    <li>Use the <a href=api.html#order>order plugin</a> to load jQuery and the plugins you\n    use in the correct order.</li>\n    <li>Use the priority config to load jQuery before other scripts load. See the\n    <a href=https://github.com/jrburke/require-jquery>Alternate Integration section\n    in the require-jquery project</a> for more information.</li>\n    <li>Wrap the plugins in a define() call.</li>\n</ul>\n\n<p>Ideally all the jQuery plugins you use would optionally call define() to register\nas a module. Some of the plugins you use may already call define() to register as an\nAMD module. If they do not, then you can wrap the code yourself with this wrapper:\n\n</p><pre><code>define([\'jquery\'], function ($) {\n    //Plugin code goes here.\n});\n</code></pre>\n\n<p>In addition, you can ask the plugin author to optionally calling define()\nin their code. The <a href=https://github.com/umdjs/umd>umdjs project</a>\nhas some resources and examples to help them.</p>\n\n</div>\n</body></html>'});