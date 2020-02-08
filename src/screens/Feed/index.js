import React from 'react';
import styled from 'styled-components/native';
import {Content, View} from 'native-base';
import {FlatList} from 'react-native';

import {Navigation as navigation} from 'config/interface';
import {Title} from 'components/Text';
import FeedItem from 'components/List/FeedItem';
import Trending from './Trending';
import Layout from 'components/Layout';
import * as screens from 'config/screens';

type Props = {
  ...navigation,
};

const StyledTitle = styled(Title)`
  margin: 20px 20px;
`;

const StyledCard = styled(View)`
  height: 260px;
`;

const Feed = (props: Props) => {
  const onPress = () => {
    props.navigation.navigate(screens.TOPIC);
  };

  return (
    <Layout {...props} title="Feed" placeholder="Search Feed">
      <FlatList
        data={Array(20)
          .fill(1)
          .map((value, index) => ({key: index, value}))}
        renderItem={item => <FeedItem onPress={onPress} />}
        keyExtractor={item => item.key.toString()}
        ListHeaderComponent={
          <Content>
            <StyledCard>
              <StyledTitle>Trending Opportunity</StyledTitle>
              <Trending />
            </StyledCard>
            <View>
              <StyledTitle>Recent Disscussions</StyledTitle>
            </View>
          </Content>
        }
      />
    </Layout>
  );
};

export default Feed;
