import React from 'react';
import {View, Content, Container} from 'native-base';

import styles from './styles';

type Props = {
  theme: string,
  children: React.Node,
};

const CenteredLayout = (props: Props) => {
  return (
    <Container>
      <Content contentContainerStyle={styles.content}>
        <View style={styles.contentWrapper}>{props.children}</View>
      </Content>
    </Container>
  );
};

CenteredLayout.defaultProps = {
  theme: 'light',
};

export default CenteredLayout;
