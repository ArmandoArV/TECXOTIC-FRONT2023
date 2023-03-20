import React, { useState } from "react";
import Lateral from "../LateralNavbar/Lateral";
import CameraProp from "../CameraProp/CameraProp";
import "./CopilotContainer.css";

export default function CopilotContainer() {
  const cameras = [
    {
      image: "http://218.45.5.57:80/SnapshotJPEG?Resolution=640x480&amp;Quality=Clarity&amp;1674619720",
      idImg: "Main1",
    },
    {
      image: "http://158.58.130.148/mjpg/video.mjpg",
      idImg: "Main1",
    }
  ];

  return (
    <div className="copilotContainer">
      <Lateral />
      <div className="camera-container">
        <div className="left-box">
        </div>
        <div className="right-box">
          <div className="top-right-box">
            <div className="CameraContainer">
              <CameraProp
                image={cameras[0].image}
                idImg={cameras[0].idImg}
                styles={{ width: "95%", height: "95%", borderRadius: "25px" }}
              />
            </div>
          </div>
          <div className="bottom-right-box">
            <div className="CameraContainer">
              <CameraProp
                image={cameras[0].image}
                idImg={cameras[0].idImg}
                styles={{ width: "95%", height: "95%", borderRadius: "25px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
<CameraProp
                image={cameras[0].image}
                idImg={cameras[0].idImg}
                styles={{width: "100%", height: "100%"}}
              />




              <CameraProp
                image={cameras[1].image}
                idImg={cameras[1].idImg}  
                styles={cameras[1].styles}
              />

              */