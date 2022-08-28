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
        navText: ["<img src='img/prev.svg' class='fa-arrow-left' style='width :50px; height:50px; margin-right:20px'>", "<img src='img/next.svg' class='fa-arrow-right' style='width :50px; height:50px;  margin-left:20px '>"],
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