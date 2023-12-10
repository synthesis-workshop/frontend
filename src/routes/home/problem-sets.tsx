import { useQuery } from "@apollo/client";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Loading, Button, ProblemSetCard } from "../../components";
import { GET_PROBLEM_SETS } from "../../graphql";
import { OrderDirection } from "../../__generated__/graphql";

export const ProblemSets: React.FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 450px)" });

  const { loading, data } = useQuery(GET_PROBLEM_SETS, {
    variables: {
      orderBy: {
        downloadCount: OrderDirection.Desc,
      },
      take: isTabletOrMobile ? 3 : 6,
    },
  });

  return (
    <div className="flex flex-col max-w-[1280px] mx-4 md:mx-5">
      <h2 className="font-title text-primary text-3xl mb-3">Problem Sets</h2>
      <p className="font-text text-lg mb-8 text-primary/80 md:max-w-xl">
        Problem sets are small tasks in PDF format that will help you to
        practice and understand concepts of our episodes
      </p>
      {loading ? (
        <div className="mt-12">
          <Loading />
        </div>
      ) : (
        <>
          <div className="grid lg:grid-cols-3 lg:gap-5 auto-rows-[360px] gap-5 md:grid-cols-2 md:gap-3 sm:grid-cols-1">
            {data?.problemSets?.map((problemSet) => (
              <ProblemSetCard key={problemSet.id} problemSet={problemSet} />
            ))}
          </div>
          <Link to="/problem-sets" className="mt-10 mx-auto">
            <Button variant="primary">Show All Problem Sets</Button>
          </Link>
        </>
      )}
    </div>
  );
};
