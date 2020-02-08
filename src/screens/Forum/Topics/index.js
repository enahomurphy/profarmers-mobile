import React from 'react';
import {Content} from 'native-base';
import {FlatList} from 'react-native';

import {Navigation as navigation} from 'config/interface';
import {Title} from 'components/Text';
import {Section, SectionFeedItem} from 'components/List';
import Layout from 'components/Layout';
import * as screens from 'config/screens';

type Props = {
  ...navigation,
};

const ForumTopic = (props: Props) => {
  const onPress = () => {
    props.navigation.navigate(screens.TOPIC);
  };

  return (
    <Layout {...props} back>
      <FlatList
        data={Array(20)
          .fill(1)
          .map((value, index) => ({key: index, value}))}
        renderItem={item => <SectionFeedItem onPress={onPress} />}
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
    </Layout>
  );
};

export default ForumTopic;
