import * as THREE from 'three';

export const globals = {};

/**
 * Setups a scene.
 */
export function setupScene() {
  globals.scene = new THREE.Scene();
  globals.scene.add(new THREE.AxesHelper(20));
}

/**
 * Setups a perspective camera.
 */
export function setupCamera() {
  globals.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  globals.camera.position.set(30, 40, 50);
  globals.camera.lookAt(0, 0, 0);
}

/**
 * Setups a WebGL renderer, sets the background color and enables shadow casting.
 */
export function setupRenderer() {
  globals.renderer = new THREE.WebGLRenderer({antialias: true});
  globals.renderer.setSize(window.innerWidth, window.innerHeight);
  globals.renderer.setClearColor(0xffffff);
  globals.renderer.shadowMap.enabled = true;

  document.getElementById('3d_content').appendChild(globals.renderer.domElement);
}
