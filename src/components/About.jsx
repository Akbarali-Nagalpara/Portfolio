import { motion } from 'framer-motion'
import { GraduationCap, Code, Target, Heart } from 'lucide-react'

const About = () => {
  const aboutCards = [
    {
      icon: <GraduationCap size={32} />,
      title: "Education",
      description: "Currently pursuing Master of Computer Applications (MCA), building strong foundations in computer science and software development."
    },
    {
      icon: <Code size={32} />,
      title: "Development",
      description: "Full-stack developer with expertise in Java Spring Boot for backend and React for frontend development."
    },
    {
      icon: <Target size={32} />,
      title: "Goals",
      description: "Seeking opportunities to apply my skills in real-world projects and grow as a professional developer."
    },
    {
      icon: <Heart size={32} />,
      title: "Passion",
      description: "Passionate about creating scalable, efficient, and user-friendly web applications that solve real problems."
    }
  ]

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get to know more about my background and interests</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card-premium">
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-gradient-light mb-6 font-mono relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "auto" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="inline-block overflow-hidden whitespace-nowrap"
                >
                  $ whoami --name="Ali Nagalpara"
                </motion.span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1"
                >
                  _
                </motion.span>
              </motion.h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I'm a dedicated Full-Stack Developer currently pursuing my Master of Computer Applications (MCA). 
                  My journey in technology started with a curiosity about how web applications work, which led me to 
                  dive deep into both frontend and backend development.
                </p>
                <p>
                  I specialize in <strong className="text-indigo-600">Java Spring Boot</strong> for backend development and <strong className="text-blue-600">React</strong> 
                  for creating dynamic, responsive user interfaces. I believe in writing clean, maintainable code 
                  and following best practices to deliver high-quality software solutions.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                  and staying updated with the latest trends in web development. I'm always eager to learn and 
                  take on new challenges that help me grow as a developer.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {aboutCards.map((card, index) => (
              <motion.div
                key={index}
                className="card-glass group hover:bg-white/60 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-16 h-16 mb-4 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3 text-center">{card.title}</h4>
                <p className="text-gray-600 text-center leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About