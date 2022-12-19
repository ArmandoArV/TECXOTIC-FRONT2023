import React, { useState } from "react";
import styles from "./SliderComponent.css";

export default function SliderComponent() {
    const CustomRange = () => {
        const [value, setValue] = useState(50);
        return (
            <input
                onChange={(e) => {
                    setValue(parseInt(e.target.value));
                }}
                type = "range"
                min = {1}
                max = {100}
                className = "range"
                id = 'nyRange'
            />
        );
    }
}

