import React from 'react'

import FileUploader from "../UploadFileButton/UploadFile";

export default function DNASample(props) {
    let {
        sampleName, 
        getDNASample, 
        setDNASample
    } = props;
    return (
        <div className="DNAContainerFrame">
            <div className="dnaAnalysisContainer">
                <div className="topAnalysisContainer">
                    <div className="leftDNAContainer">
                        <div className="sampleImgContainer">
                            <img className="dnaImage" src={getDNASample} alt={`DNA Sample ${sampleName}`} />
                        </div>
                    </div>
                    <div className="rightDNAContainer">
                        <div className="topMatchedImgContainer">
                        </div>
                        <div className="bottomSampleMatchedContainer">
                            <h1 className="sampleName">{sampleName}</h1>
                        </div>
                    </div>
                </div>
                <div className="bottomAnalysisContainer">
                    <div className="fileUploaderContainer">
                        <FileUploader onUpload={setDNASample} />
                    </div>
                </div>
            </div>
        </div>
    )
}
