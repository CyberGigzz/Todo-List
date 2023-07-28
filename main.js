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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\r\n\r\n// Importing\r\n\r\n\r\nclass UI {\r\n  constructor() {\r\n    this.dynamicButtonsArray = [];\r\n    this.initAddProjectButtons();\r\n    this.initAddTasksButtons();\r\n    this.initAddListButton();\r\n  }\r\n\r\n  // Closing popups\r\n  closeAllPopups() {\r\n    const popupProject = document.getElementById(\"add-project-popup\");\r\n    const popupTask = document.getElementById(\"add-task-popup\");\r\n    const addList = document.getElementById(\"add-list\");\r\n    const addTask = document.getElementById(\"tasks-div\");\r\n    popupProject.classList.remove(\"active\");\r\n    popupTask.classList.remove(\"active\");\r\n    addList.classList.add(\"active\");\r\n    addTask.classList.remove(\"active\");\r\n  }\r\n\r\n  initAddProjectButtons() {\r\n    const addProjectButton = document.getElementById(\"add-projects-button\");\r\n    const addProjectPopup = document.getElementById(\"add-project-popup\");\r\n    const addList = document.getElementById(\"add-list\");\r\n    const cancelProjectButton = document.getElementById(\r\n      \"button-cancel-project-popup\"\r\n    );\r\n\r\n    // Add Project button\r\n    addProjectButton.addEventListener(\"click\", () => {\r\n      this.closeAllPopups();\r\n      addList.classList.remove(\"active\");\r\n      addProjectPopup.classList.add(\"active\");\r\n    });\r\n\r\n    // Cancel button\r\n    cancelProjectButton.addEventListener(\"click\", () => {\r\n      addList.classList.add(\"active\");\r\n      addProjectPopup.classList.remove(\"active\");\r\n    });\r\n  }\r\n\r\n  initAddTasksButtons() {\r\n    const addTaskButton = document.getElementById(\"add-tasks-button\");\r\n    const addTask = document.getElementById(\"tasks-div\");\r\n    const addTasksPopup = document.getElementById(\"add-task-popup\");\r\n    const cancelListButton = document.getElementById(\r\n      \"button-cancel-list-popup\"\r\n    );\r\n\r\n    // Add Project button\r\n    addTaskButton.addEventListener(\"click\", () => {\r\n      this.closeAllPopups();\r\n      addTask.classList.add(\"active\");\r\n      addTasksPopup.classList.add(\"active\");\r\n    });\r\n\r\n    // Cancel button\r\n    cancelListButton.addEventListener(\"click\", () => {\r\n      addTasksPopup.classList.remove(\"active\");\r\n      addTask.classList.remove(\"active\");\r\n    });\r\n  }\r\n\r\n  initAddListButton() {\r\n    const addListButton = document.getElementById(\"button-add-project-popup\");\r\n    const addListInput = document.getElementById(\"input-add-project-popup\");\r\n    const navElementsDiv = document.getElementById(\"nav-elements\");\r\n\r\n    const closePopup = () => {\r\n      addListInput.value = \"\"; // Clear the input\r\n      addListInput.blur(); // Remove focus from the input\r\n      this.closeAllPopups(); // Close the popup\r\n    };\r\n\r\n    addListButton.addEventListener(\"click\", () => {\r\n      const newListName = addListInput.value.trim();\r\n\r\n      if (newListName !== \"\") {\r\n        \r\n        const newButton = new _modules_UI__WEBPACK_IMPORTED_MODULE_0__.DynamicButton(newListName, this);\r\n\r\n        this.dynamicButtonsArray.push(newButton);\r\n\r\n        console.log(this.dynamicButtonsArray);\r\n\r\n        navElementsDiv.appendChild(newButton.element);\r\n        addListInput.value = \"\";\r\n\r\n        // Add an event listener to the new button to handle clicks\r\n        newButton.element.addEventListener(\"click\", () => {\r\n          // Set the active property of all buttons to false\r\n          this.dynamicButtonsArray.forEach((button) => {\r\n            button.active = false;\r\n          });\r\n\r\n          // Set the active property of the clicked button to true\r\n          newButton.active = true;\r\n        });\r\n      }\r\n    });\r\n\r\n    // Handle the keydown event on the input\r\n    addListInput.addEventListener(\"keydown\", (event) => {\r\n      if (event.key === \"Enter\") {\r\n        addListButton.click(); // Trigger the \"Add\" button click event\r\n      } else if (event.key === \"Escape\") {\r\n        closePopup(); // Handle the \"Escape\" key to cancel\r\n      }\r\n    });\r\n\r\n    // Handle the click event on the \"Cancel\" button\r\n    const cancelButton = document.getElementById(\"button-cancel-project-popup\");\r\n    cancelButton.addEventListener(\"click\", () => {\r\n      closePopup();\r\n    });\r\n  }\r\n\r\n  removeButton(button) {\r\n    const index = this.dynamicButtonsArray.indexOf(button);\r\n    if (index !== -1) {\r\n      this.dynamicButtonsArray.splice(index, 1);\r\n    }\r\n  }\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const ui = new UI();\r\n});\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DynamicButton: () => (/* binding */ DynamicButton)\n/* harmony export */ });\nclass DynamicButton {\r\n  constructor(name, ui) {\r\n    this.name = name;\r\n    this.ui = ui;\r\n    this.active = false;\r\n    this.element = this.createButtonElement();\r\n\r\n    // Check if the element has the \"active\" class initially\r\n    if (this.element.classList.contains(\"active\")) {\r\n      this.active = true;\r\n    }\r\n  }\r\n\r\n  createButtonElement() {\r\n    const button = document.createElement(\"button\");\r\n    button.classList.add(\"button-list\");\r\n\r\n    const iconSvg1 = document.createElementNS(\r\n      \"http://www.w3.org/2000/svg\",\r\n      \"svg\"\r\n    );\r\n    iconSvg1.classList.add(\"icon\");\r\n    const use1 = document.createElementNS(\"http://www.w3.org/2000/svg\", \"use\");\r\n    use1.setAttributeNS(\r\n      \"http://www.w3.org/1999/xlink\",\r\n      \"xlink:href\",\r\n      \"./images/sprite.svg#list-check-solid\"\r\n    );\r\n    iconSvg1.appendChild(use1);\r\n\r\n    const span = document.createElement(\"span\");\r\n    span.textContent = this.name;\r\n\r\n    const iconSvg2 = document.createElementNS(\r\n      \"http://www.w3.org/2000/svg\",\r\n      \"svg\"\r\n    );\r\n    iconSvg2.classList.add(\"icon\", \"icon_x\");\r\n    const use2 = document.createElementNS(\"http://www.w3.org/2000/svg\", \"use\");\r\n    use2.setAttributeNS(\r\n      \"http://www.w3.org/1999/xlink\",\r\n      \"xlink:href\",\r\n      \"./images/sprite.svg#x-solid\"\r\n    );\r\n    iconSvg2.appendChild(use2);\r\n\r\n    iconSvg2.addEventListener(\"click\", (event) => {\r\n      event.stopPropagation();\r\n      this.deleteButton();\r\n    });\r\n\r\n    button.appendChild(iconSvg1);\r\n    button.appendChild(span);\r\n    button.appendChild(iconSvg2);\r\n\r\n    button.addEventListener(\"click\", () => {\r\n      this.handleButtonClick();\r\n    });\r\n\r\n    return button;\r\n  }\r\n\r\n  toggleActive() {\r\n    this.active = !this.active;\r\n  }\r\n\r\n  handleButtonClick() {\r\n    // Toggle the active state\r\n    this.toggleActive();\r\n    console.log(this.active);\r\n\r\n    // Remove the \"active\" class from the previously active button (if any)\r\n    const prevActiveButton = document.querySelector(\".button-list.active\");\r\n    console.log(prevActiveButton);\r\n    if (prevActiveButton !== null) {\r\n      const prevActiveButtonSpan = prevActiveButton.querySelector(\"span\");\r\n      prevActiveButtonSpan.classList.remove(\"bold-text\");\r\n      prevActiveButton.classList.remove(\"active\");\r\n    }\r\n\r\n    // Add the \"active\" class to the current active button (if it is now active)\r\n    if (this.active) {\r\n      const span = this.element.querySelector(\"span\");\r\n      span.classList.add(\"bold-text\");\r\n      this.element.classList.add(\"active\");\r\n    } else {\r\n      const span = this.element.querySelector(\"span\");\r\n      span.classList.remove(\"bold-text\");\r\n      this.element.classList.remove(\"active\");\r\n    }\r\n  }\r\n\r\n  // deleteButton() {\r\n  //   const navElementsDiv = document.getElementById(\"nav-elements\");\r\n  //   navElementsDiv.removeChild(this.element);\r\n  // }\r\n\r\n  deleteButton() {\r\n    const navElementsDiv = document.getElementById(\"nav-elements\");\r\n    navElementsDiv.removeChild(this.element);\r\n    this.ui.removeButton(this);\r\n  }\r\n\r\n  \r\n  \r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/UI.js?");

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