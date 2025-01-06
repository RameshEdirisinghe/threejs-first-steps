import * as THREE from 'three';


// initialize the scene
const scene = new THREE.Scene();

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1,1,1);
const cubeMaterial = new THREE.MeshBasicMaterial({color:"red"})
const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
);

scene.add(cubeMesh);

//initalize the camera

const camera = new THREE.PerspectiveCamera(75 ,
   window.innerWidth/window.innerHeight,
   0.1,
   30);

//position the camera
camera.position.z =5;
scene.add(camera);

//initalize the renderer
const canvas = document.querySelector('canvas.threejs');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.render(scene,camera)

