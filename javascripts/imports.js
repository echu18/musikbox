// import {importMidi} from './main.js'; // After user selects song, the appropriate file will be sent to main.js



import {starryEyed} from '../midi/starry-eyed/starry-eyed-medium.js';
import {julietTest} from '../midi/juliet-test.js';
import { startGame } from './main.js';



let albumPath, audioPath, midiData;


export function selectTrack(songName){
    debugger
    switch (songName){
        case 'starry-eyed':
            albumPath =  'images/ellie/posx.jpg';
            midiData = starryEyed;
            audioPath = 'audio/starry-eyed/starry-eyed-nodrums.mp3'
            break;
        case 'juliet-romeo':
            albumPath = 'images/juliet-romeo.jpg'
            midiData = julietTest;
            audioPath = 'audio/songs-arcade/juliet-romeo.mp3';
            break;
    }

    var audioPlayer = document.querySelector("#audio-player")
    
    $(audioPlayer).attr("src", audioPath)
    
    if (!!albumPath && !!midiData ) {
        debugger
        startGame(albumPath, midiData)
    }
}    



// debugger
// export const albumFile =  albumPath
// export const midiData = midiPath;






