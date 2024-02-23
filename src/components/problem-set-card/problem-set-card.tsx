import pluralize from "pluralize";
import { PropsWithChildren } from "react";
import ellipses from "../../images/ellipses.svg";
import { Button } from "../button";
import { Card } from "../card";
import type { ProblemSet } from "../../__generated__/graphql";
import { GET_DOWNLOAD_COUNT } from "../../graphql/problem-set-download-count";
import { useQuery } from "@apollo/client";

interface Props {
  problemSet: ProblemSet;
}

export const ProblemSetCard = ({ problemSet }: PropsWithChildren<Props>) => {
  const { data } = useQuery(GET_DOWNLOAD_COUNT, {
    variables: { problemSetId: problemSet.id },
  });

  return (
    <Card>
      <img className="mx-auto" src={ellipses} alt="Ellipses" />

      <h1 className="text-white font-title text-card-title text-center mx-auto mb-6 mt-4 h-2/6">
        {problemSet.title}
      </h1>
      <div className="flex flex-col gap-3">
        <a href={problemSet.problemSetFile?.url} download target="_blank">
          <Button variant="secondary" className="w-full">
            Download Problem Set ↓
          </Button>
        </a>
        <a href={problemSet.solutionFile?.url} download target="_blank">
          <Button variant="secondary" className="w-full">
            Download Solution ↓
          </Button>
        </a>
      </div>
      <div className="flex mt-8">
        {problemSet.episode && (
          <a
            href={`https://www.youtube.com/watch?v=${problemSet.episode.youtubeVideoId}`}
            target="_blank"
            className="text-white font-text text-base"
          >
            Episode Link ↗
          </a>
        )}

        {data && (
          <p className="text-white/80 font-text text-base ml-auto mr-5">
            Downloaded {data} {pluralize("time", data.getDownloadCount, true)}
          </p>
        )}
      </div>
    </Card>
  );
};
