import {globals} from './setups/globals.js';
import setupScene from './setups/scene.js';
import setupCamera from './setups/camera.js';
import setupRenderer from './setups/renderer.js';
import setupOrbitControls from './setups/orbitControls.js';
import setupGUI from './setups/gui.js';

import updateAspectRatio from './eventfunctions/updateAspectRatio.js';

function main() {
  setupScene();
  setupCamera();
  setupRenderer();

  setupOrbitControls();
  setupGUI();

  mainLoop();
}

function mainLoop() {
  globals.renderer.render(globals.scene, globals.camera);
  requestAnimationFrame(mainLoop);
}

// Browser events
window.onload = main;
window.onresize = updateAspectRatio;