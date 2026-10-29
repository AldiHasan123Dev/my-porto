
import { motion } from "motion/react";
import { Code2, Server, Database, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Membangun antarmuka web yang responsif dan interaktif.",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "TypeScript"],
  },
  {
    title: "Backend Development",
    description: "Mengembangkan API dan logika aplikasi.",
    icon: Server,
    skills: ["PHP", "Laravel", "Node.js", "Express.js", "REST API"],
  },
  {
    title: "Database Management",
    description: "Mengelola data dan kebutuhan database aplikasi.",
    icon: Database,
    skills: ["MySQL", "SQL", "Database Design", "Query Optimization"],
  },
  {
    title: "Tools & Workflow",
    description: "Mendukung proses pengembangan dan debugging.",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "VS Code", "Debugging"],
  },
];

export default function Skills() {
  return (
    <section className="skills section-container" id="skills">
      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">MY TECHNICAL SKILLS</span>

        <h2 className="section-title">
          Technologies I{" "}
          <span className="gradient-text">Work With.</span>
        </h2>

        <p className="skills-intro">
          Teknologi dan tools yang saya gunakan untuk membangun,
          mengembangkan, dan memelihara aplikasi web dari frontend
          hingga backend dan database.
        </p>
      </motion.div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.article
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <div className="skill-card-top">
                <div className="skill-icon">
                  <Icon size={23} />
                </div>

                <span className="skill-card-number">
                  0{index + 1}
                </span>
              </div>

              <h3>{group.title}</h3>

              <p className="skill-description">
                {group.description}
              </p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
