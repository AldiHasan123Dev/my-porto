
import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { motion } from "motion/react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <a href="#home" className="nav-logo" aria-label="Aldi Home">
        <span className="logo-icon">
          <Code2 size={23} />
        </span>
        <span>
          ALDI<span className="accent-text">.DEV</span>
        </span>
      </a>

      <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#contact"
          className="nav-contact"
          onClick={() => setMenuOpen(false)}
        >
          Let's Talk <span>↗</span>
        </a>
      </nav>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </motion.header>
  );
}
