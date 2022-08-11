var burgerBtn = document.querySelector(".site-header__burger");
var burgerBtnImg = document.querySelector(".site-header__burger-img");
var showList = document.querySelector(".site-header__hidden-list");
var showOverlay = document.querySelector(".overlay");

var icon = true

burgerBtn.addEventListener("click", function(){
    showList.classList.toggle("site-header__hidden-list--show")
    showOverlay.classList.toggle("overlay--show")

    if(icon){
        burgerBtnImg.src = "../images/mobile-close.svg"
    } else {
        burgerBtnImg.src = "../images/burger.svg"
    }

    icon = !icon
})