import midiData from '../js-test.js'


var midiNotes = midiData.tracks[0].notes;

debugger

let scene, camera, renderer, skybox, starField, cube, midiBlocks = [], btns= new Object();

function init() {
  scene = new THREE.Scene();
//   camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,45,30000);
  camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,100,30000);
  // camera.position.set(-900,-200,-900);
  // camera.position.set(-2500,1200, 0); // left side is front (old pos)
  // camera.position.set(0,1200, -2200); // correct front
  camera.position.set(0,1200, -4200); // move camera further back

  camera.up = new THREE.Vector3(0,1,0);
  camera.lookAt(new THREE.Vector3(100,700,100));

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
  var geometry = new THREE.Geometry();
  for (let i = 0; i < 10000; i++) {
    var vertex = new THREE.Vector3();
    vertex.x = Math.random()*10000-5000;
    vertex.y = Math.random()*10000-5000;
    vertex.z = Math.random()*10000-5000;
    geometry.vertices.push(vertex);
  }
  starField = new THREE.PointCloud(geometry, new THREE.PointCloudMaterial({
    size: 0.1,
    color: 0xffffff
    })
  );
  scene.add(starField);
  starField.position.z = 100;





  
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

  // var backLight = new THREE.DirectionalLight(0xffffff, 0.05);
  // backLight.position.set(100, 100, 150);;
  // // backLight.castShadow = true;
  // scene.add(backLight);





  




  function createController() {
    
    var geometry = new THREE.BoxGeometry(2700, 60, 400);
    var material = new THREE.MeshPhongMaterial({
      ambient: 0x555555,
      color: 0x555555,
      specular: 0xffffff,
      emissive: 0x555555,
      shininess: 50,
      shading: THREE.SmoothShading
    })
    var controller = new THREE.Mesh(geometry, material);

    controller.position.z = -3070;
    scene.add(controller)



  




    function createButtons() {
      var btnGeometry = new THREE.BoxGeometry(100, 60, 100);
      var btnMaterial = new THREE.MeshPhongMaterial({
        // ambient: 0x555555,
        color: new THREE.Color("hsl(185, 81%, 60%)"),
        specular: 0x555555,
        // emissive: new THREE.Color("hsl(185, 81%, 60%)"),
        shininess: 100,
        shading: THREE.flatShading
      })


      

      var loader = new THREE.FontLoader();

      loader.load( '../bebas.json', function ( font ) {
  
        var textGeo = new THREE.TextGeometry( 'Musikbox', {
          font: font,
          size: 600,
          height: 100,
          curveSegments: 12,
          bevelEnabled: false,
          bevelThickness: 10,
          bevelSize: 8,
          bevelOffset: 0,
          bevelSegments: 5
        } );
  
        var text = new THREE.Mesh(textGeo, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, emissive: new THREE.Color("hsl(83, 81%, 51%)"), shininess: 100,
        shading: THREE.flatShading}))
        text.position.set(1200,50,3000)
        text.rotation.set(0,-650.4,0)
        scene.add(text)
      } );
  
      





      var btnA = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnA.position.set(1200, 30, -3000);
      

      var btnS = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnS.position.set(900, 30, -3000);

      var btnD = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnD.position.set(600, 30, -3000);

      var btnF = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnF.position.set(300, 30, -3000);

      var btnG = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnG.position.set(0, 30, -3000);

      var btnH = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnH.position.set(-300, 30, -3000);

      var btnJ = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnJ.position.set(-600, 30, -3000);

      var btnK = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnK.position.set(-900, 30, -3000);

      var btnL = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnL.position.set(-1200, 30, -3000);

      var btnZ = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnZ.position.set(1050, 30, -3200);
      
      var btnX = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnX.position.set(750, 30, -3200);

      var btnC = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnC.position.set(450, 30, -3200);

      var btnV = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnV.position.set(150, 30, -3200);

      var btnB = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnB.position.set(-150, 30, -3200);

      var btnN = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnN.position.set(-450, 30, -3200);

      var btnM = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnM.position.set(-750, 30, -3200);

      var btnComma = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnComma.position.set(-1050, 30, -3200);
      
      
      
      
      
      btns['btnA'] = btnA
      btns['btnS'] = btnS
      btns['btnD'] = btnD
      btns['btnF'] = btnF
      btns['btnG'] = btnG
      btns['btnH'] = btnH
      btns['btnJ'] = btnJ
      btns['btnK'] = btnK
      btns['btnL'] = btnL
      btns['btnZ'] = btnZ
      btns['btnX'] = btnX
      btns['btnC'] = btnC
      btns['btnV'] = btnV
      btns['btnB'] = btnB
      btns['btnN'] = btnN
      btns['btnM'] = btnM
      btns['btnComma'] = btnComma
      
      
      
      
      Object.values(btns).forEach(btn => scene.add(btn))
    }
    
    
    
    
    createButtons()
  }
    















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
        shading: THREE.SmoothShading
      })
      cube = new THREE.Mesh(geometry, material);


      var position = (54 - midiKey) * 110
      cube.position.x = position
      cube.position.z= 1000; // Position z to make cube front and back
      midiBlocks.push(cube)
    }


    // Iterate through midi notes and creates a midi block for each
    midiNotes.forEach ((note) => {
      addNote(note.midi, note.durationTicks)
    })


    // Grid

  // var size = 2700;
  // var divisions = 9;
  // var colorGrid = new THREE.Color("hsl(260, 81%, 86%)")
  
  // var gridHelper = new THREE.GridHelper(size, divisions, colorGrid  );
  // // gridHelper.scale.set(2700, 10, 6000)
  // gridHelper.position.z = -1500;
  // scene.add( gridHelper );






    createController()
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
    starField.rotation.x -= 0.001;
    starField.rotation.y -= 0.001;
    // starField.rotation.z += 0.001;



    midiBlocks.forEach((block, i) => {

      if (i ===0) {
          scene.add(block)
          block.position.z -= 10
      } else if ( i > 0) {
        setTimeout(function() {
          scene.add(block)
          block.position.z -= 10
        }, midiNotes[i].time * 1000)
      }
    })

    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }






init();




document.body.addEventListener('keydown', e => keyEvent(e, 'press'));
document.body.addEventListener('keyup', e => keyEvent(e, 'release'));


function keyEvent(e, eventType){
    e.preventDefault();

    let btn;

    switch(e.keyCode) {
      case 65:
        btn = 'btnA'
        break;
      case 83:
        btn = 'btnS'
        break;
      case 68:
        btn = 'btnD'
        break;
      case 70:
        btn = 'btnF'
        break;
      case 71:
        btn = 'btnG'
        break;
      case 72:
        btn = 'btnH'
        break;
      case 74:
        btn = 'btnJ'
        break;
      case 75:
        btn = 'btnK'
        break;
      case 76:
        btn = 'btnL'
        break;
      case 90:
        btn = 'btnZ'
        break;
      case 88:
        btn = 'btnX'
        break;
      case 67:
        btn = 'btnC'
        break;
      case 86:
        btn = 'btnV'
        break;
      case 66:
        btn = 'btnB'
        break;
      case 78:
        btn = 'btnN'
        break;
      case 77:
        btn = 'btnM'
        break;  
      case 188:
        btn = 'btn,'
        break;
    }


    if (eventType === 'press') {
      btns[btn].material.emissive.set(new THREE.Color("hsl(330, 70%, 73%)"))
    } else if (eventType === 'release') {
      btns[btn].material.emissive.set(new THREE.Color("hsl(0, 0%, 0%)"))
    }

}