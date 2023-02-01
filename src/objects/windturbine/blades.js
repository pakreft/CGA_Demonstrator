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
           // this.rotateOnWorldAxis(new THREE.Vector3(1,0,0),THREE.MathUtils.degToRad(rot.x));
            //this.rotateOnWorldAxis(new THREE.Vector3(0,1,0),THREE.MathUtils.degToRad(rot.y));
            //this.rotateOnWorldAxis(new THREE.Vector3(0,0,1),THREE.MathUtils.degToRad(rot.z));


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

    addPhysics(bladeGroup) {
        if (this.loadingDone === false) {
            window.setTimeout(this.addPhysics.bind(this), 100);
        } else {


            var cannonPointsRaw = Array.prototype.slice.call(this.geometry.attributes.position.array);

            var cannonPointsRounded = cannonPointsRaw.map(function(num) {
                return Number(num.toFixed(3));
            });

            var cannonPoints = [];

            for (var i = 0; i < cannonPointsRounded.length; i += 3) {
                cannonPoints.push(cannonPointsRounded.slice(i, i + 3));

            }

            window.console.log(cannonPoints);
            window.console.log(this);
            var cannonFacesRaw = Array.prototype.slice.call(this.geometry.index.array);
            var cannonFaces= [];

                for (var r = 0; r < cannonFacesRaw.length; r += 4) {
                    cannonFaces.push(cannonFacesRaw.slice(r, r + 4));

                }
            window.console.log(cannonFaces);

           // globals.physics.addConvexPolyhedron(this, 3, cannonPoints, cannonFaces, true);

            var worldPosition = new THREE.Vector3();
           //( worldPosition );
            window.console.log( this,this.getWorldPosition(new THREE.Vector3()));
           const offsetX = this.getWorldPosition(new THREE.Vector3()).x;
             const offsetY = this.getWorldPosition(new THREE.Vector3()).y+this.geometry.parameters.height/2;
            const offsetZ = this.getWorldPosition(new THREE.Vector3()).z+this.geometry.parameters.depth/2;
            const dimX = this.geometry.parameters.width;
            const dimY = this.geometry.parameters.height;
            const dimZ = this.geometry.parameters.depth;

            // Add shape (~collider) to physical body
            const dimension = new CANNON.Vec3(dimX / 2, dimY / 2, dimZ / 2);
            const offset = new CANNON.Vec3(offsetX, offsetY, offsetZ);
            window.console.log(  new CANNON.Box(dimension));

            return ([ new CANNON.Box(dimension), offset]);

        }
    }




}