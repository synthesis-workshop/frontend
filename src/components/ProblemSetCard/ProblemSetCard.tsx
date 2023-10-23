import { PropsWithChildren } from "react";
import leftCircle from "../../images/Logo-left-circle.svg";
import rightCircle from "../../images/Logo-right-circle.svg";
import centerCircle from "../../images/logo-center-circle.svg";
import { Card } from "../Card/Card";

export interface ProblemSet {
  title: string;
  problemSetLink: string;
  solutionLink: string;
  episodeLink: string;
  downloadCount: number;
}

interface MyComponentsProps {
  problemSet: ProblemSet;
}

export const ProblemSetCard = (props: PropsWithChildren<MyComponentsProps>) => {
  return (
    <Card>
      {/* {props.problemSet.title} */}
      <div className="flex flex-row">
        <img className="absolute left-165px top-25px" src={leftCircle}></img>
        <img className="z-10" src={centerCircle}></img>
        <img className="absolute right-166px top-25px" src={rightCircle}></img>
      </div>

      <div className="flex w-buttonWidth h-72px justify-center">
        <h1 className="text-secondary font-title text-main ">
          {props.problemSet?.title || "Tishchenko Reaction"}
        </h1>
      </div>

      <button className="text-secondary flex flex-row justify-center items-center h-buttonHeight w-buttonWidth border-2 border-secondary rounded-lg font-text">
        <a href={props.problemSet?.problemSetLink || "https://www.google.com/"}>
          Download Problem Set ↓
        </a>
      </button>
      <button className="text-secondary flex flex-row justify-center items-center h-buttonHeight w-buttonWidth border-2 border-secondary rounded-lg font-text">
        <a href={props.problemSet?.solutionLink || "https://www.google.com/"}>
          Download Solution ↓
        </a>
      </button>
      <div className="flex flex-row w-buttonWidth justify-between">
        <button className="text-secondary font-text text-base">
          <a href={props.problemSet?.episodeLink || "https://www.google.com/"}>
            Episode Link ↗
          </a>
        </button>
        <p className="text-secondary font-text text-base opacity-80">
          Downloaded {props.problemSet?.downloadCount || "160"} times
        </p>
      </div>
    </Card>
  );
};
