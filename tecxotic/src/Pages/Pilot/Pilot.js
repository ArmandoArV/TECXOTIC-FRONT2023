import React from "react";
import PilotContainer from "../../Components/PilotContainer/PilotContainer";

export default function Pilot() {
    return (
        <>
            <PilotContainer wifiStatus={true} gamepadStatus={true} flagStatus={true} gearStatus={true} rotation={0} pitch={0} yaw={0}/>
        </>
    );
}