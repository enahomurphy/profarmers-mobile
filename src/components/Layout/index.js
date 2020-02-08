import React from 'react';
import Header from 'components/Header';
import {Navigation as navigation} from 'config/interface';
import {Container} from 'native-base';

type Props = {
  ...navigation,
  theme: string,
  children: React.Node,
};

const CenteredLayout = (props: Props) => {
  return (
    <Container>
      <Header {...props} navigation={props.navigation} />
      {props.children}
    </Container>
  );
};

CenteredLayout.defaultProps = {
  theme: 'light',
};

export default CenteredLayout;
