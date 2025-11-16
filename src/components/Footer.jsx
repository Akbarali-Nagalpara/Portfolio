import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  const socialLinks = [
    {
      href: "https://github.com/Akbarali-Nagalpara",
      icon: <Github size={20} />,
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/akbarali-nagalpara-5498aa262/",
      icon: <Linkedin size={20} />,
      label: "LinkedIn"
    },
    {
      href: "mailto:nagalparaakbarali03@gmail.com",
      icon: <Mail size={20} />,
      label: "Email"
    }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -left-20 w-32 h-32 bg-gradient-to-br from-indigo-400/15 to-pink-500/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Holographic grid overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <motion.div
            className="grid grid-cols-8 h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="border-r border-cyan-400/30"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </div>
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-12 sm:py-16 px-4 sm:px-6">
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Ali Nagalpara</h3>
            <p className="text-gray-300 leading-relaxed">
              Full-Stack Developer passionate about creating efficient, 
              scalable web applications using Java Spring Boot and React.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>{link.label}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} className="text-blue-400" />
                <span>nagalparaakbarali03@gmail.com</span>
              </p>
              <p className="flex items-center space-x-3 text-gray-300">
                <span className="text-blue-400">📱</span>
                <span>+91 72010 91900</span>
              </p>
              <p className="flex items-center space-x-3 text-gray-300">
                <span className="text-blue-400">🌍</span>
                <span>India</span>
              </p>
              <p className="flex items-center space-x-3 text-gray-300">
                <span className="text-green-400">💼</span>
                <span>Open for opportunities</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white mb-4">Let's Connect</h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              Interested in collaborating or discussing opportunities? 
              I'd love to hear from you!
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#contact')
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a Conversation</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="border-t border-white/10 py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-gray-300 flex items-center space-x-2">
              <span>© {currentYear} Ali Nagalpara. Made with</span>
              <motion.span
                className="text-red-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={16} fill="currentColor" />
              </motion.span>
              <span>and React</span>
            </p>
            
            <motion.button
              className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              title="Back to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer