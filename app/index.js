// const mobileMenuBtn = document.getElementById("mobileMenuBtn");
// const mobileMenu = document.getElementById("mobileMenu");

// menuBtn.addEventListener("click", () => {
//   mobileMenu.classList.toggle("active");
// });

// // submenu toggle
// document.querySelectorAll(".submenu-btn").forEach(btn => {
//   btn.addEventListener("click", () => {
//     const parent = btn.parentElement;
//     parent.classList.toggle("open");
//   });
// });


const menuForMobile = document.getElementById("menuForMobile");   // menu open button (hamburger)
const closeBtn = document.getElementById("closeDrawer"); // close button in drawer
const backdrop = document.querySelector(".backdrop"); // backdrop element
const body = document.body;

// Open drawer
menuForMobile.addEventListener("click", () => {
    body.classList.add("nav-open");
});

// Close drawer
closeBtn.addEventListener("click", () => {
    body.classList.remove("nav-open");
});

// Close when clicking backdrop
backdrop.addEventListener("click", () => {
    body.classList.remove("nav-open");
});

// Submenu toggle
document.querySelectorAll(".submenu-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const parent = btn.closest(".submenu");
        parent.classList.toggle("open");
    });
});
