import { gql } from "../__generated__/gql";

export const GET_PROBLEM_SETS = gql(`
  query GetProblemSets($orderBy: [ProblemSetOrderByInput!]!, $take: Int) {
    problemSets(orderBy: $orderBy, take: $take) {
      downloadCount
      episode {
        id
        youtubeVideoId
      }
      problemSetFile {
        url
        filename
        filesize
      }
      solutionFile {
        url
        filename
        filesize
      }
      title
      id
    }
  }
`);
