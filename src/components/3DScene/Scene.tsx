import React, { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Environment, ContactShadows } from "@react-three/drei";
import Macbook from "./Mac/Macbook";
import Bonsai from "./Bonsai/Bonsai";

function AdaptiveCamera() {
  const { camera } = useThree();

  useEffect(() => {
    const updateFov = () => {
      if (camera instanceof THREE.PerspectiveCamera) {
        const width = window.innerWidth;
        let newFov = 65;

        if (width > 1400) {
          newFov = 60;  // Large screens
        } else if (width > 1200) {
          newFov = 75;  // Slight zoom-out
        } else if (width > 900) {
          newFov = 90;  // Medium screens
        } else if (width > 700) {
          newFov = 100; // Smaller screens
        } else {
          newFov = 120; // Smallest screens
        }

        camera.fov = newFov;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener("resize", updateFov);
    updateFov(); // Set initial FOV

    return () => {
      window.removeEventListener("resize", updateFov);
    };
  }, [camera]);

  return null; // This component only modifies the camera
}

export default function Scene() {
  const dimensions = {
    scale: 1,
    cameraPosition: [0, 0, 20] as [number, number, number],
    bonsaiScale: [3, 3, 3] as [number, number, number],
    bonsaiPosition: [11, -3.3, 0] as [number, number, number],
    macbookScale: 1.15,
    macbookPosition: [0, 1, 0] as [number, number, number],
  };

  return (
    <Canvas dpr={[1,2]} camera={{ position: dimensions.cameraPosition, fov: 65 }}>
      <AdaptiveCamera /> {/* Dynamically updates FOV at runtime */}
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group scale={[dimensions.scale, dimensions.scale, dimensions.scale]}>
          <Macbook scale={dimensions.macbookScale} position={dimensions.macbookPosition} />
          <Bonsai scale={dimensions.bonsaiScale} position={dimensions.bonsaiPosition} />
          <Environment preset="city" />
        </group>
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={5.5} />
    </Canvas>
  );
}
