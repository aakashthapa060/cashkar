window.addEventListener("load", () => {
    gsap.from(".hero_page .hero_page_title .animate_hero", {opacity: 0, duration: 1, y:50, stagger:0.6});
    gsap.from(".hero_page .hero_page_img img", {opacity: 0, delay:1,duration: 1, x:50});


})
