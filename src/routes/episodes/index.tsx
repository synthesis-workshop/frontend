
import { useQuery } from "@apollo/client";
import cx from "classnames";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { OrderDirection } from "../../__generated__/graphql";
import { Button, EpisodeCard} from "../../components";
import Menu from "../../components/drop-down-menu/drop-down-menu";
import { GET_EPISODES } from "../../graphql";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


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
  const { data, fetchMore} = useQuery(GET_EPISODES, {
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

  return <div className="bg-grey w-screen px-4">
  <div
    className={cx(
      "w-full justify-between items-center pb-8 gap-5",
      "md:flex-row md:items-start md:gap-0 ",
    )}
  >
    <h2 className="font-title text-primary text-3xl pt-32 pb-5">
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
  <div className="hidden md:visible">
    <p>Search Bar</p>
  </div>
  <div
    className={`grid lg:grid-cols-3 lg:gap-5 auto-rows-[360px] gap-5 md:grid-cols-2 md:gap-3 sm:grid-cols-1`}
  >
    {data?.episodes?.map((episode) => (
      <EpisodeCard key={episode.id} {...episode} />
    )) || <><Skeleton height={319} /><Skeleton height={319} /><Skeleton height={319} /></>}
  </div>
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
    }}>Load More</Button>
  )}
</div>
}

