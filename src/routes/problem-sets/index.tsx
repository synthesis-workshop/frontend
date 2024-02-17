import { useQuery } from "@apollo/client";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Button, ProblemSetCard } from "../../components";
import { GET_PROBLEM_SETS } from "../../graphql";
import { OrderDirection } from "../../__generated__/graphql";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ProblemSetsPage: React.FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 450px)" });

  const { data, fetchMore } = useQuery(GET_PROBLEM_SETS, {
    variables: {
      orderBy: {
        downloadCount: OrderDirection.Desc,
      },
      take: isTabletOrMobile ? 6 : 18,
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
          <div className="items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {showContent ? (
                data?.problemSets?.map((problemSet) => (
                  <ProblemSetCard key={problemSet.id} problemSet={problemSet} />
                ))
              ) : (
                <>
                  <Skeleton height={316} />
                  <Skeleton height={316} />
                  <Skeleton height={316} />
                </>
              )}
            </div>
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
    </div>
  );
};
