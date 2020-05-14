self.addEventListener('message', function(block) {
//     debugger

//     var originPoint = block.position.clone();
  
//     var startPos = originPoint.z - block.geometry.parameters.depth/2
//     var endPos = originPoint.z + block.geometry.parameters.depth/2
//     var blockLength = block.geometry.parameters.depth

//       let overlap = false;

      
//       if (endPos  <= -2910 ) { 
//         if (!!overlap) {
//           overlap = false;
//           continue;
//         } else {
//           collidable[block.name].active = false
//         }
//       } else if (startPos <= (-2910 + 50) ) {

//             if (collidable[block.name].active === true) overlap = true;

//             if (overlap) {
//             continue;
//             } else {
//             collidable[block.name].active = true
//             }
        
//       } 
    
  }, false);