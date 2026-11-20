import { Download } from "lucide-react";
import { config } from "@/config";
import styles from "./Background.module.css";

function ResumeSection({ id, title, defaultOpen, children }) {
  return (
    <details id={id} className={styles.disclosure} open={defaultOpen}>
      <summary>
        <h3>
          {title}
          <span className={styles.toggle} aria-hidden="true" />
        </h3>
      </summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
}

export default function Background() {
  return (
    <section id="about" aria-labelledby="about-title" className={styles.about}>
      <div className={`page-width ${styles.layout}`}>
        <div className={styles.intro}>
          <h2 id="about-title">About <em>me.</em></h2>
          <p>
            I study IT at the University of Moratuwa in Sri Lanka. Alongside my
            studies, I’ve helped businesses move their orders, bookings and
            invoices off paper.
          </p>
          <a className={styles.cvLink} href="/Dinath_Sivaranjan_CV.pdf" download>
            <Download size={17} strokeWidth={1.7} aria-hidden="true" />
            Download my CV
            <span>PDF</span>
          </a>
        </div>

        <div className={styles.resume}>
          <ResumeSection id="experience" title="Experience" defaultOpen>
            {config.experiences.map((job) => (
              <article key={job.company} className={styles.entry}>
                <p className={styles.period}>{job.period.replace(" - ", " – ")}</p>
                <h4>{job.position}</h4>
                <p className={styles.organization}>{job.company} · {job.location}</p>
                <p className={styles.description}>{job.description}</p>
              </article>
            ))}
          </ResumeSection>

          <ResumeSection id="education" title="Education">
            {config.education.map((course) => (
              <article key={course.degree} className={styles.entry}>
                <p className={styles.period}>{course.period.replace(" - ", " – ")}</p>
                <h4>{course.degree}</h4>
                <p className={styles.organization}>
                  {course.institution} · {course.grade ?? course.status}
                </p>
                <p className={styles.description}>{course.description}</p>
              </article>
            ))}
          </ResumeSection>

          <ResumeSection id="skills" title="Technical skills">
            <dl className={styles.skillList}>
              {config.skills.map((group) => (
                <div key={group.title}>
                  <dt>{group.title}</dt>
                  <dd>{group.skills.map((skill) => skill.name).join(", ")}</dd>
                </div>
              ))}
            </dl>
          </ResumeSection>

          <ResumeSection id="certifications" title="Certifications">
            <ul className={styles.certificates}>
              {config.certifications.map((certificate) => (
                <li key={certificate}>{certificate}</li>
              ))}
            </ul>
          </ResumeSection>
        </div>
      </div>
    </section>
  );
}
