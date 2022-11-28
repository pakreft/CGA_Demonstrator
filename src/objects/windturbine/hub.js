import * as THREE from 'three';


export default class Hub extends THREE.Mesh {

    constructor(pos) {

        const height = 20;
        const materialColor = 0xaaaaaa;

        const geometry = new THREE.BoxGeometry(height,height,height,height,height,height);
        const material = new THREE.MeshLambertMaterial({color: materialColor});
        geometry.translate(pos.x, pos.y + (height / 2), pos.z);

        super(geometry, material);
        this.castShadow = true;
        this.receiveShadow = true;

    }

}