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
        <CameraProp
          image={cameras[0].image}
          styles={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
}
