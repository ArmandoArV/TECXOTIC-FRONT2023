import React, { useState } from "react";
import { arrayOfFishes } from "../../Constants";
import "./DNA.css";
import { flask_address} from "../../Constants";

export default function DNA() {
  const [DNAInputA, setDNAInputA] = useState("");
  const [DNAInputB, setDNAInputB] = useState("");
  const [DNAInputC, setDNAInputC] = useState("");
  const [DNASampleImageA, setDNASampleImageA] = useState("");
  const [DNASampleNameA, setDNASampleNameA] = useState("FISH A");
  const [DNASampleImageB, setDNASampleImageB] = useState("");
  const [DNASampleNameB, setDNASampleNameB] = useState("FISH B");
  const [DNASampleImageC, setDNASampleImageC] = useState("");
  const [DNASampleNameC, setDNASampleNameC] = useState("FISH C");

  const handleDNAInputA = (e: {
        target: { value: React.SetStateAction<string> };
      }) => {
        setDNAInputA(e.target.value);
  };

  const handleDNAInputB = (e: {
        target: { value: React.SetStateAction<string> };
      }) => {
        setDNAInputB(e.target.value);
  };

  const handleDNAInputC = (e: {
        target: { value: React.SetStateAction<string> };
      }) => {
        setDNAInputC(e.target.value);
  };

  const handleSend = async () => {
    if(DNAInputA !== "" && DNAInputB !== "" && DNAInputC){
      const response = await fetch(flask_address + `/getCoralSpecies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          "1": DNAInputA,
          "2": DNAInputB,
          "3": DNAInputC
        }
      });
      if(response.ok){
        const data = await response.json();
        const fish1 = data.fish1.common_name;
        const fish2 = data.fish2.common_name;
        const fish3 = data.fish3.common_name;
        setDNASampleNameA(fish1);
        setDNASampleNameB(fish2);
        setDNASampleNameC(fish3);
        const fishIndex1 = arrayOfFishes.findIndex(e => e.scientific_name === data.fish1.scientific_name);
        const fishIndex2 = arrayOfFishes.findIndex(e => e.scientific_name === data.fish2.scientific_name);
        const fishIndex3 = arrayOfFishes.findIndex(e => e.scientific_name === data.fish3.scientific_name);
        setDNASampleImageA(arrayOfFishes[fishIndex1].image);
        setDNASampleImageB(arrayOfFishes[fishIndex2].image);
        setDNASampleImageC(arrayOfFishes[fishIndex3].image);
        setDNAInputA("");
        setDNAInputB("");
        setDNAInputC("");
      }
      else{
        alert('There was an error with the connection');
      }
    }
    else{
      alert('You need to fill the three DNA inputs');
    }
  }

  return (
    <>
      <div className="dna-container">
        <div className="dna-top">
          <div className="dnaButtonContainer">
            <button
              className="startSearchButton"
              onClick={handleSend}
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
                      src={DNASampleImageA}
                      alt="DNA Sample A"
                    />
                  </div>
                </div>
                <div className="rightDNAContainer">
                  <div className="topMatchedImgContainer"></div>
                  <div className="bottomSampleMatchedContainer">
                    <h1 className="sampleName">{DNASampleNameA}</h1>
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
                      src={DNASampleImageB}
                      alt="DNA Sample B"
                    />
                  </div>
                </div>
                <div className="rightDNAContainer">
                  <div className="topMatchedImgContainer"></div>
                  <div className="bottomSampleMatchedContainer">
                    <h1 className="sampleName">{DNASampleNameB}</h1>
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
                      src={DNASampleImageC}
                      alt="DNA Sample C"
                    />
                  </div>
                </div>
                <div className="rightDNAContainer">
                  <div className="topMatchedImgContainer"></div>
                  <div className="bottomSampleMatchedContainer">
                    <h1 className="sampleName">{DNASampleNameC}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottomAnalysisContainer">
              <input name="DNAA" type="text" placeholder={"DNA A"} title="Enter the DNA Sample A" onChange={handleDNAInputA} value={DNAInputA} autoComplete="true"></input>
              <input name="DNAB" type="text"  placeholder={"DNA B"} title="Enter the DNA Sample B" onChange={handleDNAInputB} value={DNAInputB}autoComplete="true"></input>
              <input name="DNAC" type="text" placeholder={"DNA C"} title="Enter the DNA Sample C" onChange={handleDNAInputC} value={DNAInputC} autoComplete="true"></input>
          </div>
        </div>
      </div>
    </>
  );
}
