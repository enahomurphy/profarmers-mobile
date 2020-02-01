import React from 'react';
import {Text} from 'native-base';
import {Paragraph} from 'components/Text';

import AuthLayout from '../../AuthLayout';
import {AuthButtons, SocialButton} from './styles';

type Props = {
  theme: String,
};

const Complete = (props: Props) => {
  return (
    <AuthLayout
      title="JOIN US"
      description={
        <Paragraph align="center" theme={props.heme}>
          Unlock opportunities, take control and connect on all things
          Agriculture
        </Paragraph>
      }>
      <AuthButtons>
        <SocialButton block theme={props.theme} bgColor="linkedinBlue">
          <Text>Linkedin</Text>
        </SocialButton>
        <SocialButton block theme={props.theme} bgColor="googleRed">
          <Text>Facebook</Text>
        </SocialButton>
        <SocialButton block theme={props.theme} bgColor="emailGren">
          <Text>Email</Text>
        </SocialButton>
      </AuthButtons>
    </AuthLayout>
  );
};

Complete.defaultProps = {
  theme: 'light',
};

export default Complete;
