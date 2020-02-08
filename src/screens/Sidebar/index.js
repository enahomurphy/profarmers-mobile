import React from 'react';
import {DrawerItems} from 'react-navigation-drawer';
import {Container, Content, Thumbnail} from 'native-base';

import * as screens from 'config/screens';
import {Title, Paragraph} from 'components/Text';
import {StyledView, ImageStyledView} from './styles';

const drawerScreens = new Set([
  screens.PROFILE,
  screens.MESSAGE,
  screens.SETTING,
  screens.LIST_FORUM,
  screens.DISCUSSION,
]);

const Sidebar = props => {
  const items = props.items.filter(({key}) => drawerScreens.has(key));
  const defaultProps = {...props, items};
  return (
    <Container>
      <Content>
        <StyledView>
          <ImageStyledView>
            <Thumbnail
              source={{uri: 'https://randomuser.me/api/portraits/men/97.jpg'}}
            />
          </ImageStyledView>
          <Title>Maryam Yusuf</Title>
          <Paragraph>maryamyusuf1@gmail.com</Paragraph>
        </StyledView>
        <DrawerItems {...defaultProps} />
      </Content>
    </Container>
  );
};

export default Sidebar;
