import React, { useState, useEffect } from 'react'
import './Title.scss'

const WebpageTitle = () => {
  const [currentColor, setCurrentColor] = useState('blue') // Initial color

  // Colors cycle through primary, secondary, tertiary, and warning colors
  const colors = ['hsl(241, 79%, 73%)', 'hsl(120, 79%, 50%)', 'hsl(0, 79%, 55%)', 'hsl(55, 90%, 60%)']

  useEffect(() => {
    let colorIndex = 0
    const interval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length
      setCurrentColor(colors[colorIndex])
    }, 1000) // Change color every second

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  return (
    <div className="webpage-title">
      <span className="diamond" style={{ color: currentColor }}>♦</span> keegan.dev
    </div>
  )
}

export default WebpageTitle
