var params=require("./index.js");describe("query-params",function(){var e="http://some.domain.com/foo|3.0|123.1|456|7|BAR;foo=bar;a=1;b=+B;&param=test";it("should encode object to url-string",function(){expect(params.encode({a:"a",b:"b",c:"c",d:"d",e:"e"})).toEqual("a=a&b=b&c=c&d=d&e=e"),expect(params.encode({a:"a"})).toEqual("a=a"),expect(params.encode({a:"æ"})).toEqual("a=%C3%A6"),expect(params.encode({a:1})).toEqual("a=1"),expect(params.encode({a:e})).toEqual("a="+encodeURIComponent(e))}),it("should encode with custom separator",function(){expect(params.encode({a:"a",b:"b"},";")).toEqual("a=a;b=b")}),it("should decode url-string to an object",function(){expect(params.decode("a=a&b=b&c=c&amp;d=d;e=e")).toEqual({a:"a",b:"b",c:"c",d:"d",e:"e"}),expect(params.decode("a=æ")).toEqual({a:"æ"}),expect(params.decode("a=%C3%A6")).toEqual({a:"æ"});var t=params.encode({url:e,width:123,height:321});expect(params.decode(t)).toEqual({url:e,width:"123",height:"321"})}),it("should decode with custom separator",function(){expect(params.decode("a=1;b=2",";")).toEqual({a:"1",b:"2"})})});