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

export default blog