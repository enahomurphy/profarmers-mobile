import ApolloClient, {InMemoryCache} from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://192.168.8.52:4000/graphql',
  cache: new InMemoryCache().restore({}),
});

export default client;
