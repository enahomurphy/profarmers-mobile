import React from 'react';
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem,
  StyleProvider,
} from 'native-base';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import getTheme from 'config/native-base-theme/components';
import light from 'config/native-base-theme/variables/light';

class HomeScreen extends React.Component {
  render() {
    return (
      <StyleProvider style={getTheme(light)}>
        <Container>
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>HomeScreens</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            <Card>
              <CardItem>
                <Body>
                  <Text>Chat App to talk some awesome people!</Text>
                </Body>
              </CardItem>
            </Card>
            <Button
              full
              rounded
              dark
              style={{marginTop: 10}}
              onPress={() => this.props.navigation.navigate('Chat')}>
              <Text>Chat With People</Text>
            </Button>
            <Button
              full
              rounded
              primary
              style={{marginTop: 10}}
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Text>Goto Profiles</Text>
            </Button>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

const RootNavigator = createDrawerNavigator(
  {
    initialRouteName: 'Home',
    header: 'none',
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(RootNavigator);
