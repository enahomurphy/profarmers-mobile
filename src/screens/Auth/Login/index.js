import React from 'react';
import {Paragraph} from 'components/Text';
import {Form, Button, Text} from 'native-base';

import AuthLayout from '../AuthLayout';
import {InputWithLabel} from 'components/Form';
import {navigation} from 'config/interface';
import styles, {ParagraphSigninText} from '../layout.styles';

type Props = {
  ...navigation,
  theme: string,
};

const Login = (props: Props) => {
  return (
    <AuthLayout
      title="Welcome Back!"
      description={
        <React.Fragment>
          <Paragraph>Don't have an account?</Paragraph>
          <ParagraphSigninText>Sign In</ParagraphSigninText>
        </React.Fragment>
      }>
      <Form>
        <InputWithLabel
          keyboardType="email-address"
          autoCompleteType="email"
          label="email"
        />
        <InputWithLabel
          secureTextEntry
          autoCompleteType="password"
          label="password"
        />
        <Button block style={styles.formButton}>
          <Text>Complete</Text>
        </Button>
      </Form>
    </AuthLayout>
  );
};

Login.defaultProps = {
  theme: 'light',
};

export default Login;
