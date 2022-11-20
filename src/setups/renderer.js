import * as THREE from 'three';

import {globals} from './globals.js';

/**
 * Setups a WebGL renderer.
 */
export default function setupRenderer() {
  globals.renderer = new THREE.WebGLRenderer({antialias: true});
  globals.renderer.setSize(window.innerWidth, window.innerHeight);
  globals.renderer.setClearColor(0xffffff);
  globals.renderer.shadowMap.enabled = true;

  document.getElementById('3d_content').appendChild(globals.renderer.domElement);
}