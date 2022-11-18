import * as THREE from 'three';

export default class Tower extends THREE.Mesh {
    constructor() {
        const geometry = new THREE.CylinderGeometry(6, 8, 20, 64, 1);
        const material = new THREE.MeshBasicMaterial({color: 0xAAAAAA});
        super(geometry, material);

        geometry.translate(5, 10, 5);
        this.castShadow = true;
        this.receiveShadow = true;
    }

}