$(document).ready(function() {
    $("#slider").owlCarousel({
        items: 3,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 1,
                nav: false,
            },
            1000: {
                items: 1,
                nav: false,
                loop: false
            },
        },

        pagination: false,
        autoPlay: true,
        dots: true,


    });
    $("#news").owlCarousel({
        items: 3,
        nav: true,
        navText: ["<img src='../img/prev.svg' style='width :50px; height:50px'>", "<img src='../img/next.svg' style='width :50px; height:50px'>"],
        dots: false,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 3,
                loop: false
            },
        },


    });
});