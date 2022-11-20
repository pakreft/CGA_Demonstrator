import * as DATGUI from 'datgui';

import {globals} from './globals.js';
import {posSunStart} from './sunLight.js';

/**
 * Setups the GUI.
 */
export default function setupGUI() {
  const gui = new DATGUI.GUI();
  const proxy = {
    Wind_Speed: 0, //in km/h
    Wind_Direction: 0, //in degrees
    Sun_PositionX: 0
  };

  gui.add(proxy, 'Wind_Speed', 0, 100, 1).onChange(onChangeWindSpeed);
  gui.add(proxy, 'Wind_Direction', 0, 359, 1).onChange(onChangeWindDirection);
  gui.add(proxy, 'Sun_PositionX', -50, 50, 1).onChange(onChangeSunPosition);
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
function onChangeWindDirection(p) {}

/**
 * Fires when the user changes the wind direction via the GUI.
 * @param p
 */
function onChangeSunPosition(p) {
  globals.sun.position.set(p + posSunStart.x, posSunStart.y, posSunStart.z);
}
