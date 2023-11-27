import { gql } from "@apollo/client";

export const GET_STATS = gql`
  query GetStats {
    meta {
      guestsCount
      subscriberCount
      videoCount
      viewsCount
    }
  }
`;
