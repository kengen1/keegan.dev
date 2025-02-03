import React, { useState } from 'react'
import { useGLTF, Text } from '@react-three/drei'

export default function Bonsai(props: JSX.IntrinsicElements['group']) {
  const { scene } = useGLTF('/models/bonsai.glb')
  const [isHovered, setIsHovered] = useState(false)

  return (
    <group {...props}>
      {/* Bonsai Model */}
      <primitive
        object={scene}
        castShadow
        receiveShadow={false}
        rotation={[0, Math.PI, 0]} // Rotate 180 degrees to face forward
      />

      {/* Hoverable 3D Text */}
      <Text
        position={[0, 1.2, 0]}
        fontSize={0.2}
        color={isHovered ? 'blue' : 'black'}
        anchorX="center"
        anchorY="middle"
        onPointerOver={() => {
          setIsHovered(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          setIsHovered(false)
          document.body.style.cursor = 'auto'
        }}
        onClick={() => window.open('https://your-link.com', '_blank')}
      >
        Visit my digital garden ➡
      </Text>
    </group>
  )
}
