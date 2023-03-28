function slider() {
   const sliderLine = document.querySelector('.courses__cards')
   const slide = document.querySelectorAll('.courses__card')
   const sliderWrapper = document.querySelector('.courses__card')
   const width = window.getComputedStyle(sliderWrapper).width 

   let offset = 0

   function delteNotDigits(str) {
       return +str.replace(/\D/g, '') + 35
   }

   function rollSlide() {
       if(offset == delteNotDigits(width) * (slide.length - 2)){
           offset = 0
       }else{
           offset += delteNotDigits(width)
       }
       sliderLine.style.transform = `translateX(-${offset}px)`
   }

   const slideInterval = setInterval(() => {
       rollSlide()
   }, 2000);
}

export default slider