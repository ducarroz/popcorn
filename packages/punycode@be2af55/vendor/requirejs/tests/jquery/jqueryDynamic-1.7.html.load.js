montageDefine("be2af55","vendor/requirejs/tests/jquery/jqueryDynamic-1.7.html",{text:'<!DOCTYPE html><html><head>\n        <title>jQuery+RequireJS Sample Page</title>\n        <script src=../doh/runner.js></script>\n        <script src=../doh/_browserRunner.js></script>\n        <script data-main=scripts/dynamicApp1.7.js src=../../require.js></script>\n        <script>function readyFired(){masterCount+=1,3===masterCount&&master.callback(!0)}var master=new doh.Deferred,masterCount=0;doh.register("jqueryDynamic",[{name:"jqueryDynamic",timeout:3e3,runTest:function(){return master}}]),doh.run();</script>\n    </head>\n    <body>\n        <h1>jQuery+RequireJS Test Page</h1>\n        <p>Tests loading of jquery plugins with require.</p>\n    \n\n</body></html>'});