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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("const newScheduleButtons = document.querySelectorAll(\".new-schedule\");\nconst modal = document.getElementById(\"modal\");\nconst container = document.querySelector(\".container\");\nconst newScheduleButtonContainer = document.querySelector(\n  \"#new-schedule-container\"\n);\n\nnewScheduleButtons.forEach((button) =>\n  button.addEventListener(\"click\", () => {\n    modal.classList.remove(\"hiding\");\n    container.classList.add(\"blur\");\n    hideButton(button);\n  })\n);\n\nconst closeModal = document.querySelector(\"#close-modal\");\ncloseModal.onclick = function () {\n  modal.classList.add(\"hiding\");\n  container.classList.remove(\"blur\");\n  showButtons();\n};\n\nfunction hideButton(button) {\n  button.classList.add(\"hiding\");\n  newScheduleButtonContainer.classList.add(\"hiding\");\n}\n\nfunction showButtons() {\n  newScheduleButtons.forEach((button) => {\n    button.classList.remove(\"hiding\");\n    newScheduleButtonContainer.classList.remove(\"hiding\");\n  });\n}\n\n\n//# sourceURL=webpack://mundo-pet/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;