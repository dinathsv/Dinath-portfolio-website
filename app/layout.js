import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  description: "Sivaranjan Dinath is a software engineering undergraduate in Sri Lanka building backend systems, AI services, and web platforms.",
  authors: [{ name: "Sivaranjan Dinath" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistSans.className} id="top">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
