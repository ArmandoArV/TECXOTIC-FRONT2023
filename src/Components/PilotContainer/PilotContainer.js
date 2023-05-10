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

const calculatePotency = (joystick) =>{
   return parseInt((joystick * RANGE) + NEUTRAL)
}

export default function PilotContainer(props) {
    const [ws, setWs] = useState(null);
    const [activeCamera, setActiveCamera] = useState(1);
    const [rotation, setRotation] = useState(props.rotation);
    const [pitch, setPitch] = useState(props.pitch);
    const [yaw, setYaw] = useState(props.yaw);
    const dicOfCon = { wifi: props.wifiStatus, gamepad: props.gamepadStatus, flag: props.flagStatus, gear: props.gearStatus }
    const [connections, setConnections] = useState([dicOfCon.wifi, dicOfCon.gamepad, dicOfCon.flag, dicOfCon.gear]);
    const [powerLimit, setPowerLimit] = useState(0.25);
    const commands_instance = {
        throttle: 500,
        roll: 200,
        pitch: 0,
        yaw: 0,
        arm_disarm: true,
        mode: 'MANUAL'
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
        setPowerLimit((element / 100)*1.2);
    }

    const handleCameraChange = () => {
        //console.log('Active camera is ' + activeCamera);
        setActiveCamera(activeCamera === 1 ? 0 : 1);

    };

    setInterval(() => {
        const gamepads = navigator.getGamepads();
        if (gamepads && gamepads[0]) {
            const safeZone = 0.012;
            

            const lx = gamepads[0].axes[0] * powerLimit;
            const ly = gamepads[0].axes[1] * powerLimit;

            const rx = gamepads[0].axes[2] * powerLimit;
            const ry = gamepads[0].axes[3] * powerLimit;

            if(ly > safeZone || ly < -safeZone){
                commands_instance.throttle = parseInt((-ly * THROTTLE_RANGE) + NEUTRAL_THROTTLE)
            }
            else{
                commands_instance.throttle = NEUTRAL_THROTTLE;
            }
            
            commands_instance.yaw = ( rx > safeZone || rx < -safeZone) ? calculatePotency(rx) : NEUTRAL
            commands_instance.pitch = ( ry > safeZone || ry < -safeZone) ? calculatePotency(-ry) : NEUTRAL
            commands_instance.roll = (lx > safeZone || lx < -safeZone) ? calculatePotency(lx) : NEUTRAL
            
            //console.log({throttle: commands_instance.throttle,  yaw: commands_instance.yaw , pitch: commands_instance.pitch, roll: commands_instance.roll})
            //console.log(commands_instance.roll);
            setYaw(scale(gamepads[0].axes[2], -1, 1, 180, 0).toFixed());
            setPitch(scale(gamepads[0].axes[3], -1, 1, 180, 0).toFixed());
            setRotation(scale(gamepads[0].axes[0], -1, 1, 180, 0).toFixed());
        }
    }, 50);

    return (
        <>
            <div className="PilotCards-container">
                <CameraProp
                    image={arrayOfCameras[activeCamera].image}
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