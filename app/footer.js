

  document.querySelectorAll(".quick-links-header").forEach(header => {
    header.addEventListener("click", () => {
      const links = header.nextElementSibling;
      const icon = header.querySelector(".toggle-icon");

      // Toggle menu open/close
      links.classList.toggle("open");

      // Change + to - based on state
      if (links.classList.contains("open")) {
        icon.textContent = "–";
      } else {
        icon.textContent = "+";
      }
    });
  });
