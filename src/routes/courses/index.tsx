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

  return <div className="flex flex-col items-center">This is Courses</div>;
};
