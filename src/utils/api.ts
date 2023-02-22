import { Query } from '@/graphql/__generated__/graphql';
import { initializeApollo } from '@/hooks/withApollo';
import { QueryOptions } from '@apollo/client';
import _ from 'lodash';

interface IResponseResult {
  data: any;
}

const serverSideAPI = async (context: any, query: QueryOptions) => {
  const apolloClient = initializeApollo(context);

  let result: IResponseResult = {
    data: null
  };

  try {
    result = await apolloClient.query(query)

  } catch( err ) {
    console.error('Error occured in /categories. ', err);
    
    return {
      redirect: {
        destination: "/",
      },
    }
  }

  return result?.data;
}


export const handleBulkQueryResponse = (response: Query) => {
  const queries = _.keys(_.omit(response, ['__typename']));

  const getNodes = (key: keyof Query) => _.map(_.get(response, `${key}.edges`), (edge: any) => edge.node);

  return _.reduce(queries, (acc, key) => {

    const results = {
      [key]: getNodes(key as keyof Query)
    }

    _.assign(acc, results);
    
    return acc;
  }, {})
}

export default serverSideAPI;


