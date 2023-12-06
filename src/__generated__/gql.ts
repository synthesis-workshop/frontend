/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query GetDownloads {\n        downloads {\n            title\n            lastUpdated\n            fileDownload {\n                url\n            }\n        }\n    }\n": types.GetDownloadsDocument,
    "\n  query GetEpisodes(\n    $orderBy: [EpisodeOrderByInput!]!\n    $where: EpisodeWhereInput!\n    $take: Int\n  ) {\n    episodes(orderBy: $orderBy, where: $where, take: $take) {\n      id\n      title\n      description {\n        document\n      }\n      episodeNumber\n      category\n      runtime\n      publishedAt\n    }\n  }\n": types.GetEpisodesDocument,
    "\n  query GetStats {\n    meta {\n      guestsCount\n      subscriberCount\n      videoCount\n      viewsCount\n    }\n  }\n": types.GetStatsDocument,
    "query Query {\n  episodes {\n    title\n  }\n}": types.QueryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetDownloads {\n        downloads {\n            title\n            lastUpdated\n            fileDownload {\n                url\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetDownloads {\n        downloads {\n            title\n            lastUpdated\n            fileDownload {\n                url\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetEpisodes(\n    $orderBy: [EpisodeOrderByInput!]!\n    $where: EpisodeWhereInput!\n    $take: Int\n  ) {\n    episodes(orderBy: $orderBy, where: $where, take: $take) {\n      id\n      title\n      description {\n        document\n      }\n      episodeNumber\n      category\n      runtime\n      publishedAt\n    }\n  }\n"): (typeof documents)["\n  query GetEpisodes(\n    $orderBy: [EpisodeOrderByInput!]!\n    $where: EpisodeWhereInput!\n    $take: Int\n  ) {\n    episodes(orderBy: $orderBy, where: $where, take: $take) {\n      id\n      title\n      description {\n        document\n      }\n      episodeNumber\n      category\n      runtime\n      publishedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetStats {\n    meta {\n      guestsCount\n      subscriberCount\n      videoCount\n      viewsCount\n    }\n  }\n"): (typeof documents)["\n  query GetStats {\n    meta {\n      guestsCount\n      subscriberCount\n      videoCount\n      viewsCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query Query {\n  episodes {\n    title\n  }\n}"): (typeof documents)["query Query {\n  episodes {\n    title\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;