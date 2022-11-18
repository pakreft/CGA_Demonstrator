import {globals, setupScene, setupCamera, setupRenderer, setupOrbitControls, setupGUI, addObjects} from './setup.js';

import updateAspectRatio from './eventfunctions/updateAspectRatio.js';

function main() {
  setupScene();
  setupCamera();
  setupRenderer();

  setupOrbitControls();
  setupGUI();

  addObjects();

  mainLoop();
}

function mainLoop() {
  globals.renderer.render(globals.scene, globals.camera);
  requestAnimationFrame(mainLoop);
}

// Browser events
window.onload = main;
window.onresize = updateAspectRatio;