import {RenderPass} from '../../lib/three.js-r145/examples/jsm/postprocessing/RenderPass.js';
import {EffectComposer} from '../../lib/three.js-r145/examples/jsm/postprocessing/EffectComposer.js';
import {OutlinePass} from '../../lib/three.js-r145/examples/jsm/postprocessing/OutlinePass.js';
import * as THREE from 'three';

import {globals} from "../setups/globals.js";

export default function initOutlinePass() {
  window.compose = new EffectComposer(globals.renderer);
  var renderPass = new RenderPass(globals.scene, globals.camera);



  window.outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), globals.scene, globals.camera, []);
  window.outlinePass.renderToScreen = true;


  window.compose.addPass(renderPass);
  window.compose.addPass(window.outlinePass);



}