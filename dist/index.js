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
exports.push([module.i, "/* === END COLOR RULES === */\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 17px;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  background-color: #fff; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\na:link {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  color: #000; }\n\na:visited {\n  color: #000; }\n\na:hover {\n  color: #fff;\n  text-decoration: none; }\n\na:active {\n  color: #000; }\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  vertical-align: baseline; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nfieldset {\n  border: 1px solid #000;\n  margin: 2px;\n  padding: 1px; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\nimg {\n  margin: 0;\n  padding: 0;\n  max-width: 100%;\n  height: auto;\n  border: none; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace;\n  font-size: 16px; }\n\ndfn,\nem {\n  font-style: italic; }\n\nmark {\n  background-color: #ffff00;\n  color: #000; }\n\np {\n  margin: 0;\n  padding: 1em 0;\n  font-size: 17px;\n  text-indent: 1em; }\n\nsvg {\n  fill: #000; }\n  svg:hover {\n    fill: #fff; }\n\nbody {\n  font-size: 18px;\n  font-family: \"Pavanam\", sans-serif; }\n  body h1 {\n    font: 3em \"Kaushan Script\", cursive; }\n  body h2 {\n    font: 2.4em \"Kaushan Script\", cursive; }\n  body h3 {\n    font: 1.92em \"Kaushan Script\", cursive; }\n  body h4 {\n    font: 1.536em \"Kaushan Script\", cursive; }\n  body h5 {\n    font: 1.2288em \"Kaushan Script\", cursive; }\n  body h6 {\n    font: 0.98304em \"Kaushan Script\", cursive; }\n\n.l-main-content {\n  max-width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n  margin: 0 auto;\n  padding-bottom: 75px; }\n  .l-main-content::after {\n    clear: both;\n    content: \"\";\n    display: block; }\n  @media screen and (min-width: 768px) {\n    .l-main-content {\n      max-width: 768px; }\n      .l-main-content::after {\n        clear: both;\n        content: \"\";\n        display: block; } }\n  @media screen and (min-width: 1024px) {\n    .l-main-content {\n      max-width: 1200px; }\n      .l-main-content::after {\n        clear: both;\n        content: \"\";\n        display: block; } }\n\n.l-main-content-wrapper {\n  height: 100%; }\n\nfooter {\n  height: 50px;\n  margin-top: -50px;\n  overflow: hidden;\n  background: #000;\n  font-family: \"Kaushan Script\", cursive;\n  text-align: center; }\n\n.l-footer-content-wrapper {\n  padding: 0.5em 0; }\n\n/* === MODULES IN HEADER SECTION === */\n/* === NAVBAR === */\n.navbar-top {\n  overflow: hidden;\n  border-bottom: none;\n  font-family: \"Kaushan Script\", cursive; }\n  @media screen and (min-width: 1024px) {\n    .navbar-top {\n      border-bottom: 1px solid rgba(120, 120, 120, 0.66); } }\n\n.nav-mobile-button {\n  display: block;\n  width: 100%;\n  height: 2em;\n  padding: 1em 0.5em 0.5em 0.5em;\n  border-bottom: none !important;\n  background: #000;\n  color: #fff;\n  text-align: left;\n  font-size: 1.33rem; }\n  @media screen and (min-width: 1024px) {\n    .nav-mobile-button {\n      display: none; } }\n\n.nav-link-wrapper {\n  height: 0;\n  overflow: hidden;\n  border-bottom: 1px solid rgba(120, 120, 120, 0.66);\n  transition: all 0.66s ease-out; }\n  @media screen and (min-width: 1024px) {\n    .nav-link-wrapper {\n      height: auto !important;\n      overflow: auto;\n      border-bottom: none; } }\n\n.navbar-pages {\n  width: 100%;\n  padding: 0; }\n  @media screen and (min-width: 1024px) {\n    .navbar-pages {\n      float: left;\n      width: auto;\n      padding-left: 5em; } }\n\n.navbar-pages li {\n  position: relative;\n  float: left;\n  width: 100%;\n  padding: 0.5em;\n  border-bottom: 1px solid rgba(120, 120, 120, 0.66);\n  font-size: 1.33rem;\n  text-align: left; }\n  .navbar-pages li a {\n    color: #000; }\n  .navbar-pages li a:hover {\n    color: #737373; }\n  .navbar-pages li a:active {\n    color: #737373; }\n  @media screen and (min-width: 1024px) {\n    .navbar-pages li {\n      width: auto;\n      padding: 0.8em 1.5em;\n      border-bottom: none;\n      font-size: 1.2rem; } }\n\n.navbar-social {\n  float: left;\n  width: 100%;\n  border-bottom: 1px solid rgba(120, 120, 120, 0.66); }\n  @media screen and (min-width: 1024px) {\n    .navbar-social {\n      float: right;\n      width: auto;\n      border-bottom: none; } }\n\n.navbar-social li {\n  display: block;\n  float: left;\n  position: relative;\n  padding: 1.2em;\n  max-width: 24px;\n  max-height: 24px;\n  transition: all 0.5s linear; }\n  .navbar-social li a > svg {\n    fill: #000; }\n  .navbar-social li.linkedin:hover {\n    background: #0077b5; }\n    .navbar-social li.linkedin:hover svg {\n      fill: #fff; }\n  .navbar-social li.twitter:hover {\n    background: #1da1f2; }\n    .navbar-social li.twitter:hover svg {\n      fill: #fff; }\n  .navbar-social li.goodreads:hover {\n    background: #624234; }\n    .navbar-social li.goodreads:hover svg {\n      fill: #fff; }\n  @media screen and (min-width: 1024px) {\n    .navbar-social li {\n      float: left;\n      border-left: 1px solid rgba(120, 120, 120, 0.66); } }\n\n/* === END NAV STYLES === */\n.page-title {\n  margin-bottom: 0;\n  padding: 0.5rem;\n  text-align: center; }\n\n.subtitle {\n  max-width: 768px;\n  text-align: center;\n  margin: 0 auto 2rem auto; }\n  @media screen and (min-width: 1024px) {\n    .subtitle {\n      max-width: 1024px; } }\n\n/* === END HEADER MODULES === */\n/* === MAIN CONTENT MODULES === */\n/* === BOOKS AND CLIPS PAGES USE COLLECTION LAYOUT === */\n.collection-item-wrapper {\n  width: calc(100% - 2rem);\n  float: left;\n  margin-left: 1rem;\n  box-sizing: border-box;\n  margin-top: 1.5rem;\n  padding: 1rem;\n  border-radius: 5px;\n  transition: all 750ms ease-in-out; }\n  @media screen and (min-width: 768px) {\n    .collection-item-wrapper {\n      width: calc(50% - 1.2rem);\n      float: left;\n      margin-left: 0.8rem; }\n      .collection-item-wrapper:nth-child(2n + 1) {\n        clear: left; }\n      .collection-item-wrapper:nth-child(2n + 1):last-child {\n        margin-left: calc(25% - 1rem + 1.6rem); }\n      .collection-item-wrapper:hover.splendiferous {\n        background-color: #bbdee3; }\n        .collection-item-wrapper:hover.splendiferous a {\n          color: white; }\n          .collection-item-wrapper:hover.splendiferous a:hover {\n            color: #fff; }\n        .collection-item-wrapper:hover.splendiferous svg {\n          fill: white; }\n          .collection-item-wrapper:hover.splendiferous svg:hover {\n            fill: #fff; }\n      .collection-item-wrapper:hover.founding {\n        background-color: #f09d69; }\n        .collection-item-wrapper:hover.founding a {\n          color: #f9dac6; }\n          .collection-item-wrapper:hover.founding a:hover {\n            color: #fff; }\n        .collection-item-wrapper:hover.founding svg {\n          fill: #f9dac6; }\n          .collection-item-wrapper:hover.founding svg:hover {\n            fill: #fff; }\n      .collection-item-wrapper:hover.slinging {\n        background-color: #906d99; }\n        .collection-item-wrapper:hover.slinging a {\n          color: #bea9c3; }\n          .collection-item-wrapper:hover.slinging a:hover {\n            color: #fff; }\n        .collection-item-wrapper:hover.slinging svg {\n          fill: #bea9c3; }\n          .collection-item-wrapper:hover.slinging svg:hover {\n            fill: #fff; }\n      .collection-item-wrapper:hover.turkey {\n        background-color: #6680bb; }\n        .collection-item-wrapper:hover.turkey a {\n          color: #adbbda; }\n          .collection-item-wrapper:hover.turkey a:hover {\n            color: #fff; }\n        .collection-item-wrapper:hover.turkey svg {\n          fill: #adbbda; }\n          .collection-item-wrapper:hover.turkey svg:hover {\n            fill: #fff; }\n      .collection-item-wrapper:hover.dewdroppers {\n        background-color: #f8a5ad; }\n        .collection-item-wrapper:hover.dewdroppers a {\n          color: white; }\n          .collection-item-wrapper:hover.dewdroppers a:hover {\n            color: #fff; }\n        .collection-item-wrapper:hover.dewdroppers svg {\n          fill: white; }\n          .collection-item-wrapper:hover.dewdroppers svg:hover {\n            fill: #fff; }\n      .collection-item-wrapper:hover.clip {\n        background-color: #556459;\n        color: #d9dfdb; }\n        .collection-item-wrapper:hover.clip a {\n          color: #d9dfdb; }\n          .collection-item-wrapper:hover.clip a:hover {\n            color: #fff; }\n        .collection-item-wrapper:hover.clip svg {\n          fill: #d9dfdb; }\n          .collection-item-wrapper:hover.clip svg:hover {\n            fill: #fff; } }\n  @media screen and (min-width: 1024px) {\n    .collection-item-wrapper {\n      width: calc(33.33333% - 1rem);\n      float: left;\n      margin-left: 0.75rem; }\n      .collection-item-wrapper:nth-child(2n + 1) {\n        clear: none; }\n      .collection-item-wrapper:nth-child(2n + 1):last-child {\n        margin-left: calc(0% - 0.75rem + 1.5rem); }\n      .collection-item-wrapper:nth-child(3n + 1) {\n        clear: left; }\n      .collection-item-wrapper:nth-child(3n + 1):nth-last-child(2) {\n        margin-left: calc(16.66667% - 0.875rem + 1.5rem); }\n      .collection-item-wrapper:nth-child(3n + 1):last-child {\n        margin-left: calc(33.33333% - 1rem + 1.5rem); } }\n\n.collection-item img {\n  display: block;\n  box-sizing: border-box;\n  width: 200px;\n  height: auto;\n  margin: 0 auto 1rem auto;\n  border: double #000;\n  box-shadow: 0.33rem 0.33rem 0 rgba(0, 0, 0, 0.66); }\n\n.collection-item-text-wrapper {\n  padding: 0 1rem; }\n\n.collection-item h2,\nh3,\nh4,\nh5,\nh6 {\n  text-align: center;\n  margin-bottom: 0; }\n\n.collection-item button {\n  display: block;\n  width: 50%;\n  min-height: 2rem;\n  margin: 0 auto;\n  background: #fff;\n  border: double #000;\n  border-radius: 3px;\n  text-align: center;\n  cursor: pointer; }\n\n/* === HOME, ABOUT, AND BOOK DETAIL PAGES USE FEATURE LAYOUT === */\n.feature-image-wrapper {\n  position: relative;\n  width: calc(100% - 2rem);\n  float: left;\n  margin-left: 1rem;\n  margin-bottom: -8.33rem;\n  text-align: center; }\n  @media screen and (min-width: 768px) {\n    .feature-image-wrapper {\n      width: calc(100% - 1.6rem);\n      float: left;\n      margin-left: 0.8rem; } }\n  @media screen and (min-width: 1024px) {\n    .feature-image-wrapper {\n      width: calc(20.83333% - 0.90625rem);\n      float: left;\n      margin-left: 0.75rem;\n      left: calc(6.25% - 0.79688rem + 0.75rem);\n      position: relative;\n      z-index: 1;\n      margin-bottom: 0;\n      margin-top: 3rem; } }\n\n.feature-image {\n  width: 200px;\n  background: #fff;\n  border: double #000;\n  box-shadow: 0.33rem 0.33rem 0 rgba(0, 0, 0, 0.66); }\n  @media screen and (min-width: 1024px) {\n    .feature-image {\n      min-width: 230px;\n      height: auto; } }\n\n.feature-text-wrapper {\n  width: calc(100% - 2rem);\n  float: left;\n  margin-left: 1rem;\n  box-sizing: border-box;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-radius: 7px; }\n  @media screen and (min-width: 768px) {\n    .feature-text-wrapper {\n      width: calc(100% - 1.6rem);\n      float: left;\n      margin-left: 0.8rem; } }\n  @media screen and (min-width: 1024px) {\n    .feature-text-wrapper {\n      width: calc(79.16667% - 1.34375rem);\n      float: left;\n      margin-left: 0.75rem;\n      left: calc(-6.25% - 0.70312rem + 0.75rem);\n      position: relative; } }\n  .feature-text-wrapper.about {\n    background-color: #f58684; }\n    .feature-text-wrapper.about a {\n      color: #fde3e2; }\n      .feature-text-wrapper.about a:hover {\n        color: #fff; }\n    .feature-text-wrapper.about svg {\n      fill: #fde3e2; }\n      .feature-text-wrapper.about svg:hover {\n        fill: #fff; }\n  .feature-text-wrapper.splendiferous {\n    background-color: #bbdee3; }\n    .feature-text-wrapper.splendiferous a {\n      color: white; }\n      .feature-text-wrapper.splendiferous a:hover {\n        color: #fff; }\n    .feature-text-wrapper.splendiferous svg {\n      fill: white; }\n      .feature-text-wrapper.splendiferous svg:hover {\n        fill: #fff; }\n  .feature-text-wrapper.founding {\n    background-color: #f09d69; }\n    .feature-text-wrapper.founding a {\n      color: #f9dac6; }\n      .feature-text-wrapper.founding a:hover {\n        color: #fff; }\n    .feature-text-wrapper.founding svg {\n      fill: #f9dac6; }\n      .feature-text-wrapper.founding svg:hover {\n        fill: #fff; }\n  .feature-text-wrapper.slinging {\n    background-color: #906d99; }\n    .feature-text-wrapper.slinging a {\n      color: #bea9c3; }\n      .feature-text-wrapper.slinging a:hover {\n        color: #fff; }\n    .feature-text-wrapper.slinging svg {\n      fill: #bea9c3; }\n      .feature-text-wrapper.slinging svg:hover {\n        fill: #fff; }\n  .feature-text-wrapper.turkey {\n    background-color: #6680bb; }\n    .feature-text-wrapper.turkey a {\n      color: #adbbda; }\n      .feature-text-wrapper.turkey a:hover {\n        color: #fff; }\n    .feature-text-wrapper.turkey svg {\n      fill: #adbbda; }\n      .feature-text-wrapper.turkey svg:hover {\n        fill: #fff; }\n  .feature-text-wrapper.dewdroppers {\n    background-color: #f8a5ad; }\n    .feature-text-wrapper.dewdroppers a {\n      color: white; }\n      .feature-text-wrapper.dewdroppers a:hover {\n        color: #fff; }\n    .feature-text-wrapper.dewdroppers svg {\n      fill: white; }\n      .feature-text-wrapper.dewdroppers svg:hover {\n        fill: #fff; }\n\n.feature-text {\n  width: calc(90% - 1.9rem);\n  float: left;\n  margin-left: 1rem;\n  margin-left: calc(5% - 1.05rem + 2rem);\n  margin-top: 6.33rem; }\n  @media screen and (min-width: 768px) {\n    .feature-text {\n      width: calc(91.66667% - 1.53333rem);\n      float: left;\n      margin-left: 0.8rem;\n      margin-left: calc(4.16667% - 0.83333rem + 1.6rem); } }\n  @media screen and (min-width: 1024px) {\n    .feature-text {\n      width: calc(75% - 1.3125rem);\n      float: left;\n      margin-left: 0.75rem;\n      margin-left: calc(18.75% - 0.89062rem + 1.5rem);\n      margin-top: 0; } }\n\n.feature-text h2,\nh3,\nh4,\nh5,\nh6 {\n  text-align: center; }\n\n.feature-text p {\n  text-align: left;\n  margin: 0.25rem 0rem;\n  padding: 0.75rem 0rem; }\n  @media screen and (min-width: 768px) {\n    .feature-text p {\n      padding: 1rem; } }\n  @media screen and (min-width: 1024px) {\n    .feature-text p.blurb {\n      padding-top: 0.75rem; } }\n  .feature-text p.review {\n    font-size: 0.9rem;\n    text-indent: 0; }\n\n.feature-text hr,\n.feature-contact-wrapper hr,\n.feature-buy-wrapper hr {\n  height: 30px;\n  margin-bottom: -15px;\n  border-style: solid;\n  border-width: 1px 0 0 0;\n  border-radius: 20px; }\n  .feature-text hr:before,\n  .feature-contact-wrapper hr:before,\n  .feature-buy-wrapper hr:before {\n    display: block;\n    content: \"\";\n    height: 30px;\n    margin-top: -35px;\n    border-style: solid;\n    border-width: 0 0 1px 0;\n    border-radius: 20px; }\n  .feature-text hr.about,\n  .feature-contact-wrapper hr.about,\n  .feature-buy-wrapper hr.about {\n    color: #fde3e2; }\n  .feature-text hr.splendiferous,\n  .feature-contact-wrapper hr.splendiferous,\n  .feature-buy-wrapper hr.splendiferous {\n    color: white; }\n  .feature-text hr.founding,\n  .feature-contact-wrapper hr.founding,\n  .feature-buy-wrapper hr.founding {\n    color: #f9dac6; }\n  .feature-text hr.slinging,\n  .feature-contact-wrapper hr.slinging,\n  .feature-buy-wrapper hr.slinging {\n    color: #bea9c3; }\n  .feature-text hr.turkey,\n  .feature-contact-wrapper hr.turkey,\n  .feature-buy-wrapper hr.turkey {\n    color: #adbbda; }\n  .feature-text hr.dewdroppers,\n  .feature-contact-wrapper hr.dewdroppers,\n  .feature-buy-wrapper hr.dewdroppers {\n    color: white; }\n\n.feature-contact-wrapper,\n.feature-buy-wrapper {\n  width: calc(90% - 1.9rem);\n  float: left;\n  margin-left: 1rem;\n  margin-left: calc(5% - 1.05rem + 2rem);\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  text-align: center; }\n  @media screen and (min-width: 768px) {\n    .feature-contact-wrapper,\n    .feature-buy-wrapper {\n      width: calc(91.66667% - 1.53333rem);\n      float: left;\n      margin-left: 0.8rem;\n      margin-left: calc(4.16667% - 0.83333rem + 1.6rem); } }\n  @media screen and (min-width: 1024px) {\n    .feature-contact-wrapper,\n    .feature-buy-wrapper {\n      width: calc(75% - 1.3125rem);\n      float: left;\n      margin-left: 0.75rem;\n      margin-left: calc(18.75% - 0.89062rem + 1.5rem); } }\n\n.feature-contact-wrapper h4,\n.feature-buy-wrapper h4 {\n  margin: 0 auto; }\n\n.feature-contact-links li,\n.feature-buy-links li {\n  display: inline-block;\n  margin: 0.5rem; }\n\n.feature-contact-links span,\n.feature-buy-links span {\n  display: block; }\n\n/* === FOOTER MODULES === */\n.copyright {\n  color: #fff; }\n\n/* === END COLOR RULES === */\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 17px;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  background-color: #fff; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\na:link {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  color: #000; }\n\na:visited {\n  color: #000; }\n\na:hover {\n  color: #fff;\n  text-decoration: none; }\n\na:active {\n  color: #000; }\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  vertical-align: baseline; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nfieldset {\n  border: 1px solid #000;\n  margin: 2px;\n  padding: 1px; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\nimg {\n  margin: 0;\n  padding: 0;\n  max-width: 100%;\n  height: auto;\n  border: none; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace;\n  font-size: 16px; }\n\ndfn,\nem {\n  font-style: italic; }\n\nmark {\n  background-color: #ffff00;\n  color: #000; }\n\np {\n  margin: 0;\n  padding: 1em 0;\n  font-size: 17px;\n  text-indent: 1em; }\n\nsvg {\n  fill: #000; }\n  svg:hover {\n    fill: #fff; }\n\nbody {\n  font-size: 18px;\n  font-family: \"Pavanam\", sans-serif; }\n  body h1 {\n    font: 3em \"Kaushan Script\", cursive; }\n  body h2 {\n    font: 2.4em \"Kaushan Script\", cursive; }\n  body h3 {\n    font: 1.92em \"Kaushan Script\", cursive; }\n  body h4 {\n    font: 1.536em \"Kaushan Script\", cursive; }\n  body h5 {\n    font: 1.2288em \"Kaushan Script\", cursive; }\n  body h6 {\n    font: 0.98304em \"Kaushan Script\", cursive; }\n\n.is-preloading * {\n  transition: none !important; }\n", ""]);

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
    var body = document.getElementsByTagName("body");
    body[0].classList.remove("is-preloading");
};
// Navigation menu
// Define collapsible animation functions
var collapseSection = function (element) {
    var contentHeight = element.scrollHeight;
    var elementTransition = element.style.transition;
    requestAnimationFrame(function () {
        // Set element height before collapse frame
        element.style.height = contentHeight + "px";
        element.style.transition = elementTransition;
        requestAnimationFrame(function () {
            element.style.height = 0 + "px";
            element.style.overflow = "hidden";
        });
    });
    element.setAttribute("data-collapsed", "true");
};
var expandSection = function (element) {
    var contentHeight = element.scrollHeight;
    element.style.height = contentHeight + "px";
    element.setAttribute("data-collapsed", "false");
};
var toggleCollapse = function (eventElement, animateElement, event) {
    eventElement.addEventListener("" + event, function () {
        var isCollapsed = animateElement.getAttribute("data-collapsed") === "true";
        if (isCollapsed) {
            expandSection(animateElement);
            animateElement.setAttribute("data-collapsed", "false");
        }
        else {
            collapseSection(animateElement);
        }
    });
};
// Call collapsible animation on navigation
var mobileNavButton = document.querySelector("#nav-mobile-button");
var navLinkWrapper = document.querySelector("#nav-link-wrapper");
toggleCollapse(mobileNavButton, navLinkWrapper, "click");
// Copyright date
var yearString = new Date().getFullYear().toString();
var copyrightDateWrapper = document.getElementById("copyright-date");
copyrightDateWrapper.innerHTML = yearString;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0eWxlcy9pbmRleC5zY3NzPzkwYWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7OztBQUdBO0FBQ0EscUVBQXNFLGlCQUFpQixjQUFjLGVBQWUsb0JBQW9CLCtCQUErQixtQ0FBbUMs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QixFQUMzQixLQUFhO0lBRWIsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEtBQUcsS0FBTyxFQUFFO1FBQ3hDLElBQU0sV0FBVyxHQUNmLGNBQWMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxNQUFNLENBQUM7UUFFM0QsSUFBSSxXQUFXLEVBQUU7WUFDZixhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDOUIsY0FBYyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUN4RDthQUFNO1lBQ0wsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRiwyQ0FBMkM7QUFDM0MsSUFBTSxlQUFlLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQ3pELG9CQUFvQixDQUNyQixDQUFDO0FBQ0YsSUFBTSxjQUFjLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNoRixjQUFjLENBQUMsZUFBZSxFQUFFLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUV6RCxpQkFBaUI7QUFDakIsSUFBSSxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNyRCxJQUFJLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNyRSxvQkFBb0IsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDaEU1Qzs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFkiLCJmaWxlIjoiLi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXgudHNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qID09PSBFTkQgQ09MT1IgUlVMRVMgPT09ICovXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbmE6bGluayB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cXG5hOnZpc2l0ZWQge1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuYTphY3RpdmUge1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cXG5cXG50ZCxcXG50aCB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIG1hcmdpbjogMnB4O1xcbiAgcGFkZGluZzogMXB4OyB9XFxuXFxubGVnZW5kIHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbmltZyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyOiBub25lOyB9XFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG5jb2RlLFxcbmtiZCxcXG5wcmUsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxNnB4OyB9XFxuXFxuZGZuLFxcbmVtIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmYwMDtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxZW0gMDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIHRleHQtaW5kZW50OiAxZW07IH1cXG5cXG5zdmcge1xcbiAgZmlsbDogIzAwMDsgfVxcbiAgc3ZnOmhvdmVyIHtcXG4gICAgZmlsbDogI2ZmZjsgfVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQYXZhbmFtXFxcIiwgc2Fucy1zZXJpZjsgfVxcbiAgYm9keSBoMSB7XFxuICAgIGZvbnQ6IDNlbSBcXFwiS2F1c2hhbiBTY3JpcHRcXFwiLCBjdXJzaXZlOyB9XFxuICBib2R5IGgyIHtcXG4gICAgZm9udDogMi40ZW0gXFxcIkthdXNoYW4gU2NyaXB0XFxcIiwgY3Vyc2l2ZTsgfVxcbiAgYm9keSBoMyB7XFxuICAgIGZvbnQ6IDEuOTJlbSBcXFwiS2F1c2hhbiBTY3JpcHRcXFwiLCBjdXJzaXZlOyB9XFxuICBib2R5IGg0IHtcXG4gICAgZm9udDogMS41MzZlbSBcXFwiS2F1c2hhbiBTY3JpcHRcXFwiLCBjdXJzaXZlOyB9XFxuICBib2R5IGg1IHtcXG4gICAgZm9udDogMS4yMjg4ZW0gXFxcIkthdXNoYW4gU2NyaXB0XFxcIiwgY3Vyc2l2ZTsgfVxcbiAgYm9keSBoNiB7XFxuICAgIGZvbnQ6IDAuOTgzMDRlbSBcXFwiS2F1c2hhbiBTY3JpcHRcXFwiLCBjdXJzaXZlOyB9XFxuXFxuLmwtbWFpbi1jb250ZW50IHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nLWJvdHRvbTogNzVweDsgfVxcbiAgLmwtbWFpbi1jb250ZW50OjphZnRlciB7XFxuICAgIGNsZWFyOiBib3RoO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5sLW1haW4tY29udGVudCB7XFxuICAgICAgbWF4LXdpZHRoOiA3NjhweDsgfVxcbiAgICAgIC5sLW1haW4tY29udGVudDo6YWZ0ZXIge1xcbiAgICAgICAgY2xlYXI6IGJvdGg7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAubC1tYWluLWNvbnRlbnQge1xcbiAgICAgIG1heC13aWR0aDogMTIwMHB4OyB9XFxuICAgICAgLmwtbWFpbi1jb250ZW50OjphZnRlciB7XFxuICAgICAgICBjbGVhcjogYm90aDtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IH0gfVxcblxcbi5sLW1haW4tY29udGVudC13cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbmZvb3RlciB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW4tdG9wOiAtNTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLYXVzaGFuIFNjcmlwdFxcXCIsIGN1cnNpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubC1mb290ZXItY29udGVudC13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDAuNWVtIDA7IH1cXG5cXG4vKiA9PT0gTU9EVUxFUyBJTiBIRUFERVIgU0VDVElPTiA9PT0gKi9cXG4vKiA9PT0gTkFWQkFSID09PSAqL1xcbi5uYXZiYXItdG9wIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLYXVzaGFuIFNjcmlwdFxcXCIsIGN1cnNpdmU7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAubmF2YmFyLXRvcCB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTIwLCAxMjAsIDEyMCwgMC42Nik7IH0gfVxcblxcbi5uYXYtbW9iaWxlLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBwYWRkaW5nOiAxZW0gMC41ZW0gMC41ZW0gMC41ZW07XFxuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxLjMzcmVtOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLm5hdi1tb2JpbGUtYnV0dG9uIHtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cXG4ubmF2LWxpbmstd3JhcHBlciB7XFxuICBoZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTIwLCAxMjAsIDEyMCwgMC42Nik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC42NnMgZWFzZS1vdXQ7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAubmF2LWxpbmstd3JhcHBlciB7XFxuICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfSB9XFxuXFxuLm5hdmJhci1wYWdlcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAubmF2YmFyLXBhZ2VzIHtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVlbTsgfSB9XFxuXFxuLm5hdmJhci1wYWdlcyBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjY2KTtcXG4gIGZvbnQtc2l6ZTogMS4zM3JlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIC5uYXZiYXItcGFnZXMgbGkgYSB7XFxuICAgIGNvbG9yOiAjMDAwOyB9XFxuICAubmF2YmFyLXBhZ2VzIGxpIGE6aG92ZXIge1xcbiAgICBjb2xvcjogIzczNzM3MzsgfVxcbiAgLm5hdmJhci1wYWdlcyBsaSBhOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjNzM3MzczOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLm5hdmJhci1wYWdlcyBsaSB7XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgcGFkZGluZzogMC44ZW0gMS41ZW07XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICBmb250LXNpemU6IDEuMnJlbTsgfSB9XFxuXFxuLm5hdmJhci1zb2NpYWwge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEyMCwgMTIwLCAxMjAsIDAuNjYpOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLm5hdmJhci1zb2NpYWwge1xcbiAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lOyB9IH1cXG5cXG4ubmF2YmFyLXNvY2lhbCBsaSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMS4yZW07XFxuICBtYXgtd2lkdGg6IDI0cHg7XFxuICBtYXgtaGVpZ2h0OiAyNHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyOyB9XFxuICAubmF2YmFyLXNvY2lhbCBsaSBhID4gc3ZnIHtcXG4gICAgZmlsbDogIzAwMDsgfVxcbiAgLm5hdmJhci1zb2NpYWwgbGkubGlua2VkaW46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMDA3N2I1OyB9XFxuICAgIC5uYXZiYXItc29jaWFsIGxpLmxpbmtlZGluOmhvdmVyIHN2ZyB7XFxuICAgICAgZmlsbDogI2ZmZjsgfVxcbiAgLm5hdmJhci1zb2NpYWwgbGkudHdpdHRlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMxZGExZjI7IH1cXG4gICAgLm5hdmJhci1zb2NpYWwgbGkudHdpdHRlcjpob3ZlciBzdmcge1xcbiAgICAgIGZpbGw6ICNmZmY7IH1cXG4gIC5uYXZiYXItc29jaWFsIGxpLmdvb2RyZWFkczpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM2MjQyMzQ7IH1cXG4gICAgLm5hdmJhci1zb2NpYWwgbGkuZ29vZHJlYWRzOmhvdmVyIHN2ZyB7XFxuICAgICAgZmlsbDogI2ZmZjsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5uYXZiYXItc29jaWFsIGxpIHtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMTIwLCAxMjAsIDEyMCwgMC42Nik7IH0gfVxcblxcbi8qID09PSBFTkQgTkFWIFNUWUxFUyA9PT0gKi9cXG4ucGFnZS10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnN1YnRpdGxlIHtcXG4gIG1heC13aWR0aDogNzY4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgYXV0byAycmVtIGF1dG87IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAuc3VidGl0bGUge1xcbiAgICAgIG1heC13aWR0aDogMTAyNHB4OyB9IH1cXG5cXG4vKiA9PT0gRU5EIEhFQURFUiBNT0RVTEVTID09PSAqL1xcbi8qID09PSBNQUlOIENPTlRFTlQgTU9EVUxFUyA9PT0gKi9cXG4vKiA9PT0gQk9PS1MgQU5EIENMSVBTIFBBR0VTIFVTRSBDT0xMRUNUSU9OIExBWU9VVCA9PT0gKi9cXG4uY29sbGVjdGlvbi1pdGVtLXdyYXBwZXIge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDc1MG1zIGVhc2UtaW4tb3V0OyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXIge1xcbiAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEuMnJlbSk7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuOHJlbTsgfVxcbiAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpudGgtY2hpbGQoMm4gKyAxKSB7XFxuICAgICAgICBjbGVhcjogbGVmdDsgfVxcbiAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpudGgtY2hpbGQoMm4gKyAxKTpsYXN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDI1JSAtIDFyZW0gKyAxLjZyZW0pOyB9XFxuICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnNwbGVuZGlmZXJvdXMge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JiZGVlMzsgfVxcbiAgICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnNwbGVuZGlmZXJvdXMgYSB7XFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgICAgICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6aG92ZXIuc3BsZW5kaWZlcm91cyBhOmhvdmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnNwbGVuZGlmZXJvdXMgc3ZnIHtcXG4gICAgICAgICAgZmlsbDogd2hpdGU7IH1cXG4gICAgICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnNwbGVuZGlmZXJvdXMgc3ZnOmhvdmVyIHtcXG4gICAgICAgICAgICBmaWxsOiAjZmZmOyB9XFxuICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLmZvdW5kaW5nIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMDlkNjk7IH1cXG4gICAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5mb3VuZGluZyBhIHtcXG4gICAgICAgICAgY29sb3I6ICNmOWRhYzY7IH1cXG4gICAgICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLmZvdW5kaW5nIGE6aG92ZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6aG92ZXIuZm91bmRpbmcgc3ZnIHtcXG4gICAgICAgICAgZmlsbDogI2Y5ZGFjNjsgfVxcbiAgICAgICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6aG92ZXIuZm91bmRpbmcgc3ZnOmhvdmVyIHtcXG4gICAgICAgICAgICBmaWxsOiAjZmZmOyB9XFxuICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnNsaW5naW5nIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MDZkOTk7IH1cXG4gICAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5zbGluZ2luZyBhIHtcXG4gICAgICAgICAgY29sb3I6ICNiZWE5YzM7IH1cXG4gICAgICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnNsaW5naW5nIGE6aG92ZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6aG92ZXIuc2xpbmdpbmcgc3ZnIHtcXG4gICAgICAgICAgZmlsbDogI2JlYTljMzsgfVxcbiAgICAgICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6aG92ZXIuc2xpbmdpbmcgc3ZnOmhvdmVyIHtcXG4gICAgICAgICAgICBmaWxsOiAjZmZmOyB9XFxuICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnR1cmtleSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY4MGJiOyB9XFxuICAgICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6aG92ZXIudHVya2V5IGEge1xcbiAgICAgICAgICBjb2xvcjogI2FkYmJkYTsgfVxcbiAgICAgICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6aG92ZXIudHVya2V5IGE6aG92ZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6aG92ZXIudHVya2V5IHN2ZyB7XFxuICAgICAgICAgIGZpbGw6ICNhZGJiZGE7IH1cXG4gICAgICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnR1cmtleSBzdmc6aG92ZXIge1xcbiAgICAgICAgICAgIGZpbGw6ICNmZmY7IH1cXG4gICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6aG92ZXIuZGV3ZHJvcHBlcnMge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4YTVhZDsgfVxcbiAgICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLmRld2Ryb3BwZXJzIGEge1xcbiAgICAgICAgICBjb2xvcjogd2hpdGU7IH1cXG4gICAgICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLmRld2Ryb3BwZXJzIGE6aG92ZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6aG92ZXIuZGV3ZHJvcHBlcnMgc3ZnIHtcXG4gICAgICAgICAgZmlsbDogd2hpdGU7IH1cXG4gICAgICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLmRld2Ryb3BwZXJzIHN2Zzpob3ZlciB7XFxuICAgICAgICAgICAgZmlsbDogI2ZmZjsgfVxcbiAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5jbGlwIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTY0NTk7XFxuICAgICAgICBjb2xvcjogI2Q5ZGZkYjsgfVxcbiAgICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLmNsaXAgYSB7XFxuICAgICAgICAgIGNvbG9yOiAjZDlkZmRiOyB9XFxuICAgICAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5jbGlwIGE6aG92ZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6aG92ZXIuY2xpcCBzdmcge1xcbiAgICAgICAgICBmaWxsOiAjZDlkZmRiOyB9XFxuICAgICAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5jbGlwIHN2Zzpob3ZlciB7XFxuICAgICAgICAgICAgZmlsbDogI2ZmZjsgfSB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyIHtcXG4gICAgICB3aWR0aDogY2FsYygzMy4zMzMzMyUgLSAxcmVtKTtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgICBtYXJnaW4tbGVmdDogMC43NXJlbTsgfVxcbiAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpudGgtY2hpbGQoMm4gKyAxKSB7XFxuICAgICAgICBjbGVhcjogbm9uZTsgfVxcbiAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpudGgtY2hpbGQoMm4gKyAxKTpsYXN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDAlIC0gMC43NXJlbSArIDEuNXJlbSk7IH1cXG4gICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6bnRoLWNoaWxkKDNuICsgMSkge1xcbiAgICAgICAgY2xlYXI6IGxlZnQ7IH1cXG4gICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6bnRoLWNoaWxkKDNuICsgMSk6bnRoLWxhc3QtY2hpbGQoMikge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTYuNjY2NjclIC0gMC44NzVyZW0gKyAxLjVyZW0pOyB9XFxuICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOm50aC1jaGlsZCgzbiArIDEpOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMzMuMzMzMzMlIC0gMXJlbSArIDEuNXJlbSk7IH0gfVxcblxcbi5jb2xsZWN0aW9uLWl0ZW0gaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbjogMCBhdXRvIDFyZW0gYXV0bztcXG4gIGJvcmRlcjogZG91YmxlICMwMDA7XFxuICBib3gtc2hhZG93OiAwLjMzcmVtIDAuMzNyZW0gMCByZ2JhKDAsIDAsIDAsIDAuNjYpOyB9XFxuXFxuLmNvbGxlY3Rpb24taXRlbS10ZXh0LXdyYXBwZXIge1xcbiAgcGFkZGluZzogMCAxcmVtOyB9XFxuXFxuLmNvbGxlY3Rpb24taXRlbSBoMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLmNvbGxlY3Rpb24taXRlbSBidXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNTAlO1xcbiAgbWluLWhlaWdodDogMnJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogZG91YmxlICMwMDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4vKiA9PT0gSE9NRSwgQUJPVVQsIEFORCBCT09LIERFVEFJTCBQQUdFUyBVU0UgRkVBVFVSRSBMQVlPVVQgPT09ICovXFxuLmZlYXR1cmUtaW1hZ2Utd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogLTguMzNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5mZWF0dXJlLWltYWdlLXdyYXBwZXIge1xcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjZyZW0pO1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjhyZW07IH0gfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5mZWF0dXJlLWltYWdlLXdyYXBwZXIge1xcbiAgICAgIHdpZHRoOiBjYWxjKDIwLjgzMzMzJSAtIDAuOTA2MjVyZW0pO1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xcbiAgICAgIGxlZnQ6IGNhbGMoNi4yNSUgLSAwLjc5Njg4cmVtICsgMC43NXJlbSk7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICBtYXJnaW4tdG9wOiAzcmVtOyB9IH1cXG5cXG4uZmVhdHVyZS1pbWFnZSB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiBkb3VibGUgIzAwMDtcXG4gIGJveC1zaGFkb3c6IDAuMzNyZW0gMC4zM3JlbSAwIHJnYmEoMCwgMCwgMCwgMC42Nik7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAuZmVhdHVyZS1pbWFnZSB7XFxuICAgICAgbWluLXdpZHRoOiAyMzBweDtcXG4gICAgICBoZWlnaHQ6IGF1dG87IH0gfVxcblxcbi5mZWF0dXJlLXRleHQtd3JhcHBlciB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyIHtcXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS42cmVtKTtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgICBtYXJnaW4tbGVmdDogMC44cmVtOyB9IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIge1xcbiAgICAgIHdpZHRoOiBjYWxjKDc5LjE2NjY3JSAtIDEuMzQzNzVyZW0pO1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xcbiAgICAgIGxlZnQ6IGNhbGMoLTYuMjUlIC0gMC43MDMxMnJlbSArIDAuNzVyZW0pO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfSB9XFxuICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIuYWJvdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU4Njg0OyB9XFxuICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5hYm91dCBhIHtcXG4gICAgICBjb2xvcjogI2ZkZTNlMjsgfVxcbiAgICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5hYm91dCBhOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5hYm91dCBzdmcge1xcbiAgICAgIGZpbGw6ICNmZGUzZTI7IH1cXG4gICAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIuYWJvdXQgc3ZnOmhvdmVyIHtcXG4gICAgICAgIGZpbGw6ICNmZmY7IH1cXG4gIC5mZWF0dXJlLXRleHQtd3JhcHBlci5zcGxlbmRpZmVyb3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiZGVlMzsgfVxcbiAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIuc3BsZW5kaWZlcm91cyBhIHtcXG4gICAgICBjb2xvcjogd2hpdGU7IH1cXG4gICAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIuc3BsZW5kaWZlcm91cyBhOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5zcGxlbmRpZmVyb3VzIHN2ZyB7XFxuICAgICAgZmlsbDogd2hpdGU7IH1cXG4gICAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIuc3BsZW5kaWZlcm91cyBzdmc6aG92ZXIge1xcbiAgICAgICAgZmlsbDogI2ZmZjsgfVxcbiAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLmZvdW5kaW5nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwOWQ2OTsgfVxcbiAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIuZm91bmRpbmcgYSB7XFxuICAgICAgY29sb3I6ICNmOWRhYzY7IH1cXG4gICAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIuZm91bmRpbmcgYTpob3ZlciB7XFxuICAgICAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIuZm91bmRpbmcgc3ZnIHtcXG4gICAgICBmaWxsOiAjZjlkYWM2OyB9XFxuICAgICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLmZvdW5kaW5nIHN2Zzpob3ZlciB7XFxuICAgICAgICBmaWxsOiAjZmZmOyB9XFxuICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIuc2xpbmdpbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTA2ZDk5OyB9XFxuICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5zbGluZ2luZyBhIHtcXG4gICAgICBjb2xvcjogI2JlYTljMzsgfVxcbiAgICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5zbGluZ2luZyBhOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5zbGluZ2luZyBzdmcge1xcbiAgICAgIGZpbGw6ICNiZWE5YzM7IH1cXG4gICAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIuc2xpbmdpbmcgc3ZnOmhvdmVyIHtcXG4gICAgICAgIGZpbGw6ICNmZmY7IH1cXG4gIC5mZWF0dXJlLXRleHQtd3JhcHBlci50dXJrZXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY4MGJiOyB9XFxuICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci50dXJrZXkgYSB7XFxuICAgICAgY29sb3I6ICNhZGJiZGE7IH1cXG4gICAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIudHVya2V5IGE6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cXG4gICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLnR1cmtleSBzdmcge1xcbiAgICAgIGZpbGw6ICNhZGJiZGE7IH1cXG4gICAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIudHVya2V5IHN2Zzpob3ZlciB7XFxuICAgICAgICBmaWxsOiAjZmZmOyB9XFxuICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIuZGV3ZHJvcHBlcnMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhhNWFkOyB9XFxuICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5kZXdkcm9wcGVycyBhIHtcXG4gICAgICBjb2xvcjogd2hpdGU7IH1cXG4gICAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIuZGV3ZHJvcHBlcnMgYTpob3ZlciB7XFxuICAgICAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIuZGV3ZHJvcHBlcnMgc3ZnIHtcXG4gICAgICBmaWxsOiB3aGl0ZTsgfVxcbiAgICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5kZXdkcm9wcGVycyBzdmc6aG92ZXIge1xcbiAgICAgICAgZmlsbDogI2ZmZjsgfVxcblxcbi5mZWF0dXJlLXRleHQge1xcbiAgd2lkdGg6IGNhbGMoOTAlIC0gMS45cmVtKTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tbGVmdDogY2FsYyg1JSAtIDEuMDVyZW0gKyAycmVtKTtcXG4gIG1hcmdpbi10b3A6IDYuMzNyZW07IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5mZWF0dXJlLXRleHQge1xcbiAgICAgIHdpZHRoOiBjYWxjKDkxLjY2NjY3JSAtIDEuNTMzMzNyZW0pO1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjhyZW07XFxuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoNC4xNjY2NyUgLSAwLjgzMzMzcmVtICsgMS42cmVtKTsgfSB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLmZlYXR1cmUtdGV4dCB7XFxuICAgICAgd2lkdGg6IGNhbGMoNzUlIC0gMS4zMTI1cmVtKTtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgICBtYXJnaW4tbGVmdDogMC43NXJlbTtcXG4gICAgICBtYXJnaW4tbGVmdDogY2FsYygxOC43NSUgLSAwLjg5MDYycmVtICsgMS41cmVtKTtcXG4gICAgICBtYXJnaW4tdG9wOiAwOyB9IH1cXG5cXG4uZmVhdHVyZS10ZXh0IGgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5mZWF0dXJlLXRleHQgcCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luOiAwLjI1cmVtIDByZW07XFxuICBwYWRkaW5nOiAwLjc1cmVtIDByZW07IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5mZWF0dXJlLXRleHQgcCB7XFxuICAgICAgcGFkZGluZzogMXJlbTsgfSB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLmZlYXR1cmUtdGV4dCBwLmJsdXJiIHtcXG4gICAgICBwYWRkaW5nLXRvcDogMC43NXJlbTsgfSB9XFxuICAuZmVhdHVyZS10ZXh0IHAucmV2aWV3IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIHRleHQtaW5kZW50OiAwOyB9XFxuXFxuLmZlYXR1cmUtdGV4dCBocixcXG4uZmVhdHVyZS1jb250YWN0LXdyYXBwZXIgaHIsXFxuLmZlYXR1cmUtYnV5LXdyYXBwZXIgaHIge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHggMCAwIDA7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4OyB9XFxuICAuZmVhdHVyZS10ZXh0IGhyOmJlZm9yZSxcXG4gIC5mZWF0dXJlLWNvbnRhY3Qtd3JhcHBlciBocjpiZWZvcmUsXFxuICAuZmVhdHVyZS1idXktd3JhcHBlciBocjpiZWZvcmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogLTM1cHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyB9XFxuICAuZmVhdHVyZS10ZXh0IGhyLmFib3V0LFxcbiAgLmZlYXR1cmUtY29udGFjdC13cmFwcGVyIGhyLmFib3V0LFxcbiAgLmZlYXR1cmUtYnV5LXdyYXBwZXIgaHIuYWJvdXQge1xcbiAgICBjb2xvcjogI2ZkZTNlMjsgfVxcbiAgLmZlYXR1cmUtdGV4dCBoci5zcGxlbmRpZmVyb3VzLFxcbiAgLmZlYXR1cmUtY29udGFjdC13cmFwcGVyIGhyLnNwbGVuZGlmZXJvdXMsXFxuICAuZmVhdHVyZS1idXktd3JhcHBlciBoci5zcGxlbmRpZmVyb3VzIHtcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuICAuZmVhdHVyZS10ZXh0IGhyLmZvdW5kaW5nLFxcbiAgLmZlYXR1cmUtY29udGFjdC13cmFwcGVyIGhyLmZvdW5kaW5nLFxcbiAgLmZlYXR1cmUtYnV5LXdyYXBwZXIgaHIuZm91bmRpbmcge1xcbiAgICBjb2xvcjogI2Y5ZGFjNjsgfVxcbiAgLmZlYXR1cmUtdGV4dCBoci5zbGluZ2luZyxcXG4gIC5mZWF0dXJlLWNvbnRhY3Qtd3JhcHBlciBoci5zbGluZ2luZyxcXG4gIC5mZWF0dXJlLWJ1eS13cmFwcGVyIGhyLnNsaW5naW5nIHtcXG4gICAgY29sb3I6ICNiZWE5YzM7IH1cXG4gIC5mZWF0dXJlLXRleHQgaHIudHVya2V5LFxcbiAgLmZlYXR1cmUtY29udGFjdC13cmFwcGVyIGhyLnR1cmtleSxcXG4gIC5mZWF0dXJlLWJ1eS13cmFwcGVyIGhyLnR1cmtleSB7XFxuICAgIGNvbG9yOiAjYWRiYmRhOyB9XFxuICAuZmVhdHVyZS10ZXh0IGhyLmRld2Ryb3BwZXJzLFxcbiAgLmZlYXR1cmUtY29udGFjdC13cmFwcGVyIGhyLmRld2Ryb3BwZXJzLFxcbiAgLmZlYXR1cmUtYnV5LXdyYXBwZXIgaHIuZGV3ZHJvcHBlcnMge1xcbiAgICBjb2xvcjogd2hpdGU7IH1cXG5cXG4uZmVhdHVyZS1jb250YWN0LXdyYXBwZXIsXFxuLmZlYXR1cmUtYnV5LXdyYXBwZXIge1xcbiAgd2lkdGg6IGNhbGMoOTAlIC0gMS45cmVtKTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tbGVmdDogY2FsYyg1JSAtIDEuMDVyZW0gKyAycmVtKTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuZmVhdHVyZS1jb250YWN0LXdyYXBwZXIsXFxuICAgIC5mZWF0dXJlLWJ1eS13cmFwcGVyIHtcXG4gICAgICB3aWR0aDogY2FsYyg5MS42NjY2NyUgLSAxLjUzMzMzcmVtKTtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgICBtYXJnaW4tbGVmdDogMC44cmVtO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDQuMTY2NjclIC0gMC44MzMzM3JlbSArIDEuNnJlbSk7IH0gfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5mZWF0dXJlLWNvbnRhY3Qtd3JhcHBlcixcXG4gICAgLmZlYXR1cmUtYnV5LXdyYXBwZXIge1xcbiAgICAgIHdpZHRoOiBjYWxjKDc1JSAtIDEuMzEyNXJlbSk7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XFxuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTguNzUlIC0gMC44OTA2MnJlbSArIDEuNXJlbSk7IH0gfVxcblxcbi5mZWF0dXJlLWNvbnRhY3Qtd3JhcHBlciBoNCxcXG4uZmVhdHVyZS1idXktd3JhcHBlciBoNCB7XFxuICBtYXJnaW46IDAgYXV0bzsgfVxcblxcbi5mZWF0dXJlLWNvbnRhY3QtbGlua3MgbGksXFxuLmZlYXR1cmUtYnV5LWxpbmtzIGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMC41cmVtOyB9XFxuXFxuLmZlYXR1cmUtY29udGFjdC1saW5rcyBzcGFuLFxcbi5mZWF0dXJlLWJ1eS1saW5rcyBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLyogPT09IEZPT1RFUiBNT0RVTEVTID09PSAqL1xcbi5jb3B5cmlnaHQge1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4vKiA9PT0gRU5EIENPTE9SIFJVTEVTID09PSAqL1xcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5hOmxpbmsge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxuYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxuYTpob3ZlciB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcblxcbmE6YWN0aXZlIHtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXFxudGQsXFxudGgge1xcbiAgcGFkZGluZzogMDsgfVxcblxcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBtYXJnaW46IDJweDtcXG4gIHBhZGRpbmc6IDFweDsgfVxcblxcbmxlZ2VuZCB7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG5pbWcge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlcjogbm9uZTsgfVxcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuY29kZSxcXG5rYmQsXFxucHJlLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMTZweDsgfVxcblxcbmRmbixcXG5lbSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmMDA7XFxuICBjb2xvcjogIzAwMDsgfVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMWVtIDA7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICB0ZXh0LWluZGVudDogMWVtOyB9XFxuXFxuc3ZnIHtcXG4gIGZpbGw6ICMwMDA7IH1cXG4gIHN2Zzpob3ZlciB7XFxuICAgIGZpbGw6ICNmZmY7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGF2YW5hbVxcXCIsIHNhbnMtc2VyaWY7IH1cXG4gIGJvZHkgaDEge1xcbiAgICBmb250OiAzZW0gXFxcIkthdXNoYW4gU2NyaXB0XFxcIiwgY3Vyc2l2ZTsgfVxcbiAgYm9keSBoMiB7XFxuICAgIGZvbnQ6IDIuNGVtIFxcXCJLYXVzaGFuIFNjcmlwdFxcXCIsIGN1cnNpdmU7IH1cXG4gIGJvZHkgaDMge1xcbiAgICBmb250OiAxLjkyZW0gXFxcIkthdXNoYW4gU2NyaXB0XFxcIiwgY3Vyc2l2ZTsgfVxcbiAgYm9keSBoNCB7XFxuICAgIGZvbnQ6IDEuNTM2ZW0gXFxcIkthdXNoYW4gU2NyaXB0XFxcIiwgY3Vyc2l2ZTsgfVxcbiAgYm9keSBoNSB7XFxuICAgIGZvbnQ6IDEuMjI4OGVtIFxcXCJLYXVzaGFuIFNjcmlwdFxcXCIsIGN1cnNpdmU7IH1cXG4gIGJvZHkgaDYge1xcbiAgICBmb250OiAwLjk4MzA0ZW0gXFxcIkthdXNoYW4gU2NyaXB0XFxcIiwgY3Vyc2l2ZTsgfVxcblxcbi5pcy1wcmVsb2FkaW5nICoge1xcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIlwidXNlciBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG4vLyBQcmV2ZW50IENTUyBhbmltYXRpb25zIG9uIGxvYWRcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIik7XG4gIGJvZHlbMF0uY2xhc3NMaXN0LnJlbW92ZShcImlzLXByZWxvYWRpbmdcIik7XG59O1xuXG4vLyBOYXZpZ2F0aW9uIG1lbnVcbi8vIERlZmluZSBjb2xsYXBzaWJsZSBhbmltYXRpb24gZnVuY3Rpb25zXG5jb25zdCBjb2xsYXBzZVNlY3Rpb24gPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3QgY29udGVudEhlaWdodDogbnVtYmVyID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gIGNvbnN0IGVsZW1lbnRUcmFuc2l0aW9uOiBzdHJpbmcgPSBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb247XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAvLyBTZXQgZWxlbWVudCBoZWlnaHQgYmVmb3JlIGNvbGxhcHNlIGZyYW1lXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtjb250ZW50SGVpZ2h0fXB4YDtcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBlbGVtZW50VHJhbnNpdGlvbjtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAkezB9cHhgO1xuICAgICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2xsYXBzZWRcIiwgXCJ0cnVlXCIpO1xufTtcblxuY29uc3QgZXhwYW5kU2VjdGlvbiA9IChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuICBjb25zdCBjb250ZW50SGVpZ2h0OiBudW1iZXIgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcblxuICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2NvbnRlbnRIZWlnaHR9cHhgO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY29sbGFwc2VkXCIsIFwiZmFsc2VcIik7XG59O1xuXG5jb25zdCB0b2dnbGVDb2xsYXBzZSA9IChcbiAgZXZlbnRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgYW5pbWF0ZUVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBldmVudDogc3RyaW5nXG4pID0+IHtcbiAgZXZlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYCR7ZXZlbnR9YCwgKCkgPT4ge1xuICAgIGNvbnN0IGlzQ29sbGFwc2VkID1cbiAgICAgIGFuaW1hdGVFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtY29sbGFwc2VkXCIpID09PSBcInRydWVcIjtcblxuICAgIGlmIChpc0NvbGxhcHNlZCkge1xuICAgICAgZXhwYW5kU2VjdGlvbihhbmltYXRlRWxlbWVudCk7XG4gICAgICBhbmltYXRlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbGxhcHNlZFwiLCBcImZhbHNlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xsYXBzZVNlY3Rpb24oYW5pbWF0ZUVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBDYWxsIGNvbGxhcHNpYmxlIGFuaW1hdGlvbiBvbiBuYXZpZ2F0aW9uXG5jb25zdCBtb2JpbGVOYXZCdXR0b246IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIjbmF2LW1vYmlsZS1idXR0b25cIlxuKTtcbmNvbnN0IG5hdkxpbmtXcmFwcGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2LWxpbmstd3JhcHBlclwiKTtcbnRvZ2dsZUNvbGxhcHNlKG1vYmlsZU5hdkJ1dHRvbiwgbmF2TGlua1dyYXBwZXIsIFwiY2xpY2tcIik7XG5cbi8vIENvcHlyaWdodCBkYXRlXG5sZXQgeWVhclN0cmluZyA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xubGV0IGNvcHlyaWdodERhdGVXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3B5cmlnaHQtZGF0ZVwiKTtcbmNvcHlyaWdodERhdGVXcmFwcGVyLmlubmVySFRNTCA9IHllYXJTdHJpbmc7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS01LTMhLi9pbmRleC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTUtMyEuL2luZGV4LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTUtMyEuL2luZGV4LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9