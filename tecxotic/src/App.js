import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PilotContainer from "./Components/PilotContainer/PilotContainer";
import { useState, useEffect } from "react";
import PilotPage from './Pages/Pilot/Pilot';
import CoPilot from './Pages/Copilot/CopilotUI';

function scale(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function App() {

  return (
    <div className="App">
      <>
      <Router>
        <Routes>
          <Route path="/" element={<PilotPage/>} />
          <Route path="/copilot" element={<CoPilot/>} />
        </Routes>
      </Router>
      </>
    </div>
  );
}

export default App;
