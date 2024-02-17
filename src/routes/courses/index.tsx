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
    <div className="pt-28">
      <div className="mx-auto flex flex-col items-center xl:max-w-xlPageContent sm:max-w-smPageContent lg:max-w-lgPageContent md:max-w-mdPageContent xl:max-w-xlPageContent">
        <h1 className="font-title text-[32px] text-primary mb-3 w-full">
          Courses on Organic Chemistry
        </h1>
        <div className="rounded-md border-2 border-black p-7 mb-8 w-full">
          <h2 className="font-title text-card-title">
            Contribute to our next course!
          </h2>
          <p className="font-text pt-3 max-w-[659px]">
            If you would like to contribute to our next course, feel free to
            reach out via email at{" "}
            <a href="mailto:synthesisworkshopvideos@gmail.com">
              synthesisworkshopvideos@gmail.com
            </a>{" "}
            to discuss the possibilities.
          </p>
        </div>
        {loading ? (
          <div className="mt-12">
            <Loading />
          </div>
        ) : (
          <>
            <div className="mb-16 flex flex-col gap-6 w-full">
              {data?.courses?.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
