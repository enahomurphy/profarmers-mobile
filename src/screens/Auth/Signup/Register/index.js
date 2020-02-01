import React from 'react';
import {Title, Paragraph} from 'components/Text';
import {Form, View, Button, Text, Content, Container} from 'native-base';

import Logo from 'components/Icons/Logo';
import {InputWithLabel} from 'components/Form';
import styles, {LogoView, TextView, ParagraphSigninText} from './styles';

const Register = ({theme}) => {
  return (
    <Container>
      <Content>
        <View style={styles.contentWrapper}>
          <View style={styles.viewWrapper}>
            <LogoView>
              <Logo />
            </LogoView>
            <TextView>
              <Title>Create an account</Title>
              <View style={styles.viewTextWrapper}>
                <Paragraph>Don't have an account?</Paragraph>
                <ParagraphSigninText>Sign In</ParagraphSigninText>
              </View>
            </TextView>
            <Form>
              <InputWithLabel label="Full Name" />
              <InputWithLabel label="Email" />
              <InputWithLabel label="Password" />
              <Button block style={styles.formButton}>
                <Text>SIGN UP</Text>
              </Button>
            </Form>
          </View>
        </View>
      </Content>
    </Container>
  );
};

Register.defaultProps = {
  theme: 'light',
};

export default Register;
