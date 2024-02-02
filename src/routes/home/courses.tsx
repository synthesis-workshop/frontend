import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { Button, CourseCard } from "../../components";
import { GET_COURSES } from "../../graphql";
import { OrderDirection } from "../../__generated__/graphql";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Courses: React.FC = () => {
  const { data } = useQuery(GET_COURSES, {
    variables: {
      orderBy: {
        publishedAt: OrderDirection.Desc,
      },
      take: 1,
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
    <div className="w-full mt-20 max-w-smPageContent lg:max-w-lgPageContent md:max-w-mdPageContent xl:max-w-xlPageContent">
      <h2 className="font-title text-primary text-section-title">
        Courses on Organic Chemistry
      </h2>
      <div className="mt-8">
        {data?.courses?.map((course) =>
          showContent ? (
            <CourseCard key={course.id} {...course} />
          ) : (
            <Skeleton height={360} borderRadius={12} />
          ),
        )}
      </div>
      <div className="mt-7 border rounded-md border-2 border-black p-7">
        <h3 className="font-title text-card-title">
          Contribute to our next course!
        </h3>
        <p className="font-text pt-3 max-w-[659px]">
          If you would like to contribute to our next course, feel free to reach
          out via email at{" "}
          <a href="mailto:synthesisworkshopvideos@gmail.com">
            synthesisworkshopvideos@gmail.com
          </a>{" "}
          to discuss the possibilities.
        </p>
      </div>
      <Link to="/courses" className="mt-10 flex justify-center">
        <Button variant="primary">Show All Courses</Button>
      </Link>
    </div>
  );
};
