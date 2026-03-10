import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight">
              About Me
            </h2>
            <div className="flex-grow h-[1px] bg-zinc-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            
            {/* Text Content */}
            <div className="md:col-span-3 text-zinc-400 space-y-6 text-lg leading-relaxed font-light">
              <p>
                Hello! My name is <span className="text-violet-400 font-medium">Sanket Kanjariya</span>. 
                I am a passionate <span className="text-violet-400">Full Stack Developer</span> who enjoys 
                building modern web applications and solving real-world problems using technology.
              </p>

              <p>
                My journey into web development started during my college years when I began learning 
                <span className="text-violet-400 font-medium"> HTML, CSS, JavaScript, and Python</span>. 
                Since then, I have developed multiple projects using modern frameworks like 
                <span className="text-violet-400 font-medium"> React.js and Django</span>.
              </p>

              <p>
                Recently, I completed a <span className="text-violet-400">4-month internship</span> where 
                I built a <strong className="text-zinc-200 font-medium">Real-Time University Bus Tracking System</strong> 
                using Python, Django, REST API, Redis, and WebSockets. This project helps students track 
                buses in real time and improves transportation efficiency.
              </p>

              <p>
                I am always eager to learn new technologies, improve my development skills, and build 
                scalable applications that create real impact.
              </p>
            </div>

            {/* Profile Image / Avatar Container */}
            <div className="md:col-span-2 relative group w-full max-w-sm mx-auto">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800/50 shadow-2xl z-10 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                
                {/* Avatar fallback */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-zinc-900 to-zinc-800">
                  <span className="text-8xl font-black bg-clip-text text-transparent bg-gradient-to-b from-violet-500/20 to-violet-500/10 select-none">
                    SK
                  </span>
                </div>

                {/* If you want to add your image later */}
                {/* 
                <img
                  src="/profile.jpg"
                  alt="Sanket Kanjariya"
                  className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                />
                */}
                
                {/* Inner Glow Overlay */}
                <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none"></div>
              </div>

              {/* Decorative Background Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-violet-500/20 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;