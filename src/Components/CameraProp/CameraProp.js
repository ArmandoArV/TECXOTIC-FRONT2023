import React from "react";
import "./CameraProp.css";

export default function CameraProp(props) {
  let { idImg, src, styles } = props;

  return (
    <img
        id= {`${idImg}_view`}
        src={src}
        alt={`${idImg} view`}
        style = {styles}
        crossOrigin="anonymous"
    />
    // <video
    //     id= {`${idImg}_view`}
    //     src={src}
    //     alt={`${idImg} view`}
    //     style = {styles}
    //     controls
    //     preload="auto"
    //     autoPlay
    // />
  );
}
