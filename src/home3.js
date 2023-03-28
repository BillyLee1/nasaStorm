import * as THREE from 'three';

export default function model() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
  const material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: true} );
  const cube = new THREE.Mesh( geometry, material );
  scene.add(cube);

  camera.position.z = 20;

  function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
  }
  animate();
}
