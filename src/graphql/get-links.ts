import { gql } from "../__generated__/gql";
export const GET_LINKS = gql(`
query GetLinks {
    links {
      title
      link
      logo
    }
  }
  `);
