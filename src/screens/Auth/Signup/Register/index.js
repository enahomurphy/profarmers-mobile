import React from 'react';
import {Title, Paragraph} from 'components/Text';
import {Container, Header, Content, Form, View, Body} from 'native-base';

import Logo from 'components/Icons/Logo';
import {InputWithLabel} from 'components/Form';
import styles, {ContainerWrapper, ContentWrapper} from './styles';

const Register = ({theme}) => {
  return (
    <Container>
      <Content>
        <View>
          <Title>Create an account</Title>
          <View>
            <Paragraph>Have an account</Paragraph>
            <Paragraph>Sign In</Paragraph>
          </View>
        </View>
        <Form>
          <InputWithLabel label="Full Name" />
          <InputWithLabel label="Email" />
          <InputWithLabel label="Password" />
        </Form>
      </Content>
    </Container>
  );
};

Register.defaultProps = {
  theme: 'light',
};

export default Register;
