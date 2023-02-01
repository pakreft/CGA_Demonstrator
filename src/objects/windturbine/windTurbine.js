import * as THREE from 'three';
import * as TWEEN from 'tween';

import Gearbox from "./gearbox.js";
import towerLow from "./towerLow.js";
import towerHigh from "./towerHigh.js";
import blade from "./blades.js";
import Shroud from "./shroud.js";
import {BladeRotation} from "../../assets/Animations.js";
import {globals} from "../../setups/globals.js";
import * as CANNON from "../../../lib/cannon-es-0.20.0/dist/cannon-es.js";


export default class WindTurbine extends THREE.Group  {

    constructor(pos,rot) {
        super();
        this.position.set(pos.x,pos.y,pos.z);
        this.rotation.set(rot.x,rot.y,rot.z);


        this.body = new CANNON.Body({mass: 0});




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
       //this.gearbox.addPhysics();
        this.headGroup.add(this.gearbox);


        this.shroud = new Shroud(this.gearbox.rotorMount);
//        this.shroud.position.set(this.gearbox.positionX,this.gearbox.rotorMount.y,this.gearbox.rotorMount.z);

        this.headGroup.add(this.shroud);

        //Creating a Blade Group for easier Manipulation of all Blades
        this.bladeGroup = new THREE.Group();
        this.shroud.add(this.bladeGroup);

        //Adding Blade 1 to the BladeGroup
        this.blade1 = new blade(this.gearbox.rotorMount, new THREE.Vector3(0,0, 0));
        this.blade1Group = new THREE.Group();


        this.blade1Group.add(this.blade1);
        this.shroud.add(this.blade1Group);

        const rot1 = new THREE.Vector3(0,0,0);
        this.blade1Group.rotateOnWorldAxis(new THREE.Vector3(1,0,0),THREE.MathUtils.degToRad(rot1.x));
        this.blade1Group.rotateOnWorldAxis(new THREE.Vector3(0,1,0),THREE.MathUtils.degToRad(rot1.y));
        this.blade1Group.rotateOnWorldAxis(new THREE.Vector3(0,0,1),THREE.MathUtils.degToRad(rot1.z));

        this.body.addShape(
            this.blade1.addPhysics()[0],
            this.blade1.addPhysics()[1]);

        this.box1 = new THREE.BoxHelper(this.blade1Group,0xffff00);
        globals.scene.add(this.box1);
        //Adding Blade 2 to the BladeGroup
        this.blade2 = new blade(this.gearbox.rotorMount, new THREE.Vector3(0, 0, 0));
        this.blade2Group = new THREE.Group();
        this.blade2Group.add(this.blade2);
        this.shroud.add(this.blade2Group);

        const rot2 = new THREE.Vector3(0,0,120);

        this.blade2Group.rotation.x = THREE.MathUtils.degToRad(rot2.x);
        this.blade2Group.rotation.y = THREE.MathUtils.degToRad(rot2.y);
        this.blade2Group.rotation.z = THREE.MathUtils.degToRad(rot2.z);

        //this.blade2Group.rotateOnWorldAxis(new THREE.Vector3(1,0,0),THREE.MathUtils.degToRad(rot2.x));
        //this.blade2Group.rotateOnWorldAxis(new THREE.Vector3(0,1,0),THREE.MathUtils.degToRad(rot2.y));
        //this.blade2Group.rotateOnWorldAxis(new THREE.Vector3(0,0,1),THREE.MathUtils.degToRad(rot2.z));
        this.body.addShape(
            this.blade2.addPhysics(this.blade2Group)[0],
            this.blade2.addPhysics()[1]);
        this.box2 = new THREE.BoxHelper(this.blade2Group,0xffff00);
        globals.scene.add(this.box2);

        //Adding Blade 3 to the BladeGroup
        this.blade3 = new blade(this.gearbox.rotorMount, new THREE.Vector3(0, 0, 240));
        this.blade3Group = new THREE.Group();
        this.blade3Group.add(this.blade3);
        this.shroud.add(this.blade3Group);

        const rot3 = new THREE.Vector3(0,0,240);
        this.blade3Group.rotateOnWorldAxis(new THREE.Vector3(1,0,0),THREE.MathUtils.degToRad(rot3.x));
        this.blade3Group.rotateOnWorldAxis(new THREE.Vector3(0,1,0),THREE.MathUtils.degToRad(rot3.y));
        this.blade3Group.rotateOnWorldAxis(new THREE.Vector3(0,0,1),THREE.MathUtils.degToRad(rot3.z));
        this.body.addShape(
            this.blade3.addPhysics()[0],
            this.blade3.addPhysics()[1]);

        this.box3 = new THREE.BoxHelper(this.blade3Group,0xffff00);
        globals.scene.add(this.box3);


        this.body.position.copy(this.position);
        this.body.quaternion.copy(this.quaternion);
        // Add body to physical world
        globals.physics.world.addBody(this.body);

        // Register object-body-pair
        globals.physics.addPair(this, this.body);


       // BladeRotation(this.shroud);
    }


}