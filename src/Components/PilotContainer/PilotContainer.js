import React, { useState , useEffect} from "react";
import "./PilotContainer.css";
import CameraProp from "../CameraProp/CameraProp";
import Gyro from "../Gyroscope/Gyro";
import Navbar from "../NavBar/NavBar";
import Crosshair from "../CrosshairProp/Crosshair";
import { arrayOfCameras } from "../../Constants";
import { socket_address} from "../../Constants";

const RANGE=1000, NEUTRAL = 0
const THROTTLE_RANGE=500, NEUTRAL_THROTTLE = 500

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

export default function PilotContainer(props) {
    const [ws, setWs] = useState(null);
    const [activeCamera, setActiveCamera] = useState(1);
    const [rotation, setRotation] = useState(props.rotation);
    const [pitch, setPitch] = useState(props.pitch);
    const [yaw, setYaw] = useState(props.yaw);
    const dicOfCon = { wifi: props.wifiStatus, gamepad: props.gamepadStatus, flag: props.flagStatus, gear: props.gearStatus }
    const [connections, setConnections] = useState([dicOfCon.wifi, dicOfCon.gamepad, dicOfCon.flag, dicOfCon.gear]);
    const [powerLimit, setPowerLimit] = useState(1000);
    const commands_instance = {
        throttle: 500,
        roll: 0,
        pitch: 0,
        yaw: 0,
        arm_disarm: true,
        mode: 'MANUAL',
        arduino: 0
    }

    let modes = 'MANUAL';

    const calculatePotency = (joystick) =>{
        return parseInt(joystick * RANGE);
    }

    useEffect(() => {
    const wsClient = new WebSocket(socket_address);
    wsClient.onopen = () => {
      setWs(wsClient);
      wsClient.send(JSON.stringify(commands_instance));
    };

    wsClient.onmessage = (event) => {
        wsClient.send(JSON.stringify(commands_instance))
    }

    wsClient.onclose = () => {
        console.log('Connection Closed');
    };

    wsClient.onerror = (error) => {
        alert(`[error] ${error.message}`);
    };
    }, []);

    const getSliderValue = (element) => {
        setPowerLimit(element);
    }

    const handleCameraChange = () => {
        //console.log('Active camera is ' + activeCamera);
        setActiveCamera(activeCamera === 1 ? 0 : 1);

    };

    setInterval(() => {
        const gamepads = navigator.getGamepads();
        if (gamepads && gamepads[0]) {
            const safeZone = 0.012;
            const lx = gamepads[0].axes[0];
            const ly = gamepads[0].axes[1];

            const rx = gamepads[0].axes[2];
            const ry = gamepads[0].axes[3];

            commands_instance.yaw = ( rx > safeZone || rx < -safeZone) ? parseInt(calculatePotency(rx)): NEUTRAL
            commands_instance.pitch = ( ry > safeZone || ry < -safeZone) ? calculatePotency(-ry): NEUTRAL
            commands_instance.roll = (lx > safeZone || lx < -safeZone) ? calculatePotency(lx): NEUTRAL
            setYaw(scale(gamepads[0].axes[2], -1, 1, 180, 0).toFixed());
            setPitch(scale(gamepads[0].axes[3], -1, 1, 180, 0).toFixed());
            setRotation(scale(gamepads[0].axes[0], -1, 1, 180, 0).toFixed());

            if (gamepads[0].buttons[0].value > 0 || gamepads[0].buttons[0].pressed) {
                //x
                commands_instance.arduino = 1;
            }
            else if (gamepads[0].buttons[1].value > 0 || gamepads[0].buttons[1].pressed) {
                //circle
                commands_instance.arduino = 4;
            }
            else if (gamepads[0].buttons[2].value > 0 || gamepads[0].buttons[2].pressed) {
                //square
                commands_instance.arduino = 3;
            }
            else if (gamepads[0].buttons[3].value > 0 || gamepads[0].buttons[3].pressed) {
                //triangle
                commands_instance.arduino = 2;
            }
            else{
                commands_instance.arduino = 0;
            }

            if(ly > safeZone || ly < -safeZone){
                commands_instance.throttle = parseInt((-ly * THROTTLE_RANGE) + NEUTRAL_THROTTLE)
            }
            else{
                commands_instance.throttle = NEUTRAL_THROTTLE;
            }

            if (gamepads[0].buttons[14].pressed){
                //left
                modes = 'MANUAL';
            }
            else if( gamepads[0].buttons[12].pressed){
                //up
                modes = 'STABILIZE';
            }
            else if(gamepads[0].buttons[13].pressed){
                //up
                modes = 'ACRO';
            }
            commands_instance.mode = modes;
        }
    }, 10);
    return (
        <>
            <div className="PilotCards-container">
                <CameraProp
                    src={arrayOfCameras[activeCamera].image}
                    idImg={arrayOfCameras[activeCamera].idImg}
                    styles={arrayOfCameras[activeCamera].styles}
                />
                <div className="Gyro-container">
                    <div className="staticHalfLine" >
                        <Crosshair rotation={rotation} />
                    </div>
                    <Gyro roll={rotation} pitch={pitch} yaw={yaw} />
                </div>
            </div>
            <Navbar changeCamera={handleCameraChange} connections={connections} getSliderValue={getSliderValue} />
        </>
    );
}
