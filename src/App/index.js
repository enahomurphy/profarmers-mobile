import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';

import Navigator from 'navigation/index.navigation';
import client from 'lib/apollo';

const App = () => (
  <ApolloProvider client={client}>
    <Navigator />
  </ApolloProvider>
);

export default App;
