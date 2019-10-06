import * as THREE from "../node_modules/three/build/three.module";
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls";

var camera, controls, scene, renderer;
var geometry, material, mesh;

let change = 0.02;
setInterval(() => {
  change *= -1;
}, 1000);

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
  camera.position.z = 1;

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	material = new THREE.MeshNormalMaterial();

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  controls = new OrbitControls( camera, renderer.domElement );
	
  controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  // controls.minDistance = 100;
  controls.maxDistance = 500;
  controls.maxPolarAngle = Math.PI / 2;

}

function animate() {

	requestAnimationFrame( animate );

	mesh.scale.x += change
	mesh.scale.y += change
	mesh.scale.z += change

  controls.update()

	renderer.render( scene, camera );

}