import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://graphql.contentful.com/content/v1/spaces/vknh5ar9fh8p',
  headers: {
    authorization: 'Bearer DJJn6sjUPbVpX8q80aWyiKdoasuA6rsFqFzaBvOXry8',
  },
});

export default client;
