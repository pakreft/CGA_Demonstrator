import * as THREE from 'three';

import BaseObj from '../BaseObj.js';

/**
 * Class representing the panel of the control panel to control the wind turbine head.
 * @extends BaseObj
 * @property {Mesh} mesh
 */
export default class Panel extends BaseObj {

  /**
   * Pivot point at the bottom, in the middle.
   * @param {{x:number, y:number, z:number}} [pos={x:0,y:0,z:0}] - Objects position in world space.
   * @param {{x:number, y:number, z:number}} [rot={x:0,y:0,z:0}] - Objects rotation in world space in degrees.
   */
  constructor(pos = {x:0, y:0, z:0}, rot = {x:0, y:0, z:0}) {

    const geometry = new THREE.BoxGeometry(25, 12.5, 12.5);
    const material = new THREE.MeshLambertMaterial({color: 0x0});
    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(0, geometry.parameters.height / 2, 0);

    super(pos, rot, [mesh]);

    this.castShadow = true;
    this.receiveShadow = true;

    // Own properties
    this.mesh = mesh;
  }

}