!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/demo-book/",n(n.s=311)}({0:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},1:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(26))},10:function(t,e,n){var r=n(19),o=n(14);t.exports=function(t){return r(o(t))}},100:function(t,e,n){var r=n(14),o="["+n(67)+"]",i=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(u,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},102:function(t,e,n){var r=n(103);t.exports=r},103:function(t,e,n){var r=n(104),o=Array.prototype;t.exports=function(t){var e=t.indexOf;return t===o||t instanceof Array&&e===o.indexOf?r:e}},104:function(t,e,n){n(105);var r=n(21);t.exports=r("Array").indexOf},105:function(t,e,n){"use strict";var r=n(7),o=n(55).indexOf,i=n(56),u=n(35),c=[].indexOf,a=!!c&&1/[1].indexOf(1,-0)<0,_=i("indexOf"),f=u("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:a||!_||!f},{indexOf:function(t){return a?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},11:function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},12:function(t,e,n){var r=n(2),o=n(15),i=n(13),u=n(11),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=u(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},13:function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},14:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},15:function(t,e,n){var r=n(2),o=n(0),i=n(23);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},16:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},17:function(t,e,n){var r=n(20),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},18:function(t,e,n){var r=n(29);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},19:function(t,e,n){var r=n(0),o=n(16),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2:function(t,e,n){var r=n(0);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},20:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},21:function(t,e,n){var r=n(5);t.exports=function(t){return r[t+"Prototype"]}},22:function(t,e,n){var r=n(2),o=n(25),i=n(9),u=n(10),c=n(11),a=n(4),_=n(15),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=u(t),e=c(e,!0),_)try{return f(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},23:function(t,e,n){var r=n(1),o=n(3),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},25:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},26:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},28:function(t,e,n){var r=n(0),o=/#|\.prototype\./,i=function(t,e){var n=c[u(t)];return n==_||n!=a&&("function"==typeof e?r(e):!!e)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",_=i.POLYFILL="P";t.exports=i},29:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},3:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},311:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(60),_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(54),_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1__),_index_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(312),_index_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__),openWindow=function openWindow(url,windowName,width,height){var x=_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(screen.width/2)-width/2,y=_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(screen.height/2)-height/2,isMSIE="Microsoft Internet Explorer"==navigator.appName;if(isMSIE){var p="resizable=1,location=no,scrollbars=no,width=";p+=width,p+=",height=",p+=height,p+=",left=",p+=x,p+=",top=",p+=y,window.open(url,windowName,p)}else{var win=window.open(url,"ZyiisPopup","top="+y+",left="+x+",scrollbars="+scrollbars+",dialog=yes,modal=yes,width="+width+",height="+height+",resizable=no");eval("try { win.resizeTo(width, height); } catch(e) { }"),win.focus()}};document.querySelector("button").addEventListener("click",(function(){var t=document.querySelector('input[id="url"]').value,e=document.querySelector('input[id="name"]').value,n=document.querySelector('input[id="width"]').value,r=document.querySelector('input[id="height"]').value;openWindow(-1!==_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0___default()(t).call(t,"https://")?t:"https://".concat(t),e,n,r)}))},312:function(t,e,n){},35:function(t,e,n){var r=n(2),o=n(0),i=n(4),u=Object.defineProperty,c={},a=function(t){throw t};t.exports=function(t,e){if(i(c,t))return c[t];e||(e={});var n=[][t],_=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:a,s=i(e,1)?e[1]:void 0;return c[t]=!!n&&!o((function(){if(_&&!r)return!0;var t={length:-1};_?u(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,f,s)}))}},4:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},40:function(t,e,n){var r=n(20),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5:function(t,e){t.exports={}},54:function(t,e,n){t.exports=n(96)},55:function(t,e,n){var r=n(10),o=n(17),i=n(40),u=function(t){return function(e,n,u){var c,a=r(e),_=o(a.length),f=i(u,_);if(t&&n!=n){for(;_>f;)if((c=a[f++])!=c)return!0}else for(;_>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},56:function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},60:function(t,e,n){t.exports=n(102)},67:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},7:function(t,e,n){"use strict";var r=n(1),o=n(22).f,i=n(28),u=n(5),c=n(18),a=n(8),_=n(4),f=function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e};t.exports=function(t,e){var n,s,p,l,d,b,v,h,y=t.target,x=t.global,w=t.stat,O=t.proto,E=x?r:w?r[y]:(r[y]||{}).prototype,m=x?u:u[y]||(u[y]={}),g=m.prototype;for(p in e)n=!i(x?p:y+(w?".":"#")+p,t.forced)&&E&&_(E,p),d=m[p],n&&(b=t.noTargetGet?(h=o(E,p))&&h.value:E[p]),l=n&&b?b:e[p],n&&typeof d==typeof l||(v=t.bind&&n?c(l,r):t.wrap&&n?f(l):O&&"function"==typeof l?c(Function.call,l):l,(t.sham||l&&l.sham||d&&d.sham)&&a(v,"sham",!0),m[p]=v,O&&(_(u,s=y+"Prototype")||a(u,s,{}),u[s][p]=l,t.real&&g&&!g[p]&&a(g,p,l)))}},8:function(t,e,n){var r=n(2),o=n(12),i=n(9);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},96:function(t,e,n){var r=n(97);t.exports=r},97:function(t,e,n){n(98);var r=n(5);t.exports=r.parseInt},98:function(t,e,n){var r=n(7),o=n(99);r({global:!0,forced:parseInt!=o},{parseInt:o})},99:function(t,e,n){var r=n(1),o=n(100).trim,i=n(67),u=r.parseInt,c=/^[+-]?0[Xx]/,a=8!==u(i+"08")||22!==u(i+"0x16");t.exports=a?function(t,e){var n=o(String(t));return u(n,e>>>0||(c.test(n)?16:10))}:u}});