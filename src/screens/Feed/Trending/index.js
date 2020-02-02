import React from 'react';
import styled from 'styled-components/native';
import {
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Button,
} from 'native-base';

import {Title, Paragraph} from 'components/Text';

const StyledCard = styled(Card)`
  elevation: 3;
  margin: 0px 10px;
`;

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: 'https://randomuser.me/api/portraits/men/97.jpg',
  },
];

type Props = {
  ...navigation,
};

const Trending = (props: Props) => (
  <DeckSwiper
    dataSource={cards}
    renderItem={item => (
      <StyledCard>
        <View>
          <CardItem>
            <Left>
              <Body>
                <Text>Emmanuella togun</Text>
                <Title ellipSizeMode="clip" numberOfLines={1}>
                  Raising Capital in the Hello everyone{' '}
                </Title>
                <Paragraph>
                  Hello everyone, I’m trying to raise capital for my new farm...
                </Paragraph>
              </Body>
              <Thumbnail square large source={{uri: item.image}} />
            </Left>
          </CardItem>
        </View>
        <CardItem>
          <Button transparent>
            <Text>VIEW</Text>
          </Button>
          <Button transparent>
            <Text>REPLY</Text>
          </Button>
        </CardItem>
      </StyledCard>
    )}
  />
);

export default Trending;
