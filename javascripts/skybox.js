import midiData from '../js-test.js'
import {createController} from './controller.js'


var midiNotes = midiData.tracks[0].notes;


let scene, camera, renderer, skybox, starField, cube, midiBlocks = [], btns= new Object();

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
  // controls.enabled = false;

  // let controls = new THREE.OrbitControls(camera);
  controls.addEventListener('change', renderer);
  // controls.minDistance = 8000;
  // controls.maxDistance = 5000;
  



  // Add starfield
  // var starGeo = new THREE.Geometry();
  // for (let i = 0; i < 10000; i++) {
  //   var vertex = new THREE.Vector3();
  //   vertex.x = Math.random()*10000-5000;
  //   vertex.y = Math.random()*10000-5000;
  //   vertex.z = Math.random()*10000-5000;
  //   starGeo.vertices.push(vertex);
  // }
  // starField = new THREE.PointCloud(starGeo, new THREE.PointCloudMaterial({
  //   size: 0.1,
  //   color: 0xffffff
  //   })
  // );
  // scene.add(starField);
  // starField.position.z = 100;





  
  let materialArray = [];
  // let texture_ft = new THREE.TextureLoader().load( 'images/ellie/posx.jpg');
  // let texture_bk = new THREE.TextureLoader().load( 'images/ellie/negx.jpg');
  // let texture_up = new THREE.TextureLoader().load( 'images/ellie/negy.jpg');
  // let texture_dn = new THREE.TextureLoader().load( 'images/ellie/posy.jpg');
  // let texture_rt = new THREE.TextureLoader().load( 'images/ellie/posz.jpg');
  // let texture_lf = new THREE.TextureLoader().load( 'images/ellie/negz.jpg');


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
  let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
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





  










    // Each time function is called it creates a single midi bar
    function addNote(midiKey, durationTicks) {
      let color;  // Switch statement will evaluate midiKey and choose color

      switch (midiKey) {
        case 48:
          color = new THREE.Color("hsl(8, 70%, 75%)");
          break;
        case 49:
          color = new THREE.Color("hsl(99, 70%, 62%)");
          break;
        case 50:
          color = new THREE.Color("hsl(330, 70%, 73%)");
          break;
        case 51:
          color = new THREE.Color("hsl(237, 70%, 61%)");
          break;
        case 52:
          color = new THREE.Color("hsl(17, 81%, 63%)");
          break;
        case 53:
          color = new THREE.Color("hsl(177, 81%, 47%)");
          break;  h
        case 54:
          color = new THREE.Color("hsl(289, 81%, 77%)");
          break;
        case 55:
          color = new THREE.Color("hsl(221, 81%, 54%)");
          break;
        case 56:
          color = new THREE.Color("hsl(120, 81%, 67%)");
          break;
        case 57:
          color = new THREE.Color("hsl(185, 81%, 60%)");
          break;
        case 58:
          color = new THREE.Color("hsl(62, 81%, 64%)");
          break;
        case 59:
          color = new THREE.Color("hsl(347, 81%, 64%)");
          break;
        case 60:
          color = new THREE.Color("hsl(256, 81%, 58%)");
          break;
        case 61:
          color = new THREE.Color("hsl(260, 81%, 86%)");
          break;
        case 62:
          color = new THREE.Color("hsl(221, 81%, 54%)");
          break;
        case 63:
          color = new THREE.Color("hsl(203, 81%, 61%)");
          break;
        case 64:
          color = new THREE.Color("hsl(83, 81%, 51%)");
          break;
      }


      var noteLength = 10 * durationTicks

      var geometry = new THREE.BoxGeometry(50,50, noteLength);
      var material = new THREE.MeshPhongMaterial({
        ambient: 0x555555,
        color: 0x555555,
        specular: 0xffffff,
        emissive: color,
        shininess: 50,
        shading: THREE.SmoothShading, wireframe: true
      })
      cube = new THREE.Mesh(geometry, material);


      var position = (54 - midiKey) * 150
      cube.position.x = position
      cube.position.z= 3000; // Position z to make cube front and back
      midiBlocks.push(cube)
    }


    // Iterate through midi notes and creates a midi block for each
    midiNotes.forEach ((note) => {
      addNote(note.midi, note.durationTicks)
    })


    // Grid

  // var size = 2700;
  // var divisions = 17;
  // var colorGrid = new THREE.Color("hsl(260, 81%, 86%)")
  
  // var gridHelper = new THREE.GridHelper(size, divisions, colorGrid  );
  // // gridHelper.scale.set(2700, 10, 6000)
  // gridHelper.position.z = -1500;
  // scene.add( gridHelper );





    createController(scene)
    animate();
}
  












// Will re-render if window is resized  
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
})




  // // let i = 0

  // function iterator(block, duration) {
  //   setTimeout(scene.add(block), duration)
    
  //   block.position.z -= 3
  // }


  // for (let i = 0; i < midiBlocks.length-1; i++) {
  //   iterator(midiBlocks[i+1], midiNotes[i])
  // //  setTimeout(iterator(midiBlocks[i+1]), midiNotes[i].duration * 10000 )
  // }
  // // if (i === midiBlocks.length) {
  // //   clearInterval()
  // // } else  {
  // //   setInterval(iterator(midiBlocks[i]), midiNotes[i].duration * 1000);
  // // }





  function animate() {
    skybox.rotation.x -= 0.001;
    // skybox.rotation.y += 0.001;
    // starField.rotation.x -= 0.001;
    // starField.rotation.y -= 0.001;
    // starField.rotation.z += 0.001;



    midiBlocks.forEach((block, i) => {

      if (i ===0) {
          scene.add(block)
          block.position.z -= 10
      } else if ( i > 0) {
        setTimeout(function() {
          scene.add(block)
          block.position.z -= 10
        }, midiNotes[i-1].time * 1000)
      }
    })

    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }
init();
