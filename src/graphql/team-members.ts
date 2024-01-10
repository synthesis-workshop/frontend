import { gql } from "../__generated__/gql";

export const GET_TEAM = gql(`
  query GetTeam($orderBy: [TeamMemberOrderByInput!]!) {
    teamMembers(orderBy: $orderBy) {
      id
      name
      title
      group
      image {
        extension
        filesize
        height
        id
        url
        width
      }
    }
  }
`);
