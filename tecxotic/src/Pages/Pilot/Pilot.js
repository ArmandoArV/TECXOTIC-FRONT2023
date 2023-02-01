import React from "react";
import PilotContainer from "../../Components/PilotContainer/PilotContainer";


export default function PilotPage() {
    return (
        <>
                <PilotContainer wifiStatus={true} gamepadStatus={true} flagStatus={false} gearStatus={true} rotation={0} pitch={0} yaw={90} />
        </>
    );
}