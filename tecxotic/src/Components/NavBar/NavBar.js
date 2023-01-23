import React, { useState } from 'react';
import styles from "./NavBar.css";
import logo from "../../Images/logo.ico";
import IndicatorC from '../IndicatorProp/Indicator';

import Controller from "../../Images/Controller.svg";
import Flag from "../../Images/Flag.svg";
import Indicator from "../../Images/Indicator.svg";
import Microchip from "../../Images/Microchip.svg";
import Wifi from "../../Images/Wifi.svg";
import SliderComponent from '../SliderComponent/SliderComponent';
import DrivingMode from '../../Images/DrivingMode.svg';


const Navbar = () => {
  const [speed, setSpeed] = useState(50);

  const updateSpeed = (newSpeed) => {
      setSpeed(newSpeed);
  }
  return (
    <nav>
        <div className="nav-links">
            <ol className='Indicators-List'>
                <li> <IndicatorC image={Wifi} alt="Wifi" className="Wifi-Icon"/> </li>
                <li> <IndicatorC image={Flag} alt="Flag" className="Fhalag-Icon"/> </li>
                <li> <IndicatorC image={DrivingMode} alt="Driving" className="DrivingMode-Icon"/> </li>
                <li> <IndicatorC image={Controller} alt="Controller" className="Controller-Icon"/> </li>
                <li> <IndicatorC image={Indicator} alt="Indicator" className="Indicator-Icon"/> </li>
                <li className='SpeedContainer'><h2>Speed: {speed}</h2></li>
            </ol>
            <SliderComponent onChange={updateSpeed}/>
        </div>
    </nav>
  );
}

export default Navbar;
