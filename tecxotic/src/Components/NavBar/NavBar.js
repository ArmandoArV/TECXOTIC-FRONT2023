import React, { useState } from 'react';
import "./NavBar.css";
import logo from "../../Images/logo.ico";
import SliderComponent from '../SliderComponent/SliderComponent';
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
                <li className='Indicator-Item'><SVG name='gamepad'color="red"nameClass={"Icon"}/></li>
                <li className='Indicator-Item'><SVG name='flag'color="red"nameClass={"Icon"}/></li>
                <li className='Indicator-Item'><SVG name='gear'color="red" nameClass={"Icon"}/></li>
                <li><h2 className="SpeedContainer">Speed: {speed}</h2></li>
            </ol>
            <SVG name='gauge-simple'color="white"/>
            <SliderComponent onChange={updateSpeed}/>

        </div>
        <button className="ChangeCamera" onClick={props.changeCamera}><SVG name='camera-retro'color="white"/></button>
    </nav>
  );
}

export default Navbar;
