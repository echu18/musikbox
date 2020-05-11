let btns= new Object();

  export function createController(scene) {
    
    var geometry = new THREE.BoxGeometry(2700, 60, 300);
    var material = new THREE.MeshPhongMaterial({
      ambient: 0x555555,
      color: new THREE.Color("hsl(136, 0%, 9%)"),
      specular: 0xffffff,
      emissive: false,
      shininess: 50,
      shading: THREE.SmoothShading
    })
    var controller = new THREE.Mesh(geometry, material);

    controller.position.z = -3062;
    scene.add(controller)



  




    function createButtons() {
      var btnGeometry = new THREE.BoxGeometry(140, 60, 100);
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
  
        var titleTextGeo = new THREE.TextGeometry( 'Musikbox', {
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
  
        var titleText = new THREE.Mesh(titleTextGeo, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, emissive: new THREE.Color("hsl(83, 81%, 51%)"), shininess: 100,
        shading: THREE.flatShading}))
        titleText.position.set(1200,50,3000)
        titleText.rotation.set(0,-650.3,0)
        scene.add(titleText)


        function btnText(char) {
          var charGeo = new THREE.TextGeometry( char, {
            font: font,
            size: 70,
            height: 20,
            curveSegments: 12,
            bevelEnabled: false,
            bevelThickness: 10,
            bevelSize: 8,
            bevelOffset: 0,
            bevelSegments: 5
          } );
  
          return charGeo;
        }
  
        
      var charA = new THREE.Mesh(btnText('A'), new THREE.MeshPhongMaterial({color:  new THREE.Color("hsl(83, 81%, 51%)"), specular: 0x555555, emissive:  new THREE.Color("hsl(83, 81%, 51%)"), emissiveIntensity: 0.7, shininess: 100,
      shading: THREE.flatShading}))

      charA.position.set(1220,45,-3030)
      charA.rotation.set(-249.7,-650.3,0)
      scene.add(charA)



      var charS = new THREE.Mesh(btnText('S'), new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, emissive: new THREE.Color("hsl(83, 81%, 51%)"), emissiveIntensity: 0.7, shininess: 100,
      shading: THREE.flatShading}))

      charS.position.set(920,45,-3030)
      charS.rotation.set(-249.7,-650.3,0)
      scene.add(charS)


      var charD = new THREE.Mesh(btnText('D'), new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, emissive: new THREE.Color("hsl(83, 81%, 51%)"), emissiveIntensity: 0.7, shininess: 100,
      shading: THREE.flatShading}))

      charD.position.set(620,45,-3030)
      charD.rotation.set(-249.7,-650.3,0)
      scene.add(charD)

      var charF = new THREE.Mesh(btnText('F'), new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, emissive: new THREE.Color("hsl(83, 81%, 51%)"), emissiveIntensity: 0.7, shininess: 100,
      shading: THREE.flatShading}))

      charF.position.set(320,45,-3030)
      charF.rotation.set(-249.7,-650.3,0)
      scene.add(charF)

      var charG = new THREE.Mesh(btnText('G'), new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, emissive: new THREE.Color("hsl(83, 81%, 51%)"), emissiveIntensity: 0.7, shininess: 100,
      shading: THREE.flatShading}))

      charG.position.set(20,45,-3030)
      charG.rotation.set(-249.7,-650.3,0)
      scene.add(charG)

      var charH = new THREE.Mesh(btnText('H'), new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, emissive: new THREE.Color("hsl(83, 81%, 51%)"), emissiveIntensity: 0.7, shininess: 100,
      shading: THREE.flatShading}))

      charH.position.set(-280,45,-3030)
      charH.rotation.set(-249.7,-650.3,0)
      scene.add(charH)

      var charJ = new THREE.Mesh(btnText('J'), new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, emissive: new THREE.Color("hsl(83, 81%, 51%)"), emissiveIntensity: 0.7, shininess: 100,
      shading: THREE.flatShading}))

      charJ.position.set(-580,45,-3030)
      charJ.rotation.set(-249.7,-650.3,0)
      scene.add(charJ)

      var charK = new THREE.Mesh(btnText('K'), new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, emissive: new THREE.Color("hsl(83, 81%, 51%)"), emissiveIntensity: 0.7, shininess: 100,
      shading: THREE.flatShading}))

      charK.position.set(-880,45,-3030)
      charK.rotation.set(-249.7,-650.3,0)
      scene.add(charK)

      var charL = new THREE.Mesh(btnText('L'), new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, emissive: new THREE.Color("hsl(83, 81%, 51%)"), emissiveIntensity: 0.7, shininess: 100,
      shading: THREE.flatShading}))

      charL.position.set(-1180,45,-3030)
      charL.rotation.set(-249.7,-650.3,0)
      scene.add(charL)

      var charZ = new THREE.Mesh(btnText('Z'), new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, emissive: new THREE.Color("hsl(83, 81%, 51%)"), emissiveIntensity: 0.7, shininess: 100,
      shading: THREE.flatShading}))

      charZ.position.set(1070,45,-3157)
      charZ.rotation.set(-249.7,-650.3,0)
      scene.add(charZ)

      var charX = new THREE.Mesh(btnText('X'), new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, emissive: new THREE.Color("hsl(83, 81%, 51%)"), emissiveIntensity: 0.7, shininess: 100,
      shading: THREE.flatShading}))

      charX.position.set(770,45,-3157)
      charX.rotation.set(-249.7,-650.3,0)
      scene.add(charX)

      var charC = new THREE.Mesh(btnText('C'), new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, emissive: new THREE.Color("hsl(83, 81%, 51%)"), emissiveIntensity: 0.7, shininess: 100,
      shading: THREE.flatShading}))

      charC.position.set(470,45,-3157)
      charC.rotation.set(-249.7,-650.3,0)
      scene.add(charC)

      var charV = new THREE.Mesh(btnText('V'), new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, emissive: new THREE.Color("hsl(83, 81%, 51%)"), emissiveIntensity: 0.7, shininess: 100,
      shading: THREE.flatShading}))

      charV.position.set(170,45,-3157)
      charV.rotation.set(-249.7,-650.3,0)
      scene.add(charV)

      var charB = new THREE.Mesh(btnText('B'), new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, emissive: new THREE.Color("hsl(83, 81%, 51%)"), emissiveIntensity: 0.7, shininess: 100,
      shading: THREE.flatShading}))

      charB.position.set(-130,45,-3157)
      charB.rotation.set(-249.7,-650.3,0)
      scene.add(charB)

      var charN = new THREE.Mesh(btnText('N'), new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, emissive: new THREE.Color("hsl(83, 81%, 51%)"), emissiveIntensity: 0.7, shininess: 100,
      shading: THREE.flatShading}))

      charN.position.set(-430,45,-3157)
      charN.rotation.set(-249.7,-650.3,0)
      scene.add(charN)

      var charM = new THREE.Mesh(btnText('M'), new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, emissive: new THREE.Color("hsl(83, 81%, 51%)"), emissiveIntensity: 0.7, shininess: 100,
      shading: THREE.flatShading}))

      charM.position.set(-730,45,-3157)
      charM.rotation.set(-249.7,-650.3,0)
      scene.add(charM)

      var charComma = new THREE.Mesh(btnText(','), new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, emissive: new THREE.Color("hsl(83, 81%, 51%)"), emissiveIntensity: 0.7, shininess: 100,
      shading: THREE.flatShading}))

      charComma.position.set(-1045,45,-3150)
      charComma.rotation.set(-249.7,-650.3,0)
      scene.add(charComma)

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
      btnZ.position.set(1050, 30, -3125);
      
      var btnX = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnX.position.set(750, 30, -3125);

      var btnC = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnC.position.set(450, 30, -3125);

      var btnV = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnV.position.set(150, 30, -3125);

      var btnB = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnB.position.set(-150, 30, -3125);

      var btnN = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnN.position.set(-450, 30, -3125);

      var btnM = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnM.position.set(-750, 30, -3125);

      var btnComma = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: new THREE.Color("hsl(185, 81%, 60%)"), specular: 0x555555, shininess: 100,
      shading: THREE.flatShading}));
      btnComma.position.set(-1050, 30, -3125);
      
      
      
      
      
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
        btn = 'btnComma'
        break;
      default: 
      break;
    }


    if (eventType === 'press') {
      btns[btn].material.emissive.set(new THREE.Color("hsl(330, 70%, 73%)"))
    } else if (eventType === 'release') {
      btns[btn].material.emissive.set(new THREE.Color("hsl(0, 0%, 0%)"))
    }

}