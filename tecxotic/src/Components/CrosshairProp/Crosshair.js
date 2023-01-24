import React,{useState,useEffect} from "react";
import "./Cross.css"

export default function Crosshair (props){
    const [rotation, setRotation] = useState(props.rotation || 0);

    useEffect(() => {
        if(props.updateRotation) {
          const interval = setInterval(() => {
            setRotation(props.updateRotation);
          }, 10);
          return () => clearInterval(interval);
        }
    }, [props.updateRotation]);

    return (
        <div className="crosshair" style={{ transform: `rotate(${rotation}deg)` }}>
            <div className="crosshair-line" id="line-1"></div>
        </div>
    );
}
