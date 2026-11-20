"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import styles from "./projects.module.css";

const filters = [
  { label: "All projects", key: "all" },
  { label: "Live sites", key: "demo" },
  { label: "Source code", key: "github" },
];

export function ProjectsList({ projects }) {
  const [activeKey, setActiveKey] = useState("all");
  const visibleProjects = projects.filter((project) => activeKey === "all" || project[activeKey]);

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter projects">
        {filters.map(({ label, key }) => (
          <button
            key={key}
            type="button"
            aria-pressed={activeKey === key}
            aria-controls="project-list"
            onClick={() => setActiveKey(key)}
          >
            {label}
          </button>
        ))}
      </div>
      <p className={styles.screenReaderText} role="status">{visibleProjects.length} projects</p>
      <div id="project-list" className={styles.archiveGrid}>
        {visibleProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </>
  );
}
