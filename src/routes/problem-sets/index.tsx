import { useQuery } from "@apollo/client";
import React from "react";
import { Loading, Button, ProblemSetCard } from "../../components";
import { GET_PROBLEM_SETS } from "../../graphql/index.js";


export const ProblemSets: React.FC = () => {
  const isMobile = window.innerWidth < 768;

  const { loading, data } = useQuery(GET_PROBLEM_SETS,{
    variables: {
      orderBy: {
        downloadCount: "desc",
      },
      take: isMobile ? 6 : 18,
    },
  });

  return (
    <div className="bg-white/80 mx-2 w-screen max-w-[1280px] items-center">
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
          <Button className="mt-10" variant="primary">Show More Problem Sets</Button>
        </div>
    </div>
  );
};



