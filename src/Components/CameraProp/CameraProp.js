import React from "react";
import "./CameraProp.css";
export default function CameraProp(props) {
    return(
        <img src={props.image} alt="camera" id={props.idImg} style = {props.styles} />
    );
}

