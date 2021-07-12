
window.addEventListener("load", () => {
    gsap.from("nav .nav_items .nav_first_item ul li",{y:-20,opacity:0,duration:1,stagger:0.15})
})
nav_item_drop_open = false

$("nav .nav_items .nav_first_item ul li .drop_down").click(() => {
    if(nav_item_drop_open === false){
        $("nav .nav_items .nav_first_item ul li .nav_drop").fadeIn()
        nav_item_drop_open = true;
    }else{
        $("nav .nav_items .nav_first_item ul li .nav_drop").fadeOut()
        nav_item_drop_open = false
    }
})

