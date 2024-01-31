import { GET_COURSES } from "../../graphql";
import { useQuery } from "@apollo/client";
import { OrderDirection } from "../../__generated__/graphql";
import { Loading, CourseCard } from "../../components";

export const Courses = () => {
  const { loading, data } = useQuery(GET_COURSES, {
    variables: {
      orderBy: {
        publishedAt: OrderDirection.Desc,
      },
    },
  });

  return (
    <div className="pt-[152px] bg-black/[.06] flex flex-col items-center">
      <h1 className="text-section-title md:text-[50px] text-primary font-title mb-12 mx-12 max-w-smPageContent lg:max-w-lgPageContent md:max-w-mdPageContent xl:max-w-xlPageContent">
        Courses on Organic Chemistry
      </h1>
      {loading ? (
        <div className="mt-12">
          <Loading />
        </div>
      ) : (
        <>
          <div className="mb-12 flex flex-col gap-6 w-full max-w-smPageContent lg:max-w-lgPageContent md:max-w-mdPageContent xl:max-w-xlPageContent">
            {data?.courses?.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </>
      )}
      <div className=" border rounded-md border-2 border-black p-7 w-full mb-12 max-w-smPageContent lg:max-w-lgPageContent md:max-w-mdPageContent xl:max-w-xlPageContent">
        <h3 className="font-title text-card-title">
          Contribute to our next course!
        </h3>
        <p className="font-text pt-3 max-w-[659px]">
          If you would like to contribute to our next course, feel free to reach
          out via email at synthesisworkshopvideos@gmail.com to discuss the
          possibilities.
        </p>
      </div>
    </div>
  );
};
