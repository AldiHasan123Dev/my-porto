
import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  visual: string;
  github?: string;
  demo?: string;
}
const projects: Project[] = [
  {
    number: "01",
    title: "FinTrack",
    category: "PERSONAL FINANCE",
    description:
      "Aplikasi pengelolaan keuangan pribadi untuk mencatat transaksi, memantau saldo akun, menganalisis pengeluaran, dan mengelola target tabungan.",
    technologies: ["React.js", "TypeScript", "Node.js", "MySQL"],
    image: `${import.meta.env.BASE_URL}images/projects/finTrack.png`,
    visual: "fintrack",
    github:
      "https://github.com/AldiHasan123Dev/expense-tracking-front-end",
  },
  {
    number: "02",
    title: "Accountant System",
    category: "WEB APPLICATION",
    description:
      "Aplikasi manajemen operasional akuntansi untuk mendukung pengelolaan data, transaksi, dan proses administrasi perusahaan.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
     image: `${import.meta.env.BASE_URL}images/tokomama.png`,
    visual: "logistics",
  },
  {
    number: "03",
    title: "Logistics Management System",
    category: "WEB APPLICATION",
    description:
      "Aplikasi manajemen operasional logistik untuk mendukung pengelolaan data, transaksi, dan proses administrasi perusahaan.",
    technologies: ["Node.js", "Express", "TypeScript", "MySQL"],
    image: `${import.meta.env.BASE_URL}images/ras.png`,
    visual: "courier",
    github: "https://github.com/AldiHasan123Dev/couriers-api",
  },
];

export default function Projects() {
  return (
    <section className="projects section-container" id="projects">
      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">MY RECENT WORK</span>

        <h2 className="section-title">
          Projects That{" "}
          <span className="gradient-text">Define My Skills.</span>
        </h2>

        <p className="projects-intro">
          Beberapa proyek yang saya kembangkan untuk menerapkan
          kemampuan frontend, backend, database, dan pemecahan masalah.
        </p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.number}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.15 }}
            whileHover={{ y: -8 }}
          >
            <div className={`project-visual ${project.visual}`}>
              <img
                src={project.image}
                alt={`Screenshot aplikasi ${project.title}`}
                className="project-image"
                loading="lazy"
              />

              <span className="project-number">
                {project.number}
              </span>
            </div>

            <div className="project-body">
              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub Repository
                    <ArrowUpRight size={15} />
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-demo-link"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
