import * as THREE from 'three';
import {globals} from '../setups/globals.js';

window.spaceDown = false;

export function keyDownAction(event) {
  switch (event.keyCode) {
    case 32:
      if (!window.spaceDown) {
        window.spaceDown = true;

        const ballRadius = 2;
        const ballGeometry = new THREE.SphereGeometry(ballRadius, 16, 16);
        const ball = new THREE.Mesh(ballGeometry, new THREE.MeshLambertMaterial({color: 0xff0000}));
        ball.position.set(globals.camera.position.x, globals.camera.position.y, globals.camera.position.z);
        ball.castShadow = true;
        globals.scene.add(ball);

        const directionalVectorDC = new THREE.Vector3(0, 0, 1);
        const velocityVectorWC = directionalVectorDC.unproject(globals.camera).sub(globals.camera.position);
        velocityVectorWC.normalize();
        velocityVectorWC.multiplyScalar(800);
        globals.physics.addSphereWithVelocity(ball, 1, ballRadius, velocityVectorWC);
      }
      break;
  }
}

export function keyUpAction(event) {
  switch (event.keyCode) {
    case 32:
      window.spaceDown = false;
      break;
  }
}