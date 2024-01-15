import cx from "classnames";
import { Button } from "../button";
import { Course } from "../../__generated__/graphql";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import { Card } from "../card";


export const CourseCard = ({
    title, 
    description,
    episodes,
    problemSets,
}: Course) => {
const totalRuntimeHours = episodes?.reduce((total, episode) => {
    if (episode.runtime) {
      const [hours, minutes] = episode.runtime.split(":");
      return total + Math.ceil((parseInt(hours) + parseInt(minutes) / 60));
    }
    return total;
  }, 0) || 0;

const totalRuntimeMinutes = episodes?.reduce((total, episode) => {
    if (episode.runtime) {
      const [hours, minutes] = episode.runtime.split(":");
      return total + Math.ceil((parseInt(hours) + parseInt(minutes) / 60));
    }
    return total;
    }
    , 0) || 0;

const totalRuntime = totalRuntimeHours + totalRuntimeMinutes;

    return (
        <Card className={cx("w-full")}>
            <div className="flex flex-col p-3">
                <h2 className="font-title text-xl text-white">{title}</h2>
                <p className="text-white/80 text-sm mt-2 max-w-[659px]">
                    <DocumentRenderer document={description?.document} />
                </p>
                <div className="flex justify-between mt-24">
                    <div className="flex items-end gap-3">
                        <div className="bg-[#F6C825] rounded-md justify-center items-center">
                            <p className="text-sm p-2">Free!</p>
                        </div>
                        <div className="bg-transparent border border-white rounded-md justify-center items-center">
                            <p className="text-white text-sm p-2">{episodes?.length} videos</p>
                        </div>
                        <div className="bg-transparent border border-white rounded-md justify-center items-center">
                            <p className="text-white text-sm p-2">{totalRuntime} hours</p>
                        </div>
                        <div className="bg-transparent border border-white rounded-md justify-center items-center">
                            <p className="text-white text-sm p-2">{problemSets?.length} tasks</p>
                        </div>
                    </div>
                    <div className="">
                        <Button className="" variant="secondary">
                            Go to the Course →
                        </Button>
                    </div>
                </div>
            </div>
        </Card>         
    );
}