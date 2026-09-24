/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: unknown; output: unknown; }
  JSON: { input: unknown; output: unknown; }
  PageSectionsDynamicZoneInput: { input: unknown; output: unknown; }
};

export type IGenBooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<IGenBooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IGenComponentBaseComponentsBrandLogo = {
  __typename?: 'ComponentBaseComponentsBrandLogo';
  Logo?: Maybe<IGenUploadFile>;
  LogoSmall?: Maybe<IGenUploadFile>;
  id: Scalars['ID']['output'];
};

export type IGenComponentBaseComponentsBrandLogoInput = {
  Logo?: InputMaybe<Scalars['ID']['input']>;
  LogoSmall?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type IGenComponentBaseComponentsButton = {
  __typename?: 'ComponentBaseComponentsButton';
  buttonText: Scalars['String']['output'];
  buttonUrl?: Maybe<Scalars['String']['output']>;
  endIcon?: Maybe<IGenUploadFile>;
  id: Scalars['ID']['output'];
  isExternalUrl?: Maybe<Scalars['Boolean']['output']>;
  startIcon?: Maybe<IGenUploadFile>;
  style?: Maybe<IGenEnum_Componentbasecomponentsbutton_Style>;
  variant: IGenEnum_Componentbasecomponentsbutton_Variant;
  withIcons?: Maybe<Scalars['Boolean']['output']>;
};

export type IGenComponentBaseComponentsButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IGenComponentBaseComponentsButtonFiltersInput>>>;
  buttonText?: InputMaybe<IGenStringFilterInput>;
  buttonUrl?: InputMaybe<IGenStringFilterInput>;
  isExternalUrl?: InputMaybe<IGenBooleanFilterInput>;
  not?: InputMaybe<IGenComponentBaseComponentsButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenComponentBaseComponentsButtonFiltersInput>>>;
  style?: InputMaybe<IGenStringFilterInput>;
  variant?: InputMaybe<IGenStringFilterInput>;
  withIcons?: InputMaybe<IGenBooleanFilterInput>;
};

export type IGenComponentBaseComponentsButtonInput = {
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonUrl?: InputMaybe<Scalars['String']['input']>;
  endIcon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isExternalUrl?: InputMaybe<Scalars['Boolean']['input']>;
  startIcon?: InputMaybe<Scalars['ID']['input']>;
  style?: InputMaybe<IGenEnum_Componentbasecomponentsbutton_Style>;
  variant?: InputMaybe<IGenEnum_Componentbasecomponentsbutton_Variant>;
  withIcons?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IGenComponentBaseComponentsProjectTeaserCard = {
  __typename?: 'ComponentBaseComponentsProjectTeaserCard';
  Image?: Maybe<IGenUploadFile>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  projectUrl: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type IGenComponentBaseComponentsProjectTeaserCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IGenComponentBaseComponentsProjectTeaserCardFiltersInput>>>;
  description?: InputMaybe<IGenStringFilterInput>;
  not?: InputMaybe<IGenComponentBaseComponentsProjectTeaserCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenComponentBaseComponentsProjectTeaserCardFiltersInput>>>;
  projectUrl?: InputMaybe<IGenStringFilterInput>;
  title?: InputMaybe<IGenStringFilterInput>;
};

export type IGenComponentBaseComponentsSimpleCard = {
  __typename?: 'ComponentBaseComponentsSimpleCard';
  action?: Maybe<IGenComponentBaseComponentsButton>;
  description?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type IGenComponentBaseComponentsSimpleCardFiltersInput = {
  action?: InputMaybe<IGenComponentBaseComponentsButtonFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<IGenComponentBaseComponentsSimpleCardFiltersInput>>>;
  description?: InputMaybe<IGenJsonFilterInput>;
  not?: InputMaybe<IGenComponentBaseComponentsSimpleCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenComponentBaseComponentsSimpleCardFiltersInput>>>;
  title?: InputMaybe<IGenStringFilterInput>;
};

export type IGenComponentComponentsFeaturedProjects = {
  __typename?: 'ComponentComponentsFeaturedProjects';
  Items?: Maybe<Array<Maybe<IGenComponentBaseComponentsProjectTeaserCard>>>;
  id: Scalars['ID']['output'];
  seeAllButton?: Maybe<IGenComponentBaseComponentsButton>;
  title?: Maybe<Scalars['String']['output']>;
};


export type IGenComponentComponentsFeaturedProjectsItemsArgs = {
  filters?: InputMaybe<IGenComponentBaseComponentsProjectTeaserCardFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenComponentComponentsGridCards = {
  __typename?: 'ComponentComponentsGridCards';
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<IGenComponentBaseComponentsSimpleCard>>>;
};


export type IGenComponentComponentsGridCardsItemsArgs = {
  filters?: InputMaybe<IGenComponentBaseComponentsSimpleCardFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenComponentComponentsHeroSection = {
  __typename?: 'ComponentComponentsHeroSection';
  CallToAction?: Maybe<IGenComponentBaseComponentsButton>;
  Subtitle?: Maybe<Scalars['JSON']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  tag?: Maybe<Scalars['String']['output']>;
};

export type IGenComponentHeaderComponenetsHeaderNavigations = {
  __typename?: 'ComponentHeaderComponenetsHeaderNavigations';
  Items?: Maybe<Array<Maybe<IGenComponentBaseComponentsButton>>>;
  id: Scalars['ID']['output'];
};


export type IGenComponentHeaderComponenetsHeaderNavigationsItemsArgs = {
  filters?: InputMaybe<IGenComponentBaseComponentsButtonFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenComponentHeaderComponenetsHeaderNavigationsInput = {
  Items?: InputMaybe<Array<InputMaybe<IGenComponentBaseComponentsButtonInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type IGenComponentMetaComponentsSeo = {
  __typename?: 'ComponentMetaComponentsSeo';
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaImage?: Maybe<IGenUploadFile>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  noIndex?: Maybe<Scalars['Boolean']['output']>;
};

export type IGenComponentMetaComponentsSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IGenComponentMetaComponentsSeoFiltersInput>>>;
  canonicalUrl?: InputMaybe<IGenStringFilterInput>;
  metaDescription?: InputMaybe<IGenStringFilterInput>;
  metaTitle?: InputMaybe<IGenStringFilterInput>;
  noIndex?: InputMaybe<IGenBooleanFilterInput>;
  not?: InputMaybe<IGenComponentMetaComponentsSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenComponentMetaComponentsSeoFiltersInput>>>;
};

export type IGenComponentMetaComponentsSeoInput = {
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaImage?: InputMaybe<Scalars['ID']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IGenDateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<IGenDateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IGenDeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export enum IGenEnum_Componentbasecomponentsbutton_Style {
  Primary = 'Primary',
  Secondary = 'Secondary'
}

export enum IGenEnum_Componentbasecomponentsbutton_Variant {
  Button = 'Button',
  Link = 'Link'
}

export type IGenError = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type IGenFileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type IGenFloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<IGenFloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type IGenFooter = {
  __typename?: 'Footer';
  brand?: Maybe<IGenComponentBaseComponentsBrandLogo>;
  copyrightsText?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  navigations?: Maybe<Array<Maybe<IGenComponentBaseComponentsButton>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  socialLinks?: Maybe<Array<Maybe<IGenComponentBaseComponentsButton>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type IGenFooterNavigationsArgs = {
  filters?: InputMaybe<IGenComponentBaseComponentsButtonFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenFooterSocialLinksArgs = {
  filters?: InputMaybe<IGenComponentBaseComponentsButtonFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenFooterInput = {
  brand?: InputMaybe<IGenComponentBaseComponentsBrandLogoInput>;
  copyrightsText?: InputMaybe<Scalars['JSON']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  navigations?: InputMaybe<Array<InputMaybe<IGenComponentBaseComponentsButtonInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  socialLinks?: InputMaybe<Array<InputMaybe<IGenComponentBaseComponentsButtonInput>>>;
};

export type IGenGenericMorph = IGenComponentBaseComponentsBrandLogo | IGenComponentBaseComponentsButton | IGenComponentBaseComponentsProjectTeaserCard | IGenComponentBaseComponentsSimpleCard | IGenComponentComponentsFeaturedProjects | IGenComponentComponentsGridCards | IGenComponentComponentsHeroSection | IGenComponentHeaderComponenetsHeaderNavigations | IGenComponentMetaComponentsSeo | IGenFooter | IGenHeader | IGenI18NLocale | IGenPage | IGenReviewWorkflowsWorkflow | IGenReviewWorkflowsWorkflowStage | IGenUploadFile | IGenUsersPermissionsPermission | IGenUsersPermissionsRole | IGenUsersPermissionsUser;

export type IGenHeader = {
  __typename?: 'Header';
  Brand?: Maybe<IGenComponentBaseComponentsBrandLogo>;
  HeaderNavigations?: Maybe<IGenComponentHeaderComponenetsHeaderNavigations>;
  PrimaryAction?: Maybe<IGenComponentBaseComponentsButton>;
  SecondaryAction?: Maybe<IGenComponentBaseComponentsButton>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IGenHeaderInput = {
  Brand?: InputMaybe<IGenComponentBaseComponentsBrandLogoInput>;
  HeaderNavigations?: InputMaybe<IGenComponentHeaderComponenetsHeaderNavigationsInput>;
  PrimaryAction?: InputMaybe<IGenComponentBaseComponentsButtonInput>;
  SecondaryAction?: InputMaybe<IGenComponentBaseComponentsButtonInput>;
  locale?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IGenI18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IGenI18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  nodes: Array<IGenI18NLocale>;
  pageInfo: IGenPagination;
};

export type IGenI18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IGenI18NLocaleFiltersInput>>>;
  code?: InputMaybe<IGenStringFilterInput>;
  createdAt?: InputMaybe<IGenDateTimeFilterInput>;
  documentId?: InputMaybe<IGenIdFilterInput>;
  name?: InputMaybe<IGenStringFilterInput>;
  not?: InputMaybe<IGenI18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenI18NLocaleFiltersInput>>>;
  publishedAt?: InputMaybe<IGenDateTimeFilterInput>;
  updatedAt?: InputMaybe<IGenDateTimeFilterInput>;
};

export type IGenIdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IGenIdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IGenIntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IGenIntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type IGenJsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<IGenJsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type IGenMutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<IGenUsersPermissionsLoginPayload>;
  createPage?: Maybe<IGenPage>;
  createReviewWorkflowsWorkflow?: Maybe<IGenReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<IGenReviewWorkflowsWorkflowStage>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<IGenUsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: IGenUsersPermissionsUserEntityResponse;
  deleteFooter?: Maybe<IGenDeleteMutationResponse>;
  deleteHeader?: Maybe<IGenDeleteMutationResponse>;
  deletePage?: Maybe<IGenDeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<IGenDeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<IGenDeleteMutationResponse>;
  deleteUploadFile?: Maybe<IGenUploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<IGenUsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: IGenUsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<IGenUsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<IGenUsersPermissionsPasswordPayload>;
  login: IGenUsersPermissionsLoginPayload;
  /** Register a user */
  register: IGenUsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<IGenUsersPermissionsLoginPayload>;
  updateFooter?: Maybe<IGenFooter>;
  updateHeader?: Maybe<IGenHeader>;
  updatePage?: Maybe<IGenPage>;
  updateReviewWorkflowsWorkflow?: Maybe<IGenReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<IGenReviewWorkflowsWorkflowStage>;
  updateUploadFile: IGenUploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<IGenUsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: IGenUsersPermissionsUserEntityResponse;
};


export type IGenMutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type IGenMutationCreatePageArgs = {
  data: IGenPageInput;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationCreateReviewWorkflowsWorkflowArgs = {
  data: IGenReviewWorkflowsWorkflowInput;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: IGenReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationCreateUsersPermissionsRoleArgs = {
  data: IGenUsersPermissionsRoleInput;
};


export type IGenMutationCreateUsersPermissionsUserArgs = {
  data: IGenUsersPermissionsUserInput;
};


export type IGenMutationDeletePageArgs = {
  documentId: Scalars['ID']['input'];
};


export type IGenMutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type IGenMutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type IGenMutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type IGenMutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type IGenMutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type IGenMutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type IGenMutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type IGenMutationLoginArgs = {
  input: IGenUsersPermissionsLoginInput;
};


export type IGenMutationRegisterArgs = {
  input: IGenUsersPermissionsRegisterInput;
};


export type IGenMutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type IGenMutationUpdateFooterArgs = {
  data: IGenFooterInput;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateHeaderArgs = {
  data: IGenHeaderInput;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdatePageArgs = {
  data: IGenPageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateReviewWorkflowsWorkflowArgs = {
  data: IGenReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: IGenReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<IGenFileInfoInput>;
};


export type IGenMutationUpdateUsersPermissionsRoleArgs = {
  data: IGenUsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type IGenMutationUpdateUsersPermissionsUserArgs = {
  data: IGenUsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type IGenPage = {
  __typename?: 'Page';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sections?: Maybe<Array<Maybe<IGenPageSectionsDynamicZone>>>;
  seo?: Maybe<IGenComponentMetaComponentsSeo>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IGenPageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  nodes: Array<IGenPage>;
  pageInfo: IGenPagination;
};

export type IGenPageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IGenPageFiltersInput>>>;
  createdAt?: InputMaybe<IGenDateTimeFilterInput>;
  documentId?: InputMaybe<IGenIdFilterInput>;
  not?: InputMaybe<IGenPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenPageFiltersInput>>>;
  publishedAt?: InputMaybe<IGenDateTimeFilterInput>;
  seo?: InputMaybe<IGenComponentMetaComponentsSeoFiltersInput>;
  slug?: InputMaybe<IGenStringFilterInput>;
  title?: InputMaybe<IGenStringFilterInput>;
  updatedAt?: InputMaybe<IGenDateTimeFilterInput>;
};

export type IGenPageInput = {
  locale?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sections?: InputMaybe<Array<Scalars['PageSectionsDynamicZoneInput']['input']>>;
  seo?: InputMaybe<IGenComponentMetaComponentsSeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type IGenPageSectionsDynamicZone = IGenComponentComponentsFeaturedProjects | IGenComponentComponentsGridCards | IGenComponentComponentsHeroSection | IGenError;

export type IGenPagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type IGenPaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export enum IGenPublicationFilter {
  HasPublishedVersion = 'HAS_PUBLISHED_VERSION',
  HasPublishedVersionDocument = 'HAS_PUBLISHED_VERSION_DOCUMENT',
  Modified = 'MODIFIED',
  NeverPublished = 'NEVER_PUBLISHED',
  NeverPublishedDocument = 'NEVER_PUBLISHED_DOCUMENT',
  PublishedWithoutDraft = 'PUBLISHED_WITHOUT_DRAFT',
  PublishedWithDraft = 'PUBLISHED_WITH_DRAFT',
  Unmodified = 'UNMODIFIED'
}

export enum IGenPublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type IGenQuery = {
  __typename?: 'Query';
  footer?: Maybe<IGenFooter>;
  header?: Maybe<IGenHeader>;
  i18NLocale?: Maybe<IGenI18NLocale>;
  i18NLocales: Array<Maybe<IGenI18NLocale>>;
  i18NLocales_connection?: Maybe<IGenI18NLocaleEntityResponseCollection>;
  me?: Maybe<IGenUsersPermissionsMe>;
  page?: Maybe<IGenPage>;
  pages: Array<Maybe<IGenPage>>;
  pages_connection?: Maybe<IGenPageEntityResponseCollection>;
  reviewWorkflowsWorkflow?: Maybe<IGenReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<IGenReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<IGenReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection?: Maybe<IGenReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<IGenReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection?: Maybe<IGenReviewWorkflowsWorkflowEntityResponseCollection>;
  uploadFile?: Maybe<IGenUploadFile>;
  uploadFiles: Array<Maybe<IGenUploadFile>>;
  uploadFiles_connection?: Maybe<IGenUploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<IGenUsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<IGenUsersPermissionsRole>>;
  usersPermissionsRoles_connection?: Maybe<IGenUsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<IGenUsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<IGenUsersPermissionsUser>>;
  usersPermissionsUsers_connection?: Maybe<IGenUsersPermissionsUserEntityResponseCollection>;
};


export type IGenQueryFooterArgs = {
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryHeaderArgs = {
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryI18NLocalesArgs = {
  filters?: InputMaybe<IGenI18NLocaleFiltersInput>;
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<IGenI18NLocaleFiltersInput>;
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryPageArgs = {
  documentId: Scalars['ID']['input'];
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryPagesArgs = {
  filters?: InputMaybe<IGenPageFiltersInput>;
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryPages_ConnectionArgs = {
  filters?: InputMaybe<IGenPageFiltersInput>;
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>;
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>;
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUploadFilesArgs = {
  filters?: InputMaybe<IGenUploadFileFiltersInput>;
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<IGenUploadFileFiltersInput>;
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  hasPublishedVersion?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  publicationFilter?: InputMaybe<IGenPublicationFilter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};

export type IGenReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow';
  contentTypes: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish?: Maybe<IGenReviewWorkflowsWorkflowStage>;
  stages: Array<Maybe<IGenReviewWorkflowsWorkflowStage>>;
  stages_connection?: Maybe<IGenReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type IGenReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  nodes: Array<IGenReviewWorkflowsWorkflow>;
  pageInfo: IGenPagination;
};

export type IGenReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes?: InputMaybe<IGenJsonFilterInput>;
  createdAt?: InputMaybe<IGenDateTimeFilterInput>;
  documentId?: InputMaybe<IGenIdFilterInput>;
  name?: InputMaybe<IGenStringFilterInput>;
  not?: InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt?: InputMaybe<IGenDateTimeFilterInput>;
  stageRequiredToPublish?: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  stages?: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<IGenDateTimeFilterInput>;
};

export type IGenReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
  stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type IGenReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflow?: Maybe<IGenReviewWorkflowsWorkflow>;
};

export type IGenReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  nodes: Array<IGenReviewWorkflowsWorkflowStage>;
  pageInfo: IGenPagination;
};

export type IGenReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>>>;
  color?: InputMaybe<IGenStringFilterInput>;
  createdAt?: InputMaybe<IGenDateTimeFilterInput>;
  documentId?: InputMaybe<IGenIdFilterInput>;
  name?: InputMaybe<IGenStringFilterInput>;
  not?: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt?: InputMaybe<IGenDateTimeFilterInput>;
  updatedAt?: InputMaybe<IGenDateTimeFilterInput>;
  workflow?: InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>;
};

export type IGenReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type IGenReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  nodes: Array<IGenReviewWorkflowsWorkflowStage>;
};

export type IGenStringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<IGenStringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type IGenUploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ext?: Maybe<Scalars['String']['output']>;
  focalPoint?: Maybe<Scalars['JSON']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  related?: Maybe<Array<Maybe<IGenGenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type IGenUploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  nodes: Array<IGenUploadFile>;
  pageInfo: IGenPagination;
};

export type IGenUploadFileFiltersInput = {
  alternativeText?: InputMaybe<IGenStringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<IGenUploadFileFiltersInput>>>;
  caption?: InputMaybe<IGenStringFilterInput>;
  createdAt?: InputMaybe<IGenDateTimeFilterInput>;
  documentId?: InputMaybe<IGenIdFilterInput>;
  ext?: InputMaybe<IGenStringFilterInput>;
  focalPoint?: InputMaybe<IGenJsonFilterInput>;
  formats?: InputMaybe<IGenJsonFilterInput>;
  hash?: InputMaybe<IGenStringFilterInput>;
  height?: InputMaybe<IGenIntFilterInput>;
  mime?: InputMaybe<IGenStringFilterInput>;
  name?: InputMaybe<IGenStringFilterInput>;
  not?: InputMaybe<IGenUploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenUploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<IGenStringFilterInput>;
  provider?: InputMaybe<IGenStringFilterInput>;
  provider_metadata?: InputMaybe<IGenJsonFilterInput>;
  publishedAt?: InputMaybe<IGenDateTimeFilterInput>;
  size?: InputMaybe<IGenFloatFilterInput>;
  updatedAt?: InputMaybe<IGenDateTimeFilterInput>;
  url?: InputMaybe<IGenStringFilterInput>;
  width?: InputMaybe<IGenIntFilterInput>;
};

export type IGenUsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type IGenUsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type IGenUsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type IGenUsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: IGenUsersPermissionsMe;
};

export type IGenUsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  documentId: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<IGenUsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type IGenUsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type IGenUsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type IGenUsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<IGenUsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IGenUsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<IGenStringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<IGenUsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<IGenDateTimeFilterInput>;
  documentId?: InputMaybe<IGenIdFilterInput>;
  not?: InputMaybe<IGenUsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenUsersPermissionsPermissionFiltersInput>>>;
  publishedAt?: InputMaybe<IGenDateTimeFilterInput>;
  role?: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<IGenDateTimeFilterInput>;
};

export type IGenUsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  nodes: Array<IGenUsersPermissionsPermission>;
};

export type IGenUsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type IGenUsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<IGenUsersPermissionsPermission>>;
  permissions_connection?: Maybe<IGenUsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: Array<Maybe<IGenUsersPermissionsUser>>;
  users_connection?: Maybe<IGenUsersPermissionsUserRelationResponseCollection>;
};


export type IGenUsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<IGenUsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenUsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<IGenUsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenUsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenUsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenUsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  nodes: Array<IGenUsersPermissionsRole>;
  pageInfo: IGenPagination;
};

export type IGenUsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IGenUsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<IGenDateTimeFilterInput>;
  description?: InputMaybe<IGenStringFilterInput>;
  documentId?: InputMaybe<IGenIdFilterInput>;
  name?: InputMaybe<IGenStringFilterInput>;
  not?: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenUsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<IGenUsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<IGenDateTimeFilterInput>;
  type?: InputMaybe<IGenStringFilterInput>;
  updatedAt?: InputMaybe<IGenDateTimeFilterInput>;
  users?: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
};

export type IGenUsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type IGenUsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type IGenUsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<IGenUsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type IGenUsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<IGenUsersPermissionsUser>;
};

export type IGenUsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  nodes: Array<IGenUsersPermissionsUser>;
  pageInfo: IGenPagination;
};

export type IGenUsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IGenUsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<IGenBooleanFilterInput>;
  confirmed?: InputMaybe<IGenBooleanFilterInput>;
  createdAt?: InputMaybe<IGenDateTimeFilterInput>;
  documentId?: InputMaybe<IGenIdFilterInput>;
  email?: InputMaybe<IGenStringFilterInput>;
  not?: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenUsersPermissionsUserFiltersInput>>>;
  provider?: InputMaybe<IGenStringFilterInput>;
  publishedAt?: InputMaybe<IGenDateTimeFilterInput>;
  role?: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<IGenDateTimeFilterInput>;
  username?: InputMaybe<IGenStringFilterInput>;
};

export type IGenUsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type IGenUsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  nodes: Array<IGenUsersPermissionsUser>;
};

export type IGenBooleanFilterInput = {
  and?: Array<boolean | null | undefined> | null | undefined;
  between?: Array<boolean | null | undefined> | null | undefined;
  contains?: boolean | null | undefined;
  containsi?: boolean | null | undefined;
  endsWith?: boolean | null | undefined;
  eq?: boolean | null | undefined;
  eqi?: boolean | null | undefined;
  gt?: boolean | null | undefined;
  gte?: boolean | null | undefined;
  in?: Array<boolean | null | undefined> | null | undefined;
  lt?: boolean | null | undefined;
  lte?: boolean | null | undefined;
  ne?: boolean | null | undefined;
  nei?: boolean | null | undefined;
  not?: IGenBooleanFilterInput | null | undefined;
  notContains?: boolean | null | undefined;
  notContainsi?: boolean | null | undefined;
  notIn?: Array<boolean | null | undefined> | null | undefined;
  notNull?: boolean | null | undefined;
  null?: boolean | null | undefined;
  or?: Array<boolean | null | undefined> | null | undefined;
  startsWith?: boolean | null | undefined;
};

export type IGenComponentMetaComponentsSeoFiltersInput = {
  and?: Array<IGenComponentMetaComponentsSeoFiltersInput | null | undefined> | null | undefined;
  canonicalUrl?: IGenStringFilterInput | null | undefined;
  metaDescription?: IGenStringFilterInput | null | undefined;
  metaTitle?: IGenStringFilterInput | null | undefined;
  noIndex?: IGenBooleanFilterInput | null | undefined;
  not?: IGenComponentMetaComponentsSeoFiltersInput | null | undefined;
  or?: Array<IGenComponentMetaComponentsSeoFiltersInput | null | undefined> | null | undefined;
};

export type IGenDateTimeFilterInput = {
  and?: Array<unknown> | null | undefined;
  between?: Array<unknown> | null | undefined;
  contains?: unknown;
  containsi?: unknown;
  endsWith?: unknown;
  eq?: unknown;
  eqi?: unknown;
  gt?: unknown;
  gte?: unknown;
  in?: Array<unknown> | null | undefined;
  lt?: unknown;
  lte?: unknown;
  ne?: unknown;
  nei?: unknown;
  not?: IGenDateTimeFilterInput | null | undefined;
  notContains?: unknown;
  notContainsi?: unknown;
  notIn?: Array<unknown> | null | undefined;
  notNull?: boolean | null | undefined;
  null?: boolean | null | undefined;
  or?: Array<unknown> | null | undefined;
  startsWith?: unknown;
};

export type IGenEnum_Componentbasecomponentsbutton_Style =
  | 'Primary'
  | 'Secondary';

export type IGenEnum_Componentbasecomponentsbutton_Variant =
  | 'Button'
  | 'Link';

export type IGenIdFilterInput = {
  and?: Array<string | number | null | undefined> | null | undefined;
  between?: Array<string | number | null | undefined> | null | undefined;
  contains?: string | number | null | undefined;
  containsi?: string | number | null | undefined;
  endsWith?: string | number | null | undefined;
  eq?: string | number | null | undefined;
  eqi?: string | number | null | undefined;
  gt?: string | number | null | undefined;
  gte?: string | number | null | undefined;
  in?: Array<string | number | null | undefined> | null | undefined;
  lt?: string | number | null | undefined;
  lte?: string | number | null | undefined;
  ne?: string | number | null | undefined;
  nei?: string | number | null | undefined;
  not?: IGenIdFilterInput | null | undefined;
  notContains?: string | number | null | undefined;
  notContainsi?: string | number | null | undefined;
  notIn?: Array<string | number | null | undefined> | null | undefined;
  notNull?: boolean | null | undefined;
  null?: boolean | null | undefined;
  or?: Array<string | number | null | undefined> | null | undefined;
  startsWith?: string | number | null | undefined;
};

export type IGenPageFiltersInput = {
  and?: Array<IGenPageFiltersInput | null | undefined> | null | undefined;
  createdAt?: IGenDateTimeFilterInput | null | undefined;
  documentId?: IGenIdFilterInput | null | undefined;
  not?: IGenPageFiltersInput | null | undefined;
  or?: Array<IGenPageFiltersInput | null | undefined> | null | undefined;
  publishedAt?: IGenDateTimeFilterInput | null | undefined;
  seo?: IGenComponentMetaComponentsSeoFiltersInput | null | undefined;
  slug?: IGenStringFilterInput | null | undefined;
  title?: IGenStringFilterInput | null | undefined;
  updatedAt?: IGenDateTimeFilterInput | null | undefined;
};

export type IGenStringFilterInput = {
  and?: Array<string | null | undefined> | null | undefined;
  between?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  containsi?: string | null | undefined;
  endsWith?: string | null | undefined;
  eq?: string | null | undefined;
  eqi?: string | null | undefined;
  gt?: string | null | undefined;
  gte?: string | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  lt?: string | null | undefined;
  lte?: string | null | undefined;
  ne?: string | null | undefined;
  nei?: string | null | undefined;
  not?: IGenStringFilterInput | null | undefined;
  notContains?: string | null | undefined;
  notContainsi?: string | null | undefined;
  notIn?: Array<string | null | undefined> | null | undefined;
  notNull?: boolean | null | undefined;
  null?: boolean | null | undefined;
  or?: Array<string | null | undefined> | null | undefined;
  startsWith?: string | null | undefined;
};

export type IGenF_ButtonFragment = { id: string, buttonText: string, buttonUrl: string | null, variant: IGenEnum_Componentbasecomponentsbutton_Variant, style: IGenEnum_Componentbasecomponentsbutton_Style | null, isExternalUrl: boolean | null, withIcons: boolean | null, startIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null, endIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null };

export type IGenF_MediaFragment = { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown };

export type IGenF_Featured_ProjectsFragment = { id: string, title: string | null, Items: Array<{ id: string, projectUrl: string, title: string | null, description: string | null, Image: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null } | null> | null, seeAllButton: { id: string, buttonText: string, buttonUrl: string | null, variant: IGenEnum_Componentbasecomponentsbutton_Variant, style: IGenEnum_Componentbasecomponentsbutton_Style | null, isExternalUrl: boolean | null, withIcons: boolean | null, startIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null, endIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null } | null };

export type IGenF_Grid_CardsFragment = { id: string, items: Array<{ id: string, title: string | null, description: unknown, action: { id: string, buttonText: string, buttonUrl: string | null, variant: IGenEnum_Componentbasecomponentsbutton_Variant, style: IGenEnum_Componentbasecomponentsbutton_Style | null, isExternalUrl: boolean | null, withIcons: boolean | null, startIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null, endIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null } | null } | null> | null };

export type IGenF_Hero_SectionFragment = { id: string, tag: string | null, Title: string | null, Subtitle: unknown, CallToAction: { id: string, buttonText: string, buttonUrl: string | null, variant: IGenEnum_Componentbasecomponentsbutton_Variant, style: IGenEnum_Componentbasecomponentsbutton_Style | null, isExternalUrl: boolean | null, withIcons: boolean | null, startIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null, endIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null } | null };

export type IGenF_SeoFragment = { id: string, canonicalUrl: string | null, metaTitle: string | null, metaDescription: string | null, noIndex: boolean | null, metaImage: { url: string } | null };

export type IGenQ_FooterQueryVariables = Exact<{ [key: string]: never; }>;


export type IGenQ_FooterQuery = { footer: { copyrightsText: unknown, createdAt: unknown, documentId: string, publishedAt: unknown, updatedAt: unknown, brand: { id: string, Logo: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null, LogoSmall: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null } | null, navigations: Array<{ id: string, buttonText: string, buttonUrl: string | null, variant: IGenEnum_Componentbasecomponentsbutton_Variant, style: IGenEnum_Componentbasecomponentsbutton_Style | null, isExternalUrl: boolean | null, withIcons: boolean | null, startIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null, endIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null } | null> | null, socialLinks: Array<{ id: string, buttonText: string, buttonUrl: string | null, variant: IGenEnum_Componentbasecomponentsbutton_Variant, style: IGenEnum_Componentbasecomponentsbutton_Style | null, isExternalUrl: boolean | null, withIcons: boolean | null, startIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null, endIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null } | null> | null } | null };

export type IGenQ_HeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type IGenQ_HeaderQuery = { header: { createdAt: unknown, documentId: string, publishedAt: unknown, updatedAt: unknown, Brand: { Logo: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null, LogoSmall: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null } | null, HeaderNavigations: { Items: Array<{ id: string, buttonText: string, buttonUrl: string | null, variant: IGenEnum_Componentbasecomponentsbutton_Variant, style: IGenEnum_Componentbasecomponentsbutton_Style | null, isExternalUrl: boolean | null, withIcons: boolean | null, startIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null, endIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null } | null> | null } | null, PrimaryAction: { id: string, buttonText: string, buttonUrl: string | null, variant: IGenEnum_Componentbasecomponentsbutton_Variant, style: IGenEnum_Componentbasecomponentsbutton_Style | null, isExternalUrl: boolean | null, withIcons: boolean | null, startIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null, endIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null } | null, SecondaryAction: { id: string, buttonText: string, buttonUrl: string | null, variant: IGenEnum_Componentbasecomponentsbutton_Variant, style: IGenEnum_Componentbasecomponentsbutton_Style | null, isExternalUrl: boolean | null, withIcons: boolean | null, startIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null, endIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null } | null } | null };

export type IGenQ_Pages_By_SlugQueryVariables = Exact<{
  filters?: IGenPageFiltersInput | null | undefined;
}>;


export type IGenQ_Pages_By_SlugQuery = { pages: Array<{ documentId: string, title: string, slug: string, createdAt: unknown, updatedAt: unknown, publishedAt: unknown, seo: { id: string, canonicalUrl: string | null, metaTitle: string | null, metaDescription: string | null, noIndex: boolean | null, metaImage: { url: string } | null } | null, sections: Array<
      | { id: string, title: string | null, Items: Array<{ id: string, projectUrl: string, title: string | null, description: string | null, Image: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null } | null> | null, seeAllButton: { id: string, buttonText: string, buttonUrl: string | null, variant: IGenEnum_Componentbasecomponentsbutton_Variant, style: IGenEnum_Componentbasecomponentsbutton_Style | null, isExternalUrl: boolean | null, withIcons: boolean | null, startIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null, endIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null } | null }
      | { id: string, items: Array<{ id: string, title: string | null, description: unknown, action: { id: string, buttonText: string, buttonUrl: string | null, variant: IGenEnum_Componentbasecomponentsbutton_Variant, style: IGenEnum_Componentbasecomponentsbutton_Style | null, isExternalUrl: boolean | null, withIcons: boolean | null, startIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null, endIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null } | null } | null> | null }
      | { id: string, tag: string | null, Title: string | null, Subtitle: unknown, CallToAction: { id: string, buttonText: string, buttonUrl: string | null, variant: IGenEnum_Componentbasecomponentsbutton_Variant, style: IGenEnum_Componentbasecomponentsbutton_Style | null, isExternalUrl: boolean | null, withIcons: boolean | null, startIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null, endIcon: { alternativeText: string | null, size: number, url: string, ext: string | null, mime: string, focalPoint: unknown } | null } | null }
      | Record<PropertyKey, never>
     | null> | null } | null> };

export const F_MediaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}}]}}]} as unknown as DocumentNode<IGenF_MediaFragment, unknown>;
export const F_ButtonFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBaseComponentsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"isExternalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"withIcons"}},{"kind":"Field","name":{"kind":"Name","value":"startIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}}]}}]} as unknown as DocumentNode<IGenF_ButtonFragment, unknown>;
export const F_Featured_ProjectsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_featured_projects"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentComponentsFeaturedProjects"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"projectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"seeAllButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBaseComponentsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"isExternalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"withIcons"}},{"kind":"Field","name":{"kind":"Name","value":"startIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}}]} as unknown as DocumentNode<IGenF_Featured_ProjectsFragment, unknown>;
export const F_Grid_CardsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_grid_cards"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentComponentsGridCards"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"action"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBaseComponentsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"isExternalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"withIcons"}},{"kind":"Field","name":{"kind":"Name","value":"startIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}}]} as unknown as DocumentNode<IGenF_Grid_CardsFragment, unknown>;
export const F_Hero_SectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_hero_section"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentComponentsHeroSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"CallToAction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBaseComponentsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"isExternalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"withIcons"}},{"kind":"Field","name":{"kind":"Name","value":"startIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}}]} as unknown as DocumentNode<IGenF_Hero_SectionFragment, unknown>;
export const F_SeoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_seo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentMetaComponentsSeo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"canonicalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"noIndex"}},{"kind":"Field","name":{"kind":"Name","value":"metaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<IGenF_SeoFragment, unknown>;
export const Q_FooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"q_footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"LogoSmall"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"copyrightsText"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"navigations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"socialLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBaseComponentsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"isExternalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"withIcons"}},{"kind":"Field","name":{"kind":"Name","value":"startIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}}]} as unknown as DocumentNode<IGenQ_FooterQuery, IGenQ_FooterQueryVariables>;
export const Q_HeaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"q_header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"LogoSmall"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"HeaderNavigations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"PrimaryAction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"SecondaryAction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBaseComponentsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"isExternalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"withIcons"}},{"kind":"Field","name":{"kind":"Name","value":"startIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}}]} as unknown as DocumentNode<IGenQ_HeaderQuery, IGenQ_HeaderQueryVariables>;
export const Q_Pages_By_SlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"q_pages_by_slug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PageFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_seo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_hero_section"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_grid_cards"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_featured_projects"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_media"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBaseComponentsButton"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"isExternalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"withIcons"}},{"kind":"Field","name":{"kind":"Name","value":"startIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_seo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentMetaComponentsSeo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"canonicalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"noIndex"}},{"kind":"Field","name":{"kind":"Name","value":"metaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_hero_section"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentComponentsHeroSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"CallToAction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_grid_cards"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentComponentsGridCards"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"action"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"f_featured_projects"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentComponentsFeaturedProjects"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_media"}}]}},{"kind":"Field","name":{"kind":"Name","value":"projectUrl"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"seeAllButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"f_button"}}]}}]}}]} as unknown as DocumentNode<IGenQ_Pages_By_SlugQuery, IGenQ_Pages_By_SlugQueryVariables>;