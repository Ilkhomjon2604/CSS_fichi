
let menu = document.querySelector(".menu-burger");
let link =document.querySelector(".nav-items");
menu.addEventListener("click" , function(){
  menu.classList.toggle("menu-burger__active")
  link.classList.toggle("nav-items__active")
})
