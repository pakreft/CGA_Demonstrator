import * as THREE from 'three';

import {globals} from './globals.js';


export const lookAt = new THREE.Vector3(0, 0, 0);
const startingPos = new THREE.Vector3(0, 0, 300);
const fov = 45;
const nearPlane = 0.1;
const farPlane = 1000;

/**
 * Setups a perspective camera.
 */
export default function setupCamera() {
  globals.camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, nearPlane, farPlane);
  globals.camera.position.set(startingPos.x, startingPos.y, startingPos.z);
}