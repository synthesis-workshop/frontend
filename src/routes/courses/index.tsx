import * as React from "react";
import { GET_COURSES } from "../../graphql";
import { useQuery } from "@apollo/client";
import { OrderDirection } from "../../__generated__/graphql";
import { CourseCard } from "../../components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Courses = () => {
  const { data } = useQuery(GET_COURSES, {
    variables: {
      orderBy: {
        publishedAt: OrderDirection.Desc,
      },
    },
  });

  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="pt-28">
      <div className="mx-auto flex flex-col items-center max-w-xlPageContent px-2 sm:px-4 md:px-8">
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
            <a
              href="mailto:synthesisworkshopvideos@gmail.com"
              className="break-words"
            >
              synthesisworkshopvideos@gmail.com
            </a>{" "}
            to discuss the possibilities.
          </p>
        </div>
        {showContent ? (
          <div className="gap-6 w-full">
            {data?.courses?.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <Skeleton height={360} borderRadius={12} />
        )}
      </div>
    </div>
  );
};
