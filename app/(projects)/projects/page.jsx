import { config } from "@/config";
import { ProjectsList } from "./components/ProjectsList";
import SectionTitle from "./components/SectionTitle";
import styles from "./components/projects.module.css";

export const metadata = {
  title: "Project archive",
  description: "Explore Sivaranjan Dinath’s backend systems, AI services and live client platforms.",
};

export default function ProjectsPage() {
  return (
    <section id="projects" className={styles.archive}>
      <div className="page-width">
        <SectionTitle />
        <ProjectsList projects={config.projects} />
      </div>
    </section>
  );
}
