montageDefine("fefb24d","core/category-controller",{dependencies:["montage","montage/core/range-controller"],factory:function(e,t){var o=e("montage").Montage,n=e("montage/core/range-controller").RangeController;t.CategoryController=o.specialize({constructor:{value:function(e,t){this.title=e,this.key=t;var o=new n;o.avoidsEmptySelection=!0,this.contentController=o}},title:{value:null},key:{value:null},contentController:{value:null}})}});