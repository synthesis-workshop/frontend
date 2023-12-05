import React from "react";
import { useQuery } from "@apollo/client";
import { Loading, Button, ProblemSetCard } from "../../components";



export const Episodes = () => {
  const isMobile = window.innerWidth < 768;

  


  return <div className="bg-grey mx-auto w-[343px] md:w-11/12 max-w-[1280px] flex flex-col items-center">
  <div>
    <h2 className="font-title text-[32px] mb-3">Episodes</h2>
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
      
      <Button className="mt-10" variant="primary">Show All Problem Sets</Button>
      
    </div>
    </div>
</div>;
};
