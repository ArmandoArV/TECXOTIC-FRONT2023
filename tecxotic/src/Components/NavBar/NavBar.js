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

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav>
        <div className="nav-links">
            <ol className='Indicators-List'>
                <li> <IndicatorC image={Wifi} alt="Wifi" className="Wifi-Icon"/> </li>
                <li> <IndicatorC image={Flag} alt="Flag" className="Fhalag-Icon"/> </li>
                <li> <IndicatorC image={Microchip} alt="Microchip" className="Microchip-Icon"/> </li>
                <li> <IndicatorC image={Controller} alt="Controller" className="Controller-Icon"/> </li>
                <li> <IndicatorC image={Indicator} alt="Indicator" className="Indicator-Icon"/> </li>
                <li className='SpeedContainer'><h2>Speed: {props.speed}</h2></li>
            </ol>
            <SliderComponent />
        </div>
    </nav>
  );
}

export default Navbar;
