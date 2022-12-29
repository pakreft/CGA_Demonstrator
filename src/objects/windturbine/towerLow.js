import * as THREE from 'three';


export default class towerLow extends THREE.Mesh {

    constructor(pos) {
        const radiusTop = 2;
        const radiusBottom = 6;
        const height = 30;
        const radialSegments = 64;
        const heightSegments = 16;
        const materialColor = 0xaaaaaa;
        const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments);
        const material = new THREE.MeshLambertMaterial({color: materialColor});
        geometry.translate(pos.x, pos.y + (height / 2), pos.z);

        super(geometry, material);
        this.topPos = new THREE.Vector3(0,height,0);
        this.castShadow = true;
        this.receiveShadow = true;

        this.boundingBox = new THREE.Box3();
        this.boundingBox.setFromObject(this);

    }

}