import { useQuery } from "@apollo/client";
import React from "react";
import { Loading, Button, ProblemSet } from "../../components";
import { GET_PROBLEM_SETS } from "../../graphql/index.js";
import { ProblemSetCard } from "../../components/problem-set-card";

export const ProblemSets: React.FC = () => {
  const isMobile = window.innerWidth < 768;

  const { loading, data } = useQuery(GET_PROBLEM_SETS,{
    variables: {
      orderBy: {
        downloadCount: "desc",
      },
      where: {
        status: "published",
      },
      take: isMobile ? 3 : 6,
    },
  });

  return (
    <div className="bg-white/80 w-screen mx-4 max-w-fit">
      <h2 className="font-title text-[32px] mb-3">Problem Sets</h2>
      <p className="font-text text-lg mb-8 text-primary/80">Problem sets are small tasks in PDF format that will help you to practice and understand concepts of our episodes</p>
      <div className="flex flex-col items-center mb-10">
        <div className="flex flex-col gap-5">
        {loading ? (
            <Loading />
        ) : (
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10">
            {data?.problemSets?.map(({id, ...problemSet}) => (
                <ProblemSetCard key={id} {...(problemSet as Required<ProblemSet>)} />
            ))}
            </div>
        )}
        <Button className="" variant="primary">Show All Problem Sets</Button>
        </div>
      </div>     
    </div>
  );
};

