import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-3 px-4 sm:px-6">
          <motion.div 
            className="flex items-center gap-3 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('#home')}
          >
            {/* Profile Photo */}
            <motion.div 
              className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-1 sm:ring-2 ring-blue-400/50 ring-offset-1 sm:ring-offset-2 ring-offset-white/80 group-hover:ring-2 sm:group-hover:ring-4 group-hover:ring-purple-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/profile.jpg" 
                alt="Ali Nagalpara" 
                className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
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
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg flex items-center justify-center font-mono" 
                style={{ display: 'flex' }}
              >
                AN
              </div>
              {/* Tech glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ 
                  boxShadow: [
                    "inset 0 0 0px rgba(59, 130, 246, 0)",
                    "inset 0 0 20px rgba(59, 130, 246, 0.4)", 
                    "inset 0 0 0px rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {/* Scanning line effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
                animate={{ 
                  y: [0, 48, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
            </motion.div>
            
            {/* Name with tech styling */}
            <motion.div
              className="text-lg sm:text-xl md:text-2xl font-bold text-gradient-light font-mono relative group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.8)"
              }}
            >
              &lt;Ali/&gt;
              {/* Scanning line effect */}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="text-gray-700 hover:text-gradient font-medium transition-all duration-300 relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden p-2 rounded-xl bg-white/50 backdrop-blur-sm border border-white/30 text-gray-700 shadow-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.nav 
        className={`md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-lg border-b border-white/20 shadow-xl ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={false}
        animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom py-4">
          {menuItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.href)
              }}
              className="block py-3 px-4 text-gray-700 hover:text-gradient hover:bg-white/50 rounded-lg font-medium transition-all duration-300"
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  )
}

export default Header