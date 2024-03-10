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
      youtubeVideoId
    }
    episodesCount(where: $where)
  }
`);

export const GET_EPISODE = gql(`
query GetEpisode($where: EpisodeWhereUniqueInput!  )
{

  episode(where: $where) {
    id
    title
    description {
      document
    }  
    episodeNumber
    youtubeVideoId
    relatedEpisodes {
      id
      episodeNumber
      title
      relatedEpisodesCount
      category
      runtime
    }
    
  }
}
`);

export const GET_NEXT_EPISODES = gql(`
query getNextEpisode($take: Int, $where: EpisodeWhereInput!, $orderBy: [EpisodeOrderByInput!]!) {
  episodes(take: $take, where: $where, orderBy: $orderBy) {
    id
    title
    description {
      document
    }
    category
    runtime
    episodeNumber
  }
  episodesCount(where: $where)
}
`);
