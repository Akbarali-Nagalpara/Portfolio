import { motion } from 'framer-motion'
import { ExternalLink, Github, Database, Server, Monitor } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Inventory Management System",
      description: "A comprehensive full-stack web application for managing inventory, products, and sales. Built with React frontend and Spring Boot backend, featuring real-time stock tracking, automated billing, and detailed reporting dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Spring Boot", "MySQL", "Bootstrap"],
      features: [
        "Product Management",
        "Stock Tracking",
        "Automated Billing",
        "Sales Reports",
        "User Authentication"
      ],
      liveDemo: "https://inventory-demo.com",
      github: "https://github.com/Akbarali-Nagalpara/Inventory-system",
      category: "Full Stack"
    },
    {
      title: "Billing & Sales Dashboard",
      description: "A modern web application for managing invoices, sales reports, and real-time stock updates. Features an intuitive dashboard with data visualization and comprehensive sales analytics.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Spring Boot", "MySQL", "Chart.js"],
      features: [
        "Invoice Management",
        "Sales Analytics",
        "Real-time Updates",
        "Data Visualization",
        "Export Reports"
      ],
      liveDemo: "https://billing-dashboard-demo.com",
      github: "https://github.com/Akbarali-Nagalpara/billing-dashboard",
      category: "Full Stack"
    },
    {
      title: "Personal Finance Tracker",
      description: "A web application to track personal expenses, income, and financial goals. Includes budget planning, expense categorization, and financial insights with interactive charts.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Spring Boot", "MySQL", "Chart.js"],
      features: [
        "Expense Tracking",
        "Budget Planning",
        "Financial Goals",
        "Category Management",
        "Monthly Reports"
      ],
      liveDemo: "https://finance-tracker-demo.com",
      github: "https://github.com/Akbarali-Nagalpara/finance-tracker",
      category: "Full Stack"
    }
  ]

  const getIcon = (category) => {
    switch (category) {
      case 'Full Stack':
        return <Server size={20} />
      case 'Frontend':
        return <Monitor size={20} />
      case 'Backend':
        return <Database size={20} />
      default:
        return <Server size={20} />
    }
  }

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">A showcase of my recent work and applications</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card-premium group overflow-hidden relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.3)"
              }}
            >
              {/* Circuit board pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`circuit-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M0 20h40M20 0v40" stroke="#3b82f6" strokeWidth="0.5" fill="none"/>
                      <circle cx="20" cy="20" r="2" fill="#3b82f6"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#circuit-${index})`}/>
                </svg>
              </div>
              <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl opacity-30">🚀</div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-xl text-gray-800 hover:bg-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-xl text-gray-800 hover:bg-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white">
                    {getIcon(project.category)}
                  </div>
                  <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{project.category}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-white/70 backdrop-blur-sm border border-white/30 rounded-lg text-sm font-medium text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-center inline-flex items-center justify-center space-x-2 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-center inline-flex items-center justify-center space-x-2 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects