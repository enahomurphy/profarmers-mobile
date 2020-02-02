import React from 'react';
import {Container, Content, Text, Icon} from 'native-base';

const Profile = props => {
  return (
    <Container>
      <Content>
        <Text>Profile</Text>
      </Content>
    </Container>
  );
};

Profile.navigationOptions = {
  drawerIcon: ({tintColor}) => {
    return <Icon name="person" />;
  },
};

export default Profile;
