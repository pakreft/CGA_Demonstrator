import {globals, setupScene, setupCamera, setupRenderer, setupOrbitControls, setupGUI} from './setup.js';

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
