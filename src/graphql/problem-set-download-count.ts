import { gql } from '@apollo/client';

export const GET_DOWNLOAD_COUNT = gql`
  query GetDownloadCount($problemSetId: String!) {
    getDownloadCount(problemSetId: $problemSetId)
  }
`;
