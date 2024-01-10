// routes/home/index.tsx
import { AboutUs } from "./about-us";
import { EpisodesSection } from "./episodes-section";
import { Hero } from "./hero";
import { Downloads } from "./downloads";
import { PosterSection } from "./poster-section";
import { ProblemSets } from "./problem-sets";
import { TeamMembers } from "./team-members";

export const Home = () => {
  return (
    <div className="flex flex-col items-center bg-black/[.06]">
      <Hero />
      <EpisodesSection />
      <ProblemSets />
      <PosterSection />
      <Downloads />
      <AboutUs />
      <TeamMembers />
    </div>
  );
};
