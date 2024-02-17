// routes/home/index.tsx
import { AboutUs } from "./about-us";
import { EpisodesSection } from "./episodes-section";
import { Hero } from "./hero";
import { Downloads } from "./downloads";
import { PosterSection } from "./poster-section";
import { ProblemSets } from "./problem-sets";
import { Publications } from "./publications";
import { TeamMembers } from "./team-members";
import { Courses } from "./courses";
import { ContactForm } from "./contact-form";

export const Home = () => {
  return (
    <div className="flex flex-col items-center bg-black/[.06] gap-y-[100px]">
      <Hero />
      <Courses />
      <EpisodesSection />
      <ProblemSets />
      <PosterSection />
      <Publications />
      <Downloads />
      <ContactForm />
      <AboutUs />
      <TeamMembers />
    </div>
  );
};
