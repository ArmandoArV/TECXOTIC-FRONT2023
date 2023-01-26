import React, { useState } from 'react';
import "./NavBar.css";
import logo from "../../Images/logo.ico";
import SliderComponent from '../SliderComponent/SliderComponent';
import SVG from '../SVGProp/SVG';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  const [speed, setSpeed] = useState(0);

  const updateSpeed = (newSpeed) => {
      setSpeed(newSpeed);
  }

  const [color, setColor] = useState("#bf5646");
  const updateColor = (connected) => {
      setColor(connected ? "#b7f944" : "#bf5646")
  }
  Navbar.propTypes = {
    changeCamera: PropTypes.func,
    connections: PropTypes.arrayOf(PropTypes.bool)
  }
  const arrayOfSVGNames= ["wifi", "gamepad", "flag", "gear"];

  return (
    <nav>
        <div className="nav-links">
            <ol className='Indicators-List'>
                {props.connections.map((connection, index) => {
                    return <li className='Indicator-Item' key={index}>
                        <SVG 
                            name={`${arrayOfSVGNames[index]}`} 
                            color={connection ? "#86e642" : "#bf5646"}
                        />
                    </li>
                })}
                
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
