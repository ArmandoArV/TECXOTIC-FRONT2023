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
                    image="http://127.0.0.1:8080/video1" 
                    idImg ="Main1" 
            />
            <CameraProp
                    image="http://127.0.0.1:8080/video2"
                    idImg ="Main2"
                    styles = {{boxShadow:"2.5px 2px 2px 0px rgba(0,0,0,0.75)"}}
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
