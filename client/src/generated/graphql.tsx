import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Animal = {
  __typename?: 'Animal';
  id: Scalars['ID'];
  image: Scalars['String'];
  title: Scalars['String'];
  rating?: Maybe<Scalars['Float']>;
  price: Scalars['String'];
  description: Array<Scalars['String']>;
  stock: Scalars['Int'];
  onSale?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  category: Category;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  image: Scalars['String'];
  category: Scalars['String'];
  slug: Scalars['String'];
  animals?: Maybe<Array<Animal>>;
};

export type InputAnimal = {
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  title: Scalars['String'];
  rating?: Maybe<Scalars['Float']>;
  price: Scalars['String'];
  description: Array<Scalars['String']>;
  stock: Scalars['Float'];
  onSale?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  category: Scalars['String'];
};

export type MainCard = {
  __typename?: 'MainCard';
  title: Scalars['String'];
  image: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAnimal: Animal;
  removeAnimal: Scalars['Boolean'];
  updateAnimal: Animal;
};


export type MutationAddAnimalArgs = {
  options: InputAnimal;
};


export type MutationRemoveAnimalArgs = {
  ID: Scalars['String'];
};


export type MutationUpdateAnimalArgs = {
  options: UpdateAnimalInput;
};

export type Query = {
  __typename?: 'Query';
  /** List of categories */
  categories: Array<Category>;
  singleCategory: Category;
  /** Get main cards of the landing page */
  mainCards: Array<MainCard>;
  animals: Array<Animal>;
  animal: Animal;
};


export type QuerySingleCategoryArgs = {
  slug: Scalars['String'];
};


export type QueryAnimalArgs = {
  slug: Scalars['String'];
};

export type UpdateAnimalInput = {
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['String']>;
  description?: Maybe<Array<Scalars['String']>>;
  stock?: Maybe<Scalars['Float']>;
  slug?: Maybe<Scalars['String']>;
  onSale?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Scalars['String']>;
};

export type AnimalQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type AnimalQuery = (
  { __typename?: 'Query' }
  & { animal: (
    { __typename?: 'Animal' }
    & Pick<Animal, 'title' | 'description' | 'stock' | 'price' | 'image'>
  ) }
);

export type AnimalsQueryVariables = Exact<{ [key: string]: never; }>;


export type AnimalsQuery = (
  { __typename?: 'Query' }
  & { animals: Array<(
    { __typename?: 'Animal' }
    & Pick<Animal, 'id' | 'title' | 'image' | 'price' | 'slug' | 'description'>
  )> }
);

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = (
  { __typename?: 'Query' }
  & { categories: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'category' | 'slug' | 'image'>
  )> }
);

export type CategoryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type CategoryQuery = (
  { __typename?: 'Query' }
  & { singleCategory: (
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'image' | 'category'>
    & { animals?: Maybe<Array<(
      { __typename?: 'Animal' }
      & Pick<Animal, 'title' | 'image' | 'slug' | 'price'>
    )>> }
  ) }
);

export type MainCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type MainCardsQuery = (
  { __typename?: 'Query' }
  & { mainCards: Array<(
    { __typename?: 'MainCard' }
    & Pick<MainCard, 'title' | 'image'>
  )> }
);


export const AnimalDocument = gql`
    query Animal($slug: String!) {
  animal(slug: $slug) {
    title
    description
    stock
    price
    image
  }
}
    `;

/**
 * __useAnimalQuery__
 *
 * To run a query within a React component, call `useAnimalQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimalQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useAnimalQuery(baseOptions: Apollo.QueryHookOptions<AnimalQuery, AnimalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnimalQuery, AnimalQueryVariables>(AnimalDocument, options);
      }
export function useAnimalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnimalQuery, AnimalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnimalQuery, AnimalQueryVariables>(AnimalDocument, options);
        }
export type AnimalQueryHookResult = ReturnType<typeof useAnimalQuery>;
export type AnimalLazyQueryHookResult = ReturnType<typeof useAnimalLazyQuery>;
export type AnimalQueryResult = Apollo.QueryResult<AnimalQuery, AnimalQueryVariables>;
export const AnimalsDocument = gql`
    query Animals {
  animals {
    id
    title
    image
    price
    slug
    description
  }
}
    `;

/**
 * __useAnimalsQuery__
 *
 * To run a query within a React component, call `useAnimalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimalsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAnimalsQuery(baseOptions?: Apollo.QueryHookOptions<AnimalsQuery, AnimalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnimalsQuery, AnimalsQueryVariables>(AnimalsDocument, options);
      }
export function useAnimalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnimalsQuery, AnimalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnimalsQuery, AnimalsQueryVariables>(AnimalsDocument, options);
        }
export type AnimalsQueryHookResult = ReturnType<typeof useAnimalsQuery>;
export type AnimalsLazyQueryHookResult = ReturnType<typeof useAnimalsLazyQuery>;
export type AnimalsQueryResult = Apollo.QueryResult<AnimalsQuery, AnimalsQueryVariables>;
export const CategoriesDocument = gql`
    query Categories {
  categories {
    id
    category
    slug
    image
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const CategoryDocument = gql`
    query Category($slug: String!) {
  singleCategory(slug: $slug) {
    id
    image
    category
    animals {
      title
      image
      slug
      price
    }
  }
}
    `;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const MainCardsDocument = gql`
    query MainCards {
  mainCards {
    title
    image
  }
}
    `;

/**
 * __useMainCardsQuery__
 *
 * To run a query within a React component, call `useMainCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMainCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMainCardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMainCardsQuery(baseOptions?: Apollo.QueryHookOptions<MainCardsQuery, MainCardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MainCardsQuery, MainCardsQueryVariables>(MainCardsDocument, options);
      }
export function useMainCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MainCardsQuery, MainCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MainCardsQuery, MainCardsQueryVariables>(MainCardsDocument, options);
        }
export type MainCardsQueryHookResult = ReturnType<typeof useMainCardsQuery>;
export type MainCardsLazyQueryHookResult = ReturnType<typeof useMainCardsLazyQuery>;
export type MainCardsQueryResult = Apollo.QueryResult<MainCardsQuery, MainCardsQueryVariables>;