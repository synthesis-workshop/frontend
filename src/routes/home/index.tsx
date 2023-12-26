// routes/home/index.tsx
import { EpisodesSection } from "./episodes-section";
import { Hero } from "./hero";
import { ProblemSets } from "./problem-sets";
import { Publications } from "./publications";

export const Home = () => {
  return (
    <div className="flex flex-col items-center bg-black/[.06] gap-y-[100px]">
      <Hero />
      <EpisodesSection />
      <ProblemSets />
      <Publications />
    </div>
  );
};
