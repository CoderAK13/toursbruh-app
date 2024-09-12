"use strict";

/**
 * navbar toggle
 */

// Wait until the DOM is fully loaded
// Wait until the DOM is fully loaded
window.onload = function () {
  const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
  const header = document.querySelector("[data-header]");
  const goTopBtn = document.querySelector("[data-go-top]");

  // Toggle nav and header active states
  if (navToggleBtn && header) {
    navToggleBtn.addEventListener("click", function () {
      this.classList.toggle("active");
      header.classList.toggle("active");
    });
  } else {
    console.error("navToggleBtn or header not found");
  }

  // Show "go to top" button when scrolling past 500px
  if (goTopBtn) {
    window.addEventListener("scroll", function () {
      window.scrollY >= 500
        ? goTopBtn.classList.add("active")
        : goTopBtn.classList.remove("active");
    });

    // Smooth scroll to top when "go to top" button is clicked
    goTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // This enables smooth scrolling
      });
    });
  } else {
    console.error("goTopBtn not found");
  }
};
