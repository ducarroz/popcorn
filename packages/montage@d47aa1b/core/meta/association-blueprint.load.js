montageDefine("d47aa1b","core/meta/association-blueprint",{dependencies:["../core","./blueprint-reference","./property-blueprint","../logger"],factory:function(e,t){"use strict";e("../core").Montage;var n=e("./blueprint-reference").BlueprintReference,r=e("./property-blueprint").PropertyBlueprint;e("../logger").logger("blueprint"),t.AssociationBlueprint=r.specialize({constructor:{value:function(){this.superForValue("constructor")()}},serializeSelf:{value:function(e){e.setProperty("targetBlueprint",this._targetBlueprintReference),r.serializeSelf.call(this,e)}},deserializeSelf:{value:function(e){r.deserializeSelf.call(this,e),this._targetBlueprintReference=e.getProperty("targetBlueprint")}},_targetBlueprintReference:{value:null},targetBlueprint:{serializable:!1,get:function(){return this._targetBlueprintReference.promise(this.require)},set:function(e){this._targetBlueprintReference=(new n).initWithValue(e)}},isAssociationBlueprint:{get:function(){return!0}}})}});