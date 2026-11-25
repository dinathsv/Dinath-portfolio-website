import Image from "next/image";
import { Linkedin } from "lucide-react";
import { config } from "@/config";
import styles from "./Articles.module.css";

function ArticleCard({ article, featured = false }) {
  const titleId = `${article.slug}-title`;
  const actionId = `${article.slug}-action`;

  return (
    <article className={featured ? styles.featured : undefined}>
      <a
        className={styles.card}
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-labelledby={`${titleId} ${actionId}`}
      >
        <div className={styles.cover}>
          <Image
            src={article.image}
            alt=""
            width={1672}
            height={941}
            sizes={featured
              ? "(min-width: 1440px) 680px, (min-width: 960px) 48vw, 88vw"
              : "(min-width: 1440px) 225px, (min-width: 960px) 17vw, (min-width: 620px) 32vw, 84vw"}
          />
        </div>
        <div className={styles.body}>
          <p className={styles.topic}>{article.topic}</p>
          <h3 id={titleId}>{article.title}</h3>
          <p className={styles.description}>{article.description}</p>
          <span id={actionId} className={styles.action}>
            <Linkedin size={17} strokeWidth={1.7} aria-hidden="true" />
            <span>Read on LinkedIn</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </span>
        </div>
      </a>
    </article>
  );
}

export default function Articles() {
  const [latest, ...earlierArticles] = config.articles;

  return (
    <section id="articles" className={styles.section} aria-labelledby="articles-title">
      <div className="page-width">
        <div className={styles.heading}>
          <h2 id="articles-title">Articles<span aria-hidden="true">.</span></h2>
          <p>Exploring how AI systems are secured, managed, and operated in production.</p>
        </div>
        <div className={styles.grid}>
          <ArticleCard article={latest} featured />
          {earlierArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
