import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaProjectDiagram, FaTools,
  FaRocket, FaCode, FaDatabase, FaMobile, FaServer, FaCloud
} from "react-icons/fa";
import { 
  SiReact, SiTailwindcss, SiSpringboot, SiPostgresql, SiMongodb,
  SiFirebase, SiMysql, SiHtml5, SiCss3, SiJavascript
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { HiMenuAlt3, HiX, HiSparkles } from "react-icons/hi";
import { BiCode, BiServer } from "react-icons/bi";
import { BsDatabase } from "react-icons/bs";

const Portfolio = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for cursor effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Skills data with categories
  const skillCategories = [
    {
      title: "Frontend",
      icon: BiCode,
      skills: [
        { name: "React.js", icon: "react", color: "from-blue-400 to-cyan-300", level: 90 },
        { name: "JavaScript", icon: "javascript", color: "from-yellow-400 to-orange-300", level: 85 },
        { name: "HTML5", icon: "html", color: "from-orange-500 to-red-400", level: 95 },
        { name: "CSS3", icon: "css", color: "from-blue-500 to-purple-400", level: 90 },
        { name: "Tailwind", icon: "tailwind", color: "from-cyan-400 to-blue-300", level: 88 }
      ]
    },
    {
      title: "Backend",
      icon: BiServer,
      skills: [
        { name: "Java", icon: "java", color: "from-orange-600 to-red-500", level: 92 },
        { name: "Spring Boot", icon: "spring", color: "from-green-500 to-emerald-400", level: 85 },
      ]
    },
    {
      title: "Database",
      icon: BsDatabase,
      skills: [
        { name: "PostgreSQL", icon: "postgres", color: "from-blue-600 to-indigo-500", level: 80 },
        { name: "MySQL", icon: "mysql", color: "from-blue-500 to-cyan-400", level: 82 },
        { name: "MongoDB", icon: "mongodb", color: "from-green-500 to-lime-400", level: 75 },
        { name: "Firebase", icon: "firebase", color: "from-yellow-500 to-orange-400", level: 78 }
      ]
    }
  ];

  const projects = [
    {
      id:1,
      title: "AI Resume Builder",
      image: "/api/placeholder/400/250",
      description: "Next-gen resume building platform with AI-powered suggestions and real-time preview.",
      technologies: ["React", "AI/ML", "Tailwind"],
      link: "https://resume-builder-skj.vercel.app/",
      github: "https://github.com/saurav-kumar-jha/Resume_Builder",
      category: "Web App"
    },
    {
      id:2,
      title: "Smart E-commerce Platform",
      image: "/api/placeholder/400/250", 
      description: "Full-stack e-commerce solution with advanced analytics and inventory management.",
      technologies: ["Spring Boot", "PostgreSQL", "React"],
      link: "https://stationary-shop-sigma.vercel.app/",
      github: "#",
      category: "E-commerce"
    },
    {
      id:3,
      title: "Modern Blogging Platform",
      image: "/api/placeholder/400/250",
      description: "Dynamic blogging platform with real-time collaboration and content management.",
      technologies: ["React", "Firebase", "Tailwind"],
      link: "https://blog2u.vercel.app/",
      github: "#",
      category: "Content Management"
    },
    {
      id:4,
      title: "Learning Management System (LMS)",
      image: "/api/placeholder/400/250",
      description: "A frontend-focused Learning Management System that provides free courses for students. Users can search, filter, enroll in courses, watch lessons, manage wishlists, and authenticate securely. Built to support teachers and learners with a modern Udemy-like experience.",
      technologies: ["React", "Tailwind CSS", "React Router", "Lucide Icons"],
      link: "https://lms-eight-peach.vercel.app/",
      github: "https://github.com/saurav-kumar-jha/LMS",
      category: "Education/LMS"
    }
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-50 opacity-50 blur-sm"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transition: "all 0.1s ease-out"
        }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            animate={{
              x: [0, Math.random() * window.innerWidth],
              y: [0, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: Math.random() * window.innerWidth,
              top: Math.random() * window.innerHeight,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Saurav Kumar Jha
            </motion.h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-2xl"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              whileTap={{ scale: 0.95 }}
            >
              {showMobileMenu ? <HiX /> : <HiMenuAlt3 />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-black/90 border-b border-white/10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="px-6 py-4 space-y-4">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              className="relative mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse blur-xl opacity-50" />
                <img
                  src="/api/placeholder/300/300"
                  alt="Saurav Kumar Jha"
                  className="relative w-72 h-72 rounded-full object-cover border-4 border-white/20 backdrop-blur-sm"
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-bounce" />
              </div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
              className="text-center lg:text-left space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-2">
                <motion.p 
                  className="text-xl text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Hello, I'm
                </motion.p>
                <motion.h1 
                  className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Saurav Kumar Jha
                </motion.h1>
                <motion.p 
                  className="text-2xl lg:text-3xl text-cyan-400 font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Full Stack Developer
                </motion.p>
              </div>

              <motion.p 
                className="text-lg text-gray-300 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Crafting digital experiences with modern technologies and creative solutions
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    <FaRocket /> View Projects
                  </span>
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-cyan-400 rounded-full font-semibold hover:bg-cyan-400/10 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </motion.button>
              </motion.div>

              {/* Tech Stack Preview */}
              <motion.div 
                className="flex flex-wrap gap-4 justify-center lg:justify-start pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                {[SiReact, SiJavascript, DiJava, SiSpringboot, SiPostgresql].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="text-2xl text-cyan-400" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-cyan-500/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Passionate Developer</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a dedicated Full Stack Developer with a passion for creating innovative web solutions. 
                  My journey in technology is driven by curiosity and a constant desire to learn and grow.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-blue-500/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Technical Excellence</h3>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in modern technologies like React.js, Spring Boot, and cloud platforms, 
                  focusing on creating scalable, efficient, and user-friendly applications.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10">
                <div className="absolute top-4 right-4">
                  <HiSparkles className="text-cyan-400 text-2xl animate-pulse" />
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">🎯 Problem Solver</h4>
                    <p className="text-gray-300 text-sm">Love tackling complex challenges with creative solutions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">🚀 Innovation Focused</h4>
                    <p className="text-gray-300 text-sm">Always exploring cutting-edge technologies and methodologies</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">🤝 Team Player</h4>
                    <p className="text-gray-300 text-sm">Collaborative approach to building exceptional products</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">📚 Continuous Learner</h4>
                    <p className="text-gray-300 text-sm">Committed to staying current with industry trends</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-br from-black/20 to-purple-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-purple-500/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500">
                      <category.icon className="text-xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="group/skill"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <skill.icon className={`text-xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`} />
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                        </div>
                        <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                          />
                        </div>
                        <div className="text-right text-xs text-gray-400 mt-1">
                          {skill.level}%
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative  rounded-2xl bg-gradient-to-br from-white/5 to-green-500/5 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/80 backdrop-blur-sm rounded-full text-xs font-semibold">
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-cyan-400 border border-cyan-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-center font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      className="p-2 border border-white/20 rounded-lg hover:border-white/40 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="text-xl" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-purple-900/20 to-black/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
            <p className="text-gray-300 mt-6 text-lg">
              Ready to bring your ideas to life? Let's collaborate!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaGithub, label: "GitHub", value: "saurav-kumar-jha", link: "https://github.com/saurav-kumar-jha" },
              { icon: FaLinkedin, label: "LinkedIn", value: "Connect", link: "https://linkedin.com/in/saurav-kumar-jha-76a773341" },
              { icon: FaEnvelope, label: "Email", value: "sauravkrjha614@gmail.com", link: "mailto:sauravkrjha614@gmail.com" }
            ].map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-pink-500/5 backdrop-blur-sm border border-white/10 hover:border-pink-400/50 transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="p-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 w-fit mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-pink-500/30 transition-all">
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                  {contact.label}
                </h3>
                <p className="text-gray-300 text-sm">
                  {contact.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Saurav Kumar Jha. Crafted with ❤️ and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;