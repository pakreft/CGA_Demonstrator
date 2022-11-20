import * as THREE from 'three';

import {globals} from './globals.js';

export const lookAt = new THREE.Vector3(0, 0, 0);

/**
 * Setups a perspective camera.
 */
export default function setupCamera() {
  globals.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  globals.camera.position.set(0, 0, 20);
}