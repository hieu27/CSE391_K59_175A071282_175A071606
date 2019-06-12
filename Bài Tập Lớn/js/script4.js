$('.main-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    items: 1,
    
})


$('.footer-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})




$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 40){
            $('#gotop').fadeIn();
        } else{
            $('#gotop').fadeOut();
        }
    });

    $("#gotop").click(function() {
        $('html, body').animate({scrollTop: 0}, 500)
    });
});