!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/demo-book/",r(r.s=342)}({0:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},1:function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(26))},10:function(t,n,r){var e=r(19),o=r(14);t.exports=function(t){return e(o(t))}},11:function(t,n,r){var e=r(3);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},119:function(t,n,r){var e=r(70);t.exports=e},12:function(t,n,r){var e=r(2),o=r(15),i=r(13),u=r(11),a=Object.defineProperty;n.f=e?a:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return a(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},13:function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},14:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},15:function(t,n,r){var e=r(2),o=r(0),i=r(23);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},16:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},17:function(t,n,r){var e=r(28);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},18:function(t,n,r){var e=r(20),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},19:function(t,n,r){var e=r(0),o=r(16),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2:function(t,n,r){var e=r(0);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},20:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},21:function(t,n,r){var e=r(2),o=r(22),i=r(9),u=r(10),a=r(11),c=r(4),s=r(15),f=Object.getOwnPropertyDescriptor;n.f=e?f:function(t,n){if(t=u(t),n=a(n,!0),s)try{return f(t,n)}catch(t){}if(c(t,n))return i(!o.f.call(t,n),t[n])}},22:function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},23:function(t,n,r){var e=r(1),o=r(3),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},24:function(t,n,r){var e=r(5);t.exports=function(t){return e[t+"Prototype"]}},26:function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},27:function(t,n,r){var e=r(0),o=/#|\.prototype\./,i=function(t,n){var r=a[u(t)];return r==s||r!=c&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},c=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},28:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},3:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},30:function(t,n,r){var e=r(5),o=r(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},31:function(t,n,r){var e=r(16);t.exports=Array.isArray||function(t){return"Array"==e(t)}},32:function(t,n,r){var e=r(0);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},33:function(t,n,r){var e=r(2),o=r(0),i=r(4),u=Object.defineProperty,a={},c=function(t){throw t};t.exports=function(t,n){if(i(a,t))return a[t];n||(n={});var r=[][t],s=!!i(n,"ACCESSORS")&&n.ACCESSORS,f=i(n,0)?n[0]:c,l=i(n,1)?n[1]:void 0;return a[t]=!!r&&!o((function(){if(s&&!e)return!0;var t={length:-1};s?u(t,1,{enumerable:!0,get:c}):t[1]=1,r.call(t,f,l)}))}},336:function(t,n,r){},337:function(t,n,r){},338:function(t,n,r){},339:function(t,n,r){},34:function(t,n){t.exports=!0},340:function(t,n){$(document).ready((function(){console.log(pagesConfig)}))},341:function(t,n){var r,e={model:{jsonPath:""},display:{superSample:1,width:250,height:300,position:"right",hOffset:0,vOffset:0},mobile:{show:!0,scale:1,motion:!0},react:{opacityDefault:1,opacityOnHover:1}};r=Math.floor(10*Math.random())%2==0?tororo:hijiki,e.model.jsonPath=r,L2Dwidget.init(e)},342:function(t,n,r){"use strict";r.r(n);var e=r(48),o=r.n(e),i=(r(336),r(337),r(338),r(84)),u=r.n(i);r(339);function a(){var t=window.location.hash.substr(1);if(t&&t.length>1)return u.a.start(),function(t){if(1===t.length)return;var n="/"!==o()(t).call(t,-1)?t+"/":t;$("#iframe-box").attr("src",o()(publicPath).call(publicPath,0,-1)+n)}(t),t;var n=$(".list-content a");if(n&&n.length){var r=n[0].getAttribute("data-path");window.location.hash=r}}r(340),r(341);function c(){var t=a();t&&function(t){var n=t.split("_")[0],r=$(".".concat(n)),e=$(".".concat(t));$(".list-header-active").removeClass("list-header-active"),$(".list-item-active").removeClass("list-item-active"),r.addClass("list-header-active"),e.addClass("list-item-active");var o=r.parent().children(),i=o[0],u=o[1];$(u).show();var a=$(i).children()[1];$(a).css({transform:"rotate(180deg)"})}(o()(t).call(t,1))}window.onhashchange=function(){c()},$(document).ready((function(){var t;c(),$(".list-content a").click((function(t){var n=$(this).attr("data-path");window.location.hash=n,t.preventDefault()})),$("#menu .list-header").click((function(t){var n=t.currentTarget.parentNode.children[1],r=$(n).css("display"),e=t.currentTarget.children[1];"none"===r?$(e).css({transform:"rotate(180deg)"}):$(e).css({transform:"rotate(0deg)"}),$(n).slideToggle(100)})),(t=document.getElementById("iframe-box")).attachEvent?t.attachEvent("onload",(function(){u.a.done()})):t.onload=function(){u.a.done()}}))},36:function(t,n,r){var e=r(20),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},37:function(t,n,r){"use strict";var e=r(11),o=r(12),i=r(9);t.exports=function(t,n,r){var u=e(n);u in t?o.f(t,u,i(0,r)):t[u]=r}},38:function(t,n,r){var e=r(34),o=r(41);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.4",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},39:function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},4:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},40:function(t,n,r){var e=r(30);t.exports=e("navigator","userAgent")||""},41:function(t,n,r){var e=r(1),o=r(50),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},43:function(t,n,r){var e=r(32);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},44:function(t,n,r){var e=r(0),o=r(7),i=r(45),u=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},45:function(t,n,r){var e,o,i=r(1),u=r(40),a=i.process,c=a&&a.versions,s=c&&c.v8;s?o=(e=s.split("."))[0]+e[1]:u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},48:function(t,n,r){t.exports=r(119)},5:function(t,n){t.exports={}},50:function(t,n,r){var e=r(1),o=r(8);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},6:function(t,n,r){"use strict";var e=r(1),o=r(21).f,i=r(27),u=r(5),a=r(17),c=r(8),s=r(4),f=function(t){var n=function(n,r,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n};t.exports=function(t,n){var r,l,p,d,v,m,h,y,g=t.target,b=t.global,x=t.stat,S=t.proto,w=b?e:x?e[g]:(e[g]||{}).prototype,O=b?u:u[g]||(u[g]={}),j=O.prototype;for(p in n)r=!i(b?p:g+(x?".":"#")+p,t.forced)&&w&&s(w,p),v=O[p],r&&(m=t.noTargetGet?(y=o(w,p))&&y.value:w[p]),d=r&&m?m:n[p],r&&typeof v==typeof d||(h=t.bind&&r?a(d,e):t.wrap&&r?f(d):S&&"function"==typeof d?a(Function.call,d):d,(t.sham||d&&d.sham||v&&v.sham)&&c(h,"sham",!0),O[p]=h,S&&(s(u,l=g+"Prototype")||c(u,l,{}),u[l][p]=d,t.real&&j&&!j[p]&&c(j,p,d)))}},7:function(t,n,r){var e=r(1),o=r(38),i=r(4),u=r(39),a=r(32),c=r(43),s=o("wks"),f=e.Symbol,l=c?f:f&&f.withoutSetter||u;t.exports=function(t){return i(s,t)||(a&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},70:function(t,n,r){var e=r(71),o=Array.prototype;t.exports=function(t){var n=t.slice;return t===o||t instanceof Array&&n===o.slice?e:n}},71:function(t,n,r){r(72);var e=r(24);t.exports=e("Array").slice},72:function(t,n,r){"use strict";var e=r(6),o=r(3),i=r(31),u=r(36),a=r(18),c=r(10),s=r(37),f=r(7),l=r(44),p=r(33),d=l("slice"),v=p("slice",{ACCESSORS:!0,0:0,1:2}),m=f("species"),h=[].slice,y=Math.max;e({target:"Array",proto:!0,forced:!d||!v},{slice:function(t,n){var r,e,f,l=c(this),p=a(l.length),d=u(t,p),v=u(void 0===n?p:n,p);if(i(l)&&("function"!=typeof(r=l.constructor)||r!==Array&&!i(r.prototype)?o(r)&&null===(r=r[m])&&(r=void 0):r=void 0,r===Array||void 0===r))return h.call(l,d,v);for(e=new(void 0===r?Array:r)(y(v-d,0)),f=0;d<v;d++,f++)d in l&&s(e,f,l[d]);return e.length=f,e}})},8:function(t,n,r){var e=r(2),o=r(12),i=r(9);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},84:function(t,n,r){var e,o;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(o="function"==typeof(e=function(){var t,n,r={version:"0.2.0"},e=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function o(t,n,r){return t<n?n:t>r?r:t}function i(t){return 100*(-1+t)}r.configure=function(t){var n,r;for(n in t)void 0!==(r=t[n])&&t.hasOwnProperty(n)&&(e[n]=r);return this},r.status=null,r.set=function(t){var n=r.isStarted();t=o(t,e.minimum,1),r.status=1===t?null:t;var c=r.render(!n),s=c.querySelector(e.barSelector),f=e.speed,l=e.easing;return c.offsetWidth,u((function(n){""===e.positionUsing&&(e.positionUsing=r.getPositioningCSS()),a(s,function(t,n,r){var o;return(o="translate3d"===e.positionUsing?{transform:"translate3d("+i(t)+"%,0,0)"}:"translate"===e.positionUsing?{transform:"translate("+i(t)+"%,0)"}:{"margin-left":i(t)+"%"}).transition="all "+n+"ms "+r,o}(t,f,l)),1===t?(a(c,{transition:"none",opacity:1}),c.offsetWidth,setTimeout((function(){a(c,{transition:"all "+f+"ms linear",opacity:0}),setTimeout((function(){r.remove(),n()}),f)}),f)):setTimeout(n,f)})),this},r.isStarted=function(){return"number"==typeof r.status},r.start=function(){r.status||r.set(0);var t=function(){setTimeout((function(){r.status&&(r.trickle(),t())}),e.trickleSpeed)};return e.trickle&&t(),this},r.done=function(t){return t||r.status?r.inc(.3+.5*Math.random()).set(1):this},r.inc=function(t){var n=r.status;return n?("number"!=typeof t&&(t=(1-n)*o(Math.random()*n,.1,.95)),n=o(n+t,0,.994),r.set(n)):r.start()},r.trickle=function(){return r.inc(Math.random()*e.trickleRate)},t=0,n=0,r.promise=function(e){return e&&"resolved"!==e.state()?(0===n&&r.start(),t++,n++,e.always((function(){0==--n?(t=0,r.done()):r.set((t-n)/t)})),this):this},r.render=function(t){if(r.isRendered())return document.getElementById("nprogress");s(document.documentElement,"nprogress-busy");var n=document.createElement("div");n.id="nprogress",n.innerHTML=e.template;var o,u=n.querySelector(e.barSelector),c=t?"-100":i(r.status||0),f=document.querySelector(e.parent);return a(u,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),e.showSpinner||(o=n.querySelector(e.spinnerSelector))&&p(o),f!=document.body&&s(f,"nprogress-custom-parent"),f.appendChild(n),n},r.remove=function(){f(document.documentElement,"nprogress-busy"),f(document.querySelector(e.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&p(t)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var t=document.body.style,n="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return n+"Perspective"in t?"translate3d":n+"Transform"in t?"translate":"margin"};var u=function(){var t=[];function n(){var r=t.shift();r&&r(n)}return function(r){t.push(r),1==t.length&&n()}}(),a=function(){var t=["Webkit","O","Moz","ms"],n={};function r(r){return r=r.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(t,n){return n.toUpperCase()})),n[r]||(n[r]=function(n){var r=document.body.style;if(n in r)return n;for(var e,o=t.length,i=n.charAt(0).toUpperCase()+n.slice(1);o--;)if((e=t[o]+i)in r)return e;return n}(r))}function e(t,n,e){n=r(n),t.style[n]=e}return function(t,n){var r,o,i=arguments;if(2==i.length)for(r in n)void 0!==(o=n[r])&&n.hasOwnProperty(r)&&e(t,r,o);else e(t,i[1],i[2])}}();function c(t,n){return("string"==typeof t?t:l(t)).indexOf(" "+n+" ")>=0}function s(t,n){var r=l(t),e=r+n;c(r,n)||(t.className=e.substring(1))}function f(t,n){var r,e=l(t);c(t,n)&&(r=e.replace(" "+n+" "," "),t.className=r.substring(1,r.length-1))}function l(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function p(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return r})?e.call(n,r,n,t):e)||(t.exports=o)},9:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}}});