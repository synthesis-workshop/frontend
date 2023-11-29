// routes/home/index.tsx
import { EpisodesSection } from "./episodes-section";
import { Hero } from "./hero";
import { Downloads } from "./downloads";
export const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      <Hero />
      <EpisodesSection />
      <Downloads />
    </div>
  );
};
