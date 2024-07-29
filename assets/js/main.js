/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Show menu on toggle click */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Hide menu on close button click */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ======*/
const navLinks = document.querySelectorAll(".nav__link");

/* Close menu when any nav link is clicked */
function linkAction() {
  navMenu.classList.remove("show-menu");
}

navLinks.forEach((link) => link.addEventListener("click", linkAction));
/*=============== SWIPER JS ==========*/
const swiperHome = new Swiper(".home__swiper", {
  //theme
  speed: 1200,
  effect: "fade",
  //pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) => {
      return '<span class="' + className + '">' + String(index + 1).padStart(2,'0') + "</span>";
    },
  },
});
/*=============== GSAP ==========*/

/*=============== ADD BLUR HEADER =========*/
