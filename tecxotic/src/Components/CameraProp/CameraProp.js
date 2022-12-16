import React from "react";
import styles from "./CameraProp.css";
export default function CameraProp({cameraId}) {
    return(
      <img src={cameraId} alt="camera" />
    );
}

