import React, { useState } from "react";
import "./Lateral.css";
import SVG from "../SVGProp/SVG";

export default function LateralNavbar() {
    const arrayOfButtons = [
        {
            name: "Leonardo",
            icon: "home",
        },
        {
            name: "Apurale con las cosas",
            icon: "about",
        },
    ];

    const [selectedButton, setSelectedButton] = useState(null);
    
    return (
        <>
            <div className="lateralNavbar">
                <div className="Buttons-container">
                    {arrayOfButtons.map((button, index) => (
                        <button 
                            className="button" 
                            key={index}
                            onClick={() => setSelectedButton(index)}
                        >
                            {button.name}
                            <SVG name={button.icon} />
                        </button>
                    ))}
                </div>
            </div>
            {selectedButton !== null && (
                <div className="menu">
                    <p className={selectedButton === 0 ? "showMenu" : ""}>
                        This is the menu for the Home button
                    </p>
                    <p className={selectedButton === 1 ? "showMenu" : ""}>
                        This is the menu for the About button
                    </p>
                </div>
            )}
        </>
    );
}
