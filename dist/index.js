!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);window.onload=function(){document.getElementsByTagName("body")[0].classList.remove("is-preloading")};var r,o,i=document.querySelector("#nav-mobile-button"),u=document.querySelector("#nav-link-wrapper");r=u,o="click",i.addEventListener(""+o,function(){var e,t;"true"===r.getAttribute("data-collapsed")?(t=(e=r).scrollHeight,e.style.height=t+"px",e.setAttribute("data-collapsed","false"),r.setAttribute("data-collapsed","false")):function(e){var t=e.scrollHeight,n=e.style.transition;requestAnimationFrame(function(){e.style.height=t+"px",e.style.transition=n,requestAnimationFrame(function(){e.style.height="0px",e.style.overflow="hidden"})}),e.setAttribute("data-collapsed","true")}(r)});var l=(new Date).getFullYear().toString();document.getElementById("copyright-date").innerHTML=l}]);