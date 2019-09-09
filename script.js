// Responsive navbar

// Get the burger class
const burger = document.querySelector(".burger");

// Get the nav-links class
const navLinks = document.querySelector(".nav-links");

// Get the active class
const active = document.querySelector(".active");

// Add event listener
burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
