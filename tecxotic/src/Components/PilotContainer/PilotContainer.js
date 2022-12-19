import React from "react";
import styles from "./PilotContainer.css";
import CameraProp from "../CameraProp/CameraProp";

export default function PilotContainer() {
    return (
        <div className="PilotCards-wrapper">
          <CameraProp image="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/NASA-AD-background.png" />
        </div>
    );

}
