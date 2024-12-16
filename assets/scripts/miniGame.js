// const dixit = document.getElementById("dixit");
// console.log(dixit);

const divGames = document.querySelectorAll(".scratchpad");
console.log(divGames);

const scratchpadConfigs = {
    dixit: '../../assets/images/games/dixit.jpg',
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

// $('.scratchpad').wScratchPad({
//     size        : 50,       
//     bg:  '../../assets/images/games/scythe.jpg',
//     realtime    : true, 
//     fg: 'http://jennamolby.com/scratch-and-win/images/overlay.png',
//     'cursor': 'url("http://jennamolby.com/scratch-and-win/images/coin1.png") 5 5, default',
// });

