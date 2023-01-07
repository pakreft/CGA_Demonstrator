import {globals} from './setups/globals.js';
import setupScene from './setups/scene.js';
import setupCamera from './setups/camera.js';
import setupRenderer from './setups/renderer.js';
import setupOrbitControls from './setups/orbitControls.js';
import setupSunLight from './setups/sunLight.js';
import setupGUI from './setups/gui.js';
import addTestObj from './setups/objects.js';
import * as THREE from 'three';
import * as TWEEN from 'tween';

import updateAspectRatio from './eventfunctions/updateAspectRatio.js';
import {highlightOnMouseOver, actionOnMouseClick} from "./eventfunctions/raycasting.js";

import initOutlinePass from "./postprocessing/postprocessing.js";


function main() {
  setupScene();
  setupCamera();
  setupRenderer();
  setupOrbitControls();
  setupSunLight();
  initOutlinePass();
  addTestObj();
  setupGUI();

  mainLoop();
}
const clock = new THREE.Clock();

function mainLoop() {


  const delta = clock.getDelta();
  //globals.renderer.render(globals.scene, globals.camera);
  window.compose.render();
  requestAnimationFrame(mainLoop);
  TWEEN.update();

}

// Browser events
window.onload = main;
window.onresize = updateAspectRatio;
window.onmousemove = highlightOnMouseOver;
window.onclick = actionOnMouseClick;