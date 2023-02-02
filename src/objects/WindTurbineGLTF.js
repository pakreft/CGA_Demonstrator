import * as THREE from 'three';
import {GLTFLoader} from 'gltfloader';
import {globals} from '../setups/globals.js';
import * as CANNON from "../../lib/cannon-es-0.20.0/dist/cannon-es.js";

import TweenUtils from '../assets/TweenUtils.js';

export default class WindTurbineGLTF extends THREE.Group {

  constructor() {
    super();

    this.head = null;
    this.hub = null;
    this.blades = null;
    this.blade1 = null;
    this.blade2 = null;
    this.blade3 = null;

    this.loadingDone = false;
    this.position.set(-100,0,0);

    // Textures -----
    const textureLoader = new THREE.TextureLoader();

    const towerTexture = textureLoader.load('src/assets/Textures/windturbine_texture.png');
    this.towerMaterial = new THREE.MeshBasicMaterial({ map: towerTexture});

    this.gearboxMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.7,
      metalness: 0.4,
    });

    this.hubMaterial = new THREE.MeshStandardMaterial({
      color: 0xfda300,
      roughness: 0.7,
      metalness: 0.3,
    });

    this.load();
    this.physics();
  }

  load() {
    const modelPath = 'src/assets/Models/windTurbine.gltf';
    const loader = new GLTFLoader();
    let self = this;

    loader.load(modelPath, function(gltf) {
      self.add(gltf.scene);

      gltf.scene.traverse( (child) => {
        switch (child.name) {
          case 'Head':
            self.head = child;
            break;

          case 'Hub001':
            self.hub = child;
            break;

          case 'Blades':
            self.blades = child;
            break;

          case 'Blade1':
            child.material = self.gearboxMaterial;
            self.blade1 = child;
            break;

          case 'Blade2':
            child.material = self.gearboxMaterial;
            self.blade2 = child;
            break;

          case 'Blade3':
            child.material = self.gearboxMaterial;
            self.blade3 = child;
            break;

          case 'Tower':
            child.traverse((child2) => {
              if (child2.isMesh) {
                child2.material = self.towerMaterial;
              }
            });
            break;

          case 'Gearbox':
            child.traverse((child2) => {
              if (child2.isMesh) {
                child2.material = self.gearboxMaterial;
              }
            });
            break;

          case 'Hub':
            child.traverse((child2) => {
              if (child2.isMesh) {
                child2.material = self.hubMaterial;
              }
            });
            break;
        }
      });
      self.loadingDone = true;
    });

  }

  rotateHead() {
    TweenUtils.rotate(
        this.head,
        new THREE.Euler(
            THREE.MathUtils.degToRad(0),
            THREE.MathUtils.degToRad(360),
            THREE.MathUtils.degToRad(0)),
        3000
    ).start();
  }

  rotateHub() {
    TweenUtils.rotate(
        this.hub,
        new THREE.Euler(
            THREE.MathUtils.degToRad(0),
            THREE.MathUtils.degToRad(0),
            THREE.MathUtils.degToRad(360)),
        3000
    ).start()
  }

  rotateBlade(blade, val) {
    const bladePos = blade.position;
    const bladeRot = blade.rotation;

    let target = new THREE.Vector3(bladeRot.x, val, bladeRot.z);


    const finalTarget = target;

    blade.position.set(finalTarget.x, finalTarget.y, finalTarget.z);

  }

  physics(){
    window.console.log(this.position.x);
    globals.physics.addCylinder(this,1000,6,6,100,8,0,this.position.y+50,0);

    const dimension = new CANNON.Vec3(4, 4, 10);
    const dimension2 = new CANNON.Vec3(50, 50, 1);
    //const offset = new CANNON.Vec3(WindTurbineGLTF.position.x, globals.windTurbine.towerHigh.boundingBox.max.y+dimension.y, WindTurbineGLTF.position.z+2);
    const offset = new CANNON.Vec3(0,globals.windTurbine.towerHigh.boundingBox.max.y+2,0);
    const offset2 = new CANNON.Vec3(0, globals.windTurbine.towerHigh.boundingBox.max.y,12);
    window.console.log(globals.physics.bodies);

    globals.physics.bodies[1].addShape( new CANNON.Box(dimension), offset);

    globals.physics.bodies[1].addShape( new CANNON.Box(dimension2), offset2);

    //  const offset2 = new CANNON.Vec3(this.gearbox.rotorMount.x, this.gearbox.rotorMount.y, this.gearbox.rotorMount.z);
    // const rotation = new CANNON.Quaternion().setFromEuler(0, 0, 0, "XYZ");
    //globals.physics.bodies[0].addShape(new CANNON.Cylinder(40, 40, 1, 1), offset2, rotation);
    // globals.physics.bodies[0].addShape(new CANNON.Cylinder(1, 1, 1, 1));
    //  globals.physics.bodies[0].addShape(new CANNON.Cylinder(1, 1, 1, 1));



  };




}