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

export type CategoriesDto = {
  __typename?: 'CategoriesDTO';
  id: Scalars['String'];
  name: Scalars['String'];
  subcategories: Array<SubcategoriesDto>;
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

export type CreateCategoryDto = {
  name: Scalars['String'];
  subcategories?: InputMaybe<Array<CreateSubcategoriesInput>>;
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

export type CreateSubcategoriesDto = {
  __typename?: 'CreateSubcategoriesDTO';
  childSubcategories?: Maybe<Array<CreateSubcategoriesDto>>;
  name: Scalars['String'];
};

export type CreateSubcategoriesInput = {
  childSubcategories?: InputMaybe<Array<CreateSubcategoriesInput>>;
  name: Scalars['String'];
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

export type GetByIdDto = {
  id: Scalars['ID'];
};

export type GetOneSubcategoryDto = {
  id: Scalars['ID'];
};

export type GetProductsDto = {
  __typename?: 'GetProductsDTO';
  author: UserDto;
  category: CategoriesDto;
  currency: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
  images: Array<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  productDetails: Scalars['String'];
  subcategory: SubcategoriesDto;
  thumbnail: Scalars['String'];
};

export type GetSubcategoryByRelationDto = {
  category: Scalars['String'];
  subcategory: Scalars['String'];
};

export type ListProductsBySubcategoryDto = {
  limit?: Scalars['Float'];
  offset?: Scalars['Float'];
  subCategoryId: Scalars['ID'];
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
  createCategory: Category;
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


export type MutationCreateCategoryArgs = {
  category: CreateCategoryDto;
};


export type MutationCreateFieldFromStringArgs = {
  createField: CreateFieldFromStringDto;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateSubcategoryArgs = {
  createSubcategoryInput: CreateSubcategoryInput;
};


export type MutationRemoveProductArgs = {
  id: GetByIdDto;
};


export type MutationRemoveSubcategoryArgs = {
  id: GetOneSubcategoryDto;
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
  findAllFields: Array<FormField>;
  findByRelation: SubcategoriesDto;
  findRegion: Regions;
  findRegions: Array<Regions>;
  getCategories: Array<Category>;
  getCategoryByName: Category;
  getProducts: Array<GetProductsDto>;
  getProductsBySubcategory: Array<GetProductsDto>;
  me: User;
  product: GetProductsDto;
  products: Array<Product>;
  subcategories: Array<Subcategory>;
  subcategory: SubcategoriesDto;
  users: Array<UserType>;
};


export type QueryFindByRelationArgs = {
  filter: GetSubcategoryByRelationDto;
};


export type QueryGetCategoryByNameArgs = {
  categoryName: Scalars['String'];
};


export type QueryGetProductsBySubcategoryArgs = {
  listProductByCategoryInput: ListProductsBySubcategoryDto;
};


export type QueryProductArgs = {
  id: GetByIdDto;
};


export type QuerySubcategoryArgs = {
  subcategoryId: GetOneSubcategoryDto;
};

export type Regions = {
  __typename?: 'Regions';
  _id: Scalars['ID'];
  locations: Array<Locations>;
  region: Scalars['String'];
};

export type SubcategoriesDto = {
  __typename?: 'SubcategoriesDTO';
  childSubcategories?: Maybe<Array<SubcategoriesDto>>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type SubcategoriesInputDto = {
  childSubcategories?: InputMaybe<Array<SubcategoriesInputDto>>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type Subcategory = {
  __typename?: 'Subcategory';
  childSubcategories?: Maybe<Array<Subcategory>>;
  id: Scalars['String'];
  name: Scalars['String'];
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

export type UserDto = {
  __typename?: 'UserDTO';
  _id: Scalars['String'];
  access_token?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  products: Array<GetProductsDto>;
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

export type CategoryPageQueryVariables = Exact<{
  categoryName: Scalars['String'];
}>;


export type CategoryPageQuery = { __typename?: 'Query', getCategoryByName: { __typename?: 'Category', id: string, name: string, subcategories?: Array<{ __typename?: 'Subcategory', id: string, name: string, childSubcategories?: Array<{ __typename?: 'Subcategory', id: string, name: string }> | null }> | null }, getProducts: Array<{ __typename?: 'GetProductsDTO', id: string, thumbnail: string, name: string, price: number, currency: string, description: string }> };

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', getCategories: Array<{ __typename?: 'Category', id: string, name: string, subcategories?: Array<{ __typename?: 'Subcategory', id: string, name: string, childSubcategories?: Array<{ __typename?: 'Subcategory', id: string, name: string }> | null }> | null }> };

export type ProductIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductIdsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', _id: string }> };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', getCategories: Array<{ __typename?: 'Category', id: string, name: string }>, getProducts: Array<{ __typename?: 'GetProductsDTO', id: string, name: string, thumbnail: string, price: number, description: string }> };

export type ProductQueryVariables = Exact<{
  productId: GetByIdDto;
}>;


export type ProductQuery = { __typename?: 'Query', product: { __typename?: 'GetProductsDTO', id: string, name: string, images: Array<string>, price: number, currency: string, author: { __typename?: 'UserDTO', _id: string, email: string, firstName: string, lastName: string }, category: { __typename?: 'CategoriesDTO', id: string, name: string }, subcategory: { __typename?: 'SubcategoriesDTO', id: string, name?: string | null, childSubcategories?: Array<{ __typename?: 'SubcategoriesDTO', id: string, name?: string | null }> | null } } };

export type SubcategoryPageQueryVariables = Exact<{
  listProductByCategoryInput: ListProductsBySubcategoryDto;
  subcategoryId: GetOneSubcategoryDto;
}>;


export type SubcategoryPageQuery = { __typename?: 'Query', getProductsBySubcategory: Array<{ __typename?: 'GetProductsDTO', id: string, name: string, thumbnail: string, price: number, description: string }>, subcategory: { __typename?: 'SubcategoriesDTO', id: string, name?: string | null } };


export const CategoryPageDocument = gql`
    query CategoryPage($categoryName: String!) {
  getCategoryByName(categoryName: $categoryName) {
    id
    name
    subcategories {
      id
      name
      childSubcategories {
        id
        name
      }
    }
  }
  getProducts {
    id
    thumbnail
    name
    price
    currency
    description
  }
}
    `;
export type CategoryPageQueryResult = Apollo.QueryResult<CategoryPageQuery, CategoryPageQueryVariables>;
export const GetAllCategoriesDocument = gql`
    query GetAllCategories {
  getCategories {
    id
    name
    subcategories {
      id
      name
      childSubcategories {
        id
        name
      }
    }
  }
}
    `;
export type GetAllCategoriesQueryResult = Apollo.QueryResult<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>;
export const ProductIdsDocument = gql`
    query ProductIds {
  products {
    _id
  }
}
    `;
export type ProductIdsQueryResult = Apollo.QueryResult<ProductIdsQuery, ProductIdsQueryVariables>;
export const HomePageDocument = gql`
    query HomePage {
  getCategories {
    id
    name
  }
  getProducts {
    id
    name
    thumbnail
    price
    description
  }
}
    `;
export type HomePageQueryResult = Apollo.QueryResult<HomePageQuery, HomePageQueryVariables>;
export const ProductDocument = gql`
    query Product($productId: GetByIdDTO!) {
  product(id: $productId) {
    id
    name
    author {
      _id
      email
      firstName
      lastName
    }
    images
    price
    currency
    category {
      id
      name
    }
    subcategory {
      id
      name
      childSubcategories {
        id
        name
      }
    }
  }
}
    `;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const SubcategoryPageDocument = gql`
    query SubcategoryPage($listProductByCategoryInput: ListProductsBySubcategoryDTO!, $subcategoryId: GetOneSubcategoryDTO!) {
  getProductsBySubcategory(
    listProductByCategoryInput: $listProductByCategoryInput
  ) {
    id
    name
    thumbnail
    price
    description
  }
  subcategory(subcategoryId: $subcategoryId) {
    id
    name
  }
}
    `;
export type SubcategoryPageQueryResult = Apollo.QueryResult<SubcategoryPageQuery, SubcategoryPageQueryVariables>;