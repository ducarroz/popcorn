require({baseUrl:require.isBrowser?"./":"./relative/",paths:{text:"../../text"},packages:[{name:"greek",main:"main",lib:"."}]},["require","foo/bar/one","greek/alpha"],function(e,i,t){doh.register("relative",[function(e){e.is("one",i.name),e.is("bar",i.barName),e.is("two",i.twoName),e.is("three",i.threeName),e.is("hello world",i.message),e.is("alpha",t.name),e.is("greek",t.getGreekName())}]),doh.run()});