import Image from "next/image";
import { Download, MapPin } from "lucide-react";
import { FaJava } from "react-icons/fa";
import { SiDocker, SiFastapi, SiPostgresql, SiPython, SiSpring } from "react-icons/si";
import LocalTime from "./LocalTime";
import styles from "./Hero.module.css";

const stack = [
  ["Java", FaJava],
  ["Python", SiPython],
  ["Spring Boot", SiSpring],
  ["FastAPI", SiFastapi],
  ["PostgreSQL", SiPostgresql],
  ["Docker", SiDocker],
];

function Portrait() {
  return (
    <figure className={styles.portrait}>
      <div className={styles.print}>
        <div className={styles.contours} aria-hidden="true" />
        <span className={styles.disc} aria-hidden="true" />
        <Image
          src="/dinath-portrait.webp"
          width={990}
          height={1115}
          sizes="(max-width: 740px) 88vw, (max-width: 1440px) 40vw, 560px"
          alt="Portrait of Sivaranjan Dinath"
          priority
          className={styles.portraitImage}
        />
        <div className={styles.screen} aria-hidden="true" />
        <div className={styles.trim} aria-hidden="true"><i /><i /><i /><i /></div>
      </div>
      <div className={styles.asterisk} aria-hidden="true">
        {[0, 30, 60, 90, 120, 150].map(degrees => <i key={degrees} style={{ transform: `rotate(${degrees}deg)` }} />)}
      </div>
      <figcaption className={styles.caption}>
        <span><MapPin aria-hidden="true" size={15} /> Based in Sri Lanka</span>
        <LocalTime />
      </figcaption>
    </figure>
  );
}

export default function HeroSection() {
  return (
    <>
      <section className="page-width" aria-labelledby="hero-title">
        <div className={styles.hero}>
          <div className={styles.intro}>
            <p className={styles.availability}><span aria-hidden="true" />Open to internships</p>
            <h1 id="hero-title" className={styles.name}>Sivaranjan<br /><em>Dinath.</em></h1>
            <p className={styles.bio}>
              I’m a software engineering undergraduate. I build backend systems in Java and Python, from disaster relief tools to supply chain software.
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
      <div className={styles.stackBand}>
        <div className={`page-width ${styles.stackInner}`}>
          <h2 className={styles.stackTitle}>Core stack</h2>
          <ul className={styles.stackList}>
            {stack.map(([name, Icon]) => <li key={name}><Icon aria-hidden="true" /><span>{name}</span></li>)}
          </ul>
        </div>
      </div>
    </>
  );
}
