import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Episode, OrderDirection } from "../../__generated__/graphql";
import { EpisodeCard, Loading } from "../../components";
import Example from "../../components/menu/menu";
import { GET_EPISODES } from "../../graphql";

const CategoryList = [
  {
    name: "All",
    value: [
      "Research Spotlight",
      "Total Synthesis",
      "Named Reaction",
      "Culture of Chemistry",
    ],
  },

  { name: "Research Spotlight", value: ["Research Spotlight"] },
  { name: "Total Synthesis", value: ["Total Synthesis"] },
  { name: "Named Reaction", value: ["Named Reaction"] },
  { name: "Culture of Chemistry", value: ["Culture of Chemistry"] },
];

const SortList = [
  { name: "Date added ascending", value: ["Asc"] },
  { name: "Date added descending", value: ["Desc"] },
];

export const EpisodesSection = () => {
  const [category, setCategory] = useState(CategoryList[0].value);
  const [sorting, setSorting] = useState(SortList[0].value);

  const changeCategory = (newState) => {
    setCategory(newState);
  };
  const changeSort = (newState) => {
    setSorting(newState);
  };

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 450px)" });
  const { loading, data } = useQuery(GET_EPISODES, {
    variables: {
      orderBy: [
        {
          // TODO: This needs to be a state variable based on the sorting dropdown
          publishedAt: OrderDirection[sorting[0]],
        },
      ],
      where: {
        category: {
          // TODO: This needs to be a state variable based on the category dropdown
          in: category,
        },
        status: {
          equals: "published",
        },
      },
      take: isTabletOrMobile ? 3 : 6,
    },
  });

  return (
    <div className={`pt-36 max-w-[1280px] mx-10`}>
      <div
        className={`w-full flex md:flex-row justify-between md:pt-1 md:items-start sm:items-center sm:flex-col sm:pt-36`}
      >
        <div>
          <p className=" font-title text-3xl sm:pb-5">Explore our episodes</p>
        </div>
        <div className="font-text flex md:flex-row gap-4 md:pb-0 sm:pb-8 sm:flex-col">
          {/* <button className="text-base font-text">Category: All</button> */}
          <Example
            title={"Category"}
            list={CategoryList}
            changeMenu={changeCategory}
          />
          <Example title={"Sort"} list={SortList} changeMenu={changeSort} />
          {/* <button className="font-text text-base ">
            Sort: Date added ascending
          </button> */}
        </div>
      </div>
      {loading ? (
        <div className="mt-12">
          <Loading />
        </div>
      ) : (
        <>
          <div
            className={`grid lg:grid-cols-3 lg:gap-5 auto-rows-[360px] md:grid-cols-2 md:gap-3 sm:grid-cols-1`}
          >
            {data?.episodes?.map(({ id, ...episode }) => (
              <EpisodeCard key={id} {...(episode as Required<Episode>)} />
            ))}
          </div>
          {/* button */}
          <div className="flex justify-center pt-10">
            <Link to="/episodes">
              <button className="border-2 border-primary rounded-lg w-56 h-13">
                Show All Episodes
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
