// routes/home/index.tsx
import { AboutUs } from "./aboutus";
import { EpisodesSection } from "./episodes-section";
import { Hero } from "./hero";
import { Downloads } from "./downloads";
import { ProblemSets } from "./problem-sets";
import { TeamMembers } from "./team-members";

export const Home = () => {
  return (
    <div className="flex flex-col items-center bg-black/[.06]">
      <Hero />
      <EpisodesSection />
      <ProblemSets />
      <Downloads />
      <AboutUs />
      <TeamMembers />
    </div>
  );
};
