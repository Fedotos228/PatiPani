import * as flsFunctions from './modules/functions.js'


document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const header = document.querySelector('.header__upper')

    const w = window.innerWidth;

    flsFunctions.isWebp();
    flsFunctions.slider();
    flsFunctions.burger(burger, menu, header);


    new Swiper('.slider-main__body', {
        effect: 'fade',
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        autoHeight: true,
        speed: 800,
        preloadImages: false,
        lazy: true,
        navigation: {
            nextEl: '.slider-arrow__next',
            prevEl: '.slider-arrow__prev',
        },
        pagination: {
            el: '.slider-main-controls__dots',
            clickable: true,
        },
    })

    const products = document.querySelectorAll('.product');
    if (w >= 992) {
        productSliders();
    }

    function productSliders() {
        if (products[0]) {
            products.forEach(product => {
                const productImages = product.querySelectorAll('.product__images img');
                const productPagination = product.querySelector('.product__pagination');
                for (let index = 0; index < productImages.length; index++) {
                    productPagination.innerHTML += '<div class="pagination-item"></div>';
                }
                const productPaginationItem = productPagination.querySelectorAll('.pagination-item')
                productPaginationItem[0].classList.add('pagination-item--active')

                if (productImages.length > 1) {
                    product.addEventListener('mouseenter', () => {
                        var i = 0;
                        var imageSwitch = setInterval(function () {
                            productImages[i].classList.remove('product-images__image--active')
                            productPaginationItem[i].classList.remove('pagination-item--active')
                            i++
                            productImages[i].classList.add('product-images__image--active')
                            productPaginationItem[i].classList.add('pagination-item--active')
                            if (i >= productImages.length - 1) {
                                clearInterval(imageSwitch);
                            }

                        }, 1000);

                        product.addEventListener('mouseleave', () => {
                            clearInterval(imageSwitch);
                            productImages[i].classList.remove('product-images__image--active')
                            productPaginationItem[i].classList.remove('pagination-item--active')
                            productImages[0].classList.add('product-images__image--active')
                            productPaginationItem[0].classList.add('pagination-item--active')
                        })
                    })
                }

            })
        }
    }

    new Swiper('.slider-partners__body', {
        slidesPerView: 7,
        autoHeight: true,
        navigation: {
            nextEl: '.slider-arrow__next',
            prevEl: '.slider-arrow__prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            440: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 7,
            },
        },
    })

    const recipeIngredients = document.querySelectorAll('.recipe__details--ingredients')
    const ingredientsDropdown = document.querySelectorAll('.ingredients__dropdown')


    const ingredientsButton = document.querySelectorAll('.ingredients-button')
    ingredientsButton.forEach(button => {
        button.addEventListener('click', () => {
            button.nextElementSibling.classList.toggle("open")
        })
    });

    const accordionItem = document.querySelectorAll('.accordion__item');

    accordionItem.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('open')
        })
    });

    const cartBtn = document.querySelector('.cart-open')
    const cart = document.querySelector('.cart-modal');
    const cartClose = document.querySelector('.modal-close');

    if (cart) {
        cartBtn.addEventListener('click', () => {
            cart.classList.toggle('active')
        })
        cartClose.addEventListener('click', () => {
            cart.classList.remove('active')
        })
    }

    if (w <= 480) {
        search()
    }

    function search() {
        const searchBtn = document.querySelector('.search-button')
        const searchModal = document.querySelector('.search-modal')
        const searchClose = document.querySelector('.search-modal__close button')

        searchBtn.addEventListener('click', () => {
            searchModal.classList.add('active')
            document.body.classList.add('lock')
        })
        searchClose.addEventListener('click', () => {
            searchModal.classList.remove('active')
            document.body.classList.remove('lock')
        })
    }
})