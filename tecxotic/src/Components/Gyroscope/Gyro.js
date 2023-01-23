import React from "react";
import styles from "../Gyroscope/Gyro.css"

export default function Gyro(props){
    return(
            <div className="Gyro">
                <div className="Roll">
                    <h2>{props.roll}</h2>
                </div>
                <div className="Pitch">
                    <h2>{props.pitch}</h2>
                </div>
                <div className="Yaw">
                    <h2>{props.yaw}</h2>
                </div>
        </div>

    );
}