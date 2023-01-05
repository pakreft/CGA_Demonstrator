import * as THREE from "three";
import * as TWEEN from 'tween';
import {globals} from "../../setups/globals.js";


export default class Blades extends THREE.Mesh {

        constructor(pos,rot) {

            const width = 0.4;
            const height = 35;
            const depth = 1;
            const materialColor = 0xaada3a;
            const geometry = new THREE.BoxGeometry(width,height,depth,16,16,16);
            const material = new THREE.MeshLambertMaterial({color: materialColor});


            geometry.translate(geometry.parameters.width/2,geometry.parameters.height/2+2.8, geometry.parameters.depth/2);

            super(geometry, material);
            this.castShadow = true;
            this.receiveShadow = true;
            this.animationRunning = false;
            this.layers.enable(1);


            window.console.log(this);




         //   geometry.rotation.set(rot.x,rot.y,rot.z);
            //this.setRotationFromQuaternion(new THREE.Quaternion(rot.x,rot.y,rot.z),);
            this.rotateOnWorldAxis(new THREE.Vector3(1,0,0),THREE.MathUtils.degToRad(rot.x));
            this.rotateOnWorldAxis(new THREE.Vector3(0,1,0),THREE.MathUtils.degToRad(rot.y));
            this.rotateOnWorldAxis(new THREE.Vector3(0,0,1),THREE.MathUtils.degToRad(rot.z));

            this.add( new THREE.AxesHelper( 50 ));

            //globals.scene.add( axesHelper );






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


}