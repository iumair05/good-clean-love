const blogsSwiper = new Swiper(".blogsSwiper", {
    slidesPerView: 1,
    spaceBetween: 36,
    loop: false,
    // loopFillGroupWithBlank: true,
    // navigation: {
    //     nextEl: ".swiper-learn-next",
    //     prevEl: ".swiper-learn-prev",
    // },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 36,
        },

        320: {
            slidesPerView: 1,
            spaceBetween: 36,
        },

        375: {
            slidesPerView: 1.1,
            spaceBetween: 36,
        },
        475: {
            slidesPerView: 1.25,
            spaceBetween: 36,
        },
        724: {
            slidesPerView: 2,
            spaceBetween: 36,
        },
        768: {
            slidesPerView: 2.1,
            spaceBetween: 36,
        },
    }
});