function burger() {
    const btn = document.querySelector('.hedaer__menu-item')
    const burger = document.querySelector('.header__list')
    const btnMenu = document.querySelectorAll('.hedaer__menu-item span')

    btn.addEventListener('click', () => {
        burger.classList.toggle('burger__active')


        if(!burger.classList.contains('burger__active')){
            btnMenu[0].style.cssText = `
                transform: translateX(0px);
                width: 44px;
            `
            btnMenu[1].style.cssText = `
                transform: translateY(10px) translateX(24px);
                width: 20px;
            `
            btnMenu[2].style.cssText = `
                transform: translateY(20px) translateX(0px);
                width: 44px;
            ` 
        }else{
            btnMenu[0].style.cssText = `
                transform: translateX(14px);
                width: 30px;
            `
            btnMenu[1].style.cssText = `
                transform: translateY(10px) rotatez(180deg);
                width: 44px;
            `
            btnMenu[2].style.cssText = `
                transform: translateY(20px) translateX(24px);
                width: 20px;
            ` 
        }

  
    })


}

export default burger