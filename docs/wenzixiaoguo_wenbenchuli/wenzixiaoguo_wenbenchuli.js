!function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="/demo-book/",n(n.s=293)}({0:function(t,r){t.exports=function(t){try{return!!t()}catch(t){return!0}}},1:function(t,r,n){(function(r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r&&r)||Function("return this")()}).call(this,n(29))},10:function(t,r,n){var e=n(19),o=n(14);t.exports=function(t){return e(o(t))}},11:function(t,r,n){var e=n(3);t.exports=function(t,r){if(!e(t))return t;var n,o;if(r&&"function"==typeof(n=t.toString)&&!e(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!e(o=n.call(t)))return o;if(!r&&"function"==typeof(n=t.toString)&&!e(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},114:function(t,r,n){var e=n(68);t.exports=e},12:function(t,r,n){var e=n(2),o=n(15),i=n(13),u=n(11),c=Object.defineProperty;r.f=e?c:function(t,r,n){if(i(t),r=u(r,!0),i(n),o)try{return c(t,r,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},13:function(t,r,n){var e=n(3);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},14:function(t,r){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},15:function(t,r,n){var e=n(2),o=n(0),i=n(24);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},16:function(t,r){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},17:function(t,r,n){var e=n(31);t.exports=function(t,r,n){if(e(t),void 0===r)return t;switch(n){case 0:return function(){return t.call(r)};case 1:return function(n){return t.call(r,n)};case 2:return function(n,e){return t.call(r,n,e)};case 3:return function(n,e,o){return t.call(r,n,e,o)}}return function(){return t.apply(r,arguments)}}},18:function(t,r,n){var e=n(22),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},19:function(t,r,n){var e=n(0),o=n(16),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2:function(t,r,n){var e=n(0);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},21:function(t,r,n){var e=n(2),o=n(23),i=n(9),u=n(10),c=n(11),f=n(4),a=n(15),s=Object.getOwnPropertyDescriptor;r.f=e?s:function(t,r){if(t=u(t),r=c(r,!0),a)try{return s(t,r)}catch(t){}if(f(t,r))return i(!o.f.call(t,r),t[r])}},22:function(t,r){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},23:function(t,r,n){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);r.f=i?function(t){var r=o(this,t);return!!r&&r.enumerable}:e},24:function(t,r,n){var e=n(1),o=n(3),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},25:function(t,r,n){var e=n(14);t.exports=function(t){return Object(e(t))}},26:function(t,r,n){var e=n(5);t.exports=function(t){return e[t+"Prototype"]}},27:function(t,r,n){var e=n(5),o=n(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][r]||o[t]&&o[t][r]}},28:function(t,r,n){var e=n(16);t.exports=Array.isArray||function(t){return"Array"==e(t)}},29:function(t,r){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},293:function(t,r,n){"use strict";n.r(r);var e=n(46),o=n.n(e),i=n(47),u=n.n(i),c=(n(294),"这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本"),f=c.length,a=function(){var t,r=document.querySelector(".multi-line--text_wrapper__JS"),n=window.getComputedStyle(r).width,e=window.getComputedStyle(r).fontSize,i=+u()(n).call(n,0,-2),a=Math.floor(i/+u()(e).call(e,0,-2)),s="",p=Math.floor(2*a),l=p-f;f>p?s=o()(t=u()(c).call(c,0,l-3)).call(t,"..."):s=c;r.innerHTML=s};a(),window.onresize=function(){a()}},294:function(t,r,n){},3:function(t,r){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},30:function(t,r,n){var e=n(0),o=/#|\.prototype\./,i=function(t,r){var n=c[u(t)];return n==a||n!=f&&("function"==typeof r?e(r):!!r)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},31:function(t,r){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},32:function(t,r,n){var e=n(0);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},33:function(t,r){t.exports=!0},35:function(t,r,n){"use strict";var e=n(11),o=n(12),i=n(9);t.exports=function(t,r,n){var u=e(r);u in t?o.f(t,u,i(0,n)):t[u]=n}},36:function(t,r,n){var e=n(2),o=n(0),i=n(4),u=Object.defineProperty,c={},f=function(t){throw t};t.exports=function(t,r){if(i(c,t))return c[t];r||(r={});var n=[][t],a=!!i(r,"ACCESSORS")&&r.ACCESSORS,s=i(r,0)?r[0]:f,p=i(r,1)?r[1]:void 0;return c[t]=!!n&&!o((function(){if(a&&!e)return!0;var t={length:-1};a?u(t,1,{enumerable:!0,get:f}):t[1]=1,n.call(t,s,p)}))}},37:function(t,r,n){var e=n(33),o=n(41);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.6.4",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},38:function(t,r){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},39:function(t,r,n){var e=n(27);t.exports=e("navigator","userAgent")||""},4:function(t,r){var n={}.hasOwnProperty;t.exports=function(t,r){return n.call(t,r)}},40:function(t,r,n){var e=n(22),o=Math.max,i=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):i(n,r)}},41:function(t,r,n){var e=n(1),o=n(49),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},42:function(t,r,n){var e=n(32);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},43:function(t,r,n){var e=n(0),o=n(6),i=n(44),u=o("species");t.exports=function(t){return i>=51||!e((function(){var r=[];return(r.constructor={})[u]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},44:function(t,r,n){var e,o,i=n(1),u=n(39),c=i.process,f=c&&c.versions,a=f&&f.v8;a?o=(e=a.split("."))[0]+e[1]:u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},46:function(t,r,n){t.exports=n(72)},47:function(t,r,n){t.exports=n(114)},48:function(t,r,n){var e=n(3),o=n(28),i=n(6)("species");t.exports=function(t,r){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?e(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===r?0:r)}},49:function(t,r,n){var e=n(1),o=n(8);t.exports=function(t,r){try{o(e,t,r)}catch(n){e[t]=r}return r}},5:function(t,r){t.exports={}},6:function(t,r,n){var e=n(1),o=n(37),i=n(4),u=n(38),c=n(32),f=n(42),a=o("wks"),s=e.Symbol,p=f?s:s&&s.withoutSetter||u;t.exports=function(t){return i(a,t)||(c&&i(s,t)?a[t]=s[t]:a[t]=p("Symbol."+t)),a[t]}},61:function(t,r,n){"use strict";var e=n(7),o=n(0),i=n(28),u=n(3),c=n(25),f=n(18),a=n(35),s=n(48),p=n(43),l=n(6),v=n(44),y=l("isConcatSpreadable"),d=v>=51||!o((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),h=p("concat"),x=function(t){if(!u(t))return!1;var r=t[y];return void 0!==r?!!r:i(t)};e({target:"Array",proto:!0,forced:!d||!h},{concat:function(t){var r,n,e,o,i,u=c(this),p=s(u,0),l=0;for(r=-1,e=arguments.length;r<e;r++)if(x(i=-1===r?u:arguments[r])){if(l+(o=f(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,l++)n in i&&a(p,l,i[n])}else{if(l>=9007199254740991)throw TypeError("Maximum allowed index exceeded");a(p,l++,i)}return p.length=l,p}})},68:function(t,r,n){var e=n(69),o=Array.prototype;t.exports=function(t){var r=t.slice;return t===o||t instanceof Array&&r===o.slice?e:r}},69:function(t,r,n){n(70);var e=n(26);t.exports=e("Array").slice},7:function(t,r,n){"use strict";var e=n(1),o=n(21).f,i=n(30),u=n(5),c=n(17),f=n(8),a=n(4),s=function(t){var r=function(r,n,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(r);case 2:return new t(r,n)}return new t(r,n,e)}return t.apply(this,arguments)};return r.prototype=t.prototype,r};t.exports=function(t,r){var n,p,l,v,y,d,h,x,b=t.target,m=t.global,g=t.stat,w=t.proto,S=m?e:g?e[b]:(e[b]||{}).prototype,j=m?u:u[b]||(u[b]={}),O=j.prototype;for(l in r)n=!i(m?l:b+(g?".":"#")+l,t.forced)&&S&&a(S,l),y=j[l],n&&(d=t.noTargetGet?(x=o(S,l))&&x.value:S[l]),v=n&&d?d:r[l],n&&typeof y==typeof v||(h=t.bind&&n?c(v,e):t.wrap&&n?s(v):w&&"function"==typeof v?c(Function.call,v):v,(t.sham||v&&v.sham||y&&y.sham)&&f(h,"sham",!0),j[l]=h,w&&(a(u,p=b+"Prototype")||f(u,p,{}),u[p][l]=v,t.real&&O&&!O[l]&&f(O,l,v)))}},70:function(t,r,n){"use strict";var e=n(7),o=n(3),i=n(28),u=n(40),c=n(18),f=n(10),a=n(35),s=n(6),p=n(43),l=n(36),v=p("slice"),y=l("slice",{ACCESSORS:!0,0:0,1:2}),d=s("species"),h=[].slice,x=Math.max;e({target:"Array",proto:!0,forced:!v||!y},{slice:function(t,r){var n,e,s,p=f(this),l=c(p.length),v=u(t,l),y=u(void 0===r?l:r,l);if(i(p)&&("function"!=typeof(n=p.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[d])&&(n=void 0):n=void 0,n===Array||void 0===n))return h.call(p,v,y);for(e=new(void 0===n?Array:n)(x(y-v,0)),s=0;v<y;v++,s++)v in p&&a(e,s,p[v]);return e.length=s,e}})},72:function(t,r,n){var e=n(73);t.exports=e},73:function(t,r,n){var e=n(74),o=Array.prototype;t.exports=function(t){var r=t.concat;return t===o||t instanceof Array&&r===o.concat?e:r}},74:function(t,r,n){n(61);var e=n(26);t.exports=e("Array").concat},8:function(t,r,n){var e=n(2),o=n(12),i=n(9);t.exports=e?function(t,r,n){return o.f(t,r,i(1,n))}:function(t,r,n){return t[r]=n,t}},9:function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}}});