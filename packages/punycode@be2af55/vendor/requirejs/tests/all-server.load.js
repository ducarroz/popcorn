montageDefine("be2af55","vendor/requirejs/tests/all-server",{dependencies:["fs","vm"],factory:function(e){var t,n,i,r;(function(){"undefined"!=typeof Packages?r="rhino":"undefined"!=typeof process&&(r="node",t=e("fs"),n=e("vm"),i=function(i){return n.runInThisContext(e.makeNodeWrapper(t.readFileSync(i,"utf8"),i))})})(),i("doh/runner.js"),i("doh/_"+r+"Runner.js"),i("simple-tests.js"),delete requirejs.s.contexts._,i("circular-tests.js"),delete requirejs.s.contexts._,i("relative/relative-tests.js"),delete requirejs.s.contexts._,i("relative/relativeBaseUrl-tests.js"),delete requirejs.s.contexts._,i("exports/exports-tests.js"),delete requirejs.s.contexts._,i("exports/moduleAndExports-tests.js"),delete requirejs.s.contexts._,i("anon/anon-tests.js"),delete requirejs.s.contexts._,i("packages/packages-tests.js"),delete requirejs.s.contexts._,i("plugins/sync-tests.js"),delete requirejs.s.contexts._,i("plugins/fromText/fromText-tests.js"),delete requirejs.s.contexts._,i("plugins/textDepend/textDepend-tests.js"),delete requirejs.s.contexts._,i("universal/universal-tests.js"),delete requirejs.s.contexts._,i("defineError/defineError-tests.js"),delete requirejs.s.contexts._,i("circular/circularPlugin-tests.js"),doh.run()}});