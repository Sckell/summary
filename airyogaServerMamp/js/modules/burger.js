function burger() {
    const burgerBtn = document.querySelector('.burger__menu')
    const burgerContent = document.querySelector('.hedaer__icons')
    const burgerMenu = document.querySelectorAll('.burger__menu-btn span')

    burgerBtn.addEventListener('click', () => {
        burgerContent.classList.toggle('open')
        if(burgerContent.classList.contains('open')){
            burgerMenu[0].style.cssText = `
            transform: translateY(0px) rotate(50deg);
            background-color: #fff;
            `
            burgerMenu[1].style.cssText = `
            opacity: 0;
            `
            burgerMenu[2].style.cssText = `
            transform: translateY(0px) rotate(-50deg);
            background-color: #fff;
            `
        }else{
            burgerMenu[0].style.cssText = `
            transform: translateY(10px) rotate(0);
            background-color: #000;
            `
            burgerMenu[1].style.cssText = `
            opacity: 1;
            `
            burgerMenu[2].style.cssText = `
            transform: translateY(-10px) rotate(0);
            background-color: #000;
            `
        }
    })
}

export default burger