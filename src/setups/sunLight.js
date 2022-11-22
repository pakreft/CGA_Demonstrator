import * as THREE from 'three';

import {globals} from './globals.js';


export const startingPosSun = new THREE.Vector3(0, 80, 0);
const ambientColor = 0xffffff;
const sunColor = ambientColor;
const ambientIntensity = 0.8;
const sunIntensity = 0.7;
const sunPenumbra = 1;
const shadowMapSizeWidth = 2048; //Max: WebGLRenderer.capabilities.maxTextureSize
const shadowMapSizeHeight = shadowMapSizeWidth;

export default function setupSunLight() {
  const ambientLight = new THREE.AmbientLight(ambientColor);
  ambientLight.intensity = ambientIntensity;
  globals.scene.add(ambientLight);

  globals.sun = new THREE.PointLight(sunColor);
  globals.sun.position.set(startingPosSun.x, startingPosSun.y, startingPosSun.z);
  globals.sun.intensity = sunIntensity;
  globals.sun.penumbra = sunPenumbra;
  globals.sun.castShadow = true;
  globals.sun.shadow.mapSize.set(shadowMapSizeWidth, shadowMapSizeHeight);
  globals.scene.add(globals.sun);

  globals.scene.add(new THREE.CameraHelper(globals.sun.shadow.camera)); //Adds shadow frustum for visualisation to the scene
}