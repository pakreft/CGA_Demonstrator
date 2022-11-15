import setupSCR from "./setupSCR.js";

/**
 * Holds global variables.
 */
export const globals = {};

window.onload = main;

function main() {
  setupSCR();
  mainLoop();
}

function mainLoop() {
  globals.renderer.render(globals.scene, globals.camera);
  requestAnimationFrame(mainLoop);
}