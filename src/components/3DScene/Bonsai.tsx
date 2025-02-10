import React, { useState } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { Button } from '../Button'
import { FaExternalLinkAlt } from 'react-icons/fa'
import styles from './Bonsai.module.scss'
import portfolio from '../../../content/portfolio'

export default function Bonsai(props: JSX.IntrinsicElements['group']) {
  const { scene } = useGLTF('/models/bonsai.glb')
  const [isHovered, setIsHovered] = useState(false)

  const digitalGardenProject = portfolio.projects.content.find(
    (project) => project.title === 'Digital Garden'
  )
  const digitalGardenUrl = digitalGardenProject?.demoUrl || '#'

  return (
    <group {...props}>
      {/* Bonsai Model */}
      <primitive
        object={scene}
        castShadow
        receiveShadow={false}
        rotation={[0, Math.PI, 0]} // Rotate 180 degrees to face forward
      />

      {/* Floating Button */}
      <Html position={[-1, 1.5, 0.5]} className={styles.buttonContainer}>
        <div
          onMouseEnter={() => {
            setIsHovered(true)
            document.body.style.cursor = 'pointer'
          }}
          onMouseLeave={() => {
            setIsHovered(false)
            document.body.style.cursor = 'auto'
          }}
        >
          <Button
            text="Visit my digital garden"
            icon={<FaExternalLinkAlt />}
            iconPosition="left"
            externalUrl={digitalGardenUrl}
          />
        </div>
      </Html>
    </group>
  )
}
