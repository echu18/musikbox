var songs = document.querySelectorAll("album-art")

var currentIdx = songs.length/2

var leftSide = currentIdx === 0 ? songs[0] : songs.slice(0,currentIdx);
var current = songs[currentIdx];
var rightSide = currentIdx === songs.length-1 ? songs[songs.length-1] : songs.slice(currentIdx+1);