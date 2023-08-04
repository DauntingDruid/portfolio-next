import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

const CursorCustom = () => {
  //setting cursor position outside screen initial soo, it dosent appear as a static blob on load
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [cursorVariant, setCursorVariant] = useState('default')
  // console.log(mousePosition)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { pageX: x, pageY: y } = e
      setMousePosition({ 
        x:  e.clientX - 20,
        y:  e.clientY - 20
      })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  })

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    }
  }

  return (
      <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
      transition={{ mass:0.1, stiffness: 100, duration: 0.1 , velocity: 1000}}
      />
  )
}

export default CursorCustom