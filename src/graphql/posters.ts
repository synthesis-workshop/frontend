import { gql } from "../__generated__/gql";

export const GET_POSTERS = gql(`
    query GetPosters {
        posters {
            attribution
            file {
              filename
              filesize
              url
            }
            id
            image {
              extension
              filesize
              id
              url
              width
              height
            }
            title
          }
    }
`);
