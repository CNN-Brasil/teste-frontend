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

/***/ "./src/Services/index.tsx":
/*!********************************!*\
  !*** ./src/Services/index.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BookService)
/* harmony export */ });
class BookService {
  constructor() {
    this.url = `https://gutendex.com/books`;
  }
  async getBooks(params) {
    try {
      const response = await fetch(`${this.url}${params.page ? `?page=${params.page}` : ""}${params.languages ? `${params.page ? "&" : "?"}languages=${params.languages}` : ""}`, {
        method: "GET"
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const body = await response.json();
      return {
        count: body.count,
        next: body.next,
        previous: body.previous,
        results: body.results.map(item => ({
          id: item.id,
          name: item.title,
          autorName: item.authors.map(autor => autor.name),
          coverImage: item.formats["image/jpeg"],
          bookUrl: item.formats["text/html"]
        }))
      };
    } catch (error) {
      console.error(error.message);
      return {
        count: 0,
        next: "",
        previous: "",
        results: []
      };
    }
  }
}

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services */ "./src/Services/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */




function Edit(props) {
  const [showAuthor, setShowAuthor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
  const [selectedLanguages, setSelectedLanguages] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const source = new _Services__WEBPACK_IMPORTED_MODULE_4__["default"]();
  const handleChange = event => {
    const values = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedLanguages(values);
    handleFetchBooks(values.join(","));
  };
  const handleFetchBooks = async languages => {
    const {
      next,
      previous,
      results
    } = await source.getBooks({
      page: 1,
      languages
    });
    props.setAttributes({
      result: results,
      next,
      previous
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    handleFetchBooks();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
    className: " wp-block-create-block-cnnbr-virtual-library w-screen",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
      className: "mb-8 text-2xl font-semibold font-sans",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Biblioteca Virtual")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "p-4 max-w-sm mx-auto mb-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex items-center justify-between mb-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
            htmlFor: "show-author",
            className: "text-base font-medium cursor-pointer",
            children: "Show Author's Name"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
              type: "checkbox",
              name: "show-author",
              id: "show-author",
              checked: showAuthor,
              onChange: e => {
                setShowAuthor(e.target.checked);
                props.setAttributes({
                  showAuthor: e.target.checked
                });
              },
              className: "toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in-out transform"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
              htmlFor: "show-author",
              className: `toggle-label block overflow-hidden h-6 rounded-full cursor-pointer`
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "bg-white p-4 rounded-lg shadow-md",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            className: "h-48 w-36 object-contain mx-auto rounded",
            src: "https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg",
            alt: "Frankenstein; Or, The Modern Prometheus"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-base font-medium text-center mt-4 mb-1",
            title: "Frankenstein; Or, The Modern Prometheus",
            children: "Frankenstein; Or, The Modern Prometheus"
          }), showAuthor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-sm text-center text-gray-600",
            children: "Shelley, Mary Wollstonecraft"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "p-4 max-w-sm mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
          htmlFor: "language",
          className: "block text-base font-medium cursor-pointer",
          children: "Languages"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
          name: "language",
          id: "language",
          multiple: true,
          value: selectedLanguages,
          onChange: handleChange,
          className: "mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            value: "pt",
            children: "Portuguese"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            value: "fr",
            children: "Franch"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
            value: "en",
            children: "English"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "mt-2 text-sm text-gray-500",
          children: "Hold down the Ctrl (Windows) or Command (Mac) button to select multiple options."
        })]
      })]
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cnnbr Virtual Library – hello from the editor!", "cnnbr-virtual-library")
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: props => (0,_edit__WEBPACK_IMPORTED_MODULE_2__["default"])(props)

  /**
   * @see ./save.js
   */
  //save,
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/cnnbr-virtual-library","version":"0.1.0","title":"Cnnbr Virtual Library","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"textdomain":"cnnbr-virtual-library","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./save.js","attributes":{"showAuthor":{"type":"boolean","default":true},"next":{"type":"string"},"previous":{"type":"string"},"result":{"type":"array","default":[]},"content":{"type":"string","source":"html","selector":"blockquote"}}}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcnnbr_virtual_library"] = self["webpackChunkcnnbr_virtual_library"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map