import React, { useCallback } from "react";
import SVG from "../SVGProp/SVG";
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
        props.handleSelectedComponent(<Measure webcam={props.webcam}/>);
        break;
      case "eDNA":
        props.handleSelectedComponent(<DNA />);
        break;
      case "Comparator":
        props.handleSelectedComponent(<ComparatorContainer webcam={props.webcam}/>);
        break;
      default:
        props.handleSelectedComponent(<ComparatorContainer webcam={props.webcam}/>);
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