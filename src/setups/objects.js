import * as THREE from 'three';

import {globals} from './globals.js';
import Ground from '../objects/ground.js';
import WindTurbine from '../objects/windturbine/windTurbine.js';
import Blades from '../objects/windturbine/blades.js';
import { GLTFLoader } from '../../lib/three.js-r145/examples/jsm/loaders/GLTFLoader.js';




export default function addTestObj() {
  let windTurbine = new WindTurbine(new THREE.Vector3(20,0,0),new THREE.Vector3(0,0,0));
  globals.scene.add(windTurbine);
  globals.windTurbine = windTurbine;



  let loader = new GLTFLoader();
// Load the glTF file
  loader.load("src/assets/Models/windrad_export.gltf", function (gltf) {

    const WindTurbineGLTF =  gltf.scene;
    // Add the model to the scene
    WindTurbineGLTF.position.set(-20,0,0);


    globals.scene.add(WindTurbineGLTF);
  window.console.log(WindTurbineGLTF);


    WindTurbineGLTF.traverse((child) => {
      if (child.name === 'Head') {
        window.console.log('Found Head:', child);


      }
    });
  });



  globals.scene.add(new Ground());
}