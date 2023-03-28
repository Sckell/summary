function slider() {
    const btnPrev = document.querySelector('.gallery__icons-prev')
    const btnNext = document.querySelector('.gallery__icons-next')
    const sliderLine = document.querySelector('.gallery__slider-line')
    const slide = document.querySelectorAll('.gallery__slide')
    const sliderWrapper = document.querySelector('.gallery__slide')
    // const width = window.getComputedStyle(sliderWrapper).width

    let width
    let offset = 0
    let canslide = true

    function init() {
        width = sliderWrapper.offsetWidth + 40
        sliderLine.style.width = 50 * slide.length + '%'
        slide.forEach(item => {
            item.style.width = width + 'px'
        })
    }
    function offsetInit() {
        offset = 0
        sliderLine.style.transform = `translateX(-${offset}px)`
    }

    init()
    window.addEventListener('resize', () => {
        offsetInit()
        init()
    })


    // function delteNotDigits(str) {
    //     return +str.replace(/\D/g, '') + 40
    // }

    function interval() {
        const interval = setInterval(() => {
            canslide = true
        }, 500);

        setInterval(() => {
            clearInterval(interval)
        }, 500);
    }

    btnNext.addEventListener('click', () => {
        if(canslide == true){

            canslide = false

            if(offset == width * (slide.length - 2)){
                offset = 0
            }else{
                offset += width
            }

            sliderLine.style.transform = `translateX(-${offset}px)`

            interval()
        }
    })

    btnPrev.addEventListener('click', () => {
        if(canslide == true) {

            canslide = false

            if(offset < width) {
                offset = width * (slide.length - 2)
            }else{
                offset -= width
            }

            sliderLine.style.transform = `translateX(-${offset}px)`
    
            interval()
        }

    })


}

export default slider