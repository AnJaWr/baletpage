const preloader = document.querySelector('#preloader');

preloader.classList.add('show-preloader');

window.addEventListener('load', function () {
	setTimeout(function(){
    	preloader.classList.remove('show-preloader');
	}, 2000);
});


const kadra_btn = document.getElementById("kadra_btn");
// const links = document.querySelectorAll(".page-header ul a");
const kids_btn= document.getElementById("kids_btn");
const adult_btn= document.getElementById("adult_btn");


kadra_btn.addEventListener("click", clickHandler);
adult_btn.addEventListener("click", clickHandler);
kids_btn.addEventListener("click", clickHandler);

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}