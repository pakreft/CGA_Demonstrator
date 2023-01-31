import * as THREE from 'three';
import * as TWEEN from 'tween';



   export function BladeRotation (obj){
    const targetRotation = new THREE.Vector3(0,0,20);
    let tween = new TWEEN.Tween(obj.rotation)
        .to(targetRotation, 5000)
        .easing(TWEEN.Easing.Quintic.InOut);
    tween.start();
    }

export function BladeAngle (obj,angle) {
 window.console.log(typeof obj.rotation, THREE.MathUtils.degToRad(angle));
 let target = obj.rotation;
 const targetRotation = new THREE.Vector3(obj.rotation.x,THREE.MathUtils.degToRad(angle),obj.rotation.z);
 let tween = new TWEEN.Tween(target)
     .to(targetRotation, 200)
     .easing(TWEEN.Easing.Quintic.InOut);
 tween.start();
}




