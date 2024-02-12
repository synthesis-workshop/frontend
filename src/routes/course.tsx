import { useQuery } from "@apollo/client";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import pluralize from "pluralize";
import { useParams } from "react-router";
import { GET_COURSE } from "../graphql/course";
import { ProblemSetCard, EpisodeCard } from "../components";

export const Course = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { loading, data } = useQuery(GET_COURSE, {
    variables: {
      where: {
        id: courseId,
      },
    },
  });

  const course = data?.course;
  const episodes = course?.episodes;
  const problemSets = course?.problemSets;

  return (
    <div className="flex flex-col items-center">
      <div className="w-full mt-[152px] mb-20 sm:max-w-smPageContent lg:max-w-lgPageContent md:max-w-mdPageContent xl:max-w-xlPageContent" id="header">
        <div className="flex mb-8 gap-2 lg:justify-between lg:items-center flex-wrap">
          <h1 className="text-[50px] text-primary font-title">
            {course?.title}
          </h1>
          <div className="flex gap-3">
            <div className="p-2 bg-accent rounded">
              {course?.price === 0 ? "Free!" : `$${course?.price}`}
            </div>
            <div className="p-2 border border-primary/80 rounded">
              {course?.episodesCount}{" "}
              {pluralize("Video", course?.episodesCount ?? 0)}
            </div>
            <div className="p-2 border border-primary/80 rounded">
              {course?.durationHrs}{" "}
              {pluralize("Hour", course?.durationHrs ?? 0)}
            </div>
            <div className="p-2 border border-primary/80 rounded">
              {course?.problemSetsCount}{" "}
              {pluralize("Task", course?.problemSetsCount ?? 0)}
            </div>
          </div>
        </div>
        <div className="max-w-[590px] text-primary self-start font-text">
          {!loading && course && (
            <DocumentRenderer document={course?.description?.document} />
          )}
        </div>
      </div>
      <div className="w-full sm:max-w-smPageContent lg:max-w-lgPageContent md:max-w-mdPageContent xl:max-w-xlPageContent" id="body">
        <h2 className="text-[32px] text-primary font-title mb-8">
          Course episodes & tasks
        </h2>
        <div className="mb-[116px] grid lg:grid-cols-3 lg:gap-5 auto-rows-[360px] gap-5 md:grid-cols-2 md:gap-3 sm:grid-cols-1">
          {!loading && course && (
            <>
              {episodes?.map((episode) => {
                return <EpisodeCard key={episode.id} {...episode} />;
              })}
              {problemSets?.map((problemSet) => {
                return (
                  <ProblemSetCard key={problemSet.id} problemSet={problemSet} />
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
