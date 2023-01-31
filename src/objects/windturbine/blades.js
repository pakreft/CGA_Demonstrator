import * as THREE from "three";
import * as TWEEN from 'tween';
import {globals} from "../../setups/globals.js";
import * as CANNON from '../../../lib/cannon-es-0.20.0/dist/cannon-es.js';



export default class Blades extends THREE.Mesh {

        constructor(pos,rot) {

            const width = 3.2;
            const height = 40;
            const depth = 0.6;
            const materialColor = 0xaada3a;
            const geometry = new THREE.BoxGeometry(width,height,depth,1,1,1);
            const material = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                roughness: 0.7,
                metalness: 0.4,

            });


            geometry.translate(geometry.parameters.width/2-geometry.parameters.width/2,geometry.parameters.height/2, geometry.parameters.depth/2);

            super(geometry, material);
            this.loadingDone = false;

            this.castShadow = true;
            this.receiveShadow = true;
            this.animationRunning = false;
            this.layers.enable(1);






         //   geometry.rotation.set(rot.x,rot.y,rot.z);
            //this.setRotationFromQuaternion(new THREE.Quaternion(rot.x,rot.y,rot.z),);
            this.rotateOnWorldAxis(new THREE.Vector3(1,0,0),THREE.MathUtils.degToRad(rot.x));
            this.rotateOnWorldAxis(new THREE.Vector3(0,1,0),THREE.MathUtils.degToRad(rot.y));
            this.rotateOnWorldAxis(new THREE.Vector3(0,0,1),THREE.MathUtils.degToRad(rot.z));


            //globals.scene.add( axesHelper );

            this.loadingDone = true;
        }

        changeBladeAngle(val){
            let yaxis = new THREE.Vector3(0,1,0);

            if (val > this.rotation.y){
                this.rotateOnAxis(yaxis,val-this.rotation.y);
            }

            else if (val < this.rotation.y){
                this.rotateOnAxis(yaxis,val-this.rotation.y);
            }
            else{return;
            }

            window.console.log(this.rotation.y);


    }

    addPhysics() {
        if (this.loadingDone === false) {
            window.setTimeout(this.addPhysics.bind(this), 100);
        } else {
            var cannonPoints = Array.prototype.slice.call(this.geometry.attributes.position.array);

            window.console.log(cannonPoints);
            window.console.log(this.geometry);
            var cannonFaces = Array.prototype.slice.call(this.geometry.index.array);

            window.console.log(cannonFaces);

            globals.physics.addConvexPolyhedron(this, 3, cannonPoints, cannonFaces, true);
        }
    }




}