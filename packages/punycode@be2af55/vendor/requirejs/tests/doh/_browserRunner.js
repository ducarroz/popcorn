window.dojo&&dojo.provide("doh._browserRunner"),function(){doh.setTimeout=function(e,i){return setTimeout(e,i)};try{var topdog=window.parent==window||!Boolean(window.parent.doh)}catch(e){topdog=!0}if(topdog){var byId=function(e){return document.getElementById(e)},_addOnEvt=function(e,i,t){t||(t=window);var s=i;"string"==typeof i&&(s=t[i]);var a=function(){return s.apply(t,arguments)};window.dojo&&"load"==e?dojo.addOnLoad(a):window.attachEvent?window.attachEvent("on"+e,a):window.addEventListener?window.addEventListener(e,a,!1):document.addEventListener&&document.addEventListener(e,a,!1)},escapeXml=function(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;")},_logBacklog=[],_loggedMsgLen=0,sendToLogPane=function(e,i){for(var t="",s=0;e.length>s;s++)t+=" "+e[s];if(t=escapeXml(t),t=t.replace("	","&nbsp;&nbsp;&nbsp;&nbsp;").replace(" ","&nbsp;").replace("\n","<br>&nbsp;"),!byId("logBody"))return _logBacklog.push(t),void 0;if(_logBacklog.length&&!i)for(var a;a=_logBacklog.shift();)sendToLogPane(a,!0);var u=byId("logBody"),n=document.createElement("div");n.innerHTML=t,u.appendChild(n),_loggedMsgLen++},findTarget=function(e){for(;e&&!e.getAttribute("_target");)e=e.parentNode,e.getAttribute||(e=null);return e};doh._jumpToLog=function(e){var i=findTarget(e?e.target:window.event.srcElement);if(i){var t=Number(i.getAttribute("_target")),s=byId("logBody");if(!(t>=s.childNodes.length)){var a=s.childNodes[t];if(a.scrollIntoView(),window.dojo){var u=dojo.style(a.parentNode.parentNode,"backgroundColor"),n=dojo.style(i.parentNode,"backgroundColor"),l=dojo.animateProperty({node:a,duration:500,properties:{backgroundColor:{start:n,end:u}},onEnd:function(){a.style.backgroundColor=""}}),r=dojo.animateProperty({node:a,duration:500,properties:{backgroundColor:{start:u,end:n}},onEnd:function(){l.play()}});r.play()}}}},doh._jumpToSuite=function(e){var i=findTarget(e?e.target:window.event.srcElement);if(i){var t=i.getAttribute("_target"),s=getGroupNode(t);s&&s.scrollIntoView()}},doh._init=function(e){return function(){var i=byId("logBody");if(i){for(;i.firstChild;)i.removeChild(i.firstChild);_loggedMsgLen=0}this._totalTime=0,this._suiteCount=0,e.apply(doh,arguments)}}(doh._init),doh._setupGroupForRun=function(e){return function(i){var t=doh._groups[i];doh._curTestCount=t.length,doh._curGroupCount=1;var s=getGroupNode(i);s&&s.getElementsByTagName("td")[2].setAttribute("_target",_loggedMsgLen+1),e.apply(doh,arguments)}}(doh._setupGroupForRun),doh._report=function(e){return function(){var i=byId("testList");if(i){var t=i.getElementsByTagName("tfoot");t.length&&i.removeChild(t[0]);var s=i.createTFoot(),a=s.insertRow(-1);a.className="inProgress";var u=a.insertCell(-1);u.colSpan=2,u.innerHTML="Result",u=a.insertCell(-1),u.innerHTML=this._testCount+" tests in "+this._groupCount+" groups /<span class='failure'>"+this._errorCount+"</span> errors, <span class='failure'>"+this._failureCount+"</span> failures",u.setAttribute("_target",_loggedMsgLen+1),a.insertCell(-1).innerHTML=doh._totalTime+"ms"}var n=null;if(doh.perfTestResults){window.dojo?(dojo.require("dojox.charting.Chart2D"),dojo.require("dojox.charting.DataChart"),dojo.require("dojox.charting.plot2d.Scatter"),dojo.require("dojox.charting.plot2d.Lines"),dojo.require("dojo.data.ItemFileReadStore"),n=doh._dojoPlotPerfResults):n=doh._asciiPlotPerfResults;try{var l,r=byId("perfTestsBody"),o=[];doh.perfTestResults&&doh.showPerfTestsPage();for(l in doh.perfTestResults){var c=doh.perfTestResults[l],m=document.createElement("h1");m.appendChild(document.createTextNode("Group: "+l)),r.appendChild(m);var d=document.createElement("blockquote");r.appendChild(d);var p;for(p in c){var v=c[p];if(v){var g=document.createElement("h3");g.appendChild(document.createTextNode("TEST: "+p)),g.style.textDecoration="underline",d.appendChild(g);var h=document.createElement("div");d.appendChild(h);var b,q="<b>TRIAL SIZE: </b>"+v.trials[0].testIterations+" iterations<br>"+"<b>NUMBER OF TRIALS: </b>"+v.trials.length+"<br>",f=[],S=[];for(b=0;v.trials.length>b;b++)f.push(v.trials[b].average),S.push(v.trials[b].executionTime);q+="<b>AVERAGE TRIAL EXECUTION TIME: </b>"+doh.average(S).toFixed(10)+"ms.<br>",q+="<b>MAXIMUM TEST ITERATION TIME: </b>"+doh.max(f).toFixed(10)+"ms.<br>",q+="<b>MINIMUM TEST ITERATION TIME: </b>"+doh.min(f).toFixed(10)+"ms.<br>",q+="<b>AVERAGE TEST ITERATION TIME: </b>"+doh.average(f).toFixed(10)+"ms.<br>",q+="<b>MEDIAN TEST ITERATION TIME: </b>"+doh.median(f).toFixed(10)+"ms.<br>",q+="<b>VARIANCE TEST ITERATION TIME: </b>"+doh.variance(f).toFixed(10)+"ms.<br>",q+="<b>STANDARD DEVIATION ON TEST ITERATION TIME: </b>"+doh.standardDeviation(f).toFixed(10)+"ms.<br>",h.innerHTML=q,h=document.createElement("div"),h.innerHTML="<h3>Average Test Execution Time (in milliseconds, with median line)</h3>",d.appendChild(h),h=document.createElement("div"),dojo.style(h,"width","600px"),dojo.style(h,"height","250px"),d.appendChild(h),o.push({div:h,title:"Average Test Execution Time",data:f}),h=document.createElement("div"),h.innerHTML="<h3>Average Trial Execution Time (in milliseconds, with median line)</h3>",d.appendChild(h),h=document.createElement("div"),dojo.style(h,"width","600px"),dojo.style(h,"height","250px"),d.appendChild(h),o.push({div:h,title:"Average Trial Execution Time",data:S})}}}var P=function(){if(o.length){var e=o.shift();n(e.div,e.title,e.data)}doh.setTimeout(P,50)};doh.setTimeout(P,150)}catch(C){doh.debug(C)}}e.apply(doh,arguments)}}(doh._report),doh.debug=this.opera&&opera.postError?function(){for(var e="",i=0;arguments.length>i;i++)e+=" "+arguments[i];sendToLogPane([e]),opera.postError("DEBUG:"+e)}:window.console?function(){for(var e="",i=0;arguments.length>i;i++)e+=" "+arguments[i];sendToLogPane([e]),console.log("DEBUG:"+e)}:function(){sendToLogPane.call(window,arguments)};var loaded=!1,groupTemplate=null,testTemplate=null,groupNodes={},_groupTogglers={},_getGroupToggler=function(e,i){if(_groupTogglers[e])return _groupTogglers[e];var t=!0;return _groupTogglers[e]=function(s,a){var u,n=groupNodes[e].__items;if(t||a){for(t=!1,u=0;n.length>u;u++)n[u].style.display="";i.innerHTML="&#9660;"}else{for(t=!0,u=0;n.length>u;u++)n[u].style.display="none";i.innerHTML="&#9658;"}}},addGroupToList=function(e){if(byId("testList")){var i=byId("testList").tBodies[0],t=groupTemplate.cloneNode(!0),s=t.getElementsByTagName("td"),a=s[0];a.onclick=_getGroupToggler(e,a);var u=s[1].getElementsByTagName("input")[0];return u.group=e,u.onclick=function(){doh._groups[e].skip=!this.checked},s[2].innerHTML="<div class='testGroupName'>"+e+"</div><div style='width:0;'>&nbsp;</div>",s[3].innerHTML="",i.appendChild(t),t}},addFixtureToList=function(e,i){if(testTemplate){var t=groupNodes[e];t.__items||(t.__items=[]);var s=testTemplate.cloneNode(!0),a=s.getElementsByTagName("td");a[2].innerHTML=i.name,a[3].innerHTML="";var u=(t.__lastFixture||t.__groupNode).nextSibling;return u?u.parentNode.insertBefore(s,u):t.__groupNode.parentNode.appendChild(s),s.style.display="none",t.__items.push(s),t.__lastFixture=s}},getFixtureNode=function(e,i){return groupNodes[e]?groupNodes[e][i.name]:null},getGroupNode=function(e){return groupNodes[e]?groupNodes[e].__groupNode:null},updateBacklog=[];doh._updateTestList=function(e,i,t){if(!loaded)return e&&i&&updateBacklog.push([e,i]),void 0;if(updateBacklog.length&&!t)for(var s;s=updateBacklog.shift();)doh._updateTestList(s[0],s[1],!0);e&&i&&(groupNodes[e]||(groupNodes[e]={__groupNode:addGroupToList(e)}),groupNodes[e][i.name]||(groupNodes[e][i.name]=addFixtureToList(e,i)))},doh._testRegistered=doh._updateTestList,doh._groupStarted=function(e){0==this._suiteCount&&(this._runedSuite=0,this._currentGlobalProgressBarWidth=0,this._suiteCount=this._testCount),doh._inGroup!=e&&(doh._groupTotalTime=0,doh._runed=0,doh._inGroup=e,this._runedSuite++);var i=getGroupNode(e);i&&(i.className="inProgress")},doh._groupFinished=function(e,i){var t=getGroupNode(e);if(t&&doh._inGroup==e){doh._totalTime+=doh._groupTotalTime,t.getElementsByTagName("td")[3].innerHTML=doh._groupTotalTime+"ms",t.getElementsByTagName("td")[2].lastChild.className="",doh._inGroup=null;var s=doh._updateGlobalProgressBar(this._runedSuite/this._groupCount,i,e);t.className=s?"failure":"success",doh._currentGlobalProgressBarWidth=parseInt(1e4*(this._runedSuite/this._groupCount))/100}doh._inGroup==e&&this.debug('Total time for GROUP "',e,'" is ',doh._groupTotalTime,"ms")},doh._testStarted=function(e,i){var t=getFixtureNode(e,i);t&&(t.className="inProgress")};var _nameTimes={},_playSound=function(e){if(byId("hiddenAudio")&&byId("audio")&&byId("audio").checked){var i=_nameTimes[e];if(!i||new Date-i>700){_nameTimes[e]=new Date;var t=document.createElement("span");byId("hiddenAudio").appendChild(t),t.innerHTML='<embed src="_sounds/'+e+'.wav" autostart="true" loop="false" hidden="true" width="1" height="1"></embed>'}}};doh._updateGlobalProgressBar=function(e,i,t){var s=byId("progressOuter"),a=s.childNodes[doh._runedSuite-1];a||(a=document.createElement("div"),s.appendChild(a),a.className="success",a.setAttribute("_target",t)),i||a._failure||(a._failure=!0,a.className="failure",t&&a.setAttribute("title","failed group "+t));var u=parseInt(1e4*e)/100;return a.style.width=u-doh._currentGlobalProgressBarWidth+"%",a._failure},doh._testFinished=function(e,i,t){var s=getFixtureNode(e,i),a=i.endTime-i.startTime;if(s&&(s.getElementsByTagName("td")[3].innerHTML=a+"ms",s.className=t?"success":"failure",s.getElementsByTagName("td")[2].setAttribute("_target",_loggedMsgLen),!t)){_playSound("doh");var u=getGroupNode(e);u&&(u.className="failure",_getGroupToggler(e)(null,!0))}if(doh._inGroup==e){var u=getGroupNode(e);if(doh._runed++,u&&doh._curTestCount){var n=doh._runed/doh._curTestCount,l=this._updateGlobalProgressBar((doh._runedSuite+n-1)/doh._groupCount,t,e),r=u.getElementsByTagName("td")[2].lastChild;r.className=l?"failure":"success",r.style.width=parseInt(100*n)+"%",u.getElementsByTagName("td")[3].innerHTML=parseInt(1e4*n)/100+"%"}}this._groupTotalTime+=a,this.debug(t?"PASSED":"FAILED","test:",i.name,a,"ms")},doh.registerUrl=function(e,i,t){var s=new String(e);this.register(e,{name:i,setUp:function(){doh.currentGroupName=s,doh.currentGroup=this,doh.currentUrl=i,this.d=new doh.Deferred,doh.currentTestDeferred=this.d,doh.showTestPage(),byId("testBody").src=i},timeout:t||1e4,runTest:function(){return this.d},tearDown:function(){doh.currentGroupName=null,doh.currentGroup=null,doh.currentTestDeferred=null,doh.currentUrl=null,doh.showLogPage()}})};var tabzidx=1,_showTab=function(toShow,toHide){var i;for(i=0;toHide.length>i;i++){var node=byId(toHide[i]);node&&(node.style.display="none")}if(toShow=byId(toShow))with(toShow.style)display="",zIndex=++tabzidx};doh.showTestPage=function(){_showTab("testBody",["logBody","perfTestsBody"])},doh.showLogPage=function(){_showTab("logBody",["testBody","perfTestsBody"])},doh.showPerfTestsPage=function(){_showTab("perfTestsBody",["testBody","logBody"])};var runAll=!0;doh.toggleRunAll=function(){if(runAll=!runAll,byId("testList"))for(var e,i=byId("testList").tBodies[0],t=i.getElementsByTagName("input"),s=0;e=t[s++];)e.checked=runAll,doh._groups[e.group].skip=!runAll};var listHeightTimer=null,setListHeight=function(){listHeightTimer&&clearTimeout(listHeightTimer);var e=byId("testList");e&&(listHeightTimer=doh.setTimeout(function(){e.style.display="none",e.style.display=""},10))};_addOnEvt("resize",setListHeight),_addOnEvt("load",setListHeight),_addOnEvt("load",function(){loaded||(loaded=!0,groupTemplate=byId("groupTemplate"),groupTemplate&&(groupTemplate.parentNode.removeChild(groupTemplate),groupTemplate.style.display="",testTemplate=byId("testTemplate"),testTemplate.parentNode.removeChild(testTemplate),testTemplate.style.display="",doh._updateTestList()))}),_addOnEvt("load",function(){var e=doh._onEnd;if(doh._onEnd=function(){e.apply(doh,arguments),0==doh._failureCount?(doh.debug("WOOHOO!!"),_playSound("woohoo")):console.debug("doh._failureCount:",doh._failureCount),byId("play")&&t()},byId("play")){var i=!1,t=function(){i?(byId("play").style.display=byId("pausedMsg").style.display="",byId("playingMsg").style.display=byId("pause").style.display="none",i=!1):(byId("play").style.display=byId("pausedMsg").style.display="none",byId("playingMsg").style.display=byId("pause").style.display="",i=!0)};doh.run=function(e){return function(){return doh._currentGroup||t(),e.apply(doh,arguments)}}(doh.run);for(var s,a=byId("toggleButtons").getElementsByTagName("span"),u=0;s=a[u++];)s.onclick=t;doh._dojoPlotPerfResults=function(e,i,t){var s,a=doh.median(t),u=[];for(s=0;t.length>s;s++)u.push(a);var n={label:"name",items:[{name:i,trials:t},{name:"Median",trials:u}]},l=new dojo.data.ItemFileReadStore({data:n}),r=Math.floor(doh.min(t)),o=Math.ceil(doh.max(t)),c=(o-r)/10;r>0&&(r-=c,0>r&&(r=0),r=Math.floor(r)),o>0&&(o+=c,o=Math.ceil(o)),c=(o-r)/10;var m=new dojox.charting.DataChart(e,{type:dojox.charting.plot2d.Lines,displayRange:t.length,xaxis:{min:1,max:t.length,majorTickStep:Math.ceil((t.length-1)/10),htmlLabels:!1},yaxis:{min:r,max:o,majorTickStep:c,vertical:!0,htmlLabels:!1}});m.setStore(l,{name:"*"},"trials")},doh._asciiPlotPerfResults=function(){}}})}else{_doh=window.parent.doh;var _thisGroup=_doh.currentGroupName,_thisUrl=_doh.currentUrl;if(_thisGroup){doh._testRegistered=function(e,i){_doh._updateTestList(_thisGroup,i)},doh._onEnd=function(){_doh._errorCount+=doh._errorCount,_doh._failureCount+=doh._failureCount,_doh._testCount+=doh._testCount,_doh.currentTestDeferred.callback(!0)};var otr=doh._getTestObj;doh._getTestObj=function(){var e=otr.apply(doh,arguments);return e.name=_thisUrl+"::"+arguments[0]+"::"+e.name,e},doh.debug=doh.hitch(_doh,"debug"),doh.registerUrl=doh.hitch(_doh,"registerUrl"),doh._testStarted=function(e,i){_doh._testStarted(_thisGroup,i)},doh._testFinished=function(e,i,t){if(_doh._testFinished(_thisGroup,i,t),doh.perfTestResults)try{gName=""+e;for(var s=i.name;s.indexOf("::")>=0;)s=s.substring(s.indexOf("::")+2,s.length);_doh.perfTestResults||(_doh.perfTestResults={}),_doh.perfTestResults[gName]||(_doh.perfTestResults[gName]={}),_doh.perfTestResults[gName][i.name]=doh.perfTestResults[gName][s]}catch(a){doh.debug(a)}},doh._groupStarted=function(){this._setParent||(_doh._curTestCount=this._testCount,_doh._curGroupCount=this._groupCount,this._setParent=!0)},doh._report=function(){}}}}();