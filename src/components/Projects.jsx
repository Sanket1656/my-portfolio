import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "University Bus Tracking System",
      description:
        "A real-time university bus tracking system developed during my internship. It allows students to track bus locations live using WebSockets, REST APIs, and an interactive map interface.",
      tech: ["Python", "Django", "Django REST API", "Redis", "WebSockets"],
      github: "https://github.com/Sanket1656",
      external: "#",
    },
    {
      title: "React Portfolio Website",
      description:
        "A modern responsive portfolio website built using React, Vite, and Tailwind CSS to showcase my projects, skills, and experience with smooth animations.",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Sanket1656",
      external: "#",
    },
    {
      title: "Weather App",
      description:
        "A weather dashboard that displays real-time weather information using a public API. Users can search cities and view current weather conditions.",
      tech: ["React", "JavaScript", "API Integration", "CSS"],
      github: "https://github.com/Sanket1656",
      external: "#",
    },
    {
      title: "Employee REST API",
      description:
        "A Django REST API project that manages employee data including salary filtering, experience-based queries, and CRUD operations.",
      tech: ["Python", "Django", "Django REST Framework", "SQLite"],
      github: "https://github.com/Sanket1656",
      external: "#",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="flex flex-col mb-16 space-y-4">
            <span className="text-indigo-400 uppercase tracking-widest text-xs font-bold text-left w-full block">Selected Work</span>
            <div className="flex items-center gap-6">
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 whitespace-nowrap">
                Projects I've Built
              </h2>
              <div className="w-full h-[1px] bg-zinc-800 hidden sm:block"></div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                className="group flex flex-col justify-between bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.15)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Hover Glow */}
                <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-cyan-500/0 opacity-0 group-hover:from-indigo-500/5 group-hover:to-cyan-500/10 transition-opacity duration-500 blur-lg -z-10"></div>
                
                <div>
                  {/* Icons */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-zinc-800/50 rounded-xl group-hover:bg-indigo-500/10 transition-colors">
                      <FiFolder className="text-3xl text-indigo-400" />
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-indigo-400 hover:scale-110 transition-all p-2"
                      >
                        <FiGithub size={22} />
                      </a>

                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-indigo-400 hover:scale-110 transition-all p-2"
                      >
                        <FiExternalLink size={22} />
                      </a>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-zinc-100 mb-4 group-hover:text-indigo-300 transition-colors">
                    <a href={project.external}>{project.title}</a>
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 font-light">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <ul className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="px-3 py-1 bg-zinc-800/50 text-zinc-300 text-xs font-mono rounded-full whitespace-nowrap border border-zinc-700/30">
                      {tech}
                    </li>
                  ))}
                </ul>
                
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;