import { useState, useEffect } from "react";
import { FiHome, FiUser, FiCode, FiLayers, FiMail, FiFileText } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("#hero");

  const navLinks = [
    { name: "Home", href: "#hero", icon: <FiHome size={18} /> },
    { name: "About", href: "#about", icon: <FiUser size={18} /> },
    { name: "Skills", href: "#skills", icon: <FiCode size={18} /> },
    { name: "Projects", href: "#projects", icon: <FiLayers size={18} /> },
    { name: "Contact", href: "#contact", icon: <FiMail size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
          current = "#" + section.getAttribute("id");
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:top-6 md:bottom-auto md:w-auto w-[90%] md:max-w-max">
      <nav className="flex items-center justify-between gap-1 md:gap-2 px-4 py-3 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-full shadow-2xl">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setActive(link.href)}
            className={`relative flex items-center justify-center p-3 rounded-full transition-all duration-300 ${
              active === link.href ? "text-indigo-400" : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
            }`}
            title={link.name}
          >
            {active === link.href && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-indigo-500/10 rounded-full border border-indigo-500/20"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.icon}</span>
            {/* Show labels only on larger screens */}
            <span className="hidden md:block relative z-10 ml-2 text-sm font-medium pr-1">
              {link.name}
            </span>
          </a>
        ))}
        
        <div className="w-px h-6 bg-zinc-700 mx-1 md:mx-2"></div>
        
        <a
          href="/resume.pdf"
          target="_blank"
          className="flex items-center justify-center p-3 text-zinc-400 hover:text-cyan-400 hover:bg-zinc-800 rounded-full transition-colors"
          title="Resume"
        >
          <FiFileText size={18} />
          <span className="hidden md:block ml-2 text-sm font-medium pr-1">Resume</span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;