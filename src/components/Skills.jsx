import { motion } from "framer-motion"
import { FiBarChart2, FiCpu, FiLayers, FiTrendingUp } from "react-icons/fi"

const marqueeItems = [
  "Python",
  "MERN Stack",
  "TensorFlow",
  "Keras",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "XGBoost",
  "Java",
  "C++",
]

const capabilities = [
  {
    icon: <FiTrendingUp />,
    title: "Predictive modeling",
    body: "Sales forecasting and churn prediction, from data cleaning and feature selection to tuned, cross-validated models.",
  },
  {
    icon: <FiCpu />,
    title: "Deep learning",
    body: "CNN-based image classification built with TensorFlow and Keras, using augmentation and regularization to generalise well.",
  },
  {
    icon: <FiLayers />,
    title: "Recommendation & clustering",
    body: "Recommendation systems, K-Means customer segmentation, and anomaly detection for fraud analysis.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Data-driven communication",
    body: "Model results visualised and presented clearly so stakeholders can act on the findings.",
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

export default function Skills() {
  return (
    <section className="section" id="skills" style={{ paddingBottom: 0 }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={reveal}
        >
          <div className="eyebrow-label">Capabilities</div>
          <h2 className="section-heading" style={{ marginTop: 14 }}>
            The tools I reach for, and the outcomes they buy you.
          </h2>
        </motion.div>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={reveal}
        >
          {capabilities.map((c) => (
            <div className="skill-cell" key={c.title}>
              <div className="skill-cell-icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="skills-marquee" style={{ marginTop: 90 }}>
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`}>
              <em>✦</em>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
