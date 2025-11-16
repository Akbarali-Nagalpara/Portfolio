import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TechCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', updateMousePosition)
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .cursor-hover')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      >
        <motion.div
          className="w-4 h-4 bg-white rounded-full"
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        />
      </motion.div>

      {/* Trailing cursor */}
      <motion.div
        className="fixed pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
          mass: 0.5
        }}
      >
        <motion.div
          className="w-6 h-6 border-2 border-blue-400 rounded-full"
          animate={{
            scale: isHovering ? 2 : 1,
            rotate: isHovering ? 180 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="fixed pointer-events-none z-30"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          mass: 0.8
        }}
      >
        <motion.div
          className="w-10 h-10 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-md"
          animate={{
            scale: isHovering ? 3 : 1.5,
            opacity: isHovering ? 0.8 : 0.4,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25
          }}
        />
      </motion.div>
    </>
  )
}

export default TechCursor