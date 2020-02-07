import React from 'react';
import styled from 'styled-components/native';
import {ListItem, View, Body, Thumbnail, Text} from 'native-base';

import {Paragraph} from 'components/Text';

type Props = {
  showCount: Boolean,
  showName: Boolean,
  onPress: () => {},
};

const StyledBody = styled(Body)`
  border-color: #ffffff;
  margin-bottom: 10px;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  margin-left: 20px;
`;

const StyledListItem = styled(ListItem)`
  align-items: center;
  padding: 10px 0px;
`;

const FeedItem = (props: Props) => {
  return (
    <StyledListItem avatar onPress={props.onPress}>
      <View>
        <Thumbnail
          source={{uri: 'https://randomuser.me/api/portraits/men/97.jpg'}}
        />
      </View>
      <StyledBody>
        {props.showName && (
          <Text ellipSizeMode="clip" numberOfLines={1}>
            Growing cashew in the south
          </Text>
        )}
        <Paragraph>Damilola Adegbenro</Paragraph>
        {props.showCount && <Paragraph>+340 Connects</Paragraph>}
      </StyledBody>
    </StyledListItem>
  );
};

FeedItem.defaultProps = {
  showName: true,
  onPress: () => {},
};

export default FeedItem;
