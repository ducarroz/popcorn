montageDefine("be2af55","vendor/requirejs/tests/commonjs/tests/modules/1.0/nested/program",{dependencies:["test","a/b/c/d"],factory:function(){define(["require","exports","module","test","a/b/c/d"],function(e){var i=e("test");i.assert(1==e("a/b/c/d").foo(),"nested module identifier"),i.print("DONE","info")})}});