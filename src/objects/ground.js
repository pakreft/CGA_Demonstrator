import * as THREE from 'three';

export default class Ground extends THREE.Mesh {
    constructor() {
        const geometry = new THREE.PlaneGeometry(200, 200);
        const material = new THREE.MeshLambertMaterial({color: 0x00ff00});
        geometry.rotateX(THREE.MathUtils.degToRad(-90));

        super(geometry, material);

        this.receiveShadow = true;
    }

}