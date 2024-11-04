(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,n(r.key),r)}}function n(t){var n=function(t){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:n+""}var o=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.modalSections=document.querySelectorAll(".services__tabs__textbox__list-item"),this.events()},(n=[{key:"events",value:function(){this.modalSections.forEach((function(e){e.addEventListener("click",(function(){return e.classList.toggle("services__tabs__textbox__list-item--revealed")}))}))}}])&&t(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,u(o.key),o)}}function u(e){var t=function(e){if("object"!=r(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:t+""}var c=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menu=document.querySelector(".menu"),this.menuOpener=document.querySelector("#menu-opener"),this.menuCloser=document.querySelector("#menu-closer"),this.events()},(t=[{key:"events",value:function(){var e=this;this.menuOpener.addEventListener("click",(function(){return e.openMenu()})),this.menuCloser.addEventListener("click",(function(){return e.closeMenu()}))}},{key:"openMenu",value:function(){console.log("Menu opened."),this.menu.classList.add("menu--opened")}},{key:"closeMenu",value:function(){console.log("Menu closed."),this.menu.classList.remove("menu--opened")}}])&&i(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,s(o.key),o)}}function s(e){var t=function(e){if("object"!=l(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}var f=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.page=window.location.pathname,"/"!==this.page&&"/index.html"!==this.page||(this.header=document.querySelector("header"),this.logo=document.querySelector(".header__logo"),this.initEvents())},(t=[{key:"initEvents",value:function(){var e=this;console.log("This page is: "+this.page),window.addEventListener("scroll",(function(){console.log(window.scrollY),window.scrollY>50&&(e.header.classList.add("header--scrolled"),e.logo.classList.add("header__logo--cleared"))}))}}])&&a(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();new o,new c,new f})();