montageDefine("d47aa1b","window-loader/montage-window",{dependencies:["../core/core"],factory:function(e,t){var n=e("../core/core").Montage;t.MontageWindow=n.specialize({_application:{value:null},application:{get:function(){return this._application},set:function(e){null===this._application&&(this._application=e,this.focused&&this._setFocusedWindow(this))}},_window:{value:null},window:{get:function(){return this._window},set:function(e){if(null===this._window){var t=e.document.body;this._window=e,e.addEventListener("beforeunload",this,!0),e.addEventListener("focus",this,!0),e.addEventListener("mousedown",this,!0),null===t.getAttribute("tabIndex")&&(t.setAttribute("tabIndex",-1),t.focus())}}},document:{get:function(){return this._window.document}},_component:{value:null},component:{get:function(){return this._component},set:function(e){null===this._component&&(this._component=e)}},title:{get:function(){return this.document.title},set:function(e){this.document.title=e}},focused:{value:!1},focus:{value:function(){this._window&&this._window.focus()}},_setFocusedWindow:{value:function(e){var t,n,i,r=this.application;if(r._multipleWindow){t=r.windows;for(i in t)n=t[i],n.window===e?n.focused!==!0&&(n.focused=!0,"z-order"==r.windowsSortOrder?(t.splice(i,1),t.unshift(n)):"reverse-z-order"==r.windowsSortOrder&&(t.splice(i,1),t.push(n))):n.focused=!1}else this.focused=!0}},closed:{get:function(){return this._window?this._window.closed:!1}},close:{value:function(){this._window&&this._window.close()}},resizeTo:{value:function(e,t){this._window&&this._window.resizeTo(e,t)}},moveTo:{value:function(e,t){this._window&&this._window.moveTo(e,t)}},captureFocus:{value:function(e){var t=this.application;if(!this.application)return this.focused=!0,void 0;if(t.parentApplication)t.mainApplication.window.captureFocus(e);else{var n=(e.target.ownerDocument?e.target.ownerDocument.defaultView:null)||e.target.defaultView||e.target;this._setFocusedWindow(n)}}},captureMousedown:{value:function(e){this.captureFocus(e)}},captureBeforeunload:{value:function(){var e,t=this.application,n=t.windows,i=t.attachedWindows;t.attachedWindows=[];for(var e in i)i[e].close();t.parentApplication&&(i=t.parentApplication.attachedWindows,e=i.indexOf(this),-1!==e&&i.splice(e,1),e=n.indexOf(this),-1!==e&&n.splice(e,1),this.window.removeEventListener("beforeunload",this,!0),this.close())}}})}});