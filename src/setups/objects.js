import * as THREE from 'three';

import {globals} from './globals.js';
import Ground from '../objects/ground.js';
import WindTurbine from '../objects/windturbine/windTurbine.js';



export default function addTestObj() {
  let windTurbine = new WindTurbine(new THREE.Vector3(0, 0, 0),new THREE.Vector3(0,0,0));
  globals.scene.add(windTurbine);
  globals.windTurbine = windTurbine;
  globals.scene.add(new Ground());
}