const burger = document.querySelector('.nav__burger')
let menuOpen = false

burger.addEventListener('click', () => {
    if (!menuOpen) {
        burger.classList.add('open')
        menuOpen = true
    } else {
        burger.classList.remove('open')
        menuOpen = false
    }
})