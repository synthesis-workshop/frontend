import { DocumentRenderer } from "@keystone-6/document-renderer";
import cx from "classnames";
import flaskBlue from "../../images/flask-blue.svg";
import flaskGreen from "../../images/flask-green.svg";
import flaskPink from "../../images/flask-pink.svg";
import flaskYellow from "../../images/flask-yellow.svg";
import playWCircle from "../../images/playWCircle.svg";
import { EpisodeCategory } from "../../types";
import { Card } from "../card";
import { Episode } from "../../__generated__/graphql";
type Props = Episode & { onClick: () => void };
export const EpisodeCard = ({
  title,
  description,
  episodeNumber,
  category,
  runtime,
  onClick,
}: Props) => {
  return (
    <Card
      onClick={onClick}
      className={cx(
        category === EpisodeCategory.RESEARCH_SPOTLIGHT &&
          "bg-gradient-to-r hover:from-primary hover:to-green",
        category === EpisodeCategory.TOTAL_SYNTHESIS &&
          "bg-gradient-to-r hover:from-primary hover:to-blue",
        category === EpisodeCategory.NAMED_REACTION &&
          "bg-gradient-to-r hover:from-primary hover:to-pink",
        category === EpisodeCategory.CULTURE_OF_CHEMISTRY &&
          "bg-gradient-to-r hover:from-primary hover:to-yellow",
        "pb-0 pr-0 pt-5 pl-5 cursor-pointer",
      )}
    >
      <h1 className="text-white text-card-title leading-8 font-title font-normal h-[142px] overflow-hidden sm:line-clamp-5">
        {title}
      </h1>
      <div className="flex flex-col gap-6 bg-white rounded-tl-xl rounded-br-xl px-3 py-4 h-4/6 justify-between font-text">
        <div className="text-base leading-5 text-ellipsis overflow-hidden text-primary line-clamp-5">
          <DocumentRenderer document={description?.document} />
        </div>

        <div className="flex flex-row justify-between items-center text-sm text-primary/80">
          <div className="flex gap-3 items-center">
            <img
              alt="flask coloured"
              src={
                category === EpisodeCategory.RESEARCH_SPOTLIGHT
                  ? flaskGreen
                  : category === EpisodeCategory.TOTAL_SYNTHESIS
                  ? flaskBlue
                  : category === EpisodeCategory.NAMED_REACTION
                  ? flaskPink
                  : flaskYellow
              }
            />
            <div className="flex flex-col">
              <span>Episode {episodeNumber}</span>
              <span>{category}</span>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            {runtime}
            <img
              src={playWCircle}
              alt="Play button surrounded by a circle"
              className="text-primary w-8 h-8"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
