import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pilot from "./Pages/Pilot/Pilot";

function App() {
  return (
    <div className="App">
      <>
        <Router>
            <Routes>
                <Route path="/" element={<Pilot />} />
            </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
