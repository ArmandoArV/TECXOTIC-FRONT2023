import React, { useState} from 'react';
import { useParams } from "react-router-dom";
import { Canvas } from 'react-three-fiber';
import {Stage, PresentationControls} from "@react-three/drei";
import Model from "../../Components/Model/Model";
import "./Model3D.css";


export default function Model3D() {
    const {diameter} = useParams();
    const {height} = useParams();
    //const [diameter, setDiameter] = useState(0);
    //const [height, setHeight] = useState(0);


    return (
        <>
            <div className="container">
                <div>3D Model</div>
                <div className='inner-container'>
                    <div className='info'>Diameter: {diameter} cm</div>
                    <div className='info'>Height: {height} cm</div>
                </div>
            </div>
            <Canvas 
            dpr={[1,2]} 
            shadows camera={{fav: 0}}
            style={{"position": "absolute"}}
            >
                <PresentationControls 
                    speed={1.5} 
                    global zoom={0.5}
                    polar={[-0.1, Math.PI / 4]}
                >
                <Stage environment={null}>
                    <Model scale={0.01} />
                </Stage>
                </PresentationControls>
            </Canvas>
        </>
        
    );
}