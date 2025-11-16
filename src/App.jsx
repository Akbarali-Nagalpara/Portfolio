import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TechBackground from './components/TechBackground'
import TechCursor from './components/TechCursor'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-x-hidden cursor-auto sm:cursor-none">
      {/* Tech Cursor - Only on desktop */}
      <div className="hidden sm:block">
        <TechCursor />
      </div>
      
      {/* Tech Background */}
      <TechBackground />
      
      {/* Global Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-white/80 via-blue-50/60 to-purple-50/80 backdrop-blur-3xl z-10"></div>
      
      {/* Main App Content */}
      <div className="relative z-20">
        <Header />
        <main className="relative overflow-hidden">
          {/* Tech Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating Geometric Shapes */}
            <motion.div 
              className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            ></motion.div>
            <motion.div 
              className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-400/15 to-pink-500/15 rounded-full blur-3xl"
              animate={{ 
                y: [-50, 50, -50],
                scale: [0.8, 1.1, 0.8]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity 
              }}
            ></motion.div>
            <motion.div 
              className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-cyan-500/10 rounded-full blur-3xl"
              animate={{ 
                x: [-30, 30, -30],
                rotate: [0, -180, -360]
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity 
              }}
            ></motion.div>
          </div>
          
          {/* Main content */}
          <div className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Resume />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
