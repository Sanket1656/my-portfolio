import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-auto pb-32 md:pb-12 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Social Icons for Mobile */}
        <div className="flex gap-8 mb-8 md:hidden">
          <a
            href="https://github.com/Sanket1656"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-indigo-400 transition-colors"
          >
            <FiGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/sanket-kanjariya-b1226435b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-indigo-400 transition-colors"
          >
            <FiLinkedin size={24} />
          </a>

          <a
            href="mailto:kanjariyasanket36@gmail.com"
            className="text-zinc-500 hover:text-cyan-400 transition-colors"
          >
            <FiMail size={24} />
          </a>
        </div>

        {/* Branding & Stack */}
        <div className="text-center mb-6">
          <h4 className="text-zinc-300 font-bold text-lg mb-2">Sanket Kanjariya</h4>
          <p className="text-zinc-500 font-medium text-sm tracking-wide mb-1">
            Built with React, Vite & Tailwind CSS
          </p>
          <p className="text-zinc-600 font-mono text-xs">
            Full Stack Developer • React • Django • Python
          </p>
        </div>

        {/* Copyright */}
        <p className="text-zinc-700 font-mono text-xs uppercase tracking-wider">
          © {new Date().getFullYear()} Sanket Kanjariya
        </p>

      </div>
    </footer>
  );
};

export default Footer;