// routes/home/index.tsx
import { Hero } from "./hero";
import { TeamMembersSection } from "./team-members-section";

export const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center bg-grey">
      <Hero />
      <TeamMembersSection />
    </div>
  );
};
