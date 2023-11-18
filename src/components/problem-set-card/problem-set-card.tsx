// import pluralize from "pluralize";
import { PropsWithChildren } from "react";
import ellipses from "../../images/ellipses.svg";
import { Button } from "../button";
import { Card } from "../card";

export interface ProblemSet {
  title: string;
  problemSetLink: string;
  solutionLink: string;
  episodeLink?: string;
  downloadCount?: number;
}

interface Props {
  problemSet: ProblemSet;
}

export const ProblemSetCard = ({ problemSet }: PropsWithChildren<Props>) => {
  return (
    <Card>
      <img className="mx-auto" src={ellipses} alt="Ellipses" />

      <h1 className="text-white font-title text-card-title text-center mx-auto mb-6 mt-4">
        {problemSet.title}
      </h1>
      <div className="flex flex-col gap-3">
        <a href={problemSet.problemSetLink} download target="_blank">
          <Button variant="secondary" className="w-full">
            Download Problem Set ↓
          </Button>
        </a>
        <a href={problemSet.solutionLink} download target="_blank">
          <Button variant="secondary" className="w-full">
            Download Solution ↓
          </Button>
        </a>
      </div>
      <div className="flex justify-between mt-8">
        {problemSet.episodeLink && (
          <a
            href={problemSet.episodeLink}
            target="_blank"
            className="text-white font-text text-base"
          >
            Episode Link ↗
          </a>
        )}

        {problemSet.downloadCount && (
          <p className="text-white/80 font-text text-base">
            Downloaded {problemSet.downloadCount}{" "}
            {pluralize("time", problemSet.downloadCount)}
          </p>
        )}
      </div>
    </Card>
  );
};
