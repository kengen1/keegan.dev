import React, { useState, useEffect } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { Button } from '../../Button'
import { FaExternalLinkAlt } from 'react-icons/fa'
import styles from './Bonsai.module.scss'
import portfolio from '../../../../content/portfolio'

interface BonsaiProps {
  scale: [number, number, number];
  position: [number, number, number];
}

export default function Bonsai({ scale, position }: BonsaiProps) {
  const { scene } = useGLTF('/models/bonsai.glb')

  const digitalGardenProject = portfolio.projects.content.find(
    (project) => project.title === 'Digital Garden'
  )
  const digitalGardenUrl = digitalGardenProject?.demoUrl || '#'

  // Track window width
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1100)
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Initialize on mount

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <group scale={scale} position={position}>
      <primitive object={scene} castShadow receiveShadow={false} rotation={[0, Math.PI, 0]} />
      <Html position={[-0.8, 1.6, 0.5]} className={styles.buttonContainer}>
        <Button 
          text={isSmallScreen ? "Visit" : "Visit my digital garden"} 
          icon={<FaExternalLinkAlt />} 
          iconPosition="left" 
          externalUrl={digitalGardenUrl} 
        />
      </Html>
    </group>
  )
}
