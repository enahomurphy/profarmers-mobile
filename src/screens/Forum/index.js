import React from 'react';
import {Container, Content} from 'native-base';
import {FlatList} from 'react-native';

import {Navigation as navigation} from 'config/interface';
import {Title} from 'components/Text';
import {Section} from 'components/List';
import Header from 'components/Header';
import SortIcon from 'components/Icons/Sort';
import ForumItem from 'components/List/ForumItem';

type Props = {
  ...navigation,
};

const Forum = (props: Props) => {
  return (
    <Container>
      <Header />
      <FlatList
        data={Array(20)
          .fill(1)
          .map((value, index) => ({key: index, value}))}
        renderItem={item => <ForumItem />}
        keyExtractor={item => item.key.toString()}
        ListHeaderComponent={
          <Content>
            <Section
              justify="space-between"
              align="center"
              flexDirection="row"
              marginTop="30px"
              marginBottom="30px">
              <Title>All</Title>
              <SortIcon />
            </Section>
          </Content>
        }
      />
    </Container>
  );
};

export default Forum;
