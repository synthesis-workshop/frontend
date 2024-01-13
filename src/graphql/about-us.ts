import { gql } from "../__generated__/gql";

export const GET_ABOUT_US = gql(`
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
