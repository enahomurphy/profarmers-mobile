import React, {Fragment, useEffect, useState} from 'react';
import {
  Header,
  Item,
  Icon,
  Input,
  Button,
  Left,
  Body,
  Title,
  Right,
} from 'native-base';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {DrawerActions} from 'react-navigation-drawer';

import {light} from 'config/color';
import {Navigation as navigation} from 'config/interface';

const StyledHeader = styled(Header)`
  background-color: ${light.base};
`;

const StyledTitle = styled(Title)`
  color: #ffffff;
`;

const StyledIcon = styled(Icon)`
  color: #ffffff;
`;

const StyledInput = styled(Input)``;

type Props = {
  ...navigation,
  searchBar: Boolean,
  placeholder?: String,
  title: String,
  onSearchChange: () => {},
};

const CustomHeader = (props: Props) => {
  const {searchBar, navigation: navigator} = props;
  const [showSearch, setShowSearch] = useState(searchBar);

  useEffect(() => {
    setShowSearch(searchBar);
  }, [searchBar]);

  const openDrawer = () => {
    navigator.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <StyledHeader searchBar={showSearch} rounded>
      <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
      {!showSearch && (
        <Fragment>
          <Left>
            <Button onPress={openDrawer} transparent>
              <StyledIcon name="menu" />
            </Button>
          </Left>
          <Body>
            <StyledTitle>{props.title}</StyledTitle>
          </Body>
        </Fragment>
      )}
      {showSearch && (
        <Item>
          <Icon name="ios-search" />
          <StyledInput
            onBlur={() => setShowSearch(false)}
            autoFocus
            onCHange={() => props.onSearchChange}
            placeholder={props.placeholder}
          />
        </Item>
      )}
      {!showSearch && (
        <Right>
          <Button onPress={() => setShowSearch(true)} transparent>
            <StyledIcon name="search" />
          </Button>
          <Button transparent>
            <StyledIcon name="more" />
          </Button>
        </Right>
      )}
    </StyledHeader>
  );
};

CustomHeader.defaultProps = {
  searchBar: false,
  placeholder: 'Search',
  onSearchChange: () => {},
};

export default CustomHeader;
