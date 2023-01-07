import React, {useEffect, useMemo, useRef, useState} from 'react'
import {useLoader} from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import {useTexture} from "@react-three/drei";
import Textura from "../../Images/testTexture.jpg";
export default function(modelUrl) {
    /*
    const ref = useRef()
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.x += delta))
   */
    const obj = useLoader(OBJLoader, modelUrl);
    const texture = useTexture(Textura);

    const geometry = useMemo(() =>{

        let g;
        obj.traverse((child) => {
            if (child.isMesh) {
                g = child.geometry;

            }

        });
        return g;

    }, [obj]);

    return (
        <mesh geometry={geometry} scale={0.04}>
            <meshPhysicalMaterial map={texture}/>
        </mesh>
    )
}

/*
        <mesh
            {...modelUrl}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
 */