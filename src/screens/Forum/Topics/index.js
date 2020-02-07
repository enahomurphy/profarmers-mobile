import React from 'react';
import {Container, Content} from 'native-base';
import {FlatList} from 'react-native';

import {Navigation as navigation} from 'config/interface';
import {Title} from 'components/Text';
import {Section, SectionFeedItem} from 'components/List';
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
      renderItem={item => <SectionFeedItem />}
      keyExtractor={item => item.key.toString()}
      ListHeaderComponent={
        <Content>
          <Section marginTop="30px" marginBottom="30px">
            <Title size="20px" weight={500}>
              Possibility of cashews growing here
            </Title>
          </Section>
        </Content>
      }
    />
  </Container>
);

export default Topic;
