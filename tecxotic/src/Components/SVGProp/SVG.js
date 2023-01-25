import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


const MySVG = ({ name,color }) => {
  return (
    <FontAwesomeIcon icon={name} style={{ color: color }} />
  );
};

export default MySVG;
