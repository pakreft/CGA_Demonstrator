import {globals, setupScene, setupCamera, setupRenderer, setupOrbitControls, setupRaycaster} from './setup.js';

import updateAspectRatio from './eventfunctions/updateAspectRatio.js';

function main() {
  setupScene();
  setupCamera();
  setupRenderer();
  setupOrbitControls()
  setupRaycaster();

  mainLoop();
}

function mainLoop() {
  globals.renderer.render(globals.scene, globals.camera);
  requestAnimationFrame(mainLoop);
}

// Events
window.onload = main;
window.onresize = updateAspectRatio;
