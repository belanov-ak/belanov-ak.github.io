const burger = document.querySelector('.nav__burger')
const menu = document.querySelector('.nav__menu')
let menuOpen = false

burger.addEventListener('click', () => {
    if (!menuOpen) {
        burger.classList.add('open')
        menu.classList.add('open')
        menuOpen = true
        hideScroll()
    } else {
        burger.classList.remove('open')
        menu.classList.remove('open')
        menuOpen = false
        showScroll()
    }
})

const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`
    document.body.style.paddingRight = scrollWidth
    document.body.style.overflow = 'hidden'

    menu.style.paddingRight = scrollWidth
}

const showScroll = () => {
    document.body.style.paddingRight = ''
    document.body.style.overflow = 'visible'

    menu.style.paddingRight = ''
}

const getScrollbarWidth = () => {
    const outer = document.createElement('div')

    outer.style.position = 'absolute'
    outer.style.top = '-9999px'
    outer.style.width = '50px'
    outer.style.height = '50px'
    outer.style.overflow = 'scroll'
    outer.style.visibility = 'hidden'

    document.body.appendChild(outer)
    const scrollBarWidth = outer.offsetWidth - outer.clientWidth
    document.body.removeChild(outer)

    return scrollBarWidth
}

const resetNav = () => {
    showScroll();
    burger.classList.remove('open')
    menu.classList.remove('open')
}

window.addEventListener('resize', resetNav)
window.addEventListener('scroll', resetNav)

let position = 0
let linePosition = 0
const items = Array.from(document.querySelectorAll('.slide'))
const btnLeft = document.querySelector('.controls__button-left')
const btnRight = document.querySelector('.controls__button-right')
const movePosition = 450

const firstItem = document.querySelector('.first-item')
const secondItem = document.querySelector('.second-item')
const thirdItem = document.querySelector('.third-item')

btnRight.addEventListener('click', () => {
    if (!btnRight.classList.contains('controls__button_disabled')) {
        btnLeft.classList.remove('controls__button_disabled')
        position += movePosition
        
        items.forEach(item => item.style.transform = `translateX(${position}px)`)
        

        if(firstItem.classList.contains('slide_active')) {
            firstItem.style.opacity = '0'
            secondItem.style.opacity = '1'
            thirdItem.style.opacity = '0.5'

            firstItem.classList.remove('slide_active')
            secondItem.classList.add('slide_active')
        }else if(secondItem.classList.contains('slide_active')) {
            secondItem.style.opacity = '0'
            thirdItem.style.opacity = '1'

            secondItem.classList.remove('slide_active')
            thirdItem.classList.add('slide_active')
            btnRight.classList.add('controls__button_disabled')
        }

        const smallLine = document.querySelector('.controls__small-line')
        const bigLine = document.querySelector('.controls__big-line')
        linePosition += bigLine.offsetWidth / 3
        smallLine.style.left = `${linePosition}px`
    }
})

btnLeft.addEventListener('click', () => {
    if (!btnLeft.classList.contains('controls__button_disabled')) {
        btnRight.classList.remove('controls__button_disabled')
        position -= movePosition
        items.forEach(item => item.style.transform = `translateX(${position}px)`)

        if(secondItem.classList.contains('slide_active')) {
            firstItem.style.opacity = '1'
            secondItem.style.opacity = '0.5'
            thirdItem.style.opacity = '0'

            secondItem.classList.remove('slide_active')
            firstItem.classList.add('slide_active')
            btnLeft.classList.add('controls__button_disabled')
        }else if(thirdItem.classList.contains('slide_active')) {
            secondItem.style.opacity = '1'
            thirdItem.style.opacity = '0.5'

            thirdItem.classList.remove('slide_active')
            secondItem.classList.add('slide_active')
        }

        const smallLine = document.querySelector('.controls__small-line')
        const bigLine = document.querySelector('.controls__big-line')
        linePosition -= bigLine.offsetWidth / 3
        smallLine.style.left = `${linePosition}px`
    }
})

const miniSlider = document.querySelector('.mini-slider')
const miniBtnLeft = document.querySelector('.mini-slider-btn-left')
const miniBtnRight = document.querySelector('.mini-slider-btn-right')


miniBtnRight.addEventListener('click', () => {
    miniSlider.children[0].classList.remove('mini-slide-prev')
    miniSlider.children[0].classList.add('mini-slide-next')
    miniSlider.children[1].classList.remove('mini-slide-active')
    miniSlider.children[1].classList.add('mini-slide-prev')
    miniSlider.children[2].classList.remove('mini-slide-next')
    miniSlider.children[2].classList.add('mini-slide-active')

    miniSlider.appendChild(miniSlider.children[0])
})

miniBtnLeft.addEventListener('click', () => {
    miniSlider.children[0].classList.remove('mini-slide-prev')
    miniSlider.children[0].classList.add('mini-slide-active')
    miniSlider.children[1].classList.remove('mini-slide-active')
    miniSlider.children[1].classList.add('mini-slide-next')
    miniSlider.children[2].classList.remove('mini-slide-next')
    miniSlider.children[2].classList.add('mini-slide-prev')

    miniSlider.prepend(miniSlider.children[2])
})