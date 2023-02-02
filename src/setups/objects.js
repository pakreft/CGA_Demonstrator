import * as THREE from 'three';

import {globals} from './globals.js';
import Ground from '../objects/ground.js';
import WindTurbine from '../objects/windturbine/windTurbine.js';
import Blades from '../objects/windturbine/blades.js';
import { GLTFLoader } from '../../lib/three.js-r145/examples/jsm/loaders/GLTFLoader.js';
import Button from "../objects/controlPanel/button.js";
import * as CANNON from "../../lib/cannon-es-0.20.0/dist/cannon-es.js";
import WindTurbineGLTF from "../objects/WindTurbineGLTF.js";





export default function addTestObj() {

  let windTurbine = new WindTurbine(new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,0));
  globals.scene.add(windTurbine);
  globals.windTurbine = windTurbine;
  let button = new Button({x:20, y:20, z:0}, {x:45, y:0, z:45});
  let button2 = new Button({x:0, y:20, z:0}, {x:45, y:0, z:0});
  globals.scene.add(button);
  globals.scene.add(button2);

  // Wait for loading done
  const windTurbineGLTF = new WindTurbineGLTF();
  if (windTurbineGLTF.loadingDone === false) {
    window.setTimeout(function() {

      globals.scene.add(windTurbineGLTF);
      globals.windTurbineGLTF = windTurbineGLTF;
      window.console.log(windTurbineGLTF.blade1);
      }, 2000);
  }


  let loader = new GLTFLoader();


  loader.load("src/assets/Models/windsack.gltf", function (gltf) {
    const WindsackGLTF =  gltf.scene;
    // Add the model to the scene
    WindsackGLTF.position.set(-40,0,-20);
    globals.scene.add(WindsackGLTF);
});


  const ground = new Ground();
  globals.scene.add(ground);


  var box = new THREE.Box3();
  for (var i = 0; i < globals.scene.children.length; i++) {
    var mesh = globals.scene.children[i];

    // check if the child is a mesh
    if (mesh.isGroup) {
      // update the bounding box to fit the mesh
      box.setFromObject(mesh);

      // do something with the bounding box
      // ...
    }
  }


}