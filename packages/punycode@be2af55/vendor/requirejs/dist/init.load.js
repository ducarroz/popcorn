montageDefine("be2af55","vendor/requirejs/dist/init",{dependencies:[],factory:function(){$(document).ready(function(e){e(window).bind("load resize",function(){var t=e(window).height();e("#wrapper, #grid, #navBg").css({"min-height":t}),e("#content").css({"min-height":t-168})}),e("#grid").hide(),e(document.documentElement).keyup(function(t){71==t.keyCode&&e("#grid").fadeToggle(100)}),e(window).bind("load resize",function(){var t=e(window).height(),n=e("#nav").outerHeight();e("#nav").css("position",n>t?"relative":"fixed")})})}});