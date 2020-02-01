import React from 'react';
import {Paragraph} from 'components/Text';
import {Form, Button, Text} from 'native-base';

import AuthLayout from '../../AuthLayout';
import {InputWithLabel} from 'components/Form';
import {ParagraphSigninText} from './styles';
import styles from '../../layout.styles';

type Props = {
  theme: string,
};

const Register = (props: Props) => {
  return (
    <AuthLayout
      title="Create An Account"
      description={
        <React.Fragment>
          <Paragraph>Don't have an account?</Paragraph>
          <ParagraphSigninText>Sign In</ParagraphSigninText>
        </React.Fragment>
      }>
      <Form>
        <InputWithLabel label="Full Name" />
        <InputWithLabel label="Email" />
        <InputWithLabel label="Password" />
        <Button block style={styles.formButton}>
          <Text>SIGN UP</Text>
        </Button>
      </Form>
    </AuthLayout>
  );
};

Register.defaultProps = {
  theme: 'light',
};

export default Register;
