import ApolloClient, {InMemoryCache} from 'apollo-boost';
import {API_URL} from 'react-native-dotenv';

console.log(API_URL);
const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache().restore({}),
});

export default client;
