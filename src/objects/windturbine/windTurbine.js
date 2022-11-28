import * as THREE from 'three';

import Tower from "./tower.js";
import Hub from "./hub.js";


export default class WindTurbine extends THREE.Group  {

    constructor(pos,rot) {
        super();
        this.tower = new Tower(new THREE.Vector3(0,0,0));
        this.add(this.tower);
        this.hub = new Hub( this.tower.topPos);
        this.add(this.hub);
        this.position.set(0,30,0);



    }

}