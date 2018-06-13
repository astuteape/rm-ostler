/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/sass-loader/lib/loader.js??ref--5-3!./styles/index.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/postcss-loader/lib!../node_modules/sass-loader/lib/loader.js??ref--5-3!./styles/index.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* === END COLOR RULES === */\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 18px;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  background-color: #fff; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\na:link {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  color: #000; }\n\na:visited {\n  color: #000; }\n\na:hover {\n  color: #fff;\n  text-decoration: none; }\n\na:active {\n  color: #000; }\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  vertical-align: baseline; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nfieldset {\n  border: 1px solid #000;\n  margin: 2px;\n  padding: 1px; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\nimg {\n  margin: 0;\n  padding: 0;\n  max-width: 100%;\n  height: auto;\n  border: none; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace;\n  font-size: 16px; }\n\ndfn,\nem {\n  font-style: italic; }\n\nmark {\n  background-color: #ffff00;\n  color: #000; }\n\np {\n  margin: 0;\n  padding: 1em 0;\n  font-size: 18px;\n  text-indent: 1em; }\n\nsvg {\n  fill: #000; }\n  svg:hover {\n    fill: #fff; }\n\nbody {\n  font-size: 18px;\n  font-family: \"Pavanam\", sans-serif; }\n  body h1 {\n    font: 3em \"Kaushan Script\", cursive; }\n  body h2 {\n    font: 2.4em \"Kaushan Script\", cursive; }\n  body h3 {\n    font: 1.92em \"Kaushan Script\", cursive; }\n  body h4 {\n    font: 1.536em \"Kaushan Script\", cursive; }\n  body h5 {\n    font: 1.2288em \"Kaushan Script\", cursive; }\n  body h6 {\n    font: 0.98304em \"Kaushan Script\", cursive; }\n\n.main-content {\n  max-width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n  margin: 0 auto;\n  padding-bottom: 75px; }\n  .main-content::after {\n    clear: both;\n    content: \"\";\n    display: block; }\n  @media screen and (min-width: 768px) {\n    .main-content {\n      max-width: 768px; }\n      .main-content::after {\n        clear: both;\n        content: \"\";\n        display: block; } }\n  @media screen and (min-width: 1024px) {\n    .main-content {\n      max-width: 1200px; }\n      .main-content::after {\n        clear: both;\n        content: \"\";\n        display: block; } }\n\n.main-content-wrapper {\n  height: 100%; }\n\nfooter {\n  height: 50px;\n  margin-top: -50px;\n  overflow: hidden;\n  background: #000;\n  font-family: \"Kaushan Script\", cursive;\n  text-align: center; }\n\n.footer-content-wrapper {\n  padding: 0.5em 0; }\n\n/* === MODULES IN HEADER SECTION === */\n/* === NAVBAR === */\n.navbar-top {\n  overflow: hidden;\n  border-bottom: none;\n  font-family: \"Kaushan Script\", cursive; }\n  @media screen and (min-width: 1024px) {\n    .navbar-top {\n      border-bottom: 1px solid rgba(120, 120, 120, 0.66); } }\n\n.nav-mobile-menu {\n  display: block;\n  width: 100%;\n  height: 2em;\n  padding: 0.5em;\n  border-bottom: none !important;\n  background: #000;\n  color: #fff;\n  text-align: left;\n  font-size: 1.33rem; }\n  @media screen and (min-width: 1024px) {\n    .nav-mobile-menu {\n      display: none; } }\n\n.nav-link-wrapper {\n  display: none;\n  border-bottom: 1px solid rgba(120, 120, 120, 0.66); }\n  @media screen and (min-width: 1024px) {\n    .nav-link-wrapper {\n      display: block;\n      border-bottom: none; } }\n\n.navbar-pages {\n  width: 100%;\n  padding: 0; }\n  @media screen and (min-width: 1024px) {\n    .navbar-pages {\n      float: left;\n      width: auto;\n      padding-left: 5em; } }\n\n.navbar-pages li {\n  position: relative;\n  float: left;\n  width: 100%;\n  padding: 0.5em;\n  border-bottom: 1px solid rgba(120, 120, 120, 0.66);\n  text-align: left; }\n  .navbar-pages li a {\n    color: #000; }\n  .navbar-pages li a:hover {\n    color: #737373; }\n  .navbar-pages li a:active {\n    color: #737373; }\n  @media screen and (min-width: 1024px) {\n    .navbar-pages li {\n      width: auto;\n      padding: 0.75em 1.5em;\n      border-bottom: none; } }\n\n.navbar-social {\n  float: left;\n  width: 100%;\n  border-bottom: 1px solid rgba(120, 120, 120, 0.66); }\n  @media screen and (min-width: 1024px) {\n    .navbar-social {\n      float: right;\n      width: auto;\n      border-bottom: none; } }\n\n.navbar-social li {\n  display: block;\n  float: left;\n  position: relative;\n  padding: 1em;\n  max-width: 24px;\n  max-height: 24px; }\n  .navbar-social li a > svg {\n    fill: #000; }\n  .navbar-social li.linkedin:hover {\n    background: #0077b5; }\n    .navbar-social li.linkedin:hover svg {\n      fill: #fff; }\n  .navbar-social li.twitter:hover {\n    background: #1da1f2; }\n    .navbar-social li.twitter:hover svg {\n      fill: #fff; }\n  .navbar-social li.goodreads:hover {\n    background: #624234; }\n    .navbar-social li.goodreads:hover svg {\n      fill: #fff; }\n  @media screen and (min-width: 1024px) {\n    .navbar-social li {\n      float: left;\n      border-left: 1px solid rgba(120, 120, 120, 0.66); } }\n\n/* === END NAV STYLES === */\n.page-title {\n  margin-bottom: 0;\n  padding: 0.5rem;\n  text-align: center; }\n\n.subtitle {\n  max-width: 768px;\n  text-align: center;\n  margin: 0 auto 1rem auto; }\n  @media screen and (min-width: 1024px) {\n    .subtitle {\n      max-width: 1024px; } }\n\n/* === END HEADER MODULES === */\n/* === MAIN CONTENT MODULES === */\n/* === BOOKS AND CLIPS PAGES USE COLLECTION LAYOUT === */\n.collection-item-wrapper {\n  width: calc(100% - 2rem);\n  float: left;\n  margin-left: 1rem;\n  box-sizing: border-box;\n  margin-top: 1.5rem;\n  padding: 1rem;\n  border-radius: 5px;\n  transition: all 750ms ease-in-out; }\n  @media screen and (min-width: 768px) {\n    .collection-item-wrapper {\n      width: calc(50% - 1.5rem);\n      float: left;\n      margin-left: 1rem; }\n      .collection-item-wrapper:nth-child(2n + 1) {\n        clear: left; }\n      .collection-item-wrapper:nth-child(2n + 1):last-child {\n        margin-left: calc(25% - 1.25rem + 2rem); }\n      .collection-item-wrapper:hover.splendiferous {\n        background-color: #bbdee3; }\n        .collection-item-wrapper:hover.splendiferous a {\n          color: white; }\n          .collection-item-wrapper:hover.splendiferous a:hover {\n            color: #fff; }\n        .collection-item-wrapper:hover.splendiferous svg {\n          fill: white; }\n          .collection-item-wrapper:hover.splendiferous svg:hover {\n            fill: #fff; }\n      .collection-item-wrapper:hover.founding {\n        background-color: #f09d69; }\n        .collection-item-wrapper:hover.founding a {\n          color: #f9dac6; }\n          .collection-item-wrapper:hover.founding a:hover {\n            color: #fff; }\n        .collection-item-wrapper:hover.founding svg {\n          fill: #f9dac6; }\n          .collection-item-wrapper:hover.founding svg:hover {\n            fill: #fff; }\n      .collection-item-wrapper:hover.slinging {\n        background-color: #906d99; }\n        .collection-item-wrapper:hover.slinging a {\n          color: #bea9c3; }\n          .collection-item-wrapper:hover.slinging a:hover {\n            color: #fff; }\n        .collection-item-wrapper:hover.slinging svg {\n          fill: #bea9c3; }\n          .collection-item-wrapper:hover.slinging svg:hover {\n            fill: #fff; }\n      .collection-item-wrapper:hover.turkey {\n        background-color: #6680bb; }\n        .collection-item-wrapper:hover.turkey a {\n          color: #adbbda; }\n          .collection-item-wrapper:hover.turkey a:hover {\n            color: #fff; }\n        .collection-item-wrapper:hover.turkey svg {\n          fill: #adbbda; }\n          .collection-item-wrapper:hover.turkey svg:hover {\n            fill: #fff; }\n      .collection-item-wrapper:hover.dewdroppers {\n        background-color: #f8a5ad; }\n        .collection-item-wrapper:hover.dewdroppers a {\n          color: white; }\n          .collection-item-wrapper:hover.dewdroppers a:hover {\n            color: #fff; }\n        .collection-item-wrapper:hover.dewdroppers svg {\n          fill: white; }\n          .collection-item-wrapper:hover.dewdroppers svg:hover {\n            fill: #fff; } }\n  @media screen and (min-width: 1024px) {\n    .collection-item-wrapper {\n      width: calc(33.33333% - 1.66667rem);\n      float: left;\n      margin-left: 1.25rem; }\n      .collection-item-wrapper:nth-child(2n + 1) {\n        clear: none; }\n      .collection-item-wrapper:nth-child(2n + 1):last-child {\n        margin-left: calc(0% - 1.25rem + 2.5rem); }\n      .collection-item-wrapper:nth-child(3n + 1) {\n        clear: left; }\n      .collection-item-wrapper:nth-child(3n + 1):nth-last-child(2) {\n        margin-left: calc(16.66667% - 1.45833rem + 2.5rem); }\n      .collection-item-wrapper:nth-child(3n + 1):last-child {\n        margin-left: calc(33.33333% - 1.66667rem + 2.5rem); } }\n\n.collection-item img {\n  display: block;\n  box-sizing: border-box;\n  min-width: 200px;\n  margin: 0 auto 1rem auto;\n  border: double #000;\n  box-shadow: 0.33rem 0.33rem 0 rgba(0, 0, 0, 0.66); }\n\n.collection-item-text-wrapper {\n  padding: 0 1rem; }\n\n.collection-item button {\n  display: block;\n  width: 50%;\n  min-height: 2rem;\n  margin: 0 auto;\n  background: #fff;\n  border: double #000;\n  border-radius: 3px;\n  text-align: center;\n  cursor: pointer; }\n\n/* === HOME, ABOUT, AND BOOK DETAIL PAGES USE FEATURE LAYOUT === */\n.feature-image-wrapper {\n  position: relative;\n  width: calc(100% - 2rem);\n  float: left;\n  margin-left: 1rem;\n  margin-bottom: -8.33rem;\n  text-align: center; }\n  @media screen and (min-width: 768px) {\n    .feature-image-wrapper {\n      width: calc(100% - 2rem);\n      float: left;\n      margin-left: 1rem; } }\n  @media screen and (min-width: 1024px) {\n    .feature-image-wrapper {\n      width: calc(25% - 1.5625rem);\n      float: left;\n      margin-left: 1.25rem;\n      left: calc(6.25% - 1.32812rem + 1.25rem);\n      position: relative;\n      z-index: 1;\n      margin-bottom: 0;\n      margin-top: 3rem; } }\n\n.feature-image {\n  width: 200px;\n  background: #fff;\n  border: double #000;\n  box-shadow: 0.33rem 0.33rem 0 rgba(0, 0, 0, 0.66); }\n  @media screen and (min-width: 1024px) {\n    .feature-image {\n      min-width: 270px;\n      height: auto; } }\n\n.feature-text-wrapper {\n  width: calc(100% - 2rem);\n  float: left;\n  margin-left: 1rem;\n  box-sizing: border-box;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-radius: 7px; }\n  @media screen and (min-width: 768px) {\n    .feature-text-wrapper {\n      width: calc(83.33333% - 1.83333rem);\n      float: left;\n      margin-left: 1rem;\n      margin-left: calc(8.33333% - 1.08333rem + 2rem); } }\n  @media screen and (min-width: 1024px) {\n    .feature-text-wrapper {\n      width: calc(75% - 2.1875rem);\n      float: left;\n      margin-left: 1.25rem;\n      left: calc(-6.25% - 1.17188rem + 1.25rem);\n      position: relative; } }\n  .feature-text-wrapper.about {\n    background-color: #f58684; }\n    .feature-text-wrapper.about a {\n      color: #fde3e2; }\n      .feature-text-wrapper.about a:hover {\n        color: #fff; }\n    .feature-text-wrapper.about svg {\n      fill: #fde3e2; }\n      .feature-text-wrapper.about svg:hover {\n        fill: #fff; }\n  .feature-text-wrapper.splendiferous {\n    background-color: #bbdee3; }\n    .feature-text-wrapper.splendiferous a {\n      color: white; }\n      .feature-text-wrapper.splendiferous a:hover {\n        color: #fff; }\n    .feature-text-wrapper.splendiferous svg {\n      fill: white; }\n      .feature-text-wrapper.splendiferous svg:hover {\n        fill: #fff; }\n  .feature-text-wrapper.founding {\n    background-color: #f09d69; }\n    .feature-text-wrapper.founding a {\n      color: #f9dac6; }\n      .feature-text-wrapper.founding a:hover {\n        color: #fff; }\n    .feature-text-wrapper.founding svg {\n      fill: #f9dac6; }\n      .feature-text-wrapper.founding svg:hover {\n        fill: #fff; }\n  .feature-text-wrapper.slinging {\n    background-color: #906d99; }\n    .feature-text-wrapper.slinging a {\n      color: #bea9c3; }\n      .feature-text-wrapper.slinging a:hover {\n        color: #fff; }\n    .feature-text-wrapper.slinging svg {\n      fill: #bea9c3; }\n      .feature-text-wrapper.slinging svg:hover {\n        fill: #fff; }\n  .feature-text-wrapper.turkey {\n    background-color: #6680bb; }\n    .feature-text-wrapper.turkey a {\n      color: #adbbda; }\n      .feature-text-wrapper.turkey a:hover {\n        color: #fff; }\n    .feature-text-wrapper.turkey svg {\n      fill: #adbbda; }\n      .feature-text-wrapper.turkey svg:hover {\n        fill: #fff; }\n  .feature-text-wrapper.dewdroppers {\n    background-color: #f8a5ad; }\n    .feature-text-wrapper.dewdroppers a {\n      color: white; }\n      .feature-text-wrapper.dewdroppers a:hover {\n        color: #fff; }\n    .feature-text-wrapper.dewdroppers svg {\n      fill: white; }\n      .feature-text-wrapper.dewdroppers svg:hover {\n        fill: #fff; }\n\n.feature-text {\n  width: calc(75% - 1.75rem);\n  float: left;\n  margin-left: 1rem;\n  margin-left: calc(12.5% - 1.125rem + 2rem);\n  margin-top: 6.33rem; }\n  @media screen and (min-width: 768px) {\n    .feature-text {\n      width: calc(80% - 1.8rem);\n      float: left;\n      margin-left: 1rem;\n      margin-left: calc(10% - 1.1rem + 2rem); } }\n  @media screen and (min-width: 1024px) {\n    .feature-text {\n      width: calc(62.5% - 2.03125rem);\n      float: left;\n      margin-left: 1.25rem;\n      margin-left: calc(18.75% - 1.48438rem + 2.5rem);\n      margin-top: 0; } }\n\n.feature-text h2,\nh3,\nh4,\nh5,\nh6 {\n  text-align: center; }\n\n.feature-text p {\n  text-align: left;\n  margin: 0.25rem;\n  padding: 0.75rem; }\n  @media screen and (min-width: 1024px) {\n    .feature-text p.blurb {\n      padding-top: 0.75rem; } }\n  .feature-text p.review {\n    font-size: 0.9rem;\n    text-indent: 0; }\n\n.feature-text hr,\n.feature-contact-wrapper hr,\n.feature-buy-wrapper hr {\n  height: 30px;\n  margin-bottom: -15px;\n  border-style: solid;\n  border-width: 1px 0 0 0;\n  border-radius: 20px; }\n  .feature-text hr:before,\n  .feature-contact-wrapper hr:before,\n  .feature-buy-wrapper hr:before {\n    display: block;\n    content: \"\";\n    height: 30px;\n    margin-top: -35px;\n    border-style: solid;\n    border-width: 0 0 1px 0;\n    border-radius: 20px; }\n  .feature-text hr.about,\n  .feature-contact-wrapper hr.about,\n  .feature-buy-wrapper hr.about {\n    color: #fde3e2; }\n  .feature-text hr.splendiferous,\n  .feature-contact-wrapper hr.splendiferous,\n  .feature-buy-wrapper hr.splendiferous {\n    color: white; }\n  .feature-text hr.founding,\n  .feature-contact-wrapper hr.founding,\n  .feature-buy-wrapper hr.founding {\n    color: #f9dac6; }\n  .feature-text hr.slinging,\n  .feature-contact-wrapper hr.slinging,\n  .feature-buy-wrapper hr.slinging {\n    color: #bea9c3; }\n  .feature-text hr.turkey,\n  .feature-contact-wrapper hr.turkey,\n  .feature-buy-wrapper hr.turkey {\n    color: #adbbda; }\n  .feature-text hr.dewdroppers,\n  .feature-contact-wrapper hr.dewdroppers,\n  .feature-buy-wrapper hr.dewdroppers {\n    color: white; }\n\n.feature-contact-wrapper,\n.feature-buy-wrapper {\n  width: calc(75% - 1.75rem);\n  float: left;\n  margin-left: 1rem;\n  margin-left: calc(12.5% - 1.125rem + 2rem);\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  text-align: center; }\n  @media screen and (min-width: 768px) {\n    .feature-contact-wrapper,\n    .feature-buy-wrapper {\n      width: calc(80% - 1.8rem);\n      float: left;\n      margin-left: 1rem;\n      margin-left: calc(10% - 1.1rem + 2rem); } }\n  @media screen and (min-width: 1024px) {\n    .feature-contact-wrapper,\n    .feature-buy-wrapper {\n      width: calc(62.5% - 2.03125rem);\n      float: left;\n      margin-left: 1.25rem;\n      margin-left: calc(18.75% - 1.48438rem + 2.5rem); } }\n\n.feature-contact-wrapper h4,\n.feature-buy-wrapper h4 {\n  margin: 0 auto; }\n\n.feature-contact-links li,\n.feature-buy-links li {\n  display: inline-block;\n  margin: 0.5rem; }\n\n.feature-contact-links span,\n.feature-buy-links span {\n  display: block; }\n\n/* === FOOTER MODULES === */\n.copyright {\n  color: #fff; }\n\n/* === END COLOR RULES === */\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 18px;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  background-color: #fff; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\na:link {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  color: #000; }\n\na:visited {\n  color: #000; }\n\na:hover {\n  color: #fff;\n  text-decoration: none; }\n\na:active {\n  color: #000; }\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  vertical-align: baseline; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nfieldset {\n  border: 1px solid #000;\n  margin: 2px;\n  padding: 1px; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\nimg {\n  margin: 0;\n  padding: 0;\n  max-width: 100%;\n  height: auto;\n  border: none; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace;\n  font-size: 16px; }\n\ndfn,\nem {\n  font-style: italic; }\n\nmark {\n  background-color: #ffff00;\n  color: #000; }\n\np {\n  margin: 0;\n  padding: 1em 0;\n  font-size: 18px;\n  text-indent: 1em; }\n\nsvg {\n  fill: #000; }\n  svg:hover {\n    fill: #fff; }\n\nbody {\n  font-size: 18px;\n  font-family: \"Pavanam\", sans-serif; }\n  body h1 {\n    font: 3em \"Kaushan Script\", cursive; }\n  body h2 {\n    font: 2.4em \"Kaushan Script\", cursive; }\n  body h3 {\n    font: 1.92em \"Kaushan Script\", cursive; }\n  body h4 {\n    font: 1.536em \"Kaushan Script\", cursive; }\n  body h5 {\n    font: 1.2288em \"Kaushan Script\", cursive; }\n  body h6 {\n    font: 0.98304em \"Kaushan Script\", cursive; }\n\n.is-preloading {\n  transition: none !important; }\n\n.nav-is-expanded {\n  display: block !important; }\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/lib/css-base.js":
/*!**************************************************!*\
  !*** ../node_modules/css-loader/lib/css-base.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../node_modules/style-loader/lib/urls.js":
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
"user strict";

// Prevent CSS animations on load
window.onload = function () {
    body[0].classList.remove("is-preloading");
};
// Navigation menu
var body = document.getElementsByTagName("body");
var navMobileButton = document.getElementById("nav-mobile-menu");
var navLinkContainer = document.getElementById("nav-link-wrapper");
navMobileButton.addEventListener("click", function () {
    navLinkContainer.classList.contains("nav-is-expanded")
        ? navLinkContainer.classList.remove("nav-is-expanded")
        : navLinkContainer.classList.add("nav-is-expanded");
});
// Copyright date
var yearString = new Date().getFullYear().toString();
var copyrightDateContainer = document.getElementById("copyright-date");
copyrightDateContainer.innerHTML = yearString;


/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/lib!../../node_modules/sass-loader/lib/loader.js??ref--5-3!./index.scss */ "../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/sass-loader/lib/loader.js??ref--5-3!./styles/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0eWxlcy9pbmRleC5zY3NzPzkwYWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7OztBQUdBO0FBQ0EscUVBQXNFLGlCQUFpQixjQUFjLGVBQWUsb0JBQW9CLCtCQUErQixtQ0FBbUMsMkJBQTJCLEVBQUUsdUdBQXVHLG1CQUFtQixFQUFFLFlBQVksY0FBYyxlQUFlLDBCQUEwQixnQkFBZ0IsRUFBRSxlQUFlLGdCQUFnQixFQUFFLGFBQWEsZ0JBQWdCLDBCQUEwQixFQUFFLGNBQWMsZ0JBQWdCLEVBQUUsUUFBUSxxQkFBcUIsY0FBYyxlQUFlLGNBQWMsa0JBQWtCLDZCQUE2QixFQUFFLFdBQVcsOEJBQThCLHNCQUFzQixFQUFFLGFBQWEsZUFBZSxFQUFFLGNBQWMsMkJBQTJCLGdCQUFnQixpQkFBaUIsRUFBRSxZQUFZLGNBQWMsZUFBZSxFQUFFLGNBQWMsbUJBQW1CLEVBQUUsU0FBUyxjQUFjLGVBQWUsb0JBQW9CLGlCQUFpQixpQkFBaUIsRUFBRSxnQkFBZ0Isc0JBQXNCLEVBQUUsNkJBQTZCLDJCQUEyQixvQkFBb0IsRUFBRSxjQUFjLHVCQUF1QixFQUFFLFVBQVUsOEJBQThCLGdCQUFnQixFQUFFLE9BQU8sY0FBYyxtQkFBbUIsb0JBQW9CLHFCQUFxQixFQUFFLFNBQVMsZUFBZSxFQUFFLGVBQWUsaUJBQWlCLEVBQUUsVUFBVSxvQkFBb0IseUNBQXlDLEVBQUUsYUFBYSw0Q0FBNEMsRUFBRSxhQUFhLDhDQUE4QyxFQUFFLGFBQWEsK0NBQStDLEVBQUUsYUFBYSxnREFBZ0QsRUFBRSxhQUFhLGlEQUFpRCxFQUFFLGFBQWEsa0RBQWtELEVBQUUsbUJBQW1CLG9CQUFvQixxQkFBcUIscUJBQXFCLG1CQUFtQix5QkFBeUIsRUFBRSwwQkFBMEIsa0JBQWtCLG9CQUFvQixxQkFBcUIsRUFBRSwwQ0FBMEMscUJBQXFCLHlCQUF5QixFQUFFLDhCQUE4QixzQkFBc0Isd0JBQXdCLHlCQUF5QixFQUFFLEVBQUUsMkNBQTJDLHFCQUFxQiwwQkFBMEIsRUFBRSw4QkFBOEIsc0JBQXNCLHdCQUF3Qix5QkFBeUIsRUFBRSxFQUFFLDJCQUEyQixpQkFBaUIsRUFBRSxZQUFZLGlCQUFpQixzQkFBc0IscUJBQXFCLHFCQUFxQiw2Q0FBNkMsdUJBQXVCLEVBQUUsNkJBQTZCLHFCQUFxQixFQUFFLGdGQUFnRixxQkFBcUIsd0JBQXdCLDZDQUE2QyxFQUFFLDJDQUEyQyxtQkFBbUIsMkRBQTJELEVBQUUsRUFBRSxzQkFBc0IsbUJBQW1CLGdCQUFnQixnQkFBZ0IsbUJBQW1CLG1DQUFtQyxxQkFBcUIsZ0JBQWdCLHFCQUFxQix1QkFBdUIsRUFBRSwyQ0FBMkMsd0JBQXdCLHNCQUFzQixFQUFFLEVBQUUsdUJBQXVCLGtCQUFrQix1REFBdUQsRUFBRSwyQ0FBMkMseUJBQXlCLHVCQUF1Qiw0QkFBNEIsRUFBRSxFQUFFLG1CQUFtQixnQkFBZ0IsZUFBZSxFQUFFLDJDQUEyQyxxQkFBcUIsb0JBQW9CLG9CQUFvQiwwQkFBMEIsRUFBRSxFQUFFLHNCQUFzQix1QkFBdUIsZ0JBQWdCLGdCQUFnQixtQkFBbUIsdURBQXVELHFCQUFxQixFQUFFLHdCQUF3QixrQkFBa0IsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsK0JBQStCLHFCQUFxQixFQUFFLDJDQUEyQyx3QkFBd0Isb0JBQW9CLDhCQUE4Qiw0QkFBNEIsRUFBRSxFQUFFLG9CQUFvQixnQkFBZ0IsZ0JBQWdCLHVEQUF1RCxFQUFFLDJDQUEyQyxzQkFBc0IscUJBQXFCLG9CQUFvQiw0QkFBNEIsRUFBRSxFQUFFLHVCQUF1QixtQkFBbUIsZ0JBQWdCLHVCQUF1QixpQkFBaUIsb0JBQW9CLHFCQUFxQixFQUFFLCtCQUErQixpQkFBaUIsRUFBRSxzQ0FBc0MsMEJBQTBCLEVBQUUsNENBQTRDLG1CQUFtQixFQUFFLHFDQUFxQywwQkFBMEIsRUFBRSwyQ0FBMkMsbUJBQW1CLEVBQUUsdUNBQXVDLDBCQUEwQixFQUFFLDZDQUE2QyxtQkFBbUIsRUFBRSwyQ0FBMkMseUJBQXlCLG9CQUFvQix5REFBeUQsRUFBRSxFQUFFLCtDQUErQyxxQkFBcUIsb0JBQW9CLHVCQUF1QixFQUFFLGVBQWUscUJBQXFCLHVCQUF1Qiw2QkFBNkIsRUFBRSwyQ0FBMkMsaUJBQWlCLDBCQUEwQixFQUFFLEVBQUUsK0pBQStKLDZCQUE2QixnQkFBZ0Isc0JBQXNCLDJCQUEyQix1QkFBdUIsa0JBQWtCLHVCQUF1QixzQ0FBc0MsRUFBRSwwQ0FBMEMsZ0NBQWdDLGtDQUFrQyxvQkFBb0IsMEJBQTBCLEVBQUUsb0RBQW9ELHNCQUFzQixFQUFFLCtEQUErRCxrREFBa0QsRUFBRSxzREFBc0Qsb0NBQW9DLEVBQUUsMERBQTBELHlCQUF5QixFQUFFLGtFQUFrRSwwQkFBMEIsRUFBRSw0REFBNEQsd0JBQXdCLEVBQUUsb0VBQW9FLHlCQUF5QixFQUFFLGlEQUFpRCxvQ0FBb0MsRUFBRSxxREFBcUQsMkJBQTJCLEVBQUUsNkRBQTZELDBCQUEwQixFQUFFLHVEQUF1RCwwQkFBMEIsRUFBRSwrREFBK0QseUJBQXlCLEVBQUUsaURBQWlELG9DQUFvQyxFQUFFLHFEQUFxRCwyQkFBMkIsRUFBRSw2REFBNkQsMEJBQTBCLEVBQUUsdURBQXVELDBCQUEwQixFQUFFLCtEQUErRCx5QkFBeUIsRUFBRSwrQ0FBK0Msb0NBQW9DLEVBQUUsbURBQW1ELDJCQUEyQixFQUFFLDJEQUEyRCwwQkFBMEIsRUFBRSxxREFBcUQsMEJBQTBCLEVBQUUsNkRBQTZELHlCQUF5QixFQUFFLG9EQUFvRCxvQ0FBb0MsRUFBRSx3REFBd0QseUJBQXlCLEVBQUUsZ0VBQWdFLDBCQUEwQixFQUFFLDBEQUEwRCx3QkFBd0IsRUFBRSxrRUFBa0UseUJBQXlCLEVBQUUsRUFBRSwyQ0FBMkMsZ0NBQWdDLDRDQUE0QyxvQkFBb0IsNkJBQTZCLEVBQUUsb0RBQW9ELHNCQUFzQixFQUFFLCtEQUErRCxtREFBbUQsRUFBRSxvREFBb0Qsc0JBQXNCLEVBQUUsc0VBQXNFLDZEQUE2RCxFQUFFLCtEQUErRCw2REFBNkQsRUFBRSxFQUFFLDBCQUEwQixtQkFBbUIsMkJBQTJCLHFCQUFxQiw2QkFBNkIsd0JBQXdCLHNEQUFzRCxFQUFFLG1DQUFtQyxvQkFBb0IsRUFBRSw2QkFBNkIsbUJBQW1CLGVBQWUscUJBQXFCLG1CQUFtQixxQkFBcUIsd0JBQXdCLHVCQUF1Qix1QkFBdUIsb0JBQW9CLEVBQUUsaUdBQWlHLHVCQUF1Qiw2QkFBNkIsZ0JBQWdCLHNCQUFzQiw0QkFBNEIsdUJBQXVCLEVBQUUsMENBQTBDLDhCQUE4QixpQ0FBaUMsb0JBQW9CLDBCQUEwQixFQUFFLEVBQUUsMkNBQTJDLDhCQUE4QixxQ0FBcUMsb0JBQW9CLDZCQUE2QixpREFBaUQsMkJBQTJCLG1CQUFtQix5QkFBeUIseUJBQXlCLEVBQUUsRUFBRSxvQkFBb0IsaUJBQWlCLHFCQUFxQix3QkFBd0Isc0RBQXNELEVBQUUsMkNBQTJDLHNCQUFzQix5QkFBeUIscUJBQXFCLEVBQUUsRUFBRSwyQkFBMkIsNkJBQTZCLGdCQUFnQixzQkFBc0IsMkJBQTJCLHFCQUFxQixzQkFBc0IsdUJBQXVCLEVBQUUsMENBQTBDLDZCQUE2Qiw0Q0FBNEMsb0JBQW9CLDBCQUEwQix3REFBd0QsRUFBRSxFQUFFLDJDQUEyQyw2QkFBNkIscUNBQXFDLG9CQUFvQiw2QkFBNkIsa0RBQWtELDJCQUEyQixFQUFFLEVBQUUsaUNBQWlDLGdDQUFnQyxFQUFFLHFDQUFxQyx1QkFBdUIsRUFBRSw2Q0FBNkMsc0JBQXNCLEVBQUUsdUNBQXVDLHNCQUFzQixFQUFFLCtDQUErQyxxQkFBcUIsRUFBRSx5Q0FBeUMsZ0NBQWdDLEVBQUUsNkNBQTZDLHFCQUFxQixFQUFFLHFEQUFxRCxzQkFBc0IsRUFBRSwrQ0FBK0Msb0JBQW9CLEVBQUUsdURBQXVELHFCQUFxQixFQUFFLG9DQUFvQyxnQ0FBZ0MsRUFBRSx3Q0FBd0MsdUJBQXVCLEVBQUUsZ0RBQWdELHNCQUFzQixFQUFFLDBDQUEwQyxzQkFBc0IsRUFBRSxrREFBa0QscUJBQXFCLEVBQUUsb0NBQW9DLGdDQUFnQyxFQUFFLHdDQUF3Qyx1QkFBdUIsRUFBRSxnREFBZ0Qsc0JBQXNCLEVBQUUsMENBQTBDLHNCQUFzQixFQUFFLGtEQUFrRCxxQkFBcUIsRUFBRSxrQ0FBa0MsZ0NBQWdDLEVBQUUsc0NBQXNDLHVCQUF1QixFQUFFLDhDQUE4QyxzQkFBc0IsRUFBRSx3Q0FBd0Msc0JBQXNCLEVBQUUsZ0RBQWdELHFCQUFxQixFQUFFLHVDQUF1QyxnQ0FBZ0MsRUFBRSwyQ0FBMkMscUJBQXFCLEVBQUUsbURBQW1ELHNCQUFzQixFQUFFLDZDQUE2QyxvQkFBb0IsRUFBRSxxREFBcUQscUJBQXFCLEVBQUUsbUJBQW1CLCtCQUErQixnQkFBZ0Isc0JBQXNCLCtDQUErQyx3QkFBd0IsRUFBRSwwQ0FBMEMscUJBQXFCLGtDQUFrQyxvQkFBb0IsMEJBQTBCLCtDQUErQyxFQUFFLEVBQUUsMkNBQTJDLHFCQUFxQix3Q0FBd0Msb0JBQW9CLDZCQUE2Qix3REFBd0Qsc0JBQXNCLEVBQUUsRUFBRSwwQ0FBMEMsdUJBQXVCLEVBQUUscUJBQXFCLHFCQUFxQixvQkFBb0IscUJBQXFCLEVBQUUsMkNBQTJDLDZCQUE2Qiw2QkFBNkIsRUFBRSxFQUFFLDRCQUE0Qix3QkFBd0IscUJBQXFCLEVBQUUsOEVBQThFLGlCQUFpQix5QkFBeUIsd0JBQXdCLDRCQUE0Qix3QkFBd0IsRUFBRSx1R0FBdUcscUJBQXFCLG9CQUFvQixtQkFBbUIsd0JBQXdCLDBCQUEwQiw4QkFBOEIsMEJBQTBCLEVBQUUsb0dBQW9HLHFCQUFxQixFQUFFLDRIQUE0SCxtQkFBbUIsRUFBRSw2R0FBNkcscUJBQXFCLEVBQUUsNkdBQTZHLHFCQUFxQixFQUFFLHVHQUF1RyxxQkFBcUIsRUFBRSxzSEFBc0gsbUJBQW1CLEVBQUUscURBQXFELCtCQUErQixnQkFBZ0Isc0JBQXNCLCtDQUErQyxxQkFBcUIsd0JBQXdCLHVCQUF1QixFQUFFLDBDQUEwQywyREFBMkQsa0NBQWtDLG9CQUFvQiwwQkFBMEIsK0NBQStDLEVBQUUsRUFBRSwyQ0FBMkMsMkRBQTJELHdDQUF3QyxvQkFBb0IsNkJBQTZCLHdEQUF3RCxFQUFFLEVBQUUsMkRBQTJELG1CQUFtQixFQUFFLHVEQUF1RCwwQkFBMEIsbUJBQW1CLEVBQUUsMkRBQTJELG1CQUFtQixFQUFFLDhDQUE4QyxnQkFBZ0IsRUFBRSxnREFBZ0QsaUJBQWlCLGNBQWMsZUFBZSxvQkFBb0IsK0JBQStCLG1DQUFtQywyQkFBMkIsRUFBRSx1R0FBdUcsbUJBQW1CLEVBQUUsWUFBWSxjQUFjLGVBQWUsMEJBQTBCLGdCQUFnQixFQUFFLGVBQWUsZ0JBQWdCLEVBQUUsYUFBYSxnQkFBZ0IsMEJBQTBCLEVBQUUsY0FBYyxnQkFBZ0IsRUFBRSxRQUFRLHFCQUFxQixjQUFjLGVBQWUsY0FBYyxrQkFBa0IsNkJBQTZCLEVBQUUsV0FBVyw4QkFBOEIsc0JBQXNCLEVBQUUsYUFBYSxlQUFlLEVBQUUsY0FBYywyQkFBMkIsZ0JBQWdCLGlCQUFpQixFQUFFLFlBQVksY0FBYyxlQUFlLEVBQUUsY0FBYyxtQkFBbUIsRUFBRSxTQUFTLGNBQWMsZUFBZSxvQkFBb0IsaUJBQWlCLGlCQUFpQixFQUFFLGdCQUFnQixzQkFBc0IsRUFBRSw2QkFBNkIsMkJBQTJCLG9CQUFvQixFQUFFLGNBQWMsdUJBQXVCLEVBQUUsVUFBVSw4QkFBOEIsZ0JBQWdCLEVBQUUsT0FBTyxjQUFjLG1CQUFtQixvQkFBb0IscUJBQXFCLEVBQUUsU0FBUyxlQUFlLEVBQUUsZUFBZSxpQkFBaUIsRUFBRSxVQUFVLG9CQUFvQix5Q0FBeUMsRUFBRSxhQUFhLDRDQUE0QyxFQUFFLGFBQWEsOENBQThDLEVBQUUsYUFBYSwrQ0FBK0MsRUFBRSxhQUFhLGdEQUFnRCxFQUFFLGFBQWEsaURBQWlELEVBQUUsYUFBYSxrREFBa0QsRUFBRSxvQkFBb0IsZ0NBQWdDLEVBQUUsc0JBQXNCLDhCQUE4QixFQUFFOztBQUU5NmpCOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjOztBQUVsRTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMVhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBLGFBQWEsQ0FBQztBQUVlO0FBRTdCLGlDQUFpQztBQUNqQyxNQUFNLENBQUMsTUFBTSxHQUFHO0lBQ2QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFDO0FBRUYsa0JBQWtCO0FBQ2xCLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuRCxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDbkUsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFckUsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUN4QyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1FBQ3BELENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQ3RELENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBaUI7QUFDakIsSUFBSSxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNyRCxJQUFJLHNCQUFzQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2RSxzQkFBc0IsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDdEI5Qzs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFkiLCJmaWxlIjoiLi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXgudHNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qID09PSBFTkQgQ09MT1IgUlVMRVMgPT09ICovXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbmE6bGluayB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cXG5hOnZpc2l0ZWQge1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuYTphY3RpdmUge1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cXG5cXG50ZCxcXG50aCB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIG1hcmdpbjogMnB4O1xcbiAgcGFkZGluZzogMXB4OyB9XFxuXFxubGVnZW5kIHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbmltZyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyOiBub25lOyB9XFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG5jb2RlLFxcbmtiZCxcXG5wcmUsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxNnB4OyB9XFxuXFxuZGZuLFxcbmVtIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmYwMDtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxZW0gMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRleHQtaW5kZW50OiAxZW07IH1cXG5cXG5zdmcge1xcbiAgZmlsbDogIzAwMDsgfVxcbiAgc3ZnOmhvdmVyIHtcXG4gICAgZmlsbDogI2ZmZjsgfVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQYXZhbmFtXFxcIiwgc2Fucy1zZXJpZjsgfVxcbiAgYm9keSBoMSB7XFxuICAgIGZvbnQ6IDNlbSBcXFwiS2F1c2hhbiBTY3JpcHRcXFwiLCBjdXJzaXZlOyB9XFxuICBib2R5IGgyIHtcXG4gICAgZm9udDogMi40ZW0gXFxcIkthdXNoYW4gU2NyaXB0XFxcIiwgY3Vyc2l2ZTsgfVxcbiAgYm9keSBoMyB7XFxuICAgIGZvbnQ6IDEuOTJlbSBcXFwiS2F1c2hhbiBTY3JpcHRcXFwiLCBjdXJzaXZlOyB9XFxuICBib2R5IGg0IHtcXG4gICAgZm9udDogMS41MzZlbSBcXFwiS2F1c2hhbiBTY3JpcHRcXFwiLCBjdXJzaXZlOyB9XFxuICBib2R5IGg1IHtcXG4gICAgZm9udDogMS4yMjg4ZW0gXFxcIkthdXNoYW4gU2NyaXB0XFxcIiwgY3Vyc2l2ZTsgfVxcbiAgYm9keSBoNiB7XFxuICAgIGZvbnQ6IDAuOTgzMDRlbSBcXFwiS2F1c2hhbiBTY3JpcHRcXFwiLCBjdXJzaXZlOyB9XFxuXFxuLm1haW4tY29udGVudCB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZy1ib3R0b206IDc1cHg7IH1cXG4gIC5tYWluLWNvbnRlbnQ6OmFmdGVyIHtcXG4gICAgY2xlYXI6IGJvdGg7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLm1haW4tY29udGVudCB7XFxuICAgICAgbWF4LXdpZHRoOiA3NjhweDsgfVxcbiAgICAgIC5tYWluLWNvbnRlbnQ6OmFmdGVyIHtcXG4gICAgICAgIGNsZWFyOiBib3RoO1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBkaXNwbGF5OiBibG9jazsgfSB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLm1haW4tY29udGVudCB7XFxuICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7IH1cXG4gICAgICAubWFpbi1jb250ZW50OjphZnRlciB7XFxuICAgICAgICBjbGVhcjogYm90aDtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IH0gfVxcblxcbi5tYWluLWNvbnRlbnQtd3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG5mb290ZXIge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2F1c2hhbiBTY3JpcHRcXFwiLCBjdXJzaXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmZvb3Rlci1jb250ZW50LXdyYXBwZXIge1xcbiAgcGFkZGluZzogMC41ZW0gMDsgfVxcblxcbi8qID09PSBNT0RVTEVTIElOIEhFQURFUiBTRUNUSU9OID09PSAqL1xcbi8qID09PSBOQVZCQVIgPT09ICovXFxuLm5hdmJhci10b3Age1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIkthdXNoYW4gU2NyaXB0XFxcIiwgY3Vyc2l2ZTsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5uYXZiYXItdG9wIHtcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjY2KTsgfSB9XFxuXFxuLm5hdi1tb2JpbGUtbWVudSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDEuMzNyZW07IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAubmF2LW1vYmlsZS1tZW51IHtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cXG4ubmF2LWxpbmstd3JhcHBlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTIwLCAxMjAsIDEyMCwgMC42Nik7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAubmF2LWxpbmstd3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfSB9XFxuXFxuLm5hdmJhci1wYWdlcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAubmF2YmFyLXBhZ2VzIHtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVlbTsgfSB9XFxuXFxuLm5hdmJhci1wYWdlcyBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjY2KTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIC5uYXZiYXItcGFnZXMgbGkgYSB7XFxuICAgIGNvbG9yOiAjMDAwOyB9XFxuICAubmF2YmFyLXBhZ2VzIGxpIGE6aG92ZXIge1xcbiAgICBjb2xvcjogIzczNzM3MzsgfVxcbiAgLm5hdmJhci1wYWdlcyBsaSBhOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjNzM3MzczOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLm5hdmJhci1wYWdlcyBsaSB7XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgcGFkZGluZzogMC43NWVtIDEuNWVtO1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH0gfVxcblxcbi5uYXZiYXItc29jaWFsIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjY2KTsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5uYXZiYXItc29jaWFsIHtcXG4gICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfSB9XFxuXFxuLm5hdmJhci1zb2NpYWwgbGkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbG9hdDogbGVmdDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1heC13aWR0aDogMjRweDtcXG4gIG1heC1oZWlnaHQ6IDI0cHg7IH1cXG4gIC5uYXZiYXItc29jaWFsIGxpIGEgPiBzdmcge1xcbiAgICBmaWxsOiAjMDAwOyB9XFxuICAubmF2YmFyLXNvY2lhbCBsaS5saW5rZWRpbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDc3YjU7IH1cXG4gICAgLm5hdmJhci1zb2NpYWwgbGkubGlua2VkaW46aG92ZXIgc3ZnIHtcXG4gICAgICBmaWxsOiAjZmZmOyB9XFxuICAubmF2YmFyLXNvY2lhbCBsaS50d2l0dGVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzFkYTFmMjsgfVxcbiAgICAubmF2YmFyLXNvY2lhbCBsaS50d2l0dGVyOmhvdmVyIHN2ZyB7XFxuICAgICAgZmlsbDogI2ZmZjsgfVxcbiAgLm5hdmJhci1zb2NpYWwgbGkuZ29vZHJlYWRzOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzYyNDIzNDsgfVxcbiAgICAubmF2YmFyLXNvY2lhbCBsaS5nb29kcmVhZHM6aG92ZXIgc3ZnIHtcXG4gICAgICBmaWxsOiAjZmZmOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLm5hdmJhci1zb2NpYWwgbGkge1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjY2KTsgfSB9XFxuXFxuLyogPT09IEVORCBOQVYgU1RZTEVTID09PSAqL1xcbi5wYWdlLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uc3VidGl0bGUge1xcbiAgbWF4LXdpZHRoOiA3NjhweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvIDFyZW0gYXV0bzsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5zdWJ0aXRsZSB7XFxuICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7IH0gfVxcblxcbi8qID09PSBFTkQgSEVBREVSIE1PRFVMRVMgPT09ICovXFxuLyogPT09IE1BSU4gQ09OVEVOVCBNT0RVTEVTID09PSAqL1xcbi8qID09PSBCT09LUyBBTkQgQ0xJUFMgUEFHRVMgVVNFIENPTExFQ1RJT04gTEFZT1VUID09PSAqL1xcbi5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlciB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgNzUwbXMgZWFzZS1pbi1vdXQ7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlciB7XFxuICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMS41cmVtKTtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTsgfVxcbiAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpudGgtY2hpbGQoMm4gKyAxKSB7XFxuICAgICAgICBjbGVhcjogbGVmdDsgfVxcbiAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpudGgtY2hpbGQoMm4gKyAxKTpsYXN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDI1JSAtIDEuMjVyZW0gKyAycmVtKTsgfVxcbiAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5zcGxlbmRpZmVyb3VzIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmRlZTM7IH1cXG4gICAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5zcGxlbmRpZmVyb3VzIGEge1xcbiAgICAgICAgICBjb2xvcjogd2hpdGU7IH1cXG4gICAgICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnNwbGVuZGlmZXJvdXMgYTpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7IH1cXG4gICAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5zcGxlbmRpZmVyb3VzIHN2ZyB7XFxuICAgICAgICAgIGZpbGw6IHdoaXRlOyB9XFxuICAgICAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5zcGxlbmRpZmVyb3VzIHN2Zzpob3ZlciB7XFxuICAgICAgICAgICAgZmlsbDogI2ZmZjsgfVxcbiAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5mb3VuZGluZyB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA5ZDY5OyB9XFxuICAgICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6aG92ZXIuZm91bmRpbmcgYSB7XFxuICAgICAgICAgIGNvbG9yOiAjZjlkYWM2OyB9XFxuICAgICAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5mb3VuZGluZyBhOmhvdmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLmZvdW5kaW5nIHN2ZyB7XFxuICAgICAgICAgIGZpbGw6ICNmOWRhYzY7IH1cXG4gICAgICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLmZvdW5kaW5nIHN2Zzpob3ZlciB7XFxuICAgICAgICAgICAgZmlsbDogI2ZmZjsgfVxcbiAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5zbGluZ2luZyB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTA2ZDk5OyB9XFxuICAgICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6aG92ZXIuc2xpbmdpbmcgYSB7XFxuICAgICAgICAgIGNvbG9yOiAjYmVhOWMzOyB9XFxuICAgICAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5zbGluZ2luZyBhOmhvdmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnNsaW5naW5nIHN2ZyB7XFxuICAgICAgICAgIGZpbGw6ICNiZWE5YzM7IH1cXG4gICAgICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnNsaW5naW5nIHN2Zzpob3ZlciB7XFxuICAgICAgICAgICAgZmlsbDogI2ZmZjsgfVxcbiAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci50dXJrZXkge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2ODBiYjsgfVxcbiAgICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnR1cmtleSBhIHtcXG4gICAgICAgICAgY29sb3I6ICNhZGJiZGE7IH1cXG4gICAgICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnR1cmtleSBhOmhvdmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnR1cmtleSBzdmcge1xcbiAgICAgICAgICBmaWxsOiAjYWRiYmRhOyB9XFxuICAgICAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci50dXJrZXkgc3ZnOmhvdmVyIHtcXG4gICAgICAgICAgICBmaWxsOiAjZmZmOyB9XFxuICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLmRld2Ryb3BwZXJzIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGE1YWQ7IH1cXG4gICAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5kZXdkcm9wcGVycyBhIHtcXG4gICAgICAgICAgY29sb3I6IHdoaXRlOyB9XFxuICAgICAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5kZXdkcm9wcGVycyBhOmhvdmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLmRld2Ryb3BwZXJzIHN2ZyB7XFxuICAgICAgICAgIGZpbGw6IHdoaXRlOyB9XFxuICAgICAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5kZXdkcm9wcGVycyBzdmc6aG92ZXIge1xcbiAgICAgICAgICAgIGZpbGw6ICNmZmY7IH0gfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlciB7XFxuICAgICAgd2lkdGg6IGNhbGMoMzMuMzMzMzMlIC0gMS42NjY2N3JlbSk7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07IH1cXG4gICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6bnRoLWNoaWxkKDJuICsgMSkge1xcbiAgICAgICAgY2xlYXI6IG5vbmU7IH1cXG4gICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6bnRoLWNoaWxkKDJuICsgMSk6bGFzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygwJSAtIDEuMjVyZW0gKyAyLjVyZW0pOyB9XFxuICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOm50aC1jaGlsZCgzbiArIDEpIHtcXG4gICAgICAgIGNsZWFyOiBsZWZ0OyB9XFxuICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOm50aC1jaGlsZCgzbiArIDEpOm50aC1sYXN0LWNoaWxkKDIpIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDE2LjY2NjY3JSAtIDEuNDU4MzNyZW0gKyAyLjVyZW0pOyB9XFxuICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOm50aC1jaGlsZCgzbiArIDEpOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMzMuMzMzMzMlIC0gMS42NjY2N3JlbSArIDIuNXJlbSk7IH0gfVxcblxcbi5jb2xsZWN0aW9uLWl0ZW0gaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBtYXJnaW46IDAgYXV0byAxcmVtIGF1dG87XFxuICBib3JkZXI6IGRvdWJsZSAjMDAwO1xcbiAgYm94LXNoYWRvdzogMC4zM3JlbSAwLjMzcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjY2KTsgfVxcblxcbi5jb2xsZWN0aW9uLWl0ZW0tdGV4dC13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDAgMXJlbTsgfVxcblxcbi5jb2xsZWN0aW9uLWl0ZW0gYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1pbi1oZWlnaHQ6IDJyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IGRvdWJsZSAjMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLyogPT09IEhPTUUsIEFCT1VULCBBTkQgQk9PSyBERVRBSUwgUEFHRVMgVVNFIEZFQVRVUkUgTEFZT1VUID09PSAqL1xcbi5mZWF0dXJlLWltYWdlLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IC04LjMzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuZmVhdHVyZS1pbWFnZS13cmFwcGVyIHtcXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07IH0gfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5mZWF0dXJlLWltYWdlLXdyYXBwZXIge1xcbiAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDEuNTYyNXJlbSk7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XFxuICAgICAgbGVmdDogY2FsYyg2LjI1JSAtIDEuMzI4MTJyZW0gKyAxLjI1cmVtKTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgei1pbmRleDogMTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgIG1hcmdpbi10b3A6IDNyZW07IH0gfVxcblxcbi5mZWF0dXJlLWltYWdlIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IGRvdWJsZSAjMDAwO1xcbiAgYm94LXNoYWRvdzogMC4zM3JlbSAwLjMzcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjY2KTsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5mZWF0dXJlLWltYWdlIHtcXG4gICAgICBtaW4td2lkdGg6IDI3MHB4O1xcbiAgICAgIGhlaWdodDogYXV0bzsgfSB9XFxuXFxuLmZlYXR1cmUtdGV4dC13cmFwcGVyIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4OyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIge1xcbiAgICAgIHdpZHRoOiBjYWxjKDgzLjMzMzMzJSAtIDEuODMzMzNyZW0pO1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDguMzMzMzMlIC0gMS4wODMzM3JlbSArIDJyZW0pOyB9IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIge1xcbiAgICAgIHdpZHRoOiBjYWxjKDc1JSAtIDIuMTg3NXJlbSk7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XFxuICAgICAgbGVmdDogY2FsYygtNi4yNSUgLSAxLjE3MTg4cmVtICsgMS4yNXJlbSk7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9IH1cXG4gIC5mZWF0dXJlLXRleHQtd3JhcHBlci5hYm91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTg2ODQ7IH1cXG4gICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLmFib3V0IGEge1xcbiAgICAgIGNvbG9yOiAjZmRlM2UyOyB9XFxuICAgICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLmFib3V0IGE6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cXG4gICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLmFib3V0IHN2ZyB7XFxuICAgICAgZmlsbDogI2ZkZTNlMjsgfVxcbiAgICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5hYm91dCBzdmc6aG92ZXIge1xcbiAgICAgICAgZmlsbDogI2ZmZjsgfVxcbiAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLnNwbGVuZGlmZXJvdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJkZWUzOyB9XFxuICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5zcGxlbmRpZmVyb3VzIGEge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5zcGxlbmRpZmVyb3VzIGE6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cXG4gICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLnNwbGVuZGlmZXJvdXMgc3ZnIHtcXG4gICAgICBmaWxsOiB3aGl0ZTsgfVxcbiAgICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5zcGxlbmRpZmVyb3VzIHN2Zzpob3ZlciB7XFxuICAgICAgICBmaWxsOiAjZmZmOyB9XFxuICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIuZm91bmRpbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA5ZDY5OyB9XFxuICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5mb3VuZGluZyBhIHtcXG4gICAgICBjb2xvcjogI2Y5ZGFjNjsgfVxcbiAgICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5mb3VuZGluZyBhOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5mb3VuZGluZyBzdmcge1xcbiAgICAgIGZpbGw6ICNmOWRhYzY7IH1cXG4gICAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIuZm91bmRpbmcgc3ZnOmhvdmVyIHtcXG4gICAgICAgIGZpbGw6ICNmZmY7IH1cXG4gIC5mZWF0dXJlLXRleHQtd3JhcHBlci5zbGluZ2luZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MDZkOTk7IH1cXG4gICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLnNsaW5naW5nIGEge1xcbiAgICAgIGNvbG9yOiAjYmVhOWMzOyB9XFxuICAgICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLnNsaW5naW5nIGE6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cXG4gICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLnNsaW5naW5nIHN2ZyB7XFxuICAgICAgZmlsbDogI2JlYTljMzsgfVxcbiAgICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5zbGluZ2luZyBzdmc6aG92ZXIge1xcbiAgICAgICAgZmlsbDogI2ZmZjsgfVxcbiAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLnR1cmtleSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjgwYmI7IH1cXG4gICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLnR1cmtleSBhIHtcXG4gICAgICBjb2xvcjogI2FkYmJkYTsgfVxcbiAgICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci50dXJrZXkgYTpob3ZlciB7XFxuICAgICAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIudHVya2V5IHN2ZyB7XFxuICAgICAgZmlsbDogI2FkYmJkYTsgfVxcbiAgICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci50dXJrZXkgc3ZnOmhvdmVyIHtcXG4gICAgICAgIGZpbGw6ICNmZmY7IH1cXG4gIC5mZWF0dXJlLXRleHQtd3JhcHBlci5kZXdkcm9wcGVycyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGE1YWQ7IH1cXG4gICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLmRld2Ryb3BwZXJzIGEge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5kZXdkcm9wcGVycyBhOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5kZXdkcm9wcGVycyBzdmcge1xcbiAgICAgIGZpbGw6IHdoaXRlOyB9XFxuICAgICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLmRld2Ryb3BwZXJzIHN2Zzpob3ZlciB7XFxuICAgICAgICBmaWxsOiAjZmZmOyB9XFxuXFxuLmZlYXR1cmUtdGV4dCB7XFxuICB3aWR0aDogY2FsYyg3NSUgLSAxLjc1cmVtKTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tbGVmdDogY2FsYygxMi41JSAtIDEuMTI1cmVtICsgMnJlbSk7XFxuICBtYXJnaW4tdG9wOiA2LjMzcmVtOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuZmVhdHVyZS10ZXh0IHtcXG4gICAgICB3aWR0aDogY2FsYyg4MCUgLSAxLjhyZW0pO1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEwJSAtIDEuMXJlbSArIDJyZW0pOyB9IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAuZmVhdHVyZS10ZXh0IHtcXG4gICAgICB3aWR0aDogY2FsYyg2Mi41JSAtIDIuMDMxMjVyZW0pO1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDE4Ljc1JSAtIDEuNDg0MzhyZW0gKyAyLjVyZW0pO1xcbiAgICAgIG1hcmdpbi10b3A6IDA7IH0gfVxcblxcbi5mZWF0dXJlLXRleHQgaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmZlYXR1cmUtdGV4dCBwIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW46IDAuMjVyZW07XFxuICBwYWRkaW5nOiAwLjc1cmVtOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLmZlYXR1cmUtdGV4dCBwLmJsdXJiIHtcXG4gICAgICBwYWRkaW5nLXRvcDogMC43NXJlbTsgfSB9XFxuICAuZmVhdHVyZS10ZXh0IHAucmV2aWV3IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIHRleHQtaW5kZW50OiAwOyB9XFxuXFxuLmZlYXR1cmUtdGV4dCBocixcXG4uZmVhdHVyZS1jb250YWN0LXdyYXBwZXIgaHIsXFxuLmZlYXR1cmUtYnV5LXdyYXBwZXIgaHIge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHggMCAwIDA7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4OyB9XFxuICAuZmVhdHVyZS10ZXh0IGhyOmJlZm9yZSxcXG4gIC5mZWF0dXJlLWNvbnRhY3Qtd3JhcHBlciBocjpiZWZvcmUsXFxuICAuZmVhdHVyZS1idXktd3JhcHBlciBocjpiZWZvcmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogLTM1cHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyB9XFxuICAuZmVhdHVyZS10ZXh0IGhyLmFib3V0LFxcbiAgLmZlYXR1cmUtY29udGFjdC13cmFwcGVyIGhyLmFib3V0LFxcbiAgLmZlYXR1cmUtYnV5LXdyYXBwZXIgaHIuYWJvdXQge1xcbiAgICBjb2xvcjogI2ZkZTNlMjsgfVxcbiAgLmZlYXR1cmUtdGV4dCBoci5zcGxlbmRpZmVyb3VzLFxcbiAgLmZlYXR1cmUtY29udGFjdC13cmFwcGVyIGhyLnNwbGVuZGlmZXJvdXMsXFxuICAuZmVhdHVyZS1idXktd3JhcHBlciBoci5zcGxlbmRpZmVyb3VzIHtcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuICAuZmVhdHVyZS10ZXh0IGhyLmZvdW5kaW5nLFxcbiAgLmZlYXR1cmUtY29udGFjdC13cmFwcGVyIGhyLmZvdW5kaW5nLFxcbiAgLmZlYXR1cmUtYnV5LXdyYXBwZXIgaHIuZm91bmRpbmcge1xcbiAgICBjb2xvcjogI2Y5ZGFjNjsgfVxcbiAgLmZlYXR1cmUtdGV4dCBoci5zbGluZ2luZyxcXG4gIC5mZWF0dXJlLWNvbnRhY3Qtd3JhcHBlciBoci5zbGluZ2luZyxcXG4gIC5mZWF0dXJlLWJ1eS13cmFwcGVyIGhyLnNsaW5naW5nIHtcXG4gICAgY29sb3I6ICNiZWE5YzM7IH1cXG4gIC5mZWF0dXJlLXRleHQgaHIudHVya2V5LFxcbiAgLmZlYXR1cmUtY29udGFjdC13cmFwcGVyIGhyLnR1cmtleSxcXG4gIC5mZWF0dXJlLWJ1eS13cmFwcGVyIGhyLnR1cmtleSB7XFxuICAgIGNvbG9yOiAjYWRiYmRhOyB9XFxuICAuZmVhdHVyZS10ZXh0IGhyLmRld2Ryb3BwZXJzLFxcbiAgLmZlYXR1cmUtY29udGFjdC13cmFwcGVyIGhyLmRld2Ryb3BwZXJzLFxcbiAgLmZlYXR1cmUtYnV5LXdyYXBwZXIgaHIuZGV3ZHJvcHBlcnMge1xcbiAgICBjb2xvcjogd2hpdGU7IH1cXG5cXG4uZmVhdHVyZS1jb250YWN0LXdyYXBwZXIsXFxuLmZlYXR1cmUtYnV5LXdyYXBwZXIge1xcbiAgd2lkdGg6IGNhbGMoNzUlIC0gMS43NXJlbSk7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMTIuNSUgLSAxLjEyNXJlbSArIDJyZW0pO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5mZWF0dXJlLWNvbnRhY3Qtd3JhcHBlcixcXG4gICAgLmZlYXR1cmUtYnV5LXdyYXBwZXIge1xcbiAgICAgIHdpZHRoOiBjYWxjKDgwJSAtIDEuOHJlbSk7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAlIC0gMS4xcmVtICsgMnJlbSk7IH0gfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5mZWF0dXJlLWNvbnRhY3Qtd3JhcHBlcixcXG4gICAgLmZlYXR1cmUtYnV5LXdyYXBwZXIge1xcbiAgICAgIHdpZHRoOiBjYWxjKDYyLjUlIC0gMi4wMzEyNXJlbSk7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XFxuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTguNzUlIC0gMS40ODQzOHJlbSArIDIuNXJlbSk7IH0gfVxcblxcbi5mZWF0dXJlLWNvbnRhY3Qtd3JhcHBlciBoNCxcXG4uZmVhdHVyZS1idXktd3JhcHBlciBoNCB7XFxuICBtYXJnaW46IDAgYXV0bzsgfVxcblxcbi5mZWF0dXJlLWNvbnRhY3QtbGlua3MgbGksXFxuLmZlYXR1cmUtYnV5LWxpbmtzIGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMC41cmVtOyB9XFxuXFxuLmZlYXR1cmUtY29udGFjdC1saW5rcyBzcGFuLFxcbi5mZWF0dXJlLWJ1eS1saW5rcyBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLyogPT09IEZPT1RFUiBNT0RVTEVTID09PSAqL1xcbi5jb3B5cmlnaHQge1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4vKiA9PT0gRU5EIENPTE9SIFJVTEVTID09PSAqL1xcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5hOmxpbmsge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxuYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxuYTpob3ZlciB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcblxcbmE6YWN0aXZlIHtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXFxudGQsXFxudGgge1xcbiAgcGFkZGluZzogMDsgfVxcblxcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBtYXJnaW46IDJweDtcXG4gIHBhZGRpbmc6IDFweDsgfVxcblxcbmxlZ2VuZCB7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG5pbWcge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlcjogbm9uZTsgfVxcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuY29kZSxcXG5rYmQsXFxucHJlLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMTZweDsgfVxcblxcbmRmbixcXG5lbSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmMDA7XFxuICBjb2xvcjogIzAwMDsgfVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMWVtIDA7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LWluZGVudDogMWVtOyB9XFxuXFxuc3ZnIHtcXG4gIGZpbGw6ICMwMDA7IH1cXG4gIHN2Zzpob3ZlciB7XFxuICAgIGZpbGw6ICNmZmY7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGF2YW5hbVxcXCIsIHNhbnMtc2VyaWY7IH1cXG4gIGJvZHkgaDEge1xcbiAgICBmb250OiAzZW0gXFxcIkthdXNoYW4gU2NyaXB0XFxcIiwgY3Vyc2l2ZTsgfVxcbiAgYm9keSBoMiB7XFxuICAgIGZvbnQ6IDIuNGVtIFxcXCJLYXVzaGFuIFNjcmlwdFxcXCIsIGN1cnNpdmU7IH1cXG4gIGJvZHkgaDMge1xcbiAgICBmb250OiAxLjkyZW0gXFxcIkthdXNoYW4gU2NyaXB0XFxcIiwgY3Vyc2l2ZTsgfVxcbiAgYm9keSBoNCB7XFxuICAgIGZvbnQ6IDEuNTM2ZW0gXFxcIkthdXNoYW4gU2NyaXB0XFxcIiwgY3Vyc2l2ZTsgfVxcbiAgYm9keSBoNSB7XFxuICAgIGZvbnQ6IDEuMjI4OGVtIFxcXCJLYXVzaGFuIFNjcmlwdFxcXCIsIGN1cnNpdmU7IH1cXG4gIGJvZHkgaDYge1xcbiAgICBmb250OiAwLjk4MzA0ZW0gXFxcIkthdXNoYW4gU2NyaXB0XFxcIiwgY3Vyc2l2ZTsgfVxcblxcbi5pcy1wcmVsb2FkaW5nIHtcXG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi5uYXYtaXMtZXhwYW5kZWQge1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJcInVzZXIgc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuLy8gUHJldmVudCBDU1MgYW5pbWF0aW9ucyBvbiBsb2FkXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBib2R5WzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1wcmVsb2FkaW5nXCIpO1xufTtcblxuLy8gTmF2aWdhdGlvbiBtZW51XG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpO1xuY29uc3QgbmF2TW9iaWxlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtbW9iaWxlLW1lbnVcIik7XG5jb25zdCBuYXZMaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtbGluay13cmFwcGVyXCIpO1xuXG5uYXZNb2JpbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbmF2TGlua0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXYtaXMtZXhwYW5kZWRcIilcbiAgICA/IG5hdkxpbmtDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1pcy1leHBhbmRlZFwiKVxuICAgIDogbmF2TGlua0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2LWlzLWV4cGFuZGVkXCIpO1xufSk7XG5cbi8vIENvcHlyaWdodCBkYXRlXG5sZXQgeWVhclN0cmluZyA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xubGV0IGNvcHlyaWdodERhdGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvcHlyaWdodC1kYXRlXCIpO1xuY29weXJpZ2h0RGF0ZUNvbnRhaW5lci5pbm5lckhUTUwgPSB5ZWFyU3RyaW5nO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNS0zIS4vaW5kZXguc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS01LTMhLi9pbmRleC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS01LTMhLi9pbmRleC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==