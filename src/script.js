import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
;

// initialize the scene
const scene = new THREE.Scene()

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color: "white"})

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)
scene.add(cubeMesh)

// initialize the camera - prespectiveCamera
const camera = new THREE.PerspectiveCamera(
  35, 
  window.innerWidth / window.innerHeight,
  0.1,
  200)

// initialize the camera - prespectiveCamera
// const aspectRatio = window.innerWidth/window.innerHeight;
// const camera = new THREE.OrthographicCamera(
//   -1*aspectRatio,
//   1*aspectRatio,
//   1,
//   -1,
//   0.1,
//   200

// )

//set camera position
camera.position.z = 5

// initialize the renderer
const canvas = document.querySelector('canvas.threejs');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});

renderer.setSize(window.innerWidth, window.innerHeight);

//instantiate the controls
const  controls = new OrbitControls(camera, canvas);
controls.enableDamping=true;
controls.autoRotate=true;

const renderLoop = () => {
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(renderLoop)
};
//
renderLoop();