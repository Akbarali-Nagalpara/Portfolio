import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, ArrowDown, Sparkles, Eye } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const roles = [
    "Full-Stack Developer",
    "Java Spring Boot Expert", 
    "React Developer",
    "MCA Student"
  ]

  useEffect(() => {
    const currentRole = roles[currentIndex]
    let charIndex = 0
    
    const typing = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typing)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typing)
  }, [currentIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex items-center space-x-2 text-indigo-600">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="text-lg font-medium">Welcome to my portfolio</span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              Hi, I'm <span className="text-gradient">Ali Nagalpara</span>
            </motion.h1>
          
            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 relative"
              variants={itemVariants}
            >
              <span className="inline-flex items-center">
                <span className="text-gradient-light font-mono tracking-wider">{displayText}</span>
                <motion.span 
                  className="ml-1 text-indigo-500"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >|</motion.span>
              </span>
              {/* Code brackets animation */}
              <motion.div 
                className="absolute -left-4 top-0 text-blue-400 font-mono text-lg opacity-30"
                animate={{ x: [-10, 0, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >{"<"}</motion.div>
              <motion.div 
                className="absolute -right-4 top-0 text-purple-400 font-mono text-lg opacity-30"
                animate={{ x: [10, 0, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >{"/>"}</motion.div>
            </motion.h2>
          
            <motion.p
              className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl"
              variants={itemVariants}
            >
              MCA Student passionate about building scalable, user-friendly, and efficient web applications. 
              Specializing in modern web technologies with a focus on performance and user experience.
            </motion.p>
          
            <motion.div
              className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">Available for opportunities</span>
              </div>
            </motion.div>
          
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center space-x-2 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </motion.a>
              
              <motion.a
                href="https://drive.google.com/file/d/1v5QLWO2BQEcN3NROI2cL_3RaFpY5S179/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center space-x-2 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={20} />
                <span>View Resume</span>
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download="Akbarali_Resume.pdf"
                className="btn-secondary inline-flex items-center space-x-2 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>Download PDF</span>
              </motion.a>
            </motion.div>
          
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.a
                href="https://github.com/Akbarali-Nagalpara"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl text-gray-700 hover:text-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/akbarali-nagalpara-5498aa262/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl text-gray-700 hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
              
              <motion.a
                href="mailto:nagalparaakbarali03@gmail.com"
                className="p-3 bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl text-gray-700 hover:text-purple-600 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        
          <motion.div
            className="flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative group">
              {/* Main profile photo container */}
              <motion.div 
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full relative overflow-hidden shadow-2xl mx-auto lg:mx-0"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: [
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    "0 25px 50px -12px rgba(59, 130, 246, 0.4)",
                    "0 25px 50px -12px rgba(147, 51, 234, 0.4)",
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {/* Static gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-full bg-white/95 backdrop-blur-lg overflow-hidden">
                    <img 
                      src="/profile.jpg" 
                      alt="Ali Nagalpara" 
                      className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        e.target.style.display = 'none'
                        e.target.nextElementSibling.style.display = 'flex'
                      }}
                      onLoad={(e) => {
                        // Hide fallback when image loads successfully
                        e.target.nextElementSibling.style.display = 'none'
                      }}
                    />
                    {/* Fallback initials */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-6xl lg:text-7xl flex items-center justify-center font-mono" 
                      style={{ display: 'flex' }}
                    >
                      AN
                    </div>
                  </div>
                </div>

                {/* Tech overlay effects */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Scanning rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-cyan-400/50"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-purple-400/50"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>

              {/* Floating tech elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-mono text-xs font-bold shadow-lg"
                animate={{ 
                  y: [-10, 10, -10]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                &lt;/&gt;
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-mono text-sm font-bold shadow-lg"
                animate={{ 
                  x: [-15, 15, -15]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                {}
              </motion.div>
              
              <motion.div 
                className="absolute top-1/4 -left-8 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-mono text-xs font-bold shadow-lg"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                []
              </motion.div>
              
              <motion.div 
                className="absolute bottom-1/3 -right-8 w-7 h-7 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full flex items-center justify-center text-white font-mono text-xs font-bold shadow-lg"
                animate={{ 
                  y: [-8, 8, -8]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                ()
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -right-12 w-5 h-5 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center text-white font-mono text-xs font-bold shadow-lg"
                animate={{ 
                  x: [0, 20, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                &&
              </motion.div>
              
              {/* Data particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  style={{
                    top: `${20 + (i * 15)}%`,
                    left: `${10 + (i * 12)}%`
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ y: 5 }}
      >
        <button 
          onClick={scrollToAbout} 
          className="p-3 bg-white/60 backdrop-blur-sm border border-white/30 rounded-full text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
        >
          <ArrowDown size={24} />
        </button>
      </motion.div>
    </section>
  )
}

export default Hero