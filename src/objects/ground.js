import * as THREE from 'three';
import {globals} from '../setups/globals.js';


export default class Ground extends THREE.Mesh {

    constructor() {
        super();
        const width = 400;
        const height = 400;
        const materialColor = 0x00ff00;
        const floorGeometry = new THREE.PlaneGeometry(width, height);
        const floorMaterial = new THREE.MeshLambertMaterial({color: materialColor});


        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.set(THREE.MathUtils.degToRad(-90), 0, 0);
        floor.receiveShadow = true;
        globals.scene.add(floor);



    }


}