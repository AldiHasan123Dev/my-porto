
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const technologies = ["React.js", "TypeScript", "Laravel", "MySQL"];

export default function Hero() {
  return (
    <section className="hero section-container" id="home">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-content">
        <motion.div
          className="availability"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="status-dot" />
          Full-Stack Web Developer
          <Sparkles size={15} />
        </motion.div>

        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          HELLO, WORLD! I'M
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Aldi Age
          <br />
          <span className="gradient-text">Hasani.</span>
        </motion.h1>

        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I build digital experiences
          <br />
          that <span className="typing-text">make an impact.</span>
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Saya seorang developer yang berfokus pada pengembangan
          aplikasi web modern, membangun antarmuka interaktif,
          REST API, dan solusi digital berbasis kebutuhan bisnis.
        </motion.p>

        <motion.div
          className="hero-tech-stack"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {technologies.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <a href="#projects" className="button-primary">
            Explore My Work
            <ArrowUpRight size={18} />
          </a>

          <a href="#contact" className="button-secondary">
            Contact Me
            <ArrowDown size={17} />
          </a>
        </motion.div>


<motion.div
  className="hero-socials"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.4 }}
>
  <span>FIND ME ON</span>

  <a
    href="https://github.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    <Code2 size={19} />
  </a>

  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <ExternalLink size={19} />
  </a>
</motion.div>

      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
      >
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />

        <motion.div
          className="floating-badge badge-react"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Code2 size={20} />
          <span>Clean Code</span>
        </motion.div>

        <motion.div
          className="floating-badge badge-api"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="api-symbol">{"{ }"}</span>
          <span>REST API</span>
        </motion.div>

        <div className="code-card">
          <div className="code-card-header">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>developer.tsx</span>
          </div>

          <div className="code-content">
            <p>
              <span className="code-purple">const</span>{" "}
              <span className="code-blue">developer</span> = {"{"}
            </p>
            <p className="code-indent">
              name: <span className="code-green">"Aldi Age"</span>,
            </p>
            <p className="code-indent">
              role: <span className="code-green">"Full-Stack"</span>,
            </p>
            <p className="code-indent">
              frontend: <span className="code-green">"React"</span>,
            </p>
            <p className="code-indent">
              language: <span className="code-green">"TypeScript"</span>,
            </p>
            <p className="code-indent">
              backend:{" "}
              <span className="code-green">"Laravel / Node.js"</span>,
            </p>
            <p className="code-indent">
              passion: <span className="code-green">"Building"</span>,
            </p>
            <p>{"};"}</p>
            <p className="code-comment">
              // Turning ideas into reality ✨
            </p>
          </div>

          <div className="code-card-footer">
            <span className="status-dot" />
            <span>Ready to build something great</span>
          </div>
        </div>
      </motion.div>

      <a className="scroll-indicator" href="#about">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
