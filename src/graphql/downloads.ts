import {gql} from "../__generated__/gql";

export const GET_DOWNLOADS = gql(`
    query GetDownloads(
        $orderBy:[DownloadOrderByInput!]
    ) {
        downloads(orderBy: $orderBy) {
            title
            lastUpdated
            fileDownload {
                url
            }
            id
        }
    }
`);

