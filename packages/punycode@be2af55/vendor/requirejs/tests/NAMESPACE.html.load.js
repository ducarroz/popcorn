montageDefine("be2af55","vendor/requirejs/tests/NAMESPACE.html",{text:'<!DOCTYPE html><html><head>\n    <title>require.js: NAMESPACE Test</title>\n    <script src=NAMESPACE.js></script>\n    <script src=doh/runner.js></script>\n    <script src=doh/_browserRunner.js></script>\n    <script>NAMESPACE.require(["one","dimple"],function(e,t){doh.register("namespaceTest",[function(n){n.is("large",e.size),n.is("dimple-blue",t.color)}]),doh.run()});</script>\n</head>\n<body>\n    <h1>require.js: NAMESPACE Test</h1>\n\n    <p>Only works after doing a build using the simpleNamespace.build.js file\n    in the r.js project.</p>\n\n    <p>Check console for messages</p>\n\n\n</body></html>'});