import burger from "./modules/burger"
import cards from "./modules/cards"
import forms from "./modules/forms"
import modal from "./modules/modal"
import slider from "./modules/slider"

document.addEventListener('DOMContentLoaded', () => {

    cards()
    slider()
    modal('.modal', '.modal__show')
    forms('form')
    burger()

})