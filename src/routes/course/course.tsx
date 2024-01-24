import { useQuery } from "@apollo/client"
import { GET_COURSE } from "../../graphql/course"
import { useParams } from "react-router";
import { ProblemSetCard, EpisodeCard } from "../../components";
import { Episode, ProblemSet } from "../../__generated__/graphql";


interface Course {
    id: string;
    title: string;
    description: Document;
    price: number;
    durationHrs: number;
    publishedAt: string;
    episodesCount: number;
    problemSetsCount: number;
  }

  interface CourseData {
    courses: [Course];
    episodes: [Episode];
    problemSets: [ProblemSet];
  }

export const CourseData: React.FC = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const {loading, data} = useQuery<CourseData>(GET_COURSE, {
        variables: {
            where: {
                id: {
                    equals: courseId
                }
            },
        }
    });


    const course = data?.courses[0];
    const episodes = data?.episodes;
    const problemSets = data?.problemSets;
    
 


    return (
        <>
            <div className="max-w-xlPageContent w-11/12 mt-[152px] mb-20" id="header">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-[50px] text-primary font-title">{course?.title}</h1>
                    <div className="flex gap-3">
                        <div className="p-2 bg-brightYellow rounded">{course?.price === 0 ? "Free" : course?.price + "$"}</div>
                        <div className="p-2 border border-[#3A3C46CC] rounded">{course?.episodesCount} Videos</div>
                        <div className="p-2 border border-[#3A3C46CC] rounded">{course?.durationHrs === 1 ? "1 Hour" : course?.durationHrs + " Hours"}</div>
                        <div className="p-2 border border-[#3A3C46CC] rounded">{course?.problemSetsCount} Tasks</div>
                    </div>
                </div>
                <div className="max-w-[590px] text-primary self-start font-text">{course?.description?.document[0]?.children[0]?.text}</div> 
            </div>
                <div className="max-w-xlPageContent w-11/12" id="body">
                    <h2 className="text-[32px] text-primary font-title mb-8">Course episodes & tasks</h2>
                <div className="mb-[116px] grid lg:grid-cols-3 lg:gap-5 auto-rows-[360px] gap-5 md:grid-cols-2 md:gap-3 sm:grid-cols-1">
                    {!loading && data && (
                        <>
                            {episodes?.map(episode => {
                                return <EpisodeCard key={episode.id} {...episode} />
                            })}
                            {problemSets?.map(problemSet => {
                                return <ProblemSetCard key={problemSet.id} problemSet={problemSet} />
                            })}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}