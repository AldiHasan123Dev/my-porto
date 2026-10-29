
import { motion } from "motion/react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
} from "lucide-react";

const highlights = [
  {
    icon: BriefcaseBusiness,
    title: "Professional Experience",
    description: "Pengembangan dan pemeliharaan aplikasi web.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Membangun antarmuka, REST API, dan database.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Terus mengembangkan kemampuan teknologi web.",
  },
];

export default function About() {
  return (
    <section className="about section-container" id="about">
      <motion.div
        className="about-image-wrapper"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="about-image-glow" />

        <div className="about-image-frame">
          <img
            src="/images/ALDI.jpeg"
            alt="Foto profil Aldi Age Hasani"
            className="about-image"
          />
        </div>

        <div className="about-image-caption">
          <span className="status-dot" />
          <div>
            <strong>Aldi Age Hasani</strong>
            <p>Full-Stack Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">GET TO KNOW ME</span>

        <h2 className="section-title">
          Turning Ideas Into{" "}
          <span className="gradient-text">Digital Solutions.</span>
        </h2>

        <p className="about-description">
          Halo! Saya Aldi Age Hasani, seorang developer yang tertarik
          pada pengembangan aplikasi web modern. Saya berfokus pada
          pembuatan aplikasi yang fungsional, mudah digunakan, dan
          sesuai dengan kebutuhan pengguna.
        </p>

        <p className="about-description">
          Saya memiliki pengalaman sebagai IT Staff Programmer,
          termasuk mengembangkan fitur aplikasi, mengelola database,
          memperbaiki bug, serta melakukan debugging pada sistem.
          Saya juga terus mengembangkan kemampuan frontend dan backend
          menggunakan berbagai teknologi web.
        </p>

        <div className="about-highlights">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="about-highlight"
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <div className="about-highlight-icon">
                  <Icon size={20} />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <a href="#projects" className="button-primary about-button">
          Explore My Projects
          <ArrowUpRight size={18} />
        </a>
      </motion.div>
    </section>
  );
}
