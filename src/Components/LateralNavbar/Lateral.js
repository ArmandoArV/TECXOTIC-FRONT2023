import React, { useState, useCallback } from "react";
import SVG from "../SVGProp/SVG";
import ModelT from "../ModelTProp/ModelT";
import DNA from "../DNAProp/DNA";
import Measure from "../MeasureProp/Measure";
import ComparatorContainer from "../ComparatorContainer/ComparatorContainer";
import "./Lateral.css";

const arrayOfButtons = [
  {
    name: "Measure",
    icon: "ruler",
  },
  {
    name: "3D Model",
    icon: "folder-plus",
  },
  {
    name: "eDNA",
    icon: "flask",
  },
  {
    name: "Comparator",
    icon: "chart-bar",
  },
];

export default function LateralNavbar(props) {
  let { handleSelectedComponent } = props;
  const [activeTab, setActiveTab] = useState('')

  const handleSelectedButton = useCallback((button) => {
    setActiveTab(button.name);
    switch (button.name) {
      case "Measure":
        handleSelectedComponent(<Measure />);
        break;
      case "3D Model":
        handleSelectedComponent(<ModelT />);
        break;
      case "eDNA":
        handleSelectedComponent(<DNA />);
        break;
      case "Comparator":
        handleSelectedComponent(<ComparatorContainer />);
        break;
      default:
        handleSelectedComponent(<ComparatorContainer />);
    }
  }, [handleSelectedComponent]);

  return (
    <div className="lateralNavbar">
      <div className="Buttons-container">
        {arrayOfButtons.map((button, index) => (
          <button
            className={`button ${activeTab === button.name ? 'active' : ''}`}
            key={index}
            onClick={() => handleSelectedButton(button)}
          >
            {button.name}
            <SVG name={button.icon} style={{}} />
          </button>
        ))}
      </div>
    </div>
  );
}