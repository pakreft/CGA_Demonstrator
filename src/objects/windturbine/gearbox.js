import * as THREE from "three";
import * as TWEEN from 'tween';
export const initRotation =0;

export default class Gearbox extends THREE.Mesh {
    constructor(pos) {

        const width = 8;
        const height = 6;
        const depth = 16;
        const materialColor = 0xaaaaaa;
        const geometry = new THREE.BoxGeometry(width,height,depth,16,16,16);
        const material = new THREE.MeshLambertMaterial({color: materialColor});
        geometry.translate(pos.x, pos.y + (height / 2), pos.z);
        geometry.rotateY( THREE.MathUtils.degToRad(initRotation));

        super(geometry, material);

        this.castShadow = true;
        this.receiveShadow = true;

        this.rotateHeadAnimation = new TWEEN.Tween(this.rotation);
        this.animationRunning = false;
        this.boundingBox = new THREE.Box3().setFromObject(this);


            this.rotorMount = new THREE.Vector3(((this.boundingBox.max.x + this.boundingBox.min.x) / 2),
                ((this.boundingBox.max.y + this.boundingBox.min.y) / 2), this.boundingBox.max.z + 0.4);



    }


    rotateHead(targetAngle)
    {
        const targetRotation = new THREE.Vector3(this.rotation.x,THREE.MathUtils.degToRad(targetAngle),this.rotation.z);

        this.rotateHeadAnimation.to(targetRotation,6000)
            .easing(TWEEN.Easing.Quadratic.Out)

            .onComplete(function() {
                // Set the animationRunning flag to false when the animation is complete
                this.animationRunning = false;
                window.console.log(this.animationRunning);
            });

// Start the tween animation


    }
    startAnimation(targetAngle) {
        // Check if the animation is already running
        window.console.log("Started");
        window.console.log("Vor If-Abfrage: ",this.animationRunning);

        if (this.animationRunning) {

            window.console.log("Denied");
            window.console.log(this.animationRunning);
            return;
        }
        window.console.log("Zwischen If-Abfrage: ",this.animationRunning);

        if (!this.animationRunning) {
            this.rotateHead(targetAngle);
            this.animationRunning = true;
            window.console.log("Accepted");
            this.rotateHeadAnimation.start();
        }
        // Set the animationRunning flag to true


    }



}