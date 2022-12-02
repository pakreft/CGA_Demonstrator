import * as THREE from 'three';
import Tower from "./tower.js";
import Head from "./head.js";

export default class WindTurbine extends THREE.Group  {

    constructor(pos,rot) {
        super();

        this.tower = new Tower(new THREE.Vector3(0,0,0));
        this.head = new Head( this.tower.topPos);

        this.add(this.tower);
        this.add(this.head);
        this.position.set(0,0,0);



    }




}