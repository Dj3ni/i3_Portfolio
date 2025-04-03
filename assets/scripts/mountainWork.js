
const hiker = document.querySelector(".hiker");
// console.log(hiker);
const dates = document.querySelectorAll(".date");
// console.log(dates);
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

dates.forEach(date => {
    // console.log(date.textContent);
    date.style.cursor = "pointer";
    date.addEventListener("click", function(){
        if(date.classList == "date top1"){
            moveHiker("top1", "end");
            displayModal(
                date.textContent,
                "Monitrice Sportive",
                "Aventure Parc - Waver", 
                "Clients Management - Bungee-jump Monitor - Entertainments Manager (Birthdays and TeamBuildings)");
        }
        else if(date.classList == "date top2"){
            moveHiker("top2", "end");
            displayModal(
                date.textContent,
                "Assistant ShopManager (2015-2017) - ShopManager (2017-2023)",
                "Hema - Louvain-La-Neuve - Waver",
                "Employees Management - Stock Management - Client Counsel - Implementation commercial strategies - Turnover analysis"
                );

        }
        else if(date.classList == "date bottom1"){
            moveHiker("bottom1","center");
            displayModal(
                date.textContent,
                "Assistant ShopManager",
                "Action - Perwez",
                "Employees Management - Stock Management - Client Counsel - Implementation commercial strategies - Turnover analysis"
            )
        }
        else if(date.classList == "date bottom2"){

            moveHiker("bottom2","center");
            displayModal(
                date.textContent,
                "Freelance Boardgames Animator",
                "Dés-mentiel - Belgium", 
                "Boardgames events - Escapes Games - Teambuildings");
        }
    })
});

function moveHiker(gridArea, justifySelf, alignSelf = "center"){
    hiker.style.gridArea = gridArea;
    hiker.style.justifySelf = justifySelf;
    hiker.style.alignSelf = alignSelf;
}

function displayModal(date, job, location, description){
    // First we clear the div
    modalContent.innerHTML= "";

    // Then we create elements
    const pDate = document.createElement("p");
    const pJob = document.createElement("p");
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

    pJob.textContent = job;
    pJob.style.fontWeight = "bold";
    pJob.style.textAlign = "center";
    pJob.style.fontFamily = "Poppins";


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
    modalContent.appendChild(pJob);
    modalContent.appendChild(pLocation);
    modalContent.appendChild(pDescription);
    // console.log(modal);
    modal.style.display = "block";
}
