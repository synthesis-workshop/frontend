import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import pluralize from "pluralize";
import { useParams } from "react-router";
import { GET_COURSE } from "../graphql/course";
import { ProblemSetCard, EpisodeCard } from "../components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  CurrentVideoIdContext,
  CurrentVideoIdContextType,
} from "../store/current-video-id";
import { VideoPlayerModal } from "../components/video-player-modal";

export const Course = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoModalState, setVideoModalState] =
    useState<CurrentVideoIdContextType>({});
  const { data } = useQuery(GET_COURSE, {
    variables: {
      where: {
        id: courseId,
      },
    },
  });

  const handleOpenDialog = (videoId: string) => {
    setIsModalOpen(true);
    setVideoModalState({ videoId });
  };

  const course = data?.course;
  const episodes = course?.episodes;
  const problemSets = course?.problemSets;

  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {isModalOpen && (
        <CurrentVideoIdContext.Provider
          value={{
            videoId: videoModalState.videoId,
            setVideoId: (videoId: string) => setVideoModalState({ videoId }),
          }}
        >
          <VideoPlayerModal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </CurrentVideoIdContext.Provider>
      )}
      <div
        className="w-full mt-[152px] mb-20 max-w-xlPageContent px-2 sm:px-4 md:px-8"
        id="header"
      >
        <div className="flex mb-8 gap-2 lg:justify-between lg:items-center flex-wrap">
          <h1 className="text-[50px] text-primary font-title">
            {showContent ? course?.title : <Skeleton width={300} />}
          </h1>
          {showContent ? (
            <div className="flex gap-3 flex-wrap">
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
          ) : (
            <Skeleton width={300} height={50} />
          )}
        </div>
        <div className="max-w-[590px] text-primary self-start font-text">
          {showContent ? (
            <DocumentRenderer document={course?.description?.document} />
          ) : (
            <Skeleton borderRadius={12} height={75} />
          )}
        </div>
      </div>
      <div className="w-full max-w-xlPageContent px-2 sm:px-4 md:px-8">
        <h2 className="text-[32px] text-primary font-title mb-8">
          Course episodes & tasks
        </h2>
        <div className="mb-[116px] grid lg:grid-cols-3 lg:gap-5 auto-rows-[360px] gap-5 md:grid-cols-2 md:gap-3 sm:grid-cols-1">
          {showContent ? (
            <>
              {episodes?.map((episode) => {
                return (
                  <EpisodeCard
                    key={episode.id}
                    {...episode}
                    onClick={() => handleOpenDialog(episode.id)}
                  />
                );
              })}
              {problemSets?.map((problemSet) => {
                return (
                  <ProblemSetCard key={problemSet.id} problemSet={problemSet} />
                );
              })}
            </>
          ) : (
            <>
              <Skeleton height={360} borderRadius={12} />
              <Skeleton height={360} borderRadius={12} />
              <Skeleton height={360} borderRadius={12} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
