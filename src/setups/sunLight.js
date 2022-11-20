import * as THREE from 'three';

import {globals} from './globals.js';

export const posSunStart = new THREE.Vector3(0, 80, 100);

export default function setupSunLight() {
  const ambientLight = new THREE.AmbientLight(0xffffff);
  ambientLight.intensity = 0.8;
  globals.scene.add(ambientLight);

  globals.sun = new THREE.PointLight(0xffffff);
  globals.sun.position.set(posSunStart.x, posSunStart.y, posSunStart.z);
  globals.sun.intensity = 0.7;
  globals.sun.penumbra = 1;

  globals.sun.castShadow = true;
  globals.sun.shadow.mapSize.set(2048, 2048);

  globals.scene.add(globals.sun);
  globals.scene.add(new THREE.CameraHelper(globals.sun.shadow.camera));
}