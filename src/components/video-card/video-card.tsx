import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { Card } from "../card";
import { EpisodeCategory } from "../../types";

interface Props {
  title: string;
  episodeNumber: number;
  category: EpisodeCategory;
  runtime: string;
  onClick: () => void;
}

export const VideoCard = ({
  title,
  episodeNumber,
  category,
  runtime,
  onClick,
}: Props) => {
  return (
    <Card
      className="flex flex-col p-3 w-[190px] sm:w-[179px] gap-2 cursor-pointer h-full"
      onClick={onClick}
    >
      <h1 className="text-white font-title tracking-tight line-clamp-3">
        {title}
      </h1>
      <div className="flex flex-col text-sm text-white/80 tracking-tight">
        <span>Episode {episodeNumber}</span>
        <span>{category}</span>
      </div>
      <div className="flex flex-row gap-2 items-center text-sm text-white">
        {runtime}
        <PlayCircleIcon className="w-6" />
      </div>
    </Card>
  );
};
