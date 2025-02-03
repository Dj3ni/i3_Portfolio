const MENU = document.querySelectorAll(".menu li")
console.dir(MENU);
const MENU_IMAGES = document.querySelectorAll(".menu img")
console.dir(MENU_IMAGES)

console.dir(MENU_IMAGES.src)

for(element of MENU){
    element.addEventListener("onmouseover", event =>{
        previousElementSibling.src = "img/logoWitcher.png";
    })
}

const SOUND = document.querySelector(".menu audio")

SOUND.addEventListener("click",function(){
    if (SOUND === "🔊"){
        SOUND.innerText = "🔇";
        SOUND.innerHTML = "<source src ='Exercices/jeux vidéo/1c3ad5837b6126d639051cddc05f35fe823d7265.file' type ='audio/mpeg' >"
    }
    else{
        SOUND.innerText = "🔊";
        SOUND.innerHTML = ""
    }
})

