import * as THREE from 'three';

import {globals} from './globals.js';

export const posSunStart = new THREE.Vector3(0, 80, 100);

const sunIntensity = 0.7;
const ambientIntensity = 0.8;
const sunPenumbra = 1;
const lightColor = 0xffffff;


export default function setupSunLight() {
  const ambientLight = new THREE.AmbientLight(lightColor);
  ambientLight.intensity = ambientIntensity;
  globals.scene.add(ambientLight);
  globals.sun = new THREE.PointLight(lightColor);
  globals.sun.intensity = sunIntensity;
  globals.sun.penumbra = sunPenumbra;
  globals.sun.position.set(posSunStart.x, posSunStart.y, posSunStart.z);
  globals.sun.castShadow = true;
  globals.sun.shadow.mapSize.set(2048, 2048);
  globals.scene.add(globals.sun);
  globals.scene.add(new THREE.CameraHelper(globals.sun.shadow.camera));
}