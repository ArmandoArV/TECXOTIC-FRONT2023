import React, { useState } from "react";
import "./Measure.css";

export default function Measure() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [length, setLength] = useState(0);
    const [startMeasure, setStartMeasure] = useState(false);

    return (
        <div className="measure-container">
            <div className="startMeasureContainer">
                <button className="startMeasureButton">Start Measure</button>
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