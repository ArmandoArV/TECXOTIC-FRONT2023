import React, { useState , useEffect, useRef} from "react";
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
    const wifiStatus = useRef(false);
    const gamepadStatus = useRef(false);
    const flagStatus = useRef(false);
    const gearStatus = useRef(false);
    const [connections, setConnections] = useState([wifiStatus.current, gamepadStatus.current, flagStatus.current, gearStatus.current]);
    const [powerLimit, setPowerLimit] = useState(1.0);
    const powerLimitRef = useRef();
    powerLimitRef.current = powerLimit;
    const [counter, setCounter] = useState(0);

    let modes = 'MANUAL';

    const calculatePotency = (joystick, trigger) =>{
        const tempPowerLimit = trigger ? powerLimitRef.current : 1.0;
        return parseInt(joystick * RANGE * tempPowerLimit);
    }

    const calculateThrottlePotency = (joystick, trigger) =>{
        const tempPowerLimit = trigger ? powerLimitRef.current : 1.0;
        return parseInt((-joystick * THROTTLE_RANGE) * tempPowerLimit + NEUTRAL_THROTTLE);
    }

    useEffect(() => {
        if(counter===0){
            const wsClient = new WebSocket(socket_address);

            wsClient.onopen = () => {
                setWs(wsClient);
                const start_commands_instance = {
                    throttle: 500,
                    roll: 0,
                    pitch: 0,
                    yaw: 0,
                    arm_disarm: true,
                    mode: 'MANUAL',
                    arduino: 0,
                }
                ws.send(JSON.stringify(start_commands_instance));
                setCounter(counter+1);
            };
        }
        
    })

    useEffect(() => {
        const interval = setInterval(() => {

            let commands_yaw = 0;
            let commands_pitch = 0;
            let commands_roll = 0;
            let commands_throttle = 500;
            let commands_arduino = 0;
            let commands_mode = 'MANUAL';

            const gamepads = navigator.getGamepads();
            if (gamepads && gamepads[0]) {
                gamepadStatus.current = true;
                const safeZone = 0.012;
                let trigger = false;
                if(gamepads[0].buttons[4].pressed || gamepads[0].buttons[5].pressed){
                    //LB or RB
                    trigger = true;
                }

                const lx = gamepads[0].axes[0];
                const ly = gamepads[0].axes[1];

                const rx = gamepads[0].axes[2];
                const ry = gamepads[0].axes[3];

                commands_yaw = ( rx > safeZone || rx < -safeZone) ? parseInt(calculatePotency(rx, trigger)): NEUTRAL
                commands_pitch = ( ly > safeZone || ly < -safeZone) ? calculatePotency(-ly, trigger): NEUTRAL
                commands_roll = (lx > safeZone || lx < -safeZone) ? calculatePotency(lx, trigger): NEUTRAL
                setYaw(scale(rx, -1, 1, 180, 0).toFixed());
                setPitch(scale(ly, -1, 1, 180, 0).toFixed());
                setRotation(scale(lx, -1, 1, 180, 0).toFixed());

                if (gamepads[0].buttons[0].pressed) {
                    //x
                    commands_arduino = 1;
                }
                else if (gamepads[0].buttons[1].pressed) {
                    //circle
                    commands_arduino = 4;
                }
                else if (gamepads[0].buttons[2].pressed) {
                    //square
                    commands_arduino = 3;
                }
                else if (gamepads[0].buttons[3].pressed) {
                    //triangle
                    commands_arduino = 2;
                }
                else if (gamepads[0].buttons[6].pressed) {
                    //LT
                    commands_arduino = 7;
                }
                else if (gamepads[0].buttons[7].pressed) {
                    //RT
                    commands_arduino = 6;
                }
                else{
                    commands_arduino = 0;
                }

                if(gamepads[0].buttons[11].pressed){
                    //right joystick button
                    commands_arduino = 5;
                }

                if(ry > safeZone || ry < -safeZone){
                    commands_throttle = calculateThrottlePotency(ry, trigger)
                }
                else{
                    commands_throttle = NEUTRAL_THROTTLE;
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
                    //down
                    modes = 'ACRO';
                }
                commands_mode = modes;
            }
            /*else{
                gamepadStatus.current = false;
            }*/
            if(ws !== null){
                ws.onmessage = (event) => {
                    const commands_instance = {
                        throttle: commands_throttle,
                        roll: commands_roll,
                        pitch: commands_pitch,
                        yaw: commands_yaw,
                        arm_disarm: true,
                        mode: commands_mode,
                        arduino: commands_arduino,
                    }
                    ws.send(JSON.stringify(commands_instance))
                }
            }
            //setConnections([wifiStatus.current, gamepadStatus.current, flagStatus.current, gearStatus.current])
        }, 4);
    })

    const getSliderValue = (element) => {
        setPowerLimit(element /100.0);
    }

    const handleCameraChange = () => {
        setActiveCamera(activeCamera === 1 ? 0 : 1);

    };

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
