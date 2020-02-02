import React from 'react';
import styled from 'styled-components/native';
import {ListItem, Left, Body, Thumbnail, Text} from 'native-base';

import {Paragraph} from 'components/Text';

type Props = {
  showCount: Boolean,
};

const StyledBody = styled(Body)`
  border-color: #ffffff;
  margin-bottom: 10px;
`;

const FeedItem = (props: Props) => {
  return (
    <ListItem avatar onPress={() => console.log('I was pressed')}>
      <Left>
        <Thumbnail
          source={{uri: 'https://randomuser.me/api/portraits/men/97.jpg'}}
        />
      </Left>
      <StyledBody>
        <Text ellipSizeMode="clip" numberOfLines={1}>
          Growing cashew in the south
        </Text>
        <Paragraph>Damilola Adegbenro</Paragraph>
        {props.showCount && <Paragraph>+340 Connects</Paragraph>}
      </StyledBody>
    </ListItem>
  );
};

export default FeedItem;
