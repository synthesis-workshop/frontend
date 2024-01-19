import { useQuery } from "@apollo/client"
import { GET_COURSES } from "../../graphql/courses"
import { useParams } from "react-router";

interface Course {
    id: string;
    title: string;
    description: typeof document;
    // Add other fields you need
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
    console.log(course)

    if (loading) {
        return <p>Loading...</p>
    }
    
    return (
        <>
            <div className="max-w-xlPageContent w-11/12 mt-[152px] mb-20" id="header">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-[50px] text-primary font-title">{course?.title}</h1>
                    <div className="flex gap-3">
                        <div className="p-2 bg-brightYellow rounded">Free!</div>
                        <div className="p-2 border border-[#3A3C46CC] rounded">16 Videos</div>
                        <div className="p-2 border border-[#3A3C46CC] rounded">18 Hours</div>
                        <div className="p-2 border border-[#3A3C46CC] rounded">5 Tasks</div>
                    </div>
                </div>
            <div className="max-w-[590px] text-primary self-start font-text">{course?.description?.document[0]?.children[0]?.text}</div> 
            </div>
                <div className="max-w-xlPageContent w-11/12" id="body">
                    <h2 className="text-[32px] text-primary font-title mb-8">Course episodes & tasks</h2>
                <div className="mb-[116px]">Course cards go here</div>
            </div>
        </>
    )
}