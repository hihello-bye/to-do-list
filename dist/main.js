/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
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

eval("let toDoList = [];\nlet currentList = null;\n\nconst listContainer = document.getElementById('listContainer');\nconst taskContainer = document.getElementById('taskContainer');\nconst newListInput = document.getElementById('newListInput');\nconst createListBtn = document.getElementById('createListBtn');\nconst newTaskInput = document.getElementById('newTaskInput');\nconst addTaskBtn = document.getElementById('addTaskBtn');\n\nfunction createList(name) {\n    const newList = {name: name, tasks: []};\n    toDoList.push(newList);\n\n    const listButton = document.createElement('button');\n    listButton.textContent = name;\n\n    listButton.addEventListener('click', () => {\n        selectList(name);\n    })\n\n    listContainer.appendChild(listButton);\n\n}\n\ncreateListBtn.addEventListener('click', () => {\n    const listName = newListInput.value;\n\n    if (listName) {\n        createList(listName);\n        newListInput.value = '';\n    }\n})\n\nfunction selectList(listName) {\n    currentList = toDoList.find(list => list.name === listName);\n    updateDisplay();\n\n}\n\nfunction updateDisplay() {\n    taskContainer.innerHTML = '';\n\n    if (currentList) {\n        currentList.tasks.forEach(task => {\n            const taskEntry = document.createElement('li');\n            taskEntry.textContent = task;\n            taskContainer.appendChild(taskEntry);\n        })\n    }\n}\n\nfunction addTask() {\n    const taskDescription = newTaskInput.value;\n\n    if (currentList && taskDescription) {\n        currentList.tasks.push(taskDescription);\n        newTaskInput.value = '';\n        updateDisplay();\n    } else if (!currentList) {\n        alert('Select a list to add to');\n    } else {\n        alert('What do you need to do?');\n    }\n    \n}\n\naddTaskBtn.addEventListener('click', addTask);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdG9Eb0xpc3QgPSBbXTtcbmxldCBjdXJyZW50TGlzdCA9IG51bGw7XG5cbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdENvbnRhaW5lcicpO1xuY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrQ29udGFpbmVyJyk7XG5jb25zdCBuZXdMaXN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3TGlzdElucHV0Jyk7XG5jb25zdCBjcmVhdGVMaXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZUxpc3RCdG4nKTtcbmNvbnN0IG5ld1Rhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrSW5wdXQnKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J0bicpO1xuXG5mdW5jdGlvbiBjcmVhdGVMaXN0KG5hbWUpIHtcbiAgICBjb25zdCBuZXdMaXN0ID0ge25hbWU6IG5hbWUsIHRhc2tzOiBbXX07XG4gICAgdG9Eb0xpc3QucHVzaChuZXdMaXN0KTtcblxuICAgIGNvbnN0IGxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsaXN0QnV0dG9uLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNlbGVjdExpc3QobmFtZSk7XG4gICAgfSlcblxuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEJ1dHRvbik7XG5cbn1cblxuY3JlYXRlTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBsaXN0TmFtZSA9IG5ld0xpc3RJbnB1dC52YWx1ZTtcblxuICAgIGlmIChsaXN0TmFtZSkge1xuICAgICAgICBjcmVhdGVMaXN0KGxpc3ROYW1lKTtcbiAgICAgICAgbmV3TGlzdElucHV0LnZhbHVlID0gJyc7XG4gICAgfVxufSlcblxuZnVuY3Rpb24gc2VsZWN0TGlzdChsaXN0TmFtZSkge1xuICAgIGN1cnJlbnRMaXN0ID0gdG9Eb0xpc3QuZmluZChsaXN0ID0+IGxpc3QubmFtZSA9PT0gbGlzdE5hbWUpO1xuICAgIHVwZGF0ZURpc3BsYXkoKTtcblxufVxuXG5mdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpZiAoY3VycmVudExpc3QpIHtcbiAgICAgICAgY3VycmVudExpc3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICB0YXNrRW50cnkudGV4dENvbnRlbnQgPSB0YXNrO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRW50cnkpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBuZXdUYXNrSW5wdXQudmFsdWU7XG5cbiAgICBpZiAoY3VycmVudExpc3QgJiYgdGFza0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIGN1cnJlbnRMaXN0LnRhc2tzLnB1c2godGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgbmV3VGFza0lucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICB9IGVsc2UgaWYgKCFjdXJyZW50TGlzdCkge1xuICAgICAgICBhbGVydCgnU2VsZWN0IGEgbGlzdCB0byBhZGQgdG8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnV2hhdCBkbyB5b3UgbmVlZCB0byBkbz8nKTtcbiAgICB9XG4gICAgXG59XG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;