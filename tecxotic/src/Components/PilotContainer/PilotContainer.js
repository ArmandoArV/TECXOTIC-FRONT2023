import React, { useState } from "react";
import "./PilotContainer.css";
import CameraProp from "../CameraProp/CameraProp";
import Gyro from "../Gyroscope/Gyro";
import Navbar from "../NavBar/NavBar";
import Crosshair from "../CrosshairProp/Crosshair";

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

export default function PilotContainer(props) {
    const [activeCamera, setActiveCamera] = useState(1);
    const [rotation, setRotation] = useState(props.rotation);
    const [pitch, setPitch] = useState(props.pitch);
    const [yaw, setYaw] = useState(props.yaw);
    const dicOfCon = { wifi: props.wifiStatus, gamepad: props.gamepadStatus, flag: props.flagStatus, gear: props.gearStatus }
    const [connections, setConnections] = useState([dicOfCon.wifi, dicOfCon.gamepad, dicOfCon.flag, dicOfCon.gear]);
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

    const handleCameraChange = () => {
        console.log('Active camera is ' + activeCamera);
        setActiveCamera(activeCamera === 1 ? 0 : 1);

    };

    setInterval(() => {
        const gamepads = navigator.getGamepads();
        if (gamepads && gamepads[0]) {
            console.log(gamepads[0].axes);
            setYaw(scale(gamepads[0].axes[2], -1, 1, 180, 0).toFixed());
            setPitch(scale(gamepads[0].axes[3], -1, 1, 180, 0).toFixed());
            setRotation(scale(gamepads[0].axes[0], -1, 1, 180, 0).toFixed());
        }
    }, 50);

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
                    <Gyro roll={rotation} pitch={pitch} yaw={yaw} />
                </div>
            </div>
            <Navbar changeCamera={handleCameraChange} connections={connections} />
        </>
    );
}
