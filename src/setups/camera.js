import * as THREE from 'three';

import {globals} from "./globals.js";

const fov = 45;
const distNearPlane = 0.1;
const distFarPlane = 1000;
const startingPos = new THREE.Vector3(0, 0, 50);

/**
 * Setups a perspective camera.
 */
export default function setupCamera() {
  globals.camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, distNearPlane, distFarPlane);
  globals.camera.position.set(startingPos.x, startingPos.y, startingPos.z);
}