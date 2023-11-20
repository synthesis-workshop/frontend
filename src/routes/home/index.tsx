// routes/home/index.tsx
import { EpisodeCard } from "../../components";
import { EpisodeCategory } from "../../types";
import EpisodesSection from "./episodes-section";

export const Home = () => {
  const cards: React.ReactElement[] = [
    <EpisodeCard
      title={"Trial-1"}
      description={"Trial"}
      episodeNumber={1}
      category={EpisodeCategory.RESEARCH_SPOTLIGHT}
      runtime="15:12"
    ></EpisodeCard>,
    <EpisodeCard
      title={"Trial-2"}
      description={"Trial"}
      episodeNumber={1}
      category={EpisodeCategory.RESEARCH_SPOTLIGHT}
      runtime="15:12"
    ></EpisodeCard>,
    <EpisodeCard
      title={"Trial-3"}
      description={"Trial"}
      episodeNumber={1}
      category={EpisodeCategory.RESEARCH_SPOTLIGHT}
      runtime="15:12"
    ></EpisodeCard>,
    <EpisodeCard
      title={"Trial-4"}
      description={"Trial"}
      episodeNumber={1}
      category={EpisodeCategory.RESEARCH_SPOTLIGHT}
      runtime="15:12"
    ></EpisodeCard>,
    <EpisodeCard
      title={"Trial-5"}
      description={"Trial"}
      episodeNumber={1}
      category={EpisodeCategory.RESEARCH_SPOTLIGHT}
      runtime="15:12"
    ></EpisodeCard>,
    <EpisodeCard
      title={"Trial-6"}
      description={"Trial"}
      episodeNumber={1}
      category={EpisodeCategory.RESEARCH_SPOTLIGHT}
      runtime="15:12"
    ></EpisodeCard>,
  ];
  return (
    <div>
      <EpisodesSection cards={cards}></EpisodesSection>
      {/* <div className=" sm:text-green md:text-pink lg:text-blue xl:text-yellow"> */}
      {/* Ahmed */}
      {/* </div> */}
    </div>
  );
};
