import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiGit,
  SiHtml5,
  SiCss,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    { name: "Django", icon: SiDjango, color: "text-[#092E20]" },
    { name: "Git", icon: SiGit, color: "text-[#F05032]" },
    { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
    { name: "CSS3", icon: SiCss, color: "text-[#1572B6]" },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="flex flex-col items-center justify-center mb-16 space-y-4">
            <span className="text-indigo-400 uppercase tracking-widest text-xs font-bold">What I use</span>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-100">
              Technical Arsenal
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-4"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
                  viewport={{ once: true }}
                  className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center justify-center gap-6 overflow-hidden 
                             hover:border-indigo-500/50 hover:bg-zinc-800/50 transition-all shadow-xl hover:shadow-indigo-500/10"
                >
                  <Icon className={`text-6xl ${skill.color} drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-transform group-hover:scale-110 duration-300`} />

                  <h3 className="text-base font-medium text-zinc-300 transition-colors group-hover:text-zinc-50">
                    {skill.name}
                  </h3>
                  
                  {/* Subtle Top Inner Glow */}
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-700 group-hover:via-indigo-400 to-transparent transition-colors duration-500"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;