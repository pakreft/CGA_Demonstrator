import * as CONTROLS from 'controls';

import {globals} from './globals.js';
import {lookAt} from './camera.js';


/**
 * Setups OrbitControls for the camera.
 */
export default function setupOrbitControls() {
  const orbitControls = new CONTROLS.OrbitControls(globals.camera, globals.renderer.domElement);
  orbitControls.target = lookAt;
  orbitControls.update();
}