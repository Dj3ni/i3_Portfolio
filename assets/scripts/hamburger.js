const Burger_Menu = document.querySelector(".burger-navbar");
// console.log(Burger_Menu);
const Burger = document.getElementById('burger');
// console.log(Burger);
const Quit = document.querySelector(".quit")

Burger.addEventListener("click", function(event){
    event.preventDefault();
    // console.log("coucou");
    Burger_Menu.classList.toggle("visible");
})

Quit.addEventListener("click", function(){
    console.log("quit");
    Burger_Menu.classList.toggle("visible");
})