// routes/home/index.tsx
import { EpisodesSection } from "./episodes-section";
import { Hero } from "./hero";
import { ProblemSets } from "./problem-sets";

export const Home = () => {
  return (
    <div className="flex flex-col items-center bg-black/[.06]">
      <Hero />
      <EpisodesSection />
      <ProblemSets />
    </div>
  );
};
