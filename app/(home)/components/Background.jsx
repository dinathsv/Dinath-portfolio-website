import { BadgeCheck, BriefcaseBusiness, Download, GraduationCap, Star } from "lucide-react";
import { config } from "@/config";
import styles from "./Background.module.css";

function Award({ award }) {
  return (
    <article className={styles.award}>
      <div className={styles.medal} aria-hidden="true">
        <span className={styles.ribbon} />
        <span className={styles.medalFace}><Star /></span>
      </div>
      <div>
        <p className={styles.awardDate}>Award · {award.date}</p>
        <h3>{award.title}</h3>
        <p className={styles.event}>{award.event}</p>
      </div>
    </article>
  );
}

export default function Background() {
  return (
    <section id="about" aria-labelledby="about-title" className={styles.about}>
      <div className="page-width">
        <div className={styles.lead}>
          <div className={styles.intro}>
            <h2 id="about-title">About <em>me.</em></h2>
            <p>
              I study IT at the University of Moratuwa. For my freelance clients,
              I’ve handled everything from setting up domains to tracking down
              errors in production. I’m especially interested in API gateways and
              how services authenticate and talk to each other.
            </p>
            <a className={styles.cvLink} href="/Dinath_Sivaranjan_CV.pdf" download>
              <Download size={17} aria-hidden="true" /> Download my CV <span>PDF</span>
            </a>
          </div>
          <div id="awards" className={styles.awards}>
            {config.awards.map((award) => <Award key={award.title} award={award} />)}
          </div>
        </div>

        <div className={styles.history}>
          <section id="experience" aria-labelledby="experience-title" className={styles.experience}>
            <h3 className={styles.sectionTitle} id="experience-title">
              <BriefcaseBusiness aria-hidden="true" />Experience
            </h3>
            <ol className={styles.timeline}>
              {config.experiences.map((job) => (
                <li key={job.company}>
                  <p className={styles.period}>{job.period.replace(" - ", " – ")}</p>
                  <h4>{job.position}</h4>
                  <p className={styles.organization}>{job.company} · {job.location}</p>
                  <p className={styles.description}>{job.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="education" aria-labelledby="education-title" className={styles.education}>
            <h3 className={styles.sectionTitle} id="education-title">
              <GraduationCap aria-hidden="true" />Education
            </h3>
            <ul className={styles.courses}>
              {config.education.map((course) => (
                <li key={course.degree}>
                  <p className={styles.period}>{course.period.replace(" - ", " – ")}</p>
                  <h4>{course.degree}</h4>
                  <p className={styles.organization}>
                    {course.institution} · {course.grade ?? course.status}
                  </p>
                  <p className={styles.description}>{course.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className={styles.repertoire}>
          <section id="skills" aria-labelledby="skills-title">
            <h3 className={styles.sectionTitle} id="skills-title">Technical skills</h3>
            <dl className={styles.skills}>
              {config.skills.map((group) => (
                <div key={group.title}>
                  <dt><span aria-hidden="true">{group.icon}</span>{group.title}</dt>
                  <dd>{group.skills.map((skill) => skill.name).join(", ")}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="certifications" aria-labelledby="certifications-title">
            <h3 className={styles.sectionTitle} id="certifications-title">Certifications</h3>
            <ul className={styles.certificates}>
              {config.certifications.map((certificate) => (
                <li key={certificate}><BadgeCheck aria-hidden="true" />{certificate}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
