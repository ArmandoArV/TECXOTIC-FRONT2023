import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PilotPage from './Pages/Pilot/Pilot';
import CoPilot from './Pages/Copilot/CopilotUI';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PilotPage/>} />
          <Route path="/copilot" element={<CoPilot/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
