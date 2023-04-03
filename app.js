gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const scroller = ScrollSmoother.create({
    wrapper: '.scroll-wrapper',
    content: '.scroll-content',
    smooth: 3,
    effects: true,
    normalizeScroll: true,
})

const revealContainers = document.querySelectorAll('.reveal');

revealContainers.forEach(container => {
    const img = container.querySelector('img');
    const tl = gsap.timeline({
        duration: .5,
        ease: Power4.easeInOut,
        scrollTrigger: {
            trigger: container,
            start: 'top 60%',
            end: 'top 40%',
            scrub: 4,
            markers: true
        }
    });
    tl.fromTo(container, {
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
    }, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    })
      .from(img, {scale: 1.5}, '<')
      
})