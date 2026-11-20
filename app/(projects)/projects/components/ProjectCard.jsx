import Image from "next/image";
import { CalendarDays, Code2, Gavel, Github, Globe2, Inbox } from "lucide-react";
import styles from "./projects.module.css";

const covers = {
  "/projects/resqai_logo.jpeg": {
    image: "/projects/resqai-relief-map.webp",
    category: "Geospatial AI",
    summary: "Multilingual emergency reporting, first-aid guidance and a map of nearby relief resources.",
  },
  "/projects/CORE_logo.png": {
    image: "/projects/core-routing-engine.webp",
    category: "Distributed systems",
    summary: "An event-driven supply chain platform with demand forecasting and a conversational AI agent.",
  },
  "/projects/IVY_logo.jpeg": {
    image: "/projects/ivy-order-receipt.webp",
    category: "E-commerce",
    summary: "A live order management platform with dynamic pricing, SMS updates and automated invoices.",
  },
};

const appIcons = {
  "Complaint BOX – Digital Complaint Management System": Inbox,
  "Student Event Management System": CalendarDays,
  "Online Auction & E-Commerce Shopping System": Gavel,
};

function ProjectCover({ project, cover, featured }) {
  if (project.image === "/logo.jpg" || !project.image) {
    const Icon = appIcons[project.title] || Code2;
    return (
      <div className={`${styles.cover} ${styles.symbolCover}`} aria-hidden="true">
        <span><Icon size={48} strokeWidth={1.25} /></span>
      </div>
    );
  }

  return (
    <div className={`${styles.cover} ${cover ? "" : styles.logoCover}`}>
      <Image
        src={cover?.image || project.image}
        alt=""
        fill
        sizes={featured ? "(min-width: 920px) 31vw, (min-width: 660px) 45vw, 92vw" : "(min-width: 760px) 44vw, 92vw"}
      />
    </div>
  );
}

export function ProjectCard({ project, featured = false }) {
  const cover = covers[project.image];
  const Heading = featured ? "h3" : "h2";
  const [shortTitle] = project.title.split(/ [–—] /);
  const destinations = [
    project.demo && { href: project.demo, label: "Live site", Icon: Globe2 },
    project.github && { href: project.github, label: "Source code", Icon: Github },
  ].filter(Boolean);

  return (
    <article className={styles.card}>
      <ProjectCover project={project} cover={cover} featured={featured} />
      <div className={styles.cardBody}>
        <p className={styles.category}>
          {cover?.category || (project.demo ? "Client platform" : "Web application")}
        </p>
        <Heading className={styles.cardTitle}>{featured ? shortTitle : project.title}</Heading>
        <p className={styles.description}>{featured && cover ? cover.summary : project.description}</p>
        {!featured && project.technologies?.length > 0 && (
          <ul className={styles.technologies} aria-label="Technologies">
            {project.technologies.map((tech) => <li key={tech}>{tech}</li>)}
          </ul>
        )}
        <div className={styles.destinations}>
          {destinations.map(({ href, label, Icon }, index) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${shortTitle} — ${label} (opens in a new tab)`}
              className={index === 0 ? styles.primaryDestination : undefined}
            >
              <Icon size={16} strokeWidth={1.65} aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
