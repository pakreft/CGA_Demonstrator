import * as THREE from 'three';
import * as TWEEN from 'tween';

/**
 * Static class, which holds helper function for working with tweens.
 * @static
 */
export default class TweenUtils {

  /**
   * Creates a tween for translating an object.
   * @param {Mesh|Group} obj
   * @param {Vector3} target - Target coordinates the object is supposed to go in local space (but uses world space).
   * @param {number} time - In milliseconds.
   * @param {Easing} [easing = TWEEN.Easing.Linear.None]
   * @return {Tween}
   * @static
   */
  static translate(obj, target, time, easing = TWEEN.Easing.Linear.None) {
    const tween = new TWEEN.Tween(obj.position);

    const targetRotated = target.applyEuler(obj.rotation);
    const targetTranslated = obj.position.add(targetRotated);
    const finalTarget = targetTranslated;

    tween.easing(easing);
    tween.to({x: finalTarget.x, y:  finalTarget.y, z: finalTarget.z}, time);

    return tween;
  }

  /**
   * Creates a tween for rotating an object.
   * @param {Mesh|Group} obj
   * @param {Euler} target - Rotation the object is supposed to rotated to in local space (but uses world space).
   * @param {number} time - In milliseconds.
   * @param {Easing} [easing = Easing.Linear.None]
   * @return {Tween}
   * @static
   */
  static rotate(obj, target, time, easing = TWEEN.Easing.Linear.None) {
    const tween = new TWEEN.Tween(obj.rotation);

    const finalTarget = new THREE.Euler(
        obj.rotation.x + target.x,
        obj.rotation.y + target.y,
        obj.rotation.z + target.z
    );

    tween.easing(easing);
    tween.to({x: finalTarget.x, y: finalTarget.y, z: finalTarget.z}, time);

    return tween;
  }

}
