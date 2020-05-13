self.addEventListener('message', function(msg) {
    setTimeout(function() {
      switch (msg.data.cmd) {
        case 'moveBlock':
            let block = msg.data.var
            setTimeout(function() {
                scene.add(block)
                block.position.z -= tempo
              }, midiNotes[i].time * 1000)

            self.postMessage({
            result: result
          });
          break;
        default:
          self.postMessage({
            result: null
          });
      }
    }, 1000);
  });