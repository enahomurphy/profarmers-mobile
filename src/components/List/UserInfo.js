import React from 'react';
import {Left, Body, Thumbnail, Text, Card, CardItem} from 'native-base';

import {Paragraph} from 'components/Text';

type Props = {
  showCount: Boolean,
};

const UserInfo = (props: Props) => {
  return (
    <Card transparent>
      <CardItem>
        <Left>
          <Thumbnail
            source={{uri: 'https://randomuser.me/api/portraits/men/97.jpg'}}
          />
          <Body>
            <Text ellipSizeMode="clip" numberOfLines={1}>
              Growing cashew in the south
            </Text>
            <Paragraph>Damilola Adegbenro</Paragraph>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Paragraph>
            Is it possible to grow cashew in the south? I just got an hectare in
            bayelsa and I wanted to plant cashew, is it vaible?
          </Paragraph>
        </Body>
      </CardItem>
    </Card>
  );
};

export default UserInfo;
