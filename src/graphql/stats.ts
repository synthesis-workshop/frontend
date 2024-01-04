import { gql } from "../__generated__/gql";

export const GET_STATS = gql(`
  query GetStats {
    meta {
      guestsCount
      subscriberCount
      videoCount
      viewsCount
    }
  }
`);
