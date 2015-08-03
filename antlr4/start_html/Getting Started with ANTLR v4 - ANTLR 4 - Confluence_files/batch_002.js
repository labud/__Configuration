;try {
/* module-key = 'confluence.extra.jira:jirachart-resources', location = '/jirachart/jirachart.js' */
AJS.toInit(function(){AJS.$(".jira-chart-macro-img").load(function(a){AJS.log("Jira Chart Macro - chart image loaded");AJS.$(".insert-jira-chart-macro-button",window.parent.document).enable()}).error(function(d){AJS.log("Jira Chart Macro - chart image loaded error");AJS.$(".insert-jira-chart-macro-button",window.parent.document).disable();var e=AJS.$(d.target);var c=e.parent();var b=c.parent();c.remove();var a="Unable to render JIRA chart macro due to an execution error.";AJS.messages.error(b,{body:a})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.extra.jira:jirachart-resources', location = '/jirachart/twodimensionalchart-showlink.js' */
var TwoDimensionalShowLink=(function(e){var d=function(i){var h=e("#two-dimensional-chart-"+i);var g=h.position();e("<div />",{id:"twodimensional-dark-layout-"+i,"class":"jim-sortable-dark-layout",css:{top:g.top+"px",left:g.left+"px",width:h.width()+"px",height:h.height()+"px"}}).appendTo(h.parent())};var a=function(g){e("#twodimensional-dark-layout-"+g).remove()};var b=function(){var h=e(this).attr("data-chart-id");d(h);var g={pageId:e("#chart-page-id-"+h).val(),wikiMarkup:e("#chart-wiki-"+h).val(),isShowMore:e(this).attr("data-is-show-more")};AJS.$.ajax({type:"POST",dataType:"html",url:Confluence.getContextPath()+"/plugins/servlet/twoDimensionalShowMoreRenderer",data:g,success:function(i){if(e(i).find(".aui-message.error").length){var j=e(i).find(".message").text();e("#two-dimensional-chart-"+h).find(".show-error").html(j)}else{var k=e(i).find(".show-link-container a").attr("data-chart-id");e("#two-dimensional-chart-"+h).replaceWith(i);c(k)}a(h)},error:function(){e("#two-dimensional-chart-"+h).find(".show-error").html("Unable to render JIRA chart macro. Execution has timed out.");a(h)}})};var c=function(g){e("#show-link-"+g).on("click",b)};var f=function(){e(".show-link-container a").each(function(){c(e(this).attr("data-chart-id"))})};return{init:f}})(AJS.$);AJS.$(function(){TwoDimensionalShowLink.init()});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-flag', location = '/js/aui/flag.js' */
(function(A){define("aui/flag",[],function(){return A(AJS,AJS.$,AJS.template)})})(function(L,F,N){var O=5000;var A="aui-flag-container";var E={body:"",persistent:false,close:"",title:"",type:"info"};function J(R){if(R.hasOwnProperty("persistent")){var P;if(R.persistent){P=L.deprecate.getMessageLogger("persistent: true","5.8.0",{alternativeName:"close: never",extraInfo:"See https://ecosystem.atlassian.net/browse/AUI-2893."})}else{if(!R.persistent){P=L.deprecate.getMessageLogger("persistent: false","5.8.0",{alternativeName:"close: manual",extraInfo:"See https://ecosystem.atlassian.net/browse/AUI-2893."})}}P()}R=F.extend({},E,R);var Q=R.close!=="never"&&(R.close||(R.persistent!==true));var S=D(R,Q);G(S);if(R.close==="auto"){M(S);C(S)}else{if(R.close==="manual"){M(S)}else{if(R.close==="never"){}else{if(!R.persistent){M(S)}}}}H();return K(S)}function G(Q){var P=Q[0];P.close=function(){B(Q)}}function D(Q,P){var R='<div class="aui-flag"><div class="aui-message aui-message-{type} {type} {closeable} shadowed"><p class="title"><strong>{title}</strong></p>{body}<!-- .aui-message --></div></div>';var S=N(R).fill({"body:html":Q.body||"",closeable:P?"closeable":"",title:Q.title||"",type:Q.type}).toString();return F(S)}function M(Q){var P=F('<span class="aui-icon icon-close" role="button" tabindex="0"></span>');P.click(function(){B(Q)});P.keypress(function(R){if((R.which===L.keyCode.ENTER)||(R.which===L.keyCode.SPACE)){B(Q);R.preventDefault()}});return Q.find(".aui-message").append(P)[0]}function C(P){P.find(".aui-message").addClass("aui-will-close");setTimeout(function(){P[0].close()},O)}function B(Q){var P=Q.get(0);P.setAttribute("aria-hidden","true");P.dispatchEvent(new CustomEvent("aui-flag-close",{bubbles:true}));return P}function H(){var Q=I();var P=Q.find(".aui-flag");P.get().forEach(function(R){var S=R.getAttribute("aria-hidden")==="true";if(S){F(R).remove()}})}function I(){return F("#"+A)}function K(Q){var P=I();if(!P.length){P=F('<div id="'+A+'"></div>');F("body").prepend(P)}Q.appendTo(P);L._internal.animation.recomputeStyle(Q);return Q.attr("aria-hidden","false")[0]}return J});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch-model.js' */
define("confluence-watch-button/watch-model",["ajs","backbone"],function(a,b){return b.Model.extend({saveSettings:function(d,e){this.trigger("request");var c=this;return a.safe.ajax({url:d,type:"POST",dataType:"json",data:e}).done(function(){c.trigger("sync",c)}).fail(function(){c.trigger("error")})},saveWatchPage:function(d){var c=a.contextPath()+"/users/"+(d?"add":"remove")+"pagenotificationajax.action";this.set("watchingPage",d);return this.saveSettings(c,{pageId:this.get("pageId")})},saveWatchBlogs:function(d){var c=a.contextPath()+"/users/"+(d?"add":"remove")+"spacenotificationajax.action";this.set("watchingBlogs",d);return this.saveSettings(c,{spaceKey:this.get("spaceKey"),contentType:"blogpost"})},saveWatchSpace:function(d){var c=a.contextPath()+"/users/"+(d?"add":"remove")+"spacenotificationajax.action";this.set("watchingSpace",d);return this.saveSettings(c,{spaceKey:this.get("spaceKey")})}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch-view.js' */
define("confluence-watch-button/watch-view",["jquery","ajs","backbone"],function(b,a,c){return c.View.extend({events:{"change #cw-watch-page":"changeWatchPage","change #cw-watch-blogs":"changeWatchBlogs","change #cw-watch-space":"changeWatchSpace"},initialize:function(){_.bindAll(this,"render","initTooltips","changeWatchPage","changeWatchBlogs","changeWatchSpace","togglePageEnabledState","toggleBlogsEnabledState","startLoading","stopLoading","setTitle");this.model.on("sync change:watchingSpace",this.togglePageEnabledState,this);this.model.on("change:watchingSpace",this.toggleBlogsEnabledState,this);this.model.on("request",this.startLoading,this);this.model.on("sync",this.setTitle,this);this.model.on("sync",this.stopLoading,this)},render:function(){this.$el.html(Confluence.Watch.Templates.dialogBody(this.model.toJSON()));this.initTooltips();this.setTitle(this.model);return this},initTooltips:function(){this.$(".cw-tooltip").tooltip({gravity:"e",offset:5,delayIn:0});this.togglePageEnabledState(this.model);this.toggleBlogsEnabledState(this.model)},changeWatchPage:function(f){var d=b(f.target).is(":checked");this.model.saveWatchPage(d)},changeWatchBlogs:function(f){var d=b(f.target).is(":checked");this.model.saveWatchBlogs(d)},changeWatchSpace:function(f){var d=b(f.target).is(":checked");this.model.saveWatchSpace(d)},togglePageEnabledState:function(d){var e=d.get("watchingPage");var g=d.get("watchingSpace");this.$("#cw-watch-page").prop("disabled",g);this.$("#cw-watch-page").prop("checked",e||g);var f=g?"You will receive updates for this page because you are watching this space.":"";this.$(".cw-tooltip-watch-page").attr("original-title",f)},toggleBlogsEnabledState:function(d){var g=d.get("watchingBlogs");var f=d.get("watchingSpace");this.$("#cw-watch-blogs").prop("disabled",f);this.$("#cw-watch-blogs").prop("checked",g||f);var e=f?"You are subscribed to all blog posts because you are watching this space.":"";this.$(".cw-tooltip-watch-blogs").attr("original-title",e)},startLoading:function(){this.$(".cw-status").addClass("loading")},stopLoading:function(){this.$(".cw-status").removeClass("loading")},setTitle:function(){var e=this.model.get("watchingPage");var i=this.model.get("watchingBlogs");var g=this.model.get("watchingSpace");var d=this.model.get("isBlogPost");function h(){if(g){return{title:"You are watching this space",description:"Receiving email updates for all content in this space.",}}if(e&&d&&i){return{title:"You are watching this blog post",description:"Receiving email updates about changes to this blog post and all new blog posts in this space.",}}if(e&&d){return{title:"You are watching this blog post",description:"Receiving email updates about changes to this blog post.",}}if(e){return{title:"You are watching this page",description:"Receiving email updates about changes to this page.",}}if(d&&i){return{title:"You are watching for new blog posts",description:"Receiving email updates for new blog posts in this space.",}}if(d){return{title:"You are not watching this blog",description:"Start watching to receive email updates about changes to this blog.",}}return{title:"You are not watching this page",description:"Start watching to receive email updates about changes to this page.",}}var f=h();this.$(".cw-title").text(f.title);this.$(".cw-title-description").text(f.description)}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch.js' */
require(["jquery","underscore","ajs","confluence-watch-button/watch-model","confluence-watch-button/watch-view","confluence-watch-button/watch-notification"],function(a,h,g,e,b,f){g.toInit(function(){var j=a("#watch-content-button");if(!j.length){return}var q=i(j);var m=g.Meta.get("page-id");var n=g.Meta.get("space-key");var l=g.Meta.get("space-name");h.extend(q,{pageId:m,spaceKey:n,spaceName:l});d(j,q);var p=new e(q);var o=new b({model:p});g.InlineDialog(j,"confluence-watch",function(s,r,t){o.setElement(s);o.render();t()},{width:325,offsetX:-180,cacheContent:false,hideDelay:null,hideCallback:function(){a(".tipsy").hide()}});p.on("change:watchingPage change:watchingBlogs change:watchingSpace",function(r){d(j,r.toJSON())});p.on("change:watchingPage",function(r,t){var s=t?"watch-page":"unwatch-page";g.trigger("analytics",{name:s})});p.on("change:watchingBlogs",function(r,t){var s=t?"watch-blogs":"unwatch-blogs";g.trigger("analytics",{name:s})});p.on("change:watchingSpace",function(r,t){var s=t?"watch-space":"unwatch-space";g.trigger("analytics",{name:s})});c(p);var k=false;a(document).on("keyup",function(){k=false});window.CW_watchPage=function(){if(k){return}k=true;var t=p.get("watchingSpace");var s=p.get("watchingPage");if(t){a("body, #splitter-content").animate({scrollTop:0},300,function(){j.click();setTimeout(function(){a(".cw-tooltip-watch-page").tipsy("show")},50)})}else{var u=!s;p.saveWatchPage(u);var r=u?"You started watching this page.":"You stopped watching this page.";f(r)}}});function d(k,q){var m=q.watchingPage;var j=q.isBlogPost&&q.watchingBlogs;var o=q.watchingSpace;if(m||j||o){var l=k.find(".aui-icon").removeClass("aui-iconfont-unwatch").addClass("aui-iconfont-watch");var n=g.format("{0}W{1}atching","<u>","</u>");k.prop("title","Stop watching (w)").children("span").empty().append(l).append(" "+n)}else{var l=k.find(".aui-icon").removeClass("aui-iconfont-watch").addClass("aui-iconfont-unwatch");var p=g.format("{0}W{1}atch","<u>","</u>");k.prop("title","Watch (w)").children("span").empty().append(l).append(" "+p)}}function c(j){j.on("change:watchingPage",function(k,m){var l=m?"watchpage.pageoperation":"unwatchpage.pageoperation";g.trigger(l)})}function i(l){var m=l.prop("search");var k=/[?&;]*(.*?)=([^&;]*)/g;var j;var n={};if(m){while(j=k.exec(m)){n[j[1]]=decodeURIComponent(j[2]).replace(/\+/g," ")}}h.each(n,function(p,o){if(p=="true"){n[o]=true}else{if(p=="false"){n[o]=false}}});return n}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/notification.js' */
define("confluence-watch-button/watch-notification",["jquery","aui/flag"],function(b,a){return function(e){var c=document.getElementById("watch-notification");if(c!=null){c.close()}var d=a({type:"success",body:e,close:"auto"});d.setAttribute("id","watch-notification")}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'templates/watch.soy' */
// This file was automatically generated from watch.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Watch == 'undefined') { Confluence.Watch = {}; }
if (typeof Confluence.Watch.Templates == 'undefined') { Confluence.Watch.Templates = {}; }


Confluence.Watch.Templates.dialogBody = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="cw-status"><h2 class="cw-title"></h2><p class="cw-title-description"></p></div><form class="aui cw-dialog"><div class="cw-tooltip cw-tooltip-watch-page"><div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-page" ', (opt_data.watchingPage) ? 'checked' : '', '><label for="cw-watch-page">', (opt_data.isBlogPost) ? soy.$$escapeHtml("Watch blog post") : soy.$$escapeHtml("Watch page"), '</label></div></div>', (opt_data.isBlogPost) ? '<div class="cw-tooltip cw-tooltip-watch-blogs"><div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-blogs" ' + ((opt_data.watchingBlogs) ? 'checked' : '') + '><label for="cw-watch-blogs">' + soy.$$escapeHtml("Watch for new blog posts in this space") + '</label></div></div>' : '', '<div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-space" ', (opt_data.watchingSpace) ? 'checked' : '', '><label for="cw-watch-space">', soy.$$escapeHtml("Watch all content in this space"), '</label></div></form>', (opt_data.isAdmin) ? '<div class="cw-manage-watchers-wrapper"><button class="aui-button aui-button-link cw-manage-watchers">' + soy.$$escapeHtml("Manage Watchers") + '</button></div>' : '');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:soy-resources', location = 'soy/sidebar.soy' */
// This file was automatically generated from sidebar.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Sidebar == 'undefined') { Confluence.Templates.Sidebar = {}; }


Confluence.Templates.Sidebar.headerStyles = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.sidebarWidth) ? '<style>.ia-fixed-sidebar, .ia-splitter-left {width: ' + soy.$$escapeHtml(opt_data.sidebarWidth) + 'px;}.theme-default .ia-splitter #main {margin-left: ' + soy.$$escapeHtml(opt_data.sidebarWidth) + 'px;}.ia-fixed-sidebar {visibility: hidden;}</style>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.sidebar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="acs-side-bar ia-scrollable-section"><div class="acs-side-bar-space-info tipsy-enabled" data-configure-tooltip="', soy.$$escapeHtml("Edit space details"), '"><div class="avatar"><div class="space-logo ', (true == true) ? 'project-shortcut-dialog-trigger' : '', '" data-key="', soy.$$escapeHtml(opt_data.space.key), '" data-name="', soy.$$escapeHtml(opt_data.space.name), '" data-entity-type="confluence.space"><div class="avatar-img-container"><div class="avatar-img-wrapper"><a href="', soy.$$escapeHtml(opt_data.space.homeUrl), '" title="', soy.$$escapeHtml(opt_data.space.name), '"><img class="avatar-img" src="', soy.$$escapeHtml(opt_data.space.logoUrl), '" alt="', soy.$$escapeHtml(opt_data.space.name), '"></a></div></div></div></div><div class="name"><a href="', soy.$$escapeHtml(opt_data.space.homeUrl), '" title="', soy.$$escapeHtml(opt_data.space.name), '">', soy.$$escapeHtml(opt_data.space.name), '</a></div><div class="flyout-handle icon"></div></div><div class="acs-side-bar-content"><div class="acs-nav-wrapper"><div class="acs-nav" data-has-create-permission="', soy.$$escapeHtml(opt_data.hasCreatePermission), '" data-quick-links-state="', soy.$$escapeHtml(opt_data.quickLinksState), '" data-nav-type="', soy.$$escapeHtml(opt_data.navType), '">');
  Confluence.Templates.Sidebar.renderLinks(opt_data, output);
  output.append('</div></div>');
  if (opt_data.contextualNav) {
    Confluence.Templates.Sidebar.contextualNav(opt_data, output);
  }
  output.append('</div><div class="hidden"><a href="', soy.$$escapeHtml(opt_data.space.browseSpaceUrl), '" id="space-pages-link"></a><script type="text/x-template" title="logo-config-content"><h2>', soy.$$escapeHtml("Space Details"), '</h2><div class="personal-space-logo-hint">', AJS.format("Your profile picture is used as the logo for your personal space. \x3ca href\x3d\x22{0}\x22 target\x3d\x22_blank\x22\x3eChange your profile picture\x3c/a\x3e.","/wiki" + '/users/profile/editmyprofilepicture.action'), '</div><\/script></div></div>');
  Confluence.Templates.Sidebar.renderSpaceToolsSection({advancedLinks: opt_data.advancedLinks, hasConfigurePermission: opt_data.hasConfigurePermission, currentlyViewed: opt_data.collectorToHighlight == 'spacebar-advanced'}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.renderLinks = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="acs-nav-sections">');
  if (opt_data.mainLinks.length) {
    Confluence.Templates.Sidebar.renderLinksSection({links: opt_data.mainLinks, sectionClass: 'main-links-section', collectorToHighlight: opt_data.collectorToHighlight}, output);
  }
  if (opt_data.quickLinksState != 'hide') {
    output.append('<div class="quick-links-wrapper">');
    if (opt_data.quickLinks.length) {
      output.append('<h5 class="ia-quick-links-header-title">', soy.$$escapeHtml("Space shortcuts"), '</h5>');
      Confluence.Templates.Sidebar.renderLinksSection({links: opt_data.quickLinks, sectionClass: 'quick-links-section tipsy-enabled', collectorToHighlight: null}, output);
    } else if (opt_data.hasConfigurePermission) {
      output.append('<h5 class="ia-quick-links-header-title">', soy.$$escapeHtml("Space shortcuts"), '</h5><p class="tip">', AJS.format("Here you can add shortcut links to the most important content for your team or project. \x3ca href\x3d\x22{0}\x22 class\x3d\x22{1}\x22\x3eConfigure sidebar\x3c/a\x3e.",'','configure-sidebar'), '</p>');
    }
    output.append('</div>');
  }
  if (opt_data.hasSidebarCustomisation) {
    Confluence.Templates.Sidebar.renderCustomContent(opt_data, output);
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.renderCustomContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="custom-sidebar"><div class="custom-sidebar-content"><div class="content">', opt_data.sidebarCustomisation, '</div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.renderLinksSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.links.length) {
    output.append('<div class="', soy.$$escapeHtml(opt_data.sectionClass), ' ', (opt_data.highlightSection) ? ' current-section' : '', '"><ul class="acs-nav-list">');
    var linkList114 = opt_data.links;
    var linkListLen114 = linkList114.length;
    for (var linkIndex114 = 0; linkIndex114 < linkListLen114; linkIndex114++) {
      var linkData114 = linkList114[linkIndex114];
      output.append('<li class="acs-nav-item ', soy.$$escapeHtml(linkData114.styleClass), (opt_data.collectorToHighlight && linkData114.collectorKey == opt_data.collectorToHighlight) ? ' current-item' : '', '"', (linkData114.collectorKey) ? 'data-collector-key="' + soy.$$escapeHtml(linkData114.collectorKey) + '"' : '', '><a class="acs-nav-item-link tipsy-enabled" href="', soy.$$escapeHtml(linkData114.url), '" data-collapsed-tooltip="', soy.$$escapeHtml(linkData114.tooltip), '"><span class="icon"></span><span class="acs-nav-item-label">', soy.$$escapeHtml(linkData114.title), '</span></a></li>');
    }
    output.append('</ul></div>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.contextualNav = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="ia-secondary-container tipsy-enabled" data-tree-type="', (opt_data.forBlogs) ? 'blogs' : (opt_data.forSettings) ? 'settings' : soy.$$escapeHtml(opt_data.navType), '">');
  if (opt_data.forBlogs) {
    output.append('<div class="ia-secondary-header"><h5 class="ia-secondary-header-title blog"><span class="icon"></span><span class="label">', soy.$$escapeHtml("Blog"), '</span></h5></div><div class="ia-secondary-content">');
    Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.contextualNav}, output);
    output.append('</div>');
  } else if (opt_data.forSettings) {
    output.append('<div class="ia-secondary-header"><h5 class="ia-secondary-header-title settings"><span class="label">', soy.$$escapeHtml("Advanced"), '</span></h5></div><div class="ia-secondary-content">');
    Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.contextualNav}, output);
    output.append('</div>');
  } else if (opt_data.navType == 'page-tree') {
    output.append('<div class="ia-secondary-header"><h5 class="ia-secondary-header-title page-tree"><span class="icon"></span><span class="label">', soy.$$escapeHtml("Page tree"), '</span></h5></div>', (opt_data.pageTreeEmpty) ? '<p class="tip">' + AJS.format("Get started by adding some pages to this space. \x3ca href\x3d\x22{0}\x22 class\x3d\x22{1}\x22\x3eCreate page\x3c/a\x3e.","/wiki" + '/pages/createpage.action?spaceKey=' + opt_data.space.key,'page-tree-create-child-page-link') + '</p>' : '<div class="ia-secondary-content">' + opt_data.contextualNav + '</div>');
  } else {
    Confluence.Templates.Sidebar.Pages.renderPageContextualNav({pageContextualNav: opt_data.contextualNav, hasCreatePermission: opt_data.hasCreatePermission}, output);
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.pagetreeList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="', (opt_data.isSubtree) ? 'ia-subpagetree' : 'ia-pagetree', '">');
  var itemList188 = opt_data.pagetree;
  var itemListLen188 = itemList188.length;
  for (var itemIndex188 = 0; itemIndex188 < itemListLen188; itemIndex188++) {
    var itemData188 = itemList188[itemIndex188];
    Confluence.Templates.Sidebar.pagetreeItem(itemData188, output);
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.throbber = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="content-container"><div class="throbber-container"><div class="throbber"><div class="spinner"></div><span>', soy.$$escapeHtml("Loading..."), '</span></div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.treeThrobber = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<ul class="ia-subpagetree"><li class="acs-tree-item leaf"><span class="node-title">', soy.$$escapeHtml("Loading..."), '</span></li></ul>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.pagetreeItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="acs-tree-item', (opt_data.hasChildren) ? (opt_data.children.length) ? ' opened' : ' closed' : ' leaf', (opt_data.groupType) ? ' grouping' : '', (opt_data.active) ? ' current-item' : '', '"', (opt_data.pageId) ? ' data-page-id="' + soy.$$escapeHtml(opt_data.pageId) + '"' : '', (opt_data.groupType) ? ' data-group-type="' + soy.$$escapeHtml(opt_data.groupType) + '" data-group-value="' + soy.$$escapeHtml(opt_data.groupValue) + '"' : '', '>', (! opt_data.groupType) ? '<a href="' + soy.$$escapeHtml(opt_data.url) + '">' : '', '<span class="icon ', (opt_data.hasChildren) ? (opt_data.children.length) ? 'icon-section-opened' : 'icon-section-closed' : '', '"></span><span class="node-title navigation-pseudo-link">', soy.$$escapeHtml(opt_data.title), '</span>', (! opt_data.groupType) ? '</a>' : '');
  if (opt_data.children && opt_data.children.length > 0) {
    Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.children, isSubtree: true}, output);
  }
  output.append('</li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.renderSpaceToolsSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="space-tools-section"><div id="space-tools-menu-additional-items" class="hidden">');
  var linkList258 = opt_data.advancedLinks;
  var linkListLen258 = linkList258.length;
  for (var linkIndex258 = 0; linkIndex258 < linkListLen258; linkIndex258++) {
    var linkData258 = linkList258[linkIndex258];
    output.append('<div data-label="', soy.$$escapeHtml(linkData258.title), '" data-class="', soy.$$escapeHtml(linkData258.styleClass), '" data-href="', soy.$$escapeHtml(linkData258.url), '">', soy.$$escapeHtml(linkData258.title), '</div>');
  }
  output.append((opt_data.hasConfigurePermission) ? '<div data-label="' + soy.$$escapeHtml("Configure sidebar") + '" data-class="configure-sidebar" data-href="">' + soy.$$escapeHtml("Configure sidebar") + '</div>' : '', '</div>');
  var param285 = new soy.StringBuilder();
  aui.icons.icon({useIconFont: true, icon: 'configure', accessibilityText: "Configure"}, param285);
  param285.append('<span class="aui-button-label">', soy.$$escapeHtml("Space tools"), '</span>');
  aui.dropdown2.trigger({menu: {'id': 'space-tools-menu'}, id: 'space-tools-menu-trigger', tagName: 'button', extraClasses: 'aui-button aui-button-subtle tipsy-enabled' + ((opt_data.currentlyViewed) ? ' current-item' : ''), content: param285.toString()}, output);
  aui.dropdown2.contents({id: 'space-tools-menu', extraClasses: 'aui-style-default', extraAttributes: {'data-aui-alignment': 'top left'}}, output);
  output.append('<a class="expand-collapse-trigger"></a></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.spaceToolsMenu = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.isAuiFiveSeven) {
    output.append('<div class="space-tools-menu"><div class="aui-dropdown2-section"><ul class="space-tools-navigation">');
    var linkList303 = opt_data.spaceToolLinks;
    var linkListLen303 = linkList303.length;
    for (var linkIndex303 = 0; linkIndex303 < linkListLen303; linkIndex303++) {
      var linkData303 = linkList303[linkIndex303];
      output.append('<li><a href="', soy.$$escapeHtml(linkData303.href), '" title="', soy.$$escapeHtml(linkData303.label), '">', soy.$$escapeHtml(linkData303.label), '</a></li>');
    }
    output.append('</ul></div>');
    if (opt_data.spaceLinks.length > 0) {
      output.append('<div class="aui-dropdown2-section"><ul class="space-operations">');
      var linkList316 = opt_data.spaceLinks;
      var linkListLen316 = linkList316.length;
      for (var linkIndex316 = 0; linkIndex316 < linkListLen316; linkIndex316++) {
        var linkData316 = linkList316[linkIndex316];
        output.append('<li><a class="', soy.$$escapeHtml(linkData316.className), '" href="', soy.$$escapeHtml(linkData316.href), '" title="', soy.$$escapeHtml(linkData316.label), '">', soy.$$escapeHtml(linkData316.label), '</a></li>');
      }
      output.append('</ul></div>');
    }
    output.append('</div>');
  } else {
    aui.dropdown2.itemGroup({isTruncated: true, items: opt_data.spaceToolLinks}, output);
    if (opt_data.spaceLinks.length > 0) {
      aui.dropdown2.itemGroup({isTruncated: true, items: opt_data.spaceLinks}, output);
    }
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.configure = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="acs-nav-sections"><table id="acs-nav-list-main" class="acs-nav-list"></table><div class="acs-nav-list-quick-section', (opt_data.quickLinksState == 'hide') ? ' hidden-section' : '', '"><div class="quick-links-header"><h5>', soy.$$escapeHtml("Space shortcuts"), '</h5><a href="#" class="aui-icon aui-icon-small toggle-link" data-tooltip="', soy.$$escapeHtml("Hide/Show space shortcuts"), '"/></div><table id="acs-nav-list-quick" class="acs-nav-list"></table><p class="tip">', soy.$$escapeHtml("Click \x22Add link\x22 to add links to the sidebar."), '</p><a class="acs-add-link" href="#"><span class="icon"></span><span class="label">', soy.$$escapeHtml("Add link"), '</span></a></div>');
  if (opt_data.hasSidebarCustomisation) {
    output.append('<p class="tip">', AJS.format("You can continue editing your customized sidebar in the space admin. \x3ca href\x3d\x22{0}\x22 class\x3d\x22{1}\x22\x3eGo to space admin\x3c/a\x3e.",opt_data.customContentAdminLink,'custom-sidebar-tip'), '</p>');
    Confluence.Templates.Sidebar.renderCustomContent(opt_data, output);
  }
  output.append('<h5>', soy.$$escapeHtml("Navigation display options"), '</h5><form class="aui"><div class="radio"><input class="radio acs-nav-type" type="radio" name="nav-type" value="pages" id="nav-type-pages" ', (! opt_data.pageTree) ? 'checked' : '', '><label for="nav-type-pages">', soy.$$escapeHtml("Child pages"), '</label></div><div class="radio"><input class="radio acs-nav-type" type="radio" name="nav-type" value="page-tree" id="nav-type-tree" ', (opt_data.pageTree) ? 'checked' : '', '><label for="nav-type-tree">', soy.$$escapeHtml("Page tree"), '</label></div></form><button class="aui-style aui-button acs-done-link">', soy.$$escapeHtml("Done"), '</button></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:soy-resources', location = 'soy/sidebar-pages.soy' */
// This file was automatically generated from sidebar-pages.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Sidebar == 'undefined') { Confluence.Templates.Sidebar = {}; }
if (typeof Confluence.Templates.Sidebar.Pages == 'undefined') { Confluence.Templates.Sidebar.Pages = {}; }


Confluence.Templates.Sidebar.Pages.renderPageContextualNav = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="ia-secondary-header"><h5 class="ia-secondary-header-title pages"><span class="label">', soy.$$escapeHtml("Child pages"), '</span></h5></div><div class="ia-secondary-parent-content">');
  Confluence.Templates.Sidebar.Pages.parentPage({parentPage: opt_data.pageContextualNav.parentPage}, output);
  output.append('</div><div class="ia-secondary-current-content">');
  Confluence.Templates.Sidebar.Pages.currentPage({currentPage: opt_data.pageContextualNav.currentPage}, output);
  output.append('</div><div class="ia-secondary-content">');
  Confluence.Templates.Sidebar.Pages.childPages({children: opt_data.pageContextualNav, createPermission: opt_data.hasCreatePermission}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.Pages.childPages = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="contextual-nav-child-pages">');
  if (opt_data.children.initialChildPages.length) {
    output.append('<ul class="children">');
    Confluence.Templates.Sidebar.Pages.renderChildren({children: opt_data.children.initialChildPages}, output);
    output.append('</ul>');
    if (opt_data.children.remainingChildPages.length) {
      output.append('<ul class="more-children">');
      Confluence.Templates.Sidebar.Pages.renderChildren({children: opt_data.children.remainingChildPages}, output);
      output.append('</ul><a class="more-children-link" href=""><span class="icon"></span><span class="label">', soy.$$escapeHtml(AJS.format("{0} more child pages",opt_data.children.remainingChildPages.length)), '</span></a>');
    }
  }
  output.append((opt_data.createPermission && opt_data.children.createLink) ? '<a class="create-child-page-link" href="' + soy.$$escapeHtml(opt_data.children.createLink) + '"><span class="icon"></span><span class="label">' + soy.$$escapeHtml("Create child page") + '</span></a>' : '', '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.Pages.currentPage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.currentPage) ? '<ul class="ia-secondary-currentPage-title wiki' + ((opt_data.currentPage.active) ? ' current-item' : '') + '"><li><span class="icon"></span><span class="label">' + soy.$$escapeHtml(opt_data.currentPage.title) + '</span></li></ul>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.Pages.parentPage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.parentPage) ? '<ul class="parent ia-secondary-header-title wiki' + ((opt_data.parentPage.active) ? ' current-item' : '') + '"><li class="parent-item"><a class="parent-item-link" href="' + soy.$$escapeHtml(opt_data.parentPage.url) + '" title="' + soy.$$escapeHtml(opt_data.parentPage.title) + '"><span class="icon"></span><span class="label">' + soy.$$escapeHtml(opt_data.parentPage.title) + '</span></a></li></ul>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.Pages.renderChildren = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var childList65 = opt_data.children;
  var childListLen65 = childList65.length;
  for (var childIndex65 = 0; childIndex65 < childListLen65; childIndex65++) {
    var childData65 = childList65[childIndex65];
    output.append('<li class="child-item" data-page-id="', soy.$$escapeHtml(childData65.pageId), '"><span class="icon"></span><a href="', soy.$$escapeHtml(childData65.url), '" title="', soy.$$escapeHtml(childData65.title), '"><span class="label">', soy.$$escapeHtml(childData65.title), '</span></a></li>');
  }
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.editor-loader:background-loading-editor', location = 'jscripts/editor-loader.js' */
define("confluence-editor-loader/editor-loader",["jquery","confluence","confluence/meta"],function(d,i,g){var b,c={_listening:!1,_queuedHandlers:[],_watchHandler:function(){i.Editor.UI.toggleWatchPage(!1)},_unwatchHandler:function(){i.Editor.UI.toggleWatchPage(!0)},_createQueueAdder:function(a){return function(){c._listening&&c._queuedHandlers.push(a)}},bind:function(){AJS.bind("watchpage.pageoperation",this._createQueueAdder(this._watchHandler));AJS.bind("unwatchpage.pageoperation",this._createQueueAdder(this._unwatchHandler))},
setListening:function(a){this._listening=a},applyHandlers:function(){for(var a=this._queuedHandlers.pop();a;)a(),a=this._queuedHandlers.pop()}};c.setListening(!0);c.bind();var j=function(){var a=d("#editor-preload-container");a.length||(a=d('<div id="editor-preload-container" style="display: none;"></div>'));return a},e;return{getPreloadContainer:j,getEditorPreloadMarkup:function(){if(e)return e;var a=AJS.contextPath()+"/plugins/editor-loader/editor.action";return e=d.get(a,{parentPageId:g.get("parent-page-id"),
pageId:g.get("page-id"),spaceKey:g.get("space-key"),atl_after_login_redirect:window.location.pathname,timeout:AJS.Confluence.EditorLoader.loadingTimeout})},resourcesLoaded:function(){return b&&b.isResolved()},loadingTimeout:12E3,isEditorActive:function(){var a=d("#editor-preload-container");return a.length&&a.is(":visible")},load:function(a,c){var f;b?(b.fail(function(){c?c.call(this,arguments):AJS.log("EditorLoader: loadGuard - previous load failed.")}),b.done(function(){a?b.done(function(){setTimeout(a,
0)}):AJS.log("EditorLoader: loadGuard - editor is already loaded.")}),f=!0):f=void 0;if(!f){b=new d.Deferred;a&&b.done(a);c&&b.fail(c);var e=j();d("body").append(e);var h=new d.Deferred;g.get("page-id")?this.getEditorPreloadMarkup().done(function(a,b,c){if(b==="success"||b==="notmodified"){e.append(a);a=AJS.renderTemplate("dynamic-editor-metadata");d("head").append(a);AJS.populateParameters();AJS.debug("EditorLoader: Finished loading the editor template.");h.resolve()}else h.reject("Error loading the Editor template: "+
c.status+" - "+c.statusText)}):h.resolve();f=WRM.require(["wrc!editor","wrc!macro-browser","wrc!fullpage-editor"]).fail(function(a){AJS.logError("Failed to load editor resources",a)});d.when(h,f).done(function(){AJS.debug("EditorLoader: Finished loading the editor.");b.resolve()}).fail(function(){b.reject(arguments)})}},getEditorForm:function(){return this.isEditorActive()?d(tinymce.activeEditor.getContainer()).closest("form"):null}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor-loader/editor-loader","AJS.Confluence.EditorLoader");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.editor-loader:background-loading-editor', location = 'jscripts/block-and-buffer-keys.js' */
define("confluence-editor-loader/block-and-buffer-keys",[],function(){return{block:function(e){var d=[],f=function(a){a.preventDefault();a.stopPropagation();var c=a.which;c||(c=a.charCode?a.charCode:a.keyCode);13!==c&&48>c||d.push(c);a.preventDefault()};e.keypress(f);return function(){e.unbind("keypress",f);for(var a="",c=0;c<d.length;c++){var b;b=d[c];65535<b?(b-=65536,b=String.fromCharCode(55296+(b>>10),56320+(b&1023))):b=String.fromCharCode(b);a+=b}return a}}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor-loader/block-and-buffer-keys","AJS.Confluence.BlockAndBuffer");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/linkbrowser-editor-adapter.js' */
AJS.$(function(){if(!$("body").hasClass("with-space-sidebar")){return}Confluence=Confluence||{};Confluence.Editor=Confluence.Editor||{};AJS.Rte=AJS.Rte||{};AJS.Rte.BookmarkManager=AJS.Rte.BookmarkManager||{};AJS.Rte.BookmarkManager.storeBookmark=AJS.$.noop;AJS.Rte.BookmarkManager.restoreBookmark=AJS.$.noop});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-ia.js' */
(function(a){Confluence.Sidebar={};AJS.toInit(function(g){var s=g(window);var F=g(document);var w=Math.min(285,s.width()/3);var G=285;var E=150;var t=55;var q=AJS.contextPath();var m=q.length?q:"/";var p=AJS.Meta.get("space-key");var c=AJS.Meta.get("use-keyboard-shortcuts")?" "+"(\u2009[\u2009)":"";Confluence.Sidebar.collapseTooltip="Collapse sidebar"+c;Confluence.Sidebar.expandTooltip="Expand sidebar"+c;var f=g(".ia-splitter").children();var H=g(".ia-splitter-left");if(H.length<1){return}var n=g(".acs-side-bar");var y=H.find(".ia-fixed-sidebar");var d=g("<div>",{"class":"ia-splitter-handle tipsy-enabled","data-tooltip":Confluence.Sidebar.collapseTooltip}).appendTo(y);g("<div>",{"class":"ia-splitter-handle-highlight"}).appendTo(d);var h=g(".ia-secondary-container");var A=g("#footer, #studio-footer");Confluence.Sidebar.throbberDiv=i;h.length&&D(h.attr("data-tree-type"));s.scroll(x);s.resize(x);s.on("touchend",x);F.ready(x);AJS.bind("confluence.header-resized",x);g("#header-precursor img").load(x);Confluence.Sidebar.applyTooltip=u;l();AJS.bind("sidebar.exit-configure-mode",l);var j=g.cookie("confluence-sidebar.width")||w,e=j>E?j:t;k(e);v();y.css("visibility","visible");x();o();Confluence.Sidebar.createFlyouts(n);AJS.trigger("sidebar.finished-loading");s.one("pagetree-children-loaded",function(){var J=g(".plugin_pagetree_current");if(J.length){var K=J.offset();if(K.top>n.height()/2){n.scrollTop(K.top-n.height()/3)}if(K.left>n.width()/2){n.scrollLeft(K.left-n.width()/2)}}});AJS.bind("sidebar.enter-configure-mode",function(){b();I();y.addClass("configure-mode")});AJS.bind("sidebar.exit-configure-mode",function(){b();z();y.removeClass("configure-mode")});function b(){AJS.trigger("sidebar.hide-overlays")}function u(J,L){var K={live:true,gravity:"w",title:"data-tooltip",delayIn:500,delayOut:0,offset:5};g(J).tooltip(L?g.extend(K,L):K)}function l(){g(".acs-side-bar .quick-links-section").attr("data-collapsed-tooltip","Space shortcuts");g("#space-tools-menu-trigger").attr("data-collapsed-tooltip","Space tools");if(h.attr("data-tree-type")=="pages"){g(".acs-side-bar .ia-secondary-container").attr("data-collapsed-tooltip","Child pages");u(".collapsed .ia-secondary-container.tipsy-enabled",{title:"data-collapsed-tooltip"})}u(".expand-collapse-trigger");u(".ia-splitter-handle.tipsy-enabled");u(".collapsed .quick-links-section.tipsy-enabled, .collapsed .acs-nav-item > a.tipsy-enabled, .collapsed #space-tools-menu-trigger.tipsy-enabled",{title:"data-collapsed-tooltip"});u(".configure-mode .acs-side-bar-space-info.tipsy-enabled",{title:"data-configure-tooltip"});n.on("mousedown click scroll",b);g(window).on("scroll resize",b);AJS.bind("sidebar.hide-overlays",K);AJS.bind("sidebar.disable-tooltip",L);AJS.bind("sidebar.enable-all-tooltips",J);function L(P,O){var M=g(O).closest(".tipsy-enabled");if(M.size()!=1){return}M.removeClass("tipsy-enabled").addClass("tipsy-disabled").attr("title","");var N=M.data("tipsy");if(N){N.hoverState="out"}K()}function J(){g(".tipsy-disabled").removeClass("tipsy-disabled").addClass("tipsy-enabled")}function K(){g(".tipsy").remove()}}function v(){F.on("mousewheel",".ia-scrollable-section",function(M,N){var L=g(this).scrollTop();var K=g(this).get(0).scrollHeight-g(this).innerHeight()-1;if((N>0&&L<=0)||(N<0&&L>=K)){M.preventDefault()}else{if(g.browser.msie){M.preventDefault();var J=30;g(this).scrollTop(L+(-1*N*J))}}M.stopPropagation()})}function i(){var K=g(Confluence.Templates.Sidebar.throbber()),L=K.find(".spinner"),J=Raphael.spinner(L[0],10,"#666");K.find(".throbber").bind("remove",function(){J()});return K}function D(J){if(J==="blogs"){C(n,r)}else{if(J==="pages"){Confluence.Sidebar.Pages.installHandlers(n)}}}function r(M,N){var L=M.attr("data-group-type");var J=M.attr("data-group-value");var K=q+"/rest/ia/1.0/pagetree/blog/subtree";g.get(K,{spaceKey:p,groupType:L,groupValue:J}).done(N)}function C(J,K){J.delegate(".acs-tree-item > .icon, .acs-tree-item > .node-title","click",function(){var P=g(this);var O=P.parent();var L=O.find("> .icon");if(O.hasClass("opened")){O.children("ul").hide();O.removeClass("opened").addClass("closed");L.removeClass("icon-section-opened").addClass("icon-section-closed")}else{if(O.hasClass("closed")){var M=O.children("ul");if(M.length){M.show()}else{var N=g(Confluence.Templates.Sidebar.treeThrobber());O.append(N);K(O,function(R){var Q=g(Confluence.Templates.Sidebar.pagetreeList({pagetree:R,isSubtree:true}));N.remove();Q.appendTo(O)})}O.removeClass("closed").addClass("opened");L.removeClass("icon-section-closed").addClass("icon-section-opened")}}})}function x(){var J=H.offset().top,K=s.scrollTop(),L=s.scrollLeft();if(K<0){return}if(K>(F.height()-s.height())){return}if(L<0){return}if(L>(F.width()-s.width())){return}y.css({top:Math.max(J-K,0)+"px",left:Math.min(L*-1,0)+"px"})}function B(){A.css("margin-left",y.outerWidth()+"px")}function o(){var M=g("body");var K=false;var L=false;var N=function(O){L=true;O.preventDefault();f.one("selectstart",function(Q){Q.preventDefault()});var P=function(){if(y.width()<=E){k(t)}else{w=y.width()}L=false;M.off("mousemove.ia-splitter")};K=false;M.on("mousemove.ia-splitter",function(Q){if(Confluence.Sidebar.Configure.mode&&Q.pageX<G){return}k(Q.pageX);K=true});M.one("mouseup mouseleave",P)};d.on("mousedown.ia-splitter",function(O){N(O);b()}).click(function(){if(!K){J()}else{K=false}});Confluence.Sidebar.toggle=J;function J(){if(Confluence.Sidebar.Configure.mode){return}var O=y.width();if(O>t){if(O<=E){w=G;k(w)}else{w=O;k(t)}}else{k(w)}}}function k(J){J=Math.max(J,t);g.cookie("confluence-sidebar.width",J,{path:m,expires:365});if(J<=E){y.addClass("collapsed");d.attr("data-tooltip",Confluence.Sidebar.expandTooltip);AJS.trigger("sidebar.collapsed")}else{if(y.hasClass("collapsed")){y.removeClass("collapsed");d.attr("data-tooltip",Confluence.Sidebar.collapseTooltip);AJS.trigger("sidebar.expanded")}}y.width(J);f.eq(1).css("margin-left",J+"px");B()}function I(){if(y.width()<G){Confluence.Sidebar.widthBeforeConfiguring=y.width();k(G)}}function z(){if(Confluence.Sidebar.widthBeforeConfiguring){k(Confluence.Sidebar.widthBeforeConfiguring);Confluence.Sidebar.widthBeforeConfiguring=undefined}}})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/configurable-nav.js' */
(function(a){AJS.Confluence.ConfigurableNav=AJS.RestfulTable.extend({initialize:function(c){var b=this;b.options=a.extend(true,c,{model:AJS.RestfulTable.EntryModel,Collection:Backbone.Collection.extend({url:c.resources.self,model:AJS.RestfulTable.EntryModel}),columns:[{id:"title"}]});b._events=b._events||AJS.RestfulTable.Events;b._event=b._event||AJS.RestfulTable.Events;b.classNames=AJS.RestfulTable.ClassNames;b.dataKeys=AJS.RestfulTable.DataKeys;b.$table=c.$el.addClass(this.classNames.RESTFUL_TABLE).addClass(this.classNames.ALLOW_HOVER).addClass("aui").addClass(b.classNames.LOADING);b.$table.prepend('<colgroup><col span="1" class="aui-restfultable-order"><col span="1"><col span="1" class="aui-restfultable-operations"></colgroup>');b.$tbody=a("<tbody/>");b._models=this._createCollection();b._rowClass=AJS.Confluence.ConfigurableNav.Row;b.editRows=[];b.enableReordering();b._models.bind("remove",function(d){a.each(b.getRows(),function(e,f){if(f.model===d){if(f.hasFocus()&&b._createRow){b._createRow.trigger(b._event.FOCUS)}b.removeRow(f)}})});a.get(b.options.resources.all,function(d){b.populate(d)});Confluence.Sidebar.applyTooltip(".hide-link, .show-link, .delete-link, .toggle-link",{gravity:"ne"})},enableReordering:function(){var b=this;this.$tbody.sortable({handle:"."+this.classNames.DRAG_HANDLE,helper:function(f,c){var d=c.clone(true).addClass(b.classNames.MOVEABLE);d.children().each(function(e){a(this).width(c.children().eq(e).width())});return d},start:function(c,d){var e=d.placeholder.find("td");d.item.addClass(b.classNames.MOVEABLE).children().each(function(f){a(this).width(e.eq(f).width())});d.placeholder.html('<td colspan="'+b.getColumnCount()+'">&nbsp;</td>').css("visibility","visible");b.getRowFromElement(d.item[0]).trigger(b._event.MODAL)},stop:function(c,d){if(jQuery(d.item[0]).is(":visible")){d.item.removeClass(b.classNames.MOVEABLE).children().attr("style","");d.placeholder.removeClass(b.classNames.ROW);b.getRowFromElement(d.item[0]).trigger(b._event.MODELESS)}},update:function(e,g){var c,d,f={},h=b.getRowFromElement(g.item[0]);if(h){if(b.options.reverseOrder){d=g.item.next();if(!d.length){f.position="First"}else{c=b.getRowFromElement(d).model;f.after=c.url()}}else{d=g.item.prev();if(!d.length){f.position="First"}else{c=b.getRowFromElement(d).model;f.after=c.url()}}f.spaceKey=AJS.Meta.get("space-key");a.ajax({url:h.model.url()+"/move",type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(f),complete:function(){h.hideLoading()},success:function(i){AJS.triggerEvtForInst(b._event.REORDER_SUCCESS,b,[i])},error:function(j){var i=a.parseJSON(j.responseText||j.data);AJS.triggerEvtForInst(b._event.SERVER_ERROR,b,[i,j])}});h.showLoading()}},axis:"y",delay:0,containment:"document",cursor:"move",scroll:true,zIndex:8000});this.$tbody.bind("selectstart mousedown",function(c){return !a(c.target).is("."+b.classNames.DRAG_HANDLE)})}});AJS.Confluence.ConfigurableNav.ReadView=AJS.RestfulTable.CustomReadView.extend({render:function(b){return _.template('<span class="acs-nav-item-link" title="<%=title%>"><span class="icon"></span><span class="acs-nav-item-label"><%=title%></span></span>',{title:AJS.escapeHtml(b.title)})}});AJS.Confluence.ConfigurableNav.Row=AJS.RestfulTable.Row.extend({render:function(){var b=this,d=this.model.toJSON(),e=a("<td class='aui-restfultable-operations' />").append(this.renderOperations(d.canHide,d.hidden)),c=a('<td class="'+this.classNames.ORDER+'"/>').append(this.renderDragHandle());b._event=b._event||b._events;b.$el.attr("data-id",this.model.id);b.$el.append(c);a.each(b.columns,function(f,g){var h,k=a("<td />"),j=d[g.id];if(j){b.$el.attr("data-"+g.id,j)}h=new AJS.Confluence.ConfigurableNav.ReadView().render(d);k.append(h);b.$el.append(k)});b.$el.append(e);d.canHide&&d.hidden&&b.$el.addClass("hidden-link");b.$el.addClass(this.classNames.ROW+" "+b.classNames.READ_ONLY+" acs-nav-item "+d.styleClass);b.trigger(this._event.RENDER,this.$el,d);b.$el.trigger(this._event.CONTENT_REFRESHED,[b.$el]);return b},renderOperations:function(f,e){var c=this,b=a('<a href="#" class="aui-icon aui-icon-small"/>');if(f){function d(g){if(g.hasClass("hide-link")){g.attr("data-tooltip","Hide link")}else{g.attr("data-tooltip","Show link")}}b.addClass(e?"show-link":"hide-link").click(function(g){g.preventDefault();a.ajax({url:c.model.url()+(e?"/show":"/hide"),type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({spaceKey:AJS.Meta.get("space-key")})}).done(function(){b.closest(".acs-nav-item").toggleClass("hidden-link");b.toggleClass("hide-link").toggleClass("show-link");d(b)})});d(b)}else{b.addClass("delete-link tipsy-enabled").click(function(g){g.preventDefault();if(a(".acs-nav").data("quick-links-state")!="hide"){AJS.trigger("sidebar.disable-tooltip",this);c.destroy()}}).attr("data-tooltip","Remove link")}return b},destroy:function(){this.model.destroy({data:{spaceKey:AJS.Meta.get("space-key")}})}})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-pages.js' */
(function(b){var a=AJS.Meta.get("context-path");Confluence.Sidebar.Pages={installHandlers:function(d){d.find(".more-children-link").click(function(f){f.preventDefault();d.find("ul.more-children").show();b(this).hide()})},quickLinksContent:function(){return new b.Deferred().resolve(b(".acs-side-bar .quick-links-wrapper").html())},childPageCollapsedContent:function(){var e=b(".acs-side-bar .ia-secondary-header");var d=b(".acs-side-bar .ia-secondary-parent-content");var g=b(".acs-side-bar .ia-secondary-current-content");var f=b(".acs-side-bar .ia-secondary-content");return new b.Deferred().resolve(b("<div>").append(b("<div>").addClass("acs-side-bar-flyout-wiki-wrapper").append(e.clone()).append(d.clone()).append(g.clone()).append(f.clone())).html())},pageTreeCollapsedContent:function(){var d=b(".page-tree-flyout-content");if(d.length==0){return c().pipe(function(e){var f=b("<div>").addClass("acs-side-bar-flyout-wiki-wrapper").append(Confluence.Templates.Sidebar.Pages.renderPageContextualNav({pageContextualNav:e,hasCreatePermission:b(".acs-nav").data("has-create-permission")}));b("body").append(b("<div>").addClass("page-tree-flyout-content hidden").append(f.clone()));return f})}else{return new b.Deferred().resolve(d.html())}}};function c(){return b.ajax({url:a+"/rest/ia/1.0/space/childPagesContextualNav",data:{pageId:AJS.Meta.get("page-id")}})}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-links.js' */
AJS.$(function(){Confluence.Sidebar.Configure={mode:false};var b=AJS.$,m=AJS.Meta.get("context-path"),k=AJS.Meta.get("space-key"),i=b(".acs-side-bar"),q=i.find(".ia-secondary-container"),u=i.find(".project-shortcut-dialog-trigger"),c,o,j,l,g=b(".acs-nav");b.ajaxSetup({cache:false});b("body").on("click","#acs-configure-link, a.configure-sidebar",function(v){v.preventDefault();t()});function t(){AJS.trigger("sidebar-before-enter-configure-mode");var v=b(".custom-sidebar-content");var y=v.length;var B;var A;if(y){A=m+"/spaces/custompagecontent.action?key="+k;B=v.children().html()}l=g.data("nav-type");Confluence.Sidebar.Configure.mode=true;j=b(".acs-nav-sections .acs-nav-item.current-item").data("collector-key");c=Confluence.Sidebar.throbberDiv();c.height(b(".acs-nav-sections").height());q.hide();b(".acs-nav-sections").replaceWith(c);var x=Confluence.Templates.Sidebar.configure({pageTree:l==="page-tree",quickLinksState:g.data("quick-links-state"),hasSidebarCustomisation:y,customContentAdminLink:A,sidebarCustomisation:B});o=b(x).hide();c.after(o);d(false);h();f();r();var z={};var w=function(){c.replaceWith(o);o.show()};b("#acs-nav-list-main").one(AJS.RestfulTable.Events.INITIALIZED,function(){z.main=true;z.quick&&w()});b("#acs-nav-list-quick").one(AJS.RestfulTable.Events.INITIALIZED,function(){z.quick=true;z.main&&w()});b(".acs-nav-type").change(function(C){s("nav-type",b(this).val(),function(D){q.data("tree-type",D);g.data("nav-type",D)})});b(".acs-done-link").click(function(C){C.preventDefault();b(".acs-done-link").attr("aria-disabled",true).prop("disabled",true);n()});b(".quick-links-header a").click(function(D){D.preventDefault();var C=g.data("quick-links-state")=="hide"?"show":"hide";s("quick-links-state",C,a)});AJS.$(".acs-side-bar-space-info").on("click.configurelogo",p);AJS.trigger("sidebar.enter-configure-mode")}function p(x){var w=AJS.$(".acs-side-bar-space-info > .flyout-handle");w.addClass("loading").spin();var v=WRM.require("wr!com.atlassian.confluence.plugins.confluence-space-ia:avatar-picker",function(){AJS.trigger("deferred.spaceia.open.configure.space")});v.always(function(){w.removeClass("loading").spinStop()});x.preventDefault()}function s(v,w,x){b.ajax({url:m+"/rest/ia/1.0/space/option",type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({spaceKey:k,option:v,value:w}),success:function(y){x(w)}})}function n(){if(l!==g.data("nav-type")){location.reload();return}var v=b(".custom-sidebar-content");var x=v.length;var z;if(x){z=v.children().html()}c=Confluence.Sidebar.throbberDiv();c.height(o.height());o.replaceWith(c);d(true);e();q.show().css("display","");var w=function(){var A=b(Confluence.Templates.Sidebar.renderLinks({mainLinks:y.main,quickLinks:y.quick.reverse(),advancedLinks:y.advanced,hasConfigurePermission:true,collectorToHighlight:j,quickLinksState:g.data("quick-links-state"),hasSidebarCustomisation:x,sidebarCustomisation:z}));c.replaceWith(A);Confluence.Sidebar.Configure.mode=false;AJS.trigger("sidebar.exit-configure-mode")};var y={};b.get(m+"/rest/ia/1.0/link/main",{spaceKey:k,includeHidden:false}).done(function(A){y.main=A;y.quick&&y.advanced&&w()});b.get(m+"/rest/ia/1.0/link/quick",{spaceKey:k}).done(function(A){y.quick=A;y.main&&y.advanced&&w()});b.get(m+"/rest/ia/1.0/link/advanced",{spaceKey:k}).done(function(A){y.advanced=A;y.main&&y.quick&&w()});Confluence.Sidebar.Configure.Logo&&Confluence.Sidebar.Configure.Logo.unbind()}function h(){WRM.require("wr!com.atlassian.confluence.plugins.confluence-space-ia:link-dialog",function(){var v=new b.Deferred();b(".acs-add-link").click(function(w){v.done(function(){w.preventDefault();if(g.data("quick-links-state")!=="hide"){Confluence.Sidebar.LinkAdapter.hijackLinkBrowser();Confluence.Editor.LinkBrowser.open();b("#recentlyviewed-panel-id").click()}})}).addClass("acs-add-link-ready");if(AJS.Meta.get("space-key")){AJS.Confluence.EditorLoader.load(function(){v.resolve()},function(){AJS.log("Attempted to load editor for space ia side bar. Loading the editor failed.");v.reject()})}else{v.resolve()}})}function f(){var v=b("#acs-nav-list-quick");var x=b(".acs-nav-sections .tip").hide();var w=function(){if(Confluence.Sidebar.Configure.QuickLinks.isEmpty()){v.hide();x.show()}else{x.hide();v.show()}};AJS.bindEvt(AJS.RestfulTable.Events.INITIALIZED,w);AJS.bindEvt(AJS.RestfulTable.Events.ROW_ADDED,w);AJS.bindEvt(AJS.RestfulTable.Events.ROW_REMOVED,w)}function r(){Confluence.Sidebar.Configure.MainLinks=new AJS.Confluence.ConfigurableNav({$el:b("#acs-nav-list-main"),resources:{all:m+"/rest/ia/1.0/link/main?spaceKey="+k+"&includeHidden=true",self:m+"/rest/ia/1.0/link"}});Confluence.Sidebar.Configure.QuickLinks=new AJS.Confluence.ConfigurableNav({$el:b("#acs-nav-list-quick"),resources:{all:m+"/rest/ia/1.0/link/quick?spaceKey="+k,self:m+"/rest/ia/1.0/link"},reverseOrder:true})}function e(){Confluence.Sidebar.Configure.MainLinks.remove();Confluence.Sidebar.Configure.MainLinks.unbind();Confluence.Sidebar.Configure.QuickLinks.remove();Confluence.Sidebar.Configure.QuickLinks.unbind();b(AJS).unbind(AJS.RestfulTable.Events.INITIALIZED);b(AJS).unbind(AJS.RestfulTable.Events.ROW_ADDED);b(AJS).unbind(AJS.RestfulTable.Events.ROW_REMOVED)}function d(v){u.length&&u.toggleClass("project-shortcut-dialog-trigger",v)}function a(v){g.data("quick-links-state",v);if(v==="hide"){b(".acs-nav-list-quick-section").addClass("hidden-section")}else{b(".acs-nav-list-quick-section").removeClass("hidden-section")}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-space-tools.js' */
define("confluence-space-ia/sidebar-space-tools",["ajs","jquery","confluence"],function(b,c,d){function a(){var e=[];var h=[];var k=b.version.indexOf("5.7")===0;var i;var l;var f,j;if(!k){f=c("#space-tools-menu-trigger");j=c("#space-tools-menu")}var g;if(k){c("#space-tools-web-items").children("div").each(function(){e.push({label:c(this).data("label"),href:c(this).data("href")})})}else{b.warn("Remove legacy sidebar code when upgrade to AUI 5.8+");j.on({"aui-dropdown2-show":function(){b.trigger("sidebar.disable-tooltip",f)},"aui-dropdown2-hide":function(){b.trigger("sidebar.enable-all-tooltips")}});c("#space-tools-web-items").children("div").each(function(){e.push({text:c(this).data("label"),href:c(this).data("href")})})}if(k){c("#space-tools-menu-additional-items").children("div").each(function(){h.push({className:c(this).data("class"),label:c(this).data("label"),href:c(this).data("href")})})}else{c("#space-tools-menu-additional-items").children("div").each(function(){h.push({extraClasses:c(this).data("class"),text:c(this).data("label"),href:c(this).data("href")})})}if(k){l={hideDelay:null,width:170,displayShadow:false,calculatePositions:function(m,n){var o=n.target.offset();return{popupCss:{top:o.top-m.height(),left:o.left},arrowCss:{display:"none"}}},hideCallback:function(){b.trigger("sidebar.enable-all-tooltips")}};i=b.InlineDialog(c("#space-tools-menu-trigger"),"space-tools",function(n,m,o){n.html(d.Templates.Sidebar.spaceToolsMenu({spaceToolLinks:e,spaceLinks:h,isAuiFiveSeven:k}));c(m).one("click",function(p){if(c("#inline-dialog-space-tools").is(":visible")){setTimeout(function(){i.hide()},0)}});b.trigger("sidebar.disable-tooltip",m);b.trigger("sidebar.spacetools-loaded");o();return false},l);i.addClass("aui-dropdown2 aui-style-default");b.bind("sidebar.hide-overlays",i.hide)}else{j.html(d.Templates.Sidebar.spaceToolsMenu({spaceToolLinks:e,spaceLinks:h}));if(b&&b.Confluence&&b.Confluence.Analytics&&b.Confluence.Analytics.setAnalyticsSource){b.Confluence.Analytics.setAnalyticsSource(j.find("a:not(.configure-sidebar)"),"spacetools")}b.bind("sidebar.hide-overlays",function(){if(j.filter('[aria-hidden="false"]').length){c("#space-tools-menu-trigger").trigger("aui-button-invoke")}})}g=c(".expand-collapse-trigger");g.click(function(m){m.preventDefault();d.Sidebar.toggle()});g.attr("data-tooltip",c(".ia-fixed-sidebar").hasClass("collapsed")?d.Sidebar.expandTooltip:d.Sidebar.collapseTooltip);b.bind("sidebar.collapsed",function(){g.attr("data-tooltip",d.Sidebar.expandTooltip)});b.bind("sidebar.expanded",function(){g.attr("data-tooltip",d.Sidebar.collapseTooltip)})}return a});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-space-tools-require.js' */
require(["confluence-space-ia/sidebar-space-tools"],function(a){AJS.toInit(function(){a()})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-flyouts.js' */
(function(d){var b,c,a;Confluence.Sidebar.createFlyouts=function(g){b=f(d(".collapsed .quick-links-section"),Confluence.Sidebar.Pages.quickLinksContent,"sidebar-quick-links-flyout",{flyout:"quick-links"});var h=g.find(".ia-secondary-container");if(h.length&&h.attr("data-tree-type")=="pages"){c=f(d(".collapsed .ia-secondary-header-title.wiki"),Confluence.Sidebar.Pages.childPageCollapsedContent,"sidebar-children-flyout",{flyout:"children"})}if(h.length&&h.attr("data-tree-type")=="page-tree"){a=f(d(".collapsed .ia-secondary-header-title.page-tree"),Confluence.Sidebar.Pages.pageTreeCollapsedContent,"sidebar-page-tree-flyout",{flyout:"pagetree"})}};function f(g,j,i,l){var k=function(n,m,o){d(n).addClass("acs-side-bar-flyout ia-scrollable-section");d(n).empty().append(Confluence.Sidebar.throbberDiv());j().done(function(p){d(n).html(p)});AJS.trigger("sidebar.flyout-triggered",l);o();d(m).one("click",function(p){if(d("#inline-dialog-"+i).is(":visible")){setTimeout(function(){h.hide()},0)}});AJS.trigger("sidebar.disable-tooltip",m)};var h=AJS.InlineDialog(g,i,k,{gravity:"w",calculatePositions:e,useLiveEvents:true,hideDelay:null,hideCallback:function(){AJS.trigger("sidebar.enable-all-tooltips")}});AJS.bind("sidebar.hide-overlays",h.hide);return h}function e(h,k,p,g){var q=k.target.offset();var o=k.target.width();var l=k.target.height();var n={top:q.top+l/2-15,left:q.left+o+5,right:"auto"};var i=d(window);var m=20;n.maxHeight=i.height()+i.scrollTop()-n.top-m;if(d.browser.msie&&parseInt(d.browser.version,10)<=8){n.maxHeight-=40}var j={top:9};return{popupCss:n,arrowCss:j,gravity:"w"}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/external/jquery.mousewheel.min.js' */
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-logo.js' */
AJS.toInit(function(f){Confluence.Sidebar.Configure.Logo={};var b=f(".acs-side-bar-space-info div.name a");var h;var a;var e=function(i){f(".space-logo .avatar-img").attr("src",AJS.Meta.get("context-path")+i)};var d=function(i){b.attr("title",i).text(i)};var g=function(j,i){if(!h){h=new j({onCrop:function(l,k){f.ajax({type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({spaceKey:AJS.Meta.get("space-key"),spaceName:k,logoDataURI:l}),url:AJS.Meta.get("context-path")+"/rest/ia/1.0/space/setLogo",success:function(m){e(m.logoDownloadPath);d(m.name);h.hide()},error:function(m){h.setMessage("An error occurred while updating space details");h._removeSaveImageLoadingIcon()}})}});i.onDomReady()}h.show(f(".acs-side-bar-space-info div.name a").text());return false};var c=function(){var i=function(l,k,m){f(l).addClass("acs-side-bar-flyout");f(l).empty();l.html(AJS.template.load("logo-config-content"));l.unbind("mouseover mouseout");AJS.trigger("sidebar.disable-tooltip",k);m()};if(!a){a=AJS.InlineDialog(f(".acs-side-bar-space-info"),"space-logo-config",i,{gravity:"w",calculatePositions:j,useLiveEvents:true,hideCallback:function(){AJS.trigger("sidebar.enable-all-tooltips")},hideDelay:null,noBind:true,width:635})}function j(l,n,r,k){var s=n.target.offset();var q=n.target.width();var o=n.target.height();var p={top:s.top+o/2-15,left:s.left+q+5,right:"auto"};var m={top:9};return{popupCss:p,arrowCss:m,gravity:"w"}}a.show()};AJS.bind("sidebar-before-enter-configure-mode",function(){AJS.bind("deferred.spaceia.open.configure.space",function(i){if(AJS.Meta.get("space-key")=="~"+AJS.Meta.get("remote-user")){c()}else{require(["confluence-space-ia/avatar-picker/avatar-picker-dialog","confluence-space-ia/avatar-picker/fd-slider"],g)}i.preventDefault();return false})});Confluence.Sidebar.Configure.Logo.unbind=function(){f("#inline-dialog-space-logo-config .cancel").click();f(".acs-side-bar-space-info").off("click.configurelogo");AJS.unbind("deferred.spaceia.open.configure.space")}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:sidebar-relevant', location = 'soy/sidebar-relevant.soy' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:sidebar-relevant', location = 'js/relevant/content-heuristics.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:sidebar-relevant', location = 'js/relevant/content-parser.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:sidebar-relevant', location = 'js/relevant/content-structure.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:sidebar-relevant', location = 'js/relevant/content-tracker.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:sidebar-relevant', location = 'js/relevant/page-mode-view.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:sidebar-relevant', location = 'js/relevant/keyboard-mode-view.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:sidebar-relevant', location = 'js/relevant/controller.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:mail-page-resources', location = 'templates/sharepage/share-dialog.soy' */
// This file was automatically generated from share-dialog.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Share == 'undefined') { Confluence.Templates.Share = {}; }
if (typeof Confluence.Templates.Share.Dialog == 'undefined') { Confluence.Templates.Share.Dialog = {}; }


Confluence.Templates.Share.Dialog.shareContentPopup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" class="aui share-content-popup"><div class="field-group"><div class="autocomplete-user-target"><input class="text autocomplete-sharepage" id="users" data-max="10" data-dropdown-target=".autocomplete-user-target" data-none-message="', soy.$$escapeHtml("No matches"), '" placeholder="', soy.$$escapeHtml("User name, group or email"), '"/></div><ol class="recipients"></ol></div><div class="field-group"><textarea class="textarea" id="note" placeholder="', soy.$$escapeHtml("Add an optional note"), '"/></div><div class="field-group button-panel"><div class="progress-messages-icon"></div><div class="progress-messages"></div><input class="button submit" type="submit" value="', soy.$$escapeHtml("Share"), '" disabled/><a class="close-dialog" href="#">', soy.$$escapeHtml("Cancel"), '</a></div></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Share.Dialog.recipientUser = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li data-userkey="', soy.$$escapeHtml(opt_data.userKey), '" style="display: none" class="recipient-user"><img src="', soy.$$escapeHtml(opt_data.thumbnailLink.href), '" title="', soy.$$escapeHtml(opt_data.title), '"/><span class="title" title="', soy.$$escapeHtml(opt_data.title), '">', soy.$$escapeHtml(opt_data.title), '</span><span class="remove-recipient"/></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Share.Dialog.recipientEmail = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li data-email="', soy.$$escapeHtml(opt_data.email), '" style="display: none" class="recipient-email"><img src="', soy.$$escapeHtml(opt_data.icon), '" title="', soy.$$escapeHtml(opt_data.email), '"/><span class="title" title="', soy.$$escapeHtml(opt_data.email), '">', soy.$$escapeHtml(opt_data.email), '</span><span class="remove-recipient"/></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Share.Dialog.recipientGroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li data-group="', soy.$$escapeHtml(opt_data.title), '" style="display: none" class="recipient-group"><span><img src="', soy.$$escapeHtml(opt_data.thumbnailLink.href), '" title="', soy.$$escapeHtml(opt_data.title), '"/><span>', soy.$$escapeHtml(opt_data.title), '</span><span class="remove-recipient"/></span></li>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:mail-page-resources', location = 'js/mailpage.js' */
AJS.Confluence.SharePage={};AJS.Confluence.SharePage.autocompleteUser=function(d){d=d||document.body;var e=AJS.$,a=/^([a-zA-Z0-9_\.\-\+\!#\$%&'\*/=\?\^_`{|}~])+\@.*/;var c=function(j){if(!j||!j.result){throw new Error("Invalid JSON format")}var f=[];for(var g=0;g<j.result.length;g++){var h=j.result[g];if(h.type=="group"){h=b(h)}}f.push(j.result);return f};function b(f){if(f.name=="confluence-users"||f.name=="confluence-administrators"){return f}f.title=f.name;f.group=f.name;f.thumbnailLink={href:Confluence.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:mail-page-resources/images/group.png",type:"image/png",rel:"thumbnail"};f.link=[{href:Confluence.getContextPath(),rel:"self"}];return f}e("input.autocomplete-sharepage[data-autocomplete-user-bound!=true]",d).each(function(){var h=e(this).attr("data-autocomplete-sharepage-bound","true").attr("autocomplete","off");var g=h.attr("data-max")||10,j=h.attr("data-alignment")||"left",i=h.attr("data-dropdown-target"),f=null;if(i){f=e(i)}else{f=e("<div></div>");h.after(f)}f.addClass("aui-dd-parent autocomplete");h.quicksearch(AJS.REST.getBaseUrl()+"search/user-or-group.json",function(){h.trigger("open.autocomplete-sharepage")},{makeParams:function(k){return{"max-results":g,query:k.replace("{|}","")}},dropdownPlacement:function(k){f.append(k)},makeRestMatrixFromData:c,addDropdownData:function(l){var k=e.trim(h.val());if(a.test(k)){l.push([{name:k,email:k,href:"#",icon:Confluence.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:mail-page-resources/images/envelope.png"}])}if(!l.length){var m=h.attr("data-none-message");if(m){l.push([{name:m,className:"no-results",href:"#"}])}}return l},ajsDropDownOptions:{alignment:j,displayHandler:function(k){if(k.restObj&&k.restObj.username){return k.name+" ("+k.restObj.username+")"}return k.name},selectionHandler:function(m,l){if(l.find(".search-for").length){h.trigger("selected.autocomplete-sharepage",{searchFor:h.val()});return}if(l.find(".no-results").length){this.hide();m.preventDefault();return}var k=e("span:eq(0)",l).data("properties");if(!k.email){k=k.restObj}h.trigger("selected.autocomplete-sharepage",{content:k});this.hide();m.preventDefault()}}})})};(function(a){jQuery.fn.extend({elastic:function(){var b=["paddingTop","paddingRight","paddingBottom","paddingLeft","fontSize","lineHeight","fontFamily","width","fontWeight","border-top-width","border-right-width","border-bottom-width","border-left-width","borderTopStyle","borderTopColor","borderRightStyle","borderRightColor","borderBottomStyle","borderBottomColor","borderLeftStyle","borderLeftColor"];return this.each(function(){if(this.type!=="textarea"){return false}var g=jQuery(this),c=jQuery("<div />").css({position:"absolute",display:"none","word-wrap":"break-word","white-space":"pre-wrap"}),j=parseInt(g.css("line-height"),10)||parseInt(g.css("font-size"),"10"),l=parseInt(g.css("height"),10)||j*3,k=parseInt(g.css("max-height"),10)||Number.MAX_VALUE,d=0;if(k<0){k=Number.MAX_VALUE}c.appendTo(g.parent());var f=b.length;while(f--){c.css(b[f].toString(),g.css(b[f].toString()))}function h(){var i=Math.floor(parseInt(g.width(),10));if(c.width()!==i){c.css({width:i+"px"});e(true)}}function m(i,o){var n=Math.floor(parseInt(i,10));if(g.height()!==n){g.css({height:n+"px",overflow:o})}}function e(p){var o=g.val().replace(/&/g,"&amp;").replace(/ {2}/g,"&nbsp;").replace(/<|>/g,"&gt;").replace(/\n/g,"<br />");var i=c.html().replace(/<br>/ig,"<br />");if(p||o+"&nbsp;"!==i){c.html(o+"&nbsp;");if(Math.abs(c.height()+j-g.height())>3){var n=c.height()+j;if(n>=k){m(k,"auto")}else{if(n<=l){m(l,"hidden")}else{m(n,"hidden")}}}}}g.css({overflow:"hidden"});g.bind("keyup change cut paste",function(){e()});a(window).bind("resize",h);g.bind("resize",h);g.bind("update",e);g.bind("input paste",function(i){setTimeout(e,250)});e()})}})})(AJS.$);(function(f){var e,c={hideCallback:a,width:250,hideDelay:3600000,calculatePositions:function(h,o,w,s){var p;var y;var u;var l=-7;var m;var q;var x=o.target.offset();var g=o.target.outerWidth();var j=x.left+g/2;var t=(window.pageYOffset||document.documentElement.scrollTop)+f(window).height();var k=10;u=x.top+o.target.outerHeight()+s.offsetY;p=x.left+s.offsetX;var n=x.top>h.height();var i=(u+h.height())<t;q=(!i&&n)||(s.onTop&&n);var r=f(window).width()-(p+s.width+k);if(q){u=x.top-h.height()-8;var v=s.displayShadow?(AJS.$.browser.msie?10:9):0;l=h.height()-v}m=j-p+s.arrowOffsetX;if(s.isRelativeToMouse){if(r<0){y=k;p="auto";m=w.x-(f(window).width()-s.width)}else{p=w.x-20;y="auto";m=w.x-p}}else{if(r<0){y=k;p="auto";m=j-(f(window).width()-h.outerWidth())}else{if(s.width<=g/2){m=s.width/2;p=j-s.width/2}}}return{displayAbove:q,popupCss:{left:p,right:y,top:u},arrowCss:{position:"absolute",left:m,right:"auto",top:l}}}};var a=function(){f(".dashboard-actions .explanation").hide()};var d=function(j,h,i){if(j.find("input").length){i();return}j.append(Confluence.Templates.Share.Dialog.shareContentPopup());AJS.Confluence.SharePage.autocompleteUser();var k=function(m){AJS.Confluence.SharePage.current.hide();if(m){setTimeout(function(){j.empty()},300)}return false};f(document).keyup(function(m){if(m.keyCode==27){k(true);f(document).unbind("keyup",arguments.callee);return false}return true});j.find(".close-dialog").click(function(){k(true)});j.find("#note").elastic();j.find("form").submit(function(){var r=[];j.find(".recipients li").each(function(s,t){r.push(f(t).attr("data-userKey"))});if(r.length<=0){return false}f("button,input,textarea",this).attr("disabled","disabled");j.find(".progress-messages-icon").removeClass("error");j.find(".progress-messages").text("Sending");j.find(".progress-messages").attr("title","Sending");var o=Raphael.spinner(j.find(".progress-messages-icon")[0],7,"#666");j.find(".progress-messages-icon").css("position","absolute").css("left","0").css("margin-top","3px");j.find(".progress-messages").css("padding-left",j.find(".progress-messages-icon").innerWidth()+20);var r=[];j.find(".recipients li[data-userKey]").each(function(s,t){r.push(f(t).attr("data-userKey"))});var q=[];j.find(".recipients li[data-email]").each(function(s,t){q.push(f(t).attr("data-email"))});var m=[];j.find(".recipients li[data-group]").each(function(s,t){m.push(f(t).attr("data-group"))});var n=j.find("#note");var p={users:r,emails:q,groups:m,note:n.hasClass("placeholded")?"":n.val(),entityId:AJS.params.pageId};f.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:Confluence.getContextPath()+"/rest/share-page/latest/share",data:JSON.stringify(p),dataType:"text",success:function(){setTimeout(function(){o();j.find(".progress-messages-icon").addClass("done");j.find(".progress-messages").text("Sent");j.find(".progress-messages").attr("title","Sent");setTimeout(function(){j.find(".progress-messages").text("");j.find(".progress-messages-icon").removeClass("done");j.find("#note").val("");f("button,input,textarea",j).removeAttr("disabled");k(false)},1000)},500)},error:function(t,s){o();j.find(".progress-messages-icon").addClass("error");j.find(".progress-messages").text("Error sending");j.find(".progress-messages").attr("title","Error sending"+": "+s);f("button,input,textarea",j).removeAttr("disabled")}});return false});var l=j.find("#users");var g=j.find("input.submit");l.bind("selected.autocomplete-sharepage",function(n,m){var o=function(r,q,s){var u=j.find(".recipients"),t,p;t="li[data-"+r+'="'+s.content[r]+'"]';if(u.find(t).length>0){u.find(t).hide()}else{u.append(q(s.content))}p=u.find(t);p.find(".remove-recipient").click(function(){p.remove();if(u.find("li").length==0){g.attr("disabled","true")}AJS.Confluence.SharePage.current.refresh();l.focus();return false});p.fadeIn(200)};if(m.content.email){o("email",Confluence.Templates.Share.Dialog.recipientEmail,m)}else{if(m.content.type=="group"){o("group",Confluence.Templates.Share.Dialog.recipientGroup,m)}else{o("userKey",Confluence.Templates.Share.Dialog.recipientUser,m)}}AJS.Confluence.SharePage.current.refresh();g.removeAttr("disabled");l.val("");l.focus();return false});l.bind("open.autocomplete-sharepage",function(n,m){if(f("a:not(.no-results)",AJS.dropDown.current.links).length>0){AJS.dropDown.current.moveDown()}});l.keypress(function(m){return m.keyCode!=13});f(document).bind("showLayer",function(o,n,m){if(n=="inlineDialog"&&m.popup==AJS.Confluence.SharePage.current){m.popup.find("#users").focus()}});f(h).parents().filter(function(){return this.scrollTop>0}).scrollTop(0);i()};var b=function(g){var h=f("#splitter-content");if(h.length!==0){g.container=h;g.offsetY=AJS.InlineDialog.opts.offsetY-h.offset().top}return g};AJS.Confluence.SharePage.initDialog=function(g,i,h){if(g.length){var j=f.extend(false,b(c),h);AJS.Confluence.SharePage.current=AJS.InlineDialog(g,i,d,j)}};AJS.toInit(function(g){AJS.Confluence.SharePage.initDialog(g("#shareContentLink"),"shareContentPopup")})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:querystring', location = '/includes/js/querystring.js' */
define("confluence/querystring",[],function(){return{stringify:function(a){var b="",c;for(c in a)for(var d=0;d<a[c].length;d++)b+="&"+c,a[c][d]&&(b+="="+a[c][d]);return b.substring(1)},parse:function(a){var b={};if(a)for(var a=a.split("&"),c=0;c<a.length;c++){var d=a[c].split("=");b[d[0]]||(b[d[0]]=[]);b[d[0]].push(a[c].substring(d[0].length+1))}return b}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:url', location = '/includes/js/url.js' */
define("confluence/url",["confluence/querystring","jquery"],function(d,e){var g=/([^\?]+)[\?]?([^#]*)[#]?(.*)/,f=["source","urlPath","queryParams","anchor"];return{parse:function(a){var b={};if(a=g.exec(a)){for(var c=0;c<f.length;c++)b[f[c]]=a[c];b.queryParams=d.parse(b.queryParams)}return b},format:function(a){return e.isEmptyObject(a)?"":(!a.urlPath?"":a.urlPath)+(e.isEmptyObject(a.queryParams)?"":"?"+d.stringify(a.queryParams))+(!a.anchor?"":"#"+a.anchor)}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:analytics-support', location = '/includes/js/analytics-support.js' */
define("confluence/analytics-support","jquery ajs confluence/meta window document confluence/url".split(" "),function(j,k,o,l,m,h){var b={},n;b.setAnalyticsSource=function(a,d){if(typeof n==="undefined"){var c=j._data(l,"events");n=c&&c.analytics&&c.analytics.length>0}n&&a.attr("href",function(a,c){var b=encodeURIComponent(d),g=h.parse(c);if(!j.isEmptyObject(g))g.queryParams.src=[b];return h.format(g)})};b.srcRemovedUrl=function(a){a=h.parse(a);delete a.queryParams.src;for(var d=Object.keys(a.queryParams),
c=0;c<d.length;c++){var b=d[c],f=b.split(".");f.length===3&&f[0]==="src"&&delete a.queryParams[b]}return h.format(a)};b.srcParamValues=function(a){return(a=h.parse(a).queryParams)&&a.src?a.src:[]};b.srcAttrParamValues=function(a){for(var a=h.parse(a).queryParams,b={},c=Object.keys(a),e=0;e<c.length;e++){var f=c[e],i=f.split(".");if(i.length===3&&i[0]==="src"){var g=i[1],i=i[2];b[g]=b[g]||{};b[g][i]=decodeURIComponent(a[f][0])}}return b};b.extractAnalyticsData=function(a){for(var d=[],c=b.srcParamValues(a),
a=b.srcAttrParamValues(a),e=0;e<c.length;e++){var f=c[e];d.push({src:f,attr:a[f]||{}})}return d};b.publish=function(a,b){k.trigger("analytics",{name:a,data:b||{}})};b.init=function(){var a=b.extractAnalyticsData(m.URL),d={userKey:k.Meta.get("remote-user-key"),pageID:k.Meta.get("page-id")};if(a.length>0){for(var c=0;c<a.length;c++){var e=a[c],f=j.extend({},d,e.attr);k.Confluence.Analytics.publish("confluence.viewpage.src."+e.src,f)}if(l.history&&l.history.replaceState){a=b.srcRemovedUrl(m.URL);m.URL!==
a&&l.history.replaceState(null,"",a)}}else k.Confluence.Analytics.publish("confluence.viewpage.src.empty",d)};return b});require("confluence/module-exporter").exportModuleAsGlobal("confluence/analytics-support","AJS.Confluence.Analytics",function(j){AJS.toInit(j.init)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:page-analytics', location = '/includes/js/page.js' */
require(["ajs","jquery","confluence/analytics-support"],function(c,d,e){var h=c.Meta.get("page-id"),b=function(a,b){e.publish("confluence.page."+a,d.extend({pageID:h},b||{}))},g=function(a){setTimeout(function(){b("reading");g(a)},a)},i=(new Date).getTime();c.toInit(function(){var a=d("#main-content");b("view");a.on("click","a",function(a){a=-1<a.currentTarget.href.indexOf(window.location.host)?"internal":"external";b("link.click",{linkType:a})});var f=d(window),e=(new Date).getTime();f.on("scroll.content",
c.debounce(function(){var c=document.body.scrollTop+document.body.offsetHeight,d=a.offset().top+a.height();c>d&&(b("scroll-to-bottom",{secondsSinceReadyEvent:((new Date).getTime()-e)/1E3,secondsSincePageLoad:((new Date).getTime()-i)/1E3}),f.off("scroll.content"))},200));g(3E5)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:browser-metrics', location = 'browser-metrics-legacy.js' */
(function(){var a=window.BrowserMetrics||{};var b=window.WRM||{};a.isFunction=function(c){return !!(c&&c.constructor&&c.call&&c.apply)};a.isEnabled=function(){if(a.enabled===undefined){var c="com.atlassian.plugins.browser.metrics.browser-metrics-plugin:browser-metrics.feature-data-provider-legacy";a.enabled=a.isFunction(b.data)?b.data(c):b.data.claim(c)}return a.enabled};window.BrowserMetrics=a}());(function(){var b=window.BrowserMetrics||{};if(b.isEnabled()){var f=5;var e=12000;var c=function(g){return Math.round(g)};var a=function(g){return Math.round(g*100)/100};var d=function(k){var h=(function(){var n=/^(\w+):\/\/([^\/]*)(.*)$/;return function(p){var o=p.match(n);if(!o){return{path:p}}return{scheme:o[1],host:o[2],path:o[3]}}}());var i=(function(){var n=["secureConnectionStart","requestStart","responseStart","responseEnd","domContentLoadedEventStart","domContentLoadedEventEnd","loadEventEnd"];return function(o){if(k.performance){var s=k.performance.timing;var p=s.navigationStart;if(p){for(var r=0;r<n.length;++r){var q=n[r];var t=s[q];if(t){o(q,t-p)}}}}}}());var g=(function(){var o=[{key:"LOGIN",pattern:/^\/login.*/i},{key:"J-DASH",pattern:/^\/secure\/dashboard\.jspa.*/i},{key:"J-ISSUE",pattern:/^\/browse\/\w+\-\w+.*/i},{key:"J-NAV",pattern:/^\/issues.*/i},{key:"J-RAPID",pattern:/secure\/rapidboard\.jspa/i},{key:"SD-AGENT",pattern:/^(\/\w+)?\/servicedesk\/agent\/.*/i},{key:"SD-CUSTOMER",pattern:/^(\/\w+)?\/servicedesk\/customer\/.*/i},{key:"C-DASH",pattern:/^\/wiki(\/)?(\?.*|#.*)?$/i},{key:"C-DASH",pattern:/^\/wiki\/dashboard\.action.*$/i},{key:"C-SPACE",pattern:/^\/wiki\/display\/\w+(\?.*|#.*)?$/i},{key:"C-PAGE",pattern:/^\/wiki\/display\/\w+\/.*/i},{key:"C-PAGE",pattern:/^\/wiki\/pages\/viewpage\.action.*/i},{key:"C-BLOG",pattern:/^\/wiki\/display\/~\w+\/\d+\/\d+\/\d+\/.*/i},{key:"C-EDITOR",pattern:/^\/wiki\/pages\/editpage\.action.*/i},{key:"C-CREATE",pattern:/^\/wiki\/pages\/createpage\.action.*/i}];return function n(){var r=h(k.location.href).path;for(var p=0;p<o.length;++p){var q=o[p];if(r.match(q.pattern)){return q.key}}return null}}());function j(){var n=g();if(n){i(function(p,r){var o="browser.metrics."+p,q={version:f,page:n,value:r>e?"x":Math.ceil((r)/100),rawValue:c(r)};AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent(o,q):AJS.trigger("analyticsEvent",{name:o,data:q})})}}function m(){try{j()}catch(n){if(window.console){window.console.log("Error reporting browser metrics: "+n)}}}function l(){if(k.performance.timing.loadEventEnd){m()}else{setTimeout(l,1000)}}if(k.performance&&k.performance.timing){l()}};if(!window.ATL_PERF){window.ATL_PERF={}}window.ATL_PERF.initPageLoad=d}}());(function(){var b=window.BrowserMetrics||{};if(b.isEnabled()){var e=5;var d=12000;var a=function(f){return Math.round(f*100)/100};var c=function(g){var l={};function h(){return g.performance&&g.performance.now?g.performance.now():new Date().getTime()}function n(o){return o===Object(o)}function k(o){if(n(o)){return o.eventName+"."+o.eventType}else{return o}}function m(o){if(n(o)){return o.eventName}else{return o}}function j(o){if(n(o)){return o.eventType}else{return""}}function f(o){var p=k(o);l[p]=h()}function i(r,u){var v=k(r);if(!l[v]){throw ("Error logging browser metrics event end: no start event for key '"+v+"'")}var t=h()-l[v];l[v]=null;var o=m(r),q=j(r);var p="browser.metrics.e."+o+(u?"."+u:""),s={version:e,value:t>d?"x":Math.ceil((t)/100),rawValue:a(t),eventType:q};g.AJS.Analytics?g.AJS.Analytics.triggerPrivacyPolicySafeEvent(p,s):g.AJS.trigger("analyticsEvent",{name:p,data:s})}return{start:f,end:i}};if(!window.ATL_PERF){window.ATL_PERF={}}window.ATL_PERF.initEvents=c}}());(function(){var a=window.BrowserMetrics||{};if(a.isEnabled()){if(Math.random()<0.1){window.ATL_PERF&&window.ATL_PERF.initPageLoad&&window.ATL_PERF.initPageLoad(window)}window.ATL_PERF&&window.ATL_PERF.initEvents&&(function(){window.BrowserMetrics=window.ATL_PERF.initEvents(window)}())}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.macros.advanced:blog-post-resources', location = 'com/atlassian/confluence/plugins/macros/advanced/blog-posts.js' */
jQuery(function(a){a(".macro-blank-experience .create-post").bind("click",function(){var b=AJS.Meta.get("base-url")+"/pages/createblogpost.action?spaceKey="+AJS.Meta.get("space-key");window.location=b})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.macros.multimedia:flash-autosize', location = 'javascript/flash-autosize.js' */
AJS.toInit(function($) {
    function autoSize(embeds, attempt) {
        var retry;

        if(attempt >= 20) { // 2 sec
            AJS.log('unable to auto size flash - took too long to load');
            return;
        }

        retry = $([]);

        embeds.each(function() {
            var $e = $(this);
            var h, w;
            if(this.GetVariable) {
                // Only set width/height is not already set
                if(!$e.attr("height")) {
                    h = this.GetVariable("height");
                    if(h) {
                        $e.height(h);
                    } else {
                        retry = retry.add($e);
                        return;
                    }
                }
                if(!$e.attr("width")) {
                    w = this.GetVariable("width");
                    if(w) {
                        $e.width(w);
                    } else {
                        retry = retry.add($e);
                        return;
                    }
                }
            }
        });

        if(retry.length) {
            setTimeout(function() {
                autoSize(retry, attempt + 1);
            }, 100);
        }
    }

    autoSize($('embed[type="application/x-shockwave-flash"]'), 0);

    // For preview
    $(window).bind("render-content-loaded", function(e, body) {
        autoSize($('embed[type="application/x-shockwave-flash"]', body), 0);
    });
});

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.view-source:view-source-menu-resources', location = 'com/atlassian/confluence/plugins/viewsource/js/viewsource.js' */
define("confluence-view-source/viewsource",["jquery","window"],function(a,b){return function(){a("#action-view-source-link").click(function(a){b.open(this.href,(this.id+"-popupwindow").replace(/-/g,"_"),"width=800, height=600, scrollbars, resizable");a.preventDefault();return!1})}});require("confluence/module-exporter").safeRequire("confluence-view-source/viewsource",function(a){AJS.toInit(a)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.view-storage-format:view-storage-menu-resources', location = 'com/atlassian/confluence/plugins/viewstorage/js/viewstorage.js' */
AJS.toInit(function(a){a(".view-storage-link, .view-storage-link a").click(function(b){window.open(this.href,(this.id+"-popupwindow").replace(/-/g,"_"),"width=800, height=600, scrollbars, resizable");b.preventDefault();return false})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-amd-resources', location = '/js/amd/confluence-amd.js' */
define("confluence",function(){return Confluence});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-amd-resources', location = '/js/amd/tinymce-amd.js' */
define("tinymce",function(){return tinymce});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:common', location = '/js/view-file-macro-utils.js' */
define("vfm/view-file-macro-utils",[],function(){var a={DEFAULT_HEIGHT:"250",DEFAULT_HEIGHT_IN_COMMENT:"150",THUMBNAIL_STATUS_IN_PROGRESS:202,THUMBNAIL_STATUS_CONVERTED:200,THUMBNAIL_STATUS_ERROR:415,THUMBNAIL_STATUS_BUSY:429,THUMBNAIL_POLLING_PERIOD:1000,THUMBNAIL_POLLING_BACKOFF_RATIO:1.25,MAP_NICE_TYPE_TO_TEXT:{"pdf document":"PDF","word document":"Document","excel spreadsheet":"Spreadsheet","powerpoint presentation":"Presentation","generic file":"File"},getFileNameFromUrl:function(b){if(!b){return""}var c=b.indexOf("#");c=(c>=0)?c:b.length;b=b.substring(0,c);c=b.indexOf("?");c=(c>=0)?c:b.length;b=b.substring(0,c);c=b.lastIndexOf("/");b=b.substring(c+1,b.length);return decodeURIComponent(b)},isSupportPointerEvents:function(){var b=document.createElement("x");b.style.cssText="pointer-events:auto";return b.style.pointerEvents==="auto"},getParameterByName:function(d,c){var e=d.indexOf("#");if(e>=0){d=d.substring(0,e)}var b=new RegExp(c+"=([^&]*)","i").exec(d);return b?decodeURIComponent(b[1]):null},addParamsToUrl:function(b,h){var f="";if(b.indexOf("?")===-1){f="?"}else{f="&"}var e=Object.keys(h);for(var d=0;d<e.length;d++){var c=e[d];var g=h[c];if(d>0){f+="&"}f+=c+"="+g}return b+f},getFileTypeTextFromNiceType:function(b){b=b?b.toLowerCase():"";return this.MAP_NICE_TYPE_TO_TEXT[b]?this.MAP_NICE_TYPE_TO_TEXT[b]:b}};return a});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:common', location = '/js/services/conversion-service.js' */
define("vfm/services/conversion-service",["ajs","jquery"],function(a,b){return{postThumbnailConversionResults:function(c){var d=a.contextPath()+"/rest/documentConversion/latest/conversion/thumbnail/results";var e=Object.keys(c);var f=_.map(e,function(g){return{id:g,v:c[g].version}});return b.ajax({type:"POST",url:d,contentType:"application/json",data:JSON.stringify(f)})},getThumbnailUrl:function(d,c){return a.contextPath()+"/rest/documentConversion/latest/conversion/thumbnail/"+d+"/"+c}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:file-types-utils-resources', location = 'utils/file-types-utils.js' */
(function(){var e={"aui-iconfont-file-image":"image/gif image/jpeg image/pjpeg image/png image/tiff image/bmp".split(" "),"aui-iconfont-file-pdf":["application/pdf"],"aui-iconfont-file-video":"audio/mpeg audio/x-wav audio/mp3 audio/mp4 video/mpeg video/quicktime video/mp4 video/x-m4v video/x-flv video/x-ms-wmv video/avi video/webm video/vnd.rn-realvideo".split(" "),"aui-iconfont-file-code":"text/html text/xml text/javascript application/javascript application/x-javascript text/css text/x-java-source".split(" "),
"aui-iconfont-file-doc":["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],"aui-iconfont-file-xls":["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],"aui-iconfont-file-ppt":["application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation"],"aui-iconfont-file-txt":["text/plain"],"aui-iconfont-file-zip":["application/zip","application/java-archive"]},b={},c;for(c in e)for(var f=
e[c],d=0,g=f.length;d<g;d++)b[f[d]]=c;AJS.Confluence.FileTypesUtils={getAUIIconFromMime:function(a){return b[a]||"aui-iconfont-file-generic"},isImage:function(a){return b[a]&&0===a.indexOf("image/")}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-soy-resources', location = '/templates/embedded-file-view.soy' */
// This file was automatically generated from embedded-file-view.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.ViewFileMacro == 'undefined') { Confluence.ViewFileMacro = {}; }
if (typeof Confluence.ViewFileMacro.Templates == 'undefined') { Confluence.ViewFileMacro.Templates = {}; }


Confluence.ViewFileMacro.Templates.embeddedFile = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="confluence-embedded-file-wrapper"><a class="confluence-embedded-file" href="', soy.$$escapeHtml(opt_data.fileSrc), '" data-nice-type="', soy.$$escapeHtml(opt_data.niceType), '" data-file-src="', soy.$$escapeHtml(opt_data.fileSrc), '" data-linked-resource-id="', soy.$$escapeHtml(opt_data.attachmentId), '" data-linked-resource-type="attachment" data-linked-resource-container-id="', soy.$$escapeHtml(opt_data.containerId), '" data-linked-resource-default-alias="', soy.$$escapeHtml(opt_data.fileName), '" data-mime-type="', soy.$$escapeHtml(opt_data.mimeType), '" data-has-thumbnail="', (opt_data.hasThumbnail) ? 'true' : 'false', '" data-linked-resource-version="', soy.$$escapeHtml(opt_data.attachmentVersion), '"', (opt_data.unresolvedCommentCount && opt_data.unresolvedCommentCount >= 0) ? 'data-unresolved-comment-count=' + soy.$$escapeHtml(opt_data.unresolvedCommentCount) : '', '><img src="', soy.$$escapeHtml(opt_data.placeholderSrc), '" height="', soy.$$escapeHtml(opt_data.height), '" />', (! opt_data.hasThumbnail) ? '<span class="title">' + soy.$$escapeHtml(opt_data.fileName) + '</span>' : '', '</a></span>');
  return opt_sb ? '' : output.toString();
};


Confluence.ViewFileMacro.Templates.embeddedUnknownFile = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-file unknown-attachment" src="', soy.$$escapeHtml(opt_data.placeholderSrc), '" /></span>');
  return opt_sb ? '' : output.toString();
};


Confluence.ViewFileMacro.Templates.overlayEmbeddedFile = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="overlay"></span>');
  return opt_sb ? '' : output.toString();
};


Confluence.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="comment-count-overlay"><span class="content">', soy.$$escapeHtml(opt_data.commentCountRep), '</span></span>');
  return opt_sb ? '' : output.toString();
};


Confluence.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="file-type-desc-overlay"><i class="aui-icon aui-icon-small ', soy.$$escapeHtml(opt_data.iconClass), '"></i><span class="content"> ', soy.$$escapeHtml(opt_data.fileType), '</span></span>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-resources', location = '/js/services/file-service.js' */
define("vfm/services/file-service",["ajs","jquery"],function(a,b){return{getCommentCount:function(c,e){var d="/rest/files/1.0/files/content/{0}/commentCount?attachmentId={1}";d=a.contextPath()+a.format(d,c,e);return b.get(d)}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-resources', location = '/js/components/embedded-file-view.js' */
define("vfm/components/embedded-file-view",["jquery","backbone","ajs","confluence","vfm/view-file-macro-utils"],function(c,g,f,h,i){function b(s){var r=c(s.el);var q=r.find(".confluence-embedded-image, .confluence-embedded-file");if(q.hasClass("unknown-attachment")||(q.attr("src")&&q.attr("src").indexOf("/confluence/plugins/servlet/confluence/placeholder/unknown-attachment")>=0)){return this}var j={mimeType:"",niceType:""};var k=q.hasClass("confluence-embedded-image");var o=r.parent().is("a");var m=q.attr("data-has-thumbnail")==="true";if(k){j.mimeType="image/png"}else{j.mimeType=q.attr("data-mime-type");j.niceType=q.attr("data-nice-type")!=="null"?q.attr("data-nice-type"):"generic file"}var p=!o?e(q):"";var l=(!k&&m)?a(j):"";if(p||l){var n=h.ViewFileMacro.Templates.overlayEmbeddedFile();r.append(c(n).append(p).append(l));if(l){r.addClass("has-comment-overlay")}}}var d=function(j){j=parseInt(j,10);j=c.isNumeric(j)?j:0;return j>9?"9+":j+""};var e=function(o){var j="",k=o.attr("data-linked-resource-container-id"),m=o.attr("data-linked-resource-id");if(k&&m){var n=o.attr("data-unresolved-comment-count");var l=d(n);if(l!=="0"){j=h.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount({commentCountRep:l})}}return j};var a=function(j){return h.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc({fileType:i.getFileTypeTextFromNiceType(j.niceType),iconClass:f.Confluence.FileTypesUtils.getAUIIconFromMime(j.mimeType)})};return{render:b}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-resources', location = '/js/vfm.js' */
require(["jquery","ajs","vfm/components/embedded-file-view"],function(c,a,b){c(document).on("click",".confluence-embedded-file.unknown-attachment",function(d){d.preventDefault()});a.toInit(function(){c(".confluence-embedded-file-wrapper").each(function(){b.render({el:this})})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:amd', location = 'lib/amd/almond-noconflict-pre.js' */
window.__require=window.require;window.__requirejs=window.requirejs;window.__define=window.define;
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:amd', location = 'lib/amd/almond.js' */
var requirejs,require,define;(function(e){var h,a,k,l,d={},c={},r={},o={},j=Object.prototype.hasOwnProperty,i=[].slice;function s(t,u){return j.call(t,u)}function m(w,u){var E,A,y,B,x,G,H,D,C,z,F=u&&u.split("/"),v=r.map,t=(v&&v["*"])||{};if(w&&w.charAt(0)==="."){if(u){F=F.slice(0,F.length-1);w=F.concat(w.split("/"));for(D=0;D<w.length;D+=1){z=w[D];if(z==="."){w.splice(D,1);D-=1}else{if(z===".."){if(D===1&&(w[2]===".."||w[0]==="..")){break}else{if(D>0){w.splice(D-1,2);D-=2}}}}}w=w.join("/")}else{if(w.indexOf("./")===0){w=w.substring(2)}}}if((F||t)&&v){E=w.split("/");for(D=E.length;D>0;D-=1){A=E.slice(0,D).join("/");if(F){for(C=F.length;C>0;C-=1){y=v[F.slice(0,C).join("/")];if(y){y=y[A];if(y){B=y;x=D;break}}}}if(B){break}if(!G&&t&&t[A]){G=t[A];H=D}}if(!B&&G){B=G;x=H}if(B){E.splice(0,x,B);w=E.join("/")}}return w}function q(t,u){return function(){return a.apply(e,i.call(arguments,0).concat([t,u]))}}function n(t){return function(u){return m(u,t)}}function f(t){return function(u){d[t]=u}}function g(u){if(s(c,u)){var t=c[u];delete c[u];o[u]=true;h.apply(e,t)}if(!s(d,u)&&!s(o,u)){throw new Error("No "+u)}return d[u]}function p(u){var v,t=u?u.indexOf("!"):-1;if(t>-1){v=u.substring(0,t);u=u.substring(t+1,u.length)}return[v,u]}k=function(u,t){var v,x=p(u),w=x[0];u=x[1];if(w){w=m(w,t);v=g(w)}if(w){if(v&&v.normalize){u=v.normalize(u,n(t))}else{u=m(u,t)}}else{u=m(u,t);x=p(u);w=x[0];u=x[1];if(w){v=g(w)}}return{f:w?w+"!"+u:u,n:u,pr:w,p:v}};function b(t){return function(){return(r&&r.config&&r.config[t])||{}}}l={require:function(t){return q(t)},exports:function(t){var u=d[t];if(typeof u!=="undefined"){return u}else{return(d[t]={})}},module:function(t){return{id:t,uri:"",exports:d[t],config:b(t)}}};h=function(u,D,C,B){var w,A,x,t,v,y=[],z;B=B||u;if(typeof C==="function"){D=!D.length&&C.length?["require","exports","module"]:D;for(v=0;v<D.length;v+=1){t=k(D[v],B);A=t.f;if(A==="require"){y[v]=l.require(u)}else{if(A==="exports"){y[v]=l.exports(u);z=true}else{if(A==="module"){w=y[v]=l.module(u)}else{if(s(d,A)||s(c,A)||s(o,A)){y[v]=g(A)}else{if(t.p){t.p.load(t.n,q(B,true),f(A),{});y[v]=d[A]}else{throw new Error(u+" missing "+A)}}}}}}x=C.apply(d[u],y);if(u){if(w&&w.exports!==e&&w.exports!==d[u]){d[u]=w.exports}else{if(x!==e||!z){d[u]=x}}}}else{if(u){d[u]=C}}};requirejs=require=a=function(w,x,t,u,v){if(typeof w==="string"){if(l[w]){return l[w](x)}return g(k(w,x).f)}else{if(!w.splice){r=w;if(x.splice){w=x;x=t;t=null}else{w=e}}}x=x||function(){};if(typeof t==="function"){t=u;u=v}if(u){h(e,w,x,t)}else{setTimeout(function(){h(e,w,x,t)},4)}return a};a.config=function(t){r=t;if(r.deps){a(r.deps,r.callback)}return a};define=function(t,u,v){if(!u.splice){v=u;u=[]}if(!s(d,t)&&!s(c,t)){c[t]=[t,u,v]}}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:amd', location = 'lib/amd/almond-noconflict-post.js' */
if(window.__require){window.require=window.__require;window.requirejs=window.__requirejs;window.define=window.__define}else{delete window.define.amd}try{delete window.__require}catch(e){window.__require=undefined}try{delete window.__requirejs}catch(e){window.__requirejs=undefined}try{delete window.__define}catch(e){window.__define=undefined};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:amd', location = 'lib/amd/ajs-amd.js' */
define("ajs",function(){return AJS});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:amd', location = 'lib/amd/backbone-amd.js' */
define("backbone",function(){return Backbone});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:amd', location = 'lib/amd/jquery-amd.js' */
define("jquery",function(){return AJS.$});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:amd', location = 'lib/amd/underscore-amd.js' */
define("underscore",function(){return _});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.base-hipchat-integration-plugin-api:amd', location = 'lib/amd/wrm-amd.js' */
define("wrm",function(){if(WRM.data instanceof Function){WRM.data.claim=WRM.data}return WRM});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:discovery-javascript-data', location = 'discovery/hipChatDiscovery.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:discovery-javascript-data', location = 'discovery/discoveryPopup.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:discovery-resources', location = 'discovery/integrationDiscovery.soy' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipChatServerDiscovery', location = 'discovery/integrationDiscovery.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipchat-presence-resources', location = 'presence/presence.soy' */
// This file was automatically generated from presence.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.HipChat == 'undefined') { Confluence.Templates.HipChat = {}; }
if (typeof Confluence.Templates.HipChat.Presence == 'undefined') { Confluence.Templates.HipChat.Presence = {}; }


Confluence.Templates.HipChat.Presence.badge = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="hipchat-status aui-icon aui-icon-small hipchat-icon-', soy.$$escapeHtml(opt_data.statusCode), '" data-status="', soy.$$escapeHtml(opt_data.statusCode), '" title="', soy.$$escapeHtml(opt_data.statusMessage), '">', soy.$$escapeHtml(opt_data.statusMessage), '</span>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.HipChat.Presence.chatBar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="hipchat-chatbar aui-buttons"><button class="aui-button hipchat-chat" title="', soy.$$escapeHtml("Unable to start chat as this user is not known in HipChat."), '" aria-disabled="true"><span><span class="aui-icon aui-icon-small hipchat-icon-chat">', soy.$$escapeHtml("Chat"), '</span></span></button><button class="aui-button hipchat-voice" title="', soy.$$escapeHtml("Unable to start voice calls as this user is not known in HipChat."), '" aria-disabled="true" data-call-type="voice"><span><span class="aui-icon aui-icon-small hipchat-icon-voice">', soy.$$escapeHtml("Voice"), '</span></span></button><button class="aui-button hipchat-video" title="', soy.$$escapeHtml("Unable to start video calls as this user is not known in HipChat."), '" aria-disabled="true" data-call-type="video"><span><span class="aui-icon aui-icon-small hipchat-icon-video">', soy.$$escapeHtml("Video"), '</span></span></button></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipchat-presence-resources', location = 'presence/presence.js' */
(function(d){var f=AJS.DarkFeatures.isEnabled("hipchat.chatbar");var a={hipChatCall:function(g,h){if(!g){return}return"hipchat://hipchat.com/user/"+encodeURI(g)+(h?"?call="+encodeURI(h):"")}};var c=AJS.contextPath()+"/rest/hipchat/integration/1.0/users/";var b=function(g){return function(j){var i=d(this);var h=i.attr("data-user-id");var k=i.attr("data-caller-id");if(!k){return}var l=i.attr("data-call-type");if(!g&&l){return}window.location.replace(a.hipChatCall(k,l));AJS.trigger("analyticsEvent",{name:"hipchat.chatbar."+(l||"chat"),data:{userId:h}});j.preventDefault()}};var e=function(g){return function(i){if(!i||!i.presence){return}var j=i.userId;var h=i.hipChatUserId;var k;var m;var l=d(g).find(".hipchat-chatbar .aui-button");l.attr("data-user-id",j);l.attr("data-caller-id",h);l.click(b(i.presence.is_online));if(i.presence.is_online){if(i.presence.show==="xa"||i.presence.show==="away"){k="away";m="Away"}else{if(i.presence.show==="dnd"){k="dnd";m="Do not disturb"}else{k="available";m="Available"}}l.filter(".hipchat-chat").attr("title","Start chat with this user in HipChat.").removeAttr("aria-disabled");l.filter(".hipchat-voice").attr("title","Start a voice call with this user in HipChat.").removeAttr("aria-disabled");l.filter(".hipchat-video").attr("title","Start a video call with this user in HipChat.").removeAttr("aria-disabled")}else{k="offline";m="Offline";l.filter(".hipchat-chat").attr("title","Start chat with this user in HipChat.").removeAttr("aria-disabled");l.filter(".hipchat-voice").attr("title","Unable to start voice calls as this user is not known in HipChat.");l.filter(".hipchat-video").attr("title","Unable to start video calls as this user is not known in HipChat.")}if(i.presence.status){m+=" ("+i.presence.status+")"}d("div.values",g).append(Confluence.Templates.HipChat.Presence.badge({statusCode:k,statusMessage:m}));AJS.trigger("analyticsEvent",{name:"hipchat.presence.user.found",data:{userId:i.userId}})}};d(document).bind("ajaxComplete",function(i,g,h){if(/userinfopopup\.action/.test(h.url)){d.each(d(".vcard"),function(n,p){var m=d(p);var k=m.closest(".contents");var l=k.find(".profile-macro").first();var o=k.find(".actions").first();if(l.hasClass("hipchat-status-applied")||!o.length){return}l.addClass("hipchat-status-applied");if(f){o.addClass("hipchat-chatbar-support");o.append(Confluence.Templates.HipChat.Presence.chatBar());o.find(".ajs-menu-bar").addClass("aui-buttons");o.find(".ajs-button > a").addClass("aui-button");o.find(".user-popup-more").addClass("aui-button");o.find(".user-popup-more > span > span").addClass("aui-icon aui-icon-small aui-iconfont-more").text("")}var q=d(".userLogoLink",m).attr("data-username");var j=c+encodeURIComponent(q);d.getJSON(j,e(k)).fail(function(t){if(t.status===404){try{var r=JSON.parse(t.responseText);if(r.userId){AJS.trigger("analyticsEvent",{name:"hipchat.presence.user.unknown",data:{userId:r.userId}})}}catch(s){}}})})}})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipChatSpaceDiscovery', location = 'discovery/spacetoroom/spaceDiscoveryData.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipChatSpaceDiscovery', location = 'discovery/spacetoroom/spaceDiscovery.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipChatSpaceDiscovery', location = 'discovery/spacetoroom/spaceDiscovery.soy' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.extra.jira:help-dialog-extension', location = '/jira/help-dialog.js' */
if(Confluence.KeyboardShortcuts){Confluence.KeyboardShortcuts.Editor.push({context:"editor.actions",descKey:"Insert JIRA Issue/Filter"+":",keys:[["Ctrl+Shift+J"]]})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-autoconvert-resources', location = '/js/confluence/macro/autoconvert.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-autoconvert-resources', location = '/js/confluence/macro/autoconvert-init.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:blueprint-first-time-tooltip-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/first-time-tooptip.js' */
AJS.bind("sidebar.finished-loading",function(){var a=AJS.Meta.get("blueprint-index-popup-key");AJS.debug("Index key for "+a);if(a){Confluence.Blueprint.showIndexPagePopup(a)}});Confluence.Blueprint=AJS.$.extend(Confluence.Blueprint,{showIndexPagePopup:function(b){var d=function(i){return function(l,j,k){l.html(Confluence.Templates.Blueprints.sidebarIndexPagePopup({indexPageTitle:i.toLowerCase()}));k()}};var a=AJS.$(AJS.$("li.blueprint."+b)[0]);var h=a.text();var g=AJS.$(".icon",a);var f="blueprintIndexSidebarPopup";var c=AJS.InlineDialog(g.is(":visible")?g:AJS.$(".acs-nav-sections .quick-links-section"),f,d(h),{addActiveClass:false,hideDelay:null,noBind:true});AJS.$(document).bind("showLayer",function(i){var j=f+".inline-dialog-check";AJS.$("body").unbind("click."+j)});c.show();var e=function(i){AJS.$(document).on("click","#dismiss-index-popup",function(){i.hide();return false})}(c);AJS.bind("quickedit.success",function(){c.hide()})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:blueprint-first-time-tooltip-resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/sidebar-index-page-popup.soy' */
// This file was automatically generated from sidebar-index-page-popup.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }


Confluence.Templates.Blueprints.sidebarIndexPagePopup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h2>', soy.$$escapeHtml(AJS.format("Find your {0} here",opt_data.indexPageTitle)), '</h2><p>', soy.$$escapeHtml(AJS.format("You\x27\x27ve created a {0} page. A shortcut in your sidebar has been added where you can find other {0} in this space.",opt_data.indexPageTitle)), '</p><br/><form>');
  aui.buttons.button({text: "Dismiss", id: 'dismiss-index-popup'}, output);
  output.append('</form>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-from-template-macro.js' */
AJS.toInit(function(b){var a=b(".create-from-template-button");a.each(function(){var d=b(this);if(d.attr("aria-disabled")=="true"){var c={live:true,gravity:"n",title:"data-tooltip",delayIn:250,delayOut:0};d.tooltip(c)}else{d.click(function(){d.addClass("launching-dialog");Confluence.Blueprint.loadDialogAndOpenTemplate(d.data());return false})}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/create-from-template-macro.soy' */
// This file was automatically generated from create-from-template-macro.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }
if (typeof Confluence.Templates.Blueprints.CreateFromTemplate == 'undefined') { Confluence.Templates.Blueprints.CreateFromTemplate = {}; }


Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class=\'aui-button create-from-template-button\'', (! opt_data.hasCreatePermission) ? 'aria-disabled=\'true\' data-tooltip="' + soy.$$escapeHtml("Sorry, you don\x27t have permission to create content. Contact your space administrator to request access.") + '"' : '', 'data-space-key=\'', soy.$$escapeHtml(opt_data.spaceKey), '\' href=\'', soy.$$escapeHtml(opt_data.createContentUrl), '\'', (opt_data.title) ? 'data-title=\'' + soy.$$escapeHtml(opt_data.title) + '\'' : '', (opt_data.templateId) ? 'data-template-id=\'' + soy.$$escapeHtml(opt_data.templateId) + '\'' : '', (opt_data.contentBlueprintId) ? 'data-content-blueprint-id=\'' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '\'' : '', '>', soy.$$escapeHtml(opt_data.buttonLabel), '</a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.issue-status-plugin:issue-status-resources', location = 'templates/status.soy' */
// This file was automatically generated from status.soy.
// Please don't edit this file by hand.

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Template == 'undefined') { JIRA.Template = {}; }
if (typeof JIRA.Template.Util == 'undefined') { JIRA.Template.Util = {}; }
if (typeof JIRA.Template.Util.Issue == 'undefined') { JIRA.Template.Util.Issue = {}; }
if (typeof JIRA.Template.Util.Issue.Status == 'undefined') { JIRA.Template.Util.Issue.Status = {}; }


JIRA.Template.Util.Issue.Status.issueStatusResolver = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (! opt_data.issueStatus) {
    output.append('<span class="aui-icon aui-icon-small aui-iconfont-help jira-issue-status-render-error" title="', soy.$$escapeHtml("No issue status information was provided"), '"></span>');
  } else if (opt_data.issueStatus.statusCategory) {
    JIRA.Template.Util.Issue.Status.issueStatus(opt_data, output);
  } else {
    JIRA.Template.Util.Issue.Status.iconStatus({name: opt_data.issueStatus.name, iconUrl: opt_data.issueStatus.iconUrl, description: opt_data.issueStatus.description, isCompact: opt_data.isCompact}, output);
  }
  return opt_sb ? '' : output.toString();
};


JIRA.Template.Util.Issue.Status.iconStatus = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<img src="', soy.$$escapeHtml(opt_data.iconUrl), '" width="16" height="16" alt="', soy.$$escapeHtml(opt_data.name), '" title="', soy.$$escapeHtml(opt_data.name), (opt_data.description) ? ' - ' + soy.$$escapeHtml(opt_data.description) : '', '" class="jira-issue-status-icon">', (! opt_data.isCompact) ? ' ' + soy.$$escapeHtml(opt_data.name) : '');
  return opt_sb ? '' : output.toString();
};


JIRA.Template.Util.Issue.Status.issueStatus = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  JIRA.Template.Util.Issue.Status.statusLozenge({name: opt_data.issueStatus.name, categoryKey: opt_data.issueStatus.statusCategory.key, colorName: opt_data.issueStatus.statusCategory.colorName, description: opt_data.issueStatus.description, isSubtle: opt_data.isSubtle, isCompact: opt_data.isCompact, maxWidth: opt_data.maxWidth}, output);
  return opt_sb ? '' : output.toString();
};


JIRA.Template.Util.Issue.Status.statusLozenge = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var maxWidth__soy46 = opt_data.maxWidth ? opt_data.maxWidth : 'medium';
  var tooltipContent__soy47 = new soy.StringBuilder('<span class="jira-issue-status-tooltip-title">', soy.$$escapeHtml(opt_data.name), '</span>', (opt_data.description) ? '<br><span class="jira-issue-status-tooltip-desc">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '');
  tooltipContent__soy47 = tooltipContent__soy47.toString();
  output.append('<span class=" jira-issue-status-lozenge aui-lozenge ');
  JIRA.Template.Util.Issue.Status.statusLozengeClasses(opt_data, output);
  output.append((opt_data.isSubtle && ! opt_data.isCompact) ? ' aui-lozenge-subtle' : '', (opt_data.isCompact) ? ' jira-issue-status-lozenge-compact' : '', ' jira-issue-status-lozenge-max-width-', soy.$$escapeHtml(maxWidth__soy46), '" data-tooltip="', soy.$$escapeHtml(tooltipContent__soy47), '">', soy.$$escapeHtml(opt_data.name), '</span>');
  return opt_sb ? '' : output.toString();
};


JIRA.Template.Util.Issue.Status.statusLozengeClasses = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('jira-issue-status-lozenge-', soy.$$escapeHtml(opt_data.colorName ? opt_data.colorName : 'medium-gray'), ' ', (opt_data.categoryKey) ? 'jira-issue-status-lozenge-' + soy.$$escapeHtml(opt_data.categoryKey) : '');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.issue-status-plugin:issue-status-resources', location = '/js/issue-status-plugin.js' */
AJS.$(function(){if(AJS.$.fn.tooltip){AJS.$(".jira-issue-status-lozenge[data-tooltip]").tooltip({aria:true,gravity:AJS.$.fn.tipsy.autoWE,delayIn:100,html:true,live:true,title:"data-tooltip",className:"jira-issue-status-tooltip"})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.position.js' */
/*
 * jQuery UI Position 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(G,H){G.ui=G.ui||{};var D=/left|center|right/,E=/top|center|bottom/,A="center",F={},B=G.fn.position,C=G.fn.offset;G.fn.position=function(J){if(!J||!J.of){return B.apply(this,arguments)}J=G.extend({},J);var N=G(J.of),M=N[0],P=(J.collision||"flip").split(" "),O=J.offset?J.offset.split(" "):[0,0],L,I,K;if(M.nodeType===9){L=N.width();I=N.height();K={top:0,left:0}}else{if(M.setTimeout){L=N.width();I=N.height();K={top:N.scrollTop(),left:N.scrollLeft()}}else{if(M.preventDefault){J.at="left top";L=I=0;K={top:J.of.pageY,left:J.of.pageX}}else{L=N.outerWidth();I=N.outerHeight();K=N.offset()}}}G.each(["my","at"],function(){var Q=(J[this]||"").split(" ");if(Q.length===1){Q=D.test(Q[0])?Q.concat([A]):E.test(Q[0])?[A].concat(Q):[A,A]}Q[0]=D.test(Q[0])?Q[0]:A;Q[1]=E.test(Q[1])?Q[1]:A;J[this]=Q});if(P.length===1){P[1]=P[0]}O[0]=parseInt(O[0],10)||0;if(O.length===1){O[1]=O[0]}O[1]=parseInt(O[1],10)||0;if(J.at[0]==="right"){K.left+=L}else{if(J.at[0]===A){K.left+=L/2}}if(J.at[1]==="bottom"){K.top+=I}else{if(J.at[1]===A){K.top+=I/2}}K.left+=O[0];K.top+=O[1];return this.each(function(){var T=G(this),V=T.outerWidth(),S=T.outerHeight(),U=parseInt(G.curCSS(this,"marginLeft",true))||0,R=parseInt(G.curCSS(this,"marginTop",true))||0,X=V+U+(parseInt(G.curCSS(this,"marginRight",true))||0),Y=S+R+(parseInt(G.curCSS(this,"marginBottom",true))||0),W=G.extend({},K),Q;if(J.my[0]==="right"){W.left-=V}else{if(J.my[0]===A){W.left-=V/2}}if(J.my[1]==="bottom"){W.top-=S}else{if(J.my[1]===A){W.top-=S/2}}if(!F.fractions){W.left=Math.round(W.left);W.top=Math.round(W.top)}Q={left:W.left-U,top:W.top-R};G.each(["left","top"],function(a,Z){if(G.ui.position[P[a]]){G.ui.position[P[a]][Z](W,{targetWidth:L,targetHeight:I,elemWidth:V,elemHeight:S,collisionPosition:Q,collisionWidth:X,collisionHeight:Y,offset:O,my:J.my,at:J.at})}});if(G.fn.bgiframe){T.bgiframe()}T.offset(G.extend(W,{using:J.using}))})};G.ui.position={fit:{left:function(I,J){var L=G(window),K=J.collisionPosition.left+J.collisionWidth-L.width()-L.scrollLeft();I.left=K>0?I.left-K:Math.max(I.left-J.collisionPosition.left,I.left)},top:function(I,J){var L=G(window),K=J.collisionPosition.top+J.collisionHeight-L.height()-L.scrollTop();I.top=K>0?I.top-K:Math.max(I.top-J.collisionPosition.top,I.top)}},flip:{left:function(J,L){if(L.at[0]===A){return }var N=G(window),M=L.collisionPosition.left+L.collisionWidth-N.width()-N.scrollLeft(),I=L.my[0]==="left"?-L.elemWidth:L.my[0]==="right"?L.elemWidth:0,K=L.at[0]==="left"?L.targetWidth:-L.targetWidth,O=-2*L.offset[0];J.left+=L.collisionPosition.left<0?I+K+O:M>0?I+K+O:0},top:function(J,L){if(L.at[1]===A){return }var N=G(window),M=L.collisionPosition.top+L.collisionHeight-N.height()-N.scrollTop(),I=L.my[1]==="top"?-L.elemHeight:L.my[1]==="bottom"?L.elemHeight:0,K=L.at[1]==="top"?L.targetHeight:-L.targetHeight,O=-2*L.offset[1];J.top+=L.collisionPosition.top<0?I+K+O:M>0?I+K+O:0}}};if(!G.offset.setOffset){G.offset.setOffset=function(M,J){if(/static/.test(G.curCSS(M,"position"))){M.style.position="relative"}var L=G(M),O=L.offset(),I=parseInt(G.curCSS(M,"top",true),10)||0,N=parseInt(G.curCSS(M,"left",true),10)||0,K={top:(J.top-O.top)+I,left:(J.left-O.left)+N};if("using" in J){J.using.call(M,K)}else{L.css(K)}};G.fn.offset=function(I){var J=this[0];if(!J||!J.ownerDocument){return null}if(I){if(G.isFunction(I)){return this.each(function(K){G(this).offset(I.call(this,K,G(this).offset()))})}return this.each(function(){G.offset.setOffset(this,I)})}return C.call(this)}}if(!G.curCSS){G.curCSS=G.css}(function(){var I=document.getElementsByTagName("body")[0],P=document.createElement("div"),M,O,J,N,L;M=document.createElement(I?"div":"body");J={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};if(I){G.extend(J,{position:"absolute",left:"-1000px",top:"-1000px"})}for(var K in J){M.style[K]=J[K]}M.appendChild(P);O=I||document.documentElement;O.insertBefore(M,O.firstChild);P.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;";N=G(P).offset(function(Q,R){return R}).offset();M.innerHTML="";O.removeChild(M);L=N.top+N.left+(I?2000:0);F.fractions=L>21&&L<22})()}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.droppable.js' */
/*
 * jQuery UI Droppable 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function(A,B){A.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var D=this.options,C=D.accept;this.isover=0;this.isout=1;this.accept=A.isFunction(C)?C:function(E){return E.is(C)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};A.ui.ddmanager.droppables[D.scope]=A.ui.ddmanager.droppables[D.scope]||[];A.ui.ddmanager.droppables[D.scope].push(this);(D.addClasses&&this.element.addClass("ui-droppable"))},destroy:function(){var C=A.ui.ddmanager.droppables[this.options.scope];for(var D=0;D<C.length;D++){if(C[D]==this){C.splice(D,1)}}this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(C,D){if(C=="accept"){this.accept=A.isFunction(D)?D:function(E){return E.is(D)}}A.Widget.prototype._setOption.apply(this,arguments)},_activate:function(D){var C=A.ui.ddmanager.current;if(this.options.activeClass){this.element.addClass(this.options.activeClass)}(C&&this._trigger("activate",D,this.ui(C)))},_deactivate:function(D){var C=A.ui.ddmanager.current;if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}(C&&this._trigger("deactivate",D,this.ui(C)))},_over:function(D){var C=A.ui.ddmanager.current;if(!C||(C.currentItem||C.element)[0]==this.element[0]){return }if(this.accept.call(this.element[0],(C.currentItem||C.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)}this._trigger("over",D,this.ui(C))}},_out:function(D){var C=A.ui.ddmanager.current;if(!C||(C.currentItem||C.element)[0]==this.element[0]){return }if(this.accept.call(this.element[0],(C.currentItem||C.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("out",D,this.ui(C))}},_drop:function(D,E){var C=E||A.ui.ddmanager.current;if(!C||(C.currentItem||C.element)[0]==this.element[0]){return false}var F=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var G=A.data(this,"droppable");if(G.options.greedy&&!G.options.disabled&&G.options.scope==C.options.scope&&G.accept.call(G.element[0],(C.currentItem||C.element))&&A.ui.intersect(C,A.extend(G,{offset:G.element.offset()}),G.options.tolerance)){F=true;return false}});if(F){return false}if(this.accept.call(this.element[0],(C.currentItem||C.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("drop",D,this.ui(C));return this.element}return false},ui:function(C){return{draggable:(C.currentItem||C.element),helper:C.helper,position:C.position,offset:C.positionAbs}}});A.extend(A.ui.droppable,{version:"1.8.24"});A.ui.intersect=function(P,J,N){if(!J.offset){return false}var E=(P.positionAbs||P.position.absolute).left,D=E+P.helperProportions.width,M=(P.positionAbs||P.position.absolute).top,L=M+P.helperProportions.height;var G=J.offset.left,C=G+J.proportions.width,O=J.offset.top,K=O+J.proportions.height;switch(N){case"fit":return(G<=E&&D<=C&&O<=M&&L<=K);break;case"intersect":return(G<E+(P.helperProportions.width/2)&&D-(P.helperProportions.width/2)<C&&O<M+(P.helperProportions.height/2)&&L-(P.helperProportions.height/2)<K);break;case"pointer":var H=((P.positionAbs||P.position.absolute).left+(P.clickOffset||P.offset.click).left),I=((P.positionAbs||P.position.absolute).top+(P.clickOffset||P.offset.click).top),F=A.ui.isOver(I,H,O,G,J.proportions.height,J.proportions.width);return F;break;case"touch":return((M>=O&&M<=K)||(L>=O&&L<=K)||(M<O&&L>K))&&((E>=G&&E<=C)||(D>=G&&D<=C)||(E<G&&D>C));break;default:return false;break}};A.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(F,H){var C=A.ui.ddmanager.droppables[F.options.scope]||[];var G=H?H.type:null;var I=(F.currentItem||F.element).find(":data(droppable)").andSelf();droppablesLoop:for(var E=0;E<C.length;E++){if(C[E].options.disabled||(F&&!C[E].accept.call(C[E].element[0],(F.currentItem||F.element)))){continue}for(var D=0;D<I.length;D++){if(I[D]==C[E].element[0]){C[E].proportions.height=0;continue droppablesLoop}}C[E].visible=C[E].element.css("display")!="none";if(!C[E].visible){continue}if(G=="mousedown"){C[E]._activate.call(C[E],H)}C[E].offset=C[E].element.offset();C[E].proportions={width:C[E].element[0].offsetWidth,height:C[E].element[0].offsetHeight}}},drop:function(C,D){var E=false;A.each(A.ui.ddmanager.droppables[C.options.scope]||[],function(){if(!this.options){return }if(!this.options.disabled&&this.visible&&A.ui.intersect(C,this,this.options.tolerance)){E=this._drop.call(this,D)||E}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(C.currentItem||C.element))){this.isout=1;this.isover=0;this._deactivate.call(this,D)}});return E},dragStart:function(C,D){C.element.parents(":not(body,html)").bind("scroll.droppable",function(){if(!C.options.refreshPositions){A.ui.ddmanager.prepareOffsets(C,D)}})},drag:function(C,D){if(C.options.refreshPositions){A.ui.ddmanager.prepareOffsets(C,D)}A.each(A.ui.ddmanager.droppables[C.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return }var G=A.ui.intersect(C,this,this.options.tolerance);var I=!G&&this.isover==1?"isout":(G&&this.isover==0?"isover":null);if(!I){return }var H;if(this.options.greedy){var F=this.options.scope;var E=this.element.parents(":data(droppable)").filter(function(){return A.data(this,"droppable").options.scope===F});if(E.length){H=A.data(E[0],"droppable");H.greedyChild=(I=="isover"?1:0)}}if(H&&I=="isover"){H.isover=0;H.isout=1;H._out.call(H,D)}this[I]=1;this[I=="isout"?"isover":"isout"]=0;this[I=="isover"?"_over":"_out"].call(this,D);if(H&&I=="isout"){H.isout=0;H.isover=1;H._over.call(H,D)}})},dragStop:function(C,D){C.element.parents(":not(body,html)").unbind("scroll.droppable");if(!C.options.refreshPositions){A.ui.ddmanager.prepareOffsets(C,D)}}}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.resizable.js' */
/*
 * jQuery UI Resizable 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(C,D){C.widget("ui.resizable",C.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000},_create:function(){var F=this,J=this.options;this.element.addClass("ui-resizable");C.extend(this,{_aspectRatio:!!(J.aspectRatio),aspectRatio:J.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:J.helper||J.ghost||J.animate?J.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(C('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=J.handles||(!C(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all"){this.handles="n,e,s,w,se,sw,ne,nw"}var K=this.handles.split(",");this.handles={};for(var G=0;G<K.length;G++){var I=C.trim(K[G]),E="ui-resizable-"+I;var H=C('<div class="ui-resizable-handle '+E+'"></div>');H.css({zIndex:J.zIndex});if("se"==I){H.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}this.handles[I]=".ui-resizable-"+I;this.element.append(H)}}this._renderAxis=function(P){P=P||this.element;for(var M in this.handles){if(this.handles[M].constructor==String){this.handles[M]=C(this.handles[M],this.element).show()}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var N=C(this.handles[M],this.element),O=0;O=/sw|ne|nw|se|n|s/.test(M)?N.outerHeight():N.outerWidth();var L=["padding",/ne|nw|n/.test(M)?"Top":/se|sw|s/.test(M)?"Bottom":/^e$/.test(M)?"Right":"Left"].join("");P.css(L,O);this._proportionallyResize()}if(!C(this.handles[M]).length){continue}}};this._renderAxis(this.element);this._handles=C(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){if(!F.resizing){if(this.className){var L=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}F.axis=L&&L[1]?L[1]:"se"}});if(J.autoHide){this._handles.hide();C(this.element).addClass("ui-resizable-autohide").hover(function(){if(J.disabled){return }C(this).removeClass("ui-resizable-autohide");F._handles.show()},function(){if(J.disabled){return }if(!F.resizing){C(this).addClass("ui-resizable-autohide");F._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();var E=function(G){C(G).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){E(this.element);var F=this.element;F.after(this.originalElement.css({position:F.css("position"),width:F.outerWidth(),height:F.outerHeight(),top:F.css("top"),left:F.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);E(this.originalElement);return this},_mouseCapture:function(F){var G=false;for(var E in this.handles){if(C(this.handles[E])[0]==F.target){G=true}}return !this.options.disabled&&G},_mouseStart:function(G){var J=this.options,F=this.element.position(),E=this.element;this.resizing=true;this.documentScroll={top:C(document).scrollTop(),left:C(document).scrollLeft()};if(E.is(".ui-draggable")||(/absolute/).test(E.css("position"))){E.css({position:"absolute",top:F.top,left:F.left})}this._renderProxy();var K=B(this.helper.css("left")),H=B(this.helper.css("top"));if(J.containment){K+=C(J.containment).scrollLeft()||0;H+=C(J.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:K,top:H};this.size=this._helper?{width:E.outerWidth(),height:E.outerHeight()}:{width:E.width(),height:E.height()};this.originalSize=this._helper?{width:E.outerWidth(),height:E.outerHeight()}:{width:E.width(),height:E.height()};this.originalPosition={left:K,top:H};this.sizeDiff={width:E.outerWidth()-E.width(),height:E.outerHeight()-E.height()};this.originalMousePosition={left:G.pageX,top:G.pageY};this.aspectRatio=(typeof J.aspectRatio=="number")?J.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);var I=C(".ui-resizable-"+this.axis).css("cursor");C("body").css("cursor",I=="auto"?this.axis+"-resize":I);E.addClass("ui-resizable-resizing");this._propagate("start",G);return true},_mouseDrag:function(E){var H=this.helper,G=this.options,M={},P=this,J=this.originalMousePosition,N=this.axis;var Q=(E.pageX-J.left)||0,O=(E.pageY-J.top)||0;var I=this._change[N];if(!I){return false}var L=I.apply(this,[E,Q,O]),K=C.browser.msie&&C.browser.version<7,F=this.sizeDiff;this._updateVirtualBoundaries(E.shiftKey);if(this._aspectRatio||E.shiftKey){L=this._updateRatio(L,E)}L=this._respectSize(L,E);this._propagate("resize",E);H.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}this._updateCache(L);this._trigger("resize",E,this.ui());return false},_mouseStop:function(H){this.resizing=false;var I=this.options,M=this;if(this._helper){var G=this._proportionallyResizeElements,E=G.length&&(/textarea/i).test(G[0].nodeName),F=E&&C.ui.hasScroll(G[0],"left")?0:M.sizeDiff.height,K=E?0:M.sizeDiff.width;var N={width:(M.helper.width()-K),height:(M.helper.height()-F)},J=(parseInt(M.element.css("left"),10)+(M.position.left-M.originalPosition.left))||null,L=(parseInt(M.element.css("top"),10)+(M.position.top-M.originalPosition.top))||null;if(!I.animate){this.element.css(C.extend(N,{top:L,left:J}))}M.helper.height(M.size.height);M.helper.width(M.size.width);if(this._helper&&!I.animate){this._proportionallyResize()}}C("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",H);if(this._helper){this.helper.remove()}return false},_updateVirtualBoundaries:function(G){var J=this.options,I,H,F,K,E;E={minWidth:A(J.minWidth)?J.minWidth:0,maxWidth:A(J.maxWidth)?J.maxWidth:Infinity,minHeight:A(J.minHeight)?J.minHeight:0,maxHeight:A(J.maxHeight)?J.maxHeight:Infinity};if(this._aspectRatio||G){I=E.minHeight*this.aspectRatio;F=E.minWidth/this.aspectRatio;H=E.maxHeight*this.aspectRatio;K=E.maxWidth/this.aspectRatio;if(I>E.minWidth){E.minWidth=I}if(F>E.minHeight){E.minHeight=F}if(H<E.maxWidth){E.maxWidth=H}if(K<E.maxHeight){E.maxHeight=K}}this._vBoundaries=E},_updateCache:function(E){var F=this.options;this.offset=this.helper.offset();if(A(E.left)){this.position.left=E.left}if(A(E.top)){this.position.top=E.top}if(A(E.height)){this.size.height=E.height}if(A(E.width)){this.size.width=E.width}},_updateRatio:function(H,G){var I=this.options,J=this.position,F=this.size,E=this.axis;if(A(H.height)){H.width=(H.height*this.aspectRatio)}else{if(A(H.width)){H.height=(H.width/this.aspectRatio)}}if(E=="sw"){H.left=J.left+(F.width-H.width);H.top=null}if(E=="nw"){H.top=J.top+(F.height-H.height);H.left=J.left+(F.width-H.width)}return H},_respectSize:function(L,G){var J=this.helper,I=this._vBoundaries,Q=this._aspectRatio||G.shiftKey,P=this.axis,S=A(L.width)&&I.maxWidth&&(I.maxWidth<L.width),M=A(L.height)&&I.maxHeight&&(I.maxHeight<L.height),H=A(L.width)&&I.minWidth&&(I.minWidth>L.width),R=A(L.height)&&I.minHeight&&(I.minHeight>L.height);if(H){L.width=I.minWidth}if(R){L.height=I.minHeight}if(S){L.width=I.maxWidth}if(M){L.height=I.maxHeight}var F=this.originalPosition.left+this.originalSize.width,O=this.position.top+this.size.height;var K=/sw|nw|w/.test(P),E=/nw|ne|n/.test(P);if(H&&K){L.left=F-I.minWidth}if(S&&K){L.left=F-I.maxWidth}if(R&&E){L.top=O-I.minHeight}if(M&&E){L.top=O-I.maxHeight}var N=!L.width&&!L.height;if(N&&!L.left&&L.top){L.top=null}else{if(N&&!L.top&&L.left){L.left=null}}return L},_proportionallyResize:function(){var J=this.options;if(!this._proportionallyResizeElements.length){return }var G=this.helper||this.element;for(var F=0;F<this._proportionallyResizeElements.length;F++){var H=this._proportionallyResizeElements[F];if(!this.borderDif){var E=[H.css("borderTopWidth"),H.css("borderRightWidth"),H.css("borderBottomWidth"),H.css("borderLeftWidth")],I=[H.css("paddingTop"),H.css("paddingRight"),H.css("paddingBottom"),H.css("paddingLeft")];this.borderDif=C.map(E,function(K,M){var L=parseInt(K,10)||0,N=parseInt(I[M],10)||0;return L+N})}if(C.browser.msie&&!(!(C(G).is(":hidden")||C(G).parents(":hidden").length))){continue}H.css({height:(G.height()-this.borderDif[0]-this.borderDif[2])||0,width:(G.width()-this.borderDif[1]-this.borderDif[3])||0})}},_renderProxy:function(){var F=this.element,I=this.options;this.elementOffset=F.offset();if(this._helper){this.helper=this.helper||C('<div style="overflow:hidden;"></div>');var E=C.browser.msie&&C.browser.version<7,G=(E?1:0),H=(E?2:-1);this.helper.addClass(this._helper).css({width:this.element.outerWidth()+H,height:this.element.outerHeight()+H,position:"absolute",left:this.elementOffset.left-G+"px",top:this.elementOffset.top-G+"px",zIndex:++I.zIndex});this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(G,F,E){return{width:this.originalSize.width+F}},w:function(H,F,E){var J=this.options,G=this.originalSize,I=this.originalPosition;return{left:I.left+F,width:G.width-F}},n:function(H,F,E){var J=this.options,G=this.originalSize,I=this.originalPosition;return{top:I.top+E,height:G.height-E}},s:function(G,F,E){return{height:this.originalSize.height+E}},se:function(G,F,E){return C.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[G,F,E]))},sw:function(G,F,E){return C.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[G,F,E]))},ne:function(G,F,E){return C.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[G,F,E]))},nw:function(G,F,E){return C.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[G,F,E]))}},_propagate:function(F,E){C.ui.plugin.call(this,F,[E,this.ui()]);(F!="resize"&&this._trigger(F,E,this.ui()))},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});C.extend(C.ui.resizable,{version:"1.8.24"});C.ui.plugin.add("resizable","alsoResize",{start:function(F,G){var E=C(this).data("resizable"),I=E.options;var H=function(J){C(J).each(function(){var K=C(this);K.data("resizable-alsoresize",{width:parseInt(K.width(),10),height:parseInt(K.height(),10),left:parseInt(K.css("left"),10),top:parseInt(K.css("top"),10)})})};if(typeof (I.alsoResize)=="object"&&!I.alsoResize.parentNode){if(I.alsoResize.length){I.alsoResize=I.alsoResize[0];H(I.alsoResize)}else{C.each(I.alsoResize,function(J){H(J)})}}else{H(I.alsoResize)}},resize:function(G,I){var F=C(this).data("resizable"),J=F.options,H=F.originalSize,L=F.originalPosition;var K={height:(F.size.height-H.height)||0,width:(F.size.width-H.width)||0,top:(F.position.top-L.top)||0,left:(F.position.left-L.left)||0},E=function(M,N){C(M).each(function(){var Q=C(this),R=C(this).data("resizable-alsoresize"),P={},O=N&&N.length?N:Q.parents(I.originalElement[0]).length?["width","height"]:["width","height","top","left"];C.each(O,function(S,U){var T=(R[U]||0)+(K[U]||0);if(T&&T>=0){P[U]=T||null}});Q.css(P)})};if(typeof (J.alsoResize)=="object"&&!J.alsoResize.nodeType){C.each(J.alsoResize,function(M,N){E(M,N)})}else{E(J.alsoResize)}},stop:function(E,F){C(this).removeData("resizable-alsoresize")}});C.ui.plugin.add("resizable","animate",{stop:function(I,N){var O=C(this).data("resizable"),J=O.options;var H=O._proportionallyResizeElements,E=H.length&&(/textarea/i).test(H[0].nodeName),F=E&&C.ui.hasScroll(H[0],"left")?0:O.sizeDiff.height,L=E?0:O.sizeDiff.width;var G={width:(O.size.width-L),height:(O.size.height-F)},K=(parseInt(O.element.css("left"),10)+(O.position.left-O.originalPosition.left))||null,M=(parseInt(O.element.css("top"),10)+(O.position.top-O.originalPosition.top))||null;O.element.animate(C.extend(G,M&&K?{top:M,left:K}:{}),{duration:J.animateDuration,easing:J.animateEasing,step:function(){var P={width:parseInt(O.element.css("width"),10),height:parseInt(O.element.css("height"),10),top:parseInt(O.element.css("top"),10),left:parseInt(O.element.css("left"),10)};if(H&&H.length){C(H[0]).css({width:P.width,height:P.height})}O._updateCache(P);O._propagate("resize",I)}})}});C.ui.plugin.add("resizable","containment",{start:function(F,P){var R=C(this).data("resizable"),J=R.options,L=R.element;var G=J.containment,K=(G instanceof C)?G.get(0):(/parent/.test(G))?L.parent().get(0):G;if(!K){return }R.containerElement=C(K);if(/document/.test(G)||G==document){R.containerOffset={left:0,top:0};R.containerPosition={left:0,top:0};R.parentData={element:C(document),left:0,top:0,width:C(document).width(),height:C(document).height()||document.body.parentNode.scrollHeight}}else{var N=C(K),I=[];C(["Top","Right","Left","Bottom"]).each(function(T,S){I[T]=B(N.css("padding"+S))});R.containerOffset=N.offset();R.containerPosition=N.position();R.containerSize={height:(N.innerHeight()-I[3]),width:(N.innerWidth()-I[1])};var O=R.containerOffset,E=R.containerSize.height,M=R.containerSize.width,H=(C.ui.hasScroll(K,"left")?K.scrollWidth:M),Q=(C.ui.hasScroll(K)?K.scrollHeight:E);R.parentData={element:K,left:O.left,top:O.top,width:H,height:Q}}},resize:function(G,P){var S=C(this).data("resizable"),I=S.options,F=S.containerSize,O=S.containerOffset,M=S.size,N=S.position,Q=S._aspectRatio||G.shiftKey,E={top:0,left:0},H=S.containerElement;if(H[0]!=document&&(/static/).test(H.css("position"))){E=O}if(N.left<(S._helper?O.left:0)){S.size.width=S.size.width+(S._helper?(S.position.left-O.left):(S.position.left-E.left));if(Q){S.size.height=S.size.width/S.aspectRatio}S.position.left=I.helper?O.left:0}if(N.top<(S._helper?O.top:0)){S.size.height=S.size.height+(S._helper?(S.position.top-O.top):S.position.top);if(Q){S.size.width=S.size.height*S.aspectRatio}S.position.top=S._helper?O.top:0}S.offset.left=S.parentData.left+S.position.left;S.offset.top=S.parentData.top+S.position.top;var L=Math.abs((S._helper?S.offset.left-E.left:(S.offset.left-E.left))+S.sizeDiff.width),R=Math.abs((S._helper?S.offset.top-E.top:(S.offset.top-O.top))+S.sizeDiff.height);var K=S.containerElement.get(0)==S.element.parent().get(0),J=/relative|absolute/.test(S.containerElement.css("position"));if(K&&J){L-=S.parentData.left}if(L+S.size.width>=S.parentData.width){S.size.width=S.parentData.width-L;if(Q){S.size.height=S.size.width/S.aspectRatio}}if(R+S.size.height>=S.parentData.height){S.size.height=S.parentData.height-R;if(Q){S.size.width=S.size.height*S.aspectRatio}}},stop:function(F,M){var O=C(this).data("resizable"),G=O.options,K=O.position,L=O.containerOffset,E=O.containerPosition,H=O.containerElement;var I=C(O.helper),P=I.offset(),N=I.outerWidth()-O.sizeDiff.width,J=I.outerHeight()-O.sizeDiff.height;if(O._helper&&!G.animate&&(/relative/).test(H.css("position"))){C(this).css({left:P.left-E.left-L.left,width:N,height:J})}if(O._helper&&!G.animate&&(/static/).test(H.css("position"))){C(this).css({left:P.left-E.left-L.left,width:N,height:J})}}});C.ui.plugin.add("resizable","ghost",{start:function(G,H){var E=C(this).data("resizable"),I=E.options,F=E.size;E.ghost=E.originalElement.clone();E.ghost.css({opacity:0.25,display:"block",position:"relative",height:F.height,width:F.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof I.ghost=="string"?I.ghost:"");E.ghost.appendTo(E.helper)},resize:function(F,G){var E=C(this).data("resizable"),H=E.options;if(E.ghost){E.ghost.css({position:"relative",height:E.size.height,width:E.size.width})}},stop:function(F,G){var E=C(this).data("resizable"),H=E.options;if(E.ghost&&E.helper){E.helper.get(0).removeChild(E.ghost.get(0))}}});C.ui.plugin.add("resizable","grid",{resize:function(E,M){var O=C(this).data("resizable"),H=O.options,K=O.size,I=O.originalSize,J=O.originalPosition,N=O.axis,L=H._aspectRatio||E.shiftKey;H.grid=typeof H.grid=="number"?[H.grid,H.grid]:H.grid;var G=Math.round((K.width-I.width)/(H.grid[0]||1))*(H.grid[0]||1),F=Math.round((K.height-I.height)/(H.grid[1]||1))*(H.grid[1]||1);if(/^(se|s|e)$/.test(N)){O.size.width=I.width+G;O.size.height=I.height+F}else{if(/^(ne)$/.test(N)){O.size.width=I.width+G;O.size.height=I.height+F;O.position.top=J.top-F}else{if(/^(sw)$/.test(N)){O.size.width=I.width+G;O.size.height=I.height+F;O.position.left=J.left-G}else{O.size.width=I.width+G;O.size.height=I.height+F;O.position.top=J.top-F;O.position.left=J.left-G}}}}});var B=function(E){return parseInt(E,10)||0};var A=function(E){return !isNaN(parseInt(E,10))}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.selectable.js' */
/*
 * jQuery UI Selectable 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(A,B){A.widget("ui.selectable",A.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var C=this;this.element.addClass("ui-selectable");this.dragged=false;var D;this.refresh=function(){D=A(C.options.filter,C.element[0]);D.addClass("ui-selectee");D.each(function(){var E=A(this);var F=E.offset();A.data(this,"selectable-item",{element:this,$element:E,left:F.left,top:F.top,right:F.left+E.outerWidth(),bottom:F.top+E.outerHeight(),startselected:false,selected:E.hasClass("ui-selected"),selecting:E.hasClass("ui-selecting"),unselecting:E.hasClass("ui-unselecting")})})};this.refresh();this.selectees=D.addClass("ui-selectee");this._mouseInit();this.helper=A("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(E){var C=this;this.opos=[E.pageX,E.pageY];if(this.options.disabled){return }var D=this.options;this.selectees=A(D.filter,this.element[0]);this._trigger("start",E);A(D.appendTo).append(this.helper);this.helper.css({left:E.clientX,top:E.clientY,width:0,height:0});if(D.autoRefresh){this.refresh()}this.selectees.filter(".ui-selected").each(function(){var F=A.data(this,"selectable-item");F.startselected=true;if(!E.metaKey&&!E.ctrlKey){F.$element.removeClass("ui-selected");F.selected=false;F.$element.addClass("ui-unselecting");F.unselecting=true;C._trigger("unselecting",E,{unselecting:F.element})}});A(E.target).parents().andSelf().each(function(){var G=A.data(this,"selectable-item");if(G){var F=(!E.metaKey&&!E.ctrlKey)||!G.$element.hasClass("ui-selected");G.$element.removeClass(F?"ui-unselecting":"ui-selected").addClass(F?"ui-selecting":"ui-unselecting");G.unselecting=!F;G.selecting=F;G.selected=F;if(F){C._trigger("selecting",E,{selecting:G.element})}else{C._trigger("unselecting",E,{unselecting:G.element})}return false}})},_mouseDrag:function(J){var D=this;this.dragged=true;if(this.options.disabled){return }var F=this.options;var E=this.opos[0],I=this.opos[1],C=J.pageX,H=J.pageY;if(E>C){var G=C;C=E;E=G}if(I>H){var G=H;H=I;I=G}this.helper.css({left:E,top:I,width:C-E,height:H-I});this.selectees.each(function(){var K=A.data(this,"selectable-item");if(!K||K.element==D.element[0]){return }var L=false;if(F.tolerance=="touch"){L=(!(K.left>C||K.right<E||K.top>H||K.bottom<I))}else{if(F.tolerance=="fit"){L=(K.left>E&&K.right<C&&K.top>I&&K.bottom<H)}}if(L){if(K.selected){K.$element.removeClass("ui-selected");K.selected=false}if(K.unselecting){K.$element.removeClass("ui-unselecting");K.unselecting=false}if(!K.selecting){K.$element.addClass("ui-selecting");K.selecting=true;D._trigger("selecting",J,{selecting:K.element})}}else{if(K.selecting){if((J.metaKey||J.ctrlKey)&&K.startselected){K.$element.removeClass("ui-selecting");K.selecting=false;K.$element.addClass("ui-selected");K.selected=true}else{K.$element.removeClass("ui-selecting");K.selecting=false;if(K.startselected){K.$element.addClass("ui-unselecting");K.unselecting=true}D._trigger("unselecting",J,{unselecting:K.element})}}if(K.selected){if(!J.metaKey&&!J.ctrlKey&&!K.startselected){K.$element.removeClass("ui-selected");K.selected=false;K.$element.addClass("ui-unselecting");K.unselecting=true;D._trigger("unselecting",J,{unselecting:K.element})}}}});return false},_mouseStop:function(E){var C=this;this.dragged=false;var D=this.options;A(".ui-unselecting",this.element[0]).each(function(){var F=A.data(this,"selectable-item");F.$element.removeClass("ui-unselecting");F.unselecting=false;F.startselected=false;C._trigger("unselected",E,{unselected:F.element})});A(".ui-selecting",this.element[0]).each(function(){var F=A.data(this,"selectable-item");F.$element.removeClass("ui-selecting").addClass("ui-selected");F.selecting=false;F.selected=true;F.startselected=true;C._trigger("selected",E,{selected:F.element})});this._trigger("stop",E);this.helper.remove();return false}});A.extend(A.ui.selectable,{version:"1.8.24"})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.accordion.js' */
/*
 * jQuery UI Accordion 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(A,B){A.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var C=this,D=C.options;C.running=0;C.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");C.headers=C.element.find(D.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){if(D.disabled){return }A(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){if(D.disabled){return }A(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){if(D.disabled){return }A(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){if(D.disabled){return }A(this).removeClass("ui-state-focus")});C.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");if(D.navigation){var E=C.element.find("a").filter(D.navigationFilter).eq(0);if(E.length){var F=E.closest(".ui-accordion-header");if(F.length){C.active=F}else{C.active=E.closest(".ui-accordion-content").prev()}}}C.active=C._findActive(C.active||D.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");C.active.next().addClass("ui-accordion-content-active");C._createIcons();C.resize();C.element.attr("role","tablist");C.headers.attr("role","tab").bind("keydown.accordion",function(G){return C._keydown(G)}).next().attr("role","tabpanel");C.headers.not(C.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();if(!C.active.length){C.headers.eq(0).attr("tabIndex",0)}else{C.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0})}if(!A.browser.safari){C.headers.find("a").attr("tabIndex",-1)}if(D.event){C.headers.bind(D.event.split(" ").join(".accordion ")+".accordion",function(G){C._clickHandler.call(C,G,this);G.preventDefault()})}},_createIcons:function(){var C=this.options;if(C.icons){A("<span></span>").addClass("ui-icon "+C.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(C.icons.header).toggleClass(C.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var C=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var D=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(C.autoHeight||C.fillHeight){D.css("height","")}return A.Widget.prototype.destroy.call(this)},_setOption:function(C,D){A.Widget.prototype._setOption.apply(this,arguments);if(C=="active"){this.activate(D)}if(C=="icons"){this._destroyIcons();if(D){this._createIcons()}}if(C=="disabled"){this.headers.add(this.headers.next())[D?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")}},_keydown:function(F){if(this.options.disabled||F.altKey||F.ctrlKey){return }var G=A.ui.keyCode,E=this.headers.length,C=this.headers.index(F.target),D=false;switch(F.keyCode){case G.RIGHT:case G.DOWN:D=this.headers[(C+1)%E];break;case G.LEFT:case G.UP:D=this.headers[(C-1+E)%E];break;case G.SPACE:case G.ENTER:this._clickHandler({target:F.target},F.target);F.preventDefault()}if(D){A(F.target).attr("tabIndex",-1);A(D).attr("tabIndex",0);D.focus();return false}return true},resize:function(){var C=this.options,E;if(C.fillSpace){if(A.browser.msie){var D=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}E=this.element.parent().height();if(A.browser.msie){this.element.parent().css("overflow",D)}this.headers.each(function(){E-=A(this).outerHeight(true)});this.headers.next().each(function(){A(this).height(Math.max(0,E-A(this).innerHeight()+A(this).height()))}).css("overflow","auto")}else{if(C.autoHeight){E=0;this.headers.next().each(function(){E=Math.max(E,A(this).height("").height())}).height(E)}}return this},activate:function(C){this.options.active=C;var D=this._findActive(C)[0];this._clickHandler({target:D},D);return this},_findActive:function(C){return C?typeof C==="number"?this.headers.filter(":eq("+C+")"):this.headers.not(this.headers.not(C)):C===false?A([]):this.headers.filter(":eq(0)")},_clickHandler:function(C,G){var L=this.options;if(L.disabled){return }if(!C.target){if(!L.collapsible){return }this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(L.icons.headerSelected).addClass(L.icons.header);this.active.next().addClass("ui-accordion-content-active");var I=this.active.next(),F={options:L,newHeader:A([]),oldHeader:L.active,newContent:A([]),oldContent:I},D=(this.active=A([]));this._toggle(D,I,F);return }var H=A(C.currentTarget||G),J=H[0]===this.active[0];L.active=L.collapsible&&J?false:this.headers.index(H);if(this.running||(!L.collapsible&&J)){return }var E=this.active,D=H.next(),I=this.active.next(),F={options:L,newHeader:J&&L.collapsible?A([]):H,oldHeader:this.active,newContent:J&&L.collapsible?A([]):D,oldContent:I},K=this.headers.index(this.active[0])>this.headers.index(H[0]);this.active=J?A([]):H;this._toggle(D,I,F,J,K);E.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(L.icons.headerSelected).addClass(L.icons.header);if(!J){H.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(L.icons.header).addClass(L.icons.headerSelected);H.next().addClass("ui-accordion-content-active")}return },_toggle:function(C,I,G,J,K){var M=this,N=M.options;M.toShow=C;M.toHide=I;M.data=G;var D=function(){if(!M){return }return M._completed.apply(M,arguments)};M._trigger("changestart",null,M.data);M.running=I.size()===0?C.size():I.size();if(N.animated){var F={};if(N.collapsible&&J){F={toShow:A([]),toHide:I,complete:D,down:K,autoHeight:N.autoHeight||N.fillSpace}}else{F={toShow:C,toHide:I,complete:D,down:K,autoHeight:N.autoHeight||N.fillSpace}}if(!N.proxied){N.proxied=N.animated}if(!N.proxiedDuration){N.proxiedDuration=N.duration}N.animated=A.isFunction(N.proxied)?N.proxied(F):N.proxied;N.duration=A.isFunction(N.proxiedDuration)?N.proxiedDuration(F):N.proxiedDuration;var L=A.ui.accordion.animations,E=N.duration,H=N.animated;if(H&&!L[H]&&!A.easing[H]){H="slide"}if(!L[H]){L[H]=function(O){this.slide(O,{easing:H,duration:E||700})}}L[H](F)}else{if(N.collapsible&&J){C.toggle()}else{I.hide();C.show()}D(true)}I.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).blur();C.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(C){this.running=C?0:--this.running;if(this.running){return }if(this.options.clearStyle){this.toShow.add(this.toHide).css({height:"",overflow:""})}this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length){this.toHide.parent()[0].className=this.toHide.parent()[0].className}this._trigger("change",null,this.data)}});A.extend(A.ui.accordion,{version:"1.8.24",animations:{slide:function(K,I){K=A.extend({easing:"swing",duration:300},K,I);if(!K.toHide.size()){K.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},K);return }if(!K.toShow.size()){K.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},K);return }var D=K.toShow.css("overflow"),H=0,E={},G={},F=["height","paddingTop","paddingBottom"],C;var J=K.toShow;C=J[0].style.width;J.width(J.parent().width()-parseFloat(J.css("paddingLeft"))-parseFloat(J.css("paddingRight"))-(parseFloat(J.css("borderLeftWidth"))||0)-(parseFloat(J.css("borderRightWidth"))||0));A.each(F,function(L,N){G[N]="hide";var M=(""+A.css(K.toShow[0],N)).match(/^([\d+-.]+)(.*)$/);E[N]={value:M[1],unit:M[2]||"px"}});K.toShow.css({height:0,overflow:"hidden"}).show();K.toHide.filter(":hidden").each(K.complete).end().filter(":visible").animate(G,{step:function(L,M){if(M.prop=="height"){H=(M.end-M.start===0)?0:(M.now-M.start)/(M.end-M.start)}K.toShow[0].style[M.prop]=(H*E[M.prop].value)+E[M.prop].unit},duration:K.duration,easing:K.easing,complete:function(){if(!K.autoHeight){K.toShow.css("height","")}K.toShow.css({width:C,overflow:D});K.complete()}})},bounceslide:function(C){this.slide(C,{easing:C.down?"easeOutBounce":"swing",duration:C.down?1000:200})}}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.autocomplete.js' */
/*
 * jQuery UI Autocomplete 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function(A,B){var C=0;A.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var D=this,F=this.element[0].ownerDocument,E;this.isMultiLine=this.element.is("textarea");this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(G){if(D.options.disabled||D.element.propAttr("readOnly")){return }E=false;var H=A.ui.keyCode;switch(G.keyCode){case H.PAGE_UP:D._move("previousPage",G);break;case H.PAGE_DOWN:D._move("nextPage",G);break;case H.UP:D._keyEvent("previous",G);break;case H.DOWN:D._keyEvent("next",G);break;case H.ENTER:case H.NUMPAD_ENTER:if(D.menu.active){E=true;G.preventDefault()}case H.TAB:if(!D.menu.active){return }D.menu.select(G);break;case H.ESCAPE:D.element.val(D.term);D.close(G);break;default:clearTimeout(D.searching);D.searching=setTimeout(function(){if(D.term!=D.element.val()){D.selectedItem=null;D.search(null,G)}},D.options.delay);break}}).bind("keypress.autocomplete",function(G){if(E){E=false;G.preventDefault()}}).bind("focus.autocomplete",function(){if(D.options.disabled){return }D.selectedItem=null;D.previous=D.element.val()}).bind("blur.autocomplete",function(G){if(D.options.disabled){return }clearTimeout(D.searching);D.closing=setTimeout(function(){D.close(G);D._change(G)},150)});this._initSource();this.menu=A("<ul></ul>").addClass("ui-autocomplete").appendTo(A(this.options.appendTo||"body",F)[0]).mousedown(function(G){var H=D.menu.element[0];if(!A(G.target).closest(".ui-menu-item").length){setTimeout(function(){A(document).one("mousedown",function(I){if(I.target!==D.element[0]&&I.target!==H&&!A.ui.contains(H,I.target)){D.close()}})},1)}setTimeout(function(){clearTimeout(D.closing)},13)}).menu({focus:function(H,I){var G=I.item.data("item.autocomplete");if(false!==D._trigger("focus",H,{item:G})){if(/^key/.test(H.originalEvent.type)){D.element.val(G.value)}}},selected:function(I,J){var H=J.item.data("item.autocomplete"),G=D.previous;if(D.element[0]!==F.activeElement){D.element.focus();D.previous=G;setTimeout(function(){D.previous=G;D.selectedItem=H},1)}if(false!==D._trigger("select",I,{item:H})){D.element.val(H.value)}D.term=D.element.val();D.close(I);D.selectedItem=H},blur:function(G,H){if(D.menu.element.is(":visible")&&(D.element.val()!==D.term)){D.element.val(D.term)}}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");if(A.fn.bgiframe){this.menu.element.bgiframe()}D.beforeunloadHandler=function(){D.element.removeAttr("autocomplete")};A(window).bind("beforeunload",D.beforeunloadHandler)},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();A(window).unbind("beforeunload",this.beforeunloadHandler);A.Widget.prototype.destroy.call(this)},_setOption:function(D,E){A.Widget.prototype._setOption.apply(this,arguments);if(D==="source"){this._initSource()}if(D==="appendTo"){this.menu.element.appendTo(A(E||"body",this.element[0].ownerDocument)[0])}if(D==="disabled"&&E&&this.xhr){this.xhr.abort()}},_initSource:function(){var D=this,F,E;if(A.isArray(this.options.source)){F=this.options.source;this.source=function(H,G){G(A.ui.autocomplete.filter(F,H.term))}}else{if(typeof this.options.source==="string"){E=this.options.source;this.source=function(H,G){if(D.xhr){D.xhr.abort()}D.xhr=A.ajax({url:E,data:H,dataType:"json",success:function(J,I){G(J)},error:function(){G([])}})}}else{this.source=this.options.source}}},search:function(E,D){E=E!=null?E:this.element.val();this.term=this.element.val();if(E.length<this.options.minLength){return this.close(D)}clearTimeout(this.closing);if(this._trigger("search",D)===false){return }return this._search(E)},_search:function(D){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:D},this._response())},_response:function(){var E=this,D=++C;return function(F){if(D===C){E.__response(F)}E.pending--;if(!E.pending){E.element.removeClass("ui-autocomplete-loading")}}},__response:function(D){if(!this.options.disabled&&D&&D.length){D=this._normalize(D);this._suggest(D);this._trigger("open")}else{this.close()}},close:function(D){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",D)}},_change:function(D){if(this.previous!==this.element.val()){this._trigger("change",D,{item:this.selectedItem})}},_normalize:function(D){if(D.length&&D[0].label&&D[0].value){return D}return A.map(D,function(E){if(typeof E==="string"){return{label:E,value:E}}return A.extend({label:E.label||E.value,value:E.value||E.label},E)})},_suggest:function(D){var E=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(E,D);this.menu.deactivate();this.menu.refresh();E.show();this._resizeMenu();E.position(A.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next(new A.Event("mouseover"))}},_resizeMenu:function(){var D=this.menu.element;D.outerWidth(Math.max(D.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(F,E){var D=this;A.each(E,function(G,H){D._renderItem(F,H)})},_renderItem:function(D,E){return A("<li></li>").data("item.autocomplete",E).append(A("<a></a>").text(E.label)).appendTo(D)},_move:function(E,D){if(!this.menu.element.is(":visible")){this.search(null,D);return }if(this.menu.first()&&/^previous/.test(E)||this.menu.last()&&/^next/.test(E)){this.element.val(this.term);this.menu.deactivate();return }this.menu[E](D)},widget:function(){return this.menu.element},_keyEvent:function(E,D){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(E,D);D.preventDefault()}}});A.extend(A.ui.autocomplete,{escapeRegex:function(D){return D.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(F,D){var E=new RegExp(A.ui.autocomplete.escapeRegex(D),"i");return A.grep(F,function(G){return E.test(G.label||G.value||G)})}})}(jQuery));(function(A){A.widget("ui.menu",{_create:function(){var B=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(C){if(!A(C.target).closest(".ui-menu-item a").length){return }C.preventDefault();B.select(C)});this.refresh()},refresh:function(){var C=this;var B=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");B.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(D){C.activate(D,A(this).parent())}).mouseleave(function(){C.deactivate()})},activate:function(E,D){this.deactivate();if(this.hasScroll()){var F=D.offset().top-this.element.offset().top,B=this.element.scrollTop(),C=this.element.height();if(F<0){this.element.scrollTop(B+F)}else{if(F>=C){this.element.scrollTop(B+F-C+D.height())}}}this.active=D.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",E,{item:D})},deactivate:function(){if(!this.active){return }this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null},next:function(B){this.move("next",".ui-menu-item:first",B)},previous:function(B){this.move("prev",".ui-menu-item:last",B)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(E,D,C){if(!this.active){this.activate(C,this.element.children(D));return }var B=this.active[E+"All"](".ui-menu-item").eq(0);if(B.length){this.activate(C,B)}else{this.activate(C,this.element.children(D))}},nextPage:function(D){if(this.hasScroll()){if(!this.active||this.last()){this.activate(D,this.element.children(".ui-menu-item:first"));return }var E=this.active.offset().top,C=this.element.height(),B=this.element.children(".ui-menu-item").filter(function(){var F=A(this).offset().top-E-C+A(this).height();return F<10&&F>-10});if(!B.length){B=this.element.children(".ui-menu-item:last")}this.activate(D,B)}else{this.activate(D,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))}},previousPage:function(D){if(this.hasScroll()){if(!this.active||this.first()){this.activate(D,this.element.children(".ui-menu-item:last"));return }var E=this.active.offset().top,C=this.element.height(),B=this.element.children(".ui-menu-item").filter(function(){var F=A(this).offset().top-E+C-A(this).height();return F<10&&F>-10});if(!B.length){B=this.element.children(".ui-menu-item:first")}this.activate(D,B)}else{this.activate(D,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))}},hasScroll:function(){return this.element.height()<this.element[A.fn.prop?"prop":"attr"]("scrollHeight")},select:function(B){this._trigger("selected",B,{item:this.active})}})}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.button.js' */
/*
 * jQuery UI Button 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(F,B){var K,E,A,H,I="ui-button ui-widget ui-state-default ui-corner-all",C="ui-state-hover ui-state-active ",G="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",J=function(){var L=F(this).find(":ui-button");setTimeout(function(){L.button("refresh")},1)},D=function(M){var L=M.name,N=M.form,O=F([]);if(L){if(N){O=F(N).find("[name='"+L+"']")}else{O=F("[name='"+L+"']",M.ownerDocument).filter(function(){return !this.form})}}return O};F.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",J);if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.propAttr("disabled")}else{this.element.propAttr("disabled",this.options.disabled)}this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var L=this,N=this.options,O=this.type==="checkbox"||this.type==="radio",P="ui-state-hover"+(!O?" ui-state-active":""),M="ui-state-focus";if(N.label===null){N.label=this.buttonElement.html()}this.buttonElement.addClass(I).attr("role","button").bind("mouseenter.button",function(){if(N.disabled){return }F(this).addClass("ui-state-hover");if(this===K){F(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){if(N.disabled){return }F(this).removeClass(P)}).bind("click.button",function(Q){if(N.disabled){Q.preventDefault();Q.stopImmediatePropagation()}});this.element.bind("focus.button",function(){L.buttonElement.addClass(M)}).bind("blur.button",function(){L.buttonElement.removeClass(M)});if(O){this.element.bind("change.button",function(){if(H){return }L.refresh()});this.buttonElement.bind("mousedown.button",function(Q){if(N.disabled){return }H=false;E=Q.pageX;A=Q.pageY}).bind("mouseup.button",function(Q){if(N.disabled){return }if(E!==Q.pageX||A!==Q.pageY){H=true}})}if(this.type==="checkbox"){this.buttonElement.bind("click.button",function(){if(N.disabled||H){return false}F(this).toggleClass("ui-state-active");L.buttonElement.attr("aria-pressed",L.element[0].checked)})}else{if(this.type==="radio"){this.buttonElement.bind("click.button",function(){if(N.disabled||H){return false}F(this).addClass("ui-state-active");L.buttonElement.attr("aria-pressed","true");var Q=L.element[0];D(Q).not(Q).map(function(){return F(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")})}else{this.buttonElement.bind("mousedown.button",function(){if(N.disabled){return false}F(this).addClass("ui-state-active");K=this;F(document).one("mouseup",function(){K=null})}).bind("mouseup.button",function(){if(N.disabled){return false}F(this).removeClass("ui-state-active")}).bind("keydown.button",function(Q){if(N.disabled){return false}if(Q.keyCode==F.ui.keyCode.SPACE||Q.keyCode==F.ui.keyCode.ENTER){F(this).addClass("ui-state-active")}}).bind("keyup.button",function(){F(this).removeClass("ui-state-active")});if(this.buttonElement.is("a")){this.buttonElement.keyup(function(Q){if(Q.keyCode===F.ui.keyCode.SPACE){F(this).click()}})}}}this._setOption("disabled",N.disabled);this._resetButton()},_determineButtonType:function(){if(this.element.is(":checkbox")){this.type="checkbox"}else{if(this.element.is(":radio")){this.type="radio"}else{if(this.element.is("input")){this.type="input"}else{this.type="button"}}}if(this.type==="checkbox"||this.type==="radio"){var L=this.element.parents().filter(":last"),N="label[for='"+this.element.attr("id")+"']";this.buttonElement=L.find(N);if(!this.buttonElement.length){L=L.length?L.siblings():this.element.siblings();this.buttonElement=L.filter(N);if(!this.buttonElement.length){this.buttonElement=L.find(N)}}this.element.addClass("ui-helper-hidden-accessible");var M=this.element.is(":checked");if(M){this.buttonElement.addClass("ui-state-active")}this.buttonElement.attr("aria-pressed",M)}else{this.buttonElement=this.element}},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass(I+" "+C+" "+G).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());if(!this.hasTitle){this.buttonElement.removeAttr("title")}F.Widget.prototype.destroy.call(this)},_setOption:function(L,M){F.Widget.prototype._setOption.apply(this,arguments);if(L==="disabled"){if(M){this.element.propAttr("disabled",true)}else{this.element.propAttr("disabled",false)}return }this._resetButton()},refresh:function(){var L=this.element.is(":disabled");if(L!==this.options.disabled){this._setOption("disabled",L)}if(this.type==="radio"){D(this.element[0]).each(function(){if(F(this).is(":checked")){F(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")}else{F(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}})}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)}return }var P=this.buttonElement.removeClass(G),N=F("<span></span>",this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(P.empty()).text(),M=this.options.icons,L=M.primary&&M.secondary,O=[];if(M.primary||M.secondary){if(this.options.text){O.push("ui-button-text-icon"+(L?"s":(M.primary?"-primary":"-secondary")))}if(M.primary){P.prepend("<span class='ui-button-icon-primary ui-icon "+M.primary+"'></span>")}if(M.secondary){P.append("<span class='ui-button-icon-secondary ui-icon "+M.secondary+"'></span>")}if(!this.options.text){O.push(L?"ui-button-icons-only":"ui-button-icon-only");if(!this.hasTitle){P.attr("title",N)}}}else{O.push("ui-button-text-only")}P.addClass(O.join(" "))}});F.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(L,M){if(L==="disabled"){this.buttons.button("option",L,M)}F.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var L=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return F(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(L?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(L?"ui-corner-left":"ui-corner-right").end().end()},destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return F(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");F.Widget.prototype.destroy.call(this)}})}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.dialog.js' */
/*
 * jQuery UI Dialog 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */
(function(D,E){var B="ui-dialog ui-widget ui-widget-content ui-corner-all ",A={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},C={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};D.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",collision:"fit",using:function(G){var F=D(this).css(G).offset().top;if(F<0){D(this).css("top",G.top-F)}}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string"){this.originalTitle=""}this.options.title=this.options.title||this.originalTitle;var N=this,O=N.options,L=O.title||"&#160;",G=D.ui.dialog.getTitleId(N.element),M=(N.uiDialog=D("<div></div>")).appendTo(document.body).hide().addClass(B+O.dialogClass).css({zIndex:O.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(P){if(O.closeOnEscape&&!P.isDefaultPrevented()&&P.keyCode&&P.keyCode===D.ui.keyCode.ESCAPE){N.close(P);P.preventDefault()}}).attr({role:"dialog","aria-labelledby":G}).mousedown(function(P){N.moveToTop(false,P)}),I=N.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(M),H=(N.uiDialogTitlebar=D("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(M),K=D('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){K.addClass("ui-state-hover")},function(){K.removeClass("ui-state-hover")}).focus(function(){K.addClass("ui-state-focus")}).blur(function(){K.removeClass("ui-state-focus")}).click(function(P){N.close(P);return false}).appendTo(H),J=(N.uiDialogTitlebarCloseText=D("<span></span>")).addClass("ui-icon ui-icon-closethick").text(O.closeText).appendTo(K),F=D("<span></span>").addClass("ui-dialog-title").attr("id",G).html(L).prependTo(H);if(D.isFunction(O.beforeclose)&&!D.isFunction(O.beforeClose)){O.beforeClose=O.beforeclose}H.find("*").add(H).disableSelection();if(O.draggable&&D.fn.draggable){N._makeDraggable()}if(O.resizable&&D.fn.resizable){N._makeResizable()}N._createButtons(O.buttons);N._isOpen=false;if(D.fn.bgiframe){M.bgiframe()}},_init:function(){if(this.options.autoOpen){this.open()}},destroy:function(){var F=this;if(F.overlay){F.overlay.destroy()}F.uiDialog.hide();F.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");F.uiDialog.remove();if(F.originalTitle){F.element.attr("title",F.originalTitle)}return F},widget:function(){return this.uiDialog},close:function(I){var F=this,H,G;if(false===F._trigger("beforeClose",I)){return }if(F.overlay){F.overlay.destroy()}F.uiDialog.unbind("keypress.ui-dialog");F._isOpen=false;if(F.options.hide){F.uiDialog.hide(F.options.hide,function(){F._trigger("close",I)})}else{F.uiDialog.hide();F._trigger("close",I)}D.ui.dialog.overlay.resize();if(F.options.modal){H=0;D(".ui-dialog").each(function(){if(this!==F.uiDialog[0]){G=D(this).css("z-index");if(!isNaN(G)){H=Math.max(H,G)}}});D.ui.dialog.maxZ=H}return F},isOpen:function(){return this._isOpen},moveToTop:function(J,I){var F=this,H=F.options,G;if((H.modal&&!J)||(!H.stack&&!H.modal)){return F._trigger("focus",I)}if(H.zIndex>D.ui.dialog.maxZ){D.ui.dialog.maxZ=H.zIndex}if(F.overlay){D.ui.dialog.maxZ+=1;F.overlay.$el.css("z-index",D.ui.dialog.overlay.maxZ=D.ui.dialog.maxZ)}G={scrollTop:F.element.scrollTop(),scrollLeft:F.element.scrollLeft()};D.ui.dialog.maxZ+=1;F.uiDialog.css("z-index",D.ui.dialog.maxZ);F.element.attr(G);F._trigger("focus",I);return F},open:function(){if(this._isOpen){return }var G=this,H=G.options,F=G.uiDialog;G.overlay=H.modal?new D.ui.dialog.overlay(G):null;G._size();G._position(H.position);F.show(H.show);G.moveToTop(true);if(H.modal){F.bind("keydown.ui-dialog",function(K){if(K.keyCode!==D.ui.keyCode.TAB){return }var J=D(":tabbable",this),L=J.filter(":first"),I=J.filter(":last");if(K.target===I[0]&&!K.shiftKey){L.focus(1);return false}else{if(K.target===L[0]&&K.shiftKey){I.focus(1);return false}}})}D(G.element.find(":tabbable").get().concat(F.find(".ui-dialog-buttonpane :tabbable").get().concat(F.get()))).eq(0).focus();G._isOpen=true;G._trigger("open");return G},_createButtons:function(I){var H=this,F=false,G=D("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),J=D("<div></div>").addClass("ui-dialog-buttonset").appendTo(G);H.uiDialog.find(".ui-dialog-buttonpane").remove();if(typeof I==="object"&&I!==null){D.each(I,function(){return !(F=true)})}if(F){D.each(I,function(K,M){M=D.isFunction(M)?{click:M,text:K}:M;var L=D('<button type="button"></button>').click(function(){M.click.apply(H.element[0],arguments)}).appendTo(J);D.each(M,function(N,O){if(N==="click"){return }if(N in L){L[N](O)}else{L.attr(N,O)}});if(D.fn.button){L.button()}});G.appendTo(H.uiDialog)}},_makeDraggable:function(){var F=this,I=F.options,J=D(document),H;function G(K){return{position:K.position,offset:K.offset}}F.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(K,L){H=I.height==="auto"?"auto":D(this).height();D(this).height(D(this).height()).addClass("ui-dialog-dragging");F._trigger("dragStart",K,G(L))},drag:function(K,L){F._trigger("drag",K,G(L))},stop:function(K,L){I.position=[L.position.left-J.scrollLeft(),L.position.top-J.scrollTop()];D(this).removeClass("ui-dialog-dragging").height(H);F._trigger("dragStop",K,G(L));D.ui.dialog.overlay.resize()}})},_makeResizable:function(K){K=(K===E?this.options.resizable:K);var G=this,J=G.options,F=G.uiDialog.css("position"),I=(typeof K==="string"?K:"n,e,s,w,se,sw,ne,nw");function H(L){return{originalPosition:L.originalPosition,originalSize:L.originalSize,position:L.position,size:L.size}}G.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:G.element,maxWidth:J.maxWidth,maxHeight:J.maxHeight,minWidth:J.minWidth,minHeight:G._minHeight(),handles:I,start:function(L,M){D(this).addClass("ui-dialog-resizing");G._trigger("resizeStart",L,H(M))},resize:function(L,M){G._trigger("resize",L,H(M))},stop:function(L,M){D(this).removeClass("ui-dialog-resizing");J.height=D(this).height();J.width=D(this).width();G._trigger("resizeStop",L,H(M));D.ui.dialog.overlay.resize()}}).css("position",F).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var F=this.options;if(F.height==="auto"){return F.minHeight}else{return Math.min(F.minHeight,F.height)}},_position:function(G){var H=[],I=[0,0],F;if(G){if(typeof G==="string"||(typeof G==="object"&&"0" in G)){H=G.split?G.split(" "):[G[0],G[1]];if(H.length===1){H[1]=H[0]}D.each(["left","top"],function(K,J){if(+H[K]===H[K]){I[K]=H[K];H[K]=J}});G={my:H.join(" "),at:H.join(" "),offset:I.join(" ")}}G=D.extend({},D.ui.dialog.prototype.options.position,G)}else{G=D.ui.dialog.prototype.options.position}F=this.uiDialog.is(":visible");if(!F){this.uiDialog.show()}this.uiDialog.css({top:0,left:0}).position(D.extend({of:window},G));if(!F){this.uiDialog.hide()}},_setOptions:function(I){var G=this,F={},H=false;D.each(I,function(J,K){G._setOption(J,K);if(J in A){H=true}if(J in C){F[J]=K}});if(H){this._size()}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option",F)}},_setOption:function(I,J){var G=this,F=G.uiDialog;switch(I){case"beforeclose":I="beforeClose";break;case"buttons":G._createButtons(J);break;case"closeText":G.uiDialogTitlebarCloseText.text(""+J);break;case"dialogClass":F.removeClass(G.options.dialogClass).addClass(B+J);break;case"disabled":if(J){F.addClass("ui-dialog-disabled")}else{F.removeClass("ui-dialog-disabled")}break;case"draggable":var H=F.is(":data(draggable)");if(H&&!J){F.draggable("destroy")}if(!H&&J){G._makeDraggable()}break;case"position":G._position(J);break;case"resizable":var K=F.is(":data(resizable)");if(K&&!J){F.resizable("destroy")}if(K&&typeof J==="string"){F.resizable("option","handles",J)}if(!K&&J!==false){G._makeResizable(J)}break;case"title":D(".ui-dialog-title",G.uiDialogTitlebar).html(""+(J||"&#160;"));break}D.Widget.prototype._setOption.apply(G,arguments)},_size:function(){var J=this.options,G,I,F=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(J.minWidth>J.width){J.width=J.minWidth}G=this.uiDialog.css({height:"auto",width:J.width}).height();I=Math.max(0,J.minHeight-G);if(J.height==="auto"){if(D.support.minHeight){this.element.css({minHeight:I,height:"auto"})}else{this.uiDialog.show();var H=this.element.css("height","auto").height();if(!F){this.uiDialog.hide()}this.element.height(Math.max(H,I))}}else{this.element.height(Math.max(J.height-G,0))}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())}}});D.extend(D.ui.dialog,{version:"1.8.24",uuid:0,maxZ:0,getTitleId:function(F){var G=F.attr("id");if(!G){this.uuid+=1;G=this.uuid}return"ui-dialog-title-"+G},overlay:function(F){this.$el=D.ui.dialog.overlay.create(F)}});D.extend(D.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:D.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(F){return F+".dialog-overlay"}).join(" "),create:function(G){if(this.instances.length===0){setTimeout(function(){if(D.ui.dialog.overlay.instances.length){D(document).bind(D.ui.dialog.overlay.events,function(H){if(D(H.target).zIndex()<D.ui.dialog.overlay.maxZ){return false}})}},1);D(document).bind("keydown.dialog-overlay",function(H){if(G.options.closeOnEscape&&!H.isDefaultPrevented()&&H.keyCode&&H.keyCode===D.ui.keyCode.ESCAPE){G.close(H);H.preventDefault()}});D(window).bind("resize.dialog-overlay",D.ui.dialog.overlay.resize)}var F=(this.oldInstances.pop()||D("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});if(D.fn.bgiframe){F.bgiframe()}this.instances.push(F);return F},destroy:function(F){var G=D.inArray(F,this.instances);if(G!=-1){this.oldInstances.push(this.instances.splice(G,1)[0])}if(this.instances.length===0){D([document,window]).unbind(".dialog-overlay")}F.remove();var H=0;D.each(this.instances,function(){H=Math.max(H,this.css("z-index"))});this.maxZ=H},height:function(){var G,F;if(D.browser.msie&&D.browser.version<7){G=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);F=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);if(G<F){return D(window).height()+"px"}else{return G+"px"}}else{return D(document).height()+"px"}},width:function(){var F,G;if(D.browser.msie){F=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);G=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(F<G){return D(window).width()+"px"}else{return F+"px"}}else{return D(document).width()+"px"}},resize:function(){var F=D([]);D.each(D.ui.dialog.overlay.instances,function(){F=F.add(this)});F.css({width:0,height:0}).css({width:D.ui.dialog.overlay.width(),height:D.ui.dialog.overlay.height()})}});D.extend(D.ui.dialog.overlay.prototype,{destroy:function(){D.ui.dialog.overlay.destroy(this.$el)}})}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.progressbar.js' */
/*
 * jQuery UI Progressbar 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function(A,B){A.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=A("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove();A.Widget.prototype.destroy.apply(this,arguments)},value:function(C){if(C===B){return this._value()}this._setOption("value",C);return this},_setOption:function(C,D){if(C==="value"){this.options.value=D;this._refreshValue();if(this._value()===this.options.max){this._trigger("complete")}}A.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var C=this.options.value;if(typeof C!=="number"){C=0}return Math.min(this.options.max,Math.max(this.min,C))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var D=this.value();var C=this._percentage();if(this.oldValue!==D){this.oldValue=D;this._trigger("change")}this.valueDiv.toggle(D>this.min).toggleClass("ui-corner-right",D===this.options.max).width(C.toFixed(0)+"%");this.element.attr("aria-valuenow",D)}});A.extend(A.ui.progressbar,{version:"1.8.24"})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.slider.js' */
/*
 * jQuery UI Slider 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(B,C){var A=5;B.widget("ui.slider",B.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var E=this,J=this.options,I=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),H="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",D=(J.values&&J.values.length)||1,G=[];this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"+(J.disabled?" ui-slider-disabled ui-disabled":""));this.range=B([]);if(J.range){if(J.range===true){if(!J.values){J.values=[this._valueMin(),this._valueMin()]}if(J.values.length&&J.values.length!==2){J.values=[J.values[0],J.values[0]]}}this.range=B("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+((J.range==="min"||J.range==="max")?" ui-slider-range-"+J.range:""))}for(var F=I.length;F<D;F+=1){G.push(H)}this.handles=I.add(B(G.join("")).appendTo(E.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(K){K.preventDefault()}).hover(function(){if(!J.disabled){B(this).addClass("ui-state-hover")}},function(){B(this).removeClass("ui-state-hover")}).focus(function(){if(!J.disabled){B(".ui-slider .ui-state-focus").removeClass("ui-state-focus");B(this).addClass("ui-state-focus")}else{B(this).blur()}}).blur(function(){B(this).removeClass("ui-state-focus")});this.handles.each(function(K){B(this).data("index.ui-slider-handle",K)});this.handles.keydown(function(O){var L=B(this).data("index.ui-slider-handle"),P,M,K,N;if(E.options.disabled){return }switch(O.keyCode){case B.ui.keyCode.HOME:case B.ui.keyCode.END:case B.ui.keyCode.PAGE_UP:case B.ui.keyCode.PAGE_DOWN:case B.ui.keyCode.UP:case B.ui.keyCode.RIGHT:case B.ui.keyCode.DOWN:case B.ui.keyCode.LEFT:O.preventDefault();if(!E._keySliding){E._keySliding=true;B(this).addClass("ui-state-active");P=E._start(O,L);if(P===false){return }}break}N=E.options.step;if(E.options.values&&E.options.values.length){M=K=E.values(L)}else{M=K=E.value()}switch(O.keyCode){case B.ui.keyCode.HOME:K=E._valueMin();break;case B.ui.keyCode.END:K=E._valueMax();break;case B.ui.keyCode.PAGE_UP:K=E._trimAlignValue(M+((E._valueMax()-E._valueMin())/A));break;case B.ui.keyCode.PAGE_DOWN:K=E._trimAlignValue(M-((E._valueMax()-E._valueMin())/A));break;case B.ui.keyCode.UP:case B.ui.keyCode.RIGHT:if(M===E._valueMax()){return }K=E._trimAlignValue(M+N);break;case B.ui.keyCode.DOWN:case B.ui.keyCode.LEFT:if(M===E._valueMin()){return }K=E._trimAlignValue(M-N);break}E._slide(O,L,K)}).keyup(function(L){var K=B(this).data("index.ui-slider-handle");if(E._keySliding){E._keySliding=false;E._stop(L,K);E._change(L,K);B(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();return this},_mouseCapture:function(F){var G=this.options,J,L,E,H,N,K,M,I,D;if(G.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();J={x:F.pageX,y:F.pageY};L=this._normValueFromMouse(J);E=this._valueMax()-this._valueMin()+1;N=this;this.handles.each(function(O){var P=Math.abs(L-N.values(O));if(E>P){E=P;H=B(this);K=O}});if(G.range===true&&this.values(1)===G.min){K+=1;H=B(this.handles[K])}M=this._start(F,K);if(M===false){return false}this._mouseSliding=true;N._handleIndex=K;H.addClass("ui-state-active").focus();I=H.offset();D=!B(F.target).parents().andSelf().is(".ui-slider-handle");this._clickOffset=D?{left:0,top:0}:{left:F.pageX-I.left-(H.width()/2),top:F.pageY-I.top-(H.height()/2)-(parseInt(H.css("borderTopWidth"),10)||0)-(parseInt(H.css("borderBottomWidth"),10)||0)+(parseInt(H.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(F,K,L)}this._animateOff=true;return true},_mouseStart:function(D){return true},_mouseDrag:function(F){var D={x:F.pageX,y:F.pageY},E=this._normValueFromMouse(D);this._slide(F,this._handleIndex,E);return false},_mouseStop:function(D){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(D,this._handleIndex);this._change(D,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"},_normValueFromMouse:function(E){var D,H,G,F,I;if(this.orientation==="horizontal"){D=this.elementSize.width;H=E.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{D=this.elementSize.height;H=E.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}G=(H/D);if(G>1){G=1}if(G<0){G=0}if(this.orientation==="vertical"){G=1-G}F=this._valueMax()-this._valueMin();I=this._valueMin()+G*F;return this._trimAlignValue(I)},_start:function(F,E){var D={handle:this.handles[E],value:this.value()};if(this.options.values&&this.options.values.length){D.value=this.values(E);D.values=this.values()}return this._trigger("start",F,D)},_slide:function(H,G,F){var D,E,I;if(this.options.values&&this.options.values.length){D=this.values(G?0:1);if((this.options.values.length===2&&this.options.range===true)&&((G===0&&F>D)||(G===1&&F<D))){F=D}if(F!==this.values(G)){E=this.values();E[G]=F;I=this._trigger("slide",H,{handle:this.handles[G],value:F,values:E});D=this.values(G?0:1);if(I!==false){this.values(G,F,true)}}}else{if(F!==this.value()){I=this._trigger("slide",H,{handle:this.handles[G],value:F});if(I!==false){this.value(F)}}}},_stop:function(F,E){var D={handle:this.handles[E],value:this.value()};if(this.options.values&&this.options.values.length){D.value=this.values(E);D.values=this.values()}this._trigger("stop",F,D)},_change:function(F,E){if(!this._keySliding&&!this._mouseSliding){var D={handle:this.handles[E],value:this.value()};if(this.options.values&&this.options.values.length){D.value=this.values(E);D.values=this.values()}this._trigger("change",F,D)}},value:function(D){if(arguments.length){this.options.value=this._trimAlignValue(D);this._refreshValue();this._change(null,0);return }return this._value()},values:function(E,H){var G,D,F;if(arguments.length>1){this.options.values[E]=this._trimAlignValue(H);this._refreshValue();this._change(null,E);return }if(arguments.length){if(B.isArray(arguments[0])){G=this.options.values;D=arguments[0];for(F=0;F<G.length;F+=1){G[F]=this._trimAlignValue(D[F]);this._change(null,F)}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(E)}else{return this.value()}}}else{return this._values()}},_setOption:function(E,F){var D,G=0;if(B.isArray(this.options.values)){G=this.options.values.length}B.Widget.prototype._setOption.apply(this,arguments);switch(E){case"disabled":if(F){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.propAttr("disabled",true);this.element.addClass("ui-disabled")}else{this.handles.propAttr("disabled",false);this.element.removeClass("ui-disabled")}break;case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(D=0;D<G;D+=1){this._change(null,D)}this._animateOff=false;break}},_value:function(){var D=this.options.value;D=this._trimAlignValue(D);return D},_values:function(D){var G,F,E;if(arguments.length){G=this.options.values[D];G=this._trimAlignValue(G);return G}else{F=this.options.values.slice();for(E=0;E<F.length;E+=1){F[E]=this._trimAlignValue(F[E])}return F}},_trimAlignValue:function(G){if(G<=this._valueMin()){return this._valueMin()}if(G>=this._valueMax()){return this._valueMax()}var D=(this.options.step>0)?this.options.step:1,F=(G-this._valueMin())%D,E=G-F;if(Math.abs(F)*2>=D){E+=(F>0)?D:(-D)}return parseFloat(E.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var G=this.options.range,F=this.options,M=this,E=(!this._animateOff)?F.animate:false,H,D={},I,K,J,L;if(this.options.values&&this.options.values.length){this.handles.each(function(O,N){H=(M.values(O)-M._valueMin())/(M._valueMax()-M._valueMin())*100;D[M.orientation==="horizontal"?"left":"bottom"]=H+"%";B(this).stop(1,1)[E?"animate":"css"](D,F.animate);if(M.options.range===true){if(M.orientation==="horizontal"){if(O===0){M.range.stop(1,1)[E?"animate":"css"]({left:H+"%"},F.animate)}if(O===1){M.range[E?"animate":"css"]({width:(H-I)+"%"},{queue:false,duration:F.animate})}}else{if(O===0){M.range.stop(1,1)[E?"animate":"css"]({bottom:(H)+"%"},F.animate)}if(O===1){M.range[E?"animate":"css"]({height:(H-I)+"%"},{queue:false,duration:F.animate})}}}I=H})}else{K=this.value();J=this._valueMin();L=this._valueMax();H=(L!==J)?(K-J)/(L-J)*100:0;D[M.orientation==="horizontal"?"left":"bottom"]=H+"%";this.handle.stop(1,1)[E?"animate":"css"](D,F.animate);if(G==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[E?"animate":"css"]({width:H+"%"},F.animate)}if(G==="max"&&this.orientation==="horizontal"){this.range[E?"animate":"css"]({width:(100-H)+"%"},{queue:false,duration:F.animate})}if(G==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[E?"animate":"css"]({height:H+"%"},F.animate)}if(G==="max"&&this.orientation==="vertical"){this.range[E?"animate":"css"]({height:(100-H)+"%"},{queue:false,duration:F.animate})}}}});B.extend(B.ui.slider,{version:"1.8.24"})}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.tabs.js' */
/*
 * jQuery UI Tabs 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(D,F){var C=0,B=0;function E(){return ++C}function A(){return ++B}D.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(G,H){if(G=="selected"){if(this.options.collapsible&&H==this.options.selected){return }this.select(H)}else{this.options[G]=H;this._tabify()}},_tabId:function(G){return G.title&&G.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+E()},_sanitizeSelector:function(G){return G.replace(/:/g,"\\:")},_cookie:function(){var G=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+A());return D.cookie.apply(null,[G].concat(D.makeArray(arguments)))},_ui:function(H,G){return{tab:H,panel:G,index:this.anchors.index(H)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var G=D(this);G.html(G.data("label.tabs")).removeData("label.tabs")})},_tabify:function(R){var S=this,I=this.options,H=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=D(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return D("a",this)[0]});this.panels=D([]);this.anchors.each(function(V,T){var U=D(T).attr("href");var W=U.split("#")[0],X;if(W&&(W===location.toString().split("#")[0]||(X=D("base")[0])&&W===X.href)){U=T.hash;T.href=U}if(H.test(U)){S.panels=S.panels.add(S.element.find(S._sanitizeSelector(U)))}else{if(U&&U!=="#"){D.data(T,"href.tabs",U);D.data(T,"load.tabs",U.replace(/#.*$/,""));var Z=S._tabId(T);T.href="#"+Z;var Y=S.element.find("#"+Z);if(!Y.length){Y=D(I.panelTemplate).attr("id",Z).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(S.panels[V-1]||S.list);Y.data("destroy.tabs",true)}S.panels=S.panels.add(Y)}else{I.disabled.push(V)}}});if(R){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(I.selected===F){if(location.hash){this.anchors.each(function(U,T){if(T.hash==location.hash){I.selected=U;return false}})}if(typeof I.selected!=="number"&&I.cookie){I.selected=parseInt(S._cookie(),10)}if(typeof I.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length){I.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}I.selected=I.selected||(this.lis.length?0:-1)}else{if(I.selected===null){I.selected=-1}}I.selected=((I.selected>=0&&this.anchors[I.selected])||I.selected<0)?I.selected:0;I.disabled=D.unique(I.disabled.concat(D.map(this.lis.filter(".ui-state-disabled"),function(U,T){return S.lis.index(U)}))).sort();if(D.inArray(I.selected,I.disabled)!=-1){I.disabled.splice(D.inArray(I.selected,I.disabled),1)}this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");if(I.selected>=0&&this.anchors.length){S.element.find(S._sanitizeSelector(S.anchors[I.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(I.selected).addClass("ui-tabs-selected ui-state-active");S.element.queue("tabs",function(){S._trigger("show",null,S._ui(S.anchors[I.selected],S.element.find(S._sanitizeSelector(S.anchors[I.selected].hash))[0]))});this.load(I.selected)}D(window).bind("unload",function(){S.lis.add(S.anchors).unbind(".tabs");S.lis=S.anchors=S.panels=null})}else{I.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}this.element[I.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");if(I.cookie){this._cookie(I.selected,I.cookie)}for(var L=0,Q;(Q=this.lis[L]);L++){D(Q)[D.inArray(L,I.disabled)!=-1&&!D(Q).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled")}if(I.cache===false){this.anchors.removeData("cache.tabs")}this.lis.add(this.anchors).unbind(".tabs");if(I.event!=="mouseover"){var K=function(U,T){if(T.is(":not(.ui-state-disabled)")){T.addClass("ui-state-"+U)}};var N=function(U,T){T.removeClass("ui-state-"+U)};this.lis.bind("mouseover.tabs",function(){K("hover",D(this))});this.lis.bind("mouseout.tabs",function(){N("hover",D(this))});this.anchors.bind("focus.tabs",function(){K("focus",D(this).closest("li"))});this.anchors.bind("blur.tabs",function(){N("focus",D(this).closest("li"))})}var G,M;if(I.fx){if(D.isArray(I.fx)){G=I.fx[0];M=I.fx[1]}else{G=M=I.fx}}function J(T,U){T.css("display","");if(!D.support.opacity&&U.opacity){T[0].style.removeAttribute("filter")}}var O=M?function(T,U){D(T).closest("li").addClass("ui-tabs-selected ui-state-active");U.hide().removeClass("ui-tabs-hide").animate(M,M.duration||"normal",function(){J(U,M);S._trigger("show",null,S._ui(T,U[0]))})}:function(T,U){D(T).closest("li").addClass("ui-tabs-selected ui-state-active");U.removeClass("ui-tabs-hide");S._trigger("show",null,S._ui(T,U[0]))};var P=G?function(U,T){T.animate(G,G.duration||"normal",function(){S.lis.removeClass("ui-tabs-selected ui-state-active");T.addClass("ui-tabs-hide");J(T,G);S.element.dequeue("tabs")})}:function(U,T,V){S.lis.removeClass("ui-tabs-selected ui-state-active");T.addClass("ui-tabs-hide");S.element.dequeue("tabs")};this.anchors.bind(I.event+".tabs",function(){var U=this,W=D(U).closest("li"),T=S.panels.filter(":not(.ui-tabs-hide)"),V=S.element.find(S._sanitizeSelector(U.hash));if((W.hasClass("ui-tabs-selected")&&!I.collapsible)||W.hasClass("ui-state-disabled")||W.hasClass("ui-state-processing")||S.panels.filter(":animated").length||S._trigger("select",null,S._ui(this,V[0]))===false){this.blur();return false}I.selected=S.anchors.index(this);S.abort();if(I.collapsible){if(W.hasClass("ui-tabs-selected")){I.selected=-1;if(I.cookie){S._cookie(I.selected,I.cookie)}S.element.queue("tabs",function(){P(U,T)}).dequeue("tabs");this.blur();return false}else{if(!T.length){if(I.cookie){S._cookie(I.selected,I.cookie)}S.element.queue("tabs",function(){O(U,V)});S.load(S.anchors.index(this));this.blur();return false}}}if(I.cookie){S._cookie(I.selected,I.cookie)}if(V.length){if(T.length){S.element.queue("tabs",function(){P(U,T)})}S.element.queue("tabs",function(){O(U,V)});S.load(S.anchors.index(this))}else{throw"jQuery UI Tabs: Mismatching fragment identifier."}if(D.browser.msie){this.blur()}});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(G){if(typeof G=="string"){G=this.anchors.index(this.anchors.filter("[href$='"+G+"']"))}return G},destroy:function(){var G=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var H=D.data(this,"href.tabs");if(H){this.href=H}var I=D(this).unbind(".tabs");D.each(["href","load","cache"],function(J,K){I.removeData(K+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){if(D.data(this,"destroy.tabs")){D(this).remove()}else{D(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}});if(G.cookie){this._cookie(null,G.cookie)}return this},add:function(J,I,H){if(H===F){H=this.anchors.length}var G=this,L=this.options,N=D(L.tabTemplate.replace(/#\{href\}/g,J).replace(/#\{label\}/g,I)),M=!J.indexOf("#")?J.replace("#",""):this._tabId(D("a",N)[0]);N.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var K=G.element.find("#"+M);if(!K.length){K=D(L.panelTemplate).attr("id",M).data("destroy.tabs",true)}K.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(H>=this.lis.length){N.appendTo(this.list);K.appendTo(this.list[0].parentNode)}else{N.insertBefore(this.lis[H]);K.insertBefore(this.panels[H])}L.disabled=D.map(L.disabled,function(P,O){return P>=H?++P:P});this._tabify();if(this.anchors.length==1){L.selected=0;N.addClass("ui-tabs-selected ui-state-active");K.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){G._trigger("show",null,G._ui(G.anchors[0],G.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[H],this.panels[H]));return this},remove:function(G){G=this._getIndex(G);var I=this.options,J=this.lis.eq(G).remove(),H=this.panels.eq(G).remove();if(J.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(G+(G+1<this.anchors.length?1:-1))}I.disabled=D.map(D.grep(I.disabled,function(L,K){return L!=G}),function(L,K){return L>=G?--L:L});this._tabify();this._trigger("remove",null,this._ui(J.find("a")[0],H[0]));return this},enable:function(G){G=this._getIndex(G);var H=this.options;if(D.inArray(G,H.disabled)==-1){return }this.lis.eq(G).removeClass("ui-state-disabled");H.disabled=D.grep(H.disabled,function(J,I){return J!=G});this._trigger("enable",null,this._ui(this.anchors[G],this.panels[G]));return this},disable:function(H){H=this._getIndex(H);var G=this,I=this.options;if(H!=I.selected){this.lis.eq(H).addClass("ui-state-disabled");I.disabled.push(H);I.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[H],this.panels[H]))}return this},select:function(G){G=this._getIndex(G);if(G==-1){if(this.options.collapsible&&this.options.selected!=-1){G=this.options.selected}else{return this}}this.anchors.eq(G).trigger(this.options.event+".tabs");return this},load:function(J){J=this._getIndex(J);var H=this,L=this.options,G=this.anchors.eq(J)[0],I=D.data(G,"load.tabs");this.abort();if(!I||this.element.queue("tabs").length!==0&&D.data(G,"cache.tabs")){this.element.dequeue("tabs");return }this.lis.eq(J).addClass("ui-state-processing");if(L.spinner){var K=D("span",G);K.data("label.tabs",K.html()).html(L.spinner)}this.xhr=D.ajax(D.extend({},L.ajaxOptions,{url:I,success:function(N,M){H.element.find(H._sanitizeSelector(G.hash)).html(N);H._cleanup();if(L.cache){D.data(G,"cache.tabs",true)}H._trigger("load",null,H._ui(H.anchors[J],H.panels[J]));try{L.ajaxOptions.success(N,M)}catch(O){}},error:function(O,M,N){H._cleanup();H._trigger("load",null,H._ui(H.anchors[J],H.panels[J]));try{L.ajaxOptions.error(O,M,J,G)}catch(N){}}}));H.element.dequeue("tabs");return this},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},url:function(H,G){this.anchors.eq(H).removeData("cache.tabs").data("load.tabs",G);return this},length:function(){return this.anchors.length}});D.extend(D.ui.tabs,{version:"1.8.24"});D.extend(D.ui.tabs.prototype,{rotation:null,rotate:function(I,K){var G=this,L=this.options;var H=G._rotate||(G._rotate=function(M){clearTimeout(G.rotation);G.rotation=setTimeout(function(){var N=L.selected;G.select(++N<G.anchors.length?N:0)},I);if(M){M.stopPropagation()}});var J=G._unrotate||(G._unrotate=!K?function(M){if(M.clientX){G.rotate(null)}}:function(M){H()});if(I){this.element.bind("tabsshow",H);this.anchors.bind(L.event+".tabs",J);H()}else{clearTimeout(G.rotation);this.element.unbind("tabsshow",H);this.anchors.unbind(L.event+".tabs",J);delete this._rotate;delete this._unrotate}return this}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.core.js' */
/*
 * jQuery UI Effects 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||(function(H,E){H.effects={};H.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(O,N){H.fx.step[N]=function(P){if(!P.colorInit){P.start=M(P.elem,N);P.end=K(P.end);P.colorInit=true}P.elem.style[N]="rgb("+Math.max(Math.min(parseInt((P.pos*(P.end[0]-P.start[0]))+P.start[0],10),255),0)+","+Math.max(Math.min(parseInt((P.pos*(P.end[1]-P.start[1]))+P.start[1],10),255),0)+","+Math.max(Math.min(parseInt((P.pos*(P.end[2]-P.start[2]))+P.start[2],10),255),0)+")"}});function K(O){var N;if(O&&O.constructor==Array&&O.length==3){return O}if(N=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(O)){return[parseInt(N[1],10),parseInt(N[2],10),parseInt(N[3],10)]}if(N=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(O)){return[parseFloat(N[1])*2.55,parseFloat(N[2])*2.55,parseFloat(N[3])*2.55]}if(N=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(O)){return[parseInt(N[1],16),parseInt(N[2],16),parseInt(N[3],16)]}if(N=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(O)){return[parseInt(N[1]+N[1],16),parseInt(N[2]+N[2],16),parseInt(N[3]+N[3],16)]}if(N=/rgba\(0, 0, 0, 0\)/.exec(O)){return A.transparent}return A[H.trim(O).toLowerCase()]}function M(P,N){var O;do{O=(H.curCSS||H.css)(P,N);if(O!=""&&O!="transparent"||H.nodeName(P,"body")){break}N="backgroundColor"}while(P=P.parentNode);return K(O)}var A={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};var F=["add","remove","toggle"],C={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};function G(){var Q=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,R={},O,P;if(Q&&Q.length&&Q[0]&&Q[Q[0]]){var N=Q.length;while(N--){O=Q[N];if(typeof Q[O]=="string"){P=O.replace(/\-(\w)/g,function(S,T){return T.toUpperCase()});R[P]=Q[O]}}}else{for(O in Q){if(typeof Q[O]==="string"){R[O]=Q[O]}}}return R}function B(O){var N,P;for(N in O){P=O[N];if(P==null||H.isFunction(P)||N in C||(/scrollbar/).test(N)||(!(/color/i).test(N)&&isNaN(parseFloat(P)))){delete O[N]}}return O}function I(N,P){var Q={_:0},O;for(O in P){if(N[O]!=P[O]){Q[O]=P[O]}}return Q}H.effects.animateClass=function(N,O,Q,P){if(H.isFunction(Q)){P=Q;Q=null}return this.queue(function(){var U=H(this),R=U.attr("style")||" ",V=B(G.call(this)),T,S=U.attr("class")||"";H.each(F,function(W,X){if(N[X]){U[X+"Class"](N[X])}});T=B(G.call(this));U.attr("class",S);U.animate(I(V,T),{queue:false,duration:O,easing:Q,complete:function(){H.each(F,function(W,X){if(N[X]){U[X+"Class"](N[X])}});if(typeof U.attr("style")=="object"){U.attr("style").cssText="";U.attr("style").cssText=R}else{U.attr("style",R)}if(P){P.apply(this,arguments)}H.dequeue(this)}})})};H.fn.extend({_addClass:H.fn.addClass,addClass:function(O,N,Q,P){return N?H.effects.animateClass.apply(this,[{add:O},N,Q,P]):this._addClass(O)},_removeClass:H.fn.removeClass,removeClass:function(O,N,Q,P){return N?H.effects.animateClass.apply(this,[{remove:O},N,Q,P]):this._removeClass(O)},_toggleClass:H.fn.toggleClass,toggleClass:function(P,O,N,R,Q){if(typeof O=="boolean"||O===E){if(!N){return this._toggleClass(P,O)}else{return H.effects.animateClass.apply(this,[(O?{add:P}:{remove:P}),N,R,Q])}}else{return H.effects.animateClass.apply(this,[{toggle:P},O,N,R])}},switchClass:function(N,P,O,R,Q){return H.effects.animateClass.apply(this,[{add:P,remove:N},O,R,Q])}});H.extend(H.effects,{version:"1.8.24",save:function(O,P){for(var N=0;N<P.length;N++){if(P[N]!==null){O.data("ec.storage."+P[N],O[0].style[P[N]])}}},restore:function(O,P){for(var N=0;N<P.length;N++){if(P[N]!==null){O.css(P[N],O.data("ec.storage."+P[N]))}}},setMode:function(N,O){if(O=="toggle"){O=N.is(":hidden")?"show":"hide"}return O},getBaseline:function(O,P){var Q,N;switch(O[0]){case"top":Q=0;break;case"middle":Q=0.5;break;case"bottom":Q=1;break;default:Q=O[0]/P.height}switch(O[1]){case"left":N=0;break;case"center":N=0.5;break;case"right":N=1;break;default:N=O[1]/P.width}return{x:N,y:Q}},createWrapper:function(N){if(N.parent().is(".ui-effects-wrapper")){return N.parent()}var O={width:N.outerWidth(true),height:N.outerHeight(true),"float":N.css("float")},R=H("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),Q=document.activeElement;try{Q.id}catch(P){Q=document.body}N.wrap(R);if(N[0]===Q||H.contains(N[0],Q)){H(Q).focus()}R=N.parent();if(N.css("position")=="static"){R.css({position:"relative"});N.css({position:"relative"})}else{H.extend(O,{position:N.css("position"),zIndex:N.css("z-index")});H.each(["top","left","bottom","right"],function(S,T){O[T]=N.css(T);if(isNaN(parseInt(O[T],10))){O[T]="auto"}});N.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return R.css(O).show()},removeWrapper:function(N){var O,P=document.activeElement;if(N.parent().is(".ui-effects-wrapper")){O=N.parent().replaceWith(N);if(N[0]===P||H.contains(N[0],P)){H(P).focus()}return O}return N},setTransition:function(O,Q,N,P){P=P||{};H.each(Q,function(S,R){var T=O.cssUnit(R);if(T[0]>0){P[R]=T[0]*N+T[1]}});return P}});function D(O,N,P,Q){if(typeof O=="object"){Q=N;P=null;N=O;O=N.effect}if(H.isFunction(N)){Q=N;P=null;N={}}if(typeof N=="number"||H.fx.speeds[N]){Q=P;P=N;N={}}if(H.isFunction(P)){Q=P;P=null}N=N||{};P=P||N.duration;P=H.fx.off?0:typeof P=="number"?P:P in H.fx.speeds?H.fx.speeds[P]:H.fx.speeds._default;Q=Q||N.complete;return[O,N,P,Q]}function L(N){if(!N||typeof N==="number"||H.fx.speeds[N]){return true}if(typeof N==="string"&&!H.effects[N]){return true}return false}H.fn.extend({effect:function(Q,P,S,U){var O=D.apply(this,arguments),R={options:O[1],duration:O[2],callback:O[3]},T=R.options.mode,N=H.effects[Q];if(H.fx.off||!N){if(T){return this[T](R.duration,R.callback)}else{return this.each(function(){if(R.callback){R.callback.call(this)}})}}return N.call(this,R)},_show:H.fn.show,show:function(O){if(L(O)){return this._show.apply(this,arguments)}else{var N=D.apply(this,arguments);N[1].mode="show";return this.effect.apply(this,N)}},_hide:H.fn.hide,hide:function(O){if(L(O)){return this._hide.apply(this,arguments)}else{var N=D.apply(this,arguments);N[1].mode="hide";return this.effect.apply(this,N)}},__toggle:H.fn.toggle,toggle:function(O){if(L(O)||typeof O==="boolean"||H.isFunction(O)){return this.__toggle.apply(this,arguments)}else{var N=D.apply(this,arguments);N[1].mode="toggle";return this.effect.apply(this,N)}},cssUnit:function(N){var O=this.css(N),P=[];H.each(["em","px","%","pt"],function(Q,R){if(O.indexOf(R)>0){P=[parseFloat(O),R]}});return P}});var J={};H.each(["Quad","Cubic","Quart","Quint","Expo"],function(O,N){J[N]=function(P){return Math.pow(P,O+2)}});H.extend(J,{Sine:function(N){return 1-Math.cos(N*Math.PI/2)},Circ:function(N){return 1-Math.sqrt(1-N*N)},Elastic:function(N){return N===0||N===1?N:-Math.pow(2,8*(N-1))*Math.sin(((N-1)*80-7.5)*Math.PI/15)},Back:function(N){return N*N*(3*N-2)},Bounce:function(P){var N,O=4;while(P<((N=Math.pow(2,--O))-1)/11){}return 1/Math.pow(4,3-O)-7.5625*Math.pow((N*3-2)/22-P,2)}});H.each(J,function(O,N){H.easing["easeIn"+O]=N;H.easing["easeOut"+O]=function(P){return 1-N(1-P)};H.easing["easeInOut"+O]=function(P){return P<0.5?N(P*2)/2:N(P*-2+2)/-2+1}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.blind.js' */
/*
 * jQuery UI Effects Blind 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.blind=function(C){return this.queue(function(){var E=A(this),D=["position","top","bottom","left","right"];var I=A.effects.setMode(E,C.options.mode||"hide");var H=C.options.direction||"vertical";A.effects.save(E,D);E.show();var K=A.effects.createWrapper(E).css({overflow:"hidden"});var F=(H=="vertical")?"height":"width";var J=(H=="vertical")?K.height():K.width();if(I=="show"){K.css(F,0)}var G={};G[F]=I=="show"?J:0;K.animate(G,C.duration,C.options.easing,function(){if(I=="hide"){E.hide()}A.effects.restore(E,D);A.effects.removeWrapper(E);if(C.callback){C.callback.apply(E[0],arguments)}E.dequeue()})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.bounce.js' */
/*
 * jQuery UI Effects Bounce 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.bounce=function(C){return this.queue(function(){var F=A(this),L=["position","top","bottom","left","right"];var K=A.effects.setMode(F,C.options.mode||"effect");var N=C.options.direction||"up";var D=C.options.distance||20;var E=C.options.times||5;var H=C.duration||250;if(/show|hide/.test(K)){L.push("opacity")}A.effects.save(F,L);F.show();A.effects.createWrapper(F);var G=(N=="up"||N=="down")?"top":"left";var P=(N=="up"||N=="left")?"pos":"neg";var D=C.options.distance||(G=="top"?F.outerHeight(true)/3:F.outerWidth(true)/3);if(K=="show"){F.css("opacity",0).css(G,P=="pos"?-D:D)}if(K=="hide"){D=D/(E*2)}if(K!="hide"){E--}if(K=="show"){var I={opacity:1};I[G]=(P=="pos"?"+=":"-=")+D;F.animate(I,H/2,C.options.easing);D=D/2;E--}for(var J=0;J<E;J++){var O={},M={};O[G]=(P=="pos"?"-=":"+=")+D;M[G]=(P=="pos"?"+=":"-=")+D;F.animate(O,H/2,C.options.easing).animate(M,H/2,C.options.easing);D=(K=="hide")?D*2:D/2}if(K=="hide"){var I={opacity:0};I[G]=(P=="pos"?"-=":"+=")+D;F.animate(I,H/2,C.options.easing,function(){F.hide();A.effects.restore(F,L);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}})}else{var O={},M={};O[G]=(P=="pos"?"-=":"+=")+D;M[G]=(P=="pos"?"+=":"-=")+D;F.animate(O,H/2,C.options.easing).animate(M,H/2,C.options.easing,function(){A.effects.restore(F,L);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}})}F.queue("fx",function(){F.dequeue()});F.dequeue()})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.clip.js' */
/*
 * jQuery UI Effects Clip 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.clip=function(C){return this.queue(function(){var G=A(this),K=["position","top","bottom","left","right","height","width"];var J=A.effects.setMode(G,C.options.mode||"hide");var L=C.options.direction||"vertical";A.effects.save(G,K);G.show();var D=A.effects.createWrapper(G).css({overflow:"hidden"});var F=G[0].tagName=="IMG"?D:G;var H={size:(L=="vertical")?"height":"width",position:(L=="vertical")?"top":"left"};var E=(L=="vertical")?F.height():F.width();if(J=="show"){F.css(H.size,0);F.css(H.position,E/2)}var I={};I[H.size]=J=="show"?E:0;I[H.position]=J=="show"?0:E/2;F.animate(I,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){if(J=="hide"){G.hide()}A.effects.restore(G,K);A.effects.removeWrapper(G);if(C.callback){C.callback.apply(G[0],arguments)}G.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.drop.js' */
/*
 * jQuery UI Effects Drop 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.drop=function(C){return this.queue(function(){var F=A(this),E=["position","top","bottom","left","right","opacity"];var J=A.effects.setMode(F,C.options.mode||"hide");var I=C.options.direction||"left";A.effects.save(F,E);F.show();A.effects.createWrapper(F);var G=(I=="up"||I=="down")?"top":"left";var D=(I=="up"||I=="left")?"pos":"neg";var K=C.options.distance||(G=="top"?F.outerHeight(true)/2:F.outerWidth(true)/2);if(J=="show"){F.css("opacity",0).css(G,D=="pos"?-K:K)}var H={opacity:J=="show"?1:0};H[G]=(J=="show"?(D=="pos"?"+=":"-="):(D=="pos"?"-=":"+="))+K;F.animate(H,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){if(J=="hide"){F.hide()}A.effects.restore(F,E);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}F.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.explode.js' */
/*
 * jQuery UI Effects Explode 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.explode=function(C){return this.queue(function(){var J=C.options.pieces?Math.round(Math.sqrt(C.options.pieces)):3;var F=C.options.pieces?Math.round(Math.sqrt(C.options.pieces)):3;C.options.mode=C.options.mode=="toggle"?(A(this).is(":visible")?"hide":"show"):C.options.mode;var I=A(this).show().css("visibility","hidden");var K=I.offset();K.top-=parseInt(I.css("marginTop"),10)||0;K.left-=parseInt(I.css("marginLeft"),10)||0;var H=I.outerWidth(true);var D=I.outerHeight(true);for(var G=0;G<J;G++){for(var E=0;E<F;E++){I.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-E*(H/F),top:-G*(D/J)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:H/F,height:D/J,left:K.left+E*(H/F)+(C.options.mode=="show"?(E-Math.floor(F/2))*(H/F):0),top:K.top+G*(D/J)+(C.options.mode=="show"?(G-Math.floor(J/2))*(D/J):0),opacity:C.options.mode=="show"?0:1}).animate({left:K.left+E*(H/F)+(C.options.mode=="show"?0:(E-Math.floor(F/2))*(H/F)),top:K.top+G*(D/J)+(C.options.mode=="show"?0:(G-Math.floor(J/2))*(D/J)),opacity:C.options.mode=="show"?1:0},C.duration||500)}}setTimeout(function(){C.options.mode=="show"?I.css({visibility:"visible"}):I.css({visibility:"visible"}).hide();if(C.callback){C.callback.apply(I[0])}I.dequeue();A("div.ui-effects-explode").remove()},C.duration||500)})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.fade.js' */
/*
 * jQuery UI Effects Fade 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fade
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.fade=function(C){return this.queue(function(){var D=A(this),E=A.effects.setMode(D,C.options.mode||"hide");D.animate({opacity:E},{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){(C.callback&&C.callback.apply(this,arguments));D.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.fold.js' */
/*
 * jQuery UI Effects Fold 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.fold=function(C){return this.queue(function(){var F=A(this),L=["position","top","bottom","left","right"];var I=A.effects.setMode(F,C.options.mode||"hide");var P=C.options.size||15;var O=!(!C.options.horizFirst);var H=C.duration?C.duration/2:A.fx.speeds._default/2;A.effects.save(F,L);F.show();var E=A.effects.createWrapper(F).css({overflow:"hidden"});var J=((I=="show")!=O);var G=J?["width","height"]:["height","width"];var D=J?[E.width(),E.height()]:[E.height(),E.width()];var K=/([0-9]+)%/.exec(P);if(K){P=parseInt(K[1],10)/100*D[I=="hide"?0:1]}if(I=="show"){E.css(O?{height:0,width:P}:{height:P,width:0})}var N={},M={};N[G[0]]=I=="show"?D[0]:P;M[G[1]]=I=="show"?D[1]:0;E.animate(N,H,C.options.easing).animate(M,H,C.options.easing,function(){if(I=="hide"){F.hide()}A.effects.restore(F,L);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(F[0],arguments)}F.dequeue()})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.highlight.js' */
/*
 * jQuery UI Effects Highlight 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.highlight=function(C){return this.queue(function(){var E=A(this),D=["backgroundImage","backgroundColor","opacity"],G=A.effects.setMode(E,C.options.mode||"show"),F={backgroundColor:E.css("backgroundColor")};if(G=="hide"){F.opacity=0}A.effects.save(E,D);E.show().css({backgroundImage:"none",backgroundColor:C.options.color||"#ffff99"}).animate(F,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){(G=="hide"&&E.hide());A.effects.restore(E,D);(G=="show"&&!A.support.opacity&&this.style.removeAttribute("filter"));(C.callback&&C.callback.apply(this,arguments));E.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.pulsate.js' */
/*
 * jQuery UI Effects Pulsate 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.pulsate=function(C){return this.queue(function(){var G=A(this),J=A.effects.setMode(G,C.options.mode||"show"),I=((C.options.times||5)*2)-1,H=C.duration?C.duration/2:A.fx.speeds._default/2,D=G.is(":visible"),E=0;if(!D){G.css("opacity",0).show();E=1}if((J=="hide"&&D)||(J=="show"&&!D)){I--}for(var F=0;F<I;F++){G.animate({opacity:E},H,C.options.easing);E=(E+1)%2}G.animate({opacity:E},H,C.options.easing,function(){if(E==0){G.hide()}(C.callback&&C.callback.apply(this,arguments))});G.queue("fx",function(){G.dequeue()}).dequeue()})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.scale.js' */
/*
 * jQuery UI Effects Scale 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.puff=function(C){return this.queue(function(){var G=A(this),H=A.effects.setMode(G,C.options.mode||"hide"),F=parseInt(C.options.percent,10)||150,E=F/100,D={height:G.height(),width:G.width()};A.extend(C.options,{fade:true,mode:H,percent:H=="hide"?F:100,from:H=="hide"?D:{height:D.height*E,width:D.width*E}});G.effect("scale",C.options,C.duration,C.callback);G.dequeue()})};A.effects.scale=function(C){return this.queue(function(){var H=A(this);var E=A.extend(true,{},C.options);var K=A.effects.setMode(H,C.options.mode||"effect");var I=parseInt(C.options.percent,10)||(parseInt(C.options.percent,10)==0?0:(K=="hide"?0:100));var J=C.options.direction||"both";var D=C.options.origin;if(K!="effect"){E.origin=D||["middle","center"];E.restore=true}var G={height:H.height(),width:H.width()};H.from=C.options.from||(K=="show"?{height:0,width:0}:G);var F={y:J!="horizontal"?(I/100):1,x:J!="vertical"?(I/100):1};H.to={height:G.height*F.y,width:G.width*F.x};if(C.options.fade){if(K=="show"){H.from.opacity=0;H.to.opacity=1}if(K=="hide"){H.from.opacity=1;H.to.opacity=0}}E.from=H.from;E.to=H.to;E.mode=K;H.effect("size",E,C.duration,C.callback);H.dequeue()})};A.effects.size=function(C){return this.queue(function(){var D=A(this),O=["position","top","bottom","left","right","width","height","overflow","opacity"];var N=["position","top","bottom","left","right","overflow","opacity"];var K=["width","height","overflow"];var Q=["fontSize"];var L=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"];var G=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"];var H=A.effects.setMode(D,C.options.mode||"effect");var J=C.options.restore||false;var F=C.options.scale||"both";var P=C.options.origin;var E={height:D.height(),width:D.width()};D.from=C.options.from||E;D.to=C.options.to||E;if(P){var I=A.effects.getBaseline(P,E);D.from.top=(E.height-D.from.height)*I.y;D.from.left=(E.width-D.from.width)*I.x;D.to.top=(E.height-D.to.height)*I.y;D.to.left=(E.width-D.to.width)*I.x}var M={from:{y:D.from.height/E.height,x:D.from.width/E.width},to:{y:D.to.height/E.height,x:D.to.width/E.width}};if(F=="box"||F=="both"){if(M.from.y!=M.to.y){O=O.concat(L);D.from=A.effects.setTransition(D,L,M.from.y,D.from);D.to=A.effects.setTransition(D,L,M.to.y,D.to)}if(M.from.x!=M.to.x){O=O.concat(G);D.from=A.effects.setTransition(D,G,M.from.x,D.from);D.to=A.effects.setTransition(D,G,M.to.x,D.to)}}if(F=="content"||F=="both"){if(M.from.y!=M.to.y){O=O.concat(Q);D.from=A.effects.setTransition(D,Q,M.from.y,D.from);D.to=A.effects.setTransition(D,Q,M.to.y,D.to)}}A.effects.save(D,J?O:N);D.show();A.effects.createWrapper(D);D.css("overflow","hidden").css(D.from);if(F=="content"||F=="both"){L=L.concat(["marginTop","marginBottom"]).concat(Q);G=G.concat(["marginLeft","marginRight"]);K=O.concat(L).concat(G);D.find("*[width]").each(function(){var S=A(this);if(J){A.effects.save(S,K)}var R={height:S.height(),width:S.width()};S.from={height:R.height*M.from.y,width:R.width*M.from.x};S.to={height:R.height*M.to.y,width:R.width*M.to.x};if(M.from.y!=M.to.y){S.from=A.effects.setTransition(S,L,M.from.y,S.from);S.to=A.effects.setTransition(S,L,M.to.y,S.to)}if(M.from.x!=M.to.x){S.from=A.effects.setTransition(S,G,M.from.x,S.from);S.to=A.effects.setTransition(S,G,M.to.x,S.to)}S.css(S.from);S.animate(S.to,C.duration,C.options.easing,function(){if(J){A.effects.restore(S,K)}})})}D.animate(D.to,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){if(D.to.opacity===0){D.css("opacity",D.from.opacity)}if(H=="hide"){D.hide()}A.effects.restore(D,J?O:N);A.effects.removeWrapper(D);if(C.callback){C.callback.apply(this,arguments)}D.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.shake.js' */
/*
 * jQuery UI Effects Shake 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.shake=function(C){return this.queue(function(){var F=A(this),L=["position","top","bottom","left","right"];var K=A.effects.setMode(F,C.options.mode||"effect");var N=C.options.direction||"left";var D=C.options.distance||20;var E=C.options.times||3;var H=C.duration||C.options.duration||140;A.effects.save(F,L);F.show();A.effects.createWrapper(F);var G=(N=="up"||N=="down")?"top":"left";var P=(N=="up"||N=="left")?"pos":"neg";var I={},O={},M={};I[G]=(P=="pos"?"-=":"+=")+D;O[G]=(P=="pos"?"+=":"-=")+D*2;M[G]=(P=="pos"?"-=":"+=")+D*2;F.animate(I,H,C.options.easing);for(var J=1;J<E;J++){F.animate(O,H,C.options.easing).animate(M,H,C.options.easing)}F.animate(O,H,C.options.easing).animate(I,H/2,C.options.easing,function(){A.effects.restore(F,L);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}});F.queue("fx",function(){F.dequeue()});F.dequeue()})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.slide.js' */
/*
 * jQuery UI Effects Slide 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.slide=function(C){return this.queue(function(){var F=A(this),E=["position","top","bottom","left","right"];var J=A.effects.setMode(F,C.options.mode||"show");var I=C.options.direction||"left";A.effects.save(F,E);F.show();A.effects.createWrapper(F).css({overflow:"hidden"});var G=(I=="up"||I=="down")?"top":"left";var D=(I=="up"||I=="left")?"pos":"neg";var K=C.options.distance||(G=="top"?F.outerHeight(true):F.outerWidth(true));if(J=="show"){F.css(G,D=="pos"?(isNaN(K)?"-"+K:-K):K)}var H={};H[G]=(J=="show"?(D=="pos"?"+=":"-="):(D=="pos"?"-=":"+="))+K;F.animate(H,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){if(J=="hide"){F.hide()}A.effects.restore(F,E);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}F.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.transfer.js' */
/*
 * jQuery UI Effects Transfer 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.transfer=function(C){return this.queue(function(){var G=A(this),I=A(C.options.to),F=I.offset(),H={top:F.top,left:F.left,height:I.innerHeight(),width:I.innerWidth()},E=G.offset(),D=A('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(C.options.className).css({top:E.top,left:E.left,height:G.innerHeight(),width:G.innerWidth(),position:"absolute"}).animate(H,C.duration,C.options.easing,function(){D.remove();(C.callback&&C.callback.apply(G[0],arguments));G.dequeue()})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery.ui.menu.js' */
(function(A){A.widget("ui.menu",{_create:function(){var B=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(C){if(!A(C.target).closest(".ui-menu-item a").length){return }C.preventDefault();B.select(C)});this.refresh()},refresh:function(){var C=this;var B=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");B.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(D){C.activate(D,A(this).parent())}).mouseleave(function(){C.deactivate()})},activate:function(E,D){this.deactivate();if(this.hasScroll()){var F=D.offset().top-this.element.offset().top,B=this.element.attr("scrollTop"),C=this.element.height();if(F<0){this.element.attr("scrollTop",B+F)}else{if(F>C){this.element.attr("scrollTop",B+F-C+D.height())}}}this.active=D.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",E,{item:D})},deactivate:function(){if(!this.active){return }this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null},next:function(B){this.move("next",".ui-menu-item:first",B)},previous:function(B){this.move("prev",".ui-menu-item:last",B)},first:function(){return this.active&&!this.active.prev().length},last:function(){return this.active&&!this.active.next().length},move:function(E,D,C){if(!this.active){this.activate(C,this.element.children(D));return }var B=this.active[E+"All"](".ui-menu-item").eq(0);if(B.length){this.activate(C,B)}else{this.activate(C,this.element.children(D))}},nextPage:function(D){if(this.hasScroll()){if(!this.active||this.last()){this.activate(D,this.element.children(":first"));return }var E=this.active.offset().top,C=this.element.height(),B=this.element.children("li").filter(function(){var F=A(this).offset().top-E-C+A(this).height();return F<10&&F>-10});if(!B.length){B=this.element.children(":last")}this.activate(D,B)}else{this.activate(D,this.element.children(!this.active||this.last()?":first":":last"))}},previousPage:function(C){if(this.hasScroll()){if(!this.active||this.first()){this.activate(C,this.element.children(":last"));return }var D=this.active.offset().top,B=this.element.height();result=this.element.children("li").filter(function(){var E=A(this).offset().top-D+B-A(this).height();return E<10&&E>-10});if(!result.length){result=this.element.children(":first")}this.activate(C,result)}else{this.activate(C,this.element.children(!this.active||this.first()?":last":":first"))}},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")},select:function(B){this._trigger("selected",B,{item:this.active})}})}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-metadata:confluence-jira-metadata-resources', location = 'soy/jira-metadata.soy' */
// This file was automatically generated from jira-metadata.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Metadata == 'undefined') { Confluence.Templates.Metadata = {}; }
if (typeof Confluence.Templates.Metadata.JIRA == 'undefined') { Confluence.Templates.Metadata.JIRA = {}; }


Confluence.Templates.Metadata.JIRA.metadata = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="jira-metadata-dialog" class="rendered-content"><h2 class="title">', soy.$$escapeHtml("JIRA links"), '</h2><div class="items-section">');
  var groupList6 = opt_data.groups;
  var groupListLen6 = groupList6.length;
  for (var groupIndex6 = 0; groupIndex6 < groupListLen6; groupIndex6++) {
    var groupData6 = groupList6[groupIndex6];
    if (groupData6.items.length) {
      switch (groupData6.type) {
        case 'ISSUES':
          Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: "Issues", type: groupData6.type, links: groupData6.links}, output);
          break;
        case 'SPRINTS':
          Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: "Sprints", type: groupData6.type, links: groupData6.links}, output);
          break;
        case 'VERSIONS':
          Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: "Versions", type: groupData6.type, links: groupData6.links}, output);
          break;
        case 'EPICS':
          Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: "Epics", type: groupData6.type, links: groupData6.links}, output);
          break;
      }
    }
  }
  output.append('</div>');
  Confluence.Templates.Metadata.JIRA.renderAuthPrompts({appLinks: opt_data.unauthorisedAppLinks}, output);
  Confluence.Templates.Metadata.JIRA.renderJiraErrors(opt_data, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.featureDiscovery = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="jira-metadata-feature-discovery"><h2>', soy.$$escapeHtml("View related JIRA items here"), '</h2><p>', soy.$$escapeHtml("Now you can see which epics, sprints, versions and issues relate to this page."), '</p><div class="aui-toolbar2" role="toolbar"><div class="aui-toolbar2-inner">');
  aui.buttons.button({text: "Show me", extraClasses: 'showme'}, output);
  aui.buttons.button({text: "Don\x27t show again", type: 'link', extraClasses: 'close'}, output);
  output.append('</div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.nometadata = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="jira-metadata-dialog" class="rendered-content">');
  aui.message.warning({content: '<p>' + soy.$$escapeHtml("JIRA links cannot be displayed. Either you do not have correct JIRA permissions or the links have been removed.") + '</p>'}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.renderAuthPrompts = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.appLinks.length) {
    var param66 = new soy.StringBuilder();
    if (opt_data.appLinks.length == 1) {
      var appLink__soy69 = opt_data.appLinks[0];
      param66.append('<p>', AJS.format("{0}Login \x26amp; Approve{1} to retrieve data from {2}",'<a class="jira-metadata-auth-link" href="#" data-href="' + appLink__soy69.authorisationUrl + '">','</a>',appLink__soy69.htmlSafeName), '</p>');
    } else {
      param66.append('<p>', soy.$$escapeHtml("Authenticate to retrieve data from the following instances:"), '</p>');
      var appLinkList78 = opt_data.appLinks;
      var appLinkListLen78 = appLinkList78.length;
      for (var appLinkIndex78 = 0; appLinkIndex78 < appLinkListLen78; appLinkIndex78++) {
        var appLinkData78 = appLinkList78[appLinkIndex78];
        param66.append('<div><a class="jira-metadata-auth-link" href="#" data-href="', soy.$$escapeHtml(appLinkData78.authorisationUrl), '">', soy.$$escapeHtml(appLinkData78.name), '</a></div>');
      }
    }
    aui.message.hint({content: param66.toString()}, output);
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.renderGroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jira-metadata-section ', soy.$$escapeHtml(opt_data.type), '-section"><div class="section-label"><span class="icon"></span><span>', soy.$$escapeHtml(opt_data.headingText), '</span></div><ul class="jira-metadata-list jira-', soy.$$escapeHtml(opt_data.type), '-list">');
  var itemList94 = opt_data.items;
  var itemListLen94 = itemList94.length;
  for (var itemIndex94 = 0; itemIndex94 < itemListLen94; itemIndex94++) {
    var itemData94 = itemList94[itemIndex94];
    output.append('<li class="jira-metadata-item"><span class="item-label"><a href="', soy.$$escapeHtml("/wiki"), '/plugins/servlet/jira-metadata/redirect?u=', soy.$$escapeUri(itemData94.url), '&t=', soy.$$escapeHtml(opt_data.type), '" title="', soy.$$escapeHtml(itemData94.name), '">', soy.$$escapeHtml(itemData94.name), '</a>');
    if (itemData94.status) {
      output.append('&nbsp;');
      if (itemData94.status.statusCategory) {
        JIRA.Template.Util.Issue.Status.issueStatusResolver({issueStatus: itemData94.status, isSubtle: true}, output);
      } else {
        output.append('<span class="item-status">(', soy.$$escapeHtml(itemData94.status.name), ')</span>');
      }
    }
    output.append('</span>', (itemData94.description != '') ? '<span class="item-subtext">' + soy.$$escapeHtml(itemData94.description) + '</span>' : '', '</li>');
  }
  output.append('</ul><ul class="jira-metadata-list ', soy.$$escapeHtml(opt_data.type), '-more-link">');
  var linkList130 = opt_data.links;
  var linkListLen130 = linkList130.length;
  for (var linkIndex130 = 0; linkIndex130 < linkListLen130; linkIndex130++) {
    var linkData130 = linkList130[linkIndex130];
    output.append('<li class="jira-metadata-item"><a href="', soy.$$escapeHtml("/wiki"), '/plugins/servlet/jira-metadata/redirect?u=', soy.$$escapeUri(linkData130.url), '&t=', soy.$$escapeHtml(opt_data.type), '&more">', soy.$$escapeHtml(AJS.format("View {0} more in {1}",linkData130.numItems,linkData130.appName)), '</a></li>');
  }
  output.append('</ul></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.loadingMetadata = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="jira-metadata-dialog"><h2 class="title">', soy.$$escapeHtml("JIRA links"), '</h2><div class="spinner-container"><div class="spinner"></div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.renderJiraErrors = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.errors.length == 1) {
    var error__soy150 = opt_data.errors[0];
    aui.message.warning({content: '<p>' + soy.$$escapeHtml("Unable to retrieve JIRA metadata.") + ' ' + soy.$$escapeHtml(error__soy150.errorMessage) + '</p>'}, output);
  } else if (opt_data.errors.length > 1) {
    var param159 = new soy.StringBuilder('<p>', soy.$$escapeHtml("Unable to retrieve JIRA metadata. The following errors occurred:"), '</p><ul>');
    var errorList163 = opt_data.errors;
    var errorListLen163 = errorList163.length;
    for (var errorIndex163 = 0; errorIndex163 < errorListLen163; errorIndex163++) {
      var errorData163 = errorList163[errorIndex163];
      param159.append('<li>', soy.$$escapeHtml(errorData163.errorMessage), '</li>');
    }
    param159.append('</ul>');
    aui.message.warning({content: param159.toString()}, output);
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.unknownError = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="jira-metadata-dialog" class="rendered-content">');
  aui.message.warning({content: '<p>' + soy.$$escapeHtml("Unable to retrieve JIRA metadata. Could not connect to Confluence") + '</p>'}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-metadata:confluence-jira-metadata-resources', location = '/js/jira-metadata.js' */
AJS.toInit(function(h){var i="com.atlassian.confluence.plugins.confluence-jira-metadata";var s=false;var o;var l;var q="jira-metadata-dialog";var g=h("#content-metadata-jira");var t;var e="jira-metadata-discovery";var r=AJS.Meta.get("jira-metadata-count");var k="linked-issues-dropdown";if(r>0){p(r,AJS.Meta.get("jira-metadata-count-incomplete"))}else{if(r==-1){h.ajax({url:AJS.contextPath()+"/rest/jira-metadata/1.0/metadata/aggregate?pageId="+AJS.Meta.get("page-id"),type:"GET",dataType:"json",contentType:"application/json",cache:false,success:function(u){if(u.count>0){p(u.count,u.incomplete)}}})}}function p(v,u){f(v,u);g.removeClass("hidden");if(b()){o=AJS.InlineDialog(g,q,function(x,w,y){AJS.trigger("analytics",{name:"confluence.jira.metadata.expanded"});if(!l||!s){l=x;y();a(x)}else{y()}return false},{hideDelay:null});g.click(function(){if(h("#"+q).is(":visible")){o.hide()}})}if(g&&j()){m();g.one("click",function(){Confluence.FeatureDiscovery.forPlugin(i).markDiscovered(k)})}}function f(v,u){if(!u){h("#content-metadata-jira > span").text(v==1?"1 JIRA link":AJS.format("{0} JIRA links",v))}}function b(){return !g.attr("href")}function m(){t=AJS.InlineDialog(g,e,function(v,u,w){v.html(Confluence.Templates.Metadata.JIRA.featureDiscovery());v.find(".showme").on("click",function(){Confluence.FeatureDiscovery.forPlugin(i).markDiscovered(k);t.hide();o.show()});v.find(".close").on("click",function(){Confluence.FeatureDiscovery.forPlugin(i).markDiscovered(k);t.hide()});w()},{noBind:true,closeOthers:false,hideDelay:null});t.show();Confluence.FeatureDiscovery.forPlugin(i).addDiscoveryView(k)}function j(){return !AJS.Meta.get("blueprint-index-popup-key")&&Confluence.FeatureDiscovery.forPlugin(i).shouldShow(k)}function a(){d();l.html(Confluence.Templates.Metadata.JIRA.loadingMetadata());l.find(".spinner").spin("medium");h.ajax({url:AJS.contextPath()+"/rest/jira-metadata/1.0/metadata?pageId="+AJS.Meta.get("page-id"),type:"GET",dataType:"json",contentType:"application/json",error:function(u){c();l.html(Confluence.Templates.Metadata.JIRA.unknownError())},success:function(v){c();s=true;f(v.count,false);var w;if(v.count===0&&!(v.unauthorisedAppLinks&&v.unauthorisedAppLinks.length>0)&&v.errors.length==0){AJS.trigger("analytics",{name:"confluence.jira.metadata.error.no-metadata"});w=Confluence.Templates.Metadata.JIRA.nometadata()}else{w=Confluence.Templates.Metadata.JIRA.metadata(v)}var x=l.height();l.html(w);var u=l.height();l.find("#"+q+" > *").not("h2").css("opacity",0).animate({opacity:1},350,"easeInOutQuad");l.css({overflow:"hidden",height:x+"px"}).animate({height:u+"px"},350,"easeInOutQuad",function(){l.css({overflow:"",height:""})});n()},complete:function(){h("#"+q+" .icon-close").click(function(u){u.stopPropagation();h(this).closest(".closable").remove()})}})}function n(){h(".jira-metadata-auth-link").click(function(u){u.preventDefault();AppLinks.authenticateRemoteCredentials(h(this).data("href"),a,function(){})})}function d(){if(l&&l.height()>0){l.css("height",l.height())}}function c(){l&&l.css("height","")}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.extra.jira:proxy-js', location = '/jira/proxy.js' */
AppLinks=AJS.$.extend(window.AppLinks||{},{makeRequest:function(a){var b=contextPath||AJS.params.contextPath;if(a.processData){if(a.appId){a.data=AJS.$.extend(a.data||{},{appId:a.appId})}else{if(a.appType){a.data=AJS.$.extend(a.data||{},{appType:a.appType})}}a.data=AJS.$.extend(a.data||{},{path:a.url})}else{var c=a.url;a=AJS.$.extend(a,{beforeSend:function(d){if(a.appId){d.setRequestHeader("X-AppId",a.appId)}else{if(a.appType){d.setRequestHeader("X-AppType",a.appType)}}d.setRequestHeader("X-AppPath",c)}})}a=AJS.$.extend(a,{url:b+"/plugins/servlet/applinks/proxy"});return AJS.$.ajax(a)},createProxyGetUrl:function(b){var c="";if(b.includeContext){c=contextPath||AJS.params.contextPath}var a=c+"/plugins/servlet/applinks/proxy";if(b.appId){a+="?appId="+encodeURIComponent(b.appId)}else{if(b.appType){a+="?appType="+encodeURIComponent(b.appType)}else{AJS.log("You need to specify an appType or appId");return""}}if(b.path){a+="&path="+encodeURIComponent(b.path)}return a}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'js/fecru-compatibility.js' */
if(jQuery!=undefined&&AJS!=undefined){jQuery=AJS.$};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/common/rest-service.js' */
AppLinks=AJS.$.extend(window.AppLinks||{},{Event:{NAMESPACE:"applinks"}});AppLinks.Event=AJS.$.extend(window.AppLinks.Event,{PREREADY:AppLinks.Event.NAMESPACE+".preready",READY:AppLinks.Event.NAMESPACE+".ready"});if(AJS.AppLinksInitialisationBinder){AppLinks.initialisationBinder=AJS.AppLinksInitialisationBinder}else{AppLinks.initialisationBinder=function(a){AJS.toInit(a)}}AppLinks.initialisationBinder(function(){var b=AJS.$;AppLinks=b.extend(window.AppLinks||{},{failure:function(e){if(e.status==401){window.location.reload()}else{var c=AppLinks.parseError(e);var d=b(".page-error");if(d.length>0){d.html(c).fadeIn("slow")}else{alert("REST request failed: "+c)}}},jsonRequest:function(d,e,f,g,c){if(f){f=JSON.stringify(f)}b(".page-error").fadeOut("fast");if(!c){c=AppLinks.failure}return jQuery.ajax({url:d,type:e,data:f,dataType:"json",contentType:"application/json; charset=utf-8",cache:false,success:g,error:c})},xmlRequest:function(d,e,f,g,c){if(f){f=JSON.stringify(f)}b(".page-error").fadeOut("fast");if(!c){c=AppLinks.failure}return jQuery.ajax({url:d,type:e,data:f,dataType:"xml",contentType:"application/xml; charset=utf-8",cache:false,success:g,error:c})},parseError:function(f){var c;try{c=JSON.parse(f.responseText)}catch(d){if(f.statusText){return c=f.statusText}else{return f}}if(c.message){if(b.isArray(c.message)){return c.message.join(" ")}return c.message}else{return f.statusText}},put:function(d,e,f,c){return AppLinks.jsonRequest(d,"PUT",e,f,c)},post:function(d,e,f,c){return AppLinks.jsonRequest(d,"POST",e,f,c)},update:function(d,e,c){AppLinks.put(AppLinks.self_link(d),d,e,c)},get:function(d,e,c){return AppLinks.jsonRequest(d,"GET",null,e,c)},getXml:function(d,e,c){return AppLinks.xmlRequest(d,"GET",null,e,c)},self_link:function(e){for(var c=0,f=e.link.length;c<f;c++){var d=e.link[c];if(d.rel=="self"){return d.href}}throw"No self-link found"},del:function(f,e,d){var c;if(typeof(f)=="string"){c=f}else{c=AppLinks.self_link(f)}return AppLinks.jsonRequest(c,"DELETE",null,e,d)},SPI:b.extend({},{API_VERSION:"1.0",REST_RESOURCE_URL:AJS.contextPath()+"/rest/applinks/",BASE_URL:AJS.contextPath()+"/rest/applinks/1.0",setApiVersion:function(c){AppLinks.SPI.API_VERSION=c;AppLinks.SPI.setBaseUrl(AppLinks.SPI.REST_RESOURCE_URL+AppLinks.SPI.API_VERSION)},setBaseUrl:function(c){AppLinks.SPI.BASE_URL=c},getRemoteRestBaseUrl:function(c){return c+"/rest/applinks/"+AppLinks.SPI.API_VERSION},getRemotePluginServletBaseUrl:function(c){return c+"/plugins/servlet"},getAllLinks:function(e,d){var c=AppLinks.SPI.BASE_URL+"/applicationlink";return AppLinks.get(c,e,d)},getAllLinksWithAuthInfo:function(e,d){var c=AppLinks.SPI.BASE_URL+"/listApplicationlinks";return AppLinks.get(c,e,d)},getLinksOfType:function(e,f,d){var c=AppLinks.SPI.BASE_URL+"/applicationlink/type/"+e;return AppLinks.get(c,f,d)},tryToFetchManifest:function(e,f,d){var c=AppLinks.SPI.BASE_URL+"/applicationlinkForm/manifest.json?url="+encodeURIComponent(e);return AppLinks.get(c,f,d)},getManifestFor:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/manifest/"+f+".json";return AppLinks.get(c,e,d)},getLocalManifest:function(e,d){var c=AppLinks.SPI.BASE_URL+"/manifest.json";return AppLinks.get(c,e,d)},getRemoteManifest:function(e,f,d){var c=AppLinks.SPI.getRemoteRestBaseUrl(e)+"/manifest.json";return AppLinks.get(c,f,d)},getRemoteOAuthConsumerInfo:function(e,f,d){var c=AppLinks.SPI.getRemotePluginServletBaseUrl(e)+"/oauth/consumer-info";return AppLinks.getXml(c,f,d)},createStaticUrlAppLink:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createStaticUrlAppLink?typeId="+f;return AppLinks.post(c,null,e,d)},createLink:function(j,h,l,d,i,k,f,m,e){var c=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createAppLink";var g={applicationLink:j,username:h,password:l,createTwoWayLink:d,customRpcURL:i,rpcUrl:k,configFormValues:f};return AppLinks.post(c,g,m,e)},createLinkWithOrphanedTrust:function(j,h,m,d,i,k,f,l,n,e){var c=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createAppLink";var g={applicationLink:j,username:h,password:m,createTwoWayLink:d,customRpcURL:i,rpcUrl:k,configFormValues:f,orphanedTrust:l};return AppLinks.post(c,g,n,e)},verifyTwoWayLinkDetails:function(c,i,j,f,h,e){var d=AppLinks.SPI.BASE_URL+"/applicationlinkForm/details";var g={username:j,password:f,remoteUrl:c,rpcUrl:i};return AppLinks.post(d,g,h,e)},getApplicationLinkInfo:function(e,f,d){var c=AppLinks.SPI.BASE_URL+"/applicationlinkInfo/id/"+e;return AppLinks.get(c,f,d)},deleteLink:function(g,c,f,e){var d=AppLinks.SPI.BASE_URL+"/applicationlink/"+g.id;if(c){d+="?reciprocate=true"}return AppLinks.del(d,f,e)},makePrimary:function(e,d){var c=AppLinks.SPI.BASE_URL+"/applicationlink/primary/"+e.id;return AppLinks.post(c,null,d)},relocate:function(h,f,c,g,e){var d=AppLinks.SPI.BASE_URL+"/relocateApplicationlink/"+h.id+"?newUrl="+encodeURIComponent(f)+"&nowarning="+(c?"true":"false");return AppLinks.post(d,null,g,e)},legacyUpgrade:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/upgrade/legacy/"+f.id;return AppLinks.post(c,null,e,d)},ualUpgrade:function(g,c,f,e){var d=AppLinks.SPI.BASE_URL+"/upgrade/ual/"+g.id;return AppLinks.post(d,c,f,e)},getEntityTypesForApplicationType:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/type/entity/"+f;return AppLinks.get(c,e,d)},getLocalEntitiesWithLinksToApplication:function(c,f,e){var d=AppLinks.SPI.BASE_URL+"/entitylink/localEntitiesWithLinksTo/"+c+".json";return AppLinks.get(d,f,e)},getEntityLinksForApplication:function(c,f,e){var d=AppLinks.SPI.BASE_URL+"/entities/"+c+".json";AppLinks.get(d,f,e)},getEntityLinksForApplicationUsingAnonymousAccess:function(c,f,e){var d=AppLinks.SPI.BASE_URL+"/entities/anonymous/"+c+".json";return AppLinks.get(d,f,e)},createNonUalEntityLink:function(l,g,d,f,j,e,k,i){var c=AppLinks.SPI.BASE_URL+"/entitylink/"+l+"/"+g+"?reciprocate=false";var h={applicationId:d,typeId:f,key:j,name:e,isPrimary:false};return AppLinks.put(c,h,k,i)},createEntityLink:function(h,g,d,c,i,f){var e=AppLinks.SPI.BASE_URL+"/entitylink/"+h+"/"+g+"?reciprocate=";e+=(c?"true":"false");return AppLinks.put(e,d,i,f)},getConfiguredEntityLinks:function(f,e,g,d){var c=AppLinks.SPI.BASE_URL+"/entitylink/primaryLinks/"+f+"/"+e+".json";return AppLinks.get(c,g,d)},deleteEntityLink:function(h,g,d,c,i,f){var e=AppLinks.SPI.BASE_URL+"/entitylink/"+h+"/"+g+"?typeId="+d.typeId+"&key="+d.key+"&applicationId="+d.applicationId+"&reciprocate="+c;return AppLinks.del(e,i,f)},makePrimaryEntityLink:function(g,f,c,h,e){var d=AppLinks.SPI.BASE_URL+"/entitylink/primary/"+g+"/"+f+"?typeId="+c.typeId+"&key="+c.key+"&applicationId="+c.applicationId;return AppLinks.post(d,null,h,e)},canDeleteAppLink:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/permission/reciprocate-application-delete/"+f;return AppLinks.get(c,e,d)},canDeleteEntityLink:function(g,f,c,h,e){var d=AppLinks.SPI.BASE_URL+"/permission/reciprocate-entity-delete/"+c.applicationId+"/"+g+"/"+f+"/"+c.typeId+"/"+c.key;return AppLinks.get(d,h,e)},canCreateReciprocateEntityLink:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/permission/reciprocate-entity-create/"+f;return AppLinks.get(c,e,d)},processPermissionCode:function(d){var c={noPermission:function(){},missing:function(){},credentialsRequired:function(e){},authenticationFailed:function(e){},noAuthentication:function(e){},noAuthenticationConfigured:function(){},noConnection:function(){},allowed:function(){},unrecognisedCode:function(e){},updateView:function(g,f,e){}};if(!d){d={}}d=b.extend(c,d);return function(f){var e=f.code;if(e=="NO_PERMISSION"){d.noPermission()}else{if(e=="MISSING"){d.missing()}else{if(e=="CREDENTIALS_REQUIRED"){d.credentialsRequired(f.url)}else{if(e=="AUTHENTICATION_FAILED"){d.authenticationFailed(f.url)}else{if(e=="NO_AUTHENTICATION"){d.noAuthentication(f.url)}else{if(e=="NO_AUTHENTICATION_CONFIGURED"){d.noAuthenticationConfigured()}else{if(e=="NO_CONNECTION"){d.noConnection()}else{if(e=="ALLOWED"){d.allowed()}else{d.unrecognisedCode(f.code)}}}}}}}}}},addAuthenticationTrigger:function(e,c,d){if(!d){d={}}if(typeof d.onSuccess=="undefined"){d.onSuccess=function(){location.reload()}}if(typeof d.onFailure=="undefined"){d.onFailure=function(){return true}}b(e).unbind("click");b(e).click(function(){if(d.before){d.before()}AppLinks.authenticateRemoteCredentials(c,d.onSuccess,d.onFailure)})},deleteOrphanedTrust:function(g,e,f,d){var c=AppLinks.SPI.BASE_URL+"/orphaned-trust/"+e+"/"+g;return AppLinks.del(c,f,d)},getOrphanedTrust:function(e,d){var c=AppLinks.SPI.BASE_URL+"/orphaned-trust/";return AppLinks.get(c,e,d)},showCreateEntityLinkSuggestion:function(){return true},getApplicationLink:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/applicationlink/"+f;return AppLinks.get(c,e,d)},createApplicationLink:function(f,d,i,j,c,k,g){var e=AppLinks.SPI.BASE_URL+"/applicationlink";var h={id:f,name:d,rpcUrl:i,displayUrl:j,typeId:c};return AppLinks.put(e,h,k,g)},createConsumer:function(e,n,d,m,i,l,g,p,h,k,o,f){var c=AppLinks.SPI.BASE_URL+"/applicationlink/"+e+"/authentication/consumer";var j={key:n,name:d,description:m,sharedSecret:i,publicKey:l,outgoing:k,twoLOAllowed:g,executingTwoLOUser:p,twoLOImpersonationAllowed:h};return AppLinks.put(c,j,o,f)},createConsumerAutoConfigure:function(j,i,f,c,h,e){var d=AppLinks.SPI.BASE_URL+"/applicationlink/"+j+"/authentication/consumer?autoConfigure=true";var g={twoLOAllowed:i,executingTwoLOUser:f,twoLOImpersonationAllowed:c};return AppLinks.put(d,g,h,e)},registerProvider:function(i,h,e,g,d){var c=AppLinks.SPI.BASE_URL+"/applicationlink/"+i+"/authentication/provider";var f={config:e,provider:h};return AppLinks.put(c,f,g,d)}},(window.AppLinks&&window.AppLinks.SPI)||{})});var a="applinks";AppLinks.UI={showInfoBox:function(c){b(".aui-message.success").remove();AppLinks.UI.createMessage("success",c,"page-info")},hideInfoBox:function(){b(".aui-message.success").remove()},showErrorBox:function(c){AppLinks.UI.createMessage("error",c,"page-error")},hideErrorBox:function(){b(".aui-message.error").remove()},showWarningBox:function(d){if(b.isArray(d)&&d.length>0){var c=b("<ul></ul>");b(d).each(function(f){c.append(b("<li/>",{text:d[f]}))});var e=b('<div class="page-warning"></div>').append(c);AppLinks.UI.createMessage("warning",e.html(),"page-warning")}else{AppLinks.UI.createMessage("warning",d,"page-warning")}},hideWarningBox:function(){b(".aui-message.warning").remove()},shortenString:function(d,c){if(d.length>c){d=d.substring(0,c)+"..."}return d},createMessage:function(d,e,c){var f=b('<div class="'+c+'">');f.html(e);AJS.messages[d](".applinks-message-bar",{title:"",body:f.wrap("<div></div>").parent().html(),closeable:true})},displayValidationErrorMessages:function(c,f,e){if(b.isArray(e)){b(e).each(function(j,h){var k=b('<div class="error applinks-error">');k.text(h);b(f).find("."+c).append(k)})}else{if(typeof e!="undefined"){var g=b('<div class="error applinks-error">');g.text(e.toString());b(f).find("."+c).append(g)}}},displayValidationError:function(c,d,e){return function(j){if(j.status==401){window.location.reload();return}b(".applinks-error").remove();b(".loading").remove();var h=j.responseText;var i=b.parseJSON(h);var g=i.message;if(typeof i.fields=="undefined"){AppLinks.UI.displayValidationErrorMessages(c,d,g)}else{var f=i.fields;b(f).each(function(k){var l=b('<div class="error applinks-error" id="'+f[k]+'-error">');l.text(g[k]);if(b(d).find("."+f[k]).length>0){l.insertAfter(b(d).find("."+f[k]))}else{l.insertAfter(b(d).find("."+c).append(l))}})}b(d).find("."+c).addClass("fully-populated-errors");if(e){e()}}},addProtocolToURL:function(c){var f=b.trim(c);var e=f.toLowerCase();var d=false;if(e.length>=7){if(e.substring(0,7).indexOf("http")!=-1){d=true}}if(!d){f="http://"+f}return f},prettyJoin:function(d,g,f){if(!f){f=AppLinks.I18n.getText("applinks.and")}var c=d.length;var e="";b.each(d,function(h,i){if(h==(c-1)&&c>1){e+=" "+f+"  "+g(i)}else{e+=g(i);if(h+2<c){e+=", "}}});return e},showLoadingIcon:function(c){b('<span class="loading">&nbsp;</span>').insertAfter(c)},hideLoadingIcon:function(c){b(c).next(".loading").remove()},findUrl:function(f){var e=undefined;var g=f.toLowerCase();var d=g.indexOf("http:");if(d==-1){d=g.indexOf("https:")}if(d>-1){var c=g.indexOf(" ",d);if(c==-1){c=g.length}e=f.substring(d,c)}return e},findApplicationType:function(c){c=c.toLowerCase();if(c.indexOf("jira")!=-1){return"jira"}else{if(c.indexOf("fisheye")!=-1){return"fecru"}else{if(c.indexOf("confluence")!=-1){return"confluence"}else{if(c.indexOf("refapp")!=-1){return"refapp"}else{return undefined}}}}},escapeSelector:function(c){return c.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g,"\\$1")},sanitiseHTML:function(c){var d={"<":"&lt;",'"':"&quot;","&":"&amp;"};return c.replace(/[<"&]/g,function(e){return d[e]})},refreshOrphanedTrust:function(){var c=function(d){b("tr.orphaned-trust-row").each(function(){var j=b(this);var k=j.attr("data-id");var g=j.attr("data-type");var f=false;for(var e=0;e<d.orphanedTrust.length;e++){var h=d.orphanedTrust[e];if(k==h.id&&g==h.type){f=true;break}}if(!f){j.remove();if(d.orphanedTrust.length==0){b(".orphaned-trust-warning").hide()}}})};AppLinks.SPI.getOrphanedTrust(c)},removeCssClass:function(c,d){b(c).removeClass(function(f,h){var g=h.split(" ");var e="";b.each(g,function(i,j){if(j.indexOf(d)!=-1){e=j}});return e})}};(function(){var c=b({});b.each(["bind","unbind","trigger"],function(d,e){AppLinks.UI[e]=function(){return c[e].apply(c,arguments)}})})();AppLinks.I18n={interpolate:function(d,c){if(c){if(!b.isArray(c)){c=[new String(c)]}c.unshift(d);d=AJS.format.apply(AJS,c)}return d},getTextWithPrefix:function(c,d){return AppLinks.I18n.interpolate(appLinksI18n.entries[a+"."+c],d)},getText:function(c,d){return AppLinks.I18n.interpolate(AppLinks.I18n.resolveValue(c),d)},getApplicationTypeName:function(c){return appLinksI18n.entries["applinks.application.type."+c]},getEntityTypeName:function(c){return appLinksI18n.entries["applinks.entity.type."+c]},getPluralizedEntityTypeName:function(c){return appLinksI18n.entries["applinks.entity.type.plural."+c]},getAuthenticationTypeName:function(c){return appLinksI18n.entries["applinks.auth.provider."+c]},resolveValue:function(c){var d=appLinksI18n.entries[c];return typeof d=="undefined"?c:d}};AppLinks.Docs={createDocLink:function(d,e,c){if(!c){c=""}else{c=" "+c}return b("<a/>",{"class":"ual-help-link"+c,href:AppLinks.Docs.getDocHref(d,e),target:"_blank",text:AppLinks.I18n.getText("applinks.help"),title:AppLinks.I18n.getText("applinks.help")})},getDocHref:function(d,e){var c=AppLinks.Docs.resolveValue("applinks.docs.root")+"/"+AppLinks.Docs.resolveValue(d);if(e){c+="#"+AppLinks.Docs.resolveValue(e)}return c},resolveValue:function(c){var d=applinksDocs.entries[c];return typeof d=="undefined"?c:d}};b(document).trigger(AppLinks.Event.PREREADY);b(document).trigger(AppLinks.Event.READY)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/common/json2.js' */
if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/component/autocomplete.js' */
AJS.$(document).bind(AppLinks.Event.READY,function(){AppLinks.autoComplete={cacheManager:function(c){var a={},b=[],c=c||30;return{get:function(d){return a[d]},put:function(d,e){a[d]=e;b.push(d);if(b.length>c){delete a[b.shift()]}},clear:function(){a={};b=[]}}}};(function(d){var c=function(f){AJS.log("InputDrivenDropDown: truncating text");var h=f.$.closest(".aui-dropdown").width(),g=20;d("a span:not(.icon)",f.$).each(function(){var j=d(this),i=AJS("var","&#8230;"),l=i.width(),k=false;j.wrapInner(d("<em>"));d("em",j).each(function(){var m=d(this);m.show();if(this.offsetLeft+this.offsetWidth>h){var t=this.childNodes,s=false;for(var o=t.length-1;o>=0;o--){var p=t[o],n=1,r=(p.nodeType==3)?"nodeValue":"innerHTML",q=p[r];do{if(n<=q.length){p[r]=q.substr(0,q.length-n++)}else{break}}while(this.offsetLeft+this.offsetWidth+l>h-g);if(n<=q.length){s=true;break}}if(s){k=true}else{m.hide()}}});if(k){j.append(i);this.elpss=i}})};var b=function(f,l){if(!l.length||!l[0]){return}AJS.log("InputDrivenDropDown: highlighting tokens");for(var h=0,j=l.length;h<j;h++){var g=l[h];l[h]=g?g.replace(/[\.\*\+\?\|\(\)\[\]{}\\]/g,"\\$"):""}var k=new RegExp("("+l.join("|")+")","gi");d("li a:not(.dropdown-prevent-highlight) span",f.$).each(function(){var m=d(this),i=m.html().replace(k,"<strong>$1</strong>");m.html(i)})};var e=function(j,g){var i=j.options,h=j.dd;if(h){h.hide();h.$.remove()}i.ajsDropDownOptions=i.ajsDropDownOptions||{};if(i.ajsDropDownOptions&&!i.ajsDropDownOptions.alignment){i.ajsDropDownOptions.alignment="left"}i.ajsDropDownOptions.selectionHandler=i.ajsDropDownOptions.selectionHandler||function(l,k){if(l.type!="click"){l.preventDefault();d("a",k).click();document.location=d("a",k).attr("href")}};i.ajsDropDownOptions.displayHandler=function(k){return AJS.escapeHtml(k.name)};var f=j.dd=new AJS.dropDown(g.matrix,i.ajsDropDownOptions)[0];if(i.ajsDropDownOptions&&i.ajsDropDownOptions.className){f.$.addClass(i.ajsDropDownOptions.className)}if(i.dropdownPlacement){i.dropdownPlacement(f.$)}else{AJS.log("No dropdownPlacement function specified. Appending dropdown to the body.");d("body").append(f.$)}b(f,g.queryTokens||[g.query]);c(f);if(i.dropdownPostprocess){i.dropdownPostprocess(f.$)}f.show(j._effect);if(typeof i.onShow=="function"){i.onShow.call(f,f.$)}return f};function a(g,f){this._effect="appear";this._timer=null;this.id=g;this.options=f;this.inactive=false;this.busy=false;this.cacheManager=AppLinks.autoComplete.cacheManager()}a.prototype.clearCache=function(){this.cacheManager.clear()};a.prototype.change=function(h,g){var f=this;if(h!=f._value||g){f._value=h;f.busy=false;clearTimeout(f._timer);if(g||(/\S{0,}/).test(h)){var i=f.cacheManager.get(h);if(i){e(f,i)}else{f.busy=true;f._timer=setTimeout(function(){f.options.getDataAndRunCallback.call(f,h,f.show)},200)}}else{f.dd&&f.dd.hide()}}};a.prototype.dropDownLength=function(){return this.dd.links?this.dd.links.length:0};a.prototype.dropDownItem=function(f){return this.dropDownLength()>f?this.dd.links[f]:null};a.prototype.hide=function(){this.dd&&this.dd.hide()};a.prototype.remove=function(){var f=this.dd;if(f){this.hide();f.$.remove()}this.inactive=true;this.options.onDeath&&this.options.onDeath()};a.prototype.show=function(g,i,h){if(this.inactive){AJS.log("Quick search abandoned before server response received, ignoring. "+this);return}var f={matrix:g,query:i,queryTokens:h};this.cacheManager.put(i,f);e(this,f);this.busy=false};AppLinks.inputDrivenDropdown=function(f){return new a("inputdriven-dropdown",f)}})(jQuery)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/component/wizard.js' */
AJS.$(document).bind(AppLinks.Event.PREREADY,function(){(function(d){d.fn.wizard=function(v){var u={width:500,height:350,onshow:function(w,x){return true},aftershow:function(){return true},oncancel:function(){return true},onsubmit:function(){return true},aftersubmit:function(){return true},onnext:function(){return true},onprevious:function(){return true},cancelLabel:AppLinks.I18n.getText("applinks.cancel"),submitLabel:AppLinks.I18n.getText("applinks.create"),nextLabel:AppLinks.I18n.getText("applinks.next"),previousLabel:AppLinks.I18n.getText("applinks.previous"),id:""};if(!v){v={}}v=d.extend(u,v);var t=this;this.each(function(){var D=d(this);var w=new AJS.Dialog(v.width,v.height,v.id);var L=q(w,v.onshow,v.aftershow);var K=c(w,v.oncancel);var z=h(w,v.onsubmit,v.aftersubmit);var M=a(w,v.onprevious);var I=m(w,v.onnext);var G=k(w);var B=o(w);var C=g(w);var H=l(w);var J=s(w);var E=n(w);if(v.showButtonId){d("#"+v.showButtonId).click(L)}var y=f(D);for(var A=0;A<y.length;A++){var F=y[A];j(w,F);if(F.className){w.addHeader(F.title,F.className+"-header")}else{w.addHeader(F.title)}if(A!=0&&d(F.div).attr("previous")!="false"){w.addButton(v.previousLabel,M,"applinks-previous-button")}if(A<y.length-1&&d(F.div).attr("submit")!="true"&&d(F.div).attr("next")!="false"){w.addButton(v.nextLabel,I,"applinks-next-button")}if(d(F.div).attr("submit")=="true"){w.addButton(v.submitLabel,z,"wizard-submit")}if(!w.getPage(A).buttonpanel){w.addButton("",null);d(w.getPage(A).buttonpanel).empty();var x=d('<a class="button-panel-button applinks-cancel-link">'+v.cancelLabel+"</a>");w.getPage(A).buttonpanel.append(x);x.click(K)}else{var x=d('<a class="button-panel-link button-panel-cancel-link applinks-cancel-link">'+v.cancelLabel+"</a>");d(w.getPage(A).buttonpanel).append(x);x.click(K)}if(A<y.length-1){w.addPage()}}t={dialog:w,nextPage:I,prevPage:M,submit:z,cancel:K,show:L,disableNextBtn:G,enableNextBtn:B,disableSubmitBtn:C,enableSubmitBtn:H,disablePreviousBtn:J,enablePreviousBtn:E};w.gotoPage(0);w.gotoPanel(0)});return t};function s(t){return function(){b(r(t,"applinks-previous-button"))}}function n(t){return function(){i(r(t,"applinks-previous-button"))}}function k(t){return function(){b(r(t,"applinks-next-button"))}}function o(t){return function(){i(r(t,"applinks-next-button"))}}function g(t){return function(v){var u=r(t,"wizard-submit");b(u);if(typeof(v)=="undefined"||v){d('<span class="loading">&nbsp;</span>').insertBefore(u)}else{u.parent().find(".loading").remove()}}}function l(t){return function(){var u=r(t,"wizard-submit");i(u);u.parent().find(".loading").remove()}}function r(u,t){return d(u.getPage(u.curpage).buttonpanel).find("."+t)}function p(t){d(t.popup.element).find("form").each(function(){this.reset()})}function i(t){t.attr("disabled",false)}function b(t){t.attr("disabled",true)}function q(t,u,v){return function(w){if(u(t,w)!==false){t.gotoPage(0);t.gotoPanel(0);d(document).unbind("keydown.ual.dialog");d(document).bind("keydown.ual.dialog",e(t));t.show();v()}}}function c(t,u){return function(){if(u(t)!==false){t.hide();p(t)}}}function a(t,u){return function(){if(u(t)!==false){t.prevPage()}}}function m(t,u){return function(){if(u(t)!==false){t.nextPage()}}}function e(t){return function(u){if(u.keyCode===27){p(t);d(document).unbind("keydown.ual.dialog")}}}function h(u,v,t){return function(){if(v(u)!==false){t(u);p(u)}}}function j(v,w){var u=d("> div[panel]",w.div);if(u.length>0){u.each(function(y,z){var x=v.addPanel(z.title,null,z.className,"menu-"+z.id);x.getCurrentPanel().body.append(u[y])})}else{var t=v.addPanel(w.title);t.getCurrentPanel().body.append(w.div)}}function f(v){var u=d(" > div",v);var t=[];u.each(function(x){var w=d(this);t[x]={title:w.attr("title")||null,className:w.attr("class"),div:w}});return t}})(jQuery)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/feature/applinks-wizard/applinkwizard.js' */
(function(a){AppLinks.Wizard={getWizard:function(){return a("#create-application-link-container").data("wizard")},initAuthenticationUI:function(d){var h=a(d);var f=h.find(".create-reciprocal-link");var c=h.find(".ual-arrow");var l=h.find(".two-way-link-details");var j=h.find(".reciprocal-link-description");var b=h.find(".no-reciprocal-link-description");f.click(function(){if(f.is(":checked")){c.removeClass("no-background");l.show();j.show();b.hide()}else{c.addClass("no-background");l.hide();j.hide();b.show()}});var i=h.find(".same-user-radio-btn");var k=h.find(".different-user-radio-btn");var e=h.find(".different-userbase-image");var g=h.find(".same-userbase-image");i.click(function(){e.addClass("different-userbase-image-grey");g.removeClass("same-userbase-image-grey")});k.click(function(){g.addClass("same-userbase-image-grey");e.removeClass("different-userbase-image-grey")})},initNonUALUI:function(e){var c=a(e);var b=c.find(".application-types");for(var d=0;d<nonAppLinksApplicationTypes.length;d++){a('<option value="'+nonAppLinksApplicationTypes[d].typeId+'">'+nonAppLinksApplicationTypes[d].label+"</option>").appendTo(b)}},fetchManifest:function(e,h,d,b){var i=h.find("#application-url");if(i.val()==""){var c=h.find("#application-types");if(c.val()==""){a('<div class="error applinks-error">'+AppLinks.I18n.getText("applinks.error.url.field.empty")+"</div>").insertAfter(i);return false}var g=function(j){e.enableSubmitBtn();e.enablePreviousBtn();e.cancel();AppLinks.UI.listApplicationLinks(j.applicationLink.id,"new",j)};AppLinks.SPI.createStaticUrlAppLink(c.val(),g,null);return true}var f=AppLinks.UI.addProtocolToURL(i.val());AppLinks.UI.showLoadingIcon(i);var g=function(l){var k=l;e.enableNextBtn();h.find(".loading").remove();h.find(".reciprocal-rpc-url").val(a("#baseUrl").val());if(typeof l.typeId!="undefined"){AppLinks.Wizard.handleUALManifest(k,h);e.dialog.gotoPage(2);h.find(".reciprocal-link-username").focus();if(d){d(k)}}else{if(l.code=="applinks.warning.redirected.host"&&!i.data("hasWarnedAboutRedirection")){AppLinks.UI.displayValidationErrorMessages("manifest-validation-errors",h,l.warning);i.data("hasWarnedAboutRedirection","true");var m=function(){a(i).removeData("hasWarnedAboutRedirection");a(i).unbind("change",m)};i.bind("change",m)}else{if(l.code=="applinks.warning.unknown.host"&&!i.data("forceWhenHostIsOffline")){AppLinks.UI.displayValidationErrorMessages("manifest-validation-errors",h,l.warning);i.data("forceWhenHostIsOffline","true");var j=function(){a(i).removeData("forceWhenHostIsOffline");a(i).unbind("change",j)};i.bind("change",j)}else{if(k.code=="applinks.warning.unknown.host"||k.code=="applinks.warning.redirected.host"){delete k.warning;delete k.code}AppLinks.Wizard.handleNonUALManifest(k,f,h);e.dialog.gotoPage(1);h.find(".application-name").focus();if(b){b(k)}}}}};e.disableNextBtn();AppLinks.SPI.tryToFetchManifest(f,g,AppLinks.UI.displayValidationError("manifest-validation-errors",h,function(){e.enableNextBtn()}));return f},handleUALManifest:function(f,e){var c=a(e);c.find(".remote-app-image").removeClass(function(j,l){var k=l.split(" ");var i="";a.each(k,function(m,n){if(n.indexOf("application-type-image-")!=-1){i=n}});return i});c.find(".remote-app-image").addClass("application-type-image-"+f.typeId);c.find(".link-to-app-type").html(AppLinks.I18n.getText("applinks.create.title.link.to",AppLinks.I18n.getApplicationTypeName(f.typeId)));c.find(".remote-app-name").text(AppLinks.UI.shortenString(f.name,20));c.find(".create-reciprocal-link").attr("checked",true);c.find("#reciprocal-link-back-to-server").html(AppLinks.I18n.getText("applinks.create.link.back.to.server",AJS.escapeHtml(f.name)));var d=["administrator",AJS.escapeHtml(f.name),'<a target="_blank" href="'+AppLinks.Docs.getDocHref("applinks.docs.adding.application.link")+'">',"</a>"];var h=f.applinksVersion.split(".");var b=parseInt(h[0]);var g=parseInt(h[1]);if((f.typeId=="jira"||f.typeId=="confluence")&&(b==3&&g<10)){d[0]="system administrator"}c.find(".reciprocal-link-description").html(AppLinks.I18n.getText("applinks.create.two.way.link",d));c.find(".no-reciprocal-link-description").hide();c.find(".no-reciprocal-link-description").html(AppLinks.I18n.getText("applinks.create.two.way.no.link",AJS.escapeHtml(f.name)));c.find(".reciprocal-link-username").val("");c.find(".reciprocal-link-password").val("");c.find(".ual-arrow").removeClass("no-background");c.find(".two-way-link-details").show();c.find(".reciprocal-link-description").show();c.find(".no-reciprocal-link-description").hide()},handleNonUALManifest:function(d,e,c){var b=a(c);b.find(".application-name").val("");b.find(".application-types option:first-child").attr("selected","selected");b.find(".non-ual-application-url").text(e);if(d.warning){b.find(".create-non-ual-warning").show();b.find(".create-non-ual-warning").html(d.warning)}else{b.find(".create-non-ual-warning").hide()}},checkReciprocalLinkFormThreeStepMode:function(c,d,g,j,f){var h=a(c);if(h.find(".create-reciprocal-link").is(":checked")){var k=a.trim(h.find(".reciprocal-rpc-url").val());if(k==""){a("<div class='error applinks-error'>"+AppLinks.I18n.getText("applinks.error.url.field.empty")+"</div>").insertAfter(h.find(".reciprocal-rpc-url"));if(f){f()}return}var e=h.find(".reciprocal-link-username");var b=h.find(".reciprocal-link-password");if(e.val()==""){a('<div class="error applinks-error">'+AppLinks.I18n.getText("applinks.error.username.empty")+"</div>").insertAfter(e);if(f){f()}return false}var i=function(l){h.find(".same-user-description").find("input").attr("checked",true);h.find(".trust-radio-btn").attr("checked",true);h.find(".same-user-radio-btn").click();g(l)};k=AppLinks.UI.addProtocolToURL(k);AppLinks.SPI.verifyTwoWayLinkDetails(j,k,e.val(),b.val(),i,AppLinks.UI.displayValidationError("two-way-link-errors",c,f));return false}else{d();return false}},checkReciprocalLinkFormTwoStepMode:function(f,h,b,i){var c=a(f);var g=a.trim(c.find(".reciprocal-rpc-url").val());if(g==""){a("<div class='error applinks-error'>"+AppLinks.I18n.getText("applinks.error.url.field.empty")+"</div>").insertAfter(c.find(".reciprocal-rpc-url"));if(i){i()}return}var d=c.find(".reciprocal-link-username");var e=c.find(".reciprocal-link-password");if(d.val()==""){a('<div class="error applinks-error">'+AppLinks.I18n.getText("applinks.error.username.empty")+"</div>").insertAfter(d);if(i){i()}return false}g=AppLinks.UI.addProtocolToURL(g);AppLinks.SPI.verifyTwoWayLinkDetails(h,g,d.val(),e.val(),b,AppLinks.UI.displayValidationError("two-way-link-errors",f,i));return false}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/common/urls.js' */
(function(){AppLinks.Urls={generateUrl:function(b,a){var c=b;if(typeof a=="undefined"){return c}else{AJS.$.each(a,function(d,e){if(c.indexOf("?")<0){c=c+"?"}else{c=c+"&"}c=c+d+"="+encodeURIComponent(JSON.stringify(e))});return c}},generateApplinksAdminUrl:function(d,c,a){var b=d+"/plugins/servlet/applinks/listApplicationLinks";if(c==="confluence"){b=d+"/admin/listapplicationlinks.action"}return AppLinks.Urls.generateUrl(b,a)}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-oauth-ui', location = 'js/oauth-dialog.js' */
AJS.$(document).bind(AppLinks.Event.READY,function(){(function(a){AppLinks.OAuthCallback=function(){};AppLinks.OAuthCallback.prototype.success=function(){this.aouthWindow.close();this.onSuccess()};AppLinks.OAuthCallback.prototype.failure=function(){this.aouthWindow.close();this.onFailure()};AppLinks.OAuthCallback.prototype.show=function(b,d,c){this.onSuccess=d;this.onFailure=c;this.aouthWindow=window.open(b,"com_atlassian_applinks_authentication")};oauthCallback=new AppLinks.OAuthCallback();AppLinks.authenticateRemoteCredentials=function(b,d,c){a(".applinks-error").remove();oauthCallback.show(b,d,c)}})(AJS.$)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/doctheme-utils.js' */
Confluence.DocThemeUtils=Confluence.DocThemeUtils||(function(f){var e;function c(){return(a().length)?true:false}function a(){if(!e){e=f("#splitter-content")}return e}function g(i){var h=f(i);f(i).appendTo(c()?a():f("body"));return h}function b(){return c()?a().scrollTop():f(document).scrollTop()}function d(){return c()?a().scrollLeft():f(document).scrollLeft()}return{isDocTheme:c,appendAbsolutePositionedElement:g,getMainContentScrollTop:b,getMainContentScrollLeft:d,getDocThemeContentElement:a}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/scrolling-inline-dialog.js' */
Confluence.ScrollingInlineDialog=function(a,d,c,b){var g=Confluence.DocThemeUtils.getDocThemeContentElement();var e=Confluence.DocThemeUtils.isDocTheme();b=b||{};if(!b.container&&e){b.container=g}var f=function(k,s,J,z){var v;var L="auto";var G;var p=-7;var q;var w;var u=e?g.width():AJS.$(window).width();var K=s.target.position();K.top+=e?g.scrollTop():0;K.left+=e?g.scrollLeft():0;var i=s.target.outerWidth();var m=K.left+i/2;var C=e?g.scrollTop()+AJS.$(window).height()-AJS.$("#footer").outerHeight():(window.pageYOffset||document.documentElement.scrollTop)+AJS.$(window).height();var n=10;var o=20;G=K.top+s.target.outerHeight()+z.offsetY;var H=k.find(".arrow").outerWidth();var j=k.outerWidth();var D=s.target.outerWidth();if(z.centerOnHighlight){if(j>D){v=K.left-(j-D)/2;q=m-v-H/2}else{v=K.left+z.offsetX;q=(j-H)/2}}else{v=K.left+z.offsetX;if(j>D){q=m-v-H/2}else{q=(j-H)/2}}q=(q<0)?0:q;var h=(e)?(K.top-g.scrollTop()):(K.top-(window.pageYOffset||document.documentElement.scrollTop));var A=z.maxHeight||0;var t=k.height();var r=h>Math.max(t,A);var l=(G+k.height())<C;w=(!l&&r)||z.onTop;z.onTop=w;var y=u-(v+j+n);if(w){G=K.top-t-8;p=t}if(w===false&&l===false){var x=(G+t)-C;var E=e?g.scrollTop()+x+AJS.$("#footer").outerHeight():(window.pageYOffset||document.documentElement.scrollTop)+x+o;var F=e?g:AJS.$("html, body");F.stop().animate({scrollTop:E},500)}if(z.isRelativeToMouse){if(y<0){L=n;v="auto";q=J.x-(AJS.$(window).width()-z.width)}else{v=J.x-20;q=J.x-v}}else{if(y<0){L=n;v="auto";var I=u-L;var B=I-j;q=m-B-H/2}}return{displayAbove:w,popupCss:{left:v,right:L,top:G},arrowCss:{position:"absolute",left:q,right:"auto",top:p}}};if(!b.calculatePositions){b.calculatePositions=f}return AJS.InlineDialog.call(this,a,d,c,b)};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/highlight-panel.js' */
Confluence.HighlightAction=(function(f){var d={};var c;var b={MAINCONTENT_AND_COMMENT:function(o){return Confluence.HighlightAction.RangeHelper.isSelectionInsideContent(f(".wiki-content"),o)},MAINCONTENT_ONLY:function(o){c=c||f(".wiki-content").first();return Confluence.HighlightAction.RangeHelper.isSelectionInsideContent(c,o)},COMMENT_ONLY:function(o){return Confluence.HighlightAction.RangeHelper.isSelectionInsideContent(f(".comment-content"),o)}};function a(p,q){var o={onClick:function(){},shouldDisplay:b.MAINCONTENT_AND_COMMENT};d[p]=f.extend(o,q)}function l(o){var p=d[o];if(!p){p=function(){AJS.logError("The button with key "+o+" doesn't have a registered handler")}}return p}function e(p){var o=Confluence.getContextPath()+"/rest/highlighting/1.0/insert-storage-fragment";return f.ajax({type:"POST",contentType:"application/json",url:o,data:JSON.stringify(p)})}function g(o){var p=Confluence.getContextPath()+"/rest/highlighting/1.0/insert-storage-column-table";return f.ajax({type:"POST",contentType:"application/json",url:p,data:JSON.stringify(o)})}function k(q,p,r){var o=i(r);o.tableColumnIndex=p;o.cellModifications=q;return o}function h(o,q){var p=i(q);p.xmlModification=o[0].xmlInsertion;return p}function j(o,q){var p=i(q);p.xmlModification=o;return p}function m(){if(window.getSelection){window.getSelection().empty&&window.getSelection().empty();window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges()}else{window.document.selection&&window.document.selection.empty()}}function i(p){var o={};o.pageId=p.pageId;o.selectedText=p.selectedText;o.index=p.index;o.numMatches=p.numMatches;o.lastFetchTime=n();return o}function n(){return f("meta[name='confluence-request-time']").attr("content")}return{registerButtonHandler:a,getButtonHandler:l,insertContentAtSelectionEnd:e,insertContentsInTableColumnCells:g,createTableInsertionBean:k,createInsertionBean:h,createXMLModificationBean:j,clearTextSelection:m,WORKING_AREA:b}})(AJS.$);Confluence.HighlightAction.RangeHelper=(function(h){function j(p){return{area:c(p),text:k(p),html:n(p),containingElement:d(p),range:p}}function c(q){var r=Confluence.DocThemeUtils.getMainContentScrollTop();var s=Confluence.DocThemeUtils.getMainContentScrollLeft();var w=q.getClientRects();if(!w.length&&q.parentElement()){var x=h(q.parentElement());var p=x.offset();w=[{top:p.top-((Confluence.DocThemeUtils.isDocTheme())?0:r),left:p.left-((Confluence.DocThemeUtils.isDocTheme())?0:s),bottom:p.top+x.height(),right:p.left+x.width()}]}var z=g(q,w);var u=function(E,D){var C={};C.top=E.top;C.left=E.left+s;C.bottom=D.bottom;if(E.left>=D.right){C.right=E.right}else{C.right=D.right}C.right=C.right+s;C.top=C.top+r;C.bottom=C.bottom+r;C.width=C.right-C.left;C.height=C.bottom-C.top;return C};var t=function(D){var C={};C.width=D.right-D.left;C.height=D.bottom-D.top;C.left=D.left+s;C.right=D.right+s;C.top=D.top+r;C.bottom=D.bottom+r;return C};var B=function(C){if(Confluence.DocThemeUtils.isDocTheme()){var D=Confluence.DocThemeUtils.getDocThemeContentElement().offset();C.left=C.left-D.left;C.right=C.right-D.left;C.top=C.top-D.top;C.bottom=C.bottom-D.top}return C};var A=B(u(z.first,z.last));var v=B(t(z.first));if(Confluence.HighlightAction.debug){var y=h("<div>").attr("id","highlight-actions-debug-helper");Confluence.DocThemeUtils.appendAbsolutePositionedElement(y).css(h.extend({position:"absolute",outline:"1px solid red"},A))}return{first:v,average:A}}function k(q){var p=(q.text!=undefined)?q.text:q.toString();return i(p)}function n(p){return(p.cloneContents)?h("<div>").append(p.cloneContents()).html():p.htmlText}function d(q){if(q.commonAncestorContainer){var p=q.commonAncestorContainer;if(p.nodeType==3){return p.parentNode}return p}else{if(q.parentElement){return q.parentElement()}}}function g(r,q){var p={};p.first=q[0];p.last=q[q.length-1];if(r.endOffset!=="undefined"){if(r.endOffset==0&&q.length>1){p.last=q[q.length-2]}}return p}function e(){if(window.getSelection&&window.getSelection().isCollapsed){return false}if(document.selection&&(document.selection.type=="None"||document.selection.createRange().htmlText=="")){return false}var s;if(window.getSelection){var p=window.getSelection();s=p.getRangeAt(p.rangeCount-1)}else{if(document.selection){s=document.selection.createRange()}}if(/^\s*$/.test(k(s))){var q=n(s);if(!q){return false}var r=q.toLowerCase().indexOf("<img ")!=-1;if(!r){return false}}if(!m(h(".wiki-content"),s)){return false}return s}function m(p,s){var q=d(s);var r=function(){var t=false;h.each(p,function(u,v){if(v===q||h.contains(v,q)){t=true;return false}});return t};return r()}function b(r,q){var p=k(o(r,q));var t=h.trim(k(q));var s=a(t,r);p=p.replace(/\s*$/,"");return{pageId:AJS.Meta.get("page-id"),selectedText:t,index:h.inArray(p.length-t.length,s),numMatches:s.length}}function f(p){if(document.createRange){return p.text()}else{range=document.body.createTextRange();range.moveToElementText(p.get(0));return range.text}}function o(r,q){var p;if(document.createRange){p=document.createRange();p.setStart(r.get(0),0);p.setEnd(q.endContainer,q.originalEndOffset)}else{p=document.body.createTextRange();p.moveToElementText(r.get(0));p.setEndPoint("EndToEnd",q)}return p}function a(u,s){var q=f(s);q=l(u,s.clone(),q);q=i(q);var t=0;var r=-1;var p=[];while((r=q.indexOf(u,t))>-1){p.push(r);t=r+1}return p}function l(u,t,r){var s=t.find('.user-mention, a[href^="/"]');t.find('.conf-macro[data-hasbody="false"]').each(function(){if(h(this).text().indexOf(u)>-1){s=s.add(this)}});if(s.length>0){var p=u.replace(/\S/g," ");var q=new RegExp(u.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"g");s.each(function(){var v=h(this).text();h(this).text(v.replace(q,p))});return f(t)}return r}function i(p){return p.replace(/\u00a0/g,"\u0020")}return{getRangeOption:j,getUserSelectionRange:e,getSelectionRects:c,getSelectionText:k,getSelectionHTML:n,getContainingElement:d,getFirstAndLastSelectionRect:g,isSelectionInsideContent:m,computeSearchTextObject:b}})(AJS.$);AJS.toInit(function(f){var i=f(".wiki-content").first();var g={ELEMENT_NODE:1,TEXT_NODE:3};var k={IMAGE:"IMG"};var a=f("<div>").attr("id","action-dialog-target");var d;var j="selection-action-panel";var b;var e;function o(){var r=Confluence.getContextPath()+"/rest/highlighting/1.0/panel-items";var q=AJS.Meta.get("page-id");if(q!=undefined){r=r+"?pageId="+q}var s=f.get(r,function(t){if(t.length){m(t)}});h(s)}function m(v){var y=c();var q=29;var z=false;var B=v.length*q;var A=Confluence.HighlightPanel.Templates.panelContent({webItems:v});var x=false;var s=function(D,C,E){if(!x){D.append(A);D.find(".aui-button").tooltip({gravity:"s"});l(D.parent());D.find("button").click(function(H){var F=f(this).attr("data-key");var I=Confluence.HighlightAction.getButtonHandler(F);z=true;d.hide();var G=Confluence.HighlightAction.RangeHelper.getRangeOption(b);if(f.trim(G.text)!==""){G.searchText=Confluence.HighlightAction.RangeHelper.computeSearchTextObject(i,b)}I.onClick(G)})}E();x=true;return false};var w=function(C){var D=false;C.find("button").each(function(E){var G=f(this);var F=G.attr("data-key");var I=Confluence.HighlightAction.getButtonHandler(F);var H=I.shouldDisplay(b);G.css("display",H?"inline-block":"none");D=D||H});if(!D){d.hide()}else{C.find(".contents").width("auto")}};var r=function(){Confluence.HighlightAction.Analytics.sendAnalyticsForOpeningHighlightOptionPanel();w(this.popup);y.bindHideEvents();a.show()};var u=function(){y.unbindHideEvents();a.hide()};var t={centerOnHighlight:true,onTop:true,fadeTime:0,width:B,persistent:true,initCallback:r,hideCallback:u};d=Confluence.ScrollingInlineDialog(a,j,s,t)}function l(q){q.children().attr("unselectable","on").on("selectstart",false)}function h(s){var q;var r=0;var t=1000;f(document).on("mouseup",function(u){s.done(function(){var v=f(u.target);if(v.closest(".aui-inline-dialog").length!==0){return}setTimeout(function(){clearTimeout(q);var w=t;if(f(d[0]).is(":visible")){w=r}q=setTimeout(function(){n()},w)},r)})});s.done(function(){AJS.bind("quickedit.success",function(){d.hide()})})}function n(){b=Confluence.HighlightAction.RangeHelper.getUserSelectionRange();var q=function(t){return f.trim(t.toString())!==""};b.originalEndOffset=b.endOffset;if(!b||!q(b)){d.hide();return}var s=Confluence.HighlightAction.RangeHelper.getSelectionRects(b);if(!s){return}var r=p(s);if(r||!f(d[0]).is(":visible")){f(d[0]).hide();d.show()}}function c(){var t=function(){v();s()};var w=function(){q();y()};var r=false;var x=j+".inline-dialog-check";var v=function(){if(!r){f("body").bind("click."+x,function(A){var z=f(A.target);if(z.closest("#inline-dialog-"+j+" .contents").length===0){if(!b){d.hide()}}});r=true}};var q=function(){if(r){f("body").unbind("click."+x)}r=false};var u=function(z){if(z.keyCode===27){d.hide()}};var s=function(){f(document).on("keydown",u)};var y=function(){f(document).off("keydown",u)};return{bindHideEvents:t,unbindHideEvents:w}}function p(r){Confluence.DocThemeUtils.appendAbsolutePositionedElement(a);var q=false;if(!e||r.first.top!=e.first.top||r.first.height!=e.first.height||r.first.left!=e.first.left||r.first.width!=e.first.width){a.css({top:r.first.top,height:r.first.height,left:r.first.left,width:r.first.width});e=r;q=true}return q}o()});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/quote-in-comment.js' */
AJS.toInit(function(f){var a=true;var h=false;var d="com.atlassian.confluence.plugins.confluence-highlight-actions:quote-comment";function b(l){var k=l.getBody().createTextRange();k.moveToElementText(l.getBody());k.collapse(false);k.select()}function e(){var k=40;if(Confluence.DocThemeUtils.isDocTheme()){var l=Confluence.DocThemeUtils.getDocThemeContentElement();var m=l.scrollTop()-f("#header").height()+f("#rte-toolbar").offset().top;l.scrollTop(m-k)}else{var m=f("#rte-toolbar").offset().top;f(document).scrollTop(m-k)}}function j(l,m){var n="<p><br/></p>";if(f.browser.msie&&!h){b(l);n="<p></p>"}var k="<blockquote><p>"+m.html+"</p></blockquote>"+n;l.execCommand("mceInsertContent",false,k);h=false}function i(k){Confluence.HighlightAction.clearTextSelection();setTimeout(function(){var l=AJS&&AJS.Rte&&AJS.Rte.getEditor&&AJS.Rte.getEditor();if(l){Confluence.HighlightAction.Analytics.sendAnalyticsForQuoteInComment();e();j(l,k)}else{Confluence.HighlightAction.Analytics.sendAnalyticsForQuoteInComment(a);h=true;var m=function(){j(AJS.Rte.getEditor(),k);AJS.unbind("quickedit.visible",m)};AJS.bind("quickedit.visible",m);c(g(k.containingElement))}},0)}function g(k){var l=f(k).closest("div.comment");return l}function c(k){if(!k.length>0){f(".quick-comment-prompt").click()}else{k.find(".comment-actions .action-reply-comment").click()}}Confluence&&Confluence.HighlightAction&&Confluence.HighlightAction.registerButtonHandler(d,{onClick:i,shouldDisplay:Confluence.HighlightAction.WORKING_AREA.MAINCONTENT_AND_COMMENT})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/highlight-analytics.js' */
Confluence.HighlightAction.Analytics=(function(c){var b="confluence.highlight.actions.open";var e="confluence.quote.in.comment.insert";var g="confluence.quote.in.comment.append";function d(h,i){AJS.trigger("analytics",{name:h,data:i})}function a(){d(b)}function f(h){if(h){d(e)}else{d(g)}}return{sendAnalyticsForOpeningHighlightOptionPanel:a,sendAnalyticsForQuoteInComment:f}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/soy/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.HighlightPanel == 'undefined') { Confluence.HighlightPanel = {}; }
if (typeof Confluence.HighlightPanel.Templates == 'undefined') { Confluence.HighlightPanel.Templates = {}; }


Confluence.HighlightPanel.Templates.panelContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var webItemList3 = opt_data.webItems;
  var webItemListLen3 = webItemList3.length;
  for (var webItemIndex3 = 0; webItemIndex3 < webItemListLen3; webItemIndex3++) {
    var webItemData3 = webItemList3[webItemIndex3];
    output.append('<button data-key="', soy.$$escapeHtml(webItemData3.key), '" class="aui-button aui-button-compact aui-button-subtle" title="', soy.$$escapeHtml(webItemData3.label), '"><span class="aui-icon aui-icon-small ', soy.$$escapeHtml(webItemData3.styleClass), '"/></button>');
  }
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:fields', location = '/fields/fields.soy' */
// This file was automatically generated from fields.soy.
// Please don't edit this file by hand.

if (typeof jiraIntegration == 'undefined') { var jiraIntegration = {}; }
if (typeof jiraIntegration.templates == 'undefined') { jiraIntegration.templates = {}; }
if (typeof jiraIntegration.templates.fields == 'undefined') { jiraIntegration.templates.fields = {}; }


jiraIntegration.templates.fields.stringField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.textField({labelContent: soy.$$escapeHtml(opt_data.labelText), id: opt_data.name, name: opt_data.name, value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts}, output);
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.textareaField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="field-group jira-field', (opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '', '" data-jira-type="', soy.$$escapeHtml(opt_data.jiraType), '"><label for="', soy.$$escapeHtml(opt_data.name), '">', soy.$$escapeHtml(opt_data.labelText), (opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '', '</label><textarea rows="10" id="', soy.$$escapeHtml(opt_data.name), '" name="', soy.$$escapeHtml(opt_data.name), '" class="textarea long-field">', soy.$$escapeHtml(opt_data.value), '</textarea>');
  if (opt_data.errorTexts) {
    var errorList37 = opt_data.errorTexts;
    var errorListLen37 = errorList37.length;
    for (var errorIndex37 = 0; errorIndex37 < errorListLen37; errorIndex37++) {
      var errorData37 = errorList37[errorIndex37];
      output.append('<div class="error">', soy.$$escapeHtml(errorData37), '</div>');
    }
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.arrayField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.textField({id: opt_data.name, name: opt_data.name, labelContent: soy.$$escapeHtml(opt_data.labelText), value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts}, output);
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.numberField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.textField({id: opt_data.name, name: opt_data.name, labelContent: soy.$$escapeHtml(opt_data.labelText), value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts}, output);
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.allowedValuesField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.options.length) {
    aui.form.selectField({id: opt_data.name, name: opt_data.name, labelContent: soy.$$escapeHtml(opt_data.labelText), options: opt_data.options, isRequired: opt_data.isRequired, isMultiple: opt_data.isMultiple, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts}, output);
  } else {
    aui.form.valueField({id: opt_data.name, name: opt_data.name, labelContent: soy.$$escapeHtml(opt_data.labelText), value: "None", isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts}, output);
  }
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.timeTrackingField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.textField({id: opt_data.name, name: opt_data.name, labelContent: soy.$$escapeHtml(opt_data.labelText), value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts}, output);
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.unrenderableTypeField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="field-group jira-field jira-field-unrenderable', (opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '', '"><label>', soy.$$escapeHtml(opt_data.labelText), (opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '', '</label>');
  aui.form.value({content: opt_data.reasonContent}, output);
  if (opt_data.errorTexts) {
    var errorList117 = opt_data.errorTexts;
    var errorListLen117 = errorList117.length;
    for (var errorIndex117 = 0; errorIndex117 < errorListLen117; errorIndex117++) {
      var errorData117 = errorList117[errorIndex117];
      output.append('<div class="error">', soy.$$escapeHtml(errorData117), '</div>');
    }
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.dateField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.textField({labelContent: soy.$$escapeHtml(opt_data.labelText), id: opt_data.name, name: opt_data.name, value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts}, output);
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.select2WithIconField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="field-group jira-field', (opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '', '" data-jira-type="', soy.$$escapeHtml(opt_data.jiraType), '"><label for="', soy.$$escapeHtml(opt_data.name), '">', soy.$$escapeHtml(opt_data.labelText), (opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '', '</label><select id="', soy.$$escapeHtml(opt_data.name), '" name="', soy.$$escapeHtml(opt_data.name), '">');
  var optionList154 = opt_data.options;
  var optionListLen154 = optionList154.length;
  for (var optionIndex154 = 0; optionIndex154 < optionListLen154; optionIndex154++) {
    var optionData154 = optionList154[optionIndex154];
    output.append('<option value="', soy.$$escapeHtml(optionData154.value), '" ', (optionData154.selected) ? 'selected' : '', ' data-icon-url="', soy.$$escapeHtml(optionData154.iconUrl), '">', soy.$$escapeHtml(optionData154.text), '</option>');
  }
  output.append('</select>');
  if (opt_data.errorTexts) {
    var errorList170 = opt_data.errorTexts;
    var errorListLen170 = errorList170.length;
    for (var errorIndex170 = 0; errorIndex170 < errorListLen170; errorIndex170++) {
      var errorData170 = errorList170[errorIndex170];
      output.append('<div class="error">', soy.$$escapeHtml(errorData170), '</div>');
    }
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.select2WithIconOption = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.iconUrl) {
    aui.avatar.avatar({avatarImageUrl: opt_data.iconUrl, size: 'xsmall', isProject: opt_data.isProject, extraClasses: 'select-option-image', tagName: 'span'}, output);
  }
  output.append('<span class="select-option" title="', soy.$$escapeHtml(opt_data.optionValue), '">', soy.$$escapeHtml(opt_data.optionValue), '</span>');
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.labelFieldResult = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.label.isNew) ? soy.$$escapeHtml(AJS.format("\x22{0}\x22 - (New label)",opt_data.label.labelName)) : soy.$$escapeHtml(opt_data.label.labelName));
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.userOptionSelect = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var userOption__soy197 = new soy.StringBuilder(soy.$$escapeHtml(opt_data.displayName), ' - (', soy.$$escapeHtml(opt_data.name), ')');
  userOption__soy197 = userOption__soy197.toString();
  output.append('<span title="', userOption__soy197, '">', userOption__soy197, '</span>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:fields', location = '/fields/fields.js' */
var jiraIntegration=window.jiraIntegration||{};jiraIntegration.fields=(function(I,P){var k="YYYY-MM-DD";var g={template:jiraIntegration.templates.fields.stringField,getContext:u,getValue:A};var y={template:jiraIntegration.templates.fields.stringField,getContext:q,getValue:D,behavior:o};var t={template:jiraIntegration.templates.fields.arrayField,getContext:h,getValue:B,behavior:j};var r={template:jiraIntegration.templates.fields.textareaField,getContext:u,getValue:A};var F={template:jiraIntegration.templates.fields.numberField,getContext:u,getValue:C};var c={template:jiraIntegration.templates.fields.arrayField,getContext:h,getValue:B};var O={template:jiraIntegration.templates.fields.allowedValuesField,getContext:f,getValue:P.bind(b,null,"name"),behavior:R};var L={template:jiraIntegration.templates.fields.allowedValuesField,getContext:f,getValue:P.bind(b,null,"id")};var K={template:jiraIntegration.templates.fields.timeTrackingField,getContext:Q,getValue:e};var J={template:jiraIntegration.templates.fields.dateField,getContext:u,getValue:A,behavior:x};var i={template:jiraIntegration.templates.fields.select2WithIconField,getContext:H,getValue:P.bind(b,null,"name"),behavior:a};var l={"com.pyxis.greenhopper.jira:gh-epic-label":g,string:g,summary:g,"com.atlassian.jira.plugin.system.customfieldtypes:textfield":g,"com.atlassian.jira.plugin.system.customfieldtypes:url":g,environment:r,"com.atlassian.jira.plugin.system.customfieldtypes:textarea":r,description:r,"com.atlassian.jira.plugin.system.customfieldtypes:float":F,array:c,labels:t,"com.atlassian.jira.plugin.system.customfieldtypes:labels":c,resolution:O,fixVersions:O,priority:i,versions:O,components:O,security:O,"com.atlassian.jira.plugin.system.customfieldtypes:version":O,"com.atlassian.jira.plugin.system.customfieldtypes:multiversion":O,"com.atlassian.jira.plugin.system.customfieldtypes:project":O,assignee:y,reporter:y,timetracking:K,duedate:J,"com.atlassian.jira.plugin.system.customfieldtypes:datepicker":J,"com.atlassian.jira.plugin.system.customfieldtypes:multiselect":L,"com.atlassian.jira.plugin.system.customfieldtypes:select":L};var v={ignoreFieldsWithDefaultValue:false};function m(U,S,V){var T=S.schema.system||"customfield_"+S.schema.customId;return{labelText:S.name,name:T,isRequired:S.required,errorTexts:V[T],jiraType:U}}function u(W,S,T,U){var V=W.name;W.value=(I.isPlainObject(U[V])?U[V].name:U[V])||(T&&T.fields[V])||"";return W}function A(S){return S.val()}function C(S){var T=S.val();if(s(T)){return Number(T)}return T||null}function x(S){var U=S.find("input");if(!!navigator.userAgent.match(/Trident/)&&AJS.version<"5.3.5"){var T="placeholder" in document.createElement("input");U.attr("placeholder",k);if(!T){U.on("focus",function(){if(U.val()===U.attr("placeholder")){U.val("")}}).on("blur",function(){if(U.val()===""){U.val(U.attr("placeholder"))}}).blur()}}else{U.datePicker({overrideBrowserDefault:true})}}function h(W,S,T,U){var V=W.name;W.value=(U[V]&&U[V].join(","))||(T&&T.fields[V]&&T.fields[V].join(","));return W}function B(S){return P.map(S.val().split(","),I.trim)}function f(Y,S,T,V){var W=Y.name;var U=V[W];var Z=T&&T.fields[W];var X;if(U){X=I.isArray(U)?P.pluck(U,"name"):[U.name]}else{if(Z){X=I.isArray(Z)?P.pluck(Z,"name"):[Z.name]}else{X=[]}}Y.options=P.map(S.allowedValues,function(aa){return{value:aa.name||aa.id,text:aa.name||aa.value,selected:P.contains(X,aa.name||aa.id)}});Y.isMultiple=P.contains(S.operations,"add");return Y}function b(V,T){var W=T.val();var S=T.attr("multiple");var U=function(Y){var X={};X[V]=Y;return X};if(S){return I.isArray(W)?P.map(W,U):[U(W)]}return U(W)}function R(S){S.find("select[multiple]").auiSelect2()}function q(W,S,T,U){var V=W.name;W.value=(U[V]&&U[V].name)||(T&&T.fields[V]&&T.fields[V].name)||"";return W}function D(S){return{name:S.val()}}function N(T,W,V,U,X){var Z=T.find("input");var Y=T.attr("name");Z.removeClass("text");var S={minimumInputLength:1,id:Y,name:Y,query:function(ab){function aa(ac){ab.callback({results:ac})}n(W,V,ab.term,U).done(aa)}};Z.auiSelect2(I.extend(S,X));T.find("div.aui-select2-container").addClass("jira-select2-drop-box")}function o(S,V,U,T){var W={formatInputTooShort:function(){return "Find users..."},formatResult:function(X){return jiraIntegration.templates.fields.userOptionSelect({name:X.id,displayName:X.text})}};N(S,V,U,T,W)}function j(S,V,U,T){var W=S.find("input");jiraIntegration.fields._labelPicker.build(W,function(X){return n(V,U,X,T)})}function n(W,U,V,T){var S=I.extend({restType:U,issueKey:(T&&T.key)||"",term:V},W);return I.ajax({type:"POST",timeout:0,contentType:"application/json",dataType:"json",url:AJS.contextPath()+"/rest/jira-integration/latest/fields/autocomplete",data:JSON.stringify(S)})}function Q(W,S,T,U){var V=W.name;W.value=(U[V]&&U[V].remainingEstimate)||(T&&T.fields[V]&&T.fields[V].remainingEstimate)||"";return W}function e(S){return{remainingEstimate:S.val()}}function H(X,S,T,U){var V=X.name;var W=(U[V]&&U[V].name)||(T&&T.fields&&T.fields[V]&&T.fields[V].name)||"";X.options=P.map(S.allowedValues,function(Y){return{value:Y.name,text:Y.name,selected:W===Y.name,iconUrl:Y.iconUrl}});return X}function z(T){var S;if(T.id){S=I(T.element).attr("data-icon-url")}return jiraIntegration.templates.fields.select2WithIconOption({optionValue:T.text,iconUrl:S})}function a(W,V,T,S){if(!I.fn.auiSelect2){AJS.log("AUI version 5.2 or greater is required as this plugin needs the .auiSelect2() jQuery plugin.");return}var U=W.find("select");U.addClass("jira-select2-drop-box");U.auiSelect2({hasAvatar:true,minimumResultsForSearch:-1,formatSelection:z,formatResult:z})}function p(T,S){if(P.has(l,T)&&console&&console.warn){console.warn("Redefining handler for type "+T+".")}l[T]=S}function E(S){return S.schema?(S.schema.system||S.schema.custom||S.schema.customId):S}function M(S){return l[E(S)]}function w(S){var T=d(S);return T&&M(T)}function d(S){return S.closest(".jira-field").attr("data-jira-type")}function G(T,S){return I.ajax({type:"GET",timeout:0,url:AJS.contextPath()+"/rest/jira-integration/1.0/servers/"+T.serverId+"/projects/"+T.projectKey+"/issue-types/"+T.issueType+"/fields-meta"}).pipe(function(V){var U=[];P.each(V.fields,function(X){var W=E(X);if(X.required&&!P.contains(S.excludedFields,W)){U.push(X)}});return U})}function s(S){return/\d/.test(S)&&/^-?\d*\.?\d*$/.test(S)}return{addFieldHandler:p,getFieldHandler:M,canRender:function(S){var U=E(S);var T=l[U];if(!T){return false}return S.operations&&S.operations.length&&(!T.canRender||T.canRender(S))},renderField:function(W,Y,Z,X){var S=Y.schema.system||Y.schema.custom||Y.schema.customId;var U=l[S];var V=m(S,Y,X||{});var aa=!U||(U.canRender&&!U.canRender(Y));var T=!Y.operations||!Y.operations.length;if(aa||T){V.reasonContent=aa?AJS.format("{0}Edit{1} this field in JIRA",'<a href="'+(W?W.url:"#")+'">',"</a>"):T?AJS.format("{0}Edit{1} this field in JIRA",'<a href="'+(W?W.url:"#")+'">',"</a>"):null;if(!V.reasonContent){throw new Error("Invalid unrenderable reason.")}return jiraIntegration.templates.fields.unrenderableTypeField(V)}return U.template(U.getContext(V,Y,W,Z||{}))},getJSON:function(S){var T=w(S);return T&&T.getValue&&T.getValue(S)},attachFieldBehaviors:function(U,T,S){U.find(".jira-field").each(function(X,W){var V=I(W);var Z=d(V);var Y=Z&&M(Z);var aa=Y&&Y.behavior;if(aa){aa(V,T,Z,S)}})},renderCreateRequiredFields:function(W,V,U,T,S){T=P.extend({},v,T);function X(Y){if(T.ignoreFieldsWithDefaultValue){Y=P.filter(Y,function(aa){return !aa.hasDefaultValue})}var Z=P.filter(Y,function(aa){return !jiraIntegration.fields.canRender(aa)});if(Z.length){if(S){S(Z)}return}W.html(P.map(Y,function(aa){return jiraIntegration.fields.renderField(null,aa,null,null)}).join(""));jiraIntegration.fields.attachFieldBehaviors(W,{serverId:U.serverId,projectKey:U.projectKey},null)}if(T.requiredFields){X(T.requiredFields)}else{G(U,T).done(X)}}}}(AJS.$,window._));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:fields', location = '/fields/label-picker.js' */
var jiraIntegration=window.jiraIntegration||{};jiraIntegration.fields=jiraIntegration.fields||{};jiraIntegration.fields._labelPicker=function(a){var b=function(d,c){d.auiSelect2({tags:true,multiple:true,tokenSeparators:[","," "],createSearchChoice:function(e){if(!e){return null}return{id:e,text:e,isNew:true}},query:function(f){var e=function(g){f.callback({results:g})};c(f.term).done(e)},formatResult:function(e){return jiraIntegration.templates.fields.labelFieldResult({label:{labelName:e.text,isNew:e.isNew}})}})};return{build:b}}(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources', location = 'com/atlassian/confluence/plugins/createjiracontent/soy/confluence-jira-content-templates.soy' */
// This file was automatically generated from confluence-jira-content-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.CreateJiraContent == 'undefined') { Confluence.CreateJiraContent = {}; }


Confluence.CreateJiraContent.createIssueDialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="jira-content-create-issue-form" class="aui top-label"><div class="dialog-header"><div class="title left-position"><h2 id="create-issues-dialog-header">', soy.$$escapeHtml("Create Issue"), '</h2></div><div class="servers"><select class="select hidden" id="jira-servers" /></div><br class="clear" /></div><span id="create-issue-loading"><span class="aui-icon aui-icon-wait"></span> ', soy.$$escapeHtml("Loading\u2026"), '</span><div class="dialog-content hidden"><div class="main-field"><select class="select stretch-out" id="jira-projects" name="pid" title="database select" /><span id="projectSpinner" class="project-spinner"></span></div><div class="main-field last-main-field"><select class="select" id="jira-issue-types" name="issuetype"><option value=\'-1\'>', soy.$$escapeHtml("select"), '</option></select></div><div id="issue-content"><div id="create-from-text"><div class="field-group main-field"><label for="issue-summary">', soy.$$escapeHtml("Summary"), '<span class="aui-icon icon-required"> required</span></label><input id="issue-summary" class="text" value="', soy.$$escapeHtml(opt_data.summary), '" maxlength="255" /></div><div class="field-group main-field"><label for="issue-description">', soy.$$escapeHtml("Description"), '<span class="aui-icon icon-required"> required</span></label><textarea class="textarea" name="comment" id="issue-description">', (opt_data.isCutLongText) ? soy.$$escapeHtml(opt_data.comment) : '', '</textarea></div></div><div id="create-from-table-field">');
  if (opt_data.tableComumnIndexAndText.length != 0) {
    var mappingFieldList22 = opt_data.mappingFields;
    var mappingFieldListLen22 = mappingFieldList22.length;
    for (var mappingFieldIndex22 = 0; mappingFieldIndex22 < mappingFieldListLen22; mappingFieldIndex22++) {
      var mappingFieldData22 = mappingFieldList22[mappingFieldIndex22];
      output.append('<div class="field-group main-field"><label for="issue-', soy.$$escapeHtml(mappingFieldData22.name), '-index">', soy.$$escapeHtml(mappingFieldData22.label), '<span class="aui-icon icon-required"> required</span></label><select id="issue-', soy.$$escapeHtml(mappingFieldData22.name), '-index">');
      var indexAndTextList30 = opt_data.tableComumnIndexAndText;
      var indexAndTextListLen30 = indexAndTextList30.length;
      for (var indexAndTextIndex30 = 0; indexAndTextIndex30 < indexAndTextListLen30; indexAndTextIndex30++) {
        var indexAndTextData30 = indexAndTextList30[indexAndTextIndex30];
        output.append('<option value="', soy.$$escapeHtml(indexAndTextData30.index), '" ', (indexAndTextData30.index == mappingFieldData22.index) ? ' selected="selected" ' : '', '>', soy.$$escapeHtml(indexAndTextData30.text), '</option>');
      }
      output.append('</select></div>');
    }
  }
  output.append('</div><div id="jira-required-fields-panel"></div><div id="create-from-table"></div></div><div id="jira-epic-content"></div><div id="create-issue-form-messages" class="hidden"></div></div><div id="prepare-issue-messages" class="issue-messages hidden"></div><div class="buttons-group hidden"><input class="aui-button submit create-issue-submit" type="submit" value="', soy.$$escapeHtml("Create"), '" /><a class="create-issue-cancel" href="#">', soy.$$escapeHtml("Cancel"), '</a><span id="form-spinner"></span><span id="form-message-spinner"></span><span id="form-message"></span></div><div id="jiraserver-issue-messages" class="issue-messages"></div><div id="create-issue-messages"></div><div id="text-suggestion" class="text-suggestion hidden"></div></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.renderUnsupportedFieldsWarningMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.unsupportedFields.length == 1) {
    var field__soy51 = new soy.StringBuilder('<strong>', soy.$$escapeHtml(opt_data.unsupportedFields), '</strong>');
    field__soy51 = field__soy51.toString();
    output.append(AJS.format("The required field {0} is not available in this dialog. You will need to",field__soy51));
  } else {
    var fieldList__soy58 = new soy.StringBuilder();
    Confluence.CreateJiraContent.buildFieldList({fields: opt_data.unsupportedFields}, fieldList__soy58);
    fieldList__soy58 = fieldList__soy58.toString();
    output.append(AJS.format("The required fields {0} are not available in this dialog. You will need to",fieldList__soy58));
  }
  output.append(' <a href="', soy.$$escapeHtml(opt_data.projectLinkUrl), '" id="create-issue-in-jira-link" target="_blank">', soy.$$escapeHtml("create your issue directly in JIRA"), '</a>.');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.buildFieldList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var joinText__soy69 = new soy.StringBuilder((opt_data.fields.length == 2) ? ' ' + soy.$$escapeHtml("and") + ' ' : ', ');
  joinText__soy69 = joinText__soy69.toString();
  var fieldList77 = opt_data.fields;
  var fieldListLen77 = fieldList77.length;
  for (var fieldIndex77 = 0; fieldIndex77 < fieldListLen77; fieldIndex77++) {
    var fieldData77 = fieldList77[fieldIndex77];
    output.append((! (fieldIndex77 == 0)) ? soy.$$escapeHtml(joinText__soy69) : '', '<strong>', soy.$$escapeHtml(fieldData77), '</strong>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.renderEpicContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="epic-link" class="main-field checkbox"><input class="checkbox" type="checkbox" id="epicCheck" checked="checked" name="epickCheck" value="', soy.$$escapeHtml(opt_data.epicKey), '"/><label for="epicCheck">', soy.$$escapeHtml("Link to epic"), ' </label>', opt_data.epicHtmlPlaceHolder, '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.createPreviewIssuesFromTable = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="main-field issue-preview"><div class="preview-message" > ', soy.$$escapeHtml("Following issues will be created:"), ' </div>');
  var issueList98 = opt_data.issues;
  var issueListLen98 = issueList98.length;
  if (issueListLen98 > 0) {
    for (var issueIndex98 = 0; issueIndex98 < issueListLen98; issueIndex98++) {
      var issueData98 = issueList98[issueIndex98];
      Confluence.CreateJiraContent.issuePreviewTemplate({summary: issueData98.summary}, output);
    }
  } else {
    output.append(soy.$$escapeHtml("Issue not found."));
  }
  output.append((opt_data.numberOfRemainingIssues > 0) ? '<div id="issue-remaining">' + ((opt_data.numberOfRemainingIssues == 1) ? soy.$$escapeHtml("+ 1 more issue.") : '') + ((opt_data.numberOfRemainingIssues > 1) ? soy.$$escapeHtml(AJS.format("+ {0} more issues.",opt_data.numberOfRemainingIssues)) : '') + '</div>' : '', '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.issueFromTextSuggestedLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.numberOfIssues) ? '<span class="aui-icon aui-icon-small aui-iconfont-info"/>' + soy.$$escapeHtml("Looks like you are creating issues from a table.") + '<br/><a id="text-suggested-link" href="#">' + soy.$$escapeHtml(AJS.format("Create {0} issues from this table.",opt_data.numberOfIssues)) + '</a>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.issueFromTableSuggestedLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="aui-icon aui-icon-small aui-iconfont-info"/><a id="table-suggested-link" href="#">', soy.$$escapeHtml("Create a single issue"), '</a> ', soy.$$escapeHtml("from the highlighted text."));
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.issuePreviewTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="issue-container"><img class="icon ico-left"><div class="issue-content"><span class="issue-summary">', soy.$$escapeHtml(opt_data.summary), '</span></div><div class="text-right"></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.displayMessages = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p><ul>');
  var messageList134 = opt_data.messages;
  var messageListLen134 = messageList134.length;
  for (var messageIndex134 = 0; messageIndex134 < messageListLen134; messageIndex134++) {
    var messageData134 = messageList134[messageIndex134];
    output.append('<li>', soy.$$escapeHtml(messageData134), ' </li>');
  }
  output.append('</ul></p>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.issueMacroXml = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name=\'jira\'><ac:parameter ac:name=\'showSummary\'>', soy.$$escapeHtml(opt_data.showSummary), '</ac:parameter><ac:parameter ac:name=\'server\'>', soy.$$escapeHtml(opt_data.serverName), '</ac:parameter><ac:parameter ac:name=\'serverId\'>', soy.$$escapeHtml(opt_data.serverId), '</ac:parameter><ac:parameter ac:name=\'key\'>', soy.$$escapeHtml(opt_data.issueKey), '</ac:parameter>"</ac:macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.createIssueMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.canInsertMacro == true) ? soy.$$escapeHtml(AJS.format("The issue {0} is created and its link is inserted in the page. To see the result, ",opt_data.issueKey)) + ' <a href="' + soy.$$escapeHtml(opt_data.currentUrl) + '">' + soy.$$escapeHtml("reload ") + '</a> ' + soy.$$escapeHtml("this page.") : soy.$$escapeHtml(AJS.format("The issue {0} is created but not be able to insert to the page. You can edit the page to insert the issue later.",opt_data.issueKey)));
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.createdIssuesMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var createdIssueMessagesContent__soy163 = new soy.StringBuilder();
  Confluence.CreateJiraContent.displayMessages({messages: opt_data.createdIssueMessages}, createdIssueMessagesContent__soy163);
  createdIssueMessagesContent__soy163 = createdIssueMessagesContent__soy163.toString();
  output.append(createdIssueMessagesContent__soy163, (opt_data.canInsertMacro == true) ? soy.$$escapeHtml("The issues are created and theirs links are inserted in the page. To see the result, ") + ' <a href="' + soy.$$escapeHtml(opt_data.currentUrl) + '">' + soy.$$escapeHtml("reload ") + '</a> ' + soy.$$escapeHtml("this page.") : soy.$$escapeHtml("The issues are created but not be able to insert to the page. You can edit the page to insert the issues later."));
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.selectOption = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span title="', soy.$$escapeHtml(opt_data.optionValue), '">', soy.$$escapeHtml(opt_data.optionValue), '</span>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.updatePageFromTableError = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var createdIssueMessagesContent__soy186 = new soy.StringBuilder();
  Confluence.CreateJiraContent.displayMessages({messages: opt_data.createdIssueMessages}, createdIssueMessagesContent__soy186);
  createdIssueMessagesContent__soy186 = createdIssueMessagesContent__soy186.toString();
  output.append(createdIssueMessagesContent__soy186, soy.$$escapeHtml("The issues are created but not be able to insert to the page. You can edit the page to insert the issues later."));
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.getOAuthMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="oauth-link-text-message">', soy.$$escapeHtml("Atlassian JIRA needs your permission to connect to "), ' ', soy.$$escapeHtml(opt_data.confluenceApplicationName), '.</div><button class="oauth-init aui-button">', soy.$$escapeHtml("Allow access"), '</button>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.selectOptionWithImage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.imageUrl) ? '<img src="' + soy.$$escapeHtml(opt_data.imageUrl) + '" class="select-option-image" />' : '', '<span class="select-option" title="', soy.$$escapeHtml(opt_data.optionValue), '">', soy.$$escapeHtml(opt_data.optionValue), '</span>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.selectOptionProject = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.imageUrl) {
    aui.avatar.avatar({avatarImageUrl: opt_data.imageUrl, isProject: true, size: 'xsmall', tagName: 'span'}, output);
  }
  output.append('<span class="select-option" title="', soy.$$escapeHtml(opt_data.optionValue), '">', soy.$$escapeHtml(opt_data.optionValue), '</span>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.summaryStoredValue = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="summary-stored-value"><span class="info">');
  aui.avatar.avatar({avatarImageUrl: opt_data.storedValue.projectIcon, isProject: true, size: 'xsmall', tagName: 'span'}, output);
  output.append('<span class="ellipsis project-name" title="', soy.$$escapeHtml(opt_data.storedValue.projectText), '">', soy.$$escapeHtml(opt_data.storedValue.projectText), '</span> <img class="aui-avatar-xsmall" src="', soy.$$escapeHtml(opt_data.storedValue.issueTypeIcon), '" /><span class="ellipsis issue-type" title="', soy.$$escapeHtml(opt_data.storedValue.issueTypeText), '">', soy.$$escapeHtml(opt_data.storedValue.issueTypeText), '</span></span><a href="#" title="', soy.$$escapeHtml("Edit"), '">', soy.$$escapeHtml("Edit"), '</a></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources', location = 'com/atlassian/confluence/plugins/createjiracontent/js/create-issue-analytics.js' */
Confluence.CreateJiraContent.Analytics=(function(k){var y="confluence.jira.content.dialog.open";var s="confluence.jira.content.create.text";var d="confluence.jira.content.create.table";var v="confluence.jira.content.error";var a="confluence.jira.content.jim.insert.fail";var t="confluence.jira.content.switch.to.table";var q="confluence.jira.content.switch.to.text";var w="confluence.jira.content.edit.description";var m="confluence.jira.content.summary.truncated";var n="confluence.jira.content.with.epic";var l="confluence.jira.content.required.fields";var g="confluence.jira.content.create.directly.in.jira";var o="confluence.jira.content.sorted.table";var z="table";function e(B,C){AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:B,properties:C})}function c(){e(y)}function b(B){e(((B===z)?t:q))}function i(D,C){if(D===z){var B={total:C};e(d,B)}else{e(s)}}function r(){e(w)}function A(){e(n)}function j(C){var B={total:C};e(m,B)}function p(C,D){var B={type:C,reason:D};e(a,B)}function u(){e(o)}function x(C){var B={cause:C};e(v,B)}function f(){e(l)}function h(){k("#create-issue-in-jira-link").click(function(B){e(g)})}return{sendAnalyticsForDialogOpen:c,sendAnalyticsForModeChange:b,sendAnalyticsForCreatingIssue:i,sendAnalyticsForDescriptionEdited:r,sendAnalyticsForCreatedIssueWithEpic:A,sendAnalyticsForTruncatedSummary:j,sendAnalyticsForJIMInsertFailed:p,sendAnalyticsForSortedTable:u,bindAnalyticsForCreateDirectlyInJira:h,sendAnalyticsForCreateError:x,sendAnalyticsForRequiredFields:f}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources', location = 'com/atlassian/confluence/plugins/createjiracontent/js/page-helper.js' */
AJS.toInit(function(f){var g="com.atlassian.confluence.plugins.confluence-jira-content:create-JIRA-issue-summary";var c=f("div.jira-issues-created");if(c.length>0){if(window.history&&window.history.replaceState){var e=window.location.href;var d=e.substr(0,e.indexOf("JIRAIssuesCreated")-1);window.history.replaceState({},document.title,d)}var b=c.find("#jira-content-message-panel-error-warning");var a=c.find("#jira-content-message-panel-view-more-link");a.click(function(h){h.preventDefault();a.hide();b.show()});if(c.hasClass("success")){setTimeout(function(){c.hide()},10000)}}Confluence&&Confluence.HighlightAction&&Confluence.HighlightAction.registerButtonHandler(g,{onClick:function(h){if(Confluence.CreateJiraContent.FeatureDiscovery.shouldShowFeatureDiscovery()){Confluence.CreateJiraContent.Dialogs.showFeatureDiscoveryDialog(h)}else{Confluence.CreateJiraContent.Dialogs.showCreateIssueDialog(h)}},shouldDisplay:Confluence.HighlightAction.WORKING_AREA.MAINCONTENT_ONLY})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources', location = 'com/atlassian/confluence/plugins/createjiracontent/js/jira-inline-dialog.js' */
Confluence.CreateJiraContent.Dialogs=Confluence.CreateJiraContent.Dialogs||(function(e){var j=360;var g=500;var i=370;var k;var c;var d={hideDelay:null,maxHeight:g};function b(m){k&&k.remove();var l={preHideCallback:function(){var o=e(document.activeElement);var p=o.is("#jira-content-create-issue-form [data-aui-dp-uuid]")||o.is("#jira-content-create-issue-form input.select2-input.select2-focused")||o.is("#jira-content-create-issue-form .select2-focusser.select2-offscreen");return(e("#formSpinner.aui-icon.aui-icon-wait").length===0)&&(!e("#select2-drop-mask").is(":visible"))&&!p&&!e(".aui-inline-dialog .ui-datepicker-inline").is(":visible")},width:j,hideCallback:function(){Confluence.CreateJiraContent.FormHelper.bindHideEventToDialog()}};var n=function(p,o,q){Confluence.CreateJiraContent.CreateIssue.addFormContent(p,m);q();return false};k=f(m,"create-issue-dialog",l,n);Confluence.CreateJiraContent.CreateIssue.setDialogObject(k);Confluence.CreateJiraContent.Analytics.sendAnalyticsForDialogOpen()}function a(m){c&&c.remove();var l={width:i};var n=function(p,o,q){Confluence.CreateJiraContent.FeatureDiscovery.addFeatureDiscoveryContent(p,m,b);q();return false};c=f(m,"create-issue-feature-discovery-dialog",l,n);Confluence.CreateJiraContent.FeatureDiscovery.setFeatureDialogObject(c)}function f(p,r,m,q){var l=e("<div>");h(p.area.average,l);var o=m.hideCallback;m.hideCallback=function(){l.remove();o&&o()};var n=Confluence.ScrollingInlineDialog(l,r,q,e.extend({},d,m));n.show();return n}function h(m,l){Confluence.DocThemeUtils.appendAbsolutePositionedElement(l);l.css({top:m.top,height:m.height,left:m.left,width:m.width,"z-index":-9999,position:"absolute"}).addClass("confluence-jira-content-dialog-target")}return{showCreateIssueDialog:b,showFeatureDiscoveryDialog:a}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources', location = 'com/atlassian/confluence/plugins/createjiracontent/js/create-issue-form.js' */
Confluence.CreateJiraContent.CreateIssue=(function(s,N){var u="table";var h="text";var K=3;var t;var p;var q;var j;var I={summary:{name:"summary",index:0,required:true,label:"Summary"},description:{name:"description",index:-1,required:false,label:"Description"}};var F;var C;var k;var l=[];var O=function(){return k};var f=function(P){k=P};var E=function(P){var Q=[];l.length=0;p.find("> tbody > tr").each(function(U,T){var R={};var S=false;N.each(P,function(V){if(V.index!==-1){var W=s.trim(s(T).find("td:eq("+V.index+")").text());if(V.required===true){if(W.length){R[V.name]=Confluence.CreateJiraContent.FormTextHelper.removeLineBreaksAndTruncate(W)}else{S=true}}else{R[V.name]=W}}});if(S===false){Q.push(R);l.push(U)}});return Q};var g=function(){var P=[];p.find("> thead > tr > th, > tbody > tr > th").filter(":visible").each(function(Q,R){var S=s.trim(s(R).find("> div").text());S=S?S:s.trim(s(R).text());if(S){P.push({index:Q,text:S})}});return P};var r=function(){var P=t.find("#text-suggestion");if(q!=null&&q.length>1){var Q=Confluence.CreateJiraContent.issueFromTextSuggestedLink({numberOfIssues:q.length});P.html(Q)}else{P.hide()}};var c=function(){if(C===u){var Q=t.find("#create-from-table");Q.empty();if(t.find("#jira-projects option:selected").val()!=-1){q=E(I);var S=0;var R=s(q);if(R.length>K){R=R.slice(0,K);S=q.length-K}var P=Confluence.CreateJiraContent.createPreviewIssuesFromTable({issues:R,numberOfRemainingIssues:S});Q.html(P)}var T=t.find("#jira-issue-types option:selected").val();if(T!=-1){Confluence.CreateJiraContent.FormHelper.changeIssuesTypeIconForPreviewPanel(t.find("#jira-issue-types option:selected").val())}F.refresh()}};var i=function(){c();var P=t.find("#text-suggestion");var Q=Confluence.CreateJiraContent.issueFromTableSuggestedLink();P.html(Q)};var y=function(P){Confluence.CreateJiraContent.FormHelper.removeDisplayMessages();J(P);if(P==h){s("#create-issues-dialog-header").text("Create Issue");r();t.find("#create-from-table-field").hide();t.find("#create-from-table").hide();t.find("#create-from-text").show()}else{if(C===u){s("#create-issues-dialog-header").text("Create Multiple Issues");i();t.find("#create-from-text").hide();t.find("#create-from-table-field").show();t.find("#create-from-table").show()}}AJS.trigger("confluence-jira-content.form-updated")};var M=function(){t.on("click","#text-suggested-link, #table-suggested-link",function(R){var Q=s(this);var S=(Q.attr("id")==="text-suggested-link");var P=(S)?u:h;y(P);R.preventDefault();return false});z()};var z=function(){AJS.$("#issue-description-index").auiSelect2();AJS.$("#issue-summary-index").auiSelect2();t.on("change","#issue-summary-index",function(P){I.summary.index=parseInt(P.val);c();P.preventDefault();return false});t.on("change","#issue-description-index",function(P){I.description.index=parseInt(P.val);if(I.description.required===true){c()}else{q=E(I)}P.preventDefault();return false})};var v=function(){var S=[];var Q=t.find("#issue-summary");var P=t.find("#issue-description");var R={summary:s.trim(Q.val()),description:s.trim(P.val())};S.push(R);return S};var A=function(){if(Confluence.CreateJiraContent.FormHelper.validateCreateIssueForm()){var P=v();Confluence.CreateJiraContent.FormHelper.createIssues(P,G)}};var b=function(){if(Confluence.CreateJiraContent.FormHelper.validateCreateIssueForm()){Confluence.CreateJiraContent.FormHelper.createIssues(q,G,I.summary.index,l)}};var L=function(){t.submit(function(){if(C===h){A()}else{b()}return false})};var m=function(){return h};var J=function(P){C=P};var n=function(){return p.find("> thead > tr > th.tablesorter-headerSortUp, > thead > tr > th.tablesorter-headerSortDown,> thead > tr > th.tablesorter-headerAscDesc, > thead > tr > th.tablesorter-headerAsc").length>0};var e=function(){if(n()){var P=aui.message.warning({content:"You are creating issues on the sorted table. These ones could not be appended to the page."});t.children("#prepare-issue-messages").html(P);Confluence.CreateJiraContent.Analytics.sendAnalyticsForSortedTable()}};var a=function(){p=s(k.containingElement).closest("table");if(p.length>0){return true}return false};var d=function(P){F=P};var B=function(){return F};var w=function(Q){var P=Q.find(".create-issue-cancel");P.on("click",function(R){F.isCancelButtonClicked=true;F.hide();R.preventDefault()})};var D=function(){I.summary.index=s(k.containingElement).closest("td").index();if(I.summary.index==-1&&k.range.startContainer){var P=s(k.range.startContainer);I.summary.index=P.closest("td").index()}if(I.summary.index==-1){I.summary.index=0}j=g();if(j.length!==0){I.description.index=(I.summary.index+1)%j.length}else{I.description.index=I.summary.index}q=E(I)};var x=function(){var Q=Confluence.CreateJiraContent.FormTextHelper.trunc(k.text);var R=Confluence.CreateJiraContent.FormTextHelper.isCutLongText(Q);var P=Confluence.CreateJiraContent.createIssueDialog({summary:Q,isCutLongText:R,comment:k.text,mappingFields:[I.summary,I.description],tableComumnIndexAndText:j?j:[]});return P};var H=function(){return C===h};var o=function(P,Q){if(I[P]){I[P].required=Q}};var G={addFormContent:function(R,Q){f(Q);q=null;if(a()){D()}var P=x();R.html(P);t=R.find("#jira-content-create-issue-form");J(m());if(q==null||q.length==1){R.find("#text-suggestion").remove()}else{M()}y(C);Confluence.CreateJiraContent.FormHelper.init(t);L();w(t);e()},setDialogObject:d,getDialogObject:B,getSelectionObject:O,fillPreviewIssuesFromTable:c,isInSortedTable:n,isInTextMode:H,setFieldRequired:o};return G})(AJS.$,window._);Confluence.CreateJiraContent.FormTextHelper=(function(){var a=255;var b="\u2026";return{trunc:function(c){return c.length<=a?c:c.substr(0,a-1)+b},isCutLongText:function(c){if(c.length>=a){return true}return false},removeLineBreaksAndTruncate:function(c){var d=c.replace(/\n|\r|\r\n/g," ");return this.trunc(d)}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources', location = 'com/atlassian/confluence/plugins/createjiracontent/js/jira-form-helper.js' */
Confluence.CreateJiraContent.FormHelper=(function(ax,Q){var aM="-1",aQ="loading",j="select",A="Select project",aF="Select issue type",a="Loading\u2026",s="aui-bottom-arrow-color";var ah=null;var h=null;var C=false;var v=["project","issuetype","summary","reporter"];var J;var O;var M;var aK;var aI,Z;var aG=Confluence.storageManager("jira-content");var b;var e;var ab=function(aR){O={$serverSelect:aR.find("#jira-servers"),$projectSelect:aR.find("#jira-projects"),$issueTypeSelect:aR.find("#jira-issue-types"),$projectSpinner:aR.find("#projectSpinner"),$hiddenItems:aR.children().not(".dialog-header, #jiraserver-issue-messages"),$requiredFieldsPanel:aR.find("#jira-required-fields-panel"),$summaryField:aR.find("#issue-summary"),$descriptionField:aR.find("#issue-description"),$descriptionFieldIndex:aR.find("#issue-description-index"),$jiraEpicContent:aR.find("#jira-epic-content")};M=aR;aK="Story,New Feature".toLowerCase();aK=aK.split(",");E(O.$issueTypeSelect);J=Confluence.CreateJiraContent.JiraIssue.FieldStatus.VISIBLE};var ap="savedFormValues";var aA=function(){if(ax.browser.msie){M.find("input, textarea").keydown(function(aR){if(aR.keyCode==27){return false}})}};var aJ=function(aS,aT){var aR=aui.form.optionOrOptgroup({value:aM,text:aT?aT:j});aS.html(aR);aS.auiSelect2("val",aM)};var S=function(){var aR=O.$projectSelect;aR.auiSelect2("enable",false);var aS=aui.form.optionOrOptgroup({value:aM,text:a});aR.html(aS);aR.auiSelect2("val",a)};var z=function(){O.$projectSelect.auiSelect2("enable",true)};var aB=function(aR){aJ(aR)};var u=function(aS,aT){var aR={escapeMarkup:function(aU){return aU},formatResult:k,formatSelection:k};aS.auiSelect2(ax.extend(aR,aT))};var ai=function(aT){var aR=O.$serverSelect;var aS=[];ax.each(aT,function(aV,aW){var aU=aui.form.optionOrOptgroup({value:aW.id,text:aW.name});aS.push(aU)});aR.append(aS.join(""));if(aT.length==1){aR.hide()}else{u(O.$serverSelect,{containerCssClass:"select-container select-server-container",dropdownCssClass:"server-dropdown",width:"180px",minimumResultsForSearch:-1})}if(b){F(X(aR,b.serverId))}else{F(false)}};var au=function(){return Confluence.CreateJiraContent.DataHelper.loadServers().done(function(aR){if(aR.length){ai(aR)}else{T("Don\'t have any JIRA server, please check the application link configuration.")}})};var G=function(aS){var aR=O.$projectSelect;aJ(aR,A);var aT=[];ax.each(aS,function(aV,aW){var aU=aui.form.optionOrOptgroup({value:aW.id,text:aW.name});aT.push(aU)});aR.append(aT.join(""))};var ag=function(aR,aS,aT){I(aR);G(aS);z();aT();AJS.trigger("confluence-jira-content.form-updated")};var p=function(){var aT=g();var aS=aj(aT);if(aS){var aR=function(){if(b&&b.serverId==aT.id){var aU=X(O.$projectSelect,b.projectId);F(aU);if(aU){x();U()}}else{F(false);E(O.$issueTypeSelect)}};S();return Confluence.CreateJiraContent.DataHelper.loadProjects(aT.id).done(function(aU){if(aU.errors&&aU.errors.length){var aV=aU.errors[0];if(aV.authenticationUri){aT.authUrl=aV.authenticationUri;H(401)}else{T(aV.message)}aB(O.$projectSelect);z()}else{H(200,aU);ag(aT.id,aU,aR)}}).fail(function(aU){H(aU.status);aB(O.$projectSelect);z()})}};var am=function(aS){for(var aR=0;aR<aK.length;aR++){if(aK[aR]==aS.toLowerCase()){return true}}return false};var E=function(aR){aR.auiSelect2("enable",false);aJ(aR,aF);aR.prev().find("a").removeAttr("tabindex")};var aE=function(aR){aR.auiSelect2("enable",true);aR.prev().find("a").attr("tabindex","0")};var x=function(){var aR=O.$projectSelect.val();var aS=O.$issueTypeSelect;if(aR&&aR!=aM){aE(aS);at(aS);if(b){F(X(aS,b.issueTypeId))}else{F(false)}}else{E(aS)}};var K=function(){return Confluence.CreateJiraContent.DataHelper.getIssueTypes(O.$serverSelect.val(),O.$projectSelect.val())};var at=function(aT){var aS=null;var aR=[];var aU=K();ax.each(aU,function(aX,aV){if(!aS&&am(aV.name)){aS=aV.id}var aW=aui.form.optionOrOptgroup({value:aV.id,text:aV.name});aR.push(aW)});aT.html(aR.join(""));aT.auiSelect2("val",aS);if(Q.isEmpty(aU)){aJ(aT,aF)}};var N=function(aR){m(false);M.find("#form-message-spinner").addClass("aui-icon aui-icon-wait");M.find("#form-message").text(aR)};var n=function(){M.find("#form-message-spinner").removeClass("aui-icon aui-icon-wait");M.find("#form-message").empty()};var q=function(){O.$summaryField.parent().show();M.find("#create-issue-form-messages").empty().addClass("hidden");M.find("#issue-content, #jira-epic-content").removeClass("hidden");aw()};var o=function(){var aR=O.$descriptionFieldIndex.find("option[value='-1'");if(aR){aR.remove()}if(J===Confluence.CreateJiraContent.JiraIssue.FieldStatus.HIDDEN){Confluence.CreateJiraContent.CreateIssue.setFieldRequired("description",false);O.$descriptionField.parent().hide();O.$descriptionFieldIndex.prepend("<option value='-1'></option>")}else{if(!C){if(J===Confluence.CreateJiraContent.JiraIssue.FieldStatus.REQUIRED){Confluence.CreateJiraContent.CreateIssue.setFieldRequired("description",true);O.$descriptionField.siblings("label").children("span").show();O.$descriptionFieldIndex.siblings("label").children("span").show()}else{Confluence.CreateJiraContent.CreateIssue.setFieldRequired("description",false);O.$descriptionField.siblings("label").children("span").hide();O.$descriptionFieldIndex.siblings("label").children("span").hide();O.$descriptionFieldIndex.prepend("<option value='-1'></option>")}O.$descriptionField.parent().show()}}aw()};var al=function(aS){C=true;var aR=M.find("#create-issue-form-messages");var aT=Confluence.CreateJiraContent.renderUnsupportedFieldsWarningMessage({unsupportedFields:Q.map(aS,function(aU){return aU.name}),projectLinkUrl:i()});AJS.messages.warning(aR,{body:aT,closeable:false});Confluence.CreateJiraContent.Analytics.sendAnalyticsForRequiredFields();Confluence.CreateJiraContent.Analytics.bindAnalyticsForCreateDirectlyInJira();O.$summaryField.parent().hide();O.$descriptionField.parent().hide();aR.removeClass("hidden");aw()};var af=function(aR){jiraIntegration.fields.renderCreateRequiredFields(O.$requiredFieldsPanel,null,{serverId:O.$serverSelect.val(),projectKey:ay().key,issueType:O.$issueTypeSelect.val()},{requiredFields:aR},Q.bind(al,this));h=O.$requiredFieldsPanel.find(".jira-field").children("input,select,textarea");t()};var U=function(){q();h=null;C=false;O.$requiredFieldsPanel.empty();if(O.$projectSelect.val()!==aM){var aS=function(aT){J=aT.descriptionFieldStatus;if(!Q.isEmpty(aT.requiredFields)){af(aT.requiredFields)}aC(aT.epicField);n();AJS.trigger("confluence-jira-content.form-updated")};var aR=function(aT){n()};N("Checking for required fields\u2026");Confluence.CreateJiraContent.JiraIssue.getCreateIssueMeta(ad(),aS,aR);aw()}else{aC()}};var aC=function(aR){ax.when(aI,Z).done(function(){var aS=ah&&!C&&((O.$projectSelect.val()===aM)||(aR&&ah!==O.$issueTypeSelect.val()));O.$jiraEpicContent.toggle(aS?true:false)})};var aj=function(aR){if(!aR.supportedVersion){O.$hiddenItems.addClass("hidden");T(AJS.format("The version of selected JIRA server is not supported. You may want to upgrade to the newer version or \u003ca href=\"{0}\" target=\"_blank\"\u003ecreate issue in JIRA\u003c/a\u003e.",aR.url))}else{O.$hiddenItems.removeClass("hidden")}if(M.find("#text-suggestion").length){ax("#inline-dialog-create-issue-dialog > #arrow-create-issue-dialog").addClass(s)}aw();return aR.supportedVersion};var az=function(){O.$serverSelect.change(function(aT){ax("#jiraserver-issue-messages").empty();var aS=Confluence.CreateJiraContent.DataHelper.getServerById(aT.val);var aR=aj(aS);if(aR){O.$jiraEpicContent.empty();O.$hiddenItems.removeClass("hidden");F(false);b=W();ax.when(p()).done(function(){if(!b){E(O.$issueTypeSelect);ak(M.find("#jira-issue-types option:selected").val())}O.$projectSelect.change()})}});O.$projectSelect.change(function(aS){var aR=O.$projectSelect.val();if(b&&aR!=b.projectId){b=false}x();Confluence.CreateJiraContent.CreateIssue.fillPreviewIssuesFromTable();ak(M.find("#jira-issue-types option:selected").val());AJS.trigger("confluence-jira-content.form-updated");U()});O.$issueTypeSelect.change(function(aR){ak(aR.val);AJS.trigger("confluence-jira-content.form-updated");U()});M.on("keyup",O.$summaryField,function(aR){AJS.trigger("confluence-jira-content.form-updated")});M.on("keyup",O.$descriptionField,function(aR){AJS.trigger("confluence-jira-content.form-updated")});if(!Confluence.CreateJiraContent.CreateIssue.getDialogObject()){AJS.bind("confluence-jira-content.form-updated",function(){m(R());o()});AJS.bind("confluence-jira-content.form-switched",function(){o()})}ax("#jira-content-create-issue-form .dialog-content").on("click",".summary-stored-value a",function(){F(false);b=false;return false});aA()};var t=function(){h.on("change",function(aS){AJS.trigger("confluence-jira-content.form-updated")});if(AJS.version<="5.4.5"){var aR=M.find("input[data-aui-dp-uuid]");aR.each(function(aS,aT){var aV=ax(aT),aU=aV.attr("data-aui-dp-uuid");aV.on("click",function(){var aW=ax("[data-aui-dp-popup-uuid="+aU+"]");var aX=aW.datepicker("option","onSelect");aW.datepicker("option","onSelect",function(aZ,aY){aX(aZ,aY);aV.change()});aW.parents(".aui-inline-dialog").addClass("datepicker-patch")})})}};var m=function(aR){if(aR){ax(".create-issue-submit").removeAttr("disabled")}else{ax(".create-issue-submit").attr("disabled","disabled")}};var R=function(){var aT=function(aU,aV){return(ax.trim(aU.val())!==aV)};var aS=function(){var aU="placeholder" in document.createElement("input");return Q.find(h,function(aY){var aV=ax(aY),aW=ax.trim(aV.val());if(aU){return !aW}else{var aX=aV.attr("placeholder");return(!aW||aW==aX)}})};var aR=aT(O.$projectSelect,aM)&&aT(O.$issueTypeSelect,aM)&&!C&&!aS();if(Confluence.CreateJiraContent.CreateIssue.isInTextMode()&&aR){aR=aT(O.$summaryField,"");if(J===Confluence.CreateJiraContent.JiraIssue.FieldStatus.REQUIRED){aR=aT(O.$descriptionField,"")}}return aR};var ak=function(aS){if(aS!=-1){var aT=K();var aU=Q.find(aT,function(aV){return aV.id===aS});if(aU){var aR=aU.iconUrl;M.find(".issue-container img").attr("src",aR)}}};var ao=function(){ax("#create-issue-messages",M).empty()};var av=function(){ax("#form-spinner",M).addClass("aui-icon aui-icon-wait");ax(".create-issue-cancel",M).addClass("hidden");ax("input,select,textarea,submit",M).disable()};var Y=function(){return O.$projectSelect.val()};var r=function(aT){var aR={fields:{project:{id:Y()},issuetype:{id:O.$issueTypeSelect.val()}}};if(h){h.each(function(aX,aW){var aY=ax(aW);aR.fields[aY.attr("name")]=jiraIntegration.fields.getJSON(aY)})}var aS={issues:[]};var aV=0;var aU=0;ax.each(aT,function(aY,aW){if(Confluence.CreateJiraContent.FormTextHelper.isCutLongText(aW.summary)){aV++}else{if(!aW.description){aU++}}var aX=Q.clone(aR);aX.fields=Q.extend({},aX.fields,aW);if(J===Confluence.CreateJiraContent.JiraIssue.FieldStatus.REQUIRED&&aW.description.length==0){aX.fields.description=aW.summary}if(J===Confluence.CreateJiraContent.JiraIssue.FieldStatus.HIDDEN){delete aX.fields.description}aS.issues.push(aX)});if(aV>0){Confluence.CreateJiraContent.Analytics.sendAnalyticsForTruncatedSummary(aV)}if(aU>0){Confluence.CreateJiraContent.Analytics.sendAnalyticsForDescriptionEdited()}return JSON.stringify(aS)};var aN=function(aS,aR){var aT=[];if(aS){ax.each(aS,function(aV,aW){var aU=AJS.format("Can not create issue for row {0} with error: {1}",(aR[aW.failedElementNumber]+1),D(aW));aT.push(aU)})}return aT};var an=function(){Confluence.CreateJiraContent.DataHelper.clearProjects(O.$serverSelect.val())};var aP=function(){O.$hiddenItems.addClass("hidden");var aS=g();if(aS.authUrl){var aR=function(){an();O.$hiddenItems.removeClass("hidden");ax("#jiraserver-issue-messages").empty();O.$jiraEpicContent.empty();p()};aq(aR)}else{T("JIRA server configuration could be changed. You may try to refresh the page to update latest configuration.")}};var H=function(aR,aS){if(aR==200&&aS&&aS.length===0){an();O.$hiddenItems.addClass("hidden");T(AJS.format("You do not have permission to access any projects in {0}",AJS.escapeHtml(g().name)))}else{switch(aR){case 401:aP();break;case 404:case 500:case 504:O.$hiddenItems.addClass("hidden");T("Cannot connect to this JIRA server at this time.");break;default:O.$hiddenItems.removeClass("hidden")}}aw()};var ad=function(){return{serverId:O.$serverSelect.val(),projectId:O.$projectSelect.val(),issueTypeId:O.$issueTypeSelect.val(),defaultRequiredFields:v}};var ar=function(aT,aV,aU,aS){var aR=ax("#epic-link > .checkbox");if(aR.is(":checked")&&aR.is(":visible")){Confluence.CreateJiraContent.Analytics.sendAnalyticsForCreatedIssueWithEpic();Confluence.CreateJiraContent.JiraIssue.getCreateIssueMeta(ad(),function(aX){if(aX.epicField){var aW=aR.val();ax.each(aT,function(aZ,aY){aY[aX.epicField]=aW})}w(aT,aV,aU,aS)})}else{w(aT,aV,aU,aS)}};var D=function(aU){var aV=Q.values(aU.elementErrors.errors);var aS=Q.keys(aU.elementErrors.errors);var aR=ad();for(var aT=0;aT<aS.length;aT++){var aX=Confluence.CreateJiraContent.JiraIssue.getFieldName(aS[aT],aR);if(aX&&aV[aT].indexOf(aX)==-1){aV[aT]=aX+": "+aV[aT]}}var aW=Q.union(Q.values(aU.elementErrors.errorMessages),aV);aW=aW.join(", ");aW=aW.replace(".,",",");return aW};var w=function(aT,aV,aS,aR){ao();av();var aU=Confluence.getContextPath()+"/rest/jira-integration/1.0/issues";ax.ajax({type:"POST",contentType:"application/json",url:aU+"?applicationId="+O.$serverSelect.val(),data:r(aT),timeout:3*60*1000,success:function(aW){if(aS!=undefined){aO(aW,aV,aS,aR)}else{if(!aW.errors){ac(aW.issues[0],aV)}else{Confluence.CreateJiraContent.Analytics.sendAnalyticsForCreateError("rest");V([],false,[D(aW.errors[0])])}}},error:function(aZ){var aY=[];var aX=[];if(aZ.status==500){try{aX=JSON.parse(aZ.responseText);if(aX instanceof Array){ax.each(aX[0].errors,function(a1,a0){aY.push(a0)})}else{aY.push(aX)}}catch(aW){aX=[];aY.push("Parse error:"+aW.message)}}else{aY.push("Unable to create JIRA issues, please check the application link configuration.")}Confluence.CreateJiraContent.Analytics.sendAnalyticsForCreateError("xhr");V(aX,false,aY)}})};var ac=function(aR,aT){if(aT.isInSortedTable()&&aT.getSelectionObject().searchText.numMatches!=1){V([aR],false,[]);return}var aS=Confluence.HighlightAction.createInsertionBean([{xmlInsertion:B(aR)}],aT.getSelectionObject().searchText);Confluence.CreateJiraContent.Analytics.sendAnalyticsForCreatingIssue("text");Confluence.HighlightAction.insertContentAtSelectionEnd(aS).done(function(aU){if(!aU){Confluence.CreateJiraContent.Analytics.sendAnalyticsForJIMInsertFailed("text","algorithm")}V([aR],aU,[])}).fail(function(aU){Confluence.CreateJiraContent.Analytics.sendAnalyticsForJIMInsertFailed("text","server");V([aR],false,[],aU.statusText)})};var B=function(aR){var aT=g();var aS=Confluence.CreateJiraContent.issueMacroXml({showSummary:false,serverName:aT.name,serverId:aT.id,issueKey:aR.issue.key});return aS};var aa=function(aT){if(aT.formObject.isInSortedTable()){V(aT.createdIssues,false,aT.errorMessages);return}var aS=[];ax.each(aT.createdIssues,function(aU,aV){var aW={};aW.rowIndex=aT.createdIssueRowIndexes[aU];aW.xmlInsertion=B(aV);aS.push(aW)});var aR=Confluence.HighlightAction.createTableInsertionBean(aS,aT.tableColumnIndex,aT.formObject.getSelectionObject().searchText);Confluence.CreateJiraContent.Analytics.sendAnalyticsForCreatingIssue("table",aT.createdIssues.length);Confluence.HighlightAction.insertContentsInTableColumnCells(aR).done(function(aU){if(!aU){Confluence.CreateJiraContent.Analytics.sendAnalyticsForJIMInsertFailed("table","algorithm")}V(aT.createdIssues,aU,aT.errorMessages)}).fail(function(aU){Confluence.CreateJiraContent.Analytics.sendAnalyticsForJIMInsertFailed("table","server");V(aT.createdIssues,false,aT.errorMessages,aU.statusText)})};var V=function(aV,aT,aZ,aW){var aS=g().url;if(aV.length==1){aS+="/browse/"+aV[0].issue.key}else{var aU="key in (";aU+=ax.map(aV,function(a0){return a0.issue.key}).join(",");aU+=")";aS+="/issues/?jql="+encodeURIComponent(aU)}var aY=window.location.href.split("#")[0];var aX=aY.indexOf("JIRAIssuesCreated");if(aX>0){aY=aY.substring(0,aX-1)}var aR=aY+(aY.indexOf("?")>0?"&":"?")+"JIRAIssuesCreated=true&numOfIssues="+aV.length+"&issuesURL="+encodeURIComponent(aS)+"&addedToPage="+aT;if(aV.length>0){aR+="&issueId="+encodeURIComponent(aV[0].issue.key)}if(aW!=undefined){aR+="&statusText="+aW}ax.each(aZ,function(a0,a1){aR+="&errorMessages="+a1});ax("#form-spinner").removeClass("aui-icon aui-icon-wait");Confluence.CreateJiraContent.CreateIssue.getDialogObject().hide();window.location.replace(aR)};var aO=function(aU,aW,aS,aT){var aR=[];ax.each(aU.issues,function(aY,aX){aR.push(aT[aX.elementNumber])});var aV=aN(aU.errors,aT);if(aU.issues.length){aa({createdIssues:aU.issues,createdIssueRowIndexes:aR,tableColumnIndex:aS,formObject:aW,errorMessages:aV})}else{if(aU.errors.length){V([],false,aV)}}};var k=function(aR){return Confluence.CreateJiraContent.selectOption({optionValue:aR.text})};var f=function(aR){var aS;if(aR){if(aR.id>=0){aS=Confluence.CreateJiraContent.DataHelper.getIssueTypeIconUrl(O.$serverSelect.val(),O.$projectSelect.val(),aR.id)}return Confluence.CreateJiraContent.selectOptionWithImage({optionValue:aR.text,imageUrl:aS})}};var L=function(aR){var aS;if(aR){if(aR.id>=0){aS=Confluence.CreateJiraContent.DataHelper.getProjectIconUrl(O.$serverSelect.val(),aR.id)}return Confluence.CreateJiraContent.selectOptionProject({optionValue:aR.text,imageUrl:aS})}};var g=function(){return Confluence.CreateJiraContent.DataHelper.getServerById(O.$serverSelect.val())};var ay=function(){var aS=O.$serverSelect.val();var aR=O.$projectSelect.val();var aT=Confluence.CreateJiraContent.DataHelper.getProjects(aS);return Q.find(aT,function(aU){return aU.id===aR})};var i=function(){var aT=g().url+"/secure/CreateIssueDetails!Init.jspa?pid="+ay().id+"&issuetype="+O.$issueTypeSelect.val();var aS=O.$summaryField.val();if(aS.length){aT=aT+"&summary="+encodeURIComponent(aS)}if(J!==Confluence.CreateJiraContent.JiraIssue.FieldStatus.HIDDEN){var aR=O.$descriptionField.val();if(aR.length){aT=aT+"&description="+encodeURIComponent(aR)}}return aT};var T=function(aR){AJS.messages.warning(ax("#jiraserver-issue-messages"),{body:aR,closeable:false});if(!M.find("#text-suggestion").is(":visible")){ax("#inline-dialog-create-issue-dialog > #arrow-create-issue-dialog").removeClass(s)}};var aq=function(aR){var aT=g();var aS={onSuccess:function(){aT.authUrl=null;aR()},onFailure:function(){}};T(Confluence.CreateJiraContent.getOAuthMessage({confluenceApplicationName:"Confluence"}));ax(".oauth-init",ax("#jiraserver-issue-messages")).click(function(aU){AppLinks.authenticateRemoteCredentials(aT.authUrl,aS.onSuccess,aS.onFailure);aU.preventDefault()})};var P=function(){O.$serverSelect.auiSelect2("close");O.$projectSelect.auiSelect2("close");O.$issueTypeSelect.auiSelect2("close");if(Confluence.CreateJiraContent.CreateIssue.getDialogObject().isCancelButtonClicked!==true){aH(ad())}};var aH=function(aR){if(aR.serverId&&aR.projectId&&aR.issueTypeId){aG.setItem(ap,JSON.stringify(aR))}};var W=function(aS){try{aS=aS||ap;var aR=JSON.parse(aG.getItem(aS));if(aR&&aR.serverId&&aR.projectId&&aR.issueTypeId){return aR}else{return false}}catch(aT){return false}};var F=function(aX){var aW=M.find(".dialog-content > .main-field"),aS=M.find(".dialog-content .summary-stored-value");if(aX){var aV=O.$projectSelect.val();var aR=O.$issueTypeSelect.val();if(aV!=-1&&aV!=null&&aR!=-1&&aR!=-1){var aU=y();if(aU){aS.remove();var aT=Confluence.CreateJiraContent.summaryStoredValue({storedValue:aU});ax(aT).insertBefore(M.find("#issue-content"));aW.addClass("hidden")}}}else{aW.removeClass("hidden");aS.addClass("hidden")}aw()};var y=function(){var aR=O.$projectSelect,aU=O.$issueTypeSelect;var aV=aR.auiSelect2("data").text,aT=aU.auiSelect2("data").text;var aW=aR.auiSelect2("container").find(".select2-chosen img"),aS=aU.auiSelect2("container").find(".select2-chosen img");if(aV&&aT&&aW&&aS){return{projectText:aV,issueTypeText:aT,projectIcon:aW.attr("src"),issueTypeIcon:aS.attr("src")}}else{return null}};var ae=function(aR,aS){return(aR.find('option[value="'+aS+'"]').length)};var X=function(aR,aS){if(ae(aR,aS)){aR.auiSelect2("val",aS);return true}else{b=false;return false}};var I=function(aR){var aT=function(aU){ah=aU;aD(aR)};var aS=function(){ah=(aR===g().id)?null:ah};Confluence.CreateJiraContent.JiraIssue.resolveEpicIssueType(aR,aT,aS)};var aD=function(aR){if(Z&&Z.readyState!==4&&Z.abort){Z.abort()}var aS=O.$jiraEpicContent;Z=ax.ajax({type:"GET",timeout:0,contentType:"application/json",url:AJS.Confluence.getContextPath()+"/rest/createjiracontent/1.0/find-epic-issue",data:{pageId:AJS.params.pageId,serverId:aR,epicIssueTypeId:ah},success:function(aU){if(!aU||!aU.epicKey){aS.empty();return}var aV=Confluence.CreateJiraContent.renderEpicContent({epicKey:aU.epicKey,epicHtmlPlaceHolder:aU.epicHtmlPlaceHolder});aS.html(aV);e=aS.find(".summary").text();var aT=aS.find("a:first-child").clone();aS.find(".jira-issue").html(aT);c(aS);aw()},error:function(aT){aS.empty();AJS.logError("confluence-jira-content:epicLinkJiraIssuePageHandling - Error when detect epic on page with status="+aT.status)}})};var c=function(aR){aR.find(".jira-issue").attr("title",e).tooltip({gravity:"sw"})};var d=function(){M.find("#create-issue-loading").remove()};var aL=function(){d();var aR=O.$serverSelect.val();if(aR){M.find("#jira-servers, .dialog-content, #prepare-issue-messages, .buttons-group, #text-suggestion").removeClass("hidden");O.$jiraEpicContent.empty();p()}};var l=function(){d();T("Unable to get a list of linked JIRA servers from Confluence. You may want to check your application links for more details.")};var aw=function(){if(Confluence.CreateJiraContent.CreateIssue.getDialogObject()){Confluence.CreateJiraContent.CreateIssue.getDialogObject().refresh()}};return{init:function(aR){ab(aR);u(O.$projectSelect,{containerCssClass:"select-container select-project-container",dropdownCssClass:"projects-dropdown",formatSelection:L,formatResult:L});u(O.$issueTypeSelect,{containerCssClass:"select-container select-issuetype-container",dropdownCssClass:"issue-types-dropdown",minimumResultsForSearch:-1,formatSelection:f,formatResult:f});m(false);E(O.$issueTypeSelect);b=W(ap);az();F(b!==false);au().pipe(aL,l)},createIssues:ar,validateCreateIssueForm:R,removeDisplayMessages:ao,bindHideEventToDialog:P,changeIssuesTypeIconForPreviewPanel:ak}})(AJS.$,window._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources', location = 'com/atlassian/confluence/plugins/createjiracontent/js/jiraissue-field-helper.js' */
Confluence.CreateJiraContent.JiraIssue=(function(f,m){var c="com.pyxis.greenhopper.jira:gh-epic-link";var p="/rest/greenhopper/1.0/api/epicproperties";var j="JIRA_EPIC_ISSUE_TYPE_";var l="CREATE_JIRA_ISSUE_FIELD_";var d,b;var i=function(q,r){if(d&&d.readyState!==4&&d.abort){d.abort()}if(!q.serverId||!q.projectId||!q.issueTypeId){AJS.logError(AJS.format("confluence-jira-content:discoverIssueTypeField - Error with parameters: serverId={0}, projectId={1}, issueTypeId={2}",q.serverId,q.projectId,q.issueTypeId));r&&r("Discover fields - error with parameters.");return}d=AJS.$.ajax({type:"GET",timeout:0,url:Confluence.getContextPath()+"/rest/jira-integration/1.0/servers/"+q.serverId+"/projects/"+q.projectId+"/issue-types/"+q.issueTypeId+"/fields-meta"}).pipe(function(s){if(!s||!s.fields){AJS.logError("confluence-jira-content:discoverIssueTypeField - Data discovering error! Unexpected data return.");r&&r("Discover fields - unexpected data return.");return}return s.fields});return d};var h=function(q,t,s){if(!q){AJS.logError(AJS.format("confluence-jira-content:resolveEpicIssueType - Error with parameters: serverId={0}",q));return}var r=j+q;if(Confluence.CreateJiraContent.JiraIssue.Cache.containKey(r)){t(Confluence.CreateJiraContent.JiraIssue.Cache.get(r));return}if(b&&b.readyState!==4&&b.abort){b.abort()}b=AppLinks.makeRequest({appId:q,type:"GET",url:p,dataType:"json",success:function(v){if(!v||!v.epicTypeId){AJS.logError("confluence-jira-content:resolveEpicIssueType - Data discovering error! Unexpected data return.");return}var u=v.epicTypeId;t(u);Confluence.CreateJiraContent.JiraIssue.Cache.put(r,u)},error:function(u){s(u.status);AJS.logError("confluence-jira-content:resolveEpicIssueType - Error with status="+u.status)}})};var o=function(r,q,s){var t=e(r);if(Confluence.CreateJiraContent.JiraIssue.Cache.containKey(t)){n(t,q,s);return}i(r,s).done(function(u){if(u){var v=AJS.$.extend({},a(u),k(u,r.defaultRequiredFields));Confluence.CreateJiraContent.JiraIssue.Cache.put(t,v);q(v)}}).fail(function(u){AJS.logError("confluence-jira-content:discoverIssueTypeField - Error with status="+u.status);s&&s(AJS.format("Discover fields - response error: {0}.",u.status))})};var n=function(t,r,s){var q=Confluence.CreateJiraContent.JiraIssue.Cache.get(t);if(q){r(q)}else{s&&s("Discover fields - unexpected data return.")}};var a=function(r){var q;m.find(r,function(t,s){if(t.schema.custom===c){q=s;return true}});return{epicField:q}};var k=function(q,s){var r=Confluence.CreateJiraContent.JiraIssue.FieldStatus.HIDDEN;var t={};f.each(q,function(u,v){if(u==="description"){r=(v.required==true?Confluence.CreateJiraContent.JiraIssue.FieldStatus.REQUIRED:Confluence.CreateJiraContent.JiraIssue.FieldStatus.VISIBLE)}else{if(v.required===true&&!v.hasDefaultValue&&!m.contains(s,u)){t[u]=v}}});return{descriptionFieldStatus:r,requiredFields:t}};var g=function(r,s){var t=e(s);if(Confluence.CreateJiraContent.JiraIssue.Cache.containKey(t)){var q=Confluence.CreateJiraContent.JiraIssue.Cache.get(t).requiredFields;return q[r].name}return""};var e=function(q){return l+q.serverId+"_"+q.projectId+"_"+q.issueTypeId};return{resolveEpicIssueType:h,getCreateIssueMeta:o,getFieldName:g}})(AJS.$,window._);Confluence.CreateJiraContent.JiraIssue.Cache=(function(){return{put:function(a,b){sessionStorage.setItem(a,JSON.stringify(b))},get:function(a){var b=sessionStorage.getItem(a);if(b){try{var d=JSON.parse(b)}catch(c){return null}return d}return null},containKey:function(a){return sessionStorage.getItem(a)!=null}}})();Confluence.CreateJiraContent.JiraIssue.FieldStatus={HIDDEN:-1,VISIBLE:0,REQUIRED:1};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources', location = 'com/atlassian/confluence/plugins/createjiracontent/js/jiraissue-data-helper.js' */
Confluence.CreateJiraContent.DataHelper=(function(e,m){var c;var l={},p=AJS.contextPath()+"/plugins/servlet/jira-integration/icons?serverId={0}&iconType={1}&{2}",i={};var h=function(r,q){return e.ajax({dataType:"json",timeout:0,url:r,success:q})};function o(){return h(AJS.Confluence.getContextPath()+"/rest/createjiracontent/1.0/get-jira-servers",function(q){if(q.length){e.each(q,function(r,s){l[s.id]=s})}})}function n(q){var r=(l[q])?l[q].projects:undefined;if(r){return e.Deferred().resolve(r)}else{if(c&&c.readyState!==4&&c.abort){c.abort()}c=h(AJS.contextPath()+"/rest/jira-integration/1.0/servers/"+q+"/projects",function(s){if(s.length){e.each(s,function(v,x){var w=m.filter(x.issuetypes,function(y){return !y.subtask});x.issueTypes=w;var u={};m.each(w,function(y){u[y.id]=y.iconUrl});var t={iconUrl:AJS.format(p,q,"project",x.avatarUrls["16x16"].split("/secure/projectavatar?")[1]),issueTypeIcons:u};i[a(q,x.id)]=t});l[q].projects=s}});return c}}function g(r,q){var s=m.find(k(r),function(t){return t.id===q});return s?s.issueTypes:[]}function f(q){return l[q]?l[q]:{}}function k(q){return(l[q]&&l[q].projects)?l[q].projects:[]}function d(q){l[q]&&delete l[q].projects}function j(r,q){var s=a(r,q);return i[s]?i[s].iconUrl:""}function b(s,r,t){var u=a(s,r);var q=i[u];return(q&&q.issueTypeIcons[t])?q.issueTypeIcons[t]:""}function a(r,q){return r+"-"+q}return{loadServers:o,loadProjects:n,getProjects:k,getIssueTypes:g,getServerById:f,getProjectIconUrl:j,getIssueTypeIconUrl:b,clearProjects:d}})(AJS.$,window._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources', location = 'com/atlassian/confluence/plugins/createjiracontent/soy/feature-discovery-templates.soy' */
// This file was automatically generated from feature-discovery-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.CreateJiraContent == 'undefined') { Confluence.CreateJiraContent = {}; }
if (typeof Confluence.CreateJiraContent.Templates == 'undefined') { Confluence.CreateJiraContent.Templates = {}; }
if (typeof Confluence.CreateJiraContent.Templates.FeatureDiscovery == 'undefined') { Confluence.CreateJiraContent.Templates.FeatureDiscovery = {}; }


Confluence.CreateJiraContent.Templates.FeatureDiscovery.createFeatureDiscoveryContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="create-issue-feature-discovery-content"><div class="feature-discovery-header"><h2>', soy.$$escapeHtml("Create JIRA issues from content"), '</h2></div><div class="feature-discovery-body"><p>', soy.$$escapeHtml("Highlight requirements, ideas or tasks discussed in pages and transition them to your team\x27s backlog in JIRA."), '</p><div class="feature-discovery-body-image"></div><div class="description"><p class="feature-discovery-body-left">', soy.$$escapeHtml("Select requirements on the page"), '</p><p class="feature-discovery-body-right">', soy.$$escapeHtml("Turn them into new stories in JIRA"), '</p></div></div><div class="feature-discovery-buttons"><button id="show-create-issue" class="aui-button">', soy.$$escapeHtml("Show me"), '</button><button id="feature-discovery-close" class="aui-button aui-button-link">', soy.$$escapeHtml("Close"), '</button></div><div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources', location = 'com/atlassian/confluence/plugins/createjiracontent/js/feature-discovery.js' */
Confluence.CreateJiraContent.FeatureDiscovery=(function(g){var f;var d=AJS.Meta.get("create-issue-metadata-show-discovery");var h=function(i){f=i};var e=function(i,l,m){var k=i.find("#feature-discovery-close");k.on("click",function(n){a();f.hide()});var j=i.find("#show-create-issue");j.on("click",function(n){a();f.hide();m(l)})};var c=function(i,j,k){i.html(Confluence.CreateJiraContent.Templates.FeatureDiscovery.createFeatureDiscoveryContent());e(i,j,k)};var b=function(){return d};var a=function(){d=false;g.ajax({url:AJS.Confluence.getContextPath()+"/rest/createjiracontent/1.0/metadata/discovered",type:"PUT",timeout:0})};return{shouldShowFeatureDiscovery:b,disableFeatureDiscovery:a,addFeatureDiscoveryContent:c,setFeatureDialogObject:h}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-mentions-plugin:help-dialog-extension', location = 'js/help-dialog.js' */
AJS.toInit(function(a){Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.Autoformat.push({action:"@",context:"autoformat.autocomplete",description:"Mention"})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/com/atlassian/confluence/plugins/like/js/like-namespace.js' */
define("confluence-like/like-namespace",["confluence"],function(a){return a.Likes||{}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-like/like-namespace","Confluence.Likes");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/com/atlassian/confluence/plugins/like/js/like.js' */
(function(c){function n(c){return AJS.contextPath()+"/rest/likes/1.0/content/"+c+"/likes"}var f=0,p=1,e,g={},q=AJS.$.Deferred();Confluence.Likes.getLikesCache=function(){return q.promise()};!(AJS.PageGadget||window.parent.AJS&&window.parent.AJS.PageGadget)&&AJS.toInit(function(){function o(b,a,d){a=Confluence.Likes.LikeSummaryFactory.getLikeSummary(b.likes,a,h);if(!a.key&&0<h.length&&("page"==b.content_type||"blogpost"==b.content_type))a.text="Be the first to like this";var c=[];c.push(a.text);
c=c.concat(a.args);(a=AJS.format.apply(AJS,c))&&0<a.length?d.html(a):d.empty();a&&(d.find(".likes").click(Confluence.Likes.showLikeUsers),Confluence.Binder.userHover(),"comment"==b.content_type&&d.prepend("<span class='comment-action-separator'>\u2022</span><span class='aui-icon aui-icon-small aui-iconfont-like-small'></span>"))}function i(b,a,d){if(void 0===b)throw Error("type is required");if(void 0===a)throw Error("contentId is required");if(void 0===d)throw Error("contentType is required");return function(){if("object"!==
typeof this||!this.nodeType||1!==this.nodeType||"A"!==this.nodeName)throw Error("this handler should be bound to a DOM anchor element");var k=c(this),e=arguments.callee,j=k.next(".like-summary");c.ajax({type:b===f?"POST":"DELETE",url:n(a),data:{"atlassian-token":AJS.Meta.get("atlassian-token")},dataType:"json",timeout:5E3}).fail(function(){var a=j.siblings(".like-error"),c;c=b===f?"Like failed":"Unlike failed";0===a.length?j.after('<span class="like-error" title="'+
c+'"></span>'):a.attr("title",c)}).success(function(){j.attr("data-liked",b===f);j.parent().find(".like-error").remove()});k.unbind("click",e).bind("click",b===f?i(p,a,d):i(f,a,d)).find(".like-button-text").html(b===f?"Unlike":"Like");g[a]=g[a]||{content_type:d,likes:[]};b===f?g[a].likes.push({user:{name:h}}):g[a].likes=c.grep(g[a].likes,function(a){return a.user.name!=h});b===f&&AJS.trigger("analytics",{name:"confluence."+d+".like.create",data:{pageID:AJS.Meta.get("page-id")}});
o(g[a],a,j);return!1}}Confluence.Likes.showLikeUsers=function(b){b&&b.preventDefault();b=c(this).data("content-id");e&&(e.remove(),e=void 0);e=new AJS.Dialog(400,365,"likes-dialog");e.addHeader("People who like this");e.addPanel("Panel 1","<div class='spinner-container'></div>");e.addCancel("Close",function(a){a.remove();e=void 0});e.getCurrentPanel().setPadding(0);var a=e,d=e.show,k=AJS.dim;AJS.dim=function(){};try{d.apply(a,[])}finally{AJS.dim=k}c.ajax({type:"GET",
url:n(b),data:{expand:"user",max:50},dataType:"json"}).done(function(a){if(e.popup.element.is(":visible")){a.remoteUser=h;e.getCurrentPanel().html(Confluence.Templates.Likes.likesDialog(a));c("#likes-dialog").find(".likes-dialog-follow-button").click(function(){var a=c(this);c.ajax({type:"PUT",url:AJS.contextPath()+"/rest/likes/1.0/user/"+AJS.Meta.get("remote-user")+"/following?username="+a.data("username"),contentType:"application/json",dataType:"json"}).done(function(){a.replaceWith("Following")})})}})};
var h=AJS.Meta.get("remote-user")||"",l=0===h.length,m=c(Confluence.Templates.Likes.likeSection({showLikeButton:!l}));c("<div id='likes-and-labels-container' />").insertBefore("#labels-section").append(m).append(c("#labels-section"));AJS.Meta.get("page-id")&&c.ajax({type:"GET",url:n(AJS.Meta.get("page-id")),data:{commentLikes:!0},dataType:"json"}).done(function(b){if(AJS.Meta.get("remote-user")){var a=0<c.grep(b.likes,function(a){return a.user.name==AJS.Meta.get("remote-user")}).length,d=b.content_type;
m.find(".like-button").click(a?i(p,AJS.Meta.get("page-id"),d):i(f,AJS.Meta.get("page-id"),d)).find(".like-button-text").html(a?"Unlike":"Like")}a=m.find(".like-summary");o(b,b.content_id,a);""==a.html()&&l&&m.hide();g[b.content_id]=b;Confluence.Likes.reload(b.commentLikes)});Confluence.Likes.appendAction=function(b){var b=b.find(".comment-actions-primary"),a=b.find("li[class~='comment-date']"),d=c(Confluence.Templates.Likes.commentLikeSection({showLikeButton:!l}));
0==a.length?b.find("li:last-child").after(d):a.before(d)};Confluence.Likes.reload=function(b){c.each(b,function(a,b){var e=c("#comment-"+a).find(".like-summary");o(b,a,e);g[a]=b});l&&c("#page-comments").find(".like-summary:empty").each(function(){c(this).closest(".comment-action-like").hide()});c("#page-comments .comment").each(function(){Confluence.Likes.updateComment(c(this),b)});q.resolve(g)};Confluence.Likes.updateComment=function(b,a){var d=b.attr("id");if(!d)return!0;var e=(/^comment-(\d+)$/.exec(d)||
[])[1];if(!e)throw Error('Expecting ID attribute of comment to be in format "comment-XXX", found: '+d);d=a[e]&&AJS.Meta.get("remote-user")&&0<c.grep(a[e].likes,function(a){return a.user.name==AJS.Meta.get("remote-user")}).length;b.find(".like-button").click(d?i(p,e,"comment"):i(f,e,"comment")).find(".like-button-text").html(d?"Unlike":"Like")};Confluence.Likes.appendAction(c("#page-comments"))})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/com/atlassian/confluence/plugins/like/js/like-summary-factory.js' */
define("confluence-like/like-summary-factory",["ajs","confluence/templates"],function(a,g){var h={"likes.summary.you":"You like this","likes.summary.1.promoted":"{0} likes this","likes.summary.2.promoted":"{0} and {1} like this","likes.summary.3.promoted":"{0}, {1} and {2} like this","likes.summary.1.non-promoted":"{0} likes this","likes.summary.x.non-promoted":"\u003ca href=\"\" {1}\u003e{0} people\u003c/a\u003e like this",
"likes.summary.you.1.promoted":"You and {0} like this","likes.summary.you.2.promoted":"You, {0} and {1} like this","likes.summary.you.3.promoted":"You, {0}, {1} and {2} like this","likes.summary.you.1.non-promoted":"You and {0} like this","likes.summary.you.x.non-promoted":"You and \u003ca href=\"\" {1}\u003e{0} others\u003c/a\u003e like this","likes.summary.1.promoted.1.non-promoted":"{0} and {1} like this",
"likes.summary.1.promoted.x.non-promoted":"{0} and \u003ca href=\"\" {2}\u003e{1} others\u003c/a\u003e like this","likes.summary.2.promoted.1.non-promoted":"{0}, {1} and {2} like this","likes.summary.2.promoted.x.non-promoted":"{0}, {1} and \u003ca href=\"\" {3}\u003e{2} others\u003c/a\u003e like this","likes.summary.3.promoted.1.non-promoted":"{0}, {1}, {2} and {3} like this","likes.summary.3.promoted.x.non-promoted":"{0}, {1}, {2} and \u003ca href=\"\" {4}\u003e{3} others\u003c/a\u003e like this","likes.summary.you.1.promoted.1.non-promoted":"You, {0} and {1} like this",
"likes.summary.you.1.promoted.x.non-promoted":"You, {0} and \u003ca href=\"\" {2}\u003e{1} others\u003c/a\u003e like this","likes.summary.you.2.promoted.1.non-promoted":"You, {0}, {1} and {2} like this","likes.summary.you.2.promoted.x.non-promoted":"You, {0}, {1} and \u003ca href=\"\" {3}\u003e{2} others\u003c/a\u003e like this","likes.summary.you.3.promoted.1.non-promoted":"You, {0}, {1}, {2} and {3} like this","likes.summary.you.3.promoted.x.non-promoted":"You, {0}, {1}, {2} and \u003ca href=\"\" {4}\u003e{3} others\u003c/a\u003e like this"};
return{getLikeSummary:function(a,c,j){if(!a||0===a.length)return{key:"",text:""};if(!c)throw Error("contentId is required.");var i,e=[],f=[];$.each(a,function(a,b){b.user&&b.user.name==j?i=b:3>e.length&&b.user.followedByRemoteUser?e.push(b):f.push(b)});var a=["likes.summary"],d=[];null!=i&&a.push(".you");0<e.length&&(a.push("."),a.push(e.length),a.push(".promoted"),$.each(e,function(a,b){d.push(g.Likes.userLink(b))}));1===f.length?(a.push(".1.non-promoted"),d.push(g.Likes.userLink(f[0]))):1<f.length&&
(a.push(".x.non-promoted"),d.push(f.length),d.push('class="likes" data-content-id="'+c+'"'));c=a.join("");return{key:c,args:0===d.length?void 0:d,text:c in h?h[c]:""}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-like/like-summary-factory","Confluence.Likes.LikeSummaryFactory");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/templates/com/atlassian/confluence/plugins/like/soy/like.soy' */
// This file was automatically generated from like.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Likes == 'undefined') { Confluence.Templates.Likes = {}; }


Confluence.Templates.Likes.likeButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="" class="like-button">', (opt_data.useIcon) ? '<span class="aui-icon aui-icon-small aui-iconfont-like"></span>' : '', '<span class="like-button-text">', soy.$$escapeHtml("Like"), '</span></a>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Likes.likeSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="likes-section">');
  if (opt_data.showLikeButton) {
    Confluence.Templates.Likes.likeButton({useIcon: true}, output);
  }
  output.append('<span class="like-summary"></span></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Likes.commentLikeSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="comment-action-like">');
  if (opt_data.showLikeButton) {
    Confluence.Templates.Likes.likeButton({useIcon: false}, output);
  }
  output.append('<span class="like-summary"></span></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Likes.likesDialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="likes-dialog-body"><ol>');
  var likeList26 = opt_data.likes;
  var likeListLen26 = likeList26.length;
  for (var likeIndex26 = 0; likeIndex26 < likeListLen26; likeIndex26++) {
    var likeData26 = likeList26[likeIndex26];
    output.append('<li><div class="avatar-container"><a href="', soy.$$escapeHtml(likeData26.user.url), '"><img class="like-user-avatar" src="', soy.$$escapeHtml(likeData26.user.avatarUrl), '"></a></div><div class="like-user"><a class="like-user-link" href="', soy.$$escapeHtml(likeData26.user.url), '">', soy.$$escapeHtml(likeData26.user.fullName), '</a></div><div class="follow-button-container aui-toolbar"><ul class="toolbar-group"><li class="toolbar-item">', (likeData26.user.followedByRemoteUser) ? soy.$$escapeHtml("Following") : (opt_data.remoteUser && opt_data.remoteUser.length > 0) ? '<button data-username="' + soy.$$escapeHtml(likeData26.user.name) + '" class="likes-dialog-follow-button toolbar-trigger">' + soy.$$escapeHtml("Follow") + '</button>' : '', '</li></ul></div></li>');
  }
  output.append('</ol></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Likes.userLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(opt_data.user.url), '" class="confluence-userlink" data-username="', soy.$$escapeHtml(opt_data.user.name), '">', soy.$$escapeHtml(opt_data.user.fullName), '</a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/user.soy' */
// This file was automatically generated from user.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.User == 'undefined') { Confluence.Templates.User = {}; }


Confluence.Templates.User.userLinkUrl = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml("/wiki"), '/display/~', soy.$$escapeUri(opt_data.username));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.logo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.profilePictureInfo['default'] && opt_data.username == opt_data.currentUsername) {
    output.append('<a ', (opt_data.canView) ? ' ' + ((! opt_data.disableUserHover) ? 'class="userLogoLink"' : '') + ' data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : '', ' href="', soy.$$escapeHtml("/wiki"), '/users/profile/editmyprofilepicture.action" title="', soy.$$escapeHtml("Add a picture of yourself"), '"><img class="userLogo logo defaultLogo" src="', soy.$$escapeHtml("/wiki/s/en_GB/6138/e4fffe5d442902a22c46f8bee7fc526502e7c91c.1/_"), '/images/icons/profilepics/add_profile_pic.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml("Add a picture of yourself"), '"></a>');
  } else {
    if (opt_data.profilePictureInfo.anonymous) {
      output.append('<img class="userLogo logo anonymous" src="', soy.$$escapeHtml("/wiki/s/en_GB/6138/e4fffe5d442902a22c46f8bee7fc526502e7c91c.1/_"), '/images/icons/profilepics/anonymous.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml("Anonymous"), '" title="', soy.$$escapeHtml("Anonymous"), '">');
    } else if (opt_data.canView) {
      output.append('<a ', (! opt_data.disableUserHover) ? 'class="userLogoLink"' : '', ' data-username="', soy.$$escapeHtml(opt_data.username), '" href="');
      Confluence.Templates.User.userLinkUrl(opt_data, output);
      output.append('"><img class="userLogo logo" src="', soy.$$escapeHtml("/wiki"), soy.$$escapeHtml(opt_data.profilePictureInfo.downloadPath), '" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml(opt_data.username), '" title="', soy.$$escapeHtml(opt_data.username), '"></a>');
    } else {
      output.append('<img class="userLogo logo anonymous" src="', soy.$$escapeHtml("/wiki/s/en_GB/6138/e4fffe5d442902a22c46f8bee7fc526502e7c91c.1/_"), '/images/icons/profilepics/anonymous.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml(opt_data.username), '" title="', soy.$$escapeHtml(opt_data.username), '">');
    }
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.usernameLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.username && opt_data.username != '') {
    output.append('<a href="');
    Confluence.Templates.User.userLinkUrl(opt_data, output);
    output.append('"', (opt_data.canView) ? 'class="url fn confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : 'class="url fn"', '>', (opt_data.fullName && opt_data.fullName != '') ? soy.$$escapeHtml(opt_data.fullName) : soy.$$escapeHtml(opt_data.username), '</a>');
  } else {
    output.append(soy.$$escapeHtml("Anonymous"));
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.fullNameOrAnonymous = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.user && opt_data.user.fullName) ? soy.$$escapeHtml(opt_data.user.fullName) : soy.$$escapeHtml("Anonymous"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.usernameOrAnonymous = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.user && opt_data.user.name) ? soy.$$escapeHtml(opt_data.user.name) : soy.$$escapeHtml("Anonymous"));
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/icons.soy' */
// This file was automatically generated from icons.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Icons == 'undefined') { Confluence.Templates.Icons = {}; }


Confluence.Templates.Icons.contentIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.content.type == 'trackback') ? '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon icon-trackback" title="' + soy.$$escapeHtml("Track back") + '">' + soy.$$escapeHtml("Track back") + ':</a>' : '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon ' + soy.$$escapeHtml(opt_data.iconCss) + '" title="' + soy.$$escapeHtml(opt_data.iconTitle) + '">' + soy.$$escapeHtml(opt_data.iconTitle) + '</a>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Icons.contentIconFont = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.content.type == 'trackback') ? '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon icon-trackback" title="' + soy.$$escapeHtml("Track back") + '">' + soy.$$escapeHtml("Track back") + ':</a>' : '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" title="' + soy.$$escapeHtml(opt_data.iconTitle) + '"><span class="icon ' + soy.$$escapeHtml(opt_data.iconCss) + '">' + soy.$$escapeHtml(opt_data.iconTitle) + '</span></a>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Icons.iconSpan = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="icon', (opt_data.type) ? ' icon-' + soy.$$escapeHtml(opt_data.type) : '', ' ', (opt_data.additionalClasses) ? soy.$$escapeHtml(opt_data.additionalClasses) : '', '">', (opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '', '</span>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/captcha.soy' */
// This file was automatically generated from captcha.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Captcha == 'undefined') { Confluence.Templates.Captcha = {}; }


Confluence.Templates.Captcha.form = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="captcha field-group"><label id="captcha-response-label" for="captcha-response"><span class="assistive">', soy.$$escapeHtml("If you are unable to use this CAPTCHA please \x3ca href\x3d\x22administrators.action\x22 tabindex\x3d\x225\x22\x3econtact your administrator\x3c/a\x3e for assistance."), '</span></label>');
  Confluence.Templates.Captcha.image(opt_data, output);
  output.append('<input type="text" id="captcha-response" name="captchaResponse" value="" class="text" placeholder="', soy.$$escapeHtml("Type the word above"), '">');
  if (opt_data.captchaErrors && opt_data.captchaErrors.length) {
    var errorList13 = opt_data.captchaErrors;
    var errorListLen13 = errorList13.length;
    for (var errorIndex13 = 0; errorIndex13 < errorListLen13; errorIndex13++) {
      var errorData13 = errorList13[errorIndex13];
      aui.message.warning({content: errorData13}, output);
    }
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Captcha.image = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<img src="', soy.$$escapeHtml("/wiki"), '/jcaptcha?id=', soy.$$escapeHtml(opt_data.captchaId), '" class="captcha-image" alt="', soy.$$escapeHtml("CAPTCHA image"), '"><input type="hidden" name="captchaId" value="', soy.$$escapeHtml(opt_data.captchaId), '" placeholder="', soy.$$escapeHtml("Type the word above"), '">');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/notifications.soy' */
// This file was automatically generated from notifications.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Notifications == 'undefined') { Confluence.Templates.Notifications = {}; }


Confluence.Templates.Notifications.notLoggedIn = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((! opt_data.isUserAuthenticated) ? '<div id="anonymous-warning" class="aui-message warning closeable">' + "You are not logged in. Any changes you make will be marked as \x3cspan class\x3d\x22smalltext\x22\x3eanonymous\x3c/span\x3e." + ((! opt_data.isExternalUserManagementEnabled) ? ' ' + AJS.format("You may want to \x3ca href\x3d\x22{0}\x22\x3eLog In\x3c/a\x3e if you already have an account.",opt_data.loginURL) : '') + '</div>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Notifications.actionErrors = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.actionErrors.length > 0) {
    output.append('<div class="aui-message aui-message-error ', (opt_data.closeable) ? 'closeable' : '', '"><p class="title">', soy.$$escapeHtml("The following error(s) occurred:"), '</p><span class="aui-icon icon-error"></span><ul>');
    var errorHtmlList24 = opt_data.actionErrors;
    var errorHtmlListLen24 = errorHtmlList24.length;
    for (var errorHtmlIndex24 = 0; errorHtmlIndex24 < errorHtmlListLen24; errorHtmlIndex24++) {
      var errorHtmlData24 = errorHtmlList24[errorHtmlIndex24];
      output.append('<li>', errorHtmlData24, '</li>');
    }
    output.append('</ul></div>');
  }
  output.append('<div id="action-messages"></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api', location = 'browser-metrics.js' */
(function(){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   2.0.0
 */
var j,y,e,r,p,x,F,G,u,q,H,K,J,s,i,f,m,D,v,n,L,B,O,l,z,h,g,C,o,d,w,c,Q,I,a,E,b,M,N,t,P;(function(){function aL(a3){return typeof a3==="function"||typeof a3==="object"&&a3!==null}function aj(a3){return typeof a3==="function"}function a1(a3){return typeof a3==="object"&&a3!==null}var aY;if(!Array.isArray){aY=function(a3){return Object.prototype.toString.call(a3)==="[object Array]"}}else{aY=Array.isArray}var aD=aY;var ao=Date.now||function(){return new Date().getTime()};function ar(){}var W=Object.create||function(a3){if(arguments.length>1){throw new Error("Second argument not supported")}if(typeof a3!=="object"){throw new TypeError("Argument must be an object")}ar.prototype=a3;return new ar()};var aW=0;var af=function aJ(a4,a3){aV[aW]=a4;aV[aW+1]=a3;aW+=2;if(aW===2){T()}};var aC=typeof window!=="undefined"?window:{};var am=aC.MutationObserver||aC.WebKitMutationObserver;var ae=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function aG(){return function(){process.nextTick(aX)}}function aR(){var a5=0;var a3=new am(aX);var a4=document.createTextNode("");a3.observe(a4,{characterData:true});return function(){a4.data=a5=++a5%2}}function aH(){var a3=new MessageChannel();a3.port1.onmessage=aX;return function(){a3.port2.postMessage(0)}}function aN(){return function(){setTimeout(aX,1)}}var aV=new Array(1000);function aX(){for(var a4=0;a4<aW;a4+=2){var a5=aV[a4];var a3=aV[a4+1];a5(a3);aV[a4]=undefined;aV[a4+1]=undefined}aW=0}var T;if(typeof process!=="undefined"&&{}.toString.call(process)==="[object process]"){T=aG()}else{if(am){T=aR()}else{if(ae){T=aH()}else{T=aN()}}}function ah(){}var at=void 0;var aO=1;var au=2;var aU=new a0();function aS(){return new TypeError("You cannot resolve a promise with itself")}function aB(){return new TypeError("A promises callback cannot return that same promise.")}function aK(a4){try{return a4.then}catch(a3){aU.error=a3;return aU}}function V(a7,a5,a4,a3){try{a7.call(a5,a4,a3)}catch(a6){return a6}}function aM(a5,a3,a4){af(function(a8){var a7=false;var a6=V(a4,a3,function(a9){if(a7){return}a7=true;if(a3!==a9){ac(a8,a9)}else{ab(a8,a9)}},function(a9){if(a7){return}a7=true;aA(a8,a9)},"Settle: "+(a8._label||" unknown promise"));if(!a7&&a6){a7=true;aA(a8,a6)}},a5)}function X(a4,a3){if(a3._state===aO){ab(a4,a3._result)}else{if(a4._state===au){aA(a4,a3._result)}else{a2(a3,undefined,function(a5){ac(a4,a5)},function(a5){aA(a4,a5)})}}}function Y(a5,a3){if(a3.constructor===a5.constructor){X(a5,a3)}else{var a4=aK(a3);if(a4===aU){aA(a5,aU.error)}else{if(a4===undefined){ab(a5,a3)}else{if(aj(a4)){aM(a5,a3,a4)}else{ab(a5,a3)}}}}}function ac(a4,a3){if(a4===a3){aA(a4,aS())}else{if(aL(a3)){Y(a4,a3)}else{ab(a4,a3)}}}function aF(a3){if(a3._onerror){a3._onerror(a3._result)}aa(a3)}function ab(a4,a3){if(a4._state!==at){return}a4._result=a3;a4._state=aO;if(a4._subscribers.length===0){}else{af(aa,a4)}}function aA(a4,a3){if(a4._state!==at){return}a4._state=au;a4._result=a3;af(aF,a4)}function a2(a3,a8,a7,a6){var a5=a3._subscribers;var a4=a5.length;a3._onerror=null;a5[a4]=a8;a5[a4+aO]=a7;a5[a4+au]=a6;if(a4===0&&a3._state){af(aa,a3)}}function aa(a7){var a6=a7._subscribers;var a3=a7._state;if(a6.length===0){return}var a9,a8,a5=a7._result;for(var a4=0;a4<a6.length;a4+=3){a9=a6[a4];a8=a6[a4+a3];if(a9){aQ(a3,a9,a8,a5)}else{a8(a5)}}a7._subscribers.length=0}function a0(){this.error=null}var ai=new a0();function az(a5,a3){try{return a5(a3)}catch(a4){ai.error=a4;return ai}}function aQ(a9,bb,a8,a5){var a3=aj(a8),a7,a6,ba,a4;if(a3){a7=az(a8,a5);if(a7===ai){a4=true;a6=a7.error;a7=null}else{ba=true}if(bb===a7){aA(bb,aB());return}}else{a7=a5;ba=true}if(bb._state!==at){}else{if(a3&&ba){ac(bb,a7)}else{if(a4){aA(bb,a6)}else{if(a9===aO){ab(bb,a7)}else{if(a9===au){aA(bb,a7)}}}}}}function Z(a7,a6){try{a6(function a3(a8){ac(a7,a8)},function a5(a8){aA(a7,a8)})}catch(a4){aA(a7,a4)}}function aZ(a5,a3,a4){if(a5===aO){return{state:"fulfilled",value:a4}}else{return{state:"rejected",reason:a4}}}function aT(a5,a3,a6,a4){this._instanceConstructor=a5;this.promise=new a5(ah,a4);this._abortOnReject=a6;if(this._validateInput(a3)){this._input=a3;this.length=a3.length;this._remaining=a3.length;this._init();if(this.length===0){ab(this.promise,this._result)}else{this.length=this.length||0;this._enumerate();if(this._remaining===0){ab(this.promise,this._result)}}}else{aA(this.promise,this._validationError())}}aT.prototype._validateInput=function(a3){return aD(a3)};aT.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")};aT.prototype._init=function(){this._result=new Array(this.length)};var aE=aT;aT.prototype._enumerate=function(){var a5=this.length;var a6=this.promise;var a3=this._input;for(var a4=0;a6._state===at&&a4<a5;a4++){this._eachEntry(a3[a4],a4)}};aT.prototype._eachEntry=function(a4,a3){var a5=this._instanceConstructor;if(a1(a4)){if(a4.constructor===a5&&a4._state!==at){a4._onerror=null;this._settledAt(a4._state,a3,a4._result)}else{this._willSettleAt(a5.resolve(a4),a3)}}else{this._remaining--;this._result[a3]=this._makeResult(aO,a3,a4)}};aT.prototype._settledAt=function(a5,a3,a4){var a6=this.promise;if(a6._state===at){this._remaining--;if(this._abortOnReject&&a5===au){aA(a6,a4)}else{this._result[a3]=this._makeResult(a5,a3,a4)}}if(this._remaining===0){ab(a6,this._result)}};aT.prototype._makeResult=function(a5,a3,a4){return a4};aT.prototype._willSettleAt=function(a4,a3){var a5=this;a2(a4,undefined,function(a6){a5._settledAt(aO,a3,a6)},function(a6){a5._settledAt(au,a3,a6)})};var ap=function an(a3,a4){return new aE(this,a3,true,a4).promise};var av=function ad(a3,a4){var ba=this;var a9=new ba(ah,a4);if(!aD(a3)){aA(a9,new TypeError("You must pass an array to race."));return a9}var a6=a3.length;function a8(bb){ac(a9,bb)}function a7(bb){aA(a9,bb)}for(var a5=0;a9._state===at&&a5<a6;a5++){a2(ba.resolve(a3[a5]),undefined,a8,a7)}return a9};var al=function aq(a4,a3){var a6=this;if(a4&&typeof a4==="object"&&a4.constructor===a6){return a4}var a5=new a6(ah,a3);ac(a5,a4);return a5};var S=function ax(a4,a3){var a6=this;var a5=new a6(ah,a3);aA(a5,a4);return a5};var ay=0;function aP(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function ag(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var aI=U;function U(a3){this._id=ay++;this._state=undefined;this._result=undefined;this._subscribers=[];if(ah!==a3){if(!aj(a3)){aP()}if(!(this instanceof U)){ag()}Z(this,a3)}}U.all=ap;U.race=av;U.resolve=al;U.reject=S;U.prototype={constructor:U,then:function(a7,a6){var a4=this;var a5=a4._state;if(a5===aO&&!a7||a5===au&&!a6){return this}var a9=new this.constructor(ah);var a3=a4._result;if(a5){var a8=arguments[a5-1];af(function(){aQ(a5,a9,a8,a3)})}else{a2(a4,a9,a7,a6)}return a9},"catch":function(a3){return this.then(null,a3)}};var ak=function R(){var a4;if(typeof global!=="undefined"){a4=global}else{if(typeof window!=="undefined"&&window.document){a4=window}else{a4=self}}var a3="Promise" in a4&&"resolve" in a4.Promise&&"reject" in a4.Promise&&"all" in a4.Promise&&"race" in a4.Promise&&function(){var a5;new a4.Promise(function(a6){a5=a6});return aj(a5)}();if(!a3){a4.Promise=aI}};var aw={Promise:aI,polyfill:ak};if(true){j=function(){return aw}()}else{if(typeof module!=="undefined"&&module.exports){module.exports=aw}else{if(typeof this!=="undefined"){this["ES6Promise"]=aw}}}}.call(this));y=function(S){var R=S.Promise;return R}(j);e=function(){return window}();r=function(T){var S=T.HTMLElement.prototype;var R=S.matches||S.msMatchesSelector||S.webkitMatchesSelector||S.mozMatchesSelector||S.oMatchesSelector;return R}(e);p=function k(R){var S=false;return function(){if(!S){S=true;setTimeout(function(){S=false;R()},1)}}};x=function(R,U){function T(X){this.callback=X;this.elements=[]}T.prototype={observe:function(ae,am){function Y(an){al.push(an);X()}function ak(ap){var ao=ap.target;if(!ao){return}var an=ao.parentNode;if(!af(an)){return}if(aj&&W(aj,ao)){return}if(!ah||ah.target!==an){ag.push(ah=V(an))}if(an){if(!ah.addedNodes){ah.addedNodes=[]}ah.addedNodes.push(ao)}else{if(!ah.removedNodes){ah.removedNodes=[]}ah.removedNodes.push(ao)}aj=ao}function ad(an){return am.attributes&&(am.subtree||an===ae)}function af(an){return am.childList&&(am.subtree||an===ae)}var ab=this;var aj;var ah;var al=[];var ag=[];var X=R(function(){var an=al.length;for(var ao=0;ao<an;ao++){ak(al[ao])}ab.callback(ag);al=[];ag=[];aj=undefined;ah=undefined});var ai={};var aa=[];var ac=R(function(){var an=aa.length;ab.callback(aa);aa.splice(0,an)});var Z={target:ae,options:am,insertHandler:Y,removeHandler:Y,attributeHandler:function(at){var aq=at.target;if(!ad(aq)){return}var ao=at.attrName;var ap=at.prevValue;var ar=at.newValue;var an=V(aq,"attributes");an.attributeName=ao;if(am.attributeOldValue){an.oldValue=ai[ao]||ap||null}aa.push(an);if(am.attributeOldValue){ai[ao]=ar}ac()}};this.elements.push(Z);if(am.childList){ae.addEventListener("DOMNodeInserted",Z.insertHandler);ae.addEventListener("DOMNodeRemoved",Z.removeHandler)}if(am.attributes){ae.addEventListener("DOMAttrModified",Z.attributeHandler)}return this},disconnect:function(){this.elements.forEach(function(X){X.target.removeEventListener("DOMNodeInserted",X.insertHandler);X.target.removeEventListener("DOMNodeRemoved",X.removeHandler);X.target.removeEventListener("DOMAttrModified",X.attributeHandler)});this.elements=[];return this}};function V(Y,X){return{addedNodes:null,attributeName:null,attributeNamespace:null,nextSibling:null,oldValue:null,previousSibling:null,removedNodes:null,target:Y,type:X||"childList"}}var S=U.HTMLElement.prototype.contains;function W(X,Y){if(X.nodeType!==1){return false}return X.contains?X.contains(Y):S.call(X,Y)}return T}(p,e);F=function(S,R){return R.MutationObserver||R.WebkitMutationObserver||R.MozMutationObserver||S}(x,e);G=function(){function R(){this._items={};this.length=0}R.prototype.add=function(T,S){if(!this._items.hasOwnProperty(T)){this.length++;this._items[T]=[]}this._items[T].push(S)};R.prototype.remove=function(V,T){var S,U=false;if(this._items.hasOwnProperty(V)){if(arguments.length===1){delete this._items[V];U=true}else{S=this._items[V].indexOf(T);if(S>-1){this._items[V].splice(S,1);if(this._items[V].length===0){delete this._items[V]}U=true}}}return U};R.prototype.get=function(S){if(this._items.hasOwnProperty(S)){return this._items[S]}return[]};R.prototype.forEach=function(T){var S=this._items;Object.keys(S).forEach(function(U){T(S[U],U)})};return R}();u=function(aa,ab,T,V,X){var Z,U=false,W;W=new V();function S(ac,ad){if(!U){Z.observe(X.document,{attributes:true,childList:true,subtree:true});U=true}W.add(ac,ad)}function Y(ac,ad){W.remove.apply(W,arguments);if(W.length===0){Z.disconnect();U=false}}Z=new T(function(ac){ac.forEach(function(ae){var ad=ae.type==="childList"&&ae.addedNodes&&ae.addedNodes.length>0;var af=ae.type==="attributes";if(!ad&&!af){return}W.forEach(function(ah,ag){if(ae.target.querySelector(ag)||ab.call(ae.target,ag)){ah.forEach(function(ai){ai()});Y(ag)}})})});function R(ad){var ae;if(!ad.forEach){ad=[ad]}var ac=new aa(function(ai,ah){var aj=[];var af=[];ad.forEach(function(ak){var am;var al;if(!X.document.querySelector(ak)){am=new aa(function(an){S(ak,an);al=function(){Y(ak,an)}});aj.push(am);af.push(al)}});function ag(){af.forEach(function(ak){ak()})}aa.all(aj).then(ag).then(ai,ah);ae=function(){ag();ah()}});ac.dismiss=ae;return ac}return R}(y,r,F,G,e);q=function(aa,ab,S,U,X){var Z,T=false,W;W=new U();function R(ac,ad){if(!T){Z.observe(X.document,{childList:true,subtree:true});T=true}W.add(ac,ad)}function Y(ac,ad){W.remove.apply(W,arguments);if(W.length===0){Z.disconnect();T=false}}Z=new S(function(ac){ac.forEach(function(ad){var ae=ad.type==="childList"&&ad.removedNodes&&ad.removedNodes.length>0;if(ae){W.forEach(function(ai,af){var aj;for(var ah=0;ah<ad.removedNodes.length;ah++){aj=ad.removedNodes[ah];if(aj.querySelector&&(aj.querySelector(af)||ab.call(aj,af))){for(var ag=0;ag<ai.length;ag++){ai[ag]()}Y(af)}}})}})});function V(ad){var ae;if(!ad.forEach){ad=[ad]}var ac=new aa(function(ai,ah){var aj=[];var af=[];ad.forEach(function(ak){var am;var al;if(X.document.querySelector(ak)){am=new aa(function(an){R(ak,an);al=function(){Y(ak,an)}});aj.push(am);af.push(al)}});function ag(){af.forEach(function(ak){ak()})}aa.all(aj).then(ag).then(ai,ah);ae=function(){ag();ah()}});ac.dismiss=ae;return ac}return V}(y,r,F,G,e);H=function(){var S={};var T={};var R=function(U,W,V){if(!T.hasOwnProperty(U)){T[U]=[]}if(W){T[U].push({callback:W,once:V})}};S.on=function(U,V){R(U,V,false)};S.one=function(U,V){R(U,V,true)};S.trigger=function(U,V){var W=[];(T[U]||[]).forEach(function(X){X.callback.apply(undefined,[V]);if(!X.once){W.push(X)}});if(W.length===0){delete T[U]}else{T[U]=W}};return S}();K=function(R){return function S(){return R.performance&&R.performance.navigation&&R.performance.timing&&typeof R.performance.timing.navigationStart!=="undefined"}}(e);J=function(S){function R(U,T){return new S(function(W){var X;function V(){var Y=U();if(Y!==undefined){clearInterval(X);W(Y)}}X=setInterval(V,T);V()})}return R}(y);s=function(V,Y,W,T){var U=["unloadEventStart","unloadEventEnd","redirectStart","redirectEnd","fetchStart","domainLookupStart","domainLookupEnd","connectStart","connectEnd","secureConnectionStart","requestStart","responseStart","responseEnd","domLoading","domInteractive","domContentLoadedEventStart","domContentLoadedEventEnd","domComplete","loadEventStart","loadEventEnd"];function R(){var Z=V.performance.timing.loadEventEnd>0;var aa={};if(Z){U.forEach(function ab(ac){var ad=V.performance.timing[ac];var ae=ad>0;if(ae){aa[ac]=ad-V.performance.timing.navigationStart}});return aa}}var X;function S(){if(!Y()){return W.reject("The navigation timing API is required to produce a report for this navigation.")}if(typeof X==="undefined"){X=T(R,250)}return X}return S}(e,K,y,J);i=function(T,S,U){function R(V){return S().then(function(){var W=V.isInitial?T.performance.timing.navigationStart:V.start;return{readyForUser:Math.round(V.end-W)}})}return R}(e,s,y);f=function(S){return function R(T){return S(T).then(function(U){var V;var X=T.threshold;var W=T.threshold*4;if(U.readyForUser<X){V=1}else{if(U.readyForUser<W){V=0.5}else{V=0}}return{apdex:V}})}}(i);m=function(V,U,Y){function X(){return T().then(function(Z){return{firstPaint:Math.round(Z)}},function(){return{}})}function R(){return V.chrome&&V.chrome.loadTimes}function W(){return typeof V.performance.timing.msFirstPaint!=="undefined"}function S(){if(R()&&V.chrome.loadTimes().firstPaintTime>0){return V.chrome.loadTimes().firstPaintTime*1000-V.performance.timing.navigationStart}else{if(W()&&V.performance.timing.msFirstPaint>0){return V.performance.timing.msFirstPaint-V.performance.timing.navigationStart}}}function T(){if(R()||W()){return U(S,250)}else{return Y.reject("The browser does not have a first paint metric")}}return X}(e,J,y);D=function A(R){return{isInitial:R.isInitial}};v=function(T,U){var V="browser-metrics-journey";function S(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(Y){var X=T.Math.random()*16|0;var W=Y==="x"?X:X&3|8;return W.toString(16)})}function R(){if(typeof T.sessionStorage==="undefined"){return U.reject("sessionStorage is required to produce a report for this navigation.")}if(T.sessionStorage.getItem(V)===null){T.sessionStorage.setItem(V,S())}return U.resolve({journeyId:T.sessionStorage.getItem(V)})}return R}(e,y);n=function(){function R(S){return{key:S.key}}return R}();L=function(S,T){function R(V){var U={};if(V.isInitial&&T()){U.navigationType=S.performance.navigation.type}return U}return R}(e,K);B=function(S,U,T){function R(W){var V={};if(W.isInitial){if(!U()){return T.reject("The navigation timing API is required to produce a report for this navigation.")}if(S.performance.navigation.redirectCount>0){V.redirectCount=S.performance.navigation.redirectCount}}return T.resolve(V)}return R}(e,K,y);O=function(R){function S(U){var T=R.document.createElement("a");T.href=U;return T.href}return S}(e);l=function(V,S,U){function R(){var W=U.document.querySelectorAll("script[src][async]");return Array.prototype.map.call(W,function(X){return V(X.src)})}function T(){var W=R();function X(Z){return U.performance.getEntriesByType("resource").filter(function ab(ac){return ac.initiatorType==="link"||ac.initiatorType==="script"}).filter(function aa(ac){return ac.responseEnd<Z.domContentLoadedEventStart}).filter(function Y(ac){return ac.initiatorType!=="script"||W.indexOf(ac.name)===-1})}return S().then(X)}return T}(O,s,e);z=function(T,U,S){function R(W){if(!W.isInitial){return{}}return S().then(function V(ac){var ab=ac.map(function Y(ae){return ae.responseEnd}).map(function aa(ae){return Math.round(ae)}).reduce(function Z(af,ae){return Math.max(af,ae)},0);var ad=ac.map(function X(ae){return ae.duration}).map(function aa(ae){return Math.round(ae)});return{resourceLoadedEnd:ab,resourceDurations:JSON.stringify(ad)}})}return R}(e,y,l);h=function(){function R(S){return{threshold:S.threshold}}return R}();g=function(R){function S(T){if(!T.isInitial){return{}}return R()}return S}(s);C=function(R){function S(){return{userAgent:R.navigator.userAgent}}return S}(e);o=function(Y,ab,Z,V,T,aa,ac,S,ad,X,U,W){var R=[Y,ab,Z,V,T,aa,ac,S,ad,X,U,W];return{get:function(){return R.concat()},add:function(ae){R.push(ae)}}}(f,m,D,v,n,L,i,B,z,h,g,C);d=function(){var R=Object.prototype.hasOwnProperty;function S(){var W={};var V,X;for(var T=0,U=arguments.length;T<U;T++){V=arguments[T];for(X in V){if(R.call(V,X)){W[X]=V[X]}}}return W}return S}();w=function(S){var R=S.document.readyState!=="loading";if(!R){S.document.addEventListener("DOMContentLoaded",function(){S.setTimeout(function(){R=true},0)})}function T(){return R}return T}(e);c=function(S,W,ab,Z,R,aa,U){var Y={};function X(ad,ac){if(!Array.isArray(ad)){ad=[ad]}return ad.map(function(ae){if(typeof ae==="string"){ae={selector:ae}}return aa(ac,ae)})}function V(ad){var ac;ac=ad.map(function(af){var ae;if(af.requireUpdate){ae=new W(af.selector);ab.one("start",function(){ae.dismiss()})}else{ae=Z.resolve()}return ae.then(function(){var ag=new S(af.selector);ab.one("start",function(){ag.dismiss()});return ag})});return Z.all(ac)}Y.start=function(ad){var af;var ae="isInitial" in ad?ad.isInitial:U()===false;var ac="threshold" in ad?ad.threshold:1000;ab.trigger("start",{key:ad.key,isInitial:ae,threshold:ac});if(ad.ready){af=X(ad.ready,{requireUpdate:!ae});V(af).then(function(){Y.end({key:ad.key})})}};Y.end=function(ac){ab.trigger("end",{key:ac.key})};Y.addReporter=function T(ac){R.add(ac)};return Y}(u,q,H,y,o,d,w);Q=function(R){return R.AJS||(R.AJS={})}(e);I=function(R){R.EventQueue=R.EventQueue||[];function S(T,U){R.EventQueue.push({name:T,properties:U})}return S}(Q);a=function(S){function R(T){(S.console.error||S.console.log).call(S.console,T.stack||T)}return R}(e);E=function(Z,V,W,U,X,R){function S(aa){return V.all([aa]).then(function(ab){return ab[0]})}function Y(aa){return S(aa).then(null,function(){return{}})}function T(ac){var ad=R.get().map(function ab(af){var ae;try{ae=af(ac)}catch(ag){X(ag);ae={}}return Y(ae)});return V.all(ad).then(function aa(ae){return W.apply(undefined,ae)})}return T}(J,y,d,e,a,o);b=function(S){var R;if(S.performance&&S.performance.now){R=function(){return S.performance.timing.navigationStart+S.performance.now()}}else{R=S.Date.now.bind(S.Date)}return R}(e);M=function(V,S,T){function R(W){if(!(this instanceof R)){return new R(W)}this.isInitial="isInitial" in W?W.isInitial:false;this.start=T();this.end=null;this.key=W.key;this.threshold=W.threshold}function U(W){var X;W.on("start",function(Y){X=new R(Y)});W.on("end",function(Y){if(X&&X.key===Y.key){X.end=T();S(X).then(function(Z){V("browser.metrics.navigation",Z)});X=null}})}return U}(I,E,b);N=function(R){return R.WRM||(R.WRM={})}(e);t=function(R){var W="com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api.feature-data-provider",S;function V(X){return !!(X&&X.constructor&&X.call&&X.apply)}function U(X,Y){if(R&&R.data&&R.data.claim&&V(R.data.claim)){return R.data.claim(X)}else{if(R&&R.data&&V(R.data)){return R.data(X)}else{return Y}}}function T(){if(S===undefined){S=U(W,true)}return S}return T}(N);P=function(U,T,R,S){if(!S()){return{start:function(){},end:function(){}}}T(R);return U}(c,M,H,t);window["browser-metrics"]=P;if(window.define){window.define("internal/browser-metrics",[],function(){return P})}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api', location = 'main.js' */
define("internal/browser-metrics-plugin/lib/window",["require","exports"],function(b,a){return window});define("internal/browser-metrics-plugin/lib/jquery",["require","exports","./window"],function(b,a,c){var d;try{d=c.require("jquery")}catch(f){d=c.jQuery}return d});define("internal/browser-metrics-plugin/reporters/experiments",["require","exports","../lib/jquery","../lib/window"],function(a,d,f,i){var h=i.AJS.contextPath()+"/experimental/main.js";function c(){return Array.prototype.slice.call(i.document.getElementsByTagName("script"))}function j(){return(i.GROW&&i.GROW.experimentId)||[]}function e(){var m=f.Deferred();f(function n(){var o=c().some(function p(q){return q.getAttribute("src")===h});m.resolve(o)});return m.promise()}var g=e().pipe(function l(n){var m={};if(n){m.experiments=JSON.stringify(j())}return m});var b=function k(){return g};return b});define("internal/browser-metrics-plugin/main",["require","exports","./reporters/experiments","internal/browser-metrics"],function(c,a,b,d){d.addReporter(b)});require(["internal/browser-metrics-plugin/main"]);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:viewcontent', location = '/js/viewcontent.js' */
require(["internal/browser-metrics","jquery"],function(c,d){function a(e){if(!d(e.target).hasClass("full-load")){c.start({key:"confluence."+e.data.type+".edit.quick-view",ready:".active-richtext"})}}function b(){var e=AJS.Meta.get("content-type");if(e){c.start({key:"confluence."+e+".view",ready:".wiki-content",isInitial:true});d("#editPageLink").on("click",{type:e},a)}}d(b)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:server-render', location = '/js/server-render.js' */
require(["internal/browser-metrics","jquery"],function(c,d){var a=d.Deferred();d(function(){var e=JSON.parse(d("#confluence-server-performance").html());if(e!==null&&e.serverRender){a.resolve(e)}else{a.resolve({})}});var b=function(e){if(e.isInitial){return a.promise()}else{return{}}};c.addReporter(b)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:spa-transitions', location = '/js/spa-transitions.js' */
require(["jquery","ajs","confluence/storage-manager","internal/browser-metrics"],function(c,j,l,h){var d=c.Deferred();var m="page-page";var k="dashboard-page";var a=l("confluence","spa-transition");j.toInit(function(){c(document).on("click","a",g);var o=null;if(a.doesContain(m)){o=m}else{if(a.doesContain(k)){o=k}}if(o){d.resolve({"confluence.spa-transition":o});a.removeItem(o)}});function g(p){var o=c(this).attr("href");if(o&&e(p)&&b(o)){a.setItemQuietly(i()?k:m,true,300)}return true}function e(o){return o.which===1&&!o.metaKey&&!o.ctrlKey&&!o.shiftKey}function b(o){return(o.indexOf("/display/")!==-1||o.indexOf("/viewpage.action")!==-1)&&(o.indexOf("~")===-1||n(o))}function n(o){return(o.indexOf("/",o.indexOf("~")+1)!==-1)&&o.slice(-1)!=="/"}function i(){return c("body").hasClass("dashboard")}var f=function(o){if(o.isInitial){return d.promise()}else{return{}}};h.addReporter(f)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:page-banner-common-resources', location = 'js/page-banner.js' */
AJS.toInit(function(e){d();AJS.bind("system-content-metadata.toggled-restrictions",function(i,k){var j=e("#content-metadata-page-restrictions");var g="";j.removeClass();var h=k.hasRestrictions&&!(k.hasExplicitRestrictions||k.hasInheritedRestrictions);if(k.hasExplicitRestrictions||h){j.addClass("aui-icon aui-icon-small aui-iconfont-locked restricted");g="Restrictions apply"}else{if(k.hasInheritedRestrictions){j.addClass("aui-icon aui-icon-small aui-iconfont-unlocked restricted");g="Restrictions apply"}else{j.addClass("aui-icon aui-icon-small aui-iconfont-unlocked");g="Unrestricted"}}j.attr("title",g);a(j);d()});AJS.bind("breadcrumbs.expanded",f);e("#page-metadata-banner").css("visibility","visible");b();e("#content-metadata-page-restrictions").click(function(g){g.preventDefault();AJS.trigger("system-content-metadata.open-restrictions-dialog")});function d(){if(e("#system-content-items").children(":not(.hidden)").length==0){e("#system-content-items").addClass("hidden")}else{e("#system-content-items").removeClass("hidden")}}function f(){e("#page-metadata-banner").hide()}function b(){var g=e("#system-content-items a:not(.tipsy-disabled), .page-metadata-item a:not(.tipsy-disabled), .page-metadata-modification-info a.last-modified:not(tipsy-disabled)");a(g);g.click(function(h){c(e(h.target).closest("a"))});e(window).on("click scroll resize",c)}function a(g){e(g).tooltip({live:true,gravity:e("#com-atlassian-confluence").hasClass("theme-documentation view-blog-post")?"nw":"n",title:"title",delayIn:500})}function c(g){e(".tipsy").remove();if(g){var h=e(g).data("tipsy");if(h){h.hoverState="out"}}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:page-banner-common-resources', location = 'js/page-banner-analytics.js' */
AJS.toInit(function(c){function b(){if(!AJS.Confluence.Analytics||!AJS.Confluence.Analytics.setAnalyticsSource){AJS.log("WARNING: Could not initialise analytics for the page banner: AJS.Confluence.Analytics.setAnalyticsSource is not defined.");return}var e=AJS.Confluence.Analytics.setAnalyticsSource;var f=c("#breadcrumbs > li");e(f.filter(":not(#ellipsis)").find("a"),"breadcrumbs");e(f.filter(".hidden-crumb").find("a"),"breadcrumbs-expanded");e(f.filter(":last").find("a"),"breadcrumbs-parent");var d=c("#com-atlassian-confluence").hasClass("theme-documentation")?"breadcrumbs-homepage":"breadcrumbs-collector";e(f.filter(".first").find("a"),d)}function a(e,d,g){var f=null;e.mouseover(function(){f=setTimeout(g,d)});e.mouseout(function(){clearTimeout(f)})}AJS.bind("breadcrumbs.expanded",function(){AJS.trigger("analyticsEvent",{name:"breadcrumbs-expanded"})});b()});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:soy-resources', location = 'soy/page-banner.soy' */
// This file was automatically generated from page-banner.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.PageBanner == 'undefined') { Confluence.Templates.PageBanner = {}; }


Confluence.Templates.PageBanner.banner = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="page-metadata-banner"><ul class="banner">');
  Confluence.Templates.PageBanner.renderSystemContentItems(opt_data, output);
  var itemList6 = opt_data.pageBannerItems;
  var itemListLen6 = itemList6.length;
  for (var itemIndex6 = 0; itemIndex6 < itemListLen6; itemIndex6++) {
    var itemData6 = itemList6[itemIndex6];
    Confluence.Templates.PageBanner.renderPageBannerItem(itemData6, output);
  }
  output.append('</ul></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.PageBanner.renderSystemContentItems = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li id="system-content-items" class="noprint">');
  var itemList12 = opt_data.systemContentItems;
  var itemListLen12 = itemList12.length;
  for (var itemIndex12 = 0; itemIndex12 < itemListLen12; itemIndex12++) {
    var itemData12 = itemList12[itemIndex12];
    Confluence.Templates.PageBanner.itemAnchor(soy.$$augmentData(itemData12, {isSystemContentItem: true}), output);
  }
  output.append('</li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.PageBanner.renderPageBannerItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="page-metadata-item noprint ', (opt_data.isAuiButton) ? 'has-button' : '', '" ', (opt_data.linkId) ? ' id="' + soy.$$escapeHtml(opt_data.linkId) + '-wrapper"' : '', '>');
  Confluence.Templates.PageBanner.itemAnchor(opt_data, output);
  output.append('</li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.PageBanner.itemAnchor = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(opt_data.href), '" title="', soy.$$escapeHtml(opt_data.tooltip), '" ', (opt_data.linkId) ? 'id="' + soy.$$escapeHtml(opt_data.linkId) + '"' : '', ' ', (opt_data.styleClasses) ? 'class="' + soy.$$escapeHtml(opt_data.styleClasses) + '"' : '', '>');
  Confluence.Templates.PageBanner.itemIcon(opt_data, output);
  output.append((! opt_data.isSystemContentItem) ? '<span>' + soy.$$escapeHtml(opt_data.label) + '</span>' : '', '</a>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.PageBanner.itemIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.icon) ? '<img class="page-banner-item-icon" src="' + soy.$$escapeHtml(opt_data.icon.url) + '" style="height: ' + soy.$$escapeHtml(opt_data.icon.height) + 'px; width: ' + soy.$$escapeHtml(opt_data.icon.width) + 'px;"/>' : '');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:view-comment', location = '/includes/js/comments.js' */
AJS.toInit(function(a){var d=Confluence.storageManager("comments"),e=function(){return confirm("Are you sure you want to delete the comment?")?(this.href+="&confirm=yes",!0):!1};Confluence.Comments={bindRemoveConfirmation:function(b){a("#comment-"+b+" .comment-action-remove a").click(e)}};if(a("#comments-section").length){a("#comments-section .comment:odd").addClass("odd");a(".comment-action-remove a").click(e);var c=a("#addcomment.comment-text"),b=a("#comments-text-editor textarea");b.focus(function(){c.addClass("active")}).blur(function(){a.trim(b.val()).length||
c.removeClass("active")}).bind("reset.default-text",function(){c.removeClass("active")});a("form[name='textcommentform']").submit(function(){var d=b.val();return!a.trim(d)?(alert("Comment text is empty. Cannot create empty comments."),!1):!0});a("#add-comment-rte").click(function(){b.hasClass("placeholded")||d.setItem("text-comment",a.trim(b.val()))});a("#addcomment #rte").length&&AJS.bind("init.rte",function(a,b){var c=d.getItem("text-comment");c&&(b.editor.setContent(c),d.setItem("text-comment",""))})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:cdn-experiment', location = '/includes/js/cdn-experiment/cdn-experiment.js' */
require(["jquery","ajs"],function(d,e){function f(c){for(var b=window.performance.getEntriesByType("resource"),a=0;a<b.length;a++)if(-1!==b[a].name.indexOf(c))return Math.round(b[a].duration)}e.DarkFeatures.isEnabled("confluence.cdn-experiment.enabled")&&d(window).load(function(){setTimeout(function(){var c,b,a=d.Deferred();WRM.require("wr!confluence.web.resources:cdn-experiment-payload",function(){a.resolve(f("cdn-experiment-payload"))});a.done(function(a){c=a;var a=document.createElement("script"),
g=d.Deferred();a.src="https://d28q6miprfdsbe.cloudfront.net/cdn-experiment-payload-2.js";a.onload=function(){g.resolve(f("https://d28q6miprfdsbe.cloudfront.net/cdn-experiment-payload-2.js"))};document.head.appendChild(a);g.done(function(a){b=a;0<=b&&0<=c&&e.trigger("analyticsEvent",{name:"confluence.cdn-experiment",data:{cdn:b,instance:c}})})})},15E3)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-page', location = 'soy/comments.soy' */
// This file was automatically generated from comments.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Comments == 'undefined') { Confluence.Templates.Comments = {}; }


Confluence.Templates.Comments.displayReplyEditorLoadingContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol class="comment-threads"><li class="comment-thread">');
  Confluence.Templates.Comments.displayCommentEditorCommon({comment: {'ownerId': opt_data.contentId, 'parentId': opt_data.parentCommentId}, commenter: opt_data.commenter, state: 'loading', mode: 'reply'}, output);
  output.append('</li></ol>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.displayTopLevelCommentEditorPlaceholder = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Comments.displayCommentEditorCommon({comment: {'ownerId': opt_data.contentId}, commenter: opt_data.commenter, state: 'placeholder', mode: 'add'}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.displayEditEditorContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Comments.displayCommentEditorCommon({comment: {'ownerId': opt_data.contentId, 'id': opt_data.commentId}, commenter: opt_data.commenter, state: 'placeholder', mode: 'edit'}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.editorLoadErrorMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p>', soy.$$escapeHtml(opt_data.message), '</p><p><a href="', soy.$$escapeHtml(opt_data.fallbackUrl), '">', soy.$$escapeHtml("Try again"), '</a></p>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.displayCommentEditorCommon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="quick-comment-container comment ', soy.$$escapeHtml(opt_data.mode), '">');
  Confluence.Templates.Comments.userLogo({userInfo: opt_data.commenter}, output);
  output.append('<div class="quick-comment-body"><div class="quick-comment-loading-container" style="display:', (opt_data.state == 'loading') ? 'block' : 'none', ';"></div><div id="editor-messages"></div><div id="all-messages"></div><form style="display:', (opt_data.state == 'loading') ? 'none' : 'block', ';" class="quick-comment-form aui" method="post" ');
  switch (opt_data.mode) {
    case 'add':
      output.append('name="inlinecommentform" action="', soy.$$escapeHtml("/wiki"), '/pages/doaddcomment.action?pageId=', soy.$$escapeHtml(opt_data.comment.ownerId), '"');
      break;
    case 'edit':
      output.append('name="editcommentform" action="', soy.$$escapeHtml("/wiki"), '/pages/doeditcomment.action?pageId=', soy.$$escapeHtml(opt_data.comment.ownerId), '&commentId=', soy.$$escapeHtml(opt_data.comment.id), '"');
      break;
    case 'reply':
      output.append('name="threadedcommentform"  action="', soy.$$escapeHtml("/wiki"), '/pages/doaddcomment.action?pageId=', soy.$$escapeHtml(opt_data.comment.ownerId), '&parentId=', soy.$$escapeHtml(opt_data.comment.parentId), '"');
      break;
  }
  output.append(' >', (opt_data.mode == 'add') ? '<div title="' + soy.$$escapeHtml("Add a Comment") + '" class="quick-comment-prompt"><span>' + soy.$$escapeHtml("Write a comment\u2026") + '</span></div>' : '', '</form></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.userLogo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p class="comment-user-logo">');
  if (opt_data.userInfo.userName == null) {
    output.append('<img class="userLogo logo anonymous" src="', soy.$$escapeHtml("/wiki/s/en_GB/6138/e4fffe5d442902a22c46f8bee7fc526502e7c91c.1/_"), '/images/icons/profilepics/anonymous.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml("Anonymous"), '" title="', soy.$$escapeHtml("Anonymous"), '">');
  } else if (opt_data.userInfo.profilePicture.isDefault) {
    output.append('<a class="userLogoLink" data-username="', soy.$$escapeHtml(opt_data.userInfo.userName), '" href="', soy.$$escapeHtml("/wiki"), '/users/profile/editmyprofilepicture.action" title="', soy.$$escapeHtml("Add a picture of yourself"), '"><img class="userLogo logo defaultLogo" src="', soy.$$escapeHtml("/wiki/s/en_GB/6138/e4fffe5d442902a22c46f8bee7fc526502e7c91c.1/_"), '/images/icons/profilepics/add_profile_pic.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml("Add a picture of yourself"), '"></a>');
  } else {
    output.append('<a class="userLogoLink" data-username="', soy.$$escapeHtml(opt_data.userInfo.userName), '" href="');
    Confluence.Templates.User.userLinkUrl({username: opt_data.userInfo.userName}, output);
    output.append('"><img class="userLogo logo" src="', soy.$$escapeHtml(opt_data.userInfo.profilePicture.path), '" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml(opt_data.userInfo.userName), '" title="', soy.$$escapeHtml(opt_data.userInfo.userName), '"></a>');
  }
  output.append('</p>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.displayComment = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.comment.parentId == 0 && opt_data.firstReply) {
    output.append('<div id="comments-section" class="pageSection group"><div class="section-header"><h2 id="comments-section-title" class="section-title">', soy.$$escapeHtml("1 Comment"), '</h2>');
    Confluence.Templates.Comments.commentThread({comment: opt_data.comment, commenter: opt_data.commenter, highlight: opt_data.highlight, topLevel: true}, output);
    output.append('</div></div>');
  } else if (opt_data.firstReply) {
    Confluence.Templates.Comments.commentThread({comment: opt_data.comment, commenter: opt_data.commenter, highlight: opt_data.highlight, topLevel: false}, output);
  } else {
    Confluence.Templates.Comments.commentThreadItem({comment: opt_data.comment, commenter: opt_data.commenter, highlight: true}, output);
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.commentThread = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol class="comment-threads', (opt_data.topLevel) ? ' top-level" id="page-comments' : '', '">');
  Confluence.Templates.Comments.commentThreadItem(opt_data, output);
  output.append('</ol>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.commentThreadItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li id="comment-thread-', soy.$$escapeHtml(opt_data.comment.id), '" class="comment-thread">');
  Confluence.Templates.Comments.commentView(opt_data, output);
  output.append('</li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.commentView = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="comment', (opt_data.highlight == true) ? ' focused' : '', '" id="comment-', soy.$$escapeHtml(opt_data.comment.id), '">');
  Confluence.Templates.Comments.userLogo({userInfo: opt_data.commenter}, output);
  output.append('<div class="comment-header"><h4 class="author">', (opt_data.commenter.userName == null) ? soy.$$escapeHtml("Anonymous") : '<a href="' + soy.$$escapeHtml("/wiki") + '/display/~' + soy.$$escapeUri(opt_data.commenter.userName) + '" class="url fn confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.commenter.userName) + '">' + soy.$$escapeHtml(opt_data.commenter.displayName) + '</a>', '</h4></div><div class="comment-body"><div class="comment-content wiki-content">', opt_data.comment.html, '</div><div class="comment-actions">');
  Confluence.Templates.Comments.displayCommentActions({section: 'secondary', actions: opt_data.comment.secondaryActions, commentId: opt_data.comment.id}, output);
  Confluence.Templates.Comments.displayCommentActions({section: 'primary', actions: opt_data.comment.primaryActions, commentId: opt_data.comment.id}, output);
  output.append('</div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.displayCommentActions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="comment-actions-', soy.$$escapeHtml(opt_data.section), '">');
  if (opt_data.actions != null) {
    var itemList211 = opt_data.actions;
    var itemListLen211 = itemList211.length;
    for (var itemIndex211 = 0; itemIndex211 < itemListLen211; itemIndex211++) {
      var itemData211 = itemList211[itemIndex211];
      output.append('<li ', (itemData211.style != null) ? ' class="' + soy.$$escapeHtml(itemData211.style) + '"' : '', '><a ', (itemData211.tooltip != null) ? ' title="' + soy.$$escapeHtml(itemData211.tooltip) + '"' : '', ' href="', soy.$$escapeHtml(itemData211.url), '" ', (itemData211.id) ? ' id="' + soy.$$escapeHtml(itemData211.id) + '-' + soy.$$escapeHtml(opt_data.commentId) + '"' : '', '><span>', soy.$$escapeHtml(itemData211.label), '</span></a></li>\n');
    }
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-page', location = 'jscripts/comment-display-manager.js' */
Confluence.CommentDisplayManager=function(f){return{_updateCommentSectionTitle:function(){var a=f("#comments-section-title");if(0!==a.length){var b=this.commentCount();1==b?a.text("1 Comment"):a.text(AJS.format("{0} Comments",b))}},addComment:function(a,b,e,c){a={comment:b,commenter:a,highlight:e,context:{contextPath:AJS.Meta.get("context-path"),staticResourceUrlPrefix:AJS.Meta.get("static-resource-url-prefix")}};if(this.hasComments()){if(0==b.parentId)a.firstReply=
!1,e=AJS.$("#comments-section .comment-threads.top-level");else{var e=AJS.$("#comment-thread-"+b.parentId),d=e.children(".commentThreads");d.length?(a.firstReply=!1,e=d):a.firstReply=!0}c||this.clearFocus();c=f(Confluence.Templates.Comments.displayComment(a));c.addClass("fadeInComment");e.append(c);this._updateCommentSectionTitle()}else a.firstReply=!0,c=f(Confluence.Templates.Comments.displayComment(a)),c.addClass("fadeInComment"),f("#comments-section").prepend(c);Confluence.Comments.bindRemoveConfirmation(b.id);
b=this.getCommentNode(b.id);b.scrollToElement();return b},addOrUpdateComment:function(a,b,e,c){var d=this.getCommentNode(b.id);return d?(d.find(".comment-content").html(b.html),c||this.clearFocus(),e&&d.addClass("focused"),d.addClass("fadeInComment"),d.scrollToElement(),d):this.addComment.apply(this,arguments)},isVisible:function(){return!f("#page-comments").hasClass("hidden")},hasComments:function(){return 0<this.commentCount()},commentCount:function(){return AJS.$("#comments-section .comment").not(".quick-comment-container").length},
clearFocus:function(){f(".comment").removeClass("focused")},getCommentNode:function(a){a=f("#comment-"+a);return a.length?a:null},getParentId:function(a){a=getCommentNode(a);return null!=a&&(a=a.closest("div.comment"),a.length)?(a=a.attr("id"),a=/\d+/.exec(a),parseInt(a)):0}}}(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-page', location = 'jscripts/scroll-util.js' */
AJS.$(function(e){e.fn.extend({scrollToElement:function(){this.scrollWindowToElement()||this.scrollOverflowContainerToElement();return this},scrollWindowToElement:function(){function b(){return"pageYOffset"in window?window.pageYOffset:document.documentElement.scrollTop}var a=b(),c;if("number"==typeof window.innerWidth)c=window.innerHeight;else if(document.documentElement&&document.documentElement.clientWidth)c=document.documentElement.clientHeight;else return this[0].scrollIntoView(!1),!0;var d=this.offset().top,
f=this.height();return d+f+40>a+c?(this[0].scrollIntoView(!1),window.scrollBy(0,40),a!=b()):!0},scrollOverflowContainerToElement:function(){var b=null;this.parents().each(function(){var a=AJS.$(this).css("overflow");if("auto"==a||"scroll"==a)return b=AJS.$(this),!1});if(!b)return!1;var a=b.height(),c=this.offset().top,d=this.height(),a=a-(c+d+40);0>a&&(b[0].scrollTop-=a);return!0}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload', location = 'templates/quick-reload.soy' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload', location = 'js/quick-reload-comments.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload', location = 'js/quick-reload-inline-comments.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload', location = 'js/quick-reload-page.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload', location = 'js/quick-reload-alert.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload', location = 'js/quick-reload-timer.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload', location = 'js/quick-reload.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.aui.staging:confluence-flags', location = 'flag/confluence-flag.js' */
define("confluence/flag",["ajs","jquery"],function(f,d){function h(a){var b=d('<span class="aui-icon icon-close" role="button" tabindex="0"></span>');b.click(function(){g(a)});b.keypress(function(b){if(b.which===f.keyCode.ENTER||b.which===f.keyCode.SPACE)g(a),b.preventDefault()});return a.find(".aui-message").append(b)[0]}function g(a){var b=a.get(0);b.setAttribute("aria-hidden","true");a=a.parent();i(a);b.dispatchEvent(new CustomEvent("aui-flag-close",{bubbles:!0}));return b}function i(a){a.hasClass("aui-flag-stack")&&
a.children('.aui-flag:not([aria-hidden="true"])').length&&(a.children(".aui-flag-stack-top-item").removeClass("aui-flag-stack-top-item"),a.children('.aui-flag:not([aria-hidden="true"])').last().addClass("aui-flag-stack-top-item"))}var j={body:"",close:"manual",title:"",type:"info",fifo:!1};return function(a){var a=d.extend({},j,a),b,c=a,c=f.template('<div class="aui-flag {extraClasses}"><div class="aui-message aui-message-{type} {type} {closeable} shadowed"><p class="title"><strong>{title}</strong></p>{body}<\!-- .aui-message --\></div></div>').fill({"body:html":c.body||
"",closeable:"never"===c.close?"":"closeable",title:c.title||"",type:c.type,extraClasses:c.extraClasses||""}).toString();b=d(c);b[0].close=function(){g(b)};"auto"===a.close?(h(b),b.find(".aui-message").addClass("aui-will-close"),setTimeout(function(){b[0].close()},5E3)):"manual"===a.close&&h(b);d("#aui-flag-container").find(".aui-flag").get().forEach(function(a){a.getAttribute("aria-hidden")==="true"&&d(a).remove()});c=d("#aui-flag-container");c.length||(c=d('<div id="aui-flag-container"></div>'),
d("body").prepend(c));if(a.stack){var e=d('[data-aui-flag-stack="'+a.stack+'"]');e.length||(e=d('<div data-aui-flag-stack="'+a.stack+'" class="aui-flag-stack"></div>'),e.appendTo(c));e.find('[aria-hidden="false"]').length||e.detach().appendTo(c);a.fifo?b.appendTo(e):b.prependTo(e);i(e)}else b.appendTo(c);f._internal.animation.recomputeStyle(b);a=b.attr("aria-hidden","false")[0];a.dispatchEvent(new CustomEvent("aui-flag-show",{bubbles:!0}));return a}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.aui.staging:confluence-flags', location = 'flag/confluence-flag-scroll.js' */
define("confluence/flag-scroll",["jquery","ajs","confluence/meta","document"],function(c,j,k,l){function f(){var a=c("#"+g);if(a.find('.aui-flag[aria-hidden="false"]').length){var b;b=0;h?b=c("#header").height()+d:(b=e.scrollTop(),b=b<=i-d?i-Math.max(b,0):d);a.css("top",b)}}var d=20,i=71,g="aui-flag-container",h=!1,e;return function(a){e=(h=a("body").hasClass("theme-documentation"))?a("#splitter-content"):a(window);e.on("scroll",f);l.addEventListener("aui-flag-show",f);j.bind("rte-ready",function(){"page"===
k.get("content-type")&&a("#"+g).find('.aui-flag[aria-hidden="false"]').each(function(){this.close()})})}});require("confluence/module-exporter").safeRequire("confluence/flag-scroll",function(c){AJS.toInit(c)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'main/quick-reload.soy' */
// This file was automatically generated from quick-reload.soy.
// Please don't edit this file by hand.

if (typeof QuickReload == 'undefined') { var QuickReload = {}; }
if (typeof QuickReload.Templates == 'undefined') { QuickReload.Templates = {}; }


QuickReload.Templates.pageEdit = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param3 = new soy.StringBuilder('<div class="qr-notice-authors">');
  QuickReload.Templates.noticeHeader({users: opt_data.pageEditors}, param3);
  param3.append('</div><div class="qr-notice-summary">');
  aui.buttons.button({text: "Reload page", type: 'text', extraClasses: 'qr-notice-show aui-button-text'}, param3);
  QuickReload.Templates.summaryText({users: opt_data.pageEditors}, param3);
  param3.append('</div>');
  QuickReload.Templates.container({content: param3.toString()}, output);
  return opt_sb ? '' : output.toString();
};


QuickReload.Templates.pageComment = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param17 = new soy.StringBuilder('<div class="qr-notice-authors">');
  QuickReload.Templates.noticeHeader({users: opt_data.commentUsers}, param17);
  param17.append((opt_data.commentUsers.length == 1) ? '<span class="qr-notice-text">"' + soy.$$escapeHtml(opt_data.noticeText) + '"</span>' : '', '</div><div class="qr-notice-summary">');
  aui.buttons.button({text: (opt_data.commentUsers.length > 1) ? soy.$$escapeHtml("Show all") : soy.$$escapeHtml("Show"), type: 'text', extraClasses: 'qr-notice-show aui-button-text'}, param17);
  QuickReload.Templates.summaryText({users: opt_data.commentUsers}, param17);
  param17.append('</div>');
  QuickReload.Templates.container({content: param17.toString()}, output);
  return opt_sb ? '' : output.toString();
};


QuickReload.Templates.inlineComment = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param41 = new soy.StringBuilder('<div class="qr-notice-authors">');
  QuickReload.Templates.noticeHeader({users: opt_data.user}, param41);
  param41.append('<span class="qr-notice-text">"', soy.$$escapeHtml(opt_data.noticeText), '"</span></div><div class="qr-notice-summary">');
  aui.buttons.button({text: (opt_data.reloadRequired) ? soy.$$escapeHtml("Reload page") : soy.$$escapeHtml("Show"), type: 'text', extraClasses: 'qr-notice-show aui-button-text', extraAttributes: ['data-reload-required', opt_data.reloadRequired]}, param41);
  QuickReload.Templates.summaryText({users: opt_data.user}, param41);
  param41.append('</div>');
  QuickReload.Templates.container({content: param41.toString()}, output);
  return opt_sb ? '' : output.toString();
};


QuickReload.Templates.container = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="qr-container">', opt_data.content, '</div>');
  return opt_sb ? '' : output.toString();
};


QuickReload.Templates.noticeHeader = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var userList68 = opt_data.users;
  var userListLen68 = userList68.length;
  for (var userIndex68 = 0; userIndex68 < userListLen68; userIndex68++) {
    var userData68 = userList68[userIndex68];
    if (userIndex68 < 8) {
      aui.avatar.avatar({size: 'small', avatarImageUrl: userData68.profilePicture.path, title: userData68.displayName != '' ? userData68.displayName : "Anonymous", extraClasses: 'qr-author-avatar'}, output);
    }
  }
  return opt_sb ? '' : output.toString();
};


QuickReload.Templates.summaryText = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var lastModifier__soy78 = opt_data.users[0];
  var others__soy79 = opt_data.users.length - 1;
  output.append('<span class="qr-notice-summary-text">', soy.$$escapeHtml("by"), ' ');
  Confluence.Templates.User.usernameLink({canView: false, username: lastModifier__soy78.userName, fullName: lastModifier__soy78.displayName != '' ? lastModifier__soy78.displayName : "Anonymous"}, output);
  output.append((others__soy79 == 1) ? ' ' + soy.$$escapeHtml("and 1 other") : '', (others__soy79 > 1) ? ' ' + soy.$$escapeHtml(AJS.format("and {0} others",others__soy79)) : '', '</span>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'utils/quick-reload-timer.js' */
define("confluence-quick-reload/utils/quick-reload-timer",["jquery","underscore"],function(c,d){function a(b,a){this.options=c.extend({min:3E4,max:36E5,inactivity:12E4},a);d.bindAll(this,"start","stop","_now","_timeSinceLastSeen","_setActive","_setActivityTrigger","_clamp","_intervalMultiplier");this.callback=b;this._timer=null;this._setActivityTrigger(this._setActive)}a.prototype.start=function(b){this.lastSeenTimestamp=this._now();this.stop();b&&this.callback();var a=function(){this.callback();
c.call(this)},c=function(){this.stop();this._timer=setTimeout(d.bind(a,this),this.options.min*this._intervalMultiplier())};c.call(this)};a.prototype.stop=function(){null!==this._timer&&(clearTimeout(this._timer),this._timer=null)};a.prototype._setActive=function(){if(null!==this._timer){var b=this._timeSinceLastSeen()>this.options.inactivity;this.lastSeenTimestamp=this._now();b&&this.start(!0)}};a.prototype._setActivityTrigger=function(b){document.addEventListener("visibilitychange",function(){document.hidden||
b()},!1);c(window).focus(b);c("body").click(b);c(window).scroll(b)};a.prototype._now=function(){return(new Date).getTime()};a.prototype._timeSinceLastSeen=function(){return this._now()+1-this.lastSeenTimestamp};a.prototype._clamp=function(b,a,c){a=Math.max(Math.min(a,c),b);return isNaN(a)?b:a};a.prototype._intervalMultiplier=function(){var a=(document.hidden?3:1)*Math.ceil(this._timeSinceLastSeen()/this.options.inactivity);return this._clamp(1,this.options.max/this.options.min,a)};return a});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'utils/quick-reload-count.js' */
define("confluence-quick-reload/utils/quick-reload-count",function(){function a(){this.count=0}var b=document.title;a.prototype.getCount=function(){return this.count};a.prototype.setCount=function(a){this.count=a;this._displayCount()};a.prototype._displayCount=function(){document.title=(0<this.count?"("+this.count+") ":"")+b};return new a});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'handlers/quick-reload-comments.js' */
define("confluence-quick-reload/handlers/quick-reload-comments",["ajs","underscore","jquery","confluence/flag","confluence-quick-reload/utils/quick-reload-count"],function(i,c,d,j,g){function h(c){return c.comment.id}var a,e=[];return{results:[],property:"comments",ignoreOnce:function(c){e.push(c)},filterNewResults:function(a,f){if(0===f.length)return f;var b=c.map(a,h);return c.filter(f,function(a){if(a.comment.isInlineComment)return!1;a=h(a);if(c.contains(b,a))return!1;a=d.inArray(a,e);return 0<=
a?(e.splice(a,1),!1):!0})},render:function(e){g.setCount(g.getCount()+e.length);var e={close:"manual",type:"info",extraClasses:"qr-flag",fifo:!0,stack:"quickreload"},f=1<this.results.length?i.format("{0} New comments",this.results.length):"New comment",b;b=c.clone(this.results);b.reverse();b=c.uniq(b,function(a){return a.commenter.userName});b=c.map(b,function(a){return a.commenter});var k=d("<div>").html(this.results[this.results.length-1].comment.html).text();
b=QuickReload.Templates.pageComment({commentUsers:b,noticeText:k});void 0===a||"true"===a.getAttribute("aria-hidden")?(a=new j(d.extend({},{body:b,title:f},e)),d(a).on("click",".qr-notice-show",c.bind(function(){var b=this.results;Confluence&&Confluence.CommentDisplayManager&&(Confluence.CommentDisplayManager.clearFocus(),c.map(b,function(a){var b=null!==Confluence.CommentDisplayManager.getCommentNode(h(a)),a=Confluence.CommentDisplayManager.addOrUpdateComment(a.commenter,a.comment,!0,!0);Confluence.Likes&&
!b&&(Confluence.Likes.appendAction(d(a)),Confluence.Likes.updateComment(d(a),{}))}),Confluence.CommentDisplayManager._updateCommentSectionTitle());a.close()},this)),d(a).on("aui-flag-close",c.bind(function(){g.setCount(g.getCount()-this.results.length);this.results=[]},this))):(d(a).find(".qr-container").replaceWith(b),d(a).find(".title").text(f))}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'handlers/quick-reload-inline-comments.js' */
define("confluence-quick-reload/handlers/quick-reload-inline-comments",["underscore","jquery","ajs","confluence/flag","confluence-quick-reload/utils/quick-reload-count"],function(b,f,h,q,l){function o(a,d,b,e,c){a=QuickReload.Templates.inlineComment({user:[a.commenter],noticeText:a&&a.comment&&f("<div>").html(a.comment.html).text(),reloadRequired:d});c=1<c?"New inline comments":"New inline comment";c=new q(f.extend({},{title:c,body:a},{close:"manual",
type:"info",extraClasses:"qr-flag",fifo:!0,stack:"quickreload"}));f(c).find(".qr-notice-show").click(b);d||f(c).find(".qr-notice-show").click(c.close);f(c).on("aui-flag-close",e)}function n(a){return 0===a.comment.parentId}function i(a){return n(a)?a.comment.id:a.comment.parentId}return{results:[],property:"comments",filterNewResults:function(a,d){d=b.clone(d);d=b.filter(d,function(a){return a.comment.isInlineComment&&a.commenter.userName!==h.Meta.get("remote-user")});if(0<d.length)var f=b.map(a,
i),e=b.filter(d,n),c=b.filter(d,function(a){return!n(a)}),g=b.map(e,i),j=b.map(c,i),k=b.difference(j,g),p=[],c=b.filter(c,function(a){return-1!==k.indexOf(a.comment.parentId)&&-1===p.indexOf(a.comment.parentId)?(p.push(a.comment.parentId),!0):!1}),e=e.concat(c),d=b.filter(e,function(a){return-1===f.indexOf(i(a))});return d},render:function(a){l.setCount(l.getCount()+a.length);b.each(a,function(a){var m=i(a),e=function(){h.trigger("qr:show-new-thread",m)},c=function(){var a=h.Meta.Links.canonical(),
b=-1===a.indexOf("?")?"?":"&";window.location=a+b+"focusedCommentId="+m+"#comment-"+m},g=function(){this.results=b.filter(this.results,function(a){return i(a)!==m});l.setCount(l.getCount()-1)},g=b.bind(g,this),j=this.results.length;if(n(a)){var k=new f.Deferred;k.fail(function(a){o(a,!0,c,g,j)});k.done(function(a){o(a,!1,e,g,j)});h.trigger("qr:add-new-highlight",[a,k])}else o(a,!1,e,g,j)},this)}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'handlers/quick-reload-page.js' */
define("confluence-quick-reload/handlers/quick-reload-page",["underscore","jquery","ajs","confluence/flag","confluence-quick-reload/utils/quick-reload-count"],function(e,d,h,i,f){var b;return{results:[],property:"page",filterNewResults:function(b,c){return 0<c.length&&"string"!==typeof c[0]?c:[]},render:function(g){f.setCount(f.getCount()+g.length);var g={close:"manual",type:"info",extraClasses:"qr-flag",fifo:!0,stack:"quickreload"},c=1<this.results.length?h.format("{0} new edits",this.results.length):
"New page edits",a;a=e.clone(this.results);a.reverse();a=e.uniq(a,function(a){return a.editor.userName});a=e.map(a,function(a){return a.editor});a=QuickReload.Templates.pageEdit({pageEditors:a});void 0===b||"true"===b.getAttribute("aria-hidden")?(b=new i(d.extend({},{body:a,title:c},g)),d(b).on("click",".qr-notice-show",function(){window.location.reload();b.close()}),d(b).on("aui-flag-close",e.bind(function(){f.setCount(f.getCount()-this.results.length);this.results=[]},this))):
(d(b).find(".qr-container").replaceWith(a),d(b).find(".title").text(c))}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-resources', location = 'main/quick-reload-manager.js' */
define("confluence-quick-reload/main/quick-reload-manager",["underscore","jquery","ajs","confluence-quick-reload/utils/quick-reload-timer"],function(h,f,g,i){function a(){this._isEnabled=!1;this.handlers=[];this.lastFetchTime=f('meta[name="confluence-request-time"]').attr("content")||(new Date).getTime();this._timer=null;h.bindAll(this,"addHandler","removeHandler","update","enable","disable","_onUpdateSuccess","_onUpdateError")}a.prototype.addHandler=function(d){for(var a=!1,e=0;e<this.handlers.length;e++)this.handlers[e]===
d&&(a=!0);!0!==a&&this.handlers.push(d)};a.prototype.removeHandler=function(d){if(d)for(var a=0;a<this.handlers.length;a++)if(this.handlers[a]===d){this.handlers.splice(a,1);break}};a.prototype.update=function(){f("body").hasClass("contenteditor")?this.disable():f.ajax({type:"GET",url:g.contextPath()+"/rest/quickreload/latest/"+g.Meta.get("page-id")+"?since="+encodeURIComponent(this.lastFetchTime),dataType:"json"}).done(this._onUpdateSuccess).fail(this._onUpdateError)};a.prototype.enable=function(){null===
this._timer&&(this._timer=new i(this.update));this._timer.start();this._isEnabled=!0};a.prototype.disable=function(){null!==this._timer&&this._timer.stop();this._isEnabled=!1};a.prototype.isEnabled=function(){return this._isEnabled};a.prototype._onUpdateSuccess=function(a,f,e){204!==e.status&&(this.lastFetchTime=a.time,h.map(this.handlers,function(c){var b=a[c.property];Array.isArray(b)||(b=[b]);b=c.filterNewResults(c.results,b);0<b.length&&(c.results=c.results.concat(b),c.render(b))},this))};a.prototype._onUpdateError=
function(a){a=a||{};if(a={404:"not found - the plugin has been probably been removed or disabled from Confluence",500:"generic server error",503:"service unavailable",504:"gateway timeout"}[a.status])this.disable(),g.log('Quick comment reload plugin has been disabled in this page due to a server error: "'+a+'". Please refresh the page to get it back.')};return new a});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload-bootstrap', location = 'main/quick-reload-main.js' */
require(["ajs","confluence-quick-reload/main/quick-reload-manager","confluence-quick-reload/handlers/quick-reload-comments","confluence-quick-reload/handlers/quick-reload-inline-comments","confluence-quick-reload/handlers/quick-reload-page"],function(b,a,c,d,e){b.toInit(function(){b.DarkFeatures.isEnabled("quickreload.disabled")||!Confluence.CommentDisplayManager||void 0===b.Meta.get("page-id")||(a.addHandler(c),a.addHandler(d),a.addHandler(e),a.enable(),b.bind("page.commentAddedOrUpdated",function(b,
a){c.ignoreOnce(a.commentId)}))})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/js/tablesorter-date-parser.js' */
(function(A){A(function(){A.tablesorter.addParser({id:"dateAttributeParser",is:function(B,D,C){return A(C).is(".content-report-table-macro .modified")
},format:function(B,D,C,E){return A(C).attr("data-sortable-date")
},type:"numeric"})
})
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/soy/content-report-table.soy' */
// This file was automatically generated from content-report-table.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Plugins == 'undefined') { Confluence.Templates.Plugins = {}; }
if (typeof Confluence.Templates.Plugins.ContentReport == 'undefined') { Confluence.Templates.Plugins.ContentReport = {}; }


Confluence.Templates.Plugins.ContentReport.contentReportTable = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var hasSocialColumn__soy3 = opt_data.showCommentsCount || opt_data.showLikesCount;
  if (opt_data.results.length == 0 && opt_data.blueprintKey) {
    output.append('<div class="blueprint-blank-experience ', soy.$$escapeHtml(opt_data.blueprintKey), '"><div class="content"><h2>', soy.$$escapeHtml(opt_data.blankTitle), '</h2><p>', soy.$$escapeHtml(opt_data.blankDescription), '</p></div>', (opt_data.createButtonLabel) ? '<p><button class="create-from-template-button aui-button aui-button-primary" data-space-key="' + soy.$$escapeHtml(opt_data.dataSpaceKey) + '" data-content-blueprint-id="' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '" href="' + soy.$$escapeHtml(opt_data.createContentUrl) + '" >' + soy.$$escapeHtml(opt_data.createButtonLabel) + '</button></p>' : '', '</div>');
  } else {
    output.append('<table class="aui content-report-table-macro', (hasSocialColumn__soy3) ? ' with-extra-columns' : '', '"', (opt_data.analyticsKey) ? ' data-analytics-key="' + soy.$$escapeHtml(opt_data.analyticsKey) + '"' : '', '><thead><tr><th>', soy.$$escapeHtml("Title"), '</th><th>', soy.$$escapeHtml("Creator"), '</th><th>', soy.$$escapeHtml("Modified"), '</th></tr></thead><tbody>');
    var resultList43 = opt_data.results;
    var resultListLen43 = resultList43.length;
    if (resultListLen43 > 0) {
      for (var resultIndex43 = 0; resultIndex43 < resultListLen43; resultIndex43++) {
        var resultData43 = resultList43[resultIndex43];
        output.append('<tr><td class="title"><a href="', soy.$$escapeHtml(resultData43.urlPath), '">', soy.$$escapeHtml(resultData43.title), '</a></td><td class="creator">');
        Confluence.Templates.User.usernameLink({canView: opt_data.canViewProfiles, username: resultData43.creatorName, fullName: resultData43.creatorFullName, contextPath: opt_data.contextPath}, output);
        output.append('</td><td class="modified" data-sortable-date="', soy.$$escapeHtml(resultData43.sortableDate), '">', soy.$$escapeHtml(resultData43.friendlyModificationDate), '</td>', (hasSocialColumn__soy3) ? '<td class="social">' + ((opt_data.showCommentsCount && resultData43.commentCount != 0) ? '<span class="icon icon-comment"></span> <span class="count">' + soy.$$escapeHtml(resultData43.commentCount) + '</span>' : '') + ((opt_data.showLikesCount && resultData43.likeCount != 0) ? '<span class="icon icon-like"></span> <span class="count">' + soy.$$escapeHtml(resultData43.likeCount) + '</span>' : '') + '</td>' : '', '</tr>');
      }
    } else {
      output.append('<tr><td colspan="3">', soy.$$escapeHtml("No content found."), '</td></tr>');
    }
    output.append('</tbody></table>', (opt_data.searchMoreResultsLinkUrl) ? '<div class="more-results"><a href="' + soy.$$escapeHtml("/wiki") + soy.$$escapeHtml(opt_data.searchMoreResultsLinkUrl) + '">' + soy.$$escapeHtml("Find more results") + '</a></div>' : '');
  }
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/js/content-report-analytics.js' */
AJS.$(function(A){A(".content-report-table-macro").on("click",".title a",function(D){var B=A(D.delegateTarget).data("analytics-key");
if(B){var C="content-report-table-macro.content-click."+B;
AJS.trigger("analytics",{name:C})
}})
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-table-sortable', location = 'js-vendor/jquery/jquery.tablesorter.js' */
/*
 * TableSorter 2.10.8 - Client-side table sorting with ease!
 * @requires jQuery v1.2.6+
 *
 * Copyright (c) 2007 Christian Bach
 * Examples and docs at: http://tablesorter.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @type jQuery
 * @name tablesorter
 * @cat Plugins/Tablesorter
 * @author Christian Bach/christian.bach@polyester.se
 * @contributor Rob Garrison/https://github.com/Mottie/tablesorter
 */
!(function(B){B.extend({tablesorter:new function(){var C=this;C.version="2.10.8";C.parsers=[];C.widgets=[];C.defaults={theme:"default",widthFixed:false,showProcessing:false,headerTemplate:"{content}",onRenderTemplate:null,onRenderHeader:null,cancelSelection:true,dateFormat:"mmddyyyy",sortMultiSortKey:"shiftKey",sortResetKey:"ctrlKey",usNumberFormat:true,delayInit:false,serverSideSorting:false,headers:{},ignoreCase:true,sortForce:null,sortList:[],sortAppend:null,sortInitialOrder:"asc",sortLocaleCompare:false,sortReset:false,sortRestart:false,emptyTo:"bottom",stringTo:"max",textExtraction:"simple",textSorter:null,widgets:[],widgetOptions:{zebra:["even","odd"]},initWidgets:true,initialized:null,tableClass:"tablesorter",cssAsc:"tablesorter-headerAsc",cssChildRow:"tablesorter-childRow",cssDesc:"tablesorter-headerDesc",cssHeader:"tablesorter-header",cssHeaderRow:"tablesorter-headerRow",cssIcon:"tablesorter-icon",cssInfoBlock:"tablesorter-infoOnly",cssProcessing:"tablesorter-processing",selectorHeaders:"> thead th, > thead td",selectorSort:"th, td",selectorRemove:".remove-me",debug:false,headerList:[],empties:{},strings:{},parsers:[]};function O(Y){if(typeof console!=="undefined"&&typeof console.log!=="undefined"){console.log(Y)}else{alert(Y)}}function I(Y,Z){O(Y+" ("+(new Date().getTime()-Z.getTime())+"ms)")}C.log=O;C.benchmark=I;function F(b,a,Y){if(!a){return""}var e=b.config,Z=e.textExtraction,d="";if(Z==="simple"){if(e.supportsTextContent){d=a.textContent}else{d=B(a).text()}}else{if(typeof Z==="function"){d=Z(a,b,Y)}else{if(typeof Z==="object"&&Z.hasOwnProperty(Y)){d=Z[Y](a,b,Y)}else{d=e.supportsTextContent?a.textContent:B(a).text()}}}return B.trim(d)}function J(e,g,c,b){var d,Z=C.parsers.length,Y=false,a="",f=true;while(a===""&&f){c++;if(g[c]){Y=g[c].cells[b];a=F(e,Y,b);if(e.config.debug){O("Checking if value was empty on row "+c+", column: "+b+': "'+a+'"')}}else{f=false}}while(--Z>=0){d=C.parsers[Z];if(d&&d.id!=="text"&&d.is&&d.is(a,e,Y)){return d}}return C.getParserById("text")}function K(k){var j=k.config,d=j.$tbodies=j.$table.children("tbody:not(."+j.cssInfoBlock+")"),m,g,b,e,f,Y,a,Z="";if(d.length===0){return j.debug?O("*Empty table!* Not building a parser cache"):""}m=d[0].rows;if(m[0]){g=[];b=m[0].cells.length;for(e=0;e<b;e++){f=j.$headers.filter(":not([colspan])");f=f.add(j.$headers.filter('[colspan="1"]')).filter('[data-column="'+e+'"]:last');Y=j.headers[e];a=C.getParserById(C.getData(f,Y,"sorter"));j.empties[e]=C.getData(f,Y,"empty")||j.emptyTo||(j.emptyToBottom?"bottom":"top");j.strings[e]=C.getData(f,Y,"string")||j.stringTo||"max";if(!a){a=J(k,m,-1,e)}if(j.debug){Z+="column:"+e+"; parser:"+a.id+"; string:"+j.strings[e]+"; empty: "+j.empties[e]+"\n"}g.push(a)}}if(j.debug){O(Z)}j.parsers=g}function X(q){var l=q.tBodies,d=q.config,n,Y,o=d.parsers,r,p,f,e,a,g,h,m,Z=[];d.cache={};if(!o){return d.debug?O("*Empty table!* Not building a cache"):""}if(d.debug){m=new Date()}if(d.showProcessing){C.isProcessing(q,true)}for(a=0;a<l.length;a++){d.cache[a]={row:[],normalized:[]};if(!B(l[a]).hasClass(d.cssInfoBlock)){n=(l[a]&&l[a].rows.length)||0;Y=(l[a].rows[0]&&l[a].rows[0].cells.length)||0;for(f=0;f<n;++f){g=B(l[a].rows[f]);h=[];if(g.hasClass(d.cssChildRow)){d.cache[a].row[d.cache[a].row.length-1]=d.cache[a].row[d.cache[a].row.length-1].add(g);continue}d.cache[a].row.push(g);for(e=0;e<Y;++e){r=F(q,g[0].cells[e],e);p=o[e].format(r,q,g[0].cells[e],e);h.push(p);if((o[e].type||"").toLowerCase()==="numeric"){Z[e]=Math.max(Math.abs(p)||0,Z[e]||0)}}h.push(d.cache[a].normalized.length);d.cache[a].normalized.push(h)}d.cache[a].colMax=Z}}if(d.showProcessing){C.isProcessing(q)}if(d.debug){I("Building cache for "+n+" rows",m)}}function V(u,s){var v=u.config,w=u.tBodies,d=[],g=v.cache,f,h,a,e,x,Z,t,q,p,o,Y,m;if(!g[0]){return }if(v.debug){m=new Date()}for(p=0;p<w.length;p++){x=B(w[p]);if(x.length&&!x.hasClass(v.cssInfoBlock)){Z=C.processTbody(u,x,true);f=g[p].row;h=g[p].normalized;a=h.length;e=a?(h[0].length-1):0;for(t=0;t<a;t++){Y=h[t][e];d.push(f[Y]);if(!v.appender||!v.removeRows){o=f[Y].length;for(q=0;q<o;q++){Z.append(f[Y][q])}}}C.processTbody(u,Z,false)}}if(v.appender){v.appender(u,d)}if(v.debug){I("Rebuilt table",m)}if(!s){C.applyWidget(u)}B(u).trigger("sortEnd",u)}function Q(u){var r=[],a={},q=0,h=B(u).find("thead:eq(0), tfoot").children("tr"),f,e,d,b,o,s,p,Y,n,g,m,Z;for(f=0;f<h.length;f++){s=h[f].cells;for(e=0;e<s.length;e++){o=s[e];p=o.parentNode.rowIndex;Y=p+"-"+o.cellIndex;n=o.rowSpan||1;g=o.colSpan||1;if(typeof (r[p])==="undefined"){r[p]=[]}for(d=0;d<r[p].length+1;d++){if(typeof (r[p][d])==="undefined"){m=d;break}}a[Y]=m;q=Math.max(m,q);B(o).attr({"data-column":m});for(d=p;d<p+n;d++){if(typeof (r[d])==="undefined"){r[d]=[]}Z=r[d];for(b=m;b<m+g;b++){Z[b]="x"}}}}u.config.columns=q;return a}function H(Y){return(/^d/i.test(Y)||Y===1)}function S(j){var a=Q(j),Y,b,e,d,k,g,Z,f=j.config;f.headerList=[];f.headerContent=[];if(f.debug){Z=new Date()}d=f.cssIcon?'<i class="'+f.cssIcon+'"></i>':"";f.$headers=B(j).find(f.selectorHeaders).each(function(c){b=B(this);Y=f.headers[c];f.headerContent[c]=this.innerHTML;k=f.headerTemplate.replace(/\{content\}/g,this.innerHTML).replace(/\{icon\}/g,d);if(f.onRenderTemplate){e=f.onRenderTemplate.apply(b,[c,k]);if(e&&typeof e==="string"){k=e}}this.innerHTML='<div class="tablesorter-header-inner">'+k+"</div>";if(f.onRenderHeader){f.onRenderHeader.apply(b,[c])}this.column=a[this.parentNode.rowIndex+"-"+this.cellIndex];this.order=H(C.getData(b,Y,"sortInitialOrder")||f.sortInitialOrder)?[1,0,2]:[0,1,2];this.count=-1;this.lockedOrder=false;g=C.getData(b,Y,"lockedOrder")||false;if(typeof g!=="undefined"&&g!==false){this.order=this.lockedOrder=H(g)?[1,1,1]:[0,0,0]}b.addClass(f.cssHeader);f.headerList[c]=this;b.parent().addClass(f.cssHeaderRow);b.attr("tabindex",0)});L(j);if(f.debug){I("Built headers:",Z);O(f.$headers)}}function P(Z,Y,b){var a=Z.config;a.$table.find(a.selectorRemove).remove();K(Z);X(Z);W(a.$table,Y,b)}function L(Z){var Y,a=Z.config;a.$headers.each(function(b,c){Y=C.getData(c,a.headers[b],"sorter")==="false";c.sortDisabled=Y;B(c)[Y?"addClass":"removeClass"]("sorter-false")})}function D(k){var e,b,Z,Y,h=k.config,g=h.sortList,d=[h.cssAsc,h.cssDesc],a=B(k).find("tfoot tr").children().removeClass(d.join(" "));h.$headers.removeClass(d.join(" "));Y=g.length;for(b=0;b<Y;b++){if(g[b][1]!==2){e=h.$headers.not(".sorter-false").filter('[data-column="'+g[b][0]+'"]'+(Y===1?":last":""));if(e.length){for(Z=0;Z<e.length;Z++){if(!e[Z].sortDisabled){e.eq(Z).addClass(d[g[b][1]]);if(a.length){a.filter('[data-column="'+g[b][0]+'"]').eq(Z).addClass(d[g[b][1]])}}}}}}}function N(a){if(a.config.widthFixed&&B(a).find("colgroup").length===0){var Y=B("<colgroup>"),Z=B(a).width();B(a.tBodies[0]).find("tr:first").children("td").each(function(){Y.append(B("<col>").css("width",parseInt((B(this).width()/Z)*1000,10)/10+"%"))});B(a).prepend(Y)}}function T(b,d){var a,Z,e,f=b.config,Y=d||f.sortList;f.sortList=[];B.each(Y,function(g,c){a=[parseInt(c[0],10),parseInt(c[1],10)];e=f.headerList[a[0]];if(e){f.sortList.push(a);Z=B.inArray(a[1],e.order);e.count=Z>=0?Z:a[1]%(f.sortReset?3:2)}})}function M(Z,Y){return(Z&&Z[Y])?Z[Y].type||"":""}function U(n,m,f){var l,d,b,Y,p,h=n.config,Z=!f[h.sortMultiSortKey],g=B(n);g.trigger("sortStart",n);m.count=f[h.sortResetKey]?2:(m.count+1)%(h.sortReset?3:2);if(h.sortRestart){d=m;h.$headers.each(function(){if(this!==d&&(Z||!B(this).is("."+h.cssDesc+",."+h.cssAsc))){this.count=-1}})}d=m.column;if(Z){h.sortList=[];if(h.sortForce!==null){l=h.sortForce;for(b=0;b<l.length;b++){if(l[b][0]!==d){h.sortList.push(l[b])}}}Y=m.order[m.count];if(Y<2){h.sortList.push([d,Y]);if(m.colSpan>1){for(b=1;b<m.colSpan;b++){h.sortList.push([d+b,Y])}}}}else{if(h.sortAppend&&h.sortList.length>1){if(C.isValueInArray(h.sortAppend[0][0],h.sortList)){h.sortList.pop()}}if(C.isValueInArray(d,h.sortList)){for(b=0;b<h.sortList.length;b++){p=h.sortList[b];Y=h.headerList[p[0]];if(p[0]===d){p[1]=Y.order[Y.count];if(p[1]===2){h.sortList.splice(b,1);Y.count=-1}}}}else{Y=m.order[m.count];if(Y<2){h.sortList.push([d,Y]);if(m.colSpan>1){for(b=1;b<m.colSpan;b++){h.sortList.push([d+b,Y])}}}}}if(h.sortAppend!==null){l=h.sortAppend;for(b=0;b<l.length;b++){if(l[b][0]!==d){h.sortList.push(l[b])}}}g.trigger("sortBegin",n);setTimeout(function(){D(n);R(n);V(n)},1)}function R(p){var d=0,h=p.config,j=h.sortList,e=j.length,a=p.tBodies.length,r,n,g,o,f,Y,Z,q,b,m;if(h.serverSideSorting||!h.cache[0]){return }if(h.debug){r=new Date()}for(g=0;g<a;g++){f=h.cache[g].colMax;Y=h.cache[g].normalized;Z=Y.length;m=(Y&&Y[0])?Y[0].length-1:0;Y.sort(function(i,c){for(n=0;n<e;n++){o=j[n][0];b=j[n][1];q=/n/i.test(M(h.parsers,o))?"Numeric":"Text";q+=b===0?"":"Desc";if(/Numeric/.test(q)&&h.strings[o]){if(typeof (h.string[h.strings[o]])==="boolean"){d=(b===0?1:-1)*(h.string[h.strings[o]]?-1:1)}else{d=(h.strings[o])?h.string[h.strings[o]]||0:0}}var k=B.tablesorter["sort"+q](p,i[o],c[o],o,f[o],d);if(k){return k}}return i[m]-c[m]})}if(h.debug){I("Sorting on "+j.toString()+" and dir "+b+" time",r)}}function G(Y,Z){Y.trigger("updateComplete");if(typeof Z==="function"){Z(Y[0])}}function W(Z,Y,a){if(Y!==false&&!Z[0].isProcessing){Z.trigger("sorton",[Z[0].config.sortList,function(){G(Z,a)}])}else{G(Z,a)}}function E(Z){var d=Z.config,a=d.$table,Y,b;d.$headers.find(d.selectorSort).add(d.$headers.filter(d.selectorSort)).unbind("mousedown.tablesorter mouseup.tablesorter sort.tablesorter keypress.tablesorter").bind("mousedown.tablesorter mouseup.tablesorter sort.tablesorter keypress.tablesorter",function(g,h){if(((g.which||g.button)!==1&&!/sort|keypress/.test(g.type))||(g.type==="keypress"&&g.which!==13)){return false}if(g.type==="mouseup"&&h!==true&&(new Date().getTime()-b>250)){return false}if(g.type==="mousedown"){b=new Date().getTime();return g.target.tagName==="INPUT"?"":!d.cancelSelection}if(d.delayInit&&!d.cache){X(Z)}var f=/TH|TD/.test(this.tagName)?B(this):B(this).parents("th, td").filter(":first"),c=f[0];if(!c.sortDisabled){U(Z,c,g)}});if(d.cancelSelection){d.$headers.attr("unselectable","on").bind("selectstart",false).css({"user-select":"none",MozUserSelect:"none"})}a.unbind("sortReset update updateRows updateCell updateAll addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(".tablesorter ")).bind("sortReset.tablesorter",function(c){c.stopPropagation();d.sortList=[];D(Z);R(Z);V(Z)}).bind("updateAll.tablesorter",function(f,c,g){f.stopPropagation();C.refreshWidgets(Z,true,true);C.restoreHeaders(Z);S(Z);E(Z);P(Z,c,g)}).bind("update.tablesorter updateRows.tablesorter",function(f,c,g){f.stopPropagation();L(Z);P(Z,c,g)}).bind("updateCell.tablesorter",function(h,k,i,m){h.stopPropagation();a.find(d.selectorRemove).remove();var f,o,j,c=a.find("tbody"),n=c.index(B(k).parents("tbody").filter(":first")),g=B(k).parents("tr").filter(":first");k=B(k)[0];if(c.length&&n>=0){o=c.eq(n).find("tr").index(g);j=k.cellIndex;f=d.cache[n].normalized[o].length-1;d.cache[n].row[Z.config.cache[n].normalized[o][f]]=g;d.cache[n].normalized[o][j]=d.parsers[j].format(F(Z,k,j),Z,k,j);W(a,i,m)}}).bind("addRows.tablesorter",function(g,j,h,k){g.stopPropagation();var f,o=j.filter("tr").length,m=[],c=j[0].cells.length,n=a.find("tbody").index(j.parents("tbody").filter(":first"));if(!d.parsers){K(Z)}for(f=0;f<o;f++){for(Y=0;Y<c;Y++){m[Y]=d.parsers[Y].format(F(Z,j[f].cells[Y],Y),Z,j[f].cells[Y],Y)}m.push(d.cache[n].row.length);d.cache[n].row.push([j[f]]);d.cache[n].normalized.push(m);m=[]}W(a,h,k)}).bind("sorton.tablesorter",function(f,c,h,g){f.stopPropagation();a.trigger("sortStart",this);T(Z,c);D(Z);a.trigger("sortBegin",this);R(Z);V(Z,g);if(typeof h==="function"){h(Z)}}).bind("appendCache.tablesorter",function(c,g,f){c.stopPropagation();V(Z,f);if(typeof g==="function"){g(Z)}}).bind("applyWidgetId.tablesorter",function(c,f){c.stopPropagation();C.getWidgetById(f).format(Z,d,d.widgetOptions)}).bind("applyWidgets.tablesorter",function(c,f){c.stopPropagation();C.applyWidget(Z,f)}).bind("refreshWidgets.tablesorter",function(g,f,c){g.stopPropagation();C.refreshWidgets(Z,f,c)}).bind("destroy.tablesorter",function(g,h,f){g.stopPropagation();C.destroy(Z,h,f)})}C.construct=function(Y){return this.each(function(){if(!this.tHead||this.tBodies.length===0||this.hasInitialized===true){return(this.config&&this.config.debug)?O("stopping initialization! No thead, tbody or tablesorter has already been initialized"):""}var d=B(this),b=this,e,a="",Z=B.metadata;b.hasInitialized=false;b.isProcessing=true;b.config={};e=B.extend(true,b.config,C.defaults,Y);B.data(b,"tablesorter",e);if(e.debug){B.data(b,"startoveralltimer",new Date())}e.supportsTextContent=B("<span>x</span>")[0].textContent==="x";e.supportsDataObject=parseFloat(B.fn.jquery)>=1.4;e.string={max:1,min:-1,"max+":1,"max-":-1,zero:0,none:0,"null":0,top:true,bottom:false};if(!/tablesorter\-/.test(d.attr("class"))){a=(e.theme!==""?" tablesorter-"+e.theme:"")}e.$table=d.addClass(e.tableClass+a);e.$tbodies=d.children("tbody:not(."+e.cssInfoBlock+")");S(b);N(b);K(b);if(!e.delayInit){X(b)}E(b);if(e.supportsDataObject&&typeof d.data().sortlist!=="undefined"){e.sortList=d.data().sortlist}else{if(Z&&(d.metadata()&&d.metadata().sortlist)){e.sortList=d.metadata().sortlist}}C.applyWidget(b,true);if(e.sortList.length>0){d.trigger("sorton",[e.sortList,{},!e.initWidgets])}else{if(e.initWidgets){C.applyWidget(b)}}if(e.showProcessing){d.unbind("sortBegin.tablesorter sortEnd.tablesorter").bind("sortBegin.tablesorter sortEnd.tablesorter",function(c){C.isProcessing(b,c.type==="sortBegin")})}b.hasInitialized=true;b.isProcessing=false;if(e.debug){C.benchmark("Overall initialization time",B.data(b,"startoveralltimer"))}d.trigger("tablesorter-initialized",b);if(typeof e.initialized==="function"){e.initialized(b)}})};C.isProcessing=function(b,Z,a){b=B(b);var d=b[0].config,Y=a||b.find("."+d.cssHeader);if(Z){if(d.sortList.length>0){Y=Y.filter(function(){return this.sortDisabled?false:C.isValueInArray(parseFloat(B(this).attr("data-column")),d.sortList)})}Y.addClass(d.cssProcessing)}else{Y.removeClass(d.cssProcessing)}};C.processTbody=function(a,Y,Z){var b;if(Z){a.isProcessing=true;Y.before('<span class="tablesorter-savemyplace"/>');b=(B.fn.detach)?Y.detach():Y.remove();return b}b=B(a).find("span.tablesorter-savemyplace");Y.insertAfter(b);b.remove();a.isProcessing=false};C.clearTableBody=function(Y){B(Y)[0].config.$tbodies.empty()};C.restoreHeaders=function(Y){var Z=Y.config;Z.$table.find(Z.selectorHeaders).each(function(a){if(B(this).find(".tablesorter-header-inner").length){B(this).html(Z.headerContent[a])}})};C.destroy=function(d,Z,g){d=B(d)[0];if(!d.hasInitialized){return }C.refreshWidgets(d,true,true);var f=B(d),e=d.config,Y=f.find("thead:first"),a=Y.find("tr."+e.cssHeaderRow).removeClass(e.cssHeaderRow),b=f.find("tfoot:first > tr").children("th, td");Y.find("tr").not(a).remove();f.removeData("tablesorter").unbind("sortReset update updateAll updateRows updateCell addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd ".split(" ").join(".tablesorter "));e.$headers.add(b).removeClass(e.cssHeader+" "+e.cssAsc+" "+e.cssDesc).removeAttr("data-column");a.find(e.selectorSort).unbind("mousedown.tablesorter mouseup.tablesorter keypress.tablesorter");C.restoreHeaders(d);if(Z!==false){f.removeClass(e.tableClass+" tablesorter-"+e.theme)}d.hasInitialized=false;if(typeof g==="function"){g(d)}};C.regex=[/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,/^0x[0-9a-f]+$/i];C.sortText=function(s,m,l,d){if(m===l){return 0}var k=s.config,j=k.string[(k.empties[d]||k.emptyTo)],Y=C.regex,p,f,h,q,Z,o,g,n;if(m===""&&j!==0){return typeof j==="boolean"?(j?-1:1):-j||-1}if(l===""&&j!==0){return typeof j==="boolean"?(j?1:-1):j||1}if(typeof k.textSorter==="function"){return k.textSorter(m,l,s,d)}p=m.replace(Y[0],"\\0$1\\0").replace(/\\0$/,"").replace(/^\\0/,"").split("\\0");h=l.replace(Y[0],"\\0$1\\0").replace(/\\0$/,"").replace(/^\\0/,"").split("\\0");f=parseInt(m.match(Y[2]),16)||(p.length!==1&&m.match(Y[1])&&Date.parse(m));q=parseInt(l.match(Y[2]),16)||(f&&l.match(Y[1])&&Date.parse(l))||null;if(q){if(f<q){return -1}if(f>q){return 1}}n=Math.max(p.length,h.length);for(g=0;g<n;g++){Z=isNaN(p[g])?p[g]||0:parseFloat(p[g])||0;o=isNaN(h[g])?h[g]||0:parseFloat(h[g])||0;if(isNaN(Z)!==isNaN(o)){return(isNaN(Z))?1:-1}if(typeof Z!==typeof o){Z+="";o+=""}if(Z<o){return -1}if(Z>o){return 1}}return 0};C.sortTextDesc=function(f,Z,Y,d){if(Z===Y){return 0}var h=f.config,g=h.string[(h.empties[d]||h.emptyTo)];if(Z===""&&g!==0){return typeof g==="boolean"?(g?-1:1):g||1}if(Y===""&&g!==0){return typeof g==="boolean"?(g?1:-1):-g||-1}if(typeof h.textSorter==="function"){return h.textSorter(Y,Z,f,d)}return C.sortText(f,Y,Z)};C.getTextValue=function(Z,e,c){if(e){var b,Y=Z?Z.length:0,f=e+c;for(b=0;b<Y;b++){f+=Z.charCodeAt(b)}return c*f}return 0};C.sortNumeric=function(g,Z,Y,f,j,i){if(Z===Y){return 0}var k=g.config,h=k.string[(k.empties[f]||k.emptyTo)];if(Z===""&&h!==0){return typeof h==="boolean"?(h?-1:1):-h||-1}if(Y===""&&h!==0){return typeof h==="boolean"?(h?1:-1):h||1}if(isNaN(Z)){Z=C.getTextValue(Z,j,i)}if(isNaN(Y)){Y=C.getTextValue(Y,j,i)}return Z-Y};C.sortNumericDesc=function(g,Z,Y,f,j,i){if(Z===Y){return 0}var k=g.config,h=k.string[(k.empties[f]||k.emptyTo)];if(Z===""&&h!==0){return typeof h==="boolean"?(h?-1:1):h||1}if(Y===""&&h!==0){return typeof h==="boolean"?(h?1:-1):-h||-1}if(isNaN(Z)){Z=C.getTextValue(Z,j,i)}if(isNaN(Y)){Y=C.getTextValue(Y,j,i)}return Y-Z};C.characterEquivalents={a:"\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5",A:"\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5",c:"\u00e7\u0107\u010d",C:"\u00c7\u0106\u010c",e:"\u00e9\u00e8\u00ea\u00eb\u011b\u0119",E:"\u00c9\u00c8\u00ca\u00cb\u011a\u0118",i:"\u00ed\u00ec\u0130\u00ee\u00ef\u0131",I:"\u00cd\u00cc\u0130\u00ce\u00cf",o:"\u00f3\u00f2\u00f4\u00f5\u00f6",O:"\u00d3\u00d2\u00d4\u00d5\u00d6",ss:"\u00df",SS:"\u1e9e",u:"\u00fa\u00f9\u00fb\u00fc\u016f",U:"\u00da\u00d9\u00db\u00dc\u016e"};C.replaceAccents=function(b){var Z,c="[",Y=C.characterEquivalents;if(!C.characterRegex){C.characterRegexArray={};for(Z in Y){if(typeof Z==="string"){c+=Y[Z];C.characterRegexArray[Z]=new RegExp("["+Y[Z]+"]","g")}}C.characterRegex=new RegExp(c+"]")}if(C.characterRegex.test(b)){for(Z in Y){if(typeof Z==="string"){b=b.replace(C.characterRegexArray[Z],Z)}}}return b};C.isValueInArray=function(b,Z){var c,Y=Z.length;for(c=0;c<Y;c++){if(Z[c][0]===b){return true}}return false};C.addParser=function(c){var b,Z=C.parsers.length,Y=true;for(b=0;b<Z;b++){if(C.parsers[b].id.toLowerCase()===c.id.toLowerCase()){Y=false}}if(Y){C.parsers.push(c)}};C.getParserById=function(Z){var a,Y=C.parsers.length;for(a=0;a<Y;a++){if(C.parsers[a].id.toLowerCase()===(Z.toString()).toLowerCase()){return C.parsers[a]}}return false};C.addWidget=function(Y){C.widgets.push(Y)};C.getWidgetById=function(a){var b,Z,Y=C.widgets.length;for(b=0;b<Y;b++){Z=C.widgets[b];if(Z&&Z.hasOwnProperty("id")&&Z.id.toLowerCase()===a.toLowerCase()){return Z}}};C.applyWidget=function(h,g){h=B(h)[0];var b=h.config,d=b.widgetOptions,e=[],Z,a,f,Y;if(b.debug){Z=new Date()}if(b.widgets.length){b.widgets=B.grep(b.widgets,function(i,c){return B.inArray(i,b.widgets)===c});B.each(b.widgets||[],function(c,j){Y=C.getWidgetById(j);if(Y&&Y.id){if(!Y.priority){Y.priority=10}e[c]=Y}});e.sort(function(i,c){return i.priority<c.priority?-1:i.priority===c.priority?0:1});B.each(e,function(j,c){if(c){if(g){if(c.hasOwnProperty("options")){d=h.config.widgetOptions=B.extend(true,{},c.options,d)}if(c.hasOwnProperty("init")){c.init(h,c,b,d)}}else{if(!g&&c.hasOwnProperty("format")){c.format(h,b,d,false)}}}})}if(b.debug){f=b.widgets.length;I("Completed "+(g===true?"initializing ":"applying ")+f+" widget"+(f!==1?"s":""),Z)}};C.refreshWidgets=function(f,e,Y){f=B(f)[0];var d,g=f.config,b=g.widgets,a=C.widgets,Z=a.length;for(d=0;d<Z;d++){if(a[d]&&a[d].id&&(e||B.inArray(a[d].id,b)<0)){if(g.debug){O("Refeshing widgets: Removing "+a[d].id)}if(a[d].hasOwnProperty("remove")){a[d].remove(f,g,g.widgetOptions)}}}if(Y!==true){C.applyWidget(f,e)}};C.getData=function(d,c,b){var e="",Z=B(d),Y,a;if(!Z.length){return""}Y=B.metadata?Z.metadata():false;a=" "+(Z.attr("class")||"");if(typeof Z.data(b)!=="undefined"||typeof Z.data(b.toLowerCase())!=="undefined"){e+=Z.data(b)||Z.data(b.toLowerCase())}else{if(Y&&typeof Y[b]!=="undefined"){e+=Y[b]}else{if(c&&typeof c[b]!=="undefined"){e+=c[b]}else{if(a!==" "&&a.match(" "+b+"-")){e=a.match(new RegExp("\\s"+b+"-([\\w-]+)"))[1]||""}}}}return B.trim(e)};C.formatFloat=function(a,b){if(typeof a!=="string"||a===""){return a}var Z,Y=b&&b.config?b.config.usNumberFormat!==false:typeof b!=="undefined"?b:true;if(Y){a=a.replace(/,/g,"")}else{a=a.replace(/[\s|\.]/g,"").replace(/,/g,".")}if(/^\s*\([.\d]+\)/.test(a)){a=a.replace(/^\s*\(/,"-").replace(/\)/,"")}Z=parseFloat(a);return isNaN(Z)?B.trim(a):Z};C.isDigit=function(Y){return isNaN(Y)?(/^[\-+(]?\d+[)]?$/).test(Y.toString().replace(/[,.'"\s]/g,"")):true}}()});var A=B.tablesorter;B.fn.extend({tablesorter:A.construct});A.addParser({id:"text",is:function(){return true},format:function(C,D){var E=D.config;if(C){C=B.trim(E.ignoreCase?C.toLocaleLowerCase():C);C=E.sortLocaleCompare?A.replaceAccents(C):C}return C},type:"text"});A.addParser({id:"digit",is:function(C){return A.isDigit(C)},format:function(C,D){var E=A.formatFloat((C||"").replace(/[^\w,. \-()]/g,""),D);return C&&typeof E==="number"?E:C?B.trim(C&&D.config.ignoreCase?C.toLocaleLowerCase():C):C},type:"numeric"});A.addParser({id:"currency",is:function(C){return(/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/).test((C||"").replace(/[,. ]/g,""))},format:function(C,D){var E=A.formatFloat((C||"").replace(/[^\w,. \-()]/g,""),D);return C&&typeof E==="number"?E:C?B.trim(C&&D.config.ignoreCase?C.toLocaleLowerCase():C):C},type:"numeric"});A.addParser({id:"ipAddress",is:function(C){return(/^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/).test(C)},format:function(F,H){var E,D=F?F.split("."):"",G="",C=D.length;for(E=0;E<C;E++){G+=("00"+D[E]).slice(-3)}return F?A.formatFloat(G,H):F},type:"numeric"});A.addParser({id:"url",is:function(C){return(/^(https?|ftp|file):\/\//).test(C)},format:function(C){return C?B.trim(C.replace(/(https?|ftp|file):\/\//,"")):C},type:"text"});A.addParser({id:"isoDate",is:function(C){return(/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/).test(C)},format:function(C,D){return C?A.formatFloat((C!=="")?(new Date(C.replace(/-/g,"/")).getTime()||""):"",D):C},type:"numeric"});A.addParser({id:"percent",is:function(C){return(/(\d\s*?%|%\s*?\d)/).test(C)&&C.length<15},format:function(C,D){return C?A.formatFloat(C.replace(/%/g,""),D):C},type:"numeric"});A.addParser({id:"usLongDate",is:function(C){return(/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i).test(C)||(/^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i).test(C)},format:function(C,D){return C?A.formatFloat((new Date(C.replace(/(\S)([AP]M)$/i,"$1 $2")).getTime()||""),D):C},type:"numeric"});A.addParser({id:"shortDate",is:function(C){return(/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/).test((C||"").replace(/\s+/g," ").replace(/[\-.,]/g,"/"))},format:function(F,G,C,D){if(F){var I=G.config,E=I.headerList[D],H=E.dateFormat||A.getData(E,I.headers[D],"dateFormat")||I.dateFormat;F=F.replace(/\s+/g," ").replace(/[\-.,]/g,"/");if(H==="mmddyyyy"){F=F.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$1/$2")}else{if(H==="ddmmyyyy"){F=F.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$2/$1")}else{if(H==="yyyymmdd"){F=F.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/,"$1/$2/$3")}}}}return F?A.formatFloat((new Date(F).getTime()||""),G):F},type:"numeric"});A.addParser({id:"time",is:function(C){return(/^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i).test(C)},format:function(C,D){return C?A.formatFloat((new Date("2000/01/01 "+C.replace(/(\S)([AP]M)$/i,"$1 $2")).getTime()||""),D):C},type:"numeric"});A.addParser({id:"metadata",is:function(){return false},format:function(D,E,C){var G=E.config,F=(!G.parserMetadataName)?"sortValue":G.parserMetadataName;return B(C).metadata()[F]},type:"numeric"});A.addWidget({id:"zebra",priority:90,format:function(N,K,M){var D,H,J,O,I,E,G,F,C=new RegExp(K.cssChildRow,"i"),L=K.$tbodies;if(K.debug){E=new Date()}for(G=0;G<L.length;G++){D=L.eq(G);F=D.children("tr").length;if(F>1){O=0;H=D.children("tr:visible");H.each(function(){J=B(this);if(!C.test(this.className)){O++}I=(O%2===0);J.removeClass(M.zebra[I?1:0]).addClass(M.zebra[I?0:1])})}}if(K.debug){A.benchmark("Applying Zebra widget",E)}},remove:function(H,I,F){var E,D,C=I.$tbodies,G=(F.zebra||["even","odd"]).join(" ");for(E=0;E<C.length;E++){D=B.tablesorter.processTbody(H,C.eq(E),true);D.children().removeClass(G);B.tablesorter.processTbody(H,D,false)}}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-table-sortable', location = 'js/aui-experimental-tables-sortable.js' */
(function(){var B={sortMultiSortKey:"",headers:{},debug:false};function A(D){var C=B;D.find("th").each(function(F,G){var E=AJS.$(G);C.headers[F]={};if(E.hasClass("aui-table-column-unsortable")){C.headers[F].sorter=false}else{E.attr("tabindex","0");E.wrapInner("<span class='aui-table-header-content'/>");if(E.hasClass("aui-table-column-issue-key")){C.headers[F].sorter="issue-key"}}});D.tablesorter(C)}AJS.tablessortable={setup:function(){AJS.$.tablesorter.addParser({id:"issue-key",is:function(){return false},format:function(G){var C=G.split("-");var D=C[0];var F=C[1];var I="..........";var H="000000";var E=(D+I).slice(0,I.length);E+=(H+F).slice(-H.length);return E},type:"text"});AJS.$.tablesorter.addParser({id:"textSortAttributeParser",is:function(C,E,D){return D.hasAttribute("data-sort-value")&&(!D.hasAttribute("data-sort-type")||D.getAttribute("data-sort-type")==="text")},format:function(C,E,D,F){return D.getAttribute("data-sort-value")},type:"text"});AJS.$.tablesorter.addParser({id:"numericSortAttributeParser",is:function(C,E,D){return D.getAttribute("data-sort-type")==="numeric"&&D.hasAttribute("data-sort-value")},format:function(C,E,D,F){return D.getAttribute("data-sort-value")},type:"numeric"});AJS.$(".aui-table-sortable").each(function(){A(AJS.$(this))})},setTableSortable:function(C){A(C)}};AJS.$(AJS.tablessortable.setup)})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-sortable-tables:sortable-table-resources', location = 'js/SortableTables.js' */
define("confluence-sortable-tables/sortable-tables",["jquery","ajs","document"],function(b,g,h){function i(){var a=g.Meta.get("date.format"),b;a&&0!==a.length&&(a=a.toLowerCase()[0],"m"===a?b="mmddyyyy":"d"===a?b="ddmmyyyy":"y"===a&&(b="yyyymmdd"));return b}var f;return{init:function(){f=b("table").filter(function(){var a=b(this),e=a.find("td, th"),d=this.rows.length&&b(this.rows[0].cells),c;if("false"===a.attr("data-sortable")||-1<this.className.indexOf("tablesorter"))return!1;c=b.Event("makeSortable.SortableTables");
a.trigger(c);if(c.isDefaultPrevented()||!d||0===d.length)return!1;c=0;for(var f=e.length;c<f;c++)if(a=e[c],1!=a.rowSpan||1!=a.colSpan)return!1;return b(this.rows[0]).find("table").length||d.filter("th").length!=d.length||d.hasClass("nohighlight")?!1:this.rows[1]})},enable:function(){f.each(function(){if(-1<this.className.indexOf("tablesorter")||b(this).find("> :first-child").is("thead"))return!0;var a=this.removeChild(this.children[0]),e=b(a.children),e=Array.prototype.shift.call(e),d=h.createDocumentFragment(),
c=h.createElement("thead");d.appendChild(c);c.appendChild(e);d.appendChild(a);this.appendChild(d)});f.tablesorter({cssHeader:"sortableHeader",delayInit:!0,textExtraction:function(a){return g.trim(b(a).text())},dateFormat:i()})},refresh:function(){this.init();this.enable()}}});require("confluence/module-exporter").safeRequire("confluence-sortable-tables/sortable-tables",function(b){AJS.toInit(function(){b.init();setTimeout(b.enable,100)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-urlmacro-resources', location = 'com/atlassian/confluence/plugins/sharelinksurlmacro/soy/sharelinks-urlmacro-templates.soy' */
// This file was automatically generated from sharelinks-urlmacro-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.SharelinksUrlMacro == 'undefined') { Confluence.Blueprints.SharelinksUrlMacro = {}; }


Confluence.Blueprints.SharelinksUrlMacro.bookmarkletLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class="aui-button sharelinks-urlmacro-button" href="');
  Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript(opt_data, output);
  output.append('"><span>', soy.$$escapeHtml("Share on Confluence"), '</span></a>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('javascript:(function(){var screenWidth=screen.width,screenHeight=screen.height,popupWidth=640,popupHeight=580,popupLeft=0,popupTop=0; if(screenWidth>popupWidth){popupLeft=Math.round((screenWidth/2)-(popupWidth/2));}if(screenHeight>popupHeight){popupTop=Math.round((screenHeight/2)-(popupHeight/2));}window.open(\'', opt_data.bookmarkletActionURL, '?bookmarkedURL=\'+encodeURIComponent(window.location.href), \'\',\'left=\'+popupLeft+\',top=\'+popupTop+\',width=\'+popupWidth+\',height=\'+popupHeight+\',personalbar=0,toolbar=0,scrollbars=1,resizable=1\');}());');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-urlmacro-resources', location = 'com/atlassian/confluence/plugins/sharelinksurlmacro/js/sharelinks-urlmacro.js' */
AJS.toInit(function(a){a(".sharelinks-urlmacro-button").click(function(){alert("Drag this link to your toolbar");return false})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:jsUri', location = '/includes/js/jsUri.js' */
(function(){function g(a){a=decodeURIComponent(a);return a=a.replace("+"," ")}function h(a){var c,b,f,e,d=[];if("undefined"===typeof a||null===a||""===a)return d;0===a.indexOf("?")&&(a=a.substring(1));c=a.toString().split(/[&;]/);for(a=0;a<c.length;a++)b=c[a],f=b.split("="),e=f[0],b=-1===b.indexOf("=")?null:null===f[1]?"":f[1],d.push([e,b]);return d}function d(a){var c=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*)(?::([^:@\/]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(a||
""),b={};"source protocol authority userInfo user password host port relative path directory file query anchor".split(" ").forEach(function(a,e){b[a]=c[e]||""});this.uriParts=b;this.queryPairs=h(this.uriParts.query);this.hasAuthorityPrefixUserPref=null}Array.prototype.forEach||(Array.prototype.forEach=function(a,c){for(var b=0,f=this.length;b<f;++b)a.call(c||this,this[b],b,this)});"protocol userInfo host port path anchor".split(" ").forEach(function(a){d.prototype[a]=function(c){typeof c!=="undefined"&&
(this.uriParts[a]=c);return this.uriParts[a]}});d.prototype.hasAuthorityPrefix=function(a){if(typeof a!=="undefined")this.hasAuthorityPrefixUserPref=a;return this.hasAuthorityPrefixUserPref===null?this.uriParts.source.indexOf("//")!==-1:this.hasAuthorityPrefixUserPref};d.prototype.query=function(a){var c="",b;if(typeof a!=="undefined")this.queryPairs=h(a);for(a=0;a<this.queryPairs.length;a++){b=this.queryPairs[a];c.length>0&&(c=c+"&");c=b[1]===null?c+b[0]:c+b.join("=")}return c.length>0?"?"+c:c};
d.prototype.getQueryParamValue=function(a){var c,b;for(b=0;b<this.queryPairs.length;b++){c=this.queryPairs[b];if(g(a)===g(c[0]))return c[1]}};d.prototype.getQueryParamValues=function(a){var c=[],b,f;for(b=0;b<this.queryPairs.length;b++){f=this.queryPairs[b];g(a)===g(f[0])&&c.push(f[1])}return c};d.prototype.deleteQueryParam=function(a,c){var b=[],f,e,d,h;for(f=0;f<this.queryPairs.length;f++){e=this.queryPairs[f];d=g(e[0])===g(a);h=g(e[1])===g(c);(arguments.length===1&&!d||arguments.length===2&&!d&&
!h)&&b.push(e)}this.queryPairs=b;return this};d.prototype.addQueryParam=function(a,c,b){if(arguments.length===3&&b!==-1){b=Math.min(b,this.queryPairs.length);this.queryPairs.splice(b,0,[a,c])}else arguments.length>0&&this.queryPairs.push([a,c]);return this};d.prototype.replaceQueryParam=function(a,c,b){var d=-1,e,h;if(arguments.length===3){for(e=0;e<this.queryPairs.length;e++){h=this.queryPairs[e];if(g(h[0])===g(a)&&decodeURIComponent(h[1])===g(b)){d=e;break}}this.deleteQueryParam(a,b).addQueryParam(a,
c,d)}else{for(e=0;e<this.queryPairs.length;e++){h=this.queryPairs[e];if(g(h[0])===g(a)){d=e;break}}this.deleteQueryParam(a);this.addQueryParam(a,c,d)}return this};"protocol hasAuthorityPrefix userInfo host port path query anchor".split(" ").forEach(function(a){var c="set"+a.charAt(0).toUpperCase()+a.slice(1);d.prototype[c]=function(b){this[a](b);return this}});d.prototype.scheme=function(){var a="";if(this.protocol()){a=a+this.protocol();this.protocol().indexOf(":")!==this.protocol().length-1&&(a=
a+":");a=a+"//"}else this.hasAuthorityPrefix()&&this.host()&&(a=a+"//");return a};d.prototype.origin=function(){var a=this.scheme();if(this.userInfo()&&this.host()){a=a+this.userInfo();this.userInfo().indexOf("@")!==this.userInfo().length-1&&(a=a+"@")}if(this.host()){a=a+this.host();this.port()&&(a=a+(":"+this.port()))}return a};d.prototype.toString=function(){var a=this.origin();if(this.path())a=a+this.path();else if(this.host()&&(this.query().toString()||this.anchor()))a=a+"/";if(this.query().toString()){this.query().toString().indexOf("?")!==
0&&(a=a+"?");a=a+this.query().toString()}if(this.anchor()){this.anchor().indexOf("#")!==0&&(a=a+"#");a=a+this.anchor()}return a};d.prototype.clone=function(){return new d(this.toString())};define("confluence/jsUri",function(){return d})})(this);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'js/inline-tasks.js' */
(function(f){function e(m){var h,n;if(m.offsetX===undefined){var l=0,k=0,j=m.target,i;do{if(j.scrollTop!=0||j.scrollLeft!=0){i=j}l+=j.offsetLeft;k+=j.offsetTop;j=j.offsetParent}while(j&&j!=j.offsetParent);h=m.pageX+(i?i.scrollLeft:0)-l;n=m.pageY+(i?i.scrollTop:0)-k}else{h=m.offsetX;n=m.offsetY}return h>=3&&h<=14&&n>=3&&n<=14}function d(h){return h.currentTarget===h.target}function c(i){var h="page";if(i.closest("table.tasks-report").length){h="report"}else{if(i.closest("#task-container").length){h="mytasks"}else{if(i.closest("ul.inline-task-list").length){h="task"}}}return h}function g(k,i){var h=k.attr("data-inline-task-id");var j=k.find(i).first();if(j.closest("li").attr("data-inline-task-id")===h){return j}else{return f()}}var a=false;f(window).bind("beforeunload",function(){a=true});var b=[];f(document).delegate("ul.inline-task-list > li[data-inline-task-id]",{click:function(m){if(d(m)&&e(m)){var k=f(m.target).toggleClass("checked"),h=k.hasClass("checked")?"CHECKED":"UNCHECKED",j=k.data("inline-task-id"),n=k.closest("ul").attr("data-inline-tasks-content-id")||AJS.params.pageId,i=AJS.contextPath()+"/rest/inlinetasks/1/task/"+n+"/"+j+"/";k.prop("disabled",true);var l=k.closest("tr");l.attr("aria-disabled",true);b.push(j);AJS.trigger("inline-tasks.status-update.start",{status:h,taskId:j,taskListQueue:b});f.ajax({type:"POST",url:i,data:{status:h,trigger:"VIEW_PAGE",atl_token:AJS.Meta.get("atl-token")},dataType:"text",timeout:30000,error:function(p,r,o){if(a||r==="timeout"){return}AJS.logError("Inline Task #"+j+" was not persisted to "+h+" because of "+o+" (status: "+r+")");k.toggleClass("checked");var q;if(p.status===403){q=new Confluence.InlineTasks.Notice({textMessage:"Oops! You can\'t update this task because you are not allowed to edit the page it appears on.",className:"forbidden-notice"})}else{q=new Confluence.InlineTasks.Notice()}q.show()},success:function(){var o={dueDate:g(k,"time").attr("datetime"),completionDate:moment().format("YYYY-MM-DD"),mode:"view",assigneeUsername:g(k,".user-mention").attr("data-username"),context:c(k)};if(h==="CHECKED"){AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.completed",data:o})}}}).always(function(){k.prop("disabled",false);var o=k.closest("tr");o.attr("aria-disabled",false);b.splice(AJS.indexOf(b,j),1);AJS.trigger("inline-tasks.status-update.complete",{status:h,taskId:j,taskListQueue:b})})}},mousemove:function(h){if(d(h)){if(e(h)){f(h.target).addClass("hover")}else{f(h.target).removeClass("hover")}}},mouseout:function(h){if(d(h)){f(h.target).removeClass("hover")}},mousedown:function(h){if(d(h)&&e(h)){f(h.target).addClass("task-active")}},mouseup:function(h){if(d(h)&&e(h)){f(h.target).removeClass("task-active")}}});f("ul.inline-task-list li:not(.checked) time.date-upcoming").tooltip({title:function(){return "This task is due in less than a week"},live:true});f("ul.inline-task-list li:not(.checked) time.date-past").tooltip({title:function(){return "This task is overdue"},live:true});f("span.emptycompletedate").tooltip({title:function(){return "A completion date wasn\'t recorded for this task"},live:true});f(document).on("click","time",function(){var i=f(this);var h={date:i.attr("datetime"),mode:"view",context:c(i)};AJS.trigger("analyticsEvent",{name:"confluence-spaces.date.clicked",data:h})})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'js/inline-tasks-alert.js' */
Confluence.InlineTasks=Confluence.InlineTasks||{};(function(b){var a=function(c){this.settings=b.extend({},a.DEFAULTS,c);this.template=Confluence.InlineTasks.Templates;b("#inline-tasks-notice").remove();var d=b(this.template.notice(this.settings));d.hide().appendTo("body");d.find(".notice-close").click(function(){d.hide()});this.$notice=d};a.DEFAULTS={textMessage:"Oops! Your task change couldn\'t be saved. \u003cbr/\u003eThere could be a few reasons for this.",className:"general-notice"};a.prototype.show=function(){this.$notice.show();return this};a.prototype.hide=function(){this.$notice.hide();return this};Confluence.InlineTasks.Notice=a}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'templates/inline-tasks.soy' */
// This file was automatically generated from inline-tasks.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.InlineTasks == 'undefined') { Confluence.InlineTasks = {}; }
if (typeof Confluence.InlineTasks.Templates == 'undefined') { Confluence.InlineTasks.Templates = {}; }


Confluence.InlineTasks.Templates.notice = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-message error', (opt_data.className) ? ' ' + soy.$$escapeHtml(opt_data.className) : '', '" id="inline-tasks-notice">', opt_data.textMessage, '&nbsp;&nbsp;<a href="#" class="notice-close">', soy.$$escapeHtml("Dismiss"), '</a></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'js/inline-tasks-focus.js' */
AJS.$(document).ready(function(f){var d="focusedTaskId";var a=require("confluence/jsUri");var c=new a(window.location.href);var g=c.getQueryParamValue(d);if(g){var b=$("li[data-inline-task-id="+g+"]");if(b.length){b.addClass("focused");window.scrollTo(b.offset().left,(b.offset().top-($(window).height()/2)))}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:sortable-table-server-side', location = 'js/jquery.tablesorter.serveronly.js' */
(function(a){a.extend({tablesorterServerOnly:new function(){this.defaults={classNameDisableSorting:"aui-table-column-unsortable",classNameHeaderDesc:"tablesorter-headerDesc",classNameHeaderAsc:"tablesorter-headerAsc",reverseSort:false,sortColumn:"",onInit:function(){},onSort:function(){},events:{clickHeader:"click.sortServerOnly",refreshHeader:"refreshHeader.sortServerOnly",simulateClickHeader:"simulateClickHeader.sortServerOnly"}};var b=this;var d={updateCurrentHeaderSort:function(e,f){d.resetHeadersSort(e,f);f.$headers.each(function(){var h=a(this),g=h.attr("data-column-name");var i=f.reverseSort;if(g===f.sortColumn){i?h.addClass(f.classNameHeaderDesc):h.addClass(f.classNameHeaderAsc)}})},resetHeadersSort:function(e,f){f.$headers.removeClass(f.classNameHeaderDesc).removeClass(f.classNameHeaderAsc)},prepareHTMLHeader:function(e,f){f.$headers.not("."+f.classNameDisableSorting).attr("unselectable","on").bind("selectstart",false).addClass("tablesorter-header").wrapInner("<span class='aui-table-header-content'/>")},bindEvents:function(f,g){var e=a(f);e.on(g.events.refreshHeader,function(){d.updateCurrentHeaderSort(f,g)});e.on(g.events.simulateClickHeader,function(i,j,h){g.reverseSort=h;g.sortColumn=j})}};var c=function(f,g){var e=a(f);g.$table=e;g.$headers=e.find("thead th");g.$tbodies=e.find("tbody");d.prepareHTMLHeader(f,g);d.updateCurrentHeaderSort(f,g);if(typeof g.onInit==="function"){g.onInit.apply(f,[g])}g.$headers.on(g.events.clickHeader,function(){var h=a(this);if(h.hasClass(g.classNameDisableSorting)){return false}var i=h.attr("data-column-name");if(i===g.sortColumn){g.reverseSort=!g.reverseSort}else{g.reverseSort=false}g.sortColumn=i;if(typeof g.onSort==="function"){g.onSort.apply(f,[g])}return false});d.bindEvents(f,g)};b.construct=function(e){return this.each(function(){var f=this,g=a.extend(true,{},a.tablesorterServerOnly.defaults,e);if(this.config&&f.hasInitialized&&a.tablesorter){a.tablesorter.destroy(f,false,function(){c(f,g)})}else{c(f,g)}})}}()});a.fn.extend({tablesorterServerOnly:a.tablesorterServerOnly.construct})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:sortable-table-server-side', location = 'js/tasks-table-sortable.js' */
(function(a){var b=function(d){this.ajaxUrl=d.ajaxUrl;this.restUrlPagination=d.restUrlPagination;this.$wrapper=d.$wrapper;this.table=d.table;this.$table=a(this.table);this.analyticEventKey=d.analyticEventKey;this.sortColumnDefault=d.sortColumnDefault||"duedate";this.sortReverseSortDefault=d.sortReverseSortDefault||false;this.reportParametersDefault=d.reportParametersDefault;this.pageIndex=d.pageIndex||0;this.pageSize=d.pageSize||10;this.pageTotal=d.pageTotal||0;this.pageLimit=d.pageLimit||7;this.adaptive=d.adaptive;this.columns=d.columns;this.templates=d.templates;this.onRenderEmptyTable=d.onRenderEmptyTable;this.onBusySorting=d.onBusySorting};b.getColumnNameFromSortBy=function(e){var d={"due date":"duedate","page title":"location",assignee:"assignee"};return d[e]?d[e]:"duedate"};b.getSortByFromColumnName=function(d){var e={duedate:"due date",location:"page title"};return e[d]?e[d]:d};b.prototype.updateOptions=function(d){a.extend(this,d);this.$table=a(this.table)};b.prototype.getCurrentPageIndex=function(){var e=this.$wrapper.find(".macro-auto-pagination").last();var d=parseInt(e.attr("data-initial-page-index"),10);return isNaN(d)?0:d};b.prototype.renderPagination=function(e,g){var d=this;if(!e){e=d.$table}if(!g){g=d.reportParametersDefault}this.$wrapper.find(".macro-auto-pagination").remove();if(!(d.pageTotal>1)){return}c.UI.Components.Pagination.build({scope:e,pageSize:d.pageSize,totalPages:d.pageTotal,pageLimit:d.pageLimit,path:d.restUrlPagination,adaptive:d.adaptive,currentPage:d.pageIndex,data:{reportParameters:JSON.stringify(g)},success:function f(h,j){var k={task:h,columns:d.columns};var i=d.templates.tasksReportLine(k);j.append(i)}})};b.prototype.toggleBusyState=function(d){this.$wrapper.attr("data-loading",d);if(d){this.$wrapper.find(".task-blanket").show()}else{this.$wrapper.find(".task-blanket").hide()}if(typeof this.onBusySorting==="function"){this.onBusySorting.apply(this,[d])}};b.prototype.renderTable=function(e){var d=this;var f=_.map(e,function(g){return d.templates.tasksReportLine({task:g,columns:d.columns})}).join("");d.$table.find("tbody").html(f)};b.prototype._triggerAnalyticsSorting=function(){var d=this.analyticEventKey;var e={column:this.sortColumn,direction:this.reverseSort?"desc":"asc"};AJS.trigger("analyticsEvent",{name:d,data:e})};b.prototype._buildAjaxData=function(e){var d={url:this.ajaxUrl,cache:false,dataType:"json",data:{pageIndex:this.pageIndex,pageSize:this.pageSize,reportParameters:JSON.stringify(e)}};return d};b.prototype.init=function(){var d=this;d.sortColumn=d.sortColumnDefault;d.reverseSort=d.sortReverseSortDefault;this.$table.tablesorterServerOnly({sortColumn:d.sortColumn,reverseSort:d.reverseSort,onInit:function(){var e=a(this);e.addClass("aui-table-sortable")},onSort:function(i){var h=this,f=a(h);d.pageIndex=d.getCurrentPageIndex();d.sortColumn=i.sortColumn;d.reverseSort=i.reverseSort;d.toggleBusyState(true);var g=a.extend({},d.reportParametersDefault,{sortColumn:b.getSortByFromColumnName(d.sortColumn),reverseSort:d.reverseSort});var e=d._buildAjaxData(g);a.ajax(e).done(function(j){d.pageIndex=d.getCurrentPageIndex();d.pageTotal=j.totalPages;if(d.pageIndex===0&&d.pageTotal===0){if(typeof d.onRenderEmptyTable==="function"){d.$wrapper.find(".macro-auto-pagination").remove();f.remove();d.onRenderEmptyTable.apply(d)}return}d.renderTable(j.detailLines);d.renderPagination(null,g);f.trigger("refreshHeader.sortServerOnly");d._triggerAnalyticsSorting()}).fail(function(){var j=new c.InlineTasks.Notice({textMessage:"We can\'t sort your tasks right now. Refresh the page to try again.",className:"forbidden-notice"});j.show()}).always(function(){d.toggleBusyState(false)})}})};var c=window.Confluence||{};c.InlineTasks=c.InlineTasks||{};c.InlineTasks.TasksTableSortable=b})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:common', location = '/js/namespace.js' */
window.Confluence||(window.Confluence={});window.Confluence.UI||(window.Confluence.UI={});window.Confluence.UI.Components||(window.Confluence.UI.Components={});window.Confluence.UI.Components.Pagination||(window.Confluence.UI.Components.Pagination={});window.Confluence.UI.Components.SpacePagePicker||(window.Confluence.UI.Components.SpacePagePicker={});window.Confluence.UI.Components.PagePicker||(window.Confluence.UI.Components.PagePicker={});define("confluence-ui-components/js/page-picker",function(){return window.Confluence.UI.Components.PagePicker});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:common', location = '/js/internal/confluence.js' */
define("confluence-ui-components/confluence",[],function(){return window.Confluence});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:common', location = '/js/internal/dark-features.js' */
define("confluence-ui-components/dark-features",["ajs"],function(a){return a.DarkFeatures});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:pagination', location = '/js/pagination.js' */
(function(e,c){var d=function(j,k,i){var h=j.find("a").attr("aria-disabled",i);if(i){h.attr("disabled","disabled")}else{h.removeAttr("disabled");var g=e(".aui-nav-selected",j).data("index")+1;j.find(".aui-nav-next > a").attr("aria-disabled",g==k);j.find(".aui-nav-previous > a").attr("aria-disabled",g==1)}};var b={scope:null,success:null,data:null,path:"",url:"#",pageLimit:7,currentPage:0,adaptive:false,totalPages:0,pageSize:0};var f=function(i,j,k){var g=Math.floor(k/2);var h=j-1;if(!k||j<=k||i-g<0){return 0}if(i+g>h){return j-k}return i-g};var a=function(l){var k=l.totalPages,j=l.currentPage,m=l.pageLimit,h=l.adaptive,g;if(m){if(h){k=j+m}g=m}else{g=k}var i=f(j,k,m);return Confluence.UI.Components.Pagination.Templates.paginationFooter({currentPage:j||0,startPage:i,itemsToRender:g,totalPages:k,pageSize:l.pageSize,url:l.url||"#"})};c.build=function(j){var h=_.extend({},b,j);if(typeof h.success!=="function"){h.success=function(){}}var k=a(h);h.scope.after(k);var i=h.scope.next();var g=i.data("initial-page-index");i.on("click","a",function(p){var o=e(this),r=o.parents("ol").prev(),n=r.is("table")?r:r.find("table");var l=n.data("pageIndex")||g,q=o.parent("li");if(q.hasClass("aui-nav-selected")||q.find("> a[aria-disabled=true]").length){return}if(q.hasClass("aui-nav-next")){l++}else{if(q.hasClass("aui-nav-previous")){l--}else{l=q.data("index")}}d(i,h.totalPages,true);var m=e.extend({},{pageSize:h.pageSize,pageIndex:l},h.data);e.getJSON(Confluence.getContextPath()+h.path,m).done(function(t){l=t.currentPage;var s=n.find("tbody");s.find("tr").remove();n.data("pageIndex",l);_.each(t.detailLines,function(v){h.success(v,s)});AJS.trigger("ui.components.pagination.updated",[t,h]);var u=e.extend({},h,{totalPages:t.totalPages,adaptive:t.adaptive,currentPage:l});i.html(a(u));d(i,u.totalPages,false)}).fail(function(){d(i,h.totalPages,false)});p.preventDefault()})}})(AJS.$,window.Confluence.UI.Components.Pagination);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:pagination', location = '/soy/pagination.soy' */
// This file was automatically generated from pagination.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.Pagination == 'undefined') { Confluence.UI.Components.Pagination = {}; }
if (typeof Confluence.UI.Components.Pagination.Templates == 'undefined') { Confluence.UI.Components.Pagination.Templates = {}; }


Confluence.UI.Components.Pagination.Templates.paginationFooter = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol class="aui-nav aui-nav-pagination macro-auto-pagination" data-page-size="', soy.$$escapeHtml(opt_data.pageSize), '" data-initial-page-index="', soy.$$escapeHtml(opt_data.currentPage), '"><li class="aui-nav-previous"><a ', (opt_data.currentPage == 0) ? 'aria-disabled="true"' : 'href="#"', '>', soy.$$escapeHtml("Prev"), '</a></li>');
  var startIdx__soy16 = opt_data.startPage + 1;
  var currentIdx__soy17 = opt_data.currentPage + 1;
  var endIdx__soy18 = startIdx__soy16 + opt_data.itemsToRender;
  var totalRange__soy19 = opt_data.totalPages + 1;
  var indexInit20 = startIdx__soy16;
  var indexLimit20 = endIdx__soy18 < totalRange__soy19 ? endIdx__soy18 : totalRange__soy19;
  for (var index20 = indexInit20; index20 < indexLimit20; index20++) {
    output.append((index20 == currentIdx__soy17) ? '<li class="aui-nav-selected" data-index="' + soy.$$escapeHtml(index20 - 1) + '">' + soy.$$escapeHtml(index20) + '</li>' : '<li data-index="' + soy.$$escapeHtml(index20 - 1) + '"><a href="#">' + soy.$$escapeHtml(index20) + '</a></li>');
  }
  output.append('<li class="aui-nav-next"><a ', (currentIdx__soy17 == opt_data.totalPages) ? 'aria-disabled="true"' : 'href="' + soy.$$escapeHtml(opt_data.url) + '"', '>', soy.$$escapeHtml("Next"), '</a></li></ol>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:blank-placeholder-box', location = 'soy/blank-placeholder-box.soy' */
// This file was automatically generated from blank-placeholder-box.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.BlankPlaceholderBox == 'undefined') { Confluence.UI.Components.BlankPlaceholderBox = {}; }
if (typeof Confluence.UI.Components.BlankPlaceholderBox.Templates == 'undefined') { Confluence.UI.Components.BlankPlaceholderBox.Templates = {}; }


Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="blank-placeholder-box ', (opt_data.customClass) ? soy.$$escapeHtml(opt_data.customClass) : '', '"><div class="content"><h2>', soy.$$escapeHtml(opt_data.blankTitle), '</h2><p>', soy.$$escapeHtml(opt_data.blankDescription), '</p></div>', (opt_data.customHtml) ? opt_data.customHtml : '', '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'templates/tasks-report.soy' */
// This file was automatically generated from tasks-report.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.InlineTasks == 'undefined') { Confluence.InlineTasks = {}; }
if (typeof Confluence.InlineTasks.Report == 'undefined') { Confluence.InlineTasks.Report = {}; }
if (typeof Confluence.InlineTasks.Report.Templates == 'undefined') { Confluence.InlineTasks.Report.Templates = {}; }


Confluence.InlineTasks.Report.Templates.tasksReport = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="table-wrapper" data-loading="false"><div class="task-blanket"></div><input type="hidden" name="reportParameters" value="', soy.$$escapeHtml(opt_data.reportParameters), '" /><table class="aui aui-table-interactive tasks-report" data-sortable="false" data-total-pages="', soy.$$escapeHtml(opt_data.totalPages), '" data-page-size="', soy.$$escapeHtml(opt_data.pageSize), '" data-adaptive="', soy.$$escapeHtml(opt_data.adaptive), '" data-page-limit="', soy.$$escapeHtml(opt_data.pageLimit), '"><thead><tr class="tablesorter-headerRow">');
  var headingList14 = opt_data.headings;
  var headingListLen14 = headingList14.length;
  for (var headingIndex14 = 0; headingIndex14 < headingListLen14; headingIndex14++) {
    var headingData14 = headingList14[headingIndex14];
    output.append('<th class="header-', soy.$$escapeHtml(headingData14), (headingData14 == 'description') ? ' aui-table-column-unsortable' : '', '" data-column-name="', soy.$$escapeHtml(headingData14), '">', soy.$$escapeHtml(opt_data.headingTexts[headingData14]), '</th>');
  }
  output.append('</tr></thead><tbody>');
  if (opt_data.tasks.length) {
    var taskList29 = opt_data.tasks;
    var taskListLen29 = taskList29.length;
    for (var taskIndex29 = 0; taskIndex29 < taskListLen29; taskIndex29++) {
      var taskData29 = taskList29[taskIndex29];
      Confluence.InlineTasks.Report.Templates.tasksReportLine({task: taskData29, columns: opt_data.headings}, output);
    }
  } else {
    output.append('<tr><td colspan="', soy.$$escapeHtml(opt_data.headings.length), '">', soy.$$escapeHtml("Create a task list in a Confluence page to keep track of things you need to do."), '</td></tr>');
  }
  output.append('</tbody></table></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h2>', soy.$$escapeHtml("Hey! Did you know..."), '</h2><p>', soy.$$escapeHtml("You can view the tasks you created, or assigned to you, in the tasks tabs of your profile."), '</p>');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.tasksReportLine = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<tr data-task-id="', soy.$$escapeHtml(opt_data.task.taskId), '" aria-disabled="false">');
  var columnList51 = opt_data.columns;
  var columnListLen51 = columnList51.length;
  for (var columnIndex51 = 0; columnIndex51 < columnListLen51; columnIndex51++) {
    var columnData51 = columnList51[columnIndex51];
    if (columnData51 == 'duedate') {
      output.append('<td class=\'tasks-report-date\'>', (opt_data.task.dueDate) ? soy.$$escapeHtml(opt_data.task.dueDate) : '', '</td>');
    } else if (columnData51 == 'description') {
      output.append('<td>', opt_data.task.taskHtml, '</td>');
    } else if (columnData51 == 'assignee') {
      output.append('<td class=\'tasks-report-assignee\'>');
      if (opt_data.task.assigneeUserName) {
        Confluence.Templates.User.usernameLink({username: opt_data.task.assigneeUserName, fullName: opt_data.task.assigneeFullName, canView: false}, output);
      }
      output.append('</td>');
    } else if (columnData51 == 'location') {
      output.append('<td><a class=\'task-location\' href="', soy.$$escapeHtml(opt_data.task.pageUrl), '">', soy.$$escapeHtml(opt_data.task.pageTitle), '</a></td>');
    } else if (columnData51 == 'completedate') {
      output.append('<td class=\'tasks-report-date\'>', (opt_data.task.completeDate) ? soy.$$escapeHtml(opt_data.task.completeDate) : (opt_data.task.taskCompleted) ? '<span class="emptycompletedate">--</span>' : '', '</td>');
    } else if (columnData51 == 'labels') {
      output.append('<td>');
      var labelList89 = opt_data.task.labels;
      var labelListLen89 = labelList89.length;
      for (var labelIndex89 = 0; labelIndex89 < labelListLen89; labelIndex89++) {
        var labelData89 = labelList89[labelIndex89];
        aui.labels.label({text: labelData89}, output);
      }
      output.append('</td>');
    }
  }
  output.append('</tr>');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.taskReportBrowserWarning = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param97 = new soy.StringBuilder('<p>', soy.$$escapeHtml("Unable to show this task report."), '</p>');
  var messageList101 = opt_data.messages;
  var messageListLen101 = messageList101.length;
  for (var messageIndex101 = 0; messageIndex101 < messageListLen101; messageIndex101++) {
    var messageData101 = messageList101[messageIndex101];
    param97.append('<p>', soy.$$escapeHtml(messageData101), '</p>');
  }
  aui.message.warning({content: param97.toString()}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.taskReportWarning = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.warning({content: '<p>' + soy.$$escapeHtml("Unable to show the task report. Edit this page to resolve the issues.") + '</p>'}, output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'js/tasks-report-blank-exp.js' */
(function(b){Confluence.InlineTasks=Confluence.InlineTasks||{};Confluence.InlineTasks.TasksReport=Confluence.InlineTasks.TasksReport||{};var a={"blank.complete.title":"Task report","blank.complete.desc":"Get going, no tasks completed yet.","blank.incomplete.title":"Task report","blank.incomplete.desc":"Looking good, no incomplete tasks."};Confluence.InlineTasks.TasksReport.renderBlankExperiences=function(g,c){if(!c){c="incomplete"}var f=a["blank."+c+".title"],e=a["blank."+c+".desc"];var d=Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox({blankTitle:f,blankDescription:e,customClass:c+" tasks-report-blank"});g.html(d)}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'js/tasks-report.js' */
AJS.$(function(c){var b="/rest/inlinetasks/1/task-report/",a=Confluence.InlineTasks.Report.Templates,e=Confluence.InlineTasks.TasksTableSortable;var d=c(".tasks-report").parent();_.each(d,function(i){var l=c(i),n=l.find("table.tasks-report"),m=n.data("page-size"),k=n.data("total-pages"),f=n.data("page-limit"),q=n.data("adaptive"),p=l.find("input[name=reportParameters]").val(),g=JSON.parse(p);var o=function(r,s){c(r).attr("aria-disabled",s)};AJS.bind("inline-tasks.status-update.start",function(t,s){if(s.taskListQueue.length>0){var r=c("li[data-inline-task-id="+s.taskId+"]").closest(".tasks-report").siblings(".macro-auto-pagination");o(r,true);r=r.find("li a");r.on("click.taskreport.pagination",function(u){u.preventDefault();u.stopPropagation()})}});AJS.bind("inline-tasks.status-update.complete",function(s,r){if(r.taskListQueue.length===0){o(".macro-auto-pagination",false);c(".macro-auto-pagination li a").off("click.taskreport.pagination")}});var j=n.closest(".table-wrapper");var h=new e({$wrapper:j,table:n[0],sortReverseSortDefault:g.reverseSort,sortColumnDefault:e.getColumnNameFromSortBy(g.sortColumn),reportParametersDefault:g,pageIndex:0,pageSize:m,pageTotal:k,adaptive:q,pageLimit:f,templates:a,columns:g.columns,onRenderEmptyTable:function(){Confluence.InlineTasks.TasksReport.renderBlankExperiences(j,g.status)},analyticEventKey:"confluence-spaces.tasks.report.sorted",restUrlPagination:b,ajaxUrl:Confluence.getContextPath()+b});h.init();if(q||k>1){h.renderPagination()}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-help-tips:common', location = 'js/help-tip.js' */
(function(f){function b(){return false}function d(){return true}var l=0,g=new Date().getTime();var k=AJS.contextPath()+"/rest/helptips/1.0/tips";function h(n){n=""+(n||"");return n.replace(/\./g,"-")}function j(o,n){if(AJS.EventQueue&&n&&n.attributes.id){var q={};var p=h(n.attributes.id);q.name="helptips."+p+"."+o;q.properties={};AJS.EventQueue.push(q)}}function c(){return"c"+g+(l++)}var a={dismissedTipIds:[],loaded:f.Deferred(),url:function(){return k},sync:function(o,n){o||(o="get");n||(n=null);return f.ajax(this.url(),{type:o,context:this,dataType:"json",contentType:"application/json",data:n&&JSON.stringify(n),processData:false}).promise()},fetch:function(){var n=this.sync();n.done(function(o){f.merge(this.dismissedTipIds,o);this.loaded.resolve()});return n.promise()},show:function(n){this.loaded.done(n)},dismiss:function(n){var o=n.attributes.id;if(!o){n._dismissed=true}else{this.dismissedTipIds.push(o);this.sync("post",{id:o})}},undismiss:function(n){var o=n.attributes.id;if(!o){n._dismissed=false}else{this.dismissedTipIds.splice(f.inArray(o,this.dismissedTipIds),1);this.sync("delete",{id:o})}},isDismissed:function(n){var o=n.attributes.id;return(o)?f.inArray(o,this.dismissedTipIds)>=0:n._dismissed}};var e=AJS.HelpTip=function(n){var o;this.attributes=f.extend({},n);this.attributes.id||(this.attributes.id=false);if(this.attributes.body){this.attributes.bodyHtml=this.attributes.body;delete this.attributes.body}this.cid=c();o=this.attributes.anchor;delete this.attributes.anchor;this.view=o?new i(this,o):new m(this);this.view.$el.addClass("aui-help-tip")};AJS.HelpTip.Manager=a;f.extend(e.prototype,{show:function(){var n=this;AJS.HelpTip.Manager.show(function(){if(!n.isDismissed()){if(AJS.Popups&&AJS.Popups.DisplayController){AJS.Popups.DisplayController.request({name:n.id,weight:1000,show:function(){n.view.show()}})}else{n.view.show()}j("shown",n)}})},dismiss:function(){var n=h(arguments[0]||"programmatically");this.view.dismiss();if(!this.isDismissed()){AJS.HelpTip.Manager.dismiss(this);j("dismissed."+n,this)}},isVisible:function(){return this.view.$el.is(":visible")},isDismissed:function(){return AJS.HelpTip.Manager.isDismissed(this)}});var i=function(o,n){this.initialize(o,n)};f.extend(i.prototype,{initialize:function(r,q){var o=this;var s=q.prop("ownerDocument");var p=s!=window.document;if(p){var n=f("iframe").filter(function(){return this.contentDocument==s});n.contents().scroll(function(){var v=f(this).contents().find("body").scrollTop();var w=n.offset().top;var u=o.popup.data("offset-top");var t=o.popup.find(".arrow").height();o.popup.css("top",u-v);o.popup.toggle(v<=u-w-t&&v+n.height()-t+w-o.popup.height()>=u)})}this.model=r;this.beforeHide=b;this.dismissButton=f(AJS.Templates.HelpTip.tipDismiss());this.dismissButton.click(function(t){r.dismiss("close-button");t.preventDefault()});this.popup=AJS.InlineDialog(q,r.cid,function(v,u,t){v.html(AJS.Templates.HelpTip.tipContent(r.attributes));v.find(".helptip-body").after(o.dismissButton);v.unbind("mouseover mouseout");v.find(".helptip-link").click(function(){j("learn-more.clicked",r)});t()},{container:"body",noBind:true,preHideCallback:function(){return o.beforeHide()},calculatePositions:function(t,y,z,x){var w=AJS.InlineDialog.opts.calculatePositions(t,y,z,x);if(p){var v=t.find(".arrow").height();var u=n.contents().find("body").scrollTop();w.popupCss.top=n.offset().top+(q.offset().top-u)+q.height()+v;w.popupCss.left=q.offset().left;n.contents().scroll()}t.data("offset-top",w.popupCss.top);return w}});this.popup.refresh();this._popupHide=this.popup.hide;this.popup.hide=b;this.$el=f(this.popup[0]);AJS.$(document).bind("showLayer",function(v,u,t){if(u==="inlineDialog"&&t.id===r.cid){AJS.InlineDialog.current=null;AJS.$(document.body).unbind("click."+r.cid+".inline-dialog-check");t._validateClickToClose=b;t.hide=b}})},show:function(){var n=this.popup,o=function(p){if(!n.has(p.target).length){n.shadow.remove();n.remove()}};n.show()},dismiss:function(){this.beforeHide=d;this._popupHide()}});var m=function(n){this.initialize(n)};f.extend(m.prototype,{initialize:function(){this.$el=f("<div />")},show:f.noop,dismiss:f.noop});if(AJS.Meta.get("remote-user")){a.fetch()}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-help-tips:common', location = 'templates/help-tip.soy' */
// This file was automatically generated from help-tip.soy.
// Please don't edit this file by hand.

if (typeof AJS == 'undefined') { var AJS = {}; }
if (typeof AJS.Templates == 'undefined') { AJS.Templates = {}; }
if (typeof AJS.Templates.HelpTip == 'undefined') { AJS.Templates.HelpTip = {}; }


AJS.Templates.HelpTip.tipContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.title) ? '<h4 class="helptip-title">' + soy.$$escapeHtml(opt_data.title) + '</h4>' : '', '<div class="helptip-body">', opt_data.bodyHtml, '</div>', (opt_data.url) ? '<a class="helptip-link" href="' + soy.$$escapeHtml(opt_data.url) + '" target="_blank">' + soy.$$escapeHtml("Learn more") + '</a>' : '');
  return opt_sb ? '' : output.toString();
};


AJS.Templates.HelpTip.tipDismiss = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<button class="helptip-dismiss aui-button" type="button">', soy.$$escapeHtml("Dismiss"), '</button>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-feature-discovery-resources', location = 'js/tasks-discovery.js' */
(function(b){function a(){if(!!AJS.HelpTip){var c={id:null,body:Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification(),anchor:b("#user-menu-link")};var d=new AJS.HelpTip(c);AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.feature.discovery.shown"});d.show()}}b(document).ready(function(){if(b("meta[name=show-task-feature-discovery-flag]").length>0){a()}})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:plupload', location = 'js/plupload.js' */
(function(){function x(){this.returnValue=!1}function y(){this.cancelBubble=!0}var z=0,p=[],u={},v={},t={},w={"<":"lt",">":"gt","&":"amp",'"':"quot","'":"#39"},A=/[<>&\"\']/g,q=window.setTimeout,m={},h,j="application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/java-archive,jar,application/java-archive,war,application/java-archive,ear,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.template,xltx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,audio/mpeg,mpga mpega mp2 mp3,audio/mp3,mp3,audio/x-wav,wav,audio/mp4,m4a,image/bmp,bmp,image/gif,gif,image/jpeg,jpeg jpg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/html,htm html xhtml,text/xml,xml,text/javascript,js,text/css,css,text/rtf,rtf,text/x-java-source,java,video/mpeg,mpeg mpg mpe,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/vnd.rn-realvideo,rv,text/csv,csv,text/plain,asc txt text diff log,application/octet-stream,exe".split(/,/),
k,n,o;for(k=0;k<j.length;k+=2){o=j[k+1].split(/ /);for(n=0;n<o.length;n++){v[o[n]]=j[k];var r=t[j[k]]||[];r.push(o[n]);t[j[k]]=r}}j=navigator;k=j.userAgent;o=j.vendor;r=(n=/WebKit/.test(k))&&-1!==o.indexOf("Apple");o=window.opera&&window.opera.buildNumber;var j={windows:-1!==navigator.platform.indexOf("Win"),ie:!n&&!o&&/MSIE/gi.test(k)&&/Explorer/gi.test(j.appName),webkit:n,gecko:!n&&/Gecko/.test(k),safari:r,opera:!!o},c={VERSION:"@@version@@",STOPPED:1,STARTED:2,QUEUED:1,UPLOADING:2,FAILED:4,DONE:5,
GENERIC_ERROR:-100,HTTP_ERROR:-200,IO_ERROR:-300,SECURITY_ERROR:-400,INIT_ERROR:-500,FILE_SIZE_ERROR:-600,FILE_EXTENSION_ERROR:-601,IMAGE_FORMAT_ERROR:-700,IMAGE_MEMORY_ERROR:-701,IMAGE_DIMENSIONS_ERROR:-702,mimeTypes:v,mineTypeToExtensionsMap:t,ua:j,extend:function(a){c.each(arguments,function(b,g){0<g&&c.each(b,function(b,c){a[c]=b})});return a},getElement:function(a){return a&&1==a.nodeType?a:document.getElementById(a)},cleanName:function(a){var b,c;c=[/[\300-\306]/g,"A",/[\340-\346]/g,"a",/\307/g,
"C",/\347/g,"c",/[\310-\313]/g,"E",/[\350-\353]/g,"e",/[\314-\317]/g,"I",/[\354-\357]/g,"i",/\321/g,"N",/\361/g,"n",/[\322-\330]/g,"O",/[\362-\370]/g,"o",/[\331-\334]/g,"U",/[\371-\374]/g,"u"];for(b=0;b<c.length;b+=2)a=a.replace(c[b],c[b+1]);a=a.replace(/\s+/g,"_");return a=a.replace(/[^a-z0-9_\-\.]+/gi,"")},addRuntime:function(a,b){b.name=a;p[a]=b;p.push(b);return b},guid:function(){var a=(new Date).getTime().toString(32),b;for(b=0;5>b;b++)a+=Math.floor(65535*Math.random()).toString(32);return(c.guidPrefix||
"p")+a+(z++).toString(32)},buildUrl:function(a,b){var g="";c.each(b,function(a,b){g+=(g?"&":"")+encodeURIComponent(b)+"="+encodeURIComponent(a)});g&&(a+=(0<a.indexOf("?")?"&":"?")+g);return a},each:function(a,b){var c,f;if(a)if(c=a.length,void 0===c)for(f in a){if(a.hasOwnProperty(f)&&!1===b(a[f],f))break}else for(f=0;f<c&&!1!==b(a[f],f);f++);},formatSize:function(a){return void 0===a||/\D/.test(a)?c.translate("N/A"):1073741824<a?Math.round(a/1073741824,1)+" GB":1048576<a?Math.round(a/1048576,1)+
" MB":1024<a?Math.round(a/1024,1)+" KB":a+" b"},getPos:function(a,b){function c(a){var b,e=0;b=0;a&&(b=a.getBoundingClientRect(),a="CSS1Compat"===h.compatMode?h.documentElement:h.body,e=b.left+a.scrollLeft,b=b.top+a.scrollTop);return{x:e,y:b}}var f=0,d=0,e,h=document,b=b||h.body;if(a&&a.getBoundingClientRect&&0<navigator.userAgent.indexOf("MSIE")&&8!==h.documentMode)return f=c(a),d=c(b),{x:f.x-d.x,y:f.y-d.y};for(e=a;e&&e!=b&&e.nodeType;)f+=e.offsetLeft||0,d+=e.offsetTop||0,e=e.offsetParent;for(e=
a.parentNode;e&&e!=b&&e.nodeType;)f-=e.scrollLeft||0,d-=e.scrollTop||0,e=e.parentNode;return{x:f,y:d}},getSize:function(a){return{w:a.offsetWidth||a.clientWidth,h:a.offsetHeight||a.clientHeight}},parseSize:function(a){var b;"string"==typeof a&&(a=/^([0-9]+)([mgk]?)$/.exec(a.toLowerCase().replace(/[^0-9mkg]/g,"")),b=a[2],a=+a[1],"g"==b&&(a*=1073741824),"m"==b&&(a*=1048576),"k"==b&&(a*=1024));return a},xmlEncode:function(a){return a?(""+a).replace(A,function(a){return w[a]?"&"+w[a]+";":a}):a},toArray:function(a){var b,
c=[];for(b=0;b<a.length;b++)c[b]=a[b];return c},addI18n:function(a){return c.extend(u,a)},translate:function(a){return u[a]||a},isEmptyObj:function(a){if(void 0===a)return!0;for(var b in a)return!1;return!0},hasClass:function(a,b){return""==a.className?!1:RegExp("(^|\\s+)"+b+"(\\s+|$)").test(a.className)},addClass:function(a,b){c.hasClass(a,b)||(a.className=""==a.className?b:a.className.replace(/\s+$/,"")+" "+b)},removeClass:function(a,b){a.className=a.className.replace(RegExp("(^|\\s+)"+b+"(\\s+|$)"),
function(a,b,c){return" "===b&&" "===c?" ":""})},getStyle:function(a,b){if(a.currentStyle)return a.currentStyle[b];if(window.getComputedStyle)return window.getComputedStyle(a,null)[b]},addEvent:function(a,b,g,f){var d,b=b.toLowerCase();void 0===h&&(h="Plupload_"+c.guid());a.addEventListener?(d=g,a.addEventListener(b,d,!1)):a.attachEvent&&(d=function(){var a=window.event;a.target||(a.target=a.srcElement);a.preventDefault=x;a.stopPropagation=y;g(a)},a.attachEvent("on"+b,d));void 0===a[h]&&(a[h]=c.guid());
m.hasOwnProperty(a[h])||(m[a[h]]={});a=m[a[h]];a.hasOwnProperty(b)||(a[b]=[]);a[b].push({func:d,orig:g,key:f})},removeEvent:function(a,b,g){var f,d;"function"==typeof g?f=g:d=g;b=b.toLowerCase();if(a[h]&&m[a[h]]&&m[a[h]][b]){for(var g=m[a[h]][b],e=g.length-1;0<=e;e--)if(g[e].key===d||g[e].orig===f)if(a.detachEvent?a.detachEvent("on"+b,g[e].func):a.removeEventListener&&a.removeEventListener(b,g[e].func,!1),g[e].orig=null,g[e].func=null,g.splice(e,1),void 0!==f)break;g.length||delete m[a[h]][b];if(c.isEmptyObj(m[a[h]])){delete m[a[h]];
try{delete a[h]}catch(k){a[h]=void 0}}}},removeAllEvents:function(a,b){void 0!==a[h]&&a[h]&&c.each(m[a[h]],function(g,f){c.removeEvent(a,f,b)})},Uploader:function(a){function b(){var a,b=0,d;if(this.state==c.STARTED){for(d=0;d<e.length;d++)!a&&e[d].status==c.QUEUED?(a=e[d],a.status=c.UPLOADING,this.trigger("BeforeUpload",a)&&this.trigger("UploadFile",a)):b++;b==e.length&&(this.stop(),this.trigger("UploadComplete",e))}}function g(){var a,b;d.reset();for(a=0;a<e.length;a++)b=e[a],void 0!==b.size?(d.size+=
b.size,d.loaded+=b.loaded):d.size=void 0,b.status==c.DONE?d.uploaded++:b.status==c.FAILED?d.failed++:d.queued++;void 0===d.size?d.percent=0<e.length?Math.ceil(100*(d.uploaded/e.length)):0:(d.bytesPerSec=Math.ceil(d.loaded/((+new Date-h||1)/1E3)),d.percent=0<d.size?Math.ceil(100*(d.loaded/d.size)):0)}var f={},d,e=[],h;d=new c.QueueProgress;a=c.extend({chunk_size:0,multipart:!0,multi_selection:!0,file_data_name:"file",filters:[]},a);c.extend(this,{state:c.STOPPED,runtime:"",features:{},files:e,settings:a,
total:d,id:c.guid(),init:function(){function f(){var a=s[k++],b,e,d;if(a){b=a.getFeatures();if(e=i.settings.required_features){e=e.split(",");for(d=0;d<e.length;d++)if(!b[e[d]]){f();return}}a.init(i,function(c){c&&c.success?(i.features=b,i.runtime=a.name,i.trigger("Init",{runtime:a.name}),i.trigger("PostInit"),i.refresh()):f()})}else i.trigger("Error",{code:c.INIT_ERROR,message:c.translate("Init error.")})}var i=this,l,s,k=0,j;"function"==typeof a.preinit?a.preinit(i):c.each(a.preinit,function(a,
b){i.bind(b,a)});a.page_url=a.page_url||document.location.pathname.replace(/\/[^\/]+$/g,"/");/^(\w+:\/\/|\/)/.test(a.url)||(a.url=a.page_url+a.url);a.chunk_size=c.parseSize(a.chunk_size);a.max_file_size=c.parseSize(a.max_file_size);i.bind("FilesAdded",function(b,d){b.trigger("Started",d);var f,g,l=0,h;if((f=a.filters)&&f.length){h=[];c.each(f,function(a){c.each(a.extensions.split(/,/),function(a){/^\s*\*\s*$/.test(a)?h.push("\\.*"):h.push("\\."+a.replace(RegExp("["+"/^$.*+?|()[]{}\\".replace(/./g,
"\\$&")+"]","g"),"\\$&"))})});h=RegExp(h.join("|")+"$","i")}for(f=0;f<d.length;f++){g=d[f];g.loaded=0;g.percent=0;g.status=c.QUEUED;if(h&&!h.test(g.name))b.trigger("Error",{code:c.FILE_EXTENSION_ERROR,message:c.translate("File extension error."),file:g});else if(g.size!==void 0&&g.size>a.max_file_size)b.trigger("Error",{code:c.FILE_SIZE_ERROR,message:c.translate("File size error."),file:g});else{e.push(g);l++}}if(l)q(function(){i.trigger("QueueChanged");i.refresh()},1);else return false});a.unique_names&&
i.bind("UploadFile",function(a,b){var c=b.name.match(/\.([^.]+)$/),d="tmp";c&&(d=c[1]);b.target_name=b.id+"."+d});i.bind("UploadProgress",function(a,b){b.percent=b.size>0?Math.ceil(b.loaded/b.size*100):100;g()});i.bind("StateChanged",function(a){if(a.state==c.STARTED)h=+new Date;else if(a.state==c.STOPPED)for(l=a.files.length-1;l>=0;l--)if(a.files[l].status==c.UPLOADING){a.files[l].status=c.QUEUED;g()}});i.bind("QueueChanged",g);i.bind("Error",function(a,e){if(e.file){e.file.status=c.FAILED;g();a.state==
c.STARTED&&(d.queued||q(function(){b.call(i)},1))}});i.bind("FileUploaded",function(a,d){d.status=c.DONE;d.loaded=d.size;a.trigger("UploadProgress",d);q(function(){b.call(i)},1)});if(a.runtimes){s=[];j=a.runtimes.split(/\s?,\s?/);for(l=0;l<j.length;l++)p[j[l]]&&s.push(p[j[l]])}else s=p;f();"function"==typeof a.init?a.init(i):c.each(a.init,function(a,b){i.bind(b,a)})},refresh:function(){this.trigger("Refresh")},start:function(){this.state!=c.STARTED&&(this.state=c.STARTED,this.trigger("StateChanged"),
b.call(this))},stop:function(){this.state!=c.STOPPED&&(this.state=c.STOPPED,this.trigger("CancelUpload"),this.trigger("StateChanged"))},getFile:function(a){var b;for(b=e.length-1;0<=b;b--)if(e[b].id===a)return e[b]},removeFile:function(a){var b;for(b=e.length-1;0<=b;b--)if(e[b].id===a.id)return this.splice(b,1)[0]},splice:function(a,b){var f;f=e.splice(void 0===a?0:a,void 0===b?e.length:b);this.trigger("FilesRemoved",f);this.trigger("QueueChanged");f[0].status==c.UPLOADING&&this.state==c.STARTED&&
this.trigger("CancelUpload");if(!d.queued){var g=this;q(function(){g.trigger("UploadComplete")})}return f},trigger:function(a){var b=f[a.toLowerCase()],c,d;if(b){d=Array.prototype.slice.call(arguments);d[0]=this;for(c=0;c<b.length;c++)if(!1===b[c].func.apply(b[c].scope,d))return!1}return!0},hasEventListener:function(a){return!!f[a.toLowerCase()]},bind:function(a,b,c){var d,a=a.toLowerCase();d=f[a]||[];d.push({func:b,scope:c||this});f[a]=d},unbind:function(a,b){var a=a.toLowerCase(),c=f[a],d;if(c){if(void 0!==
b)for(d=c.length-1;0<=d;d--){if(c[d].func===b){c.splice(d,1);break}}else c=[];c.length||delete f[a]}},unbindAll:function(){var a=this;c.each(f,function(b,c){a.unbind(c)})},destroy:function(){this.trigger("Destroy");this.unbindAll()}})},File:function(a,b,c){this.id=a;this.name=b;this.size=c;this.status=this.percent=this.loaded=0},Runtime:function(){this.getFeatures=function(){};this.init=function(){}},QueueProgress:function(){var a=this;a.size=0;a.loaded=0;a.uploaded=0;a.failed=0;a.queued=0;a.percent=
0;a.bytesPerSec=0;a.reset=function(){a.size=a.loaded=a.uploaded=a.failed=a.queued=a.percent=a.bytesPerSec=0}},runtimes:{}};window.plupload=c})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:plupload', location = 'js/plupload.html5.js' */
(function(s,j,e,p){function G(e,f,k,g){var b,a,c,q,m=this;var d=y[e.id],r=function(d){b=j.createElement("canvas");b.style.display="none";j.body.appendChild(b);a=b.getContext("2d");c=new Image;c.onerror=c.onabort=function(){g({success:!1})};c.onload=function(){var r,t,j,o;f.width||(f.width=c.width);f.height||(f.height=c.height);q=Math.min(f.width/c.width,f.height/c.height);if(1>q||1===q&&"image/jpeg"===k){r=Math.round(c.width*q);t=Math.round(c.height*q);b.width=r;b.height=t;a.drawImage(c,0,0,r,t);
if("image/jpeg"===k){if(j=new w(atob(d.substring(d.indexOf("base64,")+7))),j.headers&&j.headers.length&&(o=new H,o.init(j.get("exif")[0])&&(o.setExif("PixelXDimension",r),o.setExif("PixelYDimension",t),j.set("exif",o.getBinary()),m.hasEventListener("ExifData")&&m.trigger("ExifData",e,o.EXIF()),m.hasEventListener("GpsData")&&m.trigger("GpsData",e,o.GPS()))),f.quality)try{d=b.toDataURL(k,f.quality/100)}catch(s){d=b.toDataURL(k)}}else d=b.toDataURL(k);d=d.substring(d.indexOf("base64,")+7);d=atob(d);
j&&(j.headers&&j.headers.length)&&(d=j.restore(d),j.purge());b.parentNode.removeChild(b);g({success:!0,data:d})}else g({success:!1})};c.src=d},t;"FileReader"in s?(t=new FileReader,t.readAsDataURL(d),t.onload=function(){r(t.result)}):r(d.getAsDataURL())}function C(){function e(b,a){var c=k?0:-8*(a-1),q=0,m;for(m=0;m<a;m++)q|=g.charCodeAt(b+m)<<Math.abs(c+8*m);return q}function f(b,a,c){c=3===arguments.length?c:g.length-a-1;g=g.substr(0,a)+b+g.substr(c+a)}var k=!1,g;return{II:function(b){if(b===p)return k;
k=b},init:function(b){k=!1;g=b},SEGMENT:function(b,a,c){switch(arguments.length){case 1:return g.substr(b,g.length-b-1);case 2:return g.substr(b,a);case 3:f(c,b,a);break;default:return g}},BYTE:function(b){return e(b,1)},SHORT:function(b){return e(b,2)},LONG:function(b,a){if(a===p)return e(b,4);var c="",q=k?0:-24,m;for(m=0;4>m;m++)c+=String.fromCharCode(a>>Math.abs(q+8*m)&255);f(c,b,4)},SLONG:function(b){b=e(b,4);return 2147483647<b?b-4294967296:b},STRING:function(b,a){for(var c="",a=a+b;b<a;b++)c+=
String.fromCharCode(e(b,1));return c}}}function w(e){var f={65505:{app:"EXIF",name:"APP1",signature:"Exif\x00"},65506:{app:"ICC",name:"APP2",signature:"ICC_PROFILE\x00"},65517:{app:"IPTC",name:"APP13",signature:"Photoshop 3.0\x00"}},k=[],g,b,a=p,c=0;g=new C;g.init(e);if(65496===g.SHORT(0)){b=2;for(e=Math.min(1048576,e.length);b<=e;)if(a=g.SHORT(b),65488<=a&&65495>=a)b+=2;else{if(65498===a||65497===a)break;c=g.SHORT(b+2)+2;f[a]&&g.STRING(b+4,f[a].signature.length)===f[a].signature&&k.push({hex:a,app:f[a].app.toUpperCase(),
name:f[a].name.toUpperCase(),start:b,length:c,segment:g.SEGMENT(b,c)});b+=c}g.init(null);return{headers:k,restore:function(a){g.init(a);var c=new w(a);if(!c.headers)return!1;for(a=c.headers.length;0<a;a--){var d=c.headers[a-1];g.SEGMENT(d.start,d.length,"")}c.purge();b=65504==g.SHORT(2)?4+g.SHORT(4):2;a=0;for(c=k.length;a<c;a++)g.SEGMENT(b,0,k[a].segment),b+=k[a].length;return g.SEGMENT()},get:function(a){for(var c=[],d=0,b=k.length;d<b;d++)k[d].app===a.toUpperCase()&&c.push(k[d].segment);return c},
set:function(a,c){var d=[];"string"===typeof c?d.push(c):d=c;for(var b=ii=0,e=k.length;b<e&&!(k[b].app===a.toUpperCase()&&(k[b].segment=d[ii],k[b].length=d[ii].length,ii++),ii>=d.length);b++);},purge:function(){k=[];g.init(null)}}}}function H(){function e(a,c){var q=f.SHORT(a),m,d,k,h,l,j=[],n={};for(m=0;m<q;m++)if(l=a+12*m+2,k=c[f.SHORT(l)],k!==p){d=f.SHORT(l+=2);h=f.LONG(l+=2);l+=4;j=[];switch(d){case 1:case 7:4<h&&(l=f.LONG(l)+g.tiffHeader);for(d=0;d<h;d++)j[d]=f.BYTE(l+d);break;case 2:4<h&&(l=
f.LONG(l)+g.tiffHeader);n[k]=f.STRING(l,h-1);continue;case 3:2<h&&(l=f.LONG(l)+g.tiffHeader);for(d=0;d<h;d++)j[d]=f.SHORT(l+2*d);break;case 4:1<h&&(l=f.LONG(l)+g.tiffHeader);for(d=0;d<h;d++)j[d]=f.LONG(l+4*d);break;case 5:l=f.LONG(l)+g.tiffHeader;for(d=0;d<h;d++)j[d]=f.LONG(l+4*d)/f.LONG(l+4*d+4);break;case 9:l=f.LONG(l)+g.tiffHeader;for(d=0;d<h;d++)j[d]=f.SLONG(l+4*d);break;case 10:l=f.LONG(l)+g.tiffHeader;for(d=0;d<h;d++)j[d]=f.SLONG(l+4*d)/f.SLONG(l+4*d+4);break;default:continue}h=1==h?j[0]:j;
n[k]=b.hasOwnProperty(k)&&"object"!=typeof h?b[k][h]:h}return n}var f,k,g={},b;f=new C;k={tiff:{274:"Orientation",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer"},exif:{36864:"ExifVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",36867:"DateTimeOriginal",33434:"ExposureTime",33437:"FNumber",34855:"ISOSpeedRatings",37377:"ShutterSpeedValue",37378:"ApertureValue",37383:"MeteringMode",37384:"LightSource",37385:"Flash",41986:"ExposureMode",41987:"WhiteBalance",41990:"SceneCaptureType",
41988:"DigitalZoomRatio",41992:"Contrast",41993:"Saturation",41994:"Sharpness"},gps:{"0":"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude"}};b={ColorSpace:{1:"sRGB","0":"Uncalibrated"},MeteringMode:{"0":"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{1:"Daylight",2:"Fliorescent",3:"Tungsten",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",
13:"Day white fluorescent (N 4600 -5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{"0":"Flash did not fire.",1:"Flash fired.",5:"Strobe return light not detected.",7:"Strobe return light detected.",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",
16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},ExposureMode:{"0":"Auto exposure",1:"Manual exposure",2:"Auto bracket"},WhiteBalance:{"0":"Auto white balance",1:"Manual white balance"},SceneCaptureType:{"0":"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},
Contrast:{"0":"Normal",1:"Soft",2:"Hard"},Saturation:{"0":"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{"0":"Normal",1:"Soft",2:"Hard"},GPSLatitudeRef:{N:"North latitude",S:"South latitude"},GPSLongitudeRef:{E:"East longitude",W:"West longitude"}};return{init:function(a){g={tiffHeader:10};if(a===p||!a.length)return!1;f.init(a);return 65505===f.SHORT(0)&&"EXIF\x00"===f.STRING(4,5).toUpperCase()?(a=p,a=g.tiffHeader,f.II(18761==f.SHORT(a)),42!==f.SHORT(a+=2)?a=!1:(g.IFD0=g.tiffHeader+f.LONG(a+
2),a=e(g.IFD0,k.tiff),g.exifIFD="ExifIFDPointer"in a?g.tiffHeader+a.ExifIFDPointer:p,g.gpsIFD="GPSInfoIFDPointer"in a?g.tiffHeader+a.GPSInfoIFDPointer:p,a=!0),a):!1},EXIF:function(){var a;a=e(g.exifIFD,k.exif);a.ExifVersion&&(a.ExifVersion=String.fromCharCode(a.ExifVersion[0],a.ExifVersion[1],a.ExifVersion[2],a.ExifVersion[3]));return a},GPS:function(){var a;a=e(g.gpsIFD,k.gps);a.GPSVersionID&&(a.GPSVersionID=a.GPSVersionID.join("."));return a},setExif:function(a,c){if("PixelXDimension"!==a&&"PixelYDimension"!==
a)return!1;var b;b=a;var e,d,h,j=0;if("string"===typeof b)for(hex in e=k.exif,e)if(e[hex]===b){b=hex;break}e=g.exifIFD;d=f.SHORT(e);for(i=0;i<d;i++)if(h=e+12*i+2,f.SHORT(h)==b){j=h+8;break}j?(f.LONG(j,c),b=!0):b=!1;return b},getBinary:function(){return f.SEGMENT()}}}var y={},F;e.runtimes.Html5=e.addRuntime("html5",{getFeatures:function(){var h,f,k,g,b,a;f=k=b=a=!1;s.XMLHttpRequest&&(h=new XMLHttpRequest,k=!!h.upload,f=!(!h.sendAsBinary&&!h.upload));f&&(g=!!(h.sendAsBinary||s.Uint8Array&&s.ArrayBuffer),
b=!(!File||!File.prototype.getAsDataURL&&!s.FileReader||!g),a=!(!File||!File.prototype.mozSlice&&!File.prototype.webkitSlice&&!File.prototype.slice));F=e.ua.safari&&e.ua.windows&&navigator.userAgent&&0<navigator.userAgent.indexOf("Version/4");h=f;f=j.createElement("div");return{html5:h,dragdrop:"draggable"in f||"ondragstart"in f&&"ondrop"in f,jpgresize:b,pngresize:b,multipart:b||!!s.FileReader||!!s.FormData,canSendBinary:g,cantSendBlobInFormData:!(!e.ua.gecko||!s.FormData||!s.FileReader||FileReader.prototype.readAsArrayBuffer),
progress:k,chunks:a,multi_selection:!(e.ua.safari&&e.ua.windows),triggerDialog:e.ua.gecko&&s.FormData||e.ua.webkit||e.ua.windows}},init:function(h,f){function k(a){var c,b,g=[],d,f={};for(b=0;b<a.length;b++)c=a[b],f[c.name]||(f[c.name]=!0,d=e.guid(),y[d]=c,d=new e.File(d,c.fileName||c.name,c.fileSize||c.size),d.nativeFile=c,g.push(d));g.length&&h.trigger("FilesAdded",g)}var g,b;g=this.getFeatures();g.html5?(h.upload=function(a){k(a)},h.bind("Init",function(a){var c,b,g=[],d,f,t=a.settings.filters,
l,s;d=j.body;var n;c=j.createElement("div");c.id=a.id+"_html5_container";e.extend(c.style,{position:"absolute",background:h.settings.shim_bgcolor||"transparent",width:"100px",height:"100px",overflow:"hidden",zIndex:99999,opacity:h.settings.shim_bgcolor?"":0});c.className="plupload html5";h.settings.container&&(d=j.getElementById(h.settings.container),"static"===e.getStyle(d,"position")&&(d.style.position="relative"));d.appendChild(c);d=0;a:for(;d<t.length;d++){l=t[d].extensions.split(/,/);for(f=0;f<
l.length;f++){if("*"===l[f]){g=[];break a}(s=e.mimeTypes[l[f]])&&g.push(s)}}c.innerHTML='<input id="'+h.id+'_html5"  style="font-size:999px" type="file" accept="'+g.join(",")+'" '+(h.settings.multi_selection&&h.features.multi_selection?'multiple="multiple"':"")+" />";c.scrollTop=100;n=j.getElementById(h.id+"_html5");h.settings.inputFileClazz&&(n.className+=" "+h.settings.inputFileClazz);a.features.triggerDialog?e.extend(n.style,{position:"absolute",width:"100%",height:"100%"}):e.extend(n.style,{cssFloat:"right",
styleFloat:"right"});var p=function(){k(this.files);if(navigator.appVersion.indexOf("MSIE10")===-1){n=this.cloneNode(true);n.onchange=p;this.parentNode.replaceChild(n,this)}else this.value=""};n.onchange=p;if(b="string"===typeof a.settings.browse_button?j.getElementById(a.settings.browse_button):a.settings.browse_button){var o=a.settings.browse_button_hover,B=a.settings.browse_button_active;c=a.features.triggerDialog?b:c;o&&(e.addEvent(c,"mouseover",function(){e.addClass(b,o)},a.id),e.addEvent(c,
"mouseout",function(){e.removeClass(b,o)},a.id));B&&(e.addEvent(c,"mousedown",function(){e.addClass(b,B)},a.id),e.addEvent(j.body,"mouseup",function(){e.removeClass(b,B)},a.id));a.features.triggerDialog&&e.addEvent(b,"click",function(c){j.getElementById(a.id+"_html5").click();c.preventDefault()},a.id)}}),h.bind("PostInit",function(){var a=e.getElement(h.settings.drop_element),c,b=!1;a&&(F?(e.addEvent(a,"dragenter",function(){var c,d;c=j.getElementById(h.id+"_drop");c||(c=j.createElement("input"),
c.setAttribute("type","file"),c.setAttribute("id",h.id+"_drop"),c.setAttribute("multiple","multiple"),e.addEvent(c,"change",function(){k(this.files);e.removeEvent(c,"change",h.id);c.parentNode.removeChild(c)},h.id),a.appendChild(c),b=!0);e.getPos(a,j.getElementById(h.settings.container));d=e.getSize(a);"static"===e.getStyle(a,"position")&&e.extend(a.style,{position:"relative"});e.extend(c.style,{position:"absolute",display:"block",top:0,left:0,width:d.w+"px",height:d.h+"px",opacity:0})},h.id),e.addEvent(a,
"dragleave",function(){b||(c&&c.parentElement.removeChild(c),c=null);b=!1})):(e.addEvent(a,"dragover",function(a){a.preventDefault()},h.id),e.addEvent(a,"drop",function(a){if(!$(".disable-attachment-uploader").length){var b=a.dataTransfer;b&&b.files&&k(b.files)}c&&c.parentElement.removeChild(c);c=null;a.preventDefault();h.settings.stop_propagation&&(a.cancelBubble?a.cancelBubble=!0:a.stopPropagation())},h.id)))}),h.bind("Refresh",function(a){var c,b,f;if(c=j.getElementById(h.settings.browse_button))b=
e.getPos(c,j.getElementById(a.settings.container)),f=e.getSize(c),a=j.getElementById(h.id+"_html5_container"),e.extend(a.style,{top:b.y+"px",left:b.x+"px",width:f.w+"px",height:f.h+"px"}),h.features.triggerDialog&&("static"===e.getStyle(c,"position")&&e.extend(c.style,{position:"relative"}),b=parseInt(e.getStyle(c,"z-index"),10),isNaN(b)&&(b=0),e.extend(c.style,{zIndex:b}),e.extend(a.style,{zIndex:b-1}))}),h.bind("CancelUpload",function(){b&&b.abort&&b.abort()}),h.bind("UploadFile",function(a,c){function f(d){function k(){function f(d){var h=
0,m="----pluploadboundary"+e.guid(),n,r="";b=new XMLHttpRequest;b.upload&&(b.upload.onprogress=function(b){c.loaded=Math.min(c.size,q+b.loaded-h);a.trigger("UploadProgress",c)});b.onreadystatechange=function(){var f,g;if(b.readyState==4){try{f=b.status}catch(h){f=0}if(f>=400)a.trigger("Error",{code:e.HTTP_ERROR,message:e.translate("HTTP Error."),file:c,status:f,response:b.responseText||""});else{if(p){g={chunk:j,chunks:p,response:b.responseText,status:f};a.trigger("ChunkUploaded",c,g);q=q+z;if(g.cancelled){c.status=
e.FAILED;return}c.loaded=Math.min(c.size,(j+1)*u)}else c.loaded=c.size;a.trigger("UploadProgress",c);d=o=n=r=null;if(!p||++j>=p){c.status=e.DONE;a.trigger("FileUploaded",c,{response:b.responseText,status:f})}else k()}}};if(a.settings.multipart&&g.multipart){x.name=c.target_name||c.name;b.open("post",D,!0);e.each(a.settings.headers,function(a,c){b.setRequestHeader(c,a)});if("string"!==typeof d&&s.FormData){n=new FormData;e.each(e.extend(x,a.settings.multipart_params),function(a,b){n.append(b,a)});
n.append(a.settings.file_data_name,d);b.send(n);return}if("string"===typeof d){b.setRequestHeader("Content-Type","multipart/form-data; boundary="+m);e.each(e.extend(x,a.settings.multipart_params),function(a,b){r=r+("--"+m+'\r\nContent-Disposition: form-data; name="'+b+'"\r\n\r\n');r=r+(unescape(encodeURIComponent(a))+"\r\n")});y=e.mimeTypes[c.name.replace(/^.+\.([^.]+)/,"$1").toLowerCase()]||"application/octet-stream";r+="--"+m+'\r\nContent-Disposition: form-data; name="'+a.settings.file_data_name+
'"; filename="'+unescape(encodeURIComponent(c.name))+'"\r\nContent-Type: '+y+"\r\n\r\n"+d+"\r\n--"+m+"--\r\n";h=r.length-d.length;d=r;if(b.sendAsBinary)b.sendAsBinary(d);else if(g.canSendBinary){for(var w=new Uint8Array(d.length),v=0;v<d.length;v++)w[v]=d.charCodeAt(v)&255;b.send(w.buffer)}return}}D=e.buildUrl(a.settings.url,e.extend(x,a.settings.multipart_params));b.open("post",D,!0);b.setRequestHeader("Content-Type","application/octet-stream");d.encoding&&b.setRequestHeader("Content-Encoding",d.encoding);
e.each(a.settings.headers,function(a,c){b.setRequestHeader(c,a)});b.send(d.getData?d.getData():d)}var o,p,x,u,z,y,D=a.settings.url;if(!(c.status==e.DONE||c.status==e.FAILED||a.state==e.STOPPED)){x={name:c.target_name||c.name};if(h.chunk_size&&c.size>h.chunk_size&&(g.chunks||"string"==typeof d)){u=h.chunk_size;p=Math.ceil(c.size/u);z=Math.min(u,c.size-j*u);if("string"==typeof d)o=d.substring(j*u,j*u+z);else{var v=d,A=j*u,E=j*u+z,w;if(File.prototype.slice)try{v.slice(),o=v.slice(A,E)}catch(C){o=v.slice(A,
E-A)}else o=(w=File.prototype.webkitSlice||File.prototype.mozSlice)?w.call(v,A,E):null}x.chunk=j;x.chunks=p}else z=c.size,o=d;"string"!==typeof o&&n&&g.cantSendBlobInFormData&&g.chunks&&a.settings.chunk_size?(n.onload=function(){f(n.result)},n.readAsBinaryString(o)):f(o)}}var j=0,q=0,n="FileReader"in s?new FileReader:null;k()}var h=a.settings,d;d=y[c.id];g.jpgresize&&a.settings.resize&&/\.(png|jpg|jpeg)$/i.test(c.name)?G.call(a,c,a.settings.resize,/\.png$/i.test(c.name)?"image/png":"image/jpeg",function(a){a.success?
(c.size=a.data.length,f(a.data)):f(d)}):f(d)}),h.bind("Destroy",function(a){var b,f,g=j.body,d={inputContainer:a.id+"_html5_container",inputFile:a.id+"_html5",browseButton:a.settings.browse_button,dropElm:a.settings.drop_element};for(b in d)(f=j.getElementById(d[b]))&&e.removeAllEvents(f,a.id);e.removeAllEvents(j.body,a.id);a.settings.container&&(g=j.getElementById(a.settings.container));g.removeChild(j.getElementById(d.inputContainer))}),f({success:!0})):f({success:!1})}})})(window,document,plupload);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-progress-indicator', location = 'js/aui-experimental-progress-indicator.js' */
(function(){function A(B,D,C){AJS._internal.animation.recomputeStyle(B);B.css("width",C*100+"%");D.attr("data-value",C)}AJS.progressBars={update:function(G,M){var C=AJS.$(G).first();var F=C.children(".aui-progress-indicator-value");var L=F.attr("data-value")||0;var K="aui-progress-indicator-after-update";var I="aui-progress-indicator-before-update";var D="transitionend webkitTransitionEnd";var E=!C.attr("data-value");if(E){F.css("width",0)}if(typeof M==="number"&&M<=1&&M>=0){C.trigger(I,[L,M]);var H=document.body||document.documentElement;var B=H.style;var J="transition";if(typeof B.transition==="string"||typeof B.WebkitTransition==="string"){F.one(D,function(){C.trigger(K,[L,M])});A(F,C,M)}else{A(F,C,M);C.trigger(K,[L,M])}}return C},setIndeterminate:function(D){var C=AJS.$(D).first();var B=C.children(".aui-progress-indicator-value");C.removeAttr("data-value");AJS._internal.animation.recomputeStyle(C);B.css("width","100%")}}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/drag-and-drop-utils.js' */
AJS.DragAndDrop={};
(function(c){var f=/^\w+:\/\/[^\/?#]+/.exec(location.href);AJS.DragAndDropUtils={defaultMimeType:"application/octet-stream",base:f,bindDragEnter:function(a,b){if(a.addEventListener)(b=this.isFireFox35OrLater()?this.firefox35DragEnterAndOverCallbackWrapper(b):b)&&a.addEventListener("dragenter",b,!1);else if(a.attachEvent){var d=this.ieDragEnterAndDragOverCallbackWrapper(b);a.attachEvent("ondragenter",d);c(window).unload(function(){a.detachEvent("ondragenter",d)})}},bindDragOver:function(a,b){if(a.addEventListener)this.isFireFox35OrLater()?
b=this.firefox35DragEnterAndOverCallbackWrapper(b):c.browser.safari&&(b=this.safariDragOverCallbackWrapper(b)),b&&a.addEventListener("dragover",b,!1);else if(a.attachEvent){var d=this.ieDragEnterAndDragOverCallbackWrapper(b);a.attachEvent("ondragover",d);c(window).unload(function(){a.detachEvent("ondragover",d)})}},bindDragLeave:function(a,b){b&&(c.browser.safari||this.isFireFox35OrLater()||tinymce.isIE11?a.addEventListener("dragleave",b,!1):c.browser.msie?(a.attachEvent("ondragleave",b),c(window).unload(function(){a.detachEvent("ondragleave",
b)})):c.browser.mozilla&&a.addEventListener("dragexit",b,!1))},bindDrop:function(a,b){if(c.browser.mozilla){var d=this.isFireFox35OrLater()?"drop":"dragdrop";a.addEventListener(d,this.mozillaDropCallbackWrapper(b),!1)}else if(c.browser.msie){if(b){var e=function(a){b(a);AJS.DragAndDropUtils.stopPropagation(a)};a.attachEvent("ondrop",e);c(window).unload(function(){a.detachEvent("ondrop",e)})}}else c.browser.safari&&b&&a.addEventListener("drop",function(a){b(a);AJS.DragAndDropUtils.stopPropagation(a)},
!1)},niceSize:function(a){for(var b=" B; kB; MB; GB; TB; PB; EB; ZB; YB".split(";"),c=0,e=b.length;c<e;c++)if(a<Math.pow(2,10*(c+1)))return(!c?a:(a/Math.pow(2,10*c)).toFixed(2))+b[c];return(a/Math.pow(2,10*(c+1))).toFixed(2)+b[b.length-1]},ieDragEnterAndDragOverCallbackWrapper:function(a){return function(b){if(b=b||window.event)a&&a(b),c.browser.msie&&(b.returnValue=!1)}},safariDragOverCallbackWrapper:function(a){return function(b){if((b=b||window.event)&&"file"!=b.target.type)a&&a(b),-1!=c.inArray("public.file-url",
b.dataTransfer.types)&&b.preventDefault()}},mozillaDropCallbackWrapper:function(a){return function(b){b&&(a&&a(b),b.preventDefault(),AJS.DragAndDropUtils.isFireFox35OrLater()?AJS.DragAndDropUtils.firefox35FileDataInEvent(b)&&b.stopPropagation():b.stopPropagation())}},firefox35DragEnterAndOverCallbackWrapper:function(a){return function(b){b&&(a&&a(b),AJS.DragAndDropUtils.firefox35FileDataInEvent(b)&&b.preventDefault())}},firefox35FileDataInEvent:function(a){return-1!=c.inArray("application/x-moz-file",
a.dataTransfer.types)},stopPropagation:function(a){if(a=a||window.event)a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},preventDefault:function(a){if(a=a||window.event)a.preventDefault?a.preventDefault():a.returnValue=!1},isFireFox35OrLater:function(){return!this.isFireFox30()&&-1!=c.browser.version.indexOf("1.9.")},isFireFox30:function(){return-1!=c.browser.version.indexOf("1.9.0")},enableDropZoneOn:function(a,b){if(!a)throw Error("Cannot enable drop zone on invalid container. Received: "+
a);b=b||AJS.DragAndDrop.defaultDropHandler;this.bindDragEnter(a);this.bindDragOver(a);this.bindDragLeave(a);this.bindDrop(a,b)}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/default-drop-handler.js' */
define("confluence-drag-and-drop/default-drop-handler","ajs document confluence/meta jquery confluence underscore plupload".split(" "),function(a,h,j,i,f,p,k){var m={initialise:function(){function n(){var a=i(".aui-blanket:visible");return a.length&&a.css("visibility")!=="hidden"&&!i("#drag-and-drop-progress-dialog:visible").length}function m(){for(;e.files.length;)e.removeFile(e.files[0])}var d,l=h.getElementById("fileuploadShim");if(!l){l=h.createElement("div");l.setAttribute("id","fileuploadShim");
h.body.appendChild(l)}var e=new k.Uploader({runtimes:"html5",dragdrop:true,drop_element:i("body")[0],browse_button:l.getAttribute("id"),multipart:false,stop_propagation:true,max_file_size:+j.get("global-settings-attachment-max-size")}),o=function(){d=a.Editor&&a.Editor.isVisible()&&f.EditorUploadProgressDialog?f.EditorUploadProgressDialog:new a.DragAndDropProgressDialog};d=null;e.init();a.DragAndDrop.defaultDropHandler=null;e.bind("FilesAdded",function(g,b){function q(a,b){!d&&o();for(var c=0;c<b.length;c++){var g=
b[c];g.status!==k.FAILED&&d.render({workId:g.id,status:g.status,file:g})}e.start()}if(n())m();else if(a.Editor&&a.Editor.isVisible()){var c=p.reject(b,function(a){return a.status===k.FAILED});f.Uploader&&f.Uploader.trigger("FilesAdded",c)}else a.UploadUtils.filterFiles(g,b,q)});e.bind("BeforeUpload",function(g,b){if(!a.Editor||!a.Editor.isVisible()){var e=a.DragAndDropUtils.base+a.contextPath()+"/plugins/drag-and-drop/upload.action",c=j.get("page-id"),c=c!=0?{pageId:c}:{draftId:j.get("draft-id")},
f=b.name.substr(b.name.lastIndexOf(".")+1);c.filename=b.name;c.size=b.size;c.mimeType=k.mimeTypes[f.toLowerCase()]||a.DragAndDropUtils.defaultMimeType;c.spaceKey=j.get("space-key");c.atl_token=j.get("atl-token");g.settings.url=k.buildUrl(e,c);d.cancelListeners.push(function(b,c){var e=g.getFile(c.workId);e&&g.removeFile(e);d.renderInfo(c.workId,"File was manually removed from the queue.")});d.show()}});e.bind("UploadProgress",function(a,b){d.renderUpdateToBytesUploaded(b.id,b.loaded,b.size);
d.hideCloseButton()});e.bind("FileUploaded",function(e,b,f){f.status===0?d.renderError(b.id,"The server is not responding. Please check that it is running."):d.renderComplete(b.id)});e.bind("Error",function(e,b){if(n())m();else if(a.Editor&&a.Editor.isVisible())f.Uploader&&f.Uploader.trigger("Error",b);else{var h,c;if(b.response){try{h=a.$.parseJSON(b.response);c=h.actionErrors[0]}catch(i){c=i.name==="SyntaxError"?"Invalid response received from the server.":b.message}d.renderError(b.file.id,c);a.trigger("analyticsEvent",
{name:"confluence.default-drop.upload.error.server-unknown"})}else{c=b.message;if(b.code===k.FILE_SIZE_ERROR){c=a.format("is too big to upload. Files must be less than {0}.",a.DragAndDropUtils.niceSize(j.get("global-settings-attachment-max-size")));a.trigger("analyticsEvent",{name:"confluence.default-drop.upload.error.file-size"})}else if(b.code===a.UploadUtils.ErrorCode.FILE_IS_A_FOLDER_ERROR){c="might be a folder or an unsupported file type.";a.trigger("analyticsEvent",{name:"confluence.default-drop.upload.error.file-type"})}!d&&
o();d.render({workId:b.file.id,status:b.file.status,file:b.file,errorMessage:c});if(!d.isVisible()){d.show();d.showCloseButton()}}}});e.bind("UploadComplete",function(){if(!e.total.queued&&d){d.showCloseButton();d.hasErrors()||setTimeout(function(){d.hide();d.clearRenderOutput();window.location.reload()},1E3)}})},bind:function(){function a(){i(h).unbind("dragenter",a);m.initialise()}i(h).bind("dragenter",a)}};return m});
require("confluence/module-exporter").safeRequire("confluence-drag-and-drop/default-drop-handler",function(a){AJS.toInit(a.bind)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/observable-array-list.js' */
define("confluence-drag-and-drop/observable-array-list",["ajs"],function(f){var e=function(){this._data=[];this._pushObservers=[]};e.prototype={push:function(a){this._data.push(a);this._notifyPushObservers(a)},length:function(){return this._data.length},remove:function(a,b){return this._remove.call(this._data,a,b)},_remove:function(a,b){var c=this.slice((b||a)+1||this.length);this.length=0>a?this.length+a:a;return this.push.apply(this,c)},shift:function(){return this._data.shift()},removeByPredicate:function(a){for(var b=
[],c=this._data.length,d=0;d<c;d++)a(this._data[d])||b.push(this._data[d]);this._data=b;return c-this._data.length},addPushObserver:function(a){if(f.$.isFunction(a))this._pushObservers.push(a);else throw Error("Attempting to add an observer that is not a function: "+a);},_notifyPushObservers:function(a){for(var b=0,c=this._pushObservers.length;b<c;b++)this._pushObservers[b](a)}};return e});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-drag-and-drop/observable-array-list","AJS.ObservableArrayList");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/upload-progress-dialog.js' */
(function(b){AJS.DragAndDropProgressDialog=function(a){var c=this,d={header:"Attach files",width:600,height:400};this._options=b.extend({},d,a);this.id="drag-and-drop-progress-dialog";this._dialog=new AJS.Dialog(this._options.width,this._options.height,this.id);this._dialog.addHeader(this._options.header).addPanel("Panel 1",AJS.DragAndDrop.Templates.uploadFileStatusContainer()).addButton("Done",function(){c.hide();c.clearRenderOutput()},"all-file-uploads-complete");
this._dialog.getCurrentPanel().setPadding(0);this._$closeButton=this.find(".all-file-uploads-complete");b(document).keydown(function(a){if(27==a.which)return c._$closeButton.prop("disabled")||(c.hide(),c.clearRenderOutput()),AJS.stopEvent(a)});this._$container=this.find("#upload-statuses");this._workIdsOfFilesInProgress=[];this.cancelListeners=[];this.onShowListeners=[];this._hidden=!0;this.hasErrorMessage=!1};AJS.DragAndDropProgressDialog.prototype={show:function(){this._hidden&&(this._dialog.show(),
this._hidden=!1,b.each(this.onShowListeners,function(a,b){b()}));this.hideCloseButton()},hide:function(){this._hidden||(this._dialog.hide(),this._hidden=!0)},isVisible:function(){return!this._hidden},_getProgressElementId:function(a){return"file-"+a+"-progress"},render:function(a){this._workIdsOfFilesInProgress.push(a.workId);var c=this._getProgressElementId(a.workId);this._$container.append(AJS.DragAndDrop.Templates.fileStatus({filename:a.file.name,progressElementId:c,workId:a.workId,showCancel:a.status==
plupload.QUEUED}));AJS.progressBars.update("#"+c,0);a.status==plupload.QUEUED?b("#file-upload-cancel-"+a.workId).click(function(c){return function(e){b.each(c,function(b,c){c(e,a)})}}(this.cancelListeners)):this.renderError(a.workId,a.errorMessage)},renderError:function(a,c){if(-1==b.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);var d=b("#file-status-block-"+a),e=AJS.escapeEntities(d.attr("data-filename"));d.html(aui.message.warning({content:c,titleContent:e}));
this.hasErrorMessage=!0},renderInfo:function(a,c){if(-1==b.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);var d=b("#file-status-block-"+a),e=AJS.escapeEntities(d.attr("data-filename"));d.html(aui.message.info({content:c,titleContent:e}));this.hasErrorMessage=!0},hasErrors:function(){return this.hasErrorMessage},renderUpdateToBytesUploaded:function(a,c,d){if(-1==b.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);var e=
AJS.DragAndDropUtils.niceSize(c),f=b("#file-"+a+"-uploaded");f.length?f.text(e):b("#file-upload-progress-text-"+a).html(AJS.DragAndDrop.Templates.uploadFileStatusProgressMessage({fileId:a,uploadedSizeNice:e,totalSizeNice:AJS.DragAndDropUtils.niceSize(d)}));AJS.progressBars.update("#"+this._getProgressElementId(a),c/d)},renderComplete:function(a){if(-1==b.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);b("#cancel-or-success-placeholder-"+a).html(AJS.DragAndDrop.Templates.uploadFileStatusSuccessIcon())},
renderCancelled:function(a){if(-1==b.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);AJS.progressBars.setIndeterminate("#"+this._getProgressElementId(a));b("#file-upload-progress-text-"+a).html("Cancelled.");b("#cancel-or-success-placeholder-"+a).hide()},clearRenderOutput:function(){this.showCloseButton();this._$container.empty();this._workIdsOfFilesInProgress=[];this.hasErrorMessage=!1},hideCloseButton:function(){this._$closeButton.hide()},
showCloseButton:function(){this._$closeButton.show()},find:function(a){return this._dialog.getCurPanel().page.body.parent().find(a)}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'templates/drag-and-drop.soy' */
// This file was automatically generated from drag-and-drop.soy.
// Please don't edit this file by hand.

if (typeof AJS == 'undefined') { var AJS = {}; }
if (typeof AJS.DragAndDrop == 'undefined') { AJS.DragAndDrop = {}; }
if (typeof AJS.DragAndDrop.Templates == 'undefined') { AJS.DragAndDrop.Templates = {}; }


AJS.DragAndDrop.Templates.fileStatus = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li id="file-status-block-', soy.$$escapeHtml(opt_data.workId), '" data-filename="', soy.$$escapeHtml(opt_data.filename), '"><div class="aui-group aui-group-split file-status-item"><div class="aui-item"><label>', soy.$$escapeHtml(opt_data.filename), '</label></div><div class="aui-item"><div id="file-upload-progress-text-', soy.$$escapeHtml(opt_data.workId), '" class="file-upload-progress-text">', soy.$$escapeHtml("Waiting..."), '</div></div></div><div class="file-upload-progress-block"><div class="aui-progress-indicator" id="', soy.$$escapeHtml(opt_data.progressElementId), '"><span class="aui-progress-indicator-value"></span></div>', (opt_data.showCancel) ? '<div id="cancel-or-success-placeholder-' + soy.$$escapeHtml(opt_data.workId) + '" class="cancel-or-success-placeholder ui-state-default"><span id="file-upload-cancel-' + soy.$$escapeHtml(opt_data.workId) + '" class="aui-icon aui-icon-small aui-iconfont-remove" title="' + soy.$$escapeHtml("Cancel Upload") + '">' + soy.$$escapeHtml("Cancel") + '</span></div>' : '', '</div></li>');
  return opt_sb ? '' : output.toString();
};


AJS.DragAndDrop.Templates.uploadFileStatusContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul id="upload-statuses"></ul>');
  return opt_sb ? '' : output.toString();
};


AJS.DragAndDrop.Templates.uploadFileStatusSuccessIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class=\'aui-icon aui-icon-small aui-iconfont-success\'></span>');
  return opt_sb ? '' : output.toString();
};


AJS.DragAndDrop.Templates.uploadFileStatusProgressMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span id="file-', soy.$$escapeHtml(opt_data.fileId), '-uploaded">', soy.$$escapeHtml(opt_data.uploadedSizeNice), '</span> ', soy.$$escapeHtml("of"), ' ', soy.$$escapeHtml(opt_data.totalSizeNice));
  return opt_sb ? '' : output.toString();
};


AJS.DragAndDrop.Templates.dropZone = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="attachments-drop-zone"><div class="drop-zone-image"></div><div class="drop-zone-text">', soy.$$escapeHtml("Drop files here to attach them"), '</div></div>');
  return opt_sb ? '' : output.toString();
};


AJS.DragAndDrop.Templates.dragOverlay = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="dragOverlay"><div class="overlay-blanket"></div><div class="overlay-center"><p>', soy.$$escapeHtml("Drop files to insert them into the page"), '</p></div><span class="overlay-baseline"></span><div class="overlay-drop-zone"></div></div>');
  return opt_sb ? '' : output.toString();
};


AJS.DragAndDrop.Templates.dragAndDropTip = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="attach-tip-discovery"><span class="img"></span><div class="text"><strong>', soy.$$escapeHtml("Tip:"), ' </strong><p>', soy.$$escapeHtml("Drop files straight into your page to insert them directly."), '</p><div><a class="close-tip" href="#">', soy.$$escapeHtml("Ok, got it!"), '</a></div></div></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/upload-utils.js' */
(function(){AJS.UploadUtils={ErrorCode:{FILE_IS_A_FOLDER_ERROR:-602},filterFiles:function(d,a,g){for(var e=[],b=0,c=0;c<a.length;c++)if(4096>=a[c].nativeFile.size){var f=new FileReader;f.onload=function(){b++;e.push(this.currentFile);b===a.length&&g(d,e)};f.onerror=function(){d.removeFile(this.currentFile);d.trigger("Error",{code:AJS.UploadUtils.ErrorCode.FILE_IS_A_FOLDER_ERROR,message:"File is a folder",file:this.currentFile});b++;b===a.length&&g(d,e)};f.currentFile=a[c];f.readAsText(a[c].nativeFile)}else b++,
e.push(a[c]),b===a.length&&g(d,e)}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/like.js' */
define("confluence/ic/model/like",["backbone"],function(b){var a=b.Model.extend({initialize:function(c,d){if(!c){throw new Error("Attributes is required")}if(!c.username){throw new Error("username is a required attribute")}}});return a});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/likes.js' */
define("confluence/ic/model/likes",["ajs","underscore","backbone","confluence/ic/model/like","confluence/ic/likes/likes-manager"],function(b,d,f,c,a){var e=f.Collection.extend({model:c,url:function(){return b.contextPath()+"/rest/likes/1.0/content/"+this.contentId+"/likes"},initialize:function(h,g){d.bindAll(this,"_handleSaveSuccess","_handleDestroySuccess");g=g||{};if(g.contentId===undefined){throw new Error("content ID is required.")}this.contentId=g.contentId;if(a.getLikes(g.contentId)){this.reset(a.getLikes(g.contentId))}this.listenTo(f,"ic:likes-received",this.updateLikes);this.bind("add",function(i){i.save(null,{success:this._handleSaveSuccess,error:this._handleError})});this.bind("remove",function(i){i.id="";i.destroy({success:this._handleDestroySuccess,error:this._handleError})});this.currentUserName=b.Meta.get("remote-user")},updateLikes:function(){this.reset(a.getLikes(this.contentId))},addUser:function(g){return this.add({username:g})},removeUser:function(g){return this.remove(this.getUserByName(g))},isLikedByUser:function(g){return !!this.getUserByName(g)},getUserByName:function(g){return this.findWhere({username:g})},toggleLike:function(){if(this.isLikedByUser(this.currentUserName)){this.removeUser(this.currentUserName)}else{this.addUser(this.currentUserName)}},_handleSaveSuccess:function(g){a.add(this.contentId,this.currentUserName)},_handleDestroySuccess:function(g){a.remove(this.contentId,this.currentUserName)},_handleError:function(g){f.trigger("ic:error","Likes cannot be updated.")}});return e});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/comment.js' */
define("confluence/ic/model/comment",["jquery","underscore","backbone","ajs","confluence/ic/util/utils","confluence/ic/model/reply-collection"],function(d,b,g,a,c,f){var e=g.Model.extend({defaults:{authorDisplayName:c.getAuthorDisplayName(),authorUserName:a.Meta.get("remote-user"),authorAvatarUrl:a.contextPath()+a.Meta.get("current-user-avatar-url"),body:"",originalSelection:"",containerId:a.Meta.get("latest-page-id"),parentCommentId:"0",lastFetchTime:d("meta[name=confluence-request-time]").attr("content"),hasDeletePermission:true,hasEditPermission:true,hasResolvePermission:true,resolveProperties:{resolved:false,resolvedTime:0},serializedHighlights:"",deleted:false},urlRoot:a.contextPath()+"/rest/inlinecomments/1.0/comments",initialize:function(h){h=h||{};this._setHighlights(h.markerRef);var i=this;this.replies=new f();this.replies.url=function(){return i.url()+"/replies"};if(c.getDarkFeatures().DANGLING_COMMENT&&a.Meta.get("page-id")===a.Meta.get("latest-page-id")){if(this.isDangling()&&!this.isResolved()){this.resolve(true,{wait:true,dangling:true,success:b.bind(function(){g.trigger("ic:open:dangled",this)},this),error:b.bind(function(){g.trigger("ic:resolve:dangled:failed",this)},this)})}}},validate:function(){if(!this.get("body")){return true}},resolve:function(h,i){i=i||{};this.save({},b.extend(i,{url:this.urlRoot+"/"+this.get("id")+"/resolve/"+h+"/dangling/"+(i.dangling===true)}))},isResolved:function(){return this.get("resolveProperties").resolved},isDangling:function(){return this.highlight===undefined},isDeleted:function(){return this.get("deleted")},_setHighlights:function(i){var h;if(i!==undefined){h=d("#content .wiki-content:first").find('.inline-comment-marker[data-ref="'+i+'"]')}else{h=d(".ic-current-selection")}if(h.length!==0){this.highlights=h;this.highlight=h.first()}else{this.highlights=undefined;this.highlight=undefined}},destroy:function(i){i=i?b.clone(i):{};var h=this;var k=i.success;var j=function(n,m){var l=m.error;m.error=function(o){if(l){l(n,o,m)}n.trigger("error",n,o,m)}};i.success=function(l){if(k){k(h,l,i)}};j(this,i);return this.sync("delete",this,i)}});return e});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/comment-collection.js' */
define("confluence/ic/model/comment-collection",["jquery","backbone","ajs","underscore","confluence/ic/model/comment"],function(d,f,a,b,e){var c=f.Collection.extend({model:e,initialize:function(){this.listenTo(this,"sort",this._removeCachedMarkers)},url:function(){var h=a.contextPath();var g=a.Meta.get("page-id");return h+"/rest/inlinecomments/1.0/comments?containerId="+g},getResolvedCount:function(){return this.getResolvedComments().length},getUnresolveCount:function(){return this.reject(function(g){return g.isResolved()===true&&g.isDeleted()===false}).length},getResolvedComments:function(){return this.filter(function(g){return g.isResolved()===true&&g.isDeleted()===false})},getResolvedCommentsDesc:function(){return b.sortBy(this.getResolvedComments(),function(g){return 0-g.get("resolveProperties").resolvedTime})},getNextCommentOnPage:function(){return this._getCommentAtRelativeOffset(1)},getPrevCommentOnPage:function(){return this._getCommentAtRelativeOffset(-1)},_getCommentAtRelativeOffset:function(j){var k=this.getCommentsOnPage();var g=this.findWhere({active:true});if(g===undefined||k.length<=1){return null}var i=b.pluck(k,"id");var h=b.indexOf(i,g.get("id"));return k[(h+j+k.length)%k.length]},getCommentsOnPage:function(){return this.filter(function(g){return((g.isResolved()===false)&&!g.isDangling()&&(g.isDeleted()===false))||g.get("active")===true})},getCommentsOnPageCount:function(){return this.getCommentsOnPage().length},getActiveIndexWithinPageComments:function(){var h=b.pluck(this.getCommentsOnPage(),"id");var g=this.findWhere({active:true});if(g===undefined){return null}var i=g.get("id");return b.indexOf(h,i)},comparator:function(h,g){if(this.markers===undefined){this.markers=d("#content .wiki-content:first").find(".inline-comment-marker")}if(h.highlight===undefined){return 1}if(g.highlight===undefined){return -1}return this.markers.index(h.highlight)-this.markers.index(g.highlight)},_removeCachedMarkers:function(){this.markers=undefined}});return c});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/reply.js' */
define("confluence/ic/model/reply",["jquery","backbone","ajs","confluence/ic/util/utils",],function(d,e,b,c){var a=e.Model.extend({defaults:{authorDisplayName:c.getAuthorDisplayName(),authorUserName:b.Meta.get("remote-user"),authorAvatarUrl:b.contextPath()+b.Meta.get("current-user-avatar-url"),body:"",commentId:"0",hasDeletePermission:true,hasEditPermission:!!b.Meta.get("remote-user")},urlRoot:function(){return b.contextPath()+"/rest/inlinecomments/1.0/comments/"+this.get("commentId")+"/replies"},sync:function(h,g,f){f=f||{};if(h==="create"){f.url=this.urlRoot()+"?containerId="+b.Meta.get("latest-page-id")}return e.sync.call(this,h,g,f)},validate:function(){if(!this.get("body")){return true}}});return a});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/reply-collection.js' */
define("confluence/ic/model/reply-collection",["backbone","confluence/ic/model/reply"],function(c,a){var b=c.Collection.extend({model:a});return b});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:highlight-view', location = 'view/highlight-text/highlight-text.js' */
define("confluence/ic/view/highlight-text",["backbone","ajs","confluence/ic/util/text-highlighter","confluence/ic/util/utils"],function(e,b,c,d){var a=e.View.extend({el:"#content .wiki-content:first",events:{"click .inline-comment-marker.valid":"commentClick"},initialize:function(){if(this.collection){this.listenTo(this.collection,"sync remove change:deleted",this.render);this.listenTo(this.collection,"change:active",this.setActive)}this.listenTo(e,"ic:view ic:overlap ic:sidebar-hidden",this.clearSelection);this.listenTo(e,"ic:persist",this.persistComment);this.listenTo(e,"ic:delete",this.render);b.bind("qr:add-new-highlight",this._addQuickReloadMarker)},render:function(){this.inlineLinks=[];this.$(".inline-comment-marker").removeClass("valid");this.collection.each(function(f){if(!f.isResolved()&&!f.get("deleted")&&f.highlights){f.highlights.addClass("valid");this._pushToInlineLinks(f.highlights)}},this);this._setupLinkDialog()},_pushToInlineLinks:function(g){var f=this;g.each(function(){var h=d.getInlineLinks(this);h.each(function(){if($(this).attr("href")){f.inlineLinks.push($(this))}})})},_setupLinkDialog:function(){var f={width:200,onHover:true,noBind:true,calculatePositions:this._calculatePositions,hideDelay:1000};$(this.inlineLinks).each(function(){var g=this;b.InlineDialog(g,"inline-comment-link",function(i,h,j){i.addClass("inline-comment-link");i.html(Confluence.Templates.IC.highlightTextLink({link:g.attr("href")}));j();return false},f)})},_calculatePositions:function(f,g,h){return{displayAbove:true,popupCss:{top:g.target.offset().top-f.height()-10,left:h.x-(f.width()/2)},arrowCss:{top:f.height(),left:f.width()/2-4}}},setActive:function(g){this.$(".inline-comment-marker").removeClass("active");var f=this.$('.inline-comment-marker[data-ref="'+g.get("markerRef")+'"]');if(g.get("active")&&f.length){f.addClass("active")}},commentClick:function(f){f.preventDefault();var g=this.$(f.currentTarget);if(!g.hasClass("active")){this.displayComment(g)}else{e.trigger("ic:hide-sidebar",f,true)}},displayComment:function(i,h){var g=i.data("ref");var f=this.collection.findWhere({markerRef:g});e.trigger("ic:view",f,h)},clearSelection:function(){(new c()).removeHighlight()},persistComment:function(f){this.$(".ic-current-selection").removeClass("ic-current-selection").addClass("inline-comment-marker").attr("data-ref",f.get("markerRef"));this.collection.add(f)},_addQuickReloadMarker:function(j,h,f){var k=h.comment;var g=this.$('.inline-comment-marker[data-ref="'+k.dataRef+'"]');if(g.length){f.resolve(h);return}var i=(new c()).deserializeHighlights(k.serializedHighlights,k.dataRef);if(i){f.resolve(h)}else{f.reject(h)}}});return a});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:highlight-view', location = 'view/highlight-text/highlight-text.soy' */
// This file was automatically generated from highlight-text.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.IC == 'undefined') { Confluence.Templates.IC = {}; }


Confluence.Templates.IC.highlightTextLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.icons.icon({useIconFont: true, size: 'small', icon: 'link'}, output);
  output.append('<a href=\'', soy.$$escapeHtml(opt_data.link), '\'>', soy.$$escapeHtml(opt_data.link), '</a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:confirm-dialog-view', location = 'view/confirm-dialog/confirm-dialog.soy' */
// This file was automatically generated from confirm-dialog.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.IC == 'undefined') { Confluence.Templates.IC = {}; }


Confluence.Templates.IC.confirmDialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<strong class="ic-confirm-label">', soy.$$escapeHtml(opt_data.label), '</strong><div class="ic-confirm-message">', soy.$$escapeHtml(opt_data.message), '</div><div class="ic-confirm-buttons">');
  aui.buttons.button({text: "Delete", tagName: 'button', extraClasses: ['ic-action-delete-confirm', 'aui-button-compact']}, output);
  aui.buttons.button({text: "Cancel", tagName: 'button', type: 'link', extraClasses: ['ic-action-cancel-confirm', 'aui-button-compact']}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:confirm-dialog-view', location = 'view/confirm-dialog/confirm-dialog.js' */
define("confluence/ic/view/confirm-dialog",["backbone","underscore","jquery"],function(d,b,c){var a=d.View.extend({tagName:"div",className:"ic-confirm-container",initialize:function(e){this.$menuEl=e.$menuEl;this.$bodyEl=e.$bodyEl;this.$menuEl.addClass("ic-action-menu-active");this.render();b.bindAll(this,"clickOutside");this.$bodyEl.on("click",this.clickOutside)},events:{"click .ic-action-cancel-confirm":"cancel","click .ic-action-delete-confirm":"confirm"},template:Confluence.Templates.IC.confirmDialog,render:function(){this.$el.html(this.template(this.model.toJSON()));return this},clickOutside:function(f){if(c.contains(this.el,f.target)||this.el===f.target){return}this.cancel()},cancel:function(){this.destroy()},confirm:function(){this.trigger("ic:confirm");this.destroy()},destroy:function(){this.$bodyEl.off("click",this.clickOutside);this.$menuEl.removeClass("ic-action-menu-active");this.remove()}});return a});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:common-resource', location = 'common/common.soy' */
// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.IC == 'undefined') { Confluence.Templates.IC = {}; }


Confluence.Templates.IC.authorAvatar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.authorUserName == '') {
    aui.avatar.avatar({size: opt_data.size, avatarImageUrl: opt_data.authorAvatarUrl, extraClasses: 'ic-author-avatar'}, output);
  } else {
    output.append('<a data-username="', soy.$$escapeHtml(opt_data.authorUserName), '" href="', soy.$$escapeHtml("/wiki"), '/display/~', soy.$$escapeHtml(opt_data.authorUserName), '" title="" data-user-hover-bound="true">');
    aui.avatar.avatar({size: opt_data.size, avatarImageUrl: opt_data.authorAvatarUrl, extraClasses: 'ic-author-avatar'}, output);
    output.append('</a>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.IC.sidebarHeading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="ic-sidebar-heading"><div id="ic-nav-container">');
  if (opt_data.createComment == true) {
    Confluence.Templates.IC.navigation({disabled: true, showIndex: false}, output);
  }
  output.append('</div><div class="ic-right-toolbar">');
  if (opt_data.showMenu) {
    Confluence.Templates.IC.commentMenu(opt_data, output);
  }
  aui.buttons.button({type: 'text', extraClasses: 'aui-button-text ic-action-hide', iconType: 'aui', iconClass: 'aui-icon-small aui-iconfont-close-dialog', text: '', extraAttributes: {'title': "Close sidebar (])"}}, output);
  output.append('</div></div><div class="ic-error"></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.IC.commentHeader = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="ic-author">');
  Confluence.Templates.IC.authorAvatar({authorUserName: opt_data.authorUserName, authorAvatarUrl: opt_data.authorAvatarUrl, size: 'small'}, output);
  Confluence.Templates.User.usernameLink({canView: opt_data.authorUserName != '', username: opt_data.authorUserName, fullName: opt_data.authorDisplayName}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.IC.timeLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class="ic-date-link" title="', soy.$$escapeHtml(opt_data.time), '" href="', soy.$$escapeHtml("/wiki" + opt_data.commentUrl), '"><span>', soy.$$escapeHtml(opt_data.time), '</span></a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:library', location = 'lib/jquery.textHighlighter.js' */
(function(f,e,b,g){var a={ELEMENT_NODE:1,TEXT_NODE:3};var d={name:"textHighlighter"};function c(i,h){this.context=i;this.$context=f(i);this.options=f.extend({},f[d.name].defaults,h);this.init()}c.prototype={init:function(){this.$context.addClass(this.options.contextClass);this.bindEvents()},destroy:function(){this.unbindEvents();this.$context.removeClass(this.options.contextClass);this.$context.removeData(d.name)},bindEvents:function(){},unbindEvents:function(){},highlightHandler:function(i){var h=i.data.self;h.doHighlight()},doHighlight:function(k){var i=k||this.getCurrentRange();if(!i||i.collapsed){return}var j=i.toString();var l="";if(this.options.onBeforeHighlight(i)==true){var m=f.textHighlighter.createWrapper(this.options);var h=this.highlightRange(i,m);l=this.normalizeHighlights(h);this.options.onAfterHighlight(l,j)}this.removeAllRanges();return l},getCurrentRange:function(){var i=this.getCurrentSelection();var h;if(i.rangeCount>0){h=i.getRangeAt(0)}return h},removeAllRanges:function(){var h=this.getCurrentSelection();h.removeAllRanges()},getCurrentSelection:function(){var i=this.getCurrentWindow();var h;if(i.getSelection){h=i.getSelection()}else{if(f("iframe").length){f("iframe",top.document).each(function(){if(this.contentWindow===i){h=rangy.getIframeSelection(this);return false}})}else{h=rangy.getSelection()}}return h},getCurrentWindow:function(){var h=this.getCurrentDocument();if(h.defaultView){return h.defaultView}else{return h.parentWindow}},getCurrentDocument:function(){return this.context.ownerDocument?this.context.ownerDocument:this.context},highlightRange:function(o,q){if(o.collapsed){return}var s=["SCRIPT","STYLE","SELECT","BUTTON","OBJECT","APPLET"];var l=o.startContainer;var t=o.endContainer;var n=o.commonAncestorContainer;var r=true;if(o.endOffset==0){while(!t.previousSibling&&t.parentNode!=n){t=t.parentNode}t=t.previousSibling}else{if(t.nodeType==a.TEXT_NODE){if(o.endOffset<t.nodeValue.length){t.splitText(o.endOffset)}}else{if(o.endOffset>0){t=t.childNodes.item(o.endOffset-1)}}}if(l.nodeType==a.TEXT_NODE){if(o.startOffset==l.nodeValue.length){r=false}else{if(o.startOffset>0){l=l.splitText(o.startOffset);if(t==l.previousSibling){t=l}}}}else{if(o.startOffset<l.childNodes.length){l=l.childNodes.item(o.startOffset)}else{l=l.nextSibling}}var m=false;var k=l;var p=[];do{if(r&&k.nodeType==a.TEXT_NODE){if(/\S/.test(k.nodeValue)){var i=q.clone(true).get(0);var h=k.parentNode;if(f.contains(this.context,h)||h===this.context){var j=f(k).wrap(i).parent().get(0);p.push(j)}}r=false}if(k==t&&(!t.hasChildNodes()||!r)){m=true}if(f.inArray(k.tagName,s)!=-1){r=false}if(r&&k.hasChildNodes()){k=k.firstChild}else{if(k.nextSibling!=null){k=k.nextSibling;r=true}else{k=k.parentNode;r=false}}}while(!m);return p},normalizeHighlights:function(i){this.flattenNestedHighlights(i);this.mergeSiblingHighlights(i);var h=f.map(i,function(j){if(typeof j.parentElement!="undefined"){return j.parentElement!=null?j:null}else{return j.parentNode!=null?j:null}});return h},flattenNestedHighlights:function(i){var h=this;f.each(i,function(k){var o=f(this);var l=o.parent();var n=l.prev();var m=l.next();if(h.isHighlight(l)){if(l.css("background-color")!=o.css("background-color")){if(h.isHighlight(n)&&!o.get(0).previousSibling&&n.css("background-color")!=l.css("background-color")&&n.css("background-color")==o.css("background-color")){o.insertAfter(n)}if(h.isHighlight(m)&&!o.get(0).nextSibling&&m.css("background-color")!=l.css("background-color")&&m.css("background-color")==o.css("background-color")){o.insertBefore(m)}if(l.is(":empty")){l.remove()}}else{var j=b.createTextNode(l.text());l.empty();l.append(j);f(i[k]).remove()}}})},mergeSiblingHighlights:function(i){var h=this;function j(l,k){return k&&k.nodeType==a.ELEMENT_NODE&&f(l).css("background-color")==f(k).css("background-color")&&f(k).hasClass(h.options.highlightedClass)?true:false}f.each(i,function(){var k=this;var n=k.previousSibling;var m=k.nextSibling;if(j(k,n)){var l=f(n).text()+f(k).text();f(k).text(l);f(n).remove()}if(j(k,m)){var l=f(k).text()+f(m).text();f(k).text(l);f(m).remove()}})},setColor:function(h){this.options.color=h},getColor:function(){return this.options.color},removeHighlights:function(j){var h=(j!==g?j:this.context);var l=function(n){return f(n).contents().unwrap().get(0)};var k=function(p){var o=p.previousSibling;var n=p.nextSibling;if(o&&o.nodeType==a.TEXT_NODE){p.nodeValue=o.nodeValue+p.nodeValue;o.parentNode.removeChild(o)}if(n&&n.nodeType==a.TEXT_NODE){p.nodeValue=p.nodeValue+n.nodeValue;n.parentNode.removeChild(n)}};var i=this;var m=this.getAllHighlights(h,true);m.each(function(){if(i.options.onRemoveHighlight(this)==true){var n=l(this)}})},getAllHighlights:function(i,j){var h="."+this.options.highlightedClass;var k=f(i).find(h);if(j==true&&f(i).hasClass(this.options.highlightedClass)){k=k.add(i)}return k},isHighlight:function(h){return h.hasClass(this.options.highlightedClass)},serializeHighlights:function(l){var k=l||this.getAllHighlights(this.context);var i=this.context;var m=[];var h=this;var j=function(o,q){var p=[];do{var n=f.inArray(o,o.parentNode.childNodes);p.unshift(n);o=o.parentNode}while(o!==q);return p};k.each(function(p,o){var r=0;var q=o.firstChild.length;var n=j(o,i);var s=f(o).clone().empty().get(0).outerHTML;if(o.previousSibling&&o.previousSibling.nodeType===a.TEXT_NODE){r=o.previousSibling.length}m.push([f(o).text(),n.join(":"),r,q])});return JSON.stringify(m)},deserializeHighlights:function(i,o){try{var n=JSON.parse(i)}catch(m){throw"Can't parse serialized highlights: "+m}var l=[];var h=this;var j=function(w){var v=w[0];var y=w[1].split(":");var z=w[2];var t=w[3];var u=y.pop();var x=null;var r=h.context;while((x=y.shift())!==g){r=r.childNodes[x]}if(r.childNodes[u-1]&&r.childNodes[u-1].nodeType===a.TEXT_NODE){u-=1}var s=r.childNodes[u];var p=s.splitText(z);p.splitText(t);if(p.nextSibling&&p.nextSibling.nodeValue==""){p.parentNode.removeChild(p.nextSibling)}if(p.previousSibling&&p.previousSibling.nodeValue==""){p.parentNode.removeChild(p.previousSibling)}if(v!==p.nodeValue){throw"Different text"}var q=f(p).wrap(o).parent().get(0);l.push(q)};var k=true;f.each(n,function(q,p){try{j(p)}catch(r){console&&console.warn&&console.warn("Can't deserialize "+q+"-th descriptor. Cause: "+r);k=false;return true}});return k&&l}};f.fn.getHighlighter=function(){return this.data(d.name)};f.fn[d.name]=function(h){return this.each(function(){if(!f.data(this,d.name)){f.data(this,d.name,new c(this,h))}})};f.textHighlighter={createWrapper:function(h){return f("<span></span>").css("backgroundColor",h.color).addClass(h.highlightedClass)},defaults:{color:"#ffff7b",highlightedClass:"highlighted",contextClass:"highlighter-context",onRemoveHighlight:function(){return true},onBeforeHighlight:function(){return true},onAfterHighlight:function(){}}}})(jQuery,window,document);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:library', location = 'lib/WeakMap.js' */
if(typeof WeakMap==="undefined"){(function(){var b=Object.defineProperty;var a=Date.now()%1000000000;var c=function(){this.name="__st"+(Math.random()*1000000000>>>0)+(a+++"__")};c.prototype={set:function(d,f){var e=d[this.name];if(e&&e[0]===d){e[1]=f}else{b(d,this.name,{value:[d,f],writable:true})}},get:function(d){var e;return(e=d[this.name])&&e[0]===d?e[1]:undefined},"delete":function(e){var f=e[this.name];if(!f){return false}var d=f[0]===e;f[0]=f[1]=undefined;return d},has:function(d){var e=d[this.name];if(!e){return false}return e[0]===d}};window.WeakMap=c})()};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:library', location = 'lib/MutationObserver.js' */
(function(r){var w=new WeakMap();var t=window.msSetImmediate;if(!t){var j=[];var o=String(Math.random());window.addEventListener("message",function(z){if(z.data===o){var y=j;j=[];y.forEach(function(A){A()})}});t=function(y){j.push(y);window.postMessage(o,"*")}}var g=false;var i=[];function d(y){i.push(y);if(!g){g=true;t(k)}}function x(y){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(y)||y}function k(){g=false;var z=i;i=[];z.sort(function(B,A){return B.uid_-A.uid_});var y=false;z.forEach(function(B){var A=B.takeRecords();q(B);if(A.length){B.callback_(A,B);y=true}});if(y){k()}}function q(y){y.nodes_.forEach(function(z){var A=w.get(z);if(!A){return}A.forEach(function(B){if(B.observer===y){B.removeTransientObservers()}})})}function f(E,F){for(var C=E;C;C=C.parentNode){var D=w.get(C);if(D){for(var B=0;B<D.length;B++){var A=D[B];var z=A.options;if(C!==E&&!z.subtree){continue}var y=F(z);if(y){A.enqueue(y)}}}}}var s=0;function n(y){this.callback_=y;this.nodes_=[];this.records_=[];this.uid_=++s}n.prototype={observe:function(C,z){C=x(C);if(!z.childList&&!z.attributes&&!z.characterData||z.attributeOldValue&&!z.attributes||z.attributeFilter&&z.attributeFilter.length&&!z.attributes||z.characterDataOldValue&&!z.characterData){throw new SyntaxError()}var B=w.get(C);if(!B){w.set(C,B=[])}var y;for(var A=0;A<B.length;A++){if(B[A].observer===this){y=B[A];y.removeListeners();y.options=z;break}}if(!y){y=new u(this,C,z);B.push(y);this.nodes_.push(C)}y.addListeners()},disconnect:function(){this.nodes_.forEach(function(A){var B=w.get(A);for(var z=0;z<B.length;z++){var y=B[z];if(y.observer===this){y.removeListeners();B.splice(z,1);break}}},this);this.records_=[]},takeRecords:function(){var y=this.records_;this.records_=[];return y}};function h(y,z){this.type=y;this.target=z;this.addedNodes=[];this.removedNodes=[];this.previousSibling=null;this.nextSibling=null;this.attributeName=null;this.attributeNamespace=null;this.oldValue=null}function p(z){var y=new h(z.type,z.target);y.addedNodes=z.addedNodes.slice();y.removedNodes=z.removedNodes.slice();y.previousSibling=z.previousSibling;y.nextSibling=z.nextSibling;y.attributeName=z.attributeName;y.attributeNamespace=z.attributeNamespace;y.oldValue=z.oldValue;return y}var c,e;function a(y,z){return c=new h(y,z)}function b(y){if(e){return e}e=p(c);e.oldValue=y;return e}function m(){c=e=undefined}function v(y){return y===e||y===c}function l(z,y){if(z===y){return z}if(e&&v(z)){return e}return null}function u(y,A,z){this.observer=y;this.target=A;this.options=z;this.transientObservedNodes=[]}u.prototype={enqueue:function(y){var z=this.observer.records_;var A=z.length;if(z.length>0){var B=z[A-1];var C=l(B,y);if(C){z[A-1]=C;return}}else{d(this.observer)}z[A]=y},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(z){var y=this.options;if(y.attributes){z.addEventListener("DOMAttrModified",this,true)}if(y.characterData){z.addEventListener("DOMCharacterDataModified",this,true)}if(y.childList){z.addEventListener("DOMNodeInserted",this,true)}if(y.childList||y.subtree){z.addEventListener("DOMNodeRemoved",this,true)}},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(z){var y=this.options;if(y.attributes){z.removeEventListener("DOMAttrModified",this,true)}if(y.characterData){z.removeEventListener("DOMCharacterDataModified",this,true)}if(y.childList){z.removeEventListener("DOMNodeInserted",this,true)}if(y.childList||y.subtree){z.removeEventListener("DOMNodeRemoved",this,true)}},addTransientObserver:function(y){if(y===this.target){return}this.addListeners_(y);this.transientObservedNodes.push(y);var z=w.get(y);if(!z){w.set(y,z=[])}z.push(this)},removeTransientObservers:function(){var y=this.transientObservedNodes;this.transientObservedNodes=[];y.forEach(function(A){this.removeListeners_(A);var B=w.get(A);for(var z=0;z<B.length;z++){if(B[z]===this){B.splice(z,1);break}}},this)},handleEvent:function(G){G.stopImmediatePropagation();switch(G.type){case"DOMAttrModified":var A=G.attrName;var B=G.relatedNode.namespaceURI;var H=G.target;var E=new a("attributes",H);E.attributeName=A;E.attributeNamespace=B;var z=G.attrChange===MutationEvent.ADDITION?null:G.prevValue;f(H,function(J){if(!J.attributes){return}if(J.attributeFilter&&J.attributeFilter.length&&J.attributeFilter.indexOf(A)===-1&&J.attributeFilter.indexOf(B)===-1){return}if(J.attributeOldValue){return b(z)}return E});break;case"DOMCharacterDataModified":var H=G.target;var E=a("characterData",H);var z=G.prevValue;f(H,function(J){if(!J.characterData){return}if(J.characterDataOldValue){return b(z)}return E});break;case"DOMNodeRemoved":this.addTransientObserver(G.target);case"DOMNodeInserted":var H=G.relatedNode;var I=G.target;var F,C;if(G.type==="DOMNodeInserted"){F=[I];C=[]}else{F=[];C=[I]}var y=I.previousSibling;var D=I.nextSibling;var E=a("childList",H);E.addedNodes=F;E.removedNodes=C;E.previousSibling=y;E.nextSibling=D;f(H,function(J){if(!J.childList){return}return E})}m()}};r.JsMutationObserver=n;if(!r.MutationObserver){r.MutationObserver=n}})(this);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:util-resource', location = 'util/utils.js' */
define("confluence/ic/util/utils",["jquery","underscore","ajs","backbone","exports"],function(w,R,u,x,F){var m={INLINE_COMMENTS:u.DarkFeatures.isEnabled("confluence-inline-comments"),RESOLVED_INLINE_COMMENTS:u.DarkFeatures.isEnabled("confluence-inline-comments-resolved"),RICH_TEXT_EDITOR:u.DarkFeatures.isEnabled("confluence-inline-comments-rich-editor"),DANGLING_COMMENT:u.DarkFeatures.isEnabled("confluence-inline-comments-dangling-comment")},t=["dateautocomplete","confluencemacrobrowser","propertypanel","jiraconnector","dfe"],n=["autoresize","confluenceleavecomment"],r=["code"];var a,C,q;function O(){return R.clone(m)}function N(){return R.clone(t)}function j(){return R.clone(n)}function d(U,T){var W;if(!U||!T){return}var S=w(U.containingElement);if(!S.is(".inline-comment-marker.valid")){S=w("<div/>").append(U.html).find(".inline-comment-marker.valid")}if(S.length>0&&f(S)){var V=S.first().data("ref");W=T.findWhere({markerRef:V});return W}}function f(S){return S.filter(function(){return w(this).text().length>0}).length>0}function h(S){return u.contextPath()+"/pages/viewpage.action?pageId="+u.Meta.get("latest-page-id")+"&focusedCommentId="+S+"#comment-"+S}function s(Y,X,S){var V=X.match(/(focusedCommentId|replyToComment)=(\d+)/);if(V==null){return}var U=V[1]==="replyToComment";var W=parseInt(V[2],10);var T=Y.findWhere({id:W});if(T!=null){o(Y,T,S,U)}else{w.ajax({url:u.contextPath()+"/rest/inlinecomments/1.0/comments/replies/"+W+"/commentId"}).done(function(Z){T=Y.findWhere({id:Z});o(Y,T,S,U)})}}function o(V,U,S,T){if(U!=null){if(U.isResolved()){new S({collection:V,focusCommentId:U.get("id")}).render()}else{if(!U.isDangling()){x.trigger("ic:view",U,"permalink",{isReplyComment:T})}}}}function K(){if(u.Meta.get("current-user-avatar-url")){return u.contextPath()+u.Meta.get("current-user-avatar-url")}return u.Meta.get("static-resource-url-prefix")+"/images/icons/profilepics/anonymous.png"}function P(){return u.Meta.get("user-display-name")||u.Meta.get("current-user-fullname")}function b(U){if(typeof U.selectionStart==="number"){var S=U.value.length;U.selectionStart=S;U.selectionEnd=S}else{if(typeof U.createTextRange!=null){U.focus();var T=U.createTextRange();T.collapse(false);T.select()}}}function L(S){b(S);window.setTimeout(function(){b(S)},1)}function E(X,W){var U="webkitAnimationEnd oanimationend msAnimationEnd animationend";var T=X.$wikiContent;var S=w.Deferred();if(W){var Y=w(".inline-comment-marker.active");T.addClass("ic-fade-in-animation");T.one(U,function(){w(this).removeClass("ic-fade-in-animation")});X.$el.addClass("ic-slide-in");X.$el.one(U,function(){w(this).removeClass("ic-slide-in");Y.addClass("ic-highlight-pulse");Y.one(U,function(){Y.removeClass("ic-highlight-pulse")})});S.resolve()}else{T.bind(U,function(Z){if(Z.originalEvent.animationName=="ic-fade-out-animation"){X.$wikiContent.removeClass("ic-fade-out-animation");X.$wikiContent.css("opacity","0.5")}else{if(Z.originalEvent.animationName=="ic-fade-in-animation"){X.$wikiContent.css("opacity","1");X.$wikiContent.removeClass("ic-fade-in-animation");X.$wikiContent.unbind(U)}}});T.addClass("ic-fade-out-animation");X.$el.addClass("ic-slide-out");var V=function(){X.$el.removeClass("ic-slide-out");X._emptySidebar();y().css("padding-right","0");T.addClass("ic-fade-in-animation");T.css("position","static");S.resolve();X.$el.off(U,V)};X.$el.on(U,V)}return S.promise()}function k(S){var T=w(S).closest("a");if(!T.length){T=w(S).find("a")}return T}function A(S){S.each(function(){var T=k(this);T.length&&T.off("mousemove")})}function Q(){return document.body.style.animation!==undefined||document.body.style.webkitAnimation!==undefined}function c(T){var S=T.parents(".expand-content.expand-hidden");S.each(function(U){w(this).siblings(".expand-control").click()})}function v(T){var S=u.Rte&&u.Rte.getEditor();if(T===true){if(M()&&S&&S.isDirty()){return confirm("Your comment will be lost.")}}else{if(S&&S.isDirty()){return confirm("Your comment will be lost.")}}return true}function M(){return !!w(".ic-sidebar #wysiwygTextarea_ifr").length}function G(){return u.Meta.get("use-keyboard-shortcuts")&&Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.enabled}function p(S){S.$("button.ic-action-hide").tooltip({gravity:"se"});S.$("#ic-nav-next").tooltip({gravity:"s"});S.$("#ic-nav-previous").tooltip({gravity:"s"})}function B(W){if(J()){W.css("padding-bottom","20px");return}var U=W.height();var V=W.offset().top;var T=V+U;var X=this.getPageContainer().offset().top;var S=T-X;this.getPageContainer().css({"min-height":S+"px"})}function z(W){W=W.closest(".ic-display-comment-view");var V=this;var T=w(".confluence-embedded-image, .confluence-embedded-file img",W);var U=T.length;var S=0;if(U>0){T.off("load").one("load",function(){if(++S===U){V.recalculateContentHeight(W)}}).each(function(){if(this.complete){w(this).load()}})}}function J(){if(q===undefined){q=!!D().length}return q}function y(){if(a===undefined){a=w("#content")}return a}function D(){if(C===undefined){C=w("#splitter-content")}return C}function g(S,T){if(T&&!T.is(":visible")){return}if(S){if(this.isDocTheme()){this.getSplitterContent().scrollTop(T.offset().top-S)}else{window.scrollTo(0,T.offset().top-S)}}}function e(T){var S=w.Deferred();w.ajax({url:u.contextPath()+"/rest/api/content/"+T+"?expand=body.editor",type:"GET",dataType:"json",contentType:"application/json; charset=utf-8"}).then(function(U){var V=U.body.editor.value;S.resolve(V)}).fail(function(U,W,V){S.reject(U,W,V)});return S.promise()}function I(S){var T=S.closest(".conf-macro");return(T.data("hasbody")===false||S.find('.conf-macro[data-hasbody="false"]').length>0)||r.indexOf(T.data("macro-name"))!=-1}function i(S){return S.closest(".user-mention").length>0||S.find(".user-mention").length>0}function l(S){return S.closest("a[href^='/']:not('.user-mention')").length>0||S.find("a[href^='/']:not('.user-mention')").length>0}function H(){var S={isDefault:true,path:u.Meta.get("static-resource-url-prefix")+"/images/icons/profilepics/default.png"};if(u.Meta.get("current-user-avatar-url")!=="/images/icons/profilepics/default.png"){S={isDefault:false,path:u.contextPath()+u.Meta.get("current-user-avatar-url")}}var T=u.Meta.get("remote-user");return{userName:T==""?null:T,displayName:u.Meta.get("current-user-fullname"),profilePicture:S}}F.overlappedSelection=d;F.focusedCommentUrl=h;F.showFocusedComment=s;F.getAuthorAvatarUrl=K;F.moveCaretToEnd=L;F.animateSidebar=E;F.getDarkFeatures=O;F.getInlineLinks=k;F.removeInlineLinksDialog=A;F.isAnimationSupported=Q;F.showHighlightContent=c;F.getUnsupportedRtePlugins=N;F.getSupportedRtePlugins=j;F.confirmProcess=v;F.getAuthorDisplayName=P;F.isKeyboardShortcutsEnable=G;F.addSidebarHeadingTooltip=p;F.hasEditorInSidebar=M;F.recalculateContentHeight=B;F.resizeContentAfterLoadingImages=z;F.isDocTheme=J;F.getPageContainer=y;F.getSplitterContent=D;F.scrollToCommentAfterToggleSideBar=g;F.getEditorFormat=e;F.containUnsupportedMacro=I;F.containInternalLink=i;F.containUserMetion=l;F.getCurrentUserInfo=H});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:util-resource', location = 'util/text-highlighter.js' */
define("confluence/ic/util/text-highlighter",["jquery"],function(c){var a="ic-current-selection";function b(){c.textHighlighter.createWrapper=function(d){return c("<span></span>").addClass(d.highlightedClass)};this.$el=c("#content .wiki-content").first();if(this.$el.length>0){this.$el.textHighlighter({highlightedClass:a})}}b.prototype.highlight=function(e){if(this.$el.length===0){return}var d=c(this.$el.getHighlighter().doHighlight(e));return this.$el.getHighlighter().serializeHighlights(d)};b.prototype.removeHighlight=function(){if(this.$el.length===0){return}this.$el.getHighlighter().removeHighlights();return this};b.prototype.deserializeHighlights=function(d,e){if(this.$el.length===0){return}var f='<span class="inline-comment-marker" data-ref="'+e+'"></span>';return this.$el.getHighlighter().deserializeHighlights(d,f)};return b});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-core-resources', location = 'loader/profiles.js' */
AJS.Confluence=AJS.Confluence||{};AJS.Confluence.Editor=AJS.Confluence.Editor||{};
AJS.Confluence.Editor._Profiles=function(){return{createProfileForCommentEditor:function(){return{plugins:"searchreplace confluenceimagedialog autocompletemacro confluencemacrobrowser confluenceleavecomment confluencewatch autoresize".split(" ")}},createProfileForPageEditor:function(a){var b="searchreplace confluencedrafts confluenceimagedialog autocompletemacro confluencemacrobrowser flextofullsize referrer".split(" ");AJS.Meta.getBoolean("shared-drafts")&&b.push("unpublishedchanges");a&&a.versionComment&&
b.push("confluenceversioncomment");a&&a.notifyWatchers&&b.push("confluencenotifywatchers");return{plugins:b}},createProfileForTemplateEditor:function(){return{plugins:"searchreplace confluenceimagedialog autocompletemacro confluencemacrobrowser confluenceleavetemplate flextofullsize confluencetemplateeditor".split(" ")}}}}();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/quick-edit.js' */
define("confluence-quick-edit/quick-edit",["ajs","confluence","jquery","window","document"],function(b,e,c,n,o){function p(){var a=new c.Deferred;b.Confluence.EditorLoader.load(function(){setTimeout(function(){a.resolve()},0)},function(){a.reject()});return a}var i={enableShortcut:function(){c("#editPageLink").addClass("full-load")},disableShortcut:function(){c("#editPageLink").removeClass("full-load")}},h=[],l={loadingContentTimeout:4E3,register:function(a){h.push(a)},disableHandlers:function(){c.each(h,
function(a,b){return b.disable()})},enableHandlers:function(){c.each(h,function(a,b){return b.enable()})},SaveBarBinder:{bind:function(a,b){a&&(e.Editor.removeAllSaveHandlers(),e.Editor.addSaveHandler(a));b&&(e.Editor.removeAllCancelHandlers(),e.Editor.addCancelHandler(b))}},activateEditor:function(a){function e(){function f(b){var a=new c.Deferred;WRM.require(b).done(function(b){a.resolve(b)}).fail(function(b){a.reject(b)});return a}var h,j=new c.Deferred;if(b.Rte&&b.Rte.getEditor())return b.debug("there is already an editor open"),
j.reject("there is already an editor open");if(!a.$container||!a.$form)return b.logError("activateEditor could not be initialsed: bad arguments",a),j.reject("bad parameters");h=b.Confluence.BlockAndBuffer.block(c(o));a.preActivate&&a.preActivate();i.disableShortcut();var m=a.timeoutResources||b.Confluence.EditorLoader.loadingTimeout,g=l.loadingContentTimeout,k=b.Confluence.QuickEdit.Util.timeoutDeferred;c.when(k("resources",p(),m),k("fetch content",a.fetchContent||c.Deferred().resolve(),g),k("additional resources",
a.additionalResources?f(a.additionalResources):c.Deferred().resolve(),m)).done(function(e,f){var d={$container:a.$container,content:f,$form:a.$form,replayBufferedKeys:h};a.preInitialise&&a.preInitialise(d);c(".quick-comment-prompt",d.$container).hide();c(".quick-comment-body",d.$container).addClass("comment-body");var g=b.Confluence.EditorLoader.getPreloadContainer();if(d.content&&d.content.title){var k=d.content.title;g.find("#content-title").val(k)}d.$form.append(g.children());g.show();c("#editor-precursor").hide();
c("#rte-savebar").find(".toolbar-split-left").hide();var i=function(){d.editor=b.Rte.getEditor();d.$container.find(".quick-comment-loading-container").hide();d.$form.show();d.$form.addClass("fadeIn");var e=d.editor,f=d.content?d.content.editorContent:"",g=d.replayBufferedKeys;f&&(e.setContent(f),e.startContent=e.getContent({format:"raw",no_events:1}),e.undoManager.clear());g();e.undoManager.add();b.trigger("quickedit.success");b.trigger("quickedit.visible");b.trigger("add-bindings.keyboardshortcuts");
b.trigger("active.dynamic.rte");c("div.aui-message.closeable").each(function(){var a=c(this),d;if(!a.find(".icon-close").length){d=c('<span class="aui-icon icon-close" role="button" tabindex="0"></span>').click(function(){a.closeMessage()}).keypress(function(c){if(c.which===b.keyCode.ENTER||c.which===b.keyCode.SPACE){a.closeMessage();c.preventDefault()}});a.append(d)}});a.postInitialise&&a.postInitialise(d);l.SaveBarBinder.bind(a.saveHandler,a.cancelHandler);b.trigger("rte-quick-edit-ready");b.unbind("rte-ready",
i);j.resolve()};b.bind("rte-ready",i);b.bind("rte-destroyed",a.postDeactivate||function(){});b.Rte.BootstrapManager.initialise({plugins:a.plugins,toolbar:a.toolbar,excludePlugins:a.excludePlugins,isQuickEdit:!0})}).fail(function(c){j.reject(c);b.logError("Error loading page quick edit. Falling back to normal edit URL...");b.trigger("analytics",{name:"rte.quick-edit.activate-editor.failed"});a.fallbackUrl&&(b.log("This parameter is deprecated. To be removed in the next major version (5.8 or 6.0). Please use the promise returned to bind custom action if the editor fails to load instead."),
n.location=a.fallbackUrl)});return j.promise()}if(a.closeAnyExistingEditor&&b.Rte&&b.Rte.getEditor()){var f=new c.Deferred;this.deactivateEditor().done(function(){e().done(function(){f.resolve()}).fail(function(a){f.reject(a)})}).fail(function(){b.debug("Could not deactivate current editor.");f.reject("Could not deactivate current editor.")});return f}return e()},deactivateEditor:function(){tinymce.execCommand("mceRemoveControl",!0,"wysiwygTextarea");e.Editor.UI.toggleSavebarBusy(!1);var a=b.Confluence.EditorLoader.getPreloadContainer().empty();
c(".editor-container").remove();c("#editor-precursor").remove();c("#anonymous-warning").remove();c(".quick-comment-prompt").show();c(".bottom-comment-panels").show();c("#editor-notification-container").empty();c(".action-reply-comment").removeAttr("reply-disabled");i.enableShortcut();return b.Confluence.EditorLoader.getEditorPreloadMarkup().done(function(c){a.append(c);a.hide();(new b.Confluence.QuickEditCaptchaManager(a)).refreshCaptcha();b.trigger("rte-destroyed");b.unbind("rte-destroyed")})}};
return l});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/quick-edit","AJS.Confluence.QuickEdit");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/util.js' */
(function(){AJS.Confluence.QuickEdit.Util={generateUUID:function(){var a=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()},getBaseUrl:function(){var a=window.location.protocol.replace(/:$/,"")+"://"+window.location.host+"/"+window.location.pathname.replace(/^\//,""),b=window.location.search.replace(/^\?/,""),b=b.replace(/\&?focusedCommentId=\d+/,""),b=b.replace(/^\&/,"");return{url:a,search:b,addQueryParam:function(a,
b){this.search=this.search?this.search+"&"+a+"="+b:a+"="+b},toString:function(){return this.url+"?"+this.search}}},timeoutDeferred:function(a,b,c){setTimeout(function(){"pending"===b.state()&&(AJS.logError("Timeout: "+a),b.reject("timeout"))},c);return b}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/captcha-manager.js' */
(function(d){AJS.Confluence.QuickEditCaptchaManager=function(e){function a(a){return d(e||"body").find(a)}return{refreshCaptcha:function(){var b=a("img.captcha-image");if(0<b.length){var c=Math.random();b.attr("src",AJS.contextPath()+"/jcaptcha?id="+c);a('input[name="captchaId"]').val(c);a('input[name="captchaResponse"]').val("")}},getCaptchaData:function(){return{id:a('input[name="captchaId"]').val(),response:a('input[name="captchaResponse"]').val()}}}}})($);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/handlers/shortcut.js' */
(function(){var c=!1;AJS.bind("initialize.keyboardshortcuts add-bindings.keyboardshortcuts",function(){c=!0});AJS.bind("remove-bindings.keyboardshortcuts",function(){c=!1});AJS.Confluence.QuickEdit=AJS.Confluence.QuickEdit||{};AJS.Confluence.QuickEdit.KeyboardShortcuts={createShortcut:function(e,f){function a(){b=b||AJS.whenIType(e).moveToAndClick(f)}function d(){b&&b.unbind();b=null}var b;return{bind:function(){c&&a();AJS.bind("initialize.keyboardshortcuts",a);AJS.bind("add-bindings.keyboardshortcuts",
a);AJS.bind("remove-bindings.keyboardshortcuts",d)},unbind:function(){d();AJS.unbind("initialize.keyboardshortcuts",a);AJS.unbind("add-bindings.keyboardshortcuts",a);AJS.unbind("remove-bindings.keyboardshortcuts",d)}}}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/handlers/page.js' */
(function(b){function h(a){AJS.Confluence.QuickEdit.QuickEditPage.disable();AJS.populateParameters();var c=a.$form,e="page"===AJS.Meta.get("content-type")?"doeditpage":"doeditblogpost",e=AJS.contextPath()+"/pages/"+e+".action?pageId="+Confluence.getContentId();b(".ia-splitter-left").remove();try{b("#main").unwrap()}catch(d){}b("#rte").removeClass("editor-default").addClass("editor-fullheight");a.$container.children().remove();b(".editor-container").children().eq(0).unwrap();c.attr({"class":"editor aui",
action:e,name:"editpageform",id:"editpageform",style:""});a.$container.append(c);a.$container.removeClass("view").addClass("edit");b("body").addClass("contenteditor edit")}function i(a){b("#editor-precursor").show();b("#rte-savebar").find(".toolbar-split-left").show();if(window.history.pushState){var c=b("#editPageLink").attr("href");c!=window.location.pathname+window.location.search&&(history.pushState({quickEdit:!0},"",c),AJS.trigger("rte-quick-edit-push-state",c))}else window.location.hash="editor",
AJS.trigger("rte-quick-edit-push-hash");c=a.content;if(c.permissions)for(var e in c.permissions)b("#"+e).attr("value",c.permissions[e]);b("#originalVersion").val(a.content.pageVersion);e=a.content.atlToken;AJS.Meta.set("atl-token",e);b('input[name="atl_token"]').val(e);AJS.trigger("analyticsEvent",{name:"quick-edit-success"});b("#navigation").remove();var d=new Date,f=function(b,c){if(d&&!("keydown"===c.type&&-1<[91,92,93,224,33,34,37,38,39,40,16,17,18,20,112,113,114,115,116,117,118,119,120,121,122,
123].indexOf(c.keyCode))){var e=new Date-d;d=null;Confluence.Analytics.publish("confluence.editor.transition.firstkeydown",{delay:e});a.editor.onKeyDown.remove(f);a.editor.onChange.remove(f)}};a.editor.onKeyDown.add(f);a.editor.onChange.add(f)}function j(){var a=new b.Deferred,c=b.ajax({url:AJS.contextPath()+"/rest/tinymce/1/content/"+Confluence.getContentId()+".json",cache:!1});c.success(function(b){a.resolve(b)});c.error(function(){a.reject("error fetching content")});return a}var g,d={editShortcut:AJS.Confluence.QuickEdit.KeyboardShortcuts.createShortcut("e",
"#editPageLink"),activateEventHandler:function(a){if(!a.metaKey&&!a.shiftKey&&!a.ctrlKey&&!a.altKey&&!(2==a.which||3==a.which))a.preventDefault(),g&&"pending"===g.state()?AJS.debug("Editor is being activated. Ignoring handler..."):(g=d.activateEditor(),a=b("#editPageLink"),a.find(".aui-icon").css("visibility","hidden"),a.parent().spin({left:"10px"}))},enable:function(){if(b("body").is(".theme-default")){var a=b("#editPageLink");a.bind("click",d.activateEventHandler);a.removeClass("full-load");d.editShortcut.bind();
AJS.debug("QuickPageEdit enabled")}else AJS.debug("QuickPageEdit not enabled")},activateEditor:function(){var a=b("#content").find(".quick-comment-form");return AJS.Confluence.QuickEdit.activateEditor({fetchContent:j(),$container:b("#content"),$form:a.length?a:b('<form method="post"></form>'),preInitialise:h,postInitialise:i,saveHandler:function(){1<Confluence.Editor.getNumConcurrentEditors()&&AJS.Confluence.Analytics.publish("rte.notification.concurrent-editing.save",{numEditors:Confluence.Editor.getNumConcurrentEditors(),
pageId:AJS.params.pageId,draftType:AJS.params.draftType})},cancelHandler:function(){1<Confluence.Editor.getNumConcurrentEditors()&&AJS.Confluence.Analytics.publish("rte.notification.concurrent-editing.cancel",{numEditors:Confluence.Editor.getNumConcurrentEditors(),pageId:AJS.params.pageId,draftType:AJS.params.draftType})},plugins:AJS.Confluence.Editor._Profiles.createProfileForPageEditor({versionComment:!0,notifyWatchers:!0}).plugins}).fail(function(){window.location=b("#editPageLink").attr("href")})},
disable:function(){AJS.debug("QuickPageEdit disabled.");d.editShortcut.unbind();b("#editPageLink").unbind("click",d.activateEventHandler)}};AJS.Confluence.QuickEdit.QuickEditPage={disable:d.disable};b.browser.msie&&9>+b.browser.version||AJS.Confluence.QuickEdit.register(d)})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/init.js' */
(function(a){var b=function(){AJS.DarkFeatures.isEnabled("shipit25.quick.edit.defer")?AJS.debug("QuickComment: editor preload is disabled"):a(window).load(function(){AJS.debug("QuickComment: instigated background loading of the comment editor.");AJS.Confluence.EditorLoader.load()});AJS.Confluence.QuickEdit.enableHandlers();AJS.trigger("rte-quick-edit-enable-handlers")};AJS.DarkFeatures.isEnabled("disable-quick-edit")?AJS.log("disable-quick-edit is turned on; run AJS.Confluence.EditorLoader.load() manually."):
AJS.toInit(b)})($);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment.js' */
(function(c){function i(a,b){var d=a.match(RegExp("[?&]"+b+"=(\\d+)"));return d&&1<d.length?parseInt(d[1]):0}var k=require("aui/flag");"use strict";c(function(){AJS.AppLinksInitialisationBinder=function(a){AJS.bind("init.rte",a)}});AJS.Confluence.QuickEdit.QuickComment={timeout:8E3,showLoadingEditorErrorMessage:function(){AJS.trigger("rte-quick-comment-loading-failed");k({type:"error",title:"Error",persistent:!1,body:"Error loading the comment editor. Please refresh the page to try again."})},
preInitialise:function(){AJS.Confluence.QuickEdit.QuickEditPage.disable();AJS.Meta.set("content-type","comment");AJS.Meta.set("draft-type","");AJS.params.contentType="comment";AJS.params.draftType="";AJS.Meta.set("use-inline-tasks","false");c("#editor-precursor").children().eq(0).hide();c("#pagelayout-menu").parent().hide();c("#page-layout-2-group").hide();c("#rte-button-tasklist").remove();c("#rte-insert-tasklist").parent().remove()},postInitialise:function(a){AJS.Rte.editorFocus(a.editor)},delegatingSaveCommentHandler:function(a){return a.asyncRenderSafe?
AJS.Confluence.QuickEdit.QuickComment.ajaxSaveCommentHandler(a):AJS.Confluence.QuickEdit.QuickComment.reloadPageSaveCommentHandler(a)},reloadPageSaveCommentHandler:function(a){var b=AJS.Confluence.QuickEdit.Util.getBaseUrl();b.addQueryParam("focusedCommentId",a.id);b.addQueryParam("refresh",+new Date);window.location.href=b.toString()+"#comment-"+a.id},ajaxSaveCommentHandler:function(a){var b={isDefault:!0,path:AJS.Meta.get("static-resource-url-prefix")+"/images/icons/profilepics/default.png"};"/images/icons/profilepics/default.png"!==
AJS.Meta.get("current-user-avatar-url")&&(b={isDefault:!1,path:AJS.contextPath()+AJS.Meta.get("current-user-avatar-url")});var d=AJS.Meta.get("remote-user"),c={userName:""==d?null:d,displayName:AJS.Meta.get("current-user-fullname"),profilePicture:b};AJS.Confluence.QuickEdit.QuickComment.cancelComment().done(function(){Confluence.CommentDisplayManager.addOrUpdateComment(c,a,!0,!1);AJS.trigger("page.commentAddedOrUpdated",{commentId:a.id})})},cancelHandler:function(){if(Confluence.Editor.UI.isFormEnabled()&&
(Confluence.Editor.hasContentChanged()&&!Confluence.Editor.isEmpty())&&!confirm("Your comment will be lost."))return!1;AJS.Rte.Content.editorResetContentChanged();AJS.Confluence.QuickEdit.deactivateEditor()},createCommenterParam:function(a,b,c){return{userName:b||AJS.Meta.get("remote-user")||null,displayName:c||AJS.Meta.get("user-display-name"),profilePicture:{isDefault:a.hasClass("defaultLogo"),path:a.attr("src")}}},createSaveHandler:function(a,b){var d=Confluence.QuickEdit.Util.generateUUID();
return function(g){g.preventDefault();if(AJS.Rte.Content.isEmpty())AJS.Confluence.EditorNotification.notify("warning","Comment text is empty. Cannot create empty comments.");else if(Confluence.Editor.UI.toggleSavebarBusy(!0)){var e=g=0,f=AJS.Confluence.EditorLoader.getEditorForm();f.is("form")&&(e=f.attr("action"),g=i(e,"parentId"),e=i(e,"commentId"));var h=new AJS.Confluence.QuickEditCaptchaManager(f),f=function(a){b(a);h.refreshCaptcha()},j=c("#watchPage").is(":checked");0<e?Confluence.Editor.CommentManager.updateComment(Confluence.getContentId(),
e,AJS.Rte.Content.getHtml(),j,h.getCaptchaData(),a,f):Confluence.Editor.CommentManager.saveComment(Confluence.getContentId(),g,AJS.Rte.Content.getHtml(),j,d,h.getCaptchaData(),a,f)}else AJS.log("QuickComment: subsequent save operation attempted but ignored.")}},saveCommentErrorHandler:function(a){Confluence.Editor.UI.toggleSavebarBusy(!1);var b;b=a&&-1!=a.search(/captcha/i)?"The typed word did not match the text in the picture.":"Failed to save the comment. Please try again later.";AJS.logError("Error saving comment",
a);AJS.Confluence.EditorNotification.notify("error",b)},cancelComment:function(){AJS.Rte.Content.editorResetContentChanged();return AJS.Confluence.QuickEdit.deactivateEditor()},proceedWithActivation:function(){var a=new c.Deferred,b=AJS.Rte&&AJS.Rte.getEditor();if(b)if(b.isDirty()&&!Confluence.Editor.isEmpty())if(confirm("Your comment will be lost."))a=AJS.Confluence.QuickEdit.QuickComment.cancelComment();else return a.reject();else a=AJS.Confluence.QuickEdit.QuickComment.cancelComment();
else a.resolve();return a}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment/top-level.js' */
(function(a){function d(a){AJS.Confluence.QuickEdit.QuickComment.preInitialise(a)}function e(b){a("#rte-savebar").scrollWindowToElement();AJS.Confluence.QuickEdit.QuickComment.postInitialise(b)}function f(){AJS.Confluence.EditorLoader.resourcesLoaded()||(AJS.trigger("analytics",{name:"rte.quick-edit.top-comment.spinner"}),a(".quick-comment-prompt").hide(),a(".quick-comment-loading-container").fadeIn().spin("medium"))}function g(b){b.preventDefault();window.location=a("#add-comment-rte").attr("href")}
var h=AJS.DarkFeatures.isEnabled("editor.slow.comment.disable"),c={commentShortcut:AJS.Confluence.QuickEdit.KeyboardShortcuts.createShortcut("m",".quick-comment-prompt"),activateEventHandler:function(b){b.preventDefault();AJS.Confluence.QuickEdit.QuickComment.proceedWithActivation().done(function(){var b=AJS.Confluence.QuickEdit.QuickComment.createSaveHandler(AJS.Confluence.QuickEdit.QuickComment.delegatingSaveCommentHandler,AJS.Confluence.QuickEdit.QuickComment.saveCommentErrorHandler);return AJS.Confluence.QuickEdit.activateEditor({preActivate:f,
$container:a("form[name=inlinecommentform]").closest(".quick-comment-container"),$form:a("form[name=inlinecommentform]"),preInitialise:d,saveHandler:b,cancelHandler:AJS.Confluence.QuickEdit.QuickComment.cancelHandler,postInitialise:e,plugins:AJS.Confluence.Editor._Profiles.createProfileForCommentEditor().plugins,additionalResources:["wrc!comment-editor"],timeoutResources:AJS.Confluence.QuickEdit.QuickComment.timeout}).fail(function(){h?AJS.Confluence.QuickEdit.QuickComment.showLoadingEditorErrorMessage():
window.location=a("#add-comment-rte").attr("href")})})},enable:function(){a("#comments-section").delegate(".quick-comment-prompt","click",c.activateEventHandler);a("#add-comment-rte").removeClass("full-load");this.commentShortcut.bind()},disable:function(){a("#comments-section").undelegate(".quick-comment-prompt","click");this.commentShortcut.unbind()}};AJS.Confluence.QuickEdit.QuickComment.TopLevel={bindCommentAreaFallbackHandler:function(){a("#comments-section").delegate(".quick-comment-prompt",
"click",g)},cancelComment:function(){AJS.log("'AJS.Confluence.QuickEdit.QuickComment.TopLevel.cancelComment' is deprecated in 5.7, consider using 'AJS.Confluence.QuickEdit.QuickComment.cancelComment' instead.");return AJS.Confluence.QuickEdit.QuickComment.cancelComment()}};AJS.Confluence.QuickEdit.register(c)})($);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment/reply.js' */
(function(a){function g(a){AJS.Confluence.QuickEdit.QuickComment.preInitialise(a);a.$container.scrollWindowToElement()}function h(a){AJS.Confluence.QuickEdit.QuickComment.postInitialise(a)}function f(a){var d=a.attr("id").match(/comment-(\d+)/),e=0;d?e=parseInt(d[1]):(AJS.trigger("analytics",{name:"rte.quick-edit.get-reply-parent.failed"}),AJS.logError("replyHandler: activateEventHandler - could not extract a parent comment Id from the comment id "+a.attr("id")));return e}function i(){a(".comment.reply").closest(".comment-threads").remove()}
var j=AJS.DarkFeatures.isEnabled("editor.slow.comment.disable"),c={activateEventHandler:function(c){c.preventDefault();c.stopPropagation();var d=this;if(a(d).attr("reply-disabled"))return!1;AJS.Confluence.QuickEdit.QuickComment.proceedWithActivation().done(function(){var e=a(d).closest("div.comment"),b=a(".quick-comment-container img.userLogo"),b=AJS.Confluence.QuickEdit.QuickComment.createCommenterParam(b),b={contentId:Confluence.getContentId(),parentCommentId:f(e),commenter:b,context:{contextPath:AJS.Meta.get("context-path"),
staticResourceUrlPrefix:AJS.Meta.get("static-resource-url-prefix")}},b=a(Confluence.Templates.Comments.displayReplyEditorLoadingContainer(b)),c=a(".quick-comment-loading-container",b);c.hide();e.after(b);AJS.Confluence.EditorLoader.resourcesLoaded()?AJS.trigger("analytics",{name:"rte.quick-edit.reply-comment.no-spinner"}):(AJS.trigger("analytics",{name:"rte.quick-edit.reply-comment.spinner"}),e.after(b),c.fadeIn(),c.spin("medium"),c[0].scrollIntoView());b=a(d).closest(".comment-thread").find(".quick-comment-container");
AJS.Meta.set("form-name",a("form",b).attr("name"));AJS.Confluence.QuickEdit.activateEditor({$container:b,$form:a("form.quick-comment-form[name=threadedcommentform]"),preInitialise:g,postInitialise:h,saveHandler:AJS.Confluence.QuickEdit.QuickComment.createSaveHandler(AJS.Confluence.QuickEdit.QuickComment.delegatingSaveCommentHandler,AJS.Confluence.QuickEdit.QuickComment.saveCommentErrorHandler),cancelHandler:AJS.Confluence.QuickEdit.QuickComment.cancelHandler,plugins:AJS.Confluence.Editor._Profiles.createProfileForCommentEditor().plugins,
postDeactivate:i,additionalResources:["wrc!comment-editor"],timeoutResources:AJS.Confluence.QuickEdit.QuickComment.timeout}).fail(function(){j?AJS.Confluence.QuickEdit.QuickComment.showLoadingEditorErrorMessage():window.location=a("#reply-comment-"+f(e)).attr("href")});a(d).attr("reply-disabled",!0)})},enable:function(){a("#comments-section").delegate(".action-reply-comment","click",c.activateEventHandler)},disable:function(){a("#comments-section").undelegate(".action-reply-comment","click")}};AJS.Confluence.QuickEdit.QuickComment.Reply=
{cancelComment:function(){AJS.log("'AJS.Confluence.QuickEdit.QuickComment.Reply.cancelComment' is deprecated in 5.7, consider using 'AJS.Confluence.QuickEdit.QuickComment.cancelComment' instead.");return AJS.Confluence.QuickEdit.QuickComment.cancelComment()}};AJS.Confluence.QuickEdit.register(c)})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment/edit.js' */
(function(c){function h(a){AJS.Confluence.QuickEdit.QuickComment.preInitialise(a);a.$container.scrollWindowToElement()}function i(a){AJS.Confluence.QuickEdit.QuickComment.postInitialise(a)}function f(a){return(a=a.attr("id").match(/comment-(\d+)/))?parseInt(a[1]):0}function j(a){var d=new c.Deferred;c.ajax({url:AJS.contextPath()+"/rest/api/content/"+a+"?expand=body.editor",cache:!1}).done(function(a){!a||!a.body||!a.body.editor?d.reject("invalid response from loading comment rest endpoint"):d.resolve({editorContent:a.body.editor.value})}).fail(function(){d.reject("error fetching content")});
return d}function k(){var a=c(".comment.edit");a.prev(".comment").show();a.remove()}var l=AJS.DarkFeatures.isEnabled("editor.slow.comment.disable"),g={activateEventHandler:function(a){var d=this;a.preventDefault();a.stopPropagation();AJS.Confluence.QuickEdit.QuickComment.proceedWithActivation().done(function(){var a=c(d).closest("div.comment"),b;b=a.find(".author .confluence-userlink");var e=a.find(".comment-user-logo img.userLogo");b=AJS.Confluence.QuickEdit.QuickComment.createCommenterParam(e,b.attr("data-username"),
b.text());b={contentId:Confluence.getContentId(),commentId:f(a),commenter:b,context:{contextPath:AJS.Meta.get("context-path"),staticResourceUrlPrefix:AJS.Meta.get("static-resource-url-prefix")},mode:"edit"};b=c(Confluence.Templates.Comments.displayEditEditorContainer(b));e=c(".quick-comment-loading-container",b);a.hide();a.after(b);e.fadeIn().spin("medium");e[0].scrollIntoView();b=a.next(".quick-comment-container");AJS.Meta.set("form-name",c("form",b).attr("name"));AJS.Confluence.QuickEdit.activateEditor({$container:b,
$form:c("form.quick-comment-form[name=editcommentform]"),fetchContent:j(f(a)),preInitialise:h,postInitialise:i,saveHandler:AJS.Confluence.QuickEdit.QuickComment.createSaveHandler(AJS.Confluence.QuickEdit.QuickComment.delegatingSaveCommentHandler,AJS.Confluence.QuickEdit.QuickComment.saveCommentErrorHandler),cancelHandler:AJS.Confluence.QuickEdit.QuickComment.cancelHandler,plugins:AJS.Confluence.Editor._Profiles.createProfileForCommentEditor().plugins,postDeactivate:k,additionalResources:["wrc!comment-editor"],
timeoutResources:AJS.Confluence.QuickEdit.QuickComment.timeout}).fail(function(){l?AJS.Confluence.QuickEdit.QuickComment.showLoadingEditorErrorMessage():window.location=c("#edit-comment-"+f(a)).attr("href")})})},enable:function(){c("#comments-section").delegate(".comment-action-edit","click",g.activateEventHandler)},disable:function(){c("#comments-section").undelegate(".comment-action-edit","click")}};AJS.Confluence.QuickEdit.QuickComment.Edit={cancelComment:function(){AJS.log("'AJS.Confluence.QuickEdit.QuickComment.Edit.cancelComment' is deprecated in 5.7, consider using 'AJS.Confluence.QuickEdit.QuickComment.cancelComment' instead.");
return AJS.Confluence.QuickEdit.QuickComment.cancelComment()}};AJS.Confluence.QuickEdit.register(g)})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/editor-comment-manager.js' */
AJS.bind("init.rte",function(){var k=AJS.$,j=function(a,d,e,h,b,f,g){AJS.trigger("analytics",{name:"confluence.page.comment.create",data:{pageID:AJS.Meta.get("page-id")}});a={type:"POST",url:a,contentType:"application/x-www-form-urlencoded; charset=UTF-8",data:{html:d,watch:e,uuid:h},dataType:"json",cache:!1,headers:{"X-Atlassian-Token":"nocheck"},success:function(a){f(a)},error:function(a,c,b){c=c+": "+b;a.responseText&&(c=c+" - "+a.responseText);g(c)},timeout:12E4};b&&b.id&&(a.headers["X-Atlassian-Captcha-Id"]=
b.id,a.headers["X-Atlassian-Captcha-Response"]=b.response);k.ajax(a)};Confluence.Editor.CommentManager={addComment:function(a,d,e,h,b,f,g,i,c){Confluence.Editor.CommentManager.saveComment(a,d,e,function(a){Confluence.CommentDisplayManager.addComment(g,a,f);i(a)},c)},saveComment:function(a,d,e,h,b,f,g,i){var c=null,c=d?AJS.contextPath()+"/rest/tinymce/1/content/"+a+"/comments/"+d+"/comment?actions=true":AJS.contextPath()+"/rest/tinymce/1/content/"+a+"/comment?actions=true";j(c,e,h,b,f,g,i)},updateComment:function(a,
d,e,h,b,f,g){a=AJS.contextPath()+"/rest/tinymce/1/content/"+a+"/comments/"+d+"?actions=true";j(a,e,h,null,b,f,g)}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:editor', location = 'editor/editor.js' */
define("confluence/ic/editor/editor",["jquery","ajs","confluence/ic/util/utils","exports"],function(e,h,f,c){function b(){if(!h.Confluence.EditorLoader.resourcesLoaded()){this.$form.find(".loading-container").spin("small")}}function i(){h.Meta.set("content-type","comment");h.Meta.set("use-inline-tasks","false");h.Meta.set("min-editor-height",80)}function l(m){m.$form.find(".loading-container").hide();m.$form.find("#rte-button-publish").text("Save").removeAttr("title");m.$form.find("#toolbar-hints-draft-status").hide();if(this.hideCancelButton){m.$form.find("#rte-button-cancel").hide()}m.editor.onPostProcess.add(j("onPostProcess",m.editor));h.Confluence.QuickEdit.QuickEditPage.disable()}function k(m){return h.Confluence.QuickEdit.activateEditor({preActivate:b,preInitialise:i,postInitialise:e.proxy(l,m),toolbar:false,$container:m.container,$form:m.form,saveHandler:m.saveHandler,cancelHandler:m.cancelHandler,fetchContent:m.fetchContent(),closeAnyExistingEditor:true,postDeactivate:m.postDeactivate,plugins:f.getSupportedRtePlugins(),excludePlugins:f.getUnsupportedRtePlugins()})}function d(){if(h.Rte&&h.Rte.getEditor()){return h.Confluence.QuickEdit.deactivateEditor()}else{return e.Deferred().resolve()}}function a(){return h.Rte.Content.getHtml()}function g(m){if(m){e(".ic-sidebar #rte-spinner").spin()}else{e(".ic-sidebar #rte-spinner").spinStop()}e("#rte-button-publish").prop("disabled",m)}function j(o,n){var m=function(){tinymce.DOM.setStyle(tinymce.DOM.get(n.id+"_ifr"),"height","80px");n.execCommand("mceAutoResize",{forceExec:true});n[o].remove(m)};return m}c.init=k;c.remove=d;c.getContent=a;c.setEditorBusy=g});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:create-comment-view', location = 'view/create-comment/create-comment.soy' */
// This file was automatically generated from create-comment.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.IC == 'undefined') { Confluence.Templates.IC = {}; }


Confluence.Templates.IC.createComment = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="ic-comment-container">');
  if (opt_data.type == 'topLevel' || opt_data.type == 'pageComment') {
    Confluence.Templates.IC.sidebarHeading({showMenu: false, createComment: true, darkFeatures: opt_data.darkFeatures}, output);
  }
  Confluence.Templates.IC.commentForm(opt_data, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.IC.commentForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="ic-container ic-create-comment">');
  Confluence.Templates.IC.commentHeader(opt_data, output);
  output.append('<div class="ic-body"><form class="aui" action="">');
  if (! opt_data.darkFeatures.RICH_TEXT_EDITOR) {
    var placeholder__soy27 = new soy.StringBuilder((opt_data.type == 'reply') ? soy.$$escapeHtml("Reply") : soy.$$escapeHtml("write a comment\u2026"));
    placeholder__soy27 = placeholder__soy27.toString();
    output.append('<textarea class="textarea ic-textarea" name="body" placeholder="', soy.$$escapeHtml(placeholder__soy27), '">', soy.$$escapeHtml(opt_data.text), '</textarea><div class="ic-actions"><ul><li>');
    aui.buttons.button({tagName: 'button', text: "Save", type: 'link', extraClasses: 'ic-action-save', isDisabled: true}, output);
    output.append('</li>');
    if (opt_data.type != 'topLevel') {
      output.append('<li>');
      aui.buttons.button({text: "Cancel", type: 'link', extraClasses: 'ic-action-discard'}, output);
      output.append('</li>');
    }
    output.append('</ul></div>');
  } else {
    output.append('<div class="loading-container" />');
  }
  output.append('</form></div></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:create-comment-view', location = 'view/create-comment/create-comment.js' */
define("confluence/ic/view/create-comment",["underscore","jquery","backbone","ajs","confluence/ic/model/comment","confluence/ic/model/reply","confluence/ic/util/utils","confluence/ic/editor/editor"],function(h,c,g,f,b,a,e,d){var i=g.View.extend({tagName:"div",className:"ic-create-comment-view",events:{"click .ic-action-save":"saveComment","click .ic-action-discard":"discardComment","keyup .ic-textarea":"onInput","focus .ic-textarea":"onFocus","click #show-page-comment":"showPageComment"},template:Confluence.Templates.IC.createComment,initialize:function(j){this.selection=j.selection;this.type=j.type;this.onFinished=j.onFinished||function(){};this.commentText=j.commentText||"";this.stopFocus=j.stopFocus;this.serializedHighlights=j.serializedHighlights;if(j.type==="edit"||j.type==="reply"){this.template=Confluence.Templates.IC.commentForm;g.trigger("ic:discard-edit");this.listenTo(g,"ic:discard-edit",this.discardComment)}},render:function(){var k=this._getAuthorObject();var j={type:this.type,text:this.commentText,showMenu:false};var l=h.extend({},k,j,{darkFeatures:e.getDarkFeatures()});this.$el.html(this.template(l));if(e.getDarkFeatures().RICH_TEXT_EDITOR){this.renderEditor()}else{if(!this.stopFocus){setTimeout(h.bind(this.focusEditor,this),1)}}e.addSidebarHeadingTooltip(this);return this},onInput:function(k){var j=this.$(k.target).val().trim()!=="";this._saveDisable(!j)},onFocus:function(){if(this.type==="edit"){var j=this.$(".textarea");e.moveCaretToEnd(j[0]);this._saveDisable(j.text()==="")}},saveComment:function(j){j.preventDefault();if(!this._isValid()){return}this._disableForm();if(this.type==="reply"){this._addReply()}else{if(this.type==="edit"){this._saveEdit()}else{this._addComment()}}},_getAuthorObject:function(){var j;var k;var l;if(this.type==="edit"){j=this.model.get("authorUserName");k=this.model.get("authorAvatarUrl");l=this.model.get("authorDisplayName")}else{j=f.Meta.get("remote-user");k=e.getAuthorAvatarUrl();l=e.getAuthorDisplayName()}return{authorUserName:j,authorAvatarUrl:k,authorDisplayName:l}},_saveEdit:function(){var k=this._getContent();var j={wait:true,beforeSend:h.bind(this.beforeSendAjax,this),success:h.bind(this._onSaveSuccess,this),error:h.bind(this._showEditError,this)};this.model.save({body:k},j)},_showEditError:function(k,j){if(this.showCaptchaError(j)){return}var l;if(j.status===401){l="You don\'t have permission to edit this comment."}else{l="We can\'t save your edit. The comment might have been deleted."}this._triggerError(l)},_triggerError:function(k,j){g.trigger("ic:error",k,j);this._disableForm(false)},_addReply:function(){var j=new a({body:this._getContent(),commentId:this.model.get("id"),hasDeletePermission:!!f.Meta.get("remote-user")||this.model.get("hasDeletePermission")});j.save(null,{beforeSend:h.bind(this.beforeSendAjax,this),success:h.bind(this._onSaveSuccess,this),error:h.bind(function(l,k){if(!this.showCaptchaError(k)){this._triggerError("Could not save the reply")}},this)})},_addComment:function(){var k=new b({originalSelection:this.selection.searchText.selectedText.replace(/\n/g,""),body:this._getContent(),matchIndex:this.selection.searchText.index,numMatches:this.selection.searchText.numMatches,serializedHighlights:this.serializedHighlights});var j={callback:this.bindPageReloadLink};k.save(null,{beforeSend:h.bind(this.beforeSendAjax,this),success:h.bind(this._onSaveSuccess,this),error:h.bind(function(m,l){if(this.showCaptchaError(l)){return}if(l.status===409){this._triggerError(f.format("Page content is out of date, please {0}refresh{1} and try again.",'<a href="#" class="ic-reload-page">',"</a>"),j)}else{if(l.status===412){f.trigger("analytics",{name:"confluence.comment.inline.cannot.create"});this._triggerError("We can\'t add your inline comment; the section you highlighted may contain a macro or user mention. Try highlighting plain text.")}else{this._triggerError("Could not save the comment")}}},this)})},_isValid:function(){if(!c.trim(this._getContent()).length){g.trigger("ic:error","You cannot save an empty comment.");return false}return true},_onSaveSuccess:function(j){switch(this.type){case"topLevel":j.set("hasDeletePermission",true);g.trigger("ic:persist",j);g.trigger("ic:view",j,undefined,{ignoreConfirmDialog:true});break;case"reply":this.model.replies.push(j);g.trigger("ic:reply:persist",j);this.onFinished();break;case"edit":g.trigger("ic:edit");this.onFinished();break}},_setEditorIsNotDirty:function(){if(f.Rte.getEditor()){f.Rte.getEditor().isNotDirty=1}},_disableForm:function(j){if(j===undefined){j=true}this._saveDisable(j);if(!e.getDarkFeatures().RICH_TEXT_EDITOR){this.$(".ic-action-discard,.ic-textarea").prop("disabled",j).attr("aria-disabled",j)}},_saveDisable:function(j){if(e.getDarkFeatures().RICH_TEXT_EDITOR){d.setEditorBusy(j);c("#rte-button-cancel")[0].disabled=j}else{this.$(".ic-action-save").prop("disabled",j).attr("aria-disabled",j)}},renderEditor:function(){var l=this.$(".ic-body");var k=this.commentText;var j=f.Confluence.QuickEdit.QuickComment;return d.init({container:l,form:l.find("form.aui"),saveHandler:this.type==="pageComment"?j.createSaveHandler(h.bind(this._successCreatePageComment,this),j.saveCommentErrorHandler):h.bind(this.saveComment,this),cancelHandler:h.bind(this.discardComment,this),fetchContent:function(){var m=new c.Deferred();m.resolve({editorContent:k});return m},postDeactivate:h.bind(function(){g.trigger("ic:clearError");this.onFinished()},this),hideCancelButton:this.type==="topLevel"}).done(h.bind(this.renderEditorCompleted,this)).fail(h.bind(this.renderEditorFail,this))},showPageComment:function(l){var j=c(l.target).data("comment-id");var k=c("#comment-"+j);k.addClass("focused");k.scrollToElement()},_successCreatePageComment:function(j){Confluence.CommentDisplayManager.addComment(e.getCurrentUserInfo(),j,false,false,true);f.trigger("page.commentAddedOrUpdated",{commentId:j.id});this._setEditorIsNotDirty();if(e.getDarkFeatures().RICH_TEXT_EDITOR){this.keepSidebar=true;d.remove()}this.$el.html(Confluence.Templates.IC.pageComment({commentId:j.id}));e.addSidebarHeadingTooltip(this)},renderEditorCompleted:function(){g.trigger("ic:clearError");if(this.type==="topLevel"||this.type==="pageComment"){this.$("#rte-button-cancel").hide();if(this.type==="pageComment"){g.trigger("ic:error","We can\'t add an inline comment to this content. We\'ll add it as a page comment instead.");this.focusEditor()}}this.captchaManager=new f.Confluence.QuickEditCaptchaManager(f.Confluence.EditorLoader.getEditorForm())},renderEditorFail:function(){var j={closeable:true,callback:this.bindPageReloadLink};switch(this.type){case"pageComment":this._setEditorIsNotDirty();break;case"topLevel":this.$(".loading-container").hide();this.$(".ic-create-comment").hide();j.closeable=false;break;case"edit":case"reply":this.onFinished();break}g.trigger("ic:error",f.format("The editor didn\'\'t load properly. Please {0}reload the page{1} to try again.",'<a href="#" class="ic-reload-page">',"</a>"),j);g.trigger("ic:editor:load:fail")},bindPageReloadLink:function(){c(".ic-error").off("click",".ic-reload-page").on("click",".ic-reload-page",function(){window.location.reload();return false})},discardComment:function(j){j&&j.preventDefault();g.trigger("ic:clearError");this.onFinished()},_getContent:function(){if(e.getDarkFeatures().RICH_TEXT_EDITOR){return d.getContent()}else{return this.$("textarea").val()}},focusEditor:function(){if(e.getDarkFeatures().RICH_TEXT_EDITOR){if(this.type==="pageComment"){var j=c(f.Rte.getEditor()&&f.Rte.getEditor().getBody());var k=j.find("div")[0];f.Rte.getEditor().selection.select(k,1);f.Rte.getEditor().selection.collapse(1);k.focus()}else{f.Rte.getEditor()&&f.Rte.getEditor().focus()}}else{this.$(".ic-textarea:visible").focus()}},destroy:function(){if(e.getDarkFeatures().RICH_TEXT_EDITOR){d.remove()}this.remove()},beforeSendAjax:function(k){var j=this.captchaManager.getCaptchaData();if(j&&j.id){k.setRequestHeader("X-Atlassian-Captcha-Id",j.id);k.setRequestHeader("X-Atlassian-Captcha-Response",j.response)}},showCaptchaError:function(j){if(j.status===404&&j.responseText&&j.responseText.search(/captcha/i)!=-1){this.captchaManager.refreshCaptcha();this._triggerError("The typed word did not match the text in the picture.");return true}return false}});return i});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:display-reply-view', location = 'view/display-reply/display-reply.soy' */
// This file was automatically generated from display-reply.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.IC == 'undefined') { Confluence.Templates.IC = {}; }


Confluence.Templates.IC.renderReply = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.IC.commentHeader(opt_data, output);
  output.append('<div class="ic-body wiki-content"><div class="ic-content ic-reply-content">', opt_data.body, '</div></div>');
  if (opt_data.darkFeatures.INLINE_COMMENTS && ! opt_data.resolved) {
    Confluence.Templates.IC.renderReplyActions(opt_data, output);
  } else {
    output.append('<div>');
    Confluence.Templates.IC.timeLink({time: opt_data.lastModificationDate, commentUrl: opt_data.commentDateUrl}, output);
    output.append('</div>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.IC.renderReplyActions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="ic-actions"><ul>');
  if (opt_data.hasDeletePermission) {
    output.append('<li>');
    aui.buttons.button({text: "Delete", type: 'link', extraClasses: 'ic-action-delete-reply'}, output);
    output.append('</li>');
  }
  if (opt_data.hasEditPermission) {
    output.append('<li>');
    aui.buttons.button({text: "Edit", type: 'link', extraClasses: 'ic-action-edit-reply'}, output);
    output.append('</li>');
  }
  output.append('<li class="ic-action-like-reply"></li><li class="ic-date">');
  Confluence.Templates.IC.timeLink({time: opt_data.lastModificationDate, commentUrl: opt_data.commentDateUrl}, output);
  output.append('</li></ul></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.IC.showmoreReply = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="ic-showmore-container"><div class="ic-decor-line"/><div class="ic-decor-line"/><div class="ic-collapse-decor-center"><span>', soy.$$escapeHtml(AJS.format("{0} more replies",opt_data.totalReplies)), '</span></div></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:display-reply-view', location = 'view/display-reply/display-reply.js' */
define("confluence/ic/view/display-reply",["jquery","ajs","underscore","backbone","confluence/ic/util/utils","confluence/ic/view/create-comment","confluence/ic/view/likes"],function(g,b,c,h,f,a,e){var d=h.View.extend({tagName:"div",className:"ic-display-reply",template:Confluence.Templates.IC.renderReply,events:{"click .ic-action-edit-reply":"editReply","click .ic-action-delete-reply":"confirmDelete"},initialize:function(){c.bindAll(this,"onEditCallback");this.$el.attr("data-comment-id",this.model.get("id"))},render:function(){var j=c.extend(this.model.toJSON(),{resolved:this.options.resolved,darkFeatures:f.getDarkFeatures()});var i=this.template(j);this.$el.html(i);if(this.likesView){this.likesView.remove()}this.likesView=new e({contentId:this.model.id}).render();if(this.likesView.$el.is(":empty")){this.$(".ic-action-like-reply").remove()}else{this.$(".ic-action-like-reply").html(this.likesView.el)}return this},editReply:function(j){var i=this;if(f.confirmProcess()){var k=f.getEditorFormat(this.model.get("id"));k.done(function(l){i.editView=new a({model:i.model,type:"edit",selection:{},onFinished:i.onEditCallback,commentText:l});i.$el.html(i.editView.$el);i.editView.render()}).fail(function(){h.trigger("ic:error","We can\'t edit this reply. The reply might have been deleted.")})}else{j&&j.currentTarget.blur()}},onEditCallback:function(){this.editView&&this.editView.destroy();this.editView=null;this.render()},deleteFail:function(k,i,j){if(i.status===401){h.trigger("ic:error","You don\'t have permission to delete this comment.")}else{h.trigger("ic:error","Could not complete your request.")}},confirmDelete:function(j){var i=window.confirm("Are you sure you want to delete this reply?");if(i===true){this.deleteReply(j)}},deleteReply:function(i){g(i.target).attr("aria-disabled",true).prop("disabled",true);this.model.destroy({wait:true,error:this.deleteFail,success:function(){h.trigger("ic:reply:delete")}})},destroy:function(){this.likesView.remove();this.editView&&this.editView.destroy();this.remove()}});return d});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:reply-list-view', location = 'view/reply-list/reply-list.js' */
define("confluence/ic/view/reply-list",["jquery","ajs","underscore","backbone","confluence/ic/view/display-reply","confluence/ic/util/utils"],function(f,a,b,g,c,e){var d=g.View.extend({tagName:"div",className:"ic-replies",events:{"click #ic-showmore-container":"forceShowAllReplies"},initialize:function(h){if(!h.commentModel){throw new Error("Inline Comment Model should be passed as a parameter when init ReplyListView","ReplyListView")}this.replyViews=[];this.collection=h.commentModel.replies;this.source=h.source;this.listenTo(this.collection,"add remove",this.render);if(this.collection.isFetched!==true){this.listenToOnce(this.collection,"sync",this.fetchComplete);this.collection.fetch({reset:true})}this.expandReplies=false;this.COMMENT_NUMBER_TO_COLLAPSE=4},fetchComplete:function(){this.collection.isFetched=true;this.render();e.resizeContentAfterLoadingImages(this.$el)},render:function(h){if(this.collection.isFetched!==true){return this}if(h&&this.collection.last()===h){this.appendReply(h);return}this.cleanUpReplyViews();this.$el.empty();if(this.collection.length>this.COMMENT_NUMBER_TO_COLLAPSE&&this.expandReplies===false&&this.source!=="permalink"&&this.options.commentModel&&!this.options.commentModel.isResolved()){this.renderCollapsibleReplies()}else{this.renderFullReplies()}this.trigger("ic:reply-rendered",this.options.commentModel);this._hightlightReply();return this},renderFullReplies:function(){this.collection.each(function(h){this.appendReply(h)},this)},forceShowAllReplies:function(){this.expandReplies=true;this.render()},renderCollapsibleReplies:function(){this.renderExpendButton();var h=this.collection.last();this.appendReply(h)},appendReply:function(i){var h=this.createReplyView(i);this.replyViews.push(h);this.$el.append(h.render().el)},renderExpendButton:function(){this.$el.append(Confluence.Templates.IC.showmoreReply({totalReplies:this.collection.length-1}))},createReplyView:function(h){return new c({model:h,resolved:this.options.commentModel.isResolved()})},_hightlightReply:function(){if(this.source!=="permalink"){return}var j=window.location.search;var i=j.match(/(focusedCommentId|replyToComment)=(\d+)/);if(i==null){return}var h=parseInt(i[2],10);if(h&&h!==0){this.$("[data-comment-id="+h+"]").addClass("ic-comment-reply-highlight")}},cleanUpReplyViews:function(){var h;for(h=0;h<this.replyViews.length;h++){this.replyViews[h].destroy();this.replyViews[h]=null}this.replyViews=[]},destroy:function(){this.cleanUpReplyViews();this.remove()}});return d});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:navigation-view', location = 'view/navigation/navigation.soy' */
// This file was automatically generated from navigation.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.IC == 'undefined') { Confluence.Templates.IC = {}; }


Confluence.Templates.IC.navigation = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.buttons.button({type: 'text', id: 'ic-nav-next', extraClasses: 'aui-button-text', iconType: 'aui', iconClass: 'aui-icon-small aui-iconfont-arrow-down', text: '', isDisabled: opt_data.disabled, extraAttributes: {'tabIndex': opt_data.disabled ? '' : 0, 'title': "Next comment (N)"}}, output);
  aui.buttons.button({type: 'text', id: 'ic-nav-previous', extraClasses: 'aui-button-text', iconType: 'aui', iconClass: 'aui-icon-small aui-iconfont-arrow-up', text: '', isDisabled: opt_data.disabled, extraAttributes: {'tabIndex': opt_data.disabled ? '' : 0, 'title': "Previous comment (P)"}}, output);
  output.append((opt_data.showIndex) ? '<span class="ic-nav-x-out-of-y">' + soy.$$escapeHtml(AJS.format("{0} of {1}",opt_data.index,opt_data.size)) + '</span>' : '');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:navigation-view', location = 'view/navigation/navigation.js' */
define("confluence/ic/view/navigation",["backbone"],function(b){var a=b.View.extend({tagName:"div",events:{"click #ic-nav-previous":"showPrevious","click #ic-nav-next":"showNext"},template:Confluence.Templates.IC.navigation,initialize:function(){this.collection=this.model.collection;this.listenTo(this.collection,"change:resolveProperties",this.onResolveToggle);this.disabled=this.collection.getCommentsOnPageCount()<=1;this.listenTo(b,"ic:show-previous",this.showPrevious);this.listenTo(b,"ic:show-next",this.showNext)},render:function(){this.$el.html(this.template({disabled:this.disabled,showIndex:!(this.model.isResolved()||this.model.get("deleted")),index:this.collection.getActiveIndexWithinPageComments()+1,size:this.collection.getCommentsOnPageCount()}));return this},onResolveToggle:function(){this.disabled=this.collection.getCommentsOnPageCount()<=1;this.render()},showPrevious:function(){if(this.disabled){return}var c=this.collection.getPrevCommentOnPage();if(c!=null){b.trigger("ic:view",c,"nav")}},showNext:function(){if(this.disabled){return}var c=this.collection.getNextCommentOnPage();if(c!=null){b.trigger("ic:view",c,"nav")}}});return a});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:likes-view', location = 'view/likes/likes.soy' */
// This file was automatically generated from likes.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.IC == 'undefined') { Confluence.Templates.IC = {}; }


Confluence.Templates.IC.likes = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.showLikeButton) {
    aui.buttons.button({text: (opt_data.isLikedByUser) ? soy.$$escapeHtml("Unlike") : soy.$$escapeHtml("Like"), type: 'link', extraClasses: 'ic-like-button'}, output);
  }
  output.append((opt_data.likesCount > 0) ? '<span class="ic-like-summary"><span class="ic-small-like-icon"></span><a class="ic-likes-count" data-content-id="' + soy.$$escapeHtml(opt_data.contentId) + '"><span class="ic-like-summary">' + soy.$$escapeHtml(opt_data.likesCount) + '</span></a></span>' : '');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:likes-view', location = 'view/likes/likes.js' */
define("confluence/ic/view/likes",["backbone","ajs","confluence/ic/model/likes","confluence/ic/likes/likes-manager"],function(e,b,d,a){var c=e.View.extend({className:"ic-likes",events:{"click .ic-like-button":"toggleLike","click .ic-likes-count":function(f){Confluence.Likes.showLikeUsers&&Confluence.Likes.showLikeUsers.apply(f.currentTarget,[f])}},initialize:function(f){this.collection=new d(null,{contentId:f.contentId});this.listenTo(this.collection,"add remove reset",this.render);this.currentUserName=b.Meta.get("remote-user")||"";if(f.showLikeButton===undefined){this.showLikeButton=true}else{this.showLikeButton=f.showLikeButton}},render:function(){this.$el.empty();if(a.isLikable()){var h=this.currentUserName==="";var g=this.collection.length;var i=this.collection.isLikedByUser(this.currentUserName);var f=Confluence.Templates.IC.likes({showLikeButton:this.showLikeButton&&!h,isLikedByUser:i,likesCount:g,contentId:this.collection.contentId});this.$el.html(f)}return this},toggleLike:function(){this.collection.toggleLike()}});return c});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:likes-view', location = 'view/likes/likes-manager.js' */
define("confluence/ic/likes/likes-manager",["underscore"],function(b){var a={init:function(c){this.likesCache=b.clone(c)||{}},getLikes:function(d){if(this.likesCache&&this.likesCache[d]){var c=b.map(this.likesCache[d].likes,function(e){return{username:e.user.name}});return c}return null},add:function(d,c){if(!this.likesCache[d]){this.likesCache[d]={likes:[]}}this.likesCache[d].likes.push({user:{name:c}})},remove:function(e,d){if(this.likesCache[e]&&this.likesCache[e].likes){var c=b.reject(this.likesCache[e].likes,function(f){return f.user.name===d});this.likesCache[e].likes=c}},isLikable:function(){return this.likesCache!==undefined}};return a});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:display-comment-view', location = 'view/display-comment/display-comment.soy' */
// This file was automatically generated from display-comment.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.IC == 'undefined') { Confluence.Templates.IC = {}; }


Confluence.Templates.IC.displayComment = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="ic-comment-container">');
  Confluence.Templates.IC.sidebarHeading({authorUserName: opt_data.authorUserName, hasDeletePermission: opt_data.hasDeletePermission, hasResolvePermission: opt_data.hasResolvePermission, hasEditPermission: opt_data.hasEditPermission, hasReplyPermission: opt_data.hasReplyPermission, showMenu: opt_data.showMenu && ! opt_data.resolveProperties.resolved, darkFeatures: opt_data.darkFeatures}, output);
  if (opt_data.resolveProperties.resolved) {
    Confluence.Templates.IC.resolvedMask(null, output);
  } else {
    Confluence.Templates.IC.comment(opt_data, output);
  }
  output.append('</div>');
  if (! opt_data.resolveProperties.resolved) {
    output.append('<div class="ic-list"></div><div class="ic-reply-container">');
    if (opt_data.darkFeatures.INLINE_COMMENTS && opt_data.hasReplyPermission) {
      output.append('<div class="ic-reply-placeholder">');
      Confluence.Templates.IC.commentHeader({authorUserName: opt_data.currentAuthorUserName, authorAvatarUrl: opt_data.currentAuthorAvatarUrl, authorDisplayName: opt_data.currentAuthorDisplayName}, output);
      output.append('<div class="ic-body"><form class="aui"><textarea class="textarea ic-textarea" name="body" placeholder="', soy.$$escapeHtml("Reply"), '"></textarea></form></div></div>');
    }
    output.append('</div>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.IC.deleteComment = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="ic-comment-container ic-deleted">');
  Confluence.Templates.IC.sidebarHeading({createComment: false, showMenu: false}, output);
  output.append('<div class="ic-delete-comment-view"><h2><span class="aui-icon ic-delete-image line">::before</span>', soy.$$escapeHtml("Deleted"), '</h2></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.IC.comment = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div data-comment-id="', soy.$$escapeHtml(opt_data.id), '" class="ic-container ic-display-comment">');
  Confluence.Templates.IC.commentHeader(opt_data, output);
  output.append('<div class="ic-body wiki-content"><div class="ic-content">', (opt_data.resolveProperties.resolved) ? '<blockquote><span class="ic-resolved-marker">' + soy.$$escapeHtml(opt_data.originalSelection) + '</span></blockquote>' : '', opt_data.body, '</div></div>');
  if (opt_data.resolveProperties.resolved) {
    Confluence.Templates.IC.renderResolvedActions(opt_data, output);
  } else {
    Confluence.Templates.IC.renderActions(opt_data, output);
  }
  output.append('</div>', (! opt_data.resolveProperties.resolved && opt_data.resolveProperties.resolvedTime > 0 && opt_data.resolveProperties.resolvedUser) ? '<div class="ic-unresolved-message">' + soy.$$escapeHtml(AJS.format("Reopened by {0} {1}",opt_data.resolveProperties.resolvedUser,opt_data.resolveProperties.resolvedFriendlyDate)) + '</div>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.IC.commentMenu = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.darkFeatures.INLINE_COMMENTS && (opt_data.hasDeletePermission || opt_data.hasReplyPermission || opt_data.hasResolvePermission && opt_data.darkFeatures.RESOLVED_INLINE_COMMENTS)) {
    aui.buttons.button({type: 'subtle', extraClasses: 'aui-button-compact aui-dropdown2-trigger-arrowless aui-style-default ic-action-menu', iconType: 'aui', iconClass: 'aui-icon-small aui-iconfont-more', text: '', dropdown2Target: 'ic-menu-items'}, output);
    aui.dropdown2.contents({id: 'ic-menu-items', extraClasses: 'aui-style-default', content: '<ul class="aui-list-truncate">' + ((opt_data.hasResolvePermission && opt_data.darkFeatures.RESOLVED_INLINE_COMMENTS) ? '<li class="ic-action-resolve"><a href="#">' + soy.$$escapeHtml("Resolve") + '</a></li>' : '') + ((opt_data.hasReplyPermission) ? '<li class="ic-action-reply"><a href="#">' + soy.$$escapeHtml("Reply") + '</a></li>' : '') + ((opt_data.hasEditPermission) ? '<li class="ic-action-edit"><a href="#">' + soy.$$escapeHtml("Edit") + '</a></li>' : '') + ((opt_data.hasDeletePermission) ? '<li class="ic-action-delete"><a href="#">' + soy.$$escapeHtml("Delete") + '</a></li>' : '') + '</ul>'}, output);
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.IC.renderResolvedActions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.darkFeatures.INLINE_COMMENTS) {
    output.append('<div class="ic-actions"><ul class="aui-list-truncate">');
    if (opt_data.hasResolvePermission && ! opt_data.isDangling) {
      output.append('<li>');
      aui.buttons.button({text: "Reopen", type: 'link', extraClasses: 'ic-action-unresolve'}, output);
      output.append('</li>');
    }
    output.append('<li class="hidden">');
    aui.buttons.button({type: 'link', extraClasses: 'ic-action-show-reply'}, output);
    output.append('</li>', (opt_data.hasReply) ? '' : '');
    if (opt_data.resolveProperties.resolvedTime > 0) {
      output.append('<li class="ic-resolved-message">');
      aui.icons.icon({useIconFont: true, size: 'small', icon: 'success'}, output);
      output.append('  <span>');
      Confluence.Templates.IC.timeLink({time: (opt_data.isDangling && opt_data.resolveProperties.resolvedByDangling) ? AJS.format("Resolved because the text was deleted by {0} {1}",opt_data.resolveProperties.resolvedUser,opt_data.resolveProperties.resolvedFriendlyDate) : AJS.format("Resolved by {0} {1}",opt_data.resolveProperties.resolvedUser,opt_data.resolveProperties.resolvedFriendlyDate), commentUrl: opt_data.commentDateUrl}, output);
      output.append('</span></li>');
    }
    output.append('</ul></div>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.IC.renderActions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.darkFeatures.INLINE_COMMENTS) {
    output.append('<div class="ic-actions"><ul class="aui-list-truncate">');
    if (opt_data.hasResolvePermission && opt_data.darkFeatures.RESOLVED_INLINE_COMMENTS) {
      output.append('<li>');
      aui.buttons.button({text: "Resolve", type: 'link', extraClasses: 'ic-action-resolve'}, output);
      output.append('</li>');
    }
    output.append('<li class="ic-action-like"></li><li class="ic-date">');
    Confluence.Templates.IC.timeLink({time: opt_data.lastModificationDate, commentUrl: opt_data.commentDateUrl}, output);
    output.append('</li></ul></div>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.IC.resolvedMask = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="ic-resolved-mask"><div class="ic-resolved-mask-content"><h2 class="ic-resolved-icon">');
  aui.icons.icon({useIconFont: true, size: 'large', icon: 'success', extraClasses: 'line'}, output);
  output.append(soy.$$escapeHtml("Resolved"), '</h2></div><div class="resolved-message-container"><div class="resolved-message-sideline"><p>', soy.$$escapeHtml("This comment isn\x27t gone forever! You can see resolved comments at any time."), '</p>');
  aui.buttons.button({text: "Show me", type: 'link', id: 'show-resolved-comments'}, output);
  output.append('</div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.IC.pageComment = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="ic-comment-container">');
  Confluence.Templates.IC.sidebarHeading({createComment: false, showMenu: false}, output);
  output.append('<div class="ic-page-comment-view"><div class="ic-page-comment"><div class="ic-page-comment-content"><h2 class="ic-resolved-icon">');
  aui.icons.icon({useIconFont: true, size: 'large', icon: 'success', extraClasses: 'line'}, output);
  output.append(soy.$$escapeHtml("Saved"), '</h2></div><div class="ic-page-comment-message-container"><div class="ic-page-comment-message-sideline"><p>', soy.$$escapeHtml("Your comment has been saved as a page comment."), '</p><button id="show-page-comment" class="aui-button aui-button-link" data-comment-id="', soy.$$escapeHtml(opt_data.commentId), '">', soy.$$escapeHtml("Show me"), '</button></div></div></div></div></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:display-comment-view', location = 'view/display-comment/display-comment.js' */
define("confluence/ic/view/display-comment",["jquery","ajs","underscore","backbone","confluence/ic/util/utils","confluence/ic/view/create-comment","confluence/ic/view/confirm-dialog","confluence/ic/view/reply-list","confluence/ic/view/resolved-dialog-discovery","confluence/ic/view/navigation","confluence/ic/view/likes"],function(d,g,j,i,e,l,k,h,c,b,a){var f=i.View.extend({tagName:"div",className:"ic-display-comment-view",template:Confluence.Templates.IC.displayComment,events:{"click .ic-action-reply":"replyComment","click .ic-action-resolve":"resolveComment","click .ic-action-edit":"editComment","click #show-resolved-comments":"showResolvedDialogDiscovery","click .ic-reply-placeholder .textarea":"replyComment","focus .ic-reply-container .textarea":"onReplyPlaceholderFocus"},initialize:function(m){j.bindAll(this,"confirm","destroy","deleteFail","replyComment","resolveComment","editComment","renderCommentOnly");this.model.set("active",true);this.listenTo(this.model,"change:resolveProperties",this.render);d("body").on("click",".ic-action-delete a",this.confirm);d("body").on("click",".ic-action-reply a",this.replyComment);d("body").on("click",".ic-action-resolve a",this.resolveComment);d("body").on("click",".ic-action-edit a",this.editComment);this.replyListView=new h({commentModel:this.model,source:m.source})},render:function(){this.$el.html(this.template(j.extend(this.model.toJSON(),{showMenu:true,currentAuthorUserName:g.Meta.get("remote-user"),currentAuthorAvatarUrl:e.getAuthorAvatarUrl(),currentAuthorDisplayName:e.getAuthorDisplayName(),darkFeatures:e.getDarkFeatures()})));if(this.model.isResolved()){this.$(".ic-comment-container").addClass("ic-resolved")}else{this.$(".ic-list").append(this.replyListView.render().el)}this._renderNavigation();this._renderLikes();e.addSidebarHeadingTooltip(this);return this},_renderNavigation:function(){if(this.navigationView){this.navigationView.remove()}this.navigationView=new b({model:this.model});this.navigationView.render();this.$("#ic-nav-container").html(this.navigationView.el)},_renderLikes:function(){if(this.likesView){this.likesView.remove()}this.likesView=new a({contentId:this.model.id}).render();this.$(".ic-action-like").html(this.likesView.el)},editComment:function(n){n.preventDefault();var m=this;if(this.editView){this.editView.focusEditor()}else{if(e.confirmProcess()){var o=e.getEditorFormat(this.model.get("id"));o.done(function(p){m.editView=new l({model:m.model,type:"edit",selection:{},onFinished:m.renderCommentOnly,commentText:p});m.$(".ic-display-comment").html(m.editView.$el);m.editView.render()}).fail(function(){i.trigger("ic:error","We can\'t edit this comment. The comment might have been deleted.")})}}},renderCommentOnly:function(){this.editView&&this.editView.destroy();this.editView=null;var m=j.extend(this.model.toJSON(),{darkFeatures:e.getDarkFeatures()});this.$(".ic-display-comment").html(d(Confluence.Templates.IC.comment(m)).children());this._renderLikes()},replyComment:function(m){m&&m.preventDefault();if(this.createReplyView){this.createReplyView.focusEditor()}else{if(e.confirmProcess()){this.createReplyView=new l({model:this.model,type:"reply",onFinished:j.bind(function(){this.createReplyView&&this.createReplyView.destroy();this.createReplyView=null},this)});this.$(".ic-reply-container").prepend(this.createReplyView.$el);this.createReplyView.render()}else{m&&m.currentTarget.blur()}}},confirm:function(n){n.preventDefault();if(this.model.replies.length>0){i.trigger("ic:error","You can\'t delete inline comment threads with replies.");return false}var m=new k({model:new i.Model({label:"Delete",message:"Are you sure you want to delete the comment?"}),$menuEl:d(".ic-action-menu"),$bodyEl:d("body")});this.$(".ic-sidebar-heading").append(m.$el);this.listenTo(m,"ic:confirm",this.deleteComment)},deleteComment:function(){var m=j.bind(function(){this.$el.html(Confluence.Templates.IC.deleteComment());this.model.set("deleted",true);this._renderNavigation();e.removeInlineLinksDialog(this.model.highlights);e.addSidebarHeadingTooltip(this);i.trigger("ic:delete")},this);this.model.destroy({wait:true,success:m,error:this.deleteFail})},deleteFail:function(o,m,n){if(m.status===401){i.trigger("ic:error","You don\'t have permission to delete this comment.")}else{if(m.status===409){i.trigger("ic:error",m.responseText)}else{i.trigger("ic:error","Could not complete your request.")}}},destroy:function(m){d("body").off("click",".ic-action-delete a",this.confirm);d("body").off("click",".ic-action-reply a",this.replyComment);d("body").off("click",".ic-action-resolve a",this.resolveComment);d("body").off("click",".ic-action-edit a",this.editComment);this.createReplyView&&this.createReplyView.destroy();this.editView&&this.editView.destroy();this.replyListView.destroy();this.navigationView&&this.navigationView.remove();this.likesView&&this.likesView.remove();m!==true&&this.remove()},resolveComment:function(m){m&&m.preventDefault();if(e.confirmProcess(true)){this.model.resolve(true,{wait:true,success:j.bind(this.onResolveComplete,this),error:this.onResolveFail})}},onResolveComplete:function(){this.createReplyView&&this.createReplyView.destroy();this.createReplyView=null;i.trigger("ic:resolved");e.removeInlineLinksDialog(this.model.highlights)},onResolveFail:function(n,m){if(m.status===401){i.trigger("ic:error","You don\'t have permission to resolve this comment.")}else{i.trigger("ic:error","Could not complete your request.")}},showResolvedDialogDiscovery:function(){(new c()).show();i.trigger("ic:resolved:show:recovery")},onReplyPlaceholderFocus:function(n){if(e.getDarkFeatures().RICH_TEXT_EDITOR){var m=(navigator.userAgent.indexOf("Safari")!==-1&&navigator.userAgent.indexOf("Chrome")==-1);m&&n.currentTarget.blur()}}});return f});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:sidebar-view', location = 'view/sidebar/sidebar.js' */
define("confluence/ic/view/sidebar",["underscore","backbone","jquery","confluence/ic/view/display-comment","confluence/ic/view/create-comment","confluence/ic/util/utils","ajs"],function(d,h,f,c,a,e,b){var g=h.View.extend({tagName:"div",className:"ic-sidebar",events:{"click button.ic-action-hide":function(i){this.hide(i,true);h.trigger("ic:sidebar:close")}},initialize:function(i){var j=this;this.listenTo(h,"ic:view ic:overlap",this.displayComment);this.listenTo(h,"ic:create",this.displayCreateComment);this.listenTo(h,"ic:error",this.displayError);this.listenTo(h,"ic:hide-sidebar",this.hide);this.listenTo(h,"ic:clearError",this.clearError);if(e.getDarkFeatures().RICH_TEXT_EDITOR){b.bind("rte-quick-edit-ready",function(){var l=j.$el.find("#wysiwygTextarea_ifr");if(l.length!==0){var m=new MutationObserver(function(){l.resize()});m.observe(l[0],{attributes:true,attributeFilter:["style"]});if(!b.Rte.getEditor().getContent()){j._scrollToEditorView(l)}}else{var k=j.$el.is(":visible");if(!k){e.getPageContainer().css("padding-right","0");j.$wikiContent.css("position","static");e.getPageContainer().css({"min-height":0})}}})}else{b.bind("init.rte",d.bind(this.hideInEditMode,this))}this.defaultNavOffset=130;this.defaultPermalinkedCommentOffset=100;this.$wikiContent=i.$wikiContent||f("#content .wiki-content").first();this.sidebarObserver=new MutationObserver(d.bind(this.setSidebarYPos,this));this.sidebarObserver.observe(this.el,{childList:true,subtree:true});f(window).resize(d.debounce(d.bind(this.setSidebarYPos,this),100));b.bind("sidebar.expanded sidebar.collapsed",d.debounce(d.bind(this.setSidebarYPos,this),50))},displayComment:function(m,l,i){var k=function(){if(m.highlight.is(":hidden")){e.showHighlightContent(m.highlight);if(m.highlight.is(":hidden")){return}}this.distanceToTop=this.previousHighlightOffset||this.defaultNavOffset;this._emptySidebar(true);this.commentView=new c({model:m,source:l});this.show(true);this.previousHighlightOffset=m.highlight.position().top;var n=this.commentView.render().$el;n.css("visibility","hidden");if(l==="nav"){this._scrollToComment(m)}else{if(l==="permalink"){this._scrollToPermalinkedComment(m,this.defaultPermalinkedCommentOffset,i)}else{if(l==="quickreload"){this._scrollToQuickReloadComment(m)}}}this.$el.html(n);Confluence.Binder&&Confluence.Binder.userHover()};var j=(i===undefined)||(i.ignoreConfirmDialog===false);if(j){if(e.confirmProcess(true)){k.call(this)}}else{k.call(this)}},_scrollToQuickReloadComment:function(k){var j=f(".qr-feedback:first");var i=this.defaultPermalinkedCommentOffset;if(j.length>0){i=j.height()+67}this._scrollToPermalinkedComment(k,i)},_scrollToEditorView:function(j){var k=e.isDocTheme()?e.getSplitterContent():f("body, html");var l=this.$(".ic-display-comment-view").position().top;var i=j.closest(".ic-create-comment-view").position().top+l;if(k.height()<i||k.scrollTop()>i){k.animate({scrollTop:i},100)}},_scrollToPermalinkedComment:function(m,j,l){var k;if(e.isDocTheme()){var i=40;k=m.highlight.offset().top+e.getSplitterContent().scrollTop()-i;e.getSplitterContent().animate({scrollTop:k-j},100).promise().done(d.bind(this._scrollToPermalinkedCommentCompleted,this,l))}else{k=m.highlight.offset().top;f("html, body").animate({scrollTop:k-j},100).promise().done(d.bind(this._scrollToPermalinkedCommentCompleted,this,l))}},_scrollToPermalinkedCommentCompleted:function(i){if(i&&i.isReplyComment){this.commentView.replyComment()}},_scrollToComment:function(j){var i=j.highlight.position().top;if(e.isDocTheme()){e.getSplitterContent().animate({scrollTop:e.getSplitterContent().scrollTop()+i-this.distanceToTop},100)}else{f("html, body").animate({scrollTop:window.pageYOffset+i-this.distanceToTop},100)}},displayCreateComment:function(j,k,l){var i=this.isOnUnsupportedMacro();this._emptySidebar(true);this.createCommentView=new a({collection:j,selection:k,type:i?"pageComment":"topLevel",isFocus:false,stopFocus:true,commentText:i?"<blockquote>"+k.text+"</blockquote> <div/>":"",onFinished:d.bind(function(){if(!this.createCommentView.keepSidebar){if(this.isShowing){this.hide()}}},this),serializedHighlights:l});this.show();this.createCommentView.$el.css("visibility","hidden");this.$el.html(this.createCommentView.$el);this.createCommentView.render()},isOnUnsupportedMacro:function(){var i=f(".ic-current-selection");return e.containUnsupportedMacro(i)||e.containInternalLink(i)||e.containUserMetion(i)},displayError:function(j,i){i=d.extend({closeable:true},i);this.clearError();b.messages.warning(".ic-error",{body:j,closeable:i.closeable});i.callback&&i.callback()},clearError:function(){f(".ic-error").empty()},show:function(i){if(this.isShowing){return}this._toggleSidebar(i);this.isShowing=true},hideInEditMode:function(i){if(b.Meta.get("content-type")!=="comment"){this.sidebarObserver.disconnect();this.hide(i)}},hide:function(j,i){j&&j.preventDefault();if(e.confirmProcess(true)){if(!this.isShowing){return}e.getPageContainer().css({"min-height":"initial"});this._toggleSidebar(i);h.trigger("ic:sidebar-hidden");this.isShowing=false}},_toggleSidebar:function(i){var m=this;var n=f(".inline-comment-marker.active:first, .ic-current-selection:first");var l;var k=(e.isDocTheme()?e.getSplitterContent().scrollTop():window.pageYOffset);if(n.length>0){l=n.offset().top-k}var j=f.Deferred();var o=j.promise();if(this.isShowing){if(i&&e.isAnimationSupported()){o=e.animateSidebar(this,false)}else{e.getPageContainer().css("padding-right","0");this.$wikiContent.css("position","static");this._emptySidebar();j.resolve()}}else{e.getPageContainer().css("padding-right","280px");if(i&&e.isAnimationSupported()){o=e.animateSidebar(this,true)}else{j.resolve()}this.$wikiContent.css("position","relative")}o.done(function(){e.scrollToCommentAfterToggleSideBar(l,n)})},_emptySidebar:function(i){if(this.commentView){this.commentView.model.unset&&this.commentView.model.unset("active");this.commentView.destroy();this.commentView=null}if(this.createCommentView){this.createCommentView.keepSidebar=i;this.createCommentView.destroy();this.createCommentView=null}},setSidebarYPos:function(){if(!this.isShowing){return}var i=this.$el.offset().top;var l,j;if(this.commentView!=null){l=this.commentView.$el;j=this.commentView.model.highlight}else{if(this.createCommentView!=null){l=this.createCommentView.$el;j=f(".ic-current-selection")}else{return}}if(!j){return}var k=this.$(".ic-sidebar-heading").height();l.css({visibility:"visible",position:"absolute",top:(j.offset().top-i-k)+"px"});e.recalculateContentHeight(l)}});return g});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:internal-aui-browser', location = 'js/aui/internal/browser.js' */
(function(A){AJS._internal=AJS._internal||{};AJS._internal.browser=A(AJS.$)})(function(B){var A={};var C=null;A.supportsCalc=function(){if(C===null){var D=B('<div style="height: 10px; height: -webkit-calc(20px + 0); height: calc(20px);"></div>');C=(20===D.appendTo(document.documentElement).height());D.remove()}return C};A.supportsRequestAnimationFrame=function(){return !!window.requestAnimationFrame};return A});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:dialog2', location = 'js/dialog2.js' */
(function(A){AJS.dialog2=A(AJS.$,AJS.layer,AJS._internal.widget)})(function(D,G,C){var F={"aui-focus":"false","aui-blanketed":"true"};function B(H){D.each(F,function(I,J){var K="data-"+I;if(!H[0].hasAttribute(K)){H.attr(K,J)}})}function A(H){if(H){this.$el=D(H)}else{this.$el=D(aui.dialog.dialog2({}))}B(this.$el)}A.prototype.on=function(I,H){G(this.$el).on(I,H);return this};A.prototype.off=function(I,H){G(this.$el).off(I,H);return this};A.prototype.show=function(){G(this.$el).show();return this};A.prototype.hide=function(){G(this.$el).hide();return this};A.prototype.remove=function(){G(this.$el).remove();return this};A.prototype.isVisible=function(){return G(this.$el).isVisible()};var E=C("dialog2",A);E.on=function(H,I){G.on(H,".aui-dialog2",I);return this};E.off=function(H,I){G.off(H,".aui-dialog2",I);return this};D(document).on("click",".aui-dialog2-header-close",function(H){H.preventDefault();E(D(this).closest(".aui-dialog2")).hide()});E.on("show",function(K,J){var I=[".aui-dialog2-content",".aui-dialog2-footer",".aui-dialog2-header"];var H;I.some(function(L){H=J.find(L+" :aui-tabbable");return H.length});H&&H.first().focus()});E.on("hide",function(J,I){var H=G(I);if(I.data("aui-remove-on-hide")){H.remove()}});return E});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:dialog2', location = 'soy/dialog2.soy' */
// This file was automatically generated from dialog2.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.dialog == 'undefined') { aui.dialog = {}; }


aui.dialog.dialog2 = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param12 = new soy.StringBuilder();
  aui.dialog.dialog2Content({id: null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, headerActionContent: opt_data.headerActionContent, headerSecondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal, content: opt_data.content, footerHintText: opt_data.footerHintText, footerHintContent: opt_data.footerHintContent, footerActionContent: opt_data.footerActionContent}, param12);
  aui.dialog.dialog2Chrome({id: opt_data.id, titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, modal: opt_data.modal, tagName: opt_data.tagName, removeOnHide: opt_data.removeOnHide, visible: opt_data.visible, size: opt_data.size, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: param12.toString()}, output);
  return opt_sb ? '' : output.toString();
};


aui.dialog.dialog2Chrome = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', (opt_data.titleId) ? ' aria-labelledby="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '', ' role="dialog" class=" aui-layer aui-dialog2 aui-dialog2-', soy.$$escapeHtml(opt_data.size ? opt_data.size : 'medium'));
  aui.renderExtraClasses(opt_data, output);
  output.append('"', (opt_data.modal) ? 'data-aui-modal="true"' : '', (opt_data.removeOnHide) ? 'data-aui-remove-on-hide="true"' : '', (opt_data.visible != true) ? 'aria-hidden="true"' : '');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.content) ? opt_data.content : '', '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section'), '>');
  return opt_sb ? '' : output.toString();
};


aui.dialog.dialog2Content = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.dialog.dialog2Header({titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, actionContent: opt_data.headerActionContent, secondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal}, output);
  aui.dialog.dialog2Panel(opt_data, output);
  aui.dialog.dialog2Footer({hintText: opt_data.footerHintText, hintContent: opt_data.footerHintContent, actionContent: opt_data.footerActionContent}, output);
  return opt_sb ? '' : output.toString();
};


aui.dialog.dialog2Header = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<header', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dialog2-header');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('><h2 ', (opt_data.titleId) ? ' id="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '', ' class="aui-dialog2-header-main">', (opt_data.titleText) ? soy.$$escapeHtml(opt_data.titleText) : '', (opt_data.titleContent) ? opt_data.titleContent : '', '</h2>', (opt_data.actionContent) ? '<div class="aui-dialog2-header-actions">' + opt_data.actionContent + '</div>' : '', (opt_data.secondaryContent) ? '<div class="aui-dialog2-header-secondary">' + opt_data.secondaryContent + '</div>' : '', (opt_data.modal != true) ? '<a class="aui-dialog2-header-close"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog">' + soy.$$escapeHtml("Close") + '</span></a>' : '', '</header>');
  return opt_sb ? '' : output.toString();
};


aui.dialog.dialog2Footer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<footer', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dialog2-footer');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.actionContent) ? '<div class="aui-dialog2-footer-actions">' + opt_data.actionContent + '</div>' : '', (opt_data.hintText || opt_data.hintContent) ? '<div class="aui-dialog2-footer-hint">' + ((opt_data.hintText) ? soy.$$escapeHtml(opt_data.hintText) : '') + ((opt_data.hintContent) ? opt_data.hintContent : '') + '</div>' : '', '</footer>');
  return opt_sb ? '' : output.toString();
};


aui.dialog.dialog2Panel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-dialog2-content');
  aui.renderExtraClasses(opt_data, output);
  output.append('"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.content) ? opt_data.content : '', '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:resolved-comment-view', location = 'view/resolved-comment/resolved-comment-list.soy' */
// This file was automatically generated from resolved-comment-list.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.IC == 'undefined') { Confluence.Templates.IC = {}; }


Confluence.Templates.IC.resolvedCommentDialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param8 = new soy.StringBuilder();
  aui.buttons.button({id: 'resolved-dialog-close-button', text: "Close", type: 'link'}, param8);
  aui.dialog.dialog2({id: 'ic-resolved-comment-dialog', removeOnHide: true, extraClasses: 'ic-resolved-comment-dialog-content', modal: true, titleText: "Resolved comments", footerActionContent: param8.toString(), content: '<!-- Placeholder for error message --><div id="ic-resolved-comment-dialog-error" />'}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.IC.resolvedDiscovery = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p>', soy.$$escapeHtml("Got more to say? You can reopen resolved comments to continue the discussion."), '</p>');
  aui.buttons.button({id: 'ic-resolved-discovery-dismiss', text: "OK, got it", type: 'link'}, output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:resolved-comment-view', location = 'view/resolved-comment/resolved-comment.js' */
define("confluence/ic/view/resolved-comment-item",["jquery","underscore","ajs","backbone","confluence/ic/util/utils","confluence/ic/view/reply-list","confluence/ic/view/likes"],function(g,b,a,h,f,e,d){var c=h.View.extend({tagName:"div",className:"ic-display-comment-view",template:Confluence.Templates.IC.comment,events:{"click .ic-action-unresolve":"unresolveComment","click .ic-action-show-reply":"showReply"},initialize:function(){b.bindAll(this,"onUnresolveComplete","destroy");this.replyListView=new e({commentModel:this.model});this.listenTo(this.replyListView,"ic:reply-rendered",function(){this.renderNumberOfReplies()})},render:function(){var i=this.template(b.extend(this.model.toJSON(),{showMenu:false,isDangling:this.model.isDangling(),darkFeatures:f.getDarkFeatures(),hasReply:this.model.replies.length>0}));this.$el.html(i);if(this.likesView){this.likesView.remove()}this.likesView=new d({contentId:this.model.id,showLikeButton:false}).render();this.$(".ic-action-like").html(this.likesView.el);this.$el.append(this.replyListView.$el.hide());this.replyListView.render();return this},unresolveComment:function(){h.trigger("ic:resolvedClearError");this.model.resolve(false,{wait:true,success:this.onUnresolveComplete,error:this.onUnresolveFail})},onUnresolveComplete:function(){h.trigger("ic:unresolved");this.$el.slideUp(this.destroy)},onUnresolveFail:function(j,i){if(i.status===401){h.trigger("ic:resolvedError","You don\'t have permission to resolve this comment.")}else{h.trigger("ic:resolvedError","Could not complete your request.")}},showReply:function(){this.$(".ic-action-show-reply").parent().remove();this.$(".ic-replies").slideDown()},renderNumberOfReplies:function(){var k=this.model.replies.length;var j=this.$(".ic-action-show-reply");if(k>0){var i;if(k===1){i=a.format("{0} reply",1)}else{i=a.format("{0} replies",k)}j.text(i);j.parent().removeClass("hidden")}else{j.parent().remove()}},destroy:function(){this.replyListView.destroy();this.remove()}});return c});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:resolved-comment-view', location = 'view/resolved-comment/resolved-comment-list.js' */
define("confluence/ic/view/resolved-comment-list",["jquery","underscore","backbone","ajs","confluence/ic/view/resolved-comment-item"],function(e,c,f,b,d){var a=f.View.extend({events:{"click #resolved-dialog-close-button":"destroy"},template:Confluence.Templates.IC.resolvedCommentDialog,initialize:function(){c.bindAll(this,"render","destroy","_onKeyDown");this._resolvedCommentViews=[];this.listenTo(this.collection,"change:resolveProperties",this.onResolvedChanged);this.listenTo(f,"ic:resolvedError",this.displayError);this.listenTo(f,"ic:resolvedClearError",this.clearErrors);var g=e(this.template());this.setElement(g);this.dialog=b.dialog2(this.$el);e(document).bind("keydown",this._onKeyDown);b.trigger("remove-bindings.keyboardshortcuts")},render:function(){var g=e("<div>");var h=this.collection.getResolvedCount();if(h!==0){c.each(this.collection.getResolvedCommentsDesc(),function(j){var i=new d({model:j});this._resolvedCommentViews.push(i);g.append(i.render().$el)},this)}else{this.displayNoCommentMessage()}this.$(".aui-dialog2-content").append(g);this.dialog.show();if(this.options.focusCommentId){this.scrollToComment(this.options.focusCommentId)}f.trigger("ic:resolved:view",h);return this},onResolvedChanged:function(){if(this.collection.getResolvedCount()===0){this.displayNoCommentMessage()}},displayNoCommentMessage:function(){b.messages.generic(this.$(".aui-dialog2-content"),{body:"There are no resolved comments on this page.",closeable:false})},displayError:function(g){this.clearErrors();b.messages.warning(this.$("#ic-resolved-comment-dialog-error"),{body:g})},clearErrors:function(){this.$("#ic-resolved-comment-dialog-error").empty()},scrollToComment:function(h){var i=this.$(b.format("[data-comment-id={0}]",h));if(i.length){i.addClass("focused");return this.$(".aui-dialog2-content").animate({scrollTop:i.parent().position().top},100)}var g=new e.Deferred();return g.reject()},_onKeyDown:function(g){if(this.$el&&this.$el.is(":visible")&&g.keyCode===b.keyCode.ESCAPE){this.destroy()}},destroy:function(){b.trigger("add-bindings.keyboardshortcuts");e(document).unbind("keydown",this._onKeyDown);this.dialog.hide();this.dialog.remove();c.each(this._resolvedCommentViews,function(g){g.destroy()});this._resolvedCommentViews=null;this.remove()}});return a});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:resolved-comment-view', location = 'view/resolved-comment/resolved-dialog-discovery.js' */
define("confluence/ic/view/resolved-dialog-discovery",["jquery","underscore","backbone","ajs"],function(d,c,e,b){var a=e.View.extend({DIALOG_BACKGROUND_COLOR:"#ffffff",DIALOG_BORDER_COLOR:"#f79232",initialize:function(){c.bindAll(this,"getDiscoveryDialogContent","destroy","onEndScroll")},template:Confluence.Templates.IC.resolvedDiscovery,show:function(){d.when(this.scrollTop()).done(this.onEndScroll)},onEndScroll:function(){this.showToolsMenu();this._discoveryDialog=this.createDiscoveryDialog();this._discoveryDialog.show()},showToolsMenu:function(){var f=d("#action-menu");f.on("aui-dropdown2-hide",this.destroy);d("#action-menu-link").trigger("aui-button-invoke");f.find("a.active").removeClass("active");f.find("#view-resolved-comments").addClass("active").focus()},createDiscoveryDialog:function(){var g={gravity:"w",hideCallback:this.destroy,width:280,noBind:true};var f=b.InlineDialog(d("#view-resolved-comments"),"ic-resolved-dialog-discovery",this.getDiscoveryDialogContent,g);f.on("click focusin mousedown",function(h){h.stopPropagation()});return f},getDiscoveryDialogContent:function(g,f,j){var h=this.template();g.html(h);var i=this;g.find("#ic-resolved-discovery-dismiss").on("click",function(){e.trigger("ic:resolved:dismiss:recovery");i._discoveryDialog.hide()});j();return false},scrollTop:function(){var f=d("#splitter-content");var h=!!f.length;var i=(h)?f:d("html, body");var g=(i.scrollTop()===0)?1:300;return i.animate({scrollTop:0},g)},destroy:function(){var f=d("#action-menu");f.off("aui-dropdown2-hide");if(f.is(":visible")){d("#action-menu-link").trigger("aui-button-invoke")}this._discoveryDialog.remove();this.remove()}});return a});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-alignment', location = 'js/aui/internal/alignment.js' */
(function(A){AJS.Alignment=A(window.Tether);if(typeof window.define==="function"){define("aui/internal/alignment",["aui/internal/tether"],function(){return AJS.Alignment})}})(function(E){var C="data-aui-alignment";var J="data-aui-alignment-static";var H="aui-alignment";var A="aui-alignment-side-";var K="aui-alignment-snap-";var D="right middle";var I={"top left":{el:"bottom left",target:"top left"},"top center":{el:"bottom center",target:"top center"},"top right":{el:"bottom right",target:"top right"},"right top":{el:"top left",target:"top right"},"right middle":{el:"middle left",target:"middle right"},"right bottom":{el:"bottom left",target:"bottom right"},"bottom left":{el:"top left",target:"bottom left"},"bottom center":{el:"top center",target:"bottom center"},"bottom right":{el:"top right",target:"bottom right"},"left top":{el:"top right",target:"top left"},"left middle":{el:"middle right",target:"middle left"},"left bottom":{el:"bottom right",target:"bottom left"}};function G(Q,P,M){var N=A+P;var O=K+M;Q.className+=" "+N+" "+O}function B(M){var N=(M.getAttribute(C)||D).split(" ");return{side:N[0],snap:N[1]}}function F(N,M){return I[N+" "+M]||I[D]}function L(O,P){var R=B(O);var Q=F(R.side,R.snap);var N=O.hasAttribute(J);var M=new E({enabled:false,element:O,target:P,attachment:Q.el,targetAttachment:Q.target,classPrefix:H,constraints:[{to:"window",attachment:N===true?"none":"together"}]});G(O,R.side,R.snap);this._auiTether=M}L.prototype={destroy:function(){this._auiTether.destroy();return this},disable:function(){this._auiTether.disable();return this},enable:function(){this._auiTether.enable();return this}};return L});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-trigger', location = '/js/aui/trigger.js' */
(function(A){define("aui/trigger",[],function(){return A(AJS.$,window.skate)})})(function(E,B){function D(G,H){var F=E(H).closest("a[href]",G);return !!F.length&&F[0]!==G}function C(F){return document.getElementById(F.getAttribute("aria-controls"))}function A(G,H){if(G.isEnabled()){var F=C(G);if(F&&F.message){F.message(H)}}}B("data-aui-trigger",{type:B.types.ATTR,insert:function(F){E(F).on({click:function(G){if(!D(F,G.target)){A(F,G);G.preventDefault()}},"mouseenter mouseleave focus blur":function(G){A(F,G)}})},prototype:{disable:function(){this.setAttribute("aria-disabled","true")},enable:function(){this.setAttribute("aria-disabled","false")},isEnabled:function(){return this.getAttribute("aria-disabled")!=="true"}}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-trigger', location = '/soy/trigger.soy' */
// This file was automatically generated from trigger.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.trigger == 'undefined') { aui.trigger = {}; }


aui.trigger.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'a'), (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="');
  aui.renderExtraClasses(opt_data, output);
  output.append('" aria-owns="', soy.$$escapeHtml(opt_data.menu.id), '" aria-controls="', soy.$$escapeHtml(opt_data.menu.id), '" aria-haspopup="true"', (opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '', (opt_data.container) ? ' data-container="' + soy.$$escapeHtml(opt_data.container) + '"' : '', ((! opt_data.tagName || opt_data.tagName == 'a') && (! opt_data.extraAttributes || Object.prototype.toString.call(opt_data.extraAttributes) === '[object Object]' && ! opt_data.extraAttributes.href && ! opt_data.extraAttributes.tabindex)) ? ' tabindex="0"' : '', ' data-aui-trigger');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>', (opt_data.content) ? opt_data.content : '', (opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '', (! (opt_data.showIcon == false)) ? '<span class="icon ' + soy.$$escapeHtml(opt_data.iconClasses ? opt_data.iconClasses : 'aui-icon-dropdown') + '">' + ((opt_data.iconText) ? soy.$$escapeHtml(opt_data.iconText) : '') + '</span>' : '', '</', soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'a'), '>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-inline-dialog2', location = '/js/aui/inline-dialog2.js' */
(function(A){define("aui/inline-dialog2",["./internal/alignment","./trigger"],function(B){return A(B,AJS.layer,window.skate)})})(function(J,C,E){var I=1000;function K(M){return document.querySelector('[aria-controls="'+M.id+'"]')}function F(N,O){var M=K(N);if(M){O(M)}}function G(M,O){var N=M.getAttribute("data-aui-responds-to")==="hover";if(N){O(M)}}function L(N,M){if(!N._auiAlignment){N._auiAlignment=new J(N,M)}}function B(N,M){L(N,M);N._auiAlignment.enable()}function A(N,M){L(N,M);N._auiAlignment.disable()}E("aui-inline-dialog2",{type:E.types.TAG,ready:function(M){F(M,function(N){N.setAttribute("aria-expanded",M.isVisible());N.setAttribute("aria-haspopup","true")});G(M,function(){M.mouseInside=false;M.addEventListener("mouseenter",function(){M.mouseInside=true;M.message({type:"mouseenter"})});M.addEventListener("mouseleave",function(){M.mouseInside=false;M.message({type:"mouseleave"})})})},remove:function(M){if(M._auiAlignment){M._auiAlignment.destroy()}},prototype:{remove:function(){C(this).remove()},show:function(){var M=this;C(this).show();F(this,function(N){B(M,N);N.setAttribute("aria-expanded","true")});return this},hide:function(){var M=this;C(this).hide();F(this,function(N){A(M,N);N.setAttribute("aria-expanded","false")});return this},isVisible:function(){return C(this).isVisible()},message:function(M){D(this,M);return this}}});function D(O,Q){var N={toggle:["click"],hover:["mouseenter","mouseleave","focus","blur"]};var M=O.getAttribute("data-aui-responds-to");var P=N[M];if(P&&P.indexOf(Q.type)>-1){H[Q.type](O,Q)}}var H={click:function(M){if(M.isVisible()){if(!C(M).isPersistent()){M.hide()}}else{M.show()}},mouseenter:function(M){if(!M.isVisible()){M.show()}if(M._clearMouseleaveTimeout){M._clearMouseleaveTimeout()}},mouseleave:function(M){if(C(M).isPersistent()||!M.isVisible()){return }if(M._clearMouseleaveTimeout){M._clearMouseleaveTimeout()}var N=setTimeout(function(){if(!M.mouseInside){M.hide()}},I);M._clearMouseleaveTimeout=function(){clearTimeout(N);M._clearMouseleaveTimeout=null}},focus:function(M){if(!M.isVisible()){M.show()}},blur:function(M){if(!C(M).isPersistent()&&M.isVisible()){M.hide()}}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:aui-inline-dialog2', location = 'soy/inline-dialog2.soy' */
// This file was automatically generated from inline-dialog2.soy.
// Please don't edit this file by hand.

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.inlineDialog2 == 'undefined') { aui.inlineDialog2 = {}; }


aui.inlineDialog2.inlineDialog2 = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<aui-inline-dialog2 ', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', '  class="aui-layer aui-inline-dialog');
  aui.renderExtraClasses(opt_data, output);
  output.append('" data-aui-alignment="', soy.$$escapeHtml(opt_data.alignment ? opt_data.alignment : ''), '" data-aui-responds-to="', soy.$$escapeHtml(opt_data.respondsTo ? opt_data.respondsTo : ''), '" aria-hidden="true"');
  aui.renderExtraAttributes(opt_data, output);
  output.append('>');
  aui.inlineDialog2.inlineDialog2Content(opt_data, output);
  output.append('</aui-inline-dialog2>');
  return opt_sb ? '' : output.toString();
};


aui.inlineDialog2.inlineDialog2Content = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-inline-dialog-contents">', (opt_data.content) ? opt_data.content : '', '</div>');
  return opt_sb ? '' : output.toString();
};


aui.inlineDialog2.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.trigger.trigger(soy.$$augmentData(opt_data, {showIcon: opt_data.showIcon ? opt_data.showIcon : false}), output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:grow-1507', location = 'grows/grow-1507/main.js' */
define("confluence/ic/grows/GROW_1507",["jquery","ajs","underscore","aui/inline-dialog2"],function(b,f,i){var j={};var c;j.start=function(){c=d();f.bind("rte-ready",function(){b.getJSON(f.contextPath()+"/rest/inlinecomments/1.0/storage/GROW-1507",function(k){if(!k.isExist&&b("#content").hasClass("view")&&b("#toolbar").closest(".quick-comment-container").hasClass("add")){if(b("#ic-grow-1507-dialog-trigger").length===0){a()}}})})};var a=function(){var k=b(Confluence.Templates.IC.GROW.GROW_1507.tipDialog());k.find("#showInstruction").on("click",i.bind(g,k[0]));k.find("#closeTipDialog").on("click",i.bind(e,k[0]));k[0].addEventListener("aui-layer-hide",function(){k.remove()});b("#rte-toolbar").append(Confluence.Templates.IC.GROW.GROW_1507.dialogTrigger());b("body").append(k);skate.init(k);k[0].show();Backbone.trigger("ic:grow1507:tip:show")};var g=function(){c.show();this.hide();Backbone.trigger("ic:grow1507:video:show");h()};var e=function(){this.hide();Backbone.trigger("ic:grow1507:tip:close");h()};var d=function(){b("body").append(Confluence.Templates.IC.GROW.GROW_1507.instructionDialog());var k=f.dialog2("#ic-grow-1507-instruction-dialog");k.on("hide",function(){Backbone.trigger("ic:grow1507:video:close")});k.$el.find("#dialog-close-button").on("click",function(){k.hide()});return k};var h=function(){b.ajax({url:f.contextPath()+"/rest/inlinecomments/1.0/storage/GROW-1507",type:"PUT"})};return j});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:grow-1507', location = 'grows/grow-1507/template.soy' */
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.IC == 'undefined') { Confluence.Templates.IC = {}; }
if (typeof Confluence.Templates.IC.GROW == 'undefined') { Confluence.Templates.IC.GROW = {}; }
if (typeof Confluence.Templates.IC.GROW.GROW_1507 == 'undefined') { Confluence.Templates.IC.GROW.GROW_1507 = {}; }


Confluence.Templates.IC.GROW.GROW_1507.tipDialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<aui-inline-dialog2 id="ic-grow-1507-tip-dialog" class="aui-layer aui-inline-dialog" data-aui-alignment="top left" data-aui-responds-to="toggle" aria-hidden="true"><div class="aui-inline-dialog-contents"><p class="ic-tip-title">', soy.$$escapeHtml("COMMENT TIP"), '</p><p>', "Do you know about inline comments?\x3cbr\x3eYou can use them for reviewing, adding them on a specific part of the document.", '</p><p class="ic-noti-btn-group"><button class="aui-button" id="showInstruction">', soy.$$escapeHtml("Show me"), '</button><button class="aui-button aui-button-link grow-dismiss" id="closeTipDialog">', soy.$$escapeHtml("OK, got it"), '</button></p></div></aui-inline-dialog2>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.IC.GROW.GROW_1507.instructionDialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<section role="dialog" id="ic-grow-1507-instruction-dialog" class="aui-layer aui-dialog2 aui-dialog2-large" aria-hidden="true"><!-- Dialog header --><header class="aui-dialog2-header"><!-- The dialog\'s title --><h2 class="aui-dialog2-header-main">', soy.$$escapeHtml("Inline comments"), '</h2><!-- Close icon --><a class="aui-dialog2-header-close"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog">', soy.$$escapeHtml("Close"), '</span></a></header><!-- Main dialog content --><div class="aui-dialog2-content"><img class="ic-instruction-video" src="', soy.$$escapeHtml("/wiki"), '/download/resources/com.atlassian.confluence.plugins.confluence-inline-comments:grow-1507/inline_comment_tutorial.gif"></div><!-- Dialog footer --><footer class="aui-dialog2-footer"><!-- Actions to render on the right of the footer --><div class="aui-dialog2-footer-actions"><button id="dialog-close-button" class="aui-button aui-button-link">', soy.$$escapeHtml("OK, got it"), '</button></div></footer></section>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.IC.GROW.GROW_1507.dialogTrigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="ic-grow-1507-dialog-trigger" data-aui-trigger="" aria-controls="ic-grow-1507-tip-dialog"></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:app', location = 'analytics/ic-analytics.js' */
define("confluence/ic/analytics",["ajs","underscore","backbone"],function(b,c,d){var a={};c.extend(a,d.Events);a.start=function(){if(this.running===true){return}this.running=true;this.send=function(e,f){b.trigger("analytics",{name:e,data:f})};this.listenTo(d,"ic:highlight-panel-click",function(){this.send("confluence.highlight.actions.comment.inline")});this.listenTo(d,"ic:view",function(f,e){this.send("confluence.comment.inline.view");if(e==="nav"){this.send("confluence.comment.inline.view.nav")}if(e==="permalink"){this.send("confluence.comment.inline.view.permalink")}});this.listenTo(d,"ic:overlap",function(){this.send("confluence.comment.inline.overlap")});this.listenTo(d,"ic:edit",function(){this.send("confluence.comment.inline.edit")});this.listenTo(d,"ic:persist",function(){this.send("confluence.comment.inline.create")});this.listenTo(d,"ic:sidebar:close",function(){this.send("confluence.comment.inline.sidebar.close")});this.listenTo(d,"ic:reply:persist",function(){this.send("confluence.comment.inline.reply")});this.listenTo(d,"ic:delete ic:reply:delete",function(){this.send("confluence.comment.inline.delete")});this.listenTo(d,"ic:resolved",function(){this.send("confluence.comment.inline.resolved")});this.listenTo(d,"ic:unresolved",function(){this.send("confluence.comment.inline.unresolved")});this.listenTo(d,"ic:resolved:view",function(f){var e={total:f};this.send("confluence.comment.inline.resolved.view",e)});this.listenTo(d,"ic:resolved:dismiss:recovery",function(){this.send("confluence.comment.inline.resolved.dismiss")});this.listenTo(d,"ic:resolved:show:recovery",function(){this.send("confluence.comment.inline.resolved.discovery")});this.listenTo(d,"ic:open:dangled",function(f){var e={commentId:f.get("id"),pageId:b.Meta.get("page-id")};this.send("confluence.comment.inline.open.dangled",e)});this.listenTo(d,"ic:editor:load:fail",function(){var e={pageId:b.Meta.get("page-id")};this.send("confluence.comment.inline.editor.load.fail",e)});this.listenTo(d,"ic:resolve:dangled:failed",function(f){var e={commentId:f.get("id"),pageId:b.Meta.get("page-id")};this.send("confluence.comment.inline.resolved.dangled.failed",e)});this.listenTo(d,"ic:grow1507:tip:show",function(){var e={pageId:b.Meta.get("page-id")};this.send("confluence.comment.inline.grow1507.tipdialog.show",e)});this.listenTo(d,"ic:grow1507:tip:close",function(){var e={pageId:b.Meta.get("page-id")};this.send("confluence.comment.inline.grow1507.tipdialog.close",e)});this.listenTo(d,"ic:grow1507:video:show",function(){var e={pageId:b.Meta.get("page-id")};this.send("confluence.comment.inline.grow1507.video.show",e)});this.listenTo(d,"ic:grow1507:video:close",function(){var e={pageId:b.Meta.get("page-id")};this.send("confluence.comment.inline.grow1507.video.close",e)})};a.stop=function(){this.running=false;this.stopListening()};return a});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:app', location = '/app/app.js' */
define("confluence/ic/app/app",["jquery","backbone","ajs","confluence/ic/model/comment","confluence/ic/model/comment-collection","confluence/ic/view/highlight-text","confluence/ic/view/sidebar","confluence/ic/view/resolved-comment-list","confluence/ic/util/text-highlighter","confluence/ic/util/utils","confluence/ic/analytics","confluence/ic/likes/likes-manager","exports","confluence/ic/grows/GROW_1507"],function(f,n,k,b,c,a,i,d,h,g,l,j,e,m){function o(){l.start();if(k.DarkFeatures.isEnabled("confluence-inline-comments-grow1507")){m.start()}var r=new i({$wikiContent:f("#content .wiki-content").first()});g.getPageContainer().append(r.$el);var q=new c();new a({collection:q});f("body").on("click","#view-resolved-comments",function(v){v.preventDefault();new d({collection:q}).render()});var u=f("#view-resolved-comments>span");var t=function(){u.text("Resolved comments"+k.format(" ({0})",q.getResolvedCount()))};q.fetch({cache:false});q.once("sync",function(v){var w=window.location.search;g.showFocusedComment(v,w,d);t()});q.on("change:resolveProperties",function(){t()});var p=function(x,w){var y=q.get(w);var v=false;if(y===undefined){y=new b({id:w});v=true}y.fetch({success:function(z){z._setHighlights(z.get("markerRef"));if(v){q.add(z)}else{y.replies.isFetched=false}n.trigger("ic:view",y,"quickreload")}})};k.bind("qr:show-new-thread",p);if(Confluence&&Confluence.Likes&&Confluence.Likes.getLikesCache){Confluence.Likes.getLikesCache().done(function(v){j.init(v);n.trigger("ic:likes-received")})}if(!g.getDarkFeatures().INLINE_COMMENTS){return}var s="com.atlassian.confluence.plugins.confluence-inline-comments:create-inline-comment";if(Confluence&&Confluence.HighlightAction){Confluence.HighlightAction.registerButtonHandler(s,{onClick:function(x){if(g.confirmProcess()){n.trigger("ic:highlight-panel-click");f(".inline-comment-marker").removeClass("active");var v=g.overlappedSelection(x,q);if(v){var w=f('.inline-comment-marker[data-ref="'+v.get("markerRef")+'"]');Confluence.HighlightAction.clearTextSelection();v.highlight=w;n.trigger("ic:overlap",v)}else{var y=(new h()).removeHighlight().highlight(x.range);n.trigger("ic:create",q,x,y)}}},shouldDisplay:Confluence.HighlightAction.WORKING_AREA.MAINCONTENT_ONLY})}}e.init=o});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:bootstrap', location = '/app/bootstrap.js' */
require(["jquery","ajs","confluence/ic/app/app"],function(c,a,b){if(a.Meta.get("page-id")&&(a.Meta.get("page-id")===a.Meta.get("latest-page-id"))){c(b.init)}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:editor-view-resources', location = 'jscripts/view-content/pushed-navigation-util.js' */
(function(){function b(){return AJS.Rte&&AJS.Rte.getEditor()&&!!$("#editpageform").length}var a=window.location.hash,c=window.location.search;Confluence.Editor.PushedNavUtil={isInEditPage:b,filterPreviewHashChange:function(){var d=b()||window.history.pushState||!(window.location.hash&&0===window.location.hash.indexOf("#!"))&&!(a&&0===a.indexOf("#!"));a=window.location.hash;return d},filterPreviewNavigationEvent:function(){var a=b()||!/[?&]preview=([^&]*)/.test(window.location.search)&&!/[?&]preview=([^&]*)/.test(c);
c=window.location.search;return a}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:editor-view-resources', location = 'jscripts/view-content/pushed-navigation.js' */
(function(a,j){function b(){d?c.split("#")[0]!=window.location.href.split("#")[0]&&(a(window).unbind("popstate",g),window.location.reload()):c.split("#")[0]==window.location.href.split("#")[0]&&"editor"!==c.split("#")[1]||window.location.reload()}function e(){c=window.location.href}function h(){var a=Confluence.Editor.Drafts.unloadMessage();a?(Confluence.Editor.Drafts.unBindUnloadMessage(),confirm(a+"\n\n"+"Press OK to continue, or Cancel to stay on the current page.")?(AJS.trigger("analytics",{name:"rte.quick-edit.confirmation.leaving"}),
b()):(AJS.trigger("analytics",{name:"rte.quick-edit.confirmation.staying"}),d?(f=!0,window.history.forward()):window.location.hash="editor",Confluence.Editor.Drafts.bindUnloadMessage())):b()}function k(){Confluence.Editor.PushedNavUtil.isInEditPage()?"#editor"!==window.location.hash&&h():b()}function g(){f?f=!1:Confluence.Editor.PushedNavUtil.isInEditPage()?h():b()}function i(a,b){return function(){j.every(b,function(a){return a()})&&a()}}var d=!!window.history.pushState,f=!1,c=window.location.href,
l=[Confluence.Editor.PushedNavUtil.filterPreviewHashChange],m=[Confluence.Editor.PushedNavUtil.filterPreviewNavigationEvent],n=function(){e();d?(a(window).bind("popstate",i(g,m)),a(window).bind("rte-quick-edit-push-state",e)):(a(window).bind("hashchange",i(k,l)),a(window).bind("rte-quick-edit-push-hash",e))};AJS.toInit(function(){setTimeout(n,0)});AJS.bind("rte-quick-edit-enable-handlers",function(){"#editor"===window.location.hash&&a("#editPageLink").click()})})($,_);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = '/includes/js/page-loading-indicator.js' */
define("confluence/page-loading-indicator",["jquery","underscore","ajs"],function(c,g,a){return function(b){function d(){return c(".confluence-page-loading-blanket",b)}function e(){return c(".confluence-loading-indicator",b)}return{show:function(){0===d().length&&c(b).append(Confluence.Templates.pageLoadingIndicator());d().show();e().spin({lines:12,length:8,width:4,radius:10,trail:60,speed:1.5,color:"#F0F0F0"})},hide:function(){e().stop();d().hide()},showUntilResolved:function(c,b){this.show();c.always(g.bind(this.hide,
this));b&&c.fail(function(){a.messages.error(".confluence-page-loading-errors",{body:b})})},showUntilDialogVisible:function(b,d){var f=this,e=d||"An error has occurred connecting to the server. Please try again.",g=c(".aui-dialog:visible"),h=c(".aui-dialog2:visible");!g.length&&!h.length&&f.show();b.always(f.hide).fail(function(){a.messages.error(".confluence-page-loading-errors",{body:e})});a.bind("show.dialog",function i(){a.unbind("show.dialog",i);f.hide()});if(null!=a.dialog2&&void 0!=a.dialog2)a.dialog2.on("show",
function j(){a.dialog2.off("show",j);f.hide()})},destroy:function(){b.remove(".confluence-page-loading-blanket")}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/page-loading-indicator","Confluence.PageLoadingIndicator");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = '/includes/soy/page-loading-indicator.soy' */
// This file was automatically generated from page-loading-indicator.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }


Confluence.Templates.pageLoadingIndicator = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="confluence-page-loading-errors"></div><div class="confluence-page-loading-blanket aui-blanket" aria-hidden="false"><div class="confluence-loading-indicator"></div></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:confluence-previews-jquery', location = '/js/confluence/preview-support.js' */
define("cp/confluence/preview-support",["ajs"],function(a){var d=function(){var e=b.SELECTOR_STRINGS.IMAGE+", "+b.SELECTOR_STRINGS.LINK_IMAGE+", "+b.SELECTOR_STRINGS.EXTERNAL_IMAGE;if(b.isPDFSupported()){e+=", "+b.SELECTOR_STRINGS.PDF+", "+b.SELECTOR_STRINGS.LINK_PDF}return e};var c=function(){return b.SELECTOR_STRINGS.IMAGE+", "+b.SELECTOR_STRINGS.EXTERNAL_IMAGE+", "+b.SELECTOR_STRINGS.FILE+", "+b.SELECTOR_STRINGS.LINK_FILE+", "+b.SELECTOR_STRINGS.ATTACHMENT_MACRO};var b={SELECTOR_STRINGS:{IMAGE:"img.confluence-embedded-image[data-linked-resource-id]",EXTERNAL_IMAGE:"img.confluence-embedded-image.confluence-external-resource",PDF:"a.confluence-embedded-file[data-nice-type='PDF Document']",LINK_IMAGE:"a[data-linked-resource-type='attachment'][data-nice-type='Image']",LINK_PDF:"a[data-linked-resource-type='attachment'][data-nice-type='PDF Document']",FILE:"a.confluence-embedded-file",LINK_FILE:"a[data-linked-resource-type='attachment']",FILE_OVERLAY:"span.confluence-embedded-file-wrapper .overlay",ATTACHMENT_MACRO:".plugin_attachments_container a.previewAttachmentLink"},VIEW_MODE:{FULL:"full",COMMENT:"comment",SIMPLE:"simple"},isPDFSupported:function(){return a.DarkFeatures.isEnabled("pdf-preview")},getFileSelectorString:function(){if(a.DarkFeatures.isEnabled("previews.trigger-all-file-types")){return c()}else{return d()}}};return b});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:confluence-previews-jquery', location = '/js/confluence/preview.js' */
define("cp/confluence/preview",["underscore","jquery","cp/confluence/preview-support","ajs","confluence/jsUri"],function(k,e,f,i,b){var j,l;e(document).ready(g);function g(){var o=e(f.getFileSelectorString());o.off("click.fb");e(document.body).off("click.filePreviews");e(document.body).on("click.filePreviews",f.getFileSelectorString(),n);e(document.body).on("click.filePreviews",f.SELECTOR_STRINGS.FILE_OVERLAY,h);e(window).on("popstate",function(){if(!l&&i.DarkFeatures.isEnabled("previews.sharing.pushstate")){a()}});a()}function n(o){if(!o.altKey&&!o.ctrlKey&&!o.metaKey&&!e(this).parent().closest("a, #draft-changes-dialog, #cp-annotations").length){o.preventDefault();m(this)}}function h(p){p.preventDefault();var o=e(p.target);var q=o.closest("span.confluence-embedded-file-wrapper");m(q.find(f.SELECTOR_STRINGS.IMAGE+","+f.SELECTOR_STRINGS.FILE),{autoShowAnnotationPanel:o.closest(".comment-count-overlay").length>0})}function m(r,q){if(!l){var t="confluence-previews-css";WRM.require("wr!com.atlassian.confluence.plugins.confluence-previews:"+t);var u=e.Deferred(),o=u.promise();var p=setInterval(function(){for(var w=0;w<document.styleSheets.length;w++){if(document.styleSheets[w].href&&document.styleSheets[w].href.indexOf(t)!==-1){s();return}if(document.styleSheets[w].imports&&document.all&&!window.atob){for(var v=0;v<document.styleSheets[w].imports.length;v++){if(document.styleSheets[w].imports[v].href.indexOf(t)!==-1){s();return}}}}},100);var s=function(){u.resolve();clearInterval(p)};l=e.when(WRM.require(["wr!com.atlassian.confluence.plugins.confluence-previews:confluence-previews-js","wrc!file-viewer"]),o);l.done(function(){j=require("cp/confluence/file-preview-loader");d(r,q)});Confluence.PageLoadingIndicator(e("body")).showUntilResolved(l,"We were unable to load the file previewer")}else{l.done(k.partial(d,r,q))}return l}var d=function(q,p){p=p||{};var o=e("#content");var r=e(q).closest(".comment,.cq-content,.ic-content");if(!p.viewMode){if(!(o.hasClass("page")||o.hasClass("blogpost"))){p.viewMode=f.VIEW_MODE.SIMPLE}else{if(r.length){p.viewMode=f.VIEW_MODE.COMMENT}}}if(p.viewMode===f.VIEW_MODE.COMMENT){j.showPreviewerForComment(q,r,p)}else{if(p.viewMode===f.VIEW_MODE.SIMPLE){j.showPreviewerForSingleFile(q,p)}else{p.viewMode=f.VIEW_MODE.FULL;j.showPreviewer(q,p)}}};function a(){if(c()){var q=new b(window.location.href);var p=window.history.pushState&&i.DarkFeatures.isEnabled("previews.sharing.pushstate");if(q.getQueryParamValue("preview")&&!p){var r="#!/preview"+q.getQueryParamValue("preview");var o=decodeURIComponent(q.deleteQueryParam("preview").setAnchor(r).toString());if(window.history.replaceState){window.history.replaceState({},"",o)}else{window.location=o}}else{if(q.anchor().indexOf("!/preview")===0&&p){var o;if(q.getQueryParamValue("preview")){o=q.setAnchor("")}else{o=q.addQueryParam("preview",q.anchor().substr("!/preview".length,q.anchor().length)).setAnchor("")}window.history.replaceState({},"",o)}}m()}}function c(){var o=new b(window.location.href);return i.DarkFeatures.isEnabled("previews.sharing")&&(o.getQueryParamValue("preview")||(o.anchor()&&o.anchor().indexOf("!/preview")===0))}return{loadConfluencePreviews:m}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:confluence-previews-jquery', location = '/js/confluence/jquery-previewer.js' */
require(["cp/confluence/preview","jquery"],function(b,a){a.fn.previewer=function(c){if(!a(this).length){return this}var d=a.extend({},c);return this.each(function(){var f=a(this);var e=f.closest("li");var g=d.src||f.attr("data-image-src")||f.attr("src");if(g){f.click(function(j){var i={src:g,type:d.type,thumbnail:g,title:d.title||e.attr("data-file-name")||g,rank:0,id:e.attr("data-attachment-id"),ownerId:e.attr("data-owner-id")};var h=b.loadConfluencePreviews([i],{source:d.from||"custom",viewMode:d.viewMode||"simple"});d.zindex&&h.done(function(){a("#cp-container").css({"z-index":d.zindex})})})}})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-mobile:mobile-switch-resources', location = 'js/mobile-switch.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-mobile:mobile-switch-resources', location = 'com/atlassian/confluence/plugins/mobile/soy/mobile-switch.soy' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/store-1.3.1.js' */
(function(){var l={},h=window,k=h.document,c="localStorage",n="globalStorage",d="__storejs__",g;l.disabled=false;l.set=function(e,o){};l.get=function(e){};l.remove=function(e){};l.clear=function(){};l.transact=function(e,o){var p=l.get(e);if(typeof p=="undefined"){p={}}o(p);l.set(e,p)};l.serialize=function(e){return JSON.stringify(e)};l.deserialize=function(e){if(typeof e!="string"){return undefined}return JSON.parse(e)};function b(){try{return(c in h&&h[c])}catch(e){return false}}function m(){try{return(n in h&&h[n]&&h[n][h.location.hostname])}catch(e){return false}}if(b()){g=h[c];l.set=function(e,o){if(o===undefined){return l.remove(e)}g.setItem(e,l.serialize(o))};l.get=function(e){return l.deserialize(g.getItem(e))};l.remove=function(e){g.removeItem(e)};l.clear=function(){g.clear()}}else{if(m()){g=h[n][h.location.hostname];l.set=function(e,o){if(o===undefined){return l.remove(e)}g[e]=l.serialize(o)};l.get=function(e){return l.deserialize(g[e]&&g[e].value)};l.remove=function(e){delete g[e]};l.clear=function(){for(var e in g){delete g[e]}}}else{if(k.documentElement.addBehavior){var j,f;try{f=new ActiveXObject("htmlfile");f.open();f.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></frame>');f.close();j=f.w.frames[0].document;g=j.createElement("div")}catch(i){g=k.createElement("div");j=k.body}function a(e){return function(){var p=Array.prototype.slice.call(arguments,0);p.unshift(g);j.appendChild(g);g.addBehavior("#default#userData");g.load(c);var o=e.apply(l,p);j.removeChild(g);return o}}l.set=a(function(p,e,o){if(o===undefined){return l.remove(e)}p.setAttribute(e,l.serialize(o));p.save(c)});l.get=a(function(o,e){return l.deserialize(o.getAttribute(e))});l.remove=a(function(o,e){o.removeAttribute(e);o.save(c)});l.clear=a(function(q){var o=q.XMLDocument.documentElement.attributes;q.load(c);for(var p=0,e;e=o[p];p++){q.removeAttribute(e.name)}q.save(c)})}}}try{l.set(d,d);if(l.get(d)!=d){l.disabled=true}l.remove(d)}catch(i){l.disabled=true}if(typeof module!="undefined"){module.exports=l}else{if(typeof define==="function"&&define.amd){define(l)}else{this.store=l}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/atlassian-analytics.js' */
(function(b){var m=AJS.$.ajax;var h="atlassian-analytics";var g=typeof AJS.contextPath=="function"?AJS.contextPath():typeof AJS.Confluence!="undefined"?AJS.Confluence.getContextPath():window.contextPath!=null?window.contextPath:"";var l=null;var i=null;var d=null;var n="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(u){var t=Math.random()*16|0,s=u=="x"?t:(t&3|8);return s.toString(16)});var p=function(){var s="unknown";if(document.body.id=="jira"){s="jira"}else{if(document.body.id=="com-atlassian-confluence"){s="confluence"}}i=h+"."+s;d=i+".lock"};var c=function(){if(store.get(d)){return false}store.set(d,n);return(store.get(d)===n)};var q=function(){store.set(d,null)};var f=function(){var t=[],v,w,s,u;if(AJS.EventQueue.length==0){return}t=store.get(i)||t;for(s=0,u=AJS.EventQueue.length;s<u;++s){w=AJS.EventQueue[s];if(w.name){v={name:w.name,properties:w.properties,time:w.time||0};t.push(v)}}AJS.EventQueue.length=0;store.set(i,t)};var e=function(){var t;if(!c()){return}f();t=store.get(i);if(t&&t.length){store.remove(i);q();if(k(t)){var u=new Date().getTime();for(var s=0;s<t.length;s++){if(t[s].time>0){t[s].timeDelta=t[s].time-u}else{t[s].timeDelta=s-t.length}delete t[s].time}l=m({type:"POST",url:g+"/rest/analytics/1.0/publish/bulk",data:JSON.stringify(t),contentType:"application/json",dataType:"json"});l.fail(function(){AJS.EventQueue.concat(t);f()})}}else{q()}};var k=function(u){for(var t=u.length-1;t>=0;t--){var w="";var v=u[t];var s=v.properties;if(typeof v.name==="undefined"){w="you must provide a name for the event."}else{if(typeof s!=="undefined"&&s!==null){if(s.constructor!==Object){w="properties must be an object with key value pairs."}else{a(s)}}}if(w!==""){AJS.log("WARN: Invalid analytics event detected and ignored, "+w+"\nEvent: "+JSON.stringify(v));u.splice(t,1)}}return u.length};var a=function(u){for(var t in u){if(u.hasOwnProperty(t)){var s=u[t];if(typeof s!=="undefined"&&s!==null&&s.toString){u[t]=s.toString()}else{u[t]=""}}}};var j=function(){if(l&&!(l.state()==="resolved"||l.state()==="rejected")){l.abort()}};AJS.EventQueue=AJS.EventQueue||[];var o=Array.prototype.push;AJS.EventQueue.push=function(s){s.time=new Date().getTime();o.call(AJS.EventQueue,s)};AJS.toInit(function(){p();setTimeout(e,500);setInterval(e,5000);r()});b(window).unload(function(){j();f()});AJS.Analytics={triggerPrivacyPolicySafeEvent:function(s,t){AJS.log("WARN: 'triggerPrivacyPolicySafeEvent' has been deprecated");AJS.EventQueue.push({name:s,properties:t})}};AJS.bind("analytics",function(s,t){AJS.EventQueue.push({name:t.name,properties:t.data})});AJS.bind("analyticsEvent",function(s,t){AJS.EventQueue.push({name:t.name,properties:t.data})});var r=function(){if(window.location.pathname.indexOf("/secure/admin/ViewApplicationProperties")>-1){AJS.$("[data-property-id='analytics-enabled']").remove()}else{if(window.location.pathname.indexOf("/secure/admin/EditApplicationProperties")>-1){var t=AJS.$(":contains(Enable Atlassian analytics)");if(t.size()>0){var s=t[t.size()-2];if(s){s.remove()}}}}}}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.analytics.analytics-client:policy-update', location = 'js/policy-update.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:application-header-administration-cog-resource', location = 'header/cog.js' */
var NavLinks=(function(a){a.ApplicationHeader=function(b){b.Cog=(function(){var c=function(){var d=AJS.$("#system-admin-menu-content");if(d.length>0){return d}var e=AJS.$("#admin-menu-link-content");if(e.length>0){return e}return AJS.$("#bamboo\\.global\\.header-admin\\.menu")};return{getDropdown:c}}());return b}(a.ApplicationHeader||{});return a}(NavLinks||{}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminshortcuts.soy' */
// This file was automatically generated from adminshortcuts.soy.
// Please don't edit this file by hand.

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.adminshortcuts == 'undefined') { navlinks.templates.adminshortcuts = {}; }


navlinks.templates.adminshortcuts.section = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param5 = new soy.StringBuilder('<ul class="aui-list-truncate">');
  var linkList7 = opt_data.links;
  var linkListLen7 = linkList7.length;
  for (var linkIndex7 = 0; linkIndex7 < linkListLen7; linkIndex7++) {
    var linkData7 = linkList7[linkIndex7];
    param5.append('<li><a href="', soy.$$escapeHtml(linkData7.link), '">', soy.$$escapeHtml(linkData7.label), '</a></li>');
  }
  param5.append('</ul>');
  aui.dropdown2.section({id: 'nl-remote-admin-section', label: "Other applications", content: param5.toString()}, output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminnavlinks.js' */
var NavLinks=(function(a){a.AdminShortcuts=(function(){var c=function(){return AJS.$.ajax({url:AJS.contextPath()+"/rest/menu/latest/admin",cache:false,dataType:"json"})};var b=function(){AJS.$("#nl-remote-admin-section").on("click","a",function(){NL.trackEvent("remoteAdminItemSelected",NL.getCurrentApplication(),$(this).attr("href"))})};return{render:function(){c().done(function(e){e=_.reject(e,function(f){return f.local===true});if(e.length){var d=navlinks.templates.adminshortcuts.section({links:e});a.ApplicationHeader.Cog.getDropdown().append(d);b()}})}}}());return a}(NavLinks||{}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts', location = 'adminshortcuts/adminshortcuts-cdn.js' */
AJS.toInit(function(){if(AJS.DarkFeatures&&AJS.DarkFeatures.isEnabled("rotp.admin.shortcuts")){NavLinks.AdminShortcuts.render()}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.soy' */
// This file was automatically generated from projectshortcuts.soy.
// Please don't edit this file by hand.

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.projectshortcuts == 'undefined') { navlinks.templates.projectshortcuts = {}; }


navlinks.templates.projectshortcuts.dialogContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.localShortcuts && opt_data.localShortcuts.length > 0) {
    navlinks.templates.projectshortcuts.dialogContentShortcuts({shortcuts: opt_data.localShortcuts, listClass: 'projectshortcut-links'}, output);
  }
  if (opt_data.remoteShortcuts != null) {
    if (opt_data.remoteShortcuts.length > 0) {
      output.append('<h2 class="projectshortcuts-heading">Related Links</h2>');
      navlinks.templates.projectshortcuts.dialogContentShortcuts(soy.$$augmentData(opt_data.remoteShortcuts, {shortcuts: opt_data.remoteShortcuts, listClass: 'projectshortcut-links'}), output);
    }
  } else {
    navlinks.templates.projectshortcuts.dialogLoading(null, output);
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.headingWrapper = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="project-dialog-header-wrapper"><div class="project-header"><img class="project-img" src="', soy.$$escapeHtml(opt_data.logoUrl), '"><h2 class="dialog-title">', soy.$$escapeHtml(opt_data.title), '</h2></div><div class="project-content-wrapper">', opt_data.contentHtml, '</div></div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.dialogContentShortcuts = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul', (opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '', '>');
  var shortcutList35 = opt_data.shortcuts;
  var shortcutListLen35 = shortcutList35.length;
  for (var shortcutIndex35 = 0; shortcutIndex35 < shortcutListLen35; shortcutIndex35++) {
    var shortcutData35 = shortcutList35[shortcutIndex35];
    output.append('<li', (shortcutIndex35 == shortcutListLen35 - 1) ? ' class="last"' : '', '>');
    navlinks.templates.projectshortcuts.dialogContentShortcut(shortcutData35, output);
    output.append('</li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.dialogContentShortcut = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(opt_data.link), '"', (opt_data.tooltip) ? ' title="' + soy.$$escapeHtml(opt_data.tooltip) + '"' : '', '>', soy.$$escapeHtml(opt_data.label), '</a>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.dialogLoading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="projectshortcuts-loading">', (opt_data != null && opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '', '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.js' */
(function(e,g){var i,k={},m="key",b="name",j="entity-type";function f(s){var n=e(this),o=n.data(m),q=n.data(b),p=n.data(j);if(typeof o==="undefined"){return}s.preventDefault();i=new AJS.Dialog({width:600,keypressListener:function(u){if(u.which==jQuery.ui.keyCode.ESCAPE){i.remove()}},id:"project-shortcuts-dialog"}).addCancel("Close",function(){i.remove()}).addPanel("",navlinks.templates.projectshortcuts.headingWrapper({title:q,logoUrl:h(),contentHtml:navlinks.templates.projectshortcuts.dialogLoading({text:"Retrieving links…"})})).show();c(i);if(!k[o]){k[o]={entity:{title:q},localShortcuts:null,remoteShortcuts:null};d(AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+o,{entityType:p}).done(t);d(AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+o,{entityType:p}).done(r).fail(function(){var u=i.getCurrentPanel().body.find(".project-content-wrapper");u.find(".projectshortcuts-loading").remove();AJS.messages.error(u,{body:"Could not retrieve remote project shortcuts",closeable:false});c(i)})}else{l(k[o])}function t(u){k[o].localShortcuts=u.shortcuts;l(k[o])}function r(u){k[o].remoteShortcuts=u.shortcuts;l(k[o])}}function h(){return e(".project-shortcut-dialog-trigger img").attr("src")}function l(n){if(n.localShortcuts){i.getCurrentPanel().html(navlinks.templates.projectshortcuts.headingWrapper({title:n.entity.title,logoUrl:h(),contentHtml:navlinks.templates.projectshortcuts.dialogContent(n)}));c(i)}}function a(p){var o=210;if(!p||p.length<=o){return p}var n=o;while(n>0&&p.charAt(n)!=" "){n--}if(n==0){n=o}p=p.substring(0,n);if(p.length>=n){p=p+"..."}return p}function c(n){var q=n.popup.element,p=q.find(".dialog-panel-body"),o=q.find(".dialog-components");p.height("auto");q.height(o.outerHeight()-1);e(".aui-shadow").remove()}function d(n,o){return e.ajax({url:n,cache:false,data:o,dataType:"json"})}e(document).on("click",".project-shortcut-dialog-trigger",f)}(jQuery,window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:atlassian-ui-popup-display-controller', location = 'popups/DisplayController.js' */
AJS.Popups=AJS.Popups||{};AJS.Popups.DisplayController=function(){var c=[];var a=false;var b=false;AJS.toInit(function(){setTimeout(function(){AJS.Popups.DisplayController.render()},0)});return{request:function(d){c.push(d);if(a&&b===false){this.render()}},render:function(){c.sort(function(e,d){return e.weight-d.weight});a=true;if(c.length!==0){b=true;c[0].show()}}}}();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.extra.jira:common-resources', location = 'templates/extra/jira/common.js' */
AJS.JiraIssues={Remote:{}};var appLinksI18n={entries:{}};jQuery(document).ready(function(){AJS.JiraIssues=jQuery.extend(AJS.JiraIssues||{},{bindOAuthLink:function(c,f){var e={onSuccess:function(){f()},onFailure:function(){}};var d=c.attr("href");c.click(function(g){AppLinks.authenticateRemoteCredentials(d,e.onSuccess,e.onFailure);g.preventDefault()})},getOAuthRealm:function(f){var d=f.getResponseHeader("WWW-Authenticate")||"";var c=/OAuth realm\=\"([^\"]+)\"/;var e=c.exec(d);if(e){return e[1]}else{return null}}});jQuery("a.static-oauth-init").each(function(){AJS.JiraIssues.bindOAuthLink(jQuery(this),function(){window.location.reload()})});jQuery("a.anonymous-init").each(function(f,e){var c=encodeURIComponent(window.location.pathname.replace(Confluence.getContextPath(),""));var d=Confluence.getContextPath()+"/login.action?os_destination="+c;AJS.$(e).attr("href",d)});var a=function(j){var e=AJS.JiraIssues.Remote[j];var h="";for(var g=0;g<e.length;g++){h=h+(e[g].key+(g<e.length-1?",":""))}var d=function(l){var i="issuekey in ("+l+")";var m="/sr/jira.issueviews:searchrequest-xml/temp/SearchRequest.xml?jqlQuery="+encodeURIComponent(i)+"&returnMax=true";var k=contextPath+"/plugins/servlet/issue-retriever?appId="+j+"&url="+encodeURIComponent(m)+"&columns=summary&columns=type&columns=resolution&columns=status";return k};var f=function(k){var i=AJS.$("item",k);i.each(function(){var u=AJS.$("link",this).text();var v=AJS.$("key",this).text();var r=AJS.$("summary",this).text();var s=AJS.$("type",this);var m=AJS.$("resolution",this);var w=m.attr("id")!="-1";var o=AJS.$("status",this);var n=AJS.$(".unknown-jira-issue."+v);for(var p=0;p<n.length;p++){var t=AJS.$("<a style=\"background-image: url('"+s.attr("iconUrl")+'\')" href="'+u+'"></a>');t.text(v);var l=AJS.$('<span class="jira-status"></span>');l.text(o.text().toUpperCase());var q=AJS.$('<span class="jira-issue'+(w?" resolved":"")+'" ></span>');q.append(t);q.append(document.createTextNode(" - "+r+" - "));q.append(l);AJS.$(n[p]).replaceWith(q)}})};var c=d(h);AJS.$.ajax({url:c,success:f,error:function(l){if(l.status==401){var k=AJS.JiraIssues.getOAuthRealm(l);if(k){var i={};AJS.$(e).each(function(){if(!i[this.key]){i[this.key]=true;var m=AJS.$('<span class="oauth-msg"> - <a class="oauth-init" href="'+k+'">'+"Authenticate"+"</a> "+"to see issue details"+"</span>");AJS.$(".unknown-jira-issue."+this.key).addClass("single-issue-oauth").append(m)}});AJS.JiraIssues.bindOAuthLink(AJS.$(".single-issue-oauth a.oauth-init"),function(){window.location.reload()})}}else{if(l.status==400&&e.length>1){AJS.$(e).each(function(){var m=this.key;var n=d(m);AJS.$.ajax({url:n,success:f,error:function(p){var o=AJS.$(".unknown-jira-issue."+m);o.removeClass("single-issue-oauth");AJS.$(".oauth-msg",o).remove();o.addClass("jira-error")}})})}}}})};AJS.$(".unknown-jira-issue").each(function(e,f){var d=AJS.$(f);var g=d.attr("data-app-link");var c=d.attr("data-key");AJS.JiraIssues.Remote[g]=AJS.JiraIssues.Remote[g]||[];AJS.JiraIssues.Remote[g].push({key:c})});for(var b in AJS.JiraIssues.Remote){a(b)}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.extra.jira:refresh-resources', location = '/jira/refresh.js' */
(function(b){var c={REFRESH_STATE_STARTED:1,REFRESH_STATE_DONE:2,REFRESH_STATE_FAILED:3,refreshs:[],sortables:[],init:function(){a.getAll().each(function(){c.registerRefresh(this.getRefresh())});b.each(this.refreshs,function(e,f){var g=a.get(f.id);g.getRefreshButton().bind("click",f,c.handleRefreshClick);g.getRefreshLink().bind("click",f,c.handleRefreshClick)});d.getAll().each(function(){c.registerSort(this.getSortable())});b.each(this.sortables,function(f,e){var g=d.get(e.id);g.getHeadersTable().bind("click",e,c.onHeaderClick)})},onHeaderClick:function(j){refeshId=j.data.id;var h="ASC";if(b(this).hasClass("tablesorter-headerAsc")){h="DESC"}var f=b(this).find(".jim-table-header-content").text();var m=b("#refresh-wiki-"+refeshId);var i=m.data("wikimarkup");var g=m.data("pageid");var l=b("#refresh-"+refeshId);var k=new c.Refresh(refeshId,i,g,l.html());var n=a.get(refeshId);n.updateRefreshVisibility(c.REFRESH_STATE_STARTED);c.processRefresh(k,f,h)},replaceRefresh:function(g,e){var f=a.get(g);f.updateRefreshVisibility(c.REFRESH_STATE_DONE);b.each(this.refreshs,function(l,m){if(m.id===g){c.refreshs.splice(l,1);var n=a.get(e);var j=n.getRefresh();c.registerRefresh(j);c.sortables.splice(l,1);var h=d.get(e);var k=h.getSortable();c.registerSort(k);n.getRefreshButton().bind("click",j,c.handleRefreshClick);n.getRefreshLink().bind("click",j,c.handleRefreshClick);h.getHeadersTable().bind("click",k,c.onHeaderClick)}})},registerRefresh:function(e){if(!(e instanceof c.Refresh)){throw "Refresh object must be an instance of RefreshMacro.Refresh"}c.refreshs.push(e)},registerSort:function(e){if(!(e instanceof c.Sortable)){throw "Refresh object must be an instance of RefreshMacro.Refresh"}c.sortables.push(e)},handleRefreshClick:function(h){var f=h.data;var g=a.get(f.id);g.getMacroPanel().html(f.loadingMsg);g.updateRefreshVisibility(c.REFRESH_STATE_STARTED);c.processRefresh(f)},processRefresh:function(g,f,e){var h={};if(arguments.length==1){h={pageId:g.pageId,wikiMarkup:g.wiki}}else{if(arguments.length==3){h={pageId:g.pageId,wikiMarkup:g.wiki,columnName:f,order:e}}}AJS.$.ajax({type:"POST",dataType:"html",url:Confluence.getContextPath()+"/plugins/servlet/jiraRefreshRenderer",data:h,success:function(j){var i=b(j).attr("id");if(i){i=i.replace("refresh-module-","");a.get(g.id).getContentModule().replaceWith(j);new c.CallbackSupport(g).callback(i)}else{new c.CallbackSupport(g).errorHandler(j)}},error:function(j,k,i){new c.CallbackSupport(g).errorHandler(i)}})}};c.Refresh=function(f,e){this.id=f;this.wiki=e;this.pageId=arguments.length>2?arguments[2]:null;this.loadingMsg=arguments.length>3?arguments[3]:null};c.CallbackSupport=function(e){this.refresh=e;this.module=b("#refresh-module-"+e.id)};c.CallbackSupport.prototype={errorHandler:function(f){var g=a.get(this.refresh.id);var e="Refresh didn\'t work. Try again or click an issue to see it in JIRA.";g.getErrorMessagePanel().html(e);g.updateRefreshVisibility(c.REFRESH_STATE_FAILED)},callback:function(e){c.replaceRefresh(this.refresh.id,e)}};var a=function(){if(arguments.length==1){this.id=arguments[0]}};var d=function(){if(arguments.length==1){this.id=arguments[0]}};a.prototype.getRefresh=function(){return new c.Refresh(this.id,this.getWikiMarkup(),this.getPageId(),this.getMacroPanel().html())};d.prototype.getSortable=function(){return new c.Sortable(this.id,b("#refresh-page-id-"+this.id).val(),b("#refresh-"+this.id).html())};a.get=function(f){var e=b("#refresh-"+f);if(!e){return null}return new a(f)};d.get=function(f){var e=b("#refresh-"+f);if(!e){return null}return new d(f)};c.Sortable=function(g,e,f){this.id=g;this.pageId=e;this.loadingMsg=f};d.getAll=function(){return b("div.refresh-macro").map(function(){var e=this.id.replace("refresh-","");return d.get(e)})};a.getAll=function(){return b("div.refresh-macro").map(function(){var e=this.id.replace("refresh-","");return a.get(e)})};a.prototype.getErrorMessagePanel=function(){return b("#error-message-"+this.id)};a.prototype.removeDarkLayer=function(){b("#jim-dark-layout-"+this.id).remove()};a.prototype.displayDarkLayer=function(){var f=b("#refresh-module-"+this.id);var e=f.position();b("<div />",{id:"jim-dark-layout-"+this.id,"class":"jim-sortable-dark-layout",css:{top:e.top+"px",left:e.left+"px",width:f.width()+"px",height:f.height()+"px"}}).appendTo(f.parent())};a.prototype.getMacroPanel=function(){return b("#refresh-"+this.id)};d.prototype.getMacroPanel=function(){return b("#refresh-"+this.id).val()};a.prototype.getContentModule=function(){return b("#refresh-module-"+this.id)};a.prototype.getPageId=function(){return b("#refresh-wiki-"+this.id).data("pageid")};d.prototype.getPageId=function(){return b("#refresh-wiki-"+this.id).data("pageid")};a.prototype.getWikiMarkup=function(){return b("#refresh-wiki-"+this.id).data("wikimarkup")};a.prototype.getRefreshButton=function(){return b("#refresh-issues-button-"+this.id)};d.prototype.getHeadersTable=function(){return b("#jira-issues-"+this.id+" .jira-tablesorter-header")};a.prototype.getRefreshLink=function(){return b("#refresh-issues-link-"+this.id)};a.prototype.getJiraIssuesArea=function(){return b("#jira-issues-"+this.id)};a.prototype.getIssuesCountArea=function(){return b("#total-issues-count-"+this.id)};a.prototype.updateRefreshVisibility=function(e){if(e===c.REFRESH_STATE_STARTED){this.displayDarkLayer();this.getErrorMessagePanel().addClass("hidden")}else{if(e===c.REFRESH_STATE_FAILED){this.getRefreshButton().show();this.getRefreshLink().show();this.removeDarkLayer();this.getErrorMessagePanel().removeClass("hidden")}else{if(e===c.REFRESH_STATE_DONE){this.removeDarkLayer()}}}};b(function(){c.init()})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.extra.jira:web-resources', location = 'templates/extra/jira/jiraIssues.js' */
jQuery(document).ready(function(){var a=jQuery.extend(window.JiraIssues||{},{ADG_ENABLED:AJS.Meta.getNumber("build-number")>=4000,ADG_FONT_SIZE_OVER_FLEXIGRID_FONT_SIZE_RATIO:14/11,fixMenusShowingUnderWidgetInIE:function(){if(jQuery.browser.msie){jQuery("ul.ajs-menu-bar li.ajs-menu-item").each(function(){jQuery(this).hover(function(){jQuery("div.ajs-drop-down",jQuery(this)).parents().each(function(){var c=jQuery(this);var b=c.css("position");if(b&&b!="auto"){c.addClass("ajs-menu-bar-z-index-fix-for-ie")}})},function(){jQuery("div.ajs-drop-down",jQuery(this)).parents().removeClass("ajs-menu-bar-z-index-fix-for-ie")})})}},onSuccessFunction:function(d){if(!jQuery("fieldset input[name='height']",d).length){var b=jQuery(".bDiv table[id^='jiraissues_table']",d)[0];var e=b.grid;var c=b.clientHeight+jQuery(".hDiv",d)[0].clientHeight;jQuery(".bDiv",d).css("height",c+"px");e.options.height=c;e.fixHeight(c)}},onErrorFunction:function(h,c,b,n,f){var o=jQuery("#"+c);var g=b+": ";if(n.status=="200"){g+=f}else{g+=n.responseText}var i=n.getResponseHeader("WWW-Authenticate")||"";if(n.status=="401"&&i.indexOf("OAuth")!=-1){var m=/OAuth realm\=\"([^\"]+)\"/;var e=m.exec(i);if(e){o.empty();a.bigMessageFunction(c,'<a class="oauth-init" href="'+e[1]+'">'+"Authenticate"+"</a> "+"to retrieve your issues"+"</span>");jQuery(".bmDiv",h).css({"z-index":2});var j={onSuccess:function(){window.location.reload()},onFailure:function(){}};var l=jQuery(".oauth-init",o.parent());var d=l.attr("href");l.click(function(p){AppLinks.authenticateRemoteCredentials(d,j.onSuccess,j.onFailure);p.preventDefault()});AJS.$(".gBlock").remove()}}else{if(n.status=="400"){a.bigMessageFunction(c,"The JIRA server was not able to process the search. This may indicate a problem with the syntax of this macro. Alternatively, if this table is requesting specific issue keys, you may not have permission to view one of these issues. ")}else{var k=jQuery("iframe.jiraissues_errorMsgSandbox",h);k.load(function(){var r=this.contentWindow||this.contentDocument;var q=jQuery((r.document?r.document:r).body);jQuery("a",q).each(function(){this.target="_top"});jQuery(".pPageStat",h).empty().text(q.text());var p=jQuery("div.bmDiv",h)[0];k.removeClass("hidden");k.css({height:p.clientHeight+"px",width:p.clientWidth+"px"})});k[0].src=jQuery("fieldset input[name='retrieverUrlHtml']",h).val();a.bigMessageFunction(c,k)}}jQuery(h).find(".pReload").removeClass("loading");o[0].grid.loading=false;jQuery(h).find(".pButton").each(function(){jQuery(this).removeClass("pBtnOver");jQuery(this).css({cursor:"default",opacity:"0.3"})});jQuery(h).find("span.pcontrol input").attr("readonly","true")},onReloadFunction:function(b,d,c){jQuery(".bmDiv",d).remove();jQuery(".bmDistance",d).remove();c.onSubmit=function(){a.reloadOnSubmitFunction(b,c);return true}},reloadOnSubmitFunction:function(b,c){c.params=[{name:"useCache",value:false}];c.onSubmit=function(){a.onSubmitFunction(b,c);return true}},onSubmitFunction:function(b,c){c.params=[{name:"useCache",value:b}]},showTrustWarningsFunction:function(d,c){var b=jQuery(d).children(".trusted_warnings");if(c.trustedMessage){b.find("td:last").html(c.trustedMessage);b.css("display","block")}else{b.css("display","none")}},preProcessFunction:function(e,b,d,c,f){if(d){a.showTrustWarningsFunction(e,c)}if(c.total==0){jQuery(".pPageStat",e).html(f);a.bigMessageFunction(b,f);jQuery(".pReload",e).removeClass("loading");return}},bigMessageFunction:function(e,f){var d=jQuery("<div></div>");var b=jQuery("<div></div>");d.addClass("bmDistance");b.addClass("bmDiv");if(typeof f=="string"){b.html("<p><strong>"+f+"</strong></p>")}else{f.appendTo(b)}var c=jQuery("#"+e);c.after(b).after(d)},getParamsFrom:function(c){var b={};c.children("input").each(function(){b[jQuery(this).attr("name")]=jQuery(this).attr("value")});return b},initializeColumnWidth:function(f,p){var d={},m=function(i){return a.ADG_ENABLED?Math.round(i*a.ADG_FONT_SIZE_OVER_FLEXIGRID_FONT_SIZE_RATIO):i};if(!(p&&p.length)){return d}var h=37,n=11,k=f.width()-(h+(p.length*n)),j=false,q=false,o=0,c=m(140);for(var l=0,e=p.length;l<e;l++){var g=p[l].name;switch(g){case"summary":j=true;o++;break;case"description":q=true;o++;break;case"type":o++;d[g]=30;k-=30;break;case"priority":o++;d[g]=50;k-=50;break;case"status":o++;d[g]=m(100);k-=m(100);break;case"key":o++;d[g]=m(90);k-=m(90);break;case"comments":case"attachments":case"version":case"component":case"resolution":o++;d[g]=m(80);k-=m(80);break;default:d[g]=c}}if(j||q){k-=(c*(p.length-o));var b=250;if(j&&q){d.summary=Math.max(k/2,b);d.description=Math.max(k/2,b)}else{if(j){d.summary=Math.max(k,b)}else{d.description=Math.max(k,b)}}}else{if(!j&&!q&&(p.length>o)){c=k/(p.length-o);for(l=0;l<e;l++){if(!{resolution:true,key:true,type:true,priority:true,status:true}[p[l]]){d[p[l]]=c}}}}return d},fixBreakIconInOldConf:function(){var b=a.compareVersion(AJS.version,"5.4.4")<=0;if(!b){return}$(".jim-error-message").each(function(){var d=$(this);var c=d;if(d.hasClass("jim-error-message-table")){c=d.find(".aui-message")}c.addClass("warning").prepend('<span class="aui-icon icon-warning"></span>')})},compareVersion:function(h,g){if(typeof h!=="string"||typeof g!=="string"){return false}var e=h.split(".");var d=g.split(".");var f=0;var c=Math.max(e.length,d.length);for(;f<c;f++){if((e[f]&&!d[f]&&parseInt(e[f])>0)||(parseInt(e[f])>parseInt(d[f]))){return 1}else{if((d[f]&&!e[f]&&parseInt(d[f])>0)||(parseInt(e[f])<parseInt(d[f]))){return -1}}}return 0}});a.fixMenusShowingUnderWidgetInIE();a.fixBreakIconInOldConf();jQuery(".jiraissues_table").each(function(f,j){var k=jQuery(j),h=k.children("fieldset"),e=a.getParamsFrom(h),c="jiraissues_table_"+f;k.append('<table id="'+c+'" style="display:none"></table>');k.css("width",e.width);var d=[];h.children(".columns").each(function(l){var m=jQuery(this).hasClass("nowrap");d[l]={display:this.name,name:this.value,nowrap:m,sortable:true,align:"left"}});var b=a.initializeColumnWidth(k,d);jQuery.each(d,function(l,m){m.width=b[m.name]});var g=jQuery("<div></div>");jQuery("<a></a>").attr({rel:"nofollow",href:e.clickableUrl}).text(e.title).appendTo(g);jQuery("#"+c).flexigrid({url:e.retrieverUrlHtml,method:"GET",dataType:"json",colModel:d,sortname:e.sortField,sortorder:e.sortOrder,usepager:true,title:g.html(),page:parseInt(e.requestedPage,10),useRp:false,rp:parseInt(e.resultsPerPage,10),showTableToggleBtn:true,height:(function(){return e.height?parseInt(e.height,10):480})(),onSuccess:function(){a.onSuccessFunction(j)},onSubmit:function(){a.onSubmitFunction(e.useCache,this);return true},preProcess:function(i){a.preProcessFunction(j,c,e.showTrustWarnings,i,e.nomsg);return i},onError:function(m,l,i){a.onErrorFunction(j,c,e.jiraissuesError,m,l,i)},onReload:function(){a.onReloadFunction(e.useCache,j,this);return true},errormsg:e.errormsg,pagestat:e.pagestat,procmsg:e.procmsg,nomsg:e.nomsg})});jQuery(".jiraissues_count").each(function(b,d){var c=jQuery(d);jQuery.ajax({cache:false,type:"GET",url:c.find(".url").text(),data:{useCache:c.find(".use-cache").text(),rp:c.find(".rp").text(),showCount:"true"},success:function(f){var e=c.find(".result");if(f>1){e.text(AJS.format("{0} issues",f))}else{e.text(AJS.format("{0} issue",f))}e.removeClass("hidden");jQuery(".calculating, .error, .data",c).remove()},error:function(h){var f=jQuery(".error",c).removeClass("hidden"),g=h.getResponseHeader("WWW-Authenticate")||"",j=false;if(h.status===401&&g.indexOf("OAuth")!=-1){var e=/OAuth realm\=\"([^\"]+)\"/,i=e.exec(g);if(i){f.empty().append(AJS.$("<a/>",{href:i[1],"class":"oauth-init"}).text("Authenticate").click(function(){AppLinks.authenticateRemoteCredentials(i[1],function(){window.location.reload()},function(){});return false})).append(AJS.$("<span/>",{text:" "+"to retrieve your issues"}));j=true}}if(!j){f.text(AJS.format(f.text(),h.status))}jQuery(".calculating, .result, .data",c).remove()}})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-ap-core', location = '/js/core/connect-host-amd.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-remote-condition', location = 'js/condition/remote.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-iframe-host-js', location = '/js/iframe/host/main.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-iframe-host-js', location = '/js/iframe/host/content-resolver.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-ap-extensions', location = '/js/core/connect-host-cookie.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-ap-extensions', location = '/js/core/connect-host-env.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-ap-extensions', location = '/js/core/connect-host-messages.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-ap-extensions', location = '/js/core/connect-host-request.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-ap-extensions', location = '/js/core/connect-host-history.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-ap-extensions', location = '/js/core/connect-host-dialog.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-ap-extensions', location = '/js/core/connect-host-inline-dialog.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-ap-user', location = '/js/iframe/host/user.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro', location = 'js/confluence/macro/editor.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-macro', location = 'js/confluence/macro/editor-rpc.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'templates/recently.soy' */
// This file was automatically generated from recently.soy.
// Please don't edit this file by hand.

if (typeof RY == 'undefined') { var RY = {}; }
if (typeof RY.Templates == 'undefined') { RY.Templates = {}; }


RY.Templates.body = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="recently-viewed" class="aui-group"><div class="aui-item"><div class="top"><div class="filter"><form class="aui"><input class="filter-input text" type="text" placeholder="', soy.$$escapeHtmlAttribute("Filter"), '"></form></div></div><div class="pages"></div></div></div>');
  return opt_sb ? '' : output.toString();
};


RY.Templates.pageCollection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="groups"></div><div class="empty"></div>');
  return opt_sb ? '' : output.toString();
};


RY.Templates.pageGroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h3>', soy.$$escapeHtml(opt_data.title), '</h3><ul/>');
  return opt_sb ? '' : output.toString();
};


RY.Templates.pageItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="page-icon"><a href=', soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)), ' class="icon icon-', soy.$$escapeHtmlAttribute(opt_data.type), '"></a></div><div class="page-title"><a class="ellipsis" href=', soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)), '>', soy.$$escapeHtml(opt_data.title), ' - ', soy.$$escapeHtml(opt_data.space), '</a></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/util.js' */
var RY=RY||{};(function(){var b=new Date();var c=new Date(b).getTime();var a=new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime();var d=new Date(b.getFullYear(),b.getMonth(),b.getDate()-1).getTime();RY.util=RY.Util={analytics:{trackDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-dialog-open"})},trackPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-page-open"})}},quote:function(e){return(e).replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},diffInDays:function(g,f){var e=1000*60*60*24;return Math.floor((g-f)/e)},daysSince:function(e){if(e>=a){return 0}else{if(e>=d){return 1}else{return RY.util.diffInDays(c,e)}}},wait:function(h,j,f){var i,k,e;var g=function(){k=setTimeout(function(){h.apply(f,e)},j)};return function(){e=arguments;var l=new Date();if(i&&l-i<j){clearTimeout(k)}g();i=l}}}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-storage.js' */
var RY=RY||{};RY.RecentPageStorage=function(h){var f="com.atlassian.confluence.plugins.recently.viewed.pages.v1";var d=100;var c={};var b=function(){var i=function(k,l){if(k==="lastSeen"&&_.isString(l)){if(AJS.$.browser.msie){l=l.replace(/\-/g,"/");l=l.replace(/T.*$/,"")}return new Date(l).getTime()}else{return l}};try{c=JSON.parse(h.getItem(f),i)||{}}catch(j){c={}}return c};var g=function(){var i=_.values(c);var k=i.length-d;if(k>0){var j=_.sortBy(i,function(l){return l.lastSeen});_.times(k,function(){var l=j.shift();delete c[l.id]})}};var e=function(){g();try{h.setItem(f,JSON.stringify(c))}catch(i){}};this.addCurrentPage=function(i){if(!(i.id&&i.title)){return}b();a(i);e()};var a=function(i){var j=c[i.id];if(!j){c[i.id]=j={}}j=_.extend(j,i);j.lastSeen=new Date().getTime();j.count=j.count+1||1};this.getPages=function(){return _.values(b())}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/filter.js' */
var RY=RY||{};RY.FilterView=Backbone.View.extend({className:"filter",events:{"input .filter-input":"onInput","keyup .filter-input":"onInput","keydown .filter-input":"onKeydown"},initialize:function(){_.bindAll(this,"render","onInput","onKeydown","search");this.navigationEvents=this.options.navigationEvents;this.onInput=RY.util.wait(this.onInput,100,this)},render:function(){this.$input=this.$(".filter-input");return this},onInput:function(a){if(a&&_.contains([37,38,39,40],a.which)){return}this.search()},onKeydown:function(a){switch(a.which){case 13:this.navigationEvents.trigger("select");a.preventDefault();a.stopPropagation();break;case 38:this.navigationEvents.trigger("previous");a.preventDefault();break;case 40:this.navigationEvents.trigger("next");a.preventDefault();break}},search:function(){var a=this.$input.val();this.collection.search(a)}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-model.js' */
var RY=RY||{};(function(){var a;if(typeof ConfluenceMobile!="undefined"){a=ConfluenceMobile.AppData.get("confluence-context-path")}else{a=AJS.contextPath()}RY.Page=Backbone.Model.extend({href:function(){return a+this.get("url")},daysSinceLastSeen:function(){return RY.util.daysSince(this.get("lastSeen"))}});RY.PageCollection=Backbone.Collection.extend({model:RY.Page,url:a+"/rest/recentlyviewed/1.0/recent",search:function(c){var b;if(this._queryLength(c)===0){b=this.models}else{var d=c.match(/[^\s-]+/g);b=this.filter(function(g){var h=g.get("title");var f=g.get("space");var e=(h+f).toLowerCase();return _.all(d,function(i){return e.indexOf(i.toLowerCase())!==-1})})}this.trigger("filter",b,c);return b},_queryLength:function(b){if(!String.prototype.trim){return AJS.$.trim(b).length}return b.trim().length},comparator:function(b){return -(b.get("lastSeen"))}})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page.js' */
var RY=RY||{};RY.PageView=Backbone.View.extend({tagName:"li",className:"ry-page",template:RY.Templates.pageItem,initialize:function(){_.bindAll(this,"hide","show","render")},hide:function(){this.$el.hide().removeClass("shown")},show:function(){this.$el.show().addClass("shown")},render:function(){var a=this.model.toJSON();a.href=this.model.href();this.$el.html(this.template(a));return this}});RY.PageGroupView=Backbone.View.extend({className:"group",template:RY.Templates.pageGroup,initialize:function(){_.bindAll(this,"hide","hideAll","show","showBorder","showPages","add","render");this.title=this.options.title;this.modelViews={}},hide:function(){this.$el.hide()},hideAll:function(){this.$el.removeClass("border").hide();_.invoke(_.values(this.modelViews),"hide")},show:function(){this.$el.show()},showBorder:function(){this.$el.addClass("border")},showPages:function(a){var c=this;var b=false;_.each(a,function(e){var d=c.modelViews[e.cid];if(d){b=true;d.show()}});if(b){this.show()}return b},add:function(b){var a=new RY.PageView({model:b});this.modelViews[b.cid]=a;this.$list.append(a.render().el)},render:function(){this.$el.html(this.template({title:this.title}));this.$list=this.$("ul");return this}});RY.PageNavigator=function(a,e,c){var g=null;function f(){return a.find("li.shown")}function b(i){pageItems=f();var h=pageItems.index(pageItems.filter(".highlight"));if(g){g.removeClass("highlight")}i+=h;if(i<0){i=pageItems.length-1}if(i>=pageItems.length){i=0}g=pageItems.eq(i);g.addClass("highlight")}function d(){if(!g.length){return}var k=e;var l=k.children();var j=k.height();var i=g.outerHeight(true);var h=g.position().top;if(h<0){if(f().index(g)===0){k.scrollTop(0);return}k.scrollTop(g.offset().top-l.offset().top)}else{if(h>j){k.scrollTop(g.offset().top-l.offset().top-j+i)}}}c.on("select",function(){if(g&&g.is(":visible")){RY.util.analytics.trackPageOpen();var h=g.find(".page-title a").attr("href");window.location=h}},this);c.on("previous",function(){b(-1);d()},this);c.on("next",function(){b(1);d()},this)};RY.PageCollectionView=Backbone.View.extend({template:RY.Templates.pageCollection,events:{"click .page-title a":RY.util.analytics.trackPageOpen},initialize:function(){_.bindAll(this,"checkEmpty","filter","_groupForPage","addOne","showEmptyMessage","clearEmptyMessage","addAll","render");this.modelViews={};this.collection.on("reset",this.addAll,this);this.collection.on("add",this.addOne,this);this.collection.on("filter",this.filter,this)},checkEmpty:function(a,e){var f=this.collection.isEmpty();var b=a.length===0;if(f||b){var c;if(f){c="Sorry mate, looks like you haven\'t visited any pages yet."}else{var d=AJS.contextPath()+"/dosearchsite.action?queryString="+encodeURIComponent(e);c="We didn\'t find any matching pages in your history."+" "+AJS.format("\u003ca href=\"{0}\"\u003eClick here\u003c/a\u003e to search for this term instead.",d)}this.showEmptyMessage(c)}else{this.clearEmptyMessage()}},filter:function(b,d){d=d||"";this.checkEmpty(b,d);var a=[this.$today,this.$yesterday,this.$older];_.invoke(a,"hideAll");var c=[];_.each(a,function(f){var e=f.showPages(b);if(e){c.push(f)}});if(c.length>1){c.pop();_.invoke(c,"showBorder")}},_groupForPage:function(a){var b=a.daysSinceLastSeen();if(b===0){return this.$today}else{if(b===1){return this.$yesterday}else{return this.$older}}},addOne:function(a){var b=this._groupForPage(a);b.add(a)},showEmptyMessage:function(a){this.$(".empty").html(AJS.$("<p>").html(a))},clearEmptyMessage:function(){this.$(".empty").html("")},addAll:function(){this.collection.each(this.addOne)},render:function(){this.$el.html(this.template());this.$today=new RY.PageGroupView({title:"Today"});this.$yesterday=new RY.PageGroupView({title:"Yesterday"});this.$older=new RY.PageGroupView({title:"Older"});var a=this.$(".groups");a.append(this.$today.render().el);a.append(this.$yesterday.render().el);a.append(this.$older.render().el);_.invoke([this.$today,this.$yesterday,this.$older],"hideAll");return this}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/quicknav/util.js' */
var RYQ=RYQ||{};(function(){RYQ.util={analytics:{trackQuickNavOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-open"})},trackQuickNavPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-click-page"})},trackQuickNavRecentlyDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-click-more-recent"})}}}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/quicknav/quicknav.js' */
var RYQ=RYQ||{};RYQ.QuickNavEntry=Backbone.Model.extend({classNameByType:{blogpost:"content-type-blogpost",page:"content-type-page"},parse:function(a){return{className:this.classNameByType[a.type],name:a.title,href:AJS.contextPath()+a.url,id:a.id,spaceName:a.space,lastSeen:a.lastSeen}}},{escape:function(b){var a=_.map(b,_.clone);_.each(a,function(c){c.name=_.escape(c.name);c.spaceName=_.escape(c.spaceName)});return a}});RYQ.QuickNavEntryCollection=Backbone.Collection.extend({model:RYQ.QuickNavEntry,url:AJS.contextPath()+"/rest/recentlyviewed/1.0/recent?limit=8",search:function(b){var a;if(AJS.$.trim(b).length===0){a=this.models}else{var c=b.match(/[^\s-]+/g);a=this.filter(function(e){var f=e.get("name");var d=f.toLowerCase();return _.all(c,function(g){return d.indexOf(g.toLowerCase())!==-1})})}this.trigger("filter",a);return a},comparator:function(a){return -(a.get("lastSeen"))}});(function(a){RYQ.QuickNav=Backbone.View.extend({initialize:function(){this.moreLink={className:"recently-viewed",href:"#",name:"More recently viewed pages..."};this.$input=a("#quick-search-query");this.makeDropdown();this.addShowHideHandlers();this.getHistory=_.once(this._getHistory);_.bindAll(this,"makeDropdown","addSearchResultBoostingHandler","_getHistory","render","addShowHideHandlers","_getItemsToShow","showQuickResults","onQuickSearch")},makeDropdown:function(){var c=function(d){a("a",d).each(function(){var g=a(this);var e=g.find("span");var f=AJS.dropDown.getAdditionalPropertyValue(e,"spaceName");if(f&&!g.is(".content-type-spacedesc")){g.after(g.clone().attr("class","space-name").html(f));g.parent().addClass("with-space-name")}})};var b=this;this.$dropdown=AJS.inputDrivenDropdown({dropdownPlacement:function(d){b.$input.closest("form").find(".quick-nav-drop-down").append(d)},dropdownPostprocess:function(d){c(d)},ajsDropDownOptions:{className:"recently-viewed-dropdown"}})},addSearchResultBoostingHandler:function(){var b=this;a(window).on("quicksearch.ajax-success",function(g,f){var d=f.url.match("/json/contentnamesearch.action");var c=f.url.match(/rest\/quicknav\/\d\/search/);if(d||c){b.onQuickSearch(g,f)}})},_getHistory:function(){return this.collection.fetch().done(this.addSearchResultBoostingHandler)},render:function(){var b=this.getHistory();b.done(_.bind(function(){if(AJS.dropDown.current==null&&this.collection.length!==0&&this.$input.val().length===0){this.showQuickResults()}},this));var c=this.$input;c.trigger("quick-search-loading-start");b.always(function(){c.trigger("quick-search-loading-stop")})},addShowHideHandlers:function(){var b=this;this.$input.on("focus",function(){b.render()}).on("click",function(c){c.stopPropagation();b.render()}).on("keyup",function(f){var c=f.which===27;var g=f.which===13;var d=a(this).val().length!==0;if(d||c){if(b.$dropdown.dd&&b.$dropdown.dd.$.is(":visible")){b.$dropdown.hide()}}else{if(!g){b.render()}}})},_getItemsToShow:function(){var c=this.collection.toJSON();var b=c.length>0&&c[0].id==AJS.Meta.get("page-id");if(b){c.shift()}return c},showQuickResults:function(){var b=RYQ.QuickNavEntry.escape(this._getItemsToShow());this.$dropdown.show([b,[this.moreLink]],"","");a(".recently-viewed-dropdown").on("click",".recently-viewed",function(c){c.preventDefault();a("#view-user-history-link").click();RYQ.util.analytics.trackQuickNavRecentlyDialogOpen()});a(".recently-viewed-dropdown").on("click",".with-space-name",function(c){RYQ.util.analytics.trackQuickNavPageOpen()});RYQ.util.analytics.trackQuickNavOpen()},onQuickSearch:function(l,f){var o=f.json.query;var c=_.map(this.collection.search(o),function(e){return e.attributes});c=RYQ.QuickNavEntry.escape(c);if(c.length==0){return}var m=f.json.contentNameMatches;var p=-1;for(var g=0;g<m.length;g++){var n=m[g][0].className;if(n=="content-type-blogpost"||n=="content-type-page"){p=g;break}}if(p!=-1){var h=m[p];var b=Math.min(h.length>4?2:6-h.length,c.length);h.unshift.apply(h,_(c).first(b));m[p]=_.uniq(h,function(e){return +e.id});if(h.length>6){var k=6-b;for(var d=k;d>0;d--){h.pop()}}}else{m.unshift(_(c).first(6))}}})}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/main.js' */
var RY=RY||{};AJS.toInit(function(a){a("#view-user-history-link").unbind("click");a("#view-user-history-link").click(function(g){g.preventDefault();var c=new AJS.Dialog({width:600,height:500,id:"recently-viewed-dialog",closeOnOutsideClick:true});var f=a(RY.Templates.body());c.addHeader("Recently viewed pages");c.addPanel("SinglePanel",f);c.addLink("Close",function(e){e.hide()});var d=a("<div>",{"class":"dialog-tip"}).text("Hint: type \"g\" and then \"r\" anywhere to quickly open this menu");c.popup.element.find(".dialog-button-panel").append(d);var i=new RY.PageCollection();var b=new RY.PageCollectionView({collection:i});f.find(".pages").html(b.render().el);c.gotoPanel(0);c.show();var h=a("#recently-viewed-dialog").spin("large");i.fetch({success:function(){h.spinStop();var j=_.extend({},Backbone.Events);var k=new RY.PageNavigator(b.$el,f.parent(),j);var e=new RY.FilterView({collection:i,el:f.find(".filter"),navigationEvents:j}).render();e.search()}});RY.util.analytics.trackDialogOpen()})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/quicknav/main.js' */
var RYQ=RYQ||{};AJS.toInit(function(){var b=new RYQ.QuickNavEntryCollection();var a=new RYQ.QuickNav({collection:b})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.heatmapper.atlassian-heatmapper-plugin:heat-mapper-events-resources', location = 'js/heat-mapper-dom.js' */
(function(G){try{if(window.AJS&&!AJS.DarkFeatures.isEnabled("heatmapper")){return 
}window.HeatMapper=window.HeatMapper||{};
var E="\"#$%&'()*+,./:;<=>?@[\\]^`{|}~";
function C(J,I,L,K){if(window.AJS&&window.AJS.log){window.AJS.log(J,I,L,K)
}}function D(I){if(!I){return null
}var N="",K;
var M=I.split(" ");
for(var L=0,J=M.length;
L<J;
L++){K=G.trim(M[L]);
if(K.length){N+="."+K
}}return N
}function F(L){var J="";
for(var K=0,I=L.length;
K<I;
K++){var M=L.charAt(K);
if(E.indexOf(M)>=0){J+="\\"
}J+=M
}return J
}function A(I){var K=[];
for(var J in I){if(I.hasOwnProperty(J)&&(J==="name"||J.indexOf("id")>=0)){K.push(J)
}}return K
}var B={click:"a,input,button,textarea,.aui-button",mousedown:"select"};
HeatMapper.DOM={find:function(){return G.find(HeatMapper.DOM.findSelector)
},findSelector:G.map(B,function(I){return I
}).join(","),eventSelectors:B,findAsSelectors:function(){return HeatMapper.DOM.mapToUniqueSelectors(HeatMapper.DOM.find())
},uniqueSelector:function(I){try{if(!I.jquery){I=G(I)
}if(I.attr("id")){return"#"+I.attr("id")
}var K=I.closest("[id]").attr("id")||"";
if(K.length){K="#"+K+" "
}var R=D(I.attr("class"));
var L=K+R;
if(R&&R.length&&G(L).length===1){return L
}var S=HeatMapper.DOM.getAttributes(I);
var T=A(S);
var N;
for(var M=0,J=T.length;
M<J;
M++){N=K+"["+T[M]+'="'+F(S[T[M]])+'"]';
if(G(N).length===1){return N
}}var P=K+I[0].nodeName;
if(R){P+=R
}var Q=G(P).index(I);
return P+":eq("+Q+")"
}catch(O){C("Failed to get selector for:");
C(I);
C(O);
return null
}},mapToUniqueSelectors:function(I){return G.map(I,function(J){return HeatMapper.DOM.uniqueSelector(J)
})
},getAttributes:function(M){if(!M||!M.length){return{}
}var N={};
var K=M[0].attributes;
for(var L=0,J=K.length;
L<J;
L++){var I=K[L];
N[I.name]=I.value
}return N
}}
}catch(H){if(AJS){AJS.log("heat-mapper-dom.js - unexpected exception");
AJS.log(H)
}}})(window.jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.heatmapper.atlassian-heatmapper-plugin:heat-mapper-events-resources', location = 'js/heat-mapper-events.js' */
AJS.toInit(function(C){try{if(window.AJS&&!AJS.DarkFeatures.isEnabled("heatmapper")){return 
}window.HeatMapper=window.HeatMapper||{};
if(!AJS.EventQueue&&!HeatMapper.Events){AJS.log("Analytics support not installed. Not tracking click events.");
return 
}function A(I){var H=window.location;
return{selector:HeatMapper.DOM.uniqueSelector(I),element:I[0].nodeName,hostname:H.hostname,port:H.port,protocol:H.protocol,path:H.pathname,userAgent:navigator.userAgent}
}function G(H){if(AJS.EventQueue){AJS.trigger("analyticsEvent",{name:"heatmapper-click",data:H})
}else{if(HeatMapper.Events){HeatMapper.Events.publish("heatmapper",H)
}}}function B(J){var I=C(J.currentTarget);
var H=A(I);
J.heatMapperHandled=true;
G(H)
}var E=C(document);
E.delegate(HeatMapper.DOM.eventSelectors.click,"click",B);
E.delegate(HeatMapper.DOM.eventSelectors.mousedown,"mousedown",B);
var F=jQuery.Event.prototype.stopPropagation;
jQuery.Event.prototype.stopPropagation=function(){try{if(this.currentTarget&&!this.heatMapperHandled&&this.type==="click"){var H=C(this.currentTarget);
if(H.is(HeatMapper.DOM.findSelector)){B(this)
}}}catch(I){AJS.log("Failed to intercept stopPropagation properly - skipping event capture");
AJS.log(I)
}return F.call(this)
}
}catch(D){AJS.log("heat-mapper-events.js - unexpected exception");
AJS.log(D)
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'js/space-menu.js' */
AJS.toInit(function(a){var d=a(Confluence.Templates.BrowseSpaces.spacesLink());a("#space-directory-link").replaceWith(a(d));var b=a("#space-menu-link"),c=function(e){var f=a("#space-menu-link-content");f.html(e.template);if(AJS&&AJS.Confluence&&AJS.Confluence.Analytics&&AJS.Confluence.Analytics.setAnalyticsSource){AJS.Confluence.Analytics.setAnalyticsSource(f.find("a"),"spacemenu")}a("#create-space-header").click(function(){AJS.trigger("analytics",{name:"create-space-from-header"});Confluence.SpaceBlueprint.Dialog.launch();return false})};b.click(function(){if(!a("#space-menu-link-content .aui-dropdown2-section").length){a.ajax({url:Confluence.getContextPath()+"/rest/ia/1.0/spacesmenu",type:"GET",dataType:"json",cache:false,success:c})}return false});a("#space-menu-link-content").on("aui-dropdown2-show",function(){AJS.trigger("analytics",{name:"open-space-menu"})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'soy/space-menu.soy' */
// This file was automatically generated from space-menu.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.BrowseSpaces == 'undefined') { Confluence.Templates.BrowseSpaces = {}; }


Confluence.Templates.BrowseSpaces.spacesLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.dropdown2.trigger({menu: {'id': 'space-menu-link-content'}, id: 'space-menu-link', tagName: 'a', extraClasses: 'aui-nav-link', title: "Spaces", showIcon: true, text: "Spaces"}, output);
  aui.dropdown2.contents({id: 'space-menu-link-content', extraClasses: 'aui-style-default aui-dropdown2-in-header'}, output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:space-ia-analytics', location = 'js/space-ia-analytics.js' */
(function(b){var c=AJS.Confluence.Analytics.setAnalyticsSource;function d(){var g=b(".acs-side-bar");var f=g.find("a:not(.external_link a, #acs-configure-link)");c(f,"sidebar");var e=g.find(".quick-links-section li:not(.external_link) a");c(e,"spaceshortcut");var h=g.find(".ia-secondary-container a:not(.more-children-link)");if(g.find(".ia-secondary-container").data("tree-type")=="pages"){c(h,"contextnavchildmode")}else{if(g.find(".ia-secondary-container").data("tree-type")=="page-tree"){c(h,"contextnavpagetreemode")}else{c(h,"contextnav")}}}function a(e){return function(){AJS.trigger("analytics",{name:"space-ia-nav",data:{linkType:e}})}}AJS.toInit(function(e){e(".acs-side-bar").find(".ia-secondary-container .more-children-link").click(a("context-nav.more-children"));AJS.bind("sidebar.exit-configure-mode",d);AJS.bind("sidebar.flyout-triggered",function(g,f){a("flyout-triggered."+f.flyout)()});AJS.bind("pagetree-children-loaded",d);d()})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.aui.staging:persistable', location = 'js/persistable.js' */
define("confluence/persistable",["skate","confluence/storage-manager"],function(f,g){var d=g("confluence","userSettings");return f("data-persist",{type:f.types.ATTRIBUTE,ready:function(b){if(!b.name)throw'Missing attribute "name"';var c=b.getAttribute("data-persist"),a=b.getAttribute("data-persist-scope"),a=a?b.name+"."+a.replace(/\./g,"-"):b.name,a=d.getItem(a),e=b.getAttribute("data-default-value");if(/value|checked/.test(c))a=a||e||null,null!==a&&("checked"===c&&(a="true"===a),b[c]=a);else throw"Persistable only works with 'value' or 'checked' attributes!";
},events:{change:function(b){var c=b.getAttribute("data-persist"),a=b.getAttribute("data-persist-scope"),a=a?b.name+"."+a.replace(/\./g,"-"):b.name,e=b.getAttribute("data-default-value");String(b[c])===e?d.removeItem(a):d.setItem(a,b[c],2592E3)}}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-feature-discovery-plugin:confluence-feature-discovery-plugin-resources', location = '/js/confluence-feature-discovery-plugin.js' */
(function(f){Confluence.FeatureDiscovery={};var c,e=false,i=3;var d="com.atlassian.confluence.plugins.confluence-feature-discovery-plugin";var g=d+":confluence-feature-discovery-plugin-resources.test-mode";var a=WRM.data.claim(g);function j(k){if(c===undefined){c=JSON.parse(AJS.Meta.get("discovered-plugin-features")||"{}")}if(k){return c[k]||[]}return c}function b(m,o){var n=j(m);for(var l=0,k=n.length;l<k;l++){if(n[l]==o){return true}}return false}function h(n,p){var l="com.atlassian.webdriver.discovery="+n+":"+p;var k=document.cookie.split(";");for(var m=0;m<k.length;m++){var o=k[m];while(o.charAt(0)==" "){o=o.substring(1)}if(o.indexOf(l)!=-1){return true}}return false}Confluence.FeatureDiscovery.forPlugin=function(m,l){var p=Confluence.storageManager("feature-discovery."+m);l=l||i;function o(r){var q=parseInt(p.getItem(r),10);return isNaN(q)?0:q}function n(r,q){return p.setItem(r,q)}function k(q){return p.removeItem(q)}return{addDiscoveryView:function(q){n(q,o(q)+1)},shouldShow:function(r,q){if(q===true&&a&&!h(m,r)){return false}if(e||b(m,r)){return false}if(o(r)>=l){this.markDiscovered(r);return false}e=true;return true},markDiscovered:function(r,q){if(b(m,r)){return}f.ajax({url:AJS.contextPath()+"/rest/feature-discovery/1.0/discovered/"+m+"/"+r,type:"POST",success:function(){j(m).unshift(r);k(r);AJS.trigger("feature-discovered",{pluginKey:m,featureKey:r});if(q&&f.isFunction(q)){q()}}})},listDiscovered:function(){return j(m).slice(0)}}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.support.stp:stp-license-status-resources', location = 'js/stp-licenseStatus.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:adminmenu-analytics', location = 'js/atlassian/events.js' */
(function(){var a=function(c,d){AJS.trigger("analytics",{name:"unified.admin."+c,data:d||{}})};var b=function(){var c=AJS.contextPath();var d="Unknown";if(c===""){d="jira"}else{if(c==="/builds"){d="bamboo"}else{if(c==="/wiki"){d="confluence"}else{if(c==="/admin"){d="userManagement"}}}}return d};AJS.$(document).on("click","#admin-billing-link",function(){a("menu.billing.click",{product:b()})}).on("click","#admin-discovernewapps-link",function(){a("menu.addApplications.click",{product:b()})}).on("click","#admin-management-link",function(){a("menu.userManagement.click",{product:b()})}).on("click","#admin_billing_section",function(){a("menu.billing.click",{product:b()})}).on("click","#admin_discovernewapps_section",function(){a("menu.addApplications.click",{product:b()})}).on("click","#user_management_section",function(){a("menu.userManagement.click",{product:b()})}).on("click","#resolve-gapps-button",function(){a("gapps.resolve")}).on("click","#cancel-gapps-button",function(){a("gapps.later")}).on("click","#gapps-doc-link",function(){a("gapps.documentation")})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:gapps-reminder-banner-resources', location = '/template/atlassian/gapps-reminder.soy' */
// This file was automatically generated from gapps-reminder.soy.
// Please don't edit this file by hand.

if (typeof userprovisioning == 'undefined') { var userprovisioning = {}; }
if (typeof userprovisioning.gapps == 'undefined') { userprovisioning.gapps = {}; }
if (typeof userprovisioning.gapps.reminder == 'undefined') { userprovisioning.gapps.reminder = {}; }


userprovisioning.gapps.reminder.gappsDialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param16 = new soy.StringBuilder();
  var param17 = new soy.StringBuilder();
  aui.buttons.button({id: 'resolve-gapps-button', href: '/admin/googleapps', text: "Resolve now"}, param17);
  aui.buttons.button({id: 'cancel-gapps-button', text: 'Remind me later', type: 'link'}, param17);
  aui.buttons.buttons({content: param17.toString()}, param16);
  aui.dialog.dialog2({id: 'gapps-dialog', modal: true, extraClasses: 'aui-dialog2-warning um-compact-dialog', titleText: "Your Google Apps connection is expiring", content: '<p>' + soy.$$escapeHtml("You are being shown this warning because you are a site admin and your Google Apps connection is about to expire unless it is upgraded. Clicking resolve now will take you to site administration.") + '</p><p>' + AJS.format("You need to be an administrator in both Google Apps and Atlassian to upgrade your connection. {0}Read more about this{1}.",'<a id="gapps-doc-link" href="https://confluence.atlassian.com/x/iALPKQ">','</a>') + '</p><p>' + soy.$$escapeHtml("This prompt will reappear every 7 days until the issue is resolved.") + '</p>', footerActionContent: param16.toString()}, output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:gapps-reminder-banner-resources', location = '/js/atlassian/gapps-reminder-banner.js' */
define("user-management/gapps-reminder-banner",["jquery","dialog2"],function(d,c){var a="UserProvisioningAPI";var b=function(){var e=localStorage.gappsBannerLastSeen;var f=Date.now()-e;var g=f/86400000;if(!e||g>7){d("body").append(userprovisioning.gapps.reminder.gappsDialog());c("#gapps-dialog").show();d("#resolve-gapps-button").focus();d("#cancel-gapps-button").click(function(h){h.preventDefault();c("#gapps-dialog").hide()});localStorage.gappsBannerLastSeen=Date.now()}};d.getJSON("/missioncontrol/rest/gapps-status").done(function(e){if(e.gappsType===a){d(b)}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:impersonation-resources', location = '/js/atlassian/aui-polyfill/flag.js' */
/*
 * Polyfill for aui/flag for use in products that don't provide a version (due to using an ancient AUI version).
 */
(function() {
    try {
        require('aui/flag')
    } catch (e) {
        define('aui/flag', [], displayFlagAsMessage);
    }

    function displayFlagAsMessage(args) {
        var type = (args.type || "").toLowerCase();
        var message = typeof AJS.messages[type] == 'function' ? AJS.messages[type] : AJS.messages.generic;

        // for some reason we display info messages as warnings... keeping that for backward compatibility
        message(".notifications", { body: args.message });
    }
})();

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:impersonation-resources', location = '/js/atlassian/umFlag.js' */
/**
 * This is a wrapper around AUI Flag which will escape the body text of the Flag unless explicitly told not to.
 *
 * The body will NOT be escaped iff the passed in object has an attribute 'isHtml' and it is set to true.
 */
define('user-management-common/flag', [
    'aui/flag',
    'underscore',
    'jquery'
], function(
    flag,
    _,
    $
) {
    return function(options){
        var createdFlag;
        // If not explicitly HTML, escape the body
        if(!options.isHtml) {
            options.body = _.escape(options.body);
        }

        createdFlag = flag(options);
        $(createdFlag).on('aui-flag-close', function(){
            createdFlag.dispatchEvent(new CustomEvent('um-flag-close', { bubbles: true }));
        });
        return createdFlag;
    };
});

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:impersonation-resources', location = '/js/atlassian/helpers/cookies.js' */
define('user-management-common/cookies', [], function() {
    return {
        readCookie: function (name) {
            //document.cookie lists cookies in the format "name1=value1; name2=value2" etc
            //see https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
            var nameEQ = name + "=";
            var cookieList = document.cookie.split(';');
            for (var i = 0; i < cookieList.length; i++) {
                var cookie = cookieList[i];

                //Remove any leading spaces (normally 1, but I don't want to make assumptions)
                while (cookie.charAt(0) == ' ') {
                    cookie = cookie.substring(1, cookie.length);
                }

                //Remove the name1= part and return what is left
                if (cookie.indexOf(nameEQ) === 0) {
                    return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
                }
            }
            return null;
        }
    };
});

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.crowd.user-provisioning-plugin:impersonation-resources', location = '/js/atlassian/impersonation.js' */
/**
 * This module displays an informational message with a link to drop the impersonation, if the current user is
 * being impersonated. This script is used in both user management and user provisioning plugins.
 */
require([
    'jquery',
    'underscore',
    'user-management-common/flag',
    'user-management-common/cookies'
], function(
    $,
    _,
    flag,
    cookies
) {
    if (cookies.readCookie("um.user.impersonated.username")) {
        $(function () {
            var message = AJS.format("You\'\'re temporarily logged in as {0}. When you\'\'re done, {1}switch back{2} to your account.",
                        _.escape(cookies.readCookie("um.user.impersonated.displayname")),
                        '<a id="impersonation-dismiss-trigger">', '</a>');

            var messageFlag = flag({ type: 'info', isHtml: true, body: message });
            
            $(messageFlag).find("#impersonation-dismiss-trigger").click(function (e) {
                var username = cookies.readCookie("um.user.impersonated.username"); // Cookies will be wiped when the ajax returns, so store it locally now
                e.preventDefault();
                $.ajax({
                    type: "POST",
                    url: "/admin/rest/um/1/impersonate/release"
                }).done(function () {
                    window.location = "/admin/users/view?username=" + encodeURIComponent(username);
                });
            });
        });
    }
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'js/ajs-amd.js' */
define("pas/ajs",[],function(){return AJS});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'js/store_js/store.js' */
(function(){var c=function(g,h){return Object.prototype.hasOwnProperty.call(g,h)};var b=function(g){var i=0;for(var h in g){if(c(g,h)){i++}}return i};var d=function(l,j,k){var h=l.length>>>0;for(var g=(k<0)?Math.max(0,h+k):k||0;g<h;g++){if(l[g]===j){return g}}return -1};var f=function(i,g,h){return d(i,g,h)!==-1};var a=function(h,g){if(!f(h,g)){h.push(g)}return h};var e=this.Store=function(g,i,h){this.name=g;this.defaults=i||{};this.watcherSpeed=h||500;this.listeners={};this.applyDefaults()};e.clear=function(){localStorage.clear()};e.prototype.applyDefaults=function(){for(var g in this.defaults){if(c(this.defaults,g)&&this.get(g)===undefined){this.set(g,this.defaults[g])}}return this};e.prototype.watcher=function(i){if(this.watcherTimer){clearTimeout(this.watcherTimer)}if(b(this.listeners)||i){this.newObject=this.toObject();if(this.oldObject){for(var g in this.newObject){if(c(this.newObject,g)&&this.newObject[g]!==this.oldObject[g]){this.fireEvent(g,this.newObject[g])}}for(var g in this.oldObject){if(c(this.oldObject,g)&&!c(this.newObject,g)){this.fireEvent(g,this.newObject[g])}}}this.oldObject=this.newObject;var h=this;this.watcherTimer=setTimeout(function(){h.watcher()},this.watcherSpeed)}return this};e.prototype.get=function(g){var h=localStorage.getItem("store."+this.name+"."+g);if(h===null){return undefined}try{return JSON.parse(h)}catch(i){return null}};e.prototype.set=function(g,h){if(h===undefined){this.remove(g)}else{if(typeof h==="function"){h=null}try{h=JSON.stringify(h)}catch(i){h=null}localStorage.setItem("store."+this.name+"."+g,h)}return this};e.prototype.remove=function(g){localStorage.removeItem("store."+this.name+"."+g);return this.applyDefaults()};e.prototype.reset=function(){var g="store."+this.name+".";for(var h=(localStorage.length-1);h>=0;h--){if(localStorage.key(h).substring(0,g.length)===g){localStorage.removeItem(localStorage.key(h))}}return this.applyDefaults()};e.prototype.toObject=function(){var g={};var h="store."+this.name+".";for(var k=(localStorage.length-1);k>=0;k--){if(localStorage.key(k).substring(0,h.length)===h){var j=localStorage.key(k).substring(h.length);var l=this.get(j);if(l!==undefined){g[j]=l}}}return g};e.prototype.fromObject=function(g,i){if(!i){this.reset()}for(var h in g){if(c(g,h)){this.set(h,g[h])}}return this};e.prototype.addEvent=function(g,h){this.watcher(true);if(!this.listeners[g]){this.listeners[g]=[]}a(this.listeners[g],h);return this};e.prototype.removeEvent=function(g,j){for(var h=(this.listeners[g].length-1);h>=0;h--){if(this.listeners[g][h]===j){this.listeners[g].splice(h,1)}}if(!this.listeners[g].length){delete this.listeners[g]}return this};e.prototype.fireEvent=function(k,n){var m=[k,"*"];for(var l=0;l<m.length;l++){var g=m[l];if(this.listeners[g]){for(var h=0;h<this.listeners[g].length;h++){this.listeners[g][h](n,k,this.name)}}}return this}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'js/store_js/store-amd.js' */
define("pas/js/store_js/store",function(){return Store});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'js/pasConfig.js' */
define("pas/js/pas-config",["jquery","pas/ajs","pas/js/store_js/store"],function(b,a,d){var c=60*1000;return{timeUpdateInterval:c,pollingInterval:15*c,url:a.contextPath()+"/rest/pas/latest/announcement",store:new d("Atlassian.PAS.Announcements."+document.location.hostname+a.contextPath()+"."+b("meta[name='ajs-remote-user']").attr("content")),nextAnnouncementKey:"nextAnnouncement",timeStampKey:"timeStamp",config:{url:a.contextPath()+"/rest/pas/latest/settings",timeStampKey:"configTimeStampKey",pollingInterval:30*60*1000,currentConfigKey:"currentConfigKey"},cookieKey:a.contextPath().replace("/","")+"_pas.dismiss",ace:{aceCookieKey:a.contextPath().replace("/","")+"_ace.dismiss",acePath:"/j/",aceHost:"ace.atlassian.com",nextAnnouncementKey:"aceNextAnnouncement",timeStampKey:"aceTimeStamp"}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'js/pas.js' */
require(["jquery","aui/flag","pas/ajs","pas/js/pas-config"],function(d,b,c,a){c.toInit(function(){var n=null;var s=null;var g=null;var i=0;var x=[".atlassian.net",".jira.com",".jira-dev.com"];var u=function(I){var L=function(Q,R,P){Q=""+Q;while(Q.length<P){Q=R+Q}return Q};var K=function(R,Q){var P=R+" "+Q;if(R!=1){P+="s"}return P};var O=60000;var M=3600000;var J=86400000;if(I<O){return"in less than a minute"}else{if(I<M){return"in "+K(Math.round(I/O),"min")}else{if(I<J){return"in "+K(Math.round(I/M),"hour")+" "+K(Math.round((I%M)/O),"minute")}else{var N=new Date();N.setSeconds(N.getSeconds()+Math.round(I/1000));return(L(N.getFullYear(),"0",4)+"/"+L(N.getMonth()+1,"0",2)+"/"+L(N.getDate(),"0",2)+" "+L(N.getHours(),"0",2)+":"+L(N.getMinutes(),"0",2))}}}};var w=function(){if(n!=null){clearTimeout(n)}if(s!=null){clearTimeout(s)}if(g!=null){clearInterval(g)}document.getElementById("pas-announcement").close()};var C=function(){var L=a.announcementText;var J=a.announcementUrl||"";var I=a.announcementTime;var K=a.announcementId;var M;if(K==="ace"){M=b({type:"info",body:L,close:"manual"});d(M).find(".aui-message a").on("click",function(){e("ace.pas.click")})}else{M=b({type:"info",title:"Public announcement service",body:L+J+I,close:"manual"})}M.setAttribute("id","pas-announcement");M.setAttribute("announcementId",K);M.addEventListener("aui-flag-close",function(){m()})};var m=function(){var J=a.announcementId;var I=new Date();var K;if(J=="ace"){I.setDate(I.getDate()+7);K=J+"; expires="+I.toUTCString();document.cookie=a.ace.aceCookieKey+"="+K+"; path=/";e("ace.pas.dismiss")}else{I.setDate(I.getDate()+1);K=J+"; "+I.toUTCString();document.cookie=a.cookieKey+"="+K+"; path=/";c.trigger("analyticsEvent",{name:"com.atlassian.plugins.pas.dismiss-announcement.click",data:{message:d("#pas-announcement span:first").text()}})}};var j=function(N,O){var L=document.cookie.split(";");for(var K=0;K<L.length;K++){var J=L[K];var P=J.indexOf("=");var I=J.substr(0,P).trim();var M=J.substr(P+1).trim();if(I==O){return M==N}}return false};var l=function(){if(i>0){var I=i-a.timeUpdateInterval;i=I;a.announcementTime=Atlassian.PAS.Templates.pasTime({time:u(I)})}else{clearInterval(g);g=null}};function o(){var P=q(a.config.currentConfigKey);if(P.aceEnabled){var J=location.protocol+"//"+a.ace.aceHost+a.ace.acePath;var M=Math.floor(Math.random()*99999999999);if(!document.MAX_used){document.MAX_used=","}var I=(document.MAX_used!=","?"&exclude="+document.MAX_used:"");var O=(document.charset?"&charset="+document.charset:(document.characterSet?"&charset="+document.characterSet:""));var L=(document.URL?"&referer="+escape(document.URL):"");var K=(document.context?"&context="+escape(document.context):"");var N=J+"?zoneid="+P.zoneId+"&cb="+M+I+O+"&loc="+escape(window.location)+L+K;d.ajax({url:N,dataType:"jsonp",contentType:"application/json",cache:false,success:function(Q){B(a.ace.timeStampKey,H());B(a.ace.nextAnnouncementKey,Q);h()},error:function(S,Q,R){B(a.ace.timeStampKey,H());c.log("Could not get banner from ace: "+R)}})}else{c.log("Polling to ACE is disabled.")}}var F=function(L,J){var I={};if(J){I.zoneId=J.zoneId}if(L&&L.html){var K=/\?bannerid=(.*)&amp;campaignid=(.*)&amp;zoneid/.exec(L.html);if(K&&K.length===3){I.campaignId=K[2];I.bannerId=K[1]}}return I};var e=function(J){var K=q(a.ace.nextAnnouncementKey);var I=q(a.config.currentConfigKey);c.trigger("analyticsEvent",{name:J,data:F(K,I)})};var h=function(){var J=c.Meta.get("remote-user");var I=q(a.ace.nextAnnouncementKey);if(I&&I.html!=null&&I.html!=""&&J!=null&&J!=""){a.announcementText=I.html;a.announcementId="ace";e("ace.pas.impression");C()}};var t=function(){var J=location.hostname;var I;for(I=0;I<x.length;++I){if(D(J,x[I])){return true}}return false};var D=function(J,I){var K=J.length-I.length;return K>=0&&J.lastIndexOf(I)===K};var A=function(){function J(){return K.timeToStart-v()}var K=q(a.nextAnnouncementKey);if(K==null||K.message==null||j(K.id,a.cookieKey)){if(t()){if(!j("ace",a.ace.aceCookieKey)){if(E()){o()}else{h()}}}return}i=K.timeLeft;a.announcementText=K.message;a.announcementTime=Atlassian.PAS.Templates.pasTime({time:u(i)});g=setInterval(l,a.timeUpdateInterval);if(K.url){a.announcementUrl=Atlassian.PAS.Templates.pasUrl({url:K.url})}a.announcementId=K.id;var I=K.duration;K.timeToStart=J();if(K.timeToStart>0){I+=K.timeToStart;n=setTimeout(function(){C()},K.timeToStart)}else{C()}if(I>0){s=setTimeout(function(){w()},I)}};function z(I){d.ajax({type:"GET",contentType:"application/json",url:a.url,cache:false,global:false,timeout:5000,success:function(J,K){B(a.timeStampKey,H());B(a.nextAnnouncementKey,J);I()},error:function(L,J,K){c.log("Could not get announcement from server: "+K)}})}function f(I){d.ajax({type:"GET",contentType:"application/json",url:a.config.url,cache:false,global:false,timeout:5000,success:function(J,K){B(a.config.timeStampKey,H());B(a.config.currentConfigKey,J);I()},error:function(L,J,K){c.log("Could not get configuration from server: "+K)}})}var H=function(){return new Date().getTime()};var v=function(){return(H()-q(a.timeStampKey))};function q(I){return a.store.get(I)}function B(I,J){return a.store.set(I,J)}function y(K,L){var J=q(K);var I=H()-J;return J==undefined||I>L}function r(){return y(a.timeStampKey,a.pollingInterval)}function G(){return y(a.config.timeStampKey,a.config.pollingInterval)}function E(){return y(a.ace.timeStampKey,a.pollingInterval)}function k(){d("#more-info").live("click",function(I){c.trigger("analyticsEvent",{name:"com.atlassian.plugins.pas.more-info.click",data:{message:d("#pas-announcement span:first").text()}})})}function p(){if(r()){z(A)}else{A()}}k();if(G()){f(p)}else{p()}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'templates/soy/pas.soy' */
// This file was automatically generated from pas.soy.
// Please don't edit this file by hand.

if (typeof Atlassian == 'undefined') { var Atlassian = {}; }
if (typeof Atlassian.PAS == 'undefined') { Atlassian.PAS = {}; }
if (typeof Atlassian.PAS.Templates == 'undefined') { Atlassian.PAS.Templates = {}; }


Atlassian.PAS.Templates.pasTime = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="pas-announcement-time">', soy.$$escapeHtml(opt_data.time), '</span>');
  return opt_sb ? '' : output.toString();
};


Atlassian.PAS.Templates.pasUrl = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p><a id="more-info" target="_blank" href=\'', soy.$$escapeHtml(opt_data.url), '\'>', soy.$$escapeHtml("More information"), '</a></p>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources', location = '/js/confluence-license-banner.js' */
require(["ajs","jquery"],function(a,b){a.toInit(function(){var d=WRM.data.claim("com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources.license-details");if(!d){a.warn("Unable to claim my required data");return}var c={destroyBanner:function(){b("#license-banner").slideUp(function(){b("#license-banner").remove()})},remindMeLater:function(){b.ajax({type:"POST",dataType:"json",url:a.contextPath()+"/rest/licensebanner/1.0/reminder/later"});c.destroyBanner()},remindMeNever:function(){b.ajax({type:"POST",dataType:"json",url:a.contextPath()+"/rest/licensebanner/1.0/reminder/never"});c.destroyBanner()},createBanner:function(g){var e;if(g.showLicenseExpiryBanner){e=Confluence.Templates.LicenseBanner.expiryBanner({days:g.daysBeforeLicenseExpiry,mac:g.renewUrl,sales:g.salesEmail})}else{if(g.showMaintenanceExpiryBanner){e=Confluence.Templates.LicenseBanner.maintenanceBanner({days:g.daysBeforeMaintenanceExpiry,mac:g.renewUrl,sales:g.salesEmail})}}if(e){var f=b(e);b("#full-height-container").prepend(f);b("#license-banner-later").click(function(h){h.preventDefault();c.remindMeLater()});b("#license-banner-never").click(function(h){h.preventDefault();c.remindMeNever()});f.find(".icon-close").click(function(h){h.preventDefault();c.remindMeLater()})}}};c.createBanner(d)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources', location = 'soy/confluence-license-banner.soy' */
// This file was automatically generated from confluence-license-banner.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LicenseBanner == 'undefined') { Confluence.Templates.LicenseBanner = {}; }


Confluence.Templates.LicenseBanner.wrapper = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div>', opt_data.contentHTML, '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.LicenseBanner.expiryBanner = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var renewTag__soy8 = new soy.StringBuilder('<a id="license-banner-my-link" target="_blank" href="', soy.$$escapeHtml(opt_data.mac), '">');
  renewTag__soy8 = renewTag__soy8.toString();
  var end__soy12 = new soy.StringBuilder('</a>');
  end__soy12 = end__soy12.toString();
  var mailTag__soy14 = new soy.StringBuilder('<a id="license-banner-sales-link" href="mailto:', soy.$$escapeHtml(opt_data.sales), '">');
  mailTag__soy14 = mailTag__soy14.toString();
  var param18 = new soy.StringBuilder();
  aui.message.warning({content: '<div id="license-banner-content" data-days="' + soy.$$escapeHtml(opt_data.days) + '" data-subscription="true">' + ((opt_data.days < 0) ? AJS.format("Your license subscription has expired. This instance is now read-only. Please renew {0}online{1} or contact {2}sales{3}.",renewTag__soy8,end__soy12,mailTag__soy14,end__soy12) : (opt_data.days == 0) ? AJS.format("Your license subscription will expire today and Confluence will become read-only. Please renew {0}online{1} or contact {2}sales{3}.",renewTag__soy8,end__soy12,mailTag__soy14,end__soy12) : AJS.format("Your license subscription will expire in {0,choice,1#{0} day|1\x3c{0} days}. Confluence will become read-only after the expiry. Please renew {1}online{2} or contact {3}sales{4}.",opt_data.days,renewTag__soy8,end__soy12,mailTag__soy14,end__soy12)) + '</div>', isCloseable: opt_data.days > 7, id: 'license-banner'}, param18);
  Confluence.Templates.LicenseBanner.wrapper({contentHTML: param18.toString()}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.LicenseBanner.maintenanceBanner = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var renewTag__soy39 = new soy.StringBuilder('<a id="license-banner-my-link" target="_blank" href="', soy.$$escapeHtml(opt_data.mac), '">');
  renewTag__soy39 = renewTag__soy39.toString();
  var end__soy43 = new soy.StringBuilder('</a>');
  end__soy43 = end__soy43.toString();
  var later__soy45 = new soy.StringBuilder('<a href="#" id="license-banner-later">');
  later__soy45 = later__soy45.toString();
  var never__soy47 = new soy.StringBuilder('<a href="#" id="license-banner-never">');
  never__soy47 = never__soy47.toString();
  var param49 = new soy.StringBuilder();
  aui.message.warning({content: '<div id="license-banner-content" data-days="' + soy.$$escapeHtml(opt_data.days) + '" data-subscription="false">' + ((opt_data.days < 0) ? AJS.format("You no longer have access Support and Updates. {0}Renew online{1}, {2}remind me later{3} or {4}never remind me again{5}.",renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43) : (opt_data.days == 0) ? AJS.format("You will lose access to Support and Updates today. {0}Renew online{1}, {2}remind me later{3} or {4}never remind me again{5}.",renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43) : AJS.format("You will lose access to Support and Updates in {0,choice,1#{0} day|1\x3c{0} days}. {1}Renew online{2}, {3}remind me later{4} or {5}never remind me again{6}.",opt_data.days,renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43)) + '</div>', id: 'license-banner'}, param49);
  Confluence.Templates.LicenseBanner.wrapper({contentHTML: param49.toString()}, output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-user-rest:crowd-aggregation-warning', location = '/aggregation/js/directory-aggregation-warning.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-user-rest:crowd-aggregation-warning', location = 'aggregation/soy/directory-aggregation-warning.soy' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:clickable-resources', location = 'js/clickable.js' */
jQuery(function(a){a(".clickable").live("click",function(c){if(a(c.target).closest("a[href]").length===0&&a(c.target).closest(".clickable").length===1){var b=a(this).attr("href")||a("a[href]:first",this).attr("href");if(b){location.href=b}}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-knowledge-base:space-kb-web-resource', location = 'js/kb-space-dialog-wizard.js' */
AJS.bind("blueprint.wizard-register.ready",function(){function a(d,c){c.pageData.ContentPageTitle=c.pageData.name;return Confluence.SpaceBlueprint.CommonWizardBindings.submit(d,c)}function b(d,c){c.soyRenderContext.atlToken=AJS.Meta.get("atl-token");c.soyRenderContext.showSpacePermission=false}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-knowledge-base:kb-blueprint-item",function(c){c.on("submit.kbSpaceId",a);c.on("pre-render.kbSpaceId",b);c.on("post-render.kbSpaceId",Confluence.SpaceBlueprint.CommonWizardBindings.postRender)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-knowledge-base:space-kb-web-resource', location = 'soy/space.soy' */
// This file was automatically generated from space.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.SpaceBlueprints == 'undefined') { Confluence.SpaceBlueprints = {}; }
if (typeof Confluence.SpaceBlueprints.KnowledgeBase == 'undefined') { Confluence.SpaceBlueprints.KnowledgeBase = {}; }


Confluence.SpaceBlueprints.KnowledgeBase.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="kb-space-form" class="common-space-form aui">');
  Confluence.Templates.Blueprints.CreateSpace.createSpaceFormFields({showSpacePermission: false, fieldErrors: opt_data.fieldErrors, name: opt_data.name, spaceKey: opt_data.spaceKey}, output);
  output.append('<fieldset><div class="field-group"><label for="kb-space-desc">', soy.$$escapeHtml("Description"), '</label><textarea id="kb-space-desc" class="textarea long-field" rows="3" type="text" name="description" placeholder="', soy.$$escapeHtml("What is this knowledge base for?"), '"></textarea></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.SpaceBlueprints.KnowledgeBase.livesearchMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:structured-macro ac:name="livesearch"><ac:parameter ac:name="additional">page excerpt</ac:parameter><ac:parameter ac:name="placeholder">', soy.$$escapeHtml("Search for a solution"), '</ac:parameter>', (opt_data.spaceKey) ? '<ac:parameter ac:name="spaceKey"><ri:space ri:space-key="' + soy.$$escapeHtml(opt_data.spaceKey) + '"/></ac:parameter>' : '', '<ac:parameter ac:name="type">page</ac:parameter><ac:parameter ac:name="size">large</ac:parameter></ac:structured-macro>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:label-picker', location = '/js/label-picker.js' */
define("confluence-ui-components/js/label-picker",["ajs","confluence-ui-components/confluence","jquery","underscore"],function(g,i,e,j){var a=/[:;,\.\?&\[\(\)#\^\*@!<>\]]/g;function l(m){var n=j.uniq(m.match(a));return n.join(" ")}function b(m){return{id:m.name,text:m.name}}function c(m){if(!m||!m.length){return null}var n=j.map(m,b);return j.sortBy(n,function(o){return o.text.toLowerCase()})}function k(o){var n=o.contentNameMatches;var p=c(n[0]);var m=c(n[1]);if(p&&m){return[{text:"Suggested",children:p},{text:"Other",children:m}]}return p||m||[]}function f(m){return function(n){return e.extend({query:n,ignoreRelated:true,maxResults:10},m)}}var d={placeholder:"Add labels",multiple:true,minimumInputLength:1,maximumSelectionSize:20,tokenSeparators:[" ",","],formatInputTooShort:function(n,m){return "Start typing to search for a label"},formatSelectionTooBig:function(m){return g.format("You can only input {0} labels",m)},formatResult:function(m){return i.UI.Components.LabelPicker.templates.labelResult({label:{labelName:m.text,isNew:m.isNew}})},formatNoMatches:function(n){var m=l(n);if(m){return i.UI.Components.LabelPicker.templates.labelInvalid({inputValue:n,invalidCharacters:m})}return this.noMatches},createSearchChoice:function(n){if(!n){return null}var m=l(n);if(m){return null}return{id:n,text:n,isNew:true}},ajax:{data:f(),dataType:"json",url:i.getContextPath()+"/labels/autocompletelabel.action",results:function(m){return{results:k(m)}},quietMillis:300},dropdownCssClass:"labels-dropdown",containerCssClass:"labels-autocomplete",initSelection:function(m,p){var o=m.val().split(",");var n=j.map(o,function(q){return{id:q,text:q}});p(n)}};function h(n){var m=e.extend({},d,n);if(n&&n.queryOpts){m.ajax.data=f(n.queryOpts);delete m.queryOpts}if(!n||!n.noMatches){m.noMatches=m.placeholder}return m}return{build:h}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:label-picker', location = '/js/label-picker-legacy.js' */
window.Confluence.UI.Components.LabelPicker=require("confluence-ui-components/js/label-picker");AJS.deprecate.prop(window.Confluence.UI.Components.LabelPicker,"build",{sinceVersion:"1.4.18",extraInfo:"Use require('confluence-ui-components/js/label-picker')"});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:label-picker', location = '/soy/label-picker.soy' */
// This file was automatically generated from label-picker.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.LabelPicker == 'undefined') { Confluence.UI.Components.LabelPicker = {}; }
if (typeof Confluence.UI.Components.LabelPicker.templates == 'undefined') { Confluence.UI.Components.LabelPicker.templates = {}; }


Confluence.UI.Components.LabelPicker.templates.labelResult = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.label.isNew) ? soy.$$escapeHtml(AJS.format("\x22{0}\x22 - add a new label",opt_data.label.labelName)) : soy.$$escapeHtml(opt_data.label.labelName));
  return opt_sb ? '' : output.toString();
};


Confluence.UI.Components.LabelPicker.templates.labelInvalid = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var inputValueHtml__soy9 = new soy.StringBuilder('<b>', soy.$$escapeHtml(opt_data.inputValue), '</b>');
  inputValueHtml__soy9 = inputValueHtml__soy9.toString();
  var invalidCharactersHtml__soy13 = new soy.StringBuilder('<b>', soy.$$escapeHtml(opt_data.invalidCharacters), '</b>');
  invalidCharactersHtml__soy13 = invalidCharactersHtml__soy13.toString();
  output.append(AJS.format("{0} contains invalid characters {1}",inputValueHtml__soy9,invalidCharactersHtml__soy13));
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-knowledge-base:kb-article-resources', location = 'soy/kb-articles.soy' */
// This file was automatically generated from kb-articles.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Plugin == 'undefined') { Confluence.Blueprints.Plugin = {}; }
if (typeof Confluence.Blueprints.Plugin.KnowledgeBaseArticle == 'undefined') { Confluence.Blueprints.Plugin.KnowledgeBaseArticle = {}; }


Confluence.Blueprints.Plugin.KnowledgeBaseArticle.wizardPage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="kb-article-wizard-page-form" class="aui"><fieldset><div class="field-group"><label for="kb-article-title">', soy.$$escapeHtml("Name"), '<span class="aui-icon icon-required">', soy.$$escapeHtml("$WIZARD_FORM_FIELD_REQUIRED_I18N"), '</span></label><input id="kb-article-title" class="text  long-field" type="text" name="title" title="title" placeholder="', soy.$$escapeHtml("Title of your article."), '" maxlength="255"><div class="error"></div></div><div class="field-group"><label>', soy.$$escapeHtml("Labels"), '</label><input id="kb-article-labels" class="text select2-input long-field" type="text" name="labelsString" title="labelsString" placeholder="', soy.$$escapeHtml("Topics this article covers (e.g. \x22printer\x22)."), '"><div class="error"></div></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Plugin.KnowledgeBaseArticle.contentbylabelMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:structured-macro ac:name="contentbylabel"><ac:parameter ac:name="showLabels">false</ac:parameter><ac:parameter ac:name="max">5</ac:parameter><ac:parameter ac:name="sort">modified</ac:parameter><ac:parameter ac:name="reverse">true</ac:parameter><ac:parameter ac:name="labels">', soy.$$escapeHtml(opt_data.labels), '</ac:parameter><ac:parameter ac:name="showSpace">false</ac:parameter><ac:parameter ac:name="spaces"><ri:space ri:space-key="', soy.$$escapeHtml(opt_data.spaceKey), '" /></ac:parameter><ac:parameter ac:name="type">page</ac:parameter></ac:structured-macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Plugin.KnowledgeBaseArticle.jiraIssuesMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:structured-macro ac:name="jira"><ac:parameter ac:name="key">', soy.$$escapeHtml(opt_data.jiraIssueKey), '</ac:parameter><ac:parameter ac:name="serverId">', soy.$$escapeHtml(opt_data.jiraServerId), '</ac:parameter></ac:structured-macro>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-knowledge-base:kb-article-resources', location = 'js/kb-articles-dialog-wizard.js' */
AJS.toInit(function(c){function a(i,g){var h=g.$container;var f=c("#kb-article-labels",h);f.auiSelect2(Confluence.UI.Components.LabelPicker.build({separator:" ",queryOpts:{spaceKey:g.wizardData.spaceKey}}))}function d(j,h){var i=j,e=i.find("#kb-article-title"),g=c.trim(e.val()),f;i.find(".error").html("");if(!g){f="Title is required."}else{if(!Confluence.Blueprint.canCreatePage(h,g)){f="A page with this name already exists."}}if(f){e.focus().siblings(".error").html(f);return false}return true}function b(g,f){return d(f.$container,f.wizardData.spaceKey)}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-knowledge-base:kb-how-to-item",function(e){e.on("post-render.kb-how-to-wizard",a);e.on("submit.kb-how-to-wizard",b)});Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-knowledge-base:kb-troubleshooting-item",function(e){e.on("post-render.kb-troubleshooting-wizard",a);e.on("submit.kb-troubleshooting-wizard",b)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher.soy' */
// This file was automatically generated from appswitcher.soy.
// Please don't edit this file by hand.

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher == 'undefined') { navlinks.templates.appswitcher = {}; }


navlinks.templates.appswitcher.linkSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.list.length > 0) {
    output.append('<div class="aui-nav-heading sidebar-section-header">', soy.$$escapeHtml(opt_data.title), '</div><ul class="aui-nav nav-links">');
    var linkList8 = opt_data.list;
    var linkListLen8 = linkList8.length;
    for (var linkIndex8 = 0; linkIndex8 < linkListLen8; linkIndex8++) {
      var linkData8 = linkList8[linkIndex8];
      navlinks.templates.appswitcher.applicationsItem(linkData8, output);
    }
    output.append('</ul>');
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.applicationsItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="nav-link"><a href="', soy.$$escapeHtml(opt_data.link), '" ', (opt_data.self) ? 'class="checked"' : '', ' title="', soy.$$escapeHtml(opt_data.link), '"><span class="nav-link-label">', soy.$$escapeHtml(opt_data.label), '</span></a></li>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.shortcutsItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="nav-link"><a href="', soy.$$escapeHtml(opt_data.link), '" ', (opt_data.self) ? 'class="checked"' : '', ' title="', soy.$$escapeHtml(opt_data.link), '"><span class="nav-link-label">', soy.$$escapeHtml(opt_data.label), '</span>', (opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '', '</a></li>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.error = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-error">', "Something went wrong, please \x3cspan class\x3d\x22app-switcher-retry\x22\x3etry again\x3c/span\x3e.", '</div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.sidebarContents = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-page-panel-nav"><nav class="aui-navgroup aui-navgroup-vertical"><div class="app-switcher-section app-switcher-applications"><div class="aui-nav-heading">', soy.$$escapeHtml("Application Links"), '</div><div class="app-switcher-loading">', "Loading\x26hellip;", '</div></div><div class="app-switcher-section app-switcher-shortcuts"><div class="aui-nav-heading">', soy.$$escapeHtml("Shortcuts"), '</div><div class="app-switcher-loading">', "Loading\x26hellip;", '</div></div></nav></div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">', soy.$$escapeHtml("Linked Applications"), '</span>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.projectHeaderSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-title">');
  aui.avatar.avatar({size: 'large', avatarImageUrl: opt_data.avatarUrl, isProject: true, title: opt_data.name}, output);
  output.append('<div class="sidebar-project-name">', soy.$$escapeHtml(opt_data.name), '</div></div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.cogDropdown = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var dropdownList__soy74 = new soy.StringBuilder();
  navlinks.templates.appswitcher.dropdownList({list: opt_data.links}, dropdownList__soy74);
  dropdownList__soy74 = dropdownList__soy74.toString();
  aui.dropdown2.dropdown2({menu: {'id': opt_data.id, 'content': dropdownList__soy74, 'extraClasses': 'aui-style-default sidebar-customize-section'}, trigger: {'showIcon': false, 'content': '<span class="aui-icon aui-icon-small aui-iconfont-configure"></span>', 'container': '#app-switcher'}}, output);
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.dropdownList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="sidebar-admin-links">');
  var linkList82 = opt_data.list;
  var linkListLen82 = linkList82.length;
  for (var linkIndex82 = 0; linkIndex82 < linkListLen82; linkIndex82++) {
    var linkData82 = linkList82[linkIndex82];
    output.append('<li class="nav-link"><a href="', soy.$$escapeHtml(linkData82.href), '" title="', soy.$$escapeHtml(linkData82.title), '"><span class="nav-link-label">', soy.$$escapeHtml(linkData82.label), '</span></a></li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.switcher = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (true) {
    if (AJS.DarkFeatures.isEnabled('rotp.sidebar')) {
      var sidebarContents__soy97 = new soy.StringBuilder();
      navlinks.templates.appswitcher.sidebarContents(null, sidebarContents__soy97);
      sidebarContents__soy97 = sidebarContents__soy97.toString();
      var triggerContent__soy99 = new soy.StringBuilder();
      navlinks.templates.appswitcher.trigger(null, triggerContent__soy99);
      triggerContent__soy99 = triggerContent__soy99.toString();
      navlinks.templates.appswitcher.sidebar({sidebar: {'id': 'app-switcher', 'content': sidebarContents__soy97}, trigger: {'showIcon': false, 'content': triggerContent__soy99}}, output);
      output.append('<script>\n                (function (NL) {\n                    var initialise = function () {\n                        new NL.SideBar({\n                            sidebarContents: \'#app-switcher\'\n                        });\n                    };\n                    if (NL.SideBar) {\n                        initialise();\n                    } else {\n                        NL.onInit = initialise;\n                    }\n                }(window.NL = (window.NL || {})));\n                window.NL.isUserAdmin = ', soy.$$escapeHtml(false), '<\/script>');
    } else {
      navlinks.templates.appswitcher_old.switcher(null, output);
    }
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.sidebar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(opt_data.sidebar.id), '" class="sidebar-trigger app-switcher-trigger" aria-owns="', soy.$$escapeHtml(opt_data.sidebar.id), '" aria-haspopup="true">', opt_data.trigger.content, '</a><div id=', soy.$$escapeHtml(opt_data.sidebar.id), ' class="app-switcher-sidebar aui-style-default sidebar-offscreen">', opt_data.sidebar.content, '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher.js' */
(function(c,a){a.SideBar=function(d){var e=this;this.$sidebar=null;d=c.extend({sidebarContents:null},d);this.getLinks=function(){return c.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:false,dataType:"json"}).done(this.updateAppLinks).fail(this.showAppSwitcherError)};this.populateProjectHeader=function(g,f){e.getSidebar().find(".app-switcher-shortcuts .aui-nav-heading").after(navlinks.templates.appswitcher.projectHeaderSection({avatarUrl:f,name:g}))};this.getProjectData=function(){var f=c(".project-shortcut-dialog-trigger"),g=f.data("key"),h=f.data("entity-type");if(f.size()==0||!g||!h){c(".app-switcher-shortcuts").remove();return}var j,i;i=c.ajax({url:AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+g,cache:false,data:{entityType:h},dataType:"json"});j=c.ajax({url:AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+g,cache:false,data:{entityType:h},dataType:"json"});c.when(i,j).then(function(l,k){e.updateProjectShortcuts(l,k,{key:g,entityType:h,name:f.data("name"),avatarUrl:f.find("img").prop("src")})},e.showProjectShortcutsError)};this.getSidebar=function(){if(!this.$sidebar){this.$sidebar=c(d.sidebarContents)}return this.$sidebar};this.addApplicationsCog=function(){c(".app-switcher-applications .aui-nav-heading").before(navlinks.templates.appswitcher.cogDropdown({id:"sidebar-applications-admin-dropdown",links:[{href:AJS.contextPath()+"/plugins/servlet/customize-application-navigator",label:"Customize navigator",title:"Add new entries, hide existing or restrict who sees what"},{href:AJS.contextPath()+"/plugins/servlet/applinks/listApplicationLinks",label:"Manage application links",title:"Link to more Atlassian applications"}]}))};this.addProjectShortcutsCog=function(f,h){var g=[{href:AJS.contextPath()+"/plugins/servlet/custom-content-links-admin?entityKey="+f,label:"Customize shortcuts",title:""}];if(e.entityMappings[h]){g.push({href:e.generateEntityLinksUrl(f,e.entityMappings[h]),label:"Manage product links",title:""})}e.getSidebar().find(".app-switcher-shortcuts .aui-nav-heading").before(navlinks.templates.appswitcher.cogDropdown({id:"sidebar-project-shortcuts-admin-dropdown",links:g}))};this.updateAppLinks=function(f){c(function(){e.getSidebar().find(".app-switcher-applications").html(navlinks.templates.appswitcher.linkSection({title:"Application Links",list:f}));if(a.isUserAdmin){e.addApplicationsCog()}e.bindAnalyticsHandlers(e.getSidebar(),f)})};this.updateProjectShortcuts=function(i,g,h){var j=i[0].shortcuts,f=g[0].shortcuts;e.getSidebar().find(".app-switcher-shortcuts").html(navlinks.templates.appswitcher.linkSection({title:"Shortcuts",list:j.concat(f)}));if(a.isUserAdmin){e.addProjectShortcutsCog(h.key,h.entityType)}e.populateProjectHeader(h.name,h.avatarUrl);e.bindAnalyticsHandlers(e.getSidebar(),data)};this.entityMappings={"confluence.space":"com.atlassian.applinks.api.application.confluence.ConfluenceSpaceEntityType","jira.project":"com.atlassian.applinks.api.application.jira.JiraProjectEntityType","bamboo.project":"com.atlassian.applinks.api.application.bamboo.BambooProjectEntityType","stash.project":"com.atlassian.applinks.api.application.stash.StashProjectEntityType"};this.generateEntityLinksUrl=function(f,g){if(g===e.entityMappings["confluence.space"]){return AJS.contextPath()+"/spaces/listentitylinks.action?typeId="+g+"&key="+f}else{return AJS.contextPath()+"/plugins/servlet/applinks/listEntityLinks/"+g+"/"+f}};this.showAppSwitcherError=function(){c(function(){var f=e.getSidebar();f.find(".app-switcher-applications .app-switcher-loading").replaceWith(navlinks.templates.appswitcher.error());f.off(".appswitcher").on("click.appswitcher",".app-switcher-retry",c.proxy(e.retryLoading,e))})};this.showProjectShortcutsError=function(){c(function(){var f=e.getSidebar();f.find(".app-switcher-shortcuts .app-switcher-loading").replaceWith(navlinks.templates.appswitcher.error());f.off(".appswitcher").on("click.appswitcher",".app-switcher-retry",c.proxy(e.retryLoading,e))})};this.retryLoading=function(f){this.getSidebar().html(navlinks.templates.appswitcher.sidebarContents());this.getLinks();this.getProjectData();f&&f.stopPropagation()};this.bindAnalyticsHandlers=function(f,g){};this.getLinks();c(this.getProjectData);this.toggleSidebar=function(h){var i=e.getSidebar(),g=c("body"),f=c(window.document);if(!g.hasClass("app-switcher-open")){var k=c("#header");i.css("left",-i.width());i.parent("body").length||i.appendTo("body");b({data:i});i.animate({left:0},300);function j(l){var n=l.target&&c(l.target),m=l.keyCode;if(l.originalEvent===h.originalEvent){return}if(n&&!m&&!(n.closest(i).length||n.closest(k).length)&&h.which==1&&!(l.shiftKey||l.ctrlKey||l.metaKey)){e.toggleSidebar()}else{if(m===27){e.toggleSidebar()}}}f.on("click.appSwitcher",j);f.on("keydown.appSwitcher",j);f.on("scroll.appSwitcher",i,b)}else{f.off(".appSwitcher")}g.toggleClass("app-switcher-open")};c("#header").on("click",".app-switcher-trigger",this.toggleSidebar)};function b(f){var d=c(document).scrollTop(),g=c("#header"),e=(g.height()+g.offset().top)-d;if(e>=0){f.data.css({top:e,position:"fixed"})}else{f.data.css({top:0,left:0,position:"fixed"})}}if(a.onInit){a.onInit()}}(jQuery,window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher_old.js' */
(function(e,c){c.AppSwitcher=function(f){var g=AJS.contextPath()+"/plugins/servlet/customize-application-navigator";var h=this;this.$dropdown=null;f=e.extend({dropdownContents:null},f);this.getLinks=function(){return e.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:false,dataType:"json"}).done(this.updateDropdown).fail(this.showError)};this.getDropdown=function(){if(!this.$dropdown){this.$dropdown=e(f.dropdownContents)}return this.$dropdown};this.updateDropdown=function(i){e(function(){h.getDropdown().html(navlinks.templates.appswitcher_old.applications({apps:i,showAdminLink:c.environment.isUserAdmin,adminLink:g}));h.bindAnalyticsHandlers(h.getDropdown(),i);if(window.NL.environment.isAppSuggestionAvailable){h.handleSuggestionApps(i)}})};this.bindAnalyticsHandlers=function(i,j){};this.handleSuggestionApps=function(k){var l=_.map(k,function(m){return m.applicationType.toLowerCase()});$suggestionApps=e("<div id='app-switcher-suggestion-apps' class='aui-dropdown2-section'/>");$suggestionApps.html(navlinks.templates.appswitcher_old.suggestionApps);var j=$suggestionApps.find(".suggestion-apps");var i=false;_.each(a,function(m){if(!_.contains(l,m.appName)){i=true;j.append(navlinks.templates.appswitcher_old.suggestionApp({appName:m.appName,appDesc:m.appDesc}))}});if(!i){return}e("#app-switcher").append($suggestionApps);e(".app-discovery-suggestion-app").click(function(){AJS.trigger("analytics",{name:"appswitcher.discovery.user.select."+e(this).find("a").attr("id").toLowerCase()});window.open(e(this).find("a").attr("title"),"_blank")});e(".app-discovery-suggestion-app").hover(function(){e(this).find("a").removeClass("active").removeClass("aui-dropdown2-active")});e(".app-discovery-cancel-button").click(function(){AJS.trigger("analytics",{name:"appswitcher.discovery.nothanks.button.click"});d(b,"true");$suggestionApps.remove()})};this.showError=function(){e(function(){h.getDropdown().html(navlinks.templates.appswitcher_old.error()).off(".appswitcher").on("click.appswitcher",".app-switcher-retry",e.proxy(h.retryLoading,h))})};this.retryLoading=function(i){this.getDropdown().html(navlinks.templates.appswitcher_old.loading());this.getLinks();i&&i.stopPropagation()};this.getLinks()};var b="key-no-thanks";var a=[{appName:"jira",appDesc:"Issue & Project Tracking Software"},{appName:"confluence",appDesc:"Collaboration and content sharing"},{appName:"bamboo",appDesc:"Continuous integration"}];var d=function(f,g){e.ajax({url:AJS.contextPath()+"/rest/menu/latest/userdata/",type:"PUT",contentType:"application/json",data:JSON.stringify({key:f,value:g})})};if(c.onInit){c.onInit()}}(jQuery,window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher_old.soy' */
// This file was automatically generated from appswitcher_old.soy.
// Please don't edit this file by hand.

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher_old == 'undefined') { navlinks.templates.appswitcher_old = {}; }


navlinks.templates.appswitcher_old.applications = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.apps, listClass: 'nav-links', showDescription: opt_data.showDescription}, output);
  if (opt_data.custom) {
    navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.custom, showDescription: opt_data.showDescription}, output);
  }
  if (opt_data.showAdminLink) {
    navlinks.templates.appswitcher_old.adminSection(opt_data, output);
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.applicationsSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.list.length > 0) {
    var param19 = new soy.StringBuilder('<ul', (opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '', '>');
    var linkList27 = opt_data.list;
    var linkListLen27 = linkList27.length;
    for (var linkIndex27 = 0; linkIndex27 < linkListLen27; linkIndex27++) {
      var linkData27 = linkList27[linkIndex27];
      navlinks.templates.appswitcher_old.applicationsItem(soy.$$augmentData(linkData27, {showDescription: opt_data.showDescription}), param19);
    }
    param19.append('</ul>');
    aui.dropdown2.section({content: param19.toString()}, output);
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.applicationsItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="nav-link', (opt_data.self) ? ' nav-link-local' : '', '"><a href="', soy.$$escapeHtml(opt_data.link), '" class="aui-dropdown2-radio ', (opt_data.self) ? 'aui-dropdown2-checked' : '', '" title="', soy.$$escapeHtml(opt_data.link), '"><span class="nav-link-label">', soy.$$escapeHtml(opt_data.label), '</span>', (opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '', '</a></li>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.adminSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.dropdown2.section({content: '<ul class="nav-links"><li><a class="nav-link-edit-wrapper" href="' + soy.$$escapeHtml(opt_data.adminLink) + '"><span class="nav-link-edit">' + "Configure\x26hellip;" + '</span></a></li></ul>'}, output);
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.error = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-error">', "Something went wrong, please \x3cspan class\x3d\x22app-switcher-retry\x22\x3etry again\x3c/span\x3e.", '</div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.loading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-loading">', "Loading\x26hellip;", '</div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">', soy.$$escapeHtml("Linked Applications"), '</span>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.switcher = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (true) {
    var loadingContent__soy81 = new soy.StringBuilder();
    navlinks.templates.appswitcher_old.loading(null, loadingContent__soy81);
    loadingContent__soy81 = loadingContent__soy81.toString();
    var triggerContent__soy83 = new soy.StringBuilder();
    navlinks.templates.appswitcher_old.trigger(null, triggerContent__soy83);
    triggerContent__soy83 = triggerContent__soy83.toString();
    aui.dropdown2.dropdown2({menu: {'id': 'app-switcher', 'content': loadingContent__soy81, 'extraClasses': 'aui-style-default'}, trigger: {'showIcon': false, 'content': triggerContent__soy83, 'extraClasses': 'app-switcher-trigger', 'extraAttributes': {'href': '#app-switcher'}}}, output);
    output.append('<script>\n            (function (NL) {\n                var initialise = function () {\n                    // For some milestones of AUI, the atlassian soy namespace was renamed to aui. Handle that here by ensuring that window.atlassian is defined.\n                    window.atlassian = window.atlassian || window.aui;\n                    new NL.AppSwitcher({\n                        dropdownContents: \'#app-switcher\'\n                    });\n                };\n                if (NL.AppSwitcher) {\n                    initialise();\n                } else {\n                    NL.onInit = initialise;\n                }\n            }(window.NL = (window.NL || {})));\n            window.NL.environment = ', soy.$$escapeHtml({}), ';<\/script>');
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.suggestionApp = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="app-discovery-suggestion-app"><a id="', soy.$$escapeHtml(opt_data.appName), '" href="#" class="app-discovery-link aui-icon-container app-discovery-', soy.$$escapeHtml(opt_data.appName), '-product-icon" title="https://www.atlassian.com/software/', soy.$$escapeHtml(opt_data.appName), '"/><div class="app-discovery-small">', soy.$$escapeHtml(opt_data.appDesc), '</div></li>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.suggestionApps = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class=\'nav-links suggestion-apps\'><li><span class=\'app-discovery-suggest-title nav-link-label\'><h6>', soy.$$escapeHtml("Try other Atlassian apps"), '</h6></span></li></ul><div class=\'buttons-container app-discovery-suggest-apps-buttons\'><div class=\'buttons\'><button class=\'aui-button aui-button-link app-discovery-cancel-button\' name=\'cancel\' accesskey=\'c\' href=\'#\'>', soy.$$escapeHtml("Don\x27t show this again"), '</button></div></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/inline-dialog.js' */
(function(d){AJS.CustomInlineDialog=AJS.CustomInlineDialog||function(B,n,r,p){p=p||[];if(p.hasOwnProperty("getArrowAttributes")){getArrowAttributesDeprecationLogger()}if(p.hasOwnProperty("getArrowPath")){getArrowPathDeprecationLogger();if(p.hasOwnProperty("gravity")){getArrowPathWithGravityDeprecationLogger()}}if(p.hasOwnProperty("onTop")){onTopDeprecationLogger();if(p.onTop&&p.gravity===undefined){p.gravity="s"}}if(typeof n==="undefined"){n=String(Math.random()).replace(".","");if(d("#inline-dialog-"+n+", #arrow-"+n+", #inline-dialog-shim-"+n).length){throw"GENERATED_IDENTIFIER_NOT_UNIQUE"}}var z=d.extend(false,AJS.CustomInlineDialog.opts,p);if(z.gravity==="w"){z.offsetX=p.offsetX===undefined?10:p.offsetX;z.offsetY=p.offsetY===undefined?0:p.offsetY}var v=function(){return window.Raphael&&p&&(p.getArrowPath||p.getArrowAttributes)};var j;var q;var K;var u=false;var A=false;var I=false;var J;var x;var g=d('<div id="inline-dialog-'+n+'" class="aui-inline-dialog"><div class="aui-inline-dialog-contents contents"></div><div id="arrow-'+n+'" class="aui-inline-dialog-arrow arrow"></div></div>');var m=d("#arrow-"+n,g);var G=g.find(".contents");if(!v()){g.find(".aui-inline-dialog-arrow").addClass("aui-css-arrow")}if(!z.displayShadow){G.addClass("aui-inline-dialog-no-shadow")}if(z.autoWidth){G.addClass("aui-inline-dialog-auto-width")}else{G.css("width",z.width+"px")}G.mouseover(function(O){clearTimeout(q);g.unbind("mouseover")}).mouseout(function(){E()});var D=function(){if(!j){j={popup:g,hide:function(){E(0)},id:n,show:function(){y()},persistent:z.persistent?true:false,reset:function(){function S(U,T){U.css(T.popupCss);if(v()){if(T.gravity==="s"){T.arrowCss.top-=d.browser.msie?10:9}if(!U.arrowCanvas){U.arrowCanvas=Raphael("arrow-"+n,16,16)}var V=z.getArrowPath,W=d.isFunction(V)?V(T):V;U.arrowCanvas.path(W).attr(z.getArrowAttributes())}else{m.removeClass("aui-bottom-arrow aui-left-arrow aui-right-arrow");if(T.gravity==="s"&&!m.hasClass("aui-bottom-arrow")){m.addClass("aui-bottom-arrow")}else{if(T.gravity==="n"){}else{if(T.gravity==="w"){m.addClass("aui-left-arrow")}else{if(T.gravity==="e"){m.addClass("aui-right-arrow")}}}}}m.css(T.arrowCss)}var P=AJS.$(window).height();var Q=Math.round(P*0.75);g.children(".aui-inline-dialog-contents").css("max-height",Q);var O=z.calculatePositions(g,x,J,z);if(O.hasOwnProperty("displayAbove")){displayAboveDeprecationLogger();O.gravity=O.displayAbove?"s":"n"}S(g,O);g.fadeIn(z.fadeTime,function(){});if(d.browser.msie&&~~(d.browser.version)<10){var R=d("#inline-dialog-shim-"+n);if(!R.length){d(g).prepend(d('<iframe class = "inline-dialog-shim" id="inline-dialog-shim-'+n+'" frameBorder="0" src="javascript:false;"></iframe>'))}R.css({width:G.outerWidth(),height:G.outerHeight()})}}}}return j};var y=function(){if(g.is(":visible")){return}K=setTimeout(function(){if(!I||!A){return}z.addActiveClass&&d(B).addClass("active");u=true;if(!z.persistent){H()}AJS.CustomInlineDialog.current=D();d(document).trigger("showLayer",["inlineDialog",D()]);D().reset()},z.showDelay)};var E=function(O){if(typeof O=="undefined"&&z.persistent){return}A=false;if(u&&z.preHideCallback.call(g[0].popup)){O=(O==null)?z.hideDelay:O;clearTimeout(q);clearTimeout(K);if(O!=null){q=setTimeout(function(){l();z.addActiveClass&&d(B).removeClass("active");g.fadeOut(z.fadeTime,function(){z.hideCallback.call(g[0].popup)});if(g.arrowCanvas){g.arrowCanvas.remove();g.arrowCanvas=null}u=false;A=false;d(document).trigger("hideLayer",["inlineDialog",D()]);AJS.CustomInlineDialog.current=null;if(!z.cacheContent){I=false;w=false}},O)}}};var F=function(R,P){var O=d(P);z.upfrontCallback.call({popup:g,hide:function(){E(0)},id:n,show:function(){y()}});g.each(function(){if(typeof this.popup!="undefined"){this.popup.hide()}});if(z.closeOthers){d(".aui-inline-dialog").each(function(){!this.popup.persistent&&this.popup.hide()})}x={target:O};if(!R){J={x:O.offset().left,y:O.offset().top}}else{J={x:R.pageX,y:R.pageY}}if(!u){clearTimeout(K)}A=true;var Q=function(){w=false;I=true;z.initCallback.call({popup:g,hide:function(){E(0)},id:n,show:function(){y()}});y()};if(!w){w=true;if(d.isFunction(r)){r(G,P,Q)}else{d.get(r,function(T,S,U){G.html(z.responseHandler(T,S,U));I=true;z.initCallback.call({popup:g,hide:function(){E(0)},id:n,show:function(){y()}});y()})}}clearTimeout(q);if(!u){y()}return false};g[0].popup=D();var w=false;var t=false;var s=function(){if(!t){d(z.container).append(g);t=true}};var o=d(B);if(z.onHover){if(z.useLiveEvents){if(o.selector){d(document).on("mousemove",o.selector,function(O){s();F(O,this)}).on("mouseout",o.selector,function(){E()})}else{AJS.log("Warning: inline dialog trigger elements must have a jQuery selector when the useLiveEvents option is enabled.")}}else{o.mousemove(function(O){s();F(O,this)}).mouseout(function(){E()})}}else{if(!z.noBind){if(z.useLiveEvents){if(o.selector){d(document).on("click",o.selector,function(O){s();if(M()){g.hide()}else{F(O,this)}return false}).on("mouseout",o.selector,function(){E()})}else{AJS.log("Warning: inline dialog trigger elements must have a jQuery selector when the useLiveEvents option is enabled.")}}else{o.click(function(O){s();if(M()){g.hide()}else{F(O,this)}return false}).mouseout(function(){E()})}}}var M=function(){return u&&z.closeOnTriggerClick};var H=function(){k();f()};var l=function(){C();N()};var i=false;var h=n+".inline-dialog-check";var k=function(){if(!i){d("body").bind("click."+h,function(P){var O=d(P.target);if(O.closest("#inline-dialog-"+n+" .contents").length===0){E(0)}});i=true}};var C=function(){if(i){d("body").unbind("click."+h)}i=false};var L=function(O){if(O.keyCode===27){E(0)}};var f=function(){d(document).on("keydown",L)};var N=function(){d(document).off("keydown",L)};g.show=function(P,O){if(P){P.stopPropagation()}s();if(z.noBind&&!(B&&B.length)){F(P,O===undefined?P.target:O)}else{F(P,B)}};g.hide=function(){E(0)};g.refresh=function(){if(u){D().reset()}};g.getOptions=function(){return z};return g};function c(g){var f=d(g);var h=d.extend({left:0,top:0},f.offset());return{left:h.left,top:h.top,width:f.outerWidth(),height:f.outerHeight()}}function b(h,j,t,f){var m=AJS.$.isFunction(f.offsetX)?f.offsetX(h,j,t,f):f.offsetX;var l=AJS.$.isFunction(f.offsetY)?f.offsetY(h,j,t,f):f.offsetY;var q=AJS.$.isFunction(f.arrowOffsetX)?f.arrowOffsetX(h,j,t,f):f.arrowOffsetX;var p=AJS.$.isFunction(f.arrowOffsetY)?f.arrowOffsetY(h,j,t,f):f.arrowOffsetY;var s=f.container.toLowerCase()!=="body";var g=AJS.$(f.container);var o=s?AJS.$(f.container).parent():AJS.$(window);var r=s?g.offset():{left:0,top:0};var k=s?o.offset():{left:0,top:0};var i=j.target;var u=i.offset();var n=i[0].getBBox&&i[0].getBBox();return{screenPadding:10,arrowMargin:5,window:{top:k.top,left:k.left,scrollTop:o.scrollTop(),scrollLeft:o.scrollLeft(),width:o.width(),height:o.height()},scrollContainer:{width:g.width(),height:g.height()},trigger:{top:u.top-r.top,left:u.left-r.left,width:n?n.width:i.outerWidth(),height:n?n.height:i.outerHeight()},dialog:{width:h.width(),height:h.height(),offset:{top:l,left:m}},arrow:{height:h.find(".arrow").outerHeight(),offset:{top:p,left:q}}}}function e(f,p,G,r){var n=b(f,p,G,r);var j=n.screenPadding;var k=n.window;var t=n.trigger;var D=n.dialog;var i=n.arrow;var z=n.scrollContainer;var E={top:t.top-k.scrollTop,left:t.left-k.scrollLeft};var A=Math.floor(t.height/2);var v=Math.floor(D.height/2);var u=Math.floor(i.height/2);var C=E.left-D.offset.left-j;var H=z.width-E.left-t.width-D.offset.left-j;var B=C>=D.width;var h=H>=D.width;var l=!h&&B?"e":"w";var o=E.top+A-u;var q=k.height-o-i.height;j=Math.min(j,o-n.arrowMargin);j=Math.min(j,q-n.arrowMargin);var g=E.top+A;var x=Math.max(g-j,0);var F=Math.max(k.height-g-j,0);var y=v-D.offset.top>x;var m=v+D.offset.top>F;var w;var s;if(y){w={top:k.scrollTop+j,left:l==="w"?t.left+t.width+D.offset.left:t.left-D.width-D.offset.left};s={top:(t.top+A)-(w.top+u)}}else{if(m){w={top:k.scrollTop+k.height-D.height-j,left:l==="w"?t.left+t.width+D.offset.left:t.left-D.width-D.offset.left};s={top:(t.top+A)-(w.top+u)}}else{w={top:t.top+A-v+D.offset.top,left:l==="w"?t.left+t.width+D.offset.left:t.left-D.width-D.offset.left};s={top:v-u+i.offset.top}}}return{gravity:l,popupCss:w,arrowCss:s}}function a(g,o,z,s){var x=AJS.$.isFunction(s.offsetX)?s.offsetX(g,o,z,s):s.offsetX;var v=AJS.$.isFunction(s.offsetY)?s.offsetY(g,o,z,s):s.offsetY;var m=AJS.$.isFunction(s.arrowOffsetX)?s.arrowOffsetX(g,o,z,s):s.arrowOffsetX;var l=AJS.$.isFunction(s.arrowOffsetY)?s.arrowOffsetY(g,o,z,s):s.arrowOffsetY;var f=c(window);var p=c(o.target);var y=c(g);var j=c(g.find(".aui-inline-dialog-arrow"));var i=p.left+p.width/2;var u=(window.pageYOffset||document.documentElement.scrollTop)+f.height;var k=10;y.top=p.top+p.height+~~v;y.left=p.left+~~x;var r=f.width-(y.left+y.width+k);j.left=i-y.left+~~m;j.top=-(j.height/2);var n=p.top>y.height;var h=(y.top+y.height)<u;var q=(!h&&n)||(n&&s.gravity==="s");if(q){y.top=p.top-y.height-(j.height/2);j.top=y.height}if(s.isRelativeToMouse){if(r<0){y.right=k;y.left="auto";j.left=z.x-(f.width-y.width)}else{y.left=z.x-20;j.left=z.x-y.left}}else{if(r<0){y.right=k;y.left="auto";var w=f.width-y.right;var t=w-y.width;j.right="auto";j.left=i-t-j.width/2}else{if(y.width<=p.width/2){j.left=y.width/2;y.left=i-y.width/2}}}return{gravity:q?"s":"n",displayAbove:q,popupCss:{left:y.left,top:y.top,right:y.right},arrowCss:{left:j.left,top:j.top,right:j.right}}}AJS.CustomInlineDialog.opts={onTop:false,responseHandler:function(g,f,h){return g},closeOthers:true,isRelativeToMouse:false,addActiveClass:true,onHover:false,useLiveEvents:false,noBind:false,fadeTime:100,persistent:false,hideDelay:10000,showDelay:0,width:300,offsetX:0,offsetY:10,arrowOffsetX:0,arrowOffsetY:0,container:"body",cacheContent:true,displayShadow:true,autoWidth:false,gravity:"n",closeOnTriggerClick:false,preHideCallback:function(){return true},hideCallback:function(){},initCallback:function(){},upfrontCallback:function(){},calculatePositions:function(f,i,j,h){h=h||{};var g=h.gravity==="w"?e:a;return g(f,i,j,h)},getArrowPath:function(f){if(f.gravity==="s"){return"M0,8L8,16,16,8"}else{return"M0,8L8,0,16,8"}},getArrowAttributes:function(){return{fill:"#fff",stroke:"#ccc"}}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:general-analytics-bindings', location = '/includes/js/analytics-bindings.js' */
define("confluence/analytics-bindings",["jquery","confluence/analytics-support"],function(b,d){return function(){function e(a,c){b(a).on("click",".view-historical-version-trigger",function(){d.publish("confluence.page.view-historical.from-"+(c||"unknown"))})}function f(a,c){b(a).on("click",".restore-historical-version-trigger",function(){d.publish("confluence.page.restore-historical.from-"+(c||"unknown"))})}function g(a,c){b("#header .aui-header-secondary "+a).on("click",function(){var a=b(this).hasClass("aui-dropdown2-active")?
"expanded":"collapsed";d.publish("confluence.header.dropdown."+c,{state:a})})}e("#page-history-warning","navigation");e("#page-history-container","history");e(".diff-menu","diff");f("#page-history-warning","navigation");f("#page-history-container","history");g("#admin-menu-link","administration");g("#user-menu-link","profile")}});require("confluence/module-exporter").safeRequire("confluence/analytics-bindings",function(b){AJS.toInit(b)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'templates/anchor.soy' */
// This file was automatically generated from anchor.soy.
// Please don't edit this file by hand.

if (typeof MyWork == 'undefined') { var MyWork = {}; }
if (typeof MyWork.Templates == 'undefined') { MyWork.Templates = {}; }
if (typeof MyWork.Templates.Anchor == 'undefined') { MyWork.Templates.Anchor = {}; }


MyWork.Templates.Anchor.tasksFeatureDiscovery = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p>', soy.$$escapeHtml("See the tasks assigned to you, or created by you, in the Tasks tab of your profile."), '</p><ul class="mw-tasks-discovery-controls"><li><a id="mw-tasks-discovery-view" href="', soy.$$escapeHtml(opt_data.tasksUrl), '" class="aui-button aui-style"><p>', soy.$$escapeHtml("View Tasks"), '</p></a></li><li><a id="mw-tasks-discovery-dismiss" href="#">', soy.$$escapeHtml("Dismiss"), '</a></li></ul>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'js/miniview-anchor.js' */
var MW=MW||{$:AJS.$||Zepto};MW.MV={};AJS.toInit(function(){if(AJS.Meta&&!AJS.Meta.get("remote-user")){return}MW.MV.AnchorManager=function(){var l=contextPath,h=l+"/plugins/servlet/notifications-miniview",p=0,e=/[?&]show-miniview/.test(window.location.search);function r(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var s="[\\?\\#&]"+t+"=([^&#]*)";var v=new RegExp(s);var u=v.exec(window.location.search);if(u!==null){return decodeURIComponent(u[1].replace(/\+/g," "))}}var o=r("show-miniview");if(o){h+="#notification/"+o}function q(){var s="badge-i aui-icon aui-icon-small aui-iconfont-workbox-empty";MW.$("#notifications-anchor").html('<div class="'+s+'"></div><span class="badge-w"><span class="badge"></span></span>').attr("title","Open Notifications")}function f(u){var t=false,s;return function(){if(t){return s}t=true;s=u.apply(this,arguments);return s}}var n=f(function(){MW.Dialog.getOptions().closeOthers=false;MW.Dialog.preload=true;MW.Dialog.show();MW.Dialog.hide();MW.Dialog.getOptions().closeOthers=true});function k(s){return s<=9?s:"9+"}function j(s){var t=MW.$("#notifications-anchor"),u=t.find(".badge"),v=t.find(".aui-icon");u.html(k(s));p=s;if(s>0){t.addClass("unread").removeClass("read");v.addClass("aui-iconfont-workbox").removeClass("aui-iconfont-workbox-empty");if(t.is(":visible")&&!e){n()}}else{t.addClass("read").removeClass("unread");v.addClass("aui-iconfont-workbox-empty").removeClass("aui-iconfont-workbox")}}function m(){c("notifications",h);d()}function d(){MW.$(document).keydown(function(s){if(AJS.InlineDialog.current&&s.which==27&&!MW.$(s.target).is(":input")){AJS.InlineDialog.current.hide()}})}function i(){MW.$("#header-menu-bar").find(".ajs-drop-down").each(function(){this.hide()})}function c(x,v){var w;var u=function(){w=this};var s=function(){if(this.preload!==true){var y=JSON.stringify({markAllRead:true});MW.$("#"+x+"-miniview-iframe")[0].contentWindow.postMessage(y,"*")}};if(!window.addEventListener){window.attachEvent("onmessage",t)}else{window.addEventListener("message",t,false)}function t(A){function B(C){return C===location.protocol+"//"+location.host}if("escKey"===A.data){w.hide();MW.$("#notifications-anchor").focus();document.activeElement.blur()}else{if("getParentConfig"===A.data&&B(A.origin)){var z=JSON.stringify({parentConfig:{parentUrl:location.href,preload:MW.Dialog.preload,unread:p}}),y=MW.$("#"+x+"-miniview-iframe")[0].contentWindow;y.postMessage(z,"*");if(MW.Dialog.preload){MW.Dialog.preload=false}else{y.focus()}}}}MW.Dialog=AJS.InlineDialog(MW.$("#"+x+"-anchor"),x+"-miniview",function(B,z,C){if(MW.$(B).children().length===0){MW.$(B).append(MW.$('<iframe id="'+x+'-miniview-iframe" src="'+v+'" frameborder="0"></iframe>'))}else{var A=JSON.stringify({unread:p}),y=MW.$("#"+x+"-miniview-iframe")[0].contentWindow;y.postMessage(A,"*");setTimeout(function(){y.focus()},100)}i();C()},{width:500,height:520,hideDelay:null,initCallback:u,hideCallback:s,noBind:true});MW.Tasks=(function(){var A=300;var z=20;var B=16;var G;var D=AJS.$("#user-menu-link");var C=AJS.$("#user-menu-link-content");var y=C.find("#view-mytasks-link");var E=function(J,H,K){var I=MyWork.Templates.Anchor.tasksFeatureDiscovery({tasksUrl:AJS.contextPath()+"/plugins/inlinetasks/mytasks.action"});J.html(I);J.find("#mw-tasks-discovery-dismiss").click(function(){G.hide()});K()};var F=function(){MW.Dialog.hide();var J=function(){return C.is(":visible")};if(!J()){D.trigger("aui-button-invoke")}var H=function(){G.hide()};C.one("aui-dropdown2-hide",H);G=AJS.InlineDialog(y,"my-tasks-discovery",E,{hideCallback:function(){G.unbind("click focusin mousedown",I);C.unbind("aui-dropdown2-hide",H);if(J()){D.trigger("aui-button-invoke")}MW.$("#inline-dialog-my-tasks-discovery").remove()},gravity:"w",useLiveEvents:true,width:A,noBind:true});C.find(".user-item.active").removeClass("active");y.addClass("active");y.focus();var I=function(K){K.stopPropagation()};G.on("click focusin mousedown",I);G.show()};return{closeAndDiscoverMyTasks:F}})();MW.$("#"+x+"-anchor").click(function(y){y.preventDefault();if(MW.$("#"+x+"-miniview-iframe").is(":visible")){MW.Dialog.hide()}else{MW.Dialog.show()}});if(e){MW.$("#"+x+"-anchor").click()}}function g(){q();m()}return{setupAnchors:g,updateNotificationCount:j}}();MW.MV.AnchorManager.setupAnchors();var b=new MW.AnchorUtil(MW.$,contextPath,MW.MV.AnchorManager.updateNotificationCount);b.setupAnchors();MW.$("#notifications-anchor").click(function(){MW.MV.AnchorManager.updateNotificationCount(0)});var a=function(){if(document.hidden){b.stopRequests(true)}else{b.startRequests()}};document.addEventListener("visibilitychange",a,false);if(typeof document.hidden==="undefined"){MW.$(window).focus(function(){b.startRequests()})}MW.$("body").click(function(){b.startRequests()})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'js/util/anchor-util.js' */
MW.AnchorUtil=function(d,k,e){var f=30000,i=f,s,p=k+"/rest/mywork/latest/status/notification/count";var r=new Date().getTime();var b=5*60*1000;var t=1000*60*5;var h=1.25;var c=0;function q(u){window.clearInterval(s);s=undefined;if(u===true){i=f}}function o(){return(new Date().getTime()-r)<t}function m(){if(!o()||!s){l()}r=new Date().getTime()}function l(){if(s){clearTimeout(s)}s=setTimeout(function(){g()},c=n(c))}function a(w,u){var v=w*1000;b=u*1000||b;if(v&&v!=i){i=v;m()}}function n(u){return Math.min(o()?i:u*h,b)}function g(u){MW.$.getJSON(p+((u)?"?pageid="+u:""),function(w){a(w.timeout,w.maxTimeout);var v=w.count;e(v)});l()}function j(){var u=AJS&&AJS.Meta&&AJS.Meta.get&&(AJS.Meta.get("content-type")==="page"||AJS.Meta.get("content-type")==="blogpost");if(u){g(AJS.Meta.get("page-id"))}else{g()}m()}return{setupAnchors:j,startRequests:m,stopRequests:q,updateAnchors:g}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-amd-shims', location = '/js/amd-shims/ajs.js' */
define("atlassian-nps-plugin/js/amd-shims/ajs",function(){return AJS});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-amd-shims', location = '/js/amd-shims/templates.js' */
define("atlassian-nps-plugin/js/amd-shims/templates",function(){return NPS.Templates});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-amd-shims', location = '/js/amd-shims/wrm.js' */
define("atlassian-nps-plugin/js/amd-shims/wrm",function(){return WRM});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-acknowledgement-resources', location = 'js/nps/server/nps-initialiser.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:common-template-resources', location = 'com/atlassian/confluence/plugins/blueprint/common/soy/common-templates.soy' */
// This file was automatically generated from common-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Common == 'undefined') { Confluence.Blueprints.Common = {}; }
if (typeof Confluence.Blueprints.Common.Index == 'undefined') { Confluence.Blueprints.Common.Index = {}; }


Confluence.Blueprints.Common.Index.detailsSummaryMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="detailssummary"><ac:parameter ac:name="label">', soy.$$escapeHtml(opt_data.label), '</ac:parameter><ac:parameter ac:name="spaces">', soy.$$escapeHtml(opt_data.spaces), '</ac:parameter><ac:parameter ac:name="firstcolumn">', soy.$$escapeHtml(opt_data.firstcolumn), '</ac:parameter><ac:parameter ac:name="headings">', soy.$$escapeHtml(opt_data.headings), '</ac:parameter><ac:parameter ac:name="blankTitle">', soy.$$escapeHtml(opt_data.blankTitle), '</ac:parameter><ac:parameter ac:name="blankDescription">', soy.$$escapeHtml(opt_data.blankDescription), '</ac:parameter><ac:parameter ac:name="contentBlueprintId">', soy.$$escapeHtml(opt_data.contentBlueprintId), '</ac:parameter><ac:parameter ac:name="blueprintModuleCompleteKey">', soy.$$escapeHtml(opt_data.blueprintModuleCompleteKey), '</ac:parameter><ac:parameter ac:name="createButtonLabel">', soy.$$escapeHtml(opt_data.createButtonLabel), '</ac:parameter></ac:macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Common.Index.createFromTemplateMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="create-from-template"><ac:parameter ac:name="blueprintModuleCompleteKey">', soy.$$escapeHtml(opt_data.moduleKey), '</ac:parameter><ac:parameter ac:name="buttonLabel">', soy.$$escapeHtml(opt_data.buttonLabel), '</ac:parameter><ac:parameter ac:name="spaceKey">', soy.$$escapeHtml(opt_data.spaceKey), '</ac:parameter><ac:parameter ac:name="templateName">', soy.$$escapeHtml(opt_data.templateName), '</ac:parameter></ac:macro>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/how-to.soy' */
// This file was automatically generated from how-to.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Meeting == 'undefined') { Confluence.Blueprints.Meeting = {}; }
if (typeof Confluence.Blueprints.Meeting.Notes == 'undefined') { Confluence.Blueprints.Meeting.Notes = {}; }


Confluence.Blueprints.Meeting.Notes.howTo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h1>', soy.$$escapeHtml("With meeting notes you can..."), '</h1><ol class="howto-steps"><li class="howto-step"><div><h3>', soy.$$escapeHtml("Crowd-source your agenda"), '</h3><p>', soy.$$escapeHtml("Distribute an agenda and keep meetings focused."), '</p></div></li><li class="howto-step"><div><h3>', soy.$$escapeHtml("Capture meeting minutes"), '</h3><p>', soy.$$escapeHtml("Take notes and make them available to everyone."), '</p></div></li><li class="howto-step"><div><h3>', soy.$$escapeHtml("Create and assign tasks"), '</h3><p>', soy.$$escapeHtml("Assign action items for attendees to work on afterward."), '</p></div></li></ol>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/user-mention.soy' */
// This file was automatically generated from user-mention.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Meeting == 'undefined') { Confluence.Templates.Meeting = {}; }
if (typeof Confluence.Templates.Meeting.Notes == 'undefined') { Confluence.Templates.Meeting.Notes = {}; }


Confluence.Templates.Meeting.Notes.userMention = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.username) ? '<li><p><ac:link><ri:user ri:username="' + soy.$$escapeHtml(opt_data.username) + '" /></ac:link></p></li><li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml("@mention a person to add them as an attendee and they will be notified.") + '</ac:placeholder></p></li>' : '<li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml("@mention a person to add them as an attendee and they will be notified.") + '</ac:placeholder></p></li>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ace:ace', location = '/js/confluence-ace.js' */
(function(d){function a(b){var c=this;this.storage=AJS.storageManager("atlassian","ace");this.settings=d.extend({},f,b);this.settings.zones=d(this.settings.zones).filter(function(b,a){return c._isValidZone(a)}).toArray()}var e=[".atlassian.net",".jira.com",".jira-dev.com"],f={host:"ace.atlassian.com",path:"/j/",zones:[{name:"Dashboard upper left",urlRegex:"dashboard.action",appendAfter:"div.dashboard-group.left",appendAsChild:!0,id:71},{name:"OnDemand Footer",appendAfter:".footer",appendAsChild:!0,
wrap:'<div style="text-align: center"></div>',id:72},{name:"Confluence Studio Standalone footer",appendAfter:".footer-body",appendAsChild:!0,wrap:'<div style="text-align: center"></div>',id:72}],cacheEnabled:!1,pollInterval:9E5};a.prototype._isValidZone=function(b){return!RegExp(b.urlRegex||"").test(window.location.pathname)?!1:1==d(b.appendAfter).length?!0:!1};a.prototype.start=function(){var b=this;if(this._isOnDemandDomain()){var c=AJS.Meta.get("remote-user");if(!(null==c||""==c))if(this._isCacheStale()){this.storage.setItem("lastChecked",
this._nowInMs());for(c=0;c<this.settings.zones.length;c++){var a=this.settings.zones[c],e=this._createURL(a),a=function(c){return function(a){c.html=a.html;b._displayZone(c);b.storage.setItem("zones",JSON.stringify(b.settings.zones))}}(a);d.ajax({url:e,dataType:"jsonp",contentType:"application/json",success:a,error:function(b,c,a){AJS.log("Could not get banner from ace: "+a)}})}}else this._displayFromCache()}};a.prototype._displayZone=function(b){if(this._isValidZone(b)&&b.html){var c=d(b.appendAfter),
a=d(b.html);b.appendAsChild?c.prepend(a):c.after(a);a.wrap(b.wrap||"<div></div>")}};a.prototype._displayFromCache=function(){var b=this.storage.getItem("zones");if(null!=b)try{for(var c=JSON.parse(b),b=0;b<c.length;b++)this._displayZone(c[b])}catch(a){AJS.log("Error retrieving ACE messages from cache")}};a.prototype._createURL=function(b){var c="https:"==location.protocol?"https://"+this.settings.host+this.settings.path:"http://"+this.settings.host+this.settings.path,a=Math.floor(99999999999*Math.random());
document.MAX_used||(document.MAX_used=",");var d=","!=document.MAX_used?"&exclude="+document.MAX_used:"",e=document.charset?"&charset="+document.charset:document.characterSet?"&charset="+document.characterSet:"",f=document.URL?"&referer="+escape(document.URL):"",g=document.context?"&context="+escape(document.context):"";return c+"?zoneid="+b.id+"&cb="+a+d+e+"&loc="+escape(window.location)+f+g};a.prototype._isCacheStale=function(){if(!this.settings.cacheEnabled)return!0;var b=this.storage.getItem("lastChecked");
return null==b?!0:this._nowInMs()-b>this.settings.pollInterval};a.prototype._nowInMs=function(){return(new Date).getTime()};a.prototype._isOnDemandDomain=function(){var b=location.hostname,a;for(a=0;a<e.length;++a)if(-1!==b.indexOf(e[a],b.length-e[a].length))return!0;return!1};window.Confluence=window.Confluence||{};window.Confluence.ACE=window.Confluence.ACE||a})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ace:main', location = '/js/ace-main.js' */
AJS.toInit(function(){(new Confluence.ACE).start()});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.growth.product-growth-confluence-plugin:growth-web-resources', location = 'js/store.js' */
var GROW=GROW||{};GROW.Store=GROW.Store||{};(function(a){GROW.Store.get=function(b){return AJS.Meta.get(b)};GROW.Store.getNumber=function(b){return AJS.Meta.getNumber(b)};GROW.Store.getBoolean=function(b){return AJS.Meta.getBoolean(b)};GROW.Store.set=function(b,c){AJS.Meta.set(b,c);return a.ajax({url:contextPath+"/rest/growth/1/store",type:"PUT",contentType:"application/json",data:JSON.stringify({key:b,value:c})})};GROW.Store.setGlobal=function(b,c){AJS.Meta.set(b,c);return a.ajax({url:contextPath+"/rest/growth/1/store/global",type:"PUT",contentType:"application/json",data:JSON.stringify({key:b,value:c})})};GROW.Store.remove=function(b){AJS.Meta.set(b,null);return a.ajax({url:contextPath+"/rest/growth/1/store",type:"DELETE",contentType:"application/json",data:JSON.stringify({key:b})})};GROW.Store.removeGlobal=function(b){AJS.Meta.set(b,null);return a.ajax({url:contextPath+"/rest/growth/1/store/global",type:"DELETE",contentType:"application/json",data:JSON.stringify({key:b})})}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/request-access.js' */
AJS.toInit(function(e){var b=AJS.Meta.get("page-id"),c=e("#page-restricted-container"),a=AJS.Meta.get("remote-user"),d=e("#page-restricted-container button");if(c.length){e("#breadcrumbs").hide();e("#title-text.with-breadcrumbs").hide();if(d.length){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page.view",data:{pageId:b,requestAccessUser:a}})}}d.click(function(){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page",data:{pageId:b,requestAccessUser:a}});d.attr("aria-disabled","true");var f,g=e(Confluence.Request.Access.loading({}));d.replaceWith(g);e.ajax({url:Confluence.getContextPath()+"/rest/request-access/latest/page/restriction/"+b,success:function(h){f=e(Confluence.Request.Access.result({success:true,recipient:h}));c.removeClass("page-restricted");c.addClass("access-requested")},error:function(h,i){f=e(Confluence.Request.Access.result({success:false}))},complete:function(){g.replaceWith(f);Confluence.Binder.userHover()}})})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/grant-access.js' */
AJS.toInit(function(d){var a=AJS.Meta.get("page-id"),f=AJS.Meta.get("remote-user"),h=j("username"),e=j("userFullName");var c=e.split("+");e=c.join(" ");var g=d("#system-content-items");var k=d("#content-metadata-page-restrictions.restricted").length!==0;if(!g.length||!k||!j("grantAccess")){return}var b=d(Confluence.Request.Access.loading());var i=AJS.InlineDialog(g,"grantAccessDialog",function(m,l,n){m.css({padding:"20px"}).html(Confluence.Grant.Access.dialog({requestAccessUsername:h,requestAccessUserFullName:e}));m.on("click",".aui-button.grant-access",function(q){q.stopPropagation();var p=m.find(".actions-result");p.replaceWith(b);AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.grant.access.to.page",data:{pageId:a,grantAccessUser:f,requestAccessUser:h}});var o="",r=true;d.ajax({url:Confluence.getContextPath()+"/rest/request-access/latest/page/restriction/"+a,type:"POST",contentType:"application/json; charset=utf-8",data:h,success:function(t,u,s){if(s.status==202){o="Access was already granted to the user."}else{o="Access was granted, a notification to the user will be sent."}},error:function(s){r=false;if(s.status==412){o="Access was granted, but there is not a mail server configured so the notification could not be sent."}else{if(s.status==502){o="Access was granted, but an unexpected error happened while sending the notification."}else{o="Sorry, there was an unexpected error while granting access."}}},complete:function(s){b.replaceWith(d(Confluence.Grant.Access.result({success:r,message:o})));setTimeout(function(){i.hide()},4000)}})});m.on("click",".aui-button.deny-access",function(o){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.deny.access.to.page",data:{pageId:a,grantAccessUser:f,requestAccessUser:h}});i.hide()});n();return false},{offsetY:2,offsetX:0,width:350,hideDelay:null,noBind:true,hideCallback:function(){setTimeout(i.hide(),5000)}});i.show();function j(l){l=l.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+l+"=([^&#]*)"),m=n.exec(location.search);return m==null?"":decodeURIComponent(m[1].replace(/\+/g," "))}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/request-access.soy' */
// This file was automatically generated from request-access.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Request == 'undefined') { Confluence.Request = {}; }
if (typeof Confluence.Request.Access == 'undefined') { Confluence.Request.Access = {}; }


Confluence.Request.Access.result = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="request-access">');
  if (opt_data.success) {
    var usernameLink__soy6 = new soy.StringBuilder();
    Confluence.Request.Access.usernameLink({user: opt_data.recipient}, usernameLink__soy6);
    usernameLink__soy6 = usernameLink__soy6.toString();
    output.append('<span class="aui-icon aui-icon-small aui-iconfont-approve" data-unicode="UTF+E005" original-title=""></span><p class="title">', AJS.format("Your request has been sent to {0}. If approved you will receive an email shortly.",usernameLink__soy6), '</p>');
  } else {
    output.append('<span class="aui-icon aui-icon-small aui-iconfont-error" data-unicode="UTF+E011" original-title=""></span><p class="title">', soy.$$escapeHtml("Your request for access has not been sent. Contact your space admin."), '</p>');
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Request.Access.usernameLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml("/wiki"), '/display/~', soy.$$escapeUri(opt_data.user.name), '" class="url fn confluence-userlink" title data-username="', soy.$$escapeHtml(opt_data.user.name), '">', soy.$$escapeHtml(opt_data.user.fullName), '</a>');
  return opt_sb ? '' : output.toString();
};


Confluence.Request.Access.loading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class=\'aui-icon aui-icon-wait\'>', soy.$$escapeHtml("Loading, please wait"), '</span>"');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/grant-access.soy' */
// This file was automatically generated from grant-access.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Grant == 'undefined') { Confluence.Grant = {}; }
if (typeof Confluence.Grant.Access == 'undefined') { Confluence.Grant.Access = {}; }


Confluence.Grant.Access.dialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="grant-access-dialog">');
  var usernameLink__soy4 = new soy.StringBuilder();
  Confluence.Grant.Access.usernameLink({username: opt_data.requestAccessUsername, userFullName: opt_data.requestAccessUserFullName}, usernameLink__soy4);
  usernameLink__soy4 = usernameLink__soy4.toString();
  output.append('<h2 class="grant-access-title">', AJS.format("{0} requested access to view the page",usernameLink__soy4), '</h2><p class="grant-access-message">', soy.$$escapeHtml("Grant access to the page, or deny it explicitly."), '</p><div class="actions-result"><button class="aui-button grant-access">', soy.$$escapeHtml("Grant access"), '</button><button class="aui-button aui-button-link deny-access">', soy.$$escapeHtml("Deny"), '</button><div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Grant.Access.result = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="aui-icon aui-icon-small aui-iconfont-', (opt_data.success) ? 'approve' : 'error', '" data-unicode="UTF+E011" original-title=""></span><p class="title">', soy.$$escapeHtml(opt_data.message), '</p>');
  return opt_sb ? '' : output.toString();
};


Confluence.Grant.Access.usernameLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml("/wiki"), '/display/~', soy.$$escapeHtml(opt_data.username), '" class="url fn" title data-username="', soy.$$escapeHtml(opt_data.username), '">', soy.$$escapeHtml(opt_data.userFullName), '</a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.whatsnew:whats-new-resources', location = 'js/whats-new.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.whatsnew:whats-new-resources', location = 'templates/whats-new.soy' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.doctheme:splitter', location = 'doctheme/splitter-1.5.1/splitter.js' */
(function(c){c.fn.splitter=function(g){g=g||{};return this.each(function(){function n(f){f=e._posSplit+f[a.eventPos];a.outline?(f=Math.max(0,Math.min(f,b._DA-d._DA)),d.css(a.origin,f)):l(f)}function o(f){d.removeClass(a.activeClass);f=e._posSplit+f[a.eventPos];a.outline&&(m.remove(),m=null,l(f));j.css("-webkit-user-select","text");c(document).unbind("mousemove",n).unbind("mouseup",o)}function l(f){f=Math.max(e._min,b._DA-h._max,Math.min(f,e._max,b._DA-d._DA-h._min));d._DA=d[0][a.pxSplit];d.css(a.origin,
f).css(a.fixed,b._DF);e.css(a.origin,0).css(a.split,f).css(a.fixed,b._DF);h.css(a.origin,f+d._DA).css(a.split,b._DA-d._DA-f).css(a.fixed,b._DF);c.browser.msie||j.trigger("resize")}function k(a,b){for(var c=0,d=1;d<arguments.length;d++)c+=Math.max(parseInt(a.css(arguments[d]))||0,0);return c}var m,a=c.extend({activeClass:"active",pxPerKey:8,tabIndex:0,accessKey:""},{v:{keyLeft:39,keyRight:37,cursor:c.browser.msie?"e-resize":"ew-resize",splitbarClass:"vsplitbar",outlineClass:"voutline",type:"v",eventPos:"pageX",
origin:"left",split:"width",pxSplit:"offsetWidth",side1:"Left",side2:"Right",fixed:"height",pxFixed:"offsetHeight",side3:"Top",side4:"Bottom"},h:{keyTop:40,keyBottom:38,cursor:c.browser.msie?"n-resize":"ns-resize",splitbarClass:"hsplitbar",outlineClass:"houtline",type:"h",eventPos:"pageY",origin:"top",split:"height",pxSplit:"offsetHeight",side1:"Top",side2:"Bottom",fixed:"width",pxFixed:"offsetWidth",side3:"Left",side4:"Right"}}[(g.splitHorizontal?"h":g.splitVertical?"v":g.type)||"v"],g),b=c(this).css({position:"relative"}),
j=b.children().css({position:"absolute","-moz-outline-style":"none"}),e=c(j[0]),h=c(j[1]),i=c('<a href="javascript:void(0)"></a>').attr({accessKey:a.accessKey,tabIndex:a.tabIndex,title:a.splitbarClass}).bind(c.browser.opera?"click":"focus",function(){this.focus();d.addClass(a.activeClass)}).bind("keydown",function(b){b=b.which||b.keyCode;(b=b==a["key"+a.side1]?1:b==a["key"+a.side2]?-1:0)&&l(e[0][a.pxSplit]+b*a.pxPerKey,!1)}).bind("blur",function(){d.removeClass(a.activeClass)}),d=c(j[2]||"<div></div>").insertAfter(e).css("z-index",
4).append(i).attr({"class":a.splitbarClass,unselectable:"on"}).css({position:"absolute","user-select":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none"}).bind("mousedown",function(b){a.outline&&(m=m||d.clone(!1).insertAfter(e));j.css("-webkit-user-select","none");d.addClass(a.activeClass);e._posSplit=e[0][a.pxSplit]-b[a.eventPos];c(document).bind("mousemove",n).bind("mouseup",o)});/^(auto|default|)$/.test(d.css("cursor"))&&d.css("cursor",a.cursor);d._DA=d[0][a.pxSplit];
b._PBF=c.boxModel?k(b,"border"+a.side3+"Width","border"+a.side4+"Width"):0;b._PBA=c.boxModel?k(b,"border"+a.side1+"Width","border"+a.side2+"Width"):0;e._pane=a.side1;h._pane=a.side2;c.each([e,h],function(){this._min=a["min"+this._pane]||k(this,"min-"+a.split);this._max=a["max"+this._pane]||k(this,"max-"+a.split)||9999;this._init=!0===a["size"+this._pane]?parseInt(c.curCSS(this[0],a.split)):a["size"+this._pane]});i=e._init;isNaN(h._init)||(i=b[0][a.pxSplit]-b._PBA-h._init-d._DA);if(a.cookie){c.cookie||
alert("jQuery.splitter(): jQuery cookie plugin required");var p=parseInt(c.cookie(a.cookie));isNaN(p)||(i=p);e.bind("resize",_.debounce(function(){var b=String(d.css(a.origin));c.cookie(a.cookie,b,{expires:a.cookieExpires||365,path:a.cookiePath||document.location.pathname})},300))}isNaN(i)&&(i=Math.round((b[0][a.pxSplit]-b._PBA-d._DA)/2));var q=function(a){var d=b.offset().top,e=c("#footer").outerHeight(!0);e||(e=24);e=c(window).height()-e;b.css("height",Math.max(e-d-b._hadjust,b._hmin)+"px");(!a||
a.target==window)&&b.trigger("resize")};g.update=function(a){b._hadjust=k(b,"borderTopWidth","borderBottomWidth","marginBottom");b._hmin=Math.max(k(b,"minHeight"),20);a&&c(window).bind("resize",q);q()};a.anchorToWindow?g.update(!0):a.resizeToWidth&&!c.browser.msie&&c(window).bind("resize",function(){b.trigger("resize")});b.bind("resize",function(c,g){c.target==this&&(b._DF=b[0][a.pxFixed]-b._PBF,b._DA=b[0][a.pxSplit]-b._PBA,0>=b._DF||0>=b._DA||l(!isNaN(g)?g:!a.sizeRight&&!a.sizeBottom?e[0][a.pxSplit]:
b._DA-h[0][a.pxSplit]-d._DA))}).trigger("resize",[i])})}})(jQuery);window.placeFocus=function(){var c=document.getElementById("splitter-content");c&&0==AJS.$("#wysiwyg").length&&c.focus()};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.doctheme:splitter', location = 'doctheme/space-specific-quicknav.js' */
AJS.toInit(function(b){if(b("#com-atlassian-confluence").hasClass("theme-documentation")){var c=b("#quick-search-query"),e=c.closest("form"),d="true"===b("fieldset input[name='spaceSearch']",e).val()?b("#confluence-space-key").attr("content"):"";e.submit(function(){var a=c.val();0<=a.search(/all:/gi)&&c.val(b.trim(a.replace(/all:/gi,"")))});var f=AJS.defaultIfUndefined("Atlassian.SearchableApps.QuickNav",{defaultValue:Confluence.QuickNav});AJS.log("Applying doc-theme quick search");f.addDropDownPostProcess(function(a){d&&
(a=b("a.search-for",a),a.attr("href",a.attr("href")+"&where="+encodeURIComponent(d)))});f.setMakeParams(function(a){a={query:a};0<=a.query.search(/all:/gi)?(b("input[name='where']",e).val(""),a.query=b.trim(a.query.replace(/all:/gi,"")),a.query||(a.query="ALL")):d&&(a.spaceKey=d);return a});c.mouseover(function(){d&&c.attr("title",b("input[name='tooltip']",e).val())})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:deferred-loaders', location = '/includes/js/deferred-dialog-loader.js' */
define("confluence/deferred-dialog-loader",["underscore","jquery","ajs","confluence"],function(a,e,b,f){return function(){var g=f.PageLoadingIndicator(e("body"));a.each({userStatus:{resource:"confluence.userstatus:userstatus-resources",selector:"#create-user-status-link",event:"deferred.userstatus.click"},movePageDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-page-dialog-link",event:"deferred.page-move.tools-menu"},movePageDialogEditor:{resource:"confluence.web.resources:page-move-resources",
selector:"#rte-button-location",event:"deferred.page-move.editor"},moveBlogDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-blogpost-dialog-link",event:"deferred.blog-move.tools-menu"},availableGadgetsHelp:{resource:"com.atlassian.confluence.plugins.gadgets:gadget-directory-resources",selector:"#gadget-directory-link",event:"deferred.available-gadgets.help-menu"},aboutConfluenceHelp:{resource:"confluence.web.resources:about",selector:"#confluence-about-link",
event:"deferred.about-confluence.help-menu"}},function(c){e("body").on("click",c.selector,function(a){var d=WRM.require("wr!"+c.resource,function(){b.trigger(c.event)});g.showUntilDialogVisible(d);d=c.resource+".requested";b.Analytics?b.Analytics.triggerPrivacyPolicySafeEvent(d):b.trigger("analyticsEvent",{name:d});a.preventDefault()})})}});require("confluence/module-exporter").safeRequire("confluence/deferred-dialog-loader",function(a){AJS.toInit(a)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:deferred-loaders', location = '/includes/js/page-permissions-deferred-loader.js' */
define("confluence/page-permissions-deferred-loader",["confluence/dark-features","confluence","ajs","confluence/page-loading-indicator","jquery"],function(a,b,c,d,e){var f=d(e("body"));return function(a){var b=WRM.require("wr!com.atlassian.confluence.plugins.confluence-page-restrictions-dialog:dialog-resources",function(){c.trigger("deferred.page.permissions")});f.showUntilDialogVisible(b,"There was an error loading the page restrictions. Please try again later.");a.preventDefault()}});
require("confluence/module-exporter").safeRequire("confluence/page-permissions-deferred-loader",function(a){AJS.toInit(function(b){b("body").on("click","#rte-button-restrictions,#action-page-permissions-link",a);AJS.bind("system-content-metadata.open-restrictions-dialog",a)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:nps-util', location = '/js/nps/util.js' */
define("atlassian-nps-plugin/js/nps/util",["atlassian-nps-plugin/js/nps/product","atlassian-nps-plugin/js/amd-shims/ajs"],function(b,a){var c={};c.kfyShuffle=function(g){for(var f=g.length-1;f>0;f--){var d=Math.floor(Math.random()*(f+1));var e=g[f];g[f]=g[d];g[d]=e}return g};c.sendAnalyticsEvent=function(d,e){e=e||{};e.product=b.getProductName().toLowerCase();e.page=window.location.pathname.replace(/\//g," ");var f={name:"nps."+d,data:e};a.trigger("analyticsEvent",f)};return c});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/product/confluence.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/client-storage.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/submission.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/config-manager-client.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/config-manager-server.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/nps/session-manager.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/atlassian-nps-plugin.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.plugins.atlassian-nps-plugin:atlassian-nps-plugin-resources', location = '/js/bootstrap.js' */

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'js/url.js' */
+function(){var d=/\[([^\[]*)\]$/;var b=/^(?:([a-z]*):)?(?:\/\/)?(?:([^:@]*)(?::([^@]*))?@)?([0-9a-z-._]+)?(?::([0-9]*))?(\/[^?#]*)?(?:\?([^#]*))?(?:#(.*))?$/i;var c=["mailto","bitcoin"];var a={get:function(e,g){e=e||"";if(typeof g=="undefined"){g={}}if(typeof g.full=="undefined"){g.full=false}if(typeof g.array=="undefined"){g.array=false}if(g.full===true){e=a.parse(e,{get:false})["query"]||""}var h={};var r=e.split("&");for(var n=0;n<r.length;n++){if(!r[n].length){continue}var p=r[n].indexOf("=");var m=r[n],t=true;if(p>=0){m=r[n].substr(0,p);t=r[n].substr(p+1);t=decodeURIComponent(t)}if(g.array){var s=[];var j;var f=h;var l=m;while(j=l.match(d)){l=l.substr(0,j.index);s.unshift(decodeURIComponent(j[1]))}l=decodeURIComponent(l);if(s.some(function(k){if(typeof f[l]=="undefined"){f[l]=[]}if(!Array.isArray(f[l])){return true}f=f[l];if(k===""){k=f.length}l=k})){continue}f[l]=t;continue}m=decodeURIComponent(m);h[m]=t}return h},buildget:function(j,i){var g=[];for(var f in j){var h=encodeURIComponent(f);if(typeof i!="undefined"){h=i+"["+h+"]"}var e=j[f];switch(typeof e){case"boolean":if(e){g.push(h)}break;case"number":e=e.toString();case"string":g.push(h+"="+encodeURIComponent(e));break;case"object":g.push(a.buildget(e,h));break}}return g.join("&")},parse:function(e,f){if(typeof f=="undefined"){f={}}var h=e.match(b)||[];var g={url:e,scheme:h[1],user:h[2],pass:h[3],host:h[4],port:h[5]&&+h[5],path:h[6],query:h[7],hash:h[8],};if(f.get!==false){g.get=g.query&&a.get(g.query,f.get)}return g},build:function(h,e){e=e||{};var f="";if(typeof h.scheme!="undefined"){f+=h.scheme;f+=(c.indexOf(h.scheme)>=0)?":":"://"}if(typeof h.user!="undefined"){f+=h.user;if(typeof h.pass=="undefined"){f+="@"}}if(typeof h.pass!="undefined"){f+=":"+h.pass+"@"}if(typeof h.host!="undefined"){f+=h.host}if(typeof h.port!="undefined"){f+=":"+h.port}if(typeof h.path!="undefined"){f+=h.path}if(e.useemptyget){if(typeof h.get!="undefined"){f+="?"+a.buildget(h.get)}else{if(typeof h.query!="undefined"){f+="?"+h.query}}}else{var g=h.get&&a.buildget(h.get)||h.query;if(g){f+="?"+g}}if(typeof h.hash!="undefined"){f+="#"+h.hash}return f||h.url||""},};if(typeof define!="undefined"&&define.amd){define(a)}else{if(typeof module!="undefined"){module.exports=a}else{window.url=a}}}();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = '/templates/gliffy-image-selection-widget.soy' */
// This file was automatically generated from gliffy-image-selection-widget.soy.
// Please don't edit this file by hand.

if (typeof gliffySoy == 'undefined') { var gliffySoy = {}; }
if (typeof gliffySoy.widget == 'undefined') { gliffySoy.widget = {}; }
if (typeof gliffySoy.widget.image == 'undefined') { gliffySoy.widget.image = {}; }


gliffySoy.widget.image.gliffyImageSelectionWidget = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="gliffy-image-selection ', soy.$$escapeHtml(opt_data.className), '"><div class="gliffy-image-selection-inner-panel" title="', soy.$$escapeHtml(opt_data.labelText), '"><div class="gliffy-image-selection-spinner"/><div><img class="gliffy-image-selection-image"/><div class="gliffy-image-selection-icon gliffy-image-selection-zoom"><img/></div></div></div><div class="gliffy-image-selection-label">', soy.$$escapeHtml(opt_data.labelText), '</div></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = '/templates/gliffy-pinned-version-dialog.soy' */
// This file was automatically generated from gliffy-pinned-version-dialog.soy.
// Please don't edit this file by hand.

if (typeof gliffySoy == 'undefined') { var gliffySoy = {}; }
if (typeof gliffySoy.dialog == 'undefined') { gliffySoy.dialog = {}; }
if (typeof gliffySoy.dialog.version == 'undefined') { gliffySoy.dialog.version = {}; }


gliffySoy.dialog.version.pinnedVersionDialogPanel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" class="aui top-label"><div class="gliffy-version-dialog-panel"><div class="gliffy-version-dialog-description">', soy.$$escapeHtml(opt_data.promptText), '</div>');
  gliffySoy.widget.image.gliffyImageSelectionWidget({className: 'gliffy-version-pinned', labelText: opt_data.pinnedVersionLabelText}, output);
  gliffySoy.widget.image.gliffyImageSelectionWidget({className: 'gliffy-version-latest', labelText: opt_data.latestVersionLabelText}, output);
  output.append('</div></form>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'js/gliffy-pinned-version-dialog.js' */
(function(d){var i=function(w){var n=new AJS.Dialog({width:600,height:380,closeOnOutsideClick:false});var p=AJS.format("Version {0}",w.attachmentVersion);var o="Latest";n.addHeader(w.headerText);var j=gliffySoy.dialog.version.pinnedVersionDialogPanel({promptText:w.promptText,pinnedVersionLabelText:p,latestVersionLabelText:o});n.addPanel("",j,"panel-body");n.addButton("Select",function(x){x.remove();w.onComplete(x.pinnedVersionWasSelected)});n.show();var m=d(".gliffy-image-selection.gliffy-version-pinned");var s=m.find(".gliffy-image-selection-zoom");var v=m.find(".gliffy-image-selection-image");var u=d(".gliffy-image-selection.gliffy-version-latest");var r=u.find(".gliffy-image-selection-zoom");var k=u.find(".gliffy-image-selection-image");var t=function(x){var y;if(x===m){y=v}else{y=k}d.fancybox({orig:y,content:y.clone(),showCloseButton:true,hideOnOverlayClick:true,hideOnContentClick:true})};var l=function(x){if(x===m){n.pinnedVersionWasSelected=true;m.addClass("gliffy-image-selected");u.removeClass("gliffy-image-selected")}else{n.pinnedVersionWasSelected=false;u.addClass("gliffy-image-selected");m.removeClass("gliffy-image-selected")}};n.pinnedVersionWasSelected=w.pinnedIsDefault;l(w.pinnedIsDefault?m:u);s.on("click",function(){t(m)});m.on("click",function(){l(m)});r.on("click",function(){t(u)});u.on("click",function(){l(u)});var q=function(z,y){z.hide();var x=z.parent().parent().find(".gliffy-image-selection-spinner");Raphael.spinner(x.get(0),25,"#666");z.on("load",function(){x.hide();z.show()});if(y&&y!==0){z.attr("src",AJS.format("{0}/download/attachments/{1}/{2}.png?api=v2&version={3}&modificationDate=0",w.contextPath,w.ownerPageId,encodeURIComponent(w.diagramName),y))}else{z.attr("src","");z.attr("src",AJS.format("{0}/download/attachments/{1}/{2}.png?api=v2&timestamp={3}",w.contextPath,w.ownerPageId,encodeURIComponent(w.diagramName),new Date().getTime()))}};q(v,w.attachmentVersion);q(k,0)};var e=function(j){i(d.extend({headerText:"Select Diagram Version to Display",promptText:AJS.format("Version {0} is currently pinned to this page. Which version would you like to display?",j.attachmentVersion),pinnedIsDefault:false},j))};var c=function(j){i(d.extend({headerText:"Select Diagram Version to Edit",promptText:AJS.format("Version {0} is currently pinned to this page. Which version you would like to edit?",j.attachmentVersion),pinnedIsDefault:true},j))};var h=function(j){var k=AJS.format("{0}/rest/api/content/{1}?expand=body.storage,version,space,ancestors",AJS.Confluence.getContextPath(),j.referencePageId);d.ajax({type:"GET",url:k,success:function(l){d.ajax({type:"GET",url:k,success:function(m){var q=m.body.storage.value;var r=d("<div/>").append(q);var o=r.find("ac\\:parameter[ac\\:name='']");o.remove();var p=r.find("p:has(ac\\:parameter[ac\\:name='version'])p:has(ac\\:parameter[ac\\:name='name'])").filter(function(){var u=d(this).find("ac\\:parameter[ac\\:name='version']").text()===j.attachmentVersion.toString();var t=d(this).find("ac\\:parameter[ac\\:name='name']").text()===j.diagramName;var s=d(this).find("ac\\:parameter[ac\\:name='pageid']");var v=((s.length===0)&&(j.referencePageId===j.ownerPageId))||(s.text()===j.ownerPageId.toString());return u&&t&&v});var n=p.find("ac\\:parameter[ac\\:name='version']");n.remove();l.body.storage.value=r.html();l.version.number=l.version.number+1;if(l.ancestors){if(l.ancestors.length===0){delete l.ancestors}else{if(l.ancestors.length>1){l.ancestors=[l.ancestors.pop()]}}}d.ajax({type:"PUT",contentType:"application/json; charset=utf-8",url:k,data:JSON.stringify(l),dataType:"text",processData:false,success:function(){window.location.reload()}})}})}})};var a=function(j){var l=AJS.format("{0}/rpc/json-rpc/confluenceservice-v2",AJS.Confluence.getContextPath());var m=l+"/getPage";var k=[j.referencePageId];d.ajax({type:"POST",url:m,contentType:"application/json",data:JSON.stringify(k),success:function(o){var r=o.content;var t=d("<div/>").append(r);var q=t.find("ac\\:parameter[ac\\:name='']");q.remove();var s=t.find("p:has(ac\\:parameter[ac\\:name='version'])p:has(ac\\:parameter[ac\\:name='name'])").filter(function(){var w=d(this).find("ac\\:parameter[ac\\:name='version']").text()===j.attachmentVersion.toString();var v=d(this).find("ac\\:parameter[ac\\:name='name']").text()===j.diagramName;var u=d(this).find("ac\\:parameter[ac\\:name='pageid']");var x=((u.length===0)&&(j.referencePageId===j.ownerPageId))||(u.text()===j.ownerPageId.toString());return w&&v&&x});var p=s.find("ac\\:parameter[ac\\:name='version']");p.remove();var n={jsonrpc:"2.0",method:"updatePage",params:[{id:o.id,space:o.space,title:o.title,parentId:o.parentId,version:o.version,content:t.html()},{versionComment:"Unpinned macro version",minorEdit:false}],id:j.referencePageId};d.ajax({type:"POST",contentType:"application/json",url:l,data:JSON.stringify(n),success:function(){window.location.reload()}})}})};var b=function(j){var k;if(j.ownerPageId===Confluence.Editor.getContentId()){k=AJS.format('.editor-inline-macro[data-macro-parameters="name={0}|version={1}"]',j.diagramName,j.attachmentVersion)}else{k=AJS.format('.editor-inline-macro[data-macro-parameters="name={0}|pageid={2}|version={1}"]',j.diagramName,j.attachmentVersion,j.ownerPageId)}var l=AJS.Rte.getEditor().dom.select(k);AJS.$.each(l,function(n,m){var o=GLIFFY._confluence.utils.getMacroParams(m);o.version=undefined;var p={contentId:Confluence.Editor.getContentId(),macro:{name:"gliffy",params:o,defaultParameterValue:"",body:""}};GLIFFY.confluence.insertMacro(p,m)})};var g=function(j){var o=window.localStorage.getItem("com.gliffy.confluence.diagram.edited");if(o){var n=JSON.parse(o);if(n){var q=url.parse(n.url).get;var p=0;if(q.originalAttachmentVersion){p=parseInt(q.originalAttachmentVersion)}else{if(q.attachmentVersion){p=parseInt(q.attachmentVersion)}}var m=d.find(AJS.format('[data-pageid="{0}"]',q.pageId));if(p>0&&(q.inline==="true"||m.length>0)){var l=AJS.version.split("."),k=!(parseInt(l[0])>=5&&parseInt(l[1])>=4),r={diagramName:q.name,attachmentId:q.attachmentId,attachmentVersion:p,ownerPageId:q.ceoid,referencePageId:q.pageId};e(d.extend({contextPath:AJS.Confluence.getContextPath(),onComplete:function(s){window.localStorage.removeItem("com.gliffy.confluence.diagram.edited");if(!s){if(j){b(r)}else{if(k){a(r)}else{h(r)}}}}},r))}}}};var f=function(j,l,k,n,m){if(n&&n>0){d.ajax({url:j+"/rest/gliffy/1.0/diagrams/allVersionInformation",type:"GET",data:{name:l,pageId:k},success:function(o){m(o.numRevisions!==parseInt(n))},error:function(o){m(false)}})}else{m(false)}};window.GLIFFY=window.GLIFFY||{};window.GLIFFY.editDiagramFromViewPage=function(j){var j=d.extend({contextPath:AJS.Confluence.getContextPath()},j);f(j.contextPath,j.diagramName,j.ownerPageId,j.attachmentVersion,function(k){if(k){c(d.extend({onComplete:function(l){var m;if(l){m=j.url}else{m=j.url.replace("attachmentVersion=","originalAttachmentVersion=")}window.open(m,"_self")}},j))}else{window.open(j.url,"_self")}})};window.GLIFFY.editDiagramFromEditPage=function(j){var j=d.extend({contextPath:AJS.Confluence.getContextPath()},j);f(j.contextPath,j.diagramName,j.ownerPageId,j.attachmentVersion,function(k){if(k){c(d.extend({onComplete:function(l){if(!l){j.originalAttachmentVersion=j.attachmentVersion;j.attachmentVersion=0}AJS.trigger("gliffy.confluence.launchInlineEditor",[j])}},j))}else{AJS.trigger("gliffy.confluence.launchInlineEditor",[j])}})};AJS.bind("gliffy.confluence.inlineEditorClosed",function(){g(true)});d(function(){g(false)})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'js/gliffy-on-confluence-init.js' */
AJS.toInit(function(){AJS.$("table.attachments tr").each(function(a,b){AJS.$(b).find("td.attachment-actions a").each(function(c,d){if(AJS.$(d).attr("href").indexOf("/plugins/gliffy/view")!=-1){AJS.$(b).find("td.filename-column span").removeClass("icon-file-xml icon-file-unknown").addClass("gliffy-document-icon").attr("title","Gliffy File").text("Gliffy File")}})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'js/gliffy-blueprint-registration.js' */
AJS.toInit(function(){if(Confluence&&Confluence.Blueprint&&Confluence.Blueprint.register){Confluence.Blueprint.register("com.gliffy.integration.confluence:gliffy-blueprint-item-main",function(e,f,d){window.location=Confluence.getContextPath()+"/pages/createpage.action?showGliffyMacro=true&fromCreateDialog=true&spaceKey="+encodeURIComponent(f)+"&newSpaceKey="+encodeURIComponent(f)+(e.getParentPageId()?"&fromPageId="+e.getParentPageId():"")});var c=function(d){Confluence.Blueprint.register("com.gliffy.integration.confluence:gliffy-blueprint-item-"+d,function(f,g,e){window.location=Confluence.getContextPath()+"/pages/createpage.action?showGliffyMacro=true&createDiagramType="+d+"&spaceKey="+encodeURIComponent(g)+"&newSpaceKey="+encodeURIComponent(g)+(f.getParentPageId()?"&fromPageId="+f.getParentPageId():"")})};var b=["org","network","software"];for(var a=0;a<b.length;a++){c(b[a])}Confluence.Blueprint.register("com.gliffy.integration.confluence:gliffy-blueprint-item-pack",function(e,h,d){var i=e.addPage("myplugin-step-2"),g=function(){var k=$("#my-title").val();var j=$("#my-text-field").val();d(k,{myName:j})};var f='<div class="template-select-container-body"><ol class="templates" tabindex="100"><li class="template selected"data-item-module-complete-key="com.gliffy.integration.confluence:gliffy-blueprint-item-main"><imgclass="template-preview"src="/confluence/s/en_GB-1988229788/4103/31cc10c48352e244f00edd8fa27d95566a28e0c5.1/0.0-SNAPSHOT/_/download/resources/com.gliffy.integration.confluence:gliffy-blueprint-item-main/icon"><div class="template-meta"><div class="template-name" title="Gliffy Diagram">Corporate Org Chart</div><div class="template-description" title="Add a blank page with a Gliffy Diagram.">Add a page with a Corporate Org Chart</div></div></li><li class="template"data-item-module-complete-key="com.gliffy.integration.confluence:gliffy-blueprint-item-pack"><imgclass="template-preview"src="/confluence/s/en_GB-1988229788/4103/31cc10c48352e244f00edd8fa27d95566a28e0c5.1/0.0-SNAPSHOT/_/download/resources/com.gliffy.integration.confluence:gliffy-blueprint-item-pack/icon"><div class="template-meta"><div class="template-name" title="Gliffy Human Resources Pack">Reimbursement Process</div><div class="template-description" title="Choose from a list of diagrams relating to Human Resources.">Add a page with that shows a Reimbursement Process in your organization</div></div></li><li class="template"data-item-module-complete-key="com.gliffy.integration.confluence:gliffy-blueprint-item-pack"><imgclass="template-preview"src="/confluence/s/en_GB-1988229788/4103/31cc10c48352e244f00edd8fa27d95566a28e0c5.1/0.0-SNAPSHOT/_/download/resources/com.gliffy.integration.confluence:gliffy-blueprint-item-pack/icon"><div class="template-meta"><div class="template-name" title="Gliffy Human Resources Pack">Termination Process</div><div class="template-description" title="Choose from a list of diagrams relating to Human Resources.">Shows you how to fire the guy who had ten too many tequila shots at the last company party.</div></div></li></ol></div>';i.addHeader("Gliffy Human Resources Pack").addPanel("SinglePanel",f,"singlePanel").addButton("Previous",function(j){j.prevPage();j.page.pop()},"").addButton("Create",g,"aui-button-primary create-dialog-create-button").addLink("Close",function(j){j.remove()},"");i.getPanel(0).setPadding(0);$("#my-title").focus();$("#myplugin-form").submit(function(){g(e);return false});return false})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'js/gliffy-footer.js' */
AJS.toInit(function(){if(AJS.version>="3.0"){var a=AJS.$("#poweredby:visible");if(a.length>0){a.before(AJS.template.load("gliffy-webpanel-footer"))}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-hide-traditional', location = 'jscripts/add-comment-hider.js' */
AJS.toInit(function(a){a("#comments-actions").hide()});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
