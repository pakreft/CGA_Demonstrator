import * as THREE from 'three';

/**
 * Base class for all objects that are meant to be placed in the scene as a THREE.Mesh (or THREE.Group?).
 * @extends THREE.Mesh
 * @abstract
 */
export default class BaseObject extends THREE.Mesh {

  /**
   * @param {{x: number, y: number, z: number}} pos - Objects position in world space.
   * @param {{x: number, y: number, z: number}} rot - Objects rotation in world space in degrees.
   * @param {BufferGeometry} geometry - Objects geometry. BufferGeometry is the base class for every other geometry.
   * @param {Material} material - Objects material. Material is the base class for every other material.
   */
  constructor(pos, rot, geometry, material) {
    super(geometry, material);

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
