import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/Providers/Theme";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Sivaranjan Dinath — Software Engineering Portfolio",
    template: "%s — Sivaranjan Dinath",
  },
  description: "Sivaranjan Dinath builds Java and Python APIs in Colombo, Sri Lanka. Explore his work on flood prediction, supply chain microservices, and three live client platforms.",
  authors: [{ name: "Sivaranjan Dinath" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geistSans.className} id="top">
        <ThemeProvider attribute="data-theme" storageKey="portfolio-theme" defaultTheme="system" enableSystem>
          <a className="skip-link" href="#main-content">Skip to content</a>
          <Header />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
