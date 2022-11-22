import * as THREE from 'three';


export default class Tower extends THREE.Mesh {

    constructor(pos) {
        const radiusTop = 6;
        const radiusBottom = 8;
        const height = 20;
        const radialSegments = 64;
        const heightSegments = 5;
        const materialColor = 0xaaaaaa;

        const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments);
        const material = new THREE.MeshLambertMaterial({color: materialColor});
        geometry.translate(pos.x, pos.y + (height / 2), pos.z);

        super(geometry, material);
        this.castShadow = true;
        this.receiveShadow = true;
    }

}