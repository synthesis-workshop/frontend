import { gql } from "../__generated__/gql";

export const GET_PUBLICATIONS = gql(`
    query GetPublications($orderBy: [PublicationOrderByInput!]!, $take: Int, $skip: Int!) {
        publications(orderBy: $orderBy, take: $take, skip: $skip) {
            author
            description {
                    document
                }
            link
            publishedDate
            publisher
            title
            doi
            id
        }
        publicationsCount
    }
`);