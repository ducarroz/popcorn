define(function(){function e(e){for(var t,n=0;t=e[n];n++)t(o)}function t(){var t=l,n=c;s&&(t.length&&(l=[],e(t)),u.resourcesDone&&n.length&&(c=[],e(n)))}function n(){s||(s=!0,a&&clearInterval(a),t())}function i(e){return s?e(o):l.push(e),i}var a,r="undefined"!=typeof window&&window.document,s=!r,o=r?document:null,l=[],c=[],u=requirejs||require||{},h=u.resourcesReady;return"resourcesReady"in u&&(u.resourcesReady=function(e){h&&h(e),e&&t()}),r&&(document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):window.attachEvent&&(window.attachEvent("onload",n),self===self.top&&(a=setInterval(function(){try{document.body&&(document.documentElement.doScroll("left"),n())}catch(e){}},30))),"complete"===document.readyState&&n()),i.withResources=function(e){return s&&u.resourcesDone?e(o):c.push(e),i},i.version="1.0.0",i.load=function(e,t,n,a){a.isBuild?n(null):i(n)},i});