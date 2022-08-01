$(document).ready(function() {
    $("#slider").owlCarousel({
        items : 3,  
        nav: true,
        responsive:{
            0:{
                items:1,
               nav: true,
            },
            600:{
                items:2,
                nav: true,
            },
            1000:{
                items:3,
                nav: false,
                loop:false
            },
        },
      
        pagination:false,
        autoPlay:true,
        dots:true,


    });
});