import * as THREE from 'three';

import {globals} from './globals.js';
import Physics from './../physics/Physics.js';



/**
 * Setups a scene.
 */
export default function setupScene() {
  globals.scene = new THREE.Scene();
  globals.physics = new Physics(true);
  globals.physics.setup(0, -200, 0, 1 / 240, true);

  globals.scene.add(new THREE.AxesHelper(30)); //Adds xyz-axes for visualisation to the scene

}