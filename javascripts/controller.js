export const btns= new Object();
export const chars = new Object();
export const collidable = new Object();
let controller;
  export function createController(scene) {
    
    var geometry = new THREE.CubeGeometry(2700, 60, 300);
    var material = new THREE.MeshPhongMaterial({
      // ambient: 0x555555,
      color: new THREE.Color("hsl(136, 0%, 9%)"),
      specular: 0xffffff,
      emissive: false,
      shininess: 50,
      shading: THREE.SmoothShading
    })
     controller = new THREE.Mesh(geometry, material);

    controller.position.z = -3062;
    scene.add(controller)


    function createButtons() {
     
      // Chars
      var loader = new THREE.FontLoader();
      loader.load( './bebas.json', function ( font ) {
        // var titleTextGeo = new THREE.TextGeometry( 'Musikbox', {
        //   font: font,
        //   size: 600,
        //   height: 100,
        //   curveSegments: 12,
        //   bevelEnabled: false,
        //   bevelThickness: 10,
        //   bevelSize: 8,
        //   bevelOffset: 0,
        //   bevelSegments: 5
        // } );
  
        // var titleText = new THREE.Mesh(titleTextGeo, new THREE.MeshPhongMaterial({emissive: new THREE.Color("hsl(83, 81%, 51%)"), shininess: 100,
        // shading: THREE.flatShading}))
        // titleText.position.set(1200,50,3000)
        // titleText.rotation.set(0,-650.3,0)
        // scene.add(titleText)


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
  
        

        var charColor =  new THREE.Color("hsl(83, 81%, 51%)");
    // Create keyboard button chars
      var charA = new THREE.Mesh(btnText('A'), new THREE.MeshPhongMaterial({emissive: charColor, emissiveIntensity: 0.7, shininess: 100,
      flatShading: true}))

      charA.position.set(1220,45,-3030)
      charA.rotation.set(-249.7,-650.3,0)
      scene.add(charA)


      var charS = new THREE.Mesh(btnText('S'), new THREE.MeshPhongMaterial({emissive: charColor, emissiveIntensity: 0.7, shininess: 100,
      flatShading: true}))

      charS.position.set(920,45,-3030)
      charS.rotation.set(-249.7,-650.3,0)
      scene.add(charS)


      var charD = new THREE.Mesh(btnText('D'), new THREE.MeshPhongMaterial({emissive: charColor, emissiveIntensity: 0.7, shininess: 100,
      flatShading: true}))

      charD.position.set(620,45,-3030)
      charD.rotation.set(-249.7,-650.3,0)
      scene.add(charD)

      var charF = new THREE.Mesh(btnText('F'), new THREE.MeshPhongMaterial({emissive: charColor, emissiveIntensity: 0.7, shininess: 100,
      flatShading: true}))

      charF.position.set(320,45,-3030)
      charF.rotation.set(-249.7,-650.3,0)
      scene.add(charF)

      var charG = new THREE.Mesh(btnText('G'), new THREE.MeshPhongMaterial({emissive: charColor, emissiveIntensity: 0.7, shininess: 100,
      flatShading: true}))

      charG.position.set(20,45,-3030)
      charG.rotation.set(-249.7,-650.3,0)
      scene.add(charG)

      var charH = new THREE.Mesh(btnText('H'), new THREE.MeshPhongMaterial({emissive: charColor, emissiveIntensity: 0.7, shininess: 100,
      flatShading: true}))

      charH.position.set(-280,45,-3030)
      charH.rotation.set(-249.7,-650.3,0)
      scene.add(charH)

      var charJ = new THREE.Mesh(btnText('J'), new THREE.MeshPhongMaterial({emissive: charColor, emissiveIntensity: 0.7, shininess: 100,
      flatShading: true}))

      charJ.position.set(-580,45,-3030)
      charJ.rotation.set(-249.7,-650.3,0)
      scene.add(charJ)

      var charK = new THREE.Mesh(btnText('K'), new THREE.MeshPhongMaterial({emissive: charColor, emissiveIntensity: 0.7, shininess: 100,
      flatShading: true}))

      charK.position.set(-880,45,-3030)
      charK.rotation.set(-249.7,-650.3,0)
      scene.add(charK)

      var charL = new THREE.Mesh(btnText('L'), new THREE.MeshPhongMaterial({emissive: charColor, emissiveIntensity: 0.7, shininess: 100,
      flatShading: true}))

      charL.position.set(-1180,45,-3030)
      charL.rotation.set(-249.7,-650.3,0)
      scene.add(charL)

      var charZ = new THREE.Mesh(btnText('Z'), new THREE.MeshPhongMaterial({emissive: charColor, emissiveIntensity: 0.7, shininess: 100,
      flatShading: true}))

      charZ.position.set(1070,45,-3157)
      charZ.rotation.set(-249.7,-650.3,0)
      scene.add(charZ)

      var charX = new THREE.Mesh(btnText('X'), new THREE.MeshPhongMaterial({emissive: charColor, emissiveIntensity: 0.7, shininess: 100,
      flatShading: true}))

      charX.position.set(770,45,-3157)
      charX.rotation.set(-249.7,-650.3,0)
      scene.add(charX)

      var charC = new THREE.Mesh(btnText('C'), new THREE.MeshPhongMaterial({emissive: charColor, emissiveIntensity: 0.7, shininess: 100,
      flatShading: true}))

      charC.position.set(470,45,-3157)
      charC.rotation.set(-249.7,-650.3,0)
      scene.add(charC)

      var charV = new THREE.Mesh(btnText('V'), new THREE.MeshPhongMaterial({emissive: charColor, emissiveIntensity: 0.7, shininess: 100,
      flatShading: true}))

      charV.position.set(170,45,-3157)
      charV.rotation.set(-249.7,-650.3,0)
      scene.add(charV)

      var charB = new THREE.Mesh(btnText('B'), new THREE.MeshPhongMaterial({emissive: charColor, emissiveIntensity: 0.7, shininess: 100,
      flatShading: true}))

      charB.position.set(-130,45,-3157)
      charB.rotation.set(-249.7,-650.3,0)
      scene.add(charB)

      var charN = new THREE.Mesh(btnText('N'), new THREE.MeshPhongMaterial({emissive: charColor, emissiveIntensity: 0.7, shininess: 100,
      flatShading: true}))

      charN.position.set(-430,45,-3157)
      charN.rotation.set(-249.7,-650.3,0)
      scene.add(charN)

      var charM = new THREE.Mesh(btnText('M'), new THREE.MeshPhongMaterial({emissive: charColor, emissiveIntensity: 0.7, shininess: 100,
      flatShading: true}))

      charM.position.set(-730,45,-3157)
      charM.rotation.set(-249.7,-650.3,0)
      scene.add(charM)

      var charComma = new THREE.Mesh(btnText(','), new THREE.MeshPhongMaterial({emissive: charColor, emissiveIntensity: 0.7, shininess: 100,
      flatShading: true}))

      charComma.position.set(-1045,45,-3150)
      charComma.rotation.set(-249.7,-650.3,0)
      scene.add(charComma)

      chars['charA'] = charA
      chars['charS'] = charS
      chars['charD'] = charD
      chars['charF'] = charF
      chars['charG'] = charG
      chars['charH'] = charH
      chars['charJ'] = charJ
      chars['charK'] = charK
      chars['charL'] = charL
      chars['charZ'] = charZ
      chars['charX'] = charX
      chars['charC'] = charC
      chars['charV'] = charV
      chars['charB'] = charB
      chars['charN'] = charN
      chars['charM'] = charM
      chars['charComma'] = charComma

      } );
  
      






      // Buttons
      var btnGeometry = new THREE.CubeGeometry(150, 60, 100);
      // var btnMaterial = new THREE.MeshPhongMaterial({
      //   // ambient: 0x555555,
      //   color: new THREE.Color("hsl(185, 81%, 60%)"),
      //   specular: 0x555555,
      //   // emissive: new THREE.Color("hsl(185, 81%, 60%)"),
      //   shininess: 100,
      //   flatShading: true
      // })



      // var receptorGeo = new THREE.BoxGeometry( 140, 60, 100, 1, 1, 1 );
      var receptorGeo = new THREE.CubeGeometry( 140, 70, 1, 1, 1, 1 );
      // var wallMaterial = new THREE.MeshBasicMaterial( {color: 0x8888ff} );
	    // var wireMat = new THREE.MeshPhongMaterial( { emissive: receptorColor, wireframe:true,  specular: 0x555555, shininess: 100,
      // flatShading: true } );
      
      var btnColor =  new THREE.Color("hsl(185, 81%, 60%)")
      var receptorColor = new THREE.Color("hsl(303, 100%, 68%)")

    // Create keyboard buttons and receptors
      var btnA = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: btnColor, shininess: 100,
      flatShading: true}));
        btnA.position.set(1200, 30, -3000);
      
          var receptorA = new THREE.Mesh(receptorGeo, new THREE.MeshPhongMaterial( { emissive: receptorColor,  shininess: 100,
          flatShading: true }));
          receptorA.position.set(1200,0,-2910);
          collidable[36] = {receptor: receptorA, active: false};
      
      var btnS = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: btnColor, shininess: 100,
      flatShading: true}));
      btnS.position.set(900, 30, -3000);

          var receptorS = new THREE.Mesh(receptorGeo, new THREE.MeshPhongMaterial( { emissive: receptorColor,  shininess: 100,
          flatShading: true }));
          receptorS.position.set(900,0,-2910);
          collidable[38] =  {receptor: receptorS, active: false};

      var btnD = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: btnColor, shininess: 100,
      flatShading: true}));
      btnD.position.set(600, 30, -3000);

          var receptorD = new THREE.Mesh(receptorGeo, new THREE.MeshPhongMaterial( { emissive: receptorColor,  shininess: 100,
          flatShading: true }));
          receptorD.position.set(600,0,-2910);
          collidable[40] = {receptor: receptorD, active: false};

      var btnF = new THREE.Mesh(new THREE.BoxGeometry( 140, 60, 100, 1, 1, 1 ), new THREE.MeshPhongMaterial({color: btnColor, shininess: 100,
      flatShading: true}));
      btnF.position.set(300, 30, -3000);

          var receptorF = new THREE.Mesh(receptorGeo, new THREE.MeshPhongMaterial( { emissive: receptorColor,  shininess: 100,
          flatShading: true }));

          receptorF.position.set(300,0,-2910);
          collidable[42] = {receptor: receptorF, active: false};

      var btnG = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: btnColor, shininess: 100,
      flatShading: true}));
      btnG.position.set(0, 30, -3000);

          var receptorG = new THREE.Mesh(receptorGeo, new THREE.MeshPhongMaterial( { emissive: receptorColor,  shininess: 100,
          flatShading: true }));

          receptorG.position.set(0,0,-2910);
          collidable[44] = {receptor: receptorG, active: false};

      var btnH = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: btnColor, shininess: 100,
      flatShading: true}));
      btnH.position.set(-300, 30, -3000);

          var receptorH = new THREE.Mesh(receptorGeo, new THREE.MeshPhongMaterial( { emissive: receptorColor,  shininess: 100,
          flatShading: true }));
          receptorH.position.set(-300,0,-2910);
          collidable[46] = {receptor: receptorH, active: false};

      var btnJ = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: btnColor, shininess: 100,
      flatShading: true}));
      btnJ.position.set(-600, 30, -3000);

          var receptorJ = new THREE.Mesh(receptorGeo, new THREE.MeshPhongMaterial( { emissive: receptorColor,  shininess: 100,
          flatShading: true }));
          receptorJ.position.set(-600,0,-2910);
          collidable[48] = {receptor: receptorJ, active: false};

      var btnK = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: btnColor, shininess: 100,
      flatShading: true}));
      btnK.position.set(-900, 30, -3000);

          var receptorK = new THREE.Mesh(receptorGeo, new THREE.MeshPhongMaterial( { emissive: receptorColor,  shininess: 100,
          flatShading: true }));
          receptorK.position.set(-900,0,-2910);
          collidable[50] = {receptor: receptorK, active: false};

      var btnL = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: btnColor, shininess: 100,
      flatShading: true}));
      btnL.position.set(-1200, 30, -3000);

        var receptorL = new THREE.Mesh(receptorGeo, new THREE.MeshPhongMaterial( { emissive: receptorColor,  shininess: 100,
        flatShading: true }));
        receptorL.position.set(-1200,0,-2910);
        collidable[52] = {receptor: receptorL, active: false};

      var btnZ = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: btnColor, shininess: 100,
      flatShading: true}));
      btnZ.position.set(1050, 30, -3125);

          var receptorZ = new THREE.Mesh(receptorGeo, new THREE.MeshPhongMaterial( { emissive: receptorColor,  shininess: 100,
          flatShading: true }));
          receptorZ.position.set(1050,0,-2910);
          collidable[37] = {receptor: receptorZ, active: false};
      
      var btnX = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: btnColor, shininess: 100,
      flatShading: true}));
      btnX.position.set(750, 30, -3125);

          var receptorX = new THREE.Mesh(receptorGeo, new THREE.MeshPhongMaterial( { emissive: receptorColor,  shininess: 100,
          flatShading: true }));
          receptorX.position.set(750,0,-2910);
          collidable[39] = {receptor: receptorX, active: false};

      var btnC = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: btnColor, shininess: 100,
      flatShading: true}));
      btnC.position.set(450, 30, -3125);
      
          var receptorC = new THREE.Mesh(receptorGeo, new THREE.MeshPhongMaterial( { emissive: receptorColor,  shininess: 100,
          flatShading: true }));
          receptorC.position.set(450,0,-2910);
          collidable[41] = {receptor: receptorC, active: false};

      var btnV = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: btnColor, shininess: 100,
      flatShading: true}));
      btnV.position.set(150, 30, -3125);

          var receptorV = new THREE.Mesh(receptorGeo, new THREE.MeshPhongMaterial( { emissive: receptorColor,  shininess: 100,
          flatShading: true }));
          receptorV.position.set(150,0,-2910);
          collidable[43] = {receptor: receptorV, active: false};

      var btnB = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: btnColor, shininess: 100,
      flatShading: true}));
      btnB.position.set(-150, 30, -3125);

          var receptorB = new THREE.Mesh(receptorGeo, new THREE.MeshPhongMaterial( { emissive: receptorColor,  shininess: 100,
          flatShading: true }));
          receptorB.position.set(-150,0,-2910);
          collidable[45] = {receptor: receptorB, active: false};

      var btnN = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: btnColor, shininess: 100,
      flatShading: true}));
      btnN.position.set(-450, 30, -3125);

          var receptorN = new THREE.Mesh(receptorGeo, new THREE.MeshPhongMaterial( { emissive: receptorColor,  shininess: 100,
          flatShading: true }));
          receptorN.position.set(-450,0,-2910);
          collidable[47] = {receptor: receptorN, active: false};

      var btnM = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: btnColor, shininess: 100,
      flatShading: true}));
      btnM.position.set(-750, 30, -3125);

          var receptorM = new THREE.Mesh(receptorGeo, new THREE.MeshPhongMaterial( { emissive: receptorColor, shininess: 100,
          flatShading: true }));
          receptorM.position.set(-750,0,-2910);
          collidable[49] = {receptor: receptorM, active: false};

      var btnComma = new THREE.Mesh(btnGeometry, new THREE.MeshPhongMaterial({color: btnColor,shininess: 100,
      flatShading: true}));
      btnComma.position.set(-1050, 30, -3125);

          var receptorComma = new THREE.Mesh(receptorGeo, new THREE.MeshPhongMaterial( { emissive: receptorColor, shininess: 100,
          flatShading: true }));
          receptorComma.position.set(-1050,0,-2910);
          collidable[51] = {receptor: receptorComma, active: false};
      
      
      
      
      
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
      Object.values(collidable).forEach(receptor => scene.add(receptor.receptor))
    }


    
    
    createButtons()
  }
    

