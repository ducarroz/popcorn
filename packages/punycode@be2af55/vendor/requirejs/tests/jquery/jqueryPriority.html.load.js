montageDefine("be2af55","vendor/requirejs/tests/jquery/jqueryPriority.html",{text:'<!DOCTYPE html><html><head>\n        <title>jQuery+RequireJS Priority Test Page</title>\n        <script src=../../require.js></script>\n        <script src=../doh/runner.js></script>\n        <script src=../doh/_browserRunner.js></script>\n        <script>require({baseUrl:"./scripts/",paths:{jquery:"http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min"},priority:["jquery"]},["app"],function(){doh.register("jqueryPriority",[function(e){e.is("alpha",$().alpha()),e.is("beta",$().beta())}]),doh.run()});</script>\n    </head>\n    <body>\n        <h1>jQuery+RequireJS Priority Test Page</h1>\n        <p>Tests loading of jquery plugins with require.</p>\n    \n\n</body></html>'});