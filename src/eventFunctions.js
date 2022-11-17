import {globals} from './setup.js';

/**
 * Fires when the browser window gets resized. This function gets assigned to the window.onresize property.
 */
export function updateAspectRatio() {
  globals.camera.aspect = window.innerWidth / window.innerHeight;
  globals.camera.updateProjectionMatrix();
  globals.renderer.setSize(window.innerWidth, window.innerHeight);
}

function addFunction() {
    var textGGGGG = "Testtt";


  return text;
}
