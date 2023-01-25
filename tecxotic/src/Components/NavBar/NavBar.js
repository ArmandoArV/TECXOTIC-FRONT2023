import React, { useState } from 'react';
import "./NavBar.css";
import logo from "../../Images/logo.ico";
import SliderComponent from '../SliderComponent/SliderComponent';
import Camera from '../../Images/Camera.svg';
import SVG from '../SVGProp/SVG';

const Navbar = (props) => {
  const [speed, setSpeed] = useState(0);

  const updateSpeed = (newSpeed) => {
      setSpeed(newSpeed);
  }

  return (
    <nav>
        <div className="nav-links">
            <ol className='Indicators-List'>
                <li className='Indicator-Item'><SVG name='wifi'color="red"/></li>
                <li className='Indicator-Item'><SVG name='gamepad'color="red"/></li>
                <li className='Indicator-Item'><SVG name='flag'color="red"/></li>
                <li className='Indicator-Item'><SVG name='gear'color="red"/></li>
            </ol>
            <li className='Indicator-Item'><SVG name='gauge-simple'color="white"/></li>
            <SliderComponent onChange={updateSpeed}/>
        </div>
        <button className="ChangeCamera" onClick={props.changeCamera}><img src={Camera} alt="Camera" className="Camera-Icon"/></button>
    </nav>
  );
}

export default Navbar;
