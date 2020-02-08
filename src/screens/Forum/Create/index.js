import React from 'react';
import {Content, Form, Text, Button} from 'native-base';

import {Navigation as navigation} from 'config/interface';
import {Title, Paragraph} from 'components/Text';
import {Section} from 'components/List';
import {InputWithLabel, TextArea, TagsInput} from 'components/Form';
import Layout from 'components/Layout';

type Props = {
  ...navigation,
};

const CreateForum = (props: Props) => {
  return (
    <Layout {...props}>
      <Content>
        <Section marginTop="30px" marginBottom="30px">
          <Title>Create New Forum</Title>
          <Paragraph>
            Create a new forum where others can add topics, you must also add a
            topic
          </Paragraph>
        </Section>
        <Section>
          <Form>
            <InputWithLabel secureTextEntry label="Name of Forum" />
            <TextArea label="Forum Details" rowSpan={5} />
            <InputWithLabel secureTextEntry label="Topic" />
            <TextArea label="Topic Details" rowSpan={5} />
            <TagsInput label="Topic Tags" last />
            <Button block>
              <Text>CREATE</Text>
            </Button>
          </Form>
        </Section>
      </Content>
    </Layout>
  );
};

export default CreateForum;
