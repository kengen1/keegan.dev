import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import Macbook from "../Mac/Macbook";
import Bonsai from "./Bonsai";

export default function Scene() {
  const [scale, setScale] = useState(1);
  const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0, 0, 20]);
  const [bonsaiScale, setBonsaiScale] = useState<[number, number, number]>([3, 3, 3]);
  const [bonsaiPosition, setBonsaiPosition] = useState<[number, number, number]>([11, -3.3, 0]);

  useEffect(() => {
    const updateScene = () => {
      const width = window.innerWidth;

      if (width > 1200) {
        setScale(1.15);
        setCameraPosition([0, 0, 20]);
        setBonsaiPosition([11, -3.3, 0]); // Correct position for large screens
        setBonsaiScale([3, 3, 3]); // Larger scale for large screens
      } else if (width > 800) {
        setScale(0.8);
        setCameraPosition([0, 0, 25]);
        setBonsaiPosition([9, -3.6, 1]); // Adjusted position for medium screens
        setBonsaiScale([2.7, 2.7, 2.7]); // Adjusted scale for medium screens
      } else {
        setScale(0.6);
        setCameraPosition([0, 0, 30]);
        setBonsaiPosition([5, -5.5, 2]); // Adjusted position for small screens
        setBonsaiScale([2, 2, 2]); // Slightly smaller scale for small screens
      }
    };

    window.addEventListener("resize", updateScene);
    updateScene();

    return () => {
      window.removeEventListener("resize", updateScene);
    };
  }, []);

  return (
    <Canvas camera={{ position: cameraPosition, fov: 65 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        {/* Group containing the entire scene */}
        <group scale={[scale, scale, scale]}>
          {/* MacBook */}
          <group position={[0, 1, 0]}>
            <Macbook />
          </group>

          {/* Bonsai */}
          <group position={bonsaiPosition} scale={bonsaiScale}>
            <Bonsai />
          </group>

          <Environment preset="city" />
        </group>
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={5.5} />
    </Canvas>
  );
}
