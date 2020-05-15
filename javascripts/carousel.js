
let leftSide, current, rightSide;

var songNodes = document.querySelectorAll(".album-art")
var songs = Array.from(songNodes).map((song) => song)
var currentIdx = currentIdx || Math.floor(songs.length/2);

updateCarousel();


function animateAlbumCarousel(direction){
        if (direction === 'previous') {
            $(songs[currentIdx]).removeClass('centered-album')
            currentIdx = (currentIdx - 1) % songs.length
        } else if (direction ==='next') {
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

        for (let i=0; i < leftSide.length; i++) {
            $(leftSide[i]).css("z-index", i)
        }

        for (let j=rightSide.length-1; j > 0; j--) {
            $(rightSide[j]).css("z-index", -1 *j)
        }

        leftSide.forEach(element => {
            $(element).addClass("rotate-left-album")
            
            var children = Object.values(element.children);

            for (let i=0; i < children.length; i++) {
                if (!$(children[i]).is('img')) $(children[i]).hide()
            }
        });

        rightSide.forEach(element => {
            $(element).addClass("rotate-right-album")

            var children = Object.values(element.children);

            for (let i=0; i < children.length; i++) {
                if (!$(children[i]).is('img')) $(children[i]).hide()
            }
        });

}