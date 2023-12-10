import { gql } from "../__generated__/gql";

export const GET_ABOUTUS = gql(`
query GetAboutUsInfo {
    metas {
      id
      about {
        document
      }
      mission {
        document
      }
      
    }
      
    }`);
