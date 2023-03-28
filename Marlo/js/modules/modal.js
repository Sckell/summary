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

export default modal
export {closeModal, openModal}