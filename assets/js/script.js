$(window).on("scroll", function(){
    var scrolling = $(this).scrollTop();
    // console.log(scrolling)
    if (scrolling > 0){
        $("nav").addClass("active");
    }else{
        $("nav").removeClass("active");
    }
});

// Change Navbar styles on scroll
window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 500)
})


// -- Navbar -- 

let toogle = 0;
let bar = document.querySelector(".nav-mobile-toggle i");
let ul = document.querySelector(".nav-links ul");

bar.addEventListener("click",handle)

function handle(){
    if(toogle == 0){
        ul.classList.add("active");
        bar.classList.add("fa-xmark");
        toogle = 1;
    }
    else{
        ul.classList.remove("active");
        bar.classList.remove("fa-xmark");
        toogle = 0;
    }
}