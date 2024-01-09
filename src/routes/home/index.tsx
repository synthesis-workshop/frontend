// routes/home/index.tsx
import { EpisodesSection } from "./episodes-section";
import { Hero } from "./hero";
import { ProblemSets } from "./problem-sets";
import { TeamMembers } from "./team-members";

export const Home = () => {
  return (
    <div className="flex flex-col items-center bg-black/[.06]">
      <Hero />
      <EpisodesSection />
      <ProblemSets />
      <TeamMembers />
    </div>
  );
};
