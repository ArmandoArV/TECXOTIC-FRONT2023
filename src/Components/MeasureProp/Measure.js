import React, { useState } from "react";
import { arrayOfCameras } from "../../Constants";
import "./Measure.css";

export default function Measure() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [length, setLength] = useState(0);
    const [startMeasure, setStartMeasure] = useState(false);

    const startMeasureHandler = () => {
        setStartMeasure(true);
        // Aqui ya veran que le meten pa medir
    };

    const takePicture = (camera) => {
        console.log("TAKING SCRENSHOT FROM: ", camera.pictureMessage)
        // Screenshot example, note it only works for <img> tags
        var video = document.getElementById(camera.idImg + "_view")
        var canvas = document.createElement('canvas')
        canvas.width = video.width;
        canvas.height = video.height;
        canvas.getContext('2d').drawImage(video, 0, 0);
        var anchor = document.createElement("a");
        anchor.href = canvas.toDataURL();
        anchor.download = camera.idImg + "_view.jpg";
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
                                Camera: {camera.idImg}
                            </button>
                        </div>
                    ))
                }
            </div>
            <div className="MeasuresContainer">
                <div className="MedidasContainer">
                    <div className="MeasureContainer">
                        <div className="MeasureBox">
                            <div className="MeasureTextContainer">
                                <h1 className="MeasureText">
                                    Width
                                </h1>
                            </div>
                            <div className="MeasureValueContainer">
                                <h2 className="MeasureValue">
                                    {width}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="MeasureContainer">
                        <div className="MeasureBox">
                            <div className="MeasureTextContainer">
                                <h1 className="MeasureText">
                                    Height
                                </h1>
                            </div>
                            <div className="MeasureValueContainer">
                                <h2 className="MeasureValue">
                                    {height}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="MeasureContainer">
                        <div className="MeasureBox">
                            <div className="MeasureTextContainer">
                                <h1 className="MeasureText">
                                    Length
                                </h1>
                            </div>
                            <div className="MeasureValueContainer">
                                <h2 className="MeasureValue">
                                    {length}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}