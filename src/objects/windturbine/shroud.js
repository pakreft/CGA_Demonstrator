import * as THREE from "three";
import * as TWEEN from 'tween';


export default class Shroud extends THREE.Group {

        constructor(pos) {

            const topRad = 3;
            const bottomRad = 2;
            const height = 2;
            const segments = 32;
            const materialColor = 0xaada3a;
            //tip of the Shroud
            const geometry1 = new THREE.CylinderGeometry(topRad,bottomRad, height,segments,segments);
            //Cylinder of the shroud
            const geometry2 = new THREE.CylinderGeometry(topRad,topRad, height,segments,segments);

            const material = new THREE.MeshStandardMaterial({
                color: 0xfda300,
                roughness: 0.7,
                metalness: 0.3,

            });

            const cone = new THREE.Mesh(geometry1,material);
            const cylinder = new THREE.Mesh(geometry2,material);
            cone.position.set(0, 0, height);


            super();

            this.add(cylinder);
            this.add(cone);

            this.boundingBoxCylinder = new THREE.Box3();
            this.boundingBoxCylinder.setFromObject(cylinder);

            this.boundingBoxCone = new THREE.Box3();
            this.boundingBoxCone.setFromObject(cone);

            cylinder.rotateX(THREE.MathUtils.degToRad(90));

            cone.rotateX(THREE.MathUtils.degToRad(270));




            this.castShadow = true;
            this.receiveShadow = true;
            this.animationRunning = false;
            this.position.set(pos.x,pos.y,pos.z+1);




        }

    // Create a basic sphere


// Create a deformation for the sphere




// Apply the deformation to the sphere

// Create a mesh for the deformed sphere
}