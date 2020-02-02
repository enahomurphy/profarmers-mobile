import React from 'react';
import {Container, Content, Text, Icon} from 'native-base';

const Setting = props => {
  return (
    <Container>
      <Content>
        <Text>Profile</Text>
      </Content>
    </Container>
  );
};

Setting.navigationOptions = {
  drawerIcon: ({tintColor}) => {
    return <Icon name="settings" />;
  },
};

export default Setting;
