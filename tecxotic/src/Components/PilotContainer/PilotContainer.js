import React, { useState } from "react";
import "./PilotContainer.css";
import CameraProp from "../CameraProp/CameraProp";
import Gyro from "../Gyroscope/Gyro";
import Navbar from "../NavBar/NavBar";
import Crosshair from "../CrosshairProp/Crosshair";

export default function PilotContainer() {
    const [activeCamera, setActiveCamera] = useState(1);
    const [rotation, setRotation] = useState(-25);
    const cameras = [
        {
            image: "http://83.56.31.69/mjpg/video.mjpg",
            idImg: "Main1",
        },
        {
            image: "http://158.58.130.148/mjpg/video.mjpg",
            idImg: "Main1",
        }
    ];

    const handleCameraChange = () => {
        console.log('Active camera is ' + activeCamera);
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
                    <div className="staticHalfLine" >
                        <Crosshair rotation={rotation} />
                    </div>
                    <Gyro roll={rotation} pitch ={rotation} yaw={rotation} />
                </div>
            </div>
            <Navbar changeCamera={handleCameraChange} />
        </>
    );
}
