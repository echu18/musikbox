var mouseX = 0, mouseY = 0;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var cubecam = new THREE.CubeCamera(0.1, 120, 256);
// mipmap filter
cubecam.renderTarget.minFilter = THREE.LinearMipMapLinearFilter;
scene.add(cubecam);

var renderer = new THREE.WebGLRenderer({ antialias: true });
// background
renderer.setClearColor( 0x000000, 0 );

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = -110;
camera.lookAt(scene.position);

// mesh group to add objects
var group = new THREE.Group();
scene.add(group);

// add lights
var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight.position.set( 0, 0, 1 );
scene.add( directionalLight );

//make starfield
var geometry = new THREE.Geometry();
for (i = 0; i < 1000; i++) {
  var vertex = new THREE.Vector3();
  vertex.x = Math.random()*1000-500;
  vertex.y = Math.random()*1000-500;
  vertex.z = Math.random()*1000-500;
  geometry.vertices.push(vertex);
}
var starField = new THREE.PointCloud(geometry, new THREE.PointCloudMaterial({
  size: 0.1,
  color: 0xffffff
  })
);
scene.add(starField);
starField.position.z = 100;

var time = new THREE.Clock();

var render = function () {
  camera.position.x = mouseX * 0.5;
  camera.position.y = -mouseY * 0.5;
  camera.lookAt(scene.position);

  starField.rotation.z += 0.0005;

  starField.material.color.setHSL(0, 1, 1);


  cubecam.updateCubeMap( renderer, scene );


  renderer.render(scene, camera);
  requestAnimationFrame(render);
};

render();

// use mouse and resize events
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove( event ) {
  mouseX = event.clientX - window.innerWidth/2;
  mouseY = event.clientY - window.innerHeight/2;
}