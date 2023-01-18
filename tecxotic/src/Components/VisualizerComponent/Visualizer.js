import React from "react";
import styles from "./Visualizer.css";
import { Canvas } from "react-three-fiber";

export default function Visualizer() {
    return (
        <div className="Visualizer-container">
            <Canvas>
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="hotpink" />
                </mesh>
            </Canvas>
        </div>
    );
}