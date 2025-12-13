import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { Menu, X, Download } from "lucide-react"; // Ensure you have
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/project" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "About me", path: "/about" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-screen z-50 bg-slate-950 backdrop-blur-md border-b-2 border-gray-600 shadow-md py-2"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-end items-center">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative font-medium text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-purple-400"
                      : "text-white hover:text-purple-600 dark:hover:text-purple-400"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <motion.span
                      layout
                      initial={{ width: 0 }}
                      animate={{ width: isActive ? "100%" : 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-0 -bottom-1 h-0.5 bg-purple-600 dark:bg-purple-400"
                    />
                  </>
                )}
              </NavLink>
            </motion.li>
          ))}

          {/* Resume Button */}
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navLinks.length * 0.08 + 0.1 }}
          >
            <a
              href="/Muhammed Salman Khan.pdf"
              download="Muhammed Salman Khan.pdf"
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full text-sm font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-purple-500/20"
            >
              Resume <Download size={16} />
            </a>
          </motion.li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-700 dark:text-gray-200 transition-transform active:scale-90"
        >
          {isOpen ? <X size={22} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <motion.div
        initial={false}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className="lg:hidden left-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden"
      >
        <div className="flex flex-col items-center py-8 space-y-6">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-700 dark:text-white hover:text-purple-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navLinks.length * 0.07 + 0.1 }}
            href="/Muhammed Salman Khan.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-md active:scale-95"
          >
            Download CV <Download size={18} />
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
