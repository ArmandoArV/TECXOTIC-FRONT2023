import React, { useState } from 'react';
import "./ComparatorContainer.css";
import FileUploader from '../UploadFileButton/UploadFile';
import axios from 'axios';

function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[arr.length - 1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}

export default function ComparatorContainer(props) {

    const [sampleA, setSampleA] = useState(null);
    const [sampleB, setSampleB] = useState(null);
    const [fileA, setFileA] = useState();
    const [hasFileA, setHasFileA] = useState(false);
    const [fileB, setFileB] = useState();
    const [hasFileB, setHasFileB] = useState(false);
    const [squares, setSquares] = useState(0);

    const handleFileUploadSampleA = (uploadedFile) => {
        setFileA(uploadedFile);
        setHasFileA(true);
        setSampleA(URL.createObjectURL(uploadedFile));
    };

    const takePicture = () => {
        const imageSrc = props.webcam.current.getScreenshot();
        var file = dataURLtoFile(imageSrc, 'Comparator.png');
        setFileB(file);
        setHasFileB(true);
        setSampleB(URL.createObjectURL(file));
    }

    const handleSubmit = () => {
        if(hasFileA && hasFileB && fileA !== undefined && fileB !== undefined){
            const formData = new FormData();
            formData.append("fileA", fileA);
            formData.append("fileB", fileB);
        }
        else{
            alert('You need to upload the two required images')
        }
    }


    return (
        <>
            <div className="comparatorContainer">
                <div className="topContainer">
                    <div className="taskStartContainer">
                        <button className="taskButton" onClick={()=>{handleSubmit()}}>
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
                            <button className="taskButton" onClick={takePicture}>
                            Take photo
                            </button>
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
