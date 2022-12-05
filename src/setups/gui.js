import * as DATGUI from 'datgui';
import * as THREE from 'three';


import {globals} from './globals.js';
import {startingPosSun} from './sunLight.js';
import {initRotation} from '/src/objects/windturbine/head.js';


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
    Head_Rotation: 0
  };

  gui.add(proxy, 'Wind_Speed', windspeedMin, windspeedMax, 1).onChange(onChangeWindSpeed);
  gui.add(proxy, 'Wind_Direction', 0, 359, 1).onChange(onChangeWindDirection);
  gui.add(proxy, 'Sun_PositionX', -300, 300, 1).onChange(onChangeSunPosition); //toDo Im Halbkreis bewegen
 gui.add(proxy, 'Head_Rotation', 0, 360, 1).onChange(onChangeHeadRotation); //
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



    onChangeHeadRotation(p);


}

/**
 * Fires when the user changes the wind direction via the GUI.
 * @param p
 */
function onChangeSunPosition(p) {
  globals.sun.position.set(p + startingPosSun.x, startingPosSun.y, startingPosSun.z);
}


/**
 * Fires when the user changes the Head Rotation via the GUI.
 * @param p
 */
function onChangeHeadRotation(p) {
globals.windTurbine.head.startAnimation(p);
}


