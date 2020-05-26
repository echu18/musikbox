# Musikbox



[Musikbox](https://www.echu18.github.io) is an interactive JavaScript game where users can use their keyboard to jam out, live, to music. It was inspired by the likes of Synthesia and Guitar Hero. Although the game has a simple scoring system, the main objective of this application is to allow users to have fun while playing music, live.
<br/>

![Musikbox Main Menu](https://ec-storage.s3-us-west-1.amazonaws.com/main-menu2.JPG)



# Technologies Used
Musikbox was built with:

- JavaScript
- Three.js
- jQuery
- HTML/CSS
- Tone.js (parsing midi to JSON)
- Ableton Live (midi / audio editing)
<br/>
<br/>



# Features


## Main Menu
-----------------
The main menu houses navigation for the help menu, as well as volume controls. Users are able to adjust the volume by first clicking on the volume button, and then dragging the slider that appears accordingly. 
<br/>
Songs are displayed as albums in an album carousel which sits center in the main menu. When the user clicks on one of the album covers, the entire carousel will readjust and navigate to the selected album cover, animating as if flipping through a book. This was achieved with CSS and jQuery to iterate through the array of albums to assign the current index to the user's selection.
<br/>
![Musikbox Main Menu](https://ec-storage.s3-us-west-1.amazonaws.com/main-menu1.png)

![Musikbox Help Menu](https://ec-storage.s3-us-west-1.amazonaws.com/help-menu.JPG)




## Game View
-----------------
The game screen was constructed entirely from Three.js. The controller at the bottom of the screen (including all keyboard keys, letters on each key, and pink receptors) were modeled from Three.js objects. The background for this scene was made using a skybox and galaxy images were sourced from OpenGameArt.com. The animated 'star' particles were created separately with Three.js. 

<br/>
<br/>
In the center of the game screen, the album cover for the current song is displayed as a cube, rotating when the song plays.
I mapped drum sounds to each of the corresponding keys on the keyboard controller, so that users can experience playing the music 'live', as if they were actually drumming to the song. I found stems for "Starry Eyed" and deconstructed the song using Ableton, picking out each individual drum sample and using that to create a corresponding midi file I could use in my project. I exported the song (without the drums) for use as a backing track to the game, and then exported the midi notes for the drum part as a separate file.
<br/>
![Musikbox Game View](https://ec-storage.s3-us-west-1.amazonaws.com/game-view.png)
<br/>


<br/>
Although Tone.js is an entire framework for interacting with and creating music, I used their online tool to convert the midi file into JSON to read the note data (such as time and duration). From there, I imported the JSON file into my project, and took the data I needed to dynamically create notes from the song.
<br/>

## Snippet of midi parsed into JSON:
<pre><code> 
"tracks": [
    {
      "channel": 0,
      "controlChanges": {},
      "pitchBends": [],
      "instrument": {
        "family": "piano",
        "name": "acoustic grand piano",
        "number": 0
      },
      "name": "FINAL MIDI\u0000",
      "notes": [
        {
          "duration": 0.09895833333333215,
          "durationTicks": 19,
          "midi": 36,
          "name": "C2",
          "ticks": 2764,
          "time": 14.395833333333334,
          "velocity": 1
        },
        {
          "duration": 0.09895833333333393,
          "durationTicks": 19,
          "midi": 36,
          "name": "C2",
          "ticks": 2841,
          "time": 14.796875,
          "velocity": 1
        },
        {
          "duration": 0.09375,
          "durationTicks": 18,
          "midi": 36,
          "name": "C2",
          "ticks": 2919,
          "time": 15.203125,
          "velocity": 1
        },
  </code></pre>




## Game Play
-----------------
The game automatically begins when the user is taken to this screen. When the music begins, colorful bars indicating midi notes float down the screen from the album art cube down to the keyboard controller. When the bar hits the pink receptor of the controller, the user is supposed to press the corresponding key.

<br/>
![Musikbox Receptor](https://ec-storage.s3-us-west-1.amazonaws.com/wip-receptor.jpg)
<br/>


When the key is pressed, its corresponding drum sample sound will play regardless of timing. But the key will only light up (change color) when the key is pressed on the correct note at the right time. 

<br/>
![Musikbox Button Press](https://ec-storage.s3-us-west-1.amazonaws.com/howto.JPG)
<br/>

<br/>
![Musikbox Button Light Up](https://ec-storage.s3-us-west-1.amazonaws.com/lightup.jpg)
<br/>

The scoring system is simple and only takes into account whether or not the correct key was pressed when the colorful bar has reached the receptor.

<br/>
![Musikbox Score](https://ec-storage.s3-us-west-1.amazonaws.com/score.jpg)
<br/>
<br/>


