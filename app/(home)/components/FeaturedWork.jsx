import Link from "next/link";
import { config } from "@/config";
import { ProjectCard } from "../../(projects)/projects/components/ProjectCard";
import styles from "../../(projects)/projects/components/projects.module.css";

export default function FeaturedWork() {
  return (
    <section id="work" aria-labelledby="selected-work-title" className={styles.featured}>
      <div className="page-width">
        <div className={styles.featuredHeading}>
          <h2 id="selected-work-title" className={styles.heading}>Selected <em>work.</em></h2>
          <Link href="/projects" className={styles.archiveLink}>All projects <span>({config.projects.length})</span></Link>
        </div>
        <div className={styles.featuredGrid}>
          {config.projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
