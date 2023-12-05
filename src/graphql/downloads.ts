import {gql} from "../__generated__/gql";

export const GET_DOWNLOADS = gql(`
    query GetDownloads {
        downloads {
            title
            lastUpdated
            fileDownload {
                url
            }
        }
    }
`);

