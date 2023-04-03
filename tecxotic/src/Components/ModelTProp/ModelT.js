import React from "react";
import "./ModelT.css";

export default function ModelT() {
    return (
        <>
            <div className="modelTContainer">
                <div className="ModelTopContainer">
                    <div className="CanvasContainer">
                        <canvas className="ModelCanvas" width="500" height="500"></canvas>
                    </div>
                </div>
                <div className="ModelBottomContainer">
                    <div className="ModelBoxContainer">
                        <div className="ModelBox">
                            <div className="ModelboxTextContainer">
                                <h1 className="ModelboxText">
                                    Width
                                </h1>
                            </div>
                            <div className="ModelboxInputContainer">
                                <input className="ModelboxInput" type="number" placeholder="Width" min={0} />
                            </div>
                        </div>
                    </div>
                    <div className="ModelBoxContainer">
                        <div className="ModelBox">
                            <div className="ModelboxTextContainer">
                                <h1 className="ModelboxText">
                                    Height
                                </h1>
                            </div>
                            <div className="ModelboxInputContainer">
                                <input className="ModelboxInput" type="number" placeholder="Height" min={0} />
                            </div>
                        </div>
                    </div>
                    <div className="ModelBoxContainer">
                        <div className="ModelBox">
                            <div className="ModelboxTextContainer">
                                <h1 className="ModelboxText">
                                    Length
                                </h1>
                            </div>
                            <div className="ModelboxInputContainer">
                                <input className="ModelboxInput" type="number" placeholder="Length" min={0} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}