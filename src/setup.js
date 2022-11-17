import * as THREE from 'three';
import * as CONTROLS from 'controls';
import * as DATGUI from 'datgui';

import {onChangeWindSpeed, onChangeWindDirection} from './eventfunctions/guiOnChange.js';

/**
 * Holds variables, which are meant to be global.
 * @type {Object}
 * @property {THREE.Scene} scene
 * @property {THREE.PerspectiveCamera} camera
 * @property {THREE.WebGLRenderer} renderer
 * @property {THREE.Raycaster} raycaster
 */
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

/**
 * Setups OrbitControls for the camera.
 */
export function setupOrbitControls() {
  const orbitControls = new CONTROLS.OrbitControls(globals.camera, globals.renderer.domElement);
  orbitControls.target = new THREE.Vector3(0, 0, 0);
  orbitControls.update();
}

/**
 * Setups the GUI.
 */
export function setupGUI() {
  const gui = new DATGUI.GUI();
  const proxy = {
    Wind_Speed: 0, //in km/h
    Wind_Direction: 0 //In degrees
  };

  gui.add(proxy, 'Wind_Speed', 0, 100, 1).onChange(onChangeWindSpeed);
  gui.add(proxy, 'Wind_Direction', 0, 359, 1).onChange(onChangeWindDirection);
}
