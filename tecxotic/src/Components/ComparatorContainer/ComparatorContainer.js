import React, { useState } from 'react';
import "./ComparatorContainer.css";
import CameraProp from "../CameraProp/CameraProp";

export default function ComparatorContainer() {
    const cameras = [
        {
            image: "http://218.45.5.57:80/SnapshotJPEG?Resolution=640x480&amp;Quality=Clarity&amp;1674619720",
            idImg: "Main1",
        },
        {
            image: "http://158.58.130.148/mjpg/video.mjpg",
            idImg: "Main1",
        }
    ];


    const [squares, setSquares] = useState(0);
    return (
        <>
            <div className="comparatorContainer">
                <div className="topContainer">
                    <div className="taskStartContainer">
                        <button className="taskButton">
                            Start Monitoring
                        </button>
                    </div>
                </div>
                <div className="topMediumContainer">
                    <div className="photoContainerLeft">
                        <div className="photoContainerLeftTop">
                            <div className="Frame">
                                <CameraProp
                                    image={cameras[0].image}
                                    idImg={cameras[0].idImg}
                                    styles={{ width: "95%", height: "90%", borderRadius: "20px", padding: "15px"}}
                                />
                            </div>
                        </div>
                        <div className="photoContainerLeftBottom">
                            <div className="ButtonCompareContainer">
                            </div>
                        </div>
                    </div>
                    <div className="photoContainerRight">
                        <div className="photoContainerRightTop">
                            <div className="Frame">
                                <CameraProp
                                    image={cameras[1].image}
                                    idImg={cameras[1].idImg}
                                    styles={{ width: "95%", height: "90%", borderRadius: "20px", padding: "15px" }}
                                />
                            </div>
                        </div>

                        <div className="photoContainerRightBottom">
                            <div className="ButtonCompareContainer">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottomContainer">
                    <div className="squaresBox">
                        <div className="squaresText">
                            <p>Number of squares: </p>
                        </div>
                        <div className="squaresNumber">
                            <p> {squares}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
