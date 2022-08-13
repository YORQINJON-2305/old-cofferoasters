var burgerBtn = document.querySelector(".site-header__burger");
var burgerBtnImg = document.querySelector(".site-header__burger-img");
var showList = document.querySelector(".sitenav");
var showOverlay = document.querySelector(".overlay");

var icon = true

burgerBtn.addEventListener("click", function(){
    showList.classList.toggle("sitenav--active")
    showOverlay.classList.toggle("overlay--show")

    if(icon){
        burgerBtnImg.src = "../images/mobile-close.svg"
    } else {
        burgerBtnImg.src = "../images/burger.svg"
    }

    icon = !icon
})