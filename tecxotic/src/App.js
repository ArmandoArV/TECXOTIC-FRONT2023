import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pilot from "./Pages/Pilot/Pilot";
import PilotContainer from "./Components/PilotContainer/PilotContainer";
import { useState, useEffect } from "react";

function scale(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function App() {

  return (
    <div className="App">
      <>
        <PilotContainer wifiStatus={true} gamepadStatus={true} flagStatus={true} gearStatus={true} rotation={0} pitch={0} yaw={90} />
      </>
    </div>
  );
}

export default App;
