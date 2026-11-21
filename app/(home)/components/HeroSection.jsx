import Image from "next/image";
import { Download, MapPin } from "lucide-react";
import { FaJava } from "react-icons/fa";
import {
  SiApachekafka, SiDocker, SiFastapi, SiKubernetes, SiLangchain, SiLaravel,
  SiPostgresql, SiPython, SiReact, SiRedis, SiSpringboot,
} from "react-icons/si";
import LocalTime from "./LocalTime";
import styles from "./Hero.module.css";

const stack = [
  ["Java", FaJava],
  ["Python", SiPython],
  ["Spring Boot", SiSpringboot],
  ["FastAPI", SiFastapi],
  ["Laravel", SiLaravel],
  ["React", SiReact],
  ["PostgreSQL", SiPostgresql],
  ["Redis", SiRedis],
  ["Kafka", SiApachekafka],
  ["LangChain", SiLangchain],
  ["Docker", SiDocker],
  ["Kubernetes", SiKubernetes],
];

function Portrait() {
  return (
    <figure className={styles.portrait}>
      <div className={styles.print}>
        <Image
          src="/my-profile.jpeg"
          fill
          sizes="(max-width: 740px) min(90vw, 560px), (max-width: 1440px) 42vw, 585px"
          alt="Portrait of Sivaranjan Dinath"
          priority
          className={styles.portraitImage}
        />
        <div className={styles.trim} aria-hidden="true"><i /><i /><i /><i /></div>
      </div>
      <div className={styles.asterisk} aria-hidden="true">
        {[0, 30, 60, 90, 120, 150].map(degrees => <i key={degrees} style={{ transform: `rotate(${degrees}deg)` }} />)}
      </div>
      <figcaption className={styles.caption}>
        <span><MapPin aria-hidden="true" size={15} /> Colombo, Sri Lanka</span>
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
