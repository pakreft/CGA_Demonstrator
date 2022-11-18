import * as THREE from 'three';
import * as CONTROLS from 'controls';

import {globals} from "./globals.js";

const lookAt = new THREE.Vector3(0, 0, 0);

/**
 * Setups OrbitControls for the camera.
 */
export default function setupOrbitControls() {
  const orbitControls = new CONTROLS.OrbitControls(globals.camera, globals.renderer.domElement);
  orbitControls.target = lookAt;
  orbitControls.update();
}