import React from "react";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { OrderDirection } from "../../__generated__/graphql";
import { Button, EpisodeCard } from "../../components";
import Menu from "../../components/drop-down-menu/drop-down-menu";
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
  { name: "Date added ascending", value: [OrderDirection.Asc] },
  { name: "Date added descending", value: [OrderDirection.Desc] },
];

export const Episodes = () => {
  const [category, setCategory] = useState<string[]>(CategoryList[0].value);
  const [sorting, setSorting] = useState<OrderDirection[]>(SortList[0].value);

  const changeCategory = (newState: string[]) => {
    setCategory(newState);
  };
  const changeSort = (newState: OrderDirection[]) => {
    setSorting(newState);
  };

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 450px)" });
  const { loading, data, fetchMore } = useQuery(GET_EPISODES, {
    variables: {
      orderBy: [
        {
          // TODO: This needs to be a state variable based on the sorting dropdown
          publishedAt: sorting[0],
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
      take: isTabletOrMobile ? 9 : 18,
    },
  });

  return (
    <div className="bg-grey flex flex-col max-w-[1280px]">
      <div
        className={cx(
          "w-full flex flex-col justify-between items-center pb-8 gap-5",
          "md:flex-row md:items-start md:gap-0 mt-[238px] md:mt-[167px] ",
        )}
      >
        <h2 className="font-title text-primary text-3xl">
          Explore our episodes
        </h2>
        <div className="font-text flex md:flex-row gap-4 sm:flex-col">
          <Menu
            title={"Category"}
            list={CategoryList}
            changeMenu={changeCategory}
          />
          <Menu title={"Sort"} list={SortList} changeMenu={changeSort} />
        </div>
      </div>
      <div>
        <p>Search Bar</p>
      </div>
      {loading ? (
        <div className="mt-12">
          <Loading />
        </div>
      ) : (
        <>
          <div
            className={`grid lg:grid-cols-3 lg:gap-5 auto-rows-[360px] gap-5 md:grid-cols-2 md:gap-3 sm:grid-cols-1`}
          >
            {data?.episodes?.map((episode) => (
              <EpisodeCard key={episode.id} {...episode} />
            ))}
          </div>
        </>
      )}
      {data?.episodesCount &&
        data.episodes &&
        data.episodesCount > data.episodes.length && (
          <Button
            className="mt-10"
            variant="primary"
            onClick={() => {
              fetchMore({
                variables: {
                  skip: data?.episodes?.length,
                },
              });
            }}
          >
            Load More
          </Button>
        )}
    </div>
  );
};
