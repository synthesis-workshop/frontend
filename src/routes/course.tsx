// import { useQuery } from "@apollo/client"
// import { GET_COURSE } from "../../graphql/course"
// import { useParams } from "react-router";
// import { ProblemSetCard, EpisodeCard } from "../../components";
// import { Episode, ProblemSet } from "../../__generated__/graphql";
// import { DocumentRenderer } from "@keystone-6/document-renderer";


// interface Course {
//     id: string;
//     title: string;
//     description: Document;
//     price: number;
//     durationHrs: number;
//     publishedAt: string;
//     episodesCount: number;
//     problemSetsCount: number;
//   }

//   interface CourseData {
//     courses: [Course];
//     episodes: [Episode];
//     problemSets: [ProblemSet];
//   }

// export const CourseData: React.FC = () => {
//     const { courseId } = useParams<{ courseId: string }>();
//     const {loading, data} = useQuery<CourseData>(GET_COURSE, {
//         variables: {
//             where: {
//                 id: {
//                     equals: courseId
//                 }
//             },
//         }
//     });


//     const course = data?.courses[0];
//     const episodes = data?.episodes;
//     const problemSets = data?.problemSets;
    
 


//     return (
//         <div className="bg-black/[.06] w-full flex flex-col items-center">
//             <div className="max-w-xlPageContent w-11/12 mt-[152px] mb-20" id="header">
//                 <div className="flex mb-8 flex-col sm:flex-col md:flex-col lg:flex-row lg:justify-between lg:items-center">
//                     <h1 className="text-[50px] text-primary font-title mb-2 mr-1">{course?.title}</h1>
//                     <div className="flex gap-3">
//                         <div className="p-2 bg-brightYellow rounded">{course?.price === 0 ? "Free" : course?.price + "$"}</div>
//                         <div className="p-2 border border-[#3A3C46CC] rounded">{course?.episodesCount} Videos</div>
//                         <div className="p-2 border border-[#3A3C46CC] rounded">{course?.durationHrs === 1 ? "1 Hour" : course?.durationHrs + " Hours"}</div>
//                         <div className="p-2 border border-[#3A3C46CC] rounded">{course?.problemSetsCount} Tasks</div>
//                     </div>
//                 </div>
//                 <div className="max-w-[590px] text-primary self-start font-text">{course && <DocumentRenderer document={course?.description} />}</div> 
//             </div>
//                 <div className="max-w-xlPageContent w-11/12" id="body">
//                     <h2 className="text-[32px] text-primary font-title mb-8">Course episodes & tasks</h2>
//                 <div className="mb-[116px] grid lg:grid-cols-3 lg:gap-5 auto-rows-[360px] gap-5 md:grid-cols-2 md:gap-3 sm:grid-cols-1">
//                     {!loading && data && (
//                         <>
//                             {episodes?.map(episode => {
//                                 return <EpisodeCard key={episode.id} {...episode} />
//                             })}
//                             {problemSets?.map(problemSet => {
//                                 return <ProblemSetCard key={problemSet.id} problemSet={problemSet} />
//                             })}
//                         </>
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }

import { useQuery } from "@apollo/client";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import { useParams } from "react-router";
import { GET_COURSE } from "../graphql/course";
import { ProblemSetCard, EpisodeCard } from "../components";

export const Course = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { loading, data } = useQuery(GET_COURSE, {
    variables: {
      where: {
        id: courseId,
      },
    },
  });

  const course = data?.course;
  const episodes = course?.episodes;
  const problemSets = course?.problemSets;

  return (
    <div className="bg-black/[.06] flex flex-col items-center">
      <div className="max-w-xlPageContent w-11/12 mt-[152px] mb-20" id="header">
        <div className="flex mb-8 flex-col gap-2 sm:flex-col md:flex-col lg:flex-row lg:justify-between lg:items-center">
          <h1 className="text-[50px] text-primary font-title">
            {course?.title}
          </h1>
          <div className="flex gap-3">
            <div className="p-2 bg-accent rounded">
              {course?.price === 0 ? "Free" : course?.price + "$"}
            </div>
            <div className="p-2 border border-primary/80 rounded">
              {course?.episodesCount} Videos
            </div>
            <div className="p-2 border border-primary/80 rounded">
              {course?.durationHrs === 1
                ? "1 Hour"
                : course?.durationHrs + " Hours"}
            </div>
            <div className="p-2 border border-primary/80 rounded">
              {course?.problemSetsCount} Tasks
            </div>
          </div>
        </div>
        <div className="max-w-[590px] text-primary self-start font-text">
          {!loading && course && (
            <DocumentRenderer document={course?.description?.document} />
          )}
        </div>
      </div>
      <div className="max-w-xlPageContent w-11/12" id="body">
        <h2 className="text-[32px] text-primary font-title mb-8">
          Course episodes & tasks
        </h2>
        <div className="mb-[116px] grid lg:grid-cols-3 lg:gap-5 auto-rows-[360px] gap-5 md:grid-cols-2 md:gap-3 sm:grid-cols-1">
          {!loading && course && (
            <>
              {episodes?.map((episode) => {
                return <EpisodeCard key={episode.id} {...episode} />;
              })}
              {problemSets?.map((problemSet) => {
                return (
                  <ProblemSetCard key={problemSet.id} problemSet={problemSet} />
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
