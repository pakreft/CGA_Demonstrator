import * as THREE from 'three';
export const initRotation =70;

export default class Head extends THREE.Mesh {
    constructor(pos) {


        const height = 20;
        const materialColor = 0xaaaaaa;

        const geometry = new THREE.BoxGeometry(height,height,height,height,height,height);
        const material = new THREE.MeshLambertMaterial({color: materialColor});
        geometry.translate(pos.x, pos.y + (height / 2), pos.z);
        geometry.rotateY( THREE.MathUtils.degToRad(initRotation));

        super(geometry, material);
        this.castShadow = true;
        this.receiveShadow = true;
        window.console.log(this.rotateY.toString();


    }


}