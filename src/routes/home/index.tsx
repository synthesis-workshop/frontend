// routes/home/index.tsx
import { AboutUs } from "./aboutus";
import { EpisodesSection } from "./episodes-section";
import { Hero } from "./hero";

export const Home = () => {
  return (
    <div className="flex flex-col items-center bg-black/[.06]">
      <Hero />
      <EpisodesSection />
      <AboutUs />
    </div>
  );
};
