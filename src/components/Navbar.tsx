import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Home, Info } from "lucide-react";

const navLinks = [
  { path: "/", label: "ECO-DESIGN", icon: <Home className="w-4 h-4" /> },
  { path: "/about", label: "ABOUT", icon: <Info className="w-4 h-4" /> },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-2 bg-white shadow-md" : "py-4 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl font-serif tracking-wide ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            GreenEnergy
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setActiveLink(link.path)}
                className={`relative px-2 py-1 font-medium text-sm tracking-wider transition-all duration-300
                  ${
                    isScrolled
                      ? "text-neutral-gray hover:text-primary"
                      : "text-white/80 hover:text-white"
                  }
                  ${activeLink === link.path ? "font-semibold" : ""}
                `}
              >
                <span className="relative">
                  {link.label}
                  {activeLink === link.path && (
                    <motion.span
                      layoutId="activeIndicator"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        isScrolled ? "bg-primary" : "bg-secondary"
                      }`}
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </span>
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-secondary text-white text-sm font-medium rounded-full
              hover:bg-secondary-light transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`w-6 h-6 ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              {isOpen ? <X /> : <Menu />}
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:hidden flex-col mt-4 rounded-xl ${
            isScrolled ? "bg-white shadow-lg" : "bg-black/20 backdrop-blur-sm"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -20,
          }}
          transition={{ duration: 0.2 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => {
                setActiveLink(link.path);
                setIsOpen(false);
              }}
              className={`px-6 py-3 transition-colors duration-200
                ${
                  activeLink === link.path
                    ? isScrolled
                      ? "bg-primary/5 text-primary"
                      : "bg-white/10 text-white"
                    : isScrolled
                    ? "text-neutral-gray hover:text-primary"
                    : "text-white/80 hover:text-white"
                }
                ${link.path === navLinks[0].path ? "rounded-t-xl" : ""}
                ${
                  link.path === navLinks[navLinks.length - 1].path
                    ? "rounded-b-xl"
                    : ""
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
