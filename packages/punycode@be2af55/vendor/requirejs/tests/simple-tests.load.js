montageDefine("be2af55","vendor/requirejs/tests/simple-tests",{dependencies:[],factory:function(e){e({baseUrl:"./"},["require","map","simple","dimple","func"],function(e,i,t,s,a){doh.register("simple",[function(e){e.is("map",i.name),e.is("blue",t.color),e.is("dimple-blue",s.color),e.is("You called a function",a())}]),"undefined"==typeof moreSimpleTests&&doh.run()})}});