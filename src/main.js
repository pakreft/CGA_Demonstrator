import {globals, setupScene, setupCamera, setupRenderer} from './setup.js';
import {updateAspectRatio} from "./eventFunctions.js";

function main() {
  setupScene();
  setupCamera();
  setupRenderer();

  mainLoop();
}

function mainLoop() {
  globals.renderer.render(globals.scene, globals.camera);
  requestAnimationFrame(mainLoop);
}

// Events
window.onload = main;
window.onresize = updateAspectRatio;