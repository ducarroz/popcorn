montageDefine("be2af55","vendor/requirejs/tests/commonjs/tests/modules/1.0/relative/program",{dependencies:["test","submodule/a","submodule/b"],factory:function(){define(["require","exports","module","test","submodule/a","submodule/b"],function(e){var i=e("test"),t=e("submodule/a"),s=e("submodule/b");i.assert(t.foo==s.foo,"a and b share foo through a relative require"),i.print("DONE","info")})}});