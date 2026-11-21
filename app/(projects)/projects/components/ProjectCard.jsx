import Image from "next/image";
import { CalendarDays, Code2, Gavel, Github, Globe2, Inbox } from "lucide-react";
import styles from "./projects.module.css";

const presentation = {
  "/projects/resqai_logo.jpeg": {
    category: "Geospatial AI",
    summary: "Flood forecasts for 25 Sri Lankan districts, with hospital routing and crisis reports in Sinhala, Tamil and English.",
  },
  "/projects/CORE_logo.png": {
    tone: "forest",
    category: "Distributed systems",
    summary: "Kafka connects inventory, orders and suppliers. Operators ask Assist to check stock, investigate logs and look up demand forecasts.",
  },
  "/projects/IVY_logo.jpeg": {
    tone: "clay",
    category: "E-commerce",
    summary: "A live order management platform with dynamic pricing, SMS updates and automated invoices.",
  },
  "/projects/VFIX_logo.jpeg": { tone: "clay" },
  "/projects/MAMcrago_logo.jpeg": { tone: "forest" },
};

const appIcons = {
  "Complaint BOX – Digital Complaint Management System": Inbox,
  "Student Event Management System": CalendarDays,
  "Online Auction & E-Commerce Shopping System": Gavel,
};

function ProjectCover({ project, tone, featured }) {
  if (project.image === "/logo.jpg" || !project.image) {
    const Icon = appIcons[project.title] || Code2;
    return (
      <div className={`${styles.cover} ${styles.symbolCover}`} aria-hidden="true">
        <span><Icon size={48} strokeWidth={1.25} /></span>
      </div>
    );
  }

  return (
    <div className={`${styles.cover} ${styles.logoCover}`} data-tone={tone}>
      <Image
        src={project.image}
        alt=""
        fill
        sizes={featured ? "(min-width: 920px) 31vw, (min-width: 660px) 45vw, 92vw" : "(min-width: 760px) 44vw, 92vw"}
      />
    </div>
  );
}

export function ProjectCard({ project, featured = false }) {
  const details = presentation[project.image];
  const Heading = featured ? "h3" : "h2";
  const [shortTitle] = project.title.split(/ [–—] /);
  const destinations = [
    project.demo && { href: project.demo, label: "Live site", Icon: Globe2 },
    project.github && { href: project.github, label: "Source code", Icon: Github },
  ].filter(Boolean);

  return (
    <article className={styles.card}>
      <ProjectCover project={project} tone={details?.tone} featured={featured} />
      <div className={styles.cardBody}>
        <p className={styles.category}>
          {details?.category || (project.demo ? "Client platform" : "Web application")}
        </p>
        <Heading className={styles.cardTitle}>{featured ? shortTitle : project.title}</Heading>
        <p className={styles.description}>{(featured && details?.summary) || project.description}</p>
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
