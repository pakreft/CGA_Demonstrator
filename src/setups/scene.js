import * as THREE from 'three';

import {globals} from "./globals.js";

/**
 * Setups a scene.
 */
export default function setupScene() {
  globals.scene = new THREE.Scene();
  globals.scene.add(new THREE.AxesHelper(30));
}