import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {StyleProvider} from 'native-base';

import getTheme from 'config/native-base-theme/components';
import light from 'config/native-base-theme/variables/light';
import Navigator from 'navigation/index.navigation';
import client from 'lib/apollo';

const App = () => (
  <ApolloProvider client={client}>
    <StyleProvider style={getTheme(light)}>
      <Navigator />
    </StyleProvider>
  </ApolloProvider>
);

export default App;
