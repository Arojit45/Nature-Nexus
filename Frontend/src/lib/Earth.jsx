import React from 'react'
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";

const Earth = () => {
  const geometry = new THREE.SphereGeometry(15, 32, 16); 
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          <geometry args={[geometry]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Earth
