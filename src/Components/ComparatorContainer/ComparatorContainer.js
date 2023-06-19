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

    const takePicture = () => {
        const imageSrc = props.webcam.current.getScreenshot();
        var file = dataURLtoFile(imageSrc, 'Comparator.png');
        setSampleA(URL.createObjectURL(file));
        var a = document.createElement("a"); //Create <a>
        a.href = imageSrc; //Image Base64 Goes here
        a.download = "Comparator.png"; //File name Here
        a.click();
    }

    return (
        <>
            <div className="comparatorContainer">
                <div className="topMediumContainer">
                    <div className="photoContainerRight">
                        <div className="photoContainerRightTop">
                            <div className="Frame">
                                <img className='imageSample' src={sampleA} alt='sampleB' />
                            </div>
                        </div>
                        <div className="photoContainerRightBottom">
                            <button className="taskButton" onClick={takePicture}>
                            Take photo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
