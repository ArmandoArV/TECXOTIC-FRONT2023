import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function({ modelUrl }) {
    const containerRef = useRef();

    useEffect(() => {
        let scene, camera, renderer, model;

        const init = () => {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
            containerRef.current.appendChild(renderer.domElement);

            const loader = new GLTFLoader();
            loader.load(modelUrl, (gltf) => {
                model = gltf.scene;
                scene.add(model);
            });
        };

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        init();
        animate();
    }, [modelUrl]);

    return (
        <div ref={containerRef} style={{ width: '454px', height: '314px' }} />
    );
}

