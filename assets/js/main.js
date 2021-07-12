window.addEventListener("load", () => {
    gsap.from(".hero_page .hero_page_title .animate_hero", {opacity: 0, duration: 1, y:50, stagger:0.6});
    gsap.from(".hero_page .hero_page_img img", {opacity: 0, delay:1,duration: 1, x:50});
    
    let slide = 350
    setInterval(() => {
        if (slide >= 0){
            slide = -350
        }
        else if(slide <= -1200){
            slide = 350
        }
        slide -= 350
        gsap.to(".testi_section .testi_section_container .testi_content", {duration:1, x:slide})
        console.log(slide)
    }, 5000);
})
