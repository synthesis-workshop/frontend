import { gql } from "../__generated__/gql";

export const GET_COURSE = gql(`
  query getCourse($where: CourseWhereUniqueInput!) {
    course(where: $where) {
      description {
        document
      }
      durationHrs
      episodesCount
      id
      price
      problemSetsCount
      title
      publishedAt
      episodes {
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
      problemSets {
        id
        title
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
        downloadCount
        episode {
            id
            youtubeVideoId
        }
      }
    }
  }
`);
