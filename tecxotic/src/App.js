import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pilot from "./Pages/Pilot/Pilot";
import PilotContainer from "./Components/PilotContainer/PilotContainer";
import Cameras from './Components/Cameras/Camera1';
function App() {
  return (
    <div className="App">
      <>
          <PilotContainer />
      </>
    </div>
  );
}

export default App;
