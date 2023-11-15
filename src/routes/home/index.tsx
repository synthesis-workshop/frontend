// routes/home/index.tsx
import { EpisodeCard } from "../../components/episode-card";
import EpisodesSection from "../../components/episodes-section/episodes-section";
export const Home = () => {
  const cards: React.ReactElement[] = [
    <EpisodeCard
      title={"Trial-1"}
      description={"Trial"}
      episodeNumber={1}
      episodeType={"Research Spotlight"}
    ></EpisodeCard>,
    <EpisodeCard
      title={"Trial-2"}
      description={"Trial"}
      episodeNumber={1}
      episodeType={"Research Spotlight"}
    ></EpisodeCard>,
    <EpisodeCard
      title={"Trial-3"}
      description={"Trial"}
      episodeNumber={1}
      episodeType={"Research Spotlight"}
    ></EpisodeCard>,
    <EpisodeCard
      title={"Trial-4"}
      description={"Trial"}
      episodeNumber={1}
      episodeType={"Research Spotlight"}
    ></EpisodeCard>,
    <EpisodeCard
      title={"Trial-5"}
      description={"Trial"}
      episodeNumber={1}
      episodeType={"Research Spotlight"}
    ></EpisodeCard>,
    <EpisodeCard
      title={"Trial-6"}
      description={"Trial"}
      episodeNumber={1}
      episodeType={"Research Spotlight"}
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
