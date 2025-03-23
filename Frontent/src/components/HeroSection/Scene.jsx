import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Scene = () => {
  const tex = useTexture("/EarthModel.jpg");
  const earthRef = useRef();
  const { invalidate } = useThree();
  // Slowly rotate the Earth
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
      invalidate(); 
    }
  });

  return (
    <mesh ref={earthRef} scale={1}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={tex} side={THREE.FrontSide} />
    </mesh>
  );
};

export default Scene;
