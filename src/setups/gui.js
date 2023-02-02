import * as DATGUI from 'datgui';
import * as THREE from 'three';


import {globals} from './globals.js';
import {startingPosSun} from './sunLight.js';


const windspeedMin = 0;
const windspeedMax = 100;

/**
 * Setups the GUI.
 */
export default function setupGUI() {
  const gui = new DATGUI.GUI();

  const proxy = {
    Wind_Speed: 0, //in km/h
    Wind_Direction: 0, //in degrees
    Sun_PositionX: 0,
    Blades_angle_of_Attack: globals.windTurbine.blade3.rotation.y
  };
  gui.add(proxy, 'Wind_Speed', windspeedMin, windspeedMax, 1).onChange(onChangeWindSpeed);
  gui.add(proxy, 'Wind_Direction', 0, 359, 1).onChange(onChangeWindDirection);
  gui.add(proxy, 'Sun_PositionX', -300, 300, 1).onChange(onChangeSunPosition); //toDo Im Halbkreis bewegen
  gui.add(proxy, 'Blades_angle_of_Attack', 0, 90, 1).onChange(onChangeBladeAngle); //
}

/**
 * Fires when the user changes the wind speed via the GUI.
 * @param p
 */
function onChangeWindSpeed(p) {}

/**
 * Fires when the user changes the wind direction via the GUI.
 * @param p
 */
function onChangeWindDirection(p) {

}

/**
 * Fires when the user changes the wind direction via the GUI.
 * @param p
 */
function onChangeSunPosition(p) {
  globals.sun.position.set(p + startingPosSun.x, startingPosSun.y, startingPosSun.z);
}


/**
 * Fires when the user changes the Gearbox Rotation via the GUI.
 * @param p
 */
function onChangeBladeAngle(p) {
  if (p > 0&& p < 90){
    globals.windTurbineGLTF.rotateBlade(globals.windTurbineGLTF.blade1, THREE.MathUtils.degToRad(p));
    globals.windTurbineGLTF.rotateBlade(globals.windTurbineGLTF.blade2, THREE.MathUtils.degToRad(p));
    globals.windTurbineGLTF.rotateBlade(globals.windTurbineGLTF.blade3, THREE.MathUtils.degToRad(p));

    //globals.windTurbine.blade1.changeBladeAngle(THREE.MathUtils.degToRad(p));
    //globals.windTurbine.blade2.changeBladeAngle(THREE.MathUtils.degToRad(p));
    //globals.windTurbine.blade3.changeBladeAngle(THREE.MathUtils.degToRad(p));
    //window.console.log(p);
  }

}
