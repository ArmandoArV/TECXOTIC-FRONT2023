import React, { useState } from "react";
import FileUploader from "../UploadFileButton/UploadFile";
import "./DNA.css"


export default function DNA() {
    const [getDNASampleA, setDNASampleA] = useState("");
    const [getDNASampleNameA, setDNASampleNameA] = useState("PEZ A");
    const [getDNASampleB, setDNASampleB] = useState("");
    const [getDNASampleNameB, setDNASampleNameB] = useState("PEZ B");
    const [getDNASampleC, setDNASampleC] = useState("");
    const [getDNASampleNameC, setDNASampleNameC] = useState("PEZ C");
    const [getDNASamples, setDNASamples] = useState([getDNASampleA, getDNASampleB, getDNASampleC]);

    return (
        <>
            <div className="dna-container">
                <div className="dna-top">
                    <div className="dnaButtonContainer">
                        <button className="startSearchButton">Start Search</button>
                    </div>
                </div>
                <div className="dna-bottom-Container">
                    <div className="DNAContainerFrame">
                        <div className="dnaAnalysisContainer">
                            <div className="topAnalysisContainer">
                                <div className="leftDNAContainer">
                                    <div className="sampleImgContainer">
                                        <img className="dnaImage" src={getDNASampleA} alt="DNA Sample A" />
                                    </div>
                                </div>
                                <div className="rightDNAContainer">
                                    <div className="topMatchedImgContainer">
                                    </div>
                                    <div className="bottomSampleMatchedContainer">
                                        <h1 className="sampleName">{getDNASampleNameA}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="DNAContainerFrame">
                        <div className="dnaAnalysisContainer">
                            <div className="topAnalysisContainer">
                                <div className="leftDNAContainer">
                                    <div className="sampleImgContainer">
                                        <img className="dnaImage" src={getDNASampleB} alt="DNA Sample B" />
                                    </div>
                                </div>
                                <div className="rightDNAContainer">
                                    <div className="topMatchedImgContainer">
                                    </div>
                                    <div className="bottomSampleMatchedContainer">
                                        <h1 className="sampleName">{getDNASampleNameB}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="DNAContainerFrame">
                        <div className="dnaAnalysisContainer">
                            <div className="topAnalysisContainer">
                                <div className="leftDNAContainer">
                                    <div className="sampleImgContainer">
                                        <img className="dnaImage" src={getDNASampleC} alt="DNA Sample C" />
                                    </div>
                                </div>
                                <div className="rightDNAContainer">
                                    <div className="topMatchedImgContainer">
                                    </div>
                                    <div className="bottomSampleMatchedContainer">
                                        <h1 className="sampleName">{getDNASampleNameC}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottomAnalysisContainer">
                                <div className="fileUploaderContainer">
                                    <FileUploader onUpload={setDNASamples} />
                                </div>
                    </div>
                </div>

            </div>
        </>
    );
}