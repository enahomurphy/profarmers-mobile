import React from 'react';
import {Icon, Text} from 'native-base';
import {TouchableHighlight, View} from 'react-native';

import styles from './styles';

type TagsProps = {
  deleteTag?: () => {},
  tags: Array<String>,
};

const Tags = (props: TagsProps) => {
  return (
    <View style={styles.tagsView}>
      {props.tags.map((item, count) => {
        return (
          <View style={styles.tag} key={count}>
            <Text style={styles.tagText}>{item}</Text>
            {props.deleteTag && (
              <TouchableHighlight onPress={() => props.deleteTag(count)}>
                <Icon style={styles.tagIcon} name="close" />
              </TouchableHighlight>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default Tags;
