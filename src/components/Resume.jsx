import { motion } from 'framer-motion'
import { Download, Eye, FileText, Award, Briefcase, GraduationCap } from 'lucide-react'

const Resume = () => {
  const resumeHighlights = [
    {
      icon: <GraduationCap size={24} />,
      title: "Education",
      items: [
        "Master of Computer Applications (MCA) - In Progress",
        "Strong foundation in Computer Science and Software Development",
        "Relevant coursework in Data Structures, Algorithms, and Web Development"
      ]
    },
    {
      icon: <Briefcase size={24} />,
      title: "Experience", 
      items: [
        "Full-Stack Development with Java Spring Boot and React",
        "Built multiple web applications with database integration",
        "Experience with RESTful API design and implementation"
      ]
    },
    {
      icon: <Award size={24} />,
      title: "Achievements",
      items: [
        "Developed 3+ full-stack applications",
        "Strong problem-solving and analytical skills",
        "Passionate about clean code and best practices"
      ]
    }
  ]

  return (
    <section id="resume" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Holographic grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-6 sm:grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="border-r border-cyan-400"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-light text-center mb-6 font-mono relative"
            whileHover={{
              textShadow: [
                "0 0 0px #00ffff",
                "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff",
                "0 0 0px #00ffff"
              ]
            }}
            transition={{ duration: 0.5 }}
          >
            &lt;Resume.exe/&gt;
            {/* Scanning beam */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          </motion.h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Download my resume or explore my professional background</p>
        </motion.div>
        
        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Resume Preview Card */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card-premium text-center w-full max-w-md mx-auto relative overflow-hidden">
                {/* Tech border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-white shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FileText size={48} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Ali Nagalpara</h3>
                  <p className="text-lg font-medium text-gradient-light mb-2">Full-Stack Developer</p>
                  <p className="text-sm text-gray-600 mb-8 font-mono">Java Spring Boot | React | MCA Student</p>
              
                  <div className="space-y-4">
                    <motion.a
                      href="https://drive.google.com/file/d/1v5QLWO2BQEcN3NROI2cL_3RaFpY5S179/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye size={20} />
                      <span>View Resume</span>
                    </motion.a>
                    
                    <motion.a
                      href="/resume.pdf"
                      download="Akbarali_Resume.pdf"
                      className="btn-secondary w-full flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download size={20} />
                      <span>Download PDF</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Resume Highlights */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold text-gradient-light text-center lg:text-left mb-6">Professional Highlights</h4>
              
              <div className="space-y-6">
                {resumeHighlights.map((section, index) => (
                  <motion.div
                    key={index}
                    className="card-glass group hover:bg-white/60 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {section.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">{section.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="card-premium max-w-4xl mx-auto relative overflow-hidden">
            {/* Tech glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-purple-500/5 to-pink-500/5"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-gradient-light mb-4 font-mono">&lt;Let's Connect/&gt;</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Ready to build something amazing together? I'm always excited about new opportunities and innovative projects.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <motion.a
                  href="#contact"
                  className="btn-primary inline-flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <span>Get In Touch</span>
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/akbarali-nagalpara-5498aa262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Connect on LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume