import * as THREE from 'three';


export default class Ground extends THREE.Mesh {
    constructor() {
        const geometry = new THREE.PlaneGeometry(200, 200);
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00});

        geometry.rotateX(-1.5);
        super(geometry, material);

    }

}