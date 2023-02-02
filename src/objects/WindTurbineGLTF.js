import * as THREE from 'three';
import {GLTFLoader} from 'gltfloader';

export default class WindTurbineGLTF extends THREE.Group {

  constructor() {
    super();

    this.head;
    this.hub;
    this.blades;
    this.blade1;
    this.blade2;
    this.blade3;

    // Textures -----
    const textureLoader = new THREE.TextureLoader();

    // Tower
    const towerTexture = textureLoader.load("src/assets/Textures/windturbine_texture.png");
    this.towerMaterial = new THREE.MeshBasicMaterial({ map: towerTexture});

    // Gearbox
    this.gearboxMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.7,
      metalness: 0.4,
    });

    // Hub
    this.hubMaterial = new THREE.MeshStandardMaterial({
      color: 0xfda300,
      roughness: 0.7,
      metalness: 0.3,
    });

    this.load(this);
  }

  load(thisWindTurbine) {
    const modelPath = 'src/assets/Models/windrad_export.gltf';
    const loader = new GLTFLoader();

    loader.load(modelPath, function(gltf) {
      thisWindTurbine.add(gltf.scene);

      gltf.scene.traverse( (child) => {
        switch (child.name) {
          case 'Head':
            thisWindTurbine.head = child;
            break;

          case 'Hub001':
            thisWindTurbine.hub = child;
            break;

          case 'Blades':
            thisWindTurbine.blades = child;
            break;

          case 'Blade1':
            thisWindTurbine.blade1 = child;
            child.material = thisWindTurbine.gearboxMaterial;
            break;

          case 'Blade2':
            thisWindTurbine.blade2 = child;
            child.material = thisWindTurbine.gearboxMaterial;
            break;

          case 'Blade3':
            thisWindTurbine.blade3 = child;
            child.material = thisWindTurbine.gearboxMaterial;
            break;

          case 'Tower':
            child.traverse((child2) => {
              if (child2.isMesh) {
                child2.material = thisWindTurbine.towerMaterial;
              }
            });
            break;

          case 'Gearbox':
            child.traverse((child2) => {
              if (child2.isMesh) {
                child2.material = thisWindTurbine.gearboxMaterial;
              }
            });
            break;

          case 'Hub':
            child.traverse((child2) => {
              if (child2.isMesh) {
                child2.material = thisWindTurbine.hubMaterial;
              }
            });
            break;
        }
      });
    });
  }

}