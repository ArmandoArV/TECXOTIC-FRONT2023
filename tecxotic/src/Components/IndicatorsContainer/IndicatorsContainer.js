import React from "react";
import styles from "./IndicatorsContainer.css";
import IndicatorsProp from "../IndicatorsComponent/IndicatorsProp";
// Images import
import Wifi from "../../Images/Wifi.svg";
import Microchip from "../../Images/Microchip.svg";
import Controller from "../../Images/Controller.svg";
import Flag from "../../Images/Flag.svg";

export default function IndicatorsContainer() {
    return(
        <div className="Indicators-container">
            <IndicatorsProp classImg="Indicators-img" indImg={Wifi} altImg="Wifi" class={styles.IndicatorsContainer} />
            <IndicatorsProp classImg="Indicators-img" indImg={Microchip} altImg="Microchip" />
            <IndicatorsProp classImg="Indicators-img" indImg={Controller} altImg="Controller" />
            <IndicatorsProp classImg="Indicators-img" indImg={Flag} altImg="Flag" class={styles.IndicatorsContainer} />
        </div>
    );
}