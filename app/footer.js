document.querySelectorAll(".quick-links-header").forEach(header => {
  header.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      const parent = header.closest(".quick-links"); // parent wrapper
      const links = parent.querySelector(".footer-links"); // target directly
      const icon = header.querySelector(".toggle-icon");

      links.classList.toggle("open");
      icon.classList.toggle("rotate");
    }
  });
});
