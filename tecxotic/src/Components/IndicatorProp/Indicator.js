import React from "react";

export default function Indicator(props) {
    return (
        <img src={props.image} alt={props.alt} className={props.className} status={props.status} style={props.styles} />
    );
}