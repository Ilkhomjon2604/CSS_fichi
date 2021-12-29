

let container = document.querySelector(".pro-container");

container.addEventListener("click", function(e){
container.classList.toggle("pro-container-org")
})

let menu = document.querySelector(".menu-burger");
menu.addEventListener("click" , function(){
  menu.classList.toggle(".menu-burger__active")
})

console.log(menu)