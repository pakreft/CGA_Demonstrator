import * as THREE from 'three';
import * as TWEEN from 'tween';
import {globals} from '../../setups/globals.js';
export const initRotation =0;

export default class Head extends THREE.Mesh {
    constructor(pos) {


        const height = 20;
        const materialColor = 0xaaaaaa;

        const geometry = new THREE.BoxGeometry(height,height,height,height,height,height);
        const material = new THREE.MeshLambertMaterial({color: materialColor});
        geometry.translate(pos.x, pos.y + (height / 2), pos.z);
        geometry.rotateY( THREE.MathUtils.degToRad(initRotation));

        super(geometry, material);
        globals.head  = this;

        this.castShadow = true;
        this.receiveShadow = true;

        this.rotateHeadAnimation = new TWEEN.Tween(globals.head.rotation);

    }


    rotateHead(targetAngle)
    {
        this.rotateHeadAnimation.to(new THREE.Vector3(
            this.rotation.x,
            targetAngle,
            this.rotation.z), 2000)
            .easing(TWEEN.Easing.Quadratic.Out);

    }




}