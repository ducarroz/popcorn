montageDefine("d47aa1b","core/meta/blueprint-reference",{dependencies:["../core","../promise","./blueprint","./binder","./remote-reference","./binder-reference","../logger","./module-blueprint"],factory:function(e,t){"use strict";e("../core").Montage;var n=e("../promise").Promise,r=e("./blueprint"),i=e("./binder"),a=e("./remote-reference").RemoteReference,o=e("./binder-reference").BinderReference;e("../logger").logger("blueprint"),t.BlueprintReference=a.specialize({constructor:{value:function(){this.superForValue("constructor")()}},identifier:{get:function(){return this._reference||(this._reference=this.referenceFromValue(this._value)),["blueprint",(this._reference.blueprintName||"unnamed").toLowerCase(),"reference"].join("_")}},valueFromReference:{value:function(t){t.blueprintName;var a=t.blueprintModule;t.prototypeName,t.moduleId;var s=t.binderReference,l=n.resolve(i.Binder.manager.defaultBinder);return s&&(l=o.valueFromReference(s,e)),l.then(function(t){if(t){var n=e("./module-blueprint");return n.ModuleBlueprint.getBlueprintWithModuleId(a.id,a.require).then(function(e){if(e)return t.addBlueprint(e),e;throw Error("Error cannot find Blueprint "+a)})}return r.Blueprint.getBlueprintWithModuleId(a,e)})}},referenceFromValue:{value:function(e){var t={};return t.blueprintName=e.name,t.blueprintModule=e.blueprintInstanceModule,e.binder&&!e.binder.isDefault&&(t.binderReference=o.referenceFromValue(e.binder)),t}}})}});