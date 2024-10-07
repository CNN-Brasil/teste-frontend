/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Block/Library/index.tsx":
/*!*************************************!*\
  !*** ./src/Block/Library/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const Library = props => {
  const [books, setBooks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.result.slice(0, 8));
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const getMoreBooks = () => {
    setBooks(props.result.slice(page * 8, (page + 1) * 8));
    setPage(page + 1);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "scroll-smooth alignfull wp-block-create-block-cnnbr-virtual-library w-screen",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "relative max-w-4xl my-0 mx-auto font-sans",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
        className: "text-2xl font-semibold font-sans mb-10",
        children: "Biblioteca Virtual"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "w-96 aspect-square bg-tertiary absolute z-[-1] -rotate-[61deg] top-[90px] -left-[170px]"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section", {
          className: "grid gap-5 grid-cols-[repeat(8,minmax(210px,1fr))] overflow-x-auto lg:grid-cols-4",
          children: (books || []).map(book => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "bg-white w-52 py-5 rounded flex items-center flex-col justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              className: "h-[12.5rem] w-[9rem] object-contain rounded",
              src: book.coverImage,
              alt: book.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              className: "text-base truncate font-medium w-[7.75rem] text-center mb-1 mt-4",
              title: book.name,
              children: book.name
            }), props.showAuthor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              className: "text-sm truncate text-center mb-4",
              children: book.autorName
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
              className: "bg-secondary text-white py-2 px-7 rounded cursor-pointer",
              onClick: () => window.open(book.bookUrl, "_blank"),
              children: "Ler Online"
            })]
          }, book.id))
        }), page < 4 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: "bg-primary text-white py-2 px-7 rounded mt-8 w-[21.5rem] text-center cursor-pointer",
          onClick: getMoreBooks,
          children: "Carregar Mais"
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Library);

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Block_Library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Block/Library */ "./src/Block/Library/index.tsx");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */




function save() {
  const divsToUpdate = document.querySelectorAll(".update-me");
  divsToUpdate.forEach(div => {
    const preElement = div.querySelector("pre");
    if (preElement !== null) {
      const data = JSON.parse(preElement.innerText);
      const root = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(div);
      root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Block_Library__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ...data
      }));
      div.classList.remove("update-me");
    }
  });
}
save();
})();

/******/ })()
;
//# sourceMappingURL=save.js.map