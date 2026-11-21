"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Terminal } from "lucide-react";
import { FaJava } from "react-icons/fa";
import {
  SiApachekafka, SiDocker, SiFastapi, SiKubernetes, SiLangchain, SiLaravel,
  SiPostgresql, SiPython, SiReact, SiRedis, SiSpringboot,
} from "react-icons/si";
import styles from "./TechStack.module.css";

const groups = [
  {
    title: "Application development", finish: "mint",
    tools: [["Java", FaJava], ["Python", SiPython], ["Spring Boot", SiSpringboot], ["FastAPI", SiFastapi], ["Laravel", SiLaravel], ["React", SiReact]],
  },
  {
    title: "Data & AI", finish: "cream",
    tools: [["PostgreSQL", SiPostgresql], ["Redis", SiRedis], ["Kafka", SiApachekafka], ["LangChain", SiLangchain]],
  },
  {
    title: "Infrastructure", finish: "copper",
    tools: [["Docker", SiDocker], ["Kubernetes", SiKubernetes]],
  },
];

const satellites = groups.flatMap(({ tools, finish }) => tools.map(([name, Icon]) => ({ name, Icon, finish })));

export default function TechStack() {
  const section = useRef(null);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(section.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={section} id="tech-stack" aria-labelledby="stack-heading" className={styles.section}>
      <div className={`page-width ${styles.layout}`}>
        <div className={styles.inventory}>
          <h2 id="stack-heading">Core <em>stack.</em></h2>
          {groups.map(({ title, finish, tools }) => (
            <div key={title} className={styles.group} data-finish={finish}>
              <h3><span aria-hidden="true" />{title}</h3>
              <ul>{tools.map(([name]) => <li key={name}>{name}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className={styles.visual} data-paused={paused || !inView}>
          <div className={styles.stage} aria-hidden="true">
            <div className={styles.space}>
              <i className={styles.axis} />
              <i className={styles.outerRing} />
              <i className={styles.innerRing} />
              <div className={styles.processor}>
                <i className={styles.topPlate}><span /></i>
                <i className={styles.sidePlate} />
                <i className={styles.displayPlate}><Terminal strokeWidth={2.4} /></i>
              </div>
              {satellites.map(({ name, Icon, finish }, index) => (
                <span key={name} className={styles.satellite}
                  data-orbit={index % 2 === 0 ? "outer" : "inner"}
                  data-finish={finish} style={{ "--phase": `${Math.floor(index / 2) * 60 + (index % 2) * 30}deg` }}>
                  <Icon />
                </span>
              ))}
            </div>
          </div>
          <button type="button" onClick={() => setPaused(value => !value)} className={styles.control}
            aria-label={paused ? "Resume orbit" : "Pause orbit"}>
            {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
            {paused ? "Resume orbit" : "Pause orbit"}
          </button>
        </div>
      </div>
    </section>
  );
}
