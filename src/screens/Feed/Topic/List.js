import React from 'react';
import {Container, Content, View} from 'native-base';
import {FlatList} from 'react-native';

import {Navigation as navigation} from 'config/interface';
import {Title, Paragraph} from 'components/Text';
import {UserInfo, Section, Review} from 'components/List';
import Header from 'components/Header';

type Props = {
  ...navigation,
};

const Topic = (props: Props) => (
  <Container>
    <Header />
    <FlatList
      data={Array(20)
        .fill(1)
        .map((value, index) => ({key: index, value}))}
      renderItem={item => <Review />}
      keyExtractor={item => item.key.toString()}
      ListHeaderComponent={
        <Content>
          <Section marginTop="30px" marginBottom="30px">
            <Title size="20px" weight={500}>
              Possibility of cashews growing here
            </Title>
            <Paragraph>Growing cashew in the south</Paragraph>
          </Section>
          <View>
            <UserInfo />
          </View>
          <Section marginTop="20px" marginBottom="20px">
            <Title size="18px" weight={500}>
              + 3,235 Replies
            </Title>
          </Section>
        </Content>
      }
    />
  </Container>
);

export default Topic;
