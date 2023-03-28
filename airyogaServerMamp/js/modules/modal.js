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

export default modal
export {openModal, closeModal}