import React, { Fragment, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { Dialog, Transition } from "@headlessui/react";
import {
  DocumentRenderer,
  DocumentRendererProps,
} from "@keystone-6/document-renderer";
import { VideoCard } from "../video-card";
import { VideoPlayer } from "../video-player/video-player";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CurrentVideoIdContext } from "../../store/current-video-id";
import { useQuery } from "@apollo/client";
import { GET_EPISODE, GET_NEXT_EPISODES } from "../../graphql";
import { OrderDirection } from "../../__generated__/graphql";
import { Loading } from "../loading";
import { EpisodeCategory } from "../../types";
interface Props {
  open: boolean;
  onClose: () => void;
}

const renderers: DocumentRendererProps["renderers"] = {
  inline: {},
  block: {
    paragraph: ({ children }) => {
      return <p className="whitespace-pre-line ">{children}</p>;
    },
  },
};

export const VideoPlayerModal = ({ open, onClose }: Props) => {
  const { videoId, setVideoId } = useContext(CurrentVideoIdContext);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const { loading: episodesLoading, data: episodesData } = useQuery(
    GET_EPISODE,
    {
      variables: {
        where: {
          id: videoId,
        },
      },
    },
  );
  const { loading: nextEpisodesLoading, data: nextEpisodesData } = useQuery(
    GET_NEXT_EPISODES,
    {
      variables: {
        where: {
          episodeNumber: {
            gt: episodesData?.episode?.episodeNumber,
          },
        },
        take: 5,
        orderBy: [
          {
            episodeNumber: OrderDirection.Asc,
          },
        ],
      },
    },
  );

  return (
    <Transition
      show={open}
      as={Fragment}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog
        open={open}
        onClose={onClose}
        className="relative z-50 flex justify-center items-center bg-black/50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 overflow-y-auto scrollbar-none sm:p-0">
          <Dialog.Panel className="md:rounded-xl lg:rounded-xl xl:rounded-xl relative bg-white flex flex-row md:flex-row lg:flex-row xl:flex-row overflow-hidden md:w-[728px] xl:w-[996px] lg:w-[996px] max-h-[90vh] sm:rounded-none sm:w-full sm:flex-col">
            <XMarkIcon
              className="w-5 cursor-pointer absolute top-3 right-3"
              onClick={onClose}
            />
            {isTabletOrMobile && (
              <Dialog.Title className="mt-4 text-card-title text-primary px-2 w-5/6 float-left ">
                {episodesData?.episode?.title}
              </Dialog.Title>
            )}
            {/* left side video modal */}

            <div className="w-[793px] md:w-[526px] lg:w-[793px] xl:w-[793px] overflow-y-auto scrollbar-none sm:w-full sm:mt-[50px] md:mt-0 lg:mt-0 xl:mt-0">
              <VideoPlayer
                width="100%"
                url={`https://www.youtube.com/watch?v=${episodesData?.episode?.youtubeVideoId}`}
                light={false}
                controls={true}
                className="mb-5"
              />
              {isTabletOrMobile && (
                <div className="flex flex-col pl-3">
                  {nextEpisodesLoading ? (
                    <div className="mt-12">
                      <Loading />
                    </div>
                  ) : nextEpisodesData?.episodes &&
                    nextEpisodesData.episodes.length > 0 ? (
                    <>
                      <h6 className="text-primary font-text font-medium my-5 mr-auto mb-5">
                        Next videos
                      </h6>
                      <div className="flex flex-row justify-between gap-3 py-4 overflow-x-auto scrollbar-none">
                        {nextEpisodesData?.episodes?.map((nextEpisode) => (
                          <div key={nextEpisode.id}>
                            <VideoCard
                              title={`${nextEpisode.title}`}
                              episodeNumber={nextEpisode.episodeNumber ?? 0}
                              category={
                                (nextEpisode.category ??
                                  EpisodeCategory.RESEARCH_SPOTLIGHT) as EpisodeCategory
                              }
                              runtime={`${nextEpisode.runtime}`}
                              onClick={() => setVideoId?.(nextEpisode.id)}
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}
                  {episodesLoading ? (
                    <div className="mt-12">
                      <Loading />
                    </div>
                  ) : episodesData?.episode?.relatedEpisodes &&
                    episodesData.episode.relatedEpisodes.length > 0 ? (
                    <>
                      <h6 className="text-primary font-text font-medium my-5 mr-auto mb-5">
                        Related videos
                      </h6>
                      <div className="flex flex-row justify-between gap-3 px-3 py-4 overflow-x-auto scrollbar-none">
                        {episodesData?.episode?.relatedEpisodes?.map(
                          (relatedEpisode) => (
                            <div key={relatedEpisode.id}>
                              <VideoCard
                                title={`${relatedEpisode.title}`}
                                episodeNumber={
                                  relatedEpisode.episodeNumber ?? 0
                                }
                                category={
                                  (relatedEpisode.category ??
                                    EpisodeCategory.RESEARCH_SPOTLIGHT) as EpisodeCategory
                                }
                                runtime={`${relatedEpisode.runtime}`}
                                onClick={() => setVideoId?.(relatedEpisode.id)}
                              />
                            </div>
                          ),
                        )}
                      </div>
                    </>
                  ) : null}
                </div>
              )}
              <div className="px-8">
                {!isTabletOrMobile && (
                  <Dialog.Title className="text-card-title text-primary mt-4">
                    {episodesData?.episode?.title}
                  </Dialog.Title>
                )}

                <Dialog.Description
                  className="text-primary sm:mt-5 pb-8"
                  as="div"
                >
                  <DocumentRenderer
                    document={
                      episodesData?.episode?.description?.document || []
                    }
                    renderers={renderers}
                  />
                </Dialog.Description>
              </div>
            </div>
            {/* Right side video modal */}
            {!isTabletOrMobile && (
              <div className="overflow-y-auto scrollbar-none pb-2 justify-between mt-[30px] ">
                <div className="flex flex-col mb-5 px-3">
                  {nextEpisodesLoading ? (
                    <div className="mt-12">
                      <Loading />
                    </div>
                  ) : nextEpisodesData?.episodes &&
                    nextEpisodesData.episodes.length > 0 ? (
                    <>
                      <h6 className="text-primary font-text font-medium mr-auto mb-5">
                        Next videos
                      </h6>
                      <div className="flex flex-col gap-4">
                        {nextEpisodesData?.episodes?.map((nextEpisode) => (
                          <VideoCard
                            key={nextEpisode.id}
                            title={`${nextEpisode.title}`}
                            episodeNumber={nextEpisode.episodeNumber ?? 0}
                            category={
                              (nextEpisode.category ??
                                EpisodeCategory.RESEARCH_SPOTLIGHT) as EpisodeCategory
                            }
                            runtime={`${nextEpisode.runtime}`}
                            onClick={() => setVideoId?.(nextEpisode.id)}
                          />
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
                <div className="flex flex-col mb-5 px-3">
                  {episodesLoading ? (
                    <div className="mt-12">
                      <Loading />
                    </div>
                  ) : episodesData?.episode?.relatedEpisodes &&
                    episodesData.episode.relatedEpisodes.length > 0 ? (
                    <>
                      <h6 className="text-primary font-text font-medium mr-auto my-5">
                        Related videos
                      </h6>
                      <div className="flex flex-col gap-3">
                        {episodesData?.episode?.relatedEpisodes?.map(
                          (relatedEpisode) => (
                            <VideoCard
                              key={relatedEpisode.id}
                              title={`${relatedEpisode.title}`}
                              episodeNumber={relatedEpisode.episodeNumber ?? 0}
                              category={
                                (relatedEpisode.category ??
                                  EpisodeCategory.RESEARCH_SPOTLIGHT) as EpisodeCategory
                              }
                              runtime={`${relatedEpisode.runtime}`}
                              onClick={() => setVideoId?.(relatedEpisode.id)}
                            />
                          ),
                        )}
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};
