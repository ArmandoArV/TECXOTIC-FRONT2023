import React from "react";
import styles from "./SpeedContainer.css";
import SliderComponent from "../SliderComponent/SliderComponent";
import Indicator from "../../Images/Indicator.svg";
export default function SpeedContainer() {
    return (
        <div className="speed-container">
            <img src={Indicator} alt="Indicator" className="indicator" />
            <SliderComponent />
        </div>
    );
}