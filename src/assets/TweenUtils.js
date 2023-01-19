import * as TWEEN from 'tween';

/**
 * Static class, which holds helper function for working with tweens.
 * @static
 */
export default class TweenUtils {

  /**
   * Translates an object via a tween.
   * @param {THREE.Mesh|THREE.Group} obj
   * @param {THREE.Vector3} target - Target coordinates the object is supposed to go in local space (but gets moved in world space).
   * @param {number} time - In milliseconds.
   * @param {TWEEN.Easing} [easing=TWEEN.Easing.Linear.None]
   * @static
   */
  static translate(obj, target, time, easing = TWEEN.Easing.Linear.None) {
    const tween = new TWEEN.Tween(obj.position);

    const targetRotated = target.applyEuler(obj.position);
    const targetTranslated = obj.position.add(targetRotated);
    const finalTarget = targetTranslated;

    tween.easing(easing);
    tween.to({x: finalTarget.x, y:  finalTarget.y, z: finalTarget.z}, time);
    tween.start();
  }

}
