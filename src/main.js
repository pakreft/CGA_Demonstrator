import {globals, setupScene, setupCamera, setupRenderer, setupOrbitControls} from './setup.js';
import {updateAspectRatio} from './eventFunctions.js';
import WindGUI from './WindGUI.js';

function main() {
  setupScene();
  setupCamera();
  setupRenderer();

  setupOrbitControls()

  mainLoop();
}

function mainLoop() {
  globals.renderer.render(globals.scene, globals.camera);
  requestAnimationFrame(mainLoop);
}

// Events
window.onload = main;
window.onresize = updateAspectRatio;
