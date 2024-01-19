import { gql } from "../__generated__/gql";

export const GET_COURSES = gql(
    `query GetCourse(
        $where: CourseWhereInput!
    ) {
        courses(where: $where) {
            title
            id
            description {
                document
            }
        }
    }`
);