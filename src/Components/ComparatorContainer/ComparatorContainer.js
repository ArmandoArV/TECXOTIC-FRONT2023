import React, { useState } from 'react';
import "./ComparatorContainer.css";
import CameraProp from "../CameraProp/CameraProp";
import FileUploader from '../UploadFileButton/UploadFile';


export default function ComparatorContainer() {
    const cameras = [
        {
            image: "http://192.168.144.249:8080/video1",
            idImg: "Main1",
        },
        {
            image: "http://192.168.144.249:8080/video1",
            idImg: "Main1",
        }
    ];

    const [sampleA, setSampleA] = useState(null);
    const [sampleB, setSampleB] = useState(null);
    const [squares, setSquares] = useState(0);

    const handleFileUploadSampleA = (uploadedFile) => {
        setSampleA(URL.createObjectURL(uploadedFile));
    };

    const handleFileUploadSampleB = (uploadedFile) => {
        setSampleB(URL.createObjectURL(uploadedFile));
    };


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
                                <img className="imageSample" src={sampleA} alt="sampleA" />
                            </div>
                        </div>
                        <div className="photoContainerLeftBottom">
                            <div className="ButtonCompareContainer">
                                <FileUploader onUpload={handleFileUploadSampleA} />
                            </div>
                        </div>
                    </div>
                    <div className="photoContainerRight">
                        <div className="photoContainerRightTop">
                            <div className="Frame">
                                <img className='imageSample' src={sampleB} alt='sampleB' />
                            </div>
                        </div>
                        <div className="photoContainerRightBottom">
                            <div className="ButtonCompareContainer">
                                <FileUploader onUpload={handleFileUploadSampleB} />
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
