montageDefine("1522b1a","ui/popup/alert.reel/alert",{dependencies:["montage/ui/component","ui/popup/popup.reel"],factory:function(e,t){var n=e("montage/ui/component").Component,i=e("ui/popup/popup.reel").Popup,r=t.Alert=n.specialize({title:{value:"Alert"},msg:{value:""},details:{value:""},_popup:{value:null},popup:{set:function(e){this._popup=e},get:function(){return this._popup}},okCallback:{value:null},enterDocument:{value:function(e){e&&this.element.addEventListener("keyup",this,!1)}},handleKeyup:{value:function(e){(13==e.keyCode||27==e.keyCode)&&this.handleOkAction(e)}},handleOkAction:{value:function(e){this.okCallback&&this.okCallback.call(this,e);var t=document.createEvent("CustomEvent");t.initCustomEvent("montage_alert_ok",!0,!0,null),this.dispatchEvent(t),this.popup.hide()}},show:{value:function(e,t){var n,a=this.application._alertPopup;a||(a=new i,this.popup=a,a.type="alert",a.title="Message",a.modal=!0,this.application._alertPopup=a,n=new r,a.content=n),n=a.content,n.msg=e,n.okCallback=t||null,a.show()}}})}});