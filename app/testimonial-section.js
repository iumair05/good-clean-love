const testimonialSwiper = new Swiper(".testimonialSwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    allowTouchMove: true,
    spaceBetween: 26,

    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 9,
        },

        320: {
            slidesPerView: 1,
            spaceBetween: 9,
        },
        375: {
            slidesPerView: 1.25,
            spaceBetween: 9,
        },
        425: {
            slidesPerView: 1.4,
            spaceBetween: 9,
        },

        768: {
            slidesPerView: 1.5,
            spaceBetween: 9,
        },

        992: {
            slidesPerView: 1.6,
            spaceBetween: 9,
        },
        1240: {
            slidesPerView: 1.9,
            spaceBetween: 9,
        },
    }
});