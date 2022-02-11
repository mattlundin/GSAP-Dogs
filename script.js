const tl = gsap.timeline({ defaults: { ease: 'power4.inOut' } });

tl.to('nav', { y: 0 })
	// .to('footer', { y: 0 }, '-=.5')
	.to('header', { opacity: 1, duration: 1.5 }, '-=.5')
	.to('.banner', { y: 0, opacity: 1, duration: 2 }, '-=1.5')
	.to('.banner h3', { y: 0, opacity: 1, duration: 1.6 }, '-=1.5')
	.to(
		'.column',
		{ x: 0, scale: 1, duration: 1, opacity: 1, ease: 'power1' },
		'-=1',
	)
	// .to('.column:nth-child(2)',{ x: 0, scale: 1, duration: 1, opacity: 1 }, '-=1')
	.to('.box img', { y: 0, opacity: 1, duration: 0.8, stagger: 0.3 }, '-=1');

//* scrollTrigger

gsap.to('.about-columnA', {
	scrollTrigger: {
		trigger: '.about-columnA',
		start: '20px 80%',
	},
	x: 0,
	duration: 2,
});
gsap.to('.about-columnB img', {
	scrollTrigger: {
		trigger: '.about-column',
		start: '20px 80%',
	},
	y: 0,
	opacity: 1,
	duration: 2,
	ease: 'power1',
});
gsap.to('.about-columnC', {
	scrollTrigger: {
		trigger: '.about-columnC',
		start: '20px 90%',
	},
	x: 0,
	duration: 2,
});

//* MOBILE NAV
const navSlide = () => {
	const nav = document.querySelector('.nav');
	const navList = document.querySelector('.nav-items');
	const navItem = document.querySelectorAll('.nav-items li a');
	const burger = document.querySelector('.burger');
	const body = document.querySelector('body');

	burger.addEventListener('click', () => {
		navList.classList.toggle('open');
		burger.classList.toggle('toggle');

		// disable overscroll while nav is open
		if (navList.classList.contains('open')) {
			body.style.overflow = 'hidden';
		} else {
			body.style.overflow = 'scroll';
		}
	});

	// close navbar when clicking on li
	for (let i = 0; i < navItem.length; i++) {
		let closeNav = navItem[i];

		closeNav.addEventListener('click', () => {
			if (navList.classList.contains('open')) {
				navList.classList.toggle('open');
			}

			// toggle hamburger
			if (burger.classList.contains('toggle')) {
				burger.classList.toggle('toggle');
			}
		});
	}
};
navSlide();
