// Filters Project Buttons
const filters  = document.querySelectorAll(".filters button")
console.log(filters);
const projects = document.querySelectorAll(".project")
console.log(projects);

filters.forEach(button => {
    // console.log("coucou");
    button.addEventListener('click', function() {
        const filter = button.getAttribute("data-filter");
        console.log(filter);

        projects.forEach(project =>{
            const categories = project.getAttribute("data-category").split(",");
            if(filter === "all" || categories.includes(filter)){
                project.style.display = "block";
            }
            else{
                project.style.display = "none";
            }
        })
    })
});

/***************************** Filters URL Param *****************/
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
