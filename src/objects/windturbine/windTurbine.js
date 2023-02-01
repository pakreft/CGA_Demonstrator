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
        this.loadingDone = false;
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


        this.box3 = new THREE.BoxHelper(this.blade3Group,0xffff00);
        globals.scene.add(this.box3);

        // Add body to physical world

        // Register object-body-pair
        this.loadingDone = true;
        this.addPhysics();


       // BladeRotation(this.shroud);
    }
    addPhysics() {
        if (this.loadingDone === false) {
            window.setTimeout(this.addPhysics.bind(this), 100);
        } else {
            window.console.log(this);
            globals.physics.addCylinder(this,0,6,10,100,8,this.position.x,this.position.y+51,this.position.z);

            const dimension = new CANNON.Vec3(4, 3, 10);
            const dimension2 = new CANNON.Vec3(35, 35, 1);
            const offset = new CANNON.Vec3(this.position.x, this.towerHigh.boundingBox.max.y+dimension.y, this.position.z+2);
            const offset2 = new CANNON.Vec3(this.position.x, this.towerHigh.boundingBox.max.y+10, this.position.z+10);

            globals.physics.bodies[0].addShape( new CANNON.Box(dimension), offset);
            globals.physics.bodies[0].addShape( new CANNON.Box(dimension2), offset2);

          //  const offset2 = new CANNON.Vec3(this.gearbox.rotorMount.x, this.gearbox.rotorMount.y, this.gearbox.rotorMount.z);
           // const rotation = new CANNON.Quaternion().setFromEuler(0, 0, 0, "XYZ");
            //globals.physics.bodies[0].addShape(new CANNON.Cylinder(40, 40, 1, 1), offset2, rotation);
             // globals.physics.bodies[0].addShape(new CANNON.Cylinder(1, 1, 1, 1));
          //  globals.physics.bodies[0].addShape(new CANNON.Cylinder(1, 1, 1, 1));




        }
    }





}