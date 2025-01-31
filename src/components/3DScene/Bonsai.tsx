import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Bonsai(props: JSX.IntrinsicElements['group']) {
  const { scene } = useGLTF('/models/bonsai.glb')
  const groupRef = useRef(null)

  return <primitive object={scene} ref={groupRef} {...props} />
}
