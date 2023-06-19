import React, {useState} from "react";
import {useGLTF, Stage, PresentationControls} from "@react-three/drei";

function Model(props) {
    const {scene} = useGLTF("/3DModel_LowPoly.glb");
    return <primitive object={scene} {...props} />
}

export default Model;