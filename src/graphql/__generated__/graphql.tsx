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
  _id: Scalars['String'];
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
  _id: Scalars['String'];
};

export type GetCategoriesDto = {
  __typename?: 'GetCategoriesDTO';
  _id: Scalars['String'];
  name: Scalars['String'];
  subcategories: Array<SubcategoriesDto>;
};

export type GetOneSubcategoryDto = {
  _id: Scalars['String'];
};

export type GetProductsDto = {
  __typename?: 'GetProductsDTO';
  _id: Scalars['String'];
  author: GetUserDto;
  category: GetCategoriesDto;
  currency: Scalars['String'];
  description: Scalars['String'];
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

export type GetUserDto = {
  __typename?: 'GetUserDTO';
  _id: Scalars['String'];
  access_token?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  products: Array<GetProductsDto>;
  refresh_token?: Maybe<Scalars['String']>;
};

export type ListProductsByCategoryDto = {
  categoryId: Scalars['ID'];
  limit?: Scalars['Float'];
  offset?: Scalars['Float'];
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


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateSubcategoryArgs = {
  createSubcategoryInput: CreateSubcategoryInput;
};


export type MutationRemoveProductArgs = {
  _id: GetByIdDto;
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
  author: Scalars['String'] | User;
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
  getCategoryById: Category;
  getCategoryByName: Category;
  getCategoryByNameAndSubcategory: Category;
  getProducts: Array<GetProductsDto>;
  getProductsByCategory: Array<GetProductsDto>;
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


export type QueryGetCategoryByIdArgs = {
  _id: Scalars['String'];
};


export type QueryGetCategoryByNameArgs = {
  categoryName: Scalars['String'];
};


export type QueryGetCategoryByNameAndSubcategoryArgs = {
  categoryName: Scalars['String'];
  subcategoryName: Scalars['String'];
};


export type QueryGetProductsByCategoryArgs = {
  listProductByCategoryInput: ListProductsByCategoryDto;
};


export type QueryGetProductsBySubcategoryArgs = {
  listProductByCategoryInput: ListProductsBySubcategoryDto;
};


export type QueryProductArgs = {
  _id: GetByIdDto;
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
  _id: Scalars['String'];
  childSubcategories?: Maybe<Array<SubcategoriesDto>>;
  name?: Maybe<Scalars['String']>;
};

export type SubcategoriesInputDto = {
  _id: Scalars['String'];
  childSubcategories?: InputMaybe<Array<SubcategoriesInputDto>>;
  name?: InputMaybe<Scalars['String']>;
};

export type Subcategory = {
  __typename?: 'Subcategory';
  _id: Scalars['String'];
  childSubcategories?: Maybe<Array<Subcategory>>;
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
  _id: Scalars['String'];
  categoryId?: InputMaybe<Scalars['String']>;
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

export type CategoryPageQueryVariables = Exact<{
  categoryName: Scalars['String'];
}>;


export type CategoryPageQuery = { __typename?: 'Query', getCategoryByName: { __typename?: 'Category', _id: string, name: string, subcategories?: Array<{ __typename?: 'Subcategory', _id: string, name: string, childSubcategories?: Array<{ __typename?: 'Subcategory', _id: string, name: string }> | null }> | null }, getProducts: Array<{ __typename?: 'GetProductsDTO', _id: string, thumbnail: string, name: string, price: number, currency: string, description: string }> };

export type GetCategoriesOnlyQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesOnlyQuery = { __typename?: 'Query', getCategories: Array<{ __typename?: 'Category', _id: string, name: string }> };

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', getCategories: Array<{ __typename?: 'Category', _id: string, name: string, subcategories?: Array<{ __typename?: 'Subcategory', _id: string, name: string, childSubcategories?: Array<{ __typename?: 'Subcategory', _id: string, name: string }> | null }> | null }> };

export type GetCategoryByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetCategoryByIdQuery = { __typename?: 'Query', getCategoryById: { __typename?: 'Category', _id: string, name: string, subcategories?: Array<{ __typename?: 'Subcategory', _id: string, name: string }> | null } };

export type GetCategoryByNameAndSubcategoryQueryVariables = Exact<{
  categoryName: Scalars['String'];
  subcategoryName: Scalars['String'];
}>;


export type GetCategoryByNameAndSubcategoryQuery = { __typename?: 'Query', getCategoryByNameAndSubcategory: { __typename?: 'Category', _id: string, name: string, subcategories?: Array<{ __typename?: 'Subcategory', childSubcategories?: Array<{ __typename?: 'Subcategory', _id: string, name: string }> | null }> | null } };

export type GetProductsByCategoryQueryVariables = Exact<{
  listProductByCategoryInput: ListProductsByCategoryDto;
}>;


export type GetProductsByCategoryQuery = { __typename?: 'Query', getProductsByCategory: Array<{ __typename?: 'GetProductsDTO', _id: string, name: string, currency: string, price: number, thumbnail: string }> };

export type GetProductsBySubcategoryQueryVariables = Exact<{
  listProductByCategoryInput: ListProductsBySubcategoryDto;
}>;


export type GetProductsBySubcategoryQuery = { __typename?: 'Query', getProductsBySubcategory: Array<{ __typename?: 'GetProductsDTO', _id: string, currency: string, description: string, name: string, price: number, thumbnail: string }> };

export type ProductIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductIdsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', _id: string }> };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', getCategories: Array<{ __typename?: 'Category', _id: string, name: string }>, getProducts: Array<{ __typename?: 'GetProductsDTO', _id: string, name: string, thumbnail: string, price: number, description: string, currency: string }> };

export type ProductQueryVariables = Exact<{
  productId: GetByIdDto;
}>;


export type ProductQuery = { __typename?: 'Query', product: { __typename?: 'GetProductsDTO', _id: string, name: string, images: Array<string>, price: number, currency: string, author: { __typename?: 'GetUserDTO', _id: string, email: string, firstName: string, lastName: string }, category: { __typename?: 'GetCategoriesDTO', _id: string, name: string }, subcategory: { __typename?: 'SubcategoriesDTO', _id: string, name?: string | null, childSubcategories?: Array<{ __typename?: 'SubcategoriesDTO', _id: string, name?: string | null }> | null } } };

export type SubcategoryPageQueryVariables = Exact<{
  categoryName: Scalars['String'];
  subcategoryName: Scalars['String'];
}>;


export type SubcategoryPageQuery = { __typename?: 'Query', getCategoryByNameAndSubcategory: { __typename?: 'Category', _id: string, name: string, subcategories?: Array<{ __typename?: 'Subcategory', childSubcategories?: Array<{ __typename?: 'Subcategory', _id: string, name: string }> | null }> | null } };


export const CategoryPageDocument = gql`
    query CategoryPage($categoryName: String!) {
  getCategoryByName(categoryName: $categoryName) {
    _id
    name
    subcategories {
      _id
      name
      childSubcategories {
        _id
        name
      }
    }
  }
  getProducts {
    _id
    thumbnail
    name
    price
    currency
    description
  }
}
    `;
export type CategoryPageQueryResult = Apollo.QueryResult<CategoryPageQuery, CategoryPageQueryVariables>;
export const GetCategoriesOnlyDocument = gql`
    query GetCategoriesOnly {
  getCategories {
    _id
    name
  }
}
    `;
export type GetCategoriesOnlyQueryResult = Apollo.QueryResult<GetCategoriesOnlyQuery, GetCategoriesOnlyQueryVariables>;
export const GetAllCategoriesDocument = gql`
    query GetAllCategories {
  getCategories {
    _id
    name
    subcategories {
      _id
      name
      childSubcategories {
        _id
        name
      }
    }
  }
}
    `;
export type GetAllCategoriesQueryResult = Apollo.QueryResult<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>;
export const GetCategoryByIdDocument = gql`
    query GetCategoryById($id: String!) {
  getCategoryById(_id: $id) {
    _id
    name
    subcategories {
      _id
      name
    }
  }
}
    `;
export type GetCategoryByIdQueryResult = Apollo.QueryResult<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>;
export const GetCategoryByNameAndSubcategoryDocument = gql`
    query GetCategoryByNameAndSubcategory($categoryName: String!, $subcategoryName: String!) {
  getCategoryByNameAndSubcategory(
    categoryName: $categoryName
    subcategoryName: $subcategoryName
  ) {
    _id
    name
    subcategories {
      childSubcategories {
        _id
        name
      }
    }
  }
}
    `;
export type GetCategoryByNameAndSubcategoryQueryResult = Apollo.QueryResult<GetCategoryByNameAndSubcategoryQuery, GetCategoryByNameAndSubcategoryQueryVariables>;
export const GetProductsByCategoryDocument = gql`
    query GetProductsByCategory($listProductByCategoryInput: ListProductsByCategoryDTO!) {
  getProductsByCategory(listProductByCategoryInput: $listProductByCategoryInput) {
    _id
    name
    currency
    price
    thumbnail
  }
}
    `;
export type GetProductsByCategoryQueryResult = Apollo.QueryResult<GetProductsByCategoryQuery, GetProductsByCategoryQueryVariables>;
export const GetProductsBySubcategoryDocument = gql`
    query GetProductsBySubcategory($listProductByCategoryInput: ListProductsBySubcategoryDTO!) {
  getProductsBySubcategory(
    listProductByCategoryInput: $listProductByCategoryInput
  ) {
    _id
    currency
    description
    name
    price
    thumbnail
  }
}
    `;
export type GetProductsBySubcategoryQueryResult = Apollo.QueryResult<GetProductsBySubcategoryQuery, GetProductsBySubcategoryQueryVariables>;
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
    _id
    name
  }
  getProducts {
    _id
    name
    thumbnail
    price
    description
    currency
  }
}
    `;
export type HomePageQueryResult = Apollo.QueryResult<HomePageQuery, HomePageQueryVariables>;
export const ProductDocument = gql`
    query Product($productId: GetByIdDTO!) {
  product(_id: $productId) {
    _id
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
      _id
      name
    }
    subcategory {
      _id
      name
      childSubcategories {
        _id
        name
      }
    }
  }
}
    `;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const SubcategoryPageDocument = gql`
    query SubcategoryPage($categoryName: String!, $subcategoryName: String!) {
  getCategoryByNameAndSubcategory(
    categoryName: $categoryName
    subcategoryName: $subcategoryName
  ) {
    _id
    name
    subcategories {
      childSubcategories {
        _id
        name
      }
    }
  }
}
    `;
export type SubcategoryPageQueryResult = Apollo.QueryResult<SubcategoryPageQuery, SubcategoryPageQueryVariables>;