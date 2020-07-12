let menuButton = document.getElementById("nav__menu-button");
let menu = document.getElementById("nav__menu");

menuButton.addEventListener('click', function(){
    menu.classList.toggle("toggle");
});