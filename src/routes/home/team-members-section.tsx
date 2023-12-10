import { useQuery } from "@apollo/client";
import { TeamMember } from "../../components";
import { GET_TEAM } from "../../graphql";
import questionmark from "../../images/questionmark.svg";

export const TeamMembersSection = () => {
  const { data } = useQuery(GET_TEAM, {
    variables: {
      orderBy: [
        {
          group: "asc",
        },
      ],
    },
  });

  console.log(data?.teamMembers);

  const render = (groupnum) => {
    return (
      <div
        className={`grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 auto-cols-w-[387px] sm:auto-rows-h-24 gap-5 pd-1`}
      >
        {data?.teamMembers
          .filter((item) => item?.group === groupnum)
          .map((item, key) => (
            <TeamMember key={key} {...item} />
          ))}
      </div>
    );
  };

  return (
    <div className={`md:pt-36 md:mx-10 md:max-w-[1200px] sm:pt-72 bg-grey`}>
      <div className="flex flex-col md:items-start sm:items-center pb-14">
        <p className=" font-title text-3xl pb-8 ">Who We Are</p>
        <div className="flex flex-col md:gap-14 sm:gap-5">
          {render(1)}
          {render(2)}
          {render(3)}
        </div>
      </div>
      {/* paragraph */}
      <div className="md:min-h-60 bg-white flex md:flex-row md:items-start md:justify-evenly md:py-8 sm:flex-col sm:px-4 sm:py-4 sm:max-w-80 sm:gap-4">
        <div
          className={`md:w-24 md:h-24 sm:h-20 sm:w-20 bg-primary rounded-full flex items-center justify-center `}
        >
          <img className={`md:w-3.5 h-9`} src={questionmark} />
        </div>
        <div className={`md:w-10/12`}>
          <div className="md:pb-8 sm:pb-4">
            <div className={`font-title md:text-3xl sm:text-2xl`}>
              Become our next teammate!
            </div>
            <div className={`font-title md:text-3xl sm:text-2xl`}>
              If you are passionate about chemistry like us, and want to
              contribute to our project, reach out to synthesisworkshopvideos
              <div>@gmail.com</div>
            </div>
          </div>

          <div>
            <div className={`font-text text-lg text-[#3A3C46CC]`}>
              We are looking for researchers, video editors, social media
              managers, and so on...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
