
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";


const contacts = [
  {
    label: "Email",
    value: "Email saya",
    href: "mailto:emailkamu@example.com",
    type: "email",
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/",
    type: "linkedin",
  },
  {
    label: "WhatsApp",
    value: "Chat dengan saya",
    href: "https://wa.me/6285772371723",
    type: "whatsapp",
  },
];


export default function Contact() {
  return (
    <section className="contact section-container" id="contact">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-glow contact-glow-one" />
        <div className="contact-glow contact-glow-two" />

        <div className="contact-content">
          <span className="section-label">GET IN TOUCH</span>

          <h2 className="contact-title">
            Let's Build Something{" "}
            <span className="gradient-text">
              Great Together.
            </span>
          </h2>

          <p className="contact-description">
            Saya terbuka untuk peluang kerja, proyek freelance,
            kolaborasi, dan diskusi seputar pengembangan aplikasi web.
            Jangan ragu untuk menghubungi saya.
          </p>

          <a
            href="mailto:emailkamu@example.com?subject=Diskusi%20Peluang%20Kerja"
            className="contact-primary-button"
          >
            <Mail size={18} />
            Hubungi Saya
            <ArrowUpRight size={17} />
          </a>

          <div className="contact-divider" />

          <div className="contact-links">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={
                  contact.type === "link" ? "_blank" : undefined
                }
                rel={
                  contact.type === "link" ? "noreferrer" : undefined
                }
                className="contact-link"
              >
                <span className="contact-link-icon">
                  {contact.type === "email" ? (
                    <Mail size={19} />
                  ) : (
                    <span className="contact-link-text-icon">
                      in
                    </span>
                  )}
                </span>

                <span className="contact-link-text">
                  <span className="contact-link-label">
                    {contact.label}
                  </span>

                  <span className="contact-link-value">
                    {contact.value}
                  </span>
                </span>

                <ArrowUpRight
                  size={16}
                  className="contact-link-arrow"
                />
              </a>
            ))}
          </div>
        </div>

        <motion.div
          className="contact-side"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="contact-side-icon">
            <MessageCircle size={34} />
          </div>

          <span className="contact-side-label">
            AVAILABLE FOR OPPORTUNITIES
          </span>

          <h3>Have a project in mind?</h3>

          <p>
            Mari diskusikan bagaimana saya bisa membantu
            mengembangkan solusi web untuk kebutuhan Anda.
          </p>

          <div className="contact-side-decoration">
            <span />
            <span />
            <span />
          </div>
        </motion.div>
      </motion.div>

      <footer className="portfolio-footer">
        <p>
          © {new Date().getFullYear()} Aldi Age Hasani.
          Built with React &amp; TypeScript.
        </p>

        <a href="#home" className="footer-back-to-top">
          Back to top <ArrowUpRight size={15} />
        </a>
      </footer>
    </section>
  );
}
