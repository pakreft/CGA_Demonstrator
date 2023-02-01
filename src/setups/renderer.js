import * as THREE from 'three';

import {globals} from './globals.js';


const backgroundColor = 0xffffff;

/**
 * Setups a WebGL renderer.
 */
export default function setupRenderer() {
  globals.renderer = new THREE.WebGLRenderer({antialias: true});
  globals.renderer.setSize(window.innerWidth, window.innerHeight);
  globals.renderer.setClearColor(backgroundColor);
  globals.renderer.shadowMap.enabled = true;
  globals.renderer.gammaOutput = true;

  document.getElementById('3d_content').appendChild(globals.renderer.domElement);
}