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
                    <button className="taskButton">
                        Start Monitoring
                    </button>
                </div>
                <div className="topMediumContainer">
                    <div className="photoContainerLeft">
                        <CameraProp
                            image={cameras[0].image}
                            idImg={cameras[0].idImg}
                            styles={{ width: "95%", height: "95%", borderRadius: "25px" }}
                        />
                    </div>
                    <div className="photoContainerRight">
                        <CameraProp
                            image={cameras[0].image}
                            idImg={cameras[0].idImg}
                            styles={{ width: "95%", height: "95%", borderRadius: "25px" }}
                        />
                    </div>
                </div>
                <div className="buttonContainer" >
                    <div className="leftButtonContainer"></div>
                    <div className="rightButtonContainer"></div>
                </div>
                <div className="bottomContainer">
                    <div className="squaresBox">
                        <p>Squares recovered: {squares}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
