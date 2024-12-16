
const hiker = document.querySelector(".hiker");
// console.log(hiker);
const dates = document.querySelectorAll(".date");
// console.log(dates);
const modal = document.querySelector(".modal");
console.log(modal);
const modalContent = document.querySelector(".modal-content");
console.log(modalContent);

modal.addEventListener("click", function(event) {
    // console.log("coucou");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// window.addEventListener("scroll", function(){
//     dates.forEach(date =>{
//     if (date.classList.contains("top1")) {
//         moveHiker("top1", "end");
//         displayModal(
//             date.textContent,
//             "CESS - Grande Distinction",
//             "Institut des Dames de Marie - Woluwé-Saint-Lambert",
//             "Sciences sociales - Latin - Langues"
//         );
//     } else if (date.classList.contains("top2")) {
//         moveHiker("top2", "end");
//         displayModal(
//             date.textContent,
//             "Certificat Gestion de Base",
//             "Bruxelles Formation - Bruxelles",
//             "Gestion de Base"
//         );
//     } else if (date.classList.contains("bottom1")) {
//         moveHiker("bottom1", "center");
//         displayModal(
//             date.textContent,
//             "",
//             "Institut Libre Marie Haps - Ixelles",
//             "Logopédie"
//         );
//     } else if (date.classList.contains("bottom2")) {
//         moveHiker("bottom2", "center");
//         displayModal(
//             date.textContent,
//             "CEE...",
//             "Interface 3 - Bruxelles",
//             "Web Developer Application"
//         );
//     }
//     })
// })

dates.forEach(date => {
    // console.log(date.textContent);
    date.style.cursor = "pointer";
    date.addEventListener("click", function(){
        if(date.classList == "date top1"){
            moveHiker("top1", "end");
            displayModal(
                date.textContent,
                "CESS - Grande Distinction",
                "Institut des Dames de Marie - Woluwé-Saint-Lambert", 
                "Sciences sociales - Latin - Langues");
        }
        else if(date.classList == "date top2"){
            moveHiker("top2", "end");
            displayModal(
                date.textContent,
                "Certificat Gestion de Base",
                "Bruxelles Formation - Bruxelles",
                "Gestion de Base"
                );

        }
        else if(date.classList == "date bottom1"){
            moveHiker("bottom1","center");
            displayModal(
                date.textContent,
                "",
                "Institut Libre Marie Haps - Ixelles",
                "Logopédie"
            )
        }
        else if(date.classList == "date bottom2"){

            moveHiker("bottom2","center");
            displayModal(
                date.textContent,
                "CECAF",
                "Interface 3 - Bruxelles", 
                "Web Developer Application");
        }
        
    })
});


function moveHiker(gridArea, justifySelf, alignSelf = "center"){
    hiker.style.gridArea = gridArea;
    hiker.style.justifySelf = justifySelf;
    hiker.style.alignSelf = alignSelf;
}

function displayModal(date, certificate = "", location, description){
    // First we clear the div
    modalContent.innerHTML= "";

    // Then we create elements
    const pDate = document.createElement("p");
    const pCertificate = document.createElement("p");
    const pLocation = document.createElement("p");
    const pDescription = document.createElement("p");
    
    // Close button
    const close = document.createElement("span")
    close.innerHTML = "&times;";
    close.setAttribute("class","close");
    close.addEventListener("click", function(){
        modal.style.display = "none";
    })

    // Element contents
    pDate.textContent = date;
    pDate.style.fontFamily = "Dancing Script";
    pDate.style.fontWeight = "bold";
    pDate.style.textAlign = "center";

    pCertificate.textContent = certificate;
    pCertificate.style.fontWeight = "bold";
    pCertificate.style.textAlign = "center";
    pCertificate.style.fontFamily = "Poppins";


    pLocation.textContent = location;
    pLocation.style.fontFamily = "Poppins";
    pLocation.style.textAlign = "center";

    pDescription.textContent = description;
    pDescription.style.fontStyle = "italic";
    pDescription.style.fontFamily = "Poppins";
    pDescription.style.textAlign = "center";

    // We add it to the div
    modalContent.appendChild(close);
    modalContent.appendChild(pDate);
    modalContent.appendChild(pCertificate);
    modalContent.appendChild(pLocation);
    modalContent.appendChild(pDescription);
    // console.log(modal);
    modal.style.display = "block";
}
