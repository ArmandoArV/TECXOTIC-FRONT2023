import React from "react";

export default function IndicatorsProp(indicator) {
    return(
        <img className={indicator.classImg} src={indicator.indImg} alt={indicator.altImg} />
    );
}