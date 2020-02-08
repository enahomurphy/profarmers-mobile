import React, {Fragment, useState} from 'react';
import {Content, View, Form, Text, Radio, Button} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Navigation as navigation} from 'config/interface';
import {Title, Paragraph} from 'components/Text';
import {Section} from 'components/List';
import {InputWithLabel, TextArea, TagsInput, Picker} from 'components/Form';
import Layout from 'components/Layout';

type Props = {
  ...navigation,
};

const styles = StyleSheet.create({
  radioView: {
    flexDirection: 'row',
    paddingBottom: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  radioText: {
    marginLeft: 20,
  },
});

const Topic = (props: Props) => {
  const [addFourm, setAddForum] = useState(false);
  return (
    <Layout {...props}>
      <Content>
        <Section marginTop="30px" marginBottom="30px">
          <Title>Add Topic</Title>
          <Paragraph>
            Start a disscussion to get other’s opinions and also get answers
          </Paragraph>
        </Section>
        <Section>
          <Form>
            <View style={styles.radioView}>
              <TouchableOpacity
                onPress={() => setAddForum(true)}
                style={styles.radioView}>
                <Radio
                  color={'#f0ad4e'}
                  selectedColor={'#5cb85c'}
                  selected={addFourm}
                />
                <Text style={styles.radioText}>Add Forum</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setAddForum(false)}
                style={styles.radioView}>
                <Radio
                  color={'#f0ad4e'}
                  selectedColor={'#5cb85c'}
                  selected={!addFourm}
                />
                <Text style={styles.radioText}>Select Forum</Text>
              </TouchableOpacity>
            </View>
            {addFourm ? (
              <Fragment>
                <InputWithLabel secureTextEntry label="Name of Forum" />
                <TextArea label="Forum Details" rowSpan={5} />
              </Fragment>
            ) : (
              <Picker
                options={[{label: 'hello', value: 'text'}]}
                placeholder="Select Forum"
              />
            )}
            <InputWithLabel secureTextEntry label="Topic Title" />
            <TextArea label="Topic Details" rowSpan={5} />
            <TagsInput label="Tags" end />
            <Button block>
              <Text>POST</Text>
            </Button>
          </Form>
        </Section>
      </Content>
    </Layout>
  );
};

export default Topic;
