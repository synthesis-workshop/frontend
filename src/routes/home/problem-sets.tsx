import { useQuery } from "@apollo/client";
import React from "react";
import { Loading, Button, ProblemSetCard } from "../../components";
import { GET_PROBLEM_SETS } from "../../graphql/index.js";
import { Link } from "react-router-dom";


export const ProblemSets: React.FC = () => {
  const isMobile = window.innerWidth < 768;

  const { loading, data } = useQuery(GET_PROBLEM_SETS,{
    variables: {
      orderBy: {
        downloadCount: "desc",
      },
      take: isMobile ? 3 : 6,
    },
  });

  return (
    <div className="bg-grey mx-auto w-[343px] md:w-11/12 max-w-[1280px] flex flex-col items-center">
      <div>
        <h2 className="font-title text-[32px] mb-3">Problem Sets</h2>
        <p className="font-text text-lg mb-8 text-primary/80 md:max-w-xl">Problem sets are small tasks in PDF format that will help you to practice and understand concepts of our episodes</p>
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
          <Link to="/problem-sets">
          <Button className="mt-10" variant="primary">Show All Problem Sets</Button>
          </Link>
        </div>
        </div>
    </div>
  );
};

