import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Scene from "./Scene";

const SectionPart = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      frameloop="always"
      className="w-full h-full"
    >
      {/* Brighter lighting */}
      <ambientLight intensity={2} />
      <directionalLight
        intensity={2}
        position={[3, 3, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Load scene with fallback */}
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default SectionPart;
