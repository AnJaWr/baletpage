$(document).ready(function() {






    function Preloader() {
        var preloader = $('.preloader');
        preloader.show();
        preloader.delay(1000).fadeOut(500);
    }
    if (!sessionStorage.getItem('doNotShow')) {
        sessionStorage.setItem('doNotShow', true);
        Preloader();
    } else {
        $('.preloader').hide();
    }



    // const preloader = document.querySelector('#preloader');
    // const mainwrapper = document.querySelector('#main_wrapper');

    // preloader.classList.add('show-preloader');

    // window.addEventListener('load', function() {
    //     setTimeout(function() {
    //         preloader.classList.remove('show-preloader');
    //     }, 3000);
    //     setTimeout(function() {
    //         mainwrapper.classList.remove('hide0nEnter');
    //     }, 2500);

    //     setTimeout(function() {
    //         cookieConsent();
    //     }, 2550);

    // });


    $("#tabs").tabs();

    const kids_btn = document.getElementById("kids_btn");
    const adult_btn = document.getElementById("adult_btn");
    const balet_btn = document.getElementById("balet-btn");
    const barre_btn = document.getElementById("barre-btn");
    const stretching_btn = document.getElementById("stretching_btn");

    // const cennik_btn = document.getElementById("cennik-btn");
    const grafik_btn = document.getElementById("grafik-btn");
    const regulamin_btn = document.getElementById("regulamin-btn");



    adult_btn.addEventListener("click", clickHandler);
    kids_btn.addEventListener("click", clickHandler);
    barre_btn.addEventListener("click", clickHandler);
    balet_btn.addEventListener("click", clickHandler);
    stretching_btn.addEventListener("click", clickHandler);


    regulamin_btn.addEventListener("click", newTab);
    grafik_btn.addEventListener("click", newTab);


    $(".section").hide();

    $(".button-c").click(function() {
        // Close all open windows
        $(".cennik_section").stop().slideUp(300);
        // Toggle this window open/close
        $(this).next("cennik_section").stop().slideToggle(300);
    });



    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");

        const showme = this.getAttribute("showme");
        $(`#` + showme).show();
        const offsetTop = document.querySelector(href).offsetTop;
        scroll({
            top: offsetTop,
            behavior: "smooth"
        });

    };

    // =================toggle class cennik =============================================================

    function newTab(e) {

        e.preventDefault();
        const href = this.getAttribute("href");
        window.open(href, "_blank");
        console.log(href)
    }


    var buttonsX = document.querySelectorAll(".close");
    console.log(buttonsX)

    for (const btn of buttonsX) {
        btn.addEventListener('click', function() {
            console.log(this.value);


            const href = this.getAttribute("href");
            console.log(href)
            const close = this.getAttribute("close");
            console.log(close)

            const offsetTop = document.querySelector(href).offsetTop;
            scroll({
                top: offsetTop,
                behavior: "smooth"
            });
            $(`#` + close).hide();
            console.log(close)
        });
    }




    $("#slider").owlCarousel();

    // =========================== modal popup ==========================
    // modal popup code from https://github.com/WebDevSimplified/Vanilla-JavaScript-Modal.git

    const openModalButtons = document.querySelectorAll('[data-modal-target]')
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        })
    })

    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
            closeModal(modal)
        })
    })

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            closeModal(modal)
        })
    })

    function openModal(modal) {
        if (modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
    }

    function closeModal(modal) {
        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }

    // reveal elements ========================
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);

});