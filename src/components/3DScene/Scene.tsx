import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei'
import Macbook from './Macbook'
import Bonsai from './Bonsai'

export default function Scene() {
  return (
    <Canvas camera={{ position: [-20, 0, -15], fov: 55 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        {/* MacBook stays floating */}
        <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
          <Macbook />
        </group>

        {/* Bonsai positioned at ground level to the right of the MacBook */}
        <group rotation={[0, Math.PI, 0]} position={[-8, -2.5, -5]} scale={[2, 2, 2]}>
          <Bonsai />
        </group>

        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={5.5} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
    </Canvas>
  )
}
