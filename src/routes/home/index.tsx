// routes/home/index.tsx
import { Hero } from "./hero";
import { ProblemSets } from "./problem-sets";

export const Home = () => {
  return (
    <div className="w-screen">
      <Hero />
      <ProblemSets />
    </div>
  );
};
