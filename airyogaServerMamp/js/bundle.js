/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/blog.js":
/*!****************************!*\
  !*** ./js/modules/blog.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function blog() {
        const dots = document.querySelectorAll('.blog__dot')
        const blogCards = document.querySelectorAll('.blog__cards-item')
    
        dots.forEach((item, i = 0) => {
            item.addEventListener('click', () => {
                
                blogCards.forEach(items => {
                    items.classList.add('hidden')
                    items.classList.remove('show', 'fade')
                })
                blogCards[i].classList.add('show', 'fade')
                blogCards[i].classList.remove('hidden')
    
                dots.forEach(dot => {
                    dot.classList.remove('blog__dot-active')
                })
                dots[i].classList.add('blog__dot-active')
    
            })
        })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blog);

/***/ }),

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
    const burgerBtn = document.querySelector('.burger__menu')
    const burgerContent = document.querySelector('.hedaer__icons')
    const burgerMenu = document.querySelectorAll('.burger__menu-btn span')

    burgerBtn.addEventListener('click', () => {
        burgerContent.classList.toggle('open')
        if(burgerContent.classList.contains('open')){
            burgerMenu[0].style.cssText = `
            transform: translateY(0px) rotate(50deg);
            background-color: #fff;
            `
            burgerMenu[1].style.cssText = `
            opacity: 0;
            `
            burgerMenu[2].style.cssText = `
            transform: translateY(0px) rotate(-50deg);
            background-color: #fff;
            `
        }else{
            burgerMenu[0].style.cssText = `
            transform: translateY(10px) rotate(0);
            background-color: #000;
            `
            burgerMenu[1].style.cssText = `
            opacity: 1;
            `
            burgerMenu[2].style.cssText = `
            transform: translateY(-10px) rotate(0);
            background-color: #000;
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
    const cards = document.querySelectorAll('.cards__top-content')
    const parent = document.querySelectorAll('.cards__top-item')

    cards.forEach(item => {
        item.addEventListener('click', (e) => {
            cards.forEach(item => {
                item.classList.remove('cards-active')
            })
            item.classList.add('cards-active')
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
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");


function forms() {
        // forms

        const forms = document.querySelectorAll('form')

        const message = {
            loading: 'img/loading/054 spinner.svg',
            success: 'Спасибо, скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так'
        }
    
        forms.forEach(item => {
            bindPostData(item)
        })

        const postData = async (url, data) => {
            const res = await fetch(url, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: data
            })

            return await res.json()
        }
    
        function bindPostData(form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault()
    
                const formData = new FormData(form)
    
                const obj = {}
                formData.forEach((value, key) => {
                    obj[key] = value
                })

                const json = JSON.stringify(Object.fromEntries(formData.entries()))

                postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksMessage(message.success)
                }).catch(() => {
                    showThanksMessage(message.failure)
                }).finally(() => {
                    form.reset()
                })
            })
        }
    
        function showThanksMessage(message, modalSelector) {
            const prevModalDialog = document.querySelector('.modal__dialog')
    
            prevModalDialog.classList.add('hidden')
            ;(0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal')
    
            const thanskModal = document.createElement('div')
            thanskModal.classList.add('modal__dialog')
    
            thanskModal.innerHTML = `
            <div class="modal__content">
                    <div data-close class="modal__close">×</div>
                    <div class="modal__title">${message}</div>
            </div>
            `
            document.querySelector('.modal').append(thanskModal)
    
            setTimeout(() => {
                thanskModal.remove()
                prevModalDialog.classList.remove('hidden')
                ;(0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal')
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
function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector)
    document.body.style.overflow = 'hidden'
    modal.classList.add('show')
    modal.classList.remove('hidden')
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector)
    document.body.style.overflow = ''
    modal.classList.remove('show')
    modal.classList.add('hidden')
}



function modal(triggerSelector, modalOpen, modalSelector) {
    
    const btnOpenModal = document.querySelectorAll(triggerSelector)
    const modal = document.querySelector(modalOpen)
        
        btnOpenModal.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault()

                openModal(modalOpen)
            })
        })
        
        modal.addEventListener('click', (e) => {
            if(e.target == modal || e.target.getAttribute('data-close') == ''){
                closeModal(modalOpen)
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
   const sliderLine = document.querySelector('.courses__cards')
   const slide = document.querySelectorAll('.courses__card')
   const sliderWrapper = document.querySelector('.courses__card')
   const width = window.getComputedStyle(sliderWrapper).width 

   let offset = 0

   function delteNotDigits(str) {
       return +str.replace(/\D/g, '') + 35
   }

   function rollSlide() {
       if(offset == delteNotDigits(width) * (slide.length - 2)){
           offset = 0
       }else{
           offset += delteNotDigits(width)
       }
       sliderLine.style.transform = `translateX(-${offset}px)`
   }

   const slideInterval = setInterval(() => {
       rollSlide()
   }, 2000);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

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
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/blog */ "./js/modules/blog.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/burger */ "./js/modules/burger.js");








document.addEventListener('DOMContentLoaded', () => {

    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_0__["default"])()
    ;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])()
    ;(0,_modules_blog__WEBPACK_IMPORTED_MODULE_2__["default"])()
    ;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])('.modal__open', '.modal')
    ;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])('.modal__open-more-yoga', '.modal__yoga')
    ;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])('.modal__open-more-cards', '.modal__cards')
    ;(0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])()
    ;(0,_modules_burger__WEBPACK_IMPORTED_MODULE_5__["default"])()

})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map