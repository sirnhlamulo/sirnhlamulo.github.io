/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader =() =>{
    const header =document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                        :header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

/*=============== SWIPER PRODUCTS ===============*/
var newSwiper = new Swiper(".products__container", {
    spaceBetween: 32,
    grabCursor: true,
    conteredSlides: true,
    slidesPreView:' auto',
    loop: true,


    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
    const scrollY = window.pageYOffset;

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
		}else{
			sectionsClass.classList.remove('active-link');
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive);
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up');
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme ='dark-theme';
const iconTheme ='ri-sun-line';

const selectedTheme =localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'


if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme) ? 'dark':'light'
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add': 'remove'](iconTheme) ?'ri-moon-line' : 'ri-sun-line'
}

themeButton.addEventListener('click',() => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
