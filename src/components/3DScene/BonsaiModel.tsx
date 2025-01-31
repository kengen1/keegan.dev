// src/components/3DScene/BonsaiModel.tsx
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment } from '@react-three/drei'
import styles from './BonsaiModel.module.scss'
import * as THREE from 'three'

function Bonsai() {
  const { scene } = useGLTF('/models/bonsai.glb')
  const groupRef = useRef<THREE.Group>(null!)

  // Rotate the model on its y-axis
  useFrame((state, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.5 // Adjust rotation speed as needed
  })

  return <primitive object={scene} ref={groupRef} />
}

export default function BonsaiModel() {
  return (
    <div className={styles.digitalGardenContainer}>
      <div className={styles.bonsaiCanvas}>
        <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <directionalLight intensity={1} position={[5, 10, 5]} />
          <Suspense fallback={null}>
            <Bonsai />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </div>

      {/* If you still want a link, it will float atop the canvas */}
      <a
        className={styles.linkText}
        href="https://example.com"
        target="_blank"
        rel="noreferrer"
      >
        Visit my digital garden &rarr;
      </a>
    </div>
  )
}
