import * as THREE from 'three';

import {globals} from "./main.js";

/**
 * Setups the scene, camera and renderer.
 */
export default function setupSCR() {
  setupScene();
  setupCamera();
  setupRenderer();
}

/**
 * Setups a scene.
 */
function setupScene() {
  globals.scene = new THREE.Scene();
  globals.scene.add(new THREE.AxesHelper(20)); //Adds xyz-axes to the scene
}

/**
 * Setups a perspective camera.
 */
function setupCamera() {
  globals.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  globals.camera.position.set(30, 40, 50);
  globals.camera.lookAt(0, 0, 0);
}

/**
 * Setups a WebGL-Renderer and sets the background color.
 */
function setupRenderer() {
  globals.renderer = new THREE.WebGLRenderer({antialias: true});
  globals.renderer.setSize(window.innerWidth, window.innerHeight);
  globals.renderer.setClearColor(0xffffff);

  document.getElementById('3d_content').appendChild(globals.renderer.domElement);
}