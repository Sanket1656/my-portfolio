import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col justify-center items-start text-left relative mt-4 lg:mt-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl z-10"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium mb-8 shrink-0 hover:bg-zinc-800 transition-colors cursor-pointer">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new opportunities
        </div>

        {/* Intro */}
        <h1 className="text-zinc-400 text-lg md:text-xl font-medium tracking-wide mb-3">
          Hi, my name is
        </h1>

        {/* Name */}
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 text-zinc-100 drop-shadow-sm">
          Sanket Kanjariya.
        </h2>

        {/* Role with Gradient */}
        <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-violet-400 to-cyan-500">
          I craft digital experiences.
        </h3>

        {/* Description */}
        <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
          I am a <strong>Full Stack Web Developer</strong> specializing in building exceptionally fast, 
          accessible, and modern digital products using <span className="text-violet-400 border-b border-violet-400/30">React</span> and <span className="text-violet-400 border-b border-violet-400/30">Django</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-baseline justify-start gap-6">
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-zinc-100 text-zinc-950 rounded-full font-semibold hover:bg-white transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          {/* Social Icons row beside the button */}
          <div className="flex gap-5 px-2 text-zinc-400 pb-2">
            <a href="https://github.com/Sanket1656" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-transform hover:-translate-y-1">
              <FiGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/sanket-kanjariya-b1226435b/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-transform hover:-translate-y-1">
              <FiLinkedin size={22} />
            </a>
            <a href="mailto:kanjariyasanket36@gmail.com" className="hover:text-cyan-400 transition-transform hover:-translate-y-1">
              <FiMail size={22} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;