import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp();
flsFunctions.sliders()

new Swiper('.slider-hero__body ', {
    // effect: 'fade',
    // autoplay:{
    //     delay: 3000,
    //     disableOnInteraction: false,
    // }

    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    speed: 800,
    // touchRatio: 0,
    // simulateTouch: false,
    // loop: true,
    // preloadImages: false,
    // lazy: true,
    pagination: {
        el: '.slider-hero-controls__dots',
        clickable: true,
    },
    navigation: {
        nextEl: '.slider-arrow__next',
        prevEl: '.slider-arrow__prev',
    },

    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 0,
    //         autoHeight: true,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //     },
    //     992: {
    //         slidesPerView: 3,
    //         spaceBetween: 20,
    //     },
    //     1268: {
    //         slidesPerView: 4,
    //         spaceBetween: 30,
    //     },
    // },
    on: {
        lazyImageReady: function() {
            ibg();
        },
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    }
})

const pageTitle = document.querySelector('.page-title')
const subtitle = document.querySelector('.page-title p')

if (subtitle.textContent === '@@subtitle') {
    subtitle.style.display = 'none'
}


const navItem = document.querySelectorAll('.nav-list__item')

navItem.forEach(item => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('open-submenu')) {
            for (let i = 0; i < navItem.length; i++) {
                navItem[i].classList.remove('open-submenu')
            }
            item.classList.add('open-submenu')
        } else {
            item.classList.remove('open-submenu')
        }
    })
});

const tabs = document.querySelector('.locations__tabs')
const tabsButtons = document.querySelectorAll('.tabs__button')
const tabsContent = document.querySelectorAll('.tabs__content')

flsFunctions.tabs(tabs, tabsButtons, tabsContent)


const scrollTop = document.querySelector('.scroll-top')

flsFunctions.scrollToTop(scrollTop)

const accordeonItem = document.querySelectorAll('.accordeon-item')

accordeonItem.forEach(item => {
    const expender = item.querySelector('.accordeon-item__header .expender')
    item.addEventListener('click', () => {
        item.classList.toggle('open')
    })
});