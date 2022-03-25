const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".nav");


burger.addEventListener("click" , function() {
  burger.classList.toggle("header__burger-opened");
  nav.classList.toggle("nav-opened");
})

let plusBtn = document.querySelector(".features__item-btn")
let questionText = document.querySelector(".features__item-desc")

plusBtn.addEventListener("click", function(){
  plusBtn.classList.toggle("features__item-btn-selected")
  questionText.classList.toggle("visually-hidden")
})