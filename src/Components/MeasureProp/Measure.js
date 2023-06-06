import React, { useState } from "react";
import { arrayOfCameras } from "../../Constants";
import "./Measure.css";

export default function Measure() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [length, setLength] = useState(0);
    const [startMeasure, setStartMeasure] = useState(false);

    const takePicture = (camera) => {
        var anchor = document.createElement("a");
        anchor.href = camera.image;
        anchor.download = camera.idImg + ".jpg";
        anchor.click()
    }


    return (
        <div className="measure-container">
            <div className="startMeasureContainer">
                {
                    arrayOfCameras.map((camera, index) => (
                        <div 
                            key={index}
                            className="CameraContainer"
                        >
                            <button 
                                className="startMeasureButton" 
                                onClick={() => takePicture(camera)}
                            >
                                Take photo from: {camera.idImg}
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );

}