import React, { useState } from "react";
import "./Measure.css";

export default function Measure() {

    const takePicture = (camera) => {
        var anchor = document.createElement("a");
        anchor.href = camera.image;
        anchor.download = camera.idImg + ".jpg";
        anchor.click()
    }


    return (
        <div className="measure-container">
            <div className="startMeasureContainer">
                <div className="butContainer">
                    <button 
                        className="startMeasureButton"
                    >
                        Take photo
                    </button>
                </div>
            </div>
        </div>
    );

}