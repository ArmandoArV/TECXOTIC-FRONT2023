import React, { useState } from "react";
import styles from "./SliderComponent.css";

export default function SliderComponent(props) {
    const [value, setValue] = useState(100);
    return (
        <input
        onChange={(e) => {
            const rangeVal = parseInt(e.target.value);
            setValue(rangeVal);
            props.getSliderValue(rangeVal)
            props.onChange(rangeVal);
        }}
        type="range"
        min={0}
        max={100}
        value={value}
        className="range"
        id="myRange"
    />
    );
}