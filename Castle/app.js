const main = function() {
  console.log('Start JavaScript ...');

  //Init WebGL
  let canvas = document.getElementById('webgl-canvas');
  ler gl = canvas.getContext('webgl');

  if(!gl) {
    console.log('WebGl experimental');
    gl = canvas.getContext('experimental-webgl');
  }

  if(!gl){
    return alert('Your Brower');
  }

  //loop
  let loop = function() {
    gl.clearColor(0.0, 0.0, 1.0, 1.0);
    gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);

    requestAnimationloop(loop);
   }
   requestAnimationloop(loop);
}
