import React, { useMemo } from "react";
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
import { useSearchParams } from "react-router-dom";
import { isEmpty, omitBy } from "lodash";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState<string[]>(CategoryList[0].value);
  const [sorting, setSorting] = useState<OrderDirection[]>(SortList[0].value);

  const changeCategory = (newState: string[]) => {
    setCategory(newState);
  };
  const changeSort = (newState: OrderDirection[]) => {
    setSorting(newState);
  };

  const { handleSubmit, register, watch, setValue } = useForm<FormValues>({
    defaultValues: {
      searchInput: searchParams.get("search") || "",
    },
  });

  // Want to make the initial query using the search term, but all future queries should be made using 'refetch'
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchInput = useMemo(() => searchParams.get("search") || "", []);

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
        OR: [
          {
            title: {
              contains: searchInput,
            },
          },
          {
            keywords: {
              some: {
                name: {
                  contains: searchInput,
                },
              },
            },
          },
        ],
      },
      take: isTabletOrMobile ? 9 : 18,
    },
    // This is a custom fetch policy that will overwrite the cache with the new data instead of merging with cached data
    refetchWritePolicy: "overwrite",
  });

  // This is a custom hook that we will use to show the content after a certain time while the loading skeletons are being shown

  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

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
        OR: [
          {
            title: {
              contains: data.searchInput,
            },
          },
          {
            keywords: {
              some: {
                name: {
                  contains: data.searchInput,
                },
              },
            },
          },
        ],
      },
      take: isTabletOrMobile ? 9 : 18,
    });
    setSearchParams(
      omitBy(
        {
          search: data.searchInput,
        },
        isEmpty,
      ),
    );
  });

  return (
    <div className="mx-auto flex flex-col items-center max-w-xlPageContent px-2 sm:px-4 md:px-8">
      <div className="flex md:flex-row gap-4 flex-col pt-32 pb-8 justify-between w-full">
        <h2 className="font-title text-primary text-3xl">
          Explore our episodes
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <Menu
            title={"Category"}
            list={CategoryList}
            changeMenu={changeCategory}
          />
          <Menu title={"Sort"} list={SortList} changeMenu={changeSort} />
        </div>
      </div>
      <Form
        className="flex flex-col md:flex-row w-full pb-8"
        onSubmit={onSubmit}
      >
        <Form.SearchBar
          className="grow"
          placeholder="Search episodes"
          inputId="searchInput"
          ariaLabel="Search episodes"
          name="searchInput"
          register={register}
          watch={watch}
          onClear={() => {
            setValue("searchInput", "");
            onSubmit();
          }}
        />
        <Button type="submit" variant="primary">
          Search
        </Button>
      </Form>
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
      <div className="flex justify-center my-10">
        {data?.episodesCount &&
          data.episodes &&
          data.episodesCount > data.episodes.length && (
            <Button
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
