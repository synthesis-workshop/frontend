import { gql } from "../__generated__/gql";

export const GET_COURSES = gql(`
  query Query($orderBy: [CourseOrderByInput!]!, $take: Int) {
    courses(orderBy: $orderBy, take: $take) {
      description {
        document
      }
      durationHrs
      episodesCount
      id
      price
      problemSetsCount
      title
    }
  }
`);
