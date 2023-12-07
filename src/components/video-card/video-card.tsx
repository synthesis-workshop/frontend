import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { EpisodeCategory } from "../../types";
import { Card } from "../card";

interface Props {
  title: string;
  episodeNumber: number;
  category: EpisodeCategory;
  runtime: string;
}

export const VideoCard = ({
  title,
  episodeNumber,
  category,
  runtime,
}: Props) => {
  return (
    <Card className="flex flex-col p-3 w-[196px] gap-2">
      <h1 className="text-white font-title tracking-tight">{title}</h1>
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
