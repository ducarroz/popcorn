montageDefine("be2af55","vendor/requirejs/tests/commonjs/tests/modules/1.0/missing/program",{dependencies:["test","bogus"],factory:function(){define(["require","exports","module","test","bogus"],function(e){var i=e("test");try{e("bogus"),i.print("FAIL require throws error when module missing","fail")}catch(t){i.print("PASS require throws error when module missing","pass")}i.print("DONE","info")})}});