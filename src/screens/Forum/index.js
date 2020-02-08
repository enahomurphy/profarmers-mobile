import React from 'react';
import {Content, Icon} from 'native-base';
import {FlatList} from 'react-native';

import {Navigation as navigation} from 'config/interface';
import {Title} from 'components/Text';
import {Section} from 'components/List';
import SortIcon from 'components/Icons/Sort';
import ForumItem from 'components/List/ForumItem';
import Layout from 'components/Layout';
import * as screens from 'config/screens';

type Props = {
  ...navigation,
};

const Forum = (props: Props) => {
  const onPress = () => {
    props.navigation.navigate(screens.FORUM_TOPICS);
  };

  return (
    <Layout {...props}>
      <FlatList
        data={Array(20)
          .fill(1)
          .map((value, index) => ({key: index, value}))}
        renderItem={item => <ForumItem onPress={onPress} />}
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
    </Layout>
  );
};

Forum.navigationOptions = {
  drawerIcon: ({tintColor}) => {
    return <Icon name="chatboxes" />;
  },
  title: 'Fourm',
};

export default Forum;
