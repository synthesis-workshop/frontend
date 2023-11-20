
import { Card } from "../card";
import { EpisodeCategory } from "../../types";


interface Props {
  title: string;
  
  episodeNumber: number;
  category: EpisodeCategory;
  runtime: string;
}

export const NextVideoCard = ({
  title,
  episodeNumber,
  category,
  runtime,
}: Props) => {
  return (
    <Card className="flex flex-col p-3 w-[196px] ">
      <h1 className="text-white text-font-title font-title mb-2.5 tracking-tight">
        {title}
      </h1>
        <div className="flex flex-row justify-between items-center text-sm text-white/80 tracking-tight">
            <div className="flex flex-col mb-2">
                <span>Episode {episodeNumber}</span>
                <span>{category}</span>
            </div>
        </div>
        <div className="flex flex-row gap-2 items-center text-sm text-white">
        {runtime}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="white" stroke-opacity="0.8" stroke-width="2"/>
            <path d="M14.4998 9.133C15.1664 9.5179 15.1664 10.4801 14.4998 10.865L8.49976 14.3291C7.83309 14.714 6.99976 14.2329 6.99976 13.4631L6.99976 6.53492C6.99976 5.76512 7.83309 5.284 8.49976 5.6689L14.4998 9.133Z" fill="white" fill-opacity="0.8"/>
        </svg>
        </div>
        
    </Card>
  );
};
