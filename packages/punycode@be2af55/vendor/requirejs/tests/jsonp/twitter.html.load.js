montageDefine("be2af55","vendor/requirejs/tests/jsonp/twitter.html",{text:'<!DOCTYPE html><html><head>\n    <title>require.js: JSONP Test: Twitter</title>\n    <script src=../../require.js></script>\n    <script>require({baseUrl:"./",paths:{require:"../../require"}},["http://search.twitter.com/trends/current.json?callback=define"],function(e){console.log(e)});</script>\n</head>\n<body>\n    <h1>require.js: JSONP Test: Twitter</h1>\n    <p>Just a standalone .</p>\n    <strong>REQUIRES access to internet/Twitter to run. Otherwise it will fail.</strong>\n    <p>Check console for the current trends JSON return value.</p>\n\n\n</body></html>'});