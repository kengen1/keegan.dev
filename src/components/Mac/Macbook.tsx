import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import styles from "./Macbook.module.scss";
import TerminalWindow from "../Terminal/TerminalWindow";
import portfolio from "../../../content/portfolio";
import MacMenuBar from "./MacMenuBar";
import MacOsDock from "./MacOsDock";

interface GLTFResult {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.Material>;
}

export default function Macbook(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials } = useGLTF(
    "/models/mac-draco.glb"
  ) as unknown as GLTFResult;
  const [scale, setScale] = useState(1);

  useEffect(() => {
    let resizeTimeout: number;

    const updateScale = () => {
      cancelAnimationFrame(resizeTimeout);
      resizeTimeout = requestAnimationFrame(() => {
        const width = window.innerWidth;
        if (width > 1200) {
          setScale(1.05);
        } else if (width > 800) {
          setScale(0.8);
        } else {
          setScale(0.6);
        }
      });
    };

    window.addEventListener("resize", updateScale);
    updateScale();

    return () => {
      window.removeEventListener("resize", updateScale);
      cancelAnimationFrame(resizeTimeout);
    };
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 20,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 8) / 20,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-2 + Math.sin(t / 2)) / 2,
      0.1
    );
  });

  return (
    <group ref={group} scale={[scale, scale, scale]} {...props} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube008"].geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes["Cube008_1"].geometry}
          />
          <mesh geometry={nodes["Cube008_2"].geometry}>
          <Html className="content" rotation-x={-Math.PI / 2} position={[0, 0.05, -0.09]} transform occlude>
            <div className={styles.screenContainer}>
              <MacMenuBar />
              <div className={styles.innerContent}>
                  <TerminalWindow />
              </div>
              <div className={styles.dockContent}>
                  <MacOsDock />
                </div>
            </div>
          </Html>

          </mesh>
        </group>
      </group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube002"].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes["Cube002_1"].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
}
