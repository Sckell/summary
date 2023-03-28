import { postData } from "../services/services"
import { openModal, closeModal } from "./modal"

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

            postData('http://localhost:3000/requests', json)
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
        openModal('.modal')

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
            closeModal('.modal')
        }, 2000);
    }
}

export default forms