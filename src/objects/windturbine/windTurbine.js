import * as THREE from 'three';
import * as TWEEN from 'tween';

import Gearbox from "./gearbox.js";
import towerLow from "./towerLow.js";
import towerHigh from "./towerHigh.js";
import blade from "./blades.js";
import Shroud from "./shroud.js";
import {BladeRotation} from "../../assets/Animations.js";
import {globals} from "../../setups/globals.js";


export default class WindTurbine extends THREE.Group  {

    constructor(pos,rot) {
        super();
        this.position.set(pos.x,pos.y,pos.z);
        this.rotation.set(rot.x,rot.y,rot.z);


        this.towerGroup = new THREE.Group();
        this.towerGroup.position.set(this.position.x,this.position.y,this.position.z);
        this.add(this.towerGroup);

        this.towerLow = new towerLow(new THREE.Vector3(0, 0, 0));
        this.towerGroup.add(this.towerLow);

        this.towerHigh = new towerHigh(this.towerLow.topPos);
        this.towerGroup.add(this.towerHigh);






        this.headGroup = new THREE.Group();
        this.headGroup.position.set(this.position.x,this.position.y,this.position.z);
        this.add(this.headGroup);

        this.gearbox = new Gearbox(new THREE.Vector3(0, this.towerHigh.boundingBox.max.y, 0));
        this.headGroup.add(this.gearbox);


        this.shroud = new Shroud(this.gearbox.rotorMount);
//        this.shroud.position.set(this.gearbox.positionX,this.gearbox.rotorMount.y,this.gearbox.rotorMount.z);

        this.headGroup.add(this.shroud);
        window.console.log("GB-Pos: ",this.gearbox.position.x);

        //Creating a Blade Group for easier Manipulation of all Blades
        this.bladeGroup = new THREE.Group();
        this.shroud.add(this.bladeGroup);

        //Adding Blade 1 to the BladeGroup
        this.blade1 = new blade(this.gearbox.rotorMount, new THREE.Vector3(0,0, 0));
        this.blade1.addPhysics();

        this.bladeGroup.add(this.blade1);

        //Adding Blade 2 to the BladeGroup
        this.blade2 = new blade(this.gearbox.rotorMount, new THREE.Vector3(0, 0, 120));
        this.blade2.addPhysics();

        this.bladeGroup.add(this.blade2);

        //Adding Blade 3 to the BladeGroup
        this.blade3 = new blade(this.gearbox.rotorMount, new THREE.Vector3(0, 0, 240));
        this.blade3.addPhysics();
        this.bladeGroup.add(this.blade3);

        window.console.log("Blade3: ",this.blade3);
        window.console.log("OBJ: ",this.blade1);





       // BladeRotation(this.shroud);
    }


}