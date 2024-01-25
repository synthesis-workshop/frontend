import cx from "classnames";
import { Button } from "../button";
import { Course } from "../../__generated__/graphql";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import { Card } from "../card";
import purpleBlur from "../../images/purple-blur.png";
import { Link } from "react-router-dom";

export const CourseCard = ({
  id,
  title,
  description,
  durationHrs,
  price,
  episodesCount,
  problemSetsCount,
}: Course) => {
  return (
    <Card className={cx("w-full relative overflow-hidden")}>
      <img
        className="absolute h-[0px] lg:h-[366px] md:h-[0px] w-[0px] lg:w-[520px] md:w-[0px] -top-[150px] -right-[129px] transform rotate-[-157deg]"
        src={purpleBlur}
        alt="left accent blur"
      />

      <div className="flex flex-col p-3">
        <h2 className="font-title text-card-title text-white">{title}</h2>
        <div className="text-white/80 mt-2 max-w-[659px]">
          <DocumentRenderer document={description?.document} />
        </div>

        <div className="flex sm:flex-col md:flex-row justify-between mt-10 md:mt-24">
          <div className="grid grid-cols-2 col-auto items-end gap-1 mb-5 md:grid-cols-4 md:gap-3">
            <div className="bg-[#F6C825] rounded-md justify-center items-center">
              <p className="text-sm p-2 text-center">
                {price === 0 ? "Free!" : `$${price}`}
              </p>
            </div>
            <div className="bg-transparent border border-white rounded-md justify-center items-center">
              <p className="text-white text-center text-sm p-2">
                {episodesCount} videos
              </p>
            </div>
            <div className="bg-transparent border border-white rounded-md justify-center items-center">
              <p className="text-white text-center text-sm p-2">
                {durationHrs} hours
              </p>
            </div>
            <div className="bg-transparent border border-white rounded-md justify-center items-center">
              <p className="text-white text-center text-sm p-2">
                {problemSetsCount} tasks
              </p>
            </div>
          </div>
          <div className="">
            <Link to={`/courses/${id}`}>
              <Button className="w-full md:w-max" variant="secondary">
                Go to the Course →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};
