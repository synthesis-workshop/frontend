import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TEAM } from "../../../graphql";
import questionmark from "../../../images/question-mark.svg";
import { OrderDirection } from "../../../__generated__/graphql";
import { TeamMemberGroup } from "./team-member-group";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const TeamMembers = () => {
  const { data } = useQuery(GET_TEAM, {
    variables: {
      orderBy: [
        {
          group: OrderDirection.Asc,
        },
      ],
    },
  });

  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`md:mx-10 max-w-full xl:max-w-xlPageContent pb-24 xl:pb-44 lg:pb-32 px-2 sm:px-4 md:px-8`}
    >
      <div className="md:items-start sm:items-center pb-14">
        <p className="font-title text-3xl pb-8 ">Who We Are</p>
        <div className="flex flex-col md:gap-14 gap-5">
          {showContent && data?.teamMembers ? (
            <>
              <TeamMemberGroup
                members={data?.teamMembers?.filter((item) => item.group === 1)}
              />
              <TeamMemberGroup
                members={data?.teamMembers?.filter((item) => item.group === 2)}
              />
              <TeamMemberGroup
                members={data?.teamMembers?.filter((item) => item.group === 3)}
              />
            </>
          ) : (
            <Skeleton height={100} borderRadius={12} count={3} />
          )}
        </div>
      </div>
      {/* paragraph */}
      <div className="md:min-h-60 bg-white flex md:flex-row md:items-start md:justify-evenly md:py-8 sm:flex-col sm:px-4 sm:py-4 sm:max-w-80 sm:gap-4 ">
        <div
          className={`md:w-24 md:h-24 sm:h-20 sm:w-20 bg-primary rounded-full flex items-center justify-center `}
        >
          <img className={`md:w-3.5 h-9`} src={questionmark} alt="" />
        </div>
        <div className={`md:w-10/12 `}>
          <div className="md:pb-8 sm:pb-4 text-primary font-normal">
            <div className={`font-title md:text-3xl sm:text-2xl`}>
              Become our next teammate!
            </div>
            <div
              className={`font-title md:text-3xl sm:text-2xl text-ellipsis overflow-hidden  `}
            >
              If you are passionate about chemistry like us, and want to
              contribute to our project, reach out to{" "}
              <a
                href="mailto:synthesisworkshopvideos@gmail.com"
                className="underline hover:text-blue "
              >
                synthesisworkshopvideos@gmail.com
              </a>
            </div>
          </div>

          <div>
            <div className={`font-text text-lg text-primary/80`}>
              We are looking for researchers, video editors, social media
              managers, and so on...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
