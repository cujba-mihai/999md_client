import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['String'];
  name: Scalars['String'];
  subcategories?: Maybe<Array<Subcategory>>;
};

export type CreateCategoriesInput = {
  categoriesToAdd: Array<Scalars['String']>;
};

export type CreateFieldFromStringDto = {
  label: Scalars['String'];
  stringSchema: Scalars['String'];
};

export type CreateProductInput = {
  author: Scalars['String'];
  category: Scalars['String'];
  currency: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  images: Array<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Int'];
  productDetails: Scalars['String'];
  subcategory: Scalars['String'];
  thumbnail: Scalars['String'];
};

export type CreateSubcategoriesInput = {
  name: Scalars['String'];
  parentCategory: Scalars['String'];
  subcategories?: InputMaybe<Array<CreateSubcategoriesInput>>;
};

export type CreateSubcategoryInput = {
  categoryId: Scalars['String'];
  name: Scalars['String'];
};

export type FormField = {
  __typename?: 'FormField';
  _id: Scalars['ID'];
  label: Scalars['String'];
  options: Array<Scalars['String']>;
  type: Scalars['String'];
  validationSchema: Scalars['String'];
};

export type Locations = {
  __typename?: 'Locations';
  _id: Scalars['ID'];
  location: Scalars['String'];
  region: Scalars['String'];
  sector: Array<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  LogIn: User;
  Register: UserType;
  createCategories: Array<Category>;
  /**
   * Allows us to create form field with validation from string.
   *       Example of validationString: string,oneOf['one','two],required,min[0],max[50]
   */
  createFieldFromString: FormField;
  createProduct: Product;
  createRegionWithLocations: Regions;
  createRegionsWithLocations: Array<Regions>;
  createSubcategories: Subcategory;
  createSubcategory: Subcategory;
  removeAllCategories: Scalars['Boolean'];
  removeAllFields: Scalars['Boolean'];
  removeAllProducts: Product;
  removeAllRegions: Scalars['Boolean'];
  removeAllSubcategories: Scalars['Boolean'];
  removeAllUsers: Scalars['Boolean'];
  removeProduct: Product;
  removeSubcategory: Subcategory;
  updateProduct: Product;
  updateSubcategory: Subcategory;
  userCreateProduct: UserType;
};


export type MutationLogInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  input: UserInput;
};


export type MutationCreateCategoriesArgs = {
  createCategoriesInput: CreateCategoriesInput;
};


export type MutationCreateFieldFromStringArgs = {
  createField: CreateFieldFromStringDto;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateSubcategoriesArgs = {
  input: CreateSubcategoriesInput;
};


export type MutationCreateSubcategoryArgs = {
  createSubcategoryInput: CreateSubcategoryInput;
};


export type MutationRemoveProductArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveSubcategoryArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput;
};


export type MutationUpdateSubcategoryArgs = {
  updateSubcategoryInput: UpdateSubcategoryInput;
};


export type MutationUserCreateProductArgs = {
  product: CreateProductInput;
  userId: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['String'];
  author: Scalars['String'];
  category: Scalars['String'];
  currency: Scalars['String'];
  description: Scalars['String'];
  images: Array<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  productDetails: Scalars['String'];
  subcategory: Scalars['String'];
  thumbnail: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  findAllFields: Array<FormField>;
  findRegion: Regions;
  findRegions: Array<Regions>;
  me: User;
  product: Product;
  products: Array<Product>;
  subcategories: Array<Subcategory>;
  subcategory: Subcategory;
  users: Array<UserType>;
};


export type QueryProductArgs = {
  id: Scalars['Int'];
};


export type QuerySubcategoryArgs = {
  id: Scalars['Int'];
};

export type Regions = {
  __typename?: 'Regions';
  _id: Scalars['ID'];
  locations: Array<Locations>;
  region: Scalars['String'];
};

export type Subcategory = {
  __typename?: 'Subcategory';
  _id: Scalars['String'];
  childCategories: Array<Subcategory>;
  name?: Maybe<Scalars['String']>;
  parentCategory: Scalars['String'];
};

export type UpdateProductInput = {
  author?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  images?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  productDetails?: InputMaybe<Scalars['String']>;
  subcategory?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
};

export type UpdateSubcategoryInput = {
  categoryId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  access_token?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  products: Array<Product>;
  refresh_token?: Maybe<Scalars['String']>;
};

export type UserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type UserType = {
  __typename?: 'UserType';
  _id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  products: Array<Product>;
};

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string }> };


export const GetCategoriesDocument = gql`
    query getCategories {
  categories {
    id
    name
  }
}
    `;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;