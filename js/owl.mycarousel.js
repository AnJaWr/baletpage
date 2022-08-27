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
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 1,
                nav: true,
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            },
        },

        // pagination: false,
        // autoPlay: false,
        // dots: true,


    });
});