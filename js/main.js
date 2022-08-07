const preloader = document.querySelector('#preloader');

preloader.classList.add('show-preloader');

window.addEventListener('load', function() {
    setTimeout(function() {
        preloader.classList.remove('show-preloader');
    }, 2000);
});

const kadra_btn = document.getElementById("kadra_btn");
// const links = document.querySelectorAll(".page-header ul a");
const kids_btn = document.getElementById("kids_btn");
const adult_btn = document.getElementById("adult_btn");
const balet_btn = document.getElementById("balet-btn");
const barre_btn = document.getElementById("barre-btn");
const stretching_btn = document.getElementById("stretching_btn");

const cennik_btn = document.getElementById("cennik-btn");
const grafik_btn = document.getElementById("grafik-btn");
const regulamin_btn = document.getElementById("regulamin-btn");

kadra_btn.addEventListener("click", clickHandler);
adult_btn.addEventListener("click", clickHandler);
kids_btn.addEventListener("click", clickHandler);
barre_btn.addEventListener("click", clickHandler);
balet_btn.addEventListener("click", clickHandler);
stretching_btn.addEventListener("click", clickHandler);

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}
const newTab = (a) => {
    window.open(a, "_blank");
}
$(document).ready(function() {
    $("#slider").owlCarousel();
});