import React from "react";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { OrderDirection } from "../../__generated__/graphql";
import { Form, Button, EpisodeCard } from "../../components";
import Menu from "../../components/drop-down-menu/drop-down-menu";
import { GET_EPISODES } from "../../graphql";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useForm } from "react-hook-form";

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

interface FormValues {
  searchInput: string;
}

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
  const { data, fetchMore, refetch } = useQuery(GET_EPISODES, {
    variables: {
      orderBy: [
        {
          publishedAt: sorting[0],
        },
      ],
      where: {
        category: {
          in: category,
        },
        status: {
          equals: "published",
        },
        title: {
          contains: "",
        },
      },
      take: isTabletOrMobile ? 9 : 18,
    },
  });

  // This is a custom hook that we will use to show the content after a certain time while the loading skeletons are being shown

  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  const { handleSubmit, register } = useForm<FormValues>();
  const searchInputRules = {
    required: "This field is required",
  };

  // This is the function that will be called when the form is submitted

  const onSubmit = handleSubmit((data) => {
    refetch({
      orderBy: [
        {
          publishedAt: sorting[0],
        },
      ],
      where: {
        category: {
          in: category,
        },
        status: {
          equals: "published",
        },
        title: {
          contains: data.searchInput,
        },
      },
      take: isTabletOrMobile ? 9 : 18,
    });
  });

  return (
    <div className="bg-grey px-4">
      <div className="flex md:flex-row gap-4 sm:flex-col pt-32 pb-8 justify-between">
        <h2 className="font-title text-primary text-3xl">
          Explore our episodes
        </h2>
        <div className="flex sm:flex-col md:flex-row gap-4">
          <Menu
            title={"Category"}
            list={CategoryList}
            changeMenu={changeCategory}
          />
          <Menu title={"Sort"} list={SortList} changeMenu={changeSort} />
        </div>
      </div>
      <div className="h-0 md:h-auto invisible md:visible">
        <Form className="invisible md:visible w-full pb-8" onSubmit={onSubmit}>
          <Form.SearchBar
            className="invisible md:visible w-full"
            placeholder="Search episodes"
            inputId="searchInput"
            ariaLabel="Search episodes"
            name="searchInput"
            rules={searchInputRules}
            register={register}
          />
          <Button
            className="invisible md:visible"
            type="submit"
            variant="primary"
          >
            Search
          </Button>
        </Form>
      </div>
      <div
        className={`grid lg:grid-cols-3 lg:gap-5 auto-rows-[360px] gap-5 md:grid-cols-2 md:gap-3 sm:grid-cols-1`}
      >
        {showContent ? (
          data?.episodes?.map((episode) => (
            <EpisodeCard key={episode.id} {...episode} />
          ))
        ) : (
          <>
            <Skeleton height={319} />
            <Skeleton height={319} />
            <Skeleton height={319} />
          </>
        )}
      </div>
      <div className="flex justify-center">
        {data?.episodesCount &&
          data.episodes &&
          data.episodesCount > data.episodes.length && (
            <Button
              className="my-10"
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
    </div>
  );
};
