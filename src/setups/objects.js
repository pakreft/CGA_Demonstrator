import * as THREE from 'three';

import {globals} from './globals.js';
import Ground from '../objects/ground.js';
import Tower from '../objects/windturbine/tower.js';


export default function addTestObj() {
  let tower = new Tower(new THREE.Vector3(0, 0, 0));
  globals.scene.add(tower);
  globals.scene.add(new Ground());
}