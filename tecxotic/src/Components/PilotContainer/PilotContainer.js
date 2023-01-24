import React, { useState } from "react";
import styles from "./PilotContainer.css";
import CameraProp from "../CameraProp/CameraProp";
import Gyro from "../Gyroscope/Gyro";
import Navbar from "../NavBar/NavBar";
import Crosshair from "../CrosshairProp/Crosshair";

export default function PilotContainer() {
    const [activeCamera, setActiveCamera] = useState(1);

    const cameras = [
        {
            image: "http://83.56.31.69/mjpg/video.mjpg",
            idImg: "Main1"
        },
        {
            image: "http://158.58.130.148/mjpg/video.mjpg",
            idImg: "Main2",
            styles: { boxShadow: "2.5px 2px 2px 0px rgba(0,0,0,0.75)", opacity: "0.5" }
        }
    ];

    const handleCameraChange = () => {
        setActiveCamera(activeCamera === 1 ? 0 : 1);
    };

    return (
        <>
            <div className="PilotCards-container">
                <CameraProp
                    image={cameras[activeCamera].image}
                    idImg={cameras[activeCamera].idImg}
                    styles={cameras[activeCamera].styles}
                />
                <div className="Gyro-container">
                    <div className="staticHalfLine" />
                    <Gyro roll="152°" />
                    <Gyro pitch="909090" />
                    <Gyro yaw="0°" />
                    <Crosshair />
                </div>
            </div>
            <Navbar changeCamera={handleCameraChange} />
        </>
    );
}
