// Scroll Down Nav

// Get nav
const nav = document.querySelector("nav");
console.log(nav);

// Add event listener to the window object
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 250) {
    console.log(true);
    nav.classList.add("scroll-down");
  } else {
    nav.classList.remove("scroll-down");
  }
});
