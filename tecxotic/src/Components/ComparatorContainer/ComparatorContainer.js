import React, { useState } from 'react';
import "./ComparatorContainer.css";

export default function ComparatorContainer() {
    const [imageUrls, setImageUrls] = useState(0);

    const handleFileUpload = (file) => {
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            setImageUrls([...imageUrls, reader.result]);
        });

        reader.readAsDataURL(file);
    };


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

                    </div>
                    <div className="photoContainerRight">
                        
                    </div>
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
