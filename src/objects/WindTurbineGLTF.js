import * as THREE from 'three';
import {GLTFLoader} from 'gltfloader';

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

}