import React from 'react';
import {Container, Content, Text, Icon} from 'native-base';

const Message = props => {
  return (
    <Container>
      <Content>
        <Text>Message</Text>
      </Content>
    </Container>
  );
};

Message.navigationOptions = {
  drawerIcon: ({tintColor}) => {
    return <Icon name="chatboxes" />;
  },
};

export default Message;
