import { Download } from "lucide-react";
import Portrait from "./Portrait";
import styles from "./Hero.module.css";

export default function HeroSection() {
  return (
    <section className="page-width" aria-labelledby="hero-title">
      <div className={styles.hero}>
        <div className={styles.intro}>
          <p className={styles.availability}><span aria-hidden="true" />One-year internship · From Jan 2027</p>
          <h1 id="hero-title" className={styles.name}>Sivaranjan<br /><em>Dinath.</em></h1>
          <p className={styles.bio}>
            I’m a software engineering undergraduate building APIs in Java and Python.
            I’ve deployed and supported three live client platforms. My recent work
            ranges from flood prediction with FastAPI to supply chain services connected by Kafka.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#work">Explore my work</a>
            <a className={styles.download} href="/Dinath_Sivaranjan_CV.pdf" download>
              <Download size={17} aria-hidden="true" /><span>Download CV</span>
            </a>
          </div>
        </div>
        <Portrait />
      </div>
    </section>
  );
}
