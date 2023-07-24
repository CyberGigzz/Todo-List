/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\"strict\";\n\nclass UI {\n  static initAddProjectButtons() {\n    const addProjectButton = document.getElementById(\"add-projects-button\");\n    const addProjectPopup = document.getElementById(\"add-project-popup\");\n    const addList = document.getElementById(\"add-list\");\n    const cancelProjectButton = document.getElementById(\"button-cancel-project-popup\");\n\n    // Add Project button\n    addProjectButton.addEventListener(\"click\", () => {\n      addList.classList.remove(\"active\");\n      addProjectPopup.classList.add(\"active\"); \n    });\n\n    // Cancel button\n    cancelProjectButton.addEventListener(\"click\", () => {\n      addList.classList.add(\"active\");\n      addProjectPopup.classList.remove(\"active\"); \n    });\n  }\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", UI.initAddProjectButtons);\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;