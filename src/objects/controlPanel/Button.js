import * as THREE from 'three';
import * as TWEEN from 'tween';

import {globals} from '../../setups/globals.js';
import BaseObject from '../BaseObject.js';
import TweenUtils from '../../assets/TweenUtils.js';

/**
 * Class representing a button on the control panel controlling the rotation of the windturbine-head.
 * @extends BaseObject
 */
export default class Button extends BaseObject {

  /**
   * Pivot point at the bottom, in the middle.
   * @param {{x: number, y: number, z: number}} pos - Objects position in world space.
   * @param {{x: number, y: number, z: number}} rot - Objects rotation in world space in degrees.
   */
  constructor(pos, rot) {

    // Create geometry and material
    const geometry = new THREE.CylinderGeometry(2, 2, 3, 30);
    const material = new THREE.MeshLambertMaterial({color: 0xff0000});

    super(pos, rot, geometry, material);

    // Make hittable by ray caster
    this.layers.enable(1);
  }

  /**
   * Animates the button via tween, making him either go down or up.
   * @param {1|-1} dir - Direction the button moves along its local y-axis. 1 means button moves up (as if released) and -1 means button moves down (as if pressed).
   */
  moveButton(dir) {
    const time = 100;
    const distance = 3;
    const target = new THREE.Vector3(0, dir * distance, 0);

    TweenUtils.translate(this, target, time);
  }

  /**
   * Fires when the user clicks on this object. Function needed by the ray caster. Called in actionOnMouseDown().
   */
  actionOnMouseDown() {

    let tween = TweenUtils.rotate(
        globals.windTurbine.headGroup,
        new THREE.Euler(0, THREE.MathUtils.degToRad(360), 0),
        3000
    );
    tween.repeat(Infinity);
    tween.start();
    this.moveButton(-1);

    // Mouse-Button released
    const thisButton = this;
    
    window.onmouseup = function(event) {
      TWEEN.remove(tween);
      thisButton.moveButton(1);
      window.onmouseup = null;
    };
  }

}
