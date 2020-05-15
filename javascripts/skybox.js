import midiData from '../midi/starry-eyed/starry-eyed-medium.js'
import {createController, collidable, btns, chars} from './controller.js'
import {togglePauseMenu} from '../javascripts/menu.js'




var midiNotes = midiData.tracks[0].notes;
var tempo =  midiData.header.ppq / 10


var gameStart = false;



let scene, projector, controls, camera, renderer, skybox, starField, cube, album, midiBlocks = new Object();

function init() {
  scene = new THREE.Scene();
//   camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,45,30000);
  camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,100,30000);
  // camera.position.set(-900,-200,-900);
  // camera.position.set(-2500,1200, 0); // left side is front (old pos)
  // camera.position.set(0,1200, -2200); // correct front
  camera.position.set(0,1800, -4200); // move camera further back
  // camera.position.set(0,2500, -5000); // move camera further back

  camera.up = new THREE.Vector3(0,1,0);
  // camera.lookAt(new THREE.Vector3(100,700,100));
  camera.lookAt(new THREE.Vector3(100,0,1000));

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enabled = false;

  // let controls = new THREE.OrbitControls(camera);
  controls.addEventListener('change', renderer);
  // controls.minDistance = 8000;
  // controls.maxDistance = 5000;
  



  // Add starfield
  var starGeo = new THREE.Geometry();
  for (let i = 0; i < 1000; i++) {
    var vertex = new THREE.Vector3();
    vertex.x = Math.random()*10000-5000;
    vertex.y = Math.random()*10000-5000;
    vertex.z = Math.random()*10000-5000;
    starGeo.vertices.push(vertex);
  }
  starField = new THREE.PointCloud(starGeo, new THREE.PointCloudMaterial({
    size: 0.1,
    color: 0xffffff
    })
  );
  scene.add(starField);
  starField.position.z = 100;




  
  let materialArray = [];
  let albumArray = [];
  // album art
  let album_texture = new THREE.TextureLoader().load( 'images/ellie/posx.jpg');
  // let texture_bk = new THREE.TextureLoader().load( 'images/ellie/negx.jpg');
  // let texture_up = new THREE.TextureLoader().load( 'images/ellie/negy.jpg');
  // let texture_dn = new THREE.TextureLoader().load( 'images/ellie/posy.jpg');
  // let texture_rt = new THREE.TextureLoader().load( 'images/ellie/posz.jpg');
  // let texture_lf = new THREE.TextureLoader().load( 'images/ellie/negz.jpg');
  
  for (let i = 0; i < 6; i++) {
    albumArray.push(new THREE.MeshBasicMaterial( { map: album_texture}))
  }

  let albumGeo = new THREE.CubeGeometry(2000,2000,2000)
  album = new THREE.Mesh(albumGeo, albumArray);
  album.position.z = 3000;
  album.position.y = 1000;
  scene.add(album)

  // bg
  let texture_ft = new THREE.TextureLoader().load( 'images/galaxy/galaxy-negy.jpg');
  let texture_bk = new THREE.TextureLoader().load( 'images/galaxy/galaxy-negz.jpg');
  let texture_up = new THREE.TextureLoader().load( 'images/galaxy/galaxy-posy.jpg');
  let texture_dn = new THREE.TextureLoader().load( 'images/galaxy/galaxy-posz.jpg');
  let texture_rt = new THREE.TextureLoader().load( 'images/galaxy/galaxy-negy.jpg');
  let texture_lf = new THREE.TextureLoader().load( 'images/galaxy/galaxy-posx.jpg');
        
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
 
  
  for (let i = 0; i < 6; i++) 
  materialArray[i].side = THREE.BackSide;
  let skyboxGeo = new THREE.CubeGeometry( 8000, 8000, 8000);
  skybox = new THREE.Mesh( skyboxGeo, materialArray );
  scene.add( skybox );  






// Add lights
  var light = new THREE.AmbientLight(0xffffff); // white light

  var backLight1 = new THREE.DirectionalLight(0xffffff, 0.05);
  backLight1.position.set(100, 100, 150);

  var backLight2 = new THREE.DirectionalLight(0xffffff, 0.05);
  backLight2.position.set(0, 100, 150);

  var backLight3 = new THREE.DirectionalLight(0xffffff, 0.05);
  backLight3.position.set(-100, 100, 150);
  // backLight.castShadow = true;

  scene.add(backLight1);
  scene.add(backLight2);
  scene.add(backLight3);


  
        var color1 =  new THREE.Color("hsl(203, 81%, 61%)");
        var color2 = new THREE.Color("hsl(83, 81%, 51%)");
        var color3 = new THREE.Color("hsl(8, 70%, 75%)");
        var color4 = new THREE.Color("hsl(99, 70%, 62%)");
        var color5 = new THREE.Color("hsl(17, 81%, 63%)");
        var color6 = new THREE.Color("hsl(177, 81%, 47%)");
        var color7 = new THREE.Color("hsl(221, 81%, 54%)");

    // Each time function is called it creates a single midi bar
    function addNote(midiKey, durationTicks, i) {
      let color;  // Switch statement will evaluate midiKey and choose color
      switch (midiKey) {
        case 36:
          color = color1;
        case 37:
          color = color2;
        case 38:
          color = color3;
          break;
        case 39:
          color = color4;
          break;
        case 40:
          color = color5;
          break;
        case 41:
          color = color6;
          break;
        case 42:
          color = color7;
          break;
        case 43:
          color = color1;
          break; 
        case 44:
          color = color2;
          break;
        case 45:
          color = color3;
          break;
        case 46:
          color = color4;
          break;
        case 47:
          color = color5;
          break;
        case 48:
          color = color6;
          break;
        case 49:
          color = color7;
          break;
        case 50:
          color = color1;
          break;
        case 51:
          color = color2;
          break;
        case 52:
          color = color3;
          break;
        // case 53:
        //   color = new THREE.Color("hsl(203, 81%, 61%)");
        //   break;
        // case 54:
        //   color = new THREE.Color("hsl(83, 81%, 51%)");
          break;
      }


      var noteLength = 5 * durationTicks

      // var midiGeo = new THREE.BoxGeometry(50,50, noteLength);
      var midiGeo = new THREE.CubeGeometry(50,50, noteLength);
      // var midiGeo = new THREE.BoxBufferGeometry(50,50, noteLength);
      var midiMat = new THREE.MeshPhongMaterial({
        // ambient: 0x555555,
        // color: 0x555555,
        // specular: 0xffffff,
        emissive: color,
        shininess: 50,
        flatShading: true, wireframe: false
      })
      cube = new THREE.Mesh(midiGeo, midiMat);
      cube.name = midiKey

      var position = (44 - midiKey) * 150
      cube.position.x = position
      // cube.position.z= 1500; // Position z to make cube front and back
      // cube.position.z= 1500; // Position z to make cube front and back
     
      // cube.position.z = 1500 + (midiNotes[i].time * (tempo * 60.05))
      // cube.position.z = 0 + (midiNotes[i].time * (tempo * 60))
      cube.position.z = (tempo * -200) + (midiNotes[i].time * (tempo * 60))
      

      midiBlocks[i] = cube;

      scene.add(cube)
    }

    createController(scene)

    // Iterate through midi notes and creates a midi block for each
    midiNotes.forEach ((note, i) => {
      addNote(note.midi, note.durationTicks, i)
    })

  

    // Grid

  // var size = 2700;
  // var divisions = 17;
  // var colorGrid = new THREE.Color("hsl(260, 81%, 86%)")
  
  // var gridHelper = new THREE.GridHelper(size, divisions, colorGrid  );
  // // gridHelper.scale.set(2700, 10, 6000)
  // gridHelper.position.z = -1500;
  // scene.add( gridHelper );
  animate()
}


  var audio = document.getElementById("audio-player");


  function startMusic() {
    audio.play();
    gameStart = true;
  }

document.getElementById('start-button').addEventListener('click', 
function() {
  $('.main-menu').hide()

  init();
  
  gameStart = true;
  // setTimeout(function(){startMusic()}, 5000);
  setTimeout(function(){startMusic()}, 1800);

  audio.onended = function(){
    gameStart = false;
    $('.end-menu').show()
  }
})


window.addEventListener('blur', function(){

  if (gameStart === true){
    togglePause();
  }
});


export function togglePause() {
   if ((gameStart === false || gameStart === 'pause') && audio.paused && !$(".end-menu").is(":visible")){
    gameStart = true;
    audio.play();
    togglePauseMenu()
  } else {
      gameStart = 'pause'
    audio.pause()
    togglePauseMenu()
    window.clearTimeout()
  }
}



export function stopGame(){
  audio.pause();
  audio.currentTime = 0;
  gameStart = false;

  while(scene.children.length > 0) { 
    scene.remove(scene.children[0]); 
  }
  // this.renderer.domElement.addEventListener('dblclick', null, false); //remove listener to render
  renderer.dispose()
  scene = null;
  projector = null;
  camera = null;
  controls = null;
  window.location.reload()
}










  

  // function togglePause(e) {
  //   e.preventDefault();
  //   if (e.keyCode === 27) {
  //     if (audio.pause) {
  //       gameStart = true;
  //       audio.play();
  //     } else {
  //       gameStart = 'pause'
  //       audio.pause()
  //     }
  //   }
  // }

  function animate() {
    skybox.rotation.x -= 0.0008;
    // skybox.rotation.y += 0.001;
    starField.rotation.x -= 0.001;
    starField.rotation.y -= 0.001;
    starField.rotation.z += 0.0008;
  
    

    if (gameStart === true) {
      album.rotation.x -= 0.001;
      album.rotation.y -= 0.001;
      // album.rotation.z -= 0.001;

   

      for (let i=0; i < midiNotes.length; i++) {
        let block = midiBlocks[i]

        block.position.z -= tempo

        var originPoint = block.position
    
        var startPos = originPoint.z - block.geometry.parameters.depth/2
        var endPos = originPoint.z + block.geometry.parameters.depth/2

          let overlap = false;
    
          if (endPos  <= -2910 ) { 
            if (!!overlap) {
              overlap = false;
              continue;
            } else {
              collidable[block.name].active = false
              scene.remove(block)
            }
          } else if (startPos <= (-2910 + 50) ) {

            if (collidable[block.name].active === true) overlap = true;

            if (overlap) {
              scene.remove(midiBlocks[i-1])
              continue;
            } else {
              collidable[block.name].active = true
            }
          } 
        } 
      } 

      requestAnimationFrame(animate);
      renderer.render(scene,camera);
   

    // setTimeout( function() {

    //   requestAnimationFrame( animate );

    // }, 5);

    // renderer.render(scene,camera);
  }

  
// init();



var elem = document.documentElement;
function toggleFullScreen(){

  if (!document.fullscreenElement && !document.mozFullScreenElement &&
    !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}






  // Key event listeners and actions
  document.body.addEventListener('keydown', e => keyEvent(e, 'press'));
  document.body.addEventListener('keyup', e => keyEvent(e, 'release'));
  

  function keyEvent(e, eventType){
    e.preventDefault();
    if (eventType === 'press' && (e.keyCode === 27 || e.keyCode === 179) && !$(".main-menu").is(":visible")) {
      togglePause();
    } else if (eventType === 'press' && (e.keyCode === 112)){
      toggleFullScreen();
    }


      let btn, char, receptor;

      switch(e.keyCode) {
        case 65:
          btn = 'btnA'
          char = 'charA'
          receptor = 36
          break;
        case 83:
          btn = 'btnS'
          char = 'charS'
          receptor = 38
          break;
        case 68:
          btn = 'btnD'
          char = 'charD'
          receptor = 40
          break;
        case 70:
          btn = 'btnF'
          char = 'charF'
          receptor = 42
          break;
        case 71:
          btn = 'btnG'
          char = 'charG'
          receptor = 44
          break;
        case 72:
          btn = 'btnH'
          char = 'charH'
          receptor = 46
          break;
        case 74:
          btn = 'btnJ'
          char = 'charJ'
          receptor = 48
          break;
        case 75:
          btn = 'btnK'
          char = 'charK'
          receptor = 50
          break;
        case 76:
          btn = 'btnL'
          char = 'charL'
          receptor = 52
          break;
        case 90:
          btn = 'btnZ'
          char = 'charZ'
          receptor = 37
          break;
        case 88:
          btn = 'btnX'
          char = 'charX'
          receptor = 39
          break;
        case 67:
          btn = 'btnC'
          char = 'charC'
          receptor = 41
          break;
        case 86:
          btn = 'btnV'
          char = 'charV'
          receptor = 43
          break;
        case 66:
          btn = 'btnB'
          char = 'charB'
          receptor = 45
          break;
        case 78:
          btn = 'btnN'
          char = 'charN'
          receptor = 47
          break;
        case 77:
          btn = 'btnM'
          char = 'charM'
          receptor = 49
          break;  
        case 188:
          btn = 'btnComma'
          char = 'charComma'
          receptor = 51
          break;
  
        default: 
          break;
      }


      



      var btnOnColor = new THREE.Color("hsl(330, 70%, 73%)")
      var btnOffColor = new THREE.Color("hsl(0, 0%, 0%)")

      if (eventType === 'press' && e.keyCode !== 27) {
        if (collidable[receptor].active === true) {
          btns[btn].material.emissive.set(btnOnColor)
        }

        btns[btn].position.y = 10
        chars[char].position.y = 25



      } else if (eventType === 'release' && e.keyCode !== 27) {
        btns[btn].material.emissive.set(btnOffColor)

          btns[btn].position.y = 30
          chars[char].position.y = 45
      }

    }




    // Will re-render if window is resized  
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
})