/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function form() {
    const forms = document.querySelectorAll('form')

    forms.forEach(item => {
        dindPostData(item)
    })

    function dindPostData(form) {
        
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const formData = new FormData(form)

            const obj = {}
            formData.forEach((value, key) => {
                obj[key] = value
            })

            const json = JSON.stringify(Object.fromEntries(formData.entries()))

            ;(0,_services_services__WEBPACK_IMPORTED_MODULE_0__.postData)('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
            }).catch(() => {
                console.log('error');
            }).finally(() => {
                form.reset()
            })
        })
        
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider(selectorBtnNext, selectorBtnprev, selectorSliderLine, selectorSlide, selectorLength) {

    const btnNext = document.querySelector(selectorBtnNext)
    const btnPrev = document.querySelector(selectorBtnprev)
    const sliderLine = document.querySelector(selectorSliderLine)
    const slide = document.querySelectorAll(selectorSlide)
    const width = document.querySelector(selectorSlide).offsetWidth

    let canslide = true
    let sliderIndex = 3

    sliderLine.style.transform = `translateX(-${sliderIndex * width}px)`

    function rollSlids() {
        sliderLine.style.transition = `all 0.5s ease`
        sliderLine.style.transform = `translateX(-${sliderIndex * width}px)`
    }
    function interval() {
        const interval = setInterval(() => {
            canslide = true
        }, 500);
      
        setInterval(() => {
            clearInterval(interval)
        }, 500);
      }

    btnNext.addEventListener('click', () => {

        if(canslide == true) {

            canslide = false
        
            if(sliderIndex == slide.length - 3){
                false
            }else{
                sliderIndex++
            }

            console.log(sliderIndex);

            rollSlids()
            interval()
            jump()

        }    
    })

    btnPrev.addEventListener('click', () => {

        if(canslide == true) {

            canslide = false

            if(sliderIndex <= 0){
                false
            }else{
                sliderIndex--
            }

            console.log(sliderIndex);

            rollSlids()
            interval()
            jump()

        }
    })


    function jump() {
        sliderLine.addEventListener('transitionend', () => {
            if(slide[sliderIndex + 2].id === 'first-clone'){
                sliderIndex = 3
                sliderLine.style.transition = `none`
                sliderLine.style.transform = `translateX(-${sliderIndex * width}px)`
            }else if(slide[sliderIndex].id === 'last-clone'){
                sliderIndex = 6
                sliderLine.style.transition = `none`
                sliderLine.style.transform = `translateX(-${sliderIndex * width}px)`
            }
        })
    }




}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: data
    })

    return await res.json()
}



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");



document.addEventListener('DOMContentLoaded', () => {

    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.courses__arrow-right', '.courses__arrow-left', '.courses__cards-item', '.courses__card')
    ;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.students__arrow-right-img', '.students__arrow-left-img', '.students__cards-item', '.students__card', 4)
    ;(0,_modules_form__WEBPACK_IMPORTED_MODULE_0__["default"])()
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map