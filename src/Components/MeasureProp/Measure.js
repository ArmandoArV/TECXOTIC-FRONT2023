import React, { useState } from "react";
import {  useNavigate } from 'react-router-dom';
import "./Measure.css";

export default function Measure(props) {
    const navigate = useNavigate();

    const [diameter, setDiameter] = useState('');
    const [height, setHeight] = useState('');

    const takePicture = () => {
        const imageSrc = props.webcam.current.getScreenshot();
        var a = document.createElement("a"); //Create <a>
        a.href = imageSrc; //Image Base64 Goes here
        a.download = "Measure.png"; //File name Here
        a.click(); 
    }

    const handleDiameterInput = (e) => {
        setDiameter(e.target.value); 
    }

    const handleHeightInput = (e) => {
        setHeight(e.target.value);
    }

    const moveTo3D = (e) => {
        if(diameter !== '' && height !== ''){
            navigate(`/model/${diameter}/${height}`, { replace: false });
        }
        else{
            alert('You need to fill the two measure inputs');
        }
    }


    return (
        <div className="measure-container">
            <div className="startMeasureContainer">
                <div className="butContainer">
                    <button onClick={takePicture}
                        className="startMeasureButton"
                    >
                        Take photo
                    </button>
                </div>
                <div className="modelcontainer">
                    <div className="modelinputcontainer">
                        <div className="bottomitems">
                            <input name="diameter" type="number" placeholder={"Diameter"} title="Enter the diameter" onChange={handleDiameterInput} autoComplete="true"></input>
                        </div>
                        <div className="bottomitems">
                            <input name="height" type="number"  placeholder={"Height"} title="Enter the height" onChange={handleHeightInput} autoComplete="true"></input>
                        </div>
                    </div>
                    <div className="bottomitems">
                        <button className='render3D' onClick={moveTo3D}>
                            Render 3D
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    );

}