!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/yixinsong-e.github.io/build/",t(t.s=88)}([function(e,t,n){"use strict";function r(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,n,r,o){var i={};return Object.keys(r).forEach(function(e){i[e]=r[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function c(e){if(!e||!e.hasOwnProperty)return!1;for(var t=["value","initializer","get","set"],n=0,r=t.length;n<r;n++)if(e.hasOwnProperty(t[n]))return!0;return!1}function u(e,t){return c(t[t.length-1])?e.apply(void 0,a(t).concat([[]])):function(){return e.apply(void 0,a(Array.prototype.slice.call(arguments)).concat([t]))}}function l(e){return!1===e.hasOwnProperty(j)&&_(e,j,{value:new S}),e[j]}function s(e){var t={};return P(e).forEach(function(n){return t[n]=O(e,n)}),t}function f(e){return function(t){return Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:!0,value:t}),t}}function p(e,t){return e.bind?e.bind(t):function(){return e.apply(t,arguments)}}function m(e){!0!==R[e]&&(R[e]=!0,T("DEPRECATION: "+e))}t.d=u,t.c=l,n.d(t,"g",function(){return P}),t.f=s,t.e=f,t.a=p,n.d(t,"b",function(){return T}),t.h=m;var y,g,h,d,b,v,x=n(8),w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_=Object.defineProperty,O=Object.getOwnPropertyDescriptor,E=Object.getOwnPropertyNames,k=Object.getOwnPropertySymbols,S=(y=function e(){o(this,e),r(this,"debounceTimeoutIds",g,this),r(this,"throttleTimeoutIds",h,this),r(this,"throttlePreviousTimestamps",d,this),r(this,"throttleTrailingArgs",b,this),r(this,"profileLastRan",v,this)},g=i(y.prototype,"debounceTimeoutIds",[x.a],{enumerable:!0,initializer:function(){return{}}}),h=i(y.prototype,"throttleTimeoutIds",[x.a],{enumerable:!0,initializer:function(){return{}}}),d=i(y.prototype,"throttlePreviousTimestamps",[x.a],{enumerable:!0,initializer:function(){return{}}}),b=i(y.prototype,"throttleTrailingArgs",[x.a],{enumerable:!0,initializer:function(){return null}}),v=i(y.prototype,"profileLastRan",[x.a],{enumerable:!0,initializer:function(){return null}}),y),j="function"==typeof Symbol?Symbol("__core_decorators__"):"__core_decorators__",P=k?function(e){return E(e).concat(k(e))}:E,T=function(){return"object"===("undefined"==typeof console?"undefined":w(console))&&console&&"function"==typeof console.warn?p(console.warn,console):function(){}}(),R={}},function(e,t){e.exports=React},function(e,t,n){e.exports=n(39)()},function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var r=function(e,t){var n=null;return function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var a=this;clearTimeout(n),n=setTimeout(function(){e.apply(a,o)},t)}},o=function(){var e=0;return document.documentElement&&document.documentElement.scrollTop?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e},i=function(e){return"".concat(e).length>1&&/^\/[^\/]/.test("".concat(e))?"".concat(window.rootPath).concat(e):e}},function(e,t,n){"use strict";var r=(n(30),n(23),n(33),n(26),n(20));n.d(t,"a",function(){return r.a});n(32),n(24),n(29),n(28),n(21),n(34),n(22),n(27),n(8),n(35),n(25),n(31),n(19)},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";t.a={rootPath:"/yixinsong-e.github.io",port:8080,domain:"dubbo.apache.org",defaultSearch:"google",defaultLanguage:"en-us","en-us":{pageMenu:[{key:"home",text:"HOME",link:"/en-us/index.html"},{key:"faqs",text:"FAQS",link:"/en-us/docs/faq/faq.html"},{key:"blog",text:"NEWS",link:"/en-us/blog/index.html"}],disclaimer:{title:"Disclaimer",content:"the disclaimer content"},documentation:{title:"Documentation",list:[{text:"Overview",link:"/en-us/docs/demo1.html"},{text:"Quick start",link:"/en-us/docs/demo2.html"},{text:"Developer guide",link:"/en-us/docs/dir/demo3.html"}]},resources:{title:"Resources",list:[{text:"Blog",link:"/en-us/blog/index.html"},{text:"Community",link:"/en-us/community/index.html"}]},copyright:"Copyright © 2018 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},"zh-cn":{pageMenu:[{key:"home",text:"首页",link:"/zh-cn/index.html"},{key:"docs",text:"文档",link:"/zh-cn/docs/demo1.html"},{key:"blog",text:"博客",link:"/zh-cn/blog/index.html"},{key:"community",text:"社区",link:"/zh-cn/community/index.html"}],disclaimer:{title:"免责声明",content:"免责声明的具体内容"},documentation:{title:"文档",list:[{text:"概览",link:"/zh-cn/docs/demo1.html"},{text:"快速开始",link:"/zh-cn/docs/demo2.html"},{text:"开发者指南",link:"/zh-cn/docs/dir/demo3.html"}]},resources:{title:"资源",list:[{text:"博客",link:"/zh-cn/blog/index.html"},{text:"社区",link:"/zh-cn/community/index.html"}]},copyright:"Copyright © 2018 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}}},function(e,t,n){var r,o;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var a=n.apply(null,r);a&&e.push(a)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var c in r)i.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}var i={}.hasOwnProperty;void 0!==e&&e.exports?(n.default=n,e.exports=n):(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},function(e,t,n){"use strict";function r(e,t,r){var o=r.configurable,c=r.enumerable,u=r.initializer,l=r.value;return{configurable:o,enumerable:c,get:function(){if(this!==e){var n=u?u.call(this):l;return a(this,t,{configurable:o,enumerable:c,writable:!0,value:n}),n}},set:n.i(i.e)(t)}}function o(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return n.i(i.d)(r,t)}t.a=o;var i=n(0),a=Object.defineProperty},function(e,t,n){"use strict";function r(e){"@babel/helpers - typeof";return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=p();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=n(1),g=n.n(y),h=n(2),d=n.n(h),b=n(6),v=n(3),x=n(36),w=(n.n(x),{logo:d.a.string.isRequired,language:d.a.oneOf(["zh-cn","en-us"])}),_=function(e){function t(){return o(this,t),r.apply(this,arguments)}c(t,e);var r=l(t);return a(t,[{key:"render",value:function(){var e=this.props,t=e.logo,r=e.language,o=b.a[r];return g.a.createElement("footer",{className:"footer-container"},g.a.createElement("div",{className:"footer-body"},g.a.createElement("img",{src:n.i(v.b)(t)}),g.a.createElement("div",{className:"cols-container"},g.a.createElement("div",{className:"col col-12"},g.a.createElement("h3",null,o.disclaimer.title),g.a.createElement("p",null,o.disclaimer.content)),g.a.createElement("div",{className:"col col-6"},g.a.createElement("dl",null,g.a.createElement("dt",null,o.documentation.title),o.documentation.list.map(function(e,t){return g.a.createElement("dd",{key:t},g.a.createElement("a",{href:n.i(v.b)(e.link),target:e.target||"_self"},e.text))}))),g.a.createElement("div",{className:"col col-6"},g.a.createElement("dl",null,g.a.createElement("dt",null,o.resources.title),o.resources.list.map(function(e,t){return g.a.createElement("dd",{key:t},g.a.createElement("a",{href:n.i(v.b)(e.link),target:e.target||"_self"},e.text))})))),g.a.createElement("div",{className:"copyright"},g.a.createElement("span",null,o.copyright))))}}]),t}(g.a.Component);_.propTypes=w,t.a=_},function(e,t,n){"use strict";function r(e){"@babel/helpers - typeof";return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=m();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g,h=n(1),d=n.n(h),b=n(2),v=n.n(b),x=n(7),w=n.n(x),_=n(4),O=n(6),E=n(3),k=n(37),S=(n.n(k),[{text:"中",value:"en-us"},{text:"En",value:"zh-cn"}]),j={baidu:{logo:"https://img.alicdn.com/tfs/TB1n6DQayLaK1RjSZFxXXamPFXa-300-300.png",url:"https://www.baidu.com/s?wd="},google:{logo:"https://img.alicdn.com/tfs/TB1REfuaCzqK1RjSZFjXXblCFXa-300-300.jpg",url:"https://www.google.com/search?q="}},P=function(){},T={currentKey:v.a.string,logo:v.a.string.isRequired,type:v.a.oneOf(["primary","normal"]),language:v.a.oneOf(["en-us","zh-cn"]),onLanguageChange:v.a.func},R={type:"primary",language:"en-us",onLanguageChange:P},C=n.i(_.a)(g=function(e){function t(e){var n;return i(this,t),n=r.call(this,e),n.state={menuBodyVisible:!1,language:e.language,search:O.a.defaultSearch,searchValue:"",inputVisible:!1},n}u(t,e);var r=s(t);return c(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({language:e.language})}},{key:"toggleMenu",value:function(){this.setState({menuBodyVisible:!this.state.menuBodyVisible})}},{key:"switchLang",value:function(){var e;e="zh-cn"===this.state.language?"en-us":"zh-cn",this.setState({language:e}),this.props.onLanguageChange(e)}},{key:"switchSearch",value:function(){var e;e="baidu"===this.state.search?"google":"baidu",this.setState({search:e})}},{key:"toggleSearch",value:function(){this.setState({searchVisible:!this.state.searchVisible})}},{key:"onInputChange",value:function(e){this.setState({searchValue:e.target.value})}},{key:"goSearch",value:function(){var e=this.state,t=e.search,n=e.searchValue;window.open("".concat(j[t].url).concat(window.encodeURIComponent("".concat(n," site:").concat(O.a.domain))))}},{key:"onKeyDown",value:function(e){13===e.keyCode&&this.goSearch()}},{key:"render",value:function(){var e=this.props,t=e.type,r=e.logo,i=e.onLanguageChange,a=e.currentKey,c=this.state,u=c.menuBodyVisible,l=c.language,s=c.search,f=c.searchVisible;return d.a.createElement("header",{className:w()(o({"header-container":!0},"header-container-".concat(t),!0))},d.a.createElement("div",{className:"header-body"},d.a.createElement("a",{href:n.i(E.b)("/".concat(l,"/index.html"))},d.a.createElement("img",{className:"logo",alt:O.a.name,title:O.a.name,src:n.i(E.b)(r)})),O.a.defaultSearch?d.a.createElement("div",{className:w()(o({search:!0},"search-".concat(t),!0))},d.a.createElement("span",{className:"icon-search",onClick:this.toggleSearch}),f?d.a.createElement("div",{className:"search-input"},d.a.createElement("img",{src:j[s].logo,onClick:this.switchSearch}),d.a.createElement("input",{autoFocus:!0,onChange:this.onInputChange,onKeyDown:this.onKeyDown})):null):null,i!==P?d.a.createElement("span",{className:w()(o({"language-switch":!0},"language-switch-".concat(t),!0)),onClick:this.switchLang},S.find(function(e){return e.value===l}).text):null,d.a.createElement("div",{className:w()({"header-menu":!0,"header-menu-open":u})},d.a.createElement("img",{className:"header-menu-toggle",onClick:this.toggleMenu,src:"primary"===t?n.i(E.b)("/img/system/menu_white.png"):n.i(E.b)("/img/system/menu_gray.png")}),d.a.createElement("ul",null,O.a[l].pageMenu.map(function(e){var r;return d.a.createElement("li",{className:w()((r={"menu-item":!0},o(r,"menu-item-".concat(t),!0),o(r,"menu-item-".concat(t,"-active"),a===e.key),r)),key:e.key},d.a.createElement("a",{href:n.i(E.b)(e.link),target:e.target||"_self"},e.text))})))))}}]),t}(d.a.Component))||g;C.propTypes=T,C.defaultProps=R,t.a=C},function(e,t,n){"use strict";function r(e){"@babel/helpers - typeof";return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=p();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y,g=n(1),h=n.n(g),d=n(4),b=n(38),v=n.n(b),x=n(6),w=n.i(d.a)(y=function(e){function t(){return o(this,t),n.apply(this,arguments)}c(t,e);var n=l(t);return a(t,[{key:"onLanguageChange",value:function(e){var t,n=window.location.pathname;t="zh-cn"===e?"en-us":"zh-cn";var r=n.replace("".concat(window.rootPath,"/").concat(t),"".concat(window.rootPath,"/").concat(e));v.a.set("docsite_language",e,{expires:365}),window.location=r}},{key:"getLanguage",value:function(){var e=window.location.pathname.replace(window.rootPath||"","").split("/")[1],t=this.props.lang||e||v.a.get("docsite_language")||x.a.defaultLanguage;return"en-us"!==t&&"zh-cn"!==t&&(t=x.a.defaultLanguage),t!==v.a.get("docsite_language")&&v.a.set("docsite_language",t,{expires:365}),t}}]),t}(h.a.Component))||y;t.a=w},,,,,,,,function(e,t,n){"use strict";Object.defineProperty,Object.getOwnPropertyDescriptor},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if("undefined"==typeof WeakMap)throw new Error("Using @autobind on "+t.name+"() requires WeakMap support due to its use of super."+t.name+"()\n      See https://github.com/jayphelps/core-decorators.js/issues/20");p||(p=new WeakMap),!1===p.has(e)&&p.set(e,new WeakMap);var r=p.get(e);return!1===r.has(t)&&r.set(t,n.i(l.a)(t,e)),r.get(t)}function i(e){for(var t=n.i(l.f)(e.prototype),r=n.i(l.g)(t),o=0,i=r.length;o<i;o++){var c=r[o],u=t[c];"function"==typeof u.value&&"constructor"!==c&&s(e.prototype,c,a(e.prototype,c,u))}}function a(e,t,r){var i=r.value,a=r.configurable,c=r.enumerable;if("function"!=typeof i)throw new SyntaxError("@autobind can only be used on functions, not: "+i);var u=e.constructor;return{configurable:a,enumerable:c,get:function(){if(this===e)return i;if(this.constructor!==u&&f(this).constructor===u)return i;if(this.constructor!==u&&t in this.constructor.prototype)return o(this,i);var r=n.i(l.a)(i,this);return s(this,t,{configurable:!0,writable:!0,enumerable:!1,value:r}),r},set:n.i(l.e)(t)}}function c(e){return 1===e.length?i.apply(void 0,r(e)):a.apply(void 0,r(e))}function u(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(){return c(arguments)}:c(t)}t.a=u;var l=n(0),s=Object.defineProperty,f=Object.getPrototypeOf,p=void 0},function(e,t,n){"use strict";n(0),Object.assign,function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}}()},function(e,t,n){"use strict";n(0),Object.defineProperty},function(e,t,n){"use strict";n(0),Object.assign,function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}}()},function(e,t,n){"use strict";n(0)},function(e,t,n){"use strict";n(0),Object.assign,Object.getPrototypeOf,Object.getOwnPropertyDescriptor},function(e,t,n){"use strict";n(0),Object.assign},function(e,t,n){"use strict";n(0),"function"==typeof Symbol&&Symbol.iterator,Object.defineProperty,Object.getPrototypeOf},function(e,t,n){"use strict";n(0)},function(e,t,n){"use strict";n(0)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=(n(0),"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=/^function ([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?(\([^\)]*\))[\s\S]+$/;!function(){function e(t,n,o,i){r(this,e),this.parentKlass=t,this.childKlass=n,this.parentDescriptor=o,this.childDescriptor=i}i(e,[{key:"_getTopic",value:function(e){return void 0===e?null:"value"in e?e.value:"get"in e?e.get:"set"in e?e.set:void 0}},{key:"_extractTopicSignature",value:function(e){switch(void 0===e?"undefined":o(e)){case"function":return this._extractFunctionSignature(e);default:return this.key}}},{key:"_extractFunctionSignature",value:function(e){var t=this;return e.toString().replace(a,function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.key)+arguments[2]})}},{key:"key",get:function(){return this.childDescriptor.key}},{key:"parentNotation",get:function(){return this.parentKlass.constructor.name+"#"+this.parentPropertySignature}},{key:"childNotation",get:function(){return this.childKlass.constructor.name+"#"+this.childPropertySignature}},{key:"parentTopic",get:function(){return this._getTopic(this.parentDescriptor)}},{key:"childTopic",get:function(){return this._getTopic(this.childDescriptor)}},{key:"parentPropertySignature",get:function(){return this._extractTopicSignature(this.parentTopic)}},{key:"childPropertySignature",get:function(){return this._extractTopicSignature(this.childTopic)}}]),i(e,[{key:"assert",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";!0!==e&&this.error("{child} does not properly override {parent}"+t)}},{key:"error",value:function(e){var t=this;throw e=e.replace("{parent}",function(e){return t.parentNotation}).replace("{child}",function(e){return t.childNotation}),new SyntaxError(e)}}])}()},function(e,t,n){"use strict";function r(e,t,r,l){var s=c(l,3),f=s[0],p=void 0===f?null:f,m=s[1],y=void 0!==m&&m,g=s[2],h=void 0===g?u:g;if(!o.__enabled)return o.__warned||(h.warn("console.profile is not supported. All @profile decorators are disabled."),o.__warned=!0),r;var d=r.value;if(null===p&&(p=e.constructor.name+"."+t),"function"!=typeof d)throw new SyntaxError("@profile can only be used on functions, not: "+d);return a({},r,{value:function(){var e=Date.now(),t=n.i(i.c)(this);(!0===y&&!t.profileLastRan||!1===y||"number"==typeof y&&e-t.profileLastRan>y||"function"==typeof y&&y.apply(this,arguments))&&(h.profile(p),t.profileLastRan=e);try{return d.apply(this,arguments)}finally{h.profileEnd(p)}}})}function o(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return n.i(i.d)(r,t)}var i=n(0),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=(console,{profile:console.profile?n.i(i.a)(console.profile,console):function(){},profileEnd:console.profileEnd?n.i(i.a)(console.profileEnd,console):function(){},warn:i.b});o.__enabled=!!console.profile,o.__warned=!1},function(e,t,n){"use strict";n(0)},function(e,t,n){"use strict";n(0),Object.assign,"function"==typeof Symbol&&Symbol.iterator},function(e,t,n){"use strict";n(0),Object.assign,function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}}()},function(e,t,n){"use strict";var r=(n(0),Object.assign,function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}}(),{});console.time&&console.time.bind(console),console.timeEnd&&console.timeEnd.bind(console)},function(e,t){},function(e,t){},function(e,t,n){var r,o;!function(i){var a;if(r=i,void 0!==(o="function"==typeof r?r.call(t,n,t,e):r)&&(e.exports=o),a=!0,e.exports=i(),a=!0,!a){var c=window.Cookies,u=window.Cookies=i();u.noConflict=function(){return window.Cookies=c,u}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function n(r){function o(){}function i(t,n,i){if("undefined"!=typeof document){i=e({path:"/"},o.defaults,i),"number"==typeof i.expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n+c}}function a(e,n){if("undefined"!=typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var c=i[a].split("="),u=c.slice(1).join("=");n||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var l=t(c[0]);if(u=(r.read||r)(u,l)||t(u),n)try{u=JSON.parse(u)}catch(e){}if(o[l]=u,e===l)break}catch(e){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return a(e,!1)},o.getJSON=function(e){return a(e,!0)},o.remove=function(t,n){i(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}return n(function(){})})},function(e,t,n){"use strict";function r(){}function o(){}var i=n(40);o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,a){if(a!==i){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var r=n(1),o=n.n(r);t.a={"zh-cn":{brand:{brandName:"开源产品品牌名称",briefIntroduction:"关于开源产品的简单介绍",buttons:[{text:"立即开始",link:"/zh-cn/docs/demo1.html",type:"primary"},{text:"查看Github",link:"",type:"normal"},{text:"text",link:"",type:"normal"}]},introduction:{title:"开源产品的介绍",desc:"开源产品的简单介绍，提供一些该产品的优点、特性描述等",img:"/img/architecture.png"},features:{title:"特性一览",list:[{img:"/img/feature_transpart.png",title:"特性1",content:"特性1的简单概括"},{img:"/img/feature_loadbalances.png",title:"特性2",content:"特性2的简单概括"},{img:"/img/feature_service.png",title:"特性3",content:"特性3的简单概括"},{img:"/img/feature_hogh.png",title:"特性4",content:"特性4的简单概括"},{img:"/img/feature_runtime.png",title:"特性5",content:"特性5的简单概括"},{img:"/img/feature_maintenance.png",title:"特性6",content:"特性6的简单概括"}]},start:{title:"快速开始",desc:"简单描述",img:"/img/quick_start.png",button:{text:"阅读更多",link:"/zh-cn/docs/demo1.html"}},users:{title:"用户",desc:o.a.createElement("span",null,"简单描述"),list:["/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png"]}},"en-us":{brand:{brandName:"DuVisor",briefIntroduction:"A user-level hypervisor through delegated virtualization on RISC-V",buttons:[{text:"What is DuVisor?",link:"/en-us/docs/Documentation/motivation.html",type:"primary"},{text:"Who are we?",link:"/en-us/docs/developers/developers_dev.html",type:"normal"}],buttons2:[{text:"Why DuVisor?",link:"/en-us/docs/developers/developers_dev.html",type:"n"}]},introduction:{title:"DuVisor",desc:"A User-Level Hypervisor Through HU-Extension on RISC-V ",img:"/img/cover.jpeg"},features:{title:"Why DuVisor",list:[{img:"/img/feature_transpart.png",title:"High Security",content:"A deprivileged hypervisor eliminates the kernel’s attack surface introduced by virtualization. The one-to-one service model further enhances the isolation between VMs and the fault tolerance of the entire system."},{img:"/img/feature_loadbalances.png",title:"Near-native Performance",content:"Getting rid of redundant mode switching completely unleash the potential performance of virtualization. The integrated design further enhances the cooperation between modules to make the code more efficient."},{img:"/img/feature_service.png",title:"Agile Development",content:"Benefit from the thriving software environment in user space, DuVisor is no longer restricted by the kernel development environment and can freely choose the programming language and existing libraries. The project currently uses Rust to ensure security and takes advantage of the powerful testing framework it provides to improve the quality of the project."},{img:"/img/feature_hogh.png",title:"Flexible Operations and Maintenance",content:"DuVisor can be upgraded without rebooting the host system. New features and functionalities can be deployed more quickly. Cloud services will have better fault tolerance benefiting from DuVisor's strong isolation."}]},start:{title:"Quick start",desc:"some description text",img:"/img/quick_start.png",button:{text:"READ MORE",link:"/en-us/docs/demo1.html"}},users:{title:"users",desc:o.a.createElement("span",null,"some description"),list:["/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png","/img/users_alibaba.png"]}}}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n(1),i=n.n(o),a=n(2),c=n.n(a),u=n(7),l=n.n(u),s=n(3),f=n(89),p=(n.n(f),{type:c.a.oneOf(["primary","normal","n"]),link:c.a.string,target:c.a.string}),m={type:"primary",link:"",target:"_self"},y=function(e){return i.a.createElement("a",{className:l()(r({button:!0},"button-".concat("normal"),!0)),target:e.target||"_self",href:n.i(s.b)(e.link)},e.children)};y.propTypes=p,y.defaultProps=m,t.a=y},,,,,,,,function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=(n(3),function(e){var t=e.feature;return o.a.createElement("li",null,o.a.createElement("div",null,o.a.createElement("h4",null,t.title),o.a.createElement("p",null,t.content)))});t.a=i},,,,,,,function(e,t){},,,,,,,function(e,t,n){"use strict";function r(e){"@babel/helpers - typeof";return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=p();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(t,"__esModule",{value:!0});var y=n(1),g=n.n(y),h=n(5),d=n.n(h),b=n(3),v=n(10),x=n(66),w=n(9),_=n(11),O=n(74),E=n(65),k=n(81),S=(n.n(k),function(e){function t(e){var n;return o(this,t),n=r.call(this,e),n.state={headerType:"primary"},n}c(t,e);var r=l(t);return a(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(){n.i(b.a)()>66?e.setState({headerType:"normal"}):e.setState({headerType:"primary"})})}},{key:"render",value:function(){var e=this.getLanguage(),t=E.a[e],r=this.state.headerType;return g.a.createElement("div",{className:"home-page"},g.a.createElement("section",{className:"top-section"},g.a.createElement(v.a,{currentKey:"home",type:r,logo:"/img/IPADS-Logo-Blue.png",language:e,onLanguageChange:this.onLanguageChange}),g.a.createElement("div",{className:"vertical-middle"},g.a.createElement("div",{className:"product-name"},g.a.createElement("h2",null,t.brand.brandName)),g.a.createElement("p",{className:"product-desc"},t.brand.briefIntroduction),g.a.createElement("div",{className:"button-area"},t.brand.buttons.map(function(e){return g.a.createElement(x.a,{type:e.type,key:e.type,link:e.link,target:e.target},e.text)})),g.a.createElement("div",{className:"button-area2"})),g.a.createElement("div",{className:"animation animation1"}),g.a.createElement("div",{className:"animation animation2"}),g.a.createElement("div",{className:"animation animation3"}),g.a.createElement("div",{className:"animation animation4"}),g.a.createElement("div",{className:"animation animation5"})),g.a.createElement("section",{className:"introduction-section"},g.a.createElement("div",{className:"introduction-body"},g.a.createElement("div",{className:"introduction"},g.a.createElement("h3",null,t.introduction.title),g.a.createElement("p",null,t.introduction.desc)),g.a.createElement("img",{src:n.i(b.b)(t.introduction.img)}))),g.a.createElement("section",{className:"feature-section"},g.a.createElement("h3",null,t.features.title),g.a.createElement("ul",null,t.features.list.map(function(e,t){return g.a.createElement(O.a,{feature:e,key:t})}))),g.a.createElement(w.a,{logo:"/img/IPADS-Logo-Blue.png",language:e}))}}]),t}(_.a));document.getElementById("root")&&d.a.render(g.a.createElement(S,null),document.getElementById("root")),t.default=S},function(e,t){}]);