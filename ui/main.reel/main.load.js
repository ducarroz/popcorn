montageDefine("fefb24d","ui/main.reel/main",{dependencies:["montage/ui/component","core/rotten-tomato-service","core/youtube-service"],factory:function(e,t){var n=e("montage/ui/component").Component,o=e("core/rotten-tomato-service").shared,a=e("core/youtube-service").shared;t.Main=n.specialize({constructor:{value:function(){this.application.addEventListener("openTrailer",this,!1),this.canDrawGate.setField("moviesLoaded",!1),this._initialDataLoad=this.rottenTomato.load()}},rottenTomato:{value:o},_initialDataLoad:{value:null},templateDidLoad:{value:function(){var e=this;e._initialDataLoad.then(function(){e.canDrawGate.setField("moviesLoaded",!0)}).done()}},handleOpenTrailer:{value:function(e){var t=e.detail.title,n=this.templateObjects.popup;a.searchYoutubeTrailer(t).then(function(e){n.openTrailer(e)}).done()}},_windowScroll:{value:function(e){(window.innerHeight===window.outerHeight||window.innerHeight!==this._element.offsetHeight)&&(window.scrollTo(0,0),e.templateObjects.facadeflow.flow.handleResize(),window.clearTimeout(e._windowScrollTimeout),e._windowScrollTimeout=window.setTimeout(function(){e._windowScroll(e)},700))}},_windowScrollTimeout:{value:null},handleOrientationchange:{value:function(){var e=this;window.scrollTo(0,0),navigator.userAgent.match(/(iPhone|iPod touch);.*CPU.*OS 7_0_\d/i)&&(window.clearTimeout(this._windowScrollTimeout),90===Math.abs(window.orientation)&&(e._windowScrollTimeout=window.setTimeout(function(){e._windowScroll(e)},1e3)))}},enterDocument:{value:function(e){e&&window.addEventListener("orientationchange",this,!1)}}})}});