import React from 'react';
import {Container, Content, Form, Text, Button} from 'native-base';

import {Navigation as navigation} from 'config/interface';
import {Title, Paragraph} from 'components/Text';
import {Section} from 'components/List';
import Header from 'components/Header';
import {TextArea} from 'components/Form';

type Props = {
  ...navigation,
};

const Topic = (props: Props) => {
  return (
    <Container>
      <Header />
      <Content>
        <Section marginTop="30px" marginBottom="30px">
          <Title>Add Reply</Title>
          <Paragraph>Type a reply to contribute to this discussion </Paragraph>
        </Section>
        <Section>
          <Form>
            <TextArea label="Topic Details" rowSpan={5} />
            <Button block>
              <Text>POST</Text>
            </Button>
          </Form>
        </Section>
      </Content>
    </Container>
  );
};

export default Topic;
