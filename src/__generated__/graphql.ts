/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  CalendarDay: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AuthenticatedItem = User;

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilter>;
};

export type CalendarDayFilter = {
  equals?: InputMaybe<Scalars['CalendarDay']['input']>;
  gt?: InputMaybe<Scalars['CalendarDay']['input']>;
  gte?: InputMaybe<Scalars['CalendarDay']['input']>;
  in?: InputMaybe<Array<Scalars['CalendarDay']['input']>>;
  lt?: InputMaybe<Scalars['CalendarDay']['input']>;
  lte?: InputMaybe<Scalars['CalendarDay']['input']>;
  not?: InputMaybe<CalendarDayFilter>;
  notIn?: InputMaybe<Array<Scalars['CalendarDay']['input']>>;
};

export type Course = {
  __typename?: 'Course';
  description?: Maybe<Course_Description_Document>;
  episodes?: Maybe<Array<Episode>>;
  episodesCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  problemSets?: Maybe<Array<ProblemSet>>;
  problemSetsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type CourseEpisodesArgs = {
  cursor?: InputMaybe<EpisodeWhereUniqueInput>;
  orderBy?: Array<EpisodeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EpisodeWhereInput;
};


export type CourseEpisodesCountArgs = {
  where?: EpisodeWhereInput;
};


export type CourseProblemSetsArgs = {
  cursor?: InputMaybe<ProblemSetWhereUniqueInput>;
  orderBy?: Array<ProblemSetOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProblemSetWhereInput;
};


export type CourseProblemSetsCountArgs = {
  where?: ProblemSetWhereInput;
};

export type CourseCreateInput = {
  description?: InputMaybe<Scalars['JSON']['input']>;
  episodes?: InputMaybe<EpisodeRelateToManyForCreateInput>;
  problemSets?: InputMaybe<ProblemSetRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CourseManyRelationFilter = {
  every?: InputMaybe<CourseWhereInput>;
  none?: InputMaybe<CourseWhereInput>;
  some?: InputMaybe<CourseWhereInput>;
};

export type CourseOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type CourseRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  create?: InputMaybe<Array<CourseCreateInput>>;
};

export type CourseRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  create?: InputMaybe<Array<CourseCreateInput>>;
  disconnect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  set?: InputMaybe<Array<CourseWhereUniqueInput>>;
};

export type CourseUpdateArgs = {
  data: CourseUpdateInput;
  where: CourseWhereUniqueInput;
};

export type CourseUpdateInput = {
  description?: InputMaybe<Scalars['JSON']['input']>;
  episodes?: InputMaybe<EpisodeRelateToManyForUpdateInput>;
  problemSets?: InputMaybe<ProblemSetRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CourseWhereInput = {
  AND?: InputMaybe<Array<CourseWhereInput>>;
  NOT?: InputMaybe<Array<CourseWhereInput>>;
  OR?: InputMaybe<Array<CourseWhereInput>>;
  episodes?: InputMaybe<EpisodeManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  problemSets?: InputMaybe<ProblemSetManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CourseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Course_Description_Document = {
  __typename?: 'Course_description_Document';
  document: Scalars['JSON']['output'];
};


export type Course_Description_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Download = {
  __typename?: 'Download';
  fileDownload?: Maybe<FileFieldOutput>;
  id: Scalars['ID']['output'];
  lastUpdated?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type DownloadCreateInput = {
  fileDownload?: InputMaybe<FileFieldInput>;
  lastUpdated?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type DownloadOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  lastUpdated?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type DownloadUpdateArgs = {
  data: DownloadUpdateInput;
  where: DownloadWhereUniqueInput;
};

export type DownloadUpdateInput = {
  fileDownload?: InputMaybe<FileFieldInput>;
  lastUpdated?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type DownloadWhereInput = {
  AND?: InputMaybe<Array<DownloadWhereInput>>;
  NOT?: InputMaybe<Array<DownloadWhereInput>>;
  OR?: InputMaybe<Array<DownloadWhereInput>>;
  id?: InputMaybe<IdFilter>;
  lastUpdated?: InputMaybe<DateTimeNullableFilter>;
  title?: InputMaybe<StringFilter>;
};

export type DownloadWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Episode = {
  __typename?: 'Episode';
  category?: Maybe<Scalars['String']['output']>;
  courses?: Maybe<Array<Course>>;
  coursesCount?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Episode_Description_Document>;
  episodeNumber?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Array<Keyword>>;
  keywordsCount?: Maybe<Scalars['Int']['output']>;
  problemSets?: Maybe<Array<ProblemSet>>;
  problemSetsCount?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  relatedEpisodes?: Maybe<Array<Episode>>;
  relatedEpisodesCount?: Maybe<Scalars['Int']['output']>;
  runtime?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  youtubeVideoId?: Maybe<Scalars['String']['output']>;
};


export type EpisodeCoursesArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  orderBy?: Array<CourseOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CourseWhereInput;
};


export type EpisodeCoursesCountArgs = {
  where?: CourseWhereInput;
};


export type EpisodeKeywordsArgs = {
  cursor?: InputMaybe<KeywordWhereUniqueInput>;
  orderBy?: Array<KeywordOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: KeywordWhereInput;
};


export type EpisodeKeywordsCountArgs = {
  where?: KeywordWhereInput;
};


export type EpisodeProblemSetsArgs = {
  cursor?: InputMaybe<ProblemSetWhereUniqueInput>;
  orderBy?: Array<ProblemSetOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProblemSetWhereInput;
};


export type EpisodeProblemSetsCountArgs = {
  where?: ProblemSetWhereInput;
};


export type EpisodeRelatedEpisodesArgs = {
  cursor?: InputMaybe<EpisodeWhereUniqueInput>;
  orderBy?: Array<EpisodeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EpisodeWhereInput;
};


export type EpisodeRelatedEpisodesCountArgs = {
  where?: EpisodeWhereInput;
};

export type EpisodeCreateInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  courses?: InputMaybe<CourseRelateToManyForCreateInput>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  episodeNumber?: InputMaybe<Scalars['Float']['input']>;
  keywords?: InputMaybe<KeywordRelateToManyForCreateInput>;
  problemSets?: InputMaybe<ProblemSetRelateToManyForCreateInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  relatedEpisodes?: InputMaybe<EpisodeRelateToManyForCreateInput>;
  runtime?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  youtubeVideoId?: InputMaybe<Scalars['String']['input']>;
};

export type EpisodeManyRelationFilter = {
  every?: InputMaybe<EpisodeWhereInput>;
  none?: InputMaybe<EpisodeWhereInput>;
  some?: InputMaybe<EpisodeWhereInput>;
};

export type EpisodeOrderByInput = {
  category?: InputMaybe<OrderDirection>;
  episodeNumber?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  publishedAt?: InputMaybe<OrderDirection>;
  runtime?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  youtubeVideoId?: InputMaybe<OrderDirection>;
};

export type EpisodeRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EpisodeWhereUniqueInput>>;
  create?: InputMaybe<Array<EpisodeCreateInput>>;
};

export type EpisodeRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EpisodeWhereUniqueInput>>;
  create?: InputMaybe<Array<EpisodeCreateInput>>;
  disconnect?: InputMaybe<Array<EpisodeWhereUniqueInput>>;
  set?: InputMaybe<Array<EpisodeWhereUniqueInput>>;
};

export type EpisodeRelateToOneForCreateInput = {
  connect?: InputMaybe<EpisodeWhereUniqueInput>;
  create?: InputMaybe<EpisodeCreateInput>;
};

export type EpisodeRelateToOneForUpdateInput = {
  connect?: InputMaybe<EpisodeWhereUniqueInput>;
  create?: InputMaybe<EpisodeCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EpisodeUpdateArgs = {
  data: EpisodeUpdateInput;
  where: EpisodeWhereUniqueInput;
};

export type EpisodeUpdateInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  courses?: InputMaybe<CourseRelateToManyForUpdateInput>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  episodeNumber?: InputMaybe<Scalars['Float']['input']>;
  keywords?: InputMaybe<KeywordRelateToManyForUpdateInput>;
  problemSets?: InputMaybe<ProblemSetRelateToManyForUpdateInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  relatedEpisodes?: InputMaybe<EpisodeRelateToManyForUpdateInput>;
  runtime?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  youtubeVideoId?: InputMaybe<Scalars['String']['input']>;
};

export type EpisodeWhereInput = {
  AND?: InputMaybe<Array<EpisodeWhereInput>>;
  NOT?: InputMaybe<Array<EpisodeWhereInput>>;
  OR?: InputMaybe<Array<EpisodeWhereInput>>;
  category?: InputMaybe<StringNullableFilter>;
  courses?: InputMaybe<CourseManyRelationFilter>;
  episodeNumber?: InputMaybe<FloatFilter>;
  id?: InputMaybe<IdFilter>;
  keywords?: InputMaybe<KeywordManyRelationFilter>;
  problemSets?: InputMaybe<ProblemSetManyRelationFilter>;
  publishedAt?: InputMaybe<DateTimeNullableFilter>;
  relatedEpisodes?: InputMaybe<EpisodeManyRelationFilter>;
  runtime?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  youtubeVideoId?: InputMaybe<StringFilter>;
};

export type EpisodeWhereUniqueInput = {
  episodeNumber?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Episode_Description_Document = {
  __typename?: 'Episode_description_Document';
  document: Scalars['JSON']['output'];
};


export type Episode_Description_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type FileFieldInput = {
  upload: Scalars['Upload']['input'];
};

export type FileFieldOutput = {
  __typename?: 'FileFieldOutput';
  filename: Scalars['String']['output'];
  filesize: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  upload: Scalars['Upload']['input'];
};

export type ImageFieldOutput = {
  __typename?: 'ImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Keyword = {
  __typename?: 'Keyword';
  episodes?: Maybe<Array<Episode>>;
  episodesCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};


export type KeywordEpisodesArgs = {
  cursor?: InputMaybe<EpisodeWhereUniqueInput>;
  orderBy?: Array<EpisodeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EpisodeWhereInput;
};


export type KeywordEpisodesCountArgs = {
  where?: EpisodeWhereInput;
};

export type KeywordCreateInput = {
  episodes?: InputMaybe<EpisodeRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type KeywordManyRelationFilter = {
  every?: InputMaybe<KeywordWhereInput>;
  none?: InputMaybe<KeywordWhereInput>;
  some?: InputMaybe<KeywordWhereInput>;
};

export type KeywordOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type KeywordRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<KeywordWhereUniqueInput>>;
  create?: InputMaybe<Array<KeywordCreateInput>>;
};

export type KeywordRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<KeywordWhereUniqueInput>>;
  create?: InputMaybe<Array<KeywordCreateInput>>;
  disconnect?: InputMaybe<Array<KeywordWhereUniqueInput>>;
  set?: InputMaybe<Array<KeywordWhereUniqueInput>>;
};

export type KeywordUpdateArgs = {
  data: KeywordUpdateInput;
  where: KeywordWhereUniqueInput;
};

export type KeywordUpdateInput = {
  episodes?: InputMaybe<EpisodeRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type KeywordWhereInput = {
  AND?: InputMaybe<Array<KeywordWhereInput>>;
  NOT?: InputMaybe<Array<KeywordWhereInput>>;
  OR?: InputMaybe<Array<KeywordWhereInput>>;
  episodes?: InputMaybe<EpisodeManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
};

export type KeywordWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Link = {
  __typename?: 'Link';
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type LinkCreateInput = {
  link?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LinkOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  link?: InputMaybe<OrderDirection>;
  logo?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type LinkUpdateArgs = {
  data: LinkUpdateInput;
  where: LinkWhereUniqueInput;
};

export type LinkUpdateInput = {
  link?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LinkWhereInput = {
  AND?: InputMaybe<Array<LinkWhereInput>>;
  NOT?: InputMaybe<Array<LinkWhereInput>>;
  OR?: InputMaybe<Array<LinkWhereInput>>;
  id?: InputMaybe<IdFilter>;
  link?: InputMaybe<StringFilter>;
  logo?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type LinkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Meta = {
  __typename?: 'Meta';
  about?: Maybe<Meta_About_Document>;
  guestsCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  mission?: Maybe<Meta_Mission_Document>;
  subscriberCount?: Maybe<Scalars['Int']['output']>;
  videoCount?: Maybe<Scalars['Int']['output']>;
  viewsCount?: Maybe<Scalars['Int']['output']>;
};

export type MetaCreateInput = {
  about?: InputMaybe<Scalars['JSON']['input']>;
  guestsCount?: InputMaybe<Scalars['Int']['input']>;
  mission?: InputMaybe<Scalars['JSON']['input']>;
  subscriberCount?: InputMaybe<Scalars['Int']['input']>;
  videoCount?: InputMaybe<Scalars['Int']['input']>;
  viewsCount?: InputMaybe<Scalars['Int']['input']>;
};

export type MetaOrderByInput = {
  guestsCount?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  subscriberCount?: InputMaybe<OrderDirection>;
  videoCount?: InputMaybe<OrderDirection>;
  viewsCount?: InputMaybe<OrderDirection>;
};

export type MetaUpdateArgs = {
  data: MetaUpdateInput;
  where?: MetaWhereUniqueInput;
};

export type MetaUpdateInput = {
  about?: InputMaybe<Scalars['JSON']['input']>;
  guestsCount?: InputMaybe<Scalars['Int']['input']>;
  mission?: InputMaybe<Scalars['JSON']['input']>;
  subscriberCount?: InputMaybe<Scalars['Int']['input']>;
  videoCount?: InputMaybe<Scalars['Int']['input']>;
  viewsCount?: InputMaybe<Scalars['Int']['input']>;
};

export type MetaWhereInput = {
  AND?: InputMaybe<Array<MetaWhereInput>>;
  NOT?: InputMaybe<Array<MetaWhereInput>>;
  OR?: InputMaybe<Array<MetaWhereInput>>;
  guestsCount?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IdFilter>;
  subscriberCount?: InputMaybe<IntNullableFilter>;
  videoCount?: InputMaybe<IntNullableFilter>;
  viewsCount?: InputMaybe<IntNullableFilter>;
};

export type MetaWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Meta_About_Document = {
  __typename?: 'Meta_about_Document';
  document: Scalars['JSON']['output'];
};


export type Meta_About_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type Meta_Mission_Document = {
  __typename?: 'Meta_mission_Document';
  document: Scalars['JSON']['output'];
};


export type Meta_Mission_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createCourse?: Maybe<Course>;
  createCourses?: Maybe<Array<Maybe<Course>>>;
  createDownload?: Maybe<Download>;
  createDownloads?: Maybe<Array<Maybe<Download>>>;
  createEpisode?: Maybe<Episode>;
  createEpisodes?: Maybe<Array<Maybe<Episode>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createKeyword?: Maybe<Keyword>;
  createKeywords?: Maybe<Array<Maybe<Keyword>>>;
  createLink?: Maybe<Link>;
  createLinks?: Maybe<Array<Maybe<Link>>>;
  createMeta?: Maybe<Meta>;
  createMetas?: Maybe<Array<Maybe<Meta>>>;
  createPoster?: Maybe<Poster>;
  createPosters?: Maybe<Array<Maybe<Poster>>>;
  createProblemSet?: Maybe<ProblemSet>;
  createProblemSets?: Maybe<Array<Maybe<ProblemSet>>>;
  createPublication?: Maybe<Publication>;
  createPublications?: Maybe<Array<Maybe<Publication>>>;
  createTeamMember?: Maybe<TeamMember>;
  createTeamMembers?: Maybe<Array<Maybe<TeamMember>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteCourse?: Maybe<Course>;
  deleteCourses?: Maybe<Array<Maybe<Course>>>;
  deleteDownload?: Maybe<Download>;
  deleteDownloads?: Maybe<Array<Maybe<Download>>>;
  deleteEpisode?: Maybe<Episode>;
  deleteEpisodes?: Maybe<Array<Maybe<Episode>>>;
  deleteKeyword?: Maybe<Keyword>;
  deleteKeywords?: Maybe<Array<Maybe<Keyword>>>;
  deleteLink?: Maybe<Link>;
  deleteLinks?: Maybe<Array<Maybe<Link>>>;
  deleteMeta?: Maybe<Meta>;
  deleteMetas?: Maybe<Array<Maybe<Meta>>>;
  deletePoster?: Maybe<Poster>;
  deletePosters?: Maybe<Array<Maybe<Poster>>>;
  deleteProblemSet?: Maybe<ProblemSet>;
  deleteProblemSets?: Maybe<Array<Maybe<ProblemSet>>>;
  deletePublication?: Maybe<Publication>;
  deletePublications?: Maybe<Array<Maybe<Publication>>>;
  deleteTeamMember?: Maybe<TeamMember>;
  deleteTeamMembers?: Maybe<Array<Maybe<TeamMember>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  updateCourse?: Maybe<Course>;
  updateCourses?: Maybe<Array<Maybe<Course>>>;
  updateDownload?: Maybe<Download>;
  updateDownloads?: Maybe<Array<Maybe<Download>>>;
  updateEpisode?: Maybe<Episode>;
  updateEpisodes?: Maybe<Array<Maybe<Episode>>>;
  updateKeyword?: Maybe<Keyword>;
  updateKeywords?: Maybe<Array<Maybe<Keyword>>>;
  updateLink?: Maybe<Link>;
  updateLinks?: Maybe<Array<Maybe<Link>>>;
  updateMeta?: Maybe<Meta>;
  updateMetas?: Maybe<Array<Maybe<Meta>>>;
  updatePoster?: Maybe<Poster>;
  updatePosters?: Maybe<Array<Maybe<Poster>>>;
  updateProblemSet?: Maybe<ProblemSet>;
  updateProblemSets?: Maybe<Array<Maybe<ProblemSet>>>;
  updatePublication?: Maybe<Publication>;
  updatePublications?: Maybe<Array<Maybe<Publication>>>;
  updateTeamMember?: Maybe<TeamMember>;
  updateTeamMembers?: Maybe<Array<Maybe<TeamMember>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateCourseArgs = {
  data: CourseCreateInput;
};


export type MutationCreateCoursesArgs = {
  data: Array<CourseCreateInput>;
};


export type MutationCreateDownloadArgs = {
  data: DownloadCreateInput;
};


export type MutationCreateDownloadsArgs = {
  data: Array<DownloadCreateInput>;
};


export type MutationCreateEpisodeArgs = {
  data: EpisodeCreateInput;
};


export type MutationCreateEpisodesArgs = {
  data: Array<EpisodeCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateKeywordArgs = {
  data: KeywordCreateInput;
};


export type MutationCreateKeywordsArgs = {
  data: Array<KeywordCreateInput>;
};


export type MutationCreateLinkArgs = {
  data: LinkCreateInput;
};


export type MutationCreateLinksArgs = {
  data: Array<LinkCreateInput>;
};


export type MutationCreateMetaArgs = {
  data: MetaCreateInput;
};


export type MutationCreateMetasArgs = {
  data: Array<MetaCreateInput>;
};


export type MutationCreatePosterArgs = {
  data: PosterCreateInput;
};


export type MutationCreatePostersArgs = {
  data: Array<PosterCreateInput>;
};


export type MutationCreateProblemSetArgs = {
  data: ProblemSetCreateInput;
};


export type MutationCreateProblemSetsArgs = {
  data: Array<ProblemSetCreateInput>;
};


export type MutationCreatePublicationArgs = {
  data: PublicationCreateInput;
};


export type MutationCreatePublicationsArgs = {
  data: Array<PublicationCreateInput>;
};


export type MutationCreateTeamMemberArgs = {
  data: TeamMemberCreateInput;
};


export type MutationCreateTeamMembersArgs = {
  data: Array<TeamMemberCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteCourseArgs = {
  where: CourseWhereUniqueInput;
};


export type MutationDeleteCoursesArgs = {
  where: Array<CourseWhereUniqueInput>;
};


export type MutationDeleteDownloadArgs = {
  where: DownloadWhereUniqueInput;
};


export type MutationDeleteDownloadsArgs = {
  where: Array<DownloadWhereUniqueInput>;
};


export type MutationDeleteEpisodeArgs = {
  where: EpisodeWhereUniqueInput;
};


export type MutationDeleteEpisodesArgs = {
  where: Array<EpisodeWhereUniqueInput>;
};


export type MutationDeleteKeywordArgs = {
  where: KeywordWhereUniqueInput;
};


export type MutationDeleteKeywordsArgs = {
  where: Array<KeywordWhereUniqueInput>;
};


export type MutationDeleteLinkArgs = {
  where: LinkWhereUniqueInput;
};


export type MutationDeleteLinksArgs = {
  where: Array<LinkWhereUniqueInput>;
};


export type MutationDeleteMetaArgs = {
  where?: MetaWhereUniqueInput;
};


export type MutationDeleteMetasArgs = {
  where: Array<MetaWhereUniqueInput>;
};


export type MutationDeletePosterArgs = {
  where: PosterWhereUniqueInput;
};


export type MutationDeletePostersArgs = {
  where: Array<PosterWhereUniqueInput>;
};


export type MutationDeleteProblemSetArgs = {
  where: ProblemSetWhereUniqueInput;
};


export type MutationDeleteProblemSetsArgs = {
  where: Array<ProblemSetWhereUniqueInput>;
};


export type MutationDeletePublicationArgs = {
  where: PublicationWhereUniqueInput;
};


export type MutationDeletePublicationsArgs = {
  where: Array<PublicationWhereUniqueInput>;
};


export type MutationDeleteTeamMemberArgs = {
  where: TeamMemberWhereUniqueInput;
};


export type MutationDeleteTeamMembersArgs = {
  where: Array<TeamMemberWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationUpdateCourseArgs = {
  data: CourseUpdateInput;
  where: CourseWhereUniqueInput;
};


export type MutationUpdateCoursesArgs = {
  data: Array<CourseUpdateArgs>;
};


export type MutationUpdateDownloadArgs = {
  data: DownloadUpdateInput;
  where: DownloadWhereUniqueInput;
};


export type MutationUpdateDownloadsArgs = {
  data: Array<DownloadUpdateArgs>;
};


export type MutationUpdateEpisodeArgs = {
  data: EpisodeUpdateInput;
  where: EpisodeWhereUniqueInput;
};


export type MutationUpdateEpisodesArgs = {
  data: Array<EpisodeUpdateArgs>;
};


export type MutationUpdateKeywordArgs = {
  data: KeywordUpdateInput;
  where: KeywordWhereUniqueInput;
};


export type MutationUpdateKeywordsArgs = {
  data: Array<KeywordUpdateArgs>;
};


export type MutationUpdateLinkArgs = {
  data: LinkUpdateInput;
  where: LinkWhereUniqueInput;
};


export type MutationUpdateLinksArgs = {
  data: Array<LinkUpdateArgs>;
};


export type MutationUpdateMetaArgs = {
  data: MetaUpdateInput;
  where?: MetaWhereUniqueInput;
};


export type MutationUpdateMetasArgs = {
  data: Array<MetaUpdateArgs>;
};


export type MutationUpdatePosterArgs = {
  data: PosterUpdateInput;
  where: PosterWhereUniqueInput;
};


export type MutationUpdatePostersArgs = {
  data: Array<PosterUpdateArgs>;
};


export type MutationUpdateProblemSetArgs = {
  data: ProblemSetUpdateInput;
  where: ProblemSetWhereUniqueInput;
};


export type MutationUpdateProblemSetsArgs = {
  data: Array<ProblemSetUpdateArgs>;
};


export type MutationUpdatePublicationArgs = {
  data: PublicationUpdateInput;
  where: PublicationWhereUniqueInput;
};


export type MutationUpdatePublicationsArgs = {
  data: Array<PublicationUpdateArgs>;
};


export type MutationUpdateTeamMemberArgs = {
  data: TeamMemberUpdateInput;
  where: TeamMemberWhereUniqueInput;
};


export type MutationUpdateTeamMembersArgs = {
  data: Array<TeamMemberUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export type Poster = {
  __typename?: 'Poster';
  attribution?: Maybe<Scalars['String']['output']>;
  file?: Maybe<FileFieldOutput>;
  id: Scalars['ID']['output'];
  image?: Maybe<ImageFieldOutput>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PosterCreateInput = {
  attribution?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<FileFieldInput>;
  image?: InputMaybe<ImageFieldInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PosterOrderByInput = {
  attribution?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type PosterUpdateArgs = {
  data: PosterUpdateInput;
  where: PosterWhereUniqueInput;
};

export type PosterUpdateInput = {
  attribution?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<FileFieldInput>;
  image?: InputMaybe<ImageFieldInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PosterWhereInput = {
  AND?: InputMaybe<Array<PosterWhereInput>>;
  NOT?: InputMaybe<Array<PosterWhereInput>>;
  OR?: InputMaybe<Array<PosterWhereInput>>;
  attribution?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PosterWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ProblemSet = {
  __typename?: 'ProblemSet';
  courses?: Maybe<Array<Course>>;
  coursesCount?: Maybe<Scalars['Int']['output']>;
  downloadCount?: Maybe<Scalars['Int']['output']>;
  episode?: Maybe<Episode>;
  id: Scalars['ID']['output'];
  problemSetFile?: Maybe<FileFieldOutput>;
  solutionFile?: Maybe<FileFieldOutput>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ProblemSetCoursesArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  orderBy?: Array<CourseOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CourseWhereInput;
};


export type ProblemSetCoursesCountArgs = {
  where?: CourseWhereInput;
};

export type ProblemSetCreateInput = {
  courses?: InputMaybe<CourseRelateToManyForCreateInput>;
  downloadCount?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<EpisodeRelateToOneForCreateInput>;
  problemSetFile?: InputMaybe<FileFieldInput>;
  solutionFile?: InputMaybe<FileFieldInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProblemSetManyRelationFilter = {
  every?: InputMaybe<ProblemSetWhereInput>;
  none?: InputMaybe<ProblemSetWhereInput>;
  some?: InputMaybe<ProblemSetWhereInput>;
};

export type ProblemSetOrderByInput = {
  downloadCount?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type ProblemSetRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProblemSetWhereUniqueInput>>;
  create?: InputMaybe<Array<ProblemSetCreateInput>>;
};

export type ProblemSetRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProblemSetWhereUniqueInput>>;
  create?: InputMaybe<Array<ProblemSetCreateInput>>;
  disconnect?: InputMaybe<Array<ProblemSetWhereUniqueInput>>;
  set?: InputMaybe<Array<ProblemSetWhereUniqueInput>>;
};

export type ProblemSetUpdateArgs = {
  data: ProblemSetUpdateInput;
  where: ProblemSetWhereUniqueInput;
};

export type ProblemSetUpdateInput = {
  courses?: InputMaybe<CourseRelateToManyForUpdateInput>;
  downloadCount?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<EpisodeRelateToOneForUpdateInput>;
  problemSetFile?: InputMaybe<FileFieldInput>;
  solutionFile?: InputMaybe<FileFieldInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProblemSetWhereInput = {
  AND?: InputMaybe<Array<ProblemSetWhereInput>>;
  NOT?: InputMaybe<Array<ProblemSetWhereInput>>;
  OR?: InputMaybe<Array<ProblemSetWhereInput>>;
  courses?: InputMaybe<CourseManyRelationFilter>;
  downloadCount?: InputMaybe<IntNullableFilter>;
  episode?: InputMaybe<EpisodeWhereInput>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ProblemSetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Publication = {
  __typename?: 'Publication';
  author?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Publication_Description_Document>;
  doi?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  publishedDate?: Maybe<Scalars['CalendarDay']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  teamMembers?: Maybe<Array<TeamMember>>;
  teamMembersCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type PublicationTeamMembersArgs = {
  cursor?: InputMaybe<TeamMemberWhereUniqueInput>;
  orderBy?: Array<TeamMemberOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TeamMemberWhereInput;
};


export type PublicationTeamMembersCountArgs = {
  where?: TeamMemberWhereInput;
};

export type PublicationCreateInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  doi?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  publishedDate?: InputMaybe<Scalars['CalendarDay']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  teamMembers?: InputMaybe<TeamMemberRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PublicationManyRelationFilter = {
  every?: InputMaybe<PublicationWhereInput>;
  none?: InputMaybe<PublicationWhereInput>;
  some?: InputMaybe<PublicationWhereInput>;
};

export type PublicationOrderByInput = {
  author?: InputMaybe<OrderDirection>;
  doi?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  link?: InputMaybe<OrderDirection>;
  publishedDate?: InputMaybe<OrderDirection>;
  publisher?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type PublicationRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  create?: InputMaybe<Array<PublicationCreateInput>>;
};

export type PublicationRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  create?: InputMaybe<Array<PublicationCreateInput>>;
  disconnect?: InputMaybe<Array<PublicationWhereUniqueInput>>;
  set?: InputMaybe<Array<PublicationWhereUniqueInput>>;
};

export type PublicationUpdateArgs = {
  data: PublicationUpdateInput;
  where: PublicationWhereUniqueInput;
};

export type PublicationUpdateInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  doi?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  publishedDate?: InputMaybe<Scalars['CalendarDay']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  teamMembers?: InputMaybe<TeamMemberRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PublicationWhereInput = {
  AND?: InputMaybe<Array<PublicationWhereInput>>;
  NOT?: InputMaybe<Array<PublicationWhereInput>>;
  OR?: InputMaybe<Array<PublicationWhereInput>>;
  author?: InputMaybe<StringFilter>;
  doi?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  link?: InputMaybe<StringFilter>;
  publishedDate?: InputMaybe<CalendarDayFilter>;
  publisher?: InputMaybe<StringFilter>;
  teamMembers?: InputMaybe<TeamMemberManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PublicationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Publication_Description_Document = {
  __typename?: 'Publication_description_Document';
  document: Scalars['JSON']['output'];
};


export type Publication_Description_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  course?: Maybe<Course>;
  courses?: Maybe<Array<Course>>;
  coursesCount?: Maybe<Scalars['Int']['output']>;
  download?: Maybe<Download>;
  downloads?: Maybe<Array<Download>>;
  downloadsCount?: Maybe<Scalars['Int']['output']>;
  episode?: Maybe<Episode>;
  episodes?: Maybe<Array<Episode>>;
  episodesCount?: Maybe<Scalars['Int']['output']>;
  keystone: KeystoneMeta;
  keyword?: Maybe<Keyword>;
  keywords?: Maybe<Array<Keyword>>;
  keywordsCount?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Link>;
  links?: Maybe<Array<Link>>;
  linksCount?: Maybe<Scalars['Int']['output']>;
  meta?: Maybe<Meta>;
  metas?: Maybe<Array<Meta>>;
  metasCount?: Maybe<Scalars['Int']['output']>;
  poster?: Maybe<Poster>;
  posters?: Maybe<Array<Poster>>;
  postersCount?: Maybe<Scalars['Int']['output']>;
  problemSet?: Maybe<ProblemSet>;
  problemSets?: Maybe<Array<ProblemSet>>;
  problemSetsCount?: Maybe<Scalars['Int']['output']>;
  publication?: Maybe<Publication>;
  publications?: Maybe<Array<Publication>>;
  publicationsCount?: Maybe<Scalars['Int']['output']>;
  teamMember?: Maybe<TeamMember>;
  teamMembers?: Maybe<Array<TeamMember>>;
  teamMembersCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
};


export type QueryCourseArgs = {
  where: CourseWhereUniqueInput;
};


export type QueryCoursesArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  orderBy?: Array<CourseOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CourseWhereInput;
};


export type QueryCoursesCountArgs = {
  where?: CourseWhereInput;
};


export type QueryDownloadArgs = {
  where: DownloadWhereUniqueInput;
};


export type QueryDownloadsArgs = {
  cursor?: InputMaybe<DownloadWhereUniqueInput>;
  orderBy?: Array<DownloadOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: DownloadWhereInput;
};


export type QueryDownloadsCountArgs = {
  where?: DownloadWhereInput;
};


export type QueryEpisodeArgs = {
  where: EpisodeWhereUniqueInput;
};


export type QueryEpisodesArgs = {
  cursor?: InputMaybe<EpisodeWhereUniqueInput>;
  orderBy?: Array<EpisodeOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EpisodeWhereInput;
};


export type QueryEpisodesCountArgs = {
  where?: EpisodeWhereInput;
};


export type QueryKeywordArgs = {
  where: KeywordWhereUniqueInput;
};


export type QueryKeywordsArgs = {
  cursor?: InputMaybe<KeywordWhereUniqueInput>;
  orderBy?: Array<KeywordOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: KeywordWhereInput;
};


export type QueryKeywordsCountArgs = {
  where?: KeywordWhereInput;
};


export type QueryLinkArgs = {
  where: LinkWhereUniqueInput;
};


export type QueryLinksArgs = {
  cursor?: InputMaybe<LinkWhereUniqueInput>;
  orderBy?: Array<LinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: LinkWhereInput;
};


export type QueryLinksCountArgs = {
  where?: LinkWhereInput;
};


export type QueryMetaArgs = {
  where?: MetaWhereUniqueInput;
};


export type QueryMetasArgs = {
  cursor?: InputMaybe<MetaWhereUniqueInput>;
  orderBy?: Array<MetaOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: MetaWhereInput;
};


export type QueryMetasCountArgs = {
  where?: MetaWhereInput;
};


export type QueryPosterArgs = {
  where: PosterWhereUniqueInput;
};


export type QueryPostersArgs = {
  cursor?: InputMaybe<PosterWhereUniqueInput>;
  orderBy?: Array<PosterOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PosterWhereInput;
};


export type QueryPostersCountArgs = {
  where?: PosterWhereInput;
};


export type QueryProblemSetArgs = {
  where: ProblemSetWhereUniqueInput;
};


export type QueryProblemSetsArgs = {
  cursor?: InputMaybe<ProblemSetWhereUniqueInput>;
  orderBy?: Array<ProblemSetOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProblemSetWhereInput;
};


export type QueryProblemSetsCountArgs = {
  where?: ProblemSetWhereInput;
};


export type QueryPublicationArgs = {
  where: PublicationWhereUniqueInput;
};


export type QueryPublicationsArgs = {
  cursor?: InputMaybe<PublicationWhereUniqueInput>;
  orderBy?: Array<PublicationOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicationWhereInput;
};


export type QueryPublicationsCountArgs = {
  where?: PublicationWhereInput;
};


export type QueryTeamMemberArgs = {
  where: TeamMemberWhereUniqueInput;
};


export type QueryTeamMembersArgs = {
  cursor?: InputMaybe<TeamMemberWhereUniqueInput>;
  orderBy?: Array<TeamMemberOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TeamMemberWhereInput;
};


export type QueryTeamMembersCountArgs = {
  where?: TeamMemberWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  cv?: Maybe<FileFieldOutput>;
  description?: Maybe<TeamMember_Description_Document>;
  group?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<ImageFieldOutput>;
  name?: Maybe<Scalars['String']['output']>;
  publications?: Maybe<Array<Publication>>;
  publicationsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type TeamMemberPublicationsArgs = {
  cursor?: InputMaybe<PublicationWhereUniqueInput>;
  orderBy?: Array<PublicationOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PublicationWhereInput;
};


export type TeamMemberPublicationsCountArgs = {
  where?: PublicationWhereInput;
};

export type TeamMemberCreateInput = {
  cv?: InputMaybe<FileFieldInput>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  group?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<ImageFieldInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  publications?: InputMaybe<PublicationRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TeamMemberManyRelationFilter = {
  every?: InputMaybe<TeamMemberWhereInput>;
  none?: InputMaybe<TeamMemberWhereInput>;
  some?: InputMaybe<TeamMemberWhereInput>;
};

export type TeamMemberOrderByInput = {
  group?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type TeamMemberRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  create?: InputMaybe<Array<TeamMemberCreateInput>>;
};

export type TeamMemberRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  create?: InputMaybe<Array<TeamMemberCreateInput>>;
  disconnect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
};

export type TeamMemberUpdateArgs = {
  data: TeamMemberUpdateInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberUpdateInput = {
  cv?: InputMaybe<FileFieldInput>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  group?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<ImageFieldInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  publications?: InputMaybe<PublicationRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TeamMemberWhereInput = {
  AND?: InputMaybe<Array<TeamMemberWhereInput>>;
  NOT?: InputMaybe<Array<TeamMemberWhereInput>>;
  OR?: InputMaybe<Array<TeamMemberWhereInput>>;
  group?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  publications?: InputMaybe<PublicationManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TeamMemberWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TeamMember_Description_Document = {
  __typename?: 'TeamMember_description_Document';
  document: Scalars['JSON']['output'];
};


export type TeamMember_Description_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  lastLoginDate?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<PasswordState>;
  status?: Maybe<Scalars['String']['output']>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  lastLoginDate?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isAdmin?: InputMaybe<OrderDirection>;
  lastLoginDate?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  lastLoginDate?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  lastLoginDate?: InputMaybe<DateTimeNullableFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GetAboutUsInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAboutUsInfoQuery = { __typename?: 'Query', metas?: Array<{ __typename?: 'Meta', id: string, about?: { __typename?: 'Meta_about_Document', document: any } | null, mission?: { __typename?: 'Meta_mission_Document', document: any } | null }> | null };

export type GetDownloadsQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<DownloadOrderByInput> | DownloadOrderByInput>;
}>;


export type GetDownloadsQuery = { __typename?: 'Query', downloads?: Array<{ __typename?: 'Download', title?: string | null, lastUpdated?: any | null, id: string, fileDownload?: { __typename?: 'FileFieldOutput', url: string, filename: string, filesize: number } | null }> | null };

export type GetEpisodesQueryVariables = Exact<{
  orderBy: Array<EpisodeOrderByInput> | EpisodeOrderByInput;
  where: EpisodeWhereInput;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetEpisodesQuery = { __typename?: 'Query', episodes?: Array<{ __typename?: 'Episode', id: string, title?: string | null, episodeNumber?: number | null, category?: string | null, runtime?: string | null, publishedAt?: any | null, description?: { __typename?: 'Episode_description_Document', document: any } | null }> | null };

export type GetPostersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostersQuery = { __typename?: 'Query', posters?: Array<{ __typename?: 'Poster', attribution?: string | null, id: string, title?: string | null, file?: { __typename?: 'FileFieldOutput', filename: string, filesize: number, url: string } | null, image?: { __typename?: 'ImageFieldOutput', extension: ImageExtension, filesize: number, id: string, url: string, width: number, height: number } | null }> | null };

export type GetProblemSetsQueryVariables = Exact<{
  orderBy: Array<ProblemSetOrderByInput> | ProblemSetOrderByInput;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetProblemSetsQuery = { __typename?: 'Query', problemSetsCount?: number | null, problemSets?: Array<{ __typename?: 'ProblemSet', downloadCount?: number | null, title?: string | null, id: string, episode?: { __typename?: 'Episode', id: string, youtubeVideoId?: string | null } | null, problemSetFile?: { __typename?: 'FileFieldOutput', url: string, filename: string, filesize: number } | null, solutionFile?: { __typename?: 'FileFieldOutput', url: string, filename: string, filesize: number } | null }> | null };

export type GetPublicationsQueryVariables = Exact<{
  orderBy: Array<PublicationOrderByInput> | PublicationOrderByInput;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip: Scalars['Int']['input'];
}>;


export type GetPublicationsQuery = { __typename?: 'Query', publicationsCount?: number | null, publications?: Array<{ __typename?: 'Publication', author?: string | null, link?: string | null, publishedDate?: any | null, publisher?: string | null, title?: string | null, doi?: string | null, id: string, description?: { __typename?: 'Publication_description_Document', document: any } | null }> | null };

export type GetStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatsQuery = { __typename?: 'Query', meta?: { __typename?: 'Meta', guestsCount?: number | null, subscriberCount?: number | null, videoCount?: number | null, viewsCount?: number | null } | null };

export type GetTeamQueryVariables = Exact<{
  orderBy: Array<TeamMemberOrderByInput> | TeamMemberOrderByInput;
}>;


export type GetTeamQuery = { __typename?: 'Query', teamMembers?: Array<{ __typename?: 'TeamMember', id: string, name?: string | null, title?: string | null, group?: number | null, image?: { __typename?: 'ImageFieldOutput', extension: ImageExtension, filesize: number, height: number, id: string, url: string, width: number } | null }> | null };


export const GetAboutUsInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAboutUsInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"about"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"}}]}}]}}]}}]} as unknown as DocumentNode<GetAboutUsInfoQuery, GetAboutUsInfoQueryVariables>;
export const GetDownloadsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDownloads"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DownloadOrderByInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"downloads"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdated"}},{"kind":"Field","name":{"kind":"Name","value":"fileDownload"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetDownloadsQuery, GetDownloadsQueryVariables>;
export const GetEpisodesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEpisodes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EpisodeOrderByInput"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EpisodeWhereInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"episodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"}}]}},{"kind":"Field","name":{"kind":"Name","value":"episodeNumber"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"runtime"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}}]}}]}}]} as unknown as DocumentNode<GetEpisodesQuery, GetEpisodesQueryVariables>;
export const GetPostersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPosters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attribution"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"extension"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetPostersQuery, GetPostersQueryVariables>;
export const GetProblemSetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProblemSets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProblemSetOrderByInput"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"problemSets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"downloadCount"}},{"kind":"Field","name":{"kind":"Name","value":"episode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"youtubeVideoId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"problemSetFile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}}]}},{"kind":"Field","name":{"kind":"Name","value":"solutionFile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"problemSetsCount"}}]}}]} as unknown as DocumentNode<GetProblemSetsQuery, GetProblemSetsQueryVariables>;
export const GetPublicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPublications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationOrderByInput"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"publishedDate"}},{"kind":"Field","name":{"kind":"Name","value":"publisher"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"doi"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publicationsCount"}}]}}]} as unknown as DocumentNode<GetPublicationsQuery, GetPublicationsQueryVariables>;
export const GetStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guestsCount"}},{"kind":"Field","name":{"kind":"Name","value":"subscriberCount"}},{"kind":"Field","name":{"kind":"Name","value":"videoCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewsCount"}}]}}]}}]} as unknown as DocumentNode<GetStatsQuery, GetStatsQueryVariables>;
export const GetTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TeamMemberOrderByInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamMembers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"group"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"extension"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]} as unknown as DocumentNode<GetTeamQuery, GetTeamQueryVariables>;