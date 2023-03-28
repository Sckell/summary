import form from "./modules/form"
import slider from "./modules/slider"

document.addEventListener('DOMContentLoaded', () => {

    slider('.courses__arrow-right', '.courses__arrow-left', '.courses__cards-item', '.courses__card')
    slider('.students__arrow-right-img', '.students__arrow-left-img', '.students__cards-item', '.students__card', 4)
    form()
})