(function(window,document,$){window.SLI=window.SLI||{};var SLI=window.SLI;SLI.rac={base:location.protocol+"//nejm.resultspage.com",version:"3.13",path:"//assets.resultspage.com/js/autocomplete/sli-rac.stub",align:"left",selector:".sli_ac_suggestion, .sli_ac_product",localisation:{viewMore:"",searchLabel:"",productLabel:""},behaviourOptions:{strategy:"swiftphrase",dynamic:"false",suggestionCount:"10",mobileSuggestionCount:"10",searchIn:"",searchInCount:0,showLogo:false,showPrice:false,showDescription:false,productDisplay:"list",productCount:0,mobileProductCount:0},onSelect:function(params){var racType;
if(params.url.match(/rt=racscope/)){racType="scope"}else{if(params.url.match(/rt=racclick/)){racType="product"}else{racType=params.type||"suggestion"}}var track="/search?w="+params.query+"&ts=rac&ractype="+racType;try{if(typeof _gaq!=="undefined"){_gaq.push(["_trackPageview",track])}if(typeof(pageTracker)!=="undefined"){pageTracker._trackPageview(track)}if(typeof(ga)!=="undefined"){ga("send","pageview",{page:track})}if(typeof(dataLayer)!=="undefined"){dataLayer.push({event:"virtualpageview",url:track})}}catch(err){console.log(err)
}return params}};loadRAC();function loadRAC(){SLI.rac.version=SLI.rac.version||"";var location=document.location;if(location.href.match(/\.(?:local|cfe\.nz|resultsdemo|resultsstage)/)){SLI.rac.base=location.protocol+"//"+document.domain;SLI.rac.path=location.protocol+"//"+document.domain+"/autocomplete/sli-rac.stub"}else{if(location.href.match(/(dev|qa|ad)\.nejm\.org/i)){SLI.rac.base=location.protocol+"//nejm.resultsstage.com";SLI.rac.path=location.protocol+"//nejm.resultsstage.com/autocomplete/sli-rac.stub"
}else{SLI.rac.base=location.protocol+"//nejm.resultspage.com";SLI.rac.path=location.protocol+"//nejm.resultspage.com/autocomplete/sli-rac.stub"}}SLI.rac.path+="."+SLI.rac.version+".js";loadResource(SLI.rac.base+"/autocomplete/sli-rac.css");loadResource(SLI.rac.base+"/autocomplete/sli-rac.custom.css");loadResource(SLI.rac.path,function(result){$(function(){window.sliAutocomplete={};window.sliAutocomplete.select=new SLI.Autocomplete(SLI.rac)})})}function loadResource(path,callback){var tag;if(path.match(/\.css$/)){tag=document.createElement("link");
tag.href=path;tag.rel="stylesheet";tag.type="text/css";tag.media="all"}else{tag=document.createElement("script");tag.src=path}tag.onload=tag.onreadystatechange=function(){if(!tag.readyState||/loaded|complete/.test(tag.readyState)){tag=tag.onload=tag.onreadystatechange=null;if(typeof callback==="function"){callback(true)}}};tag.onerror=function(){tag=tag.onerror=null;if(typeof callback==="function"){callback(false)}};var head=document.head||document.getElementsByTagName("head")[0]||document.documentElement;head.appendChild(tag)
}})(window,document,jQuery);