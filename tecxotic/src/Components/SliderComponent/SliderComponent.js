import React, { useState } from "react";
import styles from "./SliderComponent.css";

export default function SliderComponent() {
    const [value, setValue] = useState(50);
    return (
            <input
                onChange={(e) => {
                    const rangeVal = parseInt(e.target.value);
                    setValue(rangeVal);
                }}
                type="range"
                min={1}
                max={100}
                value={value}
                className="range"
                id="myRange"
            />
    );
}