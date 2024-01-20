import { useQuery } from "@apollo/client"
import { GET_COURSES } from "../../graphql/courses"
import { useParams } from "react-router";
import { ProblemSetCard, EpisodeCard } from "../../components";

interface Course {
    id: string;
    title: string;
    description: typeof document;
  }

  interface CourseData {
    courses: Course[];
  }

export const CourseData: React.FC = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const {loading, data} = useQuery<CourseData>(GET_COURSES, {
        variables: {
            where: {
                id: {
                    equals: courseId
                }
            }
        }
    });

    const course = data?.courses[0];
    

    if (loading) {
        return <p>Loading...</p>
    }
    
    return (
        <>
            <div className="max-w-xlPageContent w-11/12 mt-[152px] mb-20" id="header">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-[50px] text-primary font-title">{course?.title}</h1>
                    <div className="flex gap-3">
                        <div className="p-2 bg-brightYellow rounded">Price</div>
                        <div className="p-2 border border-[#3A3C46CC] rounded">{course?.episodes?.length} Videos</div>
                        <div className="p-2 border border-[#3A3C46CC] rounded">Time</div>
                        <div className="p-2 border border-[#3A3C46CC] rounded">{course?.problemSets.length} Tasks</div>
                    </div>
                </div>
            <div className="max-w-[590px] text-primary self-start font-text">{course?.description?.document[0]?.children[0]?.text}</div> 
            </div>
                <div className="max-w-xlPageContent w-11/12" id="body">
                    <h2 className="text-[32px] text-primary font-title mb-8">Course episodes & tasks</h2>
                <div className="mb-[116px] grid lg:grid-cols-3 lg:gap-5 auto-rows-[360px] gap-5 md:grid-cols-2 md:gap-3 sm:grid-cols-1">
                    <ProblemSetCard problemSet={course?.problemSets[0]} />
                    <EpisodeCard {...course?.episodes[0]} />
                </div>
            </div>
        </>
    )
}