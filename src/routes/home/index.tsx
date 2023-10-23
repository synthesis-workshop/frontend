// import { Card } from "../../components/Card/Card";
import {
  ProblemSet,
  ProblemSetCard,
} from "../../components/ProblemSetCard/ProblemSetCard";

export const Home = () => {
  // Example on ProblemSet Interface
  const p: ProblemSet = {
    title: "Tishchenko Reaction" || "Ahmed",
    problemSetLink: "https://www.google.com/",
    solutionLink: "https://www.google.com/",
    episodeLink: "https://www.google.com/",
    downloadCount: 4,
  };
  return (
    <div>
      <ProblemSetCard problemSet={p}></ProblemSetCard>
      <div>This is the home page</div>
    </div>
  );
};
