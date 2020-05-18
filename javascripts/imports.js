// import {importMidi} from './main.js'; // After user selects song, the appropriate file will be sent to main.js



import {starryEyed} from '../midi/starry-eyed/starry-eyed-midi.js';
// import {julietRomeo} from '../midi/juliet-romeo-midi.js';
import {julietRomeo} from '../midi/juliet-test2-midi.js';
import { startGame } from './main.js';



let albumPath, audioPath, midiData;


export function selectTrack(songName){
    
    switch (songName){
        case 'starry-eyed':
            albumPath =  'images/ellie/posx.jpg';
            midiData = starryEyed;
            audioPath = 'audio/starry-eyed/starry-eyed-nodrums.mp3'
            break;
        case 'juliet-romeo':
            albumPath = 'images/juliet-romeo.jpg'
            midiData = julietRomeo;
            audioPath = 'audio/songs-arcade/juliet-romeo.mp3';
            break;
        case 'is-it-love':
            albumPath = 'images/3lau.jpg'
            midiData = julietRomeo;
            audioPath = 'audio/songs-arcade/is-it-love.mp3';
            break;
    }

    var audioPlayer = document.querySelector("#audio-player")
    
    $(audioPlayer).attr("src", audioPath)
    
    if (!!albumPath && !!midiData ) {
        
        startGame(albumPath, midiData)
    }
}    







