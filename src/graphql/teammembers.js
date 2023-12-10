import { gql } from "@apollo/client";

export const GET_TEAM = gql`
  query GetTeam($orderBy: [TeamMemberOrderByInput!]!) {
    teamMembers(orderBy: $orderBy) {
      id
      name
      title
      group
      image {
        url
        id
      }
    }
  }
`;
