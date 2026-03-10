import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-3xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Small heading */}
          <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-8 backdrop-blur-md">
            <span className="text-indigo-400 font-mono text-xs font-semibold tracking-widest uppercase">
              What's Next?
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-5xl md:text-7xl font-extrabold text-zinc-100 mb-8 tracking-tighter">
            Get In Touch
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-zinc-400 mb-12 leading-relaxed font-light mx-auto max-w-2xl">
            I’m currently open to internship and full-time opportunities in
            <strong className="text-zinc-200 font-medium"> Full Stack Development</strong>.
            If you have a project idea, collaboration, or job opportunity,
            feel free to reach out. I would love to connect with you!
          </p>

          {/* Email Button */}
          <a
            href="mailto:kanjariyasanket36@gmail.com"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-semibold transition-all overflow-hidden shadow-[0_0_40px_-15px_rgba(139,92,246,0.5)] hover:shadow-[0_0_60px_-15px_rgba(139,92,246,0.7)] hover:-translate-y-1"
          >
            <span className="relative z-10 text-lg">Say Hello</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          {/* Social Links Grid */}
          <div className="mt-20 pt-12 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-lg mx-auto">
            <a
              href="https://github.com/Sanket1656"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-800/80 transition-all group"
            >
              <span className="text-zinc-500 group-hover:text-indigo-400 font-medium mb-1 transition-colors">GitHub</span>
              <span className="text-zinc-600 text-sm group-hover:text-zinc-400 transition-colors">@Sanket1656</span>
            </a>

            <a
              href="https://linkedin.com/in/sanket-kanjariya-b1226435b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-800/80 transition-all group"
            >
              <span className="text-zinc-500 group-hover:text-indigo-400 font-medium mb-1 transition-colors">LinkedIn</span>
              <span className="text-zinc-600 text-sm group-hover:text-zinc-400 transition-colors">Connect</span>
            </a>

            <a
              href="mailto:kanjariyasanket36@gmail.com"
              className="flex flex-col items-center justify-center p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-cyan-500/50 hover:bg-zinc-800/80 transition-all group"
            >
              <span className="text-zinc-500 group-hover:text-cyan-400 font-medium mb-1 transition-colors">Email</span>
              <span className="text-zinc-600 text-sm group-hover:text-zinc-400 transition-colors">Send a message</span>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;