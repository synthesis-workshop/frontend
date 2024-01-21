import { gql } from "../__generated__/gql";

export const GET_COURSES = gql(`
  query getCourse($where: CourseWhereInput!) {
    courses(where: $where) {
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
    }
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
`);
