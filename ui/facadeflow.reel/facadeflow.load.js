montageDefine("fefb24d","ui/facadeflow.reel/facadeflow",{dependencies:["montage/ui/component"],factory:function(e,t){var n=e("montage/ui/component").Component;t.Facadeflow=n.specialize({constructor:{value:function(){this.defineBinding("selectedMovie",{"<-":"categoriesController.selection.one()"}),this.application.addEventListener("initialDataReady",this,!1)}},_selectedMovie:{value:null},selectedMovie:{get:function(){return this._selectedMovie},set:function(e){this._selectedMovie=e}},_scroll:{value:null},scroll:{set:function(e){this._scroll=e,0===e%1?(this.detailsFadeIn=!0,this.detailsFadeOut=!1,this.needsDraw=!0):0!==e%1&&(this.detailsFadeOut=!0,this.detailsFadeIn=!1,this.needsDraw=!0)},get:function(){return this._scroll}},_fadeIn:{value:!1},_fadeOut:{value:!1},latestBoxOffice:{value:null},upcomingMovies:{value:null},inTheaters:{value:null},topDvdRentals:{value:null},category:{value:null},_contentController:{value:null},_switchValue:{value:null},switchValue:{set:function(e){this._switchValue=e},get:function(){return this._switchValue}},_categoryId:{value:null},categoryId:{get:function(){return this._categoryId},set:function(e){e&&(this._categoryId=e,this._changeCategory(e))}},_categoryContentController:{value:null},categoryContentController:{get:function(){return this._categoryContentController},set:function(e){null!=e&&(null==this._categoryContentController?(this._categoryContentController=e,this._contentController=e,this.detailsFadeIn=!0,this._fadeIn=!0,this.needsDraw=!0):(this._categoryContentController=e,this._changeCategory()))}},_changeCategory:{value:function(){var e=this;this.detailsFadeOut=!0,this._fadeOut=!0,this.needsDraw=!0,setTimeout(function(){e.templateObjects&&e.templateObjects.flow&&(e.templateObjects.flow.scroll=0),e._contentController=e.categoryContentController,e._fadeIn=!0,e._fadeOut=!1,e.detailsFadeIn=!0,e.detailsFadeOut=!1,e.needsDraw=!0},800)}},draw:{value:function(){var e=this.templateObjects.flow,t=this.details;this._fadeIn&&(e.element.classList.remove("flow-fade-out"),this._fadeIn=!1),this._fadeOut&&(e.element.classList.add("flow-fade-out"),this._fadeOut=!1),this.detailsFadeIn&&(t.element.classList.remove("details-fade-out"),this.detailsFadeIn=!1),this.detailsFadeOut&&(t.element.classList.contains("details-fade-out")===!1&&t.element.classList.add("details-fade-out"),this.detailsFadeOut=!1)}}})}});