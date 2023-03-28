import * as THREE from 'three';

export default function model() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  function createAsteroid() {
      const asteroidGeometry = new THREE.SphereGeometry(10, 32, 32);
      const asteroidMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);
  
      asteroid.position.set(
          Math.random() * window.innerWidth - window.innerWidth / 2, // Random X position
          Math.random() * window.innerHeight - window.innerHeight / 2, // Random Y position
          -Math.random() * 1000 // Random Z position
      );
  
      asteroid.speed = Math.random() * 10 + 1; // Random speed
  
      scene.add(asteroid);
      return asteroid;
  }
  
  const asteroids = [];
  
  for (let i = 0; i < 50; i++) {
      asteroids.push(createAsteroid());
  }
  
  function animate() {
      requestAnimationFrame(animate);
  
      for (let i = 0; i < asteroids.length; i++) {
          const asteroid = asteroids[i];
          asteroid.position.x += asteroid.speed / 2;
          asteroid.position.y += asteroid.speed / 2;
          asteroid.position.z += asteroid.speed;
          
          // If the asteroid goes out of the visible area, reset its position
          if (asteroid.position.z > 0) {
              asteroid.position.set(
                  Math.random() * window.innerWidth - window.innerWidth / 2, // Random X position
                  Math.random() * window.innerHeight - window.innerHeight / 2, // Random Y position
                  -Math.random() * 1000 // Random Z position
              );
              asteroid.speed = Math.random() * 10 + 1; // Random speed
          }
      }
  
      renderer.render(scene, camera);
  }
  
  animate();
}