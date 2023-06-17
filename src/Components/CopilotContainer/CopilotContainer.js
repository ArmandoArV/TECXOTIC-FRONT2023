import React, { useState } from "react";
import Lateral from "../LateralNavbar/Lateral";
import Webcam from "react-webcam";
import "./CopilotContainer.css";

export default function CopilotContainer() {
  const webcamRef = React.useRef(null);


  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSelectedComponent = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="copilotContainer">
      <Lateral handleSelectedComponent={handleSelectedComponent} webcam={webcamRef}/>
      <div className="camera-container">
        <div className="left-box">
        {selectedComponent}
        </div>
        <div className="right-box">
          <div className="top-right-box">
              <div className="CameraContainer" >
                <Webcam ref={webcamRef} height={480} width={680} screenshotFormat="image/png"/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
