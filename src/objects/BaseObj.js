import * as THREE from 'three';

/**
 * Base class for all meshes/groups. Only inherit from this, do not instantiate.
 * @extends Group
 * @abstract
 */
export default class BaseObj extends THREE.Group {

  /**
   * @param {{x: number, y: number, z: number}} pos - Objects position in world space.
   * @param {{x: number, y: number, z: number}} rot - Objects rotation in world space in degrees.
   * @param {Mesh[]|Group[]} objects - The meshes/groups to add to this object.
   */
  constructor(pos, rot, objects) {
    super();

    // Add meshes/groups to this group
    for(let i = 0; i < objects.length; i++) {
      this.add(objects[i]);
    }

    // Set position and rotation
    this.position.set(pos.x, pos.y, pos.z);
    this.rotation.set(
        THREE.MathUtils.degToRad(rot.x),
        THREE.MathUtils.degToRad(rot.y),
        THREE.MathUtils.degToRad(rot.z)
    );

    // Add local axes for debugging
    this.add(new THREE.AxesHelper(50));
  }

}