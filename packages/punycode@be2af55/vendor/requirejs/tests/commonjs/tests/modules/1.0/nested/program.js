define(["require","exports","module","test","a/b/c/d"],function(e){var i=e("test");i.assert(1==e("a/b/c/d").foo(),"nested module identifier"),i.print("DONE","info")});