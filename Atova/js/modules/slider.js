function slider(selectorBtnNext, selectorBtnprev, selectorSliderLine, selectorSlide, selectorLength) {

    const btnNext = document.querySelector(selectorBtnNext)
    const btnPrev = document.querySelector(selectorBtnprev)
    const sliderLine = document.querySelector(selectorSliderLine)
    const slide = document.querySelectorAll(selectorSlide)
    const width = document.querySelector(selectorSlide).offsetWidth

    let canslide = true
    let sliderIndex = 3

    sliderLine.style.transform = `translateX(-${sliderIndex * width}px)`

    function rollSlids() {
        sliderLine.style.transition = `all 0.5s ease`
        sliderLine.style.transform = `translateX(-${sliderIndex * width}px)`
    }
    function interval() {
        const interval = setInterval(() => {
            canslide = true
        }, 500);
      
        setInterval(() => {
            clearInterval(interval)
        }, 500);
      }

    btnNext.addEventListener('click', () => {

        if(canslide == true) {

            canslide = false
        
            if(sliderIndex == slide.length - 3){
                false
            }else{
                sliderIndex++
            }

            console.log(sliderIndex);

            rollSlids()
            interval()
            jump()

        }    
    })

    btnPrev.addEventListener('click', () => {

        if(canslide == true) {

            canslide = false

            if(sliderIndex <= 0){
                false
            }else{
                sliderIndex--
            }

            console.log(sliderIndex);

            rollSlids()
            interval()
            jump()

        }
    })


    function jump() {
        sliderLine.addEventListener('transitionend', () => {
            if(slide[sliderIndex + 2].id === 'first-clone'){
                sliderIndex = 3
                sliderLine.style.transition = `none`
                sliderLine.style.transform = `translateX(-${sliderIndex * width}px)`
            }else if(slide[sliderIndex].id === 'last-clone'){
                sliderIndex = 6
                sliderLine.style.transition = `none`
                sliderLine.style.transform = `translateX(-${sliderIndex * width}px)`
            }
        })
    }




}

export default slider