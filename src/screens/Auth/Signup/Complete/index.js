import React from 'react';
import {Paragraph} from 'components/Text';
import {Form, Button, Text} from 'native-base';

import AuthLayout from '../../AuthLayout';
import {InputWithLabel, TextArea, Picker} from 'components/Form';
import {navigation} from 'config/interface';
import styles from '../../layout.styles';

type Props = {
  ...navigation,
  theme: string,
};

const Complete = (props: Props) => {
  return (
    <AuthLayout
      title="Complete Profile"
      description={
        <Paragraph>
          Thank you for signing up please complete your profile to continue
        </Paragraph>
      }>
      <Form>
        <InputWithLabel label="phone" />
        <InputWithLabel label="occupation" />
        <TextArea rowSpan={5} />
        <Picker
          options={[{label: 'hello', value: 'text'}]}
          placeholder="what best describes you?"
        />
        <Button block style={styles.formButton}>
          <Text>Complete</Text>
        </Button>
      </Form>
    </AuthLayout>
  );
};

Complete.defaultProps = {
  theme: 'light',
};

export default Complete;
