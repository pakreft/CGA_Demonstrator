import {globals} from '../setups/globals.js';

/**
 * Fires when the browser window gets resized. This function gets assigned to the window.onresize property.
 */
export default function updateAspectRatio() {
  globals.camera.aspect = window.innerWidth / window.innerHeight;
  globals.camera.updateProjectionMatrix();
  globals.renderer.setSize(window.innerWidth, window.innerHeight);
}