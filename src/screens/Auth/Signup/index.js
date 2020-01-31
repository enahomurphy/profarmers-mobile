import React from 'react';
import {Text, Left, View, Body} from 'native-base';
import {Title, Paragraph} from 'components/Text';

import styles, {
  ContainerWrapper,
  ContentWrapper,
  AuthButtons,
  SocialButton,
} from './styles';

const Signup = ({theme}) => {
  return (
    <ContainerWrapper>
      <ContentWrapper contentContainerStyle={styles.contentWrapper}>
        <Body style={styles.contentWrapper}>
          <View style={styles.viewWrapper}>
            <Left>
              <Title theme={theme}>Signup</Title>
              <Paragraph theme={theme}>
                Unlock opportunities, take control and connect on all things
                Agriculture
              </Paragraph>
            </Left>
            <AuthButtons>
              <SocialButton block theme={theme} bgColor="linkedinBlue">
                <Text>Linkedin</Text>
              </SocialButton>
              <SocialButton block theme={theme} bgColor="googleRed">
                <Text>Facebook</Text>
              </SocialButton>
              <SocialButton block theme={theme} bgColor="emailGren">
                <Text>Email</Text>
              </SocialButton>
            </AuthButtons>
          </View>
        </Body>
      </ContentWrapper>
    </ContainerWrapper>
  );
};

Signup.defaultProps = {
  theme: 'light',
};

export default Signup;
