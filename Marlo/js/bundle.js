/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/burger.js":
/*!******************************!*\
  !*** ./js/modules/burger.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function burger() {
    const btn = document.querySelector('.hedaer__menu-item')
    const burger = document.querySelector('.header__list')
    const btnMenu = document.querySelectorAll('.hedaer__menu-item span')

    btn.addEventListener('click', () => {
        burger.classList.toggle('burger__active')


        if(!burger.classList.contains('burger__active')){
            btnMenu[0].style.cssText = `
                transform: translateX(0px);
                width: 44px;
            `
            btnMenu[1].style.cssText = `
                transform: translateY(10px) translateX(24px);
                width: 20px;
            `
            btnMenu[2].style.cssText = `
                transform: translateY(20px) translateX(0px);
                width: 44px;
            ` 
        }else{
            btnMenu[0].style.cssText = `
                transform: translateX(14px);
                width: 30px;
            `
            btnMenu[1].style.cssText = `
                transform: translateY(10px) rotatez(180deg);
                width: 44px;
            `
            btnMenu[2].style.cssText = `
                transform: translateY(20px) translateX(24px);
                width: 20px;
            ` 
        }

  
    })


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cards() {
    const card = document.querySelectorAll('.services__column-card')

    card.forEach(item => {
        item.addEventListener('click', () => {
            card.forEach(items => {
                items.classList.remove('services__column-card-active')
            })
            
            item.classList.add('services__column-card-active')
        })
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");



function forms(formSelector) {
    const forms = document.querySelectorAll(formSelector)

    const message = {
        loading: 'img/loading/054 spinner.svg',
        success: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    }

    forms.forEach(item => {
        bindPostData(item)
    })

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const formData = new FormData(form)
            const json = JSON.stringify(Object.fromEntries(formData.entries()))

            ;(0,_services_services__WEBPACK_IMPORTED_MODULE_0__.postData)('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success)
            }).catch(() => {
                console.log('error');
                showThanksModal(message.failure)
            }).finally(() => {
                form.reset()
            })
        })
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__item')

        prevModalDialog.classList.add('hidden')
        prevModalDialog.classList.remove('show')
        ;(0,_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal')

        const thanksModal = document.createElement('div')
        thanksModal.classList.add('modal__item')

        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close"><div data-close class="modal__close-btn">&times;</div></div>
                <div class="modal__title">${message}</div>
            </div>
        `

        document.querySelector('.modal').append(thanksModal)

        setTimeout(() => {
            thanksModal.remove()
            prevModalDialog.classList.add('show')
            prevModalDialog.classList.remove('hidden')
            ;(0,_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)('.modal')
        }, 2000);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function closeModal(modalSelectore) {
    const modal = document.querySelector(modalSelectore)
    modal.classList.remove('show')
    modal.classList.add('hidden')
}
function openModal(modalSelectore) {
    const modal = document.querySelector(modalSelectore)
    modal.classList.remove('hidden')
    modal.classList.add('show')
}

function modal(modalSelectore, modalTriggerSelector) {
    const btn = document.querySelectorAll(modalTriggerSelector)
    const modal = document.querySelector(modalSelectore)
    const modalClose = document.querySelector('[data-close]')

    btn.forEach(item => {
        item.addEventListener('click', () => openModal(modalSelectore))
    })

    modal.addEventListener('click', (e) => {
        if(e.target == modal || e.target.getAttribute('data-close') == ''){
            closeModal(modalSelectore)
        }
    })

    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modal.classList.contains('show')){
            closeModal(modalSelectore)
        }
    })

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


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
function slider() {
    const btnPrev = document.querySelector('.gallery__icons-prev')
    const btnNext = document.querySelector('.gallery__icons-next')
    const sliderLine = document.querySelector('.gallery__slider-line')
    const slide = document.querySelectorAll('.gallery__slide')
    const sliderWrapper = document.querySelector('.gallery__slide')
    // const width = window.getComputedStyle(sliderWrapper).width

    let width
    let offset = 0
    let canslide = true

    function init() {
        width = sliderWrapper.offsetWidth + 40
        sliderLine.style.width = 50 * slide.length + '%'
        slide.forEach(item => {
            item.style.width = width + 'px'
        })
    }
    function offsetInit() {
        offset = 0
        sliderLine.style.transform = `translateX(-${offset}px)`
    }

    init()
    window.addEventListener('resize', () => {
        offsetInit()
        init()
    })


    // function delteNotDigits(str) {
    //     return +str.replace(/\D/g, '') + 40
    // }

    function interval() {
        const interval = setInterval(() => {
            canslide = true
        }, 500);

        setInterval(() => {
            clearInterval(interval)
        }, 500);
    }

    btnNext.addEventListener('click', () => {
        if(canslide == true){

            canslide = false

            if(offset == width * (slide.length - 2)){
                offset = 0
            }else{
                offset += width
            }

            sliderLine.style.transform = `translateX(-${offset}px)`

            interval()
        }
    })

    btnPrev.addEventListener('click', () => {
        if(canslide == true) {

            canslide = false

            if(offset < width) {
                offset = width * (slide.length - 2)
            }else{
                offset -= width
            }

            sliderLine.style.transform = `translateX(-${offset}px)`
    
            interval()
        }

    })


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
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ "./js/modules/burger.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");






document.addEventListener('DOMContentLoaded', () => {

    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_1__["default"])()
    ;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])()
    ;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])('.modal', '.modal__show')
    ;(0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])('form')
    ;(0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__["default"])()

})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map