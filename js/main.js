$(document).ready(function() {
    const preloader = document.querySelector('#preloader');

    preloader.classList.add('show-preloader');

    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.remove('show-preloader');
        }, 2000);

        setTimeout(function() {
            cookieConsent();
        }, 2550);

    });


    // const kadra_btn = document.getElementById("kadra_btn");
    // const links = document.querySelectorAll(".page-header ul a");
    const kids_btn = document.getElementById("kids_btn");
    const adult_btn = document.getElementById("adult_btn");
    const balet_btn = document.getElementById("balet-btn");
    const barre_btn = document.getElementById("barre-btn");
    const stretching_btn = document.getElementById("stretching_btn");

    const cennik_btn = document.getElementById("cennik-btn");
    const grafik_btn = document.getElementById("grafik-btn");
    const regulamin_btn = document.getElementById("regulamin-btn");

    const close_btn = document.getElementById("close");


    // kadra_btn.addEventListener("click", clickHandler);
    adult_btn.addEventListener("click", clickHandler);
    kids_btn.addEventListener("click", clickHandler);
    barre_btn.addEventListener("click", clickHandler);
    balet_btn.addEventListener("click", clickHandler);
    stretching_btn.addEventListener("click", clickHandler);

    close_btn.addEventListener("click", closeHandler);

    $(".section").hide();

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");

        const showme = this.getAttribute("show");
        $(`#` + showme).show();
        const offsetTop = document.querySelector(href).offsetTop;
        scroll({
            top: offsetTop,
            behavior: "smooth"
        });

    }

    function closeHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const close = this.getAttribute("close");

        const offsetTop = document.querySelector(href).offsetTop;
        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
        $(`#` + close).hide();
    }

    const newTab = (a) => {
        window.open(a, "_blank");
    }

    $("#slider").owlCarousel();



    function deselect(e) {
        $('.pop').slideFadeToggle(function() {
            e.removeClass('selected');
        });
    }

    $(function() {
        $('#kadra_btn').on('click', function() {
            if ($(this).hasClass('selected')) {
                deselect($(this));
            } else {
                $(this).addClass('selected');
                $('.pop').slideFadeToggle();
            }
            return false;
        });

        $('#close').on('click', function() {
            deselect($('#kadra_btn'));
            return false;
        });
    });

    $.fn.slideFadeToggle = function(easing, callback) {
        return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
    };

});