import { config } from "@/config";
import ContactForm from "./components/ContactForm";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Sivaranjan Dinath about software engineering internships, projects, and collaborations.",
};

export default function ContactPage() {
  const email = config.contactInfo.find((info) => info.label === "Email");

  return (
    <section id="contact" className={`page-width ${styles.page}`} aria-labelledby="contact-title">
      <div className={styles.intro}>
        <p className={styles.kicker}>Contact</p>
        <h1 id="contact-title">Drop me<br /><em>a line.</em></h1>
        <p className={styles.lead}>
          I’m based in Sri Lanka and open to software engineering internships. Have a role in mind or a project you’d like to talk through?
        </p>
      </div>

      <div className={styles.letter}>
        <div className={styles.letterHeading}>
          <h2>Write to me</h2>
          <span className={styles.postmark} aria-hidden="true" />
        </div>
        <ContactForm emailHref={email.link} />
      </div>

      <div className={styles.directory}>
        <h2>Contact details</h2>
        <dl>
          {config.contactInfo.map(({ label, value, link }) => (
            <div key={label} className={styles.detail}>
              <dt>{label}</dt>
              <dd><a href={link}>{value}</a></dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
