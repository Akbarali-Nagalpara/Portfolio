import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Bootstrap", level: 75 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Java", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "REST APIs", level: 80 }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 75 },
        { name: "VS Code", level: 85 },
        { name: "IntelliJ IDEA", level: 80 },
        { name: "Postman", level: 70 }
      ]
    }
  ]

  const techStack = [
    { name: "HTML5", logo: "🌐" },
    { name: "CSS3", logo: "🎨" },
    { name: "JavaScript", logo: "⚡" },
    { name: "React", logo: "⚛️" },
    { name: "Java", logo: "☕" },
    { name: "Spring Boot", logo: "🍃" },
    { name: "MySQL", logo: "🗄️" },
    { name: "Git", logo: "📚" }
  ]

  return (
          <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Technologies and tools I work with</p>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-3xl font-bold text-gradient-light text-center mb-10 font-mono relative"
            whileHover={{
              textShadow: [
                "0 0 0px #00ff00",
                "0 0 10px #00ff00, 0 0 20px #00ff00",
                "0 0 0px #00ff00"
              ]
            }}
            transition={{ duration: 0.3 }}
          >
            &lt;Tech Stack/&gt;
            {/* Glitch lines */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent h-px"
              animate={{ 
                x: [-100, 300],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="card-glass flex flex-col items-center p-4 group hover:bg-white/60 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{tech.logo}</div>
                <span className="text-sm font-medium text-gray-700 text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills with Progress Bars */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="card-premium"
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * categoryIndex }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gradient-light mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * skillIndex }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                      <span className="text-sm font-medium text-indigo-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + 0.1 * skillIndex }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills