import { config } from "@/config";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <small>© {new Date().getFullYear()} {config.developer.name}</small>
        <nav aria-label="Social links">
          <a href={`https://github.com/${config.social.github}`}>GitHub</a>
          <a href={config.social.linkedin}>LinkedIn</a>
          <a href={config.contactInfo.find(item => item.label === "Email").link}>Email</a>
        </nav>
      </div>
    </footer>
  );
}
