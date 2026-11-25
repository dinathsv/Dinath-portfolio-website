import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack";
import FeaturedWork from "./components/FeaturedWork";
import Articles from "./components/Articles";
import Background from "./components/Background";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStack />
      <FeaturedWork />
      <Articles />
      <Background />
    </>
  );
}
