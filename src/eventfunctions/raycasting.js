import * as THREE from 'three';

import {globals} from '../setups/globals.js';

const raycaster = new THREE.Raycaster();
raycaster.layers.set(1); // Only hits objects with same layer!!!

function executeRaycast(event) {

  // Calculate mouse position into normalized device coordinates
  const mousePosition = new THREE.Vector2();
  mousePosition.x = 2 * (event.clientX / window.innerWidth) - 1;
  mousePosition.y = -2 * (event.clientY / window.innerHeight) + 1;

  // Cast ray and save possible hits
  raycaster.setFromCamera(mousePosition, globals.camera);
  const intersects = raycaster.intersectObject(globals.scene);

  return intersects;

}

export function highlightOnMouseOver(event) {

  const intersects = executeRaycast(event);
  if (intersects.length > 0) {

    const hit = intersects[0];
    window.console.log(hit);
    //ToDo Highlight Object
    //window.outline.selectedObjects = [hit];
  }

}

export function interactOnMouseClick(event) {

  const intersects = executeRaycast(event);
  if (intersects.length > 0) {

    const hit = intersects[0];
    if (hit.interaction === undefined) {
      window.console.log("Object has no property 'interaction', which has to hold a function.");
    } else {
      hit.interaction();
    }

  }

}