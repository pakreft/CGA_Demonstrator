import * as THREE from "three";
import * as TWEEN from 'tween';


export default class Blades extends THREE.Mesh {

        constructor(pos,rot) {

            const width = 0.4;
            const height = 35;
            const depth = 1;
            const materialColor = 0xaada3a;
            const geometry = new THREE.BoxGeometry(width,height,depth,16,16,16);
            const material = new THREE.MeshLambertMaterial({color: materialColor});
            geometry.translate(geometry.parameters.width/2,geometry.parameters.height/2+2.8, geometry.parameters.depth/2);
            geometry.rotateX(THREE.MathUtils.degToRad(rot.x));
            geometry.rotateY(THREE.MathUtils.degToRad(rot.y));
            geometry.rotateZ(THREE.MathUtils.degToRad(rot.z));


            super(geometry, material);
            this.castShadow = true;
            this.receiveShadow = true;
            this.animationRunning = false;



          this.rotateX(THREE.MathUtils.degToRad(rot.x));
          this.rotateY(THREE.MathUtils.degToRad(rot.y));
          this.rotateZ(THREE.MathUtils.degToRad(rot.z));

        }

}