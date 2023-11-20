import { useQuery } from "@apollo/client";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Episode, OrderDirection } from "../../__generated__/graphql";
import { EpisodeCard, Loading } from "../../components";
import { GET_EPISODES } from "../../graphql";

export const EpisodesSection = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 450px)" });

  const { loading, data } = useQuery(GET_EPISODES, {
    variables: {
      orderBy: [
        {
          // TODO: This needs to be a state variable based on the sorting dropdown
          publishedAt: OrderDirection.Desc,
        },
      ],
      where: {
        category: {
          // TODO: This needs to be a state variable based on the category dropdown
          in: [
            "Research Spotlight",
            "Total Synthesis",
            "Named Reaction",
            "Culture of Chemistry",
          ],
        },
        status: {
          equals: "published",
        },
      },
      take: isTabletOrMobile ? 3 : 6,
    },
  });

  return (
    <div className="grow pt-[238px] md:pt-[167px] flex flex-col items-center bg-whitegrey">
      {/* // TODO: Please refactor as much of this layout as possible to remove arbitrary heights, widths, paddings, etc. */}
      {/*   Use flexbox as much as possible */}
      {/* title and dropdowns */}
      <div
        className={`flex flex-col md:gap-12px md:w-728px md:flex-row lg:w-944px xl:w-1202px justify-between items-center pb-32px`}
      >
        <div>
          <p className="md:w-282px font-title text-3xl w-343px h-35px">
            Explore our episodes
          </p>
        </div>
        <div className="flex flex-col md:flex-row text-base items-center font-text">
          {/* <div></div> */}
          <button className="w-343px md:w-148px text-base h-35px font-text">
            Category: All
          </button>
          <button className="w-343px md:w-246px font-text text-base h-35px">
            Sort: Date added ascending
          </button>
        </div>
      </div>
      {loading ? (
        <div className="mt-12">
          <Loading />
        </div>
      ) : (
        <>
          {/* cards */}
          {/* // TODO: Please use a grid layout here to ensure the correct height / width of each card and number of columns in each viewport */}
          {/* After doing so, the styles here should be much simpler and you shouldn't have to wrap <EpisodeCard/> in a <div> */}
          <div className="flex flex-row flex-wrap justify-center gap-20px">
            {data?.episodes?.map(({ id, ...episode }) => (
              <div
                key={id}
                className="h-360px sm:w-343px md:w-358px lg:w-301px xl:w-387px rounded-xl bg-primary text-white"
              >
                <EpisodeCard {...(episode as Required<Episode>)} />
              </div>
            ))}
          </div>
          {/* button */}
          <div className="flex justify-center pt-40px">
            <Link to="/episodes">
              <button className="border-2 border-primary rounded-lg w-222px h-52px">
                Show All Episodes
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
