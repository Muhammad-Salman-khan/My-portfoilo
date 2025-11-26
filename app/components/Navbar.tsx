import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { Menu, X, Download } from "lucide-react"; // Ensure you have lucide-react installed

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
    <nav
      className={` max-w-screen z-50 transition-all duration-300 ${"bg-white/80 dark:bg-slate-950/80 backdrop-blur-md  border-b-2 border-gray-600 shadow-md py-2"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-end items-center">
        <ul className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative font-medium text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-600 dark:text-white hover:text-purple-600 dark:hover:text-purple-400"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-purple-600 dark:bg-purple-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 hover:w-full"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            </li>
          ))}

          {/* Call to Action Button */}
          <li>
            <a
              href="/Muhammed Salman Khan.pdf"
              download="Muhammed Salman Khan.pdf"
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full text-sm font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-purple-500/20"
            >
              <span>Resume</span>
              <Download size={16} />
            </a>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-700 dark:text-gray-200 transition-transform active:scale-90"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden  left-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-8 space-y-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
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
          ))}

          <a
            href="/Muhammed Salman Khan.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-md active:scale-95"
          >
            Download CV <Download size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
