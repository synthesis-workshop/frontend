// import flaskBlue from "../../assets/images/flask-total-synthesis.svg";
import { Card } from "../Card/Card";

interface Props {
  title: string;
  description: string;
  episodeNumber: number;
  episodeType: string;
}

export const EpisodeCard = ({
  title,
  description,
  episodeNumber,
  episodeType,
}: Props) => {
  let falskbg = "/src/assets/images/flask-research-spotlight.svg"; // temp value
  let bgGradient = "hover:from-primary hover:to-emerald-500"; // temp value
  switch (episodeType) {
    case "Research Spotlight":
      falskbg = "/src/assets/images/flask-research-spotlight.svg";
      bgGradient = "hover:from-primary hover:to-emerald-500";
      break;
    case "Total Synthesis":
      falskbg = "/src/assets/images/flask-total-synthesis.svg";
      bgGradient = "hover:from-primary hover:to-indigo-500";
      break;
    case "Named Reaction":
      falskbg = "/src/assets/images/flask-Named-Reaction.svg";
      bgGradient = "hover:from-primary hover:to-red-500";
      break;
    case "Culture of Chemistry":
      falskbg = "/src/assets/images/flask-culture-of-chemistry.svg";
      bgGradient = "hover:from-primary hover:to-orange-500";
    // break;
  }
  return (
    <Card>
      <div
        className={`rounded-xl p-5 pb-0 pr-0 bg-gradient-to-r ${bgGradient} lg:w-[300px] md:w-[358px] sm:w-[343px]`}
      >
        <div className="flex">
          <h1 className="text-white text-3xl/[28px] h-[120px] leading-8 text-left w-[347px] font-['title'] lg:w-[261px] md:w-[314px] sm:w-[261px]">
            {title}
          </h1>
        </div>
        {/* #fff div */}
        <div className="flex flex-col gap-6 bg-white rounded-tl-xl pl-3 pb-5 pt-4 pr-3 mt-auto self-end">
          <p className="text-base leading-5 text-ellipsis overflow-hidden text-primary h-[116px] lg:w-[257px] md:w-[310px] sm:w-[307px]">
            {description}
          </p>

          <div className="flex flex-row justify-between items-center">
            <div className="flex gap-3 items-center">
              <img alt="flask coloured" src={falskbg} />
              <div className="text-sm flex flex-col">
                <span className="episodeNumber text-sm text-primary">
                  {episodeNumber}
                </span>
                <span className="episdoeTitle text-sm text-primary">
                  {episodeType}
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <span className="text-sm text-primary">15:12</span>
              <button className="bg-playvideoButton w-8 h-8"></button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
