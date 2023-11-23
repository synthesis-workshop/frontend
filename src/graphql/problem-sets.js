import { gql } from "@apollo/client";

export const GET_PROBLEM_SETS = gql`
  query GetProblemSets(
    $orderBy: [ProblemSetOrderByInput!]!
    $where: ProblemSetWhereInput!
    $take: Int
  ) {
    problemSets(orderBy: $orderBy, where: $where, take: $take) {
      downloadCount
      episode {
        youtubeVideoId
      }
      id
      problemSetFile {
        url
      }
      solutionFile {
        url
      }
      title
    }
  }
`;
