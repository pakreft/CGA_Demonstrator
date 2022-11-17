import {globals, setupScene, setupCamera, setupRenderer} from './setup.js';

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
