import React, { useState } from "react";
import FileUploader from "../UploadFileButton/UploadFile";
import { arrayOfFishes } from "../../Constants";
import "./DNA.css";

export default function DNA() {
  const [getDNASampleA, setDNASampleA] = useState("");
  const [getDNASampleNameA, setDNASampleNameA] = useState("FISH A");
  const [getDNASampleB, setDNASampleB] = useState("");
  const [getDNASampleNameB, setDNASampleNameB] = useState("FISH B");
  const [getDNASampleC, setDNASampleC] = useState("");
  const [getDNASampleNameC, setDNASampleNameC] = useState("FISH C");
  const [getDNASamples, setDNASamples] = useState([
    getDNASampleA,
    getDNASampleB,
    getDNASampleC,
  ]);

  console.log("getDNASamples: ", getDNASamples);

  const classifyDNASample = (samples) => {
    samples.forEach((sample, index) => {
      const matchedFish = arrayOfFishes.find((fish) => fish.id === sample);
      if (matchedFish) {
        // const sampleStateSetter = `setDNASample${String.fromCharCode(65 + index)}`;
        // const nameStateSetter = `setDNASampleName${String.fromCharCode(65 + index)}`;

        setDNASamples((prevSamples) => {
          const updatedSamples = [...prevSamples];
          updatedSamples[index] = matchedFish.image;
          return updatedSamples;
        });

        setDNASamples((prevNames) => {
          const updatedNames = [...prevNames];
          updatedNames[index] = matchedFish.name;
          return updatedNames;
        });

        console.log("Matched Fish: ", matchedFish);
      }
    });
  };



  console.log("getDNASampleA: ", getDNASampleA);
  console.log("getDNASampleB: ", getDNASampleB);
  console.log("getDNASampleC: ", getDNASampleC);


  return (
    <>
      <div className="dna-container">
        <div className="dna-top">
          <div className="dnaButtonContainer">
            <button
              className="startSearchButton"
              onClick={() => classifyDNASample(getDNASamples)}
            >
              Start Search
            </button>
          </div>
        </div>
        <div className="dna-bottom-Container">
          <div className="DNAContainerFrame">
            <div className="dnaAnalysisContainer">
              <div className="topAnalysisContainer">
                <div className="leftDNAContainer">
                  <div className="sampleImgContainer">
                    <img
                      className="dnaImage"
                      src={getDNASampleA}
                      alt="DNA Sample A"
                    />
                  </div>
                </div>
                <div className="rightDNAContainer">
                  <div className="topMatchedImgContainer"></div>
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
                    <img
                      className="dnaImage"
                      src={getDNASampleB}
                      alt="DNA Sample B"
                    />
                  </div>
                </div>
                <div className="rightDNAContainer">
                  <div className="topMatchedImgContainer"></div>
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
                    <img
                      className="dnaImage"
                      src={getDNASampleC}
                      alt="DNA Sample C"
                    />
                  </div>
                </div>
                <div className="rightDNAContainer">
                  <div className="topMatchedImgContainer"></div>
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
