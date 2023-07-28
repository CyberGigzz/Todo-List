/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\n\n// Importing\n\n\nclass UI {\n  constructor() {\n    this.dynamicButtonsArray = [];\n    this.initAddProjectButtons();\n    this.initAddTasksButtons();\n    this.initAddListButton();\n  }\n\n  // Closing popups\n  closeAllPopups() {\n    const popupProject = document.getElementById(\"add-project-popup\");\n    const popupTask = document.getElementById(\"add-task-popup\");\n    const addList = document.getElementById(\"add-list\");\n    const addTask = document.getElementById(\"tasks-div\");\n    popupProject.classList.remove(\"active\");\n    popupTask.classList.remove(\"active\");\n    addList.classList.add(\"active\");\n    addTask.classList.remove(\"active\");\n  }\n\n  initAddProjectButtons() {\n    const addProjectButton = document.getElementById(\"add-projects-button\");\n    const addProjectPopup = document.getElementById(\"add-project-popup\");\n    const addList = document.getElementById(\"add-list\");\n    const cancelProjectButton = document.getElementById(\n      \"button-cancel-project-popup\"\n    );\n\n    // Add Project button\n    addProjectButton.addEventListener(\"click\", () => {\n      this.closeAllPopups();\n      addList.classList.remove(\"active\");\n      addProjectPopup.classList.add(\"active\");\n    });\n\n    // Cancel button\n    cancelProjectButton.addEventListener(\"click\", () => {\n      addList.classList.add(\"active\");\n      addProjectPopup.classList.remove(\"active\");\n    });\n  }\n\n  initAddTasksButtons() {\n    const addTaskButton = document.getElementById(\"add-tasks-button\");\n    const addTask = document.getElementById(\"tasks-div\");\n    const addTasksPopup = document.getElementById(\"add-task-popup\");\n    const cancelListButton = document.getElementById(\n      \"button-cancel-list-popup\"\n    );\n\n    // Add Project button\n    addTaskButton.addEventListener(\"click\", () => {\n      this.closeAllPopups();\n      addTask.classList.add(\"active\");\n      addTasksPopup.classList.add(\"active\");\n    });\n\n    // Cancel button\n    cancelListButton.addEventListener(\"click\", () => {\n      addTasksPopup.classList.remove(\"active\");\n      addTask.classList.remove(\"active\");\n    });\n  }\n\n  initAddListButton() {\n    const addListButton = document.getElementById(\"button-add-project-popup\");\n    const addListInput = document.getElementById(\"input-add-project-popup\");\n    const navElementsDiv = document.getElementById(\"nav-elements\");\n\n    const closePopup = () => {\n      addListInput.value = \"\"; // Clear the input\n      addListInput.blur(); // Remove focus from the input\n      this.closeAllPopups(); // Close the popup\n    };\n\n    // const deleteButton = (button) => {\n    //   // Remove the button from the navElementsDiv\n    //   navElementsDiv.removeChild(button);\n    // };\n\n    addListButton.addEventListener(\"click\", () => {\n      const newListName = addListInput.value.trim();\n\n      if (newListName !== \"\") {\n        const newButton = new _modules_UI__WEBPACK_IMPORTED_MODULE_0__.DynamicButton(newListName);\n        this.dynamicButtonsArray.push(newButton);\n\n        console.log(this.dynamicButtonsArray);\n\n        navElementsDiv.appendChild(newButton.element);\n        addListInput.value = \"\";\n      }\n    });\n\n    // Handle the keydown event on the input\n    addListInput.addEventListener(\"keydown\", (event) => {\n      if (event.key === \"Enter\") {\n        addListButton.click(); // Trigger the \"Add\" button click event\n      } else if (event.key === \"Escape\") {\n        closePopup(); // Handle the \"Escape\" key to cancel\n      }\n    });\n\n    // Handle the click event on the \"Cancel\" button\n    const cancelButton = document.getElementById(\"button-cancel-project-popup\");\n    cancelButton.addEventListener(\"click\", () => {\n      closePopup();\n    });\n  }\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const ui = new UI();\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DynamicButton: () => (/* binding */ DynamicButton)\n/* harmony export */ });\nclass DynamicButton {\n  constructor(name) {\n    this.name = name;\n    this.active = false;\n    this.element = this.createButtonElement();\n\n    // Check if the element has the \"active\" class initially\n    if (this.element.classList.contains(\"active\")) {\n      this.active = true;\n    }\n  }\n\n  createButtonElement() {\n    const button = document.createElement(\"button\");\n    button.classList.add(\"button-list\");\n\n    const iconSvg1 = document.createElementNS(\n      \"http://www.w3.org/2000/svg\",\n      \"svg\"\n    );\n    iconSvg1.classList.add(\"icon\");\n    const use1 = document.createElementNS(\"http://www.w3.org/2000/svg\", \"use\");\n    use1.setAttributeNS(\n      \"http://www.w3.org/1999/xlink\",\n      \"xlink:href\",\n      \"./images/sprite.svg#list-check-solid\"\n    );\n    iconSvg1.appendChild(use1);\n\n    const span = document.createElement(\"span\");\n    span.textContent = this.name;\n\n    const iconSvg2 = document.createElementNS(\n      \"http://www.w3.org/2000/svg\",\n      \"svg\"\n    );\n    iconSvg2.classList.add(\"icon\", \"icon_x\");\n    const use2 = document.createElementNS(\"http://www.w3.org/2000/svg\", \"use\");\n    use2.setAttributeNS(\n      \"http://www.w3.org/1999/xlink\",\n      \"xlink:href\",\n      \"./images/sprite.svg#x-solid\"\n    );\n    iconSvg2.appendChild(use2);\n\n    iconSvg2.addEventListener(\"click\", (event) => {\n      event.stopPropagation();\n      this.deleteButton();\n    });\n\n    button.appendChild(iconSvg1);\n    button.appendChild(span);\n    button.appendChild(iconSvg2);\n\n    button.addEventListener(\"click\", () => {\n      this.handleButtonClick();\n    });\n\n    return button;\n  }\n\n  toggleActive() {\n    this.active = !this.active;\n  }\n\n  handleButtonClick() {\n    this.toggleActive();\n\n    const activeButton = document.querySelector(\".button-list.active\");\n    if (activeButton !== null) {\n      const activeButtonSpan = activeButton.querySelector(\"span\");\n      activeButtonSpan.classList.remove(\"bold-text\");\n      activeButton.classList.remove(\"active\");\n    }\n\n    if (this.active) {\n      const span = this.element.querySelector(\"span\");\n      span.classList.add(\"bold-text\");\n      this.element.classList.add(\"active\");\n    }\n  }\n\n  deleteButton() {\n    const navElementsDiv = document.getElementById(\"nav-elements\");\n    navElementsDiv.removeChild(this.element);\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/UI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;