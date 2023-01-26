import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pilot from "./Pages/Pilot/Pilot";
import PilotContainer from "./Components/PilotContainer/PilotContainer";
import { useState } from "react";

function scale(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function App() {

  const [roll, setRoll] = useState(0);
  const [pitch, setPitch] = useState(0);
  const [yaw, setYaw] = useState(90);

  setInterval(() => {
    const gamepads = navigator.getGamepads();
    if (gamepads && gamepads[0]) {
      console.log(gamepads[0].axes);
      console.log(scale(gamepads[0].axes[2], -1, 1, 180, 0));
      setYaw(scale(gamepads[0].axes[2], -1, 1, 180, 0));
    }
  }, 1000);

  return (
    <div className="App">
      <>
        <PilotContainer wifiStatus={true} gamepadStatus={true} flagStatus={true} gearStatus={true} rotation={0} pitch={0} yaw={yaw} />
      </>
    </div>
  );
}

export default App;
