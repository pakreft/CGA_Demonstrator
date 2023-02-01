import * as THREE from 'three';

import {globals} from './globals.js';
import Ground from '../objects/ground.js';
import WindTurbine from '../objects/windturbine/windTurbine.js';
import Blades from '../objects/windturbine/blades.js';
import { GLTFLoader } from '../../lib/three.js-r145/examples/jsm/loaders/GLTFLoader.js';
import Button from "../objects/controlPanel/button.js";




export default function addTestObj() {

  let windTurbine = new WindTurbine(new THREE.Vector3(30,0,0),new THREE.Vector3(0,0,0));
  globals.scene.add(windTurbine);
  globals.windTurbine = windTurbine;

  let button = new Button({x:20, y:20, z:0}, {x:45, y:0, z:45});
  let button2 = new Button({x:0, y:20, z:0}, {x:45, y:0, z:0});

  globals.scene.add(button);
  globals.scene.add(button2);

  let loader = new GLTFLoader();
// Load the glTF file
  loader.load("src/assets/Models/windrad_export.gltf", function (gltf) {
    const WindTurbineGLTF =  gltf.scene;
    // Add the model to the scene
    WindTurbineGLTF.position.set(-30,0,0);

    //Tower Texture
    var towerTexture = new THREE.TextureLoader().load( "src/assets/Textures/windturbine_texture.png" );
    towerTexture.wrapS = THREE.RepeatWrapping;
    towerTexture.wrapT = THREE.RepeatWrapping;
    towerTexture.repeat.set(1,1);

    var towerMaterial = new THREE.MeshBasicMaterial( { map: towerTexture} );
    WindTurbineGLTF.traverse((child) => {
      if (child.name === 'Tower') {
        child.traverse( function ( child ) {
          if ( child.isMesh ) {
            child.material = towerMaterial;
          }
        });

      }
    });

    //Gearbox Texture
    var gearboxTexture = new THREE.TextureLoader().load( "src/assets/Textures/gearbox_texture.png" );
    gearboxTexture.repeat.set(1,1);
    //gearboxTexture.wrapS = THREE.RepeatWrapping;
    //gearboxTexture.wrapT = THREE.RepeatWrapping;
    var gearboxMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.7,
      metalness: 0.4,

    });
    WindTurbineGLTF.traverse((child) => {
      if (child.name === 'Gearbox') {
        child.traverse( function ( child ) {
          if ( child.isMesh ) {

            child.material = gearboxMaterial;
          }
        });

      }
      if (child.name === 'Blades') {
        child.traverse( function ( child ) {
          if ( child.isMesh ) {
            child.material = gearboxMaterial;
          }
        });

      }

      var HubMaterial = new THREE.MeshStandardMaterial({
        color: 0xfda300,
        roughness: 0.7,
        metalness: 0.3,

      });
      if (child.name === 'Hub') {
        child.traverse( function ( child ) {
          if ( child.isMesh ) {
            child.material = HubMaterial;
          }
        });

      }

    });





    globals.scene.add(WindTurbineGLTF);

  });

  loader.load("src/assets/Models/windsack.gltf", function (gltf) {
    const WindsackGLTF =  gltf.scene;
    // Add the model to the scene
    WindsackGLTF.position.set(0,0,-20);









    globals.scene.add(WindsackGLTF);


});

  globals.scene.add(new Ground());

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