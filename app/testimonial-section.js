const testimonialSwiper = new Swiper(".testimonialSwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    allowTouchMove: true,
    spaceBetween: 26,

    breakpoints: {
        300: {
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
        768: {
            slidesPerView: 1.5,
            spaceBetween: 36,
        },
    }
});