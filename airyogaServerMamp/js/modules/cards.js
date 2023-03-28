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

export default cards