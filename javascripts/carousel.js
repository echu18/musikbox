import {selectTrack} from './imports.js';
import {startGame} from './main.js'



let leftSide, current, rightSide;

var songNodes = document.querySelectorAll(".album-art")
var songs = Array.from(songNodes).map((song) => song)
var currentIdx = currentIdx || Math.floor(songs.length/2);



updateCarousel();

$('.album-art').on('click', 'img', function(event) {
    event.preventDefault();

    // $(songs[currentIdx]).removeClass('centered-album')

    songs.forEach(song => $(song).removeClass("rotate-left-album centered-album rotate-right-album"))

    var currentSong = $(this).closest("div")
    currentIdx = songs.indexOf(currentSong[0])
    updateCarousel();
});




export function animateAlbumCarousel(direction){
        if (direction === 'previous') {
            if (currentIdx === 0) return;
            $(songs[currentIdx]).removeClass('centered-album')
            currentIdx = (currentIdx - 1) % songs.length
        } else if (direction ==='next') {
            if (currentIdx === songs.length-1) return;

            $(songs[currentIdx]).removeClass('centered-album')
            currentIdx = (currentIdx + 1) % songs.length
        }
        updateCarousel();
}


function updateCarousel(){
        var leftSide = currentIdx === 0 ? songs[0] : songs.slice(0,currentIdx);
        var current = songs[currentIdx];
        var rightSide = currentIdx === songs.length-1 ? songs[songs.length-1] : songs.slice(currentIdx+1);

        $(current).removeClass('rotate-left-album rotate-right-album').addClass('centered-album')

        for (let i=0; i < current.children.length; i++) {
            $(current.children[i]).show()
        }
       

        for (let i=0; i < leftSide.length; i++) {
            $(leftSide[i]).css("z-index", i)
        }

        for (let j=rightSide.length-1; j >= 0; j--) {
            $(rightSide[j]).css("z-index", -1 * j)
        }

        if (leftSide.length > 0) { leftSide.forEach(element => {
            $(element).addClass("rotate-left-album")
            
            var children = Object.values(element.children);

            for (let i=0; i < children.length; i++) {
                if (!$(children[i]).is('img')) $(children[i]).hide()
            }
            });
        }

        if (rightSide.length > 0) {rightSide.forEach(element => {
            $(element).addClass("rotate-right-album")

            var children = Object.values(element.children);

            for (let i=0; i < children.length; i++) {
                if (!$(children[i]).is('img')) $(children[i]).hide()
            }
        });
    }
}
debugger
let songName;

document.getElementById('start-button').addEventListener('click', 
function selectStart(e){
    e.preventDefault();
    debugger
    songName = songNodes[currentIdx].dataset.songSelect
    
    
    if (!!selectTrack(songName))  startGame()
 
})
