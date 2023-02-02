import * as THREE from 'three';
import {GLTFLoader} from 'gltfloader';

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

    const towerTexture = textureLoader.load("src/assets/Textures/windturbine_texture.png");
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
    const modelPath = 'src/assets/Models/windrad_export.gltf';
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
            //window.console.log(self.hub);
            break;

          case 'Blades':
            self.blades = child;
            break;

          case 'Blade1':
            self.blade1 = child;
            child.material = self.gearboxMaterial;
            break;

          case 'Blade2':
            self.blade2 = child;
            child.material = self.gearboxMaterial;
            break;

          case 'Blade3':
            self.blade3 = child;
            child.material = self.gearboxMaterial;
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

}