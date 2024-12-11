// const dixit = document.getElementById("dixit");
// console.log(dixit);

const divGames = document.querySelectorAll(".scratchpad");
console.log(divGames);

const scratchpadConfigs = {
    dixit: '/SchoolProject/assets/images/games/path2.jpg',
    akropolis: '/SchoolProject/assets/images/games/akropolis.jpg',
    cantStop: '/SchoolProject/assets/images/games/cantStop.jpg',
    scythe: '/SchoolProject/assets/images/games/scythe.jpg',
    kingdomino: '/SchoolProject/assets/images/games/kingdomino.jpg',
    ticketToRide: '/SchoolProject/assets/images/games/ticketToRide.jpg',
    snake: '/SchoolProject/assets/images/games/snake.png'
};

Object.keys(scratchpadConfigs).forEach(id =>{
    $(`#${id}`).wScratchPad({
    size        : 50,       
    bg:  scratchpadConfigs[id],
    realtime    : true, 
    fg: '/SchoolProject/assets/images/games/police.png',
    'cursor': 'url("http://jennamolby.com/scratch-and-win/images/coin1.png") 5 5, default',
});

})

// $('.scratchpad').wScratchPad({
//     size        : 50,       
//     bg:  '/SchoolProject/assets/images/games/scythe.jpg',
//     realtime    : true, 
//     fg: 'http://jennamolby.com/scratch-and-win/images/overlay.png',
//     'cursor': 'url("http://jennamolby.com/scratch-and-win/images/coin1.png") 5 5, default',
// });

