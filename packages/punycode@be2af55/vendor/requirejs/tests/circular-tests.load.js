montageDefine("be2af55","vendor/requirejs/tests/circular-tests",{dependencies:[],factory:function(e){e({baseUrl:"./"},["require","two","funcTwo","funcThree"],function(e,i,t,a){var s=i.doSomething(),u=new t("TWO");doh.register("circular",[function(e){e.is("small",s.size),e.is("redtwo",s.color)}]),doh.run(),doh.register("circularFunc",[function(e){e.is("TWO",u.name),e.is("ONE-NESTED",u.oneName()),e.is("THREE-THREE_SUFFIX",a("THREE"))}]),doh.run()})}});