import React from "react";
import "../Gyroscope/Gyro.css"

export default function Gyro({roll, pitch, yaw}){
    return(
        <div className="Gyro">
            <h2 className="Roll">{roll}°</h2>
            <h2 className="Pitch">Pitch: {pitch}°</h2>
            <h2 className="Yaw">Yaw: {yaw}°</h2>
        </div>
    );
}
