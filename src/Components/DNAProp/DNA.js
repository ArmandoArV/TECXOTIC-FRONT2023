import React, { useState } from "react";
import DNASample from "../DNASample/DNASample";

import "./DNA.css"

export default function DNA() {
    const [getDNASampleA, setDNASampleA] = useState("");
    const [getDNASampleB, setDNASampleB] = useState("");
    const [getDNASampleC, setDNASampleC] = useState("");

    return (
        <div className="dna-container">
            <div className="dna-top">
                <div className="dnaButtonContainer">
                    <button className="startSearchButton">Start Search</button>
                </div>
            </div>
            <div className="dna-bottom-Container">
                <DNASample
                    sampleName = "PEZ A"
                    getDNASample = {getDNASampleA}
                    setDNASample = {setDNASampleA}
                />
                <DNASample
                    sampleName = "PEZ B"
                    getDNASample = {getDNASampleB}
                    setDNASample = {setDNASampleB}
                />
                <DNASample
                    sampleName = "PEZ C"
                    getDNASample = {getDNASampleC}
                    setDNASample = {setDNASampleC}
                />
            </div>
        </div>
    );
}
