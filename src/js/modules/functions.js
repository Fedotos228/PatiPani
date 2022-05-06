export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function() {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function(support) {
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });
}

export function burger(burger, menu, header) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('lock');
        header ? menu.style.top = `${header.offsetHeight}px` : ''
    })
}

export function fixedHeader(header) {
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (scrollPos > header.offsetHeight + 30) {
            header.classList.add('sticky')
            document.querySelector('main').style.marginTop = `${header.offsetHeight}px`;
        } else {
            header.classList.remove('sticky')
            document.querySelector('main').style.marginTop = null;
        }
    })
}

export const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    },
}

export function slider() {
    let sliders = document.querySelectorAll('.swiper');
    if (sliders) {
        for (let index = 0; index < sliders.length; index++) {
            let slider = sliders[index];
            if (!slider.classList.contains('swiper-bild')) {
                let slider_items = slider.children;
                if (slider_items) {
                    for (let index = 0; index < slider_items.length; index++) {
                        let el = slider_items[index];
                        el.classList.add('swiper-slide');
                    }
                }
                let slider_content = slider.innerHTML;
                let slider_wrapper = document.createElement('div');
                slider_wrapper.classList.add('swiper-wrapper');
                slider_wrapper.innerHTML = slider_content;
                slider.innerHTML = '';
                slider.appendChild(slider_wrapper);
                slider.classList.add('swiper-bild');

                if (slider.classList.contains('swiper_scroll')) {
                    let sliderScroll = document.createElement('div');
                    sliderScroll.classList.add('swiper-scrollbar');
                    slider.appendChild(sliderScroll);
                }
            }
            if (slider.classList.contains('gallery')) {
                // slider.data('lightGallery').destroy(true);
            }
        }
        sliders_bild_callback()
    }

    function sliders_bild_callback(params) {}

    let sliderScollItems = document.querySelectorAll('.swiper-scroll');
    if (sliderScollItems.length > 0) {
        for (let index = 0; index < sliderScollItems.length; index++) {
            const sliderScrollItem = sliderScollItems[index];
            const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
            const sliderScroll = new Swiper(sliderScrollItem, {
                observer: true,
                observeParents: true,
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                scrollbar: {
                    el: sliderScrollBar,
                    draggable: true,
                    snapOnRelease: false,
                },
                mousewheel: {
                    releaseOnEdges: true,
                },
            });
            sliderScroll.scrollbar.updateSize();
        }
    }


    function sliders_bild_callback(params) {}

    let sliderTemplate = new Swiper('.slider', {
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
        // pagination: {
        //     el: '.slider-pagging',
        //     clickable: true,
        // },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
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
}