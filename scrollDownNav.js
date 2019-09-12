// Scroll Down Nav

// Get nav
const nav = document.querySelector("nav");
console.log(nav);

// Add event listener to the window object
window.addEventListener("scroll", () => {
  if (
    document.documentElement.scrollTop > 250 ||
    document.body.scrollTop > 250
  ) {
    nav.classList.add("scroll-down");
  } else {
    nav.classList.remove("scroll-down");
  }
});
