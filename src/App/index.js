import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {StyleProvider} from 'native-base';

import getTheme from 'config/native-base-theme/components';
import material from 'config/native-base-theme/variables/material';
import Navigator from 'navigation/index.navigation';
import client from 'lib/apollo';

const App = () => (
  <ApolloProvider client={client}>
    <StyleProvider style={getTheme(material)}>
      <Navigator />
    </StyleProvider>
  </ApolloProvider>
);

export default App;
