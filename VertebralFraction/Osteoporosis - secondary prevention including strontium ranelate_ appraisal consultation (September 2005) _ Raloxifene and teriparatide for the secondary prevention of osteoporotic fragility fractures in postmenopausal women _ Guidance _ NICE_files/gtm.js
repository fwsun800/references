
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"124",
  
  "macros":[{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],".pathname.split(\"\/\");a=a.pop();return-1\u003Ca.indexOf(\".\")?a:\"n\/a\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=document.getElementsByTagName(\"iframe\"),b=a.length;b--;)if(\/youtube.com\\\/embed\/.test(a[b].src))return!0;return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!0})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"undefined\"===typeof jQuery)return\"\";var a=$(",["escape",["macro",4],8,16],");return a.closest(\".media\").index()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.location.search.match(\/pa=(\\d+)\/i);return a?a[1]:1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"undefined\"===typeof jQuery)return\"\";var a=$(\".search-list__results-term\").text().match(\/(\\d+)\/m);return a?Number(a[1]):0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"undefined\"===typeof jQuery)return\"\";var a=$(",["escape",["macro",4],8,16],");return $.trim(a.closest(\".media\").find(\".media-heading\").text())})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"undefined\"===typeof jQuery)return\"\";var a=",["escape",["macro",4],8,16],";return $.trim($(a).closest(\".control\").text())})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";return 1==a.checked?\"Selected\":\"Deselected\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"===typeof jQuery?-1:$(\".breadcrumb-steps .active\").index()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"undefined\"===typeof jQuery)return\"\";var a=$(\"#navigators-select\").length\u003E$(\"#checkBoxForm\").length?$(\"#navigators-select\"):$(\"#checkBoxForm\");return a.find(\"input:checked\").map(function(a,b){return $.trim($(b).closest(\"label\").text())}).get().join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"===typeof jQuery?\"\":$(\"#guidanceTabs a.active\").text()})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function d(b,a){a=new RegExp(a+\"\\x3d([^\\x26]*)\",\"i\");return(b=b.match(a))?decodeURIComponent(b[1]):\"\"}function e(b,a,c){b=d(b,c);a=d(a,c);return b!=a?a:null}var c=",["escape",["macro",14],8,16],"||\"\",f=window.location.href,g=e(c,f,\"fromdate\");return g?\"From: \"+g:(c=e(c,f,\"todate\"))?\"To: \"+c:\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function b(a,b){b=new RegExp(b+\"\\x3d([^\\x26]*)\",\"i\");return(a=a.match(b))?decodeURIComponent(a[1]):\"\"}var a=",["escape",["macro",14],8,16],"||\"\",c=window.location.href,d=b(a,\"fromdate\");if(b(c,\"fromdate\")!=d)return\"From date: \"+d;a=b(a,\"todate\");return b(c,\"todate\")!=a?\"To date: \"+a:null})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",17],8,16],";return\/^\\\/guidance\\\/(?:published|indevelopment|inconsultation|proposed)\/i.test(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"undefined\"===typeof jQuery)return!1;var a=",["escape",["macro",4],8,16],",b=$(\".indepth-highlight .primary-article img\")[0];return a===b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"undefined\"===typeof jQuery)return!1;var a=",["escape",["macro",4],8,16],",b=$(\".indepth-highlight .primary-article img\")[1];return a===b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"undefined\"===typeof jQuery)return!1;var a=",["escape",["macro",4],8,16],",b=$(\".indepth-highlight .primary-article footer a\")[0];return a===b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],",b=$(\".indepth-highlight .primary-article footer a\")[1];return a===b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"undefined\"===typeof jQuery)return!1;var a=",["escape",["macro",4],8,16],",b=$(\".widget-title a.latest-guidance-title\")[0];return a==b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003Cdocument.querySelectorAll(\".gtm-topic-page\").length})();"]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",25],8,16],";return a.replace(\/\\([^)]+\\)\/g,\"\").replace(\/\\s*$\/,\"\").replace(\/^\\s*\/,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003Cdocument.querySelectorAll(\".gtm-topic-list-page\").length})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",25],8,16],";return a.replace(\/^[0-9]+\\s*\/g,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(\".gtm-guideline-page-tab .product-page .navbar-resources .dropdown\");return a.hasClass(\"open\")?\"Expanded\":\"Collapsed\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",4],8,16],");a=a.closest(\".dropdown\");a=$.trim(a.find(\".dropdown-toggle\").text());return a.replace(\/^[0-9]+\\s*\/g,\"\")+\" - \"+",["escape",["macro",25],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",4],8,16],"),c=a.attr(\"href\"),b=a.text();if(0\u003C(b||\"\").length)return $.trim(b)+\" | Text\";b=a.find(\"img\");if(1===b.length\u0026\u00260\u003C(b.attr(\"alt\")||\"\").length)return $.trim(b.attr(\"alt\"))+\" | Image\";a=a.closest(\"div\").find(\"a[href\\x3d'\"+c+\"']\").not(a);return 0\u003Ca.length?$.trim(a.first().text())+\" | Image\":\"Unknown\"})();"]
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",32],8,16],".split(",["escape",["macro",33],8,16],")[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(\"#search-media-list h1 span.search-list__results-term mark\").text().trim(),b=$(\"#search-media-list span.search-list__original-term i\").text().trim();return a+\" | \"+b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=0;if(null!=document.querySelector(\".emptyresults\"))return 0;for(var c=Array.prototype.slice.call(document.querySelectorAll(\".media-heading\")),a=0;a\u003Cc.length;a++){var d=c[a].getBoundingClientRect();if(0\u003Cd.top\u0026\u0026d.bottom\u003Cwindow.innerHeight)b++;else break}return b})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",37],8,16],".toLowerCase().match(\/[^\\\/\\?\u0026%]{3}(?:@|%(?:25)*40)[^\\\/\\?\u0026%]{3}\/gi)?",["escape",["macro",37],8,16],".replace(\/([^\\\/\\?\u0026%](?!(@@|%(?:25)*40%(?:25)*40))){1,6}(?:@|%(?:25)*40)[^\\\/$]{4,6}\/gi,\"****@****\").replace(\/fbclid=.*?(?=(\u0026|%(?:25)*26|$))+\/gi,\"fbclid****\").replace(\/token=.*?(?=(\u0026|%(?:25)*26|$))+\/gi,\"token\\x3d****\"):",["escape",["macro",37],8,16],".replace(\/fbclid=.*?(?=(\u0026|%(?:25)*26|$))+\/gi,\"fbclid\\x3d****\").replace(\/token=.*?(?=(\u0026|%(?:25)*26|$))+\/gi,\"token\\x3d****\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",17],8,16],".toLowerCase().replace(\/([^\\\/\\?\u0026%](?!(@@|%(?:25)*40%(?:25)*40))){1,6}(?:@|%(?:25)*40)[^\\\/$]{4,6}\/gi,\"****@****\").replace(\/token.*?(?=(\u0026|%(?:25)*26|$))+\/gi,\"token\\x3d****\")})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element.dataset.trackCategory",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.element.dataset.trackLabel",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"gtm.element.dataset.trackAction",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",46],
      "vtp_defaultValue":"UA-28620212-1",
      "vtp_map":["list",["map","key","www.nice.org.uk","value","UA-28620212-1"],["map","key","alpha.nice.org.uk","value","UA-28620212-4"],["map","key","beta.nice.org.uk","value","UA-28620212-4"],["map","key","dev.nice.org.uk","value","UA-28620212-4"],["map","key","test.nice.org.uk","value","UA-28620212-4"]]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_name":"gtm.element.dataset.track",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",38],8,16],"\u0026\u00260\u003C",["escape",["macro",38],8,16],".length?window.document.location.origin+",["escape",["macro",39],8,16],"+\"?\"+",["escape",["macro",38],8,16],":window.document.location.origin+",["escape",["macro",39],8,16],"})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",54]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"action",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"label",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_name":"gtm.element.parentElement.className",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"CampaignId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"VariationId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"CampaignName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"VariationName"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(window.location.search.match(\/q=([^\u0026]+)\/i)){var a=",["escape",["macro",38],8,16],".match(\/q=([^\u0026]+)\/i)[1];return a.toLowerCase().replace(\/\\+|%20\/ig,\" \").trim()}return\"(not set)\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",67],8,16],";return!document.querySelector(\".emptyresults\")\u0026\u0026document.querySelector(\".search-list__results-term \\x3e mark\")?document.querySelector(\".search-list__results-term \\x3e mark\").innerText.toLowerCase():a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",38],8,16],".match(\/q=([^\u0026]+)\/i)[1].toLowercase()})();"]
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-text"
    },{
      "function":"__c",
      "vtp_value":"Topic page"
    },{
      "function":"__c",
      "vtp_value":["template",["macro",39],"\/topic"]
    },{
      "function":"__d",
      "vtp_elementSelector":"h1",
      "vtp_selectorType":"CSS"
    },{
      "function":"__c",
      "vtp_value":["template",["macro",74]," | Topic page"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",73]],["map","fieldName","title","value",["macro",75]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__c",
      "vtp_value":["template",["macro",39],"\/topic?",["macro",38]]
    },{
      "function":"__d",
      "vtp_elementSelector":"h1 small",
      "vtp_selectorType":"CSS"
    },{
      "function":"__c",
      "vtp_value":["template",["macro",78]," | Topic page – Products page"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",77]],["map","fieldName","title","value",["macro",79]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__c",
      "vtp_value":"Topic products page"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"title"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-result-index"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",33],
      "vtp_defaultValue":"https:\/\/beta-bnf.nice.org.uk",
      "vtp_map":["list",["map","key","www.nice.org.uk","value","https:\/\/bnf.nice.org.uk"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",33],
      "vtp_defaultValue":"https:\/\/beta-bnfc.nice.org.uk",
      "vtp_map":["list",["map","key","www.nice.org.uk","value","https:\/\/bnfc.nice.org.uk"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",33],
      "vtp_map":["list",["map","key","www.nice.org.uk","value","https:\/\/cks.nice.org.uk"],["map","key","beta.nice.org.uk","value","https:\/\/beta-cks.nice.org.uk"],["map","key","alpha.nice.org.uk","value","https:\/\/beta-cks.nice.org.uk"],["map","key","test.nice.org.uk","value","http:\/\/test.cks.nice.org.uk"],["map","key","dev.nice.org.uk","value","http:\/\/dev.cks.nice.org.uk"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",17],
      "vtp_map":["list",["map","key","\/bnf-uk-only","value",["macro",84]],["map","key","\/bnfc-uk-only","value",["macro",85]],["map","key","\/cks-uk-only","value",["macro",86]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",87],
      "vtp_map":["list",["map","key","https:\/\/bnf.nice.org.uk","value","UA-49003509-6"],["map","key","https:\/\/beta-bnf.nice.org.uk","value","UA-49003509-1"],["map","key","https:\/\/bnfc.nice.org.uk","value","UA-49003509-7"],["map","key","https:\/\/beta-bnfc.nice.org.uk","value","UA-49003509-8"],["map","key","https:\/\/cks.nice.org.uk","value","UA-23818087-1"],["map","key","https:\/\/beta-cks.nice.org.uk","value","UA-23818087-3"],["map","key","http:\/\/test.cks.nice.org.uk","value","UA-23818087-3"],["map","key","http:\/\/dev.cks.nice.org.uk","value","UA-23818087-3"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",7],8,16],";if(101\u003C=a)a=\"101+\";else if(76\u003C=a)a=\"76 - 100\";else if(51\u003C=a)a=\"51 - 75\";else if(26\u003C=a)a=\"26 - 50\";else if(16\u003C=a)a=\"16 - 25\";else if(11\u003C=a)a=\"11 - 15\";else if(6\u003C=a)a=\"6 - 10\";else if(1\u003C=a)a=\"1 - 5\";else return\"0 results\";return a+\" results\"})();"]
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_STATE"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",17],
      "vtp_map":["list",["map","key","\/guidance\/conditions-and-diseases\/diabetes-and-other-endocrinal--nutritional-and-metabolic-conditions\/diabetes","value","topic-beta-optin-1"],["map","key","\/guidance\/conditions-and-diseases\/mental-health-and-behavioural-conditions\/dementia","value","topic-beta-optin-2"],["map","key","\/guidance\/conditions-and-diseases\/cardiovascular-conditions\/hypertension","value","topic-beta-optin-3"],["map","key","\/guidance\/conditions-and-diseases\/respiratory-conditions\/chronic-obstructive-pulmonary-disease","value","topic-beta-optin-4"],["map","key","\/guidance\/conditions-and-diseases\/cancer\/breast-cancer","value","topic-beta-optin-5"]]
    },{
      "function":"__f"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_CHANGE_SOURCE"
    },{
      "function":"__v",
      "vtp_name":"gtm.element.dataset.slide",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__v",
      "vtp_name":"gtm.element.parentElement.parentElement.className",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__d",
      "vtp_elementSelector":".twitter-typeahead pre",
      "vtp_selectorType":"CSS"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",7],8,16],";if(100\u003C=a)a=\"100+\";else if(76\u003C=a)a=\"76 - 100\";else if(51\u003C=a)a=\"51 - 75\";else if(26\u003C=a)a=\"26 - 50\";else if(1\u003C=a)a=\"1 - 25\";else return\"0 results - ",["escape",["macro",69],7],"\";return a+\" results\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",7],8,16],";return 0\u003Ca?\"With results\":\"Without results\"})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-28620212-4",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "tag_id":2
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"document download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",45],
      "vtp_eventLabel":["macro",44],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":4
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",47],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":"slider usage",
      "vtp_eventAction":["macro",50],
      "vtp_eventLabel":["macro",51],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":5
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",47],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":"get involved tab",
      "vtp_eventAction":["macro",45],
      "vtp_eventLabel":["macro",44],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":7
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",47],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":"roi download",
      "vtp_eventAction":"clicked",
      "vtp_eventLabel":["macro",44],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__ua",
      "metadata":["map"],
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",55],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":17
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",47],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":["template","Breadcrumb - ",["macro",52]],
      "vtp_eventAction":["macro",32],
      "vtp_eventLabel":["macro",40],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":18
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",47],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":"consultations",
      "vtp_eventAction":["macro",45],
      "vtp_eventLabel":["macro",44],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":19
    },{
      "function":"__fsl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "tag_id":20
    },{
      "function":"__cl",
      "tag_id":21
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Stakeholder Registration",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",50],
      "vtp_eventLabel":["macro",40],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":22
    },{
      "function":"__ua",
      "metadata":["map"],
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",49],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",55],
      "vtp_eventAction":["macro",50],
      "vtp_eventLabel":["macro",51],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":24
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",47],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":["macro",49],
      "vtp_eventAction":["macro",50],
      "vtp_eventLabel":["macro",51],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":25
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",47],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":"Social share",
      "vtp_eventAction":["macro",57],
      "vtp_eventLabel":["macro",40],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":26
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",47],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":"Newsletter Downloads",
      "vtp_eventAction":["macro",57],
      "vtp_eventLabel":["macro",32],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":27
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",47],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":"Newsletter Subscribe",
      "vtp_eventAction":["macro",57],
      "vtp_eventLabel":["macro",32],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":28
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",47],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":"consultations",
      "vtp_eventAction":["macro",45],
      "vtp_eventLabel":["macro",44],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":29
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",47],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":"Journals and databases",
      "vtp_eventAction":"clicked",
      "vtp_eventLabel":["macro",57],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":33
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",47],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":"topic selection download",
      "vtp_eventAction":"clicked",
      "vtp_eventLabel":["macro",1],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":34
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",47],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":"key therapeutic topic download",
      "vtp_eventAction":"clicked",
      "vtp_eventLabel":["macro",1],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":35
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",47],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":"Forward planner download",
      "vtp_eventAction":"clicked",
      "vtp_eventLabel":["macro",1],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":36
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",47],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":"App download",
      "vtp_eventAction":["macro",57],
      "vtp_eventLabel":["macro",32],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":37
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"nice media download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",31],
      "vtp_eventLabel":["macro",1],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":38
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",47],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_contentGroup":["list"],
      "vtp_dimension":["list"],
      "vtp_metric":["list"],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":"guidance published filter",
      "vtp_eventAction":"Clicked",
      "vtp_eventLabel":["macro",40],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":39
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",47],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_doubleClick":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":["macro",48],
      "vtp_eventAction":["macro",58],
      "vtp_eventLabel":["macro",59],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":45
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_eventValue":["macro",60],
      "vtp_eventCategory":["macro",49],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",50],
      "vtp_eventLabel":["macro",51],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":47
    },{
      "function":"__ua",
      "vtp_trackingId":["macro",47],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_doubleClick":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":"Scientific advice buttons",
      "vtp_eventAction":"clicked",
      "vtp_eventLabel":["macro",57],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":48
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"document download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["template",["macro",45]," - tools and resources"],
      "vtp_eventLabel":["macro",44],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":49
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"document download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["template",["macro",45]," - evidence"],
      "vtp_eventLabel":["macro",44],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":50
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"document download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["template",["macro",45]," - ifp"],
      "vtp_eventLabel":["macro",44],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":51
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"document download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["template",["macro",45]," - history"],
      "vtp_eventLabel":["macro",44],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"document download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["template",["macro",45]," - guidance"],
      "vtp_eventLabel":["macro",44],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":53
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"document download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["template",["macro",45]," - advice"],
      "vtp_eventLabel":["macro",44],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"document download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["template",["macro",45]," - In development"],
      "vtp_eventLabel":["macro",44],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"document download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["template",["macro",45]," - pmg"],
      "vtp_eventLabel":["macro",44],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":56
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"VWO",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",55],
      "vtp_eventAction":["template",["macro",62],":",["macro",64]],
      "vtp_eventLabel":["template",["macro",63],":",["macro",65]],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":59
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"1",
      "vtp_eventCategory":"Search - Activity after search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",55],
      "vtp_eventAction":["template","NICE search - ",["macro",32]],
      "vtp_eventLabel":["template",["macro",68]," | ",["macro",69]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":61
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"1",
      "vtp_eventCategory":"Search - Rank of results provided",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",55],
      "vtp_eventAction":["template","Rank ",["macro",5]," page ",["macro",6]],
      "vtp_eventLabel":["template",["macro",68]," | ",["macro",69]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":62
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"1",
      "vtp_eventCategory":"More button",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",55],
      "vtp_eventAction":"Expanded",
      "vtp_eventLabel":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":65
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"1",
      "vtp_eventCategory":"More button",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",55],
      "vtp_eventAction":"Chapter click",
      "vtp_eventLabel":["template",["macro",8]," | ",["macro",57]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":66
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"1",
      "vtp_eventCategory":"Search - Filters",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",55],
      "vtp_eventAction":["template","Filter - ",["macro",10]],
      "vtp_eventLabel":["macro",9],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":67
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"1",
      "vtp_eventCategory":"Search Filters",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",55],
      "vtp_eventAction":"Filter - Cleared",
      "vtp_eventLabel":"Filter – Cleared",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":68
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template",["macro",13]," - Guidance List Filter"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Filter - Cleared",
      "vtp_eventLabel":"Filter - Cleared",
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":69
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template",["macro",13]," - Guidance List Filter"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template","Filter - ",["macro",10]],
      "vtp_eventLabel":["macro",71],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":70
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Navigation links",
      "vtp_eventLabel":["macro",25],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":71
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Guideline page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Register as stakeholder link",
      "vtp_eventLabel":["macro",57],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":72
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",72],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Register as stakeholder link",
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":73
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Promotional links",
      "vtp_eventLabel":["macro",25],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":74
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template","\/get-involved\/stakeholder-registration\/confirm-organisation?",["macro",38]]],["map","fieldName","title","value","Stakeholder registration – confirm organisation"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",55],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":75
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template","\/get-involved\/stakeholder-registration\/select-projects?",["macro",38]]],["map","fieldName","title","value","Stakeholder registration – select projects"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",55],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":76
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template","\/get-involved\/stakeholder-registration\/send-registration-form?",["macro",38]]],["map","fieldName","title","value","Stakeholder registration – send registration form"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",55],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":77
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template","\/get-involved\/stakeholder-registration\/thank-you?returnUrl=",["macro",39]]],["map","fieldName","title","value","Stakeholder registration – thank you"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",55],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":78
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template",["macro",13]," - Guidance List Filter"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Filter - Selected",
      "vtp_eventLabel":["macro",15],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":79
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template",["macro",13]," - Guidance List Filter"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Filter - Deselected",
      "vtp_eventLabel":["macro",16],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":80
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click link inside main banner",
      "vtp_eventLabel":["macro",25],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":81
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click title content left",
      "vtp_eventLabel":["macro",25],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":82
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click title content right",
      "vtp_eventLabel":["macro",25],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":83
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click link content right",
      "vtp_eventLabel":["macro",25],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":84
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click link content left",
      "vtp_eventLabel":["macro",25],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":85
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click promotional banners image",
      "vtp_eventLabel":"image",
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":86
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click promotional banners link",
      "vtp_eventLabel":["macro",25],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":87
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click left banner image",
      "vtp_eventLabel":"image",
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":88
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click right banner image",
      "vtp_eventLabel":"image",
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":89
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click left banner link",
      "vtp_eventLabel":["macro",25],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":90
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click right banner link",
      "vtp_eventLabel":["macro",25],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":91
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click title content bottom left",
      "vtp_eventLabel":["macro",25],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":92
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click link content bottom left",
      "vtp_eventLabel":["macro",25],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":93
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Home Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click CTA inside main banner",
      "vtp_eventLabel":["macro",25],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":96
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",76],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":99
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",72],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"RHS navigation",
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":100
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",72],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":"Product shortcut",
      "vtp_eventLabel":["macro",26],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":101
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":103
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",81],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":"Remove filter box",
      "vtp_eventLabel":["macro",82],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":104
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",81],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":"Filter - selected",
      "vtp_eventLabel":["macro",82],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":105
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",81],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":"Filter - Deselected",
      "vtp_eventLabel":["macro",82],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":106
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",81],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":"Sort by clicked",
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":107
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",83],
      "vtp_eventCategory":["macro",81],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":"Rank of result clicked",
      "vtp_eventLabel":["template","Rank ",["macro",83]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":108
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",81],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":"Filter expanded",
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":113
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",81],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",80],
      "vtp_eventAction":"Filter collapsed",
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":114
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",72],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",76],
      "vtp_eventAction":["macro",45],
      "vtp_eventLabel":["macro",44],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":115
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Overview page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",55],
      "vtp_eventAction":"Clicked",
      "vtp_eventLabel":["macro",28],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":117
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Overview page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",55],
      "vtp_eventAction":["macro",29],
      "vtp_eventLabel":["template","Drop down - ",["macro",28]],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":118
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Overview page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",55],
      "vtp_eventAction":"Clicked",
      "vtp_eventLabel":["macro",30],
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":119
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"document download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",55],
      "vtp_eventAction":"clicked - guidance",
      "vtp_eventLabel":["macro",34],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":120
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","cookieDomain","value","auto"],["map","fieldName","location","value",["template",["macro",87],["macro",39]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",55],
      "vtp_trackingId":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":121
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"1",
      "vtp_eventCategory":"Search - Spellcheck",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",55],
      "vtp_eventAction":"Times spellcheck message appeared",
      "vtp_eventLabel":["template",["macro",68]," | ",["macro",69]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":124
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",7],
      "vtp_eventCategory":"Search - Results provided",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",55],
      "vtp_eventAction":["macro",89],
      "vtp_eventLabel":["template",["macro",7]," - ",["macro",68]," | ",["macro",69]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":125
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",55],
      "vtp_dimension":["list",["map","index","9","dimension",["macro",36]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":127
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_99",
      "tag_id":128
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_103",
      "tag_id":129
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_104",
      "tag_id":130
    },{
      "function":"__cl",
      "tag_id":131
    },{
      "function":"__cl",
      "tag_id":132
    },{
      "function":"__cl",
      "tag_id":133
    },{
      "function":"__cl",
      "tag_id":134
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_112",
      "tag_id":135
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_113",
      "tag_id":136
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_114",
      "tag_id":137
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_115",
      "tag_id":138
    },{
      "function":"__hl",
      "tag_id":139
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_124",
      "tag_id":140
    },{
      "function":"__cl",
      "tag_id":141
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_133",
      "tag_id":142
    },{
      "function":"__cl",
      "tag_id":143
    },{
      "function":"__cl",
      "tag_id":144
    },{
      "function":"__cl",
      "tag_id":145
    },{
      "function":"__cl",
      "tag_id":146
    },{
      "function":"__cl",
      "tag_id":147
    },{
      "function":"__cl",
      "tag_id":148
    },{
      "function":"__cl",
      "tag_id":149
    },{
      "function":"__cl",
      "tag_id":150
    },{
      "function":"__cl",
      "tag_id":151
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_144",
      "tag_id":152
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_145",
      "tag_id":153
    },{
      "function":"__cl",
      "tag_id":154
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_174",
      "tag_id":155
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_175",
      "tag_id":156
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_179",
      "tag_id":157
    },{
      "function":"__hl",
      "tag_id":158
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_187",
      "tag_id":159
    },{
      "function":"__cl",
      "tag_id":160
    },{
      "function":"__cl",
      "tag_id":161
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_190",
      "tag_id":162
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_191",
      "tag_id":163
    },{
      "function":"__cl",
      "tag_id":164
    },{
      "function":"__cl",
      "tag_id":165
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_205",
      "tag_id":166
    },{
      "function":"__cl",
      "tag_id":167
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_214",
      "tag_id":168
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_215",
      "tag_id":169
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"797486_225",
      "tag_id":170
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":".search-list__original-term",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"797486_238",
      "tag_id":171
    },{
      "function":"__hl",
      "tag_id":172
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\/*\n @preserve\n jquery.scrolldepth.js | v0.4.1\n Copyright (c) 2014 Rob Flaherty (@robflaherty)\n Licensed under the MIT and GPL licenses.\n*\/\n(function(c,h,m,u){var n={elements:[],minHeight:0,percentage:!0,testing:!1},k=c(h),f=[];c.scrollDepth=function(d){function l(a,b,e){d.testing?c(\"#console\").html(a+\": \"+b):\"undefined\"!==typeof dataLayer?(dataLayer.push({event:\"ScrollDistance\",eventCategory:\"Scroll Depth\",eventAction:a,eventLabel:b,eventValue:1,eventNonInteraction:!0}),2\u003Carguments.length\u0026\u0026dataLayer.push({event:\"ScrollTiming\",eventCategory:\"Scroll Depth\",eventAction:a,eventLabel:b,eventTiming:e})):(\"undefined\"!==typeof ga\u0026\u0026(ga(\"send\",\n\"event\",\"Scroll Depth\",a,b,1,{nonInteraction:1}),2\u003Carguments.length\u0026\u0026ga(\"send\",\"timing\",\"Scroll Depth\",a,e,b)),\"undefined\"!==typeof _gaq\u0026\u0026(_gaq.push([\"_trackEvent\",\"Scroll Depth\",a,b,1,!0]),2\u003Carguments.length\u0026\u0026_gaq.push([\"_trackTiming\",\"Scroll Depth\",a,e,b,100])))}function p(a,b,e){c.each(a,function(a,g){-1===c.inArray(a,f)\u0026\u0026b\u003E=g\u0026\u0026(l(\"Percentage\",a,e),f.push(a))})}function q(a,b,e){c.each(a,function(a,g){-1===c.inArray(g,f)\u0026\u0026c(g).length\u0026\u0026b\u003E=c(g).offset().top\u0026\u0026(l(\"Elements\",g,e),f.push(g))})}function r(a,\nb){var e,c,g,d=null,f=0,k=function(){f=new Date;d=null;g=a.apply(e,c)};return function(){var h=new Date;f||(f=h);var l=b-(h-f);e=this;c=arguments;0\u003E=l?(clearTimeout(d),d=null,f=h,g=a.apply(e,c)):d||(d=setTimeout(k,l));return g}}var t=+new Date;d=c.extend({},n,d);c(m).height()\u003Cd.minHeight||(l(\"Percentage\",\"Baseline\"),k.on(\"scroll.scrollDepth\",r(function(){var a=c(m).height(),b=h.innerHeight?h.innerHeight:k.height();b=k.scrollTop()+b;a={\"25%\":parseInt(.25*a,10),\"50%\":parseInt(.5*a,10),\"75%\":parseInt(.75*\na,10),\"100%\":a-1};var e=+new Date-t;f.length\u003E=4+d.elements.length?k.off(\"scroll.scrollDepth\"):(d.elements\u0026\u0026q(d.elements,b,e),d.percentage\u0026\u0026p(a,b,e))},500)))}})(jQuery,window,document);jQuery.scrollDepth();\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n[{\n  \"@context\": \"http:\/\/schema.org\",\n  \"@type\": \"Organization\",\n  \"url\": \"https:\/\/www.nice.org.uk\",\n  \"name\": \"NICE, National Institute for Health and Care Excellence\",\n  \"logo\": \"http:\/\/cdn.nice.org.uk\/V3\/Content\/nice\/favicon-google.png\",\n  \"sameAs\" : [ \"https:\/\/plus.google.com\/+niceorguk\",\n      \"https:\/\/twitter.com\/nicecomms\",\"https:\/\/www.freebase.com\/m\/027j90\", \"https:\/\/en.wikipedia.org\/wiki\/National_Institute_for_Health_and_Care_Excellence\" ] \n},\n{\n   \"@context\": \"http:\/\/schema.org\",\n   \"@type\": \"WebSite\",\n   \"url\": \"https:\/\/www.nice.org.uk\",\n   \"potentialAction\": {\n     \"@type\": \"SearchAction\",\n     \"target\": \"https:\/\/www.nice.org.uk\/search?q={search_term_string}\",\n     \"query-input\": \"required name=search_term_string\"\n   }\n}]\n\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efor(var gtmYTplayers=[],e=document.getElementsByTagName(\"iframe\"),x=e.length;x--;)\/youtube.com\\\/embed\/.test(e[x].src)\u0026\u0026-1===e[x].src.indexOf(\"enablejsapi\\x3d\")\u0026\u0026(e[x].src+=(-1===e[x].src.indexOf(\"?\")?\"?\":\"\\x26\")+\"enablejsapi\\x3d1\");function onYouTubeIframeAPIReady(){for(var a=document.getElementsByTagName(\"iframe\"),b=a.length;b--;)\/youtube.com\\\/embed\/.test(a[b].src)\u0026\u0026(gtmYTplayers.push(new YT.Player(a[b],{events:{onStateChange:onPlayerStateChange,onError:onPlayerError}})),YT.gtmLastAction=\"p\")}\nfunction onPlayerStateChange(a){a.data==YT.PlayerState.PLAYING\u0026\u0026setTimeout(onPlayerPercent,1E3,a.target);var b=a.target.getVideoData();b=b.video_id+\":\"+b.title;a.data==YT.PlayerState.PLAYING\u0026\u0026\"p\"==YT.gtmLastAction\u0026\u0026(dataLayer.push({event:\"youtube\",action:\"play\",label:b}),YT.gtmLastAction=\"\");a.data==YT.PlayerState.PAUSED\u0026\u0026(dataLayer.push({event:\"youtube\",action:\"pause\",label:b}),YT.gtmLastAction=\"p\")}function onPlayerError(a){dataLayer.push({event:\"error\",action:\"GTM\",label:\"youtube:\"+a})}\nfunction onPlayerPercent(a){if(a.getPlayerState()==YT.PlayerState.PLAYING){var b=1.5\u003E=a.getDuration()-a.getCurrentTime()?1:(Math.floor(a.getCurrentTime()\/a.getDuration()*4)\/4).toFixed(2),c=a.getVideoData();c=c.video_id+\":\"+c.title;if(!a.lastP||b\u003Ea.lastP)a.lastP=b,dataLayer.push({event:\"youtube\",action:100*b+\"%\",label:c});1!=a.lastP\u0026\u0026setTimeout(onPlayerPercent,1E3,a)}}window.onbeforeunload=function(a){if(a=a||window.event)a.returnValue=\"na\";return\"na\"};window.onbeforeunload=trackYTUnload;\nfunction trackYTUnload(){for(var a=0;a\u003CgtmYTplayers.length;a++)if(1===gtmYTplayers[a].getPlayerState()){var b=gtmYTplayers[a].getVideoData();b=b.video_id+\":\"+b.title;dataLayer.push({event:\"youtube\",action:\"exit\",label:b})}}var j=document.createElement(\"script\"),f=document.getElementsByTagName(\"script\")[0];j.src=\"\/\/www.youtube.com\/iframe_api\";j.async=!0;f.parentNode.insertBefore(j,f);\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _vis_opt_queue=window._vis_opt_queue||[],_vis_counter=0;window.dataLayer=window.dataLayer||[];\n_vis_opt_queue.push(function(){try{if(!_vis_counter)for(var b,a,c=0;c\u003C_vwo_exp_ids.length;c++)a=_vwo_exp_ids[c],_vwo_exp[a].ready\u0026\u0026(b=_vis_opt_readCookie(\"_vis_opt_exp_\"+a+\"_combi\"),\"undefined\"!=typeof _vwo_exp[a].combination_chosen\u0026\u0026(b=_vwo_exp[a].combination_chosen),\"undefined\"!=typeof _vwo_exp[a].comb_n[b]\u0026\u0026(window.dataLayer.push({CampaignId:a,CampaignName:_vwo_exp[a].name,VariationId:b,VariationName:_vwo_exp[a].comb_n[b],event:\"VWO\"}),_vis_counter++))}catch(d){}});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":58
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};hj(\"trigger\",\"topic-new-updated\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":102
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};var hotJarTriggerName=",["escape",["macro",91],8,16],";hotJarTriggerName\u0026\u0026hj(\"trigger\",hotJarTriggerName);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":116
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",42],
      "arg1":"resource download"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",42],
      "arg1":"guidance download|resource download",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",43],
      "arg1":"^\/guidance\/(CG|NG|PH|SC|SG|MPG|CSG|QS|TA|IPG|MTG|DG|HST|A|B|C|D|E|F|G|H|PSG)[0-9]{1,5}$|^\/guidance\/(CG|NG|PH|SC|SG|MPG|CSG|QS|TA|IPG|MTG|DG|HST|A|B|C|D|E|F|G|H|PSG)[0-9]{1,5}\/chapter\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"^\/guidance\/(CG|NG|PH|SC|SG|MPG|CSG|QS|TA|IPG|MTG|DG|HST|A|B|C|D|E|F|G|H|PSG)[0-9]{1,5}\/resources\/.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",43],
      "arg1":"^\/guidance\/(CG|NG|PH|SC|SG|MPG|CSG|QS|TA|IPG|MTG|DG|HST|A|B|C|D|E|F|G|H|PSG)[0-9]{1,5}\/resources",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"^\/guidance\/(CG|PH|TA|NG|MTG|DG|SC|SG|MPG|IPG|HST|A|B|C|D|E|F|G|H|QS|CSG|PSG)[0-9]{1,5}\/(evidence|documents)\/.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",43],
      "arg1":"^\/guidance\/(CG|PH|TA|NG|MTG|DG|SC|SG|MPG|IPG|HST|A|B|C|D|E|F|G|H|QS|CSG|PSG)[0-9]{1,5}\/evidence",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"^\/guidance\/(CG|PH|TA|NG|MTG|DG|SC|SG|MPG|IPG|HST|A|B|C|D|E|F|G|H|QS|CSG|PSG)[0-9]{1,5}\/documents\/.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",43],
      "arg1":"^\/guidance\/(CG|PH|TA|NG|IPG|MTG|DG|SC|SG|MPG|HST|A|B|C|D|E|F|G|H|QS|CSG)[0-9]{1,5}\/history$|^\/guidance\/indevelopment\/(CG|PH|TA|NG|IPG|MTG|DG|SC|SG|MPG|HST|A|B|C|D|E|F|G|H|QS|CSG|PSG)[0-9]{1,7}\/documents$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",42],
      "arg1":"guidance download|resource download"
    },{
      "function":"_re",
      "arg0":["macro",43],
      "arg1":"^\/guidance\/(CG|NG|PH|SC|SG|MPG|CSG|QS|TA|IPG|MTG|DG|HST|A|B|C|D|E|F|G|H|PSG)[0-9]{1,5}\/(informationforpublic|ifp)\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"^\/guidance\/(CG|PH|TA|NG|MTG|DG|SC|SG|MPG|IPG|HST|A|B|C|D|E|F|G|H|QS|CSG|PSG)[0-9]{1,5}\/resources\/.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",42],
      "arg1":"guidance download"
    },{
      "function":"_re",
      "arg0":["macro",43],
      "arg1":"^\/advice\/(esmpb|esnm|esuom|ktt|lgb|mib|es)[0-9]{1,5}$|^\/advice\/(esmpb|esnm|esuom|ktt|lgb|mib|es)[0-9]{1,5}\/chapter\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"^\/guidance\/(esmpb|esnm|esuom|ktt|lgb|mib|es)[0-9]{1,5}\/resources\/.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"^\/guidance\/gid\\-(tag|ta|sgwave|scwave|qsd|qs|phg|ng|mtg|mt|ipg|ip|hst|dt|dg|cgwaver|cgwave)[0-9]{1,7}\/documents\/.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",43],
      "arg1":"^\/guidance\/indevelopment\/gid\\-(tag|ta|sgwave|scwave|qsd|qs|phg|ng|mtg|mt|ipg|ip|hst|dt|dg|cgwaver|cgwave)[0-9]{1,7}.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",43],
      "arg1":"^\/process\/pmg[0-9]{1,5}$|^\/process\/pmg[0-9]{1,5}\/chapter\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"^\/process\/pmg[0-9]{1,5}\/resources\/.*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",48],
      "arg1":"GAevent"
    },{
      "function":"_cn",
      "arg0":["macro",49],
      "arg1":"slider usage"
    },{
      "function":"_re",
      "arg0":["macro",41],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"getinvolvedtab"
    },{
      "function":"_cn",
      "arg0":["macro",32],
      "arg1":"Return-on-Investment"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"^\\\/get-involved\\\/stakeholder-registration\\\/register",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"2"
    },{
      "function":"_re",
      "arg0":["macro",53],
      "arg1":"\\\/(?:get-involved\\\/stakeholder-registration|guidance|advice|process|corporate).*\\?__r=[0-9A-Za-z]+",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"^\\\/(?:bnf|bnfc|cks)-uk-only$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",53],
      "arg1":"^https:\\\/\\\/www\\.nice\\.org\\.uk\\\/search\\?",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"breadcrumb"
    },{
      "function":"_cn",
      "arg0":["macro",49],
      "arg1":"consultations"
    },{
      "function":"_cn",
      "arg0":["macro",50],
      "arg1":"submit"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"GAevent"
    },{
      "function":"_eq",
      "arg0":["macro",50],
      "arg1":"submit"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"\/get-involved\/stakeholder-registration\/register"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"Error-404"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"ErrorPage"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"addthis"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"nice news|update for primary care|eyes on evidence|public health awareness|evidence update",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"\/news\/nice-newsletters-and-alerts"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"btn|btn btn-primary",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"nice-newsletters-and-alerts"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"consultations"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"add comment"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"about\/what-we-do\/evidence-services\/journals-and-databases"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"topic-selection"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"xls|pdf"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"key-therapeutic-topics"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"\\.(xls|pdf)$",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"forward-planner"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"xls|pdf|xlsx"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"play\\.google\\.com|itunes\\.apple\\.com"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"media",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"\\.(xls|pdf|xlsx|doc|docx|ppt|pptx|xlsm)$",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",48],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"titleFilter"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"youtube"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"GlobalNav"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"btn"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"scientific-advice"
    },{
      "function":"_eq",
      "arg0":["macro",61],
      "arg1":"btn"
    },{
      "function":"_eq",
      "arg0":["macro",62],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",63],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"VWO"
    },{
      "function":"_css",
      "arg0":["macro",4],
      "arg1":"#search-media-list .media-heading a"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_99($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",4],
      "arg1":"#search-media-list .result-footer a[data-toggle=\"collapse\"]"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_103($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",4],
      "arg1":"#search-media-list .result-footer ul a"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_104($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",0],
      "arg1":".control--checkbox \u003E input"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"^\\\/search",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",4],
      "arg1":".clear-filter"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"clear-filter"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"true"
    },{
      "function":"_css",
      "arg0":["macro",0],
      "arg1":".checkbox \u003E input"
    },{
      "function":"_css",
      "arg0":["macro",0],
      "arg1":".about-panel-nav a"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_112($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",0],
      "arg1":".product-heading .subtitle-link"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_114($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"gtm-stakeholder-reg-action-link"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_113($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",0],
      "arg1":".indepth .track-link"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_115($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":".+"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"gtm.historyChange"
    },{
      "function":"_css",
      "arg0":["macro",0],
      "arg1":".date .clear_input"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_124($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",0],
      "arg1":".about-panel a"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"\/"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_133($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",0],
      "arg1":"div.last-child .widget-title .latest-guidance-title"
    },{
      "function":"_css",
      "arg0":["macro",0],
      "arg1":"#InConsultationTable a"
    },{
      "function":"_css",
      "arg0":["macro",0],
      "arg1":"#GuidanceTable a"
    },{
      "function":"_css",
      "arg0":["macro",0],
      "arg1":".singletopborder .article-image a img"
    },{
      "function":"_css",
      "arg0":["macro",0],
      "arg1":".singletopborder .secondary-article footer a"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"true"
    },{
      "function":"_css",
      "arg0":["macro",0],
      "arg1":".newswidget .latest-news-title"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_144($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",0],
      "arg1":".newslink a"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_145($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",0],
      "arg1":".guidance-panel .btn-cta"
    },{
      "function":"_css",
      "arg0":["macro",4],
      "arg1":".in-page-nav a"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_174($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",32],
      "arg1":"#"
    },{
      "function":"_css",
      "arg0":["macro",4],
      "arg1":".gtm-topic-list-beta-revert"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_175($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",4],
      "arg1":".gtm-topic-list-applied-filter"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_187($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",4],
      "arg1":".gtm-topic-list-filter-select"
    },{
      "function":"_css",
      "arg0":["macro",4],
      "arg1":".gtm-topic-list-filter-deselect"
    },{
      "function":"_css",
      "arg0":["macro",4],
      "arg1":".gtm-topic-list-sort-link"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_190($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",4],
      "arg1":".gtm-topic-list-product"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_191($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",4],
      "arg1":".gtm-topic-list-filter-group-expand,.gtm-topic-list-filter-group-expand *"
    },{
      "function":"_css",
      "arg0":["macro",4],
      "arg1":".gtm-topic-list-filter-group-collapse,.gtm-topic-list-filter-group-collapse *"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"topic-page"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_205($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",0],
      "arg1":".gtm-guideline-page-tab .product-page.summary .navbar-resources li a .link-text"
    },{
      "function":"_css",
      "arg0":["macro",4],
      "arg1":".gtm-guideline-page-tab .product-page .navbar-resources a.dropdown-toggle"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_214($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",0],
      "arg1":".gtm-guideline-page-tab .product-page .navbar-resources .dropdown .dropdown-menu li a"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_215($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",0],
      "arg1":"#Guidance-Tab .section-summary .media a"
    },{
      "function":"_cn",
      "arg0":["macro",32],
      "arg1":"\/resources\/"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_225($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_238($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"^\\\/search$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"^https:\\\/\\\/www\\.nice\\.org\\.uk\\\/search\\?",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"(\\?|\u0026)pa=",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"^\\\/$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"^\\\/guidance\\\/(?:[a-z]{1,4}\\d+|indevelopment\\\/gid-)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"http:\/\/www\\.nice\\.org\\.uk\/$|https:\/\/www\\.nice\\.org\\.uk\/$|http:\/\/nice\\.org\\.uk\/$|https:\/\/nice\\.org\\.uk\/$"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"#(new|updated)$"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^$|((^|,)797486_179($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"topic-page-new-layout"
    }],
  "rules":[
    [["if",0,1],["add",0,5,8,9]],
    [["if",2,3],["add",1]],
    [["if",22,23,24],["add",2]],
    [["if",3,25],["add",3]],
    [["if",3,26],["add",4]],
    [["if",3,36],["add",6]],
    [["if",37,38,39],["add",7]],
    [["if",40,41,42],["add",10]],
    [["if",39,43],["add",11]],
    [["if",39,44],["add",12]],
    [["if",45,46],["add",13]],
    [["if",3,47,48],["add",14]],
    [["if",3,49,50],["add",15]],
    [["if",39,51,52],["add",16]],
    [["if",3,53],["add",17]],
    [["if",3,54,55],["add",18]],
    [["if",46,56,57],["add",19]],
    [["if",3,58,59],["add",20]],
    [["if",3,60],["add",21]],
    [["if",3,61,62],["add",22]],
    [["if",24,63,64],["add",23]],
    [["if",65],["add",24]],
    [["if",66],["add",25]],
    [["if",3,67,68],["add",26]],
    [["if",3,68,69],["add",26]],
    [["if",2,3,6,7],["add",27],["block",1]],
    [["if",2,3,8,9],["add",28],["block",1]],
    [["if",3,12,13,14],["add",29],["block",1,27]],
    [["if",2,3,10,11],["add",30],["block",1]],
    [["if",3,4,5,6],["add",31],["block",1]],
    [["if",3,15,16,17],["add",32],["block",1]],
    [["if",2,3,18,19],["add",33],["block",1]],
    [["if",3,15,20,21],["add",34],["block",1]],
    [["if",72],["unless",70,71],["add",35]],
    [["if",3,73,74],["add",36,37]],
    [["if",3,75,76],["add",38]],
    [["if",3,77,78],["add",39]],
    [["if",46,79,80],["add",40]],
    [["if",46,80,81],["add",41]],
    [["if",46,82,83],["add",42]],
    [["if",46,83,84],["add",43]],
    [["if",3,85,86],["add",44]],
    [["if",3,87,88],["add",45]],
    [["if",3,89,90],["add",46]],
    [["if",3,91,92],["add",47]],
    [["if",1,27,28],["add",48],["block",5]],
    [["if",1,27,29],["add",49],["block",5]],
    [["if",1,27,30],["add",50],["block",5]],
    [["if",1,31],["add",51],["block",5]],
    [["if",83,93,94],["add",52]],
    [["if",3,95,96],["add",53]],
    [["if",46,97,98],["add",54]],
    [["if",3,98,99,100],["add",55]],
    [["if",46,98,101],["add",56]],
    [["if",46,98,102],["add",57]],
    [["if",46,98,103],["add",58]],
    [["if",46,98,104],["add",59]],
    [["if",46,98,105],["add",60]],
    [["if",46,98,106],["add",61]],
    [["if",46,98,107],["add",62]],
    [["if",46,98,108],["add",63]],
    [["if",46,98,109],["add",64]],
    [["if",3,98,110,111],["add",65]],
    [["if",3,98,112,113],["add",66]],
    [["if",46,98,114],["add",67]],
    [["if",1,32],["add",68,96,126],["block",5]],
    [["if",3,32,115,116],["add",69]],
    [["if",3,32,117,119],["unless",115,118],["add",70]],
    [["if",1,33],["add",71,123],["block",5]],
    [["if",33,94],["add",71]],
    [["if",3,120,121],["add",72]],
    [["if",46,122],["add",73]],
    [["if",46,123],["add",74]],
    [["if",3,124,125],["add",75]],
    [["if",3,126,127],["add",76]],
    [["if",46,128],["add",77]],
    [["if",46,129],["add",78]],
    [["if",3,130,131],["add",79]],
    [["if",46,132],["add",80]],
    [["if",3,133,134],["add",81]],
    [["if",3,135,136],["add",82]],
    [["if",3,137,138,139],["add",83]],
    [["if",1,34],["add",84],["block",5]],
    [["if",140,141],["add",85]],
    [["if",142,143],["add",86]],
    [["if",35,144],["add",87]],
    [["if",94,145,146],["add",87]],
    [["if",1,142],["add",88,90]],
    [["if",1],["add",89,91,92,93,94,99,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,124,125,127,128,129,130,131,132]],
    [["if",1,147],["add",95,98]],
    [["if",1,148],["add",97]],
    [["if",1,83],["add",100]],
    [["if",144],["add",133]],
    [["if",1,149],["add",134]],
    [["if",144,150],["add",135]],
    [["if",70,72],["add",136]],
    [["if",3,32,151,152],["add",137]],
    [["if",32,153],["add",138]],
    [["if",1,35],["block",5]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={ff:!0},fa={};try{fa.__proto__=ea;da=fa.ff;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=ca,ja=this||self,la=/^[\w+/_-]+[=]{0,2}$/,ma=null;var pa=function(){},qa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},ra=function(a){return"number"==typeof a&&!isNaN(a)},ua=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},q=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},va=function(a,b){if(a&&ua(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!ra(a)||
!ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},za=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Aa=function(a){return Math.round(Number(a))||0},Ba=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Da=function(a){var b=[];if(ua(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};
var Ga=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ha=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ia=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ja=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ka=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},La=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Ma=function(a){var b=
[];za(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")},Na=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b.push(d):2048>d?b.push(192|d>>6,128|d&63):55296>d||57344<=d?b.push(224|d>>12,128|d>>6&63,128|d&63):(d=65536+((d&1023)<<10|a.charCodeAt(++c)&1023),b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return new Uint8Array(b)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Oa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Pa=function(a){if(null==a)return String(a);var b=Oa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Qa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ra=function(a){if(!a||"object"!=Pa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Qa(a,"constructor")&&!Qa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Qa(a,b)},B=function(a,b){var c=b||("array"==Pa(a)?[]:{}),d;for(d in a)if(Qa(a,d)){var e=a[d];"array"==Pa(e)?("array"!=Pa(c[d])&&(c[d]=[]),c[d]=B(e,c[d])):Ra(e)?(Ra(c[d])||(c[d]={}),c[d]=B(e,c[d])):c[d]=e}return c};
var Sa=[],Ta={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ua=function(a){return Ta[a]},Va=/[\x00\x22\x26\x27\x3c\x3e]/g;var bb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,cb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},db=function(a){return cb[a]};Sa[7]=function(a){return String(a).replace(bb,db)};
Sa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(bb,db)+"'"}};var mb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,nb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ob=function(a){return nb[a]};Sa[16]=function(a){return a};var qb;
var rb=[],sb=[],tb=[],vb=[],wb=[],xb={},yb,zb,Ab,Bb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Cb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=xb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):qb(c,e,b)},Eb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Db(a[e],b,c));
return d},Fb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=xb[b];return c?c.priorityOverride||0:0},Db=function(a,b,c){if(ua(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Db(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=rb[f];if(!h||b.Jc(h))return;c[f]=!0;try{var k=Eb(h,b,c);k.vtp_gtmEventId=b.id;d=Cb(k,b);Ab&&(d=Ab.Mf(d,k))}catch(y){b.ne&&b.ne(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Db(a[l],b,c)]=Db(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=Db(a[n],b,c);zb&&(m=m||r===zb.rb);d.push(r)}return zb&&m?zb.Pf(d):d.join("");case "escape":d=Db(a[1],b,c);if(zb&&ua(a[1])&&"macro"===a[1][0]&&zb.vg(a))return zb.Tg(d);d=String(d);for(var u=2;u<a.length;u++)Sa[a[u]]&&(d=Sa[a[u]](d));return d;case "tag":var p=a[1];if(!vb[p])throw Error("Unable to resolve tag reference "+p+".");return d={ae:a[2],
index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Hb(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Hb=function(a,b,c){try{return yb(Eb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Ib=function(){var a=function(b){return{toString:function(){return b}}};return{od:a("convert_case_to"),pd:a("convert_false_to"),qd:a("convert_null_to"),rd:a("convert_true_to"),sd:a("convert_undefined_to"),Fh:a("debug_mode_metadata"),qa:a("function"),Ne:a("instance_name"),Re:a("live_only"),Te:a("malware_disabled"),Ue:a("metadata"),Gh:a("original_vendor_template_id"),Xe:a("once_per_event"),Bd:a("once_per_load"),Gd:a("setup_tags"),Id:a("tag_id"),Jd:a("teardown_tags")}}();var Jb=null,Mb=function(a){function b(r){for(var u=0;u<r.length;u++)d[r[u]]=!0}var c=[],d=[];Jb=Kb(a);for(var e=0;e<sb.length;e++){var f=sb[e],h=Lb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<vb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Lb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Jb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Jb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Kb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Hb(tb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var D=window,F=document,fc=navigator,gc=F.currentScript&&F.currentScript.src,hc=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},ic=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},jc=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;ic(d,b);c&&(d.onerror=c);var e;if(null===ma)b:{var f=ja.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&la.test(k)){ma=k;break b}}ma=""}e=ma;e&&d.setAttribute("nonce",e);var l=F.getElementsByTagName("script")[0]||F.body||F.head;l.parentNode.insertBefore(d,l);return d},kc=function(){if(gc){var a=gc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},lc=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||
F.body||F.head;d.parentNode.insertBefore(c,d);ic(c,b);void 0!==a&&(c.src=a);return c},mc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},nc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},pc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){D.setTimeout(a,0)},qc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},rc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},sc=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},tc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},uc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var wc=function(a){return vc?F.querySelectorAll(a):null},xc=function(a,b){if(!vc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!F.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yc=!1;if(F.querySelectorAll)try{var zc=F.querySelectorAll(":root");zc&&1==zc.length&&zc[0]==F.documentElement&&(yc=!0)}catch(a){}var vc=yc;var H={oa:"_ee",jc:"event_callback",qb:"event_timeout",D:"gtag.config",X:"allow_ad_personalization_signals",kc:"restricted_data_processing",ob:"allow_google_signals",Y:"cookie_expires",pb:"cookie_update",Na:"session_duration",ca:"user_properties"};
H.Zd=[H.X,H.ob,H.pb];H.ee=[H.Y,H.qb,H.Na];var Pc=/[A-Z]+/,Qc=/\s/,Rc=function(a){if(g(a)&&(a=Ea(a),!Qc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Pc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],o:d}}}}},Tc=function(a){for(var b={},c=0;c<a.length;++c){var d=Rc(a[c]);d&&(b[d.id]=d)}Sc(b);var e=[];za(b,function(f,h){e.push(h)});return e};
function Sc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.o[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Uc={},Vc=null,Wc=Math.random();Uc.s="GTM-M55QTQ";Uc.vb="1m0";var Xc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Yc="www.googletagmanager.com/gtm.js";var Zc=Yc,$c=null,bd=null,cd=null,dd="//www.googletagmanager.com/a?id="+Uc.s+"&cv=124",ed={},fd={},gd=function(){var a=Vc.sequence||0;Vc.sequence=a+1;return a};var hd={},I=function(a,b){hd[a]=hd[a]||[];hd[a][b]=!0},id=function(a){for(var b=[],c=hd[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var jd=function(){return"&tc="+vb.filter(function(a){return a}).length},md=function(){kd||(kd=D.setTimeout(ld,500))},ld=function(){kd&&(D.clearTimeout(kd),kd=void 0);void 0===nd||od[nd]&&!pd&&!qd||(rd[nd]||sd.xg()||0>=td--?(I("GTM",1),rd[nd]=!0):(sd.dh(),mc(ud()),od[nd]=!0,vd=wd=qd=pd=""))},ud=function(){var a=nd;if(void 0===a)return"";var b=id("GTM"),c=id("TAGGING");return[xd,od[a]?"":"&es=1",yd[a],b?"&u="+b:"",c?"&ut="+c:"",jd(),pd,qd,wd,vd,"&z=0"].join("")},zd=function(){return[dd,"&v=3&t=t","&pid="+
wa(),"&rv="+Uc.vb].join("")},Ad="0.005000">Math.random(),xd=zd(),Bd=function(){xd=zd()},od={},pd="",qd="",vd="",wd="",nd=void 0,yd={},rd={},kd=void 0,sd=function(a,b){var c=0,d=0;return{xg:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},dh:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),td=1E3,Cd=function(a,b){if(Ad&&!rd[a]&&nd!==a){ld();nd=a;vd=pd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";yd[a]="&e="+c+"&eid="+a;md()}},Dd=function(a,b,c){if(Ad&&!rd[a]&&
b){a!==nd&&(ld(),nd=a);var d,e=String(b[Ib.qa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;pd=pd?pd+"."+f:"&tr="+f;md();2022<=ud().length&&ld()}},Ed=function(a,b,c){if(Ad&&!rd[a]){a!==nd&&(ld(),nd=a);var d=c+b;qd=qd?qd+
"."+d:"&epr="+d;md();2022<=ud().length&&ld()}};var Fd={},Gd=new xa,Hd={},Id={},Ld={name:"dataLayer",set:function(a,b){B(La(a,b),Hd);Jd()},get:function(a){return Kd(a,2)},reset:function(){Gd=new xa;Hd={};Jd()}},Kd=function(a,b){if(2!=b){var c=Gd.get(a);if(Ad){var d=Md(a);c!==d&&I("GTM",5)}return c}return Md(a)},Md=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:Od(d)},Od=function(a){for(var b=Hd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Qd=function(a,b){Id.hasOwnProperty(a)||(Gd.set(a,b),B(La(a,b),Hd),Jd())},Jd=function(a){za(Id,function(b,c){Gd.set(b,c);B(La(b,void 0),Hd);B(La(b,c),Hd);a&&delete Id[b]})},Rd=function(a,b,c){Fd[a]=Fd[a]||{};var d=1!==c?Md(b):Gd.get(b);"array"===Pa(d)||"object"===Pa(d)?Fd[a][b]=B(d):Fd[a][b]=d},Sd=function(a,b){if(Fd[a])return Fd[a][b]},Td=function(a,b){Fd[a]&&delete Fd[a][b]};var Ud=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===Vd()||d||"http:"!=D.location.protocol?a:b)+c},Vd=function(){var a=kc(),b;if(1===a)a:{var c=Zc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=F.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var je=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),ke={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},le={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},me="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var oe=function(a){var b=Kd("gtm.whitelist");b&&I("GTM",9);var c=b&&Ka(Da(b),ke),d=Kd("gtm.blacklist");d||(d=Kd("tagTypeBlacklist"))&&I("GTM",3);d?
I("GTM",8):d=[];ne()&&(d=Da(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=q(Da(d),"google")&&I("GTM",2);var e=d&&Ka(Da(d),le),f={};return function(h){var k=h&&h[Ib.qa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=fd[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>q(c,k))if(l&&0<l.length)for(var r=0;r<
l.length;r++){if(0>q(c,l[r])){I("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=q(e,k);if(p)u=p;else{var t=ya(e,l||[]);t&&I("GTM",10);u=t}}var v=!m||u;v||!(0<=q(l,"sandboxedScripts"))||c&&-1!==q(c,"sandboxedScripts")||(v=ya(e,me));return f[k]=v}},ne=function(){return je.test(D.location&&D.location.hostname)};var pe={Mf:function(a,b){b[Ib.od]&&"string"===typeof a&&(a=1==b[Ib.od]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Ib.qd)&&null===a&&(a=b[Ib.qd]);b.hasOwnProperty(Ib.sd)&&void 0===a&&(a=b[Ib.sd]);b.hasOwnProperty(Ib.rd)&&!0===a&&(a=b[Ib.rd]);b.hasOwnProperty(Ib.pd)&&!1===a&&(a=b[Ib.pd]);return a}};var qe={active:!0,isWhitelisted:function(){return!0}},re=function(a){var b=Vc.zones;!b&&a&&(b=Vc.zones=a());return b};var se=function(){};var te=!1,ue=0,ve=[];function we(a){if(!te){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){te=!0;for(var e=0;e<ve.length;e++)G(ve[e])}ve.push=function(){for(var f=0;f<arguments.length;f++)G(arguments[f]);return 0}}}function xe(){if(!te&&140>ue){ue++;try{F.documentElement.doScroll("left"),we()}catch(a){D.setTimeout(xe,50)}}}var ye=function(a){te?a():ve.push(a)};var ze={},Ae={},Be=function(a,b,c,d){if(!Ae[a]||Xc[b]||"__zone"===b)return-1;var e={};Ra(d)&&(e=B(d,e));e.id=c;e.status="timeout";return Ae[a].tags.push(e)-1},Ce=function(a,b,c,d){if(Ae[a]){var e=Ae[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function De(a){for(var b=ze[a]||[],c=0;c<b.length;c++)b[c]();ze[a]={push:function(d){d(Uc.s,Ae[a])}}}
var Ge=function(a,b,c){Ae[a]={tags:[]};qa(b)&&Ee(a,b);c&&D.setTimeout(function(){return De(a)},Number(c));return Fe(a)},Ee=function(a,b){ze[a]=ze[a]||[];ze[a].push(Ha(function(){return G(function(){b(Uc.s,Ae[a])})}))};function Fe(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ha(function(){b++;d&&b>=c&&De(a)})},vf:function(){d=!0;b>=c&&De(a)}}};var He=function(){function a(d){return!ra(d)||0>d?0:d}if(!Vc._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=ra(Ld.get("gtm.start"))?Ld.get("gtm.start"):0;Vc._li={cst:a(c-b),cbt:a(bd-b)}}};var Le=!1,Me=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Ne=!1;
var Oe=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||I("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}He();return D[b]},Pe=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Me();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Re=function(){},Qe=function(){return D.GoogleAnalyticsObject||"ga"};var Te=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Ue=/:[0-9]+$/,Ve=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Ye=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=We(a.protocol)||We(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(Ue,"").toLowerCase());var f=b,h,k=We(a.protocol);f&&(f=String(f).toLowerCase());switch(f){case "url_no_fragment":h=Xe(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Ue,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||I("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=q(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Ve(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},We=function(a){return a?a.replace(":","").toLowerCase():""},Xe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
Ze=function(a){var b=F.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||I("TAGGING",1),c="/"+c);var d=b.hostname.replace(Ue,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function df(a,b,c,d){var e=vb[a],f=ef(a,b,c,d);if(!f)return null;var h=Db(e[Ib.Gd],c,[]);if(h&&h.length){var k=h[0];f=df(k.index,{B:f,w:1===k.ae?b.terminate:f,terminate:b.terminate},c,d)}return f}
function ef(a,b,c,d){function e(){if(f[Ib.Te])k();else{var w=Eb(f,c,[]),y=Be(c.id,String(f[Ib.qa]),Number(f[Ib.Id]),w[Ib.Ue]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Fa()-C;Dd(c.id,vb[a],"5");Ce(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Fa()-C;Dd(c.id,vb[a],"6");Ce(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Dd(c.id,f,"1");var z=function(){var A=Fa()-C;Dd(c.id,f,"7");Ce(c.id,y,"exception",A);x||(x=!0,k())};var C=Fa();try{Cb(w,c)}catch(A){z(A)}}}var f=vb[a],h=b.B,k=b.w,l=b.terminate;if(c.Jc(f))return null;var m=Db(f[Ib.Jd],c,[]);if(m&&m.length){var n=m[0],r=df(n.index,{B:h,w:k,terminate:l},c,d);if(!r)return null;h=r;k=2===n.ae?l:r}if(f[Ib.Bd]||f[Ib.Xe]){var u=f[Ib.Bd]?wb:c.nh,p=h,t=k;if(!u[a]){e=Ha(e);var v=ff(a,u,e);h=v.B;k=v.w}return function(){u[a](p,t)}}return e}
function ff(a,b,c){var d=[],e=[];b[a]=gf(d,e,c);return{B:function(){b[a]=hf;for(var f=0;f<d.length;f++)d[f]()},w:function(){b[a]=jf;for(var f=0;f<e.length;f++)e[f]()}}}function gf(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function hf(a){a()}function jf(a,b){b()};var mf=function(a,b){for(var c=[],d=0;d<vb.length;d++)if(a.gb[d]){var e=vb[d];var f=b.add();try{var h=df(d,{B:f,w:f,terminate:f},a,d);h?c.push({Ae:d,ve:Fb(e),Yf:h}):(kf(d,a),f())}catch(l){f()}}b.vf();c.sort(lf);for(var k=0;k<c.length;k++)c[k].Yf();return 0<c.length};function lf(a,b){var c,d=b.ve,e=a.ve;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Ae,k=b.Ae;f=h>k?1:h<k?-1:0}return f}
function kf(a,b){if(!Ad)return;var c=function(d){var e=b.Jc(vb[d])?"3":"4",f=Db(vb[d][Ib.Gd],b,[]);f&&f.length&&c(f[0].index);Dd(b.id,vb[d],e);var h=Db(vb[d][Ib.Jd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var nf=!1,of=function(a,b,c,d,e){if("gtm.js"==b){if(nf)return!1;nf=!0}Cd(a,b);var f=Ge(a,d,e);Rd(a,"event",1);Rd(a,"ecommerce",1);Rd(a,"gtm");var h={id:a,name:b,Jc:oe(c),gb:[],nh:[],ne:function(){I("GTM",6)}};h.gb=Mb(h);var k=mf(h,f);if(!k)return k;for(var l=0;l<h.gb.length;l++)if(h.gb[l]){var m=vb[l];if(m&&!Xc[String(m[Ib.qa])])return!0}return!1};var qf=/^https?:\/\/www\.googletagmanager\.com/;function rf(){var a;return a}function tf(a,b){}
function sf(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function uf(){var a=!1;return a};var vf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.B=function(){};this.w=function(){}},wf=function(a){var b=new vf;b.eventModel=a;return b},xf=function(a,b){a.targetConfig=b;return a},yf=function(a,b){a.containerConfig=b;return a},zf=function(a,b){a.h=b;return a},Af=function(a,b){a.globalConfig=b;return a},Bf=function(a,b){a.B=b;return a},Cf=function(a,b){a.w=b;return a};
vf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Df=function(a){function b(e){za(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];za(c,function(e){d.push(e)});return d};var Ef={},Ff=["G"];Ef.Be="";var Gf=Ef.Be.split(",");function Hf(){var a=Vc;return a.gcq=a.gcq||new If}
var Jf=function(a,b,c){Hf().register(a,b,c)},Kf=function(a,b,c,d){Hf().push("event",[b,a],c,d)},Lf=function(a,b){Hf().push("config",[a],b)},Mf={},Nf=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},Of=function(a,b,c,d,e){this.type=a;this.m=b;this.N=c||"";this.h=d;this.i=e},If=function(){this.i={};this.m={};this.h=[]},Pf=function(a,b){var c=Rc(b);return a.i[c.containerId]=a.i[c.containerId]||new Nf},Qf=function(a,b,c,d){if(d.N){var e=Pf(a,d.N),
f=e.m;if(f){var h=B(c),k=B(e.targetConfig[d.N]),l=B(e.containerConfig),m=B(e.i),n=B(a.m),r=Kd("gtm.uniqueEventId"),u=Rc(d.N).prefix,p=Cf(Bf(Af(zf(yf(xf(wf(h),k),l),m),n),function(){Ed(r,u,"2");}),function(){Ed(r,u,"3");});try{Ed(r,u,"1");f(d.N,b,d.m,p)}catch(t){
Ed(r,u,"4");}}}};
If.prototype.register=function(a,b,c){if(3!==Pf(this,a).status){Pf(this,a).m=b;Pf(this,a).status=3;c&&(Pf(this,a).i=c);var d=Rc(a),e=Mf[d.containerId];if(void 0!==e){var f=Vc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Vc[d.containerId]._spx&&(h=h.toLowerCase());var k=Kd("gtm.uniqueEventId"),l=h,m=Fa()-f;if(Ad&&!rd[k]){k!==nd&&(ld(),nd=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);wd=wd?wd+","+n:"&cl="+n}delete Mf[d.containerId]}this.flush()}};
If.prototype.push=function(a,b,c,d){var e=Math.floor(Fa()/1E3);if(c){var f=Rc(c),h;if(h=f){var k;if(k=1===Pf(this,c).status)a:{var l=f.prefix;k=!0}h=k}if(h&&(Pf(this,c).status=2,this.push("require",[],f.containerId),Mf[f.containerId]=Fa(),!Ud())){var m=encodeURIComponent(f.containerId),n=("http:"!=D.location.protocol?"https:":"http:")+
"//www.googletagmanager.com";jc(n+"/gtag/js?id="+m+"&l=dataLayer&cx=c")}}this.h.push(new Of(a,e,c,b,d));d||this.flush()};
If.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Pf(this,c.N).status&&!a)return;break;case "set":za(c.h[0],function(l,m){B(La(l,m),b.m)});break;case "config":var d=c.h[0],e=!!d[H.Ob];delete d[H.Ob];var f=Pf(this,c.N),h=Rc(c.N),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.N]={});f.h&&e||Qf(this,H.D,d,c);f.h=!0;delete d[H.oa];k?B(d,f.containerConfig):B(d,f.targetConfig[c.N]);break;
case "event":Qf(this,c.h[1],c.h[0],c)}this.h.shift()}};var Rf=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Vf=function(a,b,c,d){var e=Sf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Tf(e,function(f){return f.Hb},b);if(1===e.length)return e[0].id;e=Tf(e,function(f){return f.hb},c);return e[0]?e[0].id:void 0}};
function Wf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Rf(b,e).indexOf(c)}
var Zf=function(a,b,c,d,e,f){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{f&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var r=void 0,u=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var t=h[p];if(null!=t)switch(p){case "secure":t&&(m+="; secure");break;case "domain":r=t;break;default:"path"==p&&(u=t),"expires"==p&&t instanceof Date&&(t=
t.toUTCString()),m+="; "+p+"="+t}}if("auto"===r){for(var v=Xf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!Yf(y,u)&&Wf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else r&&"none"!=r&&(m+="; domain="+r),k=!Yf(r,u)&&Wf(m,a,l)}return k};function Tf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}
function Sf(a,b){for(var c=[],d=Rf(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Hb:1*k[0]||1,hb:1*k[1]||1}))}}return c}
var $f=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ag=/(^|\.)doubleclick\.net$/i,Yf=function(a,b){return ag.test(document.location.hostname)||"/"===b&&$f.test(a)},Xf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;ag.test(e)||$f.test(e)||a.push("none");return a};var bg="".split(/,/),cg=!1;var dg=null,eg={},fg={},gg;function hg(a,b){var c={event:a};b&&(c.eventModel=B(b),b[H.jc]&&(c.eventCallback=b[H.jc]),b[H.qb]&&(c.eventTimeout=b[H.qb]));return c}
var ng={config:function(a){},
event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ra(a[2])&&void 0!=a[2])return;c=a[2]}var d=hg(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Ra(a[1])?b=B(a[1]):3==a.length&&g(a[1])&&(b={},Ra(a[2])||ua(a[2])?b[a[1]]=B(a[2]):b[a[1]]=a[2]);
if(b){b._clear=!0;return b}}},og={policy:!0};var pg=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},rg=function(a){var b=qg(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var sg=!1,tg=[];function ug(){if(!sg){sg=!0;for(var a=0;a<tg.length;a++)G(tg[a])}}var vg=function(a){sg?G(a):tg.push(a)};var Kg=function(a){if(Jg(a))return a;this.h=a};Kg.prototype.eg=function(){return this.h};var Jg=function(a){return!a||"object"!==Pa(a)||Ra(a)?!1:"getUntrustedUpdateValue"in a};Kg.prototype.getUntrustedUpdateValue=Kg.prototype.eg;var Lg=[],Mg=!1,Ng=function(a){return D["dataLayer"].push(a)},Og=function(a){var b=Vc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Pg(a){var b=a._clear;za(a,function(f,h){"_clear"!==f&&(b&&Qd(f,void 0),Qd(f,h))});$c||($c=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=gd(),a["gtm.uniqueEventId"]=d,Qd("gtm.uniqueEventId",d));cd=c;var e=
Qg(a);cd=null;switch(c){case "gtm.init":I("GTM",19),e&&I("GTM",20)}return e}function Qg(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Vc.zones;d=e?e.checkState(Uc.s,c):qe;return d.active?of(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Rg(){for(var a=!1;!Mg&&0<Lg.length;){Mg=!0;delete Hd.eventModel;Jd();var b=Lg.shift();if(null!=b){var c=Jg(b);if(c){var d=b;b=Jg(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Kd(h,1);if(ua(k)||Ra(k))k=B(k);Id[h]=k}}try{if(qa(b))try{b.call(Ld)}catch(v){}else if(ua(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),u=Kd(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,r)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&g(b[0])){var t=ng[b[0]];if(t&&(!c||!og[b[0]])){b=t(b);break a}}b=void 0}if(!b){Mg=!1;continue}}a=Pg(b)||a}}finally{c&&Jd(!0)}}Mg=!1}
return!a}function Sg(){var a=Rg();try{pg(D["dataLayer"],Uc.s)}catch(b){}return a}
var Ug=function(){var a=hc("dataLayer",[]),b=hc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};ye(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});vg(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Vc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Kg(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Lg.push.apply(Lg,d);if(300<
this.length)for(I("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Rg()&&h};Lg.push.apply(Lg,a.slice(0));Tg()&&G(Sg)},Tg=function(){var a=!0;return a};var Vg={};Vg.rb=new String("undefined");
var Wg=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Vg.rb?b:a[d]);return c.join("")}};Wg.prototype.toString=function(){return this.h("undefined")};Wg.prototype.valueOf=Wg.prototype.toString;Vg.df=Wg;Vg.vc={};Vg.Pf=function(a){return new Wg(a)};var Xg={};Vg.eh=function(a,b){var c=gd();Xg[c]=[a,b];return c};Vg.Xd=function(a){var b=a?0:1;return function(c){var d=Xg[c];if(d&&"function"===typeof d[b])d[b]();Xg[c]=void 0}};Vg.vg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Vg.Tg=function(a){if(a===Vg.rb)return a;var b=gd();Vg.vc[b]=a;return'google_tag_manager["'+Uc.s+'"].macro('+b+")"};Vg.Fg=function(a,b,c){a instanceof Vg.df&&(a=a.h(Vg.eh(b,c)),b=pa);return{Hc:a,B:b}};var Yg=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||qc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Zg=function(a){Vc.hasOwnProperty("autoEventsSettings")||(Vc.autoEventsSettings={});var b=Vc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},$g=function(a,b,c){Zg(a)[b]=c},ah=function(a,b,c,d){var e=Zg(a),f=Ga(e,b,d);e[b]=c(f)},bh=function(a,b,c){var d=Zg(a);return Ga(d,b,c)};var ch=function(){for(var a=fc.userAgent+(F.cookie||"")+(F.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},fh=function(a,b,c,d){var e=dh(b);return Vf(a,e,eh(c),d)},gh=function(a,b,c,d){var e=""+dh(c),f=eh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},dh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},eh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var hh=["1"],ih={},mh=function(a,b,c,d){var e=jh(a);ih[e]||kh(e,b,c)||(lh(e,ch(),b,c,d),kh(e,b,c))};function lh(a,b,c,d,e){var f=gh(b,"1",d,c);Zf(a,f,c,d,0==e?void 0:new Date(Fa()+1E3*(void 0==e?7776E3:e)))}function kh(a,b,c){var d=fh(a,b,c,hh);d&&(ih[a]=d);return d}function jh(a){return(a||"_gcl")+"_au"};var nh=function(){for(var a=[],b=F.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({bd:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].bd]||(f[a[h].bd]=[]),f[a[h].bd].push({timestamp:k[1],ag:k[2]}))}return f};function oh(){for(var a=ph,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function qh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var ph,rh;function sh(a){ph=ph||qh();rh=rh||oh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(ph[l],ph[m],ph[n],ph[r])}return b.join("")}
function th(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=rh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}ph=ph||qh();rh=rh||oh();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var uh;function vh(a,b){if(!a||b===F.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var zh=function(){var a=wh,b=xh,c=yh(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){nc(F,"mousedown",d);nc(F,"keyup",d);nc(F,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},yh=function(){var a=hc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Ah=/(.*?)\*(.*?)\*(.*)/,Bh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ch=/^(?:www\.|m\.|amp\.)+/,Dh=/([^?#]+)(\?[^#]*)?(#.*)?/,Eh=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Gh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(sh(String(d))))}var e=b.join("*");return["1",Fh(e),e].join("*")},Fh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=uh)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}uh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^uh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Ih=function(){return function(a){var b=Ze(D.location.href),c=b.search.replace("?",""),d=Ve(c,"_gl",!0)||"";a.query=Hh(d)||{};var e=Ye(b,"fragment").match(Eh);a.fragment=Hh(e&&e[3]||
"")||{}}},Jh=function(){var a=Ih(),b=yh();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ia(c,d.query),Ia(c,d.fragment));return c},Hh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Ah.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Fh(k,n)){l=!0;break a}l=!1}if(l){for(var r={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)r[u[p]]=th(u[p+1]);return r}}}}catch(t){}};
function Kh(a,b,c){function d(m){var n=m,r=Eh.exec(n),u=n;if(r){var p=r[2],t=r[4];u=r[1];t&&(u=u+p+t)}m=u;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Dh.exec(b);if(!e)return"";var f=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+f+h+k}
function Lh(a,b,c){for(var d={},e={},f=yh().decorators,h=0;h<f.length;++h){var k=f[h];(!c||k.forms)&&vh(k.domains,b)&&(k.fragment?Ia(e,k.callback()):Ia(d,k.callback()))}if(Ja(d)){var l=Gh(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],r=!1,u=0;u<n.length;u++){var p=n[u];if("_gl"===p.name){p.setAttribute("value",l);r=!0;break}}if(!r){var t=F.createElement("input");t.setAttribute("type","hidden");t.setAttribute("name","_gl");t.setAttribute("value",
l);a.appendChild(t)}}else if("post"===m){var v=Kh(l,a.action);Te.test(v)&&(a.action=v)}}}else Mh(l,a,!1)}if(!c&&Ja(e)){var w=Gh(e);Mh(w,a,!0)}}function Mh(a,b,c){if(b.href){var d=Kh(a,b.href,void 0===c?!1:c);Te.test(d)&&(b.href=d)}}
var wh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Lh(e,e.hostname,!1)}}catch(h){}},xh=function(a){try{if(a.action){var b=Ye(Ze(a.action),"host");Lh(a,b,!0)}}catch(c){}},Nh=function(a,b,c,d){zh();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};yh().decorators.push(e)},Oh=function(){var a=F.location.hostname,b=Bh.exec(F.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Ch,""),l=e.replace(Ch,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Ph=function(a,b){return!1===a?!1:a||b||Oh()};var Qh={};var Rh=/^\w+$/,Sh=/^[\w-]+$/,Th=/^~?[\w-]+$/,Uh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Vh(a){return a&&"string"==typeof a&&a.match(Rh)?a:"_gcl"}var Xh=function(){var a=Ze(D.location.href),b=Ye(a,"query",!1,void 0,"gclid"),c=Ye(a,"query",!1,void 0,"gclsrc"),d=Ye(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ve(e,"gclid",void 0);c=c||Ve(e,"gclsrc",void 0)}return Wh(b,c,d)};
function Wh(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};if(void 0!==a&&a.match(Sh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Qh.gtm_3pds?0:Qh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d}var Zh=function(a){var b=Xh();Yh(b,a)};
function Yh(a,b,c){function d(r,u){var p=$h(r,e);p&&Zf(p,u,h,f,l,!0)}b=b||{};var e=Vh(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.Ia?7776E3:b.Ia;c=c||Fa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(r){return["GCL",m,r].join(".")};a.aw&&(!0===b.$h?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var bi=function(a,b,c,d,e){for(var f=Jh(),h=Vh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Uh[l]){var m=$h(l,h),n=f[m];if(n){var r=Math.min(ai(n),Fa()),u;b:{for(var p=r,t=Rf(m,F.cookie),v=0;v<t.length;++v)if(ai(t[v])>p){u=!0;break b}u=!1}u||Zf(m,n,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Yh(Wh(f.gclid,f.gclsrc),w)},$h=function(a,b){var c=Uh[a];if(void 0!==c)return b+c},ai=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function ci(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var di=function(a,b,c,d,e){if(ua(b)){var f=Vh(e);Nh(function(){for(var h={},k=0;k<a.length;++k){var l=$h(a[k],f);if(l){var m=Rf(l,F.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},ei=function(a){return a.filter(function(b){return Th.test(b)})},fi=function(a,b){for(var c=Vh(b&&b.prefix),d={},e=0;e<a.length;e++)Uh[a[e]]&&(d[a[e]]=Uh[a[e]]);za(d,function(f,h){var k=Rf(c+h,F.cookie);if(k.length){var l=k[0],m=ai(l),n={};n[f]=[ci(l)];Yh(n,b,m)}})};var gi=/^\d+\.fls\.doubleclick\.net$/;function hi(a){var b=Ze(D.location.href),c=Ye(b,"host",!1);if(c&&c.match(gi)){var d=Ye(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function ii(a,b){if("aw"==a||"dc"==a){var c=hi("gcl"+a);if(c)return c.split(".")}var d=Vh(b);if("_gcl"==d){var e;e=Xh()[a]||[];if(0<e.length)return e}var f=$h(a,d),h;if(f){var k=[];if(F.cookie){var l=Rf(f,F.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=ci(l[m]);n&&-1===q(k,n)&&k.push(n)}h=ei(k)}else h=k}else h=k}else h=[];return h}
var ji=function(){var a=hi("gac");if(a)return decodeURIComponent(a);var b=nh(),c=[];za(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].ag);f=ei(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},ki=function(a,b,c,d,e){mh(b,c,d,e);var f=ih[jh(b)],h=Xh().dc||[],k=!1;if(f&&0<h.length){var l=Vc.joined_au=Vc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var r="https://adservice.google.com/ddm/regclk",u=r=r+"?gclid="+h[n]+"&auiddc="+f;fc.sendBeacon&&fc.sendBeacon(u)||mc(u);k=l[m]=
!0}}null==a&&(a=k);if(a&&f){var p=jh(b),t=ih[p];t&&lh(p,t,c,d,e)}};var li;if(3===Uc.vb.length)li="g";else{var mi="G";li=mi}
var ni={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:li,OPT:"o"},oi=function(a){var b=Uc.s.split("-"),c=b[0].toUpperCase(),d=ni[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Uc.vb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Uc.vb+e};var ti=["input","select","textarea"],ui=["button","hidden","image","reset","submit"],vi=function(a){var b=a.tagName.toLowerCase();return!va(ti,function(c){return c===b})||"input"===b&&va(ui,function(c){return c===a.type.toLowerCase()})?!1:!0},wi=function(a){return a.form?a.form.tagName?a.form:F.getElementById(a.form):tc(a,["form"],100)},xi=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(vi(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Ai=!!D.MutationObserver,Bi=void 0,Ci=function(a){if(!Bi){var b=function(){var c=F.body;if(c)if(Ai)(new MutationObserver(function(){for(var e=0;e<Bi.length;e++)G(Bi[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;nc(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<Bi.length;e++)G(Bi[e])}))})}};Bi=[];F.body?b():G(b)}Bi.push(a)};
var Ni=function(){var a=F.body,b=F.documentElement||a&&a.parentElement,c,d;if(F.compatMode&&"BackCompat"!==F.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};I("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Oi=function(a){var b=Ni(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,0)+
Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Pi=function(a){if(F.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,null))}return!1};var Qi=[],Ri=!(!D.IntersectionObserver||!D.IntersectionObserverEntry),Ti=function(a,b,c){for(var d=new D.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Qi.length;f++)if(!Qi[f])return Qi[f]=d,f;return Qi.push(d)-1},Ui=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Fa()};G(function(){return a(n)})}for(var e=[],f=[],h=0;h<b.length;h++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=Oi(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},Vi=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Ri){var e=!1;G(function(){e||Ui(a,b,c)()});return Ti(function(f){e=!0;for(var h={La:0};h.La<f.length;h={La:h.La},h.La++)G(function(k){return function(){return a(f[k.La])}}(h))},b,c)}return D.setInterval(Ui(a,b,c),1E3)},Wi=function(a){Ri?0<=a&&a<Qi.length&&Qi[a]&&(Qi[a].disconnect(),Qi[a]=void 0):D.clearInterval(a)};var Yi=D.clearTimeout,Zi=D.setTimeout,R=function(a,b,c){if(Ud()){b&&G(b)}else return jc(a,b,c)},$i=function(){return D.location.href},aj=function(a){return Ye(Ze(a),"fragment")},bj=function(a){return Xe(Ze(a))},S=function(a,b){return Kd(a,b||2)},cj=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Ng(a)):d=Ng(a);return d},dj=function(a,b){D[a]=b},X=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},ej=function(a,b,c){return Rf(a,b,void 0===c?!0:!!c)},fj=function(a,b){if(Ud()){b&&G(b)}else lc(a,b)},gj=function(a){return!!bh(a,"init",!1)},hj=function(a){$g(a,"init",!0)},ij=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Zc;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";R(Q("https://","http://",c))},jj=function(a,b){var c=a[b];return c};
var kj=Vg.Fg;var lj;var Ij=new xa;function Jj(a,b){function c(h){var k=Ze(h),l=Ye(k,"protocol"),m=Ye(k,"host",!0),n=Ye(k,"port"),r=Ye(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Kj(a){return Lj(a)?1:0}
function Lj(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ua(c)){for(var d=0;d<c.length;d++)if(Kj({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=q(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,t=Ij.get(p);t||(t=new RegExp(c,u),Ij.set(p,t));r=t.test(b)}catch(v){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Jj(b,
c)}return!1};var Mj=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Nj={},Oj=encodeURI,Y=encodeURIComponent,Pj=mc;var Qj=function(a,b){if(!a)return!1;var c=Ye(Ze(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Rj=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Nj.wg=function(){var a=!1;return a};var dl=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var ol=window,pl=document,ql=function(a){var b=ol._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ol["ga-disable-"+a])return!0;try{var c=ol.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Rf("AMP_TOKEN",pl.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return pl.getElementById("__gaOptOutExtension")?!0:!1};var tl=function(a){za(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.ca]||{};za(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var xl=function(a,b,c){Kf(b,c,a)},yl=function(a,b,c){Kf(b,c,a,!0)},Al=function(a,b){};
function zl(a,b){}var Z={a:{}};


Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=wc(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=F.getElementById(a.vtp_elementId);b&&(d?c=qc(b,d):c=rc(b));return Ea(String(b&&c))})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Sd(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=S("gtm.referrer",1)||F.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ye(Ze(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):bj(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Yg(c,"gtm.click");cj(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!gj("cl")){var c=X("document");nc(c,"click",a,!0);hj("cl")}G(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=X(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();

Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=S("gtm.url",1);c=c||$i();var d=b[a("vtp_component")];if(!d||"URL"==d)return bj(String(c));var e=Ze(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?ua(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=Ye(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Ye(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=S(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;B(Rj(n.vtp_fieldsToSet,"fieldName","value"),f);B(Rj(n.vtp_contentGroup,"index","group"),h);B(Rj(n.vtp_dimension,"index","dimension"),k);B(Rj(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var r=B(n);d=B(d,r)}B(Rj(d.vtp_fieldsToSet,"fieldName","value"),f);B(Rj(d.vtp_contentGroup,
"index","group"),h);B(Rj(d.vtp_dimension,"index","dimension"),k);B(Rj(d.vtp_metric,"index","metric"),l);var u=Oe(d.vtp_functionName);if(qa(u)){var p="",t="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(t=d.vtp_trackerName,p=t+"."):(t="gtm"+gd(),p=t+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},y=function(O){var K=[].slice.call(arguments,0);K[0]=p+K[0];u.apply(window,K)},x=function(O,K){return void 0===K?K:O(K)},z=function(O,K){if(K)for(var sa in K)K.hasOwnProperty(sa)&&
y("set",O+sa,K[sa])},C=function(){},A=function(O,K,sa){var Gb=0;if(O)for(var Ca in O)if(O.hasOwnProperty(Ca)&&(sa&&v[Ca]||!sa&&void 0===v[Ca])){var Za=w[Ca]?Ba(O[Ca]):O[Ca];"anonymizeIp"!=Ca||Za||(Za=void 0);K[Ca]=Za;Gb++}return Gb},E={name:t};A(f,E,
!0);u("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",oi(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,K){void 0!==d[K]&&y("set",O,d[K])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var J={};A(f,J,!1)&&y("set",J);var M;d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=f&&f.hitCallback;qa(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());var V={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||
e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Aa,d.vtp_eventValue||e.value)};A(M,V,!1);y("send",V);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==
d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==
d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&
(y("require","ec","ec.js"),C());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var oa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:oa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ka="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ka})}M?y("send","pageview",M):y("send","pageview");}if(!a){var ta=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ta="internal/"+ta);a=!0;var ab=Q("https:","http:","//www.google-analytics.com/"+ta,f&&f.forceSSL);
R(ab,function(){var O=Me();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();







Z.a.aev=["google"],function(){function a(p,t){var v=Sd(p,"gtm");if(v)return v[t]}function b(p,t,v,w){w||(w="element");var y=p+"."+t,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(p,w);if(z&&(x=v(z),n[y]=x,r.push(y),35<r.length)){var C=r.shift();delete n[C]}}return x}function c(p,t,v){var w=a(p,u[t]);return void 0!==w?w:v}function d(p,t){if(!p)return!1;var v=e($i());ua(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++)if(t[y]instanceof RegExp){if(t[y].test(p))return!1}else{var x=
t[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!Qj(p,w)}function e(p){m.test(p)||(p="http://"+p);return Ye(Ze(p),"HOST",!0)}function f(p,t,v){switch(p){case "SUBMIT_TEXT":return b(t,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return qc(p,"value");case "button":return rc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var t=0,v=0;v<p.elements.length;v++)vi(p.elements[v])&&t++;return t}}function l(p,t,v){var w=a(p,"interactedFormField");return w&&qc(w,t)||v}var m=/^https?:\/\//i,n={},r=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var t=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||
v;case "TEXT":return b(t,w,rc)||v;case "URL":var x;a:{var z=String(a(t,"elementUrl")||v||""),C=Ze(z),A=String(p.vtp_component||"URL");switch(A){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,p.vtp_affiliatedDomains);break a;default:x=Ye(C,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(t,w,v);else{var J=p.vtp_attribute,M=a(t,"element");E=M&&qc(M,J)||v||""}return E;case "MD":var V=p.vtp_mdValue,W=b(t,"MD",Ji);return V&&W?Mi(W,V)||
v:W||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),t,v);default:return c(t,w,v)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=B(a),c=b;c[Ib.qa]=null;c[Ib.Ne]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:$i()}function b(f,h){nc(f,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:bj(l),J:aj(l)})})}function c(f,h){nc(f,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:bj(l),J:aj(l)})})}function d(f,h,k){var l=h.history,m=l[f];if(qa(m))try{l[f]=function(n,r,u){m.apply(l,[].slice.call(arguments,0));k({source:f,state:n,url:bj($i()),
J:aj($i())})}}catch(n){}}function e(){var f={source:null,state:X("history").state||null,url:bj($i()),J:aj($i())};return function(h){var k=f,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.J!=h.J){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":f.J,"gtm.newUrlFragment":h.J,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=f.url,m["gtm.newUrl"]=h.url;
f=h;cj(m)}}}(function(f){Z.__hl=f;Z.__hl.b="hl";Z.__hl.g=!0;Z.__hl.priorityOverride=0})(function(f){var h=X("self");if(!gj("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);hj("hl")}G(f.vtp_gtmOnSuccess)})}();
Z.a.fsl=[],function(){function a(){var e=X("document"),f=c(),h=HTMLFormElement.prototype.submit;nc(e,"click",function(k){var l=k.target;if(l&&(l=tc(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&qc(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=F.getElementById(l.form):m=tc(l,["form"],100);m&&f.store(m,l)}},!1);nc(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,r=f.get(l),u=!0;if(d(l,function(){if(u){var p;
r&&(p=e.createElement("input"),p.type="hidden",p.name=r.name,p.value=r.value,l.appendChild(p));h.call(l);p&&l.removeChild(p)}},m,n,r))u=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(h){return va(e,function(k){return k.form===
h})};return{store:function(h,k){var l=f(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=f(h);return k?k.button:null}}}function d(e,f,h,k,l){var m=bh("fsl",h?"nv.mwt":"mwt",0),n;n=h?bh("fsl","nv.ids",[]):bh("fsl","ids",[]);if(!n.length)return!0;var r=Yg(e,"gtm.formSubmit",n),u=e.action;u&&u.tagName&&(u=e.cloneNode(!1).action);r["gtm.elementUrl"]=u;l&&(r["gtm.formSubmitElement"]=l);if(k&&m){if(!cj(r,Og(f),m))return!1}else cj(r,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.b=
"fsl";Z.__fsl.g=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(r){return Math.max(k,r)};ah("fsl","mwt",m,0);h||ah("fsl","nv.mwt",m,0)}var n=function(r){r.push(l);return r};ah("fsl","ids",n,[]);h||ah("fsl","nv.ids",n,[]);gj("fsl")||(a(),hj("fsl"));G(e.vtp_gtmOnSuccess)})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Rj(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=F.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,ic(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(u){G(h)}}}var c=function(d){if(F.body){var e=
d.vtp_gtmOnFailure,f=kj(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Hc,k=f.B;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(F.body,sc(h),k,e)()}else Zi(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();






Z.a.lcl=[],function(){function a(){var e=X("document"),f=0,h=function(k){var l=k.target;if(l&&3!==k.which&&!(k.ug||k.timeStamp&&k.timeStamp===f)){f=k.timeStamp;l=tc(l,["a","area"],100);if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=bh("lcl",m?"nv.mwt":"mwt",0),r;r=m?bh("lcl","nv.ids",[]):bh("lcl","ids",[]);if(r.length){var u=Yg(l,"gtm.linkClick",r);if(b(k,l,e)&&!m&&n&&l.href){var p=String(jj(l,"rel")||""),t=!!va(p.split(" "),function(y){return"noreferrer"===y.toLowerCase()});
t&&I("GTM",36);var v=X((jj(l,"target")||"_self").substring(1)),w=!0;if(cj(u,Og(function(){var y;if(y=w&&v){var x;a:if(t&&d){var z;try{z=new MouseEvent(k.type)}catch(C){if(!e.createEvent){x=!1;break a}z=e.createEvent("MouseEvents");z.initEvent(k.type,!0,!0)}z.ug=!0;k.target.dispatchEvent(z);x=!0}else x=!1;y=!x}y&&(v.location.href=jj(l,"href"))}),n))w=!1;else return k.preventDefault&&k.preventDefault(),k.returnValue=!1}else cj(u,function(){},n||2E3);return!0}}};nc(e,"click",h,!1);nc(e,"auxclick",h,
!1)}function b(e,f,h){if(2===e.which||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)return!1;var k=jj(f,"href"),l=k.indexOf("#"),m=jj(f,"target");if(m&&"_self"!==m&&"_parent"!==m&&"_top"!==m||0===l)return!1;if(0<l){var n=bj(k),r=bj(h.location);return n!==r}return!0}function c(e){var f=void 0===e.vtp_waitForTags?!0:e.vtp_waitForTags,h=void 0===e.vtp_checkValidation?!0:e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(r){return Math.max(k,
r)};ah("lcl","mwt",m,0);h||ah("lcl","nv.mwt",m,0)}var n=function(r){r.push(l);return r};ah("lcl","ids",n,[]);h||ah("lcl","nv.ids",n,[]);gj("lcl")||(a(),hj("lcl"));G(e.vtp_gtmOnSuccess)}var d=!1;d=!0;Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=0;}();

Z.a.evl=["google"],function(){function a(f,h){this.element=f;this.uid=h}function b(){var f=Number(S("gtm.start"))||0;return(new Date).getTime()-f}function c(f,h,k,l){function m(){if(!Pi(f.target)){h.has(e.ub)||h.set(e.ub,""+b());h.has(e.nc)||h.set(e.nc,""+b());var r=0;h.has(e.xb)&&(r=Number(h.get(e.xb)));r+=100;h.set(e.xb,""+r);if(r>=k){var u=Yg(f.target,"gtm.elementVisibility",[h.uid]),p=Oi(f.target);u["gtm.visibleRatio"]=Math.round(1E3*p)/10;u["gtm.visibleTime"]=k;u["gtm.visibleFirstTime"]=Number(h.get(e.nc));
u["gtm.visibleLastTime"]=Number(h.get(e.ub));cj(u);l()}}}if(!h.has(e.Sa)&&(0==k&&m(),!h.has(e.za))){var n=X("self").setInterval(m,100);h.set(e.Sa,n)}}function d(f){f.has(e.Sa)&&(X("self").clearInterval(Number(f.get(e.Sa))),f.h(e.Sa))}var e={Sa:"polling-id-",nc:"first-on-screen-",ub:"recent-on-screen-",xb:"total-visible-time-",za:"has-fired-"};a.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.uid)};a.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.uid)};a.prototype.set=function(f,h){this.element.setAttribute("data-gtm-vis-"+f+this.uid,h)};a.prototype.h=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.uid)};(function(f){Z.__evl=f;Z.__evl.b="evl";Z.__evl.g=!0;Z.__evl.priorityOverride=0})(function(f){function h(){var y=!1,x=null;if("CSS"===l){try{x=wc(m)}catch(J){}y=!!x&&v.length!=x.length}else if("ID"===l){var z=F.getElementById(m);z&&(x=[z],y=1!=v.length||v[0]!==z)}x||(x=[],y=0<v.length);if(y){for(var C=0;C<v.length;C++){var A=
new a(v[C],p);d(A)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&Wi(w);0<v.length&&(w=Vi(k,v,[u]))}}function k(y){var x=new a(y.target,p);y.intersectionRatio>=u?x.has(e.za)||c(y,x,r,"ONCE"===t?function(){for(var z=0;z<v.length;z++){var C=new a(v[z],p);C.set(e.za,"1");d(C)}Wi(w);if(n&&Bi)for(var A=0;A<Bi.length;A++)Bi[A]===h&&Bi.splice(A,1)}:function(){x.set(e.za,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===t&&x.has(e.za)&&(x.h(e.za),x.h(e.xb)),x.h(e.ub))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,r=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,u=(Number(f.vtp_onScreenRatio)||50)/100,p=f.vtp_uniqueTriggerId,t=f.vtp_firingFrequency,v=[],w=-1;h();n&&Ci(h);G(f.vtp_gtmOnSuccess)})}();

var vm={};vm.macro=function(a){if(Vg.vc.hasOwnProperty(a))return Vg.vc[a]},vm.onHtmlSuccess=Vg.Xd(!0),vm.onHtmlFailure=Vg.Xd(!1);vm.dataLayer=Ld;vm.callback=function(a){ed.hasOwnProperty(a)&&qa(ed[a])&&ed[a]();delete ed[a]};function wm(){Vc[Uc.s]=vm;Ia(fd,Z.a);zb=zb||Vg;Ab=pe}
function xm(){Qh.gtm_3pds=!0;Vc=D.google_tag_manager=D.google_tag_manager||{};if(Vc[Uc.s]){var a=Vc.zones;a&&a.unregisterChild(Uc.s)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)rb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)vb.push(e[f]);for(var h=b.predicates||[],k=0;k<
h.length;k++)tb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},u=0;u<n.length;u++)r[n[u][0]]=Array.prototype.slice.call(n[u],1);sb.push(r)}xb=Z;yb=Kj;wm();Ug();te=!1;ue=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)we();else{nc(F,"DOMContentLoaded",we);nc(F,"readystatechange",we);if(F.createEventObject&&F.documentElement.doScroll){var p=!0;try{p=!D.frameElement}catch(y){}p&&xe()}nc(D,"load",we)}sg=!1;"complete"===F.readyState?ug():nc(D,
"load",ug);a:{if(!Ad)break a;D.setInterval(Bd,864E5);}
bd=(new Date).getTime();
}}xm();

})()
