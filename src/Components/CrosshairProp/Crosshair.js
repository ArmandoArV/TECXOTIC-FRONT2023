import React,{useState,useEffect} from "react";
import "./Cross.css"

export default function Crosshair ({rotation}){
    return (
        <div className="crosshair" style={{ transform: `rotate(${rotation*-1}deg)` }}>
            <div className="crosshair-line" id="line-1"></div>
        </div>
    );
}
