﻿/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
(function(){function l(a,c){var b=0,d;for(d in c)if(c[d]==a){b=1;break}return b}var i="",r=function(){function a(){b.once("focus",f);b.once("blur",c)}function c(b){var b=b.editor,c=d.getScayt(b),f=b.elementMode==CKEDITOR.ELEMENT_MODE_INLINE;c&&(d.setPaused(b,!c.disabled),d.setControlId(b,c.id),c.destroy(!0),delete d.instances[b.name],f&&a())}var b=this,f=function(){if(!("undefined"!=typeof d.instances[b.name]||null!=d.instances[b.name])){var a=b.config,c={};c.srcNodeRef="BODY"==b.editable().$.nodeName?
b.document.getWindow().$.frameElement:b.editable().$;c.assocApp="CKEDITOR."+CKEDITOR.version+"@"+CKEDITOR.revision;c.customerid=a.scayt_customerid||"1:WvF0D4-UtPqN1-43nkD4-NKvUm2-daQqk3-LmNiI-z7Ysb4-mwry24-T8YrS3-Q2tpq2";c.customDictionaryIds=a.scayt_customDictionaryIds||"";c.userDictionaryName=a.scayt_userDictionaryName||"";c.sLang=a.scayt_sLang||"en_US";c.onLoad=function(){CKEDITOR.env.ie&&8>CKEDITOR.env.version||this.addStyle(this.selectorCss(),"padding-bottom: 2px !important;");b.editable().hasFocus&&
!d.isControlRestored(b)&&this.focus()};c.onBeforeChange=function(){d.getScayt(b)&&!b.checkDirty()&&setTimeout(function(){b.resetDirty()},0)};a=window.scayt_custom_params;if("object"==typeof a)for(var f in a)c[f]=a[f];d.getControlId(b)&&(c.id=d.getControlId(b));var n=new window.scayt(c);n.afterMarkupRemove.push(function(a){(new CKEDITOR.dom.element(a,n.document)).mergeSiblings()});if(c=d.instances[b.name])n.sLang=c.sLang,n.option(c.option()),n.paused=c.paused;d.instances[b.name]=n;try{n.setDisabled(!1===
d.isPaused(b))}catch(k){}b.fire("showScaytState")}};b.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?a():b.on("contentDom",f);b.on("contentDomUnload",function(){for(var a=CKEDITOR.document.getElementsByTag("script"),b=/^dojoIoScript(\d+)$/i,c=/^https?:\/\/svc\.webspellchecker\.net\/spellcheck\/script\/ssrv\.cgi/i,d=0;d<a.count();d++){var f=a.getItem(d),e=f.getId(),h=f.getAttribute("src");e&&(h&&e.match(b)&&h.match(c))&&f.remove()}});b.on("beforeCommandExec",function(a){"source"==a.data.name&&"source"==
b.mode&&d.markControlRestore(b)});b.on("afterCommandExec",function(a){d.isScaytEnabled(b)&&"wysiwyg"==b.mode&&("undo"==a.data.name||"redo"==a.data.name)&&window.setTimeout(function(){d.getScayt(b).refresh()},10)});b.on("destroy",c);b.on("setData",c);b.on("insertElement",function(){var a=d.getScayt(b);d.isScaytEnabled(b)&&(CKEDITOR.env.ie&&b.getSelection().unlock(!0),window.setTimeout(function(){a.focus();a.refresh()},10))},this,null,50);b.on("insertHtml",function(){var a=d.getScayt(b);d.isScaytEnabled(b)&&
(CKEDITOR.env.ie&&b.getSelection().unlock(!0),window.setTimeout(function(){a.focus();a.refresh()},10))},this,null,50);b.on("scaytDialog",function(a){a.data.djConfig=window.djConfig;a.data.scayt_control=d.getScayt(b);a.data.tab=i;a.data.scayt=window.scayt});var e=b.dataProcessor;(e=e&&e.htmlFilter)&&e.addRules({elements:{span:function(a){if(a.attributes["data-scayt_word"]&&a.attributes["data-scaytid"])return delete a.name,a}}});e=CKEDITOR.plugins.undo.Image.prototype;e.equals=CKEDITOR.tools.override(e.equals,
function(a){return function(b){var c=this.contents,f=b.contents,e=d.getScayt(this.editor);e&&d.isScaytReady(this.editor)&&(this.contents=e.reset(c)||"",b.contents=e.reset(f)||"");e=a.apply(this,arguments);this.contents=c;b.contents=f;return e}});b.document&&(b.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE||b.focusManager.hasFocus)&&f()};CKEDITOR.plugins.scayt={engineLoaded:!1,instances:{},controlInfo:{},setControlInfo:function(a,c){a&&(a.name&&"object"!=typeof this.controlInfo[a.name])&&(this.controlInfo[a.name]=
{});for(var b in c)this.controlInfo[a.name][b]=c[b]},isControlRestored:function(a){return a&&a.name&&this.controlInfo[a.name]?this.controlInfo[a.name].restored:!1},markControlRestore:function(a){this.setControlInfo(a,{restored:!0})},setControlId:function(a,c){this.setControlInfo(a,{id:c})},getControlId:function(a){return a&&a.name&&this.controlInfo[a.name]&&this.controlInfo[a.name].id?this.controlInfo[a.name].id:null},setPaused:function(a,c){this.setControlInfo(a,{paused:c})},isPaused:function(a){if(a&&
a.name&&this.controlInfo[a.name])return this.controlInfo[a.name].paused},getScayt:function(a){return this.instances[a.name]},isScaytReady:function(a){return!0===this.engineLoaded&&"undefined"!==typeof window.scayt&&this.getScayt(a)},isScaytEnabled:function(a){return(a=this.getScayt(a))?!1===a.disabled:!1},getUiTabs:function(a){var c=[],b=a.config.scayt_uiTabs||"1,1,1",b=b.split(",");b[3]="1";for(var d=0;4>d;d++)c[d]="undefined"!=typeof window.scayt&&"undefined"!=typeof window.scayt.uiTags?parseInt(b[d],
10)&&window.scayt.uiTags[d]:parseInt(b[d],10);"object"==typeof a.plugins.wsc?c.push(1):c.push(0);return c},loadEngine:function(a){if(CKEDITOR.env.gecko&&10900>CKEDITOR.env.version||CKEDITOR.env.opera||CKEDITOR.env.air)return a.fire("showScaytState");if(!0===this.engineLoaded)return r.apply(a);if(-1==this.engineLoaded)return CKEDITOR.on("scaytReady",function(){r.apply(a)});CKEDITOR.on("scaytReady",r,a);CKEDITOR.on("scaytReady",function(){this.engineLoaded=!0},this,null,0);this.engineLoaded=-1;var c=
document.location.protocol,c=-1!=c.search(/https?:/)?c:"http:",c=a.config.scayt_srcUrl||c+"//svc.webspellchecker.net/scayt26/loader__base.js",b=d.parseUrl(c).path+"/";void 0==window.scayt?(CKEDITOR._djScaytConfig={baseUrl:b,addOnLoad:[function(){CKEDITOR.fireOnce("scaytReady")}],isDebug:!1},CKEDITOR.document.getHead().append(CKEDITOR.document.createElement("script",{attributes:{type:"text/javascript",async:"true",src:c}}))):CKEDITOR.fireOnce("scaytReady");return null},parseUrl:function(a){var c;return a.match&&
(c=a.match(/(.*)[\/\\](.*?\.\w+)$/))?{path:c[1],file:c[2]}:a}};var d=CKEDITOR.plugins.scayt,t=function(a,c,b,d,e,l,g){a.addCommand(d,e);a.addMenuItem(d,{label:b,command:d,group:l,order:g})},v={preserveState:!0,editorFocus:!1,canUndo:!1,exec:function(a){if(d.isScaytReady(a)){var c=d.isScaytEnabled(a);this.setState(c?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_ON);a=d.getScayt(a);a.focus();a.setDisabled(c)}else!a.config.scayt_autoStartup&&0<=d.engineLoaded&&(a.focus(),this.setState(CKEDITOR.TRISTATE_DISABLED),
d.loadEngine(a))}};CKEDITOR.plugins.add("scayt",{requires:"menubutton,dialog",lang:"af,ar,bg,bn,bs,ca,cs,cy,da,de,el,en-au,en-ca,en-gb,en,eo,es,et,eu,fa,fi,fo,fr-ca,fr,gl,gu,he,hi,hr,hu,is,it,ja,ka,km,ko,lt,lv,mk,mn,ms,nb,nl,no,pl,pt-br,pt,ro,ru,sk,sl,sr-latn,sr,sv,th,tr,ug,uk,vi,zh-cn,zh",icons:"scayt",beforeInit:function(a){var c=a.config.scayt_contextMenuItemsOrder||"suggest|moresuggest|control",b="";if((c=c.split("|"))&&c.length)for(var d=0;d<c.length;d++)b+="scayt_"+c[d]+(c.length!=parseInt(d,
10)+1?",":"");a.config.menu_groups=b+","+a.config.menu_groups},init:function(a){var c=a.dataProcessor&&a.dataProcessor.dataFilter,b={elements:{span:function(a){var b=a.attributes;b&&b["data-scaytid"]&&delete a.name}}};c&&c.addRules(b);var f={},e={},p=a.addCommand("scaytcheck",v);CKEDITOR.dialog.add("scaytcheck",CKEDITOR.getUrl(this.path+"dialogs/options.js"));c=d.getUiTabs(a);a.addMenuGroup("scaytButton");a.addMenuGroup("scayt_suggest",-10);a.addMenuGroup("scayt_moresuggest",-9);a.addMenuGroup("scayt_control",
-8);var b={},g=a.lang.scayt;b.scaytToggle={label:g.enable,command:"scaytcheck",group:"scaytButton"};1==c[0]&&(b.scaytOptions={label:g.options,group:"scaytButton",onClick:function(){i="options";a.openDialog("scaytcheck")}});1==c[1]&&(b.scaytLangs={label:g.langs,group:"scaytButton",onClick:function(){i="langs";a.openDialog("scaytcheck")}});1==c[2]&&(b.scaytDict={label:g.dictionariesTab,group:"scaytButton",onClick:function(){i="dictionaries";a.openDialog("scaytcheck")}});b.scaytAbout={label:a.lang.scayt.about,
group:"scaytButton",onClick:function(){i="about";a.openDialog("scaytcheck")}};1==c[4]&&(b.scaytWSC={label:a.lang.wsc.toolbar,group:"scaytButton",command:"checkspell"});a.addMenuItems(b);a.ui.add("Scayt",CKEDITOR.UI_MENUBUTTON,{label:g.title,title:CKEDITOR.env.opera?g.opera_title:g.title,modes:{wysiwyg:1},toolbar:"spellchecker,20",onRender:function(){p.on("state",function(){this.setState(p.state)},this)},onMenu:function(){var b=d.isScaytEnabled(a);a.getMenuItem("scaytToggle").label=g[b?"disable":"enable"];
var c=d.getUiTabs(a);return{scaytToggle:CKEDITOR.TRISTATE_OFF,scaytOptions:b&&c[0]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,scaytLangs:b&&c[1]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,scaytDict:b&&c[2]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,scaytAbout:b&&c[3]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,scaytWSC:c[4]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED}}});a.contextMenu&&a.addMenuItems&&a.contextMenu.addListener(function(b,c){if(!d.isScaytEnabled(a)||c.getRanges()[0].checkReadOnly())return null;
var k=d.getScayt(a),q=k.getScaytNode();if(!q)return null;var h=k.getWord(q);if(!h)return null;var i=k.getLang(),h=window.scayt.getSuggestion(h,i);if(!h||!h.length)return null;for(var o in f){delete a._.menuItems[o];delete a.commands[o]}for(o in e){delete a._.menuItems[o];delete a.commands[o]}f={};e={};o=a.config.scayt_moreSuggestions||"on";var i=false,u=a.config.scayt_maxSuggestions;typeof u!="number"&&(u=5);!u&&(u=h.length);for(var m=a.config.scayt_contextCommands||"all",m=m.split("|"),j=0,p=h.length;j<
p;j=j+1){var s="scayt_suggestion_"+h[j].replace(" ","_"),r=function(a,b){return{exec:function(){k.replace(a,b)}}}(q,h[j]);if(j<u){t(a,"button_"+s,h[j],s,r,"scayt_suggest",j+1);e[s]=CKEDITOR.TRISTATE_OFF}else if(o=="on"){t(a,"button_"+s,h[j],s,r,"scayt_moresuggest",j+1);f[s]=CKEDITOR.TRISTATE_OFF;i=true}}if(i){a.addMenuItem("scayt_moresuggest",{label:g.moreSuggestions,group:"scayt_moresuggest",order:10,getItems:function(){return f}});e.scayt_moresuggest=CKEDITOR.TRISTATE_OFF}if(l("all",m)||l("ignore",
m)){t(a,"ignore",g.ignore,"scayt_ignore",{exec:function(){k.ignore(q)}},"scayt_control",1);e.scayt_ignore=CKEDITOR.TRISTATE_OFF}if(l("all",m)||l("ignoreall",m)){t(a,"ignore_all",g.ignoreAll,"scayt_ignore_all",{exec:function(){k.ignoreAll(q)}},"scayt_control",2);e.scayt_ignore_all=CKEDITOR.TRISTATE_OFF}if(l("all",m)||l("add",m)){t(a,"add_word",g.addWord,"scayt_add_word",{exec:function(){window.scayt.addWordToUserDictionary(q)}},"scayt_control",3);e.scayt_add_word=CKEDITOR.TRISTATE_OFF}k.fireOnContextMenu&&
k.fireOnContextMenu(a);return e});c=function(b){b.removeListener();CKEDITOR.env.opera||CKEDITOR.env.air?p.setState(CKEDITOR.TRISTATE_DISABLED):p.setState(d.isScaytEnabled(a)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)};a.on("showScaytState",c);a.on("instanceReady",c);if(a.config.scayt_autoStartup)a.on("instanceReady",function(){d.loadEngine(a)})},afterInit:function(a){var c,b=function(a){if(a.hasAttribute("data-scaytid"))return!1};a._.elementsPath&&(c=a._.elementsPath.filters)&&c.push(b);a.addRemoveFormatFilter&&
a.addRemoveFormatFilter(b)}})})();