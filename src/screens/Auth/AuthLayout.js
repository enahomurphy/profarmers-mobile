import React from 'react';
import {Title} from 'components/Text';
import {View, Content, Container} from 'native-base';

import Logo from 'components/Icons/Logo';
import styles, {LogoView, TextView} from './layout.styles';

type Props = {
  theme: string,
  children: React.Node,
  title: string,
  description: React.Node,
};

const AuthLayout = (props: Props) => {
  return (
    <Container>
      <Content>
        <View style={styles.contentWrapper}>
          <View style={styles.viewWrapper}>
            <LogoView>
              <Logo />
            </LogoView>
            <TextView>
              <Title style={styles.title}>{props.title}</Title>
              <View style={styles.viewTextWrapper}>{props.description}</View>
            </TextView>
            {props.children}
          </View>
        </View>
      </Content>
    </Container>
  );
};

AuthLayout.defaultProps = {
  theme: 'light',
};

export default AuthLayout;
