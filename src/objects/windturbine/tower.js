import * as THREE from 'three';

export default class Tower extends THREE.Mesh {
    constructor(pos) {
        const height = 20;

        const geometry = new THREE.CylinderGeometry(6, 8, height, 64, 1);
        const material = new THREE.MeshLambertMaterial({color: 0xaaaaaa});
        geometry.translate(pos.x, pos.y + (height / 2), pos.z);

        super(geometry, material);

        this.castShadow = true;
        this.receiveShadow = true;
    }

}