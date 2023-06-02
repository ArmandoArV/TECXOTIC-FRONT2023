import React, { useState } from "react";
import Lateral from "../LateralNavbar/Lateral";
import CameraProp from "../CameraProp/CameraProp";
import { arrayOfCameras } from "../../Constants";
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
            {
            arrayOfCameras.map((camera, index) => (
              <div 
                key={index}
                className="CameraContainer"
              >
                <CameraProp
                  image={camera.image}
                  idImg={camera.idImg}
                  styles={{ width: "95%", height: "95%", borderRadius: "25px" }}
                />
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  );
}
