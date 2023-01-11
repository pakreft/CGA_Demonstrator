import * as THREE from 'three';
import * as TWEEN from 'tween';

import BaseObject from '../BaseObject.js';

/**
 * Class representing a button on the control panel.
 * @extends BaseObject
 */
export default class Button extends BaseObject {

  /**
   * @param {{x: number, y: number, z: number}} pos - Objects position in world space.
   * @param {{x: number, y: number, z: number}} rot - Objects rotation in world space in degrees.
   */
  constructor(pos, rot) {

    // Create geometry and material
    const geometry = new THREE.CylinderGeometry(2, 2, 3, 30);
    const material = new THREE.MeshLambertMaterial({color: 0xff0000});

    super(pos, rot, geometry, material);

    this.pressed = false;

    // Make hittable by ray caster
    this.layers.enable(1);
  }

  /**
   * Animates the button, making him either go down or up.
   * @param {1|-1} dir - Direction the button moves along its local y-axis. 1 means button moves up (as if released) and -1 means button moves down (as if pressed).
   */
  moveButton(dir) {
    const time = 100;
    const dist = 2;
    const tween = new TWEEN.Tween(this.position);

    // Calculate direction the button moves in world space, its rotation included!
    const dirVec = new THREE.Vector3(0, dir * dist, 0);
    const dirVecRotated = dirVec.applyEuler(this.rotation);
    const target = this.position.add(dirVecRotated);

    tween.to({x: target.x, y:  target.y, z: target.z}, time);
    tween.start();
  }

  /**
   * Fires when the user clicks on this object. Function needed by the ray caster. Called in actionOnMouseClick().
   */
  actionOnClick() {
    if (this.pressed == false) {
      this.moveButton(-1);
      this.pressed = true;

    } else {
      this.moveButton(1);
      this.pressed = false;
    }
  }

}
