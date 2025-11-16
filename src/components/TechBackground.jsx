import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const TechBackground = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
    window.addEventListener('resize', generateParticles)
    return () => window.removeEventListener('resize', generateParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <motion.svg
          width="100%"
          height="100%"
          className="absolute inset-0"
          animate={{ opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </motion.svg>
      </div>

      {/* Floating Particles - Reduced for mobile */}
      {particles.slice(0, window.innerWidth < 768 ? 20 : 50).map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-blue-400 rounded-full"
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: particle.opacity
          }}
          animate={{
            y: [particle.y, particle.y - 100, particle.y],
            opacity: [particle.opacity, particle.opacity * 2, particle.opacity]
          }}
          transition={{
            duration: particle.speed * 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ width: particle.size, height: particle.size }}
        />
      ))}

      {/* Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.path
          d="M0,50 Q200,50 400,100 T800,150"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.path
          d="M100,200 Q300,200 500,250 T900,300"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop", delay: 1 }}
        />
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Data Streams */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
            style={{
              top: `${10 + i * 12}%`,
              width: "100%"
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Binary Rain - Reduced for mobile */}
      <div className="absolute inset-0">
        {[...Array(window.innerWidth < 768 ? 15 : 30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400/20 font-mono text-xs sm:text-sm select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 100}px`
            }}
            animate={{
              y: [0, window.innerHeight + 100],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        ))}
      </div>

      {/* Tech Symbols - Responsive sizing */}
      {["</>", "{}", "[]", "()", "&&", "||", "===", "!=="].map((symbol, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-200/10 font-mono text-2xl sm:text-4xl lg:text-6xl select-none"
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${20 + (i * 8)}%`
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.05, 0.2, 0.05]
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            delay: i * 0.5
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  )
}

export default TechBackground