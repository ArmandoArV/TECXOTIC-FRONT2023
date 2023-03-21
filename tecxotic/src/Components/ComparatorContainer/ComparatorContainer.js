import React,{useState} from 'react';

export default function ComparatorContainer(){
    const [squares,setSquares] = useState(0);
    return(
        <>
            <div className="comparatorContainer">
                <div className="topContainer">
                </div>
                <div className="topMediumContainer"></div> 
                <div className="bottomContainer"></div>
                <div className="squaresBox">
                    <p>Squares recovered {squares}</p>
                </div>
            </div>
        </>
        );
        }