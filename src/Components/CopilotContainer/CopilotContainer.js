import React, { useState } from "react";
import Lateral from "../LateralNavbar/Lateral";
import CameraProp from "../CameraProp/CameraProp";
import { arrayOfCameras } from "../../Constants";
import Webcam from "react-webcam";
import "./CopilotContainer.css";

export default function CopilotContainer() {


  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSelectedComponent = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="copilotContainer">
      <Lateral handleSelectedComponent={handleSelectedComponent} />
      <div className="camera-container">
        <div className="left-box">
        {selectedComponent}
        </div>
        <div className="right-box">
          <div className="top-right-box">
              <div className="CameraContainer" >
                <Webcam height={480} width={680} />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
