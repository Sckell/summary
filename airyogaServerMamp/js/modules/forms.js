import { openModal,closeModal } from "./modal"

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
            openModal('.modal')
    
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
                closeModal('.modal')
            }, 2000);
        }
}

export default forms