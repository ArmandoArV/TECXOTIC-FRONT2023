import React, {Suspense} from "react";
import styles from "./PilotContainer.css";
import CameraProp from "../CameraProp/CameraProp";
import IndicatorsContainer from "../IndicatorsContainer/IndicatorsContainer";
import SpeedContainer from "../SpeedContainer/SpeedContainer";
import Visualizer from "../VisualizerComponent/Visualizer";
export default function PilotContainer() {
    return (
        <div className="PilotCards-container">
            <div className={"PilotCard-Left"}>
                <CameraProp image="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/NASA-AD-background.png" idImg ="Main1"/>
                <IndicatorsContainer />
                <SpeedContainer />
            </div>
            <div className={"PilotCard-Right"}>
                <h1>Navigation</h1>

            </div>
        </div>
    );

}
