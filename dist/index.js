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
exports.push([module.i, "/* === END COLOR RULES === */\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 17px;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  background-color: #fff; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\na:link {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  color: #000; }\n\na:visited {\n  color: #000; }\n\na:hover {\n  color: #fff;\n  text-decoration: none; }\n\na:active {\n  color: #000; }\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  vertical-align: baseline; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nfieldset {\n  border: 1px solid #000;\n  margin: 2px;\n  padding: 1px; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\nimg {\n  margin: 0;\n  padding: 0;\n  max-width: 100%;\n  height: auto;\n  border: none; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace;\n  font-size: 16px; }\n\ndfn,\nem {\n  font-style: italic; }\n\nmark {\n  background-color: #ffff00;\n  color: #000; }\n\np {\n  margin: 0;\n  padding: 1em 0;\n  font-size: 17px;\n  text-indent: 1em; }\n\nsvg {\n  fill: #000; }\n  svg:hover {\n    fill: #fff; }\n\nbody {\n  font-size: 17px;\n  font-family: \"Pavanam\", sans-serif; }\n  body h1 {\n    font: 3em \"Kaushan Script\", cursive; }\n  body h2 {\n    font: 2.4em \"Kaushan Script\", cursive; }\n  body h3 {\n    font: 1.92em \"Kaushan Script\", cursive; }\n  body h4 {\n    font: 1.536em \"Kaushan Script\", cursive; }\n  body h5 {\n    font: 1.2288em \"Kaushan Script\", cursive; }\n  body h6 {\n    font: 0.98304em \"Kaushan Script\", cursive; }\n\n.l-main-content {\n  max-width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n  margin: 0 auto;\n  padding-bottom: 75px; }\n  .l-main-content::after {\n    clear: both;\n    content: \"\";\n    display: block; }\n  @media screen and (min-width: 768px) {\n    .l-main-content {\n      max-width: 768px; }\n      .l-main-content::after {\n        clear: both;\n        content: \"\";\n        display: block; } }\n  @media screen and (min-width: 1024px) {\n    .l-main-content {\n      max-width: 1200px; }\n      .l-main-content::after {\n        clear: both;\n        content: \"\";\n        display: block; } }\n\n.l-main-content-wrapper {\n  height: 100%; }\n\nfooter {\n  height: 50px;\n  margin-top: -50px;\n  overflow: hidden;\n  background: #000;\n  font-family: \"Kaushan Script\", cursive;\n  text-align: center; }\n\n.l-footer-content-wrapper {\n  padding: 0.5em 0; }\n\n/* === MODULES IN HEADER SECTION === */\n/* === NAVBAR === */\n.navbar-top {\n  overflow: hidden;\n  border-bottom: none;\n  font-family: \"Kaushan Script\", cursive; }\n\n.nav-mobile-button {\n  display: block;\n  width: 100%;\n  height: 2em;\n  padding: 1em 0.5em 0.5em 0.5em;\n  border-bottom: none !important;\n  background: #000;\n  color: #fff;\n  text-align: left;\n  font-size: 1.33rem; }\n  @media screen and (min-width: 1024px) {\n    .nav-mobile-button {\n      display: none; } }\n\n.nav-link-wrapper {\n  height: 0;\n  overflow: hidden;\n  border-bottom: 1px solid rgba(120, 120, 120, 0.66);\n  transition: height 0.66s ease-out; }\n  @media screen and (min-width: 1024px) {\n    .nav-link-wrapper {\n      height: auto !important;\n      overflow: auto; } }\n\n.navbar-pages {\n  width: 100%;\n  padding: 0; }\n  @media screen and (min-width: 1024px) {\n    .navbar-pages {\n      float: left;\n      width: auto;\n      padding-left: 5em; } }\n\n.navbar-pages li {\n  position: relative;\n  float: left;\n  width: 100%;\n  padding: 0.5em;\n  border-bottom: 1px solid rgba(120, 120, 120, 0.66);\n  font-size: 1.33rem;\n  text-align: left; }\n  .navbar-pages li a {\n    color: #000; }\n  .navbar-pages li a:hover {\n    color: #737373; }\n  .navbar-pages li a:active {\n    color: #000; }\n  @media screen and (min-width: 1024px) {\n    .navbar-pages li {\n      width: auto;\n      padding: 0.8em 1.5em;\n      border-bottom: none;\n      font-size: 1.2rem; } }\n\n.navbar-social {\n  float: left;\n  width: 100%; }\n  @media screen and (min-width: 1024px) {\n    .navbar-social {\n      float: right;\n      width: auto; } }\n\n.navbar-social li {\n  display: block;\n  float: left;\n  position: relative;\n  padding: 1.2em;\n  max-width: 24px;\n  max-height: 24px;\n  transition: all 0.5s linear; }\n  .navbar-social li a > svg {\n    fill: #000; }\n  .navbar-social li.linkedin:hover {\n    background: #0077b5; }\n    .navbar-social li.linkedin:hover svg {\n      fill: #fff; }\n  .navbar-social li.twitter:hover {\n    background: #1da1f2; }\n    .navbar-social li.twitter:hover svg {\n      fill: #fff; }\n  .navbar-social li.goodreads:hover {\n    background: #624234; }\n    .navbar-social li.goodreads:hover svg {\n      fill: #fff; }\n  @media screen and (min-width: 1024px) {\n    .navbar-social li {\n      float: left;\n      border-left: 1px solid rgba(120, 120, 120, 0.66); } }\n\n/* === END NAV STYLES === */\n.page-title {\n  margin-bottom: 0;\n  padding: 0.5rem;\n  text-align: center; }\n\n.subtitle {\n  max-width: 768px;\n  text-align: center;\n  margin: 0 auto 2rem auto; }\n  @media screen and (min-width: 1024px) {\n    .subtitle {\n      max-width: 1024px; } }\n\n/* === END HEADER MODULES === */\n/* === MAIN CONTENT MODULES === */\n/* === HOME, ABOUT, AND BOOK DETAIL PAGES USE FEATURE LAYOUT === */\n.feature-image-wrapper {\n  position: relative;\n  width: calc(100% - 2rem);\n  float: left;\n  margin-left: 1rem;\n  margin-bottom: -8.33rem;\n  text-align: center; }\n  @media screen and (min-width: 768px) {\n    .feature-image-wrapper {\n      width: calc(100% - 1.6rem);\n      float: left;\n      margin-left: 0.8rem; } }\n  @media screen and (min-width: 1024px) {\n    .feature-image-wrapper {\n      width: calc(20.83333% - 0.90625rem);\n      float: left;\n      margin-left: 0.75rem;\n      left: calc(6.25% - 0.79688rem + 0.75rem);\n      position: relative;\n      z-index: 1;\n      margin-bottom: 0;\n      margin-top: 3rem; } }\n\n.feature-image {\n  width: 200px;\n  background: #fff;\n  border: double #000;\n  box-shadow: 0.33rem 0.33rem 0 rgba(0, 0, 0, 0.66); }\n  @media screen and (min-width: 1024px) {\n    .feature-image {\n      min-width: 230px;\n      height: auto; } }\n\n.feature-text-wrapper {\n  width: calc(100% - 2rem);\n  float: left;\n  margin-left: 1rem;\n  box-sizing: border-box;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-radius: 7px; }\n  @media screen and (min-width: 768px) {\n    .feature-text-wrapper {\n      width: calc(100% - 1.6rem);\n      float: left;\n      margin-left: 0.8rem; } }\n  @media screen and (min-width: 1024px) {\n    .feature-text-wrapper {\n      width: calc(79.16667% - 1.34375rem);\n      float: left;\n      margin-left: 0.75rem;\n      left: calc(-6.25% - 0.70312rem + 0.75rem);\n      position: relative; } }\n  .feature-text-wrapper.about {\n    background-color: #f58684; }\n    .feature-text-wrapper.about a {\n      color: #fde3e2; }\n      .feature-text-wrapper.about a:hover {\n        color: #fff; }\n    .feature-text-wrapper.about svg {\n      fill: #fde3e2; }\n      .feature-text-wrapper.about svg:hover {\n        fill: #fff; }\n  .feature-text-wrapper.splendiferous {\n    background-color: #bbdee3; }\n    .feature-text-wrapper.splendiferous a {\n      color: white; }\n      .feature-text-wrapper.splendiferous a:hover {\n        color: #fff; }\n    .feature-text-wrapper.splendiferous svg {\n      fill: white; }\n      .feature-text-wrapper.splendiferous svg:hover {\n        fill: #fff; }\n  .feature-text-wrapper.founding {\n    background-color: #f09d69; }\n    .feature-text-wrapper.founding a {\n      color: #f9dac6; }\n      .feature-text-wrapper.founding a:hover {\n        color: #fff; }\n    .feature-text-wrapper.founding svg {\n      fill: #f9dac6; }\n      .feature-text-wrapper.founding svg:hover {\n        fill: #fff; }\n  .feature-text-wrapper.slinging {\n    background-color: #b589c0; }\n    .feature-text-wrapper.slinging a {\n      color: #dfcbe4; }\n      .feature-text-wrapper.slinging a:hover {\n        color: #fff; }\n    .feature-text-wrapper.slinging svg {\n      fill: #dfcbe4; }\n      .feature-text-wrapper.slinging svg:hover {\n        fill: #fff; }\n  .feature-text-wrapper.turkey {\n    background-color: #839dda; }\n    .feature-text-wrapper.turkey a {\n      color: #d2dbf1; }\n      .feature-text-wrapper.turkey a:hover {\n        color: #fff; }\n    .feature-text-wrapper.turkey svg {\n      fill: #d2dbf1; }\n      .feature-text-wrapper.turkey svg:hover {\n        fill: #fff; }\n  .feature-text-wrapper.dewdroppers {\n    background-color: #f8a5ad; }\n    .feature-text-wrapper.dewdroppers a {\n      color: white; }\n      .feature-text-wrapper.dewdroppers a:hover {\n        color: #fff; }\n    .feature-text-wrapper.dewdroppers svg {\n      fill: white; }\n      .feature-text-wrapper.dewdroppers svg:hover {\n        fill: #fff; }\n\n.feature-text {\n  width: calc(90% - 1.9rem);\n  float: left;\n  margin-left: 1rem;\n  margin-left: calc(5% - 1.05rem + 2rem);\n  margin-top: 6.33rem; }\n  @media screen and (min-width: 768px) {\n    .feature-text {\n      width: calc(91.66667% - 1.53333rem);\n      float: left;\n      margin-left: 0.8rem;\n      margin-left: calc(4.16667% - 0.83333rem + 1.6rem); } }\n  @media screen and (min-width: 1024px) {\n    .feature-text {\n      width: calc(75% - 1.3125rem);\n      float: left;\n      margin-left: 0.75rem;\n      margin-left: calc(18.75% - 0.89062rem + 1.5rem);\n      margin-top: 0; } }\n\n.feature-text h2,\nh3,\nh4,\nh5,\nh6 {\n  text-align: center; }\n\n.feature-text p {\n  text-align: left;\n  margin: 0.25rem 0rem;\n  padding: 0.5rem 0rem; }\n  @media screen and (min-width: 768px) {\n    .feature-text p {\n      padding: 0.5rem; } }\n  .feature-text p.review {\n    font-size: 0.9rem;\n    text-indent: 0; }\n\n.feature-text span {\n  padding-left: 1em; }\n\n.feature-text hr,\n.feature-contact-wrapper hr,\n.feature-buy-wrapper hr {\n  height: 30px;\n  margin-bottom: -15px;\n  border-style: solid;\n  border-width: 1px 0 0 0;\n  border-radius: 20px; }\n  .feature-text hr:before,\n  .feature-contact-wrapper hr:before,\n  .feature-buy-wrapper hr:before {\n    display: block;\n    content: \"\";\n    height: 30px;\n    margin-top: -35px;\n    border-style: solid;\n    border-width: 0 0 1px 0;\n    border-radius: 20px; }\n  .feature-text hr.about,\n  .feature-contact-wrapper hr.about,\n  .feature-buy-wrapper hr.about {\n    color: #fde3e2; }\n  .feature-text hr.splendiferous,\n  .feature-contact-wrapper hr.splendiferous,\n  .feature-buy-wrapper hr.splendiferous {\n    color: white; }\n  .feature-text hr.founding,\n  .feature-contact-wrapper hr.founding,\n  .feature-buy-wrapper hr.founding {\n    color: #f9dac6; }\n  .feature-text hr.slinging,\n  .feature-contact-wrapper hr.slinging,\n  .feature-buy-wrapper hr.slinging {\n    color: #dfcbe4; }\n  .feature-text hr.turkey,\n  .feature-contact-wrapper hr.turkey,\n  .feature-buy-wrapper hr.turkey {\n    color: #d2dbf1; }\n  .feature-text hr.dewdroppers,\n  .feature-contact-wrapper hr.dewdroppers,\n  .feature-buy-wrapper hr.dewdroppers {\n    color: white; }\n\n.feature-contact-wrapper,\n.feature-buy-wrapper {\n  width: calc(90% - 1.9rem);\n  float: left;\n  margin-left: 1rem;\n  margin-left: calc(5% - 1.05rem + 2rem);\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  text-align: center; }\n  @media screen and (min-width: 768px) {\n    .feature-contact-wrapper,\n    .feature-buy-wrapper {\n      width: calc(91.66667% - 1.53333rem);\n      float: left;\n      margin-left: 0.8rem;\n      margin-left: calc(4.16667% - 0.83333rem + 1.6rem); } }\n  @media screen and (min-width: 1024px) {\n    .feature-contact-wrapper,\n    .feature-buy-wrapper {\n      width: calc(75% - 1.3125rem);\n      float: left;\n      margin-left: 0.75rem;\n      margin-left: calc(18.75% - 0.89062rem + 1.5rem); } }\n\n.feature-contact-wrapper h4,\n.feature-buy-wrapper h4 {\n  margin: 0 auto; }\n\n.feature-contact-links li,\n.feature-buy-links li {\n  display: inline-block;\n  margin: 0.5rem; }\n\n.feature-contact-links span,\n.feature-buy-links span {\n  display: block; }\n\n/* === BOOKS AND CLIPS PAGES USE COLLECTION LAYOUT === */\n.collection-item-wrapper {\n  width: calc(100% - 2rem);\n  float: left;\n  margin-left: 1rem;\n  box-sizing: border-box;\n  margin-top: 1.5rem;\n  padding: 1rem;\n  border-radius: 5px;\n  transition: all 750ms ease-in-out; }\n  .collection-item-wrapper:hover.splendiferous {\n    background-color: #bbdee3; }\n    .collection-item-wrapper:hover.splendiferous a {\n      color: white; }\n      .collection-item-wrapper:hover.splendiferous a:hover {\n        color: #fff; }\n    .collection-item-wrapper:hover.splendiferous svg {\n      fill: white; }\n      .collection-item-wrapper:hover.splendiferous svg:hover {\n        fill: #fff; }\n  .collection-item-wrapper:hover.founding {\n    background-color: #f09d69; }\n    .collection-item-wrapper:hover.founding a {\n      color: #f9dac6; }\n      .collection-item-wrapper:hover.founding a:hover {\n        color: #fff; }\n    .collection-item-wrapper:hover.founding svg {\n      fill: #f9dac6; }\n      .collection-item-wrapper:hover.founding svg:hover {\n        fill: #fff; }\n  .collection-item-wrapper:hover.slinging {\n    background-color: #b589c0; }\n    .collection-item-wrapper:hover.slinging a {\n      color: #dfcbe4; }\n      .collection-item-wrapper:hover.slinging a:hover {\n        color: #fff; }\n    .collection-item-wrapper:hover.slinging svg {\n      fill: #dfcbe4; }\n      .collection-item-wrapper:hover.slinging svg:hover {\n        fill: #fff; }\n  .collection-item-wrapper:hover.turkey {\n    background-color: #839dda; }\n    .collection-item-wrapper:hover.turkey a {\n      color: #d2dbf1; }\n      .collection-item-wrapper:hover.turkey a:hover {\n        color: #fff; }\n    .collection-item-wrapper:hover.turkey svg {\n      fill: #d2dbf1; }\n      .collection-item-wrapper:hover.turkey svg:hover {\n        fill: #fff; }\n  .collection-item-wrapper:hover.dewdroppers {\n    background-color: #f8a5ad; }\n    .collection-item-wrapper:hover.dewdroppers a {\n      color: white; }\n      .collection-item-wrapper:hover.dewdroppers a:hover {\n        color: #fff; }\n    .collection-item-wrapper:hover.dewdroppers svg {\n      fill: white; }\n      .collection-item-wrapper:hover.dewdroppers svg:hover {\n        fill: #fff; }\n  .collection-item-wrapper:hover.clip {\n    background-color: #556459;\n    color: #d9dfdb; }\n    .collection-item-wrapper:hover.clip a {\n      color: #d9dfdb; }\n      .collection-item-wrapper:hover.clip a:hover {\n        color: #fff; }\n    .collection-item-wrapper:hover.clip svg {\n      fill: #d9dfdb; }\n      .collection-item-wrapper:hover.clip svg:hover {\n        fill: #fff; }\n  @media screen and (min-width: 768px) {\n    .collection-item-wrapper {\n      width: calc(50% - 1.2rem);\n      float: left;\n      margin-left: 0.8rem;\n      position: relative; }\n      .collection-item-wrapper:nth-child(2n + 1) {\n        clear: left; }\n      .collection-item-wrapper:nth-child(2n + 1):last-child {\n        margin-left: calc(25% - 1rem + 1.6rem); } }\n  @media screen and (min-width: 1024px) {\n    .collection-item-wrapper {\n      width: calc(33.33333% - 1rem);\n      float: left;\n      margin-left: 0.75rem; }\n      .collection-item-wrapper:nth-child(2n + 1) {\n        clear: none; }\n      .collection-item-wrapper:nth-child(3n + 1) {\n        clear: left; }\n      .collection-item-wrapper:nth-child(3n + 1):nth-last-child(2) {\n        margin-left: calc(16.66667% - 0.875rem + 1.5rem); }\n      .collection-item-wrapper:nth-child(2n + 1):last-child {\n        margin-left: calc(0% - 0.75rem + 1.5rem); }\n      .collection-item-wrapper:nth-child(3n + 1):last-child {\n        margin-left: calc(33.33333% - 1rem + 1.5rem); } }\n\n.collection-item-image-wrapper {\n  min-height: 305px; }\n\n.collection-item img {\n  display: block;\n  box-sizing: border-box;\n  width: 200px;\n  height: auto;\n  margin: 0 auto 1rem auto;\n  border: double #000;\n  box-shadow: 0.33rem 0.33rem 0 rgba(0, 0, 0, 0.66); }\n\n.collection-item-text-wrapper {\n  padding: 0 1rem; }\n\n.collection-item h2,\n.collection-item h3,\n.collection-item h4,\n.collection-item h5,\n.collection-item h6 {\n  min-height: 3.8rem;\n  text-align: center;\n  margin-bottom: 0; }\n\n.collection-item h5.book {\n  min-height: 2.4rem; }\n  @media screen and (min-width: 1024px) {\n    .collection-item h5.book {\n      min-height: 3.8rem; } }\n\n.clip .collection-item-text-wrapper p {\n  max-width: 550px;\n  margin: auto; }\n  @media screen and (min-width: 768px) {\n    .clip .collection-item-text-wrapper p {\n      min-height: 160px; } }\n  @media screen and (min-width: 1024px) {\n    .clip .collection-item-text-wrapper p {\n      min-height: 180px; } }\n\n.book .collection-item-text-wrapper p {\n  max-width: 450px;\n  margin: auto; }\n  @media screen and (min-width: 768px) {\n    .book .collection-item-text-wrapper p {\n      min-height: 90px; } }\n\n.collection-item-text-wrapper button {\n  display: block;\n  width: 50%;\n  height: 2rem;\n  margin: 0 auto;\n  background: #fff;\n  border: double #000;\n  border-radius: 3px;\n  text-align: center;\n  cursor: pointer; }\n\n/* === FOOTER MODULES === */\n.copyright {\n  color: #fff; }\n\n.is-preloading * {\n  transition: none !important; }\n", ""]);

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
// Inspiration from Brandon Smith's CSS Tricks Post
// https://css-tricks.com/using-css-transitions-auto-dimensions/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0eWxlcy9pbmRleC5zY3NzPzkwYWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7OztBQUdBO0FBQ0EscUVBQXNFLGlCQUFpQixjQUFjLGVBQWUsb0JBQW9CLCtCQUErQixtQ0FBbUMs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QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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QUFDLGVBQWUsRUFBRSxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFekQsaUJBQWlCO0FBQ2pCLElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDckQsSUFBSSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDckUsb0JBQW9CLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ25FNUM7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZIiwiZmlsZSI6Ii4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiA9PT0gRU5EIENPTE9SIFJVTEVTID09PSAqL1xcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5hOmxpbmsge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxuYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxuYTpob3ZlciB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcblxcbmE6YWN0aXZlIHtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXFxudGQsXFxudGgge1xcbiAgcGFkZGluZzogMDsgfVxcblxcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBtYXJnaW46IDJweDtcXG4gIHBhZGRpbmc6IDFweDsgfVxcblxcbmxlZ2VuZCB7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG5pbWcge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlcjogbm9uZTsgfVxcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuY29kZSxcXG5rYmQsXFxucHJlLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMTZweDsgfVxcblxcbmRmbixcXG5lbSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmMDA7XFxuICBjb2xvcjogIzAwMDsgfVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMWVtIDA7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICB0ZXh0LWluZGVudDogMWVtOyB9XFxuXFxuc3ZnIHtcXG4gIGZpbGw6ICMwMDA7IH1cXG4gIHN2Zzpob3ZlciB7XFxuICAgIGZpbGw6ICNmZmY7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGF2YW5hbVxcXCIsIHNhbnMtc2VyaWY7IH1cXG4gIGJvZHkgaDEge1xcbiAgICBmb250OiAzZW0gXFxcIkthdXNoYW4gU2NyaXB0XFxcIiwgY3Vyc2l2ZTsgfVxcbiAgYm9keSBoMiB7XFxuICAgIGZvbnQ6IDIuNGVtIFxcXCJLYXVzaGFuIFNjcmlwdFxcXCIsIGN1cnNpdmU7IH1cXG4gIGJvZHkgaDMge1xcbiAgICBmb250OiAxLjkyZW0gXFxcIkthdXNoYW4gU2NyaXB0XFxcIiwgY3Vyc2l2ZTsgfVxcbiAgYm9keSBoNCB7XFxuICAgIGZvbnQ6IDEuNTM2ZW0gXFxcIkthdXNoYW4gU2NyaXB0XFxcIiwgY3Vyc2l2ZTsgfVxcbiAgYm9keSBoNSB7XFxuICAgIGZvbnQ6IDEuMjI4OGVtIFxcXCJLYXVzaGFuIFNjcmlwdFxcXCIsIGN1cnNpdmU7IH1cXG4gIGJvZHkgaDYge1xcbiAgICBmb250OiAwLjk4MzA0ZW0gXFxcIkthdXNoYW4gU2NyaXB0XFxcIiwgY3Vyc2l2ZTsgfVxcblxcbi5sLW1haW4tY29udGVudCB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZy1ib3R0b206IDc1cHg7IH1cXG4gIC5sLW1haW4tY29udGVudDo6YWZ0ZXIge1xcbiAgICBjbGVhcjogYm90aDtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAubC1tYWluLWNvbnRlbnQge1xcbiAgICAgIG1heC13aWR0aDogNzY4cHg7IH1cXG4gICAgICAubC1tYWluLWNvbnRlbnQ6OmFmdGVyIHtcXG4gICAgICAgIGNsZWFyOiBib3RoO1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBkaXNwbGF5OiBibG9jazsgfSB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLmwtbWFpbi1jb250ZW50IHtcXG4gICAgICBtYXgtd2lkdGg6IDEyMDBweDsgfVxcbiAgICAgIC5sLW1haW4tY29udGVudDo6YWZ0ZXIge1xcbiAgICAgICAgY2xlYXI6IGJvdGg7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9IH1cXG5cXG4ubC1tYWluLWNvbnRlbnQtd3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG5mb290ZXIge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2F1c2hhbiBTY3JpcHRcXFwiLCBjdXJzaXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmwtZm9vdGVyLWNvbnRlbnQtd3JhcHBlciB7XFxuICBwYWRkaW5nOiAwLjVlbSAwOyB9XFxuXFxuLyogPT09IE1PRFVMRVMgSU4gSEVBREVSIFNFQ1RJT04gPT09ICovXFxuLyogPT09IE5BVkJBUiA9PT0gKi9cXG4ubmF2YmFyLXRvcCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2F1c2hhbiBTY3JpcHRcXFwiLCBjdXJzaXZlOyB9XFxuXFxuLm5hdi1tb2JpbGUtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHBhZGRpbmc6IDFlbSAwLjVlbSAwLjVlbSAwLjVlbTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDEuMzNyZW07IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAubmF2LW1vYmlsZS1idXR0b24ge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbi5uYXYtbGluay13cmFwcGVyIHtcXG4gIGhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjY2KTtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjY2cyBlYXNlLW91dDsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5uYXYtbGluay13cmFwcGVyIHtcXG4gICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgICBvdmVyZmxvdzogYXV0bzsgfSB9XFxuXFxuLm5hdmJhci1wYWdlcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAubmF2YmFyLXBhZ2VzIHtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVlbTsgfSB9XFxuXFxuLm5hdmJhci1wYWdlcyBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjY2KTtcXG4gIGZvbnQtc2l6ZTogMS4zM3JlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIC5uYXZiYXItcGFnZXMgbGkgYSB7XFxuICAgIGNvbG9yOiAjMDAwOyB9XFxuICAubmF2YmFyLXBhZ2VzIGxpIGE6aG92ZXIge1xcbiAgICBjb2xvcjogIzczNzM3MzsgfVxcbiAgLm5hdmJhci1wYWdlcyBsaSBhOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjMDAwOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLm5hdmJhci1wYWdlcyBsaSB7XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgcGFkZGluZzogMC44ZW0gMS41ZW07XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICBmb250LXNpemU6IDEuMnJlbTsgfSB9XFxuXFxuLm5hdmJhci1zb2NpYWwge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5uYXZiYXItc29jaWFsIHtcXG4gICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgd2lkdGg6IGF1dG87IH0gfVxcblxcbi5uYXZiYXItc29jaWFsIGxpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxLjJlbTtcXG4gIG1heC13aWR0aDogMjRweDtcXG4gIG1heC1oZWlnaHQ6IDI0cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7IH1cXG4gIC5uYXZiYXItc29jaWFsIGxpIGEgPiBzdmcge1xcbiAgICBmaWxsOiAjMDAwOyB9XFxuICAubmF2YmFyLXNvY2lhbCBsaS5saW5rZWRpbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMwMDc3YjU7IH1cXG4gICAgLm5hdmJhci1zb2NpYWwgbGkubGlua2VkaW46aG92ZXIgc3ZnIHtcXG4gICAgICBmaWxsOiAjZmZmOyB9XFxuICAubmF2YmFyLXNvY2lhbCBsaS50d2l0dGVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzFkYTFmMjsgfVxcbiAgICAubmF2YmFyLXNvY2lhbCBsaS50d2l0dGVyOmhvdmVyIHN2ZyB7XFxuICAgICAgZmlsbDogI2ZmZjsgfVxcbiAgLm5hdmJhci1zb2NpYWwgbGkuZ29vZHJlYWRzOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzYyNDIzNDsgfVxcbiAgICAubmF2YmFyLXNvY2lhbCBsaS5nb29kcmVhZHM6aG92ZXIgc3ZnIHtcXG4gICAgICBmaWxsOiAjZmZmOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLm5hdmJhci1zb2NpYWwgbGkge1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjY2KTsgfSB9XFxuXFxuLyogPT09IEVORCBOQVYgU1RZTEVTID09PSAqL1xcbi5wYWdlLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uc3VidGl0bGUge1xcbiAgbWF4LXdpZHRoOiA3NjhweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvIDJyZW0gYXV0bzsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5zdWJ0aXRsZSB7XFxuICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7IH0gfVxcblxcbi8qID09PSBFTkQgSEVBREVSIE1PRFVMRVMgPT09ICovXFxuLyogPT09IE1BSU4gQ09OVEVOVCBNT0RVTEVTID09PSAqL1xcbi8qID09PSBIT01FLCBBQk9VVCwgQU5EIEJPT0sgREVUQUlMIFBBR0VTIFVTRSBGRUFUVVJFIExBWU9VVCA9PT0gKi9cXG4uZmVhdHVyZS1pbWFnZS13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAtOC4zM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLmZlYXR1cmUtaW1hZ2Utd3JhcHBlciB7XFxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNnJlbSk7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuOHJlbTsgfSB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLmZlYXR1cmUtaW1hZ2Utd3JhcHBlciB7XFxuICAgICAgd2lkdGg6IGNhbGMoMjAuODMzMzMlIC0gMC45MDYyNXJlbSk7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XFxuICAgICAgbGVmdDogY2FsYyg2LjI1JSAtIDAuNzk2ODhyZW0gKyAwLjc1cmVtKTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgei1pbmRleDogMTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgIG1hcmdpbi10b3A6IDNyZW07IH0gfVxcblxcbi5mZWF0dXJlLWltYWdlIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IGRvdWJsZSAjMDAwO1xcbiAgYm94LXNoYWRvdzogMC4zM3JlbSAwLjMzcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjY2KTsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5mZWF0dXJlLWltYWdlIHtcXG4gICAgICBtaW4td2lkdGg6IDIzMHB4O1xcbiAgICAgIGhlaWdodDogYXV0bzsgfSB9XFxuXFxuLmZlYXR1cmUtdGV4dC13cmFwcGVyIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4OyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIge1xcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjZyZW0pO1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjhyZW07IH0gfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlciB7XFxuICAgICAgd2lkdGg6IGNhbGMoNzkuMTY2NjclIC0gMS4zNDM3NXJlbSk7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XFxuICAgICAgbGVmdDogY2FsYygtNi4yNSUgLSAwLjcwMzEycmVtICsgMC43NXJlbSk7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9IH1cXG4gIC5mZWF0dXJlLXRleHQtd3JhcHBlci5hYm91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTg2ODQ7IH1cXG4gICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLmFib3V0IGEge1xcbiAgICAgIGNvbG9yOiAjZmRlM2UyOyB9XFxuICAgICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLmFib3V0IGE6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cXG4gICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLmFib3V0IHN2ZyB7XFxuICAgICAgZmlsbDogI2ZkZTNlMjsgfVxcbiAgICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5hYm91dCBzdmc6aG92ZXIge1xcbiAgICAgICAgZmlsbDogI2ZmZjsgfVxcbiAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLnNwbGVuZGlmZXJvdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJkZWUzOyB9XFxuICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5zcGxlbmRpZmVyb3VzIGEge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5zcGxlbmRpZmVyb3VzIGE6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cXG4gICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLnNwbGVuZGlmZXJvdXMgc3ZnIHtcXG4gICAgICBmaWxsOiB3aGl0ZTsgfVxcbiAgICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5zcGxlbmRpZmVyb3VzIHN2Zzpob3ZlciB7XFxuICAgICAgICBmaWxsOiAjZmZmOyB9XFxuICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIuZm91bmRpbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA5ZDY5OyB9XFxuICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5mb3VuZGluZyBhIHtcXG4gICAgICBjb2xvcjogI2Y5ZGFjNjsgfVxcbiAgICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5mb3VuZGluZyBhOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5mb3VuZGluZyBzdmcge1xcbiAgICAgIGZpbGw6ICNmOWRhYzY7IH1cXG4gICAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIuZm91bmRpbmcgc3ZnOmhvdmVyIHtcXG4gICAgICAgIGZpbGw6ICNmZmY7IH1cXG4gIC5mZWF0dXJlLXRleHQtd3JhcHBlci5zbGluZ2luZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNTg5YzA7IH1cXG4gICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLnNsaW5naW5nIGEge1xcbiAgICAgIGNvbG9yOiAjZGZjYmU0OyB9XFxuICAgICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLnNsaW5naW5nIGE6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cXG4gICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLnNsaW5naW5nIHN2ZyB7XFxuICAgICAgZmlsbDogI2RmY2JlNDsgfVxcbiAgICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5zbGluZ2luZyBzdmc6aG92ZXIge1xcbiAgICAgICAgZmlsbDogI2ZmZjsgfVxcbiAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLnR1cmtleSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzlkZGE7IH1cXG4gICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLnR1cmtleSBhIHtcXG4gICAgICBjb2xvcjogI2QyZGJmMTsgfVxcbiAgICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci50dXJrZXkgYTpob3ZlciB7XFxuICAgICAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAuZmVhdHVyZS10ZXh0LXdyYXBwZXIudHVya2V5IHN2ZyB7XFxuICAgICAgZmlsbDogI2QyZGJmMTsgfVxcbiAgICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci50dXJrZXkgc3ZnOmhvdmVyIHtcXG4gICAgICAgIGZpbGw6ICNmZmY7IH1cXG4gIC5mZWF0dXJlLXRleHQtd3JhcHBlci5kZXdkcm9wcGVycyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGE1YWQ7IH1cXG4gICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLmRld2Ryb3BwZXJzIGEge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5kZXdkcm9wcGVycyBhOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgIC5mZWF0dXJlLXRleHQtd3JhcHBlci5kZXdkcm9wcGVycyBzdmcge1xcbiAgICAgIGZpbGw6IHdoaXRlOyB9XFxuICAgICAgLmZlYXR1cmUtdGV4dC13cmFwcGVyLmRld2Ryb3BwZXJzIHN2Zzpob3ZlciB7XFxuICAgICAgICBmaWxsOiAjZmZmOyB9XFxuXFxuLmZlYXR1cmUtdGV4dCB7XFxuICB3aWR0aDogY2FsYyg5MCUgLSAxLjlyZW0pO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDUlIC0gMS4wNXJlbSArIDJyZW0pO1xcbiAgbWFyZ2luLXRvcDogNi4zM3JlbTsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLmZlYXR1cmUtdGV4dCB7XFxuICAgICAgd2lkdGg6IGNhbGMoOTEuNjY2NjclIC0gMS41MzMzM3JlbSk7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcXG4gICAgICBtYXJnaW4tbGVmdDogY2FsYyg0LjE2NjY3JSAtIDAuODMzMzNyZW0gKyAxLjZyZW0pOyB9IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAuZmVhdHVyZS10ZXh0IHtcXG4gICAgICB3aWR0aDogY2FsYyg3NSUgLSAxLjMxMjVyZW0pO1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDE4Ljc1JSAtIDAuODkwNjJyZW0gKyAxLjVyZW0pO1xcbiAgICAgIG1hcmdpbi10b3A6IDA7IH0gfVxcblxcbi5mZWF0dXJlLXRleHQgaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmZlYXR1cmUtdGV4dCBwIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW46IDAuMjVyZW0gMHJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwcmVtOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuZmVhdHVyZS10ZXh0IHAge1xcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTsgfSB9XFxuICAuZmVhdHVyZS10ZXh0IHAucmV2aWV3IHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIHRleHQtaW5kZW50OiAwOyB9XFxuXFxuLmZlYXR1cmUtdGV4dCBzcGFuIHtcXG4gIHBhZGRpbmctbGVmdDogMWVtOyB9XFxuXFxuLmZlYXR1cmUtdGV4dCBocixcXG4uZmVhdHVyZS1jb250YWN0LXdyYXBwZXIgaHIsXFxuLmZlYXR1cmUtYnV5LXdyYXBwZXIgaHIge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHggMCAwIDA7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4OyB9XFxuICAuZmVhdHVyZS10ZXh0IGhyOmJlZm9yZSxcXG4gIC5mZWF0dXJlLWNvbnRhY3Qtd3JhcHBlciBocjpiZWZvcmUsXFxuICAuZmVhdHVyZS1idXktd3JhcHBlciBocjpiZWZvcmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogLTM1cHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyB9XFxuICAuZmVhdHVyZS10ZXh0IGhyLmFib3V0LFxcbiAgLmZlYXR1cmUtY29udGFjdC13cmFwcGVyIGhyLmFib3V0LFxcbiAgLmZlYXR1cmUtYnV5LXdyYXBwZXIgaHIuYWJvdXQge1xcbiAgICBjb2xvcjogI2ZkZTNlMjsgfVxcbiAgLmZlYXR1cmUtdGV4dCBoci5zcGxlbmRpZmVyb3VzLFxcbiAgLmZlYXR1cmUtY29udGFjdC13cmFwcGVyIGhyLnNwbGVuZGlmZXJvdXMsXFxuICAuZmVhdHVyZS1idXktd3JhcHBlciBoci5zcGxlbmRpZmVyb3VzIHtcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuICAuZmVhdHVyZS10ZXh0IGhyLmZvdW5kaW5nLFxcbiAgLmZlYXR1cmUtY29udGFjdC13cmFwcGVyIGhyLmZvdW5kaW5nLFxcbiAgLmZlYXR1cmUtYnV5LXdyYXBwZXIgaHIuZm91bmRpbmcge1xcbiAgICBjb2xvcjogI2Y5ZGFjNjsgfVxcbiAgLmZlYXR1cmUtdGV4dCBoci5zbGluZ2luZyxcXG4gIC5mZWF0dXJlLWNvbnRhY3Qtd3JhcHBlciBoci5zbGluZ2luZyxcXG4gIC5mZWF0dXJlLWJ1eS13cmFwcGVyIGhyLnNsaW5naW5nIHtcXG4gICAgY29sb3I6ICNkZmNiZTQ7IH1cXG4gIC5mZWF0dXJlLXRleHQgaHIudHVya2V5LFxcbiAgLmZlYXR1cmUtY29udGFjdC13cmFwcGVyIGhyLnR1cmtleSxcXG4gIC5mZWF0dXJlLWJ1eS13cmFwcGVyIGhyLnR1cmtleSB7XFxuICAgIGNvbG9yOiAjZDJkYmYxOyB9XFxuICAuZmVhdHVyZS10ZXh0IGhyLmRld2Ryb3BwZXJzLFxcbiAgLmZlYXR1cmUtY29udGFjdC13cmFwcGVyIGhyLmRld2Ryb3BwZXJzLFxcbiAgLmZlYXR1cmUtYnV5LXdyYXBwZXIgaHIuZGV3ZHJvcHBlcnMge1xcbiAgICBjb2xvcjogd2hpdGU7IH1cXG5cXG4uZmVhdHVyZS1jb250YWN0LXdyYXBwZXIsXFxuLmZlYXR1cmUtYnV5LXdyYXBwZXIge1xcbiAgd2lkdGg6IGNhbGMoOTAlIC0gMS45cmVtKTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tbGVmdDogY2FsYyg1JSAtIDEuMDVyZW0gKyAycmVtKTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuZmVhdHVyZS1jb250YWN0LXdyYXBwZXIsXFxuICAgIC5mZWF0dXJlLWJ1eS13cmFwcGVyIHtcXG4gICAgICB3aWR0aDogY2FsYyg5MS42NjY2NyUgLSAxLjUzMzMzcmVtKTtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgICBtYXJnaW4tbGVmdDogMC44cmVtO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDQuMTY2NjclIC0gMC44MzMzM3JlbSArIDEuNnJlbSk7IH0gfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5mZWF0dXJlLWNvbnRhY3Qtd3JhcHBlcixcXG4gICAgLmZlYXR1cmUtYnV5LXdyYXBwZXIge1xcbiAgICAgIHdpZHRoOiBjYWxjKDc1JSAtIDEuMzEyNXJlbSk7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XFxuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTguNzUlIC0gMC44OTA2MnJlbSArIDEuNXJlbSk7IH0gfVxcblxcbi5mZWF0dXJlLWNvbnRhY3Qtd3JhcHBlciBoNCxcXG4uZmVhdHVyZS1idXktd3JhcHBlciBoNCB7XFxuICBtYXJnaW46IDAgYXV0bzsgfVxcblxcbi5mZWF0dXJlLWNvbnRhY3QtbGlua3MgbGksXFxuLmZlYXR1cmUtYnV5LWxpbmtzIGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMC41cmVtOyB9XFxuXFxuLmZlYXR1cmUtY29udGFjdC1saW5rcyBzcGFuLFxcbi5mZWF0dXJlLWJ1eS1saW5rcyBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLyogPT09IEJPT0tTIEFORCBDTElQUyBQQUdFUyBVU0UgQ09MTEVDVElPTiBMQVlPVVQgPT09ICovXFxuLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRyYW5zaXRpb246IGFsbCA3NTBtcyBlYXNlLWluLW91dDsgfVxcbiAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnNwbGVuZGlmZXJvdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJkZWUzOyB9XFxuICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5zcGxlbmRpZmVyb3VzIGEge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5zcGxlbmRpZmVyb3VzIGE6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cXG4gICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnNwbGVuZGlmZXJvdXMgc3ZnIHtcXG4gICAgICBmaWxsOiB3aGl0ZTsgfVxcbiAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5zcGxlbmRpZmVyb3VzIHN2Zzpob3ZlciB7XFxuICAgICAgICBmaWxsOiAjZmZmOyB9XFxuICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6aG92ZXIuZm91bmRpbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA5ZDY5OyB9XFxuICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5mb3VuZGluZyBhIHtcXG4gICAgICBjb2xvcjogI2Y5ZGFjNjsgfVxcbiAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5mb3VuZGluZyBhOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5mb3VuZGluZyBzdmcge1xcbiAgICAgIGZpbGw6ICNmOWRhYzY7IH1cXG4gICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6aG92ZXIuZm91bmRpbmcgc3ZnOmhvdmVyIHtcXG4gICAgICAgIGZpbGw6ICNmZmY7IH1cXG4gIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5zbGluZ2luZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNTg5YzA7IH1cXG4gICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnNsaW5naW5nIGEge1xcbiAgICAgIGNvbG9yOiAjZGZjYmU0OyB9XFxuICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnNsaW5naW5nIGE6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cXG4gICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnNsaW5naW5nIHN2ZyB7XFxuICAgICAgZmlsbDogI2RmY2JlNDsgfVxcbiAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5zbGluZ2luZyBzdmc6aG92ZXIge1xcbiAgICAgICAgZmlsbDogI2ZmZjsgfVxcbiAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnR1cmtleSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzlkZGE7IH1cXG4gICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLnR1cmtleSBhIHtcXG4gICAgICBjb2xvcjogI2QyZGJmMTsgfVxcbiAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci50dXJrZXkgYTpob3ZlciB7XFxuICAgICAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6aG92ZXIudHVya2V5IHN2ZyB7XFxuICAgICAgZmlsbDogI2QyZGJmMTsgfVxcbiAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci50dXJrZXkgc3ZnOmhvdmVyIHtcXG4gICAgICAgIGZpbGw6ICNmZmY7IH1cXG4gIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5kZXdkcm9wcGVycyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGE1YWQ7IH1cXG4gICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLmRld2Ryb3BwZXJzIGEge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5kZXdkcm9wcGVycyBhOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5kZXdkcm9wcGVycyBzdmcge1xcbiAgICAgIGZpbGw6IHdoaXRlOyB9XFxuICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLmRld2Ryb3BwZXJzIHN2Zzpob3ZlciB7XFxuICAgICAgICBmaWxsOiAjZmZmOyB9XFxuICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6aG92ZXIuY2xpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTY0NTk7XFxuICAgIGNvbG9yOiAjZDlkZmRiOyB9XFxuICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpob3Zlci5jbGlwIGEge1xcbiAgICAgIGNvbG9yOiAjZDlkZmRiOyB9XFxuICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOmhvdmVyLmNsaXAgYTpob3ZlciB7XFxuICAgICAgICBjb2xvcjogI2ZmZjsgfVxcbiAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6aG92ZXIuY2xpcCBzdmcge1xcbiAgICAgIGZpbGw6ICNkOWRmZGI7IH1cXG4gICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6aG92ZXIuY2xpcCBzdmc6aG92ZXIge1xcbiAgICAgICAgZmlsbDogI2ZmZjsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyIHtcXG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSAxLjJyZW0pO1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjhyZW07XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOm50aC1jaGlsZCgybiArIDEpIHtcXG4gICAgICAgIGNsZWFyOiBsZWZ0OyB9XFxuICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOm50aC1jaGlsZCgybiArIDEpOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMjUlIC0gMXJlbSArIDEuNnJlbSk7IH0gfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlciB7XFxuICAgICAgd2lkdGg6IGNhbGMoMzMuMzMzMzMlIC0gMXJlbSk7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07IH1cXG4gICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6bnRoLWNoaWxkKDJuICsgMSkge1xcbiAgICAgICAgY2xlYXI6IG5vbmU7IH1cXG4gICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6bnRoLWNoaWxkKDNuICsgMSkge1xcbiAgICAgICAgY2xlYXI6IGxlZnQ7IH1cXG4gICAgICAuY29sbGVjdGlvbi1pdGVtLXdyYXBwZXI6bnRoLWNoaWxkKDNuICsgMSk6bnRoLWxhc3QtY2hpbGQoMikge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTYuNjY2NjclIC0gMC44NzVyZW0gKyAxLjVyZW0pOyB9XFxuICAgICAgLmNvbGxlY3Rpb24taXRlbS13cmFwcGVyOm50aC1jaGlsZCgybiArIDEpOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMCUgLSAwLjc1cmVtICsgMS41cmVtKTsgfVxcbiAgICAgIC5jb2xsZWN0aW9uLWl0ZW0td3JhcHBlcjpudGgtY2hpbGQoM24gKyAxKTpsYXN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDMzLjMzMzMzJSAtIDFyZW0gKyAxLjVyZW0pOyB9IH1cXG5cXG4uY29sbGVjdGlvbi1pdGVtLWltYWdlLXdyYXBwZXIge1xcbiAgbWluLWhlaWdodDogMzA1cHg7IH1cXG5cXG4uY29sbGVjdGlvbi1pdGVtIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW46IDAgYXV0byAxcmVtIGF1dG87XFxuICBib3JkZXI6IGRvdWJsZSAjMDAwO1xcbiAgYm94LXNoYWRvdzogMC4zM3JlbSAwLjMzcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjY2KTsgfVxcblxcbi5jb2xsZWN0aW9uLWl0ZW0tdGV4dC13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDAgMXJlbTsgfVxcblxcbi5jb2xsZWN0aW9uLWl0ZW0gaDIsXFxuLmNvbGxlY3Rpb24taXRlbSBoMyxcXG4uY29sbGVjdGlvbi1pdGVtIGg0LFxcbi5jb2xsZWN0aW9uLWl0ZW0gaDUsXFxuLmNvbGxlY3Rpb24taXRlbSBoNiB7XFxuICBtaW4taGVpZ2h0OiAzLjhyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLmNvbGxlY3Rpb24taXRlbSBoNS5ib29rIHtcXG4gIG1pbi1oZWlnaHQ6IDIuNHJlbTsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5jb2xsZWN0aW9uLWl0ZW0gaDUuYm9vayB7XFxuICAgICAgbWluLWhlaWdodDogMy44cmVtOyB9IH1cXG5cXG4uY2xpcCAuY29sbGVjdGlvbi1pdGVtLXRleHQtd3JhcHBlciBwIHtcXG4gIG1heC13aWR0aDogNTUwcHg7XFxuICBtYXJnaW46IGF1dG87IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5jbGlwIC5jb2xsZWN0aW9uLWl0ZW0tdGV4dC13cmFwcGVyIHAge1xcbiAgICAgIG1pbi1oZWlnaHQ6IDE2MHB4OyB9IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAuY2xpcCAuY29sbGVjdGlvbi1pdGVtLXRleHQtd3JhcHBlciBwIHtcXG4gICAgICBtaW4taGVpZ2h0OiAxODBweDsgfSB9XFxuXFxuLmJvb2sgLmNvbGxlY3Rpb24taXRlbS10ZXh0LXdyYXBwZXIgcCB7XFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgbWFyZ2luOiBhdXRvOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuYm9vayAuY29sbGVjdGlvbi1pdGVtLXRleHQtd3JhcHBlciBwIHtcXG4gICAgICBtaW4taGVpZ2h0OiA5MHB4OyB9IH1cXG5cXG4uY29sbGVjdGlvbi1pdGVtLXRleHQtd3JhcHBlciBidXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiBkb3VibGUgIzAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi8qID09PSBGT09URVIgTU9EVUxFUyA9PT0gKi9cXG4uY29weXJpZ2h0IHtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmlzLXByZWxvYWRpbmcgKiB7XFxuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXCJ1c2VyIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbi8vIFByZXZlbnQgQ1NTIGFuaW1hdGlvbnMgb24gbG9hZFxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKTtcbiAgYm9keVswXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtcHJlbG9hZGluZ1wiKTtcbn07XG5cbi8vIE5hdmlnYXRpb24gbWVudVxuXG4vLyBEZWZpbmUgY29sbGFwc2libGUgYW5pbWF0aW9uIGZ1bmN0aW9uc1xuLy8gSW5zcGlyYXRpb24gZnJvbSBCcmFuZG9uIFNtaXRoJ3MgQ1NTIFRyaWNrcyBQb3N0XG4vLyBodHRwczovL2Nzcy10cmlja3MuY29tL3VzaW5nLWNzcy10cmFuc2l0aW9ucy1hdXRvLWRpbWVuc2lvbnMvXG5jb25zdCBjb2xsYXBzZVNlY3Rpb24gPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3QgY29udGVudEhlaWdodDogbnVtYmVyID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gIGNvbnN0IGVsZW1lbnRUcmFuc2l0aW9uOiBzdHJpbmcgPSBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb247XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAvLyBTZXQgZWxlbWVudCBoZWlnaHQgYmVmb3JlIGNvbGxhcHNlIGZyYW1lXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtjb250ZW50SGVpZ2h0fXB4YDtcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBlbGVtZW50VHJhbnNpdGlvbjtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAkezB9cHhgO1xuICAgICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgfSk7XG4gIH0pO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY29sbGFwc2VkXCIsIFwidHJ1ZVwiKTtcbn07XG5cbmNvbnN0IGV4cGFuZFNlY3Rpb24gPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3QgY29udGVudEhlaWdodDogbnVtYmVyID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG5cbiAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtjb250ZW50SGVpZ2h0fXB4YDtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbGxhcHNlZFwiLCBcImZhbHNlXCIpO1xufTtcblxuY29uc3QgdG9nZ2xlQ29sbGFwc2UgPSAoXG4gIGV2ZW50RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGFuaW1hdGVFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZXZlbnQ6IHN0cmluZ1xuKSA9PiB7XG4gIGV2ZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGAke2V2ZW50fWAsICgpID0+IHtcbiAgICBjb25zdCBpc0NvbGxhcHNlZCA9XG4gICAgICBhbmltYXRlRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbGxhcHNlZFwiKSA9PT0gXCJ0cnVlXCI7XG5cbiAgICBpZiAoaXNDb2xsYXBzZWQpIHtcbiAgICAgIGV4cGFuZFNlY3Rpb24oYW5pbWF0ZUVsZW1lbnQpO1xuICAgICAgYW5pbWF0ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2xsYXBzZWRcIiwgXCJmYWxzZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sbGFwc2VTZWN0aW9uKGFuaW1hdGVFbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gQ2FsbCBjb2xsYXBzaWJsZSBhbmltYXRpb24gb24gbmF2aWdhdGlvblxuY29uc3QgbW9iaWxlTmF2QnV0dG9uOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI25hdi1tb2JpbGUtYnV0dG9uXCJcbik7XG5jb25zdCBuYXZMaW5rV3JhcHBlcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdi1saW5rLXdyYXBwZXJcIik7XG5cbnRvZ2dsZUNvbGxhcHNlKG1vYmlsZU5hdkJ1dHRvbiwgbmF2TGlua1dyYXBwZXIsIFwiY2xpY2tcIik7XG5cbi8vIENvcHlyaWdodCBkYXRlXG5sZXQgeWVhclN0cmluZyA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xubGV0IGNvcHlyaWdodERhdGVXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3B5cmlnaHQtZGF0ZVwiKTtcbmNvcHlyaWdodERhdGVXcmFwcGVyLmlubmVySFRNTCA9IHllYXJTdHJpbmc7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS01LTMhLi9pbmRleC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTUtMyEuL2luZGV4LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTUtMyEuL2luZGV4LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9