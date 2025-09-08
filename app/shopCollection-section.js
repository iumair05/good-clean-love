const shopCollectionSwiper = new Swiper(".shopCollectionSwiper", {
    slidesPerView: 1,
    spaceBetween: 27,
    // loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".collection-swiper-next",
        prevEl: ".collection-swiper-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 27
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 27
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 27
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 27
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 27
        }

    }
});