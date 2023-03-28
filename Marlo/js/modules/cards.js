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

export default cards