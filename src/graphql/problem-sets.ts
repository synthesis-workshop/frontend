import { gql } from "../__generated__/gql";

export const GET_PROBLEM_SETS = gql(`
  query Query($orderBy: [ProblemSetOrderByInput!]!, $take: Int) {
    problemSets(orderBy: $orderBy, take: $take) {
      downloadCount
      episode {
        youtubeVideoId
      }
      problemSetFile {
        url
      }
      solutionFile {
        url
      }
      title
      id
    }
  }
`);
