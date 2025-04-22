const CV_BUTTON = document.getElementById("cv");
// console.log(CV_BUTTON);
const PDF_DIV = document.querySelector(".pdf")
// console.log(PDF_DIV);

window.addEventListener("click",function(event) {
     //console.log("toto");
    if (!PDF_DIV.contains(event.target) && event.target !== CV_BUTTON) {
        PDF_DIV.classList.remove("pdfVisible"); // Retire la classe "visible"
    }
});

CV_BUTTON.addEventListener("click", function(event){
    event.preventDefault();
    PDF_DIV.classList.toggle("pdfVisible");
     //console.log(PDF_DIV);
})

