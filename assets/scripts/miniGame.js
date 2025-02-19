document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".scratch-card").forEach((card) => {
        const canvas = card.querySelector(".scratch-canvas");
        const context = canvas.getContext("2d");
        const width = canvas.width = 200;
        const height = canvas.height = 200;

        // Image de la couche à gratter
        const scratchImage = new Image();
        scratchImage.src = "/assets/images/games/police.png";

        scratchImage.onload = function () {
            context.drawImage(scratchImage, 0, 0, width, height);
        };

        let isDrawing = false;

        function getMousePos(e) {
            const rect = canvas.getBoundingClientRect();
            return {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        }

        function scratch(e) {
            if (!isDrawing) return;
            const { x, y } = getMousePos(e);
            context.globalCompositeOperation = "destination-out";
            context.beginPath();
            context.arc(x, y, 20, 0, Math.PI * 3); // Taille du "grattage"
            context.fill();
        }

        function startScratch(e) {
            isDrawing = true;
            scratch(e);
        }

        function stopScratch() {
            isDrawing = false;
            checkScratchPercentage();
        }
        
        function checkScratchPercentage() {
            const imageData = context.getImageData(0, 0, width, height);
            let totalPixels = imageData.data.length / 4;
            let clearPixels = 0;

            for (let i = 0; i < totalPixels; i++) {
                if (imageData.data[i * 4 + 3] === 0) {
                    clearPixels++;
                }
            }
        }

        canvas.addEventListener("mousedown", startScratch);
        canvas.addEventListener("mousemove", scratch);
        canvas.addEventListener("mouseup", stopScratch);
        canvas.addEventListener("mouseleave", stopScratch);
    });
});


/*Prob with codepen: depends on their update so abandon this code who worked perfectly
const divGames = document.querySelectorAll(".scratchpad");
console.log(divGames);

const scratchpadConfigs = {
    dixit: '../../assets/images/games/dixit.png',
    akropolis: '../../assets/images/games/akropolis.jpg',
    cantStop: '../../assets/images/games/cantStop.jpg',
    scythe: '../../assets/images/games/scythe.jpg',
    kingdomino: '../../assets/images/games/kingdomino.jpg',
    ticketToRide: '../../assets/images/games/ticketToRide.jpg',
    snake: '../../assets/images/games/snake.png'
};

Object.keys(scratchpadConfigs).forEach(id =>{
    $(`#${id}`).wScratchPad({
    size        : 50,       
    bg:  scratchpadConfigs[id],
    realtime    : true, 
    fg: '../../assets/images/games/police.png',
    'cursor': 'url("http://jennamolby.com/scratch-and-win/images/coin1.png") 5 5, default',
});

})
*/
/*Test 
// const dixit = document.getElementById("dixit");
// console.log(dixit);
$('.scratchpad').wScratchPad({
    size        : 50,       
     bg:  '../../assets/images/games/scythe.jpg',
     realtime    : true, 
     fg: 'http://jennamolby.com/scratch-and-win/images/overlay.png',
     'cursor': 'url("http://jennamolby.com/scratch-and-win/images/coin1.png") 5 5, default',
 });
*/


