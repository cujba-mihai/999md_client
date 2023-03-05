import { Query } from '@/graphql/__generated__/graphql';
import { initializeApollo } from '@/hooks/withApollo';
import { QueryOptions } from '@apollo/client';
import _ from 'lodash';

const serverSideAPI = async (context: any, query: QueryOptions) => {
  const apolloClient = initializeApollo(context);

  try {
    const { data } = await apolloClient.query(query)

    return data;

  } catch( err ) {
    console.error('Error occurred in /categories. ', err);

  }

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


