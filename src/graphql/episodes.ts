import { gql } from "../__generated__/gql"; 

export const GET_EPISODES = gql(`
  query GetEpisodes(
    $orderBy: [EpisodeOrderByInput!]!
    $where: EpisodeWhereInput!
    $take: Int
    $skip: Int
  ) {
    episodes(orderBy: $orderBy, where: $where, take: $take, skip: $skip) {
      id
      title
      description {
        document
      }
      episodeNumber
      category
      runtime
      publishedAt
    }
    episodesCount
  }
`);
