
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"45",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=2;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"originalLocation"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",2],8,16],"||window.location.protocol+\"\/\/\"+window.location.hostname+window.location.pathname+window.location.search})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname+window.location.search})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],".split(\"\/\");return a[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],".split(\"\/\");return a[2]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.contentTitle"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(-1\u003C",["escape",["macro",9],8,16],".indexOf('\\x3cspan class\\x3d\"badge badge-video\"\\x3e')){var a=",["escape",["macro",9],8,16],".split('\\x3cspan class\\x3d\"badge badge-video\"\\x3e');return a[0]+\" [Video]\"}return ",["escape",["macro",9],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],".split(\"\/\");return a[3]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],".split(\"\/\");return a[4]})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"==",["escape",["macro",13],8,16],"?\"No Query Parameters\":",["escape",["macro",13],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.loginState"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.userId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"Logged In\"==",["escape",["macro",15],8,16],"||\"Logged in\"==",["escape",["macro",15],8,16],"?",["escape",["macro",16],8,16],":null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=new Date,c=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return b.getFullYear()+\"-\"+c(b.getMonth()+1)+\"-\"+c(b.getDate())})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],c=",["escape",["macro",19],8,16],".length,a=0;a\u003Cc;a++)b.push(",["escape",["macro",19],8,16],"[a].id);return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"Logged In\"==",["escape",["macro",15],8,16],"||\"Logged in\"==",["escape",["macro",15],8,16],"?",["escape",["macro",16],8,16],":\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",19],8,16],";return a.reduce(function(a,b){return a.concat(b.name)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",19],8,16],"[0].priceAfterDiscount*",["escape",["macro",19],8,16],"[0].quantity,c=",["escape",["macro",19],8,16],".length,a=1;a\u003Cc;a++){var d=",["escape",["macro",19],8,16],"[a].priceAfterDiscount*",["escape",["macro",19],8,16],"[a].quantity;b+=d}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=(",["escape",["macro",19],8,16],"[0].price-",["escape",["macro",19],8,16],"[0].priceAfterDiscount)*",["escape",["macro",19],8,16],"[0].quantity,c=",["escape",["macro",19],8,16],".length,a=1;a\u003Cc;a++){var d=(",["escape",["macro",19],8,16],"[a].price-",["escape",["macro",19],8,16],"[a].priceAfterDiscount)*",["escape",["macro",19],8,16],"[a].quantity;b+=d}return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.currencyCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.tax"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.shipping"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.coupon"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function c(b){return 0==",["escape",["macro",19],8,16],"[a].priceAfterDiscount?b+\" - Free Trial\":b}for(var b={ecommerce:{currencyCode:",["escape",["macro",25],8,16],",purchase:{actionField:{id:",["escape",["macro",26],8,16],",affiliation:\"Subscription\",revenue:",["escape",["macro",27],8,16],",tax:",["escape",["macro",28],8,16],",shipping:",["escape",["macro",29],8,16],",coupon:",["escape",["macro",30],8,16],"},products:[]}}},d=",["escape",["macro",19],8,16],".length,a=0;a\u003Cd;a++)b.ecommerce.purchase.products.push({id:",["escape",["macro",19],8,16],"[a].id,name:c(",["escape",["macro",19],8,16],"[a].name),\ncategory:\"Subscription\",brand:",["escape",["macro",19],8,16],"[a].brand,price:",["escape",["macro",19],8,16],"[a].priceAfterDiscount,variant:",["escape",["macro",19],8,16],"[a].variant,quantity:",["escape",["macro",19],8,16],"[a].quantity,dimension18:",["escape",["macro",19],8,16],"[a].payment,metric6:",["escape",["macro",19],8,16],"[a].price*",["escape",["macro",19],8,16],"[a].quantity,metric8:(",["escape",["macro",19],8,16],"[a].price-",["escape",["macro",19],8,16],"[a].priceAfterDiscount)*",["escape",["macro",19],8,16],"[a].quantity});return b})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",32],8,16],".matches(\"body.nightmode.home-body button.btn.nightmode-toggle i.fa.fa-moon-o.fa-lg\")?\"Nightmode Off Click\":\"Nightmode On Click\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",32],8,16],").closest(\"product\").find(\"h2\").text().trim()})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b={ecommerce:{promoView:{promotions:[]}}},c=",["escape",["macro",35],8,16],".impressions.length,a=0;a\u003Cc;a++)b.ecommerce.promoView.promotions.push({id:",["escape",["macro",35],8,16],".impressions[a].category,name:",["escape",["macro",35],8,16],".impressions[a].name,creative:\"Library Content - \"+",["escape",["macro",35],8,16],".impressions[a].list,position:",["escape",["macro",35],8,16],".impressions[a].position});return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.products"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.actionField"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b={ecommerce:{promoClick:{promotions:[]}}},c=",["escape",["macro",37],8,16],".length,a=0;a\u003Cc;a++)b.ecommerce.promoClick.promotions.push({id:",["escape",["macro",37],8,16],"[a].category,name:",["escape",["macro",37],8,16],"[a].name,creative:\"Library Content - \"+",["escape",["macro",38],8,16],",position:",["escape",["macro",37],8,16],"[a].position});return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",32],8,16],").closest(\"div.ng-scope.learning-path-line\").find(\"a.btn-empty.btn-rounded.ng-scope.btn-primary.btn\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",32],8,16],").closest(\"div.ng-scope.learning-path-line\").find(\"h3\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"button.dropdown-toggle span.ng-scope.ng-binding.ml5.hidden-xs\");return\"undefined\"!==typeof a?a.textContent:void 0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],";return a.reduce(function(a,b){return a.concat(b.id)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],";return a.reduce(function(a,b){return a.concat(b.name)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],";return a.reduce(function(a,b){return a.concat(b.brand)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],";return a.reduce(function(a,b){return a.concat(b.variant)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],";return a.reduce(function(a,b){return a.concat(b.category)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],";return a.reduce(function(a,b){return a.concat(b.quantity)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],"[0].price*",["escape",["macro",43],8,16],"[0].quantity,c=",["escape",["macro",43],8,16],".length,a=1;a\u003Cc;a++){var d=",["escape",["macro",43],8,16],"[a].price*",["escape",["macro",43],8,16],"[a].quantity;b+=d}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",32],8,16],").closest(\"div.ng-scope.project-item.grid__item\").find(\".btn-info.btn\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",32],8,16],").closest(\"div.ng-scope.project-item.grid__item\").find(\"h4\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(",["escape",["macro",32],8,16],").closest(\"div.ais-root__collapsible\").find(\"h5\").text().trim()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"div#subAlert1 \\x3e span\";return document.querySelector(a).innerText})();"]
    },{
      "function":"__e"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"Other Page Type",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^\/$","value","Subscription - Home"],["map","key","^\/saved","value","Subscription - Saved"],["map","key","^\/bookmarks","value","Subscription - Bookmarks"],["map","key","^\/purchases","value","Subscription - Purchases"],["map","key","^\/rewards","value","Subscription - Rewards"],["map","key","^\/my-account","value","Subscription - My Account"],["map","key","^\/books-and-videos","value","Subscription - Books and Videos"],["map","key","^\/search","value","Subscription - Search Results"],["map","key","^\/learning-paths","value","Subscription - Learning Paths"],["map","key","^\/projects","value","Subscription - Projects"],["map","key","^\/login","value","Subscription - Login"],["map","key","^\/register","value","Subscription - Register"],["map","key","^\/(book|video)\/","value","Subscription - Content"],["map","key","^\/help","value","Subscription - Help"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageLoaded"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.contentCategory"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"Other",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^\/$","value","Home"],["map","key","^\/saved","value","My Library"],["map","key","^\/bookmarks","value","My Library"],["map","key","^\/purchases","value","My Library"],["map","key","^\/rewards","value","My Library"],["map","key","^\/my-account","value","My Account"],["map","key","^\/books-and-videos","value","Books and Videos"],["map","key","^\/search","value","Search Results"],["map","key","^\/learning-paths","value","Learning Paths"],["map","key","^\/projects","value","Projects"],["map","key","^\/login","value","Login"],["map","key","^\/register","value","Register"],["map","key","^\/(book|video)\/","value",["macro",58]],["map","key","^\/help","value","Help"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(a){a=",["escape",["macro",8],8,16],".replace(\/-\/g,\" \");a=a.toLowerCase().split(\" \");for(var b=0;b\u003Ca.length;b++)a[b]=a[b].charAt(0).toUpperCase()+a[b].slice(1);return a.join(\" \")})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"No Content Grouping",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^\/saved","value","Saved"],["map","key","^\/bookmarks","value","Bookmarks"],["map","key","^\/purchases","value","Purchases"],["map","key","^\/rewards","value","Rewards"],["map","key","^\/learning-paths$","value","Learning Paths Home"],["map","key","^\/learning-paths\/","value",["macro",60]],["map","key","^\/(book|video)\/","value",["macro",10]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",56],
      "vtp_map":["list",["map","key","Subscription - Content","value",["macro",10]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",56],
      "vtp_map":["list",["map","key","Subscription - Content","value",["macro",58]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",56],
      "vtp_map":["list",["map","key","Subscription - Content","value",["macro",11]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.contentType"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",56],
      "vtp_defaultValue":"",
      "vtp_map":["list",["map","key","Subscription - Content","value",["macro",65]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.contentChapterTitle"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",56],
      "vtp_map":["list",["map","key","Subscription - Content","value",["macro",67]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.contentSection"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",56],
      "vtp_map":["list",["map","key","Subscription - Content","value",["macro",69]]]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__dbg"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",72],
      "vtp_defaultValue":"UA-284627-1",
      "vtp_map":["list",["map","key","true","value","UA-284627-6"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",71],
      "vtp_defaultValue":"UA-284627-8",
      "vtp_map":["list",["map","key","subscription.packtpub.com","value",["macro",73]],["map","key","dev.packtpub.com","value","UA-284627-7"],["map","key","qa.packtpub.com","value","UA-284627-8"],["map","key","rc.packtpub.com","value","UA-284627-8"],["map","key","subscription-staging.packtpub.com","value","UA-284627-8"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",1]],["map","fieldName","location","value",["macro",3]],["map","fieldName","page","value",["macro",4]]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",56]],["map","index","2","group","Subscription"],["map","index","3","group",["macro",59]],["map","index","4","group",["macro",61]],["map","index","5","group","No Content Grouping"]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",17]],["map","index","3","dimension",["macro",5]],["map","index","4","dimension",["macro",0]],["map","index","5","dimension",["macro",62]],["map","index","6","dimension",["macro",63]],["map","index","7","dimension",["macro",64]],["map","index","8","dimension",["macro",66]],["map","index","9","dimension",["macro",68]],["map","index","10","dimension",["macro",70]],["map","index","12","dimension",["macro",15]],["map","index","16","dimension",["macro",14]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",74],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_stripWww":false,
      "vtp_varType":"URL",
      "vtp_component":"HOST"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",82],
      "vtp_map":["list",["map","key","video 0%","value","4"],["map","key","video 75%","value","5"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",82],
      "vtp_map":["list",["map","key","video 0%","value","1"],["map","key","video 75%","value","1"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event_action"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products.0.payment"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",82],
      "vtp_map":["list",["map","key","maptCheckoutPayment","value","3"],["map","key","maptCheckoutAddress","value","2"],["map","key","maptCheckoutLoginRegister","value","1"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={ecommerce:{checkout:{actionField:{step:",["escape",["macro",88],8,16],"}}}};return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",42],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","£","value","GBP"],["map","key","A\\$","value","AUD"],["map","key","€","value","EUR"],["map","key","[^A]\\$","value","USD"],["map","key","₹","value","INR"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b={ecommerce:{currencyCode:",["escape",["macro",91],8,16],",add:{products:[]}}},c=",["escape",["macro",35],8,16],".add.products.length,a=0;a\u003Cc;a++)b.ecommerce.add.products.push({id:",["escape",["macro",35],8,16],".add.products[a].id,name:",["escape",["macro",35],8,16],".add.products[a].name,category:",["escape",["macro",35],8,16],".add.products[a].category,price:",["escape",["macro",35],8,16],".add.products[a].price,brand:",["escape",["macro",35],8,16],".add.products[a].brand,variant:",["escape",["macro",35],8,16],".add.products[a].variant,quantity:",["escape",["macro",35],8,16],".add.products[a].quantity,\nmetric1:",["escape",["macro",35],8,16],".add.products[a].quantity*",["escape",["macro",35],8,16],".add.products[a].price});return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.variant"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.defaultChecked"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",97],
      "vtp_defaultValue":"Filter by",
      "vtp_map":["list",["map","key","true","value","Unfilter by"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"query"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",25],
      "vtp_map":["list",["map","key","GBP","value","40318"],["map","key","EUR","value","43634"],["map","key","USD","value","42254"],["map","key","AUD","value","42249"],["map","key","INR","value","43637"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.emailAddress"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.quantity"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.existingCustomer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscription.currency"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",107],
      "vtp_defaultValue":"$",
      "vtp_map":["list",["map","key","GBP","value","£"],["map","key","USD","value","$"],["map","key","EUR","value","€"],["map","key","AUD","value","A$"],["map","key","INR","value","₹"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscription.hasZuoraAccount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscription.canClaimFreeTrial"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null==",["escape",["macro",17],8,16],"?\"\":",["escape",["macro",103],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(a){a=",["escape",["macro",7],8,16],".replace(\/-\/g,\" \");a=a.toLowerCase().split(\" \");for(var b=0;b\u003Ca.length;b++)a[b]=a[b].charAt(0).toUpperCase()+a[b].slice(1);return a.join(\" \")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products.0.payment"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",113],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^18 Month","value","18month"],["map","key","^Monthly","value","monthly"],["map","key","^Annual","value","annual"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscription.billingAddress.firstName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscription.billingAddress.country"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscription.creditBalance"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__ctv"
    },{
      "function":"__r"
    },{
      "function":"__cid"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleRatio",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":99,
      "teardown_tags":["list",["tag",81,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.heap=window.heap||[];\nheap.load=function(e,d){window.heap.appid=e;window.heap.config=d=d||{};var a=d.forceSSL||\"https:\"===document.location.protocol,b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=(a?\"https:\":\"http:\")+\"\/\/cdn.heapanalytics.com\/js\/heap-\"+e+\".js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a);b=function(a){return function(){heap.push([a].concat(Array.prototype.slice.call(arguments,0)))}};a=\"addEventProperties addUserProperties clearEventProperties identify removeEventProperty setEventProperties track unsetEventProperty\".split(\" \");for(var c=\n0;c\u003Ca.length;c++)heap[a[c]]=b(a[c])};window.heap.appid||heap.load(\"34805961\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":27
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",75],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__hjtc",
      "teardown_tags":["list",["tag",82,2]],
      "once_per_event":true,
      "vtp_hotjar_site_id":"982604",
      "tag_id":6
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"External Click",
      "vtp_eventLabel":["macro",78],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":11
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Main Navigation Click",
      "vtp_eventLabel":["macro",79],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":12
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Find Out More About Subscription Click",
      "vtp_eventLabel":["macro",81],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Free Trial Click",
      "vtp_eventLabel":["macro",81],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":14
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",83],"metric",["macro",84]]],
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":["macro",85],
      "vtp_eventLabel":["template",["macro",70]," - ",["macro",10]],
      "vtp_dimension":["list",["map","index","14","dimension",["template",["macro",70]," - ",["macro",10]]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":15
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Content Home Tab Click",
      "vtp_eventLabel":["macro",10],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":16
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Content Home Save For Later Click",
      "vtp_eventLabel":["macro",10],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":17
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Content Home Resume Click",
      "vtp_eventLabel":["macro",10],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":18
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Content Home Remove From Saved Click",
      "vtp_eventLabel":["macro",10],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Content Home Start Click",
      "vtp_eventLabel":["macro",10],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Content Home Table of Contents Click",
      "vtp_eventLabel":["macro",79],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":21
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Account Log In",
      "vtp_eventLabel":["macro",81],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":22
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Account Log Out",
      "vtp_eventLabel":["macro",81],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Registration Completed",
      "vtp_eventLabel":["macro",71],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":24
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Content Bookmark Click",
      "vtp_eventLabel":["macro",10],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":25
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Downloads",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","11","metric","1"]],
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Download Code Files",
      "vtp_eventLabel":["macro",10],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":26
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nvlld",
      "tag_id":33
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":35
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"945348752",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",86],
      "tag_id":36
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",26],
      "vtp_conversionValue":["macro",27],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"945348752",
      "vtp_currencyCode":["macro",25],
      "vtp_conversionLabel":"zgEsCPaYkHEQkMHjwgM",
      "vtp_url":["macro",86],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":37
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"2",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"945348752",
      "vtp_currencyCode":"GBP",
      "vtp_conversionLabel":"N45jCIqx5WAQkMHjwgM",
      "vtp_url":["macro",86],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":38
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",31],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Order Confirmation",
      "vtp_eventLabel":"Subscription",
      "vtp_dimension":["list",["map","index","7","dimension",["macro",24]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":49
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Subscription Paid Sign Up",
      "vtp_eventLabel":["macro",87],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":50
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Subscription Free Trial Sign Up",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":51
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",89],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":["template","Zuora Checkout step ",["macro",88]],
      "vtp_dimension":["list",["map","index","19","dimension","Zuora Subscription Checkout"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Nightmode Click",
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Copy Code Click",
      "vtp_eventLabel":["template",["macro",10]," - ",["macro",69]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Font Size Change Click",
      "vtp_eventLabel":["macro",79],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Social Share Click",
      "vtp_eventLabel":["macro",79],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":56
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Library Sidebar Click",
      "vtp_eventLabel":["macro",79],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":57
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Next Section Click",
      "vtp_eventLabel":["template",["macro",10]," - ",["macro",69]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":58
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",36],
      "vtp_eventCategory":"Library Content Product Promotion Impressions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Product Promotion Impressions",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":59
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",39],
      "vtp_eventCategory":"Library Content Product Promotion Impressions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Product Promotion Click",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":60
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Learning Paths",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":["template","Learning Paths - ",["macro",40]],
      "vtp_eventLabel":["macro",41],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":61
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Projects",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":["template","Projects - ",["macro",51]],
      "vtp_eventLabel":["macro",52],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":62
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",92],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Product Added to Cart",
      "vtp_dimension":["list",["map","index","5","dimension",["macro",93]],["map","index","6","dimension",["macro",94]],["map","index","7","dimension",["macro",95]],["map","index","8","dimension",["macro",96]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":63
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Filter Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":["macro",98],
      "vtp_eventLabel":["template",["macro",53]," - ",["macro",90]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":66
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"CompleteRegistration",
      "vtp_twitter_pixel_id":"o1fg4",
      "vtp_event_parameters":["list",["map","param_table_key_column","value","param_table_value_column","2"]],
      "tag_id":68
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"Purchase",
      "vtp_twitter_pixel_id":"nvlld",
      "vtp_event_parameters":["list",["map","param_table_key_column","currency","param_table_value_column",["macro",25]],["map","param_table_key_column","value","param_table_value_column",["macro",27]],["map","param_table_key_column","order_id","param_table_value_column",["macro",26]],["map","param_table_key_column","num_items","param_table_value_column","1"]],
      "tag_id":77
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Library Content Interactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Missing Product Error",
      "vtp_eventLabel":["macro",78],
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
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":"Create Account",
      "vtp_eventLabel":["macro",81],
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
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"In Content Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",75],
      "vtp_eventAction":["template","Search ",["macro",100]],
      "vtp_eventLabel":["macro",101],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":83
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9659117_16",
      "tag_id":84
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9659117_17",
      "tag_id":85
    },{
      "function":"__cl",
      "tag_id":86
    },{
      "function":"__cl",
      "tag_id":87
    },{
      "function":"__cl",
      "tag_id":88
    },{
      "function":"__cl",
      "tag_id":89
    },{
      "function":"__cl",
      "tag_id":90
    },{
      "function":"__cl",
      "tag_id":91
    },{
      "function":"__cl",
      "tag_id":92
    },{
      "function":"__cl",
      "tag_id":93
    },{
      "function":"__cl",
      "tag_id":94
    },{
      "function":"__cl",
      "tag_id":95
    },{
      "function":"__cl",
      "tag_id":96
    },{
      "function":"__cl",
      "tag_id":97
    },{
      "function":"__cl",
      "tag_id":98
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9659117_59",
      "tag_id":99
    },{
      "function":"__cl",
      "tag_id":100
    },{
      "function":"__cl",
      "tag_id":101
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9659117_69",
      "tag_id":102
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9659117_70",
      "tag_id":103
    },{
      "function":"__cl",
      "tag_id":104
    },{
      "function":"__evl",
      "vtp_elementId":"subAlert1",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"9659117_95",
      "tag_id":105
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9659117_105",
      "tag_id":106
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];window.dataLayer.push({originalLocation:document.location.protocol+\"\/\/\"+document.location.hostname+document.location.pathname+document.location.search});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":2
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"445429252334850\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=445429252334850\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,d,e,f,g,a,b){c[e]=c[e]||[];a=d.createElement(f);a.async=1;a.src=g;b=d.getElementsByTagName(f)[0];b.parentNode.insertBefore(a,b)})(window,document,\"_gscq\",\"script\",\"\/\/widgets.getsitecontrol.com\/95715\/script.js\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":5
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];window.dataLayer.push({pageLoaded:\"pageLoaded\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":9
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EElement.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(a){a=(this.document||this.ownerDocument).querySelectorAll(a);for(var b=a.length;0\u003C=--b\u0026\u0026a.item(b)!==this;);return-1\u003Cb});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":10
    },{
      "function":"__html",
      "setup_tags":["list",["tag",85,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:",["escape",["macro",102],8,16],"},{event:\"setEmail\",email:\"",["escape",["macro",103],7],"\"},{event:\"trackTransaction\",id:\"",["escape",["macro",26],7],"\",trial:\"",["escape",["macro",18],7],"\",item:[{id:\"freetrial\",price:0,quantity:1}]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":31
    },{
      "function":"__html",
      "setup_tags":["list",["tag",85,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:",["escape",["macro",102],8,16],"},{event:\"setEmail\",email:\"",["escape",["macro",103],7],"\"},{event:\"trackTransaction\",id:\"",["escape",["macro",26],7],"\",subscriber:\"true\",item:[{id:\"subscription\",price:0,quantity:1}]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":32
    },{
      "function":"__html",
      "setup_tags":["list",["tag",69,1]],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{content_ids:",["escape",["macro",20],8,16],",content_type:\"product\",content_category:\"Subscription\",value:",["escape",["macro",27],8,16],",currency:",["escape",["macro",25],8,16],"});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "setup_tags":["list",["tag",69,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"Mapt Subscription\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "setup_tags":["list",["tag",69,1]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "setup_tags":["list",["tag",69,1]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "setup_tags":["list",["tag",69,1]],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{content_ids:\"FreeTrial\",content_type:\"product\",content_category:\"Subscription\",value:",["escape",["macro",27],8,16],",currency:",["escape",["macro",25],8,16],"});\u003C\/script\u003E\n\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "setup_tags":["list",["tag",69,1]],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{content_name:\"Shopping Cart\",content_ids:[",["escape",["macro",95],8,16],"],content_type:\"product\",value:",["escape",["macro",104],8,16],"*",["escape",["macro",105],8,16],",currency:",["escape",["macro",91],8,16],"});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar HeapUserId=\"",["escape",["macro",16],7],"\";\"string\"===typeof HeapUserId\u0026\u0026\"undefined\"!==HeapUserId\u0026\u0026window.heap.identify(HeapUserId);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Ehj(\"tagRecording\",[",["escape",["macro",21],8,16],"]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E_gscq.push([\"template\",\"UserID\",\"",["escape",["macro",16],7],"\"]);_gscq.push([\"template\",\"UserIDIfLoggedIn\",\"",["escape",["macro",17],7],"\"]);_gscq.push([\"template\",\"UserIDIfLoggedInElseEmpty\",\"",["escape",["macro",21],7],"\"]);_gscq.push([\"template\",\"LoginStatus\",\"",["escape",["macro",15],7],"\"]);_gscq.push([\"template\",\"EmailAddress\",\"",["escape",["macro",103],7],"\"]);_gscq.push([\"template\",\"ExistingCustomer\",\"",["escape",["macro",106],7],"\"]);_gscq.push([\"template\",\"CurrencyCode\",\"",["escape",["macro",107],7],"\"]);\n_gscq.push([\"template\",\"CurrencySymbol\",\"",["escape",["macro",108],7],"\"]);_gscq.push([\"template\",\"HasZuoraAccount\",\"",["escape",["macro",109],7],"\"]);_gscq.push([\"template\",\"CanClaimFreeTrial\",\"",["escape",["macro",110],7],"\"]);_gscq.push([\"targeting\",\"Tar_UserID\",\"",["escape",["macro",16],7],"\"]);_gscq.push([\"targeting\",\"Tar_UserIDIfLoggedIn\",\"",["escape",["macro",17],7],"\"]);_gscq.push([\"targeting\",\"Tar_UserIDIfLoggedInElseEmpty\",\"",["escape",["macro",21],7],"\"]);_gscq.push([\"targeting\",\"Tar_LoginStatus\",\"",["escape",["macro",15],7],"\"]);\n_gscq.push([\"targeting\",\"Tar_EmailAddress\",\"",["escape",["macro",103],7],"\"]);_gscq.push([\"targeting\",\"Tar_ExistingCustomer\",\"",["escape",["macro",106],7],"\"]);_gscq.push([\"targeting\",\"Tar_CurrencyCode\",\"",["escape",["macro",107],7],"\"]);_gscq.push([\"targeting\",\"Tar_CurrencySymbol\",\"",["escape",["macro",108],7],"\"]);_gscq.push([\"targeting\",\"Tar_HasZuoraAccount\",\"",["escape",["macro",109],7],"\"]);_gscq.push([\"targeting\",\"Tar_CanClaimFreeTrial\",\"",["escape",["macro",110],7],"\"]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a.ProfitWellObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/dna8twue3dlxq.cloudfront.net\/js\/profitwell.js\",\"profitwell\");profitwell(\"auth_token\",\"8c79afc46264fdacbbb5c7bfc3b4800f\");profitwell(\"user_email\",\"",["escape",["macro",111],7],"\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":81
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"pageDataLayerLoaded"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"Subscription - Content"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"pageLoaded"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",76],
      "arg1":"packtpub.com",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",77],
      "arg1":"(^$|((^|,)9659117_16($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"ul.nav.navbar-nav.navbar-right a"
    },{
      "function":"_re",
      "arg0":["macro",77],
      "arg1":"(^$|((^|,)9659117_17($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",80],
      "arg1":"btn btn-primary mr5"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"div.upsell__content a.btn-info.btn"
    },{
      "function":"_re",
      "arg0":["macro",55],
      "arg1":"^video"
    },{
      "function":"_re",
      "arg0":["macro",80],
      "arg1":"cover-accordion__title list-group-item collapsed",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"button.btn.btn-default.ng-scope, button.btn.btn-default.ng-scope *"
    },{
      "function":"_re",
      "arg0":["macro",79],
      "arg1":"Save for Later",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"div.button-group.text-right.ng-scope a"
    },{
      "function":"_re",
      "arg0":["macro",79],
      "arg1":"^Resume",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",79],
      "arg1":"Remove from saved",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",79],
      "arg1":"^Start",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",80],
      "arg1":"cover-toc__section-name ng-binding"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"accountLogIn"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"accountLogOut"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"accountRegistration"
    },{
      "function":"_re",
      "arg0":["macro",79],
      "arg1":"Bookmark",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"a.btn-default.btn-square.ng-scope, a.btn-default.btn-square.ng-scope *"
    },{
      "function":"_re",
      "arg0":["macro",79],
      "arg1":"Code Files",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"recordTransactionCompleteSubscription"
    },{
      "function":"_gt",
      "arg0":["macro",27],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"0"
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"div.ng-scope.btn-group button.btn.nightmode-toggle i.fa.fa-moon-o.fa-lg"
    },{
      "function":"_re",
      "arg0":["macro",80],
      "arg1":"copy-to-clipboard",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",90],
      "arg1":"^copyCode",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"a.ng-binding[ng-click='productController.toggleFontSize($event, fontSize)']"
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"ul.dropdown-menu.dropdown-menu-right a[href='#']"
    },{
      "function":"_re",
      "arg0":["macro",77],
      "arg1":"(^$|((^|,)9659117_59($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"div#sidebar-nav div.section-name.ng-binding"
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"div[ng-show='productController.previousSection \u0026\u0026 productController.nextSection'] a.btn-block.btn-lg.pull-right.btn-primary.btn"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"recordProductListImpressionMapt"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"recordProductListClickMapt"
    },{
      "function":"_eq",
      "arg0":["macro",80],
      "arg1":"btn btn-primary btn-rounded btn-empty ng-scope"
    },{
      "function":"_re",
      "arg0":["macro",77],
      "arg1":"(^$|((^|,)9659117_69($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"div.project-item__footer a"
    },{
      "function":"_re",
      "arg0":["macro",77],
      "arg1":"(^$|((^|,)9659117_70($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"recordProductAddedToCart"
    },{
      "function":"_css",
      "arg0":["macro",32],
      "arg1":"div.ais-refinement-list--item input"
    },{
      "function":"_sw",
      "arg0":["macro",54],
      "arg1":"Sorry, it appears that page"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",77],
      "arg1":"(^$|((^|,)9659117_95($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",99],
      "arg1":"create-account-form"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",77],
      "arg1":"(^$|((^|,)9659117_105($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"in-content-search"
    },{
      "function":"_re",
      "arg0":["macro",81],
      "arg1":".*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":".*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"^\/projects$|^\/projects\/$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",55],
      "arg1":"^newsletterSignUp"
    }],
  "rules":[
    [["if",0],["add",1,19,20,21,69,70,0,83]],
    [["if",1,2],["add",1,19,20,21,69,0]],
    [["if",4],["add",2,68,72,47,48,49,50,51,52,53,54,55,56,57,58,59,61,62,63,65,66,67]],
    [["if",6,7],["unless",5],["add",3]],
    [["if",6,8,9],["add",4]],
    [["if",10,11],["add",5]],
    [["if",11,12],["add",6]],
    [["if",13],["add",7]],
    [["if",11,14],["add",8]],
    [["if",11,15,16],["add",9]],
    [["if",11,17,18],["add",10]],
    [["if",11,15,19],["add",11]],
    [["if",11,17,20],["add",12]],
    [["if",11,21],["add",13]],
    [["if",22],["add",14,81]],
    [["if",23],["add",15]],
    [["if",24],["add",16,23,40,78,81]],
    [["if",11,15,25],["add",17]],
    [["if",11,26,27],["add",18]],
    [["if",28],["add",22,24,75,76,82]],
    [["if",28,29],["add",25,41,74]],
    [["if",28,30],["add",26,27,41,73,79]],
    [["if",11,31],["add",28]],
    [["if",11,32,33],["add",29]],
    [["if",11,34],["add",30]],
    [["if",6,35,36],["add",31]],
    [["if",11,37],["add",32]],
    [["if",11,38],["add",33]],
    [["if",39],["add",34]],
    [["if",40],["add",35]],
    [["if",6,41,42],["add",36]],
    [["if",6,43,44],["add",37]],
    [["if",45],["add",38,80]],
    [["if",11,46],["add",39]],
    [["if",47,48,49],["add",42]],
    [["if",50,51,52],["add",43]],
    [["if",53],["add",44]],
    [["if",4,54],["add",45]],
    [["if",4,55],["add",46,60]],
    [["if",4,56],["add",64]],
    [["if",2],["add",71,84]],
    [["if",57],["add",77]],
    [["if",0,1],["unless",3],["block",1,19,20,21,69,0]]]
},
"runtime":[
[],[]
]



};
var aa,da=this||self,ea=function(a){return"boolean"==typeof a},fa=/^[\w+/_-]+[=]{0,2}$/,ha=null;var ia=function(){},ja=function(a){return"function"==typeof a},ka=function(a){return"string"==typeof a},la=function(a){return"number"==typeof a&&!isNaN(a)},ma=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},oa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},pa=function(a,b){if(a&&ma(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},qa=function(a,b){if(!la(a)||
!la(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},sa=function(a,b){for(var c=new ra,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ta=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ua=function(a){return Math.round(Number(a))||0},va=function(a){return"false"==String(a).toLowerCase()?!1:!!a},wa=function(a){var b=[];if(ma(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},xa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},ya=function(){return(new Date).getTime()},ra=function(){this.prefix="gtm.";this.values={}};ra.prototype.set=function(a,b){this.values[this.prefix+a]=b};ra.prototype.get=function(a){return this.values[this.prefix+a]};ra.prototype.contains=function(a){return void 0!==this.get(a)};
var za=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ca=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Da=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ea=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Fa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ga=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ha=function(a){if(null==a)return String(a);var b=Ga.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ia=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ja=function(a){if(!a||"object"!=Ha(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ia(a,"constructor")&&!Ia(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ia(a,b)},f=function(a,b){var c=b||("array"==Ha(a)?[]:{}),d;for(d in a)if(Ia(a,d)){var e=a[d];"array"==Ha(e)?("array"!=Ha(c[d])&&(c[d]=[]),c[d]=f(e,c[d])):Ja(e)?(Ja(c[d])||(c[d]={}),c[d]=f(e,c[d])):c[d]=e}return c};
var Ka=[],La={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ma=function(a){return La[a]},Na=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ra=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Va={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Wa=function(a){return Va[a]};Ka[7]=function(a){return String(a).replace(Ra,Wa)};
Ka[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ra,Wa)+"'"}};var db=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,eb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},fb=function(a){return eb[a]};Ka[16]=function(a){return a};var ib=[],jb=[],kb=[],lb=[],mb=[],nb={},pb,qb,rb,sb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},tb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!nb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?nb[c](e):(void 0)(c,e,b)},vb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=ub(a[e],b,c));return d},
wb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=nb[b];return c?c.priorityOverride||0:0},ub=function(a,b,c){if(ma(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(ub(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=ib[g];if(!h||b.Dc(h))return;c[g]=!0;try{var k=vb(h,b,c);k.vtp_gtmEventId=b.id;d=tb(k,b);rb&&(d=rb.Jf(d,k))}catch(w){b.be&&b.be(w,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[ub(a[l],b,c)]=ub(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=ub(a[n],b,c);qb&&(m=m||p===qb.yb);d.push(p)}return qb&&m?qb.Mf(d):d.join("");case "escape":d=ub(a[1],b,c);if(qb&&ma(a[1])&&"macro"===a[1][0]&&qb.ng(a))return qb.zg(d);d=String(d);for(var t=2;t<a.length;t++)Ka[a[t]]&&(d=Ka[a[t]](d));return d;case "tag":var q=a[1];if(!lb[q])throw Error("Unable to resolve tag reference "+q+".");return d={Od:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=xb(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},xb=function(a,b,c){try{return pb(vb(a,b,c))}catch(d){JSON.stringify(a)}return null};var yb=function(){var a=function(b){return{toString:function(){return b}}};return{gd:a("convert_case_to"),hd:a("convert_false_to"),jd:a("convert_null_to"),kd:a("convert_true_to"),ld:a("convert_undefined_to"),hh:a("debug_mode_metadata"),ka:a("function"),We:a("instance_name"),Xe:a("live_only"),Ye:a("malware_disabled"),Ze:a("metadata"),jh:a("original_vendor_template_id"),$e:a("once_per_event"),Cd:a("once_per_load"),Dd:a("setup_tags"),Ed:a("tag_id"),Fd:a("teardown_tags")}}();var zb=null,Cb=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];zb=Ab(a);for(var e=0;e<jb.length;e++){var g=jb[e],h=Bb(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<lb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Bb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=zb(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=zb(e[g]);if(null===h)return null;
if(h)return!1}return!0},Ab=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=xb(kb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
for(var Fb="floor ceil round max min abs pow sqrt".split(" "),Gb=0;Gb<Fb.length;Gb++)Math.hasOwnProperty(Fb[Gb]);var u=window,C=document,Hb=navigator,Ib=C.currentScript&&C.currentScript.src,Jb=function(a,b){var c=u[a];u[a]=void 0===c?b:c;return u[a]},Kb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Lb=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Kb(d,b);c&&(d.onerror=c);var e;if(null===ha)b:{var g=da.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&fa.test(k)){ha=k;break b}}ha=""}e=ha;e&&d.setAttribute("nonce",e);var l=C.getElementsByTagName("script")[0]||C.body||C.head;l.parentNode.insertBefore(d,l);return d},Mb=function(){if(Ib){var a=Ib.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Nb=function(a,b){var c=C.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||
C.body||C.head;d.parentNode.insertBefore(c,d);Kb(c,b);void 0!==a&&(c.src=a);return c},Ob=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},D=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Pb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){u.setTimeout(a,0)},Qb=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Rb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Sb=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Tb=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Ub=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var H={ac:"event_callback",Na:"event_timeout",W:"gtag.config",P:"allow_ad_personalization_signals",S:"cookie_expires",Ma:"cookie_update",xa:"session_duration"};var ic=/[A-Z]+/,jc=/\s/,kc=function(a){if(ka(a)&&(a=xa(a),!jc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(ic.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],N:d}}}}},mc=function(a){for(var b={},c=0;c<a.length;++c){var d=kc(a[c]);d&&(b[d.id]=d)}lc(b);var e=[];ta(b,function(g,h){e.push(h)});return e};
function lc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.N[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var nc={},oc=null,pc=Math.random();nc.i="GTM-WJMM825";nc.Cb="9b0";var qc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},rc="www.googletagmanager.com/gtm.js";var sc=rc,tc=null,uc=null,vc=null,wc="//www.googletagmanager.com/a?id="+nc.i+"&cv=45",xc={},yc={},zc=function(){var a=oc.sequence||0;oc.sequence=a+1;return a};var Ac={},Bc=function(a,b){Ac[a]=Ac[a]||[];Ac[a][b]=!0},Dc=function(a){for(var b=[],c=Ac[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Ec=function(){return"&tc="+lb.filter(function(a){return a}).length},Oc=function(){Fc&&(u.clearTimeout(Fc),Fc=void 0);void 0===Gc||Hc[Gc]&&!Ic||(Jc[Gc]||Kc.pg()||0>=Lc--?(Bc("GTM",1),Jc[Gc]=!0):(Kc.Kg(),Ob(Mc()),Hc[Gc]=!0,Nc=Ic=""))},Mc=function(){var a=Gc;if(void 0===a)return"";var b=Dc("GTM"),c=Dc("TAGGING");return[Pc,Hc[a]?"":"&es=1",Qc[a],b?"&u="+b:"",c?"&ut="+c:"",Ec(),Ic,Nc,"&z=0"].join("")},Rc=function(){return[wc,"&v=3&t=t","&pid="+qa(),"&rv="+nc.Cb].join("")},Sc="0.005000">
Math.random(),Pc=Rc(),Tc=function(){Pc=Rc()},Hc={},Ic="",Nc="",Gc=void 0,Qc={},Jc={},Fc=void 0,Kc=function(a,b){var c=0,d=0;return{pg:function(){if(c<a)return!1;ya()-d>=b&&(c=0);return c>=a},Kg:function(){ya()-d>=b&&(c=0);c++;d=ya()}}}(2,1E3),Lc=1E3,Uc=function(a,b){if(Sc&&!Jc[a]&&Gc!==a){Oc();Gc=a;Ic="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Qc[a]="&e="+c+"&eid="+a;Fc||(Fc=u.setTimeout(Oc,500))}},Vc=function(a,b,c){if(Sc&&!Jc[a]&&b){a!==Gc&&(Oc(),Gc=a);var d=String(b[yb.ka]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Ic=Ic?Ic+"."+e:"&tr="+e;Fc||(Fc=u.setTimeout(Oc,500));2022<=Mc().length&&Oc()}};var Wc={},Xc=new ra,Yc={},Zc={},cd={name:"dataLayer",set:function(a,b){f($c(a,b),Yc);ad()},get:function(a){return bd(a,2)},reset:function(){Xc=new ra;Yc={};ad()}},bd=function(a,b){if(2!=b){var c=Xc.get(a);if(Sc){var d=dd(a);c!==d&&Bc("GTM",5)}return c}return dd(a)},dd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:fd(d)},fd=function(a){for(var b=Yc,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var id=function(a,b){Zc.hasOwnProperty(a)||(Xc.set(a,b),f($c(a,b),Yc),ad())},$c=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},ad=function(a){ta(Zc,function(b,c){Xc.set(b,c);f($c(b,void 0),Yc);f($c(b,c),Yc);a&&delete Zc[b]})},jd=function(a,b,c){Wc[a]=Wc[a]||{};var d=1!==c?dd(b):Xc.get(b);"array"===Ha(d)||"object"===Ha(d)?Wc[a][b]=f(d):Wc[a][b]=d},kd=function(a,b){if(Wc[a])return Wc[a][b]};var ld=function(){var a=!1;return a};var J=function(a,b,c,d){return(2===md()||d||"http:"!=u.location.protocol?a:b)+c},md=function(){var a=Mb(),b;if(1===a)a:{var c=sc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=C.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Bd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Cd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Dd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Ed="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Gd=function(a){var b=bd("gtm.whitelist");b&&Bc("GTM",9);var c=b&&Fa(wa(b),Cd),d=bd("gtm.blacklist");d||(d=bd("tagTypeBlacklist"))&&Bc("GTM",3);
d?Bc("GTM",8):d=[];Fd()&&(d=wa(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=oa(wa(d),"google")&&Bc("GTM",2);var e=d&&Fa(wa(d),Dd),g={};return function(h){var k=h&&h[yb.ka];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=yc[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>oa(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
oa(c,l[p])){Bc("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=oa(e,k);if(q)t=q;else{var r=sa(e,l||[]);r&&Bc("GTM",10);t=r}}var v=!m||t;v||!(0<=oa(l,"sandboxedScripts"))||c&&-1!==oa(c,"sandboxedScripts")||(v=sa(e,Ed));return g[k]=v}},Fd=function(){return Bd.test(u.location&&u.location.hostname)};var Hd={Jf:function(a,b){b[yb.gd]&&"string"===typeof a&&(a=1==b[yb.gd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(yb.jd)&&null===a&&(a=b[yb.jd]);b.hasOwnProperty(yb.ld)&&void 0===a&&(a=b[yb.ld]);b.hasOwnProperty(yb.kd)&&!0===a&&(a=b[yb.kd]);b.hasOwnProperty(yb.hd)&&!1===a&&(a=b[yb.hd]);return a}};var Id={active:!0,isWhitelisted:function(){return!0}},Jd=function(a){var b=oc.zones;!b&&a&&(b=oc.zones=a());return b};var Kd=!1,Ld=0,Md=[];function Nd(a){if(!Kd){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Kd=!0;for(var e=0;e<Md.length;e++)G(Md[e])}Md.push=function(){for(var g=0;g<arguments.length;g++)G(arguments[g]);return 0}}}function Od(){if(!Kd&&140>Ld){Ld++;try{C.documentElement.doScroll("left"),Nd()}catch(a){u.setTimeout(Od,50)}}}var Pd=function(a){Kd?a():Md.push(a)};var Qd={},Rd={},Sd=function(a,b,c,d){if(!Rd[a]||qc[b]||"__zone"===b)return-1;var e={};Ja(d)&&(e=f(d,e));e.id=c;e.status="timeout";return Rd[a].tags.push(e)-1},Td=function(a,b,c,d){if(Rd[a]){var e=Rd[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Ud(a){for(var b=Qd[a]||[],c=0;c<b.length;c++)b[c]();Qd[a]={push:function(d){d(nc.i,Rd[a])}}}
var Xd=function(a,b,c){Rd[a]={tags:[]};ja(b)&&Vd(a,b);c&&u.setTimeout(function(){return Ud(a)},Number(c));return Wd(a)},Vd=function(a,b){Qd[a]=Qd[a]||[];Qd[a].push(Ca(function(){return G(function(){b(nc.i,Rd[a])})}))};function Wd(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ca(function(){b++;d&&b>=c&&Ud(a)})},sf:function(){d=!0;b>=c&&Ud(a)}}};var Yd=function(){function a(d){return!la(d)||0>d?0:d}if(!oc._li&&u.performance&&u.performance.timing){var b=u.performance.timing.navigationStart,c=la(cd.get("gtm.start"))?cd.get("gtm.start"):0;oc._li={cst:a(c-b),cbt:a(uc-b)}}};var be=!1,ce=function(){return u.GoogleAnalyticsObject&&u[u.GoogleAnalyticsObject]},de=!1;
var ee=function(a){u.GoogleAnalyticsObject||(u.GoogleAnalyticsObject=a||"ga");var b=u.GoogleAnalyticsObject;if(u[b])u.hasOwnProperty(b)||Bc("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);u[b]=c}Yd();return u[b]},fe=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=ce();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var he=function(){},ge=function(){return u.GoogleAnalyticsObject||"ga"};var je=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var ke=/:[0-9]+$/,le=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},oe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=me(a.protocol)||me(u.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:u.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||u.location.hostname).replace(ke,"").toLowerCase());var g=b,h,k=me(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=ne(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(ke,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||Bc("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=oa(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=le(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},me=function(a){return a?a.replace(":","").toLowerCase():""},ne=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
pe=function(a){var b=C.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Bc("TAGGING",1),c="/"+c);var d=b.hostname.replace(ke,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var ve=function(a){};function ue(a,b){a.containerId=nc.i;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function we(a,b,c,d){var e=lb[a],g=xe(a,b,c,d);if(!g)return null;var h=ub(e[yb.Dd],c,[]);if(h&&h.length){var k=h[0];g=we(k.index,{J:g,U:1===k.Od?b.terminate:g,terminate:b.terminate},c,d)}return g}
function xe(a,b,c,d){function e(){if(g[yb.Ye])k();else{var w=vb(g,c,[]),y=Sd(c.id,String(g[yb.ka]),Number(g[yb.Ed]),w[yb.Ze]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var B=ya()-z;Vc(c.id,lb[a],"5");Td(c.id,y,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var B=ya()-z;Vc(c.id,lb[a],"6");Td(c.id,y,"failure",B);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;Vc(c.id,g,"1");var A=function(B){var E=ya()-z;ve(B);Vc(c.id,g,"7");Td(c.id,y,"exception",E);x||(x=!0,k())};var z=ya();try{tb(w,c)}catch(B){A(B)}}}var g=lb[a],h=b.J,k=b.U,l=b.terminate;if(c.Dc(g))return null;var m=ub(g[yb.Fd],c,[]);if(m&&m.length){var n=m[0],p=we(n.index,{J:h,U:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.Od?l:p}if(g[yb.Cd]||g[yb.$e]){var t=g[yb.Cd]?mb:c.Ug,q=h,r=k;if(!t[a]){e=Ca(e);var v=ye(a,t,e);h=v.J;k=v.U}return function(){t[a](q,r)}}return e}
function ye(a,b,c){var d=[],e=[];b[a]=ze(d,e,c);return{J:function(){b[a]=Ae;for(var g=0;g<d.length;g++)d[g]()},U:function(){b[a]=Be;for(var g=0;g<e.length;g++)e[g]()}}}function ze(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ae(a){a()}function Be(a,b){b()};var Ee=function(a,b){for(var c=[],d=0;d<lb.length;d++)if(a.fb[d]){var e=lb[d];var g=b.add();try{var h=we(d,{J:g,U:g,terminate:g},a,d);h?c.push({te:d,ie:wb(e),Uf:h}):(Ce(d,a),g())}catch(l){g()}}b.sf();c.sort(De);for(var k=0;k<c.length;k++)c[k].Uf();return 0<c.length};function De(a,b){var c,d=b.ie,e=a.ie;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.te,k=b.te;g=h>k?1:h<k?-1:0}return g}
function Ce(a,b){if(!Sc)return;var c=function(d){var e=b.Dc(lb[d])?"3":"4",g=ub(lb[d][yb.Dd],b,[]);g&&g.length&&c(g[0].index);Vc(b.id,lb[d],e);var h=ub(lb[d][yb.Fd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Fe=!1,Ge=function(a,b,c,d,e){if("gtm.js"==b){if(Fe)return!1;Fe=!0}Uc(a,b);var g=Xd(a,d,e);jd(a,"event",1);jd(a,"ecommerce",1);jd(a,"gtm");var h={id:a,name:b,Dc:Gd(c),fb:[],Ug:[],be:function(n){Bc("GTM",6);ve(n)}};h.fb=Cb(h);var k=Ee(h,g);
if(!k)return k;for(var l=0;l<h.fb.length;l++)if(h.fb[l]){var m=lb[l];if(m&&!qc[String(m[yb.ka])])return!0}return!1};var Ie=function(a,b,c,d,e){var g=this;this.eventModel=a;this.containerConfig=c||{};this.targetConfig=b||{};this.containerConfig=c||{};this.hb=d||{};this.globalConfig=e||{};this.getWithConfig=function(h){if(g.eventModel.hasOwnProperty(h))return g.eventModel[h];if(g.targetConfig.hasOwnProperty(h))return g.targetConfig[h];if(g.containerConfig.hasOwnProperty(h))return g.containerConfig[h];if(g.hb.hasOwnProperty(h))return g.hb[h];if(g.globalConfig.hasOwnProperty(h))return g.globalConfig[h]}};var Je={},Ke=["G"];Je.ue="";var Le=Je.ue.split(",");function Me(){var a=oc;return a.gcq=a.gcq||new Ne}
var Oe=function(a,b){Me().register(a,b,void 0)},Pe=function(a,b,c,d){Me().push("event",[b,a],c,d)},Qe=function(a,b){Me().push("config",[a],b)},Re={},Se=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.hb={};this.je=null;this.Yd=!1},Te=function(a,b,c,d,e){this.type=a;this.Zg=b;this.O=c||"";this.Fb=d;this.defer=e},Ne=function(){this.Kd={};this.Td={};this.Za=[]},Ue=function(a,b){var c=kc(b);return a.Kd[c.containerId]=a.Kd[c.containerId]||new Se},Ve=function(a,b,c,d){if(d.O){var e=
Ue(a,d.O),g=e.je;if(g){var h=f(c),k=f(e.targetConfig[d.O]),l=f(e.containerConfig),m=f(e.hb),n=f(a.Td),p=new Ie(h,k,l,m,n);try{g(b,d.Zg,p)}catch(t){}}}};Ne.prototype.register=function(a,b,c){if(3!==Ue(this,a).status){Ue(this,a).je=b;Ue(this,a).status=3;c&&(Ue(this,a).hb=c);var d=kc(a),e=Re[d.containerId];if(void 0!==e){var g=bd("gtm.uniqueEventId"),h=d.prefix,k=ya()-e;if(Sc&&!Jc[g]){g!==Gc&&(Oc(),Gc=g);var l=""+h+Math.floor(k);Nc=Nc?Nc+"."+l:"&cl="+l}delete Re[d.containerId]}this.flush()}};
Ne.prototype.push=function(a,b,c,d){var e=Math.floor(ya()/1E3);if(c){var g=kc(c),h;if(h=g){var k;if(k=1===Ue(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(Ue(this,c).status=2,this.push("require",[],g.containerId),Re[g.containerId]=ya(),!ld())){var m=encodeURIComponent(g.containerId);Lb(("http:"!=u.location.protocol?"https:":
"http:")+("//www.googletagmanager.com/gtag/js?id="+m+"&l=dataLayer&cx=c"))}}this.Za.push(new Te(a,e,c,b,d));d||this.flush()};
Ne.prototype.flush=function(a){for(var b=this;this.Za.length;){var c=this.Za[0];if(c.defer)c.defer=!1,this.Za.push(c);else switch(c.type){case "require":if(3!==Ue(this,c.O).status&&!a)return;break;case "set":ta(c.Fb[0],function(l,m){b.Td[l]=m});break;case "config":var d=c.Fb[0],e=!!d[H.wb];delete d[H.wb];var g=Ue(this,c.O),h=kc(c.O),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.O]={});g.Yd&&e||Ve(this,H.W,d,c);g.Yd=!0;k?f(d,g.containerConfig):f(d,g.targetConfig[c.O]);break;case "event":Ve(this,
c.Fb[1],c.Fb[0],c)}this.Za.shift()}};var We=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Ze=function(a,b,c,d){var e=Xe(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Ye(e,function(g){return g.Kb},b);if(1===e.length)return e[0].id;e=Ye(e,function(g){return g.gb},c);return e[0]?e[0].id:void 0}};
function $e(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=We(b,e).indexOf(c)}
var df=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=bf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!cf(y,t)&&$e(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!cf(p,t)&&$e(m,a,l)}return k};function Ye(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Xe(a,b){for(var c=[],d=We(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Kb:1*k[0]||1,gb:1*k[1]||1}))}}return c}
var ef=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ff=/(^|\.)doubleclick\.net$/i,cf=function(a,b){return ff.test(document.location.hostname)||"/"===b&&ef.test(a)},bf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;ff.test(e)||ef.test(e)||a.push("none");return a};var gf=new function(){this.Pc={}};var hf="".split(/,/),jf=null,kf={},lf={},mf,nf=function(a,b){var c={event:a};b&&(c.eventModel=f(b),b[H.ac]&&(c.eventCallback=b[H.ac]),b[H.Na]&&(c.eventTimeout=b[H.Na]));return c};
var tf={config:function(a){},event:function(a){var b=
a[1];if(ka(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ja(a[2]))return;c=a[2]}var d=nf(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];gf.Pc[b]?gf.Pc[b].push(c):gf.Pc[b]=[c]}},set:function(a){var b;2==a.length&&Ja(a[1])?b=f(a[1]):3==a.length&&ka(a[1])&&(b={},b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},uf={policy:!0};var wf=function(a){return vf?C.querySelectorAll(a):null},xf=function(a,b){if(!vf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!C.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yf=!1;if(C.querySelectorAll)try{var zf=C.querySelectorAll(":root");zf&&1==zf.length&&zf[0]==C.documentElement&&(yf=!0)}catch(a){}var vf=yf;var Gf=function(a){if(Ff(a))return a;this.bh=a};Gf.prototype.ag=function(){return this.bh};var Ff=function(a){return!a||"object"!==Ha(a)||Ja(a)?!1:"getUntrustedUpdateValue"in a};Gf.prototype.getUntrustedUpdateValue=Gf.prototype.ag;var Hf=!1,If=[];function Jf(){if(!Hf){Hf=!0;for(var a=0;a<If.length;a++)G(If[a])}}var Kf=function(a){Hf?G(a):If.push(a)};var Lf=[],Mf=!1,Nf=function(a){return u["dataLayer"].push(a)},Of=function(a){var b=oc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},Qf=function(a){var b=a._clear;ta(a,function(g,h){"_clear"!==g&&(b&&id(g,void 0),id(g,h))});tc||(tc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=zc(),a["gtm.uniqueEventId"]=d,id("gtm.uniqueEventId",d));vc=c;var e=Pf(a);
vc=null;switch(c){case "gtm.init":Bc("GTM",19),e&&Bc("GTM",20)}return e};function Pf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=oc.zones;d=e?e.checkState(nc.i,c):Id;return d.active?Ge(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Rf=function(){for(var a=!1;!Mf&&0<Lf.length;){Mf=!0;delete Yc.eventModel;ad();var b=Lf.shift();if(null!=b){var c=Ff(b);if(c){var d=b;b=Ff(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=bd(h,1);if(ma(k)||Ja(k))k=f(k);Zc[h]=k}}try{if(ja(b))try{b.call(cd)}catch(v){}else if(ma(b)){var l=b;if(ka(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=bd(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ka(b[0])){var r=tf[b[0]];if(r&&(!c||!uf[b[0]])){b=r(b);break a}}b=void 0}if(!b){Mf=!1;continue}}a=Qf(b)||a}}finally{c&&ad(!0)}}Mf=!1}
return!a},Sf=function(){var a=Rf();try{var b=nc.i,c=u["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Tf=function(){var a=Jb("dataLayer",[]),b=Jb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Pd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Kf(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<oc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Gf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Lf.push.apply(Lf,d);if(300<this.length)for(Bc("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Rf()&&h};Lf.push.apply(Lf,a.slice(0));G(Sf)};var Uf;var pg={};pg.yb=new String("undefined");
var qg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===pg.yb?b:a[d]);return c.join("")}};qg.prototype.toString=function(){return this.resolve("undefined")};qg.prototype.valueOf=qg.prototype.toString;pg.bf=qg;pg.nc={};pg.Mf=function(a){return new qg(a)};var rg={};pg.Lg=function(a,b){var c=zc();rg[c]=[a,b];return c};pg.Ld=function(a){var b=a?0:1;return function(c){var d=rg[c];if(d&&"function"===typeof d[b])d[b]();rg[c]=void 0}};pg.ng=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};pg.zg=function(a){if(a===pg.yb)return a;var b=zc();pg.nc[b]=a;return'google_tag_manager["'+nc.i+'"].macro('+b+")"};pg.rg=function(a,b,c){a instanceof pg.bf&&(a=a.resolve(pg.Lg(b,c)),b=ia);return{Bc:a,J:b}};var sg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Qb(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},tg=function(a){oc.hasOwnProperty("autoEventsSettings")||(oc.autoEventsSettings={});var b=oc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},ug=function(a,b,c){tg(a)[b]=c},vg=function(a,b,c,d){var e=tg(a),g=za(e,b,d);e[b]=c(g)},wg=function(a,b,c){var d=tg(a);return za(d,b,c)};var xg=function(){for(var a=Hb.userAgent+(C.cookie||"")+(C.referrer||""),b=a.length,c=u.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(ya()/1E3)].join(".")},Ag=function(a,b,c,d){var e=yg(b);return Ze(a,e,zg(c),d)},Bg=function(a,b,c,d){var e=""+yg(c),g=zg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},yg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},zg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Cg=["1"],Dg={},Hg=function(a,b,c,d){var e=Eg(a);Dg[e]||Fg(e,b,c)||(Gg(e,xg(),b,c,d),Fg(e,b,c))};function Gg(a,b,c,d,e){var g=Bg(b,"1",d,c);df(a,g,c,d,0==e?void 0:new Date(ya()+1E3*(void 0==e?7776E3:e)))}function Fg(a,b,c){var d=Ag(a,b,c,Cg);d&&(Dg[a]=d);return d}function Eg(a){return(a||"_gcl")+"_au"};var Ig=function(){for(var a=[],b=C.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({$c:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].$c]||(g[a[h].$c]=[]),g[a[h].$c].push({timestamp:k[1],Yf:k[2]}))}return g};function Jg(){for(var a=Kg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Lg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Kg,Mg,Ng=function(a){Kg=Kg||Lg();Mg=Mg||Jg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Kg[l],Kg[m],Kg[n],Kg[p])}return b.join("")},Og=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Mg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Kg=Kg||Lg();Mg=Mg||
Jg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Pg;function Qg(a,b){if(!a||b===C.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var Ug=function(){var a=Rg,b=Sg,c=Tg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){D(C,"mousedown",d);D(C,"keyup",d);D(C,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},Tg=function(){var a=Jb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Vg=/(.*?)\*(.*?)\*(.*)/,Wg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Xg=/^(?:www\.|m\.|amp\.)+/,Yg=/([^?#]+)(\?[^#]*)?(#.*)?/,Zg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,ah=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ng(String(d))))}var e=b.join("*");return["1",$g(e),e].join("*")},$g=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Pg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Pg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Pg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},ch=function(){return function(a){var b=pe(u.location.href),c=b.search.replace("?",""),d=le(c,"_gl",!0)||"";a.query=bh(d)||{};var e=oe(b,"fragment").match(Zg);a.fragment=bh(e&&e[3]||
"")||{}}},dh=function(){var a=ch(),b=Tg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Da(c,d.query),Da(c,d.fragment));return c},bh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Vg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===$g(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Og(t[q+1]);return p}}}}catch(r){}};
function eh(a,b,c){function d(m){var n=m,p=Zg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Yg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function fh(a,b,c){for(var d={},e={},g=Tg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Qg(k.domains,b)&&(k.fragment?Da(e,k.callback()):Da(d,k.callback()))}if(Ea(d)){var l=ah(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=C.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=eh(l,a.action);je.test(v)&&(a.action=v)}}}else gh(l,a,!1)}if(!c&&Ea(e)){var w=ah(e);gh(w,a,!0)}}function gh(a,b,c){if(b.href){var d=eh(a,b.href,void 0===c?!1:c);je.test(d)&&(b.href=d)}}
var Rg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||fh(e,e.hostname,!1)}}catch(h){}},Sg=function(a){try{if(a.action){var b=oe(pe(a.action),"host");fh(a,b,!0)}}catch(c){}},hh=function(a,b,c,d){Ug();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};Tg().decorators.push(e)},ih=function(){var a=C.location.hostname,b=Wg.exec(C.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Xg,""),l=e.replace(Xg,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},jh=function(a,b){return!1===a?!1:a||b||ih()};var kh={};var lh=/^\w+$/,mh=/^[\w-]+$/,nh=/^~?[\w-]+$/,oh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function ph(a){return a&&"string"==typeof a&&a.match(lh)?a:"_gcl"}var rh=function(){var a=pe(u.location.href),b=oe(a,"query",!1,void 0,"gclid"),c=oe(a,"query",!1,void 0,"gclsrc"),d=oe(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||le(e,"gclid",void 0);c=c||le(e,"gclsrc",void 0)}return qh(b,c,d)};
function qh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(mh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==kh.gtm_3pds?0:kh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}var th=function(a){var b=rh();sh(b,a)};
function sh(a,b,c){function d(p,t){var q=uh(p,e);q&&df(q,t,h,g,l,!0)}b=b||{};var e=ph(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Kc?7776E3:b.Kc;c=c||ya();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.Gh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var wh=function(a,b,c,d,e){for(var g=dh(),h=ph(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==oh[l]){var m=uh(l,h),n=g[m];if(n){var p=Math.min(vh(n),ya()),t;b:{for(var q=p,r=We(m,C.cookie),v=0;v<r.length;++v)if(vh(r[v])>q){t=!0;break b}t=!1}t||df(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};sh(qh(g.gclid,g.gclsrc),w)},uh=function(a,b){var c=oh[a];if(void 0!==c)return b+c},vh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function xh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var yh=function(a,b,c,d,e){if(ma(b)){var g=ph(e);hh(function(){for(var h={},k=0;k<a.length;++k){var l=uh(a[k],g);if(l){var m=We(l,C.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},zh=function(a){return a.filter(function(b){return nh.test(b)})},Ah=function(a){for(var b=["aw","dc"],c=ph(a&&a.prefix),d={},e=0;e<b.length;e++)oh[b[e]]&&(d[b[e]]=oh[b[e]]);ta(d,function(g,h){var k=We(c+h,C.cookie);if(k.length){var l=k[0],m=vh(l),n={};n[g]=[xh(l)];sh(n,a,m)}})};var Bh=/^\d+\.fls\.doubleclick\.net$/;function Ch(a){var b=pe(u.location.href),c=oe(b,"host",!1);if(c&&c.match(Bh)){var d=oe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Dh(a,b){if("aw"==a||"dc"==a){var c=Ch("gcl"+a);if(c)return c.split(".")}var d=ph(b);if("_gcl"==d){var e;e=rh()[a]||[];if(0<e.length)return e}var g=uh(a,d),h;if(g){var k=[];if(C.cookie){var l=We(g,C.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=xh(l[m]);n&&-1===oa(k,n)&&k.push(n)}h=zh(k)}else h=k}else h=k}else h=[];return h}
var Eh=function(){var a=Ch("gac");if(a)return decodeURIComponent(a);var b=Ig(),c=[];ta(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Yf);g=zh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Fh=function(a,b,c,d,e){Hg(b,c,d,e);var g=Dg[Eg(b)],h=rh().dc||[],k=!1;if(g&&0<h.length){var l=oc.joined_au=oc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Hb.sendBeacon&&Hb.sendBeacon(t)||Ob(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Eg(b),r=Dg[q];r&&Gg(q,r,c,d,e)}};var Gh;if(3===nc.Cb.length)Gh="g";else{var Ih="G";Gh=Ih}
var Jh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Gh,OPT:"o"},Kh=function(a){var b=nc.i.split("-"),c=b[0].toUpperCase(),d=Jh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===nc.Cb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+nc.Cb+e};var Ph=["input","select","textarea"],Qh=["button","hidden","image","reset","submit"],Rh=function(a){var b=a.tagName.toLowerCase();return!pa(Ph,function(c){return c===b})||"input"===b&&pa(Qh,function(c){return c===a.type.toLowerCase()})?!1:!0},Sh=function(a){return a.form?a.form.tagName?a.form:C.getElementById(a.form):Tb(a,["form"],100)},Th=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Rh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var Wh=!!u.MutationObserver,Xh=void 0,Yh=function(a){if(!Xh){var b=function(){var c=C.body;if(c)if(Wh)(new MutationObserver(function(){for(var e=0;e<Xh.length;e++)G(Xh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;D(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<Xh.length;e++)G(Xh[e])}))})}};Xh=[];C.body?b():G(b)}Xh.push(a)};
var pi=function(){var a=C.body,b=C.documentElement||a&&a.parentElement,c,d;if(C.compatMode&&"BackCompat"!==C.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};Bc("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},qi=function(a){var b=pi(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},ri=function(a){if(C.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!u.getComputedStyle)return!0;var c=u.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=u.getComputedStyle(d,null))}return!1};var si=[],ti=!(!u.IntersectionObserver||!u.IntersectionObserverEntry),ui=function(a,b,c){for(var d=new u.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var g=0;g<si.length;g++)if(!si[g])return si[g]=d,g;return si.push(d)-1},vi=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:ya()};G(function(){return a(n)})}for(var e=[],g=[],h=0;h<b.length;h++)e.push(0),g.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=qi(b[k]);if(l>e[k])for(;g[k]<c.length-1&&l>=c[g[k]+1];)d(b[k],l),g[k]++;else if(l<e[k])for(;0<=g[k]&&l<=c[g[k]];)d(b[k],l),g[k]--;e[k]=l}}},wi=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(ti){var e=!1;G(function(){e||vi(a,b,c)()});return ui(function(g){e=!0;for(var h={Ia:0};h.Ia<g.length;h={Ia:h.Ia},h.Ia++)G(function(k){return function(){return a(g[k.Ia])}}(h))},b,c)}return u.setInterval(vi(a,b,c),1E3)},xi=function(a){ti?0<=a&&a<si.length&&si[a]&&(si[a].disconnect(),si[a]=void 0):u.clearInterval(a)};var zi=u.clearTimeout,Ai=u.setTimeout,K=function(a,b,c){if(ld()){b&&G(b)}else return Lb(a,b,c)},Bi=function(){return u.location.href},Ci=function(a){return oe(pe(a),"fragment")},Di=function(a){return ne(pe(a))},Ei=null;
var Fi=function(a,b){return bd(a,b||2)},Gi=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Nf(a)},Hi=function(a,b){u[a]=b},W=function(a,b,c){b&&(void 0===u[a]||c&&!u[a])&&(u[a]=b);return u[a]},Ii=function(a,b,c){return We(a,b,void 0===c?!0:!!c)},Ji=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Kc:d};th(e);Ah(e)},Ki=function(a,b,c,d,e){wh(a,b,c,d,e);},Li=function(a,b,c,d,e){
yh(a,b,c,d,e);},Mi=function(a,b){if(ld()){b&&G(b)}else Nb(a,b)},Ni=function(a){return!!wg(a,"init",!1)},Oi=function(a){ug(a,"init",!0)},Pi=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":sc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ta(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});K(J("https://","http://",d))},Qi=function(a,b){var c=a[b];
return c};
var Si=pg.rg;var Ti=new ra,Ui=function(a,b){function c(h){var k=pe(h),l=oe(k,"protocol"),m=oe(k,"host",!0),n=oe(k,"port"),p=oe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Vi=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ma(c)){for(var d=0;d<c.length;d++)if(Vi({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=oa(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Ti.get(q);r||(r=new RegExp(c,t),Ti.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Ui(b,c)}return!1};var Xi={},Yi=function(){if(u._gtmexpgrp&&u._gtmexpgrp.hasOwnProperty(1))return u._gtmexpgrp[1];void 0===Xi[1]&&(Xi[1]=Math.floor(2*Math.random()));return Xi[1]};var Zi=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var $i={},aj=encodeURI,X=encodeURIComponent,bj=Ob;var cj=function(a,b){if(!a)return!1;var c=oe(pe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var dj=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};$i.og=function(){var a=!1;return a};var Dj=function(){var a=u.gaGlobal=u.gaGlobal||{};a.hid=a.hid||qa();return a.hid};var mk=window,nk=document,ok=function(a){var b=mk._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===mk["ga-disable-"+a])return!0;try{var c=mk.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=We("AMP_TOKEN",nk.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return nk.getElementById("__gaOptOutExtension")?!0:!1};var tk=function(a,b,c){Pe(b,c,a)},uk=function(a,b,c){Pe(b,c,a,!0)},wk=function(a,b){},vk=function(a,b){},
xk=function(a){return"_"===a.charAt(0)},yk=function(a){ta(a,function(c){xk(c)&&delete a[c]});var b=a[H.xb]||{};ta(b,function(c){xk(c)&&delete b[c]})};var Z={a:{}};
Z.a.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.b="ctv";Z.__ctv.g=!0;Z.__ctv.priorityOverride=0})(function(){return"45"})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=void 0,c="//www.googleadservices.com/pagead/conversion_async.js";var d=a.vtp_gtmOnFailure;Yd();K(c,function(){var e=W("google_trackConversion");
if(ja(e)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=dj(a.vtp_customParams,"key","value"));var h={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(h.value=a.vtp_eventValue),a.vtp_eventItems&&(h.items=a.vtp_eventItems));var k={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_gtag_event_data:h,google_remarketing_only:!0,
onload_callback:a.vtp_gtmOnSuccess,google_gtm:Kh()};b&&(k.google_additional_conversion_params=b);e(k)||d()}else d()},d)})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(kd(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=Fi("gtm.referrer",1)||C.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?oe(pe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Di(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=sg(c,"gtm.click");Gi(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Ni("cl")){var c=W("document");D(c,"click",a,!0);Oi("cl")}G(b.vtp_gtmOnSuccess)})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return qa(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Fi("gtm.url",1))||Bi();var d=b[a("vtp_component")];if(!d||"URL"==d)return Di(String(c));var e=pe(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ma(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=oe(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=oe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Fi(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;f(dj(n.vtp_fieldsToSet,"fieldName","value"),g);f(dj(n.vtp_contentGroup,"index","group"),h);f(dj(n.vtp_dimension,"index","dimension"),k);f(dj(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var p=f(n);d=f(d,p)}f(dj(d.vtp_fieldsToSet,"fieldName","value"),g);f(dj(d.vtp_contentGroup,
"index","group"),h);f(dj(d.vtp_dimension,"index","dimension"),k);f(dj(d.vtp_metric,"index","metric"),l);var t=ee(d.vtp_functionName);if(ja(t)){var q="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,q=r+"."):(r="gtm"+zc(),q=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(T){var O=[].slice.call(arguments,0);O[0]=q+O[0];t.apply(window,O)},x=function(T,O){return void 0===O?O:T(O)},A=function(T,O){if(O)for(var na in O)O.hasOwnProperty(na)&&y("set",T+na,O[na])},z=function(){
var T=function(Ik,Hh,Jk){if(!Ja(Hh))return!1;for(var Cc=za(Object(Hh),Jk,[]),af=0;Cc&&af<Cc.length;af++)y(Ik,Cc[af]);return!!Cc&&0<Cc.length},O;if(d.vtp_useEcommerceDataLayer){var na=!1;na||(O=Fi("ecommerce",1))}else d.vtp_ecommerceMacroData&&(O=d.vtp_ecommerceMacroData.ecommerce);if(!Ja(O))return;O=Object(O);var Sa=za(g,"currencyCode",O.currencyCode);
void 0!==Sa&&y("set","&cu",Sa);T("ec:addImpression",O,"impressions");if(T("ec:addPromo",O[O.promoClick?"promoClick":"promoView"],"promotions")&&O.promoClick){y("ec:setAction","promo_click",O.promoClick.actionField);return}for(var Aa="detail checkout checkout_option click add remove purchase refund".split(" "),Ta="refund purchase remove checkout checkout_option add click detail".split(" "),Ua=0;Ua<Aa.length;Ua++){var gb=O[Aa[Ua]];if(gb){T("ec:addProduct",gb,"products");y("ec:setAction",Aa[Ua],gb.actionField);
if(Sc)for(var ob=0;ob<Ta.length;ob++){var Zb=O[Ta[ob]];if(Zb){Zb!==gb&&Bc("GTM",13);break}}break}}},B=function(T,O,na){var Sa=0;if(T)for(var Aa in T)if(T.hasOwnProperty(Aa)&&(na&&v[Aa]||!na&&void 0===v[Aa])){var Ta=w[Aa]?va(T[Aa]):T[Aa];"anonymizeIp"!=Aa||Ta||(Ta=void 0);O[Aa]=Ta;Sa++}return Sa},E={name:r};B(g,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",Kh(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(T,O){void 0!==d[O]&&y("set",T,d[O])})("nonInteraction","vtp_nonInteraction");A("contentGroup",h);A("dimension",k);A("metric",l);var F={};B(g,F,!1)&&y("set",F);var M;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var T=g&&g.hitCallback;ja(T)&&T();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),z());var Q={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(ua,d.vtp_eventValue||
e.value)};B(M,Q,!1);y("send",Q);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var Y=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:Y})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ba="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ba})}M?y("send","pageview",M):y("send","pageview");}if(!a){var ca=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ca="internal/"+ca);a=!0;var Ba=J("https:","http:","//www.google-analytics.com/"+ca,g&&g.forceSSL);K(Ba,function(){var T=ce();T&&T.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();


Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return nc.i})}();
Z.a.hjtc=["nonGoogleScripts"],function(){(function(a){Z.__hjtc=a;Z.__hjtc.b="hjtc";Z.__hjtc.g=!0;Z.__hjtc.priorityOverride=0})(function(a){var b=a.vtp_hotjar_site_id;Hi("hj",function(){(window.hj.q=window.hj.q||[]).push(arguments)});Hi("_hjSettings",{hjid:b,hjsv:5});K("//static.hotjar.com/c/hotjar-"+X(b)+".js?sv=5",a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){G(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||
ih())&&Ki(a,h,k,l));Ji(e,c,d);Fh(g,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Li(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();

Z.a.aev=["google"],function(){function a(q,r){var v=kd(q,"gtm");if(v)return v[r]}function b(q,r,v,w){w||(w="element");var y=q+"."+r,x;if(n.hasOwnProperty(y))x=n[y];else{var A=a(q,w);if(A&&(x=v(A),n[y]=x,p.push(y),35<p.length)){var z=p.shift();delete n[z]}}return x}function c(q,r,v){var w=a(q,t[r]);return void 0!==w?w:v}function d(q,r){if(!q)return!1;var v=e(Bi());ma(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(q))return!1}else{var x=
r[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!cj(q,w)}function e(q){m.test(q)||(q="http://"+q);return oe(pe(q),"HOST",!0)}function g(q,r,v){switch(q){case "SUBMIT_TEXT":return b(r,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(r,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(r,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Qb(q,"value");case "button":return Rb(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var r=0,v=0;v<q.elements.length;v++)Rh(q.elements[v])&&r++;return r}}function l(q,r,v){var w=a(q,"interactedFormField");return w&&Qb(w,r)||v}var m=/^https?:\/\//i,n={},p=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var r=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(r,"element");return y&&y.tagName||
v;case "TEXT":return b(r,w,Rb)||v;case "URL":var x;a:{var A=String(a(r,"elementUrl")||v||""),z=pe(A),B=String(q.vtp_component||"URL");switch(B){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,q.vtp_affiliatedDomains);break a;default:x=oe(z,B,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(r,w,v);else{var F=q.vtp_attribute,M=a(r,"element");E=M&&Qb(M,F)||v||""}return E;case "MD":var Q=q.vtp_mdValue,S=b(r,"MD",li);return Q&&S?oi(S,Q)||
v:S||v;case "FORM":return g(String(q.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=f(a),c=b;c[yb.ka]=null;c[yb.We]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=W("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Yd();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Kh()},m=function(v){return function(w,y,x){var A="DATA_LAYER"==v?Fi(x):k[y];A&&(l[w]=A)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var p=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||{})[v]=w},t=function(v){return function(w,y,x,A){var z="DATA_LAYER"==
v?Fi(x):k[y];A(z)&&p(w,z)}},q="//www.googleadservices.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=t(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",ea),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",
function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var r=!0;r&&b.push(l);a||(a=!0,K(q,g(),
e(q)))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();
Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();
Z.a.fsl=[],function(){function a(){var e=W("document"),g=c(),h=HTMLFormElement.prototype.submit;D(e,"click",function(k){var l=k.target;if(l&&(l=Tb(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Qb(l,"value")){var m;(m=l.form?l.form.tagName?l.form:C.getElementById(l.form):Tb(l,["form"],100))&&g.store(m,l)}},!1);D(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,p=g.get(l),t=!0;if(d(l,function(){if(t){var q;
p&&(q=e.createElement("input"),q.type="hidden",q.name=p.name,q.value=p.value,l.appendChild(q));h.call(l);q&&l.removeChild(q)}},m,n,p))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var g=e.target;return g&&"_self"!==g&&"_parent"!==g&&"_top"!==g?!1:!0}function c(){var e=[],g=function(h){return pa(e,function(k){return k.form===
h})};return{store:function(h,k){var l=g(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=g(h);return k?k.button:null}}}function d(e,g,h,k,l){var m=wg("fsl",h?"nv.mwt":"mwt",0),n;n=h?wg("fsl","nv.ids",[]):wg("fsl","ids",[]);if(!n.length)return!0;var p=sg(e,"gtm.formSubmit",n),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);p["gtm.elementUrl"]=t;l&&(p["gtm.formSubmitElement"]=l);if(k&&m){if(!Gi(p,Of(g),m))return!1}else Gi(p,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.b=
"fsl";Z.__fsl.g=!0;Z.__fsl.priorityOverride=0})(function(e){var g=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(p){return Math.max(k,p)};vg("fsl","mwt",m,0);h||vg("fsl","nv.mwt",m,0)}var n=function(p){p.push(l);return p};vg("fsl","ids",n,[]);h||vg("fsl","nv.ids",n,[]);Ni("fsl")||(a(),Oi("fsl"));G(e.vtp_gtmOnSuccess)})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=dj(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.a.twitter_website_tag=["nonGoogleScripts"],function(){(function(a){Z.__twitter_website_tag=a;Z.__twitter_website_tag.b="twitter_website_tag";Z.__twitter_website_tag.g=!0;Z.__twitter_website_tag.priorityOverride=0})(function(a){(function(c,d){c.twq||(d=c.twq=function(){d.exe?d.exe.apply(d,arguments):d.queue.push(arguments)},d.version="1",d.queue=[],K("//static.ads-twitter.com/uwt.js"))})(window,void 0);window.twq("init",String(a.vtp_twitter_pixel_id));var b=dj(a.vtp_event_parameters,"param_table_key_column",
"param_table_value_column");b&&void 0!==b.content_ids&&(b.content_ids=JSON.parse(b.content_ids.replace(/'/g,'"')));window.twq("track",String(a.vtp_event_type),b);G(a.vtp_gtmOnSuccess)})}();
Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=C.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Kb(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){G(h)}}}var c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,g=Si(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.Bc,k=g.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,Sb(h),k,e)()}else Ai(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();


Z.a.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.b="dbg";Z.__dbg.g=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();




Z.a.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=Tb(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=wg("lcl",k?"nv.mwt":"mwt",0),m;m=k?wg("lcl","nv.ids",[]):wg("lcl","ids",[]);if(m.length){var n=sg(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var p=W((Qi(h,"target")||"_self").substring(1)),t=!0;if(Gi(n,Of(function(){t&&p&&(p.location.href=Qi(h,
"href"))}),l))t=!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else Gi(n,function(){},l||2E3);return!0}}};D(c,"click",e,!1);D(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=Qi(d,"href"),h=g.indexOf("#"),k=Qi(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Di(g),m=Di(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=
0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};vg("lcl","mwt",k,0);e||vg("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};vg("lcl","ids",l,[]);e||vg("lcl","nv.ids",l,[]);Ni("lcl")||(a(),Oi("lcl"));G(c.vtp_gtmOnSuccess)})}();
Z.a.evl=["google"],function(){function a(g,h){this.element=g;this.uid=h}function b(){var g=Number(Fi("gtm.start"))||0;return(new Date).getTime()-g}function c(g,h,k,l){function m(){if(!ri(g.target)){h.has(e.Bb)||h.set(e.Bb,""+b());h.has(e.mc)||h.set(e.mc,""+b());var p=0;h.has(e.Db)&&(p=Number(h.get(e.Db)));p+=100;h.set(e.Db,""+p);if(p>=k){var t=sg(g.target,"gtm.elementVisibility",[h.uid]),q=qi(g.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(e.mc));
t["gtm.visibleLastTime"]=Number(h.get(e.Bb));Gi(t);l()}}}if(!h.has(e.Wa)&&(0==k&&m(),!h.has(e.ya))){var n=W("self").setInterval(m,100);h.set(e.Wa,n)}}function d(g){g.has(e.Wa)&&(W("self").clearInterval(Number(g.get(e.Wa))),g.remove(e.Wa))}var e={Wa:"polling-id-",mc:"first-on-screen-",Bb:"recent-on-screen-",Db:"total-visible-time-",ya:"has-fired-"};a.prototype.has=function(g){return!!this.element.getAttribute("data-gtm-vis-"+g+this.uid)};a.prototype.get=function(g){return this.element.getAttribute("data-gtm-vis-"+
g+this.uid)};a.prototype.set=function(g,h){this.element.setAttribute("data-gtm-vis-"+g+this.uid,h)};a.prototype.remove=function(g){this.element.removeAttribute("data-gtm-vis-"+g+this.uid)};(function(g){Z.__evl=g;Z.__evl.b="evl";Z.__evl.g=!0;Z.__evl.priorityOverride=0})(function(g){function h(){var y=!1,x=null;if("CSS"===l){try{x=wf(m)}catch(F){}y=!!x&&v.length!=x.length}else if("ID"===l){var A=C.getElementById(m);A&&(x=[A],y=1!=v.length||v[0]!==A)}x||(x=[],y=0<v.length);if(y){for(var z=0;z<v.length;z++){var B=
new a(v[z],q);d(B)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&xi(w);0<v.length&&(w=wi(k,v,[t]))}}function k(y){var x=new a(y.target,q);y.intersectionRatio>=t?x.has(e.ya)||c(y,x,p,"ONCE"===r?function(){for(var A=0;A<v.length;A++){var z=new a(v[A],q);z.set(e.ya,"1");d(z)}xi(w);if(n&&Xh)for(var B=0;B<Xh.length;B++)Xh[B]===h&&Xh.splice(B,1)}:function(){x.set(e.ya,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===r&&x.has(e.ya)&&(x.remove(e.ya),x.remove(e.Db)),x.remove(e.Bb))}var l=g.vtp_selectorType,m;"ID"===
l?m=String(g.vtp_elementId):"CSS"===l&&(m=String(g.vtp_elementSelector));var n=!!g.vtp_useDomChangeListener,p=g.vtp_useOnScreenDuration&&Number(g.vtp_onScreenDuration)||0,t=(Number(g.vtp_onScreenRatio)||50)/100,q=g.vtp_uniqueTriggerId,r=g.vtp_firingFrequency,v=[],w=-1;h();n&&Yh(h);G(g.vtp_gtmOnSuccess)})}();

var Hk={};Hk.macro=function(a){if(pg.nc.hasOwnProperty(a))return pg.nc[a]},Hk.onHtmlSuccess=pg.Ld(!0),Hk.onHtmlFailure=pg.Ld(!1);Hk.dataLayer=cd;Hk.callback=function(a){xc.hasOwnProperty(a)&&ja(xc[a])&&xc[a]();delete xc[a]};Hk.xf=function(){oc[nc.i]=Hk;Da(yc,Z.a);qb=qb||pg;rb=Hd};
Hk.jg=function(){kh.gtm_3pds=!0;oc=u.google_tag_manager=u.google_tag_manager||{};if(oc[nc.i]){var a=oc.zones;a&&a.unregisterChild(nc.i)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)ib.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)lb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)kb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);jb.push(p)}nb=Z;pb=Vi;Hk.xf();Tf();Kd=!1;Ld=0;if("interactive"==C.readyState&&!C.createEventObject||"complete"==C.readyState)Nd();else{D(C,"DOMContentLoaded",Nd);D(C,"readystatechange",Nd);if(C.createEventObject&&C.documentElement.doScroll){var q=!0;try{q=!u.frameElement}catch(y){}q&&Od()}D(u,"load",Nd)}Hf=!1;"complete"===C.readyState?Jf():
D(u,"load",Jf);a:{if(!Sc)break a;u.setInterval(Tc,864E5);}
uc=(new Date).getTime();
}};(0,Hk.jg)();

})()
