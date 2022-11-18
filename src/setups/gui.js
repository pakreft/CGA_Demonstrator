import * as DATGUI from 'datgui';

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
 * @param e
 */
function onChangeWindSpeed(e) {}

/**
 * Fires when the user changes the wind direction via the GUI.
 * @param e
 */
function onChangeWindDirection(e) {}

/**
 * Fires when the user changes the wind direction via the GUI.
 * @param e
 */
function onChangeSunPosition(e) {}
