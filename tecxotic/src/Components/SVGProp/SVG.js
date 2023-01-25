import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "./SVG.css"

library.add(fas)


const MySVG = ({ name,color,nameClass }) => {
  return (
    <FontAwesomeIcon icon={name} style={{ color: color }} className={nameClass}/>
  );
};

export default MySVG;
