import React, { useState } from "react";
import "./Measure.css";

export default function Measure(props) {

    const takePicture = () => {
        const imageSrc = props.webcam.current.getScreenshot();
        var a = document.createElement("a"); //Create <a>
        a.href = imageSrc; //Image Base64 Goes here
        a.download = "Measure.png"; //File name Here
        a.click(); 
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
            </div>
        </div>
    );

}