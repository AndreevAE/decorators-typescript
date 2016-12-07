/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var decorators_1 = __webpack_require__(1);
	var Test = (function () {
	    function Test() {
	        this.log = "";
	    }
	    Test.prototype.testDebounce = function () {
	        this.log += "Debounce";
	    };
	    Test.prototype.testThrottle = function () {
	        this.log += "Throttle";
	    };
	    __decorate([
	        decorators_1._debounce(1000)
	    ], Test.prototype, "testDebounce", null);
	    __decorate([
	        decorators_1._throttle(1000)
	    ], Test.prototype, "testThrottle", null);
	    return Test;
	}());
	exports.Test = Test;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="./decorators.d.ts" />
	"use strict";
	var decorators_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"decorators\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	function _debounce(timeDelay) {
	    return function (target, propertyKey, descriptor) {
	        descriptor.value = function (func) {
	            return decorators_1.debounce(func, timeDelay);
	        };
	        return descriptor;
	    };
	}
	exports._debounce = _debounce;
	function _throttle(timeDelay) {
	    return function (target, propertyKey, descriptor) {
	        descriptor.value = function (func) {
	            return decorators_1.throttle(func, timeDelay);
	        };
	        return descriptor;
	    };
	}
	exports._throttle = _throttle;


/***/ }
/******/ ]);