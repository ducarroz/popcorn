montageDefine("fefb24d","ui/details.reel/details",{dependencies:["montage/ui/component"],factory:function(e,t){var n=e("montage/ui/component").Component;t.Details=n.specialize({_data:{value:null},data:{set:function(e){this._data=e,this.needsDraw=!0},get:function(){return this._data}},draw:{value:function(){if(this.data){var e=this.data.ratings.audience_rating,t=this.data.ratings.critics_rating;this.aImage.style.backgroundPosition="Fresh"===e?"0px 0px":"Rotten"===e?"0px -25px":"Certified Fresh"===e?"0px -50px":"Upright"===e?"0px -75px":"Spilled"===e?"0px -125px":"0px -100px",this.cImage.style.backgroundPosition="Fresh"===t?"0px 0px":"Rotten"===t?"0px -25px":"Certified Fresh"===t?"0px -50px":"Upright"===t?"0px -75px":"Spilled"===t?"0px -125px":"0px -100px",this._isDetailsExpanded?this._element.classList.add("expanded"):this._element.classList.remove("expanded")}}},handleRentButtonAction:{value:function(){window.open(this.data.links.alternate)}},handleTrailerButtonAction:{value:function(){this.dispatchEventNamed("openTrailer",!0,!0,{title:this.data.title})}},_isDetailsExpanded:{value:!1},handleExpandButtonAction:{value:function(){this._isDetailsExpanded=!this._isDetailsExpanded,this.needsDraw=!0}}})}});