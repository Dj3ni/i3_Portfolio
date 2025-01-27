const Internship = "I'm searching for an internship as web developer";
const InternshipDates = "From 5th of May 2025 to 27th of June 2025";
const TypingSpeed = 50;

/***************** Home Page ******************/ 
const HOME_PAGE = document.getElementById("home");

// Left bubble
const textLeft = document.getElementById("text-left");
const bubbleLeft = document.getElementById("bubble-left");
// console.log(bubbleLeft);

// Right bubble
const textRight = document.getElementById("text-right");
const bubbleRight = document.getElementById("bubble-right");
// console.log(bubbleRight);

function typeText(text, element, callback){
    let i = 0;
    const interval = setInterval(()=>{
        if(i < text.length){
            element.textContent += text[i];
            i++;
        }
        else {
            clearInterval(interval);
            if (callback) callback();
        }
    }, TypingSpeed);
}

// Function for HomePage

function animateBubbles(){
    // Init
    bubbleLeft.classList.remove("seen");
    bubbleRight.classList.remove("seen");
    textLeft.textContent = "";
    textRight.textContent = "";


    // First bubble
    setTimeout(()=>{
        bubbleLeft.classList.add("seen");
        typeText(Internship, textLeft, ()=>{
            // Second bubble
            setTimeout(()=>{
                bubbleRight.classList.add("seen");
                typeText(InternshipDates,textRight,()=>{
                    // Dispearance for bubbles
                    // setTimeout(()=>{
                    //     bubbleLeft.classList.remove("seen");
                    //     bubbleRight.classList.remove("seen");
                    //     // start this loop again
                    //     setTimeout(animateBubbles, 2000);
                    // },5000);
                });
            },1000)
        });
    }, 500);
}

window.addEventListener("load", animateBubbles);


// animateBubbles();


/*************** Contact Page ****************/ 

const phrases = [Internship, InternshipDates];
const PirateBubble = document.getElementById('speech-bubble');
const BubbleContent = document.getElementById("bubble-content");
// console.log(PirateBubble);
// console.log(BubbleContent);

function bubblePirate(){
    PirateBubble.classList.remove("seen");
    BubbleContent.textContent = "";
    setTimeout(()=>{
        // Display bubble
        PirateBubble.classList.add("seen");
        displayNextPhrase(phrases, BubbleContent, PirateBubble);
    },500)
}

let currentPhrase = 0;
function displayNextPhrase(tabContent, elementP, Bubble) {
    if (currentPhrase < tabContent.length) {
        elementP.textContent = "";
        typeText(tabContent[currentPhrase], elementP, () => {
            currentPhrase++;
            setTimeout(displayNextPhrase(tabContent, elementP, Bubble), 7000); 
        });
    } 
    else {
        setTimeout(() => {
            currentPhrase = 0;
            Bubble.classList.remove("seen");
            setTimeout(bubblePirate, 3000);
        }, 4000);
    }
}

window.addEventListener("load", bubblePirate);

// bubblePirate();

/******************** Landing Page *****************/ 

const EN_Bubble =  document.querySelector('.en-dialog');
const EN_Content = document.getElementById('en-dialog-content');
const EN_Texts = [
    "Hi! I'm Jenny.",
    "I'm looking for internship as a Web Developer between 5/05/2025 and 27/06/2025."
];

const FR_Bubble = document.querySelector('.fr-dialog');
const FR_Content = document.getElementById("fr-dialog-content");
const FR_Texts = [
    "Hello! Moi c'est Jenny.",
    "Je suis actuellement à la recherche d'un stage comme Developpeuse Web du 5/05/2025 au 27/06/2025."
];

function displayText(){
    currentPhrase = 0;
    displayNextPhrase(EN_Texts,EN_Content, EN_Bubble);
    setTimeout(()=>{
        currentPhrase = 0;
        displayNextPhrase(FR_Texts, FR_Content, FR_Bubble);
    },5000);
}
window.addEventListener("load",displayText());



// Test function 
//  I want to diplay the text progressively

// let i = 0;

// function typeText(){
//     if(i< Internship.length){
//         textLeft.textContent += Internship[i];
//         i++;
//         setTimeout(typeText,TypingSpeed);
//     }// }
// window.addEventListener("load", typeText);=