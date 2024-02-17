import { useQuery } from "@apollo/client";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Loading, Button, ProblemSetCard } from "../../components";
import { GET_PROBLEM_SETS } from "../../graphql";
import { OrderDirection } from "../../__generated__/graphql";

export const ProblemSetsPage: React.FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 450px)" });

  const { loading, data, fetchMore } = useQuery(GET_PROBLEM_SETS, {
    variables: {
      orderBy: {
        downloadCount: OrderDirection.Desc,
      },
      take: isTabletOrMobile ? 6 : 18,
    },
  });

  return (
    <div className="w-full pt-28 pb-[84px]">
      <div className="mx-auto md:w-11/12 px-4 xl:max-w-xlPageContent flex flex-col items-center">
        <div className="w-full">
          <h2 className="font-title text-[32px] text-primary mb-3">
            Problem Sets
          </h2>
          <p className="font-text text-lg mb-8 text-primary/80">
            Problem sets are small tasks in PDF format that will help you to
            practice and understand concepts of our episodes
          </p>
        </div>
        <div className="flex flex-col items-center">
          {loading ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data?.problemSets?.map((problemSet) => (
                <ProblemSetCard key={problemSet.id} problemSet={problemSet} />
              ))}
            </div>
          )}
          {data?.problemSetsCount &&
            data.problemSets &&
            data.problemSetsCount > data.problemSets.length && (
              <Button
                className="mt-10"
                variant="primary"
                onClick={() => {
                  fetchMore({
                    variables: {
                      skip: data?.problemSets?.length,
                    },
                  });
                }}
              >
                Load More
              </Button>
            )}
        </div>
      </div>
    </div>
  );
};
