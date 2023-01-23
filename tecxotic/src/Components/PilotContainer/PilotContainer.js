import React, {Suspense} from "react";
import styles from "./PilotContainer.css";
import CameraProp from "../CameraProp/CameraProp";
import Gyro from "../Gyroscope/Gyro";
import Navbar from "../NavBar/NavBar";

export default function PilotContainer() {
    return (
        <>
        <div className="PilotCards-container">
            <CameraProp 
                    image="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/NASA-AD-background.png" 
                    idImg ="Main1" 
            />
            <CameraProp
                    image=""
                    idImg ="Main2"
            />

            <div className="Gyro-container">
                <Gyro roll="152°"/>
                <Gyro pitch="909090"/>
                <Gyro yaw="0°"/>
            </div>
        </div>
        <Navbar/>

        </>
    );

}
