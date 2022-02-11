const tl = gsap.timeline({
	defaults: { ease: 'power4.inOut' },
});

tl.to('nav', { y: 0 })
	.to('footer', { y: 0 }, '-=.5')
	.to('header', { opacity: 1, duration: 1.5 }, '-=.5')
	.to('.banner', { y: 0, opacity: 1, duration: 2 }, '-=1.5')
	.to('.banner h3', { y: 0, opacity: 1, duration: 1.6 }, '-=1.5')
	.to('.column', { x: 0, scale: 1, duration: 1, opacity: 1 }, '-=1')
	// .to('.column:nth-child(2)',{ x: 0, scale: 1, duration: 1, opacity: 1 }, '-=1')
	.to('.box img', { y: 0, opacity: 1, duration: 0.8, stagger: 0.3 }, '-=1');
