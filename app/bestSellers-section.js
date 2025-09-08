// Select all purchase button containers
document.querySelectorAll(".purchase-btn").forEach((group) => {
    const buttons = group.querySelectorAll("button");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            buttons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
});

// add to cart functionality
// Select all Add to Cart buttons
const cartButtons = document.querySelectorAll(".cart-btn");

// Add event listener to each
cartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        alert("Product Added to cart");
    });
});


// Swiper js

const bestSellerSwiper = new Swiper(".bestSellerSwiper", {
    slidesPerView: 1,
    spaceBetween: 18,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".best-seller-swiper-next",
        prevEl: ".best-seller-swiper-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 18
        },

        375: {
            slidesPerView: 1.1,
            spaceBetween: 18
        },
        475: {
            slidesPerView: 1.25,
            spaceBetween: 18
        },
        724: {
            slidesPerView: 2,
            spaceBetween: 18
        },
        768: {
            slidesPerView: 2.1,
            spaceBetween: 18
        },
    }
});
