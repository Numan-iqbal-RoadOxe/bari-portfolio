import { motion } from "framer-motion"

const experience = [
  {
    year: "2023 — 2025",
    role: "AI/ML Developer",
    org: "aBizsol, Lahore",
  },
  {
    year: "2019 — 2023",
    role: "BSc Information Technology",
    org: "University of Education, Lahore",
  },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={reveal}
        >
          <div className="eyebrow-label">About</div>
          <h2 className="section-heading" style={{ marginTop: 14 }}>
            Building scalable software and machine learning models that deliver
            real results.
          </h2>
        </motion.div>

        <div>
          <motion.div
            className="about-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={reveal}
          >
            <p>
              I&apos;m Abdul Bari, a full-stack developer and machine learning
              enthusiast from Pakistan. I care about writing clean code and
              creating user-friendly, scalable solutions that deliver
              high-quality results.
            </p>
            <p>
              My work spans <strong>MERN stack</strong> development and{" "}
              <strong>machine learning</strong> — from sales forecasting and
              churn prediction to CNN-based image classification, recommendation
              systems, clustering, and anomaly detection for fraud analysis. I
              hold a BSIT from the University of Education, Lahore, and I&apos;m
              always exploring new research and sharpening my skills in AI.
            </p>
          </motion.div>

          <motion.div
            className="timeline"
            style={{ marginTop: 44 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={reveal}
          >
            {experience.map((e) => (
              <div className="timeline-item" key={e.role}>
                <div className="timeline-year">{e.year}</div>
                <div className="timeline-role">{e.role}</div>
                <div className="timeline-org">{e.org}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
