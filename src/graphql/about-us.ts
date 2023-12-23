import { gql } from "../__generated__/gql";
export const GET_ABOUT_US = gql(`
query GetAboutUsInfo {
    links {
        id
        link
        title 
        logo
    }
    metas {    
        id
        mission {
          document
        }
        about {  
          document
        }
    
      }
  }
  `);
