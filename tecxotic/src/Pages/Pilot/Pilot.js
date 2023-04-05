import React,{useState} from "react";
import PilotContainer from "../../Components/PilotContainer/PilotContainer";
import { connectionStatus } from "../../Constants";



export default function PilotPage() {
    const [wifiStatus, setWifiStatus] = useState(true);
    const [gamepadStatus, setGamepadStatus] = useState(true);
    const [flagStatus, setFlagStatus] = useState(false);
    const [gearStatus, setGearStatus] = useState(true);
    const [rotation, setRotation] = useState(0);
    const [pitch, setPitch] = useState(0);
    const [yaw, setYaw] = useState(90);

    return (
        <>
            <PilotContainer wifiStatus={setWifiStatus} gamepadStatus={setGamepadStatus} flagStatus={setFlagStatus} gearStatus={setGearStatus} rotation={setRotation} pitch={setPitch} yaw={setYaw} />
        </>
    );
}