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
        }
    }`
);