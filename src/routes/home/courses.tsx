import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { Loading, Button, CourseCard } from "../../components";
import { GET_COURSES } from "../../graphql";
import { OrderDirection } from "../../__generated__/graphql";

export const Courses: React.FC = () => {
  const { loading, data } = useQuery(GET_COURSES, {
    variables: {
      orderBy: {
        publishedAt: OrderDirection.Desc,
      },
      take: 1,
    },
  });

  return (
    <div className="flex flex-col w-full mt-20 max-w-xlPageContent px-2 sm:px-4 md:px-8">
      <h2 className="font-title text-primary text-section-title">
        Courses on Organic Chemistry
      </h2>
      {loading ? (
        <div className="mt-12">
          <Loading />
        </div>
      ) : (
        <>
          <div className="mt-8">
            {data?.courses?.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
          <div className="mt-7 border rounded-md border-2 border-black p-7">
            <h3 className="font-title text-card-title">
              Contribute to our next course!
            </h3>
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
          <Link to="/courses" className="mt-10 mx-auto">
            <Button variant="primary">Show All Courses</Button>
          </Link>
        </>
      )}
    </div>
  );
};
