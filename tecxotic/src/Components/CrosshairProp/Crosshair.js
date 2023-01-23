import React,{useState,useEffect} from "react";
import styles from "./Cross.css"

export default function Crosshair (props){
    const [rotation, setRotation] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(rotation+1);
        }, 10);
        return () => clearInterval(interval);
    }, [rotation]);

    return (
        <div className="crosshair" style={{ transform: `rotate(${rotation}deg)` }}>
            <div className="crosshair-line" id="line-1"></div>
        </div>
    );
}