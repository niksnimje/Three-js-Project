
"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

export default function ThreeSceneWrapper() {
  return (
    <Canvas 
        camera={{ position: [0, 0, 600], fov: 65, near: 1, far: 10000 }}
        style={{ background: '#f0f0f0' }}
    >
        <ambientLight intensity={1.2} />
    
        <Text
          position={[0, 0, 0]}
          fontSize={50}
          color="#006699"
          anchorX="center"
          anchorY="middle"
        >
          Tech Samrajya
        </Text>
        
        <OrbitControls />
    </Canvas>
  );
}