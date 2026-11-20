import { Github } from "lucide-react";
import { config } from "@/config";
import styles from "./projects.module.css";

export default function SectionTitle() {
  return (
    <header className={styles.archiveHeading}>
      <div>
        <h1 className={styles.heading}>Project <em>archive.</em></h1>
        <p>Backend systems, AI services and web platforms I’ve built for clients and coursework.</p>
      </div>
      <a
        className={styles.archiveLink}
        href={`https://github.com/${config.social.github}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={17} aria-hidden="true" /> GitHub profile
      </a>
    </header>
  );
}
