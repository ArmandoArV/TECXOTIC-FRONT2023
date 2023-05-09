import React, { useCallback } from "react";
import SVG from "../SVGProp/SVG";
import ModelT from "../ModelTProp/ModelT";
import DNA from "../DNAProp/DNA";
import Measure from "../MeasureProp/Measure";
import ComparatorContainer from "../ComparatorContainer/ComparatorContainer";
import "./Lateral.css";

export default function LateralNavbar(props) {
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

  const handleSelectedButton = useCallback((button) => {
    switch (button.name) {
      case "Measure":
        props.handleSelectedComponent(<Measure />);
        break;
      case "3D Model":
        props.handleSelectedComponent(<ModelT />);
        break;
      case "eDNA":
        props.handleSelectedComponent(<DNA />);
        break;
      case "Comparator":
        props.handleSelectedComponent(<ComparatorContainer />);
        break;
      default:
        props.handleSelectedComponent(<ComparatorContainer />);
    }
  }, [props.handleSelectedComponent]);

  return (
    <div className="lateralNavbar">
      <div className="Buttons-container">
        {arrayOfButtons.map((button, index) => (
          <button
            className="button"
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