import * as THREE from 'three';

export default class Ground extends THREE.Mesh {

    constructor() {
        const width = 200;
        const height = 200;
        const materialColor = 0x00ff00;
        const geometry = new THREE.PlaneGeometry(width,height);
        const material = new THREE.MeshLambertMaterial({color: materialColor});
        geometry.rotateX(THREE.MathUtils.degToRad(-90));

        super(geometry, material);

        this.receiveShadow = true;
    }

}