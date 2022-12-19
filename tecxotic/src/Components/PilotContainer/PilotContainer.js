import React from "react";
import styles from "./PilotContainer.css";
import CameraProp from "../CameraProp/CameraProp";
import IndicatorsContainer from "../IndicatorsContainer/IndicatorsContainer";
import SliderComponent from "../SliderComponent/SliderComponent";

export default function PilotContainer() {
    return (
        <div className="PilotCards-container">
            <div className={"PilotCard-Left"}>
                <CameraProp image="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/NASA-AD-background.png" idImg ="Main1"/>
                <IndicatorsContainer />
                <SliderComponent />
            </div>
            <div className={"PilotCard-Right"}>
                <h1>Navigation</h1>
            </div>
        </div>
    );

}
