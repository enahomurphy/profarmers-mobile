import React from 'react';
import styled from 'styled-components/native';
import {
  Left,
  Body,
  Thumbnail,
  Text,
  Card,
  CardItem,
  Icon,
  Button,
} from 'native-base';

import {Paragraph} from 'components/Text';

const StyledCardItem = styled(CardItem)`
  justify-content: flex-end;
`;

const Rewiew = () => {
  return (
    <Card transparent>
      <CardItem>
        <Left>
          <Thumbnail
            source={{uri: 'https://randomuser.me/api/portraits/men/93.jpg'}}
          />
          <Body>
            <Text ellipSizeMode="clip" numberOfLines={1}>
              Oghenefego Omokiti
            </Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Paragraph>
            I think that it’s possible to grow cashew in the south but you have
            to be extra careful
          </Paragraph>
        </Body>
      </CardItem>
      <StyledCardItem>
        <Button iconLeft transparent>
          <Icon type="FontAwesome" name="reply" />
          <Text>REPLY</Text>
        </Button>
        <Button iconLeft transparent>
          <Icon type="FontAwesome" name="share" />
          <Text> 0 REPLIES</Text>
        </Button>
      </StyledCardItem>
    </Card>
  );
};

export default Rewiew;
