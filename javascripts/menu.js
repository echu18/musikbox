import {stopGame} from './main.js'

// Init
$('.pause-menu').hide()
$('.end-menu').hide()



document.querySelectorAll('.back-to-main-btn').forEach(btn => btn.addEventListener('click', 
    function(e){
        e.preventDefault()
        backToMainMenu()
    })
)


// End menu
 export function backToMainMenu(){
        stopGame();
        $('.pause-menu').hide()
        $('.end-menu').hide()
        $('.main-menu').show()
 }

 export function togglePauseMenu(){
     if ($('.pause-menu').is(":visible"
     )){
        $('.pause-menu').hide()
     } else {
        $('.pause-menu').show()
     }
    
 }


