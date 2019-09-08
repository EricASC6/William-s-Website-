// Responsive navbar

// Get the burger class
const burger = document.querySelector(".burger");

// Get the nav-links class
const navLinks = document.querySelector(".nav-links");

// Add event listener
burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

console.log(navLinks.offsetHeight);
