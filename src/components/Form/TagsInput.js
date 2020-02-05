import React, {useState} from 'react';
import {View} from 'native-base';

import Input from './InputWithLabel';
import Tags from './Tags';

const TagsInput = props => {
  const [value, setValue] = useState('');
  const [tags, setTag] = useState([]);

  const delimeter = ',';
  const hasDelimeter = value.includes(delimeter);

  if (hasDelimeter && /[A-Za-z]/gim.test(value)) {
    const newtag = value.replace(delimeter, '').toLowerCase();
    setTag([...tags, newtag]);
  }

  if (hasDelimeter) {
    setValue('');
  }

  const deleteTag = position => {
    setTag(tags.filter((tagValue, index) => index !== position));
  };

  return (
    <View>
      <Input value={value} onChangeText={setValue} />
      <Tags tags={tags} deleteTag={deleteTag} />
    </View>
  );
};

export default TagsInput;
