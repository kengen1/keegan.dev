import React, { useState, useEffect } from 'react'
import './Title.scss'

const WebpageTitle = () => {
  const [currentColor, setCurrentColor] = useState('blue') // Initial color
  const [showCursor, setShowCursor] = useState(true) // Cursor blinking effect

  // Colors cycle through primary, secondary, tertiary, and warning colors
  const colors = ['hsl(241, 79%, 73%)', 'hsl(120, 79%, 50%)', 'hsl(0, 79%, 55%)', 'hsl(55, 90%, 60%)']

  useEffect(() => {
    let colorIndex = 0
    const colorInterval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length
      setCurrentColor(colors[colorIndex])
    }, 5000) // Change color every 5 seconds

    return () => clearInterval(colorInterval) // Cleanup on unmount
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev) // Toggle cursor visibility
    }, 500) // Cursor blinks every 500ms

    return () => clearInterval(cursorInterval) // Cleanup on unmount
  }, [])

  return (
    <div className="webpage-title">
      <span className="diamond" style={{ color: currentColor }}>♦</span> Keegan.dev
      <span className={`cursor ${showCursor ? 'visible' : ''}`}>_</span>
    </div>
  )
}

export default WebpageTitle
