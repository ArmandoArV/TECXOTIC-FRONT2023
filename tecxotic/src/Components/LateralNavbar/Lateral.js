import React, { useState } from "react";
import SVG from "../SVGProp/SVG";
import ModelT from "../ModelTProp/ModelT";
import DNA from "../DNAProp/DNA";
import Comparator from "../ComparatorProp/Comparator";
import Measure from "../MeasureProp/Measure";
import "./Lateral.css";

export default function LateralNavbar() {
  const arrayOfButtons = [
    {
      name: "Measure ",
      icon: "ruler",
      component: Measure
    },
    {
      name: "3D Model ",
      icon: "folder-plus",
      component: ModelT
    },
    {
      name: "eDNA ",
      icon: "flask",
      component: DNA
    },
    {
      name: "Comparator ",
      icon: "chart-bar",
      component: Comparator
    }
  ];

  const [selectedButton, setSelectedButton] = useState(arrayOfButtons[0]);

  return (
    <>
      <div className="lateralNavbar">
        <div className="Buttons-container">
          {arrayOfButtons.map((button, index) => (
            <button
              className="button"
              key={index}
              onClick={() => setSelectedButton(button)}
            >
              {button.name}
              <SVG name={button.icon} style={{}} />
            </button>
          ))}
        </div>
        <div>
        {selectedButton.name === "Measure " ? (
          <Measure />
        ) : (
          React.createElement(selectedButton.component)
        )}
      </div>
      </div>
    </>
  );
}