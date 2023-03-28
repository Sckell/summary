import cards from "./modules/cards"
import slider from "./modules/slider"
import blog from "./modules/blog"
import modal from "./modules/modal"
import forms from "./modules/forms"
import burger from "./modules/burger"


document.addEventListener('DOMContentLoaded', () => {

    cards()
    slider()
    blog()
    modal('.modal__open', '.modal')
    modal('.modal__open-more-yoga', '.modal__yoga')
    modal('.modal__open-more-cards', '.modal__cards')
    forms()
    burger()

})