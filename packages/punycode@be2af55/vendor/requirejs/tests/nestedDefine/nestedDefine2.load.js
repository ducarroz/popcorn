montageDefine("be2af55","vendor/requirejs/tests/nestedDefine/nestedDefine2",{dependencies:[],factory:function(e){e(["one"],function(i){define("nested",["two"],function(e){return{name:"nested",two:e}}),e(["nested"],function(e){doh.register("nestedDefine2",[function(t){t.is("one",i.name),t.is("two",e.two.name),t.is("nested",e.name)}]),doh.run()})})}});