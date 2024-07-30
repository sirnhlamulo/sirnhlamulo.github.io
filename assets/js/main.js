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

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link");

/* Close menu when any nav link is clicked */
function linkAction() {
  navMenu.classList.remove("show-menu");
}

navLinks.forEach((link) => link.addEventListener("click", linkAction));

/*=============== SWIPER JS ===============*/
const swiperHome = new Swiper(".home__swiper", {
  speed: 1200,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) => {
      const icons = [
        '<i class="ri-briefcase-line"></i>',
        '<i class="ri-money-dollar-circle-line"></i>',
        '<i class="ri-shopping-bag-line"></i>',
      ];
      return `<span class="${className}">${icons[index]}</span>`;
    },
  },
});

/*=============== BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // Adding class if the bottome offset is greater than 50% of the view

  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};

window.addEventListener("blurr", blurHeader);

/*=============== GSAP ===============*/
